(function(e) {
    var n = {};

    function t(o) {
        if (n[o]) {
            return n[o].exports
        }
        var i = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        e[o].call(i.exports, i, i.exports, t);
        i.l = !0;
        return i.exports
    }
    t.m = e;
    t.c = n;
    t.d = function(e, n, o) {
        if (!t.o(e, n)) {
            Object.defineProperty(e, n, {
                enumerable: !0,
                get: o
            })
        }
    };
    t.r = function(e) {
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            Object.defineProperty(e, Symbol.toStringTag, {
                value: 'Module'
            })
        }
        Object.defineProperty(e, '__esModule', {
            value: !0
        })
    };
    t.t = function(e, n) {
        if (n & 1) e = t(e);
        if (n & 8) return e;
        if (n & 4 && typeof e === 'object' && e && e.__esModule) return e;
        var o = Object.create(null);
        t.r(o);
        Object.defineProperty(o, 'default', {
            enumerable: !0,
            value: e
        });
        if (n & 2 && typeof e != 'string')
            for (var i in e) t.d(o, i, function(t) {
                return e[t]
            }.bind(null, i));
        return o
    };
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e['default']
        } : function() {
            return e
        };
        t.d(n, 'a', n);
        return n
    };
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    };
    t.p = '';
    return t(t.s = 715)
})({
    0: function(e, t, n) {
        'use strict';
        n.r(t);
        var o = n(1),
            i = n.n(o),
            a = n(8),
            r = n.n(a),
            l = n(97),
            s = n.n(l)
    },
    1: function(e, t, n) {
        var o, a, i, r, l, s = [].slice;
        a = n(2)['default'], o = '2015-02-17', a.wistia || (a.wistia = o, a.extend = function() {
            var e, t, n;
            return e = arguments[0], t = 2 <= arguments.length ? s.call(arguments, 1) : [], t.length || (t = [e], e = a), (n = a.obj).merge.apply(n, [e].concat(s.call(t))), e
        }, a.proto = function(e) {
            return null == e && (e = window.location.href), a.url.proto(e)
        }, a.data = function(e, t) {
            return a.obj.isArray(e) || (e = e.split('.')), null != t && a.obj.set(a, ['_data'].concat(e), t), a.obj.get(a, ['_data'].concat(e))
        }, a.removeData = function(e) {
            return a.obj.isArray(e) || (e = e.split('.')), a.obj.unset(a, ['_data'].concat(e))
        }, a.asyncChain = function(e, t, n) {
            var o, i, r, l, s, d, u;
            for (null == n && (n = 1), u = [], i = function(e) {
                    var t;
                    return t = function() {
                        var t;
                        try {
                            return e()
                        } catch (e) {
                            return t = e, a.error(t)
                        }
                    }, u.push(new a.StopGo().run(t))
                }, (r = 0, s = t.length); r < s; r++) o = t[r], i(o);
            return l = u[u.length - 1], a._drainStopGosAsync(e, u), d = new a.StopGo, l.then(function() {
                return a.timeout(e + '.last', function() {
                    return d.go()
                }, 0)
            }), d
        }, a.chain = function(t) {
            var n, e, o, i, r;
            for (r = new a.StopGo, o = 0, i = t.length; o < i; o++) {
                e = t[o];
                try {
                    e()
                } catch (e) {
                    n = e, a.error(n)
                }
            }
            return r.go(), r
        }, a._drainStopGosAsync = function(e, t, n) {
            var o;
            if (null == n && (n = 0), !(1 > t.length)) return o = t.shift(), o.run(function() {
                return a._drainStopGosAsync(e, t, n + 1)
            }), a.timeout(e + '.' + n, function() {
                return o.go()
            }, 0), o
        }, a.uniqId = function(e, t) {
            var n, o;
            return null == e && (e = ''), null == t && (t = ''), n = new Date().getTime(), window.performance && 'function' == typeof window.performance.now && (n += window.performance.now()), o = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx-xxxxxxxxx-xxxxxxxxxxxx-xxxx'.replace(/[xy]/g, function(e) {
                var t, o;
                return t = 0 | (n + 16 * Math.random()) % 16, n = Math.floor(n / 16), o = 'x' === e ? t : 8 | 3 & t, o.toString(16)
            }), e + o + t
        }, a.css = function() {
            var e, t, n;
            return 2 === arguments.length ? (n = arguments[0] || document.body || document.head, e = arguments[1]) : (n = document.body || document.head, e = arguments[0]), /\{/.test(e) && /\}/.test(e) ? a.util.addInlineCss(n, e) : (t = document.createElement('link'), t.setAttribute('rel', 'stylesheet'), t.setAttribute('href', e), a.elem.append(n, t), t)
        }, a.script = function() {
            var e, t;
            return t = 1 <= arguments.length ? s.call(arguments, 0) : [], (e = a.remote).scripts.apply(e, t)
        }, l = n(4), r = l.doTimeout, i = l.clearTimeouts, a.seqId = n(7)['default'], a.timeout = r, a.clearTimeouts = i)
    },
    10: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'pluginScriptsToLoad', function() {
            return s
        });
        n.d(t, 'pluginScriptsFromDefinedPlugins', function() {
            return d
        });
        n.d(t, 'allow3rdParty', function() {
            return m
        });
        var o = n(5),
            i = n(11),
            a = n(20),
            r = n(16),
            l = Object(r.cachedDetect)(),
            s = function(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {},
                    s = n.plugin || {},
                    m = Object(o.merge)({}, s, r),
                    g = i.choosePlayer(e, t, n),
                    y = d(m, n);
                if ((l.safari || l.iphone || l.ipad) && !1 !== n.airplayButton) {
                    var h = {
                        name: 'airplay',
                        options: m.airplay || {},
                        async: !0,
                        src: ''.concat(Object(a.eV1Protocol)(), '//').concat(Object(a.eV1Host)(), '/assets/external/airplay.js')
                    };
                    y.push(h)
                }
                var f = u(y, n, g);
                return 'vulcan-v2' === g && n.chaptersOn && !m.chapters && f.push({
                    name: c('chapters'),
                    src: ''.concat(Object(a.eV1Protocol)(), '//').concat(Object(a.eV1Host)(), '/assets/external/chapters.js'),
                    async: !1,
                    options: m.chapters || {}
                }), n.showCustomerLogo && n.customerLogoImageUrl && t.enableCustomerLogo && f.push({
                    name: 'customerLogo',
                    options: m.customerLogo || {},
                    async: !0,
                    src: ''.concat(Object(a.eV1Protocol)(), '//').concat(Object(a.eV1Host)(), '/assets/external/customerLogo.js')
                }), (!0 === n.branding || !0 === t.branding) && f.push({
                    name: 'wistiaLogo',
                    options: m.wistiaLogo || {},
                    async: !0,
                    src: ''.concat(Object(a.eV1Protocol)(), '//').concat(Object(a.eV1Host)(), '/assets/external/wistiaLogo.js')
                }), p(f)
            },
            d = function(e, t) {
                var n = [];
                return Object.keys(e).forEach(function(o) {
                    if (e.hasOwnProperty(o)) {
                        var i = e[o];
                        if (i && !1 !== i.on) {
                            var r = c(o),
                                l = {
                                    name: r,
                                    src: ''.concat(Object(a.eV1Protocol)(), '//').concat(Object(a.eV1Host)(), '/assets/external/').concat(r, '.js'),
                                    async: null == i.async ? !/^(requireEmail|captions|socialbar|transcript|midrollLink|share)/.test(o) : i.async,
                                    options: i
                                };
                            if (i.src && m(t) && (l.src = i.src), 'transcript' === o) {
                                var s = 'https' === Object(a.eV1Protocol)() ? 'https://s3.amazonaws.com/origin-p3.3playmedia.com/javascripts/vendor/jquery-1.6.2.min.js' : 'http://p3.3playmedia.com/javascripts/vendor/jquery-1.6.2.min.js';
                                n.push({
                                    src: s,
                                    async: !1
                                })
                            }
                            n.push(l)
                        }
                    }
                }), n
            },
            u = function(e, t, n) {
                return e.map(function(e) {
                    if ('vulcan-v2' === n) switch (e.name) {
                        case 'captions-v1':
                            e.name = 'captions', e.src = e.src.replace(/captions-v1/, 'captions');
                            break;
                        case 'share':
                            e.name = 'share-v2', e.src = e.src.replace(/share/, 'share-v2');
                            break;
                        case 'postRoll-v1':
                            e.name = 'postRoll-v2', e.src = e.src.replace(/postRoll-v1/, 'postRoll-v2');
                            break;
                        case 'midrollLink-v1':
                            e.name = 'midrollLink-v2', e.src = e.src.replace(/midrollLink-v1/, 'midrollLink-v2');
                            break;
                        case 'requireEmail-v1':
                            t.inLegacyPlaylist || (e.name = 'turnstile', e.src = e.src.replace(/requireEmail-v1/, 'turnstile'));
                            break;
                        default:
                    }
                    return e
                })
            },
            p = function(e) {
                var t = function(e) {
                    var t = 0;
                    return e && e.options && e.options.loadWeight && (t = e.options.loadWeight), t
                };
                return e.sort(function(e, n) {
                    return t(e) - t(n)
                })
            },
            c = function(e) {
                return 'socialbar' === e ? 'socialbar-v1' : 'requireEmail' === e ? 'requireEmail-v1' : 'postRoll' === e ? 'postRoll-v1' : 'transcript' === e ? 'transcript-v2' : e
            },
            m = function() {
                var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {};
                return !1 !== e.allowThirdParty && !/([\w_-]+\.)?wistia\.(com|st|io)$/.test(window.location.hostname)
            }
    },
    101: function(e, t, n) {
        'use strict';
        n.r(t);
        var r = n(2);

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function i(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function a(e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), e
        }
        var l = r['default'].lib('player/lib/elem'),
            s = l.elemRemove,
            d = r['default'].lib('preact'),
            u = d.h,
            p = d.render,
            c = function() {
                function e(t) {
                    o(this, e), this.video = t, this.unbinds = [], this.reactMounts = {}
                }
                return a(e, [{
                    key: 'mount',
                    value: function(e) {
                        this.rootElem = e
                    }
                }, {
                    key: 'destroy',
                    value: function() {
                        this._destroyed = !0, this.unbinds instanceof Array && (this.unbinds.map(function(e) {
                            try {
                                e()
                            } catch (t) {
                                setTimeout(function() {
                                    throw t
                                }, 1)
                            }
                        }), this.unbinds = null);
                        var e = this.reactMounts;
                        if (e)
                            if (e instanceof Array) g(e);
                            else
                                for (var t in e) e.hasOwnProperty(t) && e[t] && g(e[t]);
                        for (var n in this.rootElem && s(Array.prototype.slice.call(this.rootElem.childNodes)), this) this.hasOwnProperty(n) && !m(n) && 'mounted' != n && (this[n] = null);
                        this.__prevProps = null, this._destroyed = !0
                    }
                }]), e
            }(),
            m = function(e) {
                return '_' === e[0] && '_' === e[1]
            },
            g = function(e) {
                var t = e[0],
                    n = e[1];
                t && n && p(u('nothing', null), t, n)
            };
        t['default'] = c
    },
    103: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'standardSvgAttrs', function() {
            return i
        });
        var o = n(2),
            i = function(e, t) {
                return {
                    x: '0px',
                    y: '0px',
                    viewBox: '0 0 '.concat(e, ' ').concat(t),
                    "enable-background": 'new 0 0 '.concat(e, ' ').concat(t),
                    style: {
                        fill: '#ffffff',
                        height: '100%',
                        left: 0,
                        strokeWidth: 0,
                        top: 0,
                        width: '100%'
                    }
                }
            };
        o['default'].define('vulcanV2Video/svg_boilerplate.js', {
            standardSvgAttrs: i
        })
    },
    11: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'getDefaultContext', function() {
            return S
        });
        n.d(t, 'buildContext', function() {
            return P
        });
        n.d(t, 'choosePlayer', function() {
            return E
        });
        n.d(t, 'bestPlayer', function() {
            return T
        });
        n.d(t, 'isValidPlayer', function() {
            return B
        });
        n.d(t, 'canUsePlayer', function() {
            return x
        });
        n.d(t, 'canPlayInline', function() {
            return D
        });
        n.d(t, 'usablePlayers', function() {
            return F
        });
        n.d(t, 'supportedPlayers', function() {
            return I
        });
        n.d(t, 'isSupportedPlayer', function() {
            return M
        });
        n.d(t, 'hasAssetsForPlayer', function() {
            return O
        });
        n.d(t, 'determinePlayerPreferenceFromInput', function() {
            return L
        });
        n.d(t, 'isMobile', function() {
            return R
        });
        n.d(t, 'isPasswordProtected', function() {
            return H
        });
        n.d(t, 'isNotPlayable', function() {
            return W
        });
        n.d(t, 'noFallbackFromFlash', function() {
            return j
        });
        n.d(t, 'logWarnings', function() {
            return V
        });
        n.d(t, 'shouldServeHls', function() {
            return N
        });
        n.d(t, 'hasDesktopHlsAssets', function() {
            return U
        });
        n.d(t, 'xhrHasBeenTamperedWith', function() {
            return z
        });
        n.d(t, 'urlHasBeenTamperedWith', function() {
            return q
        });
        n.d(t, 'PLUGIN_CONFIGS', function() {
            return J
        });
        n.d(t, 'playerPlugins', function() {
            return Z
        });
        n.d(t, 'enginesToLoad', function() {
            return $
        });
        n.d(t, 'bestUsableEngineClass', function() {
            return te
        });
        n.d(t, 'bestUsableEngine', function() {
            return ne
        });
        n.d(t, 'report', function() {
            return oe
        });
        var o = n(3),
            i = n(2),
            a = n(12),
            r = n(5),
            l = n(21),
            s = n(16),
            d = n(15),
            u, p = d.wlog.getPrefixedFunctions('judy'),
            c = 'vulcan',
            m = 'vulcan-v2',
            g = 'html5',
            y = 'flash',
            h = 'external',
            f = 'notplayable',
            b = 'passwordprotected',
            A = 'auto',
            _ = ['vulcan', 'vulcan-v2', 'html5', 'simplehtml5', 'flash', 'external', 'notplayable', 'passwordprotected'],
            v = 'nativeHlsVideo',
            w = 'hlsVideo',
            k = 'manualQualityVideo',
            C = 'twoStrokeVideo',
            S = function() {
                return u ? u : (u = {
                    location: window.location,
                    logger: p,
                    pageUrl: location.href,
                    detect: r.clone(Object(s.cachedDetect)()),
                    userAgent: navigator.userAgent,
                    silenceGlobalWarnings: o['default'].wistiaSilenceGlobalWarnings,
                    inIframe: top !== self
                }, u)
            },
            P = function() {
                var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {};
                return r.assign({}, S(), e)
            },
            E = function(e, t, n) {
                var o = e.logger,
                    i = t.assets,
                    a = n.force,
                    r = n.playerForce;
                !r && a && (r = a), o.info('choosePlayer input', t.hashedId);
                var l = L(e, t, n);
                if (r && !B(e, r) && (o.error('Invalid playerForce option: "'.concat(r, '", ignoring')), r = a = null), l && l !== A && !B(e, l) && (o.error('Invalid playerPreference option: "'.concat(l, '", ignoring')), l = A), o.info('playerPreference is', l), r) return o.info('"playerForce" used, return', r), r;
                if (H(e, n)) return o.info('return', b), b;
                if (W(e, t)) return o.info('return', f), f;
                if (l !== A && x(e, l, i)) {
                    var s = (t.spherical || n.spherical) && !n.overrideSpherical;
                    return l === m && s ? (o.info('vulcan-v2 doesn\'t support spherical, return', c), c) : (o.info('"playerPreference" used, return', l), l)
                }
                return o.info('choosing player with no preference'), T(e, t, n)
            },
            T = function(e, t, n) {
                var o = e.location,
                    i = e.detect,
                    a = e.logger,
                    r = t.assets,
                    l = (t.spherical || n.spherical) && !n.overrideSpherical;
                return i.oldandroid ? (a.info('oldandroid'), x(e, y, r) && 'https:' === o.protocol ? (a.info('flash on old android'), y) : (a.info('external on old android'), h)) : x(e, c, r) && l ? (a.info('default, ret', c), c) : x(e, m, r) ? (a.info('default, ret', m), m) : x(e, y, r) ? (a.info('default, ret', y), y) : x(e, g, r) ? (a.info('default, ret', g), g) : j(e) ? (a.info('no fallback from flash, return', y), y) : (a.info('nothing left, use', h), h)
            },
            B = function(e, t) {
                return 0 <= r.indexOf(_, t)
            },
            x = function(e, t, n) {
                return M(e, t) && O(e, t, n)
            },
            D = function(e) {
                var t = e.detect;
                return t.android || 10 <= t.ios.version
            },
            F = function(e, t) {
                for (var n, o = [], a = I(e), r = 0; r < a.length; r++) n = a[r], x(e, n, t) && o.push(n);
                return o
            },
            I = function(e) {
                var t = e.detect,
                    n = [f, b, h];
                return t.vulcanSupport ? (n.push(c), n.push(m)) : (t.iphone || t.ipad || t.android) && (n.push(c), n.push(m)), t.video.h264 && n.push(g), 9 <= t.flash.version && n.push(y), n
            },
            M = function(e, t) {
                return !!B(e, t) && 0 <= r.indexOf(I(e), t)
            },
            O = function(e, t, n) {
                if (!B(e, t)) return !1;
                if (t === f || t === b) return !0;
                if (t === c || t === m) return 0 < a.readyPublicMp4s(n).length || 0 < a.readyPublicM3u8s(n).length;
                if (t === g) return 0 < a.readyPublicMp4s(n).length;
                if (t === y) return 0 < a.readyPublicFlvs(n).length || 0 < a.readyPublicMp4s(n).length;
                if (t === h) return 0 < a.readyPublicMp4s(n).length;
                throw new Error('Unhandled player type \''.concat(t, '\''))
            },
            L = function(e, t, n) {
                var o = n.playerPreference || n.platformPreference;
                return o && o !== A ? o === g ? R(e) ? g : m : o === 'simplehtml5' ? g : o : A
            },
            R = function(e) {
                var t = e.detect;
                return t.iphone || t.ipad || t.android
            },
            H = function(e, t) {
                var n = r.get(t, 'plugin.passwordProtectedVideo');
                return null != n && !1 !== n.on
            },
            W = function e(t, n) {
                var o = n.assets;
                return 0 === o.length || 1 === o.length && 'original' === o[0].type || 0 == a.readyPublicMp4sAndFlvs(o).length || 0 < a.nonfailedPublicOver400(o).length && 0 === a.readyPublicOver400(o).length || ee(n) && e(t, n.secondaryMediaData)
            },
            j = function(e) {
                var t = e.detect;
                return t.browser.msie && (9 > t.browser.version || t.browser.quirks) || t.browser.mozilla
            },
            V = function(e) {
                var t = e.detect,
                    n = e.userAgent,
                    o = e.logger,
                    i = e.silenceGlobalWarnings;
                if (!i) {
                    var a = t.browser.msie && 11 > t.browser.version,
                        r = /phantomjs/i.test(n);
                    !z() || r || a || o.error('The XMLHttpRequest constructor has been tampered with. Because this affects CORS/Range XHR requests, HLS playback has been disabled. To enable HLS playback and other important features, please remove code that changes the definition of window.XMLHttpRequest.'), q() && t.mediaSource && !r && !a && o.error('window.URL.createObjectURL has been tampered with. Because this affects use of Media Source Extensions, HLS playback has been disabled. window.URL is a browser API that should not be clobbered. Its current value is:', window.URL)
                }
            },
            N = function(e, t, n) {
                var o = e.detect;
                return (o.mediaSource || o.nativeHls) && (!o.chrome || 50 < parseInt(o.chrome.version)) && !o.trident && !(o.android && (!1 === n.playsinline || !0 === n.nativeMode)) && (t.hls_enabled || Y(e, n)) && !1 !== Y(e, n) && U(e, t.assets) && (!z(e) && !q(e) || Y(e, n))
            },
            U = function(e, t) {
                var n = a.filter(t, {
                        container: 'm3u8',
                        type: 'hls_video',
                        status: a.READY,
                        sortBy: 'width desc',
                        metadata: function(e) {
                            return e && e.max_bitrate
                        },
                        display_name: function(e) {
                            return 'Audio' != e
                        }
                    }),
                    o = a.filter(t, {
                        container: 'mp4',
                        status: a.READY,
                        sortBy: 'width desc'
                    });
                return 0 < n.length && (0 === o.length || n[0].width >= o[0].width)
            },
            Q = /\s*function\s+XMLHttpRequest\(\)\s*{\s*\[native code\]\s*}\s*/m,
            G = /\[object XMLHttpRequestConstructor\]/m,
            z = function() {
                if (XMLHttpRequest && XMLHttpRequest.prototype && XMLHttpRequest.prototype.constructor) {
                    var e = XMLHttpRequest.prototype.constructor.toString();
                    return !(Q.test(e) || G.test(e))
                }
                return !0
            },
            q = function() {
                return 'function' != typeof(window.URL && window.URL.createObjectURL)
            },
            Y = function(e, t) {
                var n = e.pageUrl,
                    o = K(n);
                if (null != o) return o;
                var i = Object(l.setOrGet)('forceHls');
                return null == i ? t.hls : i
            },
            K = function(e) {
                var t = e && e.match && e.match(/[&?]whls=([^&]+)/),
                    n = t && t[1];
                return null == n ? null : r.cast(n)
            },
            J = {
                sphericalVideo: {
                    on: !0,
                    initBeforeHasData: !1,
                    async: !1
                },
                notPlayableVideo: {
                    on: !0,
                    initBeforeHasData: !0,
                    async: !1,
                    loadWeight: -1
                },
                vulcanVideo: {
                    on: !0,
                    initBeforeHasData: !1,
                    async: !1,
                    loadWeight: -1
                },
                vulcanV2Video: {
                    on: !0,
                    initBeforeHasData: !1,
                    async: !1,
                    loadWeight: -1
                },
                hlsVideo: {
                    on: !0,
                    initBeforeHasData: !1,
                    async: !1,
                    loadWeight: 0
                },
                nativeHlsVideo: {
                    on: !0,
                    initBeforeHasData: !1,
                    async: !1,
                    loadWeight: 0
                },
                passwordProtectedVideo: {
                    on: !0,
                    initBeforeHasData: !0,
                    async: !1,
                    loadWeight: -1
                },
                encodingProgress: {
                    on: !0,
                    initBeforeHasData: !1,
                    async: !0,
                    loadWeight: 100
                },
                externalPlayer: {
                    on: !0,
                    initBeforeHasData: !1,
                    async: !1,
                    loadWeight: -1
                },
                flashPlayer: {
                    on: !0,
                    initBeforeHasData: !1,
                    async: !1,
                    loadWeight: -1
                },
                html5Player: {
                    on: !0,
                    initBeforeHasData: !1,
                    async: !1,
                    loadWeight: -1
                }
            },
            X = function(e, t) {
                var n = {};
                return n[t] = J[t], n
            },
            Z = function(e, t, n, o) {
                var a = e.logger,
                    l = {};
                if (a.info('playerPlugins input', t, n.hashedId, n, o), t === f) r.merge(l, X(e, 'notPlayableVideo'));
                else if (t === b) r.merge(l, X(e, 'passwordProtectedVideo'));
                else if (t === g) r.merge(l, X(e, 'html5Player'));
                else if (t === y) r.merge(l, X(e, 'flashPlayer'));
                else if (t === h) r.merge(l, X(e, 'externalPlayer'));
                else if (t === m) r.merge(l, X(e, 'vulcanV2Video'));
                else if (t === c) {
                    r.merge(l, X(e, 'vulcanVideo')), (n.spherical || o.spherical) && !o.overrideSpherical && r.merge(l, X(e, 'sphericalVideo'));
                    for (var s = $(e, n, o), d = 0; d < s.length; d++) r.merge(l, X(e, s[d]))
                }
                var i = [];
                for (var u in l) i.push(u);
                return a.info.apply(a, ['playerPlugins output'].concat(i, [l])), l
            },
            $ = function e(t, n) {
                var o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                    i = t.detect,
                    a = t.logger,
                    l = [];
                a.info('enginesToLoad');
                var s = N(t, n, o);
                if (s && i.nativeHls ? (a.info(v), l.push(v)) : s ? (a.info(w), l.push(w)) : (a.info(k), l.push(k)), ee(n)) {
                    a.info(C), l.push(C);
                    var d = r.except(o, ['twoStroke']),
                        u = n.secondaryMediaData,
                        p = e(t, u, d);
                    l = l.concat(p)
                } else o.secondaryVideoUrl && (a.info('secondaryVideoUrl', C), l.push(C));
                var c = {};
                l.map(function(e) {
                    c[e] = !0
                });
                var m = [];
                for (var g in c) m.push(g);
                return m
            },
            ee = function(e) {
                return !!e.secondaryMediaData
            },
            te = function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                    o = e.detect,
                    a = e.logger;
                a.info('bestUsableEngineClass');
                var r = N(e, t, n),
                    l = i['default'].engines || {};
                return ee(t) && l.TwoStrokeVideo ? (a.info(C), l.TwoStrokeVideo) : n.secondaryVideoUrl && l.TwoStrokeVideo ? (a.info(C), l.TwoStrokeVideo) : r && o.nativeHls && l.NativeHlsVideo ? (a.info(v), l.NativeHlsVideo) : r && l.HlsVideo ? (a.info(w), l.HlsVideo) : (a.info(k), l.ManualQualityVideo)
            },
            ne = function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                    o = e.detect,
                    i = e.logger;
                i.info('bestUsableEngineClass');
                var a = N(e, t, n);
                return ee(t) ? (i.info(C), 'engines/two_stroke_video.js') : n.secondaryVideoUrl ? (i.info(C), 'engines/two_stroke_video.js') : a && o.nativeHls ? (i.info(v), 'engines/native_hls_video.js') : a ? (i.info(w), 'engines/hls_video.js') : (i.info(k), 'engines/manual_quality_video.js')
            },
            oe = function(e, t, n) {
                return {
                    bestPlayer: T(e, t, n),
                    supportedPlayers: I(e),
                    usablePlayers: F(e, t.assets),
                    playerPreferenceFromInput: L(e, t, n)
                }
            }
    },
    12: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'FAILED', function() {
            return y
        });
        n.d(t, 'QUEUED', function() {
            return h
        });
        n.d(t, 'PROCESSING', function() {
            return f
        });
        n.d(t, 'READY', function() {
            return b
        });
        n.d(t, 'filter', function() {
            return _
        });
        n.d(t, 'one', function() {
            return v
        });
        n.d(t, 'readyPublicMp4s', function() {
            return w
        });
        n.d(t, 'readyPublicM3u8s', function() {
            return k
        });
        n.d(t, 'readyPublicFlvs', function() {
            return C
        });
        n.d(t, 'readyPublicMp4sAndFlvs', function() {
            return S
        });
        n.d(t, 'filterOver400', function() {
            return P
        });
        n.d(t, 'readyPublicOver400', function() {
            return E
        });
        n.d(t, 'nonfailedPublicOver400', function() {
            return T
        });
        n.d(t, 'withinQualityRange', function() {
            return B
        });
        n.d(t, 'numericSizeSnapped', function() {
            return x
        });
        n.d(t, 'findClosestAssetByQuality', function() {
            return D
        });
        n.d(t, 'still', function() {
            return F
        });
        n.d(t, 'thumbnailAssets', function() {
            return I
        });
        n.d(t, 'stillUrl', function() {
            return O
        });
        n.d(t, 'getStillWidth', function() {
            return L
        });
        n.d(t, 'BAKERY_HOSTS', function() {
            return R
        });
        n.d(t, 'isBakeryUrl', function() {
            return H
        });
        n.d(t, 'onePublicReadyWithContainer', function() {
            return W
        });
        n.d(t, 'mp4', function() {
            return j
        });
        n.d(t, 'webm', function() {
            return V
        });
        n.d(t, 'm3u8', function() {
            return N
        });
        n.d(t, 'flv', function() {
            return U
        });
        n.d(t, 'original', function() {
            return Q
        });
        n.d(t, 'playable', function() {
            return G
        });
        n.d(t, 'isScreencast', function() {
            return z
        });
        n.d(t, 'videoAspect', function() {
            return q
        });
        n.d(t, 'originalAspect', function() {
            return Y
        });
        n.d(t, 'iphone', function() {
            return K
        });
        n.d(t, 'smallestNormalMp4', function() {
            return J
        });
        n.d(t, 'urlWithCorrectHost', function() {
            return X
        });
        n.d(t, 'nearestOutsideRange', function() {
            return Z
        });
        n.d(t, 'moveToFront', function() {
            return $
        });
        var s = n(5),
            i = n(13),
            d = n.n(i),
            u = n(14),
            p = n(16),
            c = n(20),
            m = n(15);

        function o(e, t) {
            return l(e) || r(e, t) || a()
        }

        function a() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance')
        }

        function r(e, t) {
            var n = [],
                o = !0,
                i = !1,
                a;
            try {
                for (var r, l = e[Symbol.iterator](); !(o = (r = l.next()).done) && (n.push(r.value), !(t && n.length === t)); o = !0);
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    o || null == l['return'] || l['return']()
                } finally {
                    if (i) throw a
                }
            }
            return n
        }

        function l(e) {
            if (Array.isArray(e)) return e
        }
        var g = Array.prototype.slice,
            y = -1,
            h = 0,
            f = 1,
            b = 2,
            A = ['select', 'sortFn', 'sortBy', 'unique'],
            _ = function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                e.assets && (e = e.assets), (null != t.qualityMin || null != t.qualityMax) && (e = B(e, t.qualityMin, t.qualityMax), t = s.except(t, ['qualityMin', 'qualityMax']));
                var n = s.only(t, A),
                    o = n.select || s.except(t, A);
                o && (n.select = o);
                var a = n.select ? s.select(e, n.select) : s.clone(e);
                if ((n.sortFn || n.sortBy) && (a = s.sort(a, n.sortFn || n.sortBy)), n.unique) {
                    for (var r = {}, l = 0; l < a.length; l++) {
                        var i = a[l],
                            d = i['' + n.unique] || '__undefined__';
                        r[d] || (r[d] = i)
                    }
                    for (var u in a = [], r) a.push(r[u])
                }
                return a
            },
            v = function(e, t) {
                return _(e, t)[0] || null
            },
            w = function(e) {
                return _(e, {
                    container: 'mp4',
                    status: b,
                    public: !0
                })
            },
            k = function(e) {
                return _(e, {
                    container: 'm3u8',
                    status: b,
                    public: !0
                })
            },
            C = function(e) {
                return _(e, {
                    container: 'flv',
                    status: b,
                    public: !0
                })
            },
            S = function(e) {
                return _(e, {
                    container: /mp4|flv/,
                    status: b,
                    public: !0
                })
            },
            P = function(e) {
                for (var t = [], n = 0; n < e.length; n++) {
                    var o = e[n],
                        i = null != o.opt_vbitrate && 500 <= o.opt_vbitrate && 1e5 >= o.opt_vbitrate,
                        a = null != o.width && 400 < o.width;
                    (i || a) && t.push(o)
                }
                return t
            },
            E = function(e) {
                return P(_(e, {
                    container: /mp4|flv/,
                    public: !0,
                    status: b
                }))
            },
            T = function(e) {
                return P(_(e, {
                    container: /mp4|flv/,
                    public: !0,
                    status: function(e) {
                        return e !== y
                    }
                }))
            },
            B = function(e) {
                var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 100,
                    n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : 1e4;
                return _(e, {
                    select: function(e) {
                        var o = x(e.width, e.height);
                        return t <= o && o <= n
                    }
                })
            },
            x = function(e, t) {
                if (t > e) {
                    var n = e;
                    e = t, t = n
                }
                var o = e / t,
                    i = e * t + 1;
                return i >= 3840 * (3840 / o) ? 2160 : i >= 2560 * (2560 / o) ? 1440 : i >= 1920 * (1920 / o) ? 1080 : i >= 1280 * (1280 / o) ? 720 : i >= 960 * (960 / o) ? 540 : i >= 640 * (640 / o) ? 360 : t
            },
            D = function(e, t) {
                var n = '4k' === t ? 2160 : parseInt(t, 10);
                var i = B(e, n, n)[0];
                if (i) return i;
                var a = Z(e, n, n);
                if (1 === a.length) return a[0];
                var r = q(e),
                    l = Math.round(r * n),
                    s = o(a, 2),
                    d = s[0],
                    u = s[1],
                    p = Math.abs(d.width - l),
                    c = Math.abs(u.width - l);
                return p < c ? d : u
            },
            F = function(e) {
                var t = v(e, {
                    type: 'still_image',
                    sortBy: 'created_at desc'
                });
                return t || (t = v(e, {
                    container: /mp4/,
                    sortBy: 'width desc'
                })), t
            },
            I = function(e, t) {
                if (t.stillUrl) return [{
                    height: null,
                    url: t.stillUrl,
                    width: null
                }];
                var n = F(e),
                    o = n.width / n.height;
                return [320, 640, 960, 1280, 1920, 3840].map(function(t) {
                    var n = Math.round(t / o),
                        i = O(e, {
                            videoWidth: t,
                            videoHeight: n,
                            playButton: !1
                        });
                    return {
                        height: n,
                        url: i,
                        width: t
                    }
                })
            },
            M = d()('fast'),
            O = function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    n = F(e);
                if (n.status !== b) return '//'.concat(M, '/assets/images/blank.gif');
                t = s.merge({
                    aspect: n.width / n.height,
                    stillUrl: n.url,
                    playButton: !1,
                    playerColor: t.playerColor || '636155',
                    videoWidth: n.width || 640,
                    videoHeight: n.height || 360,
                    stillSnap: !0
                }, t);
                var o = t.videoWidth,
                    i = t.videoHeight,
                    a = new u.Url(t.stillUrl);
                return (t.retina && (a.params.image_play_button_size = '2x', o *= 2, i *= 2), t.stillSnap && (o = L({
                    videoWidth: o,
                    masterStillWidth: n.width
                }), i = Math.round(o / t.aspect)), !H(t.stillUrl)) ? t.stillUrl : ('https:' === t.protocol && (a.protocol = 'https:', a.host = 'embed-ssl.wistia.com'), a.params.image_crop_resized = ''.concat(o, 'x').concat(i), (null == t.playButton || t.playButton) && (a.params.image_play_button = 1, a.params.image_play_button_color = ''.concat(('' + t.playerColor).replace(/^#+/, ''), 'e0')), a.ext('jpg'), a.absolute())
            },
            L = function(e) {
                var t = [640, 960, 1280, 1920, 3840];
                3840 > e.masterStillWidth && t.push(e.masterStillWidth);
                for (var n, o = [], a = 0; a < t.length; a++) n = t[a], n <= e.masterStillWidth && o.push(n);
                o.sort(function(e, t) {
                    return e - t
                });
                for (var i, r = 0; r < o.length; r++)
                    if (i = o[r], e.videoWidth <= i) return i;
                return Math.max.apply(Math, o)
            },
            R = ['undefined', 'embed-ssl.wistia.com', 'undefined', 'undefined', d()('embed'), d()('prime'), d()('mixergy-cdn'), d()('embed-a'), 'embedwistia-a.akamaihd.net'],
            H = function(e) {
                if (null == e) return !1;
                var t = new u.Url(e);
                return !!t.host && 0 <= R.join(',').indexOf(t.host)
            },
            W = function(e, t, n) {
                return n = s.merge({
                    container: t,
                    public: !0,
                    status: b
                }, n), v(e, n)
            },
            j = function(e, t) {
                return W(e, 'mp4', t)
            },
            V = function(e, t) {
                return W(e, 'webm', t)
            },
            N = function(e, t) {
                return W(e, 'm3u8', t)
            },
            U = function(e, t) {
                return W(e, 'flv', t)
            },
            Q = function(e) {
                return v(e, {
                    type: 'original'
                })
            },
            G = function(e, t) {
                var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : Object(p.cachedDetect)();
                return n.video.webm ? V(e, t) || j(e, t) : j(e, t)
            },
            z = function(e) {
                var t = Q(e);
                return t && 640 < t.width && 1200 > t.bitrate
            },
            q = function(e) {
                var t = j(e) || U(e) || N(e) || V(e) || Q(e);
                return t && t.height ? t.width / t.height : 640 / 360
            },
            Y = function(e) {
                var t = q(e),
                    n = Q(e);
                if (n && n.width && n.height) {
                    var o = n.width / n.height;
                    return 1 < o && 1 > t || 1 > o && 1 < t ? 1 / o : o
                }
                return t
            },
            K = function(e, t) {
                var n = q(e);
                if (1 < n) return t = s.merge({
                    width: 640
                }, t), j(e, t) || J(e, t);
                var o = s.merge({
                        width: 320
                    }, t),
                    i = s.merge({
                        width: 640
                    }, t);
                return j(e, o) || j(e, i) || J(e, t)
            },
            J = function(e, t) {
                return t = s.merge({
                    sortBy: 'width asc',
                    width: [640, 1920]
                }, t), j(e, t)
            },
            X = function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : c.eV1Protocol(),
                    n = new u.Url(e);
                return H(e) && ('https:' === t ? (n.host = c.deliveryHost(location.protocol), n.protocol = 'https:') : (n.host = c.deliveryHost(location.protocol), n.protocol = 'http:')), n.absolute()
            },
            Z = function(e, t, n) {
                if (0 === e.length) return [];
                for (var o, a, r = g.call(e).sort(function(e, t) {
                        return x(e.width, e.height) - x(t.width, t.height)
                    }), l = 0; l < r.length; l++) {
                    var i = r[l],
                        s = x(i.width, i.height);
                    if (s < t && (o = i), s >= n) {
                        a = i;
                        break
                    }
                }
                var d = [];
                return o && d.push(o), a && d.push(a), 0 === d.length && (m.wlog.error('nearestOutsideRange: no nearby assets found, using first in list', r[0]), d.push(r[0])), d
            },
            $ = function(e, t) {
                if (!t) return e;
                for (var n, o = -1, a = 0; a < e.length; a++)
                    if (n = e[a], n.url === t.url) {
                        o = a;
                        break
                    } return 0 < o && (e.splice(o, 1), e.unshift(t)), e
            }
    },
    13: function(e) {
        var t;
        t = function(e) {
            var t;
            return null == e && (e = 'app'), t = e ? e + '.' + 'wistia.com' : 'wistia.com', !1 && !1, t
        }, e.exports = t
    },
    14: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'proto', function() {
            return r
        });
        n.d(t, 'queryParamsToObject', function() {
            return l
        });
        n.d(t, 'urlComponentToObject', function() {
            return s
        });
        n.d(t, 'objectToQueryParams', function() {
            return d
        });
        n.d(t, 'splitPath', function() {
            return u
        });
        n.d(t, 'joinPath', function() {
            return p
        });
        n.d(t, 'brack', function() {
            return c
        });
        n.d(t, 'debrack', function() {
            return m
        });
        n.d(t, 'Url', function() {
            return y
        });
        var a = n(5),
            i = n(15);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }
        var r = function() {
                var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : location.href;
                return /^http:\/\//.test(e) ? 'http:' : 'https:'
            },
            l = function(e) {
                var t = {};
                if (!e) return t;
                for (var n = e.split('&'), o = 0; o < n.length; o++) {
                    var r = n[o],
                        l = r.split('='),
                        d = l[0],
                        u = l[1];
                    try {
                        d = m(decodeURIComponent(d)) || ''
                    } catch (t) {
                        setTimeout(function() {
                            i.wlog.notice(t)
                        }, 50), d = ''
                    }
                    a.cast(d);
                    var p = a.get(t, d);
                    if (!(null != p)) a.setAndPreserveUndefined(t, d, s(u));
                    else if (a.isArray(p)) p.push(s(u));
                    else {
                        var c = [p];
                        c.push(s(u)), a.setAndPreserveUndefined(t, d, c)
                    }
                }
                return t
            },
            s = function(t) {
                if (null == t) return t;
                var n;
                try {
                    n = decodeURIComponent(t)
                } catch (o) {
                    setTimeout(function() {
                        i.wlog.notice(o)
                    }, 50), n = t
                }
                return n
            },
            d = function(e) {
                var t = [];
                return a.eachLeaf(e, function(e, n) {
                    null == e ? t.push(encodeURIComponent(c(n))) : t.push(encodeURIComponent(c(n)) + '=' + encodeURIComponent(e))
                }), t.join('&')
            },
            u = function(e) {
                var t = [];
                if (null == e) return t;
                for (var n, o = e.split(/\/+/), a = 0; a < o.length; a++) n = o[a], null != n && '' !== n && t.push(n);
                return t
            },
            p = function(e) {
                return 'string' == typeof e && (e = e.split('/')), null == e ? '' : '/' + e.join('/')
            },
            c = function(e) {
                for (var t = e[0], n = 1; n < e.length; n++) t += '[' + e[n] + ']';
                return t
            },
            m = function(e) {
                return e.match(/([\w\-_]+)/g)
            },
            g = ['protocol', 'host', 'port', 'params', 'path'],
            y = function(e) {
                var t = this;
                return function() {
                    t.params = {}, t.path = [], t.host = '', 'object' === o(e) ? t.fromOptions(e) : e && t.fromRaw(e)
                }(), t
            },
            h = y.prototype;
        h.fromOptions = function(e) {
            for (var t, n = 0; n < g.length; n++) t = g[n], null != e[t] && (this[t] = e[t]);
            return this
        }, h.fromRaw = function(e) {
            this.rawUrl = e;
            var t;
            return t = e.match(/^((?:https?:)|(?:file:)|(?:ftp:))?\/\//), t && (this.protocol = t[1] || void 0), t = e.match(/\/\/([^:?#/]*)/), t && (this.host = t[1] || void 0), t = e.match(/\/\/.*?(\/[^?#$]+)/) || e.match(/(^\/[^/][^?#$]+)/), t && this.setPath(t[1]), t = e.match(/:(\d+)/), t && (this.port = parseInt(t[1], 10)), t = e.match(/\?([^#]+)/), t && (this.rawParams = t[1], this.params = l(this.rawParams)), t = e.match(/#(.*)$/), t && (this.anchor = t[1]), this
        }, h.clone = function() {
            return new y({
                protocol: this.protocol,
                host: this.host,
                port: this.port,
                path: a.clone(this.path),
                params: a.clone(this.params),
                anchor: this.anchor
            })
        }, h.ext = function(e) {
            if (null != e) {
                var t = this.ext(),
                    n = this.path.length - 1,
                    o = new RegExp('\\.'.concat(t), 'g');
                return t && (this.path[n] = ''.concat(this.path[n].replace(o, ''))), this.path[n] = ''.concat(this.path[n], '.').concat(e)
            }
            var i = this.path[this.path.length - 1].match(/\.(.*)$/);
            return null != i && i[1] || null
        }, h.isRelative = function() {
            var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : window.location,
                t = this.protocol,
                n = this.host;
            return (null == t || '' === t || t === e.protocol) && (!n || n === e.hostname)
        }, h.toString = function() {
            return this.isRelative() ? this.relative() : this.absolute()
        }, h.absolute = function() {
            var e = '';
            null != this.protocol && (e = this.protocol);
            var t = '';
            return null != this.port && (t = ':' + this.port), ''.concat(e, '//').concat(this.host || location.host).concat(t).concat(this.relative())
        }, h.relative = function() {
            var e = '';
            0 < this.path.length && (e = p(this.path), this._hasTrailingSlash && (e += '/'));
            var t = '?' + d(this.params);
            return 1 === t.length && (t = ''), ''.concat(e).concat(t).concat(this.relativeAnchor())
        }, h.authority = function() {
            var e = null == this.port ? '' : ':'.concat(this.port);
            return ''.concat(this.host).concat(e)
        }, h.relativeProtocol = function() {
            var e = '';
            return null != this.port && (e = ':' + this.port), '//'.concat(this.host).concat(e).concat(this.relative())
        }, h.relativeAnchor = function() {
            var e = '';
            return null != this.anchor && (e = '#'.concat(this.anchor)), '' + e
        }, h.setPath = function(e) {
            this.rawPath = e, this._hasTrailingSlash = /\/$/.test(this.rawPath), this.path = u(this.rawPath)
        }, y.create = function(e) {
            return new y(e)
        }, y.parse = function(e) {
            return new y(e)
        }
    },
    15: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'ERROR', function() {
            return p
        });
        n.d(t, 'WARNING', function() {
            return c
        });
        n.d(t, 'NOTICE', function() {
            return m
        });
        n.d(t, 'INFO', function() {
            return g
        });
        n.d(t, 'DEBUG', function() {
            return y
        });
        n.d(t, 'LOG_LEVELS', function() {
            return h
        });
        n.d(t, 'Logger', function() {
            return b
        });
        n.d(t, 'wlog', function() {
            return S
        });
        var l = n(2),
            s = n(16),
            d = n(17);

        function o(e) {
            return r(e) || a(e) || i()
        }

        function i() {
            throw new TypeError('Invalid attempt to spread non-iterable instance')
        }

        function a(e) {
            if (Symbol.iterator in Object(e) || '[object Arguments]' === Object.prototype.toString.call(e)) return Array.from(e)
        }

        function r(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }
        var u = Object(s.cachedDetect)(),
            p = 0,
            c = 1,
            m = 2,
            g = 3,
            y = 4,
            h = {
                ERROR: 0,
                WARNING: 1,
                NOTICE: 2,
                INFO: 3,
                DEBUG: 4,
                error: 0,
                warning: 1,
                notice: 2,
                info: 3,
                debug: 4
            },
            f = function() {},
            b = function(e) {
                var t = this;
                null == e && (e = {});
                return t.error = function() {
                        for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                        return t.log(p, n)
                    }, t.warn = function() {
                        for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                        return t.log(c, n)
                    }, t.notice = function() {
                        for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                        return t.log(c, n)
                    }, t.info = function() {
                        for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                        return t.log(g, n)
                    }, t.debug = function() {
                        for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                        return t.log(y, n)
                    },
                    function() {
                        t.ctx = e, t.ctx.initializedAt || t.reset()
                    }(), t
            },
            A = b.prototype;
        A.reset = function() {
            this.ctx.level = p, this.ctx.grep = null, this.ctx.grepv = null, this.ctx.first1000LogLines = [], this.ctx.last1000LogLines = [], this.ctx.initializedAt = new Date().getTime()
        }, A.setLevel = function(e) {
            var t = this.logFunc(g);
            null == h[e] ? t('Unknown log level "'.concat(e, '"')) : (this.ctx.level = h[e], t('Log level set to "'.concat(e, '" (').concat(h[e], ')')))
        }, A.setGrep = function(e) {
            this.ctx.grep = e
        }, A.setGrepv = function(e) {
            this.ctx.grepv = e
        }, A.first1000LogLines = function() {
            return this.ctx.first1000LogLines
        }, A.last1000LogLines = function() {
            return this.ctx.last1000LogLines
        }, A.matchedGrep = function(e) {
            var t = !1;
            if (this.ctx.grep || this.ctx.grepv) {
                for (var n = [], o = 0; o < e.length; o++) try {
                    var i = e[o];
                    n.push(i.toString && i.toString())
                } catch (t) {
                    n.push('')
                }
                var a = n.join(' '),
                    r = !this.ctx.grep || a.match(this.ctx.grep),
                    l = !this.ctx.grepv || !a.match(this.ctx.grepv);
                t = r && l
            } else t = !0;
            return t
        }, A.now = function() {
            return 'undefined' != typeof performance && 'function' == typeof performance.now ? performance.now().toFixed(3) : Date.now ? Date.now() - this.ctx.initializedAt : new Date().getTime() - this.ctx.initializedAt
        }, A.messagesToLogLine = function(e, t, n) {
            var o = [e, t];
            o = o.concat(n);
            var i;
            try {
                i = o.join(' ') || '', 200 < i.length && (i = i.slice(0, 200))
            } catch (e) {
                i = 'could not serialize'
            }
            return i
        }, A.persistLine = function(e) {
            1e3 > this.ctx.first1000LogLines.length ? this.ctx.first1000LogLines.push(e) : (1e3 <= this.ctx.last1000LogLines.length && this.ctx.last1000LogLines.shift(), this.ctx.last1000LogLines.push(e))
        }, A.log = function(t, n) {
            var i = t <= this.ctx.level,
                a = t < y,
                r = (i || a) && this.matchedGrep(n);
            t === p && Object(d.globalTrigger)('problem', {
                type: 'error-logged',
                data: {
                    messages: n
                }
            });
            var l;
            if (r && (i || a) && (l = this.now()), a && r) {
                var s = this.messagesToLogLine(t, l, n);
                this.persistLine(s)
            }
            if (i && r) {
                var c, e = this.logFunc(t);
                1 === n.length && (c = n[0]) instanceof Error ? (e(c.message), c.stack && e(c.stack)) : u.browser.msie && (9 > u.browser.version || u.browser.quirks) ? e(n.join(' ')) : e.apply(void 0, o(n))
            }
        };
        var _ = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                console.error.apply(console, t)
            },
            v = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                console.warn.apply(console, t)
            },
            w = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                console.info.apply(console, t)
            },
            k = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                console.debug.apply(console, t)
            },
            C = function(e) {
                console.log.apply(console, e)
            };
        A.logFunc = function(e) {
            if (null == e && (e = this.level), !console) return f;
            var t;
            return e === p ? t = _ : e === c ? t = v : e === g ? t = w : e === y && (t = k), t || (t = C), 'function' != typeof t && (this.noConsoleLog = !0, t = f), t
        }, A.maybePrefix = function(t, e) {
            if (t) {
                if ('function' == typeof t) try {
                    t = t()
                } catch (n) {
                    t = 'prefix err "'.concat(n.message, '"')
                }
                return t instanceof Array ? t.concat(e) : [t].concat(e)
            }
            return e
        }, A.getPrefixedFunctions = function(e) {
            var t = this;
            return {
                log: function() {
                    for (var n = arguments.length, o = Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                    return t.log(p, t.maybePrefix(e, o))
                },
                error: function() {
                    for (var n = arguments.length, o = Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                    return t.log(p, t.maybePrefix(e, o))
                },
                warn: function() {
                    for (var n = arguments.length, o = Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                    return t.log(c, t.maybePrefix(e, o))
                },
                notice: function() {
                    for (var n = arguments.length, o = Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                    return t.log(c, t.maybePrefix(e, o))
                },
                info: function() {
                    for (var n = arguments.length, o = Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                    return t.log(g, t.maybePrefix(e, o))
                },
                debug: function() {
                    for (var n = arguments.length, o = Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                    return t.log(y, t.maybePrefix(e, o))
                }
            }
        }, l['default'] && null == l['default'].wlogCtx && (l['default'].wlogCtx = {});
        var S = new b(l['default'].wlogCtx)
    },
    16: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'callingPlayRequiresEventContext', function() {
            return re
        });
        n.d(t, 'cachedDetect', function() {
            return le
        });
        n.d(t, 'uncachedDetect', function() {
            return se
        });
        n.d(t, 'clearDetectCache', function() {
            return de
        });
        var o = n(2),
            a = n(3),
            i, r = navigator.userAgent,
            l = /(webkit)[ /]([^\s]+)/i,
            s = /OPR\/([^\s]+)/i,
            d = /(msie) ([^\s;]+)/i,
            u = /(trident)\/\s*([^;]+)/i,
            p = /(edge)\/(\d+(?:\.\d+)?)/i,
            c = /(mozilla)(?:.*? rv:([^\s)]+))?/i,
            m = /(android) ([^;]+)/i,
            g = /(iphone)/i,
            y = /(ipad)/i,
            h = /(Windows Phone OS (\d+(?:\.\d+)?))/,
            f = /OS (\d+)_(\d+)/i,
            b = /(playstation 3)/i,
            A = /BlackBerry|BB10/i,
            _ = /(firefox)/i,
            v = /Mobile VR/i,
            w = function() {
                return (C()[1] || 'webkit').toLowerCase()
            },
            k = function() {
                return C()[2]
            },
            C = function() {
                var e;
                return (e = r.match(l), e) ? e : (e = r.match(s), e) ? e : (e = r.match(d), e) ? (null != document.documentMode && (e[2] = document.documentMode), e) : (e = r.match(c), e ? e : [])
            },
            S = function() {
                var e = r.match(m);
                return null != e && {
                    version: e[2]
                }
            },
            P = function() {
                return S() && '4.1.0' > S().version && !j()
            },
            E = function() {
                return g.test(r)
            },
            T = function() {
                return 0 < R() || S()
            },
            B = function() {
                try {
                    var e = matchMedia('(hover:hover)');
                    if ('not all' !== e.media) return e.matches
                } catch (e) {}
                return !T()
            },
            x = function() {
                return A.test(r)
            },
            D = function() {
                return null != a['default'].devicePixelRatio && 1 < a['default'].devicePixelRatio
            },
            F = function() {
                return y.test(r)
            },
            I = function() {
                return l.test(r) && !/chrome/i.test(r) && !F() && !E()
            },
            M = function() {
                return !!(/Chrome/.test(r) && /Google Inc/.test(navigator.vendor)) && {
                    version: O()
                }
            },
            O = function() {
                var e = r.match(/\bChrome\/([^\s]+)/);
                return e && e[1]
            },
            L = function() {
                return s.test(r)
            },
            R = function() {
                var e = r.match(f);
                return null == e ? 0 : parseFloat(''.concat(e[1], '.').concat(e[2]))
            },
            H = function() {
                return h.test(r)
            },
            W = function() {
                return b.test(r)
            },
            j = function() {
                return u.test(r)
            },
            V = function() {
                return p.test(r)
            },
            N = function() {
                return _.test(r)
            },
            U = function() {
                return v.test(r)
            },
            Q = function() {
                return /win/i.test(navigator.platform)
            },
            G = function() {
                return /mac/i.test(navigator.platform)
            },
            z = function() {
                return /linux/i.test(navigator.platform)
            },
            q = function() {
                var e = Y();
                return {
                    version: parseFloat(e[0] + '.' + e[1]),
                    major: parseInt(e[0]),
                    minor: parseInt(e[1]),
                    rev: parseInt(e[2])
                }
            },
            Y = function() {
                try {
                    try {
                        var e = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');
                        try {
                            e.AllowScriptAccess = 'always'
                        } catch (t) {
                            return [6, 0, 0]
                        }
                    } catch (t) {}
                    return new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1].split(',')
                } catch (t) {
                    try {
                        if (navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) return (navigator.plugins['Shockwave Flash 2.0'] || navigator.plugins['Shockwave Flash']).description.replace(/\D+/g, ',').match(/^,?(.+),?$/)[1].split(',')
                    } catch (t) {}
                }
                return [0, 0, 0]
            },
            K = function() {
                var e = document.createElement('video'),
                    t = !1;
                try {
                    if (e.canPlayType) {
                        t = {};
                        t.h264 = !!e.canPlayType('video/mp4; codecs="avc1.42E01E"') || !!e.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'), t.webm = !!e.canPlayType('video/webm; codecs="vp9, vorbis"'), t.nativeHls = !!e.canPlayType('application/vnd.apple.mpegURL')
                    }
                } catch (n) {
                    t = {
                        ogg: !1,
                        h264: !1,
                        webm: !1,
                        nativeHls: !1
                    }
                }
                return t
            },
            J = function() {
                return a['default'].MediaSource && a['default'].MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')
            },
            X = function() {
                return (E() || F() || I()) && !j() && K().nativeHls
            },
            Z = function() {
                try {
                    return 'localStorage' in a['default'] && null != a['default'].localStorage
                } catch (t) {
                    return !1
                }
            },
            $ = function() {
                return !!(a['default'].JSON && 'function' == typeof JSON.parse)
            },
            ee = function() {
                var e = document.createElement('div');
                return '' === e.style.backgroundSize || '' === e.style.webkitBackgroundSize || '' === e.style.mozBackgroundSize || '' === e.style.oBackgroundSize
            },
            te = function() {
                return document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled
            },
            ne = ['WebKit', 'Moz', 'O', 'Ms', ''],
            oe = function() {
                for (var e = 0; e < ne.length; e++) {
                    var t = ne[e],
                        n = t + 'MutationObserver';
                    if (a['default'][n]) return n
                }
                return null
            },
            ie = function() {
                return !(E() || F() || S() || x() || !/webkit|mozilla/.test(w()) && ('msie' !== w() || !(11 <= k())) || !K().h264 || !Object.defineProperties)
            },
            ae = function() {
                if (null != i) return i;
                try {
                    var e = Object.defineProperty({}, 'passive', {
                        get: function() {
                            i = !0
                        }
                    });
                    window.addEventListener('test', null, e)
                } catch (e) {
                    i = !1
                }
                return i
            },
            re = function() {
                return 0 < R() || S() || I()
            },
            le = function() {
                return o['default']._detectCache ? o['default']._detectCache : (o['default']._detectCache = se(), o['default']._detectCache)
            },
            se = function() {
                var e = {
                    browser: {
                        version: k(),
                        quirks: 'msie' === w() && 'BackCompat' === document.compatMode,
                        old: 'msie' === w() && ('BackCompat' === document.compatMode || 7 > k()),
                        ltie8: 'msie' === w() && ('BackCompat' === document.compatMode || 8 > k())
                    },
                    trident: j(),
                    edge: V(),
                    firefox: N(),
                    gearvr: U(),
                    android: S(),
                    oldandroid: P(),
                    iphone: E(),
                    ipad: F(),
                    blackberry: x(),
                    safari: I(),
                    chrome: M(),
                    opera: L(),
                    winphone: {
                        version: H()[2]
                    },
                    ios: {
                        version: R()
                    },
                    windows: Q(),
                    mac: G(),
                    linux: z(),
                    retina: D(),
                    hoverIsNatural: B(),
                    touchScreen: T(),
                    ps3: W(),
                    flash: q(),
                    video: K(),
                    mediaSource: J(),
                    nativeHls: X(),
                    localstorage: Z(),
                    json: $(),
                    backgroundSize: ee(),
                    fullscreenEnabled: te(),
                    vulcanSupport: ie(),
                    mutationObserver: oe(),
                    callingPlayRequiresEventContext: re(),
                    passiveSupported: ae()
                };
                return e.browser[w()] = !0, e
            },
            de = function() {
                o['default']._detectCache = null
            }
    },
    161: function(e, t, n) {
        'use strict';
        n.r(t);
        var g = n(2),
            y = n(162);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i() {
            return i = Object.assign || function(e) {
                for (var t, n = 1; n < arguments.length; n++)
                    for (var o in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, i.apply(this, arguments)
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function l(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
        }

        function s(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : u(e)
        }

        function d(e) {
            return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, d(e)
        }

        function u(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function p(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }

        function m(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var f = g['default'].lib('preact'),
            b = f.h,
            h = f.render,
            A = f.Component,
            _ = g['default'].lib('utilities/detect'),
            v = _.cachedDetect,
            w = v(),
            k = g['default'].lib('player/lib/elem'),
            C = k.elemBind,
            S = k.elemUnbind,
            P = function(e) {
                function t() {
                    var e, n;
                    a(this, t);
                    for (var o = arguments.length, i = Array(o), r = 0; r < o; r++) i[r] = arguments[r];
                    return n = s(this, (e = d(t)).call.apply(e, [this].concat(i))), m(u(n), 'onSwipe', function(t, e) {
                        var o = n.props.onSwipe;
                        o && o(t, e)
                    }), m(u(n), 'onPinch', function(t, e) {
                        var o = n.props.onPinch;
                        o && o(t, e)
                    }), m(u(n), 'onLongPress', function(t, e) {
                        var o = n.props.onLongPress;
                        o && o(t, e)
                    }), m(u(n), 'onClick', function(t) {
                        var e = n.props.onClickOrTap;
                        e && e(t)
                    }), m(u(n), 'onTouchEnd', function(t, e) {
                        if (e.isTap) {
                            var o = n.props.onClickOrTap;
                            o && o(t, e)
                        }
                    }), n
                }
                return p(t, e), l(t, [{
                    key: 'render',
                    value: function() {
                        var e = this.props.tagName || 'div';
                        return b(e, i({}, this.props, {
                            ref: this.props.elemRef
                        }), this.props.children)
                    }
                }, {
                    key: 'componentDidMount',
                    value: function() {
                        this._savedBase = this.base, this.setupBindings()
                    }
                }, {
                    key: 'componentDidUpdate',
                    value: function() {
                        this.base !== this._savedBase && (this._savedBase = this.base, this.destroyBindings(), this.setupBindings())
                    }
                }, {
                    key: 'componentWillUnmount',
                    value: function() {
                        this.destroyBindings()
                    }
                }, {
                    key: 'setupBindings',
                    value: function() {
                        if (this.unbinds = [], w.touchScreen) {
                            var e = this.touchEvents = new y['default'](this.base);
                            e.on('touchend', this.onTouchEnd), e.on('swipe', this.onSwipe), e.on('pinch', this.onPinch), e.on('longpress', this.onLongPress)
                        } else this.unbinds.push(C(this.base, 'click', this.onClick))
                    }
                }, {
                    key: 'destroyBindings',
                    value: function() {
                        this.touchEvents && (this.touchEvents.destroy(), this.touchEvents = null), this.unbinds && (this.unbinds.map(function(e) {
                            return e()
                        }), this.unbinds = null)
                    }
                }]), t
            }(A);
        t['default'] = P
    },
    162: function(e, t, n) {
        'use strict';
        n.r(t);
        var l = n(2);

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function i(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function a(e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), e
        }

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var s = l['default'].lib('utilities/bindify'),
            d = s.bindify,
            u = l['default'].lib('player/lib/elem'),
            p = u.elemBind,
            c = u.elemUnbind,
            m = u.elemWidth,
            g = u.elemHeight,
            y = u.elemOffset,
            h = l['default'].lib('utilities/detect'),
            f = h.cachedDetect,
            b = f(),
            A = function() {
                function e(t) {
                    var n = this;
                    o(this, e), r(this, 'onTouchStart', function(e) {
                        n.rootWidth = m(n.rootElem), n.rootHeight = g(n.rootElem), n.rootOffset = y(n.rootElem), n.resetTouchContext(), e.touches[0] && (n.xDown = e.touches[0].clientX, n.yDown = e.touches[0].clientY), n.updatePinch(e), 2 == e.touches.length && n.touchesAreInsideRootElem() && e.preventDefault(), n.startedAt = Date.now(), p(document, 'touchmove', n.onTouchMoveDocument, {
                            passive: !1
                        }), p(document, 'touchend', n.onTouchEndDocument), p(n.rootElem, 'touchmove', n.onTouchMove, {
                            passive: !1
                        }), p(n.rootElem, 'touchend', n.onTouchEnd);
                        var t = n.getTouchContext(e);
                        n.trigger('touchstart', e, t), n.maybeTriggerMoreSpecificEvent(e, t)
                    }), r(this, 'onTouchMove', function(e) {
                        e._handledByTouchMove = !0;
                        var t = e.touches[0].clientX,
                            o = e.touches[0].clientY;
                        if (n.xDiff = n.xDown - t, n.yDiff = n.yDown - o, n.updatePinch(e), !n.isPinch) {
                            var i = Math.sqrt(n.xDiff * n.xDiff + n.yDiff * n.yDiff);
                            (25 < i || 300 < Date.now() - n.startedAt) && (n.isSwipe = !0)
                        }
                        var a = n.getTouchContext(e);
                        n.trigger('touchmove', e, a), n.maybeTriggerMoreSpecificEvent(e, a)
                    }), r(this, 'onTouchMoveDocument', function(e) {
                        e._handledByTouchMove || n.onTouchMove(e)
                    }), r(this, 'onTouchEnd', function(e) {
                        e._handledByTouchEnd = !0;
                        var t = n.getTouchContext(e);
                        n.trigger('touchend', e, t), n.maybeTriggerMoreSpecificEvent(e, t), setTimeout(function() {
                            n.resetTouchContext(), n.unbindTouchEndAndTouchMove()
                        }, 0)
                    }), r(this, 'onTouchEndDocument', function(e) {
                        e._handledByTouchEnd || n.onTouchEnd(e)
                    }), this.rootElem = t, this.xDown = this.yDown = null, this.xDiff = this.yDiff = 0, this.isSwipe = !1, this.isPinch = !1, this.startedAt = null, this.initialPinchDistance = null, this.touch1 = this.touch2 = null, this.pinchDistance = 0, this.pinchScale = 0, p(t, 'touchstart', this.onTouchStart, !!b.passiveSupported && {
                        passive: !1
                    })
                }
                return a(e, [{
                    key: 'updatePinch',
                    value: function(t) {
                        var e = this.rootOffset;
                        return 2 === t.touches.length ? (this.touch1 = {
                            left: t.touches[0].pageX - e.left,
                            top: t.touches[0].pageY - e.top
                        }, this.touch2 = {
                            left: t.touches[1].pageX - e.left,
                            top: t.touches[1].pageY - e.top
                        }, this.pinchDistance = Math.sqrt(Math.pow(this.touch1.left - this.touch2.left, 2), Math.pow(this.touch1.top - this.touch2.top, 2)), null == this.initialPinchDistance && (this.initialPinchDistance = this.pinchDistance), this.pinchScale = this.pinchDistance / this.initialPinchDistance, this.pinchDelta = this.pinchDistance - this.initialPinchDistance, this.isPinch = !0, this.pinchScale) : 0
                    }
                }, {
                    key: 'getTouchContext',
                    value: function(t) {
                        var e = this.rootOffset,
                            n = Date.now() - this.startedAt,
                            o = Object(t.touches[0]),
                            i = o.pageX - e.left,
                            a = o.pageY - e.top;
                        return {
                            xOffset: i,
                            yOffset: a,
                            xDelta: this.xDiff,
                            yDelta: this.yDiff,
                            absXDelta: Math.abs(this.xDiff),
                            absYDelta: Math.abs(this.yDiff),
                            delta: Math.sqrt(this.xDiff * this.xDiff + this.yDiff * this.yDiff),
                            startedAt: this.startedAt,
                            isSwipe: !this.isPinch && this.isSwipe,
                            isTap: 1e3 > n && !this.isPinch && !this.isSwipe,
                            isLongPress: 1e3 <= n && !this.isPinch && !this.isSwipe,
                            isPinch: this.isPinch,
                            timeDelta: n,
                            pinchScale: this.pinchScale,
                            pinchDistance: this.pinchDistance
                        }
                    }
                }, {
                    key: 'touchIsInsideRootElem',
                    value: function(e) {
                        return 0 <= e.left && e.left < this.rootWidth && 0 <= e.top && e.top < this.rootHeight
                    }
                }, {
                    key: 'touchesAreInsideRootElem',
                    value: function() {
                        return this.touchIsInsideRootElem(this.touch1) && this.touchIsInsideRootElem(this.touch2)
                    }
                }, {
                    key: 'resetTouchContext',
                    value: function() {
                        this.xDown = this.yDown = null, this.xDiff = this.yDiff = 0, this.isSwipe = !1, this.isPinch = !1, this.startedAt = null, this.pinchDelta = 0, this.pinchDistance = 0, this.initialPinchDistance = null, this.touch1 = this.touch2 = null
                    }
                }, {
                    key: 'maybeTriggerMoreSpecificEvent',
                    value: function(e, t) {
                        t.isLongPress ? this.trigger('longpress', e, t) : t.isTap ? this.trigger('tap', e, t) : t.isSwipe ? this.trigger('swipe', e, t) : t.isPinch && this.trigger('pinch', e, t)
                    }
                }, {
                    key: 'destroy',
                    value: function() {
                        c(this.rootElem, 'touchstart', this.onTouchStart), this.unbindTouchEndAndTouchMove(), this.rootElem = null
                    }
                }, {
                    key: 'unbindTouchEndAndTouchMove',
                    value: function() {
                        c(document, 'touchmove', this.onTouchMoveDocument), c(document, 'touchend', this.onTouchEndDocument), c(this.rootElem, 'touchmove', this.onTouchMove), c(this.rootElem, 'touchend', this.onTouchEnd)
                    }
                }]), e
            }();
        d(A.prototype), l['default'].define('vulcanV2Video/TouchEvents.js', A);
        t['default'] = A
    },
    17: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'globalBind', function() {
            return a
        });
        n.d(t, 'globalOn', function() {
            return r
        });
        n.d(t, 'globalOff', function() {
            return l
        });
        n.d(t, 'globalRebind', function() {
            return s
        });
        n.d(t, 'globalTrigger', function() {
            return d
        });
        n.d(t, 'globalUnbind', function() {
            return u
        });
        var o = n(2),
            i = n(18);
        Object(i.makeWbindable)(o['default']);
        var a = o['default'].bind.bind(o['default']),
            r = o['default'].on.bind(o['default']),
            l = o['default'].off.bind(o['default']),
            s = o['default'].rebind.bind(o['default']),
            d = o['default'].trigger.bind(o['default']),
            u = o['default'].unbind.bind(o['default'])
    },
    18: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'makeWbindable', function() {
            return a
        });
        var o = n(2),
            i = n(19);
        o['default'].bindable || (o['default'].bindable = {
            bind: function(e, t) {
                return this.specialBind && !0 === this.specialBind.apply(this, arguments) ? this : t ? (i.bind.call(this, e, t), this) : void(o['default'].warn && o['default'].warn(this.constructor.name, 'bind', 'falsey value passed in as callback:', t))
            },
            unbind: function(e, t) {
                return this.specialUnbind && !0 === this.specialUnbind.apply(this, arguments) ? this : (t ? i.unbind.call(this, e, t) : this._bindings && (this._bindings[e] = []), this._bindings && this._bindings[e] && !this._bindings[e].length && (this._bindings[e] = null, delete this._bindings[e]), this)
            },
            on: function(e, t) {
                var n = this.specialBind && this.specialBind.apply(this, arguments);
                return 'function' == typeof n ? n : i.bind.call(this, e, t)
            },
            off: function(e, t) {
                var n = this.specialUnbind && this.specialUnbind.apply(this, arguments);
                return 'function' == typeof n ? n : i.unbind.call(this, e, t)
            },
            rebind: function(e, t) {
                return this.unbind(e, t), this.bind(e, t), this
            },
            trigger: function(e) {
                for (var t, n = arguments.length, o = Array(1 < n ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
                return (t = i.trigger).call.apply(t, [this, e].concat(o)), this
            },
            bindNamed: function() {
                return i.bindNamed.apply(this, arguments)
            },
            unbindNamed: function() {
                return i.unbindNamed.apply(this, arguments)
            },
            unbindAllInNamespace: function() {
                return i.unbindAllInNamespace.apply(this, arguments)
            }
        });
        var a = function(e) {
            for (var t in o['default'].bindable) {
                var n = o['default'].bindable[t];
                e[t] || (e[t] = n)
            }
        };
        t['default'] = o['default'].bindable
    },
    19: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'bind', function() {
            return i
        });
        n.d(t, 'unbind', function() {
            return r
        });
        n.d(t, 'rebind', function() {
            return l
        });
        n.d(t, 'trigger', function() {
            return s
        });
        n.d(t, 'once', function() {
            return u
        });
        n.d(t, 'initNamespace', function() {
            return p
        });
        n.d(t, 'bindNamed', function() {
            return g
        });
        n.d(t, 'unbindNamed', function() {
            return y
        });
        n.d(t, 'unbindAllInNamespace', function() {
            return h
        });
        n.d(t, 'bindify', function() {
            return b
        });
        n.d(t, 'Bindings', function() {
            return A
        });
        var o = n(2),
            a = Array.prototype.slice,
            i = function(e, t) {
                var n = this;
                return n._bindings || (n._bindings = {}), n._bindings[e] || (n._bindings[e] = []), n._bindings[e].push(t),
                    function() {
                        n.unbind(e, t)
                    }
            },
            r = function(e, t) {
                if (!this._bindings) return this;
                if (!this._bindings[e]) return this;
                for (var n, o = [], a = 0; a < this._bindings[e].length; a++) n = this._bindings[e][a], n !== t && o.push(n);
                this._bindings[e] = o
            },
            l = function(e, t) {
                return this.unbind(e, t), this.bind(e, t), {
                    event: e,
                    fn: t
                }
            },
            s = function(e) {
                for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                return this._bindings && null != this._bindings.all && d.apply(this, ['all', e].concat(n)), d.apply(this, [e].concat(n))
            },
            d = function(e) {
                if (!this._bindings) return this;
                if (!this._bindings[e]) return this;
                for (var t, n, r = a.call(arguments, 1), l = this._bindings[e], s = 0; s < l.length; s++) {
                    n = l[s];
                    try {
                        var i = n.apply(this, r);
                        i === this.unbind && (null == t && (t = []), t.push({
                            event: e,
                            fn: n
                        }))
                    } catch (t) {
                        if (this._throwTriggerErrors) throw t;
                        else o['default'].error && o['default'].error(t)
                    }
                }
                if (t)
                    for (var d, u = 0; u < t.length; u++) d = t[u], this.unbind(d.event, d.fn);
                return this
            },
            u = function(e, t) {
                return i(e, function() {
                    return t.apply(this, a.call(arguments, 0)), r
                })
            },
            p = function(e, t) {
                null == e._namedBindings && (e._namedBindings = {}), null == e._namedBindings[t] && (e._namedBindings[t] = {})
            },
            c = function(e, t, n) {
                return p(e, t), e._namedBindings[t][n]
            },
            m = function(e, t, n, o, i) {
                p(e, t), e._namedBindings[t][n] = {
                    event: o,
                    fn: i
                }
            },
            g = function(e, t, n, o) {
                return this.unbindNamed(e, t), m(this, e, t, n, o), this.bind(n, o),
                    function() {
                        this.unbindNamed(e, t)
                    }
            },
            y = function(e, t) {
                p(this, e);
                var n = c(this, e, t);
                if (n) {
                    var o = n.event,
                        i = n.fn;
                    this.unbind(o, i)
                }
                var a = this._namedBindings;
                return delete a[e][t], f(a[e]) && delete a[e], this
            },
            h = function(e) {
                var t = this._namedBindings && this._namedBindings[e];
                if (null == t) return this;
                for (var n in t) t.hasOwnProperty(n) && this.unbindNamed(e, n)
            },
            f = function(e) {
                for (var t in e)
                    if (e.hasOwnProperty(t)) return !1;
                return !0
            },
            b = function(e) {
                return e.bind = i, e.unbind = r, e.on = i, e.off = r, e.rebind = l, e.trigger = s, e.bindNamed = g, e.unbindNamed = y, e.unbindAllInNamespace = h, e
            },
            A = function() {};
        b(A.prototype)
    },
    2: function(e, t, n) {
        'use strict';
        n.r(t);
        var o = n(3);
        null == o['default'].Wistia && (o['default'].Wistia = {});
        var i = o['default'].Wistia;
        null == i._initializers && (i._initializers = {}), null == i._destructors && (i._destructors = {}), null == i.mixin && (i.mixin = function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        });
        t['default'] = o['default'].Wistia
    },
    20: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'deliveryHost', function() {
            return c
        });
        n.d(t, 'akamaiHost', function() {
            return m
        });
        n.d(t, 'appHost', function() {
            return g
        });
        n.d(t, 'cdnFastWistiaComHost', function() {
            return y
        });
        n.d(t, 'cdnFastWistiaNetHost', function() {
            return h
        });
        n.d(t, 'eV1Url', function() {
            return f
        });
        n.d(t, 'eV1Host', function() {
            return b
        });
        n.d(t, 'eV1Protocol', function() {
            return A
        });
        n.d(t, 'mediaDataHost', function() {
            return _
        });
        n.d(t, 'metricsHost', function() {
            return v
        });
        n.d(t, 'forceValidFastWistiaHost', function() {
            return k
        });
        var o = n(13),
            i = n.n(o),
            a = n(3),
            r = n(14),
            l = i()('app'),
            s = i()('fast'),
            d = i()('embed-a'),
            u = function() {
                return 'undefined' != typeof window && a['default'] === window && a['default'].location ? a['default'].location.protocol : 'https:'
            }(),
            p = function(e, t, n) {
                return 'https:' === e ? t : n
            },
            c = function() {
                var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : u;
                return p(e, 'embed-ssl.wistia.com', 'undefined')
            },
            m = function() {
                var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : u;
                return p(e, 'embedwistia-a.akamaihd.net', d)
            },
            g = function() {
                return l
            },
            y = function() {
                return s
            },
            h = function() {
                return 'fast.wistia.net'
            },
            f = function() {
                for (var e, t = document.getElementsByTagName('script'), n = 0; n < t.length; n++)
                    if (e = t[n], e.src) {
                        var o = new r.Url(e.src),
                            i = /\/assets\/external\/E-v1(-with-vulcan-v2)?\.js$/.test(o.rawPath),
                            a = o.host === y() || o.host === h(),
                            l = 'https:' === location.protocol && 'https:' === o.protocol,
                            s = '' === o.protocol || null == o.protocol,
                            d = l || s || 'http:' === location.protocol,
                            u = !e.readyState || /loaded|complete/.test(e.readyState);
                        if (i && a && d && u) return o
                    } return new r.Url(''.concat(Object(r.proto)(), '//').concat(h(), '/E-v1.js'))
            }(),
            b = function() {
                return f.host
            },
            A = function() {
                return f.protocol
            },
            _ = function() {
                var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {};
                return e.embedHost ? k(e.embedHost) : b()
            },
            v = function() {
                return 'pipedream.wistia.com'
            },
            w = /(\.wistia\.net|\.wistia.com|\.wistia\.st)$/,
            k = function(e) {
                return e && w.test(e) ? e : b()
            }
    },
    21: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'uncache', function() {
            return r
        });
        n.d(t, 'setOrGet', function() {
            return l
        });
        n.d(t, 'removeLocalStorage', function() {
            return s
        });
        n.d(t, 'dumpLocalStorage', function() {
            return d
        });
        var o = n(2),
            i = n(22),
            a = n(5);
        o['default']._localStorage || (o['default']._localStorage = Object(i.getWistiaLocalStorage)());
        var r = function() {
                o['default']._localStorage = {}
            },
            l = function(e, t) {
                var n = !!(2 < arguments.length && arguments[2] !== void 0) && arguments[2];
                if (null != t) {
                    var r = n ? a.unset : a.set;
                    return o['default']._localStorage = Object(i.updateWistiaLocalStorage)(function(n) {
                        return r(n, e, t)
                    }), t
                }
                return null == e ? o['default']._localStorage : Object(a.get)(o['default']._localStorage, e)
            },
            s = function(e) {
                return l(e, 'nada', !0)
            },
            d = i.removeWistiaLocalStorage
    },
    22: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'getWistiaLocalStorage', function() {
            return s
        });
        n.d(t, 'removeWistiaLocalStorage', function() {
            return d
        });
        n.d(t, 'setWistiaLocalStorage', function() {
            return u
        });
        n.d(t, 'updateWistiaLocalStorage', function() {
            return p
        });
        var i = n(2);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }
        var a = 'wistia',
            r = function(t) {
                setTimeout(function() {
                    throw t
                }, 0)
            },
            l = function() {
                if (null != i['default']._localStorageWorks) return i['default']._localStorageWorks;
                try {
                    var e = localStorage.getItem(a);
                    localStorage.removeItem(a), localStorage.setItem(a, e), i['default']._localStorageWorks = !0
                } catch (t) {
                    i['default']._localStorageWorks = !1
                }
                return i['default']._localStorageWorks
            },
            s = function() {
                if (!l()) return i['default']._localStorage || {};
                if (localStorage[a]) try {
                    return 'null' === localStorage[a] ? {} : JSON.parse(localStorage[a])
                } catch (t) {
                    r(t)
                }
                return {}
            },
            d = function() {
                if (!l()) return void(i['default']._localStorage = {});
                try {
                    localStorage.removeItem(a)
                } catch (t) {
                    r(t)
                }
            },
            u = function(e) {
                if (!l()) return null != e && 'object' === o(e) && (i['default']._localStorage = e), e;
                try {
                    i['default']._localStorage = e, localStorage[a] = JSON.stringify(e)
                } catch (t) {
                    r(t)
                }
                return e
            },
            p = function(e) {
                var t = s();
                try {
                    e(t)
                } catch (t) {
                    r(t)
                }
                return u(t)
            }
    },
    23: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'registerWLib', function() {
            return i
        });
        n.d(t, 'wlib', function() {
            return a
        });
        var o = n(2);
        null == o['default'].libjs && (o['default'].libjs = {});
        var i = function(e, t) {
                null == o['default'].libjs[e] && (o['default'].libjs[e] = t)
            },
            a = function(e) {
                var t = o['default'].libjs[e];
                if (null == t) throw new Error('Internal import for "'.concat(e, '" does not exist. Value is "').concat(t, '".'));
                return t
            };
        o['default'].registerWLib = i, o['default'].lib = a;
        t['default'] = o['default'].lib
    },
    24: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'AJAX_DEFAULTS', function() {
            return g
        });
        n.d(t, 'ajaxGet', function() {
            return y
        });
        n.d(t, 'ajaxHead', function() {
            return h
        });
        n.d(t, 'ajaxPost', function() {
            return f
        });
        n.d(t, 'ajax', function() {
            return b
        });
        var i = n(5),
            a = n(14),
            r = n(16),
            l = n(25),
            s = n(15),
            d = n(7),
            u = n(29),
            p = n(4);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }
        var c = Object(r.cachedDetect)(),
            m = s.wlog.getPrefixedFunctions('ajax'),
            g = {
                type: 'GET',
                contentType: '',
                headers: void 0,
                data: void 0,
                dataType: void 0,
                timeout: 0,
                success: void 0,
                error: void 0,
                complete: void 0
            },
            y = function(e, t) {
                return t = Object(i.merge)({}, t, {
                    type: 'GET',
                    data: void 0
                }), b(e, t)
            },
            h = function(e, t) {
                return t = Object(i.merge)({}, t, {
                    type: 'HEAD',
                    data: void 0
                }), b(e, t)
            },
            f = function(e, t) {
                return t = Object(i.merge)({
                    contentType: 'application/x-www-form-urlencoded'
                }, t, {
                    type: 'POST'
                }), b(e, t)
            },
            b = function(e, t) {
                m.info('ajax', e, t);
                var n = Object(i.merge)({}, g, t),
                    r = new a.Url(e);
                r.protocol = r.protocol || Object(a.proto)();
                var s = !!(c.browser.msie && 11 > c.browser.version),
                    y = Object(a.proto)() !== r.protocol;
                if (m.info('noHttpToHttpsSupport', s, 'isHttpToHttps', y), n.fallbackToJsonp && y && s)
                    if (m.info('fallbackToJsonp'), !n.type || /get/i.test(n.type)) {
                        var h = r.params;
                        n.data && Object(i.isObject)(n.data) && (h = Object(i.merge)(h, n.data)), n.jsonpCallback && (h.callback = n.jsonpCallback), r.params = {}, Object(l.removeScriptsBySrc)(r.absolute(), {
                            ignoreProtocol: !0,
                            testStartsWith: !0
                        });
                        var f = Object(d['default'])('ajax-jsonp.');
                        Object(u.jsonp)(r.absolute(), h, function(e) {
                            if (Object(p.clearTimeouts)(f), 'json' === n.dataType && 'string' == typeof e) try {
                                var t = JSON.parse(e);
                                n.success(t, 'OK', e), n.complete(null, 'OK')
                            } catch (t) {
                                n.error(null, 'parseerror', e), n.complete(null, e)
                            } else n.success(e, 'OK')
                        }), Object(p.doTimeout)(f, function() {
                            n.error(null, 'timeout'), m.warn('request timed out:', r.absolute(), h)
                        }, 6e4)
                    } else return void(Object(i.isFunction)(n.error) && n.error.call(null, null, 'error', 'This browser does not support POST requests from an http to an https domain. To use this feature, please make sure this page is loaded over https.'));
                var b = r.absolute(),
                    A = _(b);
                if (!A) return Object(i.isFunction)(n.error) && n.error.call(null, A, 'error', 'Could not create XMLHttpRequest'), void(Object(i.isFunction)(n.complete) && n.complete.call(null, A, 'error'));
                var v = null != window.XDomainRequest && A instanceof window.XDomainRequest,
                    w = !1,
                    k = !1,
                    C = function(e, t, o) {
                        !w && Object(i.isFunction)(n.error) && n.error.call(null, e, t, o), w = !0
                    },
                    S = function(e, t, o) {
                        Object(i.isFunction)(n.success) && !w && n.success.call(null, e, t, o), w = !0
                    },
                    P = function(e, t) {
                        Object(i.isFunction)(n.complete) && !k && n.complete.call(null, e, t), e.onerror = e.ontimeout = e[v ? 'onload' : 'onreadystatechange'] = null, k = !0
                    };
                m.info('xhr.open', n.type, b), A.open(n.type, b, !0);
                var E = function() {
                        if (!(null != A.status && (200 <= A.status && 300 > A.status || 304 == A.status))) C(A, 'error', A.statusText), m.warn('error', A.statusText);
                        else if ('json' == n.dataType && 'object' !== o(A.response)) try {
                            var e = JSON.parse(A.responseText);
                            m.info('success', A.statusText, e), S(e, A.statusText, A)
                        } catch (t) {
                            C(A, 'parseerror', t), m.warn('parseerror'), m.warn(t)
                        } else S(A.response || A.responseText, A.statusText, A), m.info('success', A.statusText, A.response || A.responseText);
                        P(A, A.statusText), m.info('complete', A.statusText)
                    },
                    T = function(e, t) {
                        C(A, e, t), P(A, e)
                    };
                if (n.timeout && (A.timeout = n.timeout), null != n.dataType && (A.responseType = n.dataType), Object(i.isFunction)(A.setRequestHeader) && (n.contentType && A.setRequestHeader('Content-Type', n.contentType), n.headers))
                    for (var B in n.headers) A.setRequestHeader(B, n.headers[B]);
                if (n.withCredentials && (A.withCredentials = !0), v) {
                    if (m.info('isXDomainObject'), null != n.headers) return T('error', 'custom headers disallowed for XDomainRequest');
                    A.onload = function() {
                        m.info('XDomainObject onload'), A.status = 200, A.statusText = 'OK', E()
                    }, A.onerror = function() {
                        return T('error', 'error')
                    }, A.ontimeout = function() {
                        return T('timeout', 'timeout')
                    }
                } else A.onreadystatechange = function() {
                    m.info('xhr onreadystatechange', A.readyState), 4 == A.readyState && E()
                }, A.onerror = function() {
                    return T('error', 'error')
                }, A.ontimeout = function() {
                    return T('timeout', 'timeout')
                };
                return m.info('xhr.send', n.data), A.send(n.data), A
            },
            A = [function() {
                var e, t;
                return function(n) {
                    if (null != window.XDomainRequest) {
                        null == e && (e = window.location.href), null == t && (t = new a.Url(e.toLowerCase()));
                        var o = new a.Url(n.toLowerCase()),
                            i = !1;
                        return i || (i = t.protocol != o.protocol), i || (i = t.host != o.host), i ? new window.XDomainRequest : null
                    }
                }
            }(), function() {
                return new XMLHttpRequest
            }, function() {
                return new ActiveXObject('Microsoft.XMLHTTP')
            }],
            _ = function(e) {
                for (var t, n = void 0, o = 0; o < A.length; o++) {
                    t = A[o];
                    try {
                        n = t(e)
                    } catch (t) {
                        continue
                    }
                    if (n) break
                }
                return n
            }
    },
    25: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'findScriptInDomBySrc', function() {
            return u
        });
        n.d(t, 'removeScriptsBySrc', function() {
            return s
        });
        n.d(t, 'runScript', function() {
            return p
        });
        n.d(t, 'runScripts', function() {
            return c
        });
        n.d(t, 'scriptInputsToHash', function() {
            return m
        });
        var i = n(26),
            a = n.n(i),
            r = n(15),
            l = n(5),
            d = n(27);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }
        var u = function(e) {
                for (var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n = document.getElementsByTagName('script'), o = 0; o < n.length; o++) {
                    var i = n[o],
                        a = i.getAttribute('src') || '';
                    if (t.ignoreQueryParams) {
                        var r = a.split('?'),
                            l = r[0];
                        a = l
                    }
                    if (!t.scriptRegex && t.ignoreProtocol && (a = a.replace(/^https?:/, ''), e = e.replace(/^https?:/, '')), t.scriptRegex && t.scriptRegex.test(a)) return i;
                    if (t.testStartsWith && 0 === a.indexOf(e)) return i;
                    if (a === e) return i
                }
                return null
            },
            s = function(e) {
                for (var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}; t = u(e, n);)
                    if (t && (t.onload = t.onreadystatechange = t.onerror = null, t.parentNode && o(t.parentNode.removeChild))) try {
                        t.parentNode.removeChild(t)
                    } catch (t) {
                        setTimeout(function() {
                            throw t
                        }, 0)
                    }
            },
            p = function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 8e3,
                    o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                null == n && (n = 8e3), null == o && (o = {});
                var i, r, l = new a.a,
                    s = new a.a;
                return !0 === o.once && (i = u(e)) && (r = !0), o.once && r ? (!i.readyState || /loaded|complete/.test(i.readyState)) && setTimeout(function() {
                    l(!0)
                }, 1) : Object(d['default'])(e, n).then(function() {
                    l(!0)
                }).catch(function(e) {
                    l(!0, e), setTimeout(function() {
                        throw e
                    }, 1)
                }), 'function' == typeof t && l.then(t), {
                    loaded: l,
                    error: function() {
                        return s
                    }
                }
            },
            c = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (t[0] instanceof Array) {
                    var o = t[1];
                    t = t[0], o && (t = t.concat(o))
                }
                t = m(t);
                for (var l, s = 0; s < t.length; s++) l = t[s], l.src && l.preloadAllowed && p(l.src, null, null, l);
                for (var i = [], d = [], u = 0; u < t.length; u++) {
                    var c = t[u],
                        g = new a.a,
                        y = new a.a;
                    (function(e, t, n) {
                        a.a.when.apply(a.a, i).run(function() {
                            if (e.fn) {
                                var o = function() {
                                    try {
                                        e.fn()
                                    } catch (t) {
                                        r.wlog.error(t)
                                    } finally {
                                        t.go(), n.go()
                                    }
                                };
                                e.async ? setTimeout(o, 1) : o()
                            } else if (e.src) {
                                var i = function() {
                                    p(e.src, null, null, e).loaded(function() {
                                        n.go(), t.go()
                                    })
                                };
                                e.async ? (setTimeout(i, 1), t.go()) : setTimeout(i, 1)
                            }
                        })
                    })(c, g, y), i.push(g), d.push(y)
                }
                return {
                    loaded: a.a.when.apply(a.a, d)
                }
            },
            m = function(e) {
                for (var t, n = [], o = 0; o < e.length; o++) t = e[o], 'string' == typeof t ? n.push({
                    src: t,
                    async: !1
                }) : Object(l.isObject)(t) ? n.push(t) : n.push({
                    fn: t,
                    async: !1
                });
                return n
            }
    },
    26: function(e) {
        var t, n = [].slice;
        t = function() {
            function e() {
                return this._queue = [], this._green = !1, this._lock = !1, this.allInOne = function(e) {
                    return function() {
                        return e._allInOne.apply(e, arguments)
                    }
                }(this), this.defineMethodsOn(this.allInOne), this.allInOne
            }
            return e.prototype.defineMethodsOn = function(e) {
                var t, n, o, i, a;
                for (n in t = {}, o = this, i = [], o) a = o[n], i.push(function() {
                    return function(n, o, i) {
                        if ('[object Function]' === t.toString.call(o)) return e[n] = function() {
                            return i[n].apply(i, arguments)
                        }
                    }
                }(this)(n, a, this));
                return i
            }, e.prototype.flush = function() {
                var e, t;
                if (e = 1 <= arguments.length ? n.call(arguments, 0) : [], !this._green) return this;
                for (this._lock = !0; 0 < this._queue.length && (t = this._queue.shift(), e.length || !this.goArgs ? this.tryAndReport(function() {
                        return t.apply(null, e)
                    }) : this.tryAndReport(function(e) {
                        return function() {
                            return t.apply(null, e.goArgs)
                        }
                    }(this)), !this._block && this._green););
                return this._lock = !1, this
            }, e.prototype._debug = function() {
                return 'undefined' != typeof console && null !== console ? console.log.apply(console, arguments) : void 0
            }, e.prototype.synchronize = function() {
                var e, t, o, i;
                for (t = 1 <= arguments.length ? n.call(arguments, 0) : [], o = 0, i = t.length; o < i; o++) e = t[o], this.synchronizeFn(e);
                return this
            }, e.prototype.synchronizeFn = function(e) {
                var t, n, o;
                return n = null, t = function(e) {
                    return function() {
                        return clearTimeout(n), e._block = !1, e.go()
                    }
                }(this), o = function(n) {
                    return function() {
                        return n._block = !0, n.stop(), e(t)
                    }
                }(this), n = setTimeout(function(n) {
                    return function() {
                        return n._debug('StopGo#synchronize timed out', e), t()
                    }
                }(this), 5e3), this.runFn(o), this
            }, e.prototype.tryAndReport = function(t) {
                var n;
                try {
                    return t()
                } catch (e) {
                    return n = e, n.stack ? ('undefined' != typeof console && null !== console && console.log(n.message), 'undefined' != typeof console && null !== console ? console.log(n.stack) : void 0) : 'undefined' != typeof console && null !== console ? console.log(n) : void 0
                }
            }, e.prototype.clearSynchronized = function() {
                return this.setQueue([]), this._block = !1, this._green = !0
            }, e.prototype.filter = function(e) {
                var t;
                return this._queue = function() {
                    var n, o, i, a;
                    for (i = this._queue, a = [], (n = 0, o = i.length); n < o; n++) t = i[n], e(t) && a.push(t);
                    return a
                }.call(this), this
            }, e.prototype.push = function(e) {
                return this._queue.push(e), this
            }, e.prototype.go = function() {
                var e;
                return e = 1 <= arguments.length ? n.call(arguments, 0) : [], this._green = !0, this.goArgs = e, this.flush.apply(this, e), this
            }, e.prototype.stop = function() {
                return this._green = !1, this
            }, e.prototype.run = function() {
                var e, t, o, i;
                for (t = 1 <= arguments.length ? n.call(arguments, 0) : [], o = 0, i = t.length; o < i; o++) e = t[o], this.runFn(e);
                return this
            }, e.prototype.then = function() {
                return this.run.apply(this, arguments)
            }, e.prototype.runFn = function(e) {
                return this._green && !this._block ? this._lock ? this.tryAndReport(e) : (this.push(e), this.flush()) : this.push(e), this
            }, e.prototype.remove = function() {
                var e, t, o, i;
                for (t = 1 <= arguments.length ? n.call(arguments, 0) : [], o = 0, i = t.length; o < i; o++) e = t[o], this.removeFn(e);
                return this
            }, e.prototype.removeFn = function(e) {
                return this.filter(function(t) {
                    return e !== t
                }), this
            }, e.prototype.setQueue = function(e) {
                return this._queue = e, this
            }, e.prototype.getQueue = function() {
                return this._queue
            }, e.prototype._allInOne = function() {
                var e, t;
                return e = arguments[0], t = 2 <= arguments.length ? n.call(arguments, 1) : [], !0 === e ? this.go.apply(this, t) : !1 === e ? this.stop() : null == e ? this._green : e instanceof Array ? this.run.apply(this, e) : 'string' == typeof e ? this[e].apply(this, t) : this.run.apply(this, arguments)
            }, e
        }(), t.when = function() {
            var e, o, i, a, r, l, s, d;
            for (d = 1 <= arguments.length ? n.call(arguments, 0) : [], l = new t, i = function() {
                    return l.go.apply(l, arguments)
                }, r = d.reverse(), e = function(e, t) {
                    return i = function() {
                        return t(function() {
                            return e.apply(null, arguments)
                        })
                    }
                }, (o = 0, a = r.length); o < a; o++) s = r[o], e(i, s);
            return i(), l
        }, e.exports = t
    },
    27: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'runScript', function() {
            return a
        });
        var o = n(28),
            i = n.n(o),
            a = function(e, t) {
                return new i.a(function(n, o) {
                    null == t && (t = 8e3);
                    var i;
                    i = document.createElement('script'), i.src = e, i.async = !0, i.type = 'text/javascript';
                    var a = null,
                        r = !1,
                        l = function() {
                            i.onerror = i.onreadystatechange = i.onload = null, clearTimeout(a), clearTimeout(d), a = setTimeout(function() {
                                i && i.parentNode && i.parentNode.removeChild(i)
                            }, 500)
                        },
                        s = function() {
                            var e = i.readyState;
                            r || e && !/loaded|complete/.test(e) || (r = !0, setTimeout(function() {
                                n(), l()
                            }, 1))
                        },
                        d = setTimeout(function() {
                            r = !0, l(), o('timeout')
                        }, t);
                    i.onerror = function() {
                        r = !0, l(), o('error')
                    }, i.onreadystatechange = s, i.onload = s, (document.body || document.head).appendChild(i)
                })
            };
        t['default'] = a
    },
    28: function(e) {
        function t(e) {
            return t = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, t(e)
        }(function(n, o) {
            function a(e, n) {
                return t(n)[0] == e
            }

            function r(e, t) {
                return t = function s(d, u, p, c, m, g) {
                    if (c = s.q, d != a) return r(function(e, t) {
                        c.push({
                            p: this,
                            r: e,
                            j: t,
                            1: d,
                            0: u
                        })
                    });
                    if (p && a(n, p) | a(o, p)) try {
                        m = p.then
                    } catch (e) {
                        u = 0, p = e
                    }
                    if (a(n, m)) {
                        var i = function(e) {
                            return function(t) {
                                m && (m = 0, s(a, e, t))
                            }
                        };
                        try {
                            m.call(p, i(1), u = i(0))
                        } catch (e) {
                            u(e)
                        }
                    } else
                        for (t = function(t, o) {
                                return a(n, t = u ? t : o) ? r(function(e, n) {
                                    l(this, e, n, p, t)
                                }) : e
                            }, g = 0; g < c.length;) m = c[g++], a(n, d = m[u]) ? l(m.p, m.r, m.j, p, d) : (u ? m.r : m.j)(p)
                }, t.q = [], e.call(e = {
                    then: function(e, n) {
                        return t(e, n)
                    },
                    catch: function(e) {
                        return t(0, e)
                    }
                }, function(e) {
                    t(a, 1, e)
                }, function(e) {
                    t(a, 0, e)
                }), e
            }

            function l(e, t, i, r, l) {
                var s = function() {
                    try {
                        r = l(r), l = r && a(o, r) | a(n, r) && r.then, a(n, l) ? r == e ? i(TypeError()) : l.call(r, t, i) : t(r)
                    } catch (e) {
                        i(e)
                    }
                };
                window.setImmediate ? window.setImmediate(s) : setTimeout(s, 0)
            }

            function i(e) {
                return r(function(t) {
                    t(e)
                })
            }
            return window.Promise ? void(e.exports = window.Promise) : void(e.exports = r, r.resolve = i, r.reject = function(e) {
                return r(function(t, n) {
                    n(e)
                })
            }, r.all = function(e) {
                return r(function(t, n, o, a) {
                    a = [], o = e.length || t(a), e.map(function(e, r) {
                        i(e).then(function(e) {
                            a[r] = e, --o || t(a)
                        }, n)
                    })
                })
            }, r.race = function(e) {
                return r(function(t, n) {
                    e.map(function(e) {
                        i(e).then(t, n)
                    })
                })
            })
        })('f', 'o')
    },
    29: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'jsonp', function() {
            return o
        });
        n.d(t, 'jsonpPlus', function() {
            return p
        });
        var i = n(3),
            a = n(2),
            r = n(14),
            l = n(25),
            s = n(30),
            d = n(15),
            u = d.wlog.getPrefixedFunctions('jsonp');
        null == a['default']._jsonpCounter && (a['default']._jsonpCounter = 0);

        function o(e, t, n, o) {
            var d = '?';
            for (var p in t = t || {}, t) 'callback' != p && t.hasOwnProperty(p) && null != t[p] && (d += encodeURIComponent(p) + '=' + encodeURIComponent(t[p]) + '&');
            u.info(e, d, o);
            var c, m;
            if (o && o.once && (c = (e + d).replace(/\.json(?!p)/, '.jsonp'), c = c.replace(/&$/, ''), m = Object(l.findScriptInDomBySrc)(c, {
                    ignoreProtocol: !0,
                    scriptRegex: o.scriptRegex
                })), m) {
                var g = new r.Url(c),
                    y = 'wistiajsonp-' + g.relative();
                u.info('script already in DOM', c, 'polling', y), Object(s.poll)(function() {
                    return u.info('found', y, 'on root object'), null != i['default'][y]
                }, function() {
                    n(i['default'][y])
                }, 15, 3e4)
            } else {
                var h;
                h = t && t.callback ? t.callback : 'wistiajson' + ++a['default']._jsonpCounter, u.info('defining on root:', h), i['default'][h] = function(e) {
                    n(e), delete i['default'][h], i['default'][h] = null
                };
                var f = e + d + 'callback=' + h;
                u.info('runScript', f), Object(l.runScript)(f)
            }
            return h
        }
        var p = function(e, t, n) {
            var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : {};
            i.timeout || (i.timeout = 5e3), i.onerror || (i.onerror = function() {});
            var a = setTimeout(i.onerror, i.timeout);
            o(e, t, function(e) {
                clearTimeout(a), n && n(e)
            }, i)
        }
    },
    3: function(e, t, n) {
        'use strict';
        n.r(t);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }
        var i;
        try {
            i = self, i.self !== i && o(i.self) !== void 0 && 'undefined' != typeof window && (i = window)
        } catch (e) {
            i = 'undefined' == typeof globalThis ? window : globalThis
        }
        t['default'] = i
    },
    30: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'unbreakifyText', function() {
            return a
        });
        n.d(t, 'unescapeHtml', function() {
            return r
        });
        n.d(t, 'stripHtml', function() {
            return l
        });
        n.d(t, 'camelCase', function() {
            return s
        });
        n.d(t, 'snakeCase', function() {
            return d
        });
        n.d(t, 'shallowCamelizeKeys', function() {
            return u
        });
        n.d(t, 'shallowSnakeKeys', function() {
            return p
        });
        n.d(t, 'base64Decode', function() {
            return m
        });
        n.d(t, 'base64Encode', function() {
            return g
        });
        n.d(t, 'notSetOrTrue', function() {
            return y
        });
        n.d(t, 'niceDuration', function() {
            return h
        });
        n.d(t, 'padNumber', function() {
            return f
        });
        n.d(t, 'preventOuterMouseWheel', function() {
            return b
        });
        var o = n(31);
        n.d(t, 'poll', function() {
            return o['default']
        });
        var i = n(32);
        n.d(t, 'throttle', function() {
            return i['default']
        });
        var a = function() {
                var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : '';
                return e.replace(' ', '&nbsp;')
            },
            r = function(t) {
                var n = document.createElement('div');
                return n.innerHTML = t.toString().replace(/</g, '&lt;').replace(/>/g, '&gt;'), 0 < n.childNodes.length ? n.childNodes[0].nodeValue : ''
            },
            l = function(e) {
                var t = document.createElement('div');
                return t.innerHTML = e, t.textContent || t.innerText || ''
            },
            s = function(e) {
                return e.replace(/[_-]([a-z])/g, function(e) {
                    return e.charAt(1).toUpperCase()
                })
            },
            d = function(e) {
                return e.replace(/[A-Z]/g, function(e) {
                    return '_' + e.toLowerCase()
                })
            },
            u = function(e) {
                return Object.keys(e).reduce(function(t, n) {
                    return t[s(n)] = e[n], t
                }, {})
            },
            p = function(e) {
                return Object.keys(e).reduce(function(t, n) {
                    return t[d(n)] = e[n], t
                }, {})
            },
            c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
            m = function(e) {
                var t = 0,
                    n = '';
                for (e = e.replace(/[^A-Za-z0-9+/=]/g, ''); t < e.length;) {
                    var o = c.indexOf(e.charAt(t++)),
                        i = c.indexOf(e.charAt(t++)),
                        a = c.indexOf(e.charAt(t++)),
                        r = c.indexOf(e.charAt(t++));
                    n += String.fromCharCode(o << 2 | i >> 4), 64 != a && (n += String.fromCharCode((15 & i) << 4 | a >> 2)), 64 != r && (n += String.fromCharCode((3 & a) << 6 | r))
                }
                return n
            },
            g = function(e) {
                for (var t = 0, n = ''; t < e.length;) {
                    var o = e.charCodeAt(t++),
                        i = e.charCodeAt(t++),
                        a = e.charCodeAt(t++),
                        r = (15 & i) << 2 | a >> 6,
                        l = 63 & a;
                    isNaN(i) ? r = l = 64 : isNaN(a) && (l = 64), n = n + c.charAt(o >> 2) + c.charAt((3 & o) << 4 | i >> 4) + c.charAt(r) + c.charAt(l)
                }
                return n
            },
            y = function(e) {
                return null == e || !0 === e
            },
            h = function(e) {
                var t = 0,
                    n = 0,
                    o = 0;
                return 0 < e && (t += Math.floor(e / 3600), e %= 3600), 0 < e && (n += Math.floor(e / 60), e %= 60), o = Math.round(e), 60 === n && (t += 1, n = 0), 60 === o && (n += 1, o = 0), 0 === t ? ''.concat(n, ':').concat(f(o, 2)) : ''.concat(t, ':').concat(f(n, 2), ':').concat(f(o, 2))
            },
            f = function(e) {
                for (var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, n = '' + e; n.length < t;) n = '0' + n;
                return n
            },
            b = function(t, e) {
                var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : 0,
                    o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : 0,
                    i = e.scrollTop,
                    a = e.scrollHeight,
                    r = e.offsetHeight,
                    l = function() {
                        var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : 0;
                        return 0 >= i + e - n
                    },
                    s = function() {
                        var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : 0;
                        return i + e + o >= a - r
                    },
                    d = t.deltaY || -t.wheelDelta,
                    u = 0 < d ? 'down' : 'up',
                    p = !!t.deltaY;
                if (p)('up' === u && l() || 'down' === u && s()) && t.preventDefault();
                else {
                    var c = 47.5 * d / 120;
                    'up' === u && l(c) ? (t.preventDefault(), e.scrollTop = 0) : 'down' === u && s(c) && (t.preventDefault(), e.scrollTop = a - r)
                }
            }
    },
    31: function(e, t, n) {
        'use strict';
        n.r(t);
        t['default'] = function(e, t) {
            var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : 50,
                o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : 5e3,
                i = 4 < arguments.length ? arguments[4] : void 0,
                a = null,
                r = new Date().getTime();
            a = setTimeout(function l() {
                return new Date().getTime() - r > o ? void('function' == typeof i && i()) : void(e() ? t() : (clearTimeout(a), a = setTimeout(l, n)))
            }, 1)
        }
    },
    315: function(e, t, n) {
        'use strict';
        n.r(t);
        var p = n(2);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : s(e)
        }

        function s(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function d(e) {
            return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, d(e)
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }
        var m = p['default'].lib('preact'),
            g = m.h,
            y = m.render,
            h = m.Component,
            f = function(e) {
                function t() {
                    return i(this, t), l(this, d(t).apply(this, arguments))
                }
                return u(t, e), r(t, [{
                    key: 'shouldComponentUpdate',
                    value: function() {
                        return !1
                    }
                }, {
                    key: 'render',
                    value: function() {
                        var e = this.props;
                        return g('div', {
                            class: e.class || 'w-html-stub',
                            style: e.style,
                            ref: e.stubRef,
                            "data-handle": e.handle
                        })
                    }
                }, {
                    key: 'componentDidMount',
                    value: function() {
                        var e = this.props.mount;
                        e && e(this.base)
                    }
                }, {
                    key: 'componentWillUnmount',
                    value: function() {
                        var e = this.props.destroy;
                        e && e()
                    }
                }]), t
            }(h);
        p['default'].define('vulcanV2Video/ui_components/RawHTMLStub.js', f);
        t['default'] = f
    },
    319: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'cssResetForSelector', function() {
            return u
        });
        var o = n(6),
            i = {
                "background-attachment": 'scroll',
                "background-color": 'transparent',
                "background-image": 'none',
                "background-position": '0 0',
                "background-repeat": 'no-repeat',
                "background-size": '100% 100%'
            },
            a = {
                "box-sizing": 'inherit',
                "box-shadow": 'none',
                color: 'inherit',
                display: 'block',
                float: 'none',
                font: 'inherit',
                "font-family": 'inherit',
                "font-style": 'normal',
                "font-weight": 'normal',
                "font-size": 'inherit',
                "letter-spacing": 0,
                "line-height": 'inherit',
                margin: 0,
                "max-height": 'none',
                "max-width": 'none',
                "min-height": 'none',
                "min-width": 'none',
                padding: 0,
                position: 'static',
                "text-decoration": 'none',
                "text-transform": 'none',
                "text-shadow": 'none',
                transition: 'none',
                "word-wrap": 'normal',
                "-webkit-tap-highlight-color": 'rgba(0,0,0,0)',
                "-webkit-user-select": 'none',
                "-webkit-font-smoothing": 'antialiased'
            },
            r = {
                border: 0,
                "border-radius": 0,
                outline: 'none',
                position: 'static'
            },
            l = function(e) {
                var t = [];
                for (var n in e) {
                    var o = e[n];
                    t.push(''.concat(n, ':').concat(o))
                }
                return t.join(';')
            },
            s = '\n&{font-size:14px;}\ndiv,span,ul,li,label,button,img,a,svg,p{'.concat(l(a), '}\na{border:0;}\np{margin:1.4em 0;}\na,span,svg{display:inline;}\nul,ol,li{').concat(l(Object(o['default'])({}, a, {
                "list-style-type": 'none',
                position: 'static'
            })), '}\nul:before,ol:before,li:before{display:none}\nul:after,ol:after,li:after{display:none}\nlabel{').concat(l(Object(o['default'])({}, i, {
                float: 'none',
                outline: 'none'
            })), '}\nbutton{').concat(l(Object(o['default'])({}, i, r)), '}\nimg{').concat(l(Object(o['default'])({}, {
                border: 0,
                display: 'inline-block',
                "vertical-align": 'top'
            }, r)), '}\n'),
            d = function(e, t, n) {
                var o = n.indexOf('{'),
                    i = n.substring(0, o),
                    a = n.substring(o, n.length),
                    r = i.split(/,\s*/);
                return r.map(function(n) {
                    return 0 <= n.indexOf('&') ? ''.concat(n.replace(/&/g, e)).concat(t).concat(a) : ''.concat(e).concat(n).concat(t).concat(a)
                }).join('\n')
            },
            u = function(e, t) {
                return s.trim().split(/\n+/).map(function(n) {
                    return d(e, t, n)
                }).join('\n')
            }
    },
    32: function(e, t, n) {
        'use strict';
        n.r(t);
        t['default'] = function(e, t) {
            var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {},
                o = null,
                i = null,
                a = null,
                r = null,
                l = 0,
                s = function() {
                    l = !1 === n.leading ? 0 : new Date().getTime(), r = null, a = t.apply(o, i), r || (o = i = null)
                };
            return function() {
                var d = new Date().getTime();
                l || !1 !== n.leading || (l = d);
                var u = e - (d - l);
                return o = this, i = arguments, 0 >= u || u > e ? (clearTimeout(r), r = null, l = d, a = t.apply(o, i), !r && (o = i = null)) : !r && !1 !== n.trailing && (r = setTimeout(s, u)), a
            }
        }
    },
    323: function(e, t, n) {
        'use strict';
        n.r(t);
        var g = n(2),
            y = n(324);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i() {
            return i = Object.assign || function(e) {
                for (var t, n = 1; n < arguments.length; n++)
                    for (var o in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, i.apply(this, arguments)
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function l(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
        }

        function s(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : u(e)
        }

        function d(e) {
            return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, d(e)
        }

        function u(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function p(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }

        function m(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var f = g['default'].lib('utilities/obj'),
            b = f.assign,
            A = g['default'].lib('preact'),
            _ = A.h,
            h = A.render,
            v = A.Component,
            w = g['default'].lib('player/lib/hosts'),
            k = w.eV1Protocol,
            C = w.eV1Host,
            S = function(e) {
                function t(e) {
                    var n;
                    return a(this, t), n = s(this, d(t).call(this, e)), m(u(n), 'afterTwoSeconds', function() {
                        n._displayed || 1 !== n.state.normalThumbOpacity || n.setState({
                            normalThumbOpacity: 0
                        })
                    }), m(u(n), 'onDisplayNormalThumb', function() {
                        n.setState({
                            normalThumbOpacity: 1
                        }), n._displayed = !0, n.onDisplay && n.onDisplay()
                    }), n.state = {
                        normalThumbOpacity: e.isVisible ? 1 : 0
                    }, n.onDisplay = e.onDisplay, n
                }
                return p(t, e), l(t, [{
                    key: 'componentWillReceiveProps',
                    value: function(e) {
                        !this.onDisplay && e.onDisplay && (this.onDisplay = e.onDisplay)
                    }
                }, {
                    key: 'render',
                    value: function() {
                        this.props.isVisible && (this._hasRenderedVisible = !0);
                        var e = {
                                backgroundColor: this.props.backgroundColor,
                                fitStrategy: this.props.fitStrategy,
                                isVisible: this.props.isVisible,
                                stillSnap: this.props.stillSnap,
                                stretchLimit: this.props.stretchLimit,
                                videoHeight: this.props.videoHeight,
                                videoWidth: this.props.videoWidth,
                                thumbnailAltText: this.props.thumbnailAltText
                            },
                            t = b({}, e, {
                                images: [{
                                    url: ''.concat(k(), '//').concat(C(), '/embed/medias/').concat(this.props.hashedId, '/swatch')
                                }]
                            }),
                            n = b({}, e, {
                                onDisplay: this.onDisplayNormalThumb,
                                images: this.props.images
                            });
                        return _('div', null, this.props.swatchEnabled && this._hasRenderedVisible ? _(y['default'], i({}, t, {
                            wrapperStyle: this.swatchWrapperStyle()
                        })) : null, this._hasRenderedVisible ? _(y['default'], i({}, n, {
                            wrapperStyle: this.normalThumbWrapperStyle()
                        })) : null)
                    }
                }, {
                    key: 'componentDidMount',
                    value: function() {
                        setTimeout(this.afterTwoSeconds, 2e3)
                    }
                }, {
                    key: 'normalThumbWrapperStyle',
                    value: function() {
                        var e = this.props.swatchEnabled && this.props.uiHasRendered && 1 === this.state.normalThumbOpacity ? 'opacity 3s' : '';
                        return {
                            height: '100%',
                            left: 0,
                            opacity: this.state.normalThumbOpacity,
                            position: 'naturalHeight' === this.props.fitStrategy ? 'relative' : 'absolute',
                            top: 0,
                            transition: e,
                            width: '100%'
                        }
                    }
                }, {
                    key: 'swatchWrapperStyle',
                    value: function() {
                        return {
                            filter: 'blur(5px)',
                            height: '100%',
                            left: 0,
                            position: 'naturalHeight' === this.props.fitStrategy ? 'relative' : 'absolute',
                            top: 0,
                            width: '100%'
                        }
                    }
                }]), t
            }(v);
        t['default'] = S
    },
    324: function(e, t, n) {
        'use strict';
        n.r(t);
        var p = n(2);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : s(e)
        }

        function s(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function d(e) {
            return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, d(e)
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }
        var m = p['default'].lib('promiscuous'),
            g = p['default'].lib('preact'),
            y = g.h,
            h = g.render,
            f = g.Component,
            b = p['default'].lib('utilities/obj'),
            A = p['default'].lib('player/lib/elem'),
            _ = A.elemInDom,
            v = p['default'].lib('player/translations'),
            w = v.getTranslation,
            k = v.defineTranslations,
            C = p['default'].lib('player/lib/hosts'),
            S = C.eV1Host,
            P = p['default'].lib('utilities/detect'),
            E = P.cachedDetect,
            T = E();
        k('en-US', {
            THUMBNAIL_VIDEO_THUMBNAIL: 'Video Thumbnail'
        });
        var B = function(e) {
            function t(e) {
                var n;
                return i(this, t), n = l(this, d(t).call(this, e)), n.initialState = n.state = {
                    isLoaded: !1,
                    isDisplaying: !1
                }, n.onDisplay = n.props.onDisplay, n
            }
            return u(t, e), r(t, [{
                key: 'componentWillReceiveProps',
                value: function(e) {
                    e.images !== this.props.images && (clearTimeout(this.loadTimeout), this._sortedImages = null, this.loadTimeout = null, this.setState({
                        isLoaded: !1,
                        isDisplaying: !1
                    })), !this.onDisplay && e.onDisplay && (this.onDisplay = e.onDisplay)
                }
            }, {
                key: 'render',
                value: function() {
                    var t = this,
                        e = void 0 === this.props.thumbnailAltText ? this.t('VIDEO_THUMBNAIL') : this.props.thumbnailAltText;
                    return y('div', {
                        style: this.wrapperStyle(),
                        class: 'w-css-reset'
                    }, y('img', {
                        class: 'w-css-reset',
                        srcset: 1 < this.props.images.length ? this.srcSet() : null,
                        src: this.bestSrc(),
                        style: this.imgStyle(),
                        alt: e,
                        ref: function(n) {
                            return t.imgElem = n
                        }
                    }))
                }
            }, {
                key: 't',
                value: function(e) {
                    return w(this.props.playerLanguage, 'THUMBNAIL_'.concat(e))
                }
            }, {
                key: 'componentDidMount',
                value: function() {
                    this.setStateBasedOnImgStatus(), this.maybeCallOnDisplay(this.initialState)
                }
            }, {
                key: 'componentDidUpdate',
                value: function(e, t) {
                    this.setStateBasedOnImgStatus(), this.maybeCallOnDisplay(t)
                }
            }, {
                key: 'maybeCallOnDisplay',
                value: function() {
                    this.onDisplay && this.state.isDisplaying && !this.calledOnDisplay && (this.calledOnDisplay = !0, this.onDisplay())
                }
            }, {
                key: 'setStateBasedOnImgStatus',
                value: function() {
                    var e = this,
                        t = this.state,
                        n = this.imgElem;
                    t.isLoaded || (!n.onload && (n.onload = function() {
                        _(n) && e.setState({
                            isLoaded: !0
                        })
                    }), n.complete && this.setState({
                        isLoaded: !0
                    })), !t.isDisplaying && t.isLoaded && this.setState({
                        isDisplaying: !0
                    })
                }
            }, {
                key: 'wrapperStyle',
                value: function() {
                    var e = this.state.isDisplaying && this.props.isVisible;
                    return b.assign({}, this.props.wrapperStyle, {
                        display: this.state.isLoaded && !e ? 'none' : 'block'
                    })
                }
            }, {
                key: 'baseStyle',
                value: function() {
                    var e = this.props.fitStrategy;
                    return 'cover' !== e || T.browser.trident ? 'contain' === e ? this.containStyle() : 'fill' === e ? this.fillStyle() : 'naturalHeight' === e ? this.naturalHeightStyle() : this.containStyle() : this.coverStyle()
                }
            }, {
                key: 'imgStyle',
                value: function() {
                    var e = this.state.isDisplaying && this.props.isVisible;
                    return b.assign(this.baseStyle(), {
                        clip: e ? 'auto' : 'rect(0,0,0,0)',
                        display: this.state.isLoaded && !e ? 'none' : 'block'
                    })
                }
            }, {
                key: 'containStyle',
                value: function() {
                    var e, t, n = this.props,
                        o = n.videoWidth,
                        i = n.videoHeight,
                        a = o / i,
                        r = this.imgElem ? this.imgElem.naturalWidth / this.imgElem.naturalHeight : 1.667;
                    !1 === n.stillSnap ? (e = o, t = i) : a > r ? (t = i, e = Math.round(t * r)) : a <= r && (e = o, t = Math.round(e / r));
                    var l = Math.max(0, i - t),
                        s = Math.max(0, o - e),
                        d = Math.round(l / 2),
                        u = Math.round(s / 2),
                        p = d,
                        c = u,
                        m = d,
                        g = u;
                    2 * m <= this.stretchLimit() && (m = 0, p = 0, t = i), 2 * g <= this.stretchLimit() && (g = 0, c = 0, e = o);
                    var y = this.props.backgroundColor || '#000';
                    return {
                        borderTop: ''.concat(p, 'px solid ').concat(y),
                        borderBottom: ''.concat(m, 'px solid ').concat(y),
                        borderLeft: ''.concat(g, 'px solid ').concat(y),
                        borderRight: ''.concat(c, 'px solid ').concat(y),
                        boxSizing: 'content-box',
                        height: ''.concat(t, 'px'),
                        left: 0,
                        position: 'absolute',
                        top: 0,
                        webkitTouchCallout: 'none',
                        width: ''.concat(e, 'px')
                    }
                }
            }, {
                key: 'coverStyle',
                value: function() {
                    return {
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        width: '100%'
                    }
                }
            }, {
                key: 'fillStyle',
                value: function() {
                    return {
                        height: '100%',
                        objectFit: 'fill',
                        position: 'absolute',
                        width: '100%'
                    }
                }
            }, {
                key: 'naturalHeightStyle',
                value: function() {
                    return {
                        width: '100%',
                        position: 'relative'
                    }
                }
            }, {
                key: 'bestSrc',
                value: function() {
                    return this.bestImage().url
                }
            }, {
                key: 'srcSet',
                value: function() {
                    var e = this.sortedImages();
                    return 0 === e.length && (e = [this.blankImage()]), e.map(function(e) {
                        return ''.concat(e.url, ' ').concat(e.width, 'w')
                    }).join(', ')
                }
            }, {
                key: 'blankImage',
                value: function() {
                    return {
                        height: this.props.videoHeight,
                        url: 'https://'.concat(S(), '/assets/images/blank.gif'),
                        width: this.props.videoWidth
                    }
                }
            }, {
                key: 'bestImage',
                value: function() {
                    var e = this.sortedImages();
                    if (0 === e.length) return this.blankImage();
                    var t = this.props.videoWidth,
                        n = (window.devicePixelRatio || 1) * t;
                    if (n <= e[0].width) return e[0];
                    for (var o, a = 0; a < e.length; a++)
                        if (o = e[a], o.width >= n) return o;
                    return e[e.length - 1]
                }
            }, {
                key: 'sortedImages',
                value: function() {
                    return this._sortedImages ? this._sortedImages : (this._sortedImages = b.clone(this.props.images), this._sortedImages.map(function(e) {
                        e.aspect = e.width / e.height
                    }), this._sortedImages)
                }
            }, {
                key: 'stretchLimit',
                value: function() {
                    var e = this.props.stretchLimit;
                    return null == e ? 10 : e
                }
            }]), t
        }(f);
        t['default'] = B
    },
    33: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'makeCacheable', function() {
            return o
        });
        n.d(t, 'uncacheNamespace', function() {
            return u
        });
        n.d(t, 'uncache', function() {
            return d
        });
        n.d(t, 'makeNamespace', function() {
            return i
        });
        var o = function(e) {
                return function(t, n, o) {
                    if (l(e, t), a(e, t, n)) return r(e, t, n);
                    var i = o();
                    return s(e, t, n, i), i
                }
            },
            i = function(e) {
                return function(t) {
                    return null == t[e] && (t[e] = {}), t[e]
                }
            },
            a = function(e, t, n) {
                return null != r(e, t, n)
            },
            r = function(e, t, n) {
                return l(e, t), t[e][n]
            },
            l = function(e, t) {
                null == t[e] && (t[e] = {})
            },
            s = function(e, t, n, o) {
                l(e, t), t[e][n] = o
            },
            d = function(e, t, n) {
                l(e, t), delete t[e][n]
            },
            u = function(e, t) {
                t[e] = {}
            }
    },
    333: function(e, t, n) {
        'use strict';
        n.r(t);
        var g = n(2),
            y = n(103),
            f = n(334);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i() {
            return i = Object.assign || function(e) {
                for (var t, n = 1; n < arguments.length; n++)
                    for (var o in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, i.apply(this, arguments)
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function l(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
        }

        function s(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : u(e)
        }

        function d(e) {
            return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, d(e)
        }

        function u(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function p(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }

        function m(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var b = g['default'].lib('player/translations'),
            A = b.getTranslation,
            _ = g['default'].lib('player/lib/overpassFontFamily'),
            v = _.overpassNumbers,
            w = g['default'].lib('preact'),
            k = w.h,
            h = w.render,
            C = w.Component,
            S = g['default'].lib('utilities/color'),
            P = g['default'].lib('utilities/core'),
            E = P.niceDuration,
            T = P.unescapeHtml,
            B = function(e) {
                function t(e) {
                    var n;
                    return a(this, t), n = s(this, d(t).call(this, e)), m(u(n), 'onMouseEnter', function() {
                        n.setState({
                            isHovering: !0
                        })
                    }), m(u(n), 'onMouseLeave', function() {
                        n.setState({
                            isHovering: !1
                        })
                    }), m(u(n), 'onFocusIn', function() {
                        n.setState({
                            isHovering: !0
                        })
                    }), m(u(n), 'onFocusOut', function() {
                        n.setState({
                            isHovering: !1
                        })
                    }), n.state = {
                        isHovering: !1
                    }, n
                }
                return p(t, e), l(t, [{
                    key: 'render',
                    value: function() {
                        var e = this.props.baseWidth,
                            t = this.props.baseHeight;
                        return k('div', {
                            class: 'w-bpb-wrapper w-css-reset w-css-reset-tree',
                            style: this.wrapperStyle()
                        }, k('button', {
                            class: 'w-big-play-button w-css-reset-button-important w-vulcan-v2-button',
                            style: this.buttonStyle(),
                            onMouseEnter: this.onMouseEnter,
                            onMouseLeave: this.onMouseLeave,
                            onFocusIn: this.onFocusIn,
                            onFocusOut: this.onFocusOut,
                            "aria-label": ''.concat(this.t('TITLE_WHEN_NOT_PLAYING'), ' ').concat(T(this.props.videoName)),
                            tabIndex: this.props.buttonTabIndex
                        }, k('svg', i({}, Object(y.standardSvgAttrs)(e, t), {
                            alt: ''
                        }), k('rect', {
                            "fill-rule": 'evenodd',
                            "clip-rule": 'evenodd',
                            fill: 'none',
                            width: e,
                            height: t
                        }), k('polygon', {
                            "fill-rule": 'evenodd',
                            "clip-rule": 'evenodd',
                            fill: '#FFFFFF',
                            points: '53,22 53,58 79,40'
                        }))), this.props.showBpbTime ? k('div', {
                            class: 'w-bpb-time',
                            style: this.timeStyle()
                        }, E(this.props.duration)) : null)
                    }
                }, {
                    key: 't',
                    value: function(e) {
                        return A(this.props.playerLanguage.code, 'PLAY_BUTTON_'.concat(e))
                    }
                }, {
                    key: 'wrapperStyle',
                    value: function() {
                        var e = this.props,
                            t = e.scale,
                            n = new S(e.color).alpha(.8);
                        return this.state.isHovering && n.lighten(30), {
                            display: e.isVisible ? 'block' : 'none',
                            left: ''.concat(50 + (Math.min(50, Math.max(-50, 100 * (e.leftNudgeFraction || 0))) || 0), '%'),
                            position: 'absolute',
                            top: ''.concat(50 + (Math.min(50, Math.max(-50, 100 * (e.topNudgeFraction || 0))) || 0), '%'),
                            transform: 'translate(-50%, -50%)'
                        }
                    }
                }, {
                    key: 'buttonStyle',
                    value: function() {
                        var e = this.props,
                            t = e.scale,
                            n = new S(e.color).alpha(.8);
                        return this.state.isHovering && n.lighten(30), {
                            cursor: 'pointer',
                            height: ''.concat(e.baseHeight * t, 'px'),
                            background: n.toRgba(),
                            boxShadow: this.state.isKeyboardFocused ? '0 0 0 2px #fff inset' : 'none',
                            width: ''.concat(e.baseWidth * t, 'px')
                        }
                    }
                }, {
                    key: 'timeStyle',
                    value: function() {
                        var e = this.props.scale;
                        return {
                            background: 'rgba(0,0,0,.4)',
                            color: '#fff',
                            fontFamily: v,
                            fontSize: ''.concat(18 * e, 'px'),
                            lineHeight: ''.concat(30 * e, 'px'),
                            pointerEvents: 'none',
                            textAlign: 'center'
                        }
                    }
                }]), t
            }(C);
        t['default'] = Object(f['default'])(B)
    },
    334: function(e, t, n) {
        'use strict';
        n.r(t);
        var m = n(2),
            g = n(162);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : d(e)
        }

        function s(e) {
            return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, s(e)
        }

        function d(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var y = m['default'].lib('preact'),
            f = y.h,
            h = y.render,
            b = y.Component,
            A = m['default'].lib('utilities/detect'),
            _ = A.cachedDetect,
            v = _(),
            w = m['default'].lib('player/lib/elem'),
            k = w.elemBind,
            C = w.elemUnbind;
        t['default'] = function(e) {
            var t;
            return t = function(t) {
                function n() {
                    var e, t;
                    i(this, n);
                    for (var o = arguments.length, a = Array(o), r = 0; r < o; r++) a[r] = arguments[r];
                    return t = l(this, (e = s(n)).call.apply(e, [this].concat(a))), p(d(t), 'onTouchEnd', function(n, e) {
                        var o = t.props.onClickOrTap;
                        o && e.isTap && o(n)
                    }), p(d(t), 'onClick', function(n) {
                        var e = t.props.onClickOrTap;
                        e && e(n)
                    }), t
                }
                return u(n, t), r(n, [{
                    key: 'render',
                    value: function() {
                        return f(e, this.props)
                    }
                }, {
                    key: 'componentDidMount',
                    value: function() {
                        this.setupBindings()
                    }
                }, {
                    key: 'componentDidUpdate',
                    value: function() {
                        this.destroyBindings(), this.setupBindings()
                    }
                }, {
                    key: 'componentWillUnmount',
                    value: function() {
                        this.destroyBindings()
                    }
                }, {
                    key: 'setupBindings',
                    value: function() {
                        this.unbinds = [], v.touchScreen ? (this.touchEvents = new g['default'](this.base), this.touchEvents.on('touchend', this.onTouchEnd)) : this.unbinds.push(k(this.base, 'click', this.onClick))
                    }
                }, {
                    key: 'destroyBindings',
                    value: function() {
                        this.touchEvents && (this.touchEvents.destroy(), this.touchEvents = null), this.unbinds && (this.unbinds.map(function(e) {
                            return e()
                        }), this.unbinds = null)
                    }
                }]), n
            }(b), t
        }
    },
    34: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'defineControl', function() {
            return l
        });
        n.d(t, 'getControlDefinitions', function() {
            return s
        });
        var o = n(2),
            i = n(7),
            a = n(15);
        null == o['default']._controlDefinitions && (o['default']._controlDefinitions = {});
        var r = function(e) {
                return 'control-bar-left' === e.type || 'control-bar-right' === e.type || 'lower-playbar' == e.type || 'upper-playbar' === e.type
            },
            l = function(e) {
                if (null == e.handle) return void a.wlog.error('Please specify a handle property for control', e);
                var t = o['default']._controlDefinitions[e.handle];
                null != t || (null == e.isVideoChrome && r(e) && (e.isVideoChrome = !0), o['default']._controlDefinitions[e.handle] = e, o['default'].trigger('controldefined', e))
            },
            s = function() {
                return o['default']._controlDefinitions || {}
            };
        o['default'].defineControl = l
    },
    347: function(e, t, n) {
        'use strict';
        n.r(t);
        var m = n(2),
            g = n(103);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i() {
            return i = Object.assign || function(e) {
                for (var t, n = 1; n < arguments.length; n++)
                    for (var o in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, i.apply(this, arguments)
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function l(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
        }

        function s(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : d(e)
        }

        function d(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function u(e) {
            return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, u(e)
        }

        function p(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }
        var y = m['default'].lib('preact'),
            f = y.h,
            h = y.render,
            b = y.Component,
            A = m['default'].lib('utilities/obj'),
            _ = A.merge,
            v = function(e) {
                function t() {
                    return a(this, t), s(this, u(t).apply(this, arguments))
                }
                return p(t, e), l(t, [{
                    key: 'shouldComponentUpdate',
                    value: function(e) {
                        return this.props.isPlaying !== e.isPlaying
                    }
                }, {
                    key: 'render',
                    value: function() {
                        return f('div', {
                            style: this.rootStyle()
                        }, f('div', {
                            style: {
                                display: this.props.isPlaying ? 'block' : 'none',
                                height: '100%',
                                width: '100%'
                            }
                        }, this.renderPauseIcon()), f('div', {
                            style: {
                                display: this.props.isPlaying ? 'none' : 'block',
                                height: '100%',
                                width: '100%'
                            }
                        }, this.renderPlayIcon()))
                    }
                }, {
                    key: 'renderPlayIcon',
                    value: function() {
                        var e = this.props.noPadding,
                            t = e ? 0 : 20,
                            n = e ? 0 : 9,
                            o = 11.556,
                            a = ''.concat(t + o, ',').concat(n + 15 / 2, ' ').concat(t, ',').concat(n + 15, ' ').concat(t, ',').concat(n);
                        return f('svg', i({}, this.svgAttrs(o + 2 * t, 15 + 2 * n), {
                            class: 'w-css-reset w-css-reset-tree'
                        }), f('polygon', {
                            points: a
                        }))
                    }
                }, {
                    key: 'renderPauseIcon',
                    value: function() {
                        var e = this.props.noPadding,
                            t = e ? 0 : 20,
                            n = e ? 0 : 11.3;
                        return f('svg', i({}, this.svgAttrs(10 + 2 * t, 12 + 2 * n), {
                            class: 'w-css-reset w-css-reset-tree'
                        }), f('g', null, f('rect', {
                            x: t,
                            y: n,
                            width: '3.5',
                            height: 12
                        }), f('rect', {
                            x: t + 6.5,
                            y: n,
                            width: '3.5',
                            height: 12
                        })))
                    }
                }, {
                    key: 'rootStyle',
                    value: function() {
                        return {
                            height: '100%',
                            width: '100%'
                        }
                    }
                }, {
                    key: 'svgAttrs',
                    value: function() {
                        var e = this.props.noPadding,
                            t = this.props.isPlaying,
                            n = e ? 0 : 20,
                            o = e ? 0 : t ? 11.3 : 9,
                            i = t ? 12 : 16,
                            a = t ? 10 : 11.556,
                            r = Object(g.standardSvgAttrs)(a + 2 * n, i + 2 * o);
                        return _(r.style, this.props.svgStyle), r
                    }
                }]), t
            }(b);
        t['default'] = v
    },
    35: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'elemHtml', function() {
            return m
        });
        n.d(t, 'getCssTags', function() {
            return g
        });
        n.d(t, 'execCssTags', function() {
            return y
        });
        n.d(t, 'removeCssTags', function() {
            return h
        });
        n.d(t, 'addInlineCss', function() {
            return f
        });
        n.d(t, 'elemFromObject', function() {
            return b
        });
        n.d(t, 'elemToObject', function() {
            return A
        });
        n.d(t, 'elemClone', function() {
            return _
        });
        n.d(t, 'elemAppend', function() {
            return v
        });
        n.d(t, 'elemPrepend', function() {
            return w
        });
        n.d(t, 'elemBefore', function() {
            return k
        });
        n.d(t, 'elemAfter', function() {
            return C
        });
        n.d(t, 'elemRemove', function() {
            return S
        });
        n.d(t, 'elemRemoveClass', function() {
            return P
        });
        n.d(t, 'elemAddClass', function() {
            return E
        });
        n.d(t, 'elemHasClass', function() {
            return T
        });
        n.d(t, 'elemClasses', function() {
            return D
        });
        n.d(t, 'elemStyle', function() {
            return I
        });
        n.d(t, 'propsWithVendorPrefixes', function() {
            return L
        });
        n.d(t, 'getComputedStyle', function() {
            return R
        });
        n.d(t, 'elemWidth', function() {
            return H
        });
        n.d(t, 'elemHeight', function() {
            return W
        });
        n.d(t, 'isBoxModel', function() {
            return V
        });
        n.d(t, 'elemOffset', function() {
            return N
        });
        n.d(t, 'elemZoom', function() {
            return U
        });
        n.d(t, 'elemContainsOffset', function() {
            return Q
        });
        n.d(t, 'elemScrollOffset', function() {
            return G
        });
        n.d(t, 'elemIsHidden', function() {
            return z
        });
        n.d(t, 'elemInDom', function() {
            return q
        });
        n.d(t, 'elemIsDescendantOf', function() {
            return Y
        });
        n.d(t, 'elemAncestorWithClass', function() {
            return K
        });
        n.d(t, 'elemAncestorHasClass', function() {
            return J
        });
        n.d(t, 'elemAncestors', function() {
            return X
        });
        n.d(t, 'elemIsInside', function() {
            return Z
        });
        n.d(t, 'elemAnimate', function() {
            return ee
        });
        n.d(t, 'elemBind', function() {
            return te
        });
        n.d(t, 'elemUnbind', function() {
            return ne
        });
        n.d(t, 'elemUnbindAll', function() {
            return oe
        });
        n.d(t, 'elemUnbindAllInside', function() {
            return ie
        });
        n.d(t, 'elemBindKey', function() {
            return ae
        });
        n.d(t, 'elemRebind', function() {
            return re
        });
        n.d(t, 'elemBindOnce', function() {
            return le
        });
        n.d(t, 'elemTrigger', function() {
            return se
        });
        n.d(t, 'fullscreenElement', function() {
            return de
        });
        n.d(t, 'elemRequestFullscreen', function() {
            return ue
        });
        n.d(t, 'elemCancelFullscreen', function() {
            return pe
        });
        n.d(t, 'elemStripEventAttributes', function() {
            return ce
        });
        n.d(t, 'elemMutationObserver', function() {
            return me
        });
        n.d(t, 'docScrollTop', function() {
            return ge
        });
        n.d(t, 'docScrollLeft', function() {
            return ye
        });
        n.d(t, 'safeRequestAnimationFrame', function() {
            return he
        });
        n.d(t, 'formInputIsFocused', function() {
            return fe
        });
        n.d(t, 'inUserEventContext', function() {
            return be
        });
        n.d(t, 'getLastActiveEventAt', function() {
            return Ae
        });
        var o = n(5),
            i = n(36);
        n.d(t, 'isDocReady', function() {
            return i.isDocReady
        });
        n.d(t, 'onDocReady', function() {
            return i.onDocReady
        });
        var a = n(37);
        n.d(t, 'pageLoaded', function() {
            return a['default']
        });
        var r = n(16),
            l = n(15),
            s = n(38);
        n.d(t, 'execScriptTags', function() {
            return s.execScriptTags
        });
        n.d(t, 'getScriptTags', function() {
            return s.getScriptTags
        });
        n.d(t, 'removeScriptTags', function() {
            return s.removeScriptTags
        });
        var d = n(7),
            u = n(2),
            p = u['default'],
            c = Object(r.cachedDetect)(),
            m = function(e, t) {
                var n = g(t),
                    o = Object(s.getScriptTags)(t);
                return t = h(t), t = Object(s.removeScriptTags)(t), e.innerHTML = t, y(n, e), Object(s.execScriptTags)(o)
            },
            g = function(e) {
                return e.match(/<link.*?rel=['"]stylesheet['"][^>]*>|<style>[\s\S]+?<\/style>/ig) || []
            },
            y = function(e, t) {
                if (!e) return null;
                Object(o.isArray)(e) || (e = g(e));
                for (var n, a = [], r = 0; r < e.length; r++)
                    if (n = e[r], /<link.*?rel=['"]stylesheet['"][^>]*>/.test(n)) {
                        var i = n.match(/href=['"](.*?)['"]/i);
                        if (i) {
                            var l = document.createElement('link');
                            l.setAttribute('rel', 'stylesheet'), l.setAttribute('href', i[1]), l.className = 'wistia_injected_style', (t || document.body || document.head).appendChild(l), a.push(l)
                        }
                    } else if (/<style>[\s\S]+?<\/style>/ig.test(n)) {
                    var s = n.match(/<style>([\s\S]+?)<\/style>/i);
                    if (s) {
                        var d = f(t || document.body || document.head, s[1]);
                        a.push(d)
                    }
                }
                return a
            },
            h = function(e) {
                return e.replace(/<link.*?rel=['"]stylesheet['"][^>]*>|<style>[\s\S]+?<\/style>/ig, '')
            },
            f = function(e, t) {
                var n = document.createElement('style');
                return n.id = Object(d['default'])('wistia_', '_style'), n.setAttribute('type', 'text/css'), n.className = 'wistia_injected_style', e.appendChild(n, e.nextSibling), n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t)), n
            },
            b = function e(t) {
                if (Object(o.isArray)(t)) {
                    for (var n = [], a = 0; a < t.length; a++) n.push(e(t[a]));
                    return n
                }
                var i = t.tagName || 'div',
                    r = t.childNodes || [];
                Object(o.isArray)(r) || (r = [r]);
                var l = document.createElement(i);
                for (var s in t) {
                    var d = t[s];
                    if ('childNodes' != s && 'tagName' != s && 'ref' != s) {
                        var u = s.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                        if ('style' == s) {
                            if (Object(o.isObject)(d))
                                for (var c in d) l.style[c] = d[c];
                            else
                                for (var p = d.split(';'), m = 0; m < p.length; m++) {
                                    var g = p[m].split(/\s*:\s*/),
                                        y = g[0],
                                        h = g[1];
                                    y && h && (l.style[y] = h)
                                }
                        } else if ('events' == s)
                            for (var f in d) {
                                var b = d[f];
                                te(l, f, b)
                            } else 'className' == s || 'class' == s ? l.className = d : 'innerHTML' == s ? l.innerHTML = d : 'innerText' == s ? l.innerText = d : null != d && 'function' == typeof d.toString && l.setAttribute(u, d.toString())
                    }
                }
                for (var A, _ = 0; _ < r.length; _++)
                    if (A = r[_], Object(o.isObject)(A)) {
                        var w = e(A);
                        v(l, w)
                    } else {
                        var k = document.createTextNode(A.toString());
                        v(l, k)
                    } return 'function' == typeof t.ref && t.ref(l), l
            },
            A = function e(t) {
                if (Object(o.isArray)(t))
                    for (var n = [], a = 0; a < t.length; a++) n.push(e(t[a]));
                for (var i, r = {
                        tagName: t.tagName.toLowerCase()
                    }, l = Object.keys(t), s = 0; s < l.length; s++)
                    if (i = l[s], 'tagName' === i || 'childNodes' === i || 'nodeType' === i || 'nodeValue' === i) continue;
                    else if ('style' === i) {
                    r.style = {};
                    for (var d = Object.keys(t.style), u = 0; u < d.length; u++) {
                        var p = d[u],
                            c = t.style[p];
                        c && !/^\d/.test(p) && 'length' !== p && (r.style[p] = c)
                    }
                } else {
                    var m = t.getAttribute(i);
                    null != m && (r[i] = m)
                }
                for (var g, y = [], h = 0; h < t.childNodes.length; h++) g = t.childNodes[h], 1 === g.nodeType ? y.push(e(g)) : 3 === g.nodeType && y.push(g.nodeValue);
                return 0 < y.length && (r.childNodes = y), r
            },
            _ = function(e) {
                var t = A(e);
                return b(t)
            },
            v = function e(t, n) {
                if (Object(o.isArray)(n)) {
                    for (var a = 0; a < n.length; a++) e(t, n[a]);
                    return
                }
                t.appendChild(n)
            },
            w = function e(t, n) {
                if (Object(o.isArray)(n)) {
                    for (var a = 0; a < n.length; a++) e(t, n[a]);
                    return
                }
                return 0 === t.childNodes.length ? v(t, n) : t.insertBefore(n, t.childNodes[0])
            },
            k = function e(t, n) {
                if (Object(o.isArray)(n)) {
                    n = n.reverse();
                    for (var a = 0; a < n.length; a++) e(t, n[a]);
                    return
                }
                return t.parentNode.insertBefore(n, t)
            },
            C = function e(t, n) {
                if (Object(o.isArray)(n)) {
                    n = n.reverse();
                    for (var a = 0; a < n.length; a++) e(t, n[a]);
                    return
                }
                return t.parentNode.insertBefore(n, t.nextSibling)
            },
            S = function e(t) {
                if (Object(o.isArray)(t) || window.NodeList && t instanceof NodeList) {
                    for (var n = 0; n < t.length; n++) e(t[n]);
                    return
                }
                var i;
                null != t && (1 === t.nodeType || 3 === t.nodeType) && (i = t.parentNode) && (i.removeChild(t), t = null)
            },
            P = function e(t, n) {
                if (Object(o.isArray)(t) || window.NodeList && t instanceof NodeList) {
                    for (var a = 0; a < t.length; a++) e(t[a], n);
                    return
                }
                if (T(t, n)) {
                    var i = t.getAttribute('class');
                    if (i) {
                        var r = new RegExp('\\b'.concat(n, '\\b'), 'g'),
                            l = F(i.replace(r, ''));
                        t.setAttribute('class', l)
                    }
                }
            },
            E = function e(t, n) {
                if (Object(o.isArray)(t) || window.NodeList && t instanceof NodeList) {
                    for (var a = 0; a < t.length; a++) e(t[a], n);
                    return
                }
                if (!T(t, n)) {
                    var i, r = t.getAttribute('class');
                    r ? (P(t, n), i = F(''.concat(r, ' ').concat(n))) : i = n, t.setAttribute('class', i)
                }
            },
            T = function(e, t) {
                var n = null != e && 'function' == typeof e.getAttribute && e.getAttribute('class');
                if (!n && e && 'string' == typeof e.className && (n = e.className), !n) return !1;
                var o = !1;
                return x(n, t, function(e) {
                    var i = 0 === e || ' ' === n.charAt(e - 1),
                        a = e + t.length === n.length,
                        r = ' ' === n.charAt(e + t.length);
                    if (i && (a || r)) return o = !0, B
                }), o
            },
            B = {},
            x = function(e, t, n) {
                for (var o = -1; - 1 != (o = e.indexOf(t, o + 1)) && !(n(o) === B););
            },
            D = function(e) {
                return e && 'string' != typeof e.className ? [''] : (e && e.className || '').split(/\s+/)
            },
            F = function(e) {
                return e.replace(/^\s+/g, '').replace(/\s+$/g, '').replace(/\s+/g, ' ')
            },
            I = function e(t) {
                for (var n = arguments.length, a = Array(1 < n ? n - 1 : 0), r = 1; r < n; r++) a[r - 1] = arguments[r];
                if (Object(o.isArray)(t) || window.NodeList && t instanceof NodeList) {
                    for (var s, d = [], u = 0; u < t.length; u++) s = t[u], 1 === s.nodeType && d.push(e.apply(void 0, [s].concat(a)));
                    return d
                }
                if (2 === a.length) {
                    var i = a[0],
                        p = a[1];
                    t.style[i] = p
                } else if (1 !== a.length) l.wlog.apply(void 0, ['Unexpected args', t].concat(a));
                else if ('string' == typeof a[0]) {
                    var c = a[0];
                    try {
                        return t.currentStyle ? t.currentStyle[c] : window.getComputedStyle ? window.getComputedStyle(t, null).getPropertyValue(c) : null
                    } catch (t) {
                        l.wlog.notice(t)
                    }
                } else {
                    var m = L(a[0]);
                    for (var g in m) {
                        var y = m[g];
                        t.style[g] = y
                    }
                }
            },
            M = {
                borderImage: !0,
                mixBlendMode: !0,
                transform: !0,
                transition: !0,
                transitionDuration: !0
            },
            O = ['webkit', 'moz', 'o', 'ms'],
            L = function(e) {
                if (c.chrome) return e;
                var t = {};
                for (var n in e) {
                    var o = e[n];
                    if (t[n] = o, M[n])
                        for (var a = O, r = 0; r < a.length; r++) {
                            var i = a[r],
                                l = i + n.charAt(0).toUpperCase() + n.slice(1);
                            n[l] || (t[l] = o)
                        }
                }
                return t
            },
            R = function(e, t) {
                if (!window.getComputedStyle) return null;
                var n = window.getComputedStyle(e, null);
                return null == n ? null : null == t ? n : n[t]
            },
            H = function(e) {
                if (e === window) return window.innerWidth ? window.innerWidth : document.documentElement ? document.documentElement.offsetWidth : document.body.offsetWidth;
                if (e === document) {
                    var t = document.body,
                        n = document.documentElement;
                    return Math.max(t.scrollWidth, t.offsetWidth, n.clientWidth, n.scrollWidth, n.offsetWidth)
                }
                var o;
                return c.browser.quirks ? parseInt(e.offsetWidth, 10) : (o = R(e, 'width')) && null != o ? parseFloat(o) : e.currentStyle ? e.offsetWidth : -1
            },
            W = function(e) {
                if (e === window) return window.innerHeight ? window.innerHeight : document.documentElement ? document.documentElement.offsetHeight : document.body.offsetHeight;
                if (e === document) {
                    var t = document.body,
                        n = document.documentElement;
                    return Math.max(t.scrollHeight, t.offsetHeight, n.clientHeight, n.scrollHeight, n.offsetHeight)
                }
                var o;
                return c.browser.quirks ? parseInt(e.offsetHeight, 10) : (o = R(e, 'height')) && null != o ? parseFloat(o) : e.currentStyle ? e.offsetHeight : -1
            },
            j, V = function() {
                if (null != j) return j;
                var e = document.createElement('div');
                return e.style.paddingLeft = e.style.width = '1px', document.body.appendChild(e), j = 2 === e.offsetWidth, document.body.removeChild(e), j
            },
            N = function(e) {
                var t, n = document.body,
                    o = document.defaultView,
                    i = document.documentElement,
                    a = e.getBoundingClientRect(),
                    r = i.clientTop || n.clientTop || 0,
                    l = i.clientLeft || n.clientLeft || 0;
                t = o && null != o.pageYOffset ? o.pageYOffset : V() && i && null != i.scrollTop ? i.scrollTop : n.scrollTop;
                var s = o && null != o.pageXOffset ? o.pageXOffset : V() && i && null != i.scrollLeft ? i.scrollLeft : n.scrollLeft;
                var d = U(e);
                return {
                    height: a.height * d,
                    top: a.top * d + t - r,
                    left: a.left * d + s - l,
                    width: a.width * d,
                    zoom: d
                }
            },
            U = function e(t) {
                return t && t !== document.documentElement ? e(t.parentElement) * (R(t).zoom || 1) : 1
            },
            Q = function(e, t, n) {
                var o = N(e);
                return o.right = o.left + H(e), o.bottom = o.top + W(e), o.left <= t && t < o.right && o.top <= n && n < o.bottom
            },
            G = function(e) {
                var t = 0,
                    n = 0;
                if (e.parentNode)
                    for (; e && e.offsetParent;) n += e.scrollTop, t += e.scrollLeft, e = e.parentNode;
                return {
                    left: t,
                    top: n
                }
            },
            z = function(e) {
                for (; e && 1 === e.nodeType;) {
                    if ('none' === I(e, 'display')) return !0;
                    e = e.parentNode
                }
                return !1
            },
            q = function(e) {
                for (; e = e.parentNode;)
                    if (e === document) return !0;
                return !1
            },
            Y = function(e, t) {
                for (var n = X(e), o = 0; o < n.length; o++)
                    if (n[o] === t) return !0;
                return !1
            },
            K = function(e, t) {
                for (var n = X(e), o = 0; o < n.length; o++)
                    if (T(n[o], t)) return n[o];
                return null
            },
            J = function(e, t) {
                var n = K(e, t);
                return !!n
            },
            X = function(e) {
                for (var t = e, n = []; t = t.parentNode;) n.push(t);
                return n
            },
            Z = function(e, t) {
                return e === t || Y(e, t)
            },
            $ = function(e, t, n) {
                var o = [];
                for (var i in e) o.push(''.concat(i, ' ').concat(t, 'ms ').concat(n));
                return o.join(',')
            },
            ee = function(e) {
                var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {},
                    n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {};
                n = Object(o.merge)({
                    time: 400,
                    easing: 'ease'
                }, n);
                var i = $(t, n.time, n.easing);
                I(e, {
                    transition: i
                }), he(function() {
                    I(e, t), setTimeout(function() {
                        I(e, {
                            transition: ''
                        }), 'function' == typeof n.callback && n.callback()
                    }, n.time)
                })
            },
            te = function(t, n, o) {
                var e = !!(3 < arguments.length && void 0 !== arguments[3]) && arguments[3],
                    i = function(i) {
                        i = i || window.event, !i.pageX && !i.pageY && (i.clientX || i.clientY) && (i.pageX = i.clientX + ye(), i.pageY = i.clientY + ge()), i.preventDefault || (i.preventDefault = function() {
                            i.returnValue = !1
                        }), i.stopPropagation || (i.stopPropagation = function() {
                            i.cancelBubble = !0
                        }), null == i.which && (i.which = null == i.charCode ? i.keyCode : i.charCode), null == i.which && null != i.button && (1 & i.button ? i.which = 1 : 2 & i.button ? i.which = 3 : 4 & i.button ? i.which = 2 : c.browser.msie && 0 === i.button ? i.which = 1 : i.which = 0), i.target || i.srcElement && (i.target = i.srcElement), i.target && 3 === i.target.nodeType && (i.target = i.target.parentNode);
                        for (var e = arguments.length, a = Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) a[r - 1] = arguments[r];
                        var l = o.apply(i.target, [i].concat(a));
                        return l === ne && ne(t, n, o), l
                    };
                p._elemBind = p._elemBind || {};
                var a = ae(t, n, o);
                return p._elemBind[a] = i, i.elem = t, i.event = n, c.browser.msie && 9 > c.browser.version ? t.attachEvent('on'.concat(n), i) : t.addEventListener(n, i, e),
                    function() {
                        ne(t, n, o, e)
                    }
            },
            ne = function(e, t, n) {
                var o = !!(3 < arguments.length && void 0 !== arguments[3]) && arguments[3];
                if (null != e && null != e._wistiaElemId && null != n && n._wistiaBindId) {
                    var i = ae(e, t, n),
                        a = p._elemBind[i];
                    return a && (c.browser.msie && 9 > c.browser.version ? e.detachEvent('on'.concat(t), a) : e.removeEventListener(t, a, o), a.elem = null, a.event = null), delete p._elemBind[i]
                }
            },
            oe = function(e) {
                for (var t in p._elemBind) {
                    var n = p._elemBind[t];
                    if (n && e === n.elem) {
                        var o = n.event;
                        c.browser.msie && 9 > c.browser.version ? n.elem.detachEvent('on'.concat(o), n) : n.elem.removeEventListener(o, n, !1), n.elem = null, n.event = null, delete p._elemBind[t]
                    }
                }
            },
            ie = function(e) {
                var t = 0;
                for (var n in p._elemBind) {
                    var o = p._elemBind[n];
                    if (o && p.elem.isInside(o.elem, e)) {
                        var i = o.event;
                        c.browser.msie && 9 > c.browser.version ? o.elem.detachEvent('on'.concat(i), o) : o.elem.removeEventListener(i, o, !1), o.elem = null, o.event = null, delete p._elemBind[n], t += 1
                    }
                }
                return t
            },
            ae = function(e, t, n) {
                return e._wistiaElemId = e._wistiaElemId || Object(d['default'])('wistia_elem_'), n._wistiaBindId = n._wistiaBindId || Object(d['default'])('wistia_bind_'), ''.concat(e._wistiaElemId, '.').concat(t, '.').concat(n._wistiaBindId)
            },
            re = function(e, t, n) {
                if (n) return ne(e, t, n), te(e, t, n)
            },
            le = function(e, t, n) {
                return te(e, t, function() {
                    for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                    return n.apply(this, t), ne
                })
            },
            se = function(e, t) {
                for (var n = arguments.length, o = Array(2 < n ? n - 2 : 0), i = 2; i < n; i++) o[i - 2] = arguments[i];
                if (e.dispatchEvent) {
                    var a = document.createEvent('Events');
                    return a.initEvent(t, !0, !1), 'click' === t || 'doubleclick' === t ? a.which = 1 : 'rightclick' === t && (a.which = 2), a.customArguments = o, e.dispatchEvent(a)
                }
                if (e.fireEvent) {
                    return e.fireEvent('on' + t, {
                        customArguments: o
                    })
                }
                l.wlog.error('neither dispatchEvent nor fireEvent is defined for', e, t)
            },
            de = function() {
                return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
            },
            ue = function(e) {
                return e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : e.msRequestFullscreen ? e.msRequestFullscreen() : e.webkitEnterFullscreen ? e.webkitEnterFullscreen() : (l.wlog.notice('no requestFullscreen functionality detected'), null)
            },
            pe = function(e) {
                return document.cancelFullscreen ? document.cancelFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : e && e.webkitExitFullscreen ? e.webkitExitFullscreen() : (l.wlog.notice('no cancelFullscreen functionality detected'), null)
            },
            ce = function e(t) {
                var n = t && t.attributes || [];
                try {
                    for (var o, a = 0; a < n.length; a++) o = n[a], /^on.+/i.test(o.name) && (t[o.name] = null, t.removeAttribute(o.name))
                } catch (t) {
                    l.wlog.error(t)
                }
                if (t.childNodes)
                    for (var i, r = 0; r < t.childNodes.length; r++) i = t.childNodes[r], 1 === i.nodeType && e(i)
            },
            me = function(e) {
                var t = c.mutationObserver;
                return t ? new window[t](e) : null
            },
            ge = function(e) {
                var t = document.body,
                    n = document.documentElement;
                return null == e ? n && n.scrollTop || t && t.scrollTop || 0 : void(t && (t.scrollTop = e), n && (n.scrollTop = e))
            },
            ye = function(e) {
                var t = document.body,
                    n = document.documentElement;
                return null == e ? n && n.scrollLeft || t && t.scrollLeft || 0 : void(t && (t.scrollLeft = e), n && (n.scrollLeft = e))
            },
            he = function(e) {
                var t = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
                    return setTimeout(e, 1e3 / 60)
                };
                return t(e)
            },
            fe = function() {
                return /^textarea|input|select$/i.test(document.activeElement.tagName)
            },
            be = function() {
                return !!_e
            },
            Ae = function() {
                return ve
            },
            _e, ve = -1;
        ['auxclick', 'click', 'contextmenu', 'dblclick', 'focus', 'keydown', 'keypress', 'keyup', 'mousedown', 'mouseup', 'reset', 'submit', 'touchend', 'touchstart'].forEach(function(e) {
            te(document, e, function(t) {
                _e = t, ve = Date.now(), setTimeout(function() {
                    _e === t && (_e = void 0)
                }, 0)
            }, !c.passiveSupported || {
                capture: !0,
                passive: !0
            })
        })
    },
    36: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'isDocReady', function() {
            return i
        });
        n.d(t, 'onDocReady', function() {
            return a
        });
        var o = n(31),
            i = function() {
                return /loaded|complete/.test(document.readyState)
            },
            a = function() {
                var e, t;
                if (1 < arguments.length ? (e = arguments[0], t = arguments[1]) : (e = 1e4, t = arguments[0]), i()) t();
                else if (top === self && document.documentElement.doScroll) {
                    var n = function() {
                        try {
                            return document.documentElement.doScroll('left'), !0
                        } catch (t) {
                            return !1
                        }
                    };
                    Object(o['default'])(n, t, 50, e, t)
                } else {
                    var a = function() {
                            i() && (clearTimeout(d), l(), t())
                        },
                        r = function() {
                            document.addEventListener('DOMContentLoaded', a, !1), document.addEventListener('readystatechange', a, !1), window.addEventListener('load', a, !1)
                        },
                        l = function() {
                            document.removeEventListener('DOMContentLoaded', a, !1), document.removeEventListener('readystatechange', a, !1), window.removeEventListener('load', a, !1)
                        },
                        s = function() {
                            l(), t()
                        },
                        d = setTimeout(s, e);
                    r()
                }
            };
        t['default'] = a
    },
    37: function(e, t, n) {
        'use strict';
        n.r(t);
        t['default'] = function(e) {
            var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 4e3,
                n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : document,
                o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : window;
            if (/loaded|complete/.test(n.readyState)) setTimeout(e, 0);
            else {
                var i = function() {
                        o.removeEventListener('load', a, !1)
                    },
                    a = function() {
                        clearTimeout(r), i(), e()
                    };
                o.addEventListener('load', a, !1);
                var r = setTimeout(function() {
                    i(), e()
                }, t)
            }
        }
    },
    38: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'getScriptTags', function() {
            return a
        });
        n.d(t, 'scriptTagsToRunScriptsInput', function() {
            return i
        });
        n.d(t, 'execScriptTags', function() {
            return r
        });
        n.d(t, 'removeScriptTags', function() {
            return l
        });
        var o = n(25),
            a = function(e) {
                return e.match(/<script.*?src[^>]*>\s*<\/script>|<script.*?>[\s\S]+?<\/script>/ig) || []
            },
            i = function(e) {
                if (!e) return [];
                e instanceof Array || (e = a(e));
                for (var t = [], n = 0; n < e.length; n++) {
                    var o = e[n],
                        i = {},
                        r = o.match(/<script.*?>/i);
                    r && (r = r[0].match(/src="([^"]+)"/i), r && (i.src = r[1], i.async = /async/i.test(o.replace(i.src, '')))), r || (r = o.match(/<script>([\s\S]+?)<\/script>/i), r && function() {
                        var e = r[1];
                        i.fn = function() {
                            return eval(e)
                        }
                    }()), t.push(i)
                }
                return t
            },
            r = function(e, t) {
                if (!e) return null;
                var n = i(e);
                return Object(o.runScripts)(n, t)
            },
            l = function(e) {
                return e.replace(/<script.*?src[^>]*>\s*<\/script>|<script>[\s\S]+?<\/script>/g, '')
            }
    },
    39: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'EventLoop', function() {
            return r
        });
        n.d(t, 'globalEventLoop', function() {
            return s
        });
        var o = n(15),
            i = n(2),
            a = o.wlog.getPrefixedFunctions('event_loop'),
            r = function() {
                var e = this,
                    t = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {};
                this._timeoutId = null, this._latency = null == t.latency ? 100 : t.latency, this._blurLatency = null == t.blurLatency ? 2e3 : t.blurLatency, this._functions = {}, this._paused = {}, window.addEventListener('blur', function() {
                    return e.blur()
                }, !1), window.addEventListener('focus', function() {
                    return e.focus()
                }, !1), this.start()
            },
            l = r.prototype;
        l.start = function() {
            var e = this;
            clearTimeout(this._timeoutId), this._loopFn = this._loopFn || function() {
                e.runFunctions(), e._timeoutId = setTimeout(e._loopFn, e._latency)
            }, this._loopFn()
        }, l.resync = function() {
            this.start()
        }, l.resyncNextTick = function() {
            var e = this;
            setTimeout(function() {
                e.resync()
            }, 0)
        }, l.stop = function() {
            clearTimeout(this._timeoutId)
        }, l.clear = function() {
            this._functions = {}
        }, l.runFunctions = function() {
            this._pausedDirty && this.updatePaused();
            var e = [];
            for (var t in this._functions) {
                var n = this._functions[t],
                    o = new Date().getTime(),
                    r = o - n.lastRanAt;
                if (!n.paused && r >= n.interval) {
                    n.lastRanAt = o;
                    try {
                        var l = n.fn();
                        l === this.remove && e.push(t)
                    } catch (t) {
                        a.error(t)
                    }
                }
            }
            for (var s = 0; s < e.length; s++) this.remove(e[s])
        }, l.add = function(e, t, n) {
            var o = new Date().getTime();
            this._functions[e] = {
                addedAt: o,
                lastRanAt: -1,
                interval: t,
                fn: n
            };
            var i = n();
            this._functions[e] && (this._functions[e].lastRanAt = new Date().getTime()), this._functions[e] && i === this.remove ? delete this._functions[e] : this._pausedDirty = !0
        }, l.remove = function(e) {
            var t = this;
            this.forEachMatchingKey(e, function(e) {
                delete t._functions[e]
            })
        }, l.forEachMatchingKey = function(e, t) {
            for (var n in this._functions) {
                var o = this._functions[n];
                this.key1IncludesKey2(e, n) && t(n, o)
            }
        }, l.latency = function(e) {
            return null == e ? this._latency : void(this._latency = e)
        }, l.interval = function(e, t) {
            return null == t ? this._functions[e].interval : void(null == this._functions[e] ? a.notice('setting interval of ', e, 'to', t, 'failed because', e, 'is not defined') : this._functions[e].interval = t)
        }, l.pause = function(e) {
            this._paused[e] = !0, this._pausedDirty = !0
        }, l.unpause = function(e) {
            this._paused[e] = !1, this._pausedDirty = !0
        }, l.isPaused = function(e) {
            for (var t in this.paused) {
                var n = this._paused[t];
                if (n && this.key1IncludesKey2(t, e)) return !0
            }
            return !1
        }, l.updatePaused = function() {
            for (var e in this._functions) {
                var t = this._functions[e];
                t.paused = this.isPaused(e)
            }
            this._pausedDirty = !1
        }, l.key1IncludesKey2 = function(e, t) {
            return 'function' == typeof t.indexOf && 0 === t.indexOf(e) && (t.length === e.length || '.' === t.charAt(e.length))
        }, l.blur = function() {
            this._blurred || (this._blurred = !0, this._savedLatency = this._latency, this._latency = this._blurLatency)
        }, l.focus = function() {
            this._blurred && (this._blurred = !1, this._latency = this._savedLatency, this.resync())
        }, null == i['default'].eventLoop && (i['default'].eventLoop = new r({
            latency: 100,
            blurLatency: 100
        }));
        var s = i['default'].eventLoop
    },
    4: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'doTimeout', function() {
            return r
        });
        n.d(t, 'clearTimeouts', function() {
            return l
        });
        var o = n(2),
            i = n(5),
            a = o['default'];
        null == a._timeouts && (a._timeouts = {});
        var r = function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1;
                Object(i.isArray)(e) && (e = e.join('.'));
                var o = d(e);
                if (l(e, o), t) {
                    var r = a._timeouts[o];
                    null == r && (r = a._timeouts[o] = {});
                    var s = setTimeout(function() {
                        delete r[e], t()
                    }, n);
                    return r[e] = s, s
                }
                return a._timeouts[o][e]
            },
            l = function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                Object(i.isArray)(e) && (e = e.join('.')), t = t || d(e);
                var n;
                if ('__global__' === t && (n = a._timeouts[e], n))
                    for (var o in n) {
                        var r = n[o];
                        clearTimeout(r), delete n[o]
                    }
                if (n = a._timeouts[t], n)
                    for (var l in n) {
                        var u = n[l];
                        l.indexOf && 0 === l.indexOf(e) && (l.length === e.length || '.' === l.charAt(e.length)) && (clearTimeout(u), delete n[l])
                    }
                a.blockSweepTimeouts || (a.blockSweepTimeouts = !0, setTimeout(s, 0), setTimeout(function() {
                    a.blockSweepTimeouts = !1
                }, 5e3))
            },
            s = function() {
                for (var e in a._timeouts) {
                    var t = a._timeouts[e];
                    Object(i.isEmpty)(t) && delete a._timeouts[e]
                }
            },
            d = function(e) {
                var t = e.indexOf('.');
                return 0 < t ? e.substring(0, t) : '__global__'
            }
    },
    40: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'controlDimensionsForVideo', function() {
            return c
        });
        n.d(t, 'scalingOptionsFromVideo', function() {
            return m
        });
        n.d(t, 'controlDimensions', function() {
            return g
        });
        n.d(t, 'bigPlayButtonDimensions', function() {
            return y
        });
        n.d(t, 'fontSizeMultiplier', function() {
            return h
        });
        n.d(t, 'allowBigControls', function() {
            return f
        });
        n.d(t, 'maxMultiplierForVideo', function() {
            return b
        });
        n.d(t, 'minMultiplierForVideo', function() {
            return A
        });
        n.d(t, 'getZoomMultiplier', function() {
            return _
        });
        n.d(t, 'getDeviceMultiplier', function() {
            return v
        });
        n.d(t, 'controlMultiplierForVideo', function() {
            return w
        });
        n.d(t, 'controlMultiplier', function() {
            return k
        });
        n.d(t, 'menuMultiplier', function() {
            return C
        });
        n.d(t, 'fitControl', function() {
            return S
        });
        n.d(t, 'tapIcon', function() {
            return P
        });
        n.d(t, 'controlMultiplierBasedOnVideo', function() {
            return B
        });
        var i = n(35),
            s = n(4),
            d = n(16),
            u = n(5);

        function o(e, t) {
            return l(e) || r(e, t) || a()
        }

        function a() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance')
        }

        function r(e, t) {
            var n = [],
                o = !0,
                i = !1,
                a;
            try {
                for (var r, l = e[Symbol.iterator](); !(o = (r = l.next()).done) && (n.push(r.value), !(t && n.length === t)); o = !0);
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    o || null == l['return'] || l['return']()
                } finally {
                    if (i) throw a
                }
            }
            return n
        }

        function l(e) {
            if (Array.isArray(e)) return e
        }
        var p = Object(d.cachedDetect)(),
            c = function(e) {
                var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {},
                    n = 2 < arguments.length ? arguments[2] : void 0,
                    o = 3 < arguments.length ? arguments[3] : void 0;
                return g(m(e, t), n, o)
            },
            m = function(e, t) {
                return u.merge({
                    videoWidth: e.videoWidth(),
                    videoHeight: e.videoHeight(),
                    isInFullscreen: e.inFullscreen(),
                    controlScaling: e.controlScaling()
                }, t)
            },
            g = function() {
                var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {},
                    t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 40,
                    n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : 34;
                e = u.merge({
                    videoWidth: 640,
                    videoHeight: 360,
                    isInFullscreen: !1,
                    baseWidth: null == t ? 40 : t,
                    baseHeight: null == n ? 34 : n
                }, e);
                var o = k(e);
                return {
                    width: o * e.baseWidth,
                    height: o * e.baseHeight
                }
            },
            y = function(e, t, n) {
                return g(e, t, n)
            },
            h = function(e) {
                return k(e)
            },
            f = function() {
                var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {},
                    t = e.screenHeight || window.screen.height,
                    n = e.screenWidth || window.screen.width;
                return 'auto' != e.controlScaling || p.iphone || p.android || n < t
            },
            b = function(e) {
                return 'auto' == e.controlScaling ? f(e) ? 3.5 : 1.4 : e.controlScaling
            },
            A = function(e) {
                return 'auto' == e.controlScaling ? f(e) ? 1 : .75 : e.controlScaling
            },
            _ = function(e) {
                if (!e.isInFullscreen) return 1;
                var t = Math.max(1, window.innerWidth / Math.max(screen.width, screen.height));
                return t
            },
            v = function(e) {
                return f(e) ? 1.4 : 1
            },
            w = function(e, t) {
                return k(m(e, t))
            },
            k = function(e) {
                if ('auto' != e.controlScaling) return e.controlScaling;
                var t = e.videoWidth,
                    n = e.videoHeight,
                    o = _(e),
                    i = Math.max(t, n);
                if (960 < i) {
                    var a = i / 960 * v(e);
                    return Math.min(b(e) * o, a * o)
                }
                if (640 > i) {
                    var r = i / 640 * v(e);
                    return Math.max(A(e) * o, r * o)
                }
                return 1 * v(e)
            },
            C = function(e) {
                return Math.max(.75, k(e))
            },
            S = function(e) {
                var t = e,
                    n = t.controlId,
                    o = t.video,
                    a = t.controlElem;
                e = u.merge({
                    videoWidth: o.videoWidth(),
                    videoHeight: o.videoHeight(),
                    controlScaling: o.controlScaling(),
                    isInFullscreen: o.inFullscreen()
                }, e);
                var r = g(e),
                    l = r.width,
                    s = r.height;
                return Object(i.elemStyle)(a, {
                    height: ''.concat(s, 'px'),
                    width: ''.concat(l, 'px')
                }), P(''.concat(o.uuid, '.').concat(n), a), {
                    width: l,
                    height: s
                }
            },
            P = function(e, t) {
                for (var n = t.getElementsByTagName('svg'), o = 0; o < n.length; o++)(function(t) {
                    Object(s.doTimeout)(''.concat(e, '.tap_icon'), function() {
                        Object(i.elemStyle)(t, {
                            position: 'relative'
                        }), Object(s.doTimeout)('#{timeoutPrefix}.tap_icon', function() {
                            Object(i.elemStyle)(t, {
                                position: ''
                            })
                        }, 30)
                    }, 30)
                })(n[o])
            },
            E = function() {
                var e = document.querySelector('meta[name=viewport]'),
                    t = e && e.getAttribute('content'),
                    n = {};
                if (t) {
                    var o = t.split(/[\s,]+/);
                    o.forEach(function(e) {
                        var t = e.split('=');
                        2 === t.length && (n[t[0]] = u.cast(t[1]))
                    })
                }
                return n
            },
            T = function() {
                var e = p.iphone || p.ipad || p.android;
                if (!e) return [640, 960];
                var t, n = E();
                if (n.width) {
                    t = 'number' == typeof n.width ? 0 + n.width : screen.width || window.innerWidth;
                    var o = Math.max(n['minimum-scale'] || 0, Math.min(n['maximum-scale'] || 10, n['initial-scale'] || 1));
                    1 > o && (t /= o)
                } else t = window.innerWidth;
                return [t, 2 * t / 3]
            },
            B = function(e, t) {
                var n = e.videoWidth(),
                    i = t || T(),
                    a = o(i, 2),
                    r = a[0],
                    l = a[1];
                return n < r ? n / r : n > l ? n / l : 1
            }
    },
    41: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'isMouseDown', function() {
            return p
        });
        n.d(t, 'setIsMouseDownForceReturnVal', function() {
            return c
        });
        n.d(t, 'unsetIsMouseDownForceReturnVal', function() {
            return m
        });
        n.d(t, 'isMouseDownRecently', function() {
            return y
        });
        var o = n(2),
            i = n(35),
            a = n(16),
            r = Object(a.cachedDetect)();
        if (null == o['default']._isMouseDown) {
            o['default']._isMouseDown = !1;
            var l = function(e) {
                    o['default']._isMouseDown = !0, o['default']._lastMouseDownAt = Date.now(), setTimeout(function() {
                        e.defaultPrevented && (o['default']._isMouseDown = !1)
                    }, 0)
                },
                s = function() {
                    o['default']._lastMouseUpAt = Date.now(), setTimeout(function() {
                        o['default']._isMouseDown = !1
                    }, 0)
                },
                d = function() {
                    o['default']._lastMouseUpAt = Date.now(), setTimeout(function() {
                        o['default']._isMouseDown = !1
                    }, 0)
                };
            r.touchScreen ? (Object(i.elemBind)(document, 'touchstart', l, !0), Object(i.elemBind)(document, 'touchend', d, !0)) : (Object(i.elemBind)(document, 'mousedown', l, !0), Object(i.elemBind)(document, 'mouseup', s, !0));
            var u = r.windows ? s : l;
            Object(i.elemBind)(document, 'contextmenu', u, !0)
        }
        var p = function() {
                return null == o['default']._mouseDownForceReturnVal ? o['default']._isMouseDown : o['default']._mouseDownForceReturnVal
            },
            c = function() {
                var e = !(0 < arguments.length && arguments[0] !== void 0) || arguments[0];
                o['default']._mouseDownForceReturnVal = e
            },
            m = function() {
                o['default']._mouseDownForceReturnVal = null
            },
            g = function(e) {
                var t = Math.max(o['default']._lastMouseDownAt || 0, (o['default']._lastMouseUpAt || 0) - 1);
                return t > Date.now() - e
            },
            y = function() {
                return g(500)
            }
    },
    42: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'canEditMedia', function() {
            return b
        });
        n.d(t, 'fetchMedia', function() {
            return A
        });
        n.d(t, 'mediaDataUrl', function() {
            return _
        });
        n.d(t, 'mediaDataScriptRegExp', function() {
            return v
        });
        n.d(t, 'cacheMedia', function() {
            return w
        });
        n.d(t, 'cacheAbTest', function() {
            return k
        });
        n.d(t, 'uncacheMedia', function() {
            return C
        });
        n.d(t, 'mediaFromCache', function() {
            return P
        });
        n.d(t, 'abTestFromCache', function() {
            return E
        });
        var o = n(3),
            i = n(2),
            a = n(26),
            r = n.n(a),
            l = n(15),
            s = n(29),
            d = n(25),
            u = n(43),
            p = n(7),
            c = n(4),
            m = n(20),
            g = n(14),
            y = n(21),
            h = n(44),
            f = n(46);
        n.d(t, 'EMBED_SSL_ACCOUNT_IDS', function() {
            return f.EMBED_SSL_ACCOUNT_IDS
        });
        n.d(t, 'isEmbedSslMedia', function() {
            return f.isEmbedSslMedia
        });
        n.d(t, 'convertEmbedSslToAkamai', function() {
            return f.convertEmbedSslToAkamai
        });
        null == i['default']._canEditMedia && (i['default']._canEditMedia = {}), null == i['default']._remoteData && (i['default']._remoteData = {});
        var b = function(e, t) {
                var n = i['default']._canEditMedia[e];
                if (n) return n;
                n = i['default']._canEditMedia[e], null == n && (n = i['default']._canEditMedia[e] = new r.a);
                var o = 'https://'.concat(Object(m.mediaDataHost)(t), '/media_url'),
                    a = {
                        hashed_id: encodeURIComponent(e)
                    };
                return Object(s.jsonpPlus)(o, a, function(e) {
                    e && e.logged_in && n.go(e)
                }, {
                    once: !0
                }), n
            },
            A = function(e, t) {
                var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {},
                    o = T(e, n);
                if (o) {
                    l.wlog.info('W.remote.media', e, 'from local cache');
                    var i = 'remote-media.'.concat(e, '.').concat(Object(p['default'])()),
                        a = o;
                    return o.type && 'ab-test' === o.type && (l.wlog.info('W.remote.media', e, 'responded', o), a = B(o)), Object(c.doTimeout)(i, function() {
                        t(a)
                    }), i
                }
                l.wlog.info('W.remote.media', e, 'fetching');
                var r = _(e, n),
                    d = {};
                null != n.password && (d.password = n.password), n.idType && (d.idType = n.idType);
                var u = {
                    onerror: function() {
                        l.wlog.error('Timed out fetching '.concat(r))
                    },
                    timeout: 1e4,
                    once: null == n.once || n.once,
                    scriptRegex: v(e)
                };
                return Object(s.jsonpPlus)(r, d, function(n) {
                    if (n.error) l.wlog.info('W.remote.media', e, 'error', n), w(e, n), t(n);
                    else if (n.type && 'ab-test' === n.type) {
                        l.wlog.info('W.remote.media', e, 'responded', n);
                        var o = B(n);
                        t(o)
                    } else delete n.media.unnamed_assets, Object(f.convertEmbedSslToAkamai)(n.media), w(e, n.media), l.wlog.info('W.remote.media', e, 'responded', n.media), t(n.media)
                }, u)
            },
            _ = function(e) {
                var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
                if (t.useMediaDataHostLogic) {
                    var n = Object(m.mediaDataHost)(t);
                    return ''.concat(Object(m.eV1Protocol)(), '//').concat(n, '/embed/medias/').concat(e, '.json')
                }
                var o = Object(m.forceValidFastWistiaHost)(t.embedHost);
                return ''.concat(Object(g.proto)(), '//').concat(o, '/embed/medias/').concat(e, '.json')
            },
            v = function(e) {
                var t = 'https:' === location.protocol ? 'https' : 'https?';
                return new RegExp('^('.concat(t, ':)?//((').concat(Object(m.cdnFastWistiaComHost)().replace('.', '\\.'), ')|(').concat(Object(m.cdnFastWistiaNetHost)().replace('.', '\\.'), '))/embed/medias/').concat(e, '\\.jsonp\\??'))
            },
            w = function(e, t) {
                return Object(u.cacheMediaData)(e, t)
            },
            k = function(e, t) {
                return i['default']._remoteData['ab_test_'.concat(e)] = t
            },
            C = function(e) {
                Object(u.uncacheMediaData)(e), S(e)
            },
            S = function(e) {
                window['wistiajsonp-/embed/medias/'.concat(e, '.json')] = null, Object(d.removeScriptsBySrc)(_(e), {
                    scriptRegex: v(e)
                })
            },
            P = function(e) {
                return T(e, {
                    idType: 'media'
                })
            },
            E = function(e) {
                return T(e, {
                    idType: 'ab-test'
                })
            },
            T = function(e) {
                var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {},
                    n = t.idType || 'media',
                    a = i['default']._remoteData[''.concat(n, '_').concat(e)];
                if (a) return a;
                var r = o['default']['wistiajsonp-/embed/medias/'.concat(e, '.json')];
                return null != r && r.media ? r.media : null
            },
            B = function(e) {
                if (e.error) return e;
                e.missingVideos && console.warn('The following videos were not present in the AbTest: ', e.missingVideos), k(e.hashedId, e);
                var t = [e.control, e.variant].filter(Boolean);
                t.forEach(function(e) {
                    Object(f.convertEmbedSslToAkamai)(e.media), w(e.media.hashedId, e.media)
                });
                var n, o = 'ab_test.'.concat(e.hashedId, '.selected_media_hashed_id');
                n = e.winnerHashedId ? e.winnerHashedId : Object(y.setOrGet)(o);
                var i, a, r, l;
                'undefined' == typeof crypto ? (l = Math.random(), a = +(.5 < l)) : (r = crypto.getRandomValues(new Uint8Array(1)), a = 1 & r[0]);
                var s = 2 === t.length ? a : 0;
                i = t[s].media;
                var d = !1;
                t.some(function(e) {
                    if (e.media.hashedId === n) return i = e.media, d = !0, !0
                });
                var u = {
                    numberOfMedias: t.length,
                    coinFlip: a,
                    savedMedia: d,
                    agent: navigator.userAgent || null,
                    selectedHashedId: i.hashedId,
                    stringCryptoRandom: r + ''
                };
                return null == r ? u.mathRandom = l : u.cryptoRandom = r[0], Object(h.send)('count', 'player/ab-test-selection', 1, u), Object(y.setOrGet)(o, i.hashedId), i
            }
    },
    420: function(e, t, n) {
        'use strict';
        n.r(t);
        var o = n(2),
            i = o['default'].lib('utilities/detect'),
            a = i.cachedDetect,
            r = a();
        t['default'] = function(e) {
            var t = e.lastPlayInfo(),
                n = Date.now() - t.issuedAt,
                o = !t.source || t.rejectedAt,
                i = t.isPending && 'user-event' === t.source && 2e3 > n,
                a = e._opts && 'reset' === e._opts.endVideoBehavior && 'ended' === e.state(),
                l = t.isPending && 'non-user-event' === t.source && !e.isMuted() && (!1 === e._opts.silentAutoPlay || null == e._opts.silentAutoPlay) && (r.iphone || r.ipad || r.safari);
            return e.up() && ('beforeplay' === e.state() || a) && (o || l || i || a)
        }
    },
    43: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'cacheMediaData', function() {
            return i
        });
        n.d(t, 'uncacheMediaData', function() {
            return a
        });
        var o = n(2);
        null == o['default']._remoteData && (o['default']._remoteData = {});
        var i = function(e, t) {
                return o['default']._remoteData['media_'.concat(e)] = t
            },
            a = function(e) {
                o['default']._remoteData['media_'.concat(e)] = null, delete o['default']._remoteData['media_'.concat(e)]
            }
    },
    433: function(e, t, n) {
        'use strict';
        n.r(t);
        var A = n(2),
            _ = n(34),
            v = n(434),
            w = n(435),
            k = n(437),
            C = n(438),
            S = n(439),
            P = n(441),
            E = n(443),
            T = n(445),
            B = n(447),
            x = n(449),
            D = n(452),
            F = n(453),
            I = n(455),
            M = n(457),
            O = n(458),
            L = n(459),
            R = n(460),
            H = n(462),
            W = n(464),
            j = n(465),
            V = n(466),
            N = n(467),
            U = n(468),
            Q = n(469),
            G = n(475),
            z = n(476);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            return l(e) || r(e, t) || a()
        }

        function a() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance')
        }

        function r(e, t) {
            var n = [],
                o = !0,
                i = !1,
                a;
            try {
                for (var r, l = e[Symbol.iterator](); !(o = (r = l.next()).done) && (n.push(r.value), !(t && n.length === t)); o = !0);
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    o || null == l['return'] || l['return']()
                } finally {
                    if (i) throw a
                }
            }
            return n
        }

        function l(e) {
            if (Array.isArray(e)) return e
        }

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function d(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function u(e, t, n) {
            return t && d(e.prototype, t), n && d(e, n), e
        }

        function p(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : c(e)
        }

        function c(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function m(e, t, n) {
            return m = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var o = g(e, t);
                if (o) {
                    var i = Object.getOwnPropertyDescriptor(o, t);
                    return i.get ? i.get.call(n) : i.value
                }
            }, m(e, t, n || e)
        }

        function g(e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = y(e), null !== e););
            return e
        }

        function y(e) {
            return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, y(e)
        }

        function f(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && b(e, t)
        }

        function b(e, t) {
            return b = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, b(e, t)
        }
        var q = A['default'].lib('utilities/isMouseDown'),
            Y = q.setIsMouseDownForceReturnVal,
            K = q.unsetIsMouseDownForceReturnVal,
            J = A['default'].lib('player/lib/judy'),
            X = A['default'].lib('player/lib/assets'),
            Z = A['default'].lib('preact'),
            $ = Z.h,
            h = Z.render,
            ee = A['default'].lib('utilities/event_loop'),
            te = ee.globalEventLoop,
            ne = A['default'].lib('promiscuous'),
            oe = A['default'].lib('player/lib/elem'),
            ie = oe.elemFromObject,
            ae = oe.elemAppend,
            re = oe.elemBind,
            le = oe.elemAddClass,
            se = oe.elemOffset,
            de = oe.elemRemoveClass,
            ue = oe.elemPrepend,
            pe = oe.elemStyle,
            ce = oe.elemWidth,
            me = oe.inUserEventContext,
            ge = A['default'].lib('utilities/obj');
        if (!A['default'].VulcanV2Player) {
            var ye = A['default'].Video,
                he = function(e) {
                    function t(e) {
                        var n;
                        s(this, t), n = p(this, y(t).call(this, e)), n.playerType = 'vulcan-v2', n._enabledControls = {}, n._visibilityRequests = {}, n._playerContext = [], n._overlays = {}, n.setupBehaviors(), e._playlist && 1 < e._playlist.length && n.loadLastFrameCanvasControl(), n.on('playlistchange', function(e) {
                            1 < e.length && n.loadLastFrameCanvasControl()
                        });
                        var o = n.on('beforereplace', function() {
                            o(), n.loadLastFrameCanvasControl()
                        });
                        return n
                    }
                    return f(t, e), u(t, [{
                        key: 'loadLastFrameCanvasControl',
                        value: function() {
                            this.ready(function() {
                                A['default'].asyncRequire('vulcanV2Video/controls/LastFrameCanvasControl.js')
                            })
                        }
                    }, {
                        key: 'setupBehaviors',
                        value: function() {
                            this.addBehaviors([z['default'], H['default'], N['default'], j['default'], U['default'], V['default'], W.PlaySuspendedOffScreenBehavior, G['default'], Q['default']])
                        }
                    }, {
                        key: 'removeBehaviors',
                        value: function() {
                            for (var e in this.behaviors) this.behaviors.hasOwnProperty(e) && this.removeBehavior(e)
                        }
                    }, {
                        key: 'elem',
                        value: function() {
                            return this.engine ? this.engine.videoElem() : (this._dummyVideo || (this._dummyVideo = document.createElement('video')), this._dummyVideo)
                        }
                    }, {
                        key: 'embed',
                        value: function(e) {
                            return e instanceof t ? this.behaviors.embed.embed(e) : this.behaviors.embed.embed()
                        }
                    }, {
                        key: 'renderUI',
                        value: function() {
                            var e = this;
                            this.ui || (this.ui = this.behaviors.ui);
                            var t = this.ui.lastRenderPromise || ne.resolve();
                            return t.then(function() {
                                return e.ui.render().then(function() {
                                    e.vulcanWrapper || (e.vulcanWrapper = e.ui.vulcanWrapper)
                                })
                            })
                        }
                    }, {
                        key: 'rebuild',
                        value: function() {
                            return this.behaviors.embed.rebuild(this)
                        }
                    }, {
                        key: 'onDimensionChangeSafe',
                        value: function() {
                            if (this.grid) try {
                                this.onWidthChange(this.videoWidth()), this.onHeightChange(this.videoHeight())
                            } catch (t) {
                                this.error(t)
                            }
                        }
                    }, {
                        key: 'transferStateFrom',
                        value: function(e) {
                            this.behaviors.fullscreen && this.behaviors.fullscreen.transferStateFrom(e)
                        }
                    }, {
                        key: 'bestEngine',
                        value: function() {
                            return J.bestUsableEngine(this.publicApi.judyCtx(), this._mediaData, this._opts)
                        }
                    }, {
                        key: 'initEngineAfterEmbedded',
                        value: function() {
                            var e = this;
                            this.embedded(function() {
                                return e.behaviors.embed.initializeEngine()
                            })
                        }
                    }, {
                        key: 'setupBindings',
                        value: function() {
                            this.setupVideoBindings()
                        }
                    }, {
                        key: 'setupVideoBindings',
                        value: function() {
                            var e = this;
                            this.publicApi.bind('click', function() {
                                e.initEngineAfterEmbedded()
                            }), this.publicApi.bind('mouseenter', function() {
                                e.initEngineAfterEmbedded()
                            }), this.publicApi.bind('focusin', function() {
                                e.initEngineAfterEmbedded()
                            }), this.bind('widthchange', function(t) {
                                e.onWidthChange(t)
                            }), this.bind('heightchange', function(t) {
                                e.onHeightChange(t)
                            })
                        }
                    }, {
                        key: 'addBehavior',
                        value: function(e) {
                            var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                            null == this.behaviors && (this.behaviors = {});
                            var n = e.handle;
                            if (!n) return void this.error('No handle defined for', e);
                            this.behaviors[n] && (this.behaviors[n].destroy(), this.behaviors[n] = null);
                            try {
                                var o = this.behaviors[n] = new e(this);
                                return t && o.init(), o
                            } catch (t) {
                                setTimeout(function() {
                                    throw t
                                }, 0), delete this.behaviors[n]
                            }
                        }
                    }, {
                        key: 'addBehaviors',
                        value: function(e) {
                            var t = this,
                                n = e.map(function(e) {
                                    return t.addBehavior(e, !1)
                                });
                            return n.map(function(n) {
                                try {
                                    n.init()
                                } catch (o) {
                                    t.error('error in init for', n.constructor.handle, 'behavior'), setTimeout(function() {
                                        throw o
                                    }, 0)
                                }
                            }), n
                        }
                    }, {
                        key: 'removeBehavior',
                        value: function(e) {
                            this.behaviors[e] && (this.behaviors[e].destroy(), delete this.behaviors[e])
                        }
                    }, {
                        key: 'isMediaDataUsingEmbedSsl',
                        value: function() {
                            for (var e, t = 0; t < this._mediaData.assets.length; t++)
                                if (e = this._mediaData.assets[t], e.url && /embed-ssl\.wistia\.com/.test(e.url)) return !0;
                            return !1
                        }
                    }, {
                        key: 'onWidthChange',
                        value: function(e) {
                            this.engine && this.engine.onWidthChange(e)
                        }
                    }, {
                        key: 'onHeightChange',
                        value: function(e) {
                            this.engine && this.engine.onHeightChange(e)
                        }
                    }, {
                        key: 'controlScaling',
                        value: function(e) {
                            if (null != e) {
                                var t = this._controlScaling;
                                this._controlScaling = e, t !== e && this.trigger('controlscalingchange', e, t)
                            } else return this._controlScaling || 'auto'
                        }
                    }, {
                        key: 'bigPlayButtonEnabled',
                        value: function(e) {
                            this.setControlEnabled('bigPlayButton', e)
                        }
                    }, {
                        key: 'bigPlayButtonTimeEnabled',
                        value: function(e) {
                            this.isControlEnabled('bigPlayButton') && this.ui.controls.bigPlayButton.setTimeEnabled(e)
                        }
                    }, {
                        key: 'smallPlayButtonEnabled',
                        value: function(e) {
                            this.setControlEnabled('smallPlayButton', e)
                        }
                    }, {
                        key: 'playbarControlEnabled',
                        value: function(e) {
                            this.setControlEnabled('lowerPlaybar', e), this.setControlEnabled('upperPlaybar', e)
                        }
                    }, {
                        key: 'settingsControlEnabled',
                        value: function(e) {
                            this.setControlEnabled('settingsButton', e)
                        }
                    }, {
                        key: 'playbackRateControlEnabled',
                        value: function(e) {
                            this.isControlEnabled('settingsButton') && this.ui.controls.settingsButton.setPlaybackRateEnabled(e)
                        }
                    }, {
                        key: 'qualityControlEnabled',
                        value: function(e) {
                            this.isControlEnabled('settingsButton') && this.ui.controls.settingsButton.setQualityEnabled(e)
                        }
                    }, {
                        key: 'volumeControlEnabled',
                        value: function(e) {
                            this.setControlEnabled('volumeButton', e)
                        }
                    }, {
                        key: 'fullscreenButtonEnabled',
                        value: function(e) {
                            this.setControlEnabled('fullscreenButton', e)
                        }
                    }, {
                        key: 'hideControls',
                        value: function() {
                            return this.ui.releaseControls('showControls')
                        }
                    }, {
                        key: 'showControls',
                        value: function() {
                            return this.requestControls('showControls', 4e3)
                        }
                    }, {
                        key: 'requestChromeless',
                        value: function(e, t) {
                            return this.requestControls(e, t, !1)
                        }
                    }, {
                        key: 'releaseChromeless',
                        value: function(e) {
                            return this.releaseControls(e)
                        }
                    }, {
                        key: 'requestControls',
                        value: function(e, t) {
                            var n = this,
                                o = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
                            return this._visibilityRequests[e] = o, null != t && A['default'].timeout(''.concat(this.uuid, '.').concat(e, '.release_controls'), function() {
                                n.releaseControls(e)
                            }, t), this.ui.maybeToggleControls()
                        }
                    }, {
                        key: 'releaseControls',
                        value: function(e) {
                            return this._visibilityRequests[e] = null, this.ui.maybeToggleControls()
                        }
                    }, {
                        key: 'fit',
                        value: function() {
                            m(y(t.prototype), 'fit', this).call(this), this.embedded(function() {})
                        }
                    }, {
                        key: 'getBuffered',
                        value: function() {
                            if (!this.engine) return [];
                            var e = this.engine.activeBufferRange();
                            if (e) {
                                var t = this.engine.activeBufferRange(),
                                    n = i(t, 2),
                                    o = n[0],
                                    a = n[1];
                                return [{
                                    start: o,
                                    end: a
                                }]
                            }
                            return []
                        }
                    }, {
                        key: 'rangeBuffered',
                        value: function() {
                            this.engine.activeBufferRange()
                        }
                    }, {
                        key: 'timeBuffered',
                        value: function() {
                            var e = this.rangeBuffered();
                            return e ? e[1] - e[0] : 0
                        }
                    }, {
                        key: 'totalBuffered',
                        value: function() {
                            return this.engine ? this.engine.totalBuffered() : 0
                        }
                    }, {
                        key: 'totalPlayed',
                        value: function() {
                            return this.engine ? this.engine.totalPlayed() : 0
                        }
                    }, {
                        key: 'sequentialBufferedRange',
                        value: function() {
                            return this.engine ? this.engine.sequentialBufferedRange() : [0, 0]
                        }
                    }, {
                        key: 'requestFullscreen',
                        value: function() {
                            return this.behaviors.fullscreen.requestFullscreen()
                        }
                    }, {
                        key: 'cancelFullscreen',
                        value: function() {
                            return this.behaviors.fullscreen.cancelFullscreen()
                        }
                    }, {
                        key: 'inFullscreen',
                        value: function() {
                            return this.behaviors.fullscreen.inFullscreen()
                        }
                    }, {
                        key: 'stopStreaming',
                        value: function() {
                            this.info('stopStreaming'), this.engine && this.engine.stopStreaming()
                        }
                    }, {
                        key: 'cleanup',
                        value: function() {
                            this.info('cleanup'), this.removeBehaviors()
                        }
                    }, {
                        key: 'assetOptions',
                        value: function() {
                            return this.engine.selectableAssets()
                        }
                    }, {
                        key: 'videoQuality',
                        value: function(e) {
                            var t = this;
                            return null == e ? this.engine ? this.engine.getCurrentQuality() : 'auto' : void(this.info('videoQuality', e), this.initEngineAfterEmbedded(), this.commandQueueOpen.synchronize(function(n) {
                                t.ready(function() {
                                    t.engine.changeQuality(e, 'playing' === t.state()).then(n)
                                })
                            }))
                        }
                    }, {
                        key: 'changeAudioTrack',
                        value: function(e) {
                            var t = this;
                            null != e && (this.initEngineAfterEmbedded(), this.info('changeAudioTrack', e), this.commandQueueOpen.synchronize(function(n) {
                                t.ready(function() {
                                    t.engine.changeAudioTrack(e).then(n)
                                })
                            }))
                        }
                    }, {
                        key: 'getAudioTracks',
                        value: function() {
                            var e = this.bestEngine();
                            if (!this.engine) {
                                var t = [];
                                if ('engines/hls_video.js' === e) {
                                    var n = X.filter(this._mediaData.assets, {
                                        container: 'm3u8',
                                        segment_duration: 3,
                                        type: 'hls_audio',
                                        status: X.READY,
                                        metadata: function(e) {
                                            return Object(e).max_bitrate
                                        }
                                    });
                                    t.push({
                                        audioCodec: void 0,
                                        autoselect: !0,
                                        default: !0,
                                        forced: !1,
                                        groupId: 'audio',
                                        id: 0,
                                        lang: void 0,
                                        name: '[Original]',
                                        type: 'AUDIO'
                                    }), n.forEach(function(e) {
                                        t.push({
                                            audioCodec: void 0,
                                            autoselect: !1,
                                            default: !1,
                                            forced: !1,
                                            groupId: 'audio',
                                            id: 0,
                                            lang: void 0,
                                            name: e.display_name,
                                            type: 'AUDIO'
                                        })
                                    })
                                }
                                return t
                            }
                            return this.engine.getAudioTracks()
                        }
                    }, {
                        key: 'getCurrentAudioTrack',
                        value: function() {
                            return this.engine ? this.engine.getCurrentAudioTrack() : 0
                        }
                    }, {
                        key: 'selectedQuality',
                        value: function() {
                            return this.engine ? this.engine.selectedQuality() : 'auto'
                        }
                    }, {
                        key: 'selectableQualities',
                        value: function() {
                            return this.engine ? this.engine.selectableQualities() : ['auto']
                        }
                    }, {
                        key: 'stillUrl',
                        value: function(e) {
                            return e = A['default'].obj.merge({
                                playButton: !1
                            }, e), m(y(t.prototype), 'stillUrl', this).call(this, e)
                        }
                    }, {
                        key: 'play',
                        value: function() {
                            var t = this;
                            this.suppressPlay() || this.trigger('playcalled'), this.initEngineAfterEmbedded();
                            var e = me() && !this.ready();
                            return this.info('play'), this.commandQueueOpen.synchronize(function(n) {
                                return t.suppressPlay() ? void n() : void(t._isPlayPending = !0, t._lastPlayType = void 0, t._lastPlaySource = fe(), t._lastPlayIssuedAt = Date.now(), t._lastPlayResolvedAt = null, t._lastPlayRejectedAt = null, t.trigger('playpending', t.lastPlayInfo()), t.ready(function() {
                                    t._calledPlay = !0, t._mozillaAtEnd() && t.engine.setCurrentTime(0);
                                    var o = {};
                                    e && !1 === t._opts.silentAutoPlay && (o.silentAutoPlay = 'allow', t.trigger('clicked-play-before-ready'));
                                    var i = function() {
                                        t._isPlayPending = !1, t._lastPlayType = void 0, t._lastPlayRejectedAt = Date.now(), t.trigger('playrejected', t.lastPlayInfo()), n()
                                    };
                                    return A['default'].detect.ios.version && 10.1 > A['default'].detect.ios.version && !me() && !t.engine.isInitializingFromUnmuted() ? (t.notice('Play rejected because not in user context.'), void i()) : void(t._playPromise = t.engine.play(o).then(function(e) {
                                        t._isPlayPending = !1, t._lastPlayType = e, t._lastPlayResolvedAt = Date.now(), 'play-silently' !== e || t._inSilentPlaybackMode || (t._inSilentPlaybackMode = !0, t.trigger('silentplaybackmodechange', !0)), n()
                                    }).catch(function(n) {
                                        t.notice(n), i()
                                    }))
                                }))
                            }), this
                        }
                    }, {
                        key: 'pause',
                        value: function() {
                            var e = this;
                            return this.info('pause'), this.trigger('receivepause'), this.initEngineAfterEmbedded(), this.commandQueueOpen.synchronize(function(t) {
                                e._isPausePending = !1, e._lastPauseSource = fe(), e._lastPauseIssuedAt = Date.now(), e.ready() ? e.engine.pause().then(function() {
                                    e._isPausePending = !1, t()
                                }) : t()
                            }), this
                        }
                    }, {
                        key: 'time',
                        value: function(n, e) {
                            var t = this;
                            return null == n ? this.engine && this.engine.getCurrentTime() || 0 : (this.info('time', n), this.initEngineAfterEmbedded(), this.commandQueueOpen.synchronize(function(o) {
                                'beforeplay' === t.state() && (t._lastPlaySource = fe(), t._lastPlayIssuedAt = Date.now(), t._isPlayPending = !0, t._lastPlayType = void 0, t._isPausePending = !0, t._lastPauseIssuedAt = t._lastPlayIssuedAt, t._lastPauseSource = t._lastPlaySource), n = Math.max(0, Math.min(t.duration(), n));
                                fe();
                                t.ready(function() {
                                    var i = e && e.lazy && 'playing' !== t.state();
                                    return i ? (t.engine.seekOnPlay(n).then(t.behaviors.relayEvents.fireTimeChangedEventsIfChanged), t._isPlayPending = !1, void o()) : void('beforeplay' === t.state() ? t._seekPromise = t.engine.seek(n, e).catch(function(i) {
                                        t.notice(i), t.engine.seekOnPlay(n), t._isPlayPending = !1, t._lastPlayRejectedAt = Date.now(), t._lastPlayType = void 0, t.trigger('playrejected', t.lastPlayInfo()), o()
                                    }).then(function(e) {
                                        t.behaviors.relayEvents.fireTimeChangedEventsIfChanged(), t._isPlayPending = !1, t._isPausePending = !1, t._lastPlayType = e, 'play-silently' === e && (t._inSilentPlaybackMode = !0, t.trigger('silentplaybackmodechange', !0)), o()
                                    }) : (t.info('time '.concat(n, ': set immediately')), t.engine.setCurrentTime(n), t.behaviors.relayEvents.fireTimeChangedEventsIfChanged(), o()))
                                })
                            }), this)
                        }
                    }, {
                        key: 'duration',
                        value: function() {
                            if (this.engine) return this.engine.getDuration();
                            var e = this._opts.trimStart,
                                t = this._opts.trimEnd,
                                n = null != e && -1 !== e ? e : 0,
                                o = null != t && -1 !== t ? t : this._mediaData.duration;
                            return o - n
                        }
                    }, {
                        key: 'volume',
                        value: function(e) {
                            return null == e ? this.engine ? this.engine.getVolume() : null == this._volume ? 1 : this._volume : (this.info('volume', e), e = Math.max(0, Math.min(1, e)), this.initEngineAfterEmbedded(), this._volume = e, this.ready() && this.engine.setVolume(e), this)
                        }
                    }, {
                        key: 'mute',
                        value: function() {
                            this._muted = !0, this.ready() && this.engine.mute()
                        }
                    }, {
                        key: 'unmute',
                        value: function() {
                            this._muted = !1, this.ready() && (A['default'].detect.callingPlayRequiresEventContext ? 'playing' !== this.state() || me() ? (this.engine.unmute(), this._inSilentPlaybackMode && (this._inSilentPlaybackMode = !1, this.trigger('silentplaybackmodechange', !1))) : this.notice('could not unmute') : (this.engine.unmute(), this._inSilentPlaybackMode && (this._inSilentPlaybackMode = !1, this.trigger('silentplaybackmodechange', !1))))
                        }
                    }, {
                        key: 'isMuted',
                        value: function() {
                            return this.engine ? this.engine.isMuted() : null == this._muted ? !!this._opts.muted : this._muted
                        }
                    }, {
                        key: 'state',
                        value: function() {
                            if (this.engine) {
                                var e = this.engine.getPlaybackMode();
                                return 'beforeplay' === e && this.behaviors.relayEvents._hasPlayed ? 'paused' : e
                            }
                            return 'beforeplay'
                        }
                    }, {
                        key: 'lastPauseInfo',
                        value: function() {
                            return {
                                source: this._lastPauseSource,
                                issuedAt: this._lastPauseIssuedAt,
                                isPending: !!this._isPausePending
                            }
                        }
                    }, {
                        key: 'lastPlayInfo',
                        value: function() {
                            return {
                                source: this._lastPlaySource,
                                issuedAt: this._lastPlayIssuedAt,
                                isPending: !!this._isPlayPending,
                                playType: this._lastPlayType,
                                resolvedAt: this._lastPlayResolvedAt,
                                rejectedAt: this._lastPlayRejectedAt
                            }
                        }
                    }, {
                        key: 'playerColor',
                        value: function(e) {
                            var t = this;
                            return null == e ? this._attrs.playerColor : (this.info('playerColor', e), this.embedded(function() {
                                var n = t._attrs.playerColor;
                                e = A['default'].Player._sanePlayerColor(e), t._attrs.playerColor = new A['default'].Color(e).toHex(), n !== t._attrs.playerColor && t.trigger('playercolorchange', t._attrs.playerColor, n)
                            }), this)
                        }
                    }, {
                        key: 'playerBackgroundColor',
                        value: function(e) {
                            if (null != e) {
                                this.info('playerBackgroundColor', e);
                                var t = this._attrs.playerBackgroundColor;
                                return this._attrs.playerBackgroundColor = new A['default'].Color(e).toHex(), t !== this._attrs.playerBackgroundColor && this.trigger('playerbackgroundcolorchange', this._attrs.playerBackgroundColor, t), this
                            }
                            return this._attrs.playerBackgroundColor
                        }
                    }, {
                        key: 'width',
                        value: function(e) {
                            var n = this,
                                o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                            return null == e ? m(y(t.prototype), 'width', this).call(this, e, o) : o.fullscreen || !this.inFullscreen() ? m(y(t.prototype), 'width', this).call(this, e, o) : (this.info('notFullscreen => width('.concat(e, ')')), this.notFullscreen(function() {
                                m(y(t.prototype), 'width', n).call(n, e, o)
                            }), this)
                        }
                    }, {
                        key: 'height',
                        value: function(e) {
                            var n = this,
                                o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                            return null == e ? m(y(t.prototype), 'height', this).call(this, e, o) : o.fullscreen || !this.inFullscreen() ? m(y(t.prototype), 'height', this).call(this, e, o) : (this.info('notFullscreen => height('.concat(e, ')')), this.notFullscreen(function() {
                                m(y(t.prototype), 'height', n).call(n, e, o)
                            }), this)
                        }
                    }, {
                        key: 'videoWidth',
                        value: function(e) {
                            var n = this,
                                o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                            return null == e ? m(y(t.prototype), 'videoWidth', this).call(this, e, o) : o.fullscreen || !this.inFullscreen() ? m(y(t.prototype), 'videoWidth', this).call(this, e, o) : (this.info('notFullscreen => videoWidth('.concat(e, ')')), this.notFullscreen(function() {
                                m(y(t.prototype), 'videoWidth', n).call(n, e, o)
                            }), this)
                        }
                    }, {
                        key: 'videoHeight',
                        value: function(e) {
                            var n = this,
                                o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                            return null == e ? m(y(t.prototype), 'videoHeight', this).call(this, e, o) : o.fullscreen || !this.inFullscreen() ? m(y(t.prototype), 'videoHeight', this).call(this, e, o) : (this.info('notFullscreen => videoHeight('.concat(e, ')')), this.notFullscreen(function() {
                                m(y(t.prototype), 'videoHeight', n).call(n, e, o)
                            }), this)
                        }
                    }, {
                        key: 'playbackRate',
                        value: function(e) {
                            var t = this;
                            return null == e ? this.engine ? this.engine.getPlaybackRate() : 1 : (this.initEngineAfterEmbedded(), this.ready(function() {
                                t.info('playbackRate', e);
                                var n = parseFloat(e);
                                if (isNaN(n)) return t.error('playbackRate: Invalid argument \'#{rate}\' given. Expected a float.'), t;
                                e = n;
                                var o = t.engine.getPlaybackRate();
                                t.engine.setPlaybackRate(e), t._eventLoopDuration = Math.max(50, Math.min(500, t._baseEventLoopDuration * e)), t._playbackRate = e, o !== t._playbackRate && t.trigger('playbackratechange', t._playbackRate)
                            }), this)
                        }
                    }, {
                        key: 'trim',
                        value: function(e) {
                            var t = this;
                            return null == e ? this.engine.getTrim() : void this.embedded(function() {
                                A['default'].obj.equalsDeep(e, t.engine.getTrim()) || (t.engine.setTrim(e), t.trigger('trimchange', e))
                            })
                        }
                    }, {
                        key: 'captureCurrentFrame',
                        value: function() {
                            var e;
                            return (e = this.engine).captureCurrentFrame.apply(e, arguments)
                        }
                    }, {
                        key: 'getReportAProblemData',
                        value: function() {
                            var e = this,
                                t = function(e) {
                                    try {
                                        return e()
                                    } catch (t) {
                                        return 'threw exception: '.concat(t.message)
                                    }
                                },
                                n = be(this.publicApi._opts),
                                o = this.publicApi._optionSources();
                            Object.keys(o).forEach(function(e) {
                                o[e] = be(o[e])
                            });
                            var i = {
                                media_key: this._mediaData.mediaKey,
                                account_key: this._mediaData.accountKey,
                                visitor_key: this.visitorKey(),
                                event_key: this.eventKey(),
                                referrer: document.referrer,
                                page_url: location.href,
                                extra_data: {
                                    first_1000_logs: A['default'].wlog.first1000LogLines(),
                                    last_1000_logs: A['default'].wlog.last1000LogLines(),
                                    browser_time: new Date,
                                    option_sources: t(function() {
                                        return o
                                    }),
                                    embed_options: n,
                                    active_plugins: t(function() {
                                        return Object.keys(e.publicApi.plugin)
                                    }),
                                    assets: this._mediaData.assets,
                                    selectedAsset: this.engine.selectedAsset(),
                                    attrs: this._attrs,
                                    assetOptions: t(function() {
                                        return e.assetOptions()
                                    }),
                                    isScreencast: t(function() {
                                        return e.isScreencast()
                                    }),
                                    judy: t(function() {
                                        return J.report(e.publicApi.judyCtx(), e._mediaData, e._opts)
                                    }),
                                    detect: A['default'].detect,
                                    engineDiagnostics: t(function() {
                                        return e.engine.diagnosticData()
                                    })
                                }
                            };
                            for (var a in this.publicApi.plugin)
                                if ('vulcanVideo' != a) {
                                    var r = this.publicApi.plugin[a];
                                    'function' == typeof r.getReportAProblemData && (i.extra_data[a] = r.getReportAProblemData())
                                } return i
                        }
                    }, {
                        key: 'setControlEnabled',
                        value: function(e, t) {
                            var n = this,
                                o = this.isControlEnabled(e) !== t;
                            this._enabledControls[e] = t;
                            var i = function() {
                                t ? n.trigger('controlenabled', e) : n.trigger('controldisabled', e)
                            };
                            return o ? this.embedded() ? this.renderUI().then(i) : new ne(function(e) {
                                n.embedded(e), i()
                            }) : this.ui && this.ui.lastRenderPromise || ne.resolve()
                        }
                    }, {
                        key: 'isControlDisabled',
                        value: function(e) {
                            var t = A['default']._controlDefinitions[e];
                            return !!(t && t.isVideoChrome && this._opts.chromeless) || !1 === this._enabledControls[e]
                        }
                    }, {
                        key: 'isControlEnabled',
                        value: function(e) {
                            return !1 !== this._enabledControls[e] && null != this.publicApi.controls[e]
                        }
                    }, {
                        key: 'whenControlMounted',
                        value: function(e) {
                            var t = this;
                            return new ne(function(n) {
                                t.embedded(function() {
                                    t.behaviors.ui.whenControlMounted(e).then(n)
                                })
                            })
                        }
                    }, {
                        key: 'getControl',
                        value: function(e) {
                            return this.ui && this.ui.controls && this.ui.controls[e]
                        }
                    }, {
                        key: 'enterInputContext',
                        value: function(e) {
                            var t = this._playerContext.indexOf(e);
                            0 < t && this._playerContext.splice(t, 1), (-1 === t || 0 < t) && (this._playerContext.unshift(e), this.trigger('inputcontextchange', e))
                        }
                    }, {
                        key: 'exitInputContext',
                        value: function(e) {
                            var t = this.getInputContext(),
                                n = this._playerContext.indexOf(e);
                            this._playerContext.splice(n, 1);
                            var o = this.getInputContext();
                            t !== o && this.trigger('inputcontextchange', o)
                        }
                    }, {
                        key: 'getInputContext',
                        value: function() {
                            return this._playerContext[0]
                        }
                    }, {
                        key: 'getVideoElement',
                        value: function() {
                            return this.engine && this.engine.videoElem()
                        }
                    }, {
                        key: 'whenVideoElementInDom',
                        value: function() {
                            var e = this;
                            return this._whenVideoElementInDom ? this._whenVideoElementInDom : this.engine ? void resolve(this.getVideoElement()) : this._whenVideoElementInDom = new ne(function(t) {
                                e.bind('engine-initialized', function() {
                                    return t(e.getVideoElement()), e.unbind
                                })
                            })
                        }
                    }, {
                        key: 'inSilentPlaybackMode',
                        value: function() {
                            return !!this._inSilentPlaybackMode
                        }
                    }, {
                        key: 'checkForReady',
                        value: function() {
                            this.behaviors.embed.checkForReady()
                        }
                    }, {
                        key: 'loadOverlayCode',
                        value: function() {
                            var e = this,
                                t = new A['default'].StopGo;
                            return this.behaviors.overlays ? t.go() : A['default'].asyncRequire('vulcanV2Video/behaviors/OverlaysBehavior.js').then(function(n) {
                                e.behaviors.overlays || e.addBehavior(n), t.go()
                            }), t
                        }
                    }, {
                        key: 'defineOverlay',
                        value: function(e, t) {
                            this.loadOverlayCode(), this._overlays[e] = t
                        }
                    }, {
                        key: 'requestOverlay',
                        value: function(e) {
                            var t = this;
                            return this.loadOverlayCode().then(function() {
                                return t.behaviors.overlays.requestOverlay(e)
                            })
                        }
                    }, {
                        key: 'cancelOverlay',
                        value: function(e) {
                            var t = this;
                            return this.loadOverlayCode().then(function() {
                                return t.behaviors.overlays.cancelOverlay(e)
                            })
                        }
                    }, {
                        key: 'undefineOverlay',
                        value: function(e) {
                            var t = this;
                            return this.loadOverlayCode().then(function() {
                                return t.behaviors.overlays.undefineOverlay(e)
                            })
                        }
                    }, {
                        key: 'getOverlays',
                        value: function() {
                            return this._overlays
                        }
                    }, {
                        key: 'layout',
                        value: function(e) {
                            var t = this,
                                n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                            return null == e ? this._layout : void(this.whenVideoElementInDom().then(function() {
                                t.engine.setLayout(e, n)
                            }), this._layout = e)
                        }
                    }, {
                        key: 'focus',
                        value: function() {
                            var e = this.on('focuscomplete', function() {
                                K(), e()
                            });
                            this.vulcanWrapper && (Y(), this.vulcanWrapper.focus())
                        }
                    }, {
                        key: '_inNativeMode',
                        value: function() {
                            return this.behaviors.ui.inNativeMode()
                        }
                    }, {
                        key: '_bandwidthTest',
                        value: function() {
                            return this.behaviors.bandwidthTest.bandwidthTest()
                        }
                    }, {
                        key: '_mozillaAtEnd',
                        value: function() {
                            return this.behaviors.relayEvents.mozillaAtEnd()
                        }
                    }]), t
                }(ye);
            A['default'].VulcanV2Player = he, A['default'].plugin('vulcanV2Video', function() {
                A['default'].info('vulcanV2Video no-op plugin executed')
            });
            var fe = function() {
                    return me() ? 'user-event' : 'non-user-event'
                },
                be = function(e) {
                    var t = ge.clone(e);
                    return t.container && (t.container = 'removed to avoid circular'), t
                }
        }
        t['default'] = A['default'].VulcanV2Player
    },
    434: function(e, t, n) {
        'use strict';
        n.r(t);
        var o = n(103),
            i = n(333),
            a = n(323),
            r = n(161),
            l = n(420),
            s = n(23);
        Object(s.registerWLib)('vulcanV2Video/CustomEventsWrapper', r['default']), Object(s.registerWLib)('vulcanV2Video/shouldShowAsBeforePlay', l['default']), Object(s.registerWLib)('vulcanV2Video/ui_components/BigPlayButton', i['default']), Object(s.registerWLib)('vulcanV2Video/ui_components/ProgressiveThumbnail', a['default']), Object(s.registerWLib)('vulcanV2Video/ui_components/svg_boilerplate', o)
    },
    435: function(e, t, n) {
        'use strict';
        n.r(t);
        var b = n(2),
            A = n(436),
            _ = n(101);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            return l(e) || r(e, t) || a()
        }

        function a() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance')
        }

        function r(e, t) {
            var n = [],
                o = !0,
                i = !1,
                a;
            try {
                for (var r, l = e[Symbol.iterator](); !(o = (r = l.next()).done) && (n.push(r.value), !(t && n.length === t)); o = !0);
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    o || null == l['return'] || l['return']()
                } finally {
                    if (i) throw a
                }
            }
            return n
        }

        function l(e) {
            if (Array.isArray(e)) return e
        }

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function d(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function u(e, t, n) {
            return t && d(e.prototype, t), n && d(e, n), e
        }

        function p(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : m(e)
        }

        function c(e) {
            return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, c(e)
        }

        function m(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function g(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && y(e, t)
        }

        function y(e, t) {
            return y = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, y(e, t)
        }

        function f(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var v = b['default'].lib('preact'),
            w = v.h,
            h = v.render,
            k = b['default'].lib('player/translations'),
            C = k.getTranslation,
            S = k.defineTranslations,
            P = b['default'].lib('promiscuous');
        S('en-US', {
            AUDIO_DESCRIPTION_TITLE: 'Audio Description'
        });
        var E = function(e) {
            function t(e) {
                var n;
                return s(this, t), n = p(this, c(t).call(this, e)), f(m(n), 'loadMenuCode', function() {
                    return b['default'].asyncRequire(['overpassFontFace.js', 'vulcanV2Video/controls/AudioDescriptionControl/dialog.js']).then(function(e) {
                        var t = i(e, 2),
                            o = t[0],
                            a = t[1];
                        n.renderMenuImpl || (n.renderMenuImpl = a.renderMenu.bind(m(n)), n.onSelect = a.onSelect.bind(m(n)))
                    })
                }), f(m(n), 'onMouseEnterButton', function() {
                    n.loadMenuCode()
                }), n.unbinds.push(e.on('playerlanguagechange', function() {
                    n.menuElem && n.renderMenu()
                }), e.on('audiostreamchange', function() {
                    n.menuElem && n.renderMenu()
                })), n
            }
            return g(t, e), u(t, [{
                key: 't',
                value: function(e) {
                    return C(this.props.playerLanguage.code, 'AUDIO_DESCRIPTION_'.concat(e))
                }
            }, {
                key: 'mountButton',
                value: function(e) {
                    this.buttonRoot = e, this.renderButton()
                }
            }, {
                key: 'mountDialog',
                value: function(e) {
                    return this.dialogRoot = e, this.renderMenu()
                }
            }, {
                key: 'renderButton',
                value: function() {
                    this.setButtonLabel(this.t('TITLE')), this.buttonElem = h(w(A['default'], {
                        onMouseEnter: this.onMouseEnterButton
                    }), this.buttonRoot, this.buttonElem), this.reactMounts.button = [this.buttonRoot, this.buttonElem]
                }
            }, {
                key: 'renderMenu',
                value: function() {
                    var e = this;
                    if (this.dialog.isOpen()) {
                        var t = this.loadMenuCode().then(function() {
                            e.renderMenuImpl()
                        });
                        return this.loading(t), t
                    }
                }
            }, {
                key: 'onControlPropsUpdated',
                value: function(e) {
                    this.dialog && this.dialog.isOpen() && this.renderMenu(), e.playerLanguage && this.props.playerLanguage.code !== e.playerLanguage.code && (this.renderButton(), this.renderMenu())
                }
            }]), t
        }(_['default']);
        E.shouldMount = function(e) {
            return !!(1 < e._impl.getAudioTracks().length)
        }, E.handle = 'AudioDescriptionButton', E.type = 'control-bar-right', E.sortValue = 150, E.isVideoChrome = !0, b['default'].defineControl(E), b['default'].AudioDescriptionControl = E;
        t['default'] = E
    },
    436: function(e, t, n) {
        'use strict';
        n.r(t);
        var y = n(2),
            f = n(103);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i() {
            return i = Object.assign || function(e) {
                for (var t, n = 1; n < arguments.length; n++)
                    for (var o in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, i.apply(this, arguments)
        }

        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null == arguments[t] ? {} : arguments[t],
                    o = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), o.forEach(function(t) {
                    r(e, t, n[t])
                })
            }
            return e
        }

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function l(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function s(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function d(e, t, n) {
            return t && s(e.prototype, t), n && s(e, n), e
        }

        function u(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : p(e)
        }

        function p(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function c(e) {
            return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, c(e)
        }

        function m(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && g(e, t)
        }

        function g(e, t) {
            return g = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, g(e, t)
        }
        var b = y['default'].lib('preact'),
            A = b.h,
            h = b.render,
            _ = b.Component,
            v = function(e) {
                function t() {
                    return l(this, t), u(this, c(t).apply(this, arguments))
                }
                return m(t, e), d(t, [{
                    key: 'shouldComponentUpdate',
                    value: function() {
                        return !1
                    }
                }, {
                    key: 'render',
                    value: function() {
                        var e = {
                                fill: 'none',
                                stroke: '#ffffff',
                                "stroke-width": '1.8',
                                "stroke-linecap": 'round'
                            },
                            t = a({}, e, {
                                "stroke-linejoin": 'round'
                            });
                        return A('svg', i({}, Object(f.standardSvgAttrs)(40, 34), {
                            onMouseEnter: this.props.onMouseEnter
                        }), A('g', t, A('path', {
                            d: 'M19.6,14.5c2.2,0,3,1.4,3,2.8c0,1.3-0.7,2.8-3,2.8h-1.5v-5.6H19.6z'
                        }), A('polyline', {
                            points: '9.9,20.1 12.5,14.5 14.9,20.1 \t\t\t'
                        }), A('path', {
                            d: 'M10.4,18.9h4'
                        })), A('g', e, A('path', {
                            d: 'M27.4,24.7c2.2-2.1,3.2-4.9,3.2-7.4c0-2.7-1-5.3-3.2-7.4'
                        }), A('path', {
                            d: 'M24.5,12.8c1.4,1.2,2,2.8,2,4.5c0,1.6-0.5,3.3-2,4.5'
                        })))
                    }
                }]), t
            }(_);
        t['default'] = v
    },
    437: function(e, t, n) {
        'use strict';
        n.r(t);
        var m = n(2),
            g = n(101),
            y = n(333);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : d(e)
        }

        function s(e) {
            return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, s(e)
        }

        function d(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var f = m['default'].lib('utilities/isMouseDown'),
            b = f.isMouseDown,
            A = m['default'].lib('player/lib/fit-control'),
            _ = A.controlMultiplierBasedOnVideo,
            v = m['default'].lib('preact'),
            w = v.h,
            h = v.render,
            k = function(e) {
                function t(e) {
                    var n;
                    return i(this, t), n = l(this, s(t).call(this, e)), p(d(n), 'renderButton', function() {
                        n.buttonElem = h(w(y['default'], {
                            color: n.video.playerColor(),
                            scale: n.scale(),
                            isVisible: n.shouldShow(),
                            onClickOrTap: n.onClickOrTap,
                            showBpbTime: n._timeEnabled,
                            duration: n.video.duration(),
                            playerLanguage: n.props.playerLanguage,
                            leftNudgeFraction: n.getLeftNudgeFraction(),
                            topNudgeFraction: n.getTopNudgeFraction(),
                            baseHeight: 80,
                            baseWidth: 125,
                            videoName: n.video.name() || ''
                        }), n.rootElem, n.buttonElem), n.reactMounts = [n.rootElem, n.buttonElem]
                    }), p(d(n), 'onClickOrTap', function() {
                        n.video.play(), b() || n.video.focus()
                    }), n.unbinds.push(e.on('playercolorchange', n.renderButton), e.on('play', n.renderButton), e.on('playrejected', n.renderButton), e.on('playpending', n.renderButton), e.on('playerlanguagechange', n.renderButton), e.on('end', n.renderButton), e.on('up', n.renderButton), e.on('widthchange', n.renderButton), e.on('trimchange', n.renderButton)), n._timeEnabled = n.video._opts.bpbTime, n
                }
                return u(t, e), r(t, [{
                    key: 'mount',
                    value: function(e) {
                        this.rootElem = e, this.renderButton()
                    }
                }, {
                    key: 'onControlPropsUpdated',
                    value: function(e) {
                        this.props.videoWidth !== e.videoWidth && this.renderButton()
                    }
                }, {
                    key: 'shouldShow',
                    value: function() {
                        var e = this.video;
                        return !1 === e.lastPlayInfo().isPending && ('beforeplay' === e.state() || 'ended' === e.state() && 'reset' === e._opts.endVideoBehavior)
                    }
                }, {
                    key: 'scale',
                    value: function() {
                        return Math.min(1.3, Math.max(.3, _(this.video, [640, 960])))
                    }
                }, {
                    key: 'setTimeEnabled',
                    value: function(e) {
                        this._timeEnabled = e, this.renderButton()
                    }
                }, {
                    key: 'setLeftNudgeFraction',
                    value: function(e) {
                        this._leftNudgeFraction = e, this.renderButton()
                    }
                }, {
                    key: 'setTopNudgeFraction',
                    value: function(e) {
                        this._topNudgeFraction = e, this.renderButton()
                    }
                }, {
                    key: 'getLeftNudgeFraction',
                    value: function() {
                        return null == this._leftNudgeFraction ? this.video._opts.bpbLeftNudge : this._leftNudgeFraction
                    }
                }, {
                    key: 'getTopNudgeFraction',
                    value: function() {
                        return null == this._topNudgeFraction ? this.video._opts.bpbTopNudge : this._topNudgeFraction
                    }
                }, {
                    key: 'getButtonOffsets',
                    value: function() {
                        var e = this.buttonElem,
                            t = e.offsetHeight,
                            n = e.offsetTop;
                        return {
                            offsetHeight: t,
                            offsetTop: n
                        }
                    }
                }]), t
            }(g['default']);
        k.shouldMount = function(e) {
            var t = e._opts.playButton;
            return null == t || !0 === t
        }, k.handle = 'bigPlayButton', k.type = 'above-control-bar', m['default'].defineControl(k);
        t['default'] = k
    },
    438: function(e, t, n) {
        'use strict';
        n.r(t);
        var m = n(161),
            g = n(2),
            y = n(101),
            f = n(347);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : d(e)
        }

        function s(e) {
            return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, s(e)
        }

        function d(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var b = g['default'].lib('preact'),
            A = b.h,
            h = b.render,
            _ = g['default'].lib('player/lib/fit-control'),
            v = _.controlMultiplierBasedOnVideo,
            w = g['default'].lib('utilities/detect'),
            k = w.cachedDetect,
            C = k(),
            S = function(e) {
                function t(e) {
                    var n;
                    return i(this, t), n = l(this, s(t).call(this, e)), p(d(n), 'renderWithFade', function() {
                        'beforeplay' === n.video.state() || (n.renderButton(), clearTimeout(n.displayTimeout), n.displayTimeout = n.props.controlsAreVisible ? setTimeout(function() {
                            n.isDisplayNone = !1, n.renderButton()
                        }, 1) : setTimeout(function() {
                            n.isDisplayNone = !0, n.renderButton()
                        }, 200))
                    }), p(d(n), 'onClickOrTap', function() {
                        n.togglePlay()
                    }), n.unbinds.push(e.on('play', n.renderWithFade), e.on('pause', n.renderWithFade)), n.isDisplayNone = 'beforeplay' === e.state(), n
                }
                return u(t, e), r(t, [{
                    key: 'mount',
                    value: function(e) {
                        this.rootElem = e, this.renderButton()
                    }
                }, {
                    key: 'renderButton',
                    value: function() {
                        this.iconElem = h(A(m['default'], {
                            tagName: 'button',
                            class: 'w-centered-play-pause-toggler w-vulcan-v2-button',
                            onClickOrTap: this.onClickOrTap,
                            style: this.rootStyle()
                        }, A(f['default'], {
                            isPlaying: 'playing' === this.video.state(),
                            svgStyle: this.svgStyle(),
                            noPadding: !0
                        })), this.rootElem, this.iconElem), this.reactMounts = [this.rootElem, this.iconElem]
                    }
                }, {
                    key: 'onControlPropsUpdated',
                    value: function(e) {
                        e.controlsAreVisible !== this.props.controlsAreVisible && this.renderWithFade(), e.videoWidth !== this.props.videoWidth && this.renderButton()
                    }
                }, {
                    key: 'rootStyle',
                    value: function() {
                        var e = this.scale(),
                            t = this.props.controlsAreVisible,
                            n = 'playing' === this.video.state(),
                            o = n ? 72 : 80,
                            i = n ? 60 : 63.5;
                        return {
                            background: 'transparent',
                            border: 0,
                            display: this.isDisplayNone ? 'none' : 'block',
                            height: ''.concat(o * e, 'px'),
                            left: '50%',
                            margin: 0,
                            padding: '5px 20px',
                            position: 'absolute',
                            opacity: t ? .7 : 0,
                            outline: 'none',
                            top: '50%',
                            transform: 'translate(-'.concat(n ? 44.45 : 42, '%, -50%)'),
                            transition: 'opacity 200ms',
                            webkitTapHighlightColor: 'rgba(0,0,0,0)',
                            width: ''.concat(i * e, 'px')
                        }
                    }
                }, {
                    key: 'togglePlay',
                    value: function() {
                        var e = this.video;
                        'playing' === e.state() ? e.pause() : e.play()
                    }
                }, {
                    key: 'svgStyle',
                    value: function() {
                        return {
                            filter: 'drop-shadow(0px 0px 3px rgba(0,0,0,0.5))'
                        }
                    }
                }, {
                    key: 'scale',
                    value: function() {
                        return Math.min(1.3, Math.max(.3, v(this.video, [640, 960])))
                    }
                }]), t
            }(y['default']);
        S.shouldMount = function() {
            return C.touchScreen
        }, S.handle = 'centeredPlayPauseToggler', S.type = 'above-control-bar', g['default'].defineControl(S);
        t['default'] = S
    },
    439: function(e, t, n) {
        'use strict';
        n.r(t);
        var g = n(2),
            y = n(101),
            f = n(440);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i() {
            return i = Object.assign || function(e) {
                for (var t, n = 1; n < arguments.length; n++)
                    for (var o in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, i.apply(this, arguments)
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function l(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
        }

        function s(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : u(e)
        }

        function d(e) {
            return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, d(e)
        }

        function u(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function p(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }

        function m(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var b = g['default'].lib('preact'),
            A = b.h,
            h = b.render,
            _ = g['default'].lib('utilities/bindify'),
            v = _.bindify,
            w = g['default'].lib('utilities/isMouseDown'),
            k = w.isMouseDown,
            C = g['default'].lib('player/lib/elem'),
            S = C.elemFromObject,
            P = C.elemRemove,
            E = C.elemUnbindAllInside,
            T = g['default'].lib('player/translations'),
            B = T.getTranslation,
            x = T.defineTranslations,
            D = g['default'].lib('utilities/detect'),
            F = D.cachedDetect,
            I = g['default'].lib('promiscuous'),
            M = g['default'].lib('player/lib/fit-control'),
            O = M.controlMultiplierBasedOnVideo,
            L = F();
        x('en-US', {
            CLICK_FOR_SOUND_DESKTOP_TEXT: 'Click for sound',
            CLICK_FOR_SOUND_MOBILE_TEXT: 'Tap for sound'
        });
        var R = function(e) {
            function t(e) {
                var n;
                return a(this, t), n = s(this, d(t).call(this, e)), m(u(n), 'renderButton', function() {
                    var e = !!n.video._opts.silentAutoPlayIsChromeless,
                        t = n.isVisible();
                    e && (t ? n.video.requestChromeless('clickForSound') : n.video.releaseChromeless('clickForSound')), n.video.trigger('clickforsoundvisibilitychange', t);
                    var o;
                    if (t) {
                        var a = new I(function(e) {
                            return setTimeout(e, 1e3)
                        });
                        o = I.race([a, g['default'].asyncRequire('overpassFontFace.js')])
                    } else o = I.resolve();
                    n.lastRenderPromise || (n.lastRenderPromise = I.resolve()), n.lastRenderPromise.then(function() {
                        n.lastRenderPromise = new I(function(e) {
                            o.then(function() {
                                n.buttonRoot = h(A(f['default'], i({}, n.props, {
                                    scale: n.scale(),
                                    isVisible: t,
                                    onClickOrTap: n.onClickOrTap,
                                    backdropEnabled: !1 !== n.video._opts.silentAutoPlayBackdropEnabled,
                                    buttonText: n.buttonText()
                                })), n.rootElem, n.buttonRoot), n.reactMounts = [n.rootElem, n.buttonRoot], e()
                            })
                        })
                    })
                }), m(u(n), 'onClickOrTap', function(t) {
                    k() || n.video.focus(), n.video.unmute(), n.trigger('click', t)
                }), n.unbinds.push(e.on('play', n.renderButton), e.on('silentplaybackmodechange', n.renderButton), e.on('volumechange', n.renderButton)), n
            }
            return p(t, e), l(t, [{
                key: 'mount',
                value: function(e) {
                    this.rootElem = e, this.renderButton()
                }
            }, {
                key: 'onControlPropsUpdated',
                value: function(e) {
                    var t = this.props;
                    (e.scale !== t.scale || e.controlsAreVisible !== t.controlsAreVisible || e.controlBarHeight !== t.controlBarHeight) && this.renderButton(), e.playerLanguage && this.props.playerLanguage.code !== e.playerLanguage.code && this.renderButton()
                }
            }, {
                key: 'isVisible',
                value: function() {
                    return null == this._isVisible ? this.video.inSilentPlaybackMode() : this._isVisible
                }
            }, {
                key: 'setIsVisible',
                value: function(e) {
                    this._isVisible = e, this.renderButton(), this.video.trigger('clickforsoundvisibilitychange', this.isVisible())
                }
            }, {
                key: 'buttonText',
                value: function() {
                    return this._buttonText ? this._buttonText : L.touchScreen ? this.t('MOBILE_TEXT') : this.t('DESKTOP_TEXT')
                }
            }, {
                key: 'setButtonText',
                value: function(e) {
                    this._buttonText = e, this.renderButton()
                }
            }, {
                key: 't',
                value: function(e) {
                    return B(this.props.playerLanguage.code, 'CLICK_FOR_SOUND_'.concat(e))
                }
            }, {
                key: 'scale',
                value: function() {
                    return 1.5 * this.props.scale
                }
            }]), t
        }(y['default']);
        v(R.prototype), R.handle = 'clickForSoundButton', R.type = 'above-control-bar', g['default'].defineControl(R);
        t['default'] = R
    },
    44: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'send', function() {
            return g
        });
        n.d(t, 'msend', function() {
            return y
        });
        n.d(t, 'count', function() {
            return h
        });
        n.d(t, 'sample', function() {
            return f
        });
        var o = n(2),
            i = n(4),
            a = n(15),
            r = n(5),
            l = n(35),
            s = n(14),
            d = n(20),
            u = n(24),
            p = n(45),
            c = o['default'];
        null == c._metricsCache && (c._metricsCache = {});
        var m = c._metricsCache,
            g = function(e, t, n) {
                var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : {};
                try {
                    null == m.toMput && (m.toMput = []), null == m.requestId && (m.requestId = 0);
                    var s = r.merge({
                            type: e,
                            key: t,
                            value: null == n ? null : n,
                            request_id: m.requestId
                        }, o),
                        d = JSON.stringify(s);
                    a.wlog.debug('send metrics', d), m.toMput.push(d), Object(i.doTimeout)('metrics.debounce', function() {
                        Object(l.pageLoaded)(function() {
                            y.apply(void 0, m.toMput), m.toMput = [], m.requestId += 1
                        })
                    }, 500)
                } catch (t) {
                    a.wlog.error(t)
                }
            },
            y = function() {
                if (Object(p.isVisitorTrackingEnabled)()) {
                    for (var e = ''.concat(Object(s.proto)(), '//').concat(Object(d.metricsHost)(), '/mput?topic=metrics'), t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                    return Object(u.ajaxPost)(e, {
                        data: n.join('\n')
                    })
                }
            },
            h = function(e) {
                var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 1,
                    n = 2 < arguments.length ? arguments[2] : void 0;
                return g('count', e, t, n)
            },
            f = function(e, t, n) {
                return g('sample', e, t, n)
            }
    },
    440: function(e, t, n) {
        'use strict';
        n.r(t);
        var m = n(2),
            g = n(103),
            y = n(161);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : d(e)
        }

        function s(e) {
            return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, s(e)
        }

        function d(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var f = m['default'].lib('preact'),
            b = f.h,
            h = f.render,
            A = f.Component,
            _ = m['default'].lib('player/lib/overpassFontFamily'),
            v = _.overpassFontFamily,
            w = m['default'].lib('utilities/isMouseDown'),
            k = w.isMouseDown,
            C = function(e) {
                function t() {
                    var e, n;
                    i(this, t);
                    for (var o = arguments.length, a = Array(o), r = 0; r < o; r++) a[r] = arguments[r];
                    return n = l(this, (e = s(t)).call.apply(e, [this].concat(a))), p(d(n), 'onFocus', function() {
                        k() || n.setState({
                            isKeyboardFocused: !0
                        })
                    }), p(d(n), 'onBlur', function() {
                        n.setState({
                            isKeyboardFocused: !1
                        })
                    }), n
                }
                return u(t, e), r(t, [{
                    key: 'render',
                    value: function() {
                        return b(y['default'], {
                            class: 'w-css-reset w-css-reset-tree',
                            "data-handle": 'click-for-sound-backdrop',
                            style: this.rootStyle(),
                            onClickOrTap: this.props.onClickOrTap
                        }, b('button', {
                            "aria-label": this.props.buttonText,
                            style: this.buttonStyle(),
                            onFocus: this.onFocus,
                            onBlur: this.onBlur,
                            class: 'w-vulcan-v2-button'
                        }, b('svg', {
                            viewBox: '0 0 237 237',
                            style: this.svgStyle()
                        }, b('style', null, this.styleText()), b('polygon', {
                            fill: 'white',
                            points: '88 107 65 107 65 131 89 131 112 154 112 84'
                        }), b('g', {
                            fill: 'none',
                            stroke: 'white',
                            "stroke-width": '10',
                            "stroke-linecap": 'round'
                        }, b('path', {
                            class: 'volume__small-wave',
                            d: 'M 142 86 C 151 107 151 130 142 151'
                        }), b('path', {
                            class: 'volume__large-wave',
                            d: 'M 165 74 C 178 97 178 140 165 163'
                        }))), !this.props.backdropEnabled && b('div', {
                            style: this.textStyle()
                        }, this.props.buttonText)))
                    }
                }, {
                    key: 'styleText',
                    value: function() {
                        return '\n      @keyframes VOLUME_SMALL_WAVE_FLASH {\n          0% { opacity: 0; }\n         33% { opacity: 1; }\n         66% { opacity: 1; }\n        100% { opacity: 0; }\n      }\n\n      @keyframes VOLUME_LARGE_WAVE_FLASH {\n          0% { opacity: 0; }\n         33% { opacity: 1; }\n         66% { opacity: 1; }\n        100% { opacity: 0; }\n      }\n\n      .volume__small-wave {\n        animation: VOLUME_SMALL_WAVE_FLASH 2s infinite;\n        opacity: 0;\n      }\n\n      .volume__large-wave {\n        animation: VOLUME_LARGE_WAVE_FLASH 2s infinite .3s;\n        opacity: 0;\n      }\n    '
                    }
                }, {
                    key: 'rootStyle',
                    value: function() {
                        return {
                            display: this.props.isVisible ? 'block' : 'none',
                            height: '100%',
                            left: 0,
                            pointerEvents: this.props.backdropEnabled ? 'auto' : 'none',
                            position: 'absolute',
                            top: 0,
                            width: '100%'
                        }
                    }
                }, {
                    key: 'buttonStyle',
                    value: function() {
                        var e = this.props.scale;
                        return {
                            background: 'rgba(0,0,0,0.4)',
                            border: '2px solid '.concat(this.state.isKeyboardFocused ? '#fff' : 'transparent'),
                            borderRadius: ''.concat(27 * e, 'px'),
                            cursor: 'pointer',
                            height: ''.concat(35 * e, 'px'),
                            lineHeight: ''.concat(35 * e, 'px'),
                            outline: 'none',
                            paddingRight: this.props.backdropEnabled ? 0 : ''.concat(10 * e, 'px'),
                            pointerEvents: 'auto',
                            position: 'absolute',
                            right: ''.concat(15 * e - 2, 'px'),
                            textAlign: 'left',
                            top: ''.concat(15 * e - 2, 'px')
                        }
                    }
                }, {
                    key: 'svgStyle',
                    value: function() {
                        var e = this.props.scale;
                        return {
                            height: ''.concat(32 * e, 'px'),
                            marginTop: ''.concat(.5 * e, 'px'),
                            verticalAlign: 'top',
                            width: ''.concat(35 * e, 'px')
                        }
                    }
                }, {
                    key: 'textStyle',
                    value: function() {
                        var e = this.props.scale;
                        return {
                            color: 'white',
                            display: 'inline-block',
                            fontFamily: v,
                            fontSize: ''.concat(13 * e, 'px'),
                            marginLeft: ''.concat(-4 * e, 'px'),
                            marginTop: ''.concat(-.75 * e, 'px'),
                            verticalAlign: 'top',
                            whiteSpace: 'nowrap',
                            width: '36%'
                        }
                    }
                }]), t
            }(A);
        t['default'] = C
    },
    441: function(e, t, n) {
        'use strict';
        n.r(t);
        var _ = n(442),
            v = n(101),
            w = n(2),
            k = n(162);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            return l(e) || r(e, t) || a()
        }

        function a() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance')
        }

        function r(e, t) {
            var n = [],
                o = !0,
                i = !1,
                a;
            try {
                for (var r, l = e[Symbol.iterator](); !(o = (r = l.next()).done) && (n.push(r.value), !(t && n.length === t)); o = !0);
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    o || null == l['return'] || l['return']()
                } finally {
                    if (i) throw a
                }
            }
            return n
        }

        function l(e) {
            if (Array.isArray(e)) return e
        }

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function d(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function u(e, t, n) {
            return t && d(e.prototype, t), n && d(e, n), e
        }

        function p(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : c(e)
        }

        function c(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function m(e, t, n) {
            return m = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var o = g(e, t);
                if (o) {
                    var i = Object.getOwnPropertyDescriptor(o, t);
                    return i.get ? i.get.call(n) : i.value
                }
            }, m(e, t, n || e)
        }

        function g(e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = y(e), null !== e););
            return e
        }

        function y(e) {
            return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, y(e)
        }

        function f(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && b(e, t)
        }

        function b(e, t) {
            return b = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, b(e, t)
        }

        function A(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var C = w['default'].lib('promiscuous'),
            S = w['default'].lib('preact'),
            P = S.h,
            h = S.render,
            E = w['default'].lib('player/lib/elem'),
            T = E.elemBind,
            B = E.elemIsInside,
            x = E.elemRebind,
            D = E.elemUnbind,
            F = w['default'].lib('utilities/detect'),
            I = F.cachedDetect,
            M = w['default'].lib('utilities/isMouseDown'),
            O = M.isMouseDown,
            L = I(),
            R = function(e) {
                function t(e) {
                    var n;
                    return s(this, t), n = p(this, y(t).call(this, e)), A(c(n), 'onContextMenu', function(t, e) {
                        if (!t.altKey) {
                            'contextmenu' === t.type && t.preventDefault(), n.pageX = t.pageX, n.pageY = t.pageY, n._hasLoaded || n.loading(new C(function(e) {
                                n.resolveLoadingPromise = e
                            }), {
                                x: n.pageX,
                                y: n.pageY
                            });
                            var o = new C(function(t) {
                                var o = e && e.isLongPress;
                                !o && O() ? T(document, 'mouseup', function(e) {
                                    return n.pageX = e.pageX, n.pageY = e.pageY, t(), D
                                }) : t()
                            });
                            o.then(function() {
                                Object(_.logPromiseErrors)(n.loadContextMenu().then(function() {
                                    n.renderMenu && (n.resolveLoadingPromise(), n.renderMenu())
                                }))
                            })
                        }
                    }), A(c(n), 'onClickOrTap', function(e) {
                        B(e.target, n.rootElem) || (n.hideMenu ? n.hideMenu() : !n._hasLoaded && n.loading(new C(function(e) {
                            return e()
                        })))
                    }), A(c(n), 'onDocumentMouseUp', function(t) {
                        t.ctrlKey || B(t.target, n.rootElem) || (D(document, 'mouseup', n.onDocumentMouseUp), n.loadContextMenu().then(function() {
                            n.hideMenu()
                        }))
                    }), L.touchScreen ? (n.touchEvents = new k['default'](e.chrome), n.touchEvents.bind('longpress', n.onContextMenu), n.touchEvents.bind('tap', n.onClickOrTap)) : n.unbinds.push(T(e.chrome, 'contextmenu', n.onContextMenu), T(e.chrome, 'click', n.onClickOrTap)), n
                }
                return f(t, e), u(t, [{
                    key: 'mount',
                    value: function(e) {
                        this.rootElem = e
                    }
                }, {
                    key: 'destroy',
                    value: function() {
                        this.touchEvents && (this.touchEvents.destroy(), this.touchEvents = null), m(y(t.prototype), 'destroy', this).call(this)
                    }
                }, {
                    key: 'onControlPropsUpdated',
                    value: function(e) {
                        this.props.playerLanguage !== e.playerLanguage && this._visible && this.renderMenu()
                    }
                }, {
                    key: 'loadContextMenu',
                    value: function() {
                        var e = this;
                        return w['default'].asyncRequire(['overpassFontFace.js', 'vulcanV2Video/controls/ContextMenuControl/menu.js']).then(function(t) {
                            var n = i(t, 2),
                                o = n[0],
                                a = n[1];
                            for (var r in a) e[r] = a[r].bind(e);
                            e._hasLoaded = !0
                        })
                    }
                }]), t
            }(v['default']);
        R.handle = 'contextMenu', R.type = 'foreground', w['default'].defineControl(R);
        t['default'] = R
    },
    442: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'throwAsync', function() {
            return o
        });
        n.d(t, 'logPromiseErrors', function() {
            return i
        });
        var o = function(t) {
                setTimeout(function() {
                    throw t
                }, 0)
            },
            i = function(e) {
                return e.catch(o)
            }
    },
    443: function(e, t, n) {
        'use strict';
        n.r(t);
        var m = n(2),
            g = n(101),
            y = n(444);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : d(e)
        }

        function s(e) {
            return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, s(e)
        }

        function d(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var f = m['default'].lib('preact'),
            b = f.h,
            h = f.render,
            A = f.Component,
            _ = m['default'].lib('player/translations'),
            v = _.getTranslation,
            w = _.defineTranslations,
            k = m['default'].lib('player/lib/elem'),
            C = k.elemBind,
            S = k.formInputIsFocused,
            P = m['default'].lib('utilities/detect'),
            E = P.cachedDetect,
            T = E();
        w('en-US', {
            FULLSCREEN_DOUBLE_TAP: 'Double-tap to zoom in or out',
            FULLSCREEN_TITLE_WHEN_IN_FULLSCREEN: 'Unfullscreen',
            FULLSCREEN_TITLE_WHEN_NOT_IN_FULLSCREEN: 'Fullscreen'
        });
        var B = function(e) {
            function t(e) {
                var n;
                return i(this, t), n = l(this, s(t).call(this, e)), p(d(n), 'onClickButton', function() {
                    n.toggleFullscreen()
                }), p(d(n), 'onKeyUp', function(t) {
                    if (!S()) {
                        var e = n.video.getInputContext();
                        ('player-mouseover' === e || 'player-focus' === e || 'playbar-focus' === e) && t.keyCode === 70 && n.toggleFullscreen()
                    }
                }), n.unbinds.push(e.on('enter-fullscreen', function() {
                    n.renderButton()
                }), e.on('cancel-fullscreen', function() {
                    n.renderButton()
                }), C(document, 'keyup', n.onKeyUp)), x() || D(n.video) || !F() || (n.mountDialog = n.maybeMountDialog), n
            }
            return u(t, e), r(t, [{
                key: 'onControlPropsUpdated',
                value: function(e) {
                    e.playerLanguage && this.props.playerLanguage.code !== e.playerLanguage.code && (this.renderButton(), this.dialog && this.dialog.isOpen() && this.renderDialog())
                }
            }, {
                key: 'maybeMountDialog',
                value: function(e) {
                    this.dialogElem = e, this.renderDialog()
                }
            }, {
                key: 'renderDialog',
                value: function() {
                    this.dialogElem.innerHTML = this.t('DOUBLE_TAP')
                }
            }, {
                key: 'mountButton',
                value: function(e) {
                    this.buttonElem = e, this.renderButton()
                }
            }, {
                key: 'renderButton',
                value: function() {
                    if (this.buttonElem) {
                        var e = this.video.inFullscreen() ? this.t('TITLE_WHEN_IN_FULLSCREEN') : this.t('TITLE_WHEN_NOT_IN_FULLSCREEN');
                        this.setButtonLabel(e), this.iconElem = h(b(y['default'], null), this.buttonElem, this.iconElem), this.reactMounts = [this.buttonElem, this.iconElem]
                    }
                }
            }, {
                key: 't',
                value: function(e) {
                    return v(this.props.playerLanguage.code, 'FULLSCREEN_'.concat(e))
                }
            }, {
                key: 'toggleFullscreen',
                value: function() {
                    if (x() || D(this.video)) {
                        var e = this.video;
                        e.inFullscreen() ? e.cancelFullscreen() : e.requestFullscreen()
                    }
                }
            }]), t
        }(g['default']);
        B.handle = 'fullscreenButton', B.type = 'control-bar-right', B.sortValue = 1e3, m['default'].defineControl(B);
        var x = function() {
                return T.fullscreenEnabled
            },
            D = function(e) {
                var t = e._mediaData,
                    n = e._opts,
                    o = (t.spherical || n.spherical) && !n.overrideSpherical,
                    i = !!t.secondaryMediaData,
                    a = top !== self;
                return 0 < T.ios.version && (!a || !o && !i)
            },
            F = function() {
                return 0 < T.ios.version || T.android
            };
        B.shouldMount = function(e) {
            var t = e._opts.fullscreenButton;
            return (!0 === t || null == t) && (x() || D(e) || F())
        };
        t['default'] = B
    },
    444: function(e, t, n) {
        'use strict';
        n.r(t);
        var m = n(103),
            g = n(2);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i() {
            return i = Object.assign || function(e) {
                for (var t, n = 1; n < arguments.length; n++)
                    for (var o in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, i.apply(this, arguments)
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function l(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
        }

        function s(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : d(e)
        }

        function d(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function u(e) {
            return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, u(e)
        }

        function p(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }
        var y = g['default'].lib('preact'),
            f = y.h,
            h = y.render,
            b = y.Component,
            A = function(e) {
                function t() {
                    return a(this, t), s(this, u(t).apply(this, arguments))
                }
                return p(t, e), l(t, [{
                    key: 'shouldComponentUpdate',
                    value: function() {
                        return !1
                    }
                }, {
                    key: 'render',
                    value: function() {
                        var e = {
                            fill: 'none',
                            stroke: '#ffffff',
                            "stroke-width": 2,
                            "stroke-linecap": 'round',
                            "stroke-linejoin": 'round',
                            "stroke-miterlimit": 10
                        };
                        return f('svg', Object(m.standardSvgAttrs)(40, 34), f('g', null, f('g', null, f('polyline', i({}, e, {
                            points: '31.4,12.6 31.4,8.7 25.8,8.7'
                        })), f('polyline', i({}, e, {
                            points: '14.7,8.7 9.1,8.7 9.1,12.6'
                        })), f('polyline', i({}, e, {
                            points: '25.8,24.8 31.4,24.8 31.4,20.9'
                        })), f('polyline', i({}, e, {
                            points: '9.1,20.9 9.1,24.8 14.7,24.8'
                        }))), f('rect', i({
                            x: '13.7',
                            y: '12.3'
                        }, e, {
                            "enable-background": 'new',
                            width: '13.3',
                            height: '8.9'
                        }))))
                    }
                }]), t
            }(b);
        t['default'] = A
    },
    445: function(e, t, n) {
        'use strict';
        n.r(t);
        var p = n(2),
            m = n(101),
            g = n(446);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : s(e)
        }

        function s(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function d(e) {
            return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, d(e)
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }
        var y = p['default'].lib('preact'),
            f = y.h,
            h = y.render,
            b = function(e) {
                function t(e) {
                    var n;
                    i(this, t), n = l(this, d(t).call(this, e)), n.isVisible = !1;
                    var o = -1;
                    return n.unbinds.push(e.on('waiting', function(e) {
                        !n.isVisible && 2 > o && 2 <= e && (n.isVisible = !0, n.renderIndicator()), o = e
                    }), e.on('done-waiting', function() {
                        n.isVisible = !1, n.renderIndicator(), o = -1
                    }), e.on('timechange', function() {
                        n.isVisible = !1, n.renderIndicator(), o = -1
                    })), n
                }
                return u(t, e), r(t, [{
                    key: 'mount',
                    value: function(e) {
                        this.rootElem = e
                    }
                }, {
                    key: 'renderIndicator',
                    value: function() {
                        this.indicatorElem = h(f('div', {
                            style: this.rootStyle()
                        }, f(g['default'], null)), this.rootElem, this.indicatorElem), this.reactMounts = [this.rootElem, this.indicatorElem]
                    }
                }, {
                    key: 'rootStyle',
                    value: function() {
                        return {
                            display: this.isVisible ? 'block' : 'none',
                            height: '80px',
                            width: '125px'
                        }
                    }
                }]), t
            }(m['default']);
        b.handle = 'loadingIndicator', b.type = 'above-control-bar', p['default'].defineControl(b);
        t['default'] = b
    },
    446: function(e, t, n) {
        'use strict';
        n.r(t);
        var p = n(103),
            m = n(2);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : s(e)
        }

        function s(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function d(e) {
            return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, d(e)
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }
        var g = m['default'].lib('preact'),
            y = g.h,
            h = g.render,
            f = g.Component,
            b = m['default'].lib('utilities/color'),
            A = m['default'].lib('player/lib/elem'),
            _ = A.addInlineCss,
            v = m['default'].lib('utilities/seqid'),
            w = function(e) {
                function t(e) {
                    var n;
                    return i(this, t), n = l(this, d(t).call(this, e)), n.pathId = v('w-loading-path-'), n
                }
                return u(t, e), r(t, [{
                    key: 'shouldComponentUpdate',
                    value: function() {
                        return !1
                    }
                }, {
                    key: 'render',
                    value: function() {
                        var t = this,
                            e = new b(this.props.color || '#fff');
                        return y('div', {
                            ref: function(n) {
                                return t.iconRoot = n
                            },
                            style: this.rootStyle()
                        })
                    }
                }, {
                    key: 'componentDidMount',
                    value: function() {
                        this.activeSvgId = v('wistia_loading_svg_'), this.iconRoot.innerHTML = '\n      <svg version="1.2" id='.concat(this.activeSvgId, ' height="80" width="125" xmlns="http://www.w3.org/2000/svg" viewport="0 0 125 80" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <path fill="none" stroke="#ffffff" stroke-miterlimit="20" d="M52,21 L81,40 L52,60 Z" />\n      </svg>\n    ');
                        var e, t = this.iconRoot.getElementsByTagName('path')[0];
                        e = t.getTotalLength ? t.getTotalLength() : 100, _(this.iconRoot, '\n      #'.concat(this.activeSvgId, ' path {\n        stroke-width: 2px;\n        stroke-dasharray: ').concat(e / 3, ', ').concat(2 * e / 3, ';\n        -webkit-animation: wistia_dash 1s infinite linear forwards;\n      }\n      @-webkit-keyframes wistia_dash {\n        from { stroke-dashoffset: ').concat(e, '; }\n        to { stroke-dashoffset: 0; }\n      }\n    '))
                    }
                }, {
                    key: 'rootStyle',
                    value: function() {
                        return {
                            height: '80px',
                            left: '50%',
                            position: 'absolute',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '125px'
                        }
                    }
                }]), t
            }(f);
        t['default'] = w
    },
    447: function(e, t, n) {
        'use strict';
        n.r(t);
        var m = n(101),
            g = n(448),
            y = n(2);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : d(e)
        }

        function s(e) {
            return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, s(e)
        }

        function d(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var f = y['default'].lib('player/lib/elem'),
            b = f.elemBind,
            A = f.elemIsInside,
            _ = f.elemUnbind,
            v = f.formInputIsFocused,
            w = f.elemOffset,
            k = y['default'].lib('preact'),
            C = k.h,
            h = k.render,
            S = y['default'].lib('player/translations'),
            P = S.getTranslation,
            E = y['default'].lib('utilities/detect'),
            T = E.cachedDetect,
            B = T(),
            x = function(e) {
                function t(e) {
                    var n;
                    return i(this, t), n = l(this, s(t).call(this, e)), p(d(n), 'show', function(e) {
                        n._isVisible = !0, n.renderMenu(e)
                    }), p(d(n), 'hide', function() {
                        n._isVisible = !1, n.menuElem = h(C('nothing', null), n.rootElem, n.menuElem), n.reactMounts = [n.rootElem, n.menuElem]
                    }), n._isVisible = !1, n
                }
                return u(t, e), r(t, [{
                    key: 'mount',
                    value: function(e) {
                        this.rootElem = e
                    }
                }, {
                    key: 'renderMenu',
                    value: function(e) {
                        var t = e.x || 0,
                            n = e.y || 0,
                            o = w(this.video._embedContainer);
                        this._isVisible && (this.menuElem = h(C(g['default'], {
                            videoOffset: o,
                            x: t,
                            y: n
                        }), this.rootElem, this.menuElem), this.reactMounts = [this.rootElem, this.menuElem])
                    }
                }]), t
            }(m['default']);
        x.handle = 'loadingHourglass', x.type = 'foreground', y['default'].defineControl(x);
        t['default'] = x
    },
    448: function(e, t, n) {
        'use strict';
        n.r(t);
        var g = n(2);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i() {
            return i = Object.assign || function(e) {
                for (var t, n = 1; n < arguments.length; n++)
                    for (var o in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, i.apply(this, arguments)
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function l(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
        }

        function s(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : u(e)
        }

        function d(e) {
            return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, d(e)
        }

        function u(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function p(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }

        function m(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var y = g['default'].lib('preact'),
            f = y.h,
            h = y.render,
            b = y.Component,
            A = g['default'].lib('player/lib/elem'),
            _ = A.elemBind,
            v = A.elemHeight,
            w = A.elemOffset,
            k = A.elemUnbind,
            C = function(e) {
                function t(e) {
                    var n;
                    return a(this, t), n = s(this, d(t).call(this, e)), m(u(n), 'onMouseMove', function(t) {
                        var e = t.pageX - n.props.videoOffset.left + 10,
                            o = t.pageY - n.props.videoOffset.top;
                        n.setState({
                            x: e,
                            y: o
                        })
                    }), n.animationInterval = void 0, n.state = {
                        x: n.props.x + 10,
                        y: n.props.y,
                        floatingPixel: 8
                    }, n
                }
                return p(t, e), l(t, [{
                    key: 'componentWillMount',
                    value: function() {
                        var e = this;
                        this.animationInterval = setInterval(function() {
                            var t = e.state.floatingPixel + 1;
                            10 < t && (t = 8), e.setState({
                                floatingPixel: t
                            })
                        }, 500), _(document, 'mousemove', this.onMouseMove)
                    }
                }, {
                    key: 'componentWillUnmount',
                    value: function() {
                        clearInterval(this.animationInterval), k(document, 'mousemove', this.onMouseMove)
                    }
                }, {
                    key: 'sandStyle',
                    value: function() {
                        return {
                            fill: '#000000',
                            width: '1',
                            height: '1'
                        }
                    }
                }, {
                    key: 'anchorStyle',
                    value: function() {
                        this.props;
                        return {
                            height: 0,
                            left: ''.concat(this.state.x, 'px'),
                            position: 'absolute',
                            top: ''.concat(this.state.y, 'px'),
                            width: 0
                        }
                    }
                }, {
                    key: 'sandProps',
                    value: function(e, t) {
                        return {
                            className: 'sand',
                            x: e,
                            y: t,
                            style: this.sandStyle()
                        }
                    }
                }, {
                    key: 'useRules',
                    value: function() {
                        return {
                            fill: '#FFFFFF',
                            "fill-rule": 'evenodd'
                        }
                    }
                }, {
                    key: 'hourGlassProps',
                    value: function(e) {
                        return {
                            stroke: '#000000',
                            x: '1.5',
                            y: e,
                            width: '12',
                            height: '2'
                        }
                    }
                }, {
                    key: 'defsProps',
                    value: function(e) {
                        return {
                            x: 1,
                            y: e,
                            width: 13,
                            height: 3
                        }
                    }
                }, {
                    key: 'render',
                    value: function() {
                        var e = this;
                        return f('div', {
                            style: this.anchorStyle(),
                            onMouseMove: this.onMouseMove
                        }, f('svg', {
                            width: '15px',
                            height: '20px',
                            viewBox: '0 0 15 20',
                            version: '1.1'
                        }, f('defs', null, f('rect', i({
                            id: 'path-1'
                        }, this.defsProps(1))), f('rect', i({
                            id: 'path-2'
                        }, this.defsProps(16))), f('polygon', {
                            id: 'path-3',
                            points: '2 3 13 3 13 7 10.25 10 13 13 13 17 2 17 2 13 4.75 10 2 7'
                        })), f('g', {
                            id: 'Page-1',
                            stroke: 'none',
                            "stroke-width": '1',
                            fill: 'none',
                            "fill-rule": 'evenodd'
                        }, f('g', {
                            id: 'hourglass'
                        }, f('g', {
                            id: 'top'
                        }, f('use', i({}, this.useRules(), {
                            xlinkKref: '#path-1'
                        })), f('rect', this.hourGlassProps(1.5))), f('g', {
                            id: 'bottom'
                        }, f('use', i({}, this.useRules(), {
                            xlinkHref: '#path-2'
                        })), f('rect', this.hourGlassProps(16.5))), f('g', {
                            id: 'glass'
                        }, f('use', i({}, this.useRules(), {
                            xlinkHref: '#path-3'
                        })), f('path', {
                            stroke: '#000000',
                            d: 'M2.5,3.5 L2.5,6.80550815 L5.42828419,10 L2.5,13.1944918 L2.5,16.5 L12.5,16.5 L12.5,13.1944918 L9.57171581,10 L12.5,6.80550815 L12.5,3.5 L2.5,3.5 Z'
                        })), f('rect', {
                            id: 'floater',
                            fill: '#000000',
                            x: '7',
                            y: this.state.floatingPixel,
                            width: '1',
                            height: '1'
                        }), [
                            [5, 6],
                            [7, 6],
                            [6, 7],
                            [8, 7],
                            [7, 11],
                            [6, 12],
                            [8, 12],
                            [7, 13],
                            [6, 14],
                            [8, 14],
                            [5, 13],
                            [9, 13],
                            [4, 14],
                            [10, 14],
                            [5, 6],
                            [9, 6]
                        ].map(function(t) {
                            return f('rect', e.sandProps(t[0], t[1]))
                        })))))
                    }
                }]), t
            }(b);
        t['default'] = C
    },
    449: function(e, t, n) {
        'use strict';
        n.r(t);
        var p = n(2),
            m = n(450);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : s(e)
        }

        function s(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function d(e) {
            return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, d(e)
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }
        var g = function(e) {
            function t() {
                return i(this, t), l(this, d(t).apply(this, arguments))
            }
            return u(t, e), r(t, [{
                key: 'width',
                value: function() {
                    return this.props.width
                }
            }, {
                key: 'left',
                value: function() {
                    return this.props.left
                }
            }, {
                key: 'isPlaceholder',
                value: function() {
                    return 'upper' === this.props.playbarMode
                }
            }, {
                key: 'isVisible',
                value: function() {
                    return 'lower' === this.props.playbarMode
                }
            }]), t
        }(m['default']);
        g.shouldMount = function(e) {
            var t = e._opts.playbar;
            return !0 === t || null == t
        }, g.handle = 'lowerPlaybar', g.type = 'lower-playbar', p['default'].defineControl(g);
        t['default'] = g
    },
    45: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'migrateLegacyVisitorTracking', function() {
            return u
        });
        n.d(t, 'consent', function() {
            return p
        });
        n.d(t, 'setVisitorTrackingEnabled', function() {
            return c
        });
        n.d(t, 'isVisitorTrackingEnabled', function() {
            return g
        });
        var l = n(2),
            s = n(17),
            d = n(22);

        function o(e) {
            return r(e) || a(e) || i()
        }

        function i() {
            throw new TypeError('Invalid attempt to spread non-iterable instance')
        }

        function a(e) {
            if (Symbol.iterator in Object(e) || '[object Arguments]' === Object.prototype.toString.call(e)) return Array.from(e)
        }

        function r(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }
        var u = function() {
            var e = Object(d.getWistiaLocalStorage)().visitorTrackingEnabled;
            null != e && (Object(d.updateWistiaLocalStorage)(function(e) {
                return delete e.visitorTrackingEnabled
            }), l['default']._visitorTracking = {}, l['default']._visitorTracking[l['default']._visitorTrackingDomain] = {
                isEnabled: e,
                updatedAt: Date.now()
            }, Object(d.updateWistiaLocalStorage)(function(e) {
                return e.visitorTracking = l['default']._visitorTracking
            }))
        };
        l['default']._visitorTrackingDomain || (l['default']._visitorTrackingDomain = location.hostname || ''), l['default']._visitorTracking || (u(), l['default']._visitorTracking = Object(d.getWistiaLocalStorage)().visitorTracking || {});
        var p = function(e) {
            return null == e ? g() : c(e)
        };
        l['default'].consent = p;
        var c = function(e) {
                var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : l['default']._visitorTrackingDomain;
                'default' === e ? delete l['default']._visitorTracking[t] : l['default']._visitorTracking[t] = {
                    isEnabled: 'true' === ''.concat(e),
                    updatedAt: Date.now()
                }, Object(d.updateWistiaLocalStorage)(function(e) {
                    return e.visitorTracking = l['default']._visitorTracking
                }), Object(s.globalTrigger)('visitortrackingchange', e)
            },
            m = function() {
                if (l['default']._visitorTrackingDomain)
                    for (var e = l['default']._visitorTrackingDomain.split('.'); 0 < e.length;) {
                        var t = l['default']._visitorTracking[e.join('.')],
                            n = t && t.isEnabled;
                        if (null != n) return n;
                        e.shift()
                    }
            },
            g = function() {
                if ('boolean' == typeof l['default']._visitorTracking) return l['default']._visitorTracking;
                if (l['default']._visitorTracking) {
                    var e = m();
                    if (null != e) return !!e
                }
                var t = [];
                if (l['default'].api && l['default'].api.all) try {
                    t.push.apply(t, o(l['default'].api.all()))
                } catch (t) {}
                if (l['default'].channel && l['default'].channel.all) try {
                    t.push.apply(t, o(l['default'].channel.all()))
                } catch (t) {}
                var n = t.some(function(e) {
                    var t = e._mediaData || e._galleryData || {};
                    return !0 === t.privacyMode
                });
                return !n
            }
    },
    450: function(e, t, n) {
        'use strict';
        n.r(t);
        var f = n(2),
            b = n(101),
            A = n(451);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i() {
            return i = Object.assign || function(e) {
                for (var t, n = 1; n < arguments.length; n++)
                    for (var o in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, i.apply(this, arguments)
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function l(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
        }

        function s(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : d(e)
        }

        function d(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function u(e, t, n) {
            return u = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var o = p(e, t);
                if (o) {
                    var i = Object.getOwnPropertyDescriptor(o, t);
                    return i.get ? i.get.call(n) : i.value
                }
            }, u(e, t, n || e)
        }

        function p(e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = c(e), null !== e););
            return e
        }

        function c(e) {
            return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, c(e)
        }

        function m(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && g(e, t)
        }

        function g(e, t) {
            return g = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, g(e, t)
        }

        function y(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var _ = f['default'].lib('utilities/obj'),
            v = f['default'].lib('player/lib/assets'),
            w = f['default'].lib('player/lib/timeout-utils'),
            k = w.doTimeout,
            C = f['default'].lib('utilities/isMouseDown'),
            S = C.isMouseDown,
            P = f['default'].lib('player/lib/elem'),
            E = P.elemBind,
            T = P.formInputIsFocused,
            B = f['default'].lib('preact'),
            x = B.h,
            h = B.render,
            D = 33,
            F = 34,
            I = 32,
            M = function(e) {
                function t(e) {
                    var n;
                    return a(this, t), n = s(this, c(t).call(this, e)), y(d(n), 'renderPlaybar', function() {
                        var e = n.video,
                            t = e.plugin.chapters,
                            o = t ? t.getAllChapters() : [],
                            a = t ? t.getFocusedChapter() : null;
                        n.playbarElem = h(x(A['default'], i({
                            getCurrentTime: n.getCurrentTime,
                            getCurrentBufferTime: n.getCurrentBufferTime,
                            duration: e.duration(),
                            isBeforePlay: 'beforeplay' === e.state(),
                            isVisible: n.props.controlsAreVisible,
                            isPlaying: 'playing' === e.state(),
                            isSeeking: e._impl.engine && e._impl.engine.isSeeking()
                        }, n.props, {
                            onDragStart: n.onDragStart,
                            onDrag: n.onDrag,
                            onDragEnd: n.onDragEnd,
                            onBlur: n.onBlurPlaybar,
                            onFocus: n.onFocusPlaybar,
                            isPlaceholder: n.isPlaceholder(),
                            chapters: o,
                            focusedChapter: a,
                            onMouseEnterChapter: n.onMouseEnterChapter,
                            onMouseLeaveChapter: n.onMouseLeaveChapter,
                            mediaData: n.video._mediaData,
                            embedOptions: n.video._opts,
                            color: n.video.playerColor(),
                            showTime: n.showTime,
                            lastSeekedAt: n._lastSeekedAt || 0,
                            shouldShowStoryboard: n.shouldShowStoryboard(),
                            storyboardAsset: n.storyboardAsset()
                        })), n.rootElem, n.playbarElem), n.reactMounts = [n.rootElem, n.playbarElem]
                    }), y(d(n), 'renderNothing', function() {
                        n.playbarElem = h(x('nothing', null), n.rootElem, n.playbarElem), n.reactMounts = [n.rootElem, n.playbarElem]
                    }), y(d(n), 'renderIfNotPlaying', function() {
                        'playing' !== n.video.state() && n.renderPlaybar()
                    }), y(d(n), 'getCurrentTime', function() {
                        return n.video ? n.video.time() : 0
                    }), y(d(n), 'getCurrentBufferTime', function() {
                        var e = n.video ? n.video.getBuffered() : [];
                        return 0 === e.length ? 0 : e[e.length - 1].end
                    }), y(d(n), 'onMouseEnterChapter', function(t, e) {
                        n.chaptersPlugin().setFocusedChapter(e && e.id)
                    }), y(d(n), 'onMouseLeaveChapter', function() {
                        n.chaptersPlugin().setFocusedChapter(null)
                    }), y(d(n), 'onDragStart', function(t, e) {
                        n.video.requestControls('playbar-drag'), n.stateBeforeDrag = n.video.state(), n.onDrag(t, e), k(''.concat(n.video.uuid, '.maybe-pause-on-scrub'), function() {
                            S() && n.video.pause()
                        }, 300)
                    }), y(d(n), 'onDrag', function(t, e) {
                        n.video.time(e * n.video.duration())
                    }), y(d(n), 'onDragEnd', function(t, e) {
                        n.video.releaseControls('playbar-drag'), n.onDrag(t, e), ('beforeplay' === n.stateBeforeDrag || 'playing' === n.stateBeforeDrag) && n.video.play()
                    }), y(d(n), 'onFocusPlaybar', function() {
                        n.video.enterInputContext('playbar-focus')
                    }), y(d(n), 'onBlurPlaybar', function() {
                        n.video.exitInputContext('playbar-focus')
                    }), y(d(n), 'onKeyDown', function(t) {
                        if (n.isVisible() && !T()) {
                            var e = n.video,
                                o = e.getInputContext();
                            if ('playbar-focus' === o || 'player-mouseover' === o) {
                                var i = e.duration(),
                                    a = t.keyCode;
                                if (a === I) return void t.preventDefault();
                                null == n.keyDownStartedAt && (n.keyDownStartedAt = Date.now());
                                var r = Date.now() - n.keyDownStartedAt,
                                    l = 0;
                                l = 'playing' === e.state() ? t.shiftKey || 200 < r ? a === D || a === F ? 30 > i ? 5 : 60 > i ? 10 : 10 + i / 60 : 30 > i ? 2 : 60 > i ? 5 : 5 + i / 60 / 2 : a === D || a === F ? 60 > i ? 5 : 20 : 2 : t.shiftKey || 200 < r ? 1 : 1 / 24;
                                var s = 0;
                                a === 39 || a === D ? s = 1 : (a === 37 || a === F) && (s = -1), -1 == s ? e.time(e.time() - l) : 1 == s && e.time(e.time() + l)
                            }
                        }
                    }), y(d(n), 'onKeyUp', function(t) {
                        if (n.isVisible() && !T()) {
                            n.keyDownStartedAt = null;
                            var e = n.video,
                                o = e.getInputContext();
                            'playbar-focus' === o && t.keyCode === I && ('playing' === e.state() ? e.pause() : e.play())
                        }
                    }), n.showTime = !0, n
                }
                return m(t, e), l(t, [{
                    key: 'mount',
                    value: function(e) {
                        var n = this;
                        u(c(t.prototype), 'mount', this).call(this, e);
                        var o = this.video;
                        this.unbinds.push(o.on('play', this.renderPlaybar), o.on('pause', this.renderPlaybar), o.on('progress', this.renderIfNotPlaying), o.on('timechange', this.renderIfNotPlaying), o.on('end', this.renderPlaybar), o.on('widthchange', this.renderPlaybar), o.on('playercolorchange', this.renderPlaybar), o.on('seekcomplete', function() {
                            n._lastSeekedAt = Date.now(), n.renderPlaybar()
                        }), o.on('seeking', this.renderPlaybar), o.on('trimchange', function() {
                            n.renderNothing(), n.renderPlaybar()
                        }), E(document, 'keydown', this.onKeyDown), E(document, 'keyup', this.onKeyUp));
                        var i = function() {
                            var e = o.plugin.chapters;
                            n.unbinds.push(e.on('focuschange', n.renderPlaybar), e.on('changechapters', n.renderPlaybar))
                        };
                        o.plugin('chapters').then(i), o.on('plugininitialized', function(e) {
                            'chapters' === e && i()
                        }), this.renderPlaybar()
                    }
                }, {
                    key: 'onControlPropsUpdated',
                    value: function(e) {
                        e.width !== this.props.width && this.renderPlaybar(), e.controlsAreVisible && !this.props.controlsAreVisible && this.renderPlaybar(), !e.controlsAreVisible && this.props.controlsAreVisible && this.renderPlaybar()
                    }
                }, {
                    key: 'chaptersPlugin',
                    value: function() {
                        return this.video.plugin.chapters
                    }
                }, {
                    key: 'isPlaceholder',
                    value: function() {
                        return !1
                    }
                }, {
                    key: 'isVisible',
                    value: function() {
                        return !0
                    }
                }, {
                    key: 'shouldShowStoryboard',
                    value: function() {
                        if (null != this._shouldShowStoryboard) return this._shouldShowStoryboard;
                        var e = !!this.storyboardAsset(),
                            t = !!this.video._mediaData.secondaryMediaData;
                        return this._shouldShowStoryboard = e && !t
                    }
                }, {
                    key: 'storyboardAsset',
                    value: function() {
                        return v.one(this.video._mediaData.assets, {
                            type: 'storyboard',
                            status: v.READY,
                            metadata: function(e) {
                                return e && e.frame_count && e.frame_width && e.frame_height
                            }
                        })
                    }
                }]), t
            }(b['default']);
        t['default'] = M
    },
    451: function(e, t, n) {
        'use strict';
        n.r(t);
        var A = n(2),
            _ = n(53),
            v = n.n(_),
            w = n(162);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i() {
            return i = Object.assign || function(e) {
                for (var t, n = 1; n < arguments.length; n++)
                    for (var o in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, i.apply(this, arguments)
        }

        function a(e, t) {
            return s(e) || l(e, t) || r()
        }

        function r() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance')
        }

        function l(e, t) {
            var n = [],
                o = !0,
                i = !1,
                a;
            try {
                for (var r, l = e[Symbol.iterator](); !(o = (r = l.next()).done) && (n.push(r.value), !(t && n.length === t)); o = !0);
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    o || null == l['return'] || l['return']()
                } finally {
                    if (i) throw a
                }
            }
            return n
        }

        function s(e) {
            if (Array.isArray(e)) return e
        }

        function d(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function u(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function p(e, t, n) {
            return t && u(e.prototype, t), n && u(e, n), e
        }

        function c(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : g(e)
        }

        function m(e) {
            return m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, m(e)
        }

        function g(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function y(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && f(e, t)
        }

        function f(e, t) {
            return f = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, f(e, t)
        }

        function b(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var k, C, S, P = A['default'].lib('utilities/color'),
            E = A['default'].lib('utilities/core'),
            T = E.niceDuration,
            B = A['default'].lib('player/lib/elem'),
            x = B.elemBind,
            D = B.elemOffset,
            F = B.elemUnbind,
            I = B.elemWidth,
            M = A['default'].lib('preact'),
            O = M.h,
            h = M.render,
            L = M.Component,
            R = A['default'].lib('utilities/detect'),
            H = R.cachedDetect,
            W = A['default'].lib('utilities/isMouseDown'),
            j = W.isMouseDown,
            V = A['default'].lib('player/lib/overpassFontFamily'),
            N = V.overpassNumbers,
            U = H(),
            Q = 'vulcanV2Video/ui_components',
            G = 'w-playbar',
            z = 36,
            q = function(e) {
                return Math.min(1, Math.max(0, e))
            },
            Y = function(e, t) {
                for (var n in e)
                    if (e.hasOwnProperty(n) && e[n] !== t[n]) return !0;
                return !1
            },
            K = function(e) {
                function t(e) {
                    var n;
                    return d(this, t), n = c(this, m(t).call(this, e)), b(g(n), 'onFocusIn', function() {
                        j() || n.setState({
                            isKeyboardFocused: !0
                        })
                    }), b(g(n), 'onFocusOut', function() {
                        n.state.isKeyboardFocused && n.setState({
                            isKeyboardFocused: !1
                        })
                    }), b(g(n), 'onMouseEnter', function(t) {
                        n.touchEvents || (t.wistiaPlayerHandled = !0, n.setState({
                            isHovering: !0
                        }), n.cachePositionDetails(), n.props.shouldShowStoryboard && n.loadStoryboard())
                    }), b(g(n), 'onMouseLeave', function(t) {
                        n.touchEvents || (t.wistiaPlayerHandled = !0, n.setState({
                            isHovering: !1
                        }))
                    }), b(g(n), 'onMouseMove', function(t) {
                        if (!n.touchEvents) {
                            t.wistiaPlayerHandled = !0;
                            var e = n.getPercentFromPossiblyExternalMouseEvent(t);
                            n.setState({
                                hoverPercent: e
                            })
                        }
                    }), b(g(n), 'onMouseDown', function(t) {
                        if (!n.touchEvents && !t.ctrlKey) {
                            t.preventDefault(), n.wrapperElem.focus(), t.wistiaPlayerHandled = !0, n.cachePositionDetails();
                            var e = n.getPercentFromPossiblyExternalMouseEvent(t);
                            n.handleWithProp('onDragStart', t, e), n.setState({
                                dragPercent: e,
                                dragMode: !0,
                                wasBeforePlayOnDrag: n.props.isBeforePlay
                            }), x(document, 'mousemove', n.onMouseMoveDragging), x(document, 'mouseup', n.onMouseUpDragging)
                        }
                    }), b(g(n), 'onMouseMoveDragging', function(t) {
                        t.preventDefault(), t.wistiaPlayerHandled = !0;
                        var e = n.getPercentFromPossiblyExternalMouseEvent(t);
                        n.handleWithProp('onDrag', t, e), n.setState({
                            dragPercent: e,
                            dragMode: !0
                        })
                    }), b(g(n), 'onMouseUpDragging', function(t) {
                        t.wistiaPlayerHandled = !0;
                        var e = n.getPercentFromPossiblyExternalMouseEvent(t);
                        n.setState({
                            dragPercent: e,
                            dragMode: !1
                        }), n.handleWithProp('onDragEnd', t, e), F(document, 'mousemove', n.onMouseMoveDragging), F(document, 'mouseup', n.onMouseUpDragging)
                    }), b(g(n), 'onTouchStart', function(t) {
                        t.preventDefault(), t.wistiaPlayerHandled = !0, n.cachePositionDetails();
                        var e = n.getPercentFromTouchEvent(t);
                        n.handleWithProp('onDragStart', t, e), n.setState({
                            dragPercent: e,
                            dragMode: !0
                        }), n.touchEvents.on('touchmove', n.onTouchMoveDragging), n.touchEvents.on('touchend', n.onTouchEndDragging)
                    }), b(g(n), 'onTouchMoveDragging', function(t) {
                        t.preventDefault(), t.wistiaPlayerHandled = !0;
                        var e = n.getPercentFromTouchEvent(t);
                        n.handleWithProp('onDrag', t, e), n.setState({
                            dragPercent: e,
                            dragMode: !0
                        })
                    }), b(g(n), 'onTouchEndDragging', function(t) {
                        t.wistiaPlayerHandled = !0;
                        var e = n.getPercentFromTouchEvent(t);
                        n.setState({
                            dragPercent: e,
                            dragMode: !1
                        }), n.handleWithProp('onDragEnd', t, e), n.touchEvents.off('touchmove', n.onTouchMoveDragging), n.touchEvents.off('touchend', n.onTouchEndDragging)
                    }), b(g(n), 'startAnimLoopIfPlaying', function() {
                        (n.props.isPlaying || !n.bufferedTween.atEnd()) && n.props.isVisible && requestAnimationFrame(n.continuouslyUpdatePlaybar)
                    }), b(g(n), 'stopAnimLoop', function() {
                        cancelAnimationFrame(n.animReq)
                    }), b(g(n), 'continuouslyUpdatePlaybar', function() {
                        300 < Date.now() - n.lastRenderedAt ? n.setState({
                            currentTime: n.props.getCurrentTime(),
                            currentBufferTime: n.props.getCurrentBufferTime(),
                            timeWidth: n._timeWidth
                        }, n.startAnimLoopIfPlaying) : (n.drawPlaybar(), n.startAnimLoopIfPlaying())
                    }), b(g(n), 'loadStoryboard', function() {
                        return Wistia.asyncRequire(''.concat(Q, '/Storyboard.js')).then(function(e) {
                            S = e, n.setState({
                                loadedStoryboard: !0
                            })
                        })
                    }), b(g(n), 'loadChapters', function() {
                        return Wistia.asyncRequire([''.concat(Q, '/ChapterMarkers.js'), ''.concat(Q, '/ChapterTitles.js')]).then(function(e) {
                            var t = a(e, 2),
                                o = t[0],
                                i = t[1];
                            k = o, C = i, n.setState({
                                loadedChapters: !0
                            })
                        })
                    }), n.state = {
                        hasPlayed: !1,
                        isHovering: !1,
                        dragMode: !1,
                        dragPercent: 0,
                        hoverPercent: 0,
                        currentTime: e.getCurrentTime(),
                        currentBufferTime: e.getCurrentBufferTime(),
                        isKeyboardFocused: !1,
                        loadedStoryboard: !1,
                        loadedChapters: !1,
                        timeWidth: null,
                        wasBeforePlayOnDrag: !1
                    }, n.setColorsFromPlayerColor(e.color), n.bufferedTween = new v.a({
                        seedRange: 0,
                        outputStart: 0,
                        outputEnd: 0
                    }), e.chapters && 0 < e.chapters.length && n.loadChapters(), n
                }
                return y(t, e), p(t, [{
                    key: 'componentWillReceiveProps',
                    value: function(e) {
                        var t = this.props;
                        t.color !== e.color && this.setColorsFromPlayerColor(e.color), this.setState({
                            dragMode: !1,
                            currentTime: t.getCurrentTime(),
                            currentBufferTime: t.getCurrentBufferTime()
                        }), e.chapters && 0 < e.chapters.length && this.loadChapters()
                    }
                }, {
                    key: 'shouldComponentUpdate',
                    value: function(e, t) {
                        return Y(this.props, e) || Y(this.state, t)
                    }
                }, {
                    key: 'render',
                    value: function() {
                        var t = this;
                        return this.oldWrapperElem = this.wrapperElem, this.props.isPlaceholder ? O('div', {
                            class: ''.concat(G, '-placeholder w-css-reset w-css-reset-tree'),
                            role: 'slider',
                            "aria-label": 'Playbar',
                            "aria-orientation": 'horizontal',
                            "aria-valuenow": this.ariaValueNow(),
                            "aria-valuemin": 0,
                            "aria-valuemax": this.props.duration,
                            "aria-valuetext": this.ariaValueText(),
                            tabindex: -1,
                            style: this.placeholderStyle()
                        }, this.renderTime()) : O('div', {
                            class: ''.concat(G, '-wrapper w-css-reset w-css-reset-tree'),
                            role: 'slider',
                            "aria-label": 'Playbar',
                            "aria-orientation": 'horizontal',
                            "aria-valuenow": this.ariaValueNow(),
                            "aria-valuemin": 0,
                            "aria-valuemax": this.props.duration,
                            "aria-valuetext": this.ariaValueText(),
                            tabindex: 0,
                            style: this.wrapperStyle(),
                            ref: function(n) {
                                return t.wrapperElem = n
                            },
                            onBlur: this.props.onBlur,
                            onFocus: this.props.onFocus,
                            onFocusIn: this.onFocusIn,
                            onFocusOut: this.onFocusOut,
                            onMouseEnter: this.onMouseEnter,
                            onMouseLeave: this.onMouseLeave,
                            onMouseMove: this.onMouseMove,
                            onMouseDown: this.onMouseDown,
                            onMouseUp: this.onMouseUp
                        }, O('div', {
                            style: this.clippedStyle()
                        }, O('canvas', {
                            width: this.canvasWidth(),
                            height: this.canvasHeight(),
                            ref: function(n) {
                                t.canvas = n
                            },
                            style: this.canvasStyle()
                        })), 'undefined' == typeof k ? null : O(k, i({}, this.props, {
                            timeLeft: this.timeLeft(),
                            timeRight: this.timeRight()
                        })), this.props.shouldShowStoryboard && 'undefined' != typeof S ? O(S, i({}, this.props, {
                            isHovering: this.state.isHovering,
                            hoverPercent: this.state.hoverPercent
                        })) : null, 'undefined' == typeof C ? null : O(C, this.props), O('div', {
                            class: ''.concat(G, '__hoverMarker'),
                            style: this.hoverMarkerStyle()
                        }), O('div', {
                            class: ''.concat(G, '__focus-border'),
                            style: this.focusBorderStyle()
                        }))
                    }
                }, {
                    key: 'canvasWidth',
                    value: function() {
                        return this.props.width * (window.devicePixelRatio || 1)
                    }
                }, {
                    key: 'canvasHeight',
                    value: function() {
                        return this.props.height * (window.devicePixelRatio || 1)
                    }
                }, {
                    key: 'renderTime',
                    value: function() {
                        var t = this;
                        return O('div', {
                            class: ''.concat(G, '__time'),
                            style: this.timeStyle(),
                            ref: function(n) {
                                return t.timeElem = n
                            }
                        }, this.timeText())
                    }
                }, {
                    key: 'componentDidMount',
                    value: function() {
                        this.lastRenderedAt = Date.now(), this.drawPlaybar(), U.touchScreen && this.wrapperElem && (this.touchEvents = new w['default'](this.wrapperElem), this.touchEvents.on('touchstart', this.onTouchStart));
                        var e = this.props;
                        e.isPlaying && this.setState({
                            hasPlayed: !0
                        }), e.isPlaying && this.startAnimLoopIfPlaying()
                    }
                }, {
                    key: 'componentDidUpdate',
                    value: function(e, t) {
                        var n = this.props;
                        this.lastRenderedAt = Date.now(), this.drawPlaybar(), U.touchScreen && this.wrapperElem && this.oldWrapperElem !== this.wrapperElem && (this.touchEvents && this.touchEvents.destroy(), this.touchEvents = new w['default'](this.wrapperElem), this.touchEvents.on('touchstart', this.onTouchStart)), n.isPlaying && !this.state.hasPlayed && this.setState({
                            hasPlayed: !0
                        });
                        var o = n.isPlaying && !e.isPlaying,
                            i = t.currentBufferTime != this.state.currentBufferTime,
                            a = n.isVisible && !e.isVisible;
                        (o || a || i) && this.startAnimLoopIfPlaying();
                        var r = !n.isVisible && e.isVisible;
                        r && this.stopAnimLoop()
                    }
                }, {
                    key: 'drawPlaybar',
                    value: function() {
                        var e = this;
                        if (this.canvas) {
                            var t = this.props,
                                n = this._hasDrawn;
                            this._hasDrawn = !0, this._prevTime = this._currentTime, this._prevBufferTime = this._currentBufferTime, this._currentTime = t.getCurrentTime(), this._currentBufferTime = t.getCurrentBufferTime();
                            var o = this.canvasWidth(),
                                i = this.canvasHeight(),
                                a = this.canvas.getContext('2d');
                            a.clearRect(0, 0, o, i);
                            var r = 0,
                                l = o * this.playedPercent();
                            a.fillStyle = this.playedColor.toRgba(), a.fillRect(r, 0, l, i), r += l;
                            var s = 100 > Date.now() - t.lastSeekedAt;
                            (this._prevTime !== this._currentTime || this._prevBufferTime != this._currentBufferTime) && (this.bufferedTween = new v.a({
                                seedRange: 400,
                                outputStart: s ? this.bufferedAheadPercent() : this.bufferedTween.value(),
                                outputEnd: this.bufferedAheadPercent()
                            }));
                            var d = o * this.bufferedTween.value();
                            if (a.fillStyle = this.bufferedColor.toRgba(), a.fillRect(r, 0, d, i), r += d, a.fillStyle = this.emptyColor.toRgba(), a.fillRect(r, 0, o, i), !1 !== t.showTime) {
                                var u = this._timeLength,
                                    p = this.timeText();
                                this._timeLength = n ? p.length : 0;
                                var c = 14 * t.scale * window.devicePixelRatio;
                                a.font = ''.concat(c, 'px ').concat(N), n && this._timeLength !== u && (this._timeWidth = a.measureText(p.replace(/\d/g, '5')).width);
                                var m, g = this.timePadding() * (window.devicePixelRatio || 1);
                                this._timeWidth + 2 * g < l ? (a.textAlign = 'right', m = l - g) : (a.textAlign = 'left', m = g), a.fillStyle = '#fff', a.textBaseline = 'middle', a.fillText(n ? p : '.', m, i / 2), n || setTimeout(function() {
                                    e.drawPlaybar(), e.setState({
                                        timeWidth: e._timeWidth
                                    })
                                }, 0)
                            }
                        }
                    }
                }, {
                    key: 'componentWillUnmount',
                    value: function() {
                        F(document, 'mousemove', this.onMouseMoveDragging), F(document, 'mouseup', this.onMouseUpDragging), this.touchEvents && (this.touchEvents.destroy(), this.touchEvents = null)
                    }
                }, {
                    key: 'placeholderStyle',
                    value: function() {
                        var e = new P(this.props.color).alpha(.95);
                        return {
                            background: e.toRgba(),
                            cursor: 'default',
                            height: '100%',
                            outline: 'none',
                            position: 'relative',
                            width: '100%'
                        }
                    }
                }, {
                    key: 'timeBounds',
                    value: function() {
                        var e, t;
                        return this.timeCanFitInPlayedRect() ? (t = this.playheadLeftPosition() - this.timePadding(), e = t - this.timeWidth() - this.timePadding()) : (e = this.timePadding(), t = e + this.timeWidth()), {
                            left: e,
                            right: t
                        }
                    }
                }, {
                    key: 'timeLeft',
                    value: function() {
                        return this.timeBounds().left
                    }
                }, {
                    key: 'timeRight',
                    value: function() {
                        return this.timeBounds().right
                    }
                }, {
                    key: 'wrapperStyle',
                    value: function() {
                        return {
                            cursor: 'pointer',
                            height: '100%',
                            outline: 'none',
                            position: 'relative'
                        }
                    }
                }, {
                    key: 'clippedStyle',
                    value: function() {
                        return {
                            display: 'block',
                            height: '100%',
                            overflow: 'hidden',
                            pointerEvents: 'none',
                            position: 'relative',
                            width: this.props.width
                        }
                    }
                }, {
                    key: 'canvasStyle',
                    value: function() {
                        return {
                            height: this.props.height,
                            left: 0,
                            pointerEvents: 'none',
                            position: 'absolute',
                            top: 0,
                            width: this.props.width
                        }
                    }
                }, {
                    key: 'timeStyle',
                    value: function() {
                        var e = this.props.scale,
                            t = !this.props.isPlaceholder && this.timeCanFitInPlayedRect();
                        return {
                            color: 'white',
                            display: !1 === this.props.showTime ? 'none' : 'block',
                            fontFamily: N,
                            fontSize: ''.concat(14 * e, 'px'),
                            marginLeft: t ? ''.concat(-10 * e, 'px') : ''.concat(10 * e, 'px'),
                            pointerEvents: 'none',
                            position: 'absolute',
                            textShadow: '0 0 6px rgba(0, 0, 0, 0.2)',
                            top: '50%',
                            transform: 'translateY(-50%) translateX('.concat(t ? '-100%' : 0, ')'),
                            whiteSpace: 'nowrap'
                        }
                    }
                }, {
                    key: 'hoverMarkerStyle',
                    value: function() {
                        return {
                            background: 'linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,.12) 100%)',
                            display: this.state.isHovering ? ' block' : 'none',
                            height: '100%',
                            left: ''.concat(this.state.hoverPercent * this.props.width - z, 'px'),
                            pointerEvents: 'none',
                            position: 'absolute',
                            top: 0,
                            width: z
                        }
                    }
                }, {
                    key: 'focusBorderStyle',
                    value: function() {
                        return {
                            border: '2px solid #fff',
                            display: this.state.isKeyboardFocused ? 'block' : 'none',
                            height: '100%',
                            left: 0,
                            pointerEvents: 'none',
                            position: 'absolute',
                            top: 0,
                            width: '100%'
                        }
                    }
                }, {
                    key: 'playedPercent',
                    value: function() {
                        var e = this.state;
                        return e.dragMode || e.wasBeforePlayOnDrag && (this.props.isSeeking || !e.hasPlayed) ? e.dragPercent : q(this.props.getCurrentTime() / this.props.duration)
                    }
                }, {
                    key: 'bufferedAheadPercent',
                    value: function() {
                        var e = this.state;
                        if (this.props.isBeforePlay) return 0;
                        if (e.dragMode) {
                            var t = e.currentBufferTime / this.props.duration;
                            return q(t - e.dragPercent)
                        }
                        return q((this.props.getCurrentBufferTime() - this.props.getCurrentTime()) / this.props.duration)
                    }
                }, {
                    key: 'emptyPercent',
                    value: function() {
                        var e = q(this.playedPercent() + this.bufferedAheadPercent());
                        return 1 - e
                    }
                }, {
                    key: 'timeText',
                    value: function() {
                        var e = this.state,
                            t = this.props;
                        return e.dragMode || e.wasBeforePlayOnDrag && (this.props.isSeeking || !e.hasPlayed) ? T(e.dragPercent * t.duration) : e.hasPlayed || 1 <= this.props.getCurrentTime() ? T(t.getCurrentTime()) : T(t.duration)
                    }
                }, {
                    key: 'ariaValueNow',
                    value: function() {
                        return this.state.dragMode ? this.state.dragPercent * this.props.duration : this.props.getCurrentTime()
                    }
                }, {
                    key: 'ariaValueText',
                    value: function() {
                        return T(this.ariaValueNow())
                    }
                }, {
                    key: 'cachePositionDetails',
                    value: function() {
                        this.offset = D(this.wrapperElem)
                    }
                }, {
                    key: 'getPercentFromPossiblyExternalMouseEvent',
                    value: function(t) {
                        return t.target === this.wrapperElem ? this.getPercentFromMouseEvent(t) : this.getPercentFromPageX(t.pageX)
                    }
                }, {
                    key: 'getPercentFromMouseEvent',
                    value: function(e) {
                        var t = e.offsetX,
                            n = this.offset ? this.offset.zoom : 1;
                        return this.getPercentFromOffsetX(t / n)
                    }
                }, {
                    key: 'getPercentFromOffsetX',
                    value: function(e) {
                        return Math.max(0, Math.min(1, e / this.props.width))
                    }
                }, {
                    key: 'getPercentFromPageX',
                    value: function(e) {
                        if (void 0 === this.offset) return 0;
                        var t = this.props.width,
                            n = this.offset.width,
                            o = (e - this.offset.left) / (n / t);
                        return this.getPercentFromOffsetX(o)
                    }
                }, {
                    key: 'getPercentFromTouchEvent',
                    value: function(e) {
                        var t = e.changedTouches;
                        return '0' in t ? this.getPercentFromPageX(t[0].pageX) : 0
                    }
                }, {
                    key: 'handleWithProp',
                    value: function(t, n) {
                        var e = this.props[t];
                        if (e) {
                            for (var o = arguments.length, i = Array(2 < o ? o - 2 : 0), a = 2; a < o; a++) i[a - 2] = arguments[a];
                            e.apply(void 0, [n].concat(i))
                        }
                    }
                }, {
                    key: 'timeWidth',
                    value: function() {
                        return this._timeWidth / (window.devicePixelRatio || 1)
                    }
                }, {
                    key: 'playheadLeftPosition',
                    value: function() {
                        return this.props.width * this.playedPercent()
                    }
                }, {
                    key: 'timePadding',
                    value: function() {
                        return 8 * this.props.scale
                    }
                }, {
                    key: 'timeCanFitInPlayedRect',
                    value: function() {
                        return this.timeWidth() + 2 * this.timePadding() < this.playheadLeftPosition()
                    }
                }, {
                    key: 'setColorsFromPlayerColor',
                    value: function(e) {
                        this.playedColor = new P(e).darken(30).alpha(.7), this.bufferedColor = new P(e).lighten(75).alpha(.6), this.emptyColor = new P(e).lighten(40).alpha(.3)
                    }
                }]), t
            }(L);
        t['default'] = K
    },
    452: function(e, t, n) {
        'use strict';
        n.r(t);
        var m = n(2),
            g = n(101),
            y = n(347);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : d(e)
        }

        function s(e) {
            return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, s(e)
        }

        function d(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var f = m['default'].lib('player/lib/elem'),
            b = f.getLastActiveEventAt,
            A = m['default'].lib('preact'),
            _ = A.h,
            h = A.render,
            v = m['default'].lib('player/lib/fit-control'),
            w = v.controlMultiplierBasedOnVideo,
            k = m['default'].lib('utilities/detect'),
            C = k.cachedDetect,
            S = C(),
            P = function(e) {
                function t(e) {
                    var n;
                    return i(this, t), n = l(this, s(t).call(this, e)), p(d(n), 'showIconAndFade', function() {
                        return n.playedOnce ? void(n.video.isControlEnabled('centeredPlayPauseToggler') && !n.props.chromeless || n.video._inNativeMode() || (n.isPlaying = 'playing' === n.video.state(), n.renderAndFade())) : void(n.playedOnce = !0)
                    }), n.isOpaque = !1, n.unbinds.push(e.on('play', n.showIconAndFade), e.on('pause', n.showIconAndFade)), n
                }
                return u(t, e), r(t, [{
                    key: 'mount',
                    value: function(e) {
                        this.rootElem = e
                    }
                }, {
                    key: 'onControlPropsUpdated',
                    value: function(e) {
                        e.videoWidth !== this.props.videoWidth && this.renderButton()
                    }
                }, {
                    key: 'renderAndFade',
                    value: function() {
                        var e = this,
                            t = this.video.lastPlayInfo();
                        if (!(this.isPlaying && 'user-event' !== t.source)) {
                            var n = this.video.lastPauseInfo();
                            (this.isPlaying || 'user-event' === n.source) && (this.isOpaque = !0, this.renderButton(), clearTimeout(this.fadeTimeout), this.fadeTimeout = setTimeout(function() {
                                e.isOpaque = !1, e.renderButton()
                            }, 20))
                        }
                    }
                }, {
                    key: 'renderButton',
                    value: function() {
                        this.iconElem = h(_('div', {
                            class: 'w-play-pause-notifier',
                            style: this.rootStyle()
                        }, _(y['default'], {
                            isPlaying: !this.isPlaying,
                            svgStyle: this.svgStyle(),
                            noPadding: !0
                        })), this.rootElem, this.iconElem), this.reactMounts = [this.rootElem, this.iconElem]
                    }
                }, {
                    key: 'rootStyle',
                    value: function() {
                        var e = this.scale(),
                            t = this.isPlaying,
                            n = t ? 72 : 80,
                            o = t ? 60 : 50;
                        return {
                            height: ''.concat(n * e, 'px'),
                            left: '50%',
                            pointerEvents: 'none',
                            position: 'absolute',
                            opacity: this.isOpaque ? .5 : 0,
                            top: '50%',
                            transform: 'translate(-'.concat(t ? 33 : 50, '%, -50%) scale(').concat(this.isOpaque ? .9 : 1.1, ')'),
                            transition: this.isOpaque ? '' : 'opacity .8s, transform .8s',
                            width: ''.concat(o * e, 'px')
                        }
                    }
                }, {
                    key: 'svgStyle',
                    value: function() {
                        return {
                            filter: 'drop-shadow(0px 0px 3px rgba(0,0,0,0.5))'
                        }
                    }
                }, {
                    key: 'scale',
                    value: function() {
                        return Math.min(1.3, Math.max(.3, w(this.video, [640, 960])))
                    }
                }]), t
            }(g['default']);
        P.shouldMount = function(e) {
            return !1 !== e._opts.playPauseNotifier
        }, P.handle = 'playPauseNotifier', P.type = 'above-control-bar', m['default'].defineControl(P);
        t['default'] = P
    },
    453: function(e, t, n) {
        'use strict';
        n.r(t);
        var b = n(2),
            A = n(454),
            _ = n(101);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            return l(e) || r(e, t) || a()
        }

        function a() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance')
        }

        function r(e, t) {
            var n = [],
                o = !0,
                i = !1,
                a;
            try {
                for (var r, l = e[Symbol.iterator](); !(o = (r = l.next()).done) && (n.push(r.value), !(t && n.length === t)); o = !0);
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    o || null == l['return'] || l['return']()
                } finally {
                    if (i) throw a
                }
            }
            return n
        }

        function l(e) {
            if (Array.isArray(e)) return e
        }

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function d(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function u(e, t, n) {
            return t && d(e.prototype, t), n && d(e, n), e
        }

        function p(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : m(e)
        }

        function c(e) {
            return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, c(e)
        }

        function m(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function g(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && y(e, t)
        }

        function y(e, t) {
            return y = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, y(e, t)
        }

        function f(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var v = b['default'].lib('preact'),
            w = v.h,
            h = v.render,
            k = b['default'].lib('player/translations'),
            C = k.getTranslation,
            S = k.defineTranslations,
            P = b['default'].lib('promiscuous');
        S('en-US', {
            SETTINGS_PLAYBACK_RATE_TITLE: 'Speed',
            SETTINGS_QUALITY_AUTO: 'Auto',
            SETTINGS_QUALITY_TITLE: 'Quality',
            SETTINGS_TITLE: 'Settings'
        });
        var E = function(e) {
            function t(e) {
                var n;
                return s(this, t), n = p(this, c(t).call(this, e)), f(m(n), 'loadMenuCode', function() {
                    return b['default'].asyncRequire(['overpassFontFace.js', 'vulcanV2Video/controls/SettingsControl/dialog.js']).then(function(e) {
                        var t = i(e, 2),
                            o = t[0],
                            a = t[1];
                        n.renderMenuImpl || (n.renderMenuImpl = a.renderMenu.bind(m(n)), n.onSelect = a.onSelect.bind(m(n)))
                    })
                }), f(m(n), 'onMouseEnterButton', function() {
                    n.loadMenuCode()
                }), n.unbinds.push(e.on('playbackratechange', function() {
                    n.menuElem && n.renderMenu()
                }), e.on('qualitychange', function() {
                    n.menuElem && n.renderMenu()
                }), e.on('playerlanguagechange', function() {
                    n.menuElem && n.renderMenu()
                })), e.hasData(function() {
                    if (null == n._isQualityEnabled) {
                        var t = e._opts.qualityControl;
                        n._isQualityEnabled = !0 === t || null == t
                    }
                    if (null == n._isPlaybackRateEnabled) {
                        var o = e._opts.playbackRateControl;
                        n._isPlaybackRateEnabled = !0 === o || null == o
                    }
                }), n
            }
            return g(t, e), u(t, [{
                key: 't',
                value: function(e) {
                    return C(this.props.playerLanguage.code, 'SETTINGS_'.concat(e))
                }
            }, {
                key: 'mountButton',
                value: function(e) {
                    this.buttonRoot = e, this.renderButton()
                }
            }, {
                key: 'mountDialog',
                value: function(e) {
                    return this.dialogRoot = e, this.renderMenu()
                }
            }, {
                key: 'renderButton',
                value: function() {
                    this.setButtonLabel(this.t('TITLE')), this.buttonElem = h(w(A['default'], {
                        onMouseEnter: this.onMouseEnterButton
                    }), this.buttonRoot, this.buttonElem), this.reactMounts.button = [this.buttonRoot, this.buttonElem]
                }
            }, {
                key: 'renderMenu',
                value: function() {
                    var e = this;
                    if (this.dialog.isOpen()) {
                        var t = this.loadMenuCode().then(function() {
                            e.renderMenuImpl()
                        });
                        return this.loading(new P(function(e) {
                            t.then(e)
                        })), t
                    }
                }
            }, {
                key: 'onControlPropsUpdated',
                value: function(e) {
                    this.dialog && this.dialog.isOpen() && this.renderMenu(), e.playerLanguage && this.props.playerLanguage.code !== e.playerLanguage.code && (this.renderButton(), this.renderMenu())
                }
            }, {
                key: 'setQualityEnabled',
                value: function(e) {
                    var t = this;
                    return this._isQualityEnabled = e, this.loadMenuCode().then(function() {
                        t.renderMenuImpl()
                    })
                }
            }, {
                key: 'setPlaybackRateEnabled',
                value: function(e) {
                    var t = this;
                    return this._isPlaybackRateEnabled = e, this.loadMenuCode().then(function() {
                        t.renderMenuImpl()
                    })
                }
            }]), t
        }(_['default']);
        E.shouldMount = function(e) {
            var t = e._opts,
                n = t.settingsControl,
                o = t.qualityControl,
                i = t.playbackRateControl;
            return !1 !== n && (!0 === o || null == o || !0 === i || null == i)
        }, E.handle = 'settingsButton', E.type = 'control-bar-right', E.sortValue = 200, E.isVideoChrome = !0, b['default'].defineControl(E), b['default'].SettingsControl = E;
        t['default'] = E
    },
    454: function(e, t, n) {
        'use strict';
        n.r(t);
        var m = n(2),
            g = n(103);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i() {
            return i = Object.assign || function(e) {
                for (var t, n = 1; n < arguments.length; n++)
                    for (var o in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, i.apply(this, arguments)
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function l(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
        }

        function s(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : d(e)
        }

        function d(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function u(e) {
            return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, u(e)
        }

        function p(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }
        var y = m['default'].lib('preact'),
            f = y.h,
            h = y.render,
            b = y.Component,
            A = function(e) {
                function t() {
                    return a(this, t), s(this, u(t).apply(this, arguments))
                }
                return p(t, e), l(t, [{
                    key: 'shouldComponentUpdate',
                    value: function() {
                        return !1
                    }
                }, {
                    key: 'render',
                    value: function() {
                        return f('svg', i({}, Object(g.standardSvgAttrs)(40, 34), {
                            onMouseEnter: this.props.onMouseEnter
                        }), f('g', null, f('g', null, f('path', {
                            d: 'M28.3,16.4h-1.9c-0.4,0-0.8-0.3-0.9-0.7l-0.4-1.1c-0.2-0.3-0.1-0.8,0.2-1.1l1.3-1.3c0.3-0.3,0.3-0.7,0-1l-0.4-0.4c-0.3-0.3-0.7-0.3-1,0l-1.3,1.3c-0.3,0.3-0.8,0.3-1.1,0.1l-1.1-0.5c-0.4-0.1-0.7-0.5-0.7-0.9V9.1c0-0.4-0.3-0.7-0.7-0.7h-0.6c-0.4,0-0.7,0.3-0.7,0.7v1.7c0,0.4-0.3,0.8-0.7,0.9l-1.2,0.5c-0.3,0.2-0.8,0.1-1.1-0.2l-1.2-1.2c-0.3-0.3-0.7-0.3-1,0l-0.4,0.4c-0.3,0.3-0.3,0.7,0,1l1.2,1.2c0.3,0.3,0.3,0.8,0.1,1.1l-0.5,1.2c-0.1,0.4-0.5,0.7-0.9,0.7h-1.6c-0.4,0-0.7,0.3-0.7,0.7v0.6c0,0.4,0.3,0.7,0.7,0.7h1.6c0.4,0,0.8,0.3,0.9,0.7l0.5,1.2c0.2,0.3,0.1,0.8-0.1,1.1l-1.2,1.2c-0.3,0.3-0.3,0.7,0,1l0.4,0.4c0.3,0.3,0.7,0.3,1,0l1.2-1.2c0.3-0.3,0.8-0.3,1.1-0.2l1.2,0.5c0.4,0.1,0.7,0.5,0.7,0.9v1.7c0,0.4,0.3,0.7,0.7,0.7h0.6c0.4,0,0.7-0.3,0.7-0.7V24c0-0.4,0.3-0.8,0.7-0.9l1.1-0.5c0.3-0.2,0.8-0.1,1.1,0.1l1.3,1.3c0.3,0.3,0.7,0.3,1,0l0.4-0.4c0.3-0.3,0.3-0.7,0-1l-1.3-1.3C25,21,25,20.5,25.1,20.2l0.4-1.1c0.1-0.4,0.5-0.7,0.9-0.7h1.9c0.4,0,0.7-0.3,0.7-0.7v-0.6C29,16.7,28.7,16.4,28.3,16.4z M23.8,17.5c0,2.2-1.8,3.9-3.9,3.9c-2.2,0-3.9-1.8-3.9-3.9s1.7-3.9,3.9-3.9C22.1,13.6,23.8,15.3,23.8,17.5z'
                        }))))
                    }
                }]), t
            }(b);
        t['default'] = A
    },
    455: function(e, t, n) {
        'use strict';
        n.r(t);
        var p = n(2),
            m = n(101),
            g = n(456);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : s(e)
        }

        function s(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function d(e) {
            return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, d(e)
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }
        var y = p['default'].lib('preact'),
            f = y.h,
            h = y.render,
            b = p['default'].lib('utilities/detect'),
            A = b.cachedDetect,
            _ = p['default'].lib('player/translations'),
            v = _.getTranslation,
            w = _.defineTranslations,
            k = A();
        w('en-US', {
            STATUS_BAR_EMBED_CODE_COPIED: 'Embed Code is now copied to your clipboard!'
        });
        var C = function(e) {
            function t(e) {
                var n;
                return i(this, t), n = l(this, d(t).call(this, e)), n._isVisible = !1, n
            }
            return u(t, e), r(t, [{
                key: 'flash',
                value: function(e) {
                    var t = this,
                        n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 2e3;
                    this._isVisible = !0, this.renderMenu(this.t(e)), setTimeout(function() {
                        t.hide()
                    }, n)
                }
            }, {
                key: 't',
                value: function(e) {
                    return v(this.props.playerLanguage.code, 'STATUS_BAR_'.concat(e))
                }
            }, {
                key: 'hide',
                value: function() {
                    this._isVisible = !1, this.menuElem = h(f('nothing', null), this.rootElem, this.menuElem)
                }
            }, {
                key: 'renderMenu',
                value: function(e) {
                    this._isVisible && (this.menuElem = h(f(g['default'], {
                        message: e
                    }), this.rootElem, this.menuElem), this.reactMounts = [this.rootElem, this.menuElem])
                }
            }]), t
        }(m['default']);
        C.handle = 'statusBar', C.type = 'background', p['default'].defineControl(C);
        t['default'] = C
    },
    456: function(e, t, n) {
        'use strict';
        n.r(t);
        var p = n(2);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : s(e)
        }

        function s(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function d(e) {
            return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, d(e)
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }
        var m = p['default'].lib('preact'),
            g = m.h,
            y = m.render,
            h = m.Component,
            f = p['default'].lib('utilities/detect'),
            b = f.cachedDetect,
            A = b(),
            _ = function(e) {
                function t() {
                    return i(this, t), l(this, d(t).apply(this, arguments))
                }
                return u(t, e), r(t, [{
                    key: 'styles',
                    value: function() {
                        return {
                            background: 'rgba(0,0,0,.3)',
                            boxShadow: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: k(this),
                            lineHeight: w(this),
                            padding: '0 '.concat(10 * this.props.scale, 'px'),
                            width: '100%',
                            height: '30px',
                            color: '#fff',
                            position: 'absolute',
                            justifyContent: 'center'
                        }
                    }
                }, {
                    key: 'render',
                    value: function() {
                        return g('div', {
                            style: this.styles()
                        }, this.props.message)
                    }
                }]), t
            }(h),
            v = function(e) {
                return 34 * e.props.scale
            },
            w = function(e) {
                return ''.concat(v(e), 'px')
            },
            k = function(e) {
                return ''.concat(14 * e.props.scale, 'px')
            };
        t['default'] = _
    },
    457: function(e, t, n) {
        'use strict';
        n.r(t);
        var m = n(2),
            g = n(101),
            y = n(347);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : d(e)
        }

        function s(e) {
            return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, s(e)
        }

        function d(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var f = m['default'].lib('preact'),
            b = f.h,
            h = f.render,
            A = m['default'].lib('player/translations'),
            _ = A.getTranslation,
            v = m['default'].lib('utilities/detect'),
            w = v.cachedDetect,
            k = w(),
            C = function(e) {
                function t(e) {
                    var n;
                    return i(this, t), n = l(this, s(t).call(this, e)), p(d(n), 'renderButton', function() {
                        if (n.buttonRoot && ('playing' === n.video.state() ? n.setButtonLabel(n.t('TITLE_WHEN_PLAYING')) : n.setButtonLabel(n.t('TITLE_WHEN_NOT_PLAYING')), n.buttonElem = h(b(y['default'], {
                                isPlaying: 'playing' === n.video.state()
                            }), n.buttonRoot, n.buttonElem), n.reactMounts = [n.rootElem, n.thumbnailElem], k.trident)) {
                            var e = n.buttonRoot.parentNode;
                            e.style.display = 'none', setTimeout(function() {
                                e.style.display = ''
                            }, 1)
                        }
                    }), p(d(n), 'onClickButton', function() {
                        var e = n.video;
                        'playing' === e.state() ? e.pause() : e.play()
                    }), n.unbinds.push(e.on('play', n.renderButton), e.on('pause', n.renderButton), e.on('end', n.renderButton)), n
                }
                return u(t, e), r(t, [{
                    key: 'onControlPropsUpdated',
                    value: function(e) {
                        e.playerLanguage && this.props.playerLanguage.code !== e.playerLanguage.code && this.renderButton()
                    }
                }, {
                    key: 'mountButton',
                    value: function(e) {
                        this.buttonRoot = e, this.renderButton()
                    }
                }, {
                    key: 't',
                    value: function(e) {
                        return _(this.props.playerLanguage.code, 'PLAY_BUTTON_'.concat(e))
                    }
                }]), t
            }(g['default']);
        C.shouldMount = function(e) {
            var t = e._opts.smallPlayButton;
            return !0 === t || null == t
        }, C.handle = 'smallPlayButton', C.type = 'control-bar-left', C.width = 50, C.sortValue = 100;
        m['default'].defineControl(C);
        t['default'] = C
    },
    458: function(e, t, n) {
        'use strict';
        n.r(t);
        var g = n(2),
            y = n(101),
            f = n(323),
            b = n(420);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i() {
            return i = Object.assign || function(e) {
                for (var t, n = 1; n < arguments.length; n++)
                    for (var o in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, i.apply(this, arguments)
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function l(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
        }

        function s(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : u(e)
        }

        function d(e) {
            return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, d(e)
        }

        function u(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function p(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }

        function m(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var A = g['default'].lib('preact'),
            _ = A.h,
            h = A.render,
            v = g['default'].lib('promiscuous'),
            w = g['default'].lib('utilities/detect'),
            k = w.cachedDetect,
            C = k(),
            S = function(e) {
                function t(e) {
                    var n;
                    return a(this, t), n = s(this, d(t).call(this, e)), m(u(n), 'renderThumbnail', function(e) {
                        var t = n.video,
                            o = t.lastPlayInfo(),
                            a = Date.now() - o.issuedAt,
                            r = t.embedOptions().thumbnailAltText;
                        n._isVisible = n.shouldShow(), n.thumbnailElem = h(_(f['default'], i({}, n.props, {
                            backgroundColor: 'transparent' === t.embedOptions().wmode ? 'transparent' : void 0,
                            images: n.thumbnailAssets,
                            isVisible: n.shouldShow(),
                            onDisplay: e,
                            hashedId: n.video.hashedId(),
                            swatchEnabled: !t._opts.stillUrl && n._swatchEnabled,
                            uiHasRendered: n.video._impl.ui.hasRendered(),
                            fitStrategy: n.video._opts.fitStrategy,
                            thumbnailAltText: r
                        })), n.rootElem, n.thumbnailElem), n._isVisible && (n._hasRenderedVisible = !0), n._isVisible && 2e3 > a && setTimeout(function() {
                            n._destroyed || n.renderThumbnail()
                        }, 2e3 - a + 1), n.reactMounts = [n.rootElem, n.thumbnailElem]
                    }), n.unbinds.push(e.on('play', function() {
                        n._hasPlayed = !0, n.renderThumbnail()
                    }), e.on('playrejected', function() {
                        n.renderThumbnail()
                    }), e.on('playpending', function() {
                        n.renderThumbnail()
                    }), e.on('up', n.renderThumbnail), e.on('end', n.renderThumbnail)), n._swatchEnabled = e._opts.swatchEnabled ? e._opts.swatchEnabled : e._embedContainer.querySelector('.wistia_swatch'), n
                }
                return p(t, e), l(t, [{
                    key: 'mount',
                    value: function(e) {
                        var t = this;
                        if (this.rootElem = e, this.thumbnailAssets = this.video.thumbnailAssets(), !this.shouldShow()) return v.resolve();
                        var n = new v(function(e) {
                                return setTimeout(e, 1e3)
                            }),
                            o = new v(function(e) {
                                t.renderThumbnail(e), t.video.embedded(function() {
                                    t.__destroyed || t.renderThumbnail()
                                })
                            });
                        return v.race([o, n])
                    }
                }, {
                    key: 'shouldShow',
                    value: function() {
                        return Object(b['default'])(this.video)
                    }
                }, {
                    key: 'onControlPropsUpdated',
                    value: function(e) {
                        var t = this;
                        if (this._hasRenderedVisible) {
                            var n = ['videoWidth', 'videoHeight', 'playerLanguage'].some(function(n) {
                                return t.props[n] !== e[n]
                            });
                            n && this.renderThumbnail()
                        }
                    }
                }]), t
            }(y['default']);
        S.shouldShow = function() {
            return Object(b['default'])(this.video)
        }, S.handle = 'thumbnail', S.type = 'background', S.sortValue = 1e3, g['default'].defineControl(S);
        t['default'] = S
    },
    459: function(e, t, n) {
        'use strict';
        n.r(t);
        var p = n(2),
            m = n(450);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : s(e)
        }

        function s(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function d(e) {
            return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, d(e)
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }
        var g = function(e) {
            function t(e) {
                var n;
                return i(this, t), n = l(this, d(t).call(this, e)), n.showTime = !1, n
            }
            return u(t, e), r(t, [{
                key: 'isPlaceholder',
                value: function() {
                    return !1
                }
            }, {
                key: 'isVisible',
                value: function() {
                    return 'upper' === this.props.playbarMode
                }
            }]), t
        }(m['default']);
        g.shouldMount = function(e) {
            var t = e._opts.playbar;
            return !0 === t || null == t
        }, g.handle = 'upperPlaybar', g.type = 'upper-playbar', p['default'].defineControl(g);
        t['default'] = g
    },
    46: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'EMBED_SSL_ACCOUNT_IDS', function() {
            return o
        });
        n.d(t, 'isEmbedSslMedia', function() {
            return a
        });
        n.d(t, 'convertEmbedSslToAkamai', function() {
            return i
        });
        var o = [],
            a = function(e) {
                if (e.accountKey) return !1;
                for (var t, n = 0; n < o.length; n++)
                    if (t = o[n], e.accountKey === 'wistia-production_'.concat(t)) return !0;
                return !1
            },
            i = function e(t) {
                if (t.assets && !a(t))
                    for (var n, o = 0; o < t.assets.length; o++) n = t.assets[o], n.url && (n.url = n.url.replace(/^https:\/\/embed-ssl\.wistia\.com/, 'https://embedwistia-a.akamaihd.net'));
                return t.secondaryMediaData && e(t.secondaryMediaData), t
            }
    },
    460: function(e, t, n) {
        'use strict';
        n.r(t);
        var m = n(101),
            g = n(461),
            y = n(2);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : d(e)
        }

        function s(e) {
            return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, s(e)
        }

        function d(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var f = y['default'].lib('player/lib/elem'),
            b = f.elemBind,
            A = f.elemIsInside,
            _ = f.elemUnbind,
            v = f.formInputIsFocused,
            w = y['default'].lib('preact'),
            k = w.h,
            h = w.render,
            C = y['default'].lib('player/translations'),
            S = C.getTranslation,
            P = C.defineTranslations,
            E = y['default'].lib('utilities/detect'),
            T = E.cachedDetect,
            B = T(),
            x = y['default'].lib('promiscuous');
        P('en-US', {
            VOLUME_TITLE_WHEN_MUTED: 'Unmute',
            VOLUME_TITLE_WHEN_UNMUTED: 'Mute'
        });
        var D = function(e) {
            function t(e) {
                var n;
                return i(this, t), n = l(this, s(t).call(this, e)), p(d(n), 'onDragSliderStart', function(t, e) {
                    n.video.requestControls('volume-slider'), n.onDragSlider(t, e)
                }), p(d(n), 'onDragSlider', function(t, e) {
                    var o = n.video;
                    o.volume(e), o.isMuted() || 0 !== e || o.mute(), o.isMuted() && 0 < e && o.unmute()
                }), p(d(n), 'onDragSliderEnd', function(t, e) {
                    n.onDragSlider(t, e), n.video.releaseControls('volume-slider')
                }), p(d(n), 'onClickButton', function() {
                    B.touchScreen || n.toggleMute()
                }), p(d(n), 'onFocusInButton', function() {
                    n.video.enterInputContext('volume-button-focus')
                }), p(d(n), 'onFocusOutButton', function() {
                    n.video.exitInputContext('volume-button-focus')
                }), p(d(n), 'onMouseLeave', function() {
                    n.resolveLoading && (n.resolveLoading(), n.resolveLoading = null)
                }), p(d(n), 'onFocusSlider', function() {
                    n.video.enterInputContext('volume-slider-focus')
                }), p(d(n), 'onBlurSlider', function() {
                    n.video.exitInputContext('volume-slider-focus')
                }), p(d(n), 'onKeyUp', function(t) {
                    if (!(v() || t.eventHandled)) {
                        var e = n.video,
                            o = e.getInputContext();
                        ('player-mouseover' === o || 'player-focus' === o || 'volume-button-focus' === o || 'volume-slider-focus' === o) && t.keyCode === 77 && (e.isMuted() ? e.unmute() : e.mute())
                    }
                }), p(d(n), 'onKeyDown', function(t) {
                    if (!(v() || t.eventHandled)) {
                        var e = n.video,
                            o = e.getInputContext();
                        if ('player-mouseover' === o || 'player-focus' === o || 'volume-slider-focus' === o) {
                            var i = t.keyCode,
                                a = 0;
                            if (i === 38 ? a = 1 : i === 40 && (a = -1), 1 === a) {
                                var r = t.shiftKey ? .01 : .1;
                                e.volume(e.volume() + r)
                            } else if (-1 === a) {
                                var l = t.shiftKey ? .01 : .1;
                                e.volume(e.volume() - l)
                            }
                        }
                    }
                }), n.unbinds.push(e.on('volumechange', function() {
                    n.buttonRoot && n.buttonElem && n.renderButton(), n.dialogRoot && n.sliderElem && n.renderSlider()
                }), b(document, 'keyup', n.onKeyUp), b(document, 'keydown', n.onKeyDown)), n
            }
            return u(t, e), r(t, [{
                key: 'onControlPropsUpdated',
                value: function(e) {
                    this.dialog && this.dialog.isOpen() && this.renderSlider(), e.playerLanguage && this.props.playerLanguage.code !== e.playerLanguage.code && (this.renderButton(), this.dialog && this.dialog.isOpen() && this.renderSlider())
                }
            }, {
                key: 'mountButton',
                value: function(e) {
                    this.buttonRoot = e, this.renderButton()
                }
            }, {
                key: 'mountDialog',
                value: function(e) {
                    return this.dialogRoot = e, this.renderSlider()
                }
            }, {
                key: 'renderButton',
                value: function() {
                    this.buttonRoot && (this.setButtonLabel(this.video.isMuted() ? this.t('TITLE_WHEN_MUTED') : this.t('TITLE_WHEN_UNMUTED')), this.buttonElem = h(k(g['default'], {
                        volume: this.video.isMuted() ? 0 : this.video.volume()
                    }), this.buttonRoot, this.buttonElem), this.reactMounts.button = [this.buttonRoot, this.buttonElem])
                }
            }, {
                key: 't',
                value: function(e) {
                    return S(this.props.playerLanguage.code, 'VOLUME_'.concat(e))
                }
            }, {
                key: 'loadSliderCode',
                value: function() {
                    return Wistia.asyncRequire('vulcanV2Video/ui_components/VolumeSlider.js')
                }
            }, {
                key: 'renderSlider',
                value: function() {
                    var e = this;
                    if (this.dialogRoot && this.dialog.isOpen()) {
                        var t = this.props.scale,
                            n = this.loadSliderCode().then(function(n) {
                                e.sliderElem = h(k(n, {
                                    playerLanguage: e.props.playerLanguage,
                                    volume: e.video.isMuted() ? 0 : e.video.volume(),
                                    scale: t,
                                    onDragStart: e.onDragSliderStart,
                                    onDrag: e.onDragSlider,
                                    onDragEnd: e.onDragSliderEnd,
                                    onFocus: e.onFocusSlider,
                                    onBlur: e.onBlurSlider
                                }), e.dialogRoot, e.sliderElem), e.reactMounts.dialog = [e.dialogRoot, e.sliderElem]
                            });
                        return this.loading(new x(function(t) {
                            e.resolveLoading && e.resolveLoading(), e.resolveLoading = t, n.then(t)
                        })), n
                    }
                }
            }, {
                key: 'getButtonTitle',
                value: function() {
                    return 0 === this.video.volume() ? 'Unmute' : 'Mute'
                }
            }, {
                key: 'toggleMute',
                value: function() {
                    var e = this.video;
                    e.isMuted() ? (0 === e.volume() && e.volume(1), e.unmute()) : e.mute()
                }
            }]), t
        }(m['default']);
        D.shouldMount = function(e) {
            var t = e._opts.volumeControl;
            return (!0 === t || null == t) && !B.iphone && !B.ipad && !B.android
        }, D.handle = 'volumeButton', D.type = 'control-bar-right', D.sortValue = 100, D.toggleDialogOnHover = !0, y['default'].defineControl(D);
        t['default'] = D
    },
    461: function(e, t, n) {
        'use strict';
        n.r(t);
        var m = n(103),
            g = n(2);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i() {
            return i = Object.assign || function(e) {
                for (var t, n = 1; n < arguments.length; n++)
                    for (var o in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, i.apply(this, arguments)
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function l(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
        }

        function s(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : d(e)
        }

        function d(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function u(e) {
            return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, u(e)
        }

        function p(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }
        var y = g['default'].lib('preact'),
            f = y.h,
            h = y.render,
            b = y.Component,
            A = 'opacity 100ms',
            _ = function(e) {
                function t(e) {
                    var n;
                    return a(this, t), n = s(this, u(t).call(this, e)), n.state = {
                        volume: e.volume
                    }, n
                }
                return p(t, e), l(t, [{
                    key: 'waveCount',
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.props.volume;
                        return .55 < e ? 2 : 0 < e ? 1 : 0
                    }
                }, {
                    key: 'shouldComponentUpdate',
                    value: function(e) {
                        var t = this.waveCount(),
                            n = this.waveCount(e.volume);
                        return t !== n
                    }
                }, {
                    key: 'render',
                    value: function() {
                        var e = {
                            fill: 'none',
                            stroke: '#ffffff',
                            "stroke-line-cap": 'round',
                            "stroke-miterlimit": '10'
                        };
                        return f('svg', Object(m.standardSvgAttrs)(40, 34), f('g', {
                            style: this.speakerGroupStyle()
                        }, f('g', null, f('path', {
                            d: 'M13.8,14.2c-0.5,0.5-1.4,0.8-2,0.8h-1.6C9.5,15,9,15.5,9,16.2v1.6c0,0.7,0.5,1.2,1.2,1.2h1.6c0.7,0,1.6,0.4,2,0.8l2.3,2.3c0.5,0.5,0.8,0.3,0.8-0.4v-9.6c0-0.7-0.4-0.8-0.8-0.4L13.8,14.2z'
                        })), f('g', null, f('path', i({}, e, {
                            "stroke-width": '2',
                            d: 'M22,11.7c0,0,1.1,2.5,1.1,5s-1.1,5-1.1,5',
                            style: this.wave1Style()
                        })), f('path', i({}, e, {
                            "stroke-width": '2',
                            d: 'M25.8,9.2c0,0,1.7,3.8,1.7,7.5c0,3.7-1.7,7.5-1.7,7.5',
                            style: this.wave2Style()
                        }))), f('g', {
                            style: this.waveXStyle()
                        }, f('line', i({}, e, {
                            "stroke-width": '1.8102',
                            x1: '19.2',
                            y1: '15',
                            x2: '23.2',
                            y2: '19'
                        })), f('line', i({}, e, {
                            "stroke-width": '1.8102',
                            x1: '19.2',
                            y1: '19',
                            x2: '23.2',
                            y2: '15'
                        })))))
                    }
                }, {
                    key: 'speakerGroupStyle',
                    value: function() {
                        return {
                            transform: 'translateX('.concat(2 > this.waveCount() ? 3 : 1.25, 'px)'),
                            transition: 'transform 100ms'
                        }
                    }
                }, {
                    key: 'waveXStyle',
                    value: function() {
                        return {
                            opacity: 0 >= this.waveCount() ? 1 : 0,
                            transition: A
                        }
                    }
                }, {
                    key: 'wave1Style',
                    value: function() {
                        return {
                            opacity: 1 <= this.waveCount() ? 1 : 0,
                            transition: A
                        }
                    }
                }, {
                    key: 'wave2Style',
                    value: function() {
                        return {
                            opacity: 2 <= this.waveCount() ? 1 : 0,
                            transition: A
                        }
                    }
                }]), t
            }(b);
        t['default'] = _
    },
    462: function(e, t, n) {
        'use strict';
        n.r(t);
        var y = n(2),
            h = n(463);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : s(e)
        }

        function s(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function d(e, t, n) {
            return d = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var o = u(e, t);
                if (o) {
                    var i = Object.getOwnPropertyDescriptor(o, t);
                    return i.get ? i.get.call(n) : i.value
                }
            }, d(e, t, n || e)
        }

        function u(e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = p(e), null !== e););
            return e
        }

        function p(e) {
            return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, p(e)
        }

        function c(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && m(e, t)
        }

        function m(e, t) {
            return m = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, m(e, t)
        }

        function g(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var f = y['default'].lib('utilities/event_loop'),
            b = f.globalEventLoop,
            A = y['default'].lib('promiscuous'),
            _ = function(e) {
                function t() {
                    var e, n;
                    i(this, t);
                    for (var o = arguments.length, a = Array(o), r = 0; r < o; r++) a[r] = arguments[r];
                    return n = l(this, (e = p(t)).call.apply(e, [this].concat(a))), g(s(n), 'maybeFireStateAndTimeEvents', function() {
                        n.fireStateChangedEventsIfChanged(), n.fireTimeChangedEventsIfChanged()
                    }), g(s(n), 'onPause', function() {
                        n.maybeFireStateAndTimeEvents()
                    }), g(s(n), 'onPlaying', function() {
                        n._beforePlay = !1, n._ended = !1, n.maybeFireStateAndTimeEvents()
                    }), g(s(n), 'onEnded', function() {
                        n.maybeFireStateAndTimeEvents()
                    }), g(s(n), 'onAudioStreamChanged', function() {
                        n.impl.trigger('audiostreamchange')
                    }), g(s(n), 'onVolumeChange', function() {
                        var e = n.impl.isMuted();
                        n.impl.trigger('volumechange', n.impl.volume(), e), e !== n._isMuted && (n._isMuted = e, n.impl.trigger('mutechange', e))
                    }), g(s(n), 'onRateChange', function() {
                        n.impl.trigger('ratechange', n.impl.playbackRate())
                    }), g(s(n), 'onProgress', function(t) {
                        n.impl.trigger('progress', t)
                    }), g(s(n), 'onError', function(t) {
                        n.impl.trigger('error', t)
                    }), g(s(n), 'onSeeking', function(t) {
                        n.impl.trigger('seeking', t), n.engine.bind('seeked', function(t) {
                            return n.impl.trigger('seekcomplete', t), n.engine.unbind
                        })
                    }), g(s(n), 'onCustomWaiting', function(e) {
                        n._waiting = e, n.impl.trigger('waiting', e)
                    }), g(s(n), 'onCustomDoneWaiting', function(e) {
                        n._waiting = -1, n.impl.trigger('done-waiting', e)
                    }), g(s(n), 'fireTimeChangedEventsIfChanged', function() {
                        if (!n._destroyed) {
                            var e = n.impl,
                                t = e.time(),
                                o = t !== n._lastTimePosition,
                                i = 'beforeplay' === e.state() && .3 > t;
                            return o && 0 < t && !i && (n._ended = !1, e.trigger('timechange', t), Math.floor(t) !== Math.floor(n._lastTimePosition) && e.trigger('secondchange', Math.floor(t)), !n._beforePlay && !n._ended && Math.abs(t - n._lastTimePosition) > e._attrs.seekThreshold && e.trigger('seek', t, n._lastTimePosition), n._lastTimePosition = t), A.resolve()
                        }
                    }), n
                }
                return c(t, e), r(t, [{
                    key: 'init',
                    value: function() {
                        var e = this;
                        this.resetState(), this.impl.whenVideoElementInDom().then(function() {
                            return e.doInit()
                        })
                    }
                }, {
                    key: 'doInit',
                    value: function() {
                        var e = this,
                            t = this.impl,
                            n = t.engine;
                        this.unbinds.push(n.bind('pause', this.onPause), n.bind('playing', this.onPlaying), n.bind('ended', this.onEnded), n.bind('volumechange', this.onVolumeChange), n.bind('audiostreamchange', this.onAudioStreamChanged), n.bind('ratechange', this.onRateChange), n.bind('progress', this.onProgress), n.bind('custom-waiting', this.onCustomWaiting), n.bind('custom-done-waiting', this.onCustomDoneWaiting), n.bind('error', this.onError)), b.add(''.concat(t.uuid, '.events'), t._eventLoopDuration, function() {
                            if (!t.looksDown()) {
                                e.fireStateChangedEventsIfChanged(), e.fireTimeChangedEventsIfChanged();
                                var n = t.videoQuality();
                                n !== e._lastQuality && (t.trigger('qualitychange', n), e._lastQuality = n)
                            }
                        })
                    }
                }, {
                    key: 'destroy',
                    value: function() {
                        b.remove(''.concat(this.impl.uuid, '.events')), d(p(t.prototype), 'destroy', this).call(this)
                    }
                }, {
                    key: 'resetState',
                    value: function() {
                        this._waiting = -1, this._lastTimePosition = -1, this._beforePlay = !0, this._ended = !1, this._isMuted = this.impl.isMuted(), this._hasPlayed = !1
                    }
                }, {
                    key: 'fireStateChangedEventsIfChanged',
                    value: function() {
                        if (!this._destroyed) {
                            var e = this.impl,
                                t = e.state();
                            t !== this._lastState && (e.trigger('statechange', t, this._lastState), 'playing' === t && (this._hasPlayed = !0, this._ended = !1, e.trigger('play', e.lastPlayInfo())), 'paused' === t && e.trigger('pause', e.lastPauseInfo()), 'ended' === t && (this._ended = !0, e.trigger('end'), e.trigger('afterend')), 'ended' !== t && this.mozillaAtEnd() && (e.engine.pause(), this._ended = !0, e.trigger('end'), e.trigger('afterend')), this._lastState = t)
                        }
                    }
                }, {
                    key: 'mozillaAtEnd',
                    value: function() {
                        return !this._ended && y['default'].detect.browser.mozilla && 45 > y['default'].detect.browser.version && !y['default'].detect.edge && y['default'].detect.windows && .6 <= this._waiting && 2 > Math.abs(this.impl.time() - this.impl.duration())
                    }
                }]), t
            }(h.PlayerBehavior);
        _.handle = 'relayEvents';
        t['default'] = _
    },
    463: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'PlayerBehavior', function() {
            return r
        });

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function i(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function a(e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), e
        }
        var r = function() {
            function e(t) {
                o(this, e), this.impl = t, this.unbinds = [], this.namedUnbinds = {}
            }
            return a(e, [{
                key: 'addNamedUnbind',
                value: function(e, t) {
                    this.namedUnbinds[e] && this.namedUnbinds[e](), this.namedUnbinds[e] = t
                }
            }, {
                key: 'removeNamedUnbind',
                value: function(e) {
                    this.namedUnbinds[e] && (this.namedUnbinds[e](), delete this.namedUnbinds[e])
                }
            }, {
                key: 'destroy',
                value: function() {
                    for (var e in this.unbinds instanceof Array && this.unbinds.map(function(e) {
                            return e()
                        }), this.namedUnbinds) this.namedUnbinds.hasOwnProperty(e) && this.namedUnbinds[e].map(function(e) {
                        return e()
                    });
                    this.unbinds = [], this.namedUnbinds = {}, this.impl = null, this._destroyed = !0
                }
            }]), e
        }()
    },
    464: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'PlaySuspendedOffScreenBehavior', function() {
            return m
        });
        var p = n(463);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : s(e)
        }

        function s(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function d(e) {
            return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, d(e)
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }
        var m = function(e) {
            function t() {
                return i(this, t), l(this, d(t).apply(this, arguments))
            }
            return u(t, e), r(t, [{
                key: 'init',
                value: function() {
                    var e = this,
                        t = this.impl,
                        n = t.publicApi;
                    this.unbinds.push(n.on('enterviewport', function() {
                        t.inFullscreen() || e._isSuspended && (e._isSuspended = !1, n._playSuspendedOffScreenEnabled() && 'paused' === t.state() && t.play())
                    }), n.on('leaveviewport', function() {
                        t.inFullscreen() || !e._isSuspended && n._playSuspendedOffScreenEnabled() && 'playing' === t.state() && (t.pause(), e._isSuspended = !0)
                    }), t.on('receivepause', function() {
                        e._isSuspended && (e._isSuspended = !1)
                    }))
                }
            }]), t
        }(p.PlayerBehavior);
        m.handle = 'playSuspendedOffScreen'
    },
    465: function(e, t, n) {
        'use strict';
        n.r(t);
        var m = n(2),
            g = n(463);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : d(e)
        }

        function s(e) {
            return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, s(e)
        }

        function d(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var y = m['default'].lib('player/lib/elem'),
            h = y.elemAppend,
            f = y.elemFromObject,
            b = y.elemPrepend,
            A = y.pageLoaded,
            _ = m['default'].lib('player/lib/assets'),
            v = function(e) {
                function t() {
                    var e, n;
                    i(this, t);
                    for (var o = arguments.length, a = Array(o), r = 0; r < o; r++) a[r] = arguments[r];
                    return n = l(this, (e = s(t)).call.apply(e, [this].concat(a))), p(d(n), 'updateBackgroundColor', function() {
                        var e = n.impl;
                        if (e.videoWrapper && !e._replacing && e.embedded())
                            if ('transparent' === e._opts.wmode && !e.inFullscreen()) e.videoWrapper.style.backgroundColor = 'transparent';
                            else {
                                var t = e._attrs.playerBackgroundColor || e._opts.backgroundColor || '#000';
                                e.videoWrapper.style.backgroundColor = t || '#000'
                            }
                    }), n
                }
                return u(t, e), r(t, [{
                    key: 'init',
                    value: function() {
                        this.unbinds.push(this.impl.on('playerbackgroundcolorchange', this.updateBackgroundColor), this.impl.publicApi.on('transitiondone', this.updateBackgroundColor))
                    }
                }, {
                    key: 'embed',
                    value: function(e) {
                        var t = this,
                            n = this.impl,
                            o = n && n._opts.oldImpl;
                        n.oldImpl = o || e, o && o !== e ? (this.impl.on('engine-initialized', function() {
                            o.rebuild(), o.fullRebuild()
                        }), n.oldImpl = o) : n.oldImpl = e, n.resetStateVariables(), n.videoWrapper = f({
                            class: 'w-video-wrapper w-css-reset',
                            style: {
                                clip: 'rect(0,0,0,0)',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                width: '100%'
                            }
                        }), this.updateBackgroundColor(), b(n.implContainer(), n.videoWrapper), n.uiContainer || (n.uiContainer = f({
                            class: 'w-ui-container',
                            style: {
                                height: '100%',
                                pointerEvents: n._inNativeMode() ? 'none' : '',
                                left: 0,
                                position: 'absolute',
                                top: 0,
                                width: '100%'
                            }
                        }), h(n.implContainer(), n.uiContainer)), n.up(function() {
                            t._preloadPreference = t.preloadValue(), n._replacing && (t.initializeEngine(), n.info('embedded'), n.embedded(!0)), n.renderUI().then(function() {
                                try {
                                    n.setupBindings()
                                } catch (t) {
                                    setTimeout(function() {
                                        throw t
                                    }, 0)
                                }
                                m['default'].timeout(''.concat(n.uuid, '.finish_embedding'), function() {
                                    n.info('embedded'), n.embedded(!0), A(function() {
                                        t.initializeEngine()
                                    })
                                }, 0)
                            })
                        }), n.down() && n.embedded(!0)
                    }
                }, {
                    key: 'preloadValue',
                    value: function() {
                        var e, t = this.impl;
                        e = t._opts.autoPlay && !t.publicApi.popover && t.looksUp() ? 'auto' : null == t._opts.preload ? t._mediaData.preloadPreference : t._opts.preload;
                        var n;
                        if (t._mediaData.spherical) {
                            if (t._opts._inIframe) n = 'none';
                            else {
                                var o = [],
                                    i = m['default'].data('video');
                                for (var a in i) o.push(i[a]);
                                n = 1 < o.length ? 'none' : 'auto'
                            }
                        } else if ('metadata' === e) n = 'metadata';
                        else if (!0 === e || 'auto' === e) n = 'auto';
                        else if (!1 === e || 'none' === e) n = 'none';
                        else {
                            var r = [],
                                l = m['default'].data('video');
                            for (var s in l) r.push(l[s]);
                            n = t._opts._inIframe && top !== parent ? 'none' : t._opts._inIframe && 25 < m['default'].util.parentFramesLength() ? 'none' : t._opts._inIframe && (!window._allIframes || 2 < _allIframes.length) ? 'none' : !t._opts._inIframe && 2 < r.length ? 'none' : t._mediaData.stats && 5e3 < t._mediaData.stats.loadCount && .1 > t._mediaData.stats.uniquePlayCount / t._mediaData.stats.uniqueLoadCount ? 'none' : 'metadata'
                        }
                        return n
                    }
                }, {
                    key: 'rebuild',
                    value: function() {
                        var e = this.impl;
                        return e.info('rebuild'), e.embedded(function() {
                            e.embedded(!1), e.ready(!1), e.removeBehaviors(), e.enginePromise = null, e.engine = null, e._oldVideoElem = e.elem(), e._whenVideoElementInDom = null, e.stopStreaming(), m['default'].elem.remove(e.videoWrapper), e.videoWrapper = null, e.vulcanWrapper = null, e.ui = null, e._lastPlayType = null, e._lastPlaySource = null, e._lastPlayIssuedAt = null, e._lastPlayResolvedAt = null, e._lastPlayRejectedAt = null, e.wipeOutstandingAsyncFunctions(), e.setupBehaviors(), e.embed(), e.trigger('afterrebuild')
                        }), e
                    }
                }, {
                    key: 'checkForReady',
                    value: function() {
                        var e = this.impl;
                        e._checkDownState(), e.up(function() {
                            e.embedded(function() {
                                e.onDimensionChangeSafe(), e.engine && e.engine.onReady().then(function() {
                                    e.onDimensionChangeSafe(), e.ready(!0)
                                })
                            })
                        })
                    }
                }, {
                    key: 'initializeEngine',
                    value: function() {
                        var e = this,
                            t = this.impl;
                        if (t) {
                            if (t.enginePromise) return t.enginePromise;
                            var n = t.bestEngine();
                            return t.enginePromise = m['default'].asyncRequire(n).then(function(n) {
                                if (t.grid) try {
                                    t.engine = new n(t.videoWrapper, t._mediaData, e.engineAttributes(), t.oldImpl && t.oldImpl.engine), t.oldImpl = null, t.trigger('engine-initialized'), t.setupBindings(), e.checkForReady()
                                } catch (n) {
                                    t.error(n)
                                }
                            })
                        }
                    }
                }, {
                    key: 'engineAttributes',
                    value: function() {
                        var e, t = this.impl;
                        t._opts.videoQuality ? e = t._opts.videoQuality : (t._opts.videoFoam || 720 <= t.videoWidth()) && (e = 'md');
                        var n;
                        t._bandwidthTest().isFresh() && (n = t._bandwidthTest().savedResult().clientKbps);
                        var o;
                        if (t._mediaData.secondaryMediaData) o = m['default'].obj.clone(t._mediaData.secondaryMediaData);
                        else if (t._opts.secondaryVideoUrl) {
                            var i = m['default'].obj.clone(t._mediaData),
                                a = t.originalAsset();
                            i.assets = [{
                                container: 'mp4',
                                ext: 'mp4',
                                codec: 'x264',
                                public: !0,
                                url: t._opts.secondaryVideoUrl,
                                height: a.height,
                                width: a.width,
                                type: 'mp4_video',
                                display_name: ''.concat(_.numericSizeSnapped(a.width, a.height), 'p'),
                                status: _.READY,
                                created_at: new Date().getTime()
                            }], o = i
                        }
                        var r = t._opts.layoutTiming;
                        return t._opts.twoStroke && t._opts.twoStroke.layoutTiming && (r = t._opts.twoStroke.layoutTiming), {
                            backgroundColor: 'transparent' === t._opts.wmode ? 'transparent' : t.playerBackgroundColor(),
                            controls: t._inNativeMode(),
                            duration: t._mediaData.duration,
                            fitStrategy: t._opts.fitStrategy,
                            hashedId: t.hashedId(),
                            height: t.videoHeight(),
                            layoutTiming: r,
                            loop: 'loop' === t._opts.endVideoBehavior,
                            muted: t._muted,
                            playsinline: !0,
                            preload: this._preloadPreference,
                            qualityMax: t._attrs.qualityMax,
                            qualityMin: t._attrs.qualityMin,
                            savedBandwidth: n,
                            secondaryMediaData: o,
                            silentAutoPlay: t._opts.silentAutoPlay,
                            trimEnd: t._opts.trimEnd,
                            trimStart: t._opts.trimStart,
                            videoQuality: e,
                            volume: t._volume,
                            width: t.videoWidth()
                        }
                    }
                }]), t
            }(g.PlayerBehavior);
        v.handle = 'embed';
        t['default'] = v
    },
    466: function(e, t, n) {
        'use strict';
        n.r(t);
        var m = n(2),
            g = n(463);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : d(e)
        }

        function s(e) {
            return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, s(e)
        }

        function d(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var y = function(e) {
            function t() {
                var e, n;
                i(this, t);
                for (var o = arguments.length, a = Array(o), r = 0; r < o; r++) a[r] = arguments[r];
                return n = l(this, (e = s(t)).call.apply(e, [this].concat(a))), p(d(n), 'onPlay', function() {
                    if (null == n._startedLoadingAt) return n._startedLoadingAt = Date.now(), impl.unbind
                }), p(d(n), 'onProgress', function() {
                    var e = n.impl;
                    if (e.engine.anyBuffered()) return n._firstByteReceivedAt = Date.now(), null != n._startedLoadingAt && (n._timeToFirstByte = n._firstByteReceivedAt - n._startedLoadingAt), e.unbind
                }), p(d(n), 'onWaiting', function(e) {
                    var t = n.impl,
                        o = t.engine.anyBuffered();
                    n._noDataFor5Seconds || !(5 <= e) || o || (n._noDataFor5Seconds = !0, m['default'].Metrics.videoCount(t, 'player/no-data/5-seconds')), n._noDataFor10Seconds || !(10 <= e) || o || (n._noDataFor10Seconds = !0, m['default'].Metrics.videoCount(t, 'player/no-data/10-seconds')), n._noDataFor15Seconds || !(15 <= e) || o || (n._noDataFor15Seconds = !0, m['default'].Metrics.videoCount(t, 'player/no-data/15-seconds'))
                }), p(d(n), 'onClickedPlayBeforeReady', function() {
                    m['default'].Metrics.videoCount(n.impl, 'player/clicked-play-before-ready')
                }), n
            }
            return u(t, e), r(t, [{
                key: 'init',
                value: function() {
                    var e = this;
                    this.impl.whenVideoElementInDom().then(function() {
                        return e.doInit()
                    })
                }
            }, {
                key: 'doInit',
                value: function() {
                    var e = this.impl;
                    e.engine && e.engine.getPreload() && (this._startedLoadingAt = Date.now()), this.unbinds.push(e.on('play', this.onPlay), e.on('progress', this.onProgress), e.on('waiting', this.onWaiting), e.on('clicked-play-before-ready', this.onClickedPlayBeforeReady))
                }
            }]), t
        }(g.PlayerBehavior);
        y.handle = 'metrics';
        t['default'] = y
    },
    467: function(e, t, n) {
        'use strict';
        n.r(t);
        var p = n(2),
            m = n(463);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : s(e)
        }

        function s(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function d(e) {
            return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, d(e)
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }
        var g = function(e) {
            function t() {
                return i(this, t), l(this, d(t).apply(this, arguments))
            }
            return u(t, e), r(t, [{
                key: 'init',
                value: function() {
                    var e = this,
                        t = this.impl;
                    t.embedded(function() {
                        e.bandwidthTest().isFresh() ? (e._supportsHd = e.bandwidthTest().savedResult().supportsHd, e.impl.whenVideoElementInDom().then(function() {
                            e.impl.engine.setAttributes({
                                supportsHd: e._supportsHd
                            })
                        })) : e.hdAsset() && null != !e._supportsHd && e.unbinds.push(t.on('play', function() {
                            return e.doBandwidthTest(), t.unbind
                        }))
                    })
                }
            }, {
                key: 'bandwidthTest',
                value: function() {
                    return this._bandwidthTest ? this._bandwidthTest : (this._bandwidthTest = new p['default'].BandwidthTest({
                        timeoutLength: 4e3,
                        uuid: this.impl.uuid,
                        saveKey: 'vulcan.bandwidth'
                    }), this._bandwidthTest)
                }
            }, {
                key: 'doBandwidthTest',
                value: function() {
                    var e = this,
                        t = this.impl;
                    t.info('doBandwidthTest'), this._endBandwidthTestEarly || (this._endBandwidthTestEarly = function() {
                        t.info('_endBandwidthTestEarly'), e.bandwidthTest().endEarly(), p['default'].Metrics.videoCount(t, 'player/bandwidth_test/ended_early')
                    });
                    var n = ['seek', 'pause', 'end', 'switched-to-asset-without-load'];
                    n.map(function(n) {
                        e.unbinds.push(t.on(n, e._endBandwidthTestEarly))
                    }), this._failBandwidthTestOnWaiting || (this._failBandwidthTestOnWaiting = function() {
                        return t.info('_failBandwidthTestOnWaiting'), e.bandwidthTest().fail(), p['default'].Metrics.videoCount(t, 'player/bandwidth_test/failed'), t.unbind
                    }), this.unbinds.push(t.on('waiting', this._failBandwidthTestOnWaiting)), this._endBandwidthTestOnTime = function() {
                        t.info('_endBandwidthTestOnTime'), e._supportsHd = e.bandwidthTest().supportsHd(), t.engine.setAttributes({
                            supportsHd: !0
                        }), e._failBandwidthTestOnWaiting && t.unbind('waiting', e._failBandwidthTestOnWaiting), e._endBandwidthTestEarly && n.map(function(n) {
                            t.unbind(n, e._endBandwidthTestEarly)
                        }), p['default'].Metrics.videoCount(t, 'player/bandwidth_test/ended_on_time')
                    }, this.bandwidthTest().bind('ended', this._endBandwidthTestOnTime), this.bandwidthTest().start()
                }
            }, {
                key: 'supportsHd',
                value: function() {
                    return !!this.hdAsset() && (null == this._supportsHd || this._supportsHd)
                }
            }, {
                key: 'hdAsset',
                value: function() {
                    if (this._hdAsset) return this._hdAsset;
                    var e = this.impl;
                    return this._hdAsset = e.playableAssetInRange({
                        width: [980, e._opts.maxHdWidth || 2e3],
                        sortBy: 'width desc, bitrate desc'
                    }), this._hdAsset
                }
            }]), t
        }(m.PlayerBehavior);
        g.handle = 'bandwidthTest';
        t['default'] = g
    },
    468: function(e, t, n) {
        'use strict';
        n.r(t);
        var m = n(2),
            g = n(463);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : d(e)
        }

        function s(e) {
            return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, s(e)
        }

        function d(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var y = m['default'].lib('utilities/detect'),
            h = y.cachedDetect,
            f = m['default'].lib('utilities/globalBindAndTrigger'),
            b = f.globalOn,
            A = f.globalTrigger,
            _ = m['default'].lib('player/lib/elem'),
            v = _.elemBind,
            w = _.elemCancelFullscreen,
            k = _.elemHeight,
            C = _.elemRebind,
            S = _.elemRemove,
            P = _.elemRequestFullscreen,
            E = _.elemStyle,
            T = _.elemUnbind,
            B = _.elemWidth,
            x = _.fullscreenElement,
            D = _.inUserEventContext,
            F = h(),
            I = function(e) {
                function t() {
                    var e, n;
                    i(this, t);
                    for (var o = arguments.length, a = Array(o), r = 0; r < o; r++) a[r] = arguments[r];
                    return n = l(this, (e = s(t)).call.apply(e, [this].concat(a))), p(d(n), 'onEnterFullscreen', function(e) {
                        var t = n.impl;
                        e === t.chrome ? (t.info('_onEnterFullscreen'), t.trigger('before-enter-fullscreen'), n._hasBeenInFullscreen = !0, n._inFullscreen = !0, t.notFullscreen(!1), n.injectFullscreenStyles(), t.behaviors.embed.updateBackgroundColor(), t.width(B(window), {
                            fullscreen: !0,
                            dontChangeContainer: !0
                        }), t.height(k(window), {
                            fullscreen: !0,
                            dontChangeContainer: !0
                        }), t.engine && t.engine.onEnterFullscreen(), t.trigger('enter-fullscreen')) : t.elem().webkitDisplayingFullscreen && (n._hasBeenInFullscreen = !0, n._inFullscreen = !0, n._nativeFullscreen = !0, t.notFullscreen(!1), t.trigger('enter-fullscreen'))
                    }), p(d(n), 'onCancelFullscreen', function() {
                        var e = n.impl;
                        n._nativeFullscreen ? (n._nativeFullscreen = !1, n._inFullscreen = !1, e.notFullscreen(!0), e.trigger('cancel-fullscreen')) : n._inFullscreen && (e.info('onCancelFullscreen'), n._inFullscreen = !1, e.notFullscreen(!0), n.removeFullscreenStyles(), e.behaviors.embed.updateBackgroundColor(), e.width(n._widthBeforeFullscreen), e.height(n._heightBeforeFullscreen), e.fit(), e.engine && e.engine.onLeaveFullscreen(), e.trigger('cancel-fullscreen'))
                    }), p(d(n), 'onOrientationChange', function() {
                        var e = n.impl;
                        if (n.fullscreenResizeToWindowFlurry(), -90 === window.orientation || 90 === window.orientation) {
                            if ('playing' !== e.state() || e.engine.isMuted()) return;
                            e.requestFullscreen()
                        } else e.cancelFullscreen()
                    }), p(d(n), 'fullscreenResizeToWindowFlurry', function() {
                        var e = n.impl;
                        n.fullscreenResizeToWindow(), [0, 50, 100, 200, 300, 500, 1e3].forEach(function(t) {
                            m['default'].timeout(''.concat(e.uuid, '.fs-resize-flurry-').concat(t), n.fullscreenResizeToWindow, t)
                        })
                    }), p(d(n), 'fullscreenResizeToWindow', function() {
                        var e = n.impl;
                        if (e.inFullscreen() && !n._nativeFullscreen) {
                            e.debug('fullscreenResizeToWindow');
                            var t = e.width(),
                                o = e.height(),
                                i = B(window),
                                a = k(window);
                            t !== i && e.width(i, {
                                fullscreen: !0,
                                dontChangeContainer: !0
                            }), o !== a && e.height(a, {
                                fullscreen: !0,
                                dontChangeContainer: !0
                            })
                        }
                    }), p(d(n), 'maybeAutoFullscreen', function() {
                        var e = n.impl._inNativeMode() && !1 === n.impl._opts.playsinline && D() && !n._hasAutoFullscreened;
                        e && (n._hasAutoFullscreened = !0, n.requestFullscreen())
                    }), n
                }
                return u(t, e), r(t, [{
                    key: 'init',
                    value: function() {
                        var e = this,
                            t = this.impl;
                        this.unbinds.push(b('enter-fullscreen', this.onEnterFullscreen), b('cancel-fullscreen', this.onCancelFullscreen), v(window, 'resize', function() {
                            e.fullscreenResizeToWindowFlurry()
                        }), t.on('playpending', this.maybeAutoFullscreen)), t.whenVideoElementInDom().then(function() {
                            t.engine.bind('webkitbeginfullscreen', e.onEnterFullscreen), t.engine.bind('webkitendfullscreen', e.onCancelFullscreen)
                        }), this.getIsFullscreenOnRotateToLandscape() && (window.screen.orientation ? this.unbinds.push(v(window.screen.orientation, 'change', this.onOrientationChange)) : this.unbinds.push(v(window, 'orientationchange', this.onOrientationChange)))
                    }
                }, {
                    key: 'injectFullscreenStyles',
                    value: function() {
                        if (!this._fullscreenStyle) {
                            document.body.id || (this._docBodyId = m['default'].seqId('wistia_', '_tmp_body_id'), document.body.setAttribute('id', this._docBodyId));
                            var e = '\n      #'.concat(document.body.id, ', #').concat(document.body.id, ' :full-screen-ancestor {\n        animation-name: none;\n        -webkit-animation-name: none;\n        transform: none;\n        -webkit-transform: none;\n      }\n    ');
                            ['webkit', 'moz', 'ms', 'o'].map(function(t) {
                                e += '\n      #'.concat(document.body.id, ' :-').concat(t, '-full-screen-ancestor {\n        animation-name: none;\n        -webkit-animation-name: none;\n        transform: none;\n        -webkit-transform: none;\n      }\n      ') + '\n'
                            }), this._fullscreenStyle = m['default'].css(this.impl.wrapperElem, e)
                        }
                    }
                }, {
                    key: 'removeFullscreenStyles',
                    value: function() {
                        this._fullscreenStyle && (this._docBodyId && document.body.id === this._docBodyId && (document.body.removeAttribute('id'), this._docBodyId = null), S(this._fullscreenStyle), this._fullscreenStyle = null)
                    }
                }, {
                    key: 'requestFullscreen',
                    value: function() {
                        if (!(this.impl._opts._inIframe && /two_stroke/i.test(this.impl.bestEngine()))) {
                            var e = this.impl;
                            e.inFullscreen() || (e.info('requestFullscreen'), this._widthBeforeFullscreen = e.width(), this._heightBeforeFullscreen = e.height(), e.width(e.width()), e._inNativeMode() ? e.engine && e.engine.requestFullscreen() : F.fullscreenEnabled ? P(e.chrome) : this.getAllowFakeFullscreen() ? this.enterFakeFullscreen() : e.engine && ('beforeplay' === e.state() && (F.iphone || F.ipad) && e.engine.play().then(function() {
                                return e.engine.pause()
                            }), e.engine && e.engine.requestFullscreen()))
                        }
                    }
                }, {
                    key: 'cancelFullscreen',
                    value: function() {
                        var e = this.impl;
                        e.inFullscreen() && (e.info('cancelFullscreen'), e._inNativeMode() ? e.engine.cancelFullscreen() : F.fullscreenEnabled ? w() : this.getAllowFakeFullscreen() ? this.cancelFakeFullscreen() : e.engine.cancelFullscreen())
                    }
                }, {
                    key: 'getAllowFakeFullscreen',
                    value: function() {
                        return !this.impl._opts._inIframe && 10 <= F.ios.version && (this.impl._opts.fakeFullscreen || /two_stroke/i.test(this.impl.bestEngine()))
                    }
                }, {
                    key: 'getIsFullscreenOnRotateToLandscape',
                    value: function() {
                        if (!F.touchScreen) return !1;
                        if (0 < F.ios.version && 10 > F.ios.version) return !1;
                        var e = this.impl._opts.fullscreenOnRotateToLandscape;
                        return null == e || e
                    }
                }, {
                    key: 'enterFakeFullscreen',
                    value: function() {
                        var e = this.impl;
                        this._widthBeforeFullscreen = e.width(), this._heightBeforeFullscreen = e.height(), this._inFakeFullscreen = !0, this._chromeParent = e.chrome.parentNode, document.body.appendChild(e.chrome), this._leftOffsetBeforeFullscreen = m['default'].util.scrollLeft(), this.onEnterFullscreen(e.chrome), this.setupFakeFullscreenBindings(), E(e.chrome, {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            zIndex: 2147483647
                        }), m['default'].util.scrollLeft(0), e.engine && e.engine.onEnterFullscreen()
                    }
                }, {
                    key: 'setupFakeFullscreenBindings',
                    value: function() {
                        var e = this,
                            t = this.impl;
                        m['default'].eventLoop.add(''.concat(t.uuid, '.fakefullscreen'), 100, function() {
                            e.fullscreenResizeToWindow()
                        }), this._preventDefaultForTouchMove || (this._preventDefaultForTouchMove = function(e) {
                            e.preventDefault()
                        }), C(t.vulcanWrapper, 'touchmove', this._preventDefaultForTouchMove)
                    }
                }, {
                    key: 'cancelFakeFullscreen',
                    value: function() {
                        var e = this.impl;
                        this._inFakeFullscreen = !1, this.onCancelFullscreen(e.chrome), this._chromeParent && this._chromeParent.appendChild(e.chrome), e.chrome.style.position = '', m['default'].util.scrollLeft(this._leftOffsetBeforeFullscreen), m['default'].eventLoop.remove(''.concat(e.uuid, '.fakefullscreen')), e.engine && e.engine.onLeaveFullscreen(), null != this._preventDefaultForTouchMove && T(e.vulcanWrapper, 'touchmove', this._preventDefaultForTouchMove)
                    }
                }, {
                    key: 'transferStateFrom',
                    value: function(e) {
                        var t = this,
                            n = e.behaviors && e.behaviors.fullscreen;
                        if (n)
                            for (var o in n) {
                                if (n.hasOwnProperty(o)) {
                                    var i = n[o];
                                    '_' === o[0] && 'function' != typeof i && (this[o] = i)
                                }
                                n._inFullscreen && function() {
                                    var e = t.impl;
                                    e.notFullscreen(function() {
                                        e.width(t._widthBeforeFullscreen), e.height(t._heightBeforeFullscreen)
                                    })
                                }()
                            }
                    }
                }, {
                    key: 'inFullscreen',
                    value: function() {
                        return !!this._inFullscreen
                    }
                }, {
                    key: 'inNativeFullscreen',
                    value: function() {
                        return !!this._nativeFullscreen
                    }
                }]), t
            }(g.PlayerBehavior);
        I.handle = 'fullscreen', m['default']._onFullscreenChange || (m['default']._onFullscreenChange = function() {
            x() ? A('enter-fullscreen', x()) : A('cancel-fullscreen')
        }, m['default']._initializers.initFullscreenTriggers = function() {
            C(document, 'mozfullscreenchange', m['default']._onFullscreenChange), C(document, 'webkitfullscreenchange', m['default']._onFullscreenChange), C(document, 'MSFullscreenChange', m['default']._onFullscreenChange), C(document, 'fullscreenchange', m['default']._onFullscreenChange)
        }, m['default']._destructors.destroyFullscreenTriggers = function() {
            T(document, 'mozfullscreenchange', m['default']._onFullscreenChange), T(document, 'webkitfullscreenchange', m['default']._onFullscreenChange), T(document, 'MSFullscreenChange', m['default']._onFullscreenChange), T(document, 'fullscreenchange', m['default']._onFullscreenChange)
        });
        t['default'] = I
    },
    469: function(e, t, n) {
        'use strict';
        n.r(t);
        var f = n(2),
            b = n(470),
            A = n(471),
            _ = n(472),
            v = n(319),
            w = n(463);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i() {
            return i = Object.assign || function(e) {
                for (var t, n = 1; n < arguments.length; n++)
                    for (var o in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, i.apply(this, arguments)
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function l(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
        }

        function s(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : d(e)
        }

        function d(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function u(e, t, n) {
            return u = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var o = p(e, t);
                if (o) {
                    var i = Object.getOwnPropertyDescriptor(o, t);
                    return i.get ? i.get.call(n) : i.value
                }
            }, u(e, t, n || e)
        }

        function p(e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = c(e), null !== e););
            return e
        }

        function c(e) {
            return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, c(e)
        }

        function m(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && g(e, t)
        }

        function g(e, t) {
            return g = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, g(e, t)
        }

        function y(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var k = f['default'].lib('promiscuous'),
            C = f['default'].lib('utilities/seqid'),
            S = f['default'].lib('preact'),
            P = S.h,
            h = S.render,
            E = S.Component,
            T = f['default'].lib('utilities/isMouseDown'),
            B = T.isMouseDown,
            x = f['default'].lib('player/lib/fit-control'),
            D = x.controlMultiplierBasedOnVideo,
            F = f['default'].lib('utilities/detect'),
            I = F.cachedDetect,
            M = f['default'].lib('player/lib/timeout-utils'),
            O = M.doTimeout,
            L = M.clearTimeouts,
            R = f['default'].lib('utilities/obj'),
            H = R.assign,
            W = R.clone,
            j = f['default'].lib('player/translations'),
            V = j.getDefaultTranslation,
            N = f['default'].lib('player/lib/elem'),
            U = N.addInlineCss,
            Q = N.elemBind,
            G = N.elemUnbind,
            z = N.elemIsInside,
            q = N.elemOffset,
            Y = N.elemRemove,
            K = N.elemStyle,
            J = N.formInputIsFocused,
            X = I(),
            Z = 34,
            $ = 40,
            ee = 16,
            te = function(e) {
                function t() {
                    var e, n;
                    a(this, t);
                    for (var o = arguments.length, i = Array(o), r = 0; r < o; r++) i[r] = arguments[r];
                    return n = s(this, (e = c(t)).call.apply(e, [this].concat(i))), y(d(n), 'onFocusComplete', function() {
                        n.impl.trigger('focuscomplete')
                    }), y(d(n), 'onFocusIn', function(t) {
                        if (!X.trident) {
                            if ((B() || n._isMouseDownFromTouch) && t.srcElement === n.vulcanWrapper) return void t.srcElement.blur();
                            var e = n.isKeyboardFocused;
                            n.isKeyboardFocused = !(B() || n._isMouseDownFromTouch), !e && n.isKeyboardFocused && (n.impl.trigger('focusin', t), n.maybeToggleControls(), n.impl.enterInputContext('player-focus'))
                        }
                    }), y(d(n), 'onFocusOut', function(t) {
                        X.trident || (n.isKeyboardFocused ? O(''.concat(n.impl.uuid, '.maybe_toggle_on_blur'), function() {
                            document.activeElement && z(document.activeElement, n.vulcanWrapper) || (n.isKeyboardFocused = !1, n.impl.trigger('focusout', t), n.impl.exitInputContext('player-focus'), n.maybeToggleControls())
                        }, 1e3) : O(''.concat(n.impl.uuid, '.maybe_toggle_on_blur'), n.maybeToggleControls, 50))
                    }), y(d(n), 'onMouseEnter', function(t) {
                        n.impl.trigger('mouseenter', t), n.isHovering = !0, n.maybeToggleControls(), n.impl.enterInputContext('player-mouseover')
                    }), y(d(n), 'onMouseLeave', function(t) {
                        n.impl.trigger('mouseleave', t), n.isHovering = !1, n.maybeToggleControls(), n.impl.exitInputContext('player-mouseover')
                    }), y(d(n), 'onMouseMove', function(t) {
                        if (!X.touchScreen) {
                            var e = n.lastPageX !== t.pageX || n.lastPageY !== t.pageY;
                            e && (n.lastMovedMouseAt = Date.now(), n.lastPageX = t.pageX, n.lastPageY = t.pageY), e && (n.maybeToggleControls(), n.shouldShowControls() && (clearTimeout(n.maybeToggleControlsTimeout), z(t.target, n.backgroundElem) ? (n.lastMouseMoveWasFromBackground = !0, n.maybeToggleControlsTimeout = setTimeout(n.maybeToggleControls, n.showControlsTimeout())) : (n.lastMouseMoveWasFromBackground = !1, n.maybeToggleControls())))
                        }
                    }), y(d(n), 'onClickOrTap', function(t) {
                        n.lastMovedMouseAt = Date.now(), n.lastPageX = t.pageX, n.lastPageY = t.pageY, z(t.target, n.backgroundElem) ? X.touchScreen ? (n.isBeforePlayOrReset() ? n.impl.play() : n.isChromeless() ? n.togglePlay() : X.ios.version && 10.1 > X.ios.version ? (n.tappedToHide = !1, n.impl.play()) : n._areControlsVisible ? n.tappedToHide = !n.tappedToHide : n.tappedToHide = !1, n.maybeToggleControls(), setTimeout(n.maybeToggleControls, n.showControlsTimeout())) : n.togglePlay() : (n.tappedToHide = !1, n.maybeToggleControls(), setTimeout(n.maybeToggleControls, n.showControlsTimeout()))
                    }), y(d(n), 'onDblClick', function(t) {
                        if (z(t.target, n.backgroundElem)) {
                            var e = n.impl;
                            n.impl.isControlEnabled('fullscreenButton') && (e.inFullscreen() ? e.cancelFullscreen() : e.requestFullscreen())
                        }
                    }), y(d(n), 'onTouchStart', function() {
                        n._cancelSwipe = !n.impl.inFullscreen()
                    }), y(d(n), 'onSwipe', function(t, e) {
                        if (!n._cancelSwipe) {
                            n._swipeCtx = e;
                            var o = n.impl,
                                i = o.height(),
                                a = o.width(),
                                r = e.absYDelta / i,
                                l = e.absXDelta / a;
                            if (175 < e.timeDelta && (.02 > r || l > r)) return n._cancelSwipe = !0, void f['default'].elem.animate(o.chrome, {
                                transform: 'translate(0, 0)'
                            }, {
                                time: 200,
                                callback: function() {
                                    f['default'].elem.animate(o.chrome, {
                                        transform: ''
                                    })
                                }
                            });
                            if (.02 <= r && r > l) {
                                var s = e.yDelta / i;
                                f['default'].elem.style(o.chrome, {
                                    transform: 'translate(0, '.concat(-1 * s * i, 'px)')
                                })
                            }
                        }
                    }), y(d(n), 'onPinch', function(t, e) {
                        if (n.impl.isControlEnabled('fullscreenButton')) {
                            n._pinchCtx = e;
                            var o, i, a = n.impl;
                            n.impl.inFullscreen() ? (o = .3, i = 2.5) : (o = .8, i = 2.5), e.pinchScale *= 1 > e.pinchScale ? 1 + .5 * (1 - e.pinchScale) : 1 + .25 * (e.pinchScale - 1);
                            var r = Math.max(o, Math.min(i, e.pinchScale));
                            f['default'].elem.style(a.chrome, {
                                transform: 'scale('.concat(r, ')')
                            })
                        }
                    }), y(d(n), 'onTouchEnd', function() {
                        if (n.impl.isControlEnabled('fullscreenButton')) {
                            var e = n._pinchCtx,
                                t = n._swipeCtx;
                            n._pinchCtx = null, n._swipeCtx = null;
                            var o = n.impl;
                            if (e) !o.inFullscreen() && 1.5 < e.pinchScale ? (f['default'].elem.style(o.chrome, {
                                transform: ''
                            }), o.requestFullscreen()) : o.inFullscreen() && .7 > e.pinchScale ? (f['default'].elem.style(o.chrome, {
                                transform: ''
                            }), o.cancelFullscreen()) : f['default'].elem.animate(o.chrome, {
                                transform: 'scale(1)'
                            }, {
                                time: 400,
                                callback: function() {
                                    f['default'].elem.style(o.chrome, {
                                        transform: ''
                                    })
                                }
                            });
                            else if (t) {
                                var i = o.height(),
                                    a = o.width(),
                                    r = t.absYDelta / i,
                                    l = t.absXDelta / a,
                                    s = function() {
                                        f['default'].elem.style(o.chrome, {
                                            transform: ''
                                        })
                                    };
                                if (.16 < r && r > l && 500 > Date.now() - t.startedAt) {
                                    n._cancelSwipe = !0;
                                    var d = 0 < t.yDelta ? -1 : 1;
                                    f['default'].elem.animate(o.chrome, {
                                        transform: 'translate(0, '.concat(d * i, 'px)')
                                    }, {
                                        time: 200,
                                        callback: function() {
                                            o.cancelFullscreen(), s()
                                        }
                                    })
                                } else n._cancelSwipe = !0, f['default'].elem.animate(o.chrome, {
                                    transform: 'translate(0, 0)'
                                }, {
                                    time: 200,
                                    callback: s
                                })
                            }
                        }
                    }), y(d(n), 'maybeToggleControls', function() {
                        if (!n._destroyed) {
                            var e = n._shouldShowControls;
                            return n._shouldShowControls = n.shouldShowControls(), e === n._shouldShowControls ? k.resolve() : n.lastRenderPromise.then(function() {
                                return n.render()
                            })
                        }
                    }), y(d(n), 'mountRefsFn', function(e) {
                        H(n.mountRefs, e)
                    }), y(d(n), 'backgroundRefFn', function(t) {
                        n.backgroundElem = t
                    }), n
                }
                return m(t, e), l(t, [{
                    key: 'init',
                    value: function() {
                        var e = this;
                        this.mountPromises = [], this.controls = {}, this.controlsByType = {}, this.dialogs = [], this.mountRefs = {}, this.buttonMountRefs = {}, this.lastRenderPromise = k.resolve(), this.lastMouseMoveWasFromBackground = !0, V().then(function(t) {
                            var n = e.impl.publicApi;
                            n && !n._wasPlayerLanguageSetViaApi && e.impl.playerLanguage(t.code)
                        }), this.domId || (this.domId = C('w-vulcan-v2-'))
                    }
                }, {
                    key: 'setupBindings',
                    value: function() {
                        var e = this,
                            t = this.impl;
                        this.unbinds.push(t.on('play', function() {
                            e.doneWaitingForPlay = !0, e.tappedToHide = !1, e.render(), e.maybeToggleControls(), setTimeout(e.maybeToggleControls, e.showControlsTimeout())
                        }), t.on('pause', function() {
                            X.touchScreen && (e.tappedToHide = !1, e.maybeToggleControls())
                        }), t.on('playrejected', function() {
                            e.doneWaitingForPlay = !0, e.showVideoWrapper(), e.render()
                        }), t.on('enter-fullscreen', function() {
                            e._scale = null, e.cachedVideoHeight = null, e.cachedVideoWidth = null, e.render(), e.lastMouseMoveWasFromBackground = !0, e.maybeToggleControls(), O(''.concat(e.impl.uuid, '.maybe_toggle_on_fullscreen'), e.maybeToggleControls, e.showControlsTimeout())
                        }), t.on('cancel-fullscreen', function() {
                            e._scale = null, e.cachedVideoHeight = null, e.cachedVideoWidth = null, e.render(), e.lastMouseMoveWasFromBackground = !0, e.maybeToggleControls(), O(''.concat(e.impl.uuid, '.maybe_toggle_on_fullscreen'), e.maybeToggleControls, e.showControlsTimeout())
                        }), t.on('up', function() {
                            e._scale = null, e.cachedVideoHeight = null, e.cachedVideoWidth = null, e.render()
                        }), t.on('playerlanguagechange', function() {
                            e.render()
                        }), t.on('playercolorchange', function() {
                            e.render()
                        }), t.on('widthchange', function() {
                            e._scale = null, e.cachedVideoWidth = null, e.render()
                        }), t.on('heightchange', function() {
                            e._scale = null, e.cachedVideoHeight = null, e.render()
                        }), f['default'].on('controldefined', function() {
                            e.render()
                        }), Q(document, 'keyup', function(n) {
                            J() || 'player-mouseover' === t.getInputContext() && !1 !== t._opts.hoverHotkeysEnabled && n.keyCode === 32 && e.togglePlay()
                        }), Q(window, 'mouseout', function(t) {
                            var n = t.relatedTarget || t.toElement;
                            n && 'HTML' !== n.nodeName || (e.isHovering = !1, e.impl.exitInputContext('player-mouseover'))
                        }), Q(document, 'touchend', function() {
                            B() && (e._isMouseDownFromTouch = !0), setTimeout(function() {
                                e._isMouseDownFromTouch = !1, e.render()
                            }, 50)
                        }), Q(window, 'languagechange', function() {
                            V().then(function(t) {
                                var n = e.impl.publicApi,
                                    o = e.impl.playerLanguage().code !== t.code;
                                n && !n._wasPlayerLanguageSetViaApi && o && e.impl.playerLanguage(t.code)
                            })
                        })), t.whenVideoElementInDom().then(function() {
                            e.unbinds.push(e.impl.engine.bind('webkitplaybacktargetavailabilitychanged', function() {
                                setTimeout(function() {
                                    e.render()
                                }, 0)
                            }))
                        })
                    }
                }, {
                    key: 'render',
                    value: function() {
                        var e = this,
                            t = this.impl;
                        if (this._destroyed || !t.grid) return new k(function() {});
                        if (this._hasSetupBindings || (this._hasSetupBindings = !0, this.setupBindings()), this.cssResetStyle || (this.cssResetStyle = U(t.uiContainer, this.cssResetContent())), null == this.doneWaitingForPlay) {
                            var n = t._isPlayPending && 'beforeplay' === t.state();
                            this.doneWaitingForPlay = !n
                        }
                        return this.lastRenderPromise = new k(function(n) {
                            var o = e.setupControls(),
                                i = o.newControls,
                                a = o.existingControls;
                            e.setControlProps();
                            var r = null == e._shouldShowControls ? e.shouldShowControls() : e._shouldShowControls;
                            e._areControlsVisible = e._shouldShowControls;
                            e.vulcanWrapper = h(P(b['default'], {
                                afterRender: 0 < i.length ? function() {
                                    e.afterRender(a, i, n)
                                } : null,
                                allMounted: e.allMounted,
                                backgroundRef: e.backgroundRefFn,
                                controlsByType: e.controlsByType,
                                domId: e.domId,
                                doneWaitingForPlay: e.doneWaitingForPlay,
                                fullControlBarHeight: e.fullControlBarHeight(),
                                inFullscreen: t.inFullscreen(),
                                inNativeMode: e.inNativeMode(),
                                isMouseDownFromTouch: e._isMouseDownFromTouch,
                                lowerControlBarHeight: e.lowerControlBarHeight(),
                                mountRefs: e.mountRefsFn,
                                onClickOrTap: e.onClickOrTap,
                                onDblClick: e.onDblClick,
                                onFocusComplete: e.onFocusComplete,
                                onFocusIn: e.onFocusIn,
                                onFocusOut: e.onFocusOut,
                                onMouseEnter: e.onMouseEnter,
                                onMouseLeave: e.onMouseLeave,
                                onMouseMove: e.onMouseMove,
                                onPinch: e.onPinch,
                                onSwipe: e.onSwipe,
                                onTouchEnd: e.onTouchEnd,
                                onTouchStart: e.onTouchStart,
                                playbarMode: e.playbarMode(),
                                playerLanguage: t.playerLanguage(),
                                shouldShowControls: r,
                                upperControlBarHeight: e.upperControlBarHeight(),
                                videoHeight: e.videoHeight(),
                                videoState: t.state(),
                                videoWidth: e.videoWidth()
                            }), t.uiContainer, e.vulcanWrapper), 0 === i.length && e.afterRender(a, i, n)
                        })
                    }
                }, {
                    key: 'afterRender',
                    value: function(e, t, n) {
                        var o = this;
                        if (!this._destroyed && this.impl.grid)
                            if (this.runOnControlPropsUpdated(e), this.renderButtons(e), this.mountControls(t), this.didFirstRender) n();
                            else {
                                this.didFirstRender = !0;
                                var i = new k(function(e) {
                                    return O(''.concat(o.impl.uuid, '.two_seconds_elapsed'), e, 2e3)
                                });
                                this.allMountedPromise = k.race([i, k.all(this.mountPromises)]).catch(function(t) {
                                    setTimeout(function() {
                                        throw t
                                    }, 0)
                                }).then(function() {
                                    o.allMounted = !0, o.render().then(n)
                                }), 0 === this.mountPromises.length && n(), this.doneWaitingForPlay ? this.allMountedPromise.then(function() {
                                    o.showVideoWrapper()
                                }) : (O(''.concat(this.impl.uuid, '.bail_on_autoplay'), function() {
                                    o.doneWaitingForPlay || (o.doneWaitingForPlay = !0, o.showVideoWrapper(), o.render())
                                }, 2e3), this.showVideoWrapperAfterInitialPlay())
                            }
                    }
                }, {
                    key: 'setControlProps',
                    value: function() {
                        var e = this,
                            t = this.impl,
                            n = this.videoWidth(),
                            o = this.videoHeight(),
                            i = this.scale(),
                            a = t.playerLanguage(),
                            r = this.shouldShowControls(),
                            l = this.anyDialogOpen(),
                            s = this.isChromeless(),
                            d = this.isHovering,
                            u = this.vulcOffset = q(t.grid.center),
                            p = this.bottomBarOffset = {
                                left: u.left,
                                top: u.top + this.videoHeight() - this.lowerControlBarHeight()
                            },
                            c = this.controlsByType['upper-playbar'] && this.controlsByType['upper-playbar'][0];
                        c && (c.__prevProps = c.props, c.props = {
                            anyDialogOpen: l,
                            chromeless: s,
                            scale: i,
                            videoWidth: n,
                            videoHeight: o,
                            controlsAreVisible: r,
                            playerLanguage: a,
                            width: n,
                            height: ee * i,
                            left: 0,
                            top: p.top
                        });
                        var m = 0,
                            g = 0;
                        (this.controlsByType['control-bar-left'] || []).map(function(e) {
                            e.__prevProps = e.props, e.props = {
                                anyDialogOpen: l,
                                chromeless: s,
                                scale: i,
                                playerLanguage: a,
                                controlsAreVisible: r,
                                videoWidth: n,
                                videoHeight: o,
                                height: Math.round((e.constructor.height || Z) * i),
                                width: Math.round((e.constructor.width || $) * i),
                                left: g
                            }, g += e.props.width, m += e.props.width
                        }), this.leftControlWidth = g, (this.controlsByType['control-bar-right'] || []).map(function(e) {
                            e.__prevProps = e.props, e.props = {
                                anyDialogOpen: l,
                                chromeless: s,
                                scale: i,
                                playerLanguage: a,
                                controlsAreVisible: r,
                                videoWidth: n,
                                videoHeight: o,
                                height: Math.round((e.constructor.height || Z) * i),
                                width: Math.round((e.constructor.width || $) * i)
                            }, m += e.props.width
                        });
                        var y = 0;
                        (this.controlsByType['control-bar-right'] || []).slice().reverse().map(function(e) {
                            y += e.props.width, e.props.left = n - y
                        }), this.rightControlWidth = y;
                        var h = n - m,
                            f = this.controlsByType['lower-playbar'] && this.controlsByType['lower-playbar'][0];
                        f && (f.__prevProps = f.props, f.props = {
                            anyDialogOpen: l,
                            chromeless: s,
                            scale: i,
                            playerLanguage: a,
                            videoWidth: n,
                            videoHeight: o,
                            controlsAreVisible: r,
                            width: h,
                            height: this.lowerControlBarHeight(),
                            left: g
                        }), this.lowerPlaybarControlWidth = h;
                        var b = this.fullControlBarHeight();
                        ['background', 'foreground', 'left-flyout', 'above-control-bar', 'right-flyout'].map(function(t) {
                            (e.controlsByType[t] || []).map(function(e) {
                                e.__prevProps = e.props, e.props = {
                                    anyDialogOpen: l,
                                    playerLanguage: a,
                                    chromeless: s,
                                    scale: i,
                                    videoHeight: o,
                                    videoWidth: n,
                                    controlBarHeight: b,
                                    controlsAreVisible: r,
                                    isHoveringOnPlayer: d
                                }
                            })
                        });
                        var A = this.playbarMode();
                        c ? (this.upperPlaybarControlHeight = 'upper' === this.playbarMode() ? c.props.height || 0 : 0, c.props.playbarMode = A) : this.upperPlaybarControlHeight = 0;
                        var _ = p.top + this.upperPlaybarControlHeight;
                        this.eachButtonControl(function(e) {
                            e.props.top = _
                        }), f && H(f.props, {
                            playbarMode: A,
                            top: _
                        })
                    }
                }, {
                    key: 'runOnControlPropsUpdated',
                    value: function(e) {
                        e.forEach(function(e) {
                            e.constructor.type;
                            if ('function' == typeof e.onControlPropsUpdated) try {
                                e.onControlPropsUpdated(e.__prevProps || {})
                            } catch (t) {
                                setTimeout(function() {
                                    throw t
                                }, 0)
                            }
                            e.__prevProps = null
                        })
                    }
                }, {
                    key: 'setupControls',
                    value: function() {
                        var e = this,
                            t = this.impl,
                            n = !1,
                            o = [];
                        for (var i in this.controls) {
                            var a = this.controls[i],
                                r = a.constructor.shouldMount;
                            if (t.isControlDisabled(i) || r && !r(t.publicApi)) {
                                if (a.destroy) try {
                                    a.destroy()
                                } catch (t) {
                                    setTimeout(function() {
                                        throw t
                                    }, 1)
                                }
                                a.__destroyed = !0, delete this.mountRefs[i], delete this.buttonMountRefs[i], delete this.controls[oe(a)], n = !0, o.push(a), t.trigger('controldestroyed', i)
                            }
                        }
                        var l = !1,
                            s = [],
                            d = [],
                            u = function(n) {
                                var o = f['default']._controlDefinitions[n],
                                    i = null != e.controls[n],
                                    a = !t.isControlDisabled(n) && (null == o.shouldMount || o.shouldMount(t.publicApi));
                                if (a && i && d.push(e.controls[n]), !i && a) {
                                    try {
                                        var r = e.controls[n] = new o(t);
                                        r.mounted = new k(function(e) {
                                            r.__didMount = function() {
                                                r.mounted.isResolved = !0, t.trigger('controlmounted', n), e()
                                            }
                                        }), s.push(r)
                                    } catch (t) {
                                        setTimeout(function() {
                                            throw t
                                        }, 1)
                                    }
                                    l = !0
                                }
                            };
                        for (var p in f['default']._controlDefinitions) u(p);
                        if (l || n) {
                            var c = {};
                            for (var m in this.eachControl(function(e) {
                                    var t = e.constructor.type;
                                    null == c[t] && (c[t] = []), c[t].push(e)
                                }), c) c[m].sort(function(e, t) {
                                return (e.constructor.sortValue || 0) - (t.constructor.sortValue || 0)
                            });
                            this.controlsByType = c, t.publicApi.controls = t.controls = this.controls
                        }
                        return {
                            newControls: s,
                            existingControls: d,
                            destroyedControls: o
                        }
                    }
                }, {
                    key: 'whenControlMounted',
                    value: function(e) {
                        var t = this;
                        return new k(function(o) {
                            var n = t.controls[e];
                            n && n.mounted ? n.mounted.then(function() {
                                o(n)
                            }) : t.impl.bind('controlmounted', function(i) {
                                if (i === e) return o(t.controls[e]), t.impl.unbind
                            })
                        })
                    }
                }, {
                    key: 'mountControls',
                    value: function(e) {
                        var t = this;
                        e.forEach(function(e) {
                            var n = e.constructor.type,
                                o = oe(e),
                                i = t.mountRefs[o];
                            if (e.__nextControl || (e.__nextControl = function() {
                                    return t.getControlAfter(e)
                                }), e.loading || (e.loading = function(o) {
                                    var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                                    return 'control-bar-right' === n ? t.renderButtonWithDialogLoader(e, o) : t.renderHourglassLoader(o, i)
                                }), 'control-bar-left' !== n && 'control-bar-right' !== n) t.mountControl(e, function() {
                                return e.mount(i)
                            });
                            else if (e.mountButton) {
                                var a = t.renderButtonWithDialog(e);
                                t.mountControl(e, function() {
                                    return e.mountButton(a)
                                })
                            } else e.mount && t.mountControl(e, function() {
                                return e.mount(i)
                            })
                        })
                    }
                }, {
                    key: 'mountControl',
                    value: function(e, t) {
                        try {
                            var n = oe(e),
                                o = t();
                            o && o.then && o.catch ? (o.handle = n, this.mountPromises.push(o), o.then(function() {
                                e.__didMount()
                            })) : e.__didMount()
                        } catch (t) {
                            setTimeout(function() {
                                throw t
                            }, 0)
                        }
                    }
                }, {
                    key: 'renderButtons',
                    value: function(e) {
                        var t = this;
                        e.forEach(function(e) {
                            e.mountButton && t.renderButtonWithDialog(e)
                        })
                    }
                }, {
                    key: 'renderButtonWithDialog',
                    value: function(t) {
                        var e = this,
                            n = oe(t);
                        try {
                            t.mountDialog && !t.dialog && (t.dialog = new A['default'](this, {
                                dialogWillOpen: ne(t.controlDialogWillOpen, t),
                                dialogOpened: ne(t.controlDialogOpened, t),
                                dialogWillClose: ne(t.controlDialogWillClose, t),
                                dialogClosed: ne(t.controlDialogClosed, t),
                                control: t
                            }), this.dialogs.push(t.dialog))
                        } catch (t) {
                            setTimeout(function() {
                                throw t
                            }, 0)
                        }
                        t.setButtonLabel || (t.setButtonLabel = function(n) {
                            t.__buttonLabel = n, e.renderButtonWithDialog(t)
                        });
                        var o;
                        return this.buttonMountRefs[n] = h(P(_['default'], i({}, t.props, {
                            buttonLabel: t.__buttonLabel,
                            color: this.impl.playerColor(),
                            key: ''.concat(n, '_button_and_dialog'),
                            control: t,
                            stubRef: function(t) {
                                return o = t
                            },
                            buttonRef: function(n) {
                                t.buttonElement = n
                            },
                            closeDialogOnFocusOut: this.impl._opts.closeDialogsOnFocusOut
                        })), this.mountRefs[n], this.buttonMountRefs[n]), o
                    }
                }, {
                    key: 'renderButtonWithDialogLoader',
                    value: function(e, t) {
                        var n = this;
                        return new k(function(o) {
                            var i = ''.concat(n.impl.uuid, '.loading_dialog_indicator.').concat(C());
                            O(i, function() {
                                n.setLoadingDialogAndRender(e, !0), X.touchScreen ? Q(document, 'touchstart', function() {
                                    try {
                                        n.setLoadingDialogAndRender(e, !1)
                                    } catch (t) {
                                        setTimeout(function() {
                                            throw t
                                        }, 0)
                                    }
                                    return o(), G
                                }) : Q(document, 'mousedown', function() {
                                    try {
                                        n.setLoadingDialogAndRender(e, !1)
                                    } catch (t) {
                                        setTimeout(function() {
                                            throw t
                                        }, 0)
                                    }
                                    return o(), G
                                })
                            }, 300), t.then(function() {
                                L(i), n.setLoadingDialogAndRender(e, !1), o()
                            })
                        })
                    }
                }, {
                    key: 'setLoadingDialogAndRender',
                    value: function(e, t) {
                        e.__isDialogLoading = t, this.renderButtonWithDialog(e)
                    }
                }, {
                    key: 'renderHourglassLoader',
                    value: function(e, t) {
                        var n = this;
                        return new k(function(o) {
                            var i = ''.concat(n.impl.uuid, '.loading_indicator.').concat(C());
                            O(i, function() {
                                n.controls.loadingHourglass.show(t), X.touchScreen ? Q(document, 'touchstart', function() {
                                    try {
                                        n.controls.loadingHourglass.hide()
                                    } catch (t) {
                                        setTimeout(function() {
                                            throw t
                                        }, 0)
                                    }
                                    return o(), G
                                }) : Q(document, 'mousedown', function() {
                                    try {
                                        n.controls.loadingHourglass.hide()
                                    } catch (t) {
                                        setTimeout(function() {
                                            throw t
                                        }, 0)
                                    }
                                    return o(), G
                                })
                            }, 300), e.then(function() {
                                L(i), n.controls.loadingHourglass.hide(), o()
                            })
                        })
                    }
                }, {
                    key: 'eachControl',
                    value: function(e) {
                        for (var t in this.controls) e(this.controls[t])
                    }
                }, {
                    key: 'eachButtonControl',
                    value: function(e) {
                        var t = (this.controlsByType['control-bar-left'] || []).concat(this.controlsByType['control-bar-right'] || []);
                        t.forEach(e)
                    }
                }, {
                    key: 'playbarMode',
                    value: function() {
                        return 260 > this.spaceForLowerPlaybar() ? 'upper' : 'lower'
                    }
                }, {
                    key: 'spaceForLowerPlaybar',
                    value: function() {
                        var e = 0;
                        return this.eachButtonControl(function(t) {
                            e += t.props.width
                        }), this.videoWidth() - e
                    }
                }, {
                    key: 'lowerControlBarHeight',
                    value: function() {
                        return Math.round(Z * this.scale())
                    }
                }, {
                    key: 'upperControlBarHeight',
                    value: function() {
                        return this.impl.isControlEnabled('upperPlaybar') ? 'upper' === this.playbarMode() ? Math.round(ee * this.scale()) : 0 : 0
                    }
                }, {
                    key: 'fullControlBarHeight',
                    value: function() {
                        var e = this.impl;
                        return this.isBeforePlayOrReset() && !e._opts.controlsVisibleOnLoad || this.isChromeless() ? 0 : this.lowerControlBarHeight() + this.upperControlBarHeight()
                    }
                }, {
                    key: 'isBeforePlayOrReset',
                    value: function() {
                        var e = this.impl;
                        return 'beforeplay' === e.state() || e._opts && 'reset' === e._opts.endVideoBehavior && 'ended' === e.state()
                    }
                }, {
                    key: 'shouldShowControls',
                    value: function() {
                        var e, t = this.impl;
                        return e = !this.isChromeless() && (this.isBeforePlayOrReset() && this.doneWaitingForPlay ? null == t._opts.controlsVisibleOnLoad || !0 === t._opts.controlsVisibleOnLoad : !!this.hasRequestedControlsVisible() || (X.touchScreen ? !this.tappedToHide && (!!('playing' !== t.state() || this.anyDialogOpen()) || !!(this.lastMovedMouseAt && 3e3 > Date.now() - this.lastMovedMouseAt && this.lastMovedMouseAt > t.lastPlayInfo().issuedAt)) : !!this.anyDialogOpen() || !!this.isKeyboardFocused || !!(t.inFullscreen() || this.isHovering) && (!!(this.lastMovedMouseAt && 3e3 > Date.now() - this.lastMovedMouseAt) || !this.lastMouseMoveWasFromBackground))), e
                    }
                }, {
                    key: 'hasRequestedControlsVisible',
                    value: function() {
                        var e = this.impl._visibilityRequests;
                        for (var t in e)
                            if (e[t]) return !0;
                        return !1
                    }
                }, {
                    key: 'showControlsTimeout',
                    value: function() {
                        return this.impl.inFullscreen() || X.touchScreen ? 3e3 : 5e3
                    }
                }, {
                    key: 'togglePlay',
                    value: function() {
                        var e = this.impl;
                        'playing' === e.state() ? e.pause() : e.play()
                    }
                }, {
                    key: 'showVideoWrapperAfterInitialPlay',
                    value: function() {
                        var e = this;
                        this.impl.ready(function() {
                            var t = [e.impl._playPromise, e.impl._seekPromise].filter(function(e) {
                                return null != e
                            });
                            return k.all(t).then(function() {
                                e.showVideoWrapper()
                            })
                        })
                    }
                }, {
                    key: 'showVideoWrapper',
                    value: function() {
                        K(this.impl.videoWrapper, {
                            clip: ''
                        })
                    }
                }, {
                    key: 'anyDialogOpen',
                    value: function() {
                        for (var e in this.controls) {
                            var t = this.controls[e];
                            if (t.dialog && !t.constructor.toggleDialogOnHover && t.dialog.isOpen()) return !0
                        }
                        return !1
                    }
                }, {
                    key: 'openDialog',
                    value: function(e) {
                        this.dialogs.map(function(t) {
                            t !== e && t.close()
                        }), this.render()
                    }
                }, {
                    key: 'closeDialog',
                    value: function() {
                        this.render()
                    }
                }, {
                    key: 'resizeDialog',
                    value: function() {
                        this.render()
                    }
                }, {
                    key: 'videoWidth',
                    value: function() {
                        return null == this.cachedVideoWidth ? this.cachedVideoWidth = this.impl.videoWidth() : this.cachedVideoWidth
                    }
                }, {
                    key: 'videoHeight',
                    value: function() {
                        return null == this.cachedVideoHeight ? this.cachedVideoHeight = this.impl.videoHeight() : this.cachedVideoHeight
                    }
                }, {
                    key: 'scale',
                    value: function() {
                        return null == this._scale ? 'auto' === this.impl.controlScaling() ? this._scale = Math.min(1.3, Math.max(.6, D(this.impl))) : this.impl.controlScaling() : this._scale
                    }
                }, {
                    key: 'destroy',
                    value: function() {
                        for (var e in this.buttonMountRefs) this.buttonMountRefs.hasOwnProperty(e) && h(P('nothing', null), this.mountRefs[e], this.buttonMountRefs[e]);
                        this.vulcanWrapper = h(P('nothing', null), this.impl.uiContainer, this.vulcanWrapper), this.eachControl(function(e) {
                            if (e.destroy) try {
                                e.destroy()
                            } catch (t) {
                                setTimeout(function() {
                                    throw t
                                }, 0)
                            }
                            e.__destroyed = !0
                        }), this.unbinds.forEach(function(e) {
                            return e()
                        }), Y(this.vulcanWrapper), Y(this.cssResetStyle), this.cssResetStyle = null;
                        var n = f['default'].lib('preact').components;
                        for (var o in n) n.hasOwnProperty(o) && delete n[o];
                        u(c(t.prototype), 'destroy', this).call(this)
                    }
                }, {
                    key: 'getControlAfter',
                    value: function(e) {
                        var t = e.constructor.type,
                            n = this.controlsByType[t],
                            o = n.indexOf(e),
                            i = n[o + 1];
                        return 'control-bar-left' === t && (!i && this.controlsByType['lower-playbar'] && (i = this.controlsByType['lower-playbar'][0]), !i && this.controlsByType['control-bar-right'] && (i = this.controlsByType['control-bar-right'][0])), i
                    }
                }, {
                    key: 'hasAnyVideoChromeControls',
                    value: function() {
                        for (var e in this.controls) {
                            var t = this.controls[e];
                            if (t.constructor.isVideoChrome) return !0
                        }
                        return !1
                    }
                }, {
                    key: 'hasRequestedChromeless',
                    value: function() {
                        var e = this.impl._visibilityRequests;
                        for (var t in e)
                            if (!1 === e[t]) return !0;
                        return !1
                    }
                }, {
                    key: 'isChromeless',
                    value: function() {
                        return this.inNativeMode() || this.impl._opts.chromeless || this.hasRequestedChromeless() || !this.hasAnyVideoChromeControls()
                    }
                }, {
                    key: 'inNativeMode',
                    value: function() {
                        var e = this.impl._opts;
                        return !0 === e.nativeMode || X.ipad && X.ios.version && 10.1 > X.ios.version || !1 === e.playsinline && (X.ipad || X.iphone || X.android) && !/two_stroke/.test(this.impl.bestEngine())
                    }
                }, {
                    key: 'cssResetContent',
                    value: function() {
                        var e = '#'.concat(this.impl.chrome.id, ' #').concat(this.impl.grid.wrapper.id),
                            t = Object(v.cssResetForSelector)(''.concat(e, ' '), '.w-css-reset'),
                            n = Object(v.cssResetForSelector)(''.concat(e, ' .w-css-reset-tree '), '');
                        return '\n      '.concat(t, '\n      ').concat(n, '\n      ').concat(e, ' .w-css-reset-max-width-none-important{max-width:none!important}\n      ').concat(e, ' .w-css-reset-button-important{border-radius:0!important;color:#fff!important;}\n    ')
                    }
                }, {
                    key: 'hasRendered',
                    value: function() {
                        return !!this.allMounted
                    }
                }]), t
            }(w.PlayerBehavior);
        te.handle = 'ui';
        var ne = function(e, t) {
                return e ? e.bind(t) : null
            },
            oe = function(e) {
                return e.constructor.handle
            };
        t['default'] = te
    },
    47: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'overpassFontFamily', function() {
            return o
        });
        n.d(t, 'overpassHeavyItalicFontFamily', function() {
            return i
        });
        n.d(t, 'overpassNumbers', function() {
            return a
        });
        n.d(t, 'overpassExtraBoldFontFamily', function() {
            return r
        });
        n.d(t, 'overpassSemiBoldFontFamily', function() {
            return l
        });
        var o = 'WistiaPlayerOverpass, Helvetica, Sans-Serif',
            i = 'WistiaPlayerOverpassHeavyItalic, Helvetica, Sans-Serif',
            a = 'WistiaPlayerOverpassNumbers, Helvetica, Sans-Serif',
            r = 'WistiaPlayerOverpassExtraBold, Helvetica, Sans-Serif',
            l = 'WistiaPlayerOverpassSemiBold, Helvetica, Sans-Serif'
    },
    470: function(e, t, n) {
        'use strict';
        n.r(t);
        var m = n(2),
            g = n(315),
            y = n(161);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : d(e)
        }

        function s(e) {
            return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, s(e)
        }

        function d(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var f = m['default'].lib('preact'),
            b = f.h,
            h = f.render,
            A = f.Component,
            _ = m['default'].lib('player/translations'),
            v = _.getTranslation,
            w = _.defineTranslations,
            k = m['default'].lib('utilities/detect'),
            C = k.cachedDetect,
            S = m['default'].lib('player/lib/elem'),
            P = S.elemHasClass,
            E = S.elemAncestorHasClass,
            T = m['default'].lib('utilities/isMouseDown'),
            B = T.isMouseDown,
            x = T.isMouseDownRecently,
            D = C();
        w('en-US', {
            LAYOUT_TITLE: 'Video'
        });
        var F = function(e) {
                function t(e) {
                    var n;
                    return i(this, t), n = l(this, s(t).call(this, e)), p(d(n), 'onClickOrTap', function(t) {
                        x() && n.setState({
                            isKeyboardFocused: !1
                        }), n.props.onClickOrTap && n.props.onClickOrTap(t)
                    }), p(d(n), 'onFocus', function() {
                        n.props.isMouseDownFromTouch || x() || n.setState({
                            isKeyboardFocused: !0
                        }), n.props.onFocusComplete()
                    }), p(d(n), 'onBlur', function() {
                        n.state.isKeyboardFocused && n.setState({
                            isKeyboardFocused: !1
                        })
                    }), p(d(n), 'onFocusIn', function(t) {
                        n.props.onFocusIn && n.props.onFocusIn(t)
                    }), p(d(n), 'onFocusOut', function(t) {
                        n.props.onFocusOut && n.props.onFocusOut(t)
                    }), p(d(n), 'onClick', function(t) {
                        if (I(t) && t.preventDefault(), n.props.onClick) return n.props.onClick(t)
                    }), p(d(n), 'onTouchEnd', function(t) {
                        if (n.props.onTouchEnd) return n.props.onTouchEnd(t)
                    }), n.state = {
                        areControlsOpaque: e.shouldShowControls,
                        areControlsDisplayNone: !e.shouldShowControls,
                        isKeyboardFocused: !1
                    }, n
                }
                return u(t, e), r(t, [{
                    key: 'componentWillReceiveProps',
                    value: function(e) {
                        this.handleControlBarAnimation(e)
                    }
                }, {
                    key: 'render',
                    value: function() {
                        var t = this;
                        return this.mountRefs = {}, b(y['default'], {
                            class: 'w-vulcan-v2 w-css-reset',
                            style: this.wrapperStyle(),
                            onFocus: this.onFocus,
                            onBlur: this.onBlur,
                            onFocusIn: this.props.onFocusIn,
                            onFocusOut: this.props.onFocusOut,
                            onMouseEnter: this.props.onMouseEnter,
                            onMouseLeave: this.props.onMouseLeave,
                            onMouseMove: this.props.onMouseMove,
                            onClickOrTap: this.onClickOrTap,
                            onDblClick: this.props.onDblClick,
                            onSwipe: this.props.onSwipe,
                            onPinch: this.props.onPinch,
                            onTouchStart: this.props.onTouchStart,
                            onTouchMove: this.props.onTouchMove,
                            onTouchEnd: this.onTouchEnd,
                            onClick: this.onClick,
                            id: this.props.domId,
                            role: 'region',
                            "aria-label": this.t('TITLE'),
                            tabindex: 0
                        }, b('div', {
                            class: 'w-vulcan--background w-css-reset',
                            style: this.backgroundStyle(),
                            ref: this.props.backgroundRef
                        }, this.renderControlCells('background')), b('div', {
                            class: 'w-vulcan-overlays-table w-css-reset',
                            style: this.layoutTableStyle()
                        }, b('div', {
                            class: 'w-vulcan-overlays--left w-css-reset',
                            style: this.tdLeftStyle()
                        }, b('div', {
                            style: this.tdLayoutInnerStyle(),
                            class: 'w-css-reset'
                        }, this.renderControlCells('left-flyout', {
                            height: '100%',
                            pointerEvents: 'auto'
                        }))), b('div', {
                            class: 'w-vulcan-overlays--center w-css-reset',
                            style: this.tdCenterStyle()
                        }, b('div', {
                            style: this.tdLayoutInnerStyle(),
                            class: 'w-css-reset'
                        }, this.renderControlCells('above-control-bar', {
                            pointerEvents: 'auto'
                        }))), b('div', {
                            class: 'w-vulcan-overlays--right w-css-reset',
                            style: this.tdRightStyle()
                        }, b('div', {
                            style: this.tdLayoutInnerStyle(),
                            class: 'w-css-reset'
                        }, this.renderControlCells('right-flyout', {
                            height: '100%',
                            pointerEvents: 'auto'
                        })))), b('div', {
                            class: 'w-bottom-bar w-css-reset',
                            style: this.bottomBarStyle(),
                            ref: function(n) {
                                return t.bottomBar = n
                            }
                        }, b('div', {
                            class: 'w-bottom-bar-upper w-css-reset',
                            style: this.upperPlaybarStyle()
                        }, this.renderControlCells('upper-playbar', {
                            height: '100%'
                        })), b('div', {
                            class: 'w-bottom-bar-lower w-css-reset'
                        }, b('div', {
                            class: 'w-bottom-bar-left w-css-reset',
                            style: this.bottomBarLeftStyle()
                        }, b('div', {
                            class: 'w-bottom-bar-left-inner w-css-reset',
                            style: this.bottomBarLeftInnerStyle()
                        }, this.renderControlCells('control-bar-left', {
                            display: 'inline-block',
                            verticalAlign: 'top'
                        }))), b('div', {
                            class: 'w-bottom-bar-middle w-css-reset',
                            style: this.bottomBarMiddleStyle()
                        }, b('div', {
                            class: 'w-bottom-bar-middle-inner w-css-reset',
                            style: this.bottomBarMiddleInnerStyle()
                        }, this.renderControlCells('lower-playbar', {
                            height: '100%'
                        }))), b('div', {
                            class: 'w-bottom-bar-right w-css-reset',
                            style: this.bottomBarRightStyle()
                        }, b('div', {
                            class: 'w-bottom-bar-right-inner w-css-reset',
                            style: this.bottomBarRightInnerStyle()
                        }, this.renderControlCells('control-bar-right', {
                            display: 'inline-block',
                            verticalAlign: 'top'
                        }))))), b('div', {
                            class: 'w-foreground w-css-reset',
                            style: this.foregroundStyle()
                        }, this.renderControlCells('foreground', {
                            pointerEvents: 'auto'
                        })), b('div', {
                            class: 'w-focus-border',
                            style: this.focusBorderStyle()
                        }))
                    }
                }, {
                    key: 'componentDidMount',
                    value: function() {
                        this.props.mountRefs && this.props.mountRefs(this.mountRefs), this.props.afterRender && this.props.afterRender()
                    }
                }, {
                    key: 'componentDidUpdate',
                    value: function() {
                        var e = this.props.mountRefs,
                            t = this.mountRefs,
                            n = this.props.afterRender;
                        setTimeout(function() {
                            e && e(t), n && n()
                        }, 1)
                    }
                }, {
                    key: 'wrapperStyle',
                    value: function() {
                        var e = this.props.inFullscreen && !this.props.shouldShowControls;
                        return {
                            boxSizing: 'border-box',
                            cursor: e ? 'none' : 'default',
                            height: '100%',
                            left: 0,
                            pointerEvents: this.props.inNativeMode ? 'none' : '',
                            position: 'absolute',
                            visibility: this.props.allMounted && this.props.doneWaitingForPlay ? 'visible' : 'hidden',
                            top: 0,
                            width: '100%'
                        }
                    }
                }, {
                    key: 'foregroundStyle',
                    value: function() {
                        return {
                            height: '100%',
                            left: 0,
                            pointerEvents: 'none',
                            position: 'absolute',
                            top: 0,
                            width: '100%'
                        }
                    }
                }, {
                    key: 'backgroundStyle',
                    value: function() {
                        return {
                            height: '100%',
                            left: 0,
                            pointerEvents: this.props.inNativeMode ? 'none' : '',
                            position: 'absolute',
                            top: 0,
                            width: '100%'
                        }
                    }
                }, {
                    key: 'layoutTableStyle',
                    value: function() {
                        return {
                            display: 'table',
                            pointerEvents: 'none',
                            position: 'absolute',
                            width: '100%'
                        }
                    }
                }, {
                    key: 'tdLeftStyle',
                    value: function() {
                        return this.standardCellStyle(0)
                    }
                }, {
                    key: 'tdCenterStyle',
                    value: function() {
                        return this.standardCellStyle('100%')
                    }
                }, {
                    key: 'tdRightStyle',
                    value: function() {
                        return this.standardCellStyle(0)
                    }
                }, {
                    key: 'tdLayoutInnerStyle',
                    value: function() {
                        return {
                            height: ''.concat(this.props.videoHeight - this.props.fullControlBarHeight, 'px')
                        }
                    }
                }, {
                    key: 'upperPlaybarStyle',
                    value: function() {
                        return 'upper' === this.props.playbarMode ? {
                            display: 'block',
                            height: this.props.upperControlBarHeight
                        } : {
                            display: 'none'
                        }
                    }
                }, {
                    key: 'bottomBarStyle',
                    value: function() {
                        return {
                            bottom: 0,
                            borderCollapse: 'collapse',
                            display: this.state.areControlsDisplayNone ? 'none' : 'table',
                            height: ''.concat(this.props.fullControlBarHeight, 'px'),
                            left: 0,
                            opacity: this.state.areControlsOpaque ? 1 : 0,
                            pointerEvents: 'none',
                            position: 'absolute',
                            tableLayout: 'auto',
                            transition: D.trident ? 'none' : 'opacity '.concat('beforeplay' === this.props.videoState ? 0 : .2, 's'),
                            width: '100%'
                        }
                    }
                }, {
                    key: 'bottomBarLeftStyle',
                    value: function() {
                        return this.standardCellStyle(0)
                    }
                }, {
                    key: 'bottomBarLeftInnerStyle',
                    value: function() {
                        return this.standardInnerStyle()
                    }
                }, {
                    key: 'bottomBarMiddleStyle',
                    value: function() {
                        return this.standardCellStyle('100%')
                    }
                }, {
                    key: 'bottomBarMiddleInnerStyle',
                    value: function() {
                        return this.standardInnerStyle()
                    }
                }, {
                    key: 'bottomBarRightStyle',
                    value: function() {
                        return this.standardCellStyle(0)
                    }
                }, {
                    key: 'bottomBarRightInnerStyle',
                    value: function() {
                        return this.standardInnerStyle()
                    }
                }, {
                    key: 'standardCellStyle',
                    value: function(e) {
                        return {
                            display: 'table-cell',
                            verticalAlign: 'top',
                            position: 'relative',
                            width: e
                        }
                    }
                }, {
                    key: 'standardInnerStyle',
                    value: function() {
                        return {
                            height: this.props.lowerControlBarHeight,
                            position: 'relative',
                            whiteSpace: 'nowrap'
                        }
                    }
                }, {
                    key: 'focusBorderStyle',
                    value: function() {
                        return {
                            border: '2px solid #fff',
                            boxSizing: 'border-box',
                            display: this.state.isKeyboardFocused ? 'block' : 'none',
                            height: '100%',
                            left: 0,
                            pointerEvents: 'none',
                            position: 'absolute',
                            top: 0,
                            width: '100%'
                        }
                    }
                }, {
                    key: 'renderControlCells',
                    value: function(e) {
                        var t = this,
                            n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        return (this.props.controlsByType[e] || []).map(function(e) {
                            var o = e.constructor.handle;
                            return n.pointerEvents = 'auto', b(g['default'], {
                                mount: function(n) {
                                    return t.mountRefs[o] = n
                                },
                                key: o,
                                style: n,
                                handle: o,
                                class: 'w-css-reset'
                            })
                        })
                    }
                }, {
                    key: 'handleControlBarAnimation',
                    value: function(e) {
                        var t = this;
                        e.shouldShowControls && !this.props.shouldShowControls && (clearTimeout(this.displayNoneTimeout), this.setState({
                            areControlsDisplayNone: !1
                        }, function() {
                            setTimeout(function() {
                                t.setState({
                                    areControlsOpaque: !0
                                })
                            }, 1)
                        })), !e.shouldShowControls && this.props.shouldShowControls && this.setState({
                            areControlsOpaque: !1
                        }, function() {
                            clearTimeout(t.displayNoneTimeout), t.displayNoneTimeout = setTimeout(function() {
                                t.setState({
                                    areControlsDisplayNone: !0
                                })
                            }, D.trident ? 0 : 200)
                        })
                    }
                }, {
                    key: 't',
                    value: function(e) {
                        return v(this.props.playerLanguage, 'LAYOUT_'.concat(e))
                    }
                }]), t
            }(A),
            I = function(t) {
                return t.target && (P(t.target, 'w-vulcan-v2-button') || E(t.target, 'w-vulcan-v2-button'))
            };
        t['default'] = F
    },
    471: function(e, t, n) {
        'use strict';
        n.r(t);
        var l = n(2);

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function i(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function a(e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), e
        }

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var s = l['default'].lib('promiscuous'),
            d = l['default'].lib('utilities/bindify'),
            u = d.bindify,
            p = function() {
                function e(t) {
                    var n = this,
                        i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    o(this, e), r(this, 'dialogWillOpen', function() {
                        return new s(function(e) {
                            if (n.config.dialogWillOpen) {
                                var t = n.config.dialogWillOpen();
                                if (t && t.then) return void t.then(e)
                            }
                            e()
                        })
                    }), r(this, 'doOpen', function() {
                        return new s(function(e) {
                            n._isOpen ? e() : (n._isOpen = !0, n._hasOpened = !0, n.ui.openDialog(n), setTimeout(e, 170))
                        })
                    }), r(this, 'dialogOpened', function() {
                        return new s(function(e) {
                            n.config.dialogOpened && n.config.dialogOpened(), e()
                        })
                    }), r(this, 'close', function() {
                        return n.control.mounted.then(function() {
                            return n.isOpen() ? n.dialogWillClose().then(n.doClose).then(n.dialogClosed) : s.resolve()
                        })
                    }), r(this, 'dialogWillClose', function() {
                        return new s(function(e) {
                            if (n.config.dialogWillClose) {
                                var t = n.config.dialogWillClose();
                                if (t && t.then) return void t.then(e)
                            }
                            e()
                        })
                    }), r(this, 'doClose', function() {
                        return new s(function(e) {
                            n._isOpen ? (n._isOpen = !1, n.ui.closeDialog(n), setTimeout(e, 200)) : e()
                        })
                    }), r(this, 'dialogClosed', function() {
                        return new s(function(e) {
                            n.config.dialogClosed && n.config.dialogClosed(), e()
                        })
                    }), this.ui = t, this.config = i, this._isOpen = !1, this._hasOpened = !1, this.control = i.control
                }
                return a(e, [{
                    key: 'open',
                    value: function() {
                        var e = this;
                        return this.control.mounted.then(function() {
                            return e.isOpen() ? s.resolve() : e.dialogWillOpen().then(e.doOpen).then(e.dialogOpened)
                        })
                    }
                }, {
                    key: 'isOpen',
                    value: function() {
                        return this._isOpen
                    }
                }, {
                    key: 'hasOpened',
                    value: function() {
                        return this._hasOpened
                    }
                }, {
                    key: 'resize',
                    value: function() {
                        this._resizeRequestedAt = Date.now(), this.ui.resizeDialog(this)
                    }
                }]), e
            }();
        u(p.prototype);
        t['default'] = p
    },
    472: function(e, t, n) {
        'use strict';
        n.r(t);
        var m = n(2),
            g = n(315),
            y = n(473),
            f = n(474);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : d(e)
        }

        function s(e) {
            return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, s(e)
        }

        function d(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var b = m['default'].lib('player/lib/elem'),
            A = b.elemBind,
            _ = b.elemIsInside,
            v = b.elemUnbind,
            w = m['default'].lib('preact'),
            k = w.h,
            h = w.render,
            C = w.Component,
            S = function(e) {
                function t() {
                    var e, n;
                    i(this, t);
                    for (var o = arguments.length, a = Array(o), r = 0; r < o; r++) a[r] = arguments[r];
                    return n = l(this, (e = s(t)).call.apply(e, [this].concat(a))), p(d(n), 'onClickButton', function() {
                        var e = n.props.control;
                        if (!1 !== e.toggleDialogOnClick && !e.constructor.toggleDialogOnHover) {
                            var t = e.dialog;
                            t && (t.isOpen() ? t.close() : t.open())
                        }
                        e.onClickButton && e.onClickButton()
                    }), p(d(n), 'onKeyboardFocusButton', function(t) {
                        if (t.relatedTarget !== n.dummyElem) {
                            var e = n.props.control,
                                o = e.dialog;
                            o && !o.isOpen() && o.open(), e.onFocusInButton && e.onFocusInButton(t)
                        }
                    }), p(d(n), 'onBlurButton', function(t) {
                        var e = n.props.control,
                            o = e.dialog;
                        setTimeout(function() {
                            var i = document.activeElement;
                            !1 === n.props.closeDialogOnFocusOut || i && _(i, n.base) || !o || o.close(), e.onFocusOutButton && e.onFocusOutButton(t)
                        }, 20)
                    }), p(d(n), 'onMouseEnter', function() {
                        n._isHovering = !0;
                        var e = n.props.control;
                        e.constructor.toggleDialogOnHover && e.dialog.open()
                    }), p(d(n), 'onMouseLeave', function(t) {
                        n._isHovering = !1;
                        var e = n.props.control;
                        e.constructor.toggleDialogOnHover && !n._isMouseDown && e.dialog.close(), e.onMouseLeave && e.onMouseLeave(t)
                    }), p(d(n), 'onMouseDown', function() {
                        n._isMouseDown = !0, A(document, 'mouseup', n.onMouseUp)
                    }), p(d(n), 'onMouseUp', function() {
                        n._isMouseDown = !1, v(document, 'mouseup', n.onMouseUp);
                        var e = n.props.control;
                        e.constructor.toggleDialogOnHover && !n._isHovering && e.dialog.close()
                    }), p(d(n), 'onFocusOut', function() {
                        setTimeout(function() {
                            var e = n.props.control;
                            !1 !== n.props.closeDialogOnFocusOut && e.dialog && e.dialog.isOpen() && (!document.activeElement || !_(document.activeElement, n.base)) && e.dialog.close()
                        }, 500)
                    }), p(d(n), 'onFocusDummy', function() {
                        var e = n.props.control;
                        e.dialog.close();
                        var t = e.__nextControl();
                        t && t.buttonElement && t.buttonElement.focus && t.buttonElement.focus()
                    }), p(d(n), 'onBeforeDisplayNone', function() {
                        var e = n.props.control;
                        if (n.dialogElem && document.activeElement && _(document.activeElement, n.dialogElem)) {
                            var t = e.__nextControl();
                            t && t.buttonElement ? t.buttonElement.focus() : e.buttonElement.focus()
                        }
                    }), p(d(n), 'dialogRefFn', function(t) {
                        n.dialogElem = t, n.props.dialogRef && n.props.dialogRef(t)
                    }), n
                }
                return u(t, e), r(t, [{
                    key: 'render',
                    value: function() {
                        var e = this.props.control,
                            t = e.mountDialog && e.dialog && e.dialog.hasOpened();
                        return k('div', {
                            class: 'w-vulcan-button-wrapper w-css-reset',
                            style: this.wrapperStyle(),
                            onMouseEnter: this.onMouseEnter,
                            onMouseLeave: this.onMouseLeave,
                            onMouseDown: this.onMouseDown,
                            onFocusOut: this.onFocusOut,
                            ref: this.props.rootRef
                        }, this.renderControlBarButton(), t ? this.renderControlBarDialog() : null)
                    }
                }, {
                    key: 'componentDidMount',
                    value: function() {
                        var e = this.props.buttonRef;
                        e && e(this.buttonElem)
                    }
                }, {
                    key: 'componentDidUpdate',
                    value: function() {
                        var e = this.props.buttonRef;
                        e && e(this.buttonElem)
                    }
                }, {
                    key: 'renderControlBarButton',
                    value: function() {
                        var t = this,
                            e = this.props;
                        return k(y['default'], {
                            onClickOrTap: this.onClickButton,
                            onKeyboardFocus: this.onKeyboardFocusButton,
                            onBlur: this.onBlurButton,
                            color: e.color,
                            buttonLabel: this.props.buttonLabel,
                            buttonRef: function(n) {
                                return t.buttonElem = n
                            },
                            stubRef: e.stubRef,
                            handle: e.control.constructor.handle,
                            isLoading: e.control.__isDialogLoading || !1
                        })
                    }
                }, {
                    key: 'renderControlBarDialog',
                    value: function() {
                        var e = this.props,
                            t = e.control,
                            n = e.videoHeight - 34 * e.scale;
                        return k(f['default'], {
                            mount: function(n) {
                                return t.mountDialog(n)
                            },
                            left: t.props.left,
                            top: t.props.top,
                            canvasWidth: e.videoWidth,
                            canvasHeight: n,
                            scale: e.scale,
                            isOpen: t.dialog.isOpen(),
                            resizeRequestedAt: t.dialog._resizeRequestedAt,
                            onFocusDummy: this.onFocusDummy,
                            shouldRenderDummy: !!t.__nextControl(),
                            dialogRef: this.dialogRefFn,
                            onBeforeDisplayNone: this.onBeforeDisplayNone,
                            handle: ''.concat(t.constructor.handle, '__dialog')
                        })
                    }
                }, {
                    key: 'wrapperStyle',
                    value: function() {
                        var e = this.props.control;
                        return {
                            display: 'inline-block',
                            height: e.props.height,
                            position: 'relative',
                            verticalAlign: 'top',
                            width: e.props.width
                        }
                    }
                }]), t
            }(C);
        t['default'] = S
    },
    473: function(e, t, n) {
        'use strict';
        n.r(t);
        var g = n(161),
            y = n(315),
            f = n(2);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i() {
            return i = Object.assign || function(e) {
                for (var t, n = 1; n < arguments.length; n++)
                    for (var o in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, i.apply(this, arguments)
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function r(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function l(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
        }

        function s(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : u(e)
        }

        function d(e) {
            return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, d(e)
        }

        function u(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function p(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }

        function m(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var b = f['default'].lib('utilities/color'),
            A = f['default'].lib('preact'),
            _ = A.h,
            h = A.render,
            v = A.Component,
            w = f['default'].lib('utilities/detect'),
            k = w.cachedDetect,
            C = f['default'].lib('utilities/isMouseDown'),
            S = C.isMouseDown,
            P = k(),
            E = function(e) {
                function t(e) {
                    var n;
                    return a(this, t), n = s(this, d(t).call(this, e)), m(u(n), 'onFocus', function(t) {
                        setTimeout(function() {
                            n.setState({
                                isKeyboardFocused: !S()
                            }), n.props.onFocus && n.props.onFocus(t), !S() && n.props.onKeyboardFocus && n.props.onKeyboardFocus(t)
                        }, 10)
                    }), m(u(n), 'onBlur', function(t) {
                        n.setState({
                            isKeyboardFocused: !1
                        }), n.props.onBlur && n.props.onBlur(t)
                    }), m(u(n), 'onMouseEnter', function() {
                        n.setState({
                            isHovering: !0
                        })
                    }), m(u(n), 'onMouseLeave', function() {
                        n.setState({
                            isHovering: !1
                        })
                    }), n.interval = void 0, n.state = {
                        isKeyboardFocused: !1,
                        isHovering: !1,
                        opacity: '1.0'
                    }, n
                }
                return p(t, e), l(t, [{
                    key: 'render',
                    value: function() {
                        var t = this,
                            n = this.props,
                            e = n.buttonLabel,
                            o = {
                                class: 'w-vulcan-v2-button w-css-reset w-css-reset-tree w-css-reset-button-important',
                                style: this.buttonStyle(),
                                "aria-label": e,
                                title: e,
                                onClickOrTap: n.onClickOrTap,
                                elemRef: function(o) {
                                    t.buttonElem = o, n.buttonRef && n.buttonRef(o)
                                }
                            };
                        return P.touchScreen || (o.onFocus = this.onFocus, o.onBlur = this.onBlur, o.onMouseEnter = this.onMouseEnter, o.onMouseLeave = this.onMouseLeave), _(g['default'], i({
                            tagName: 'button'
                        }, o), _(y['default'], {
                            class: 'w-vulcan-icon-wrapper',
                            style: this.stubStyle(),
                            stubRef: function(n) {
                                return t.stubRoot = n
                            },
                            handle: this.props.handle
                        }))
                    }
                }, {
                    key: 'componentDidMount',
                    value: function() {
                        this.props.mount && this.props.mount(this.stubRoot, this.anchorRoot, this.buttonElem), this.props.stubRef && this.props.stubRef(this.stubRoot)
                    }
                }, {
                    key: 'createLoadingInterval',
                    value: function() {
                        var e = this;
                        this.interval = setInterval(function() {
                            var t = '0.2' === e.state.opacity ? '0.8' : '0.2';
                            e.setState({
                                opacity: t
                            })
                        }, 400)
                    }
                }, {
                    key: 'clearLoadingInterval',
                    value: function() {
                        clearInterval(this.interval), this.setState({
                            opacity: '1.0'
                        })
                    }
                }, {
                    key: 'componentWillReceiveProps',
                    value: function(e) {
                        !1 === this.props.isLoading && !0 === e.isLoading ? this.createLoadingInterval() : !0 === this.props.isLoading && !1 === e.isLoading && this.clearLoadingInterval()
                    }
                }, {
                    key: 'componentDidUpdate',
                    value: function() {
                        var e = this;
                        this.props.stubRef && this.props.stubRef(this.stubRoot), P.trident && setTimeout(function() {
                            e.base.style.display = 'inline-block', setTimeout(function() {
                                e.base.style.display = 'block'
                            }, 1)
                        }, 1)
                    }
                }, {
                    key: 'rootStyle',
                    value: function() {
                        return {
                            height: '100%',
                            position: 'relative',
                            width: '100%'
                        }
                    }
                }, {
                    key: 'buttonStyle',
                    value: function() {
                        var e = this.state,
                            t = e.isHovering ? .7 : .95,
                            n = new b(this.props.color || '#000').alpha(t);
                        return {
                            background: n.toRgba(),
                            boxShadow: e.isKeyboardFocused ? '0 0 0 2px #fff inset' : 'none',
                            cursor: 'pointer',
                            height: '100%',
                            position: 'relative',
                            width: '100%',
                            transition: 'opacity 400ms ease',
                            opacity: e.opacity
                        }
                    }
                }, {
                    key: 'stubStyle',
                    value: function() {
                        return {
                            boxSizing: 'border-box',
                            height: '100%'
                        }
                    }
                }]), t
            }(v);
        t['default'] = E
    },
    474: function(e, t, n) {
        'use strict';
        n.r(t);
        var m = n(2),
            g = n(315);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : d(e)
        }

        function s(e) {
            return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, s(e)
        }

        function d(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var y = m['default'].lib('player/lib/elem'),
            f = y.elemHeight,
            b = y.elemWidth,
            A = m['default'].lib('preact'),
            _ = A.h,
            h = A.render,
            v = A.Component,
            w = m['default'].lib('promiscuous'),
            k = m['default'].lib('utilities/detect'),
            C = k.cachedDetect,
            S = m['default'].lib('utilities/event_loop'),
            P = S.globalEventLoop,
            E = m['default'].lib('utilities/seqid'),
            T = C(),
            B = 40,
            x = function(e) {
                function t(e) {
                    var n;
                    return i(this, t), n = l(this, s(t).call(this, e)), p(d(n), 'dialogRefFn', function(t) {
                        n.dialogElem = t, n.props.dialogRef && n.props.dialogRef(t)
                    }), p(d(n), 'handleTransitionsAfterRender', function() {
                        var e = n.props,
                            t = n.state;
                        e.isOpen ? (t.isDisplayNone || t.isOpaque && null == t.widthInButtons) && n.setState({
                            isDisplayNone: !1
                        }, function() {
                            n.measureUserElem(), n.setState({
                                isOpaque: !0
                            })
                        }) : !t.isDisplayNone && t.isOpaque && n.setState({
                            isOpaque: !1
                        }, function() {
                            clearTimeout(n.displayNoneTimeout), n.displayNoneTimeout = setTimeout(function() {
                                n.setState({
                                    isDisplayNone: !0
                                })
                            }, T.trident ? 0 : 200)
                        })
                    }), p(d(n), 'measureUserElem', function() {
                        n.stubElem.style.width = '';
                        var e = b(n.stubElem);
                        n.stubElem.style.width = '100%';
                        var t = Math.ceil(e / (B * n.props.scale));
                        t !== n.state.widthInButtons && n.setState({
                            widthInButtons: t
                        })
                    }), n.uuid = E(), n.state = {
                        isDisplayNone: !0,
                        isOpaque: !1,
                        widthInButtons: null
                    }, n
                }
                return u(t, e), r(t, [{
                    key: 'componentWillReceiveProps',
                    value: function(e) {
                        this.props.resizeRequestedAt !== e.resizeRequestedAt && this.setState({
                            widthInButtons: null
                        })
                    }
                }, {
                    key: 'componentWillUpdate',
                    value: function(e, t) {
                        !0 === t.isDisplayNone && !1 === this.state.isDisplayNone && (this.cancelMeasurementLoop(), e.onBeforeDisplayNone && e.onBeforeDisplayNone()), !1 === t.isDisplayNone && !0 === this.state.isDisplayNone && this.setupMeasurementLoop()
                    }
                }, {
                    key: 'render',
                    value: function() {
                        var e, t = this;
                        return _('div', {
                            class: 'w-anchor w-css-reset',
                            style: this.anchorStyle()
                        }, _('div', {
                            class: 'w-dialog w-css-reset',
                            style: this.dialogStyle(),
                            ref: this.dialogRefFn
                        }, _(g['default'], {
                            style: this.stubStyle(),
                            stubRef: function(n) {
                                return t.stubElem = n
                            },
                            handle: this.props.handle,
                            class: 'w-css-reset'
                        }), this.props.shouldRenderDummy ? _('div', (e = {
                            class: 'w-dummy-button',
                            style: this.dummyStyle(),
                            onFocus: this.props.onFocusDummy
                        }, p(e, 'class', 'w-css-reset'), p(e, 'tabindex', '0'), e)) : null))
                    }
                }, {
                    key: 'componentDidMount',
                    value: function() {
                        var e = this.props.mount(this.stubElem);
                        this.mountPromise = e && e.then && e.catch ? e : w.resolve(), this.mountPromise.then(this.handleTransitionsAfterRender)
                    }
                }, {
                    key: 'componentDidUpdate',
                    value: function() {
                        this.mountPromise && this.mountPromise.then(this.handleTransitionsAfterRender)
                    }
                }, {
                    key: 'componentWillUnmount',
                    value: function() {
                        this.cancelMeasurementLoop()
                    }
                }, {
                    key: 'anchorStyle',
                    value: function() {
                        return {
                            height: 0,
                            left: 0,
                            position: 'absolute',
                            top: 0,
                            width: '100%'
                        }
                    }
                }, {
                    key: 'dialogStyle',
                    value: function() {
                        var e = this.props,
                            t = this.state,
                            n = 0,
                            o = null;
                        if (null != t.widthInButtons) {
                            o = t.widthInButtons * B * e.scale;
                            var i = e.left + o - e.canvasWidth;
                            0 < i && (n = -1 * i)
                        }
                        return {
                            background: 'rgba(0,0,0,.5)',
                            bottom: 0,
                            color: '#fff',
                            display: t.isDisplayNone ? 'none' : 'block',
                            left: n,
                            lineHeight: '34px',
                            maxHeight: ''.concat(e.canvasHeight, 'px'),
                            opacity: t.isOpaque ? 1 : 0,
                            overflowX: 'hidden',
                            overflowY: 'auto',
                            position: 'absolute',
                            transition: T.trident ? 'none' : 'opacity 170ms',
                            width: null == o ? null : ''.concat(o, 'px')
                        }
                    }
                }, {
                    key: 'stubStyle',
                    value: function() {
                        return {
                            boxSizing: 'border-box',
                            display: 'inline-block',
                            height: '100%',
                            verticalAlign: 'bottom',
                            width: '100%'
                        }
                    }
                }, {
                    key: 'dummyStyle',
                    value: function() {
                        return {
                            clip: 'rect(0,0,0,0)',
                            height: '1px',
                            position: 'absolute',
                            top: 0,
                            width: '1px'
                        }
                    }
                }, {
                    key: 'setupMeasurementLoop',
                    value: function() {
                        P.add(this.uuid, 500, this.measureUserElem)
                    }
                }, {
                    key: 'cancelMeasurementLoop',
                    value: function() {
                        P.remove(this.uuid)
                    }
                }]), t
            }(v);
        t['default'] = x
    },
    475: function(e, t, n) {
        'use strict';
        n.r(t);
        var m = n(2),
            g = n(463);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : d(e)
        }

        function s(e) {
            return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, s(e)
        }

        function d(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var y = m['default'].lib('utilities/detect'),
            h = y.cachedDetect,
            f = h(),
            b = function(e) {
                function t() {
                    var e, n;
                    i(this, t);
                    for (var o = arguments.length, a = Array(o), r = 0; r < o; r++) a[r] = arguments[r];
                    return n = l(this, (e = s(t)).call.apply(e, [this].concat(a))), p(d(n), 'onError', function() {
                        var e = n.impl,
                            t = e.getVideoElement();
                        if (t && t.error && t.error.code === 3 && /native_hls_video/.test(n.impl.bestEngine())) {
                            var o = e.lastPlayInfo().isPending;
                            e.commandQueueOpen.clearSynchronized();
                            var i = o ? 'playing' : 'not-playing';
                            m['default'].Metrics.videoCount(e, 'player/rebuild-non-hls-on-error/'.concat(i)), n.unbinds.push(e.on('play', function() {
                                return m['default'].Metrics.videoCount(e, 'player/rebuild-non-hls-on-error/'.concat(i)), e.unbind
                            })), e.publicApi.fullRebuild({
                                hls: !1,
                                autoPlay: o && !(f.ios.version && 10.1 > f.ios.version)
                            })
                        }
                    }), n
                }
                return u(t, e), r(t, [{
                    key: 'init',
                    value: function() {
                        this.unbinds.push(this.impl.on('error', this.onError))
                    }
                }]), t
            }(g.PlayerBehavior);
        b.handle = 'playbackErrorHandling';
        t['default'] = b
    },
    476: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'ProblemMonitoringBehavior', function() {
            return m
        });
        var p = n(463);

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function a(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }

        function l(e, t) {
            return t && ('object' === o(t) || 'function' == typeof t) ? t : s(e)
        }

        function s(e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
        }

        function d(e) {
            return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, d(e)
        }

        function u(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }

        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, c(e, t)
        }
        var m = function(e) {
            function t() {
                return i(this, t), l(this, d(t).apply(this, arguments))
            }
            return u(t, e), r(t, [{
                key: 'init',
                value: function() {
                    var e = this;
                    this.unbinds = [this.impl.on('waiting', function(t) {
                        5 <= t && e.impl.trigger('problem', {
                            type: 'long-buffer',
                            data: {
                                secondsWaiting: t
                            }
                        })
                    }), this.impl.on('error', function() {
                        var t = e.impl.getVideoElement(),
                            n = t.error;
                        e.impl.trigger('problem', {
                            type: 'video-error',
                            errorCode: n && n.code || n,
                            errorMessage: n && n.message
                        })
                    })]
                }
            }]), t
        }(p.PlayerBehavior);
        m.handle = 'problemMonitoring';
        t['default'] = m
    },
    48: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'fetchPlaylist', function() {
            return u
        });
        var o = n(2),
            i = n(29),
            a = n(14),
            r = n(20),
            l = n(15),
            s = n(7),
            d = n(4);
        null == o['default']._remotePlaylist && (o['default']._remotePlaylist = {});
        var u = function(e, t) {
            var n = o['default']._remotePlaylist[e];
            if (n) Object(d.doTimeout)('remote-playlist.'.concat(e, '.').concat(Object(s['default'])()), function() {
                t(n)
            });
            else {
                var u = ''.concat(Object(a.proto)(), '//').concat(Object(r.cdnFastWistiaComHost)(), '/embed/playlists/').concat(e, '.json'),
                    p = function(n) {
                        o['default']._remotePlaylist[e] = n, t(n)
                    },
                    c = function() {
                        l.wlog.error('Timed out fetching '.concat(u))
                    };
                Object(i.jsonpPlus)(u, {}, p, {
                    onerror: c,
                    timeout: 1e4
                })
            }
        }
    },
    49: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'PUBLIC_METHODS', function() {
            return o
        });
        n.d(t, 'delegateMethods', function() {
            return i
        });
        n.d(t, 'delegatePublicMethods', function() {
            return a
        });
        var o = ['activeBufferRange', 'anyBuffered', 'bind', 'bindNamed', 'bufferInfo', 'canDownloadMedia', 'cancelFullscreen', 'captureCurrentFrame', 'changeQuality', 'changeStream', 'changeStreamWithoutLoad', 'changeVideo', 'currentAsset', 'defaultAsset', 'destroy', 'diagnosticData', 'eventContext', 'fit', 'getAudioTracks', 'getCurrentQuality', 'getCurrentTime', 'getDuration', 'getPlaybackMode', 'getPlaybackRate', 'getPreload', 'getState', 'getTrim', 'getVolume', 'hasIssuedPlay', 'isChangingVideo', 'isInitializingFromUnmuted', 'isInFullscreen', 'isMuted', 'isSeeking', 'isSourceOfBrowserEvent', 'lastBufferedTime', 'mute', 'onEnterFullscreen', 'onHeightChange', 'onLeaveFullscreen', 'onPlayed', 'onReady', 'onWidthChange', 'pause', 'play', 'playType', 'requestFullscreen', 'reset', 'seek', 'seekOnPlay', 'selectedAsset', 'selectableAssets', 'selectableQualities', 'selectedQuality', 'sequentialBufferedRange', 'setAttributes', 'setCurrentTime', 'setPlaybackRate', 'setTrim', 'setVolume', 'showFirstFrame', 'stopStreaming', 'timeBeforeEndOfBuffer', 'totalBuffered', 'totalPlayed', 'trigger', 'unbind', 'unbindNamed', 'unbindAllInNamespace', 'unmute', 'videoElem'],
            i = function(e, t, n) {
                for (var o, a = 0; a < e.length; a++) o = e[a], t[o] || function(e) {
                    t[e] = function() {
                        var t = n.call(this);
                        return t ? t[e].apply(t, arguments) : null
                    }
                }(o)
            },
            a = function(e, t) {
                i(o, e, t)
            }
    },
    5: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'merge', function() {
            return l
        });
        n.d(t, 'mergeOne', function() {
            return s
        });
        n.d(t, 'identityFunc', function() {
            return d
        });
        n.d(t, 'legacyShouldDeleteFromMerge', function() {
            return u
        });
        n.d(t, 'clone', function() {
            return p
        });
        n.d(t, 'get', function() {
            return c
        });
        n.d(t, 'set', function() {
            return m
        });
        n.d(t, 'setAndPreserveUndefined', function() {
            return g
        });
        n.d(t, 'unset', function() {
            return h
        });
        n.d(t, 'exists', function() {
            return f
        });
        n.d(t, 'cast', function() {
            return b
        });
        n.d(t, 'castDeep', function() {
            return _
        });
        n.d(t, 'only', function() {
            return v
        });
        n.d(t, 'except', function() {
            return w
        });
        n.d(t, 'select', function() {
            return k
        });
        n.d(t, 'filter', function() {
            return E
        });
        n.d(t, 'values', function() {
            return S
        });
        n.d(t, 'sort', function() {
            return P
        });
        n.d(t, 'isArray', function() {
            return B
        });
        n.d(t, 'isObject', function() {
            return D
        });
        n.d(t, 'isFunction', function() {
            return F
        });
        n.d(t, 'isRegExp', function() {
            return M
        });
        n.d(t, 'isBasicType', function() {
            return L
        });
        n.d(t, 'isEmpty', function() {
            return R
        });
        n.d(t, 'isSubsetDeep', function() {
            return H
        });
        n.d(t, 'equalsDeep', function() {
            return W
        });
        n.d(t, 'eachDeep', function() {
            return j
        });
        n.d(t, 'eachLeaf', function() {
            return V
        });
        n.d(t, 'pick', function() {
            return N
        });
        n.d(t, 'indexOf', function() {
            return U
        });
        var i = n(6);
        n.d(t, 'assign', function() {
            return i['default']
        });
        var a;

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }
        var r = Array.prototype.slice,
            l = function(e) {
                if (0 == (1 >= arguments.length ? 0 : arguments.length - 1)) return e;
                for (var t = 0; t < (1 >= arguments.length ? 0 : arguments.length - 1); t++) s(e, 1 > t + 1 || arguments.length <= t + 1 ? void 0 : arguments[t + 1]);
                return e
            },
            s = function e(t, n) {
                var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : d,
                    a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : u;
                if (B(n)) {
                    B(t) || (t = []);
                    for (var r, l = 0; l < n.length; l++) {
                        r = n[l], null == t[l] && null != r && (B(r) ? t[l] = [] : D(r) && (t[l] = {}));
                        var i = e(t[l], r, o);
                        a(n, l, i) ? delete t[l] : t[l] = i
                    }
                    return o(t)
                }
                if (D(n)) {
                    for (var s in n) {
                        var p = n[s];
                        B(p) ? (!B(t[s]) && (t[s] = []), e(t[s], p, o), t[s] = o(t[s])) : D(p) ? (!D(t[s]) && (t[s] = {}), e(t[s], p, o), t[s] = o(t[s])) : null == t ? (t = {}, !a(n, s, p) && (t[s] = o(p))) : a(n, s, p) ? delete t[s] : t[s] = o(p)
                    }
                    return o(t)
                }
                return o(n)
            },
            d = function(e) {
                return e
            },
            u = function(e, t, n) {
                return null == n
            },
            p = function(e, t) {
                return B(e) ? s([], e, t) : s({}, e, t)
            },
            c = function(e, t, n) {
                t = 'string' == typeof t ? t.split('.') : r.call(t);
                for (var o, i = e, a; null != e && t.length;) {
                    a = t.shift();
                    e[a] !== void 0 && (D(e[a]) || B(e[a])) || !n || (0 === a ? (e = i[o] = [], e[a] = {}) : e[a] = {}), i = e, o = a, e = e[a]
                }
                return e
            },
            m = function(e, t, n) {
                return y(e, t, n, !0)
            },
            g = function(e, t, n) {
                return y(e, t, n, !1)
            },
            y = function(e, t, n) {
                var o = !(3 < arguments.length && arguments[3] !== void 0) || arguments[3];
                t = 'string' == typeof t ? t.split('.') : r.call(t);
                var i = t.pop();
                e = c(e, t, !0);
                null != e && (D(e) || B(e)) && null != i && (o && null == n ? delete e[i] : e[i] = n)
            },
            h = function(e, t) {
                return m(e, t)
            },
            f = function(e, t) {
                return c(e, t) !== void 0
            },
            b = function(e) {
                return null == e ? e : D(e) || B(e) ? _(e) : A('' + e, e)
            },
            A = function(e) {
                var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : e;
                return /^-?[1-9]\d*?$/.test(e) ? parseInt(e, 10) : '0' === e || '-0' === e ? 0 : /^-?\d*\.\d+$/.test(e) ? parseFloat(e) : !!/^true$/i.test(e) || !/^false$/i.test(e) && t
            },
            _ = function(e) {
                return s(e, e, function(e) {
                    return 'string' == typeof e ? A(e) : e
                }, function() {
                    return !1
                })
            },
            v = function(e, t) {
                for (var n = {}, o = {}, a = 0; a < t.length; a++) o[t[a]] = !0;
                for (var i in e) o[i] && (n[i] = e[i]);
                return n
            },
            w = function(e, t) {
                for (var n = {}, o = {}, a = 0; a < t.length; a++) o[t[a]] = !0;
                for (var i in e) o[i] || (n[i] = e[i]);
                return n
            },
            k = function(e, t) {
                for (var n, o = [], a = 'function' == typeof t, r = a ? t : null, l = 0; l < e.length; l++)
                    if (n = e[l], a) r(n) && o.push(n);
                    else {
                        var i = !0;
                        for (var s in t) {
                            var d = t[s];
                            if (d instanceof Array) {
                                if (!n[s] || n[s] < d[0] || n[s] > d[1]) {
                                    i = !1;
                                    break
                                }
                            } else if (d instanceof RegExp) {
                                if (!d.test(n[s])) {
                                    i = !1;
                                    break
                                }
                            } else if (d instanceof C) {
                                for (var u, p = !1, c = 0; c < d.values.length; c++)
                                    if (u = d.values[c], n[s] === u) {
                                        p = !0;
                                        break
                                    } if (!p) {
                                    i = !1;
                                    break
                                }
                            } else if ('function' == typeof d) {
                                if (null == n[s] || !d(n[s])) {
                                    i = !1;
                                    break
                                }
                            } else if (n[s] !== d) {
                                i = !1;
                                break
                            }
                        }
                        i && o.push(n)
                    } return o
            },
            C = function(e) {
                var t = this;
                return function() {
                    t.values = e
                }(), t
            },
            S = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return new C(t)
            },
            P = function(e, t) {
                var n = 'function' == typeof t,
                    o = n ? t : null,
                    i = r.call(e);
                return n ? i.sort(o) : i.sort(function(e, n) {
                    var o = t instanceof Array ? p(t) : t.split(/\s*,\s*/);
                    for (var i = 0; 0 === i && 0 < o.length;) {
                        var a = o.shift().split(/\s+/),
                            r = a[0],
                            l = a[1];
                        if (l = 'desc' === l ? -1 : 1, e[r] < n[r]) {
                            i = -1 * l;
                            break
                        } else if (e[r] === n[r]) i = 0;
                        else {
                            i = 1 * l;
                            break
                        }
                    }
                    return i
                }), i
            },
            E = function(e, t, n) {
                for (var o = n === void 0 ? a : n, r = [], l = 0; l < e.length; l++) t.call(o, e[l], l, e) && r.push(e[l]);
                return r
            },
            T = /^\s*function Array()/,
            B = function(e) {
                return null != e && e.push && T.test(e.constructor)
            },
            x = /^\s*function Object()/,
            D = function(e) {
                return null != e && 'object' === o(e) && x.test(e.constructor)
            },
            F = function(e) {
                return null != e && 'function' == typeof e
            },
            I = /^\s*function RegExp()/,
            M = function(e) {
                return null != e && I.test(e.constructor)
            },
            O = /^string|number|boolean|function$/i,
            L = function(e) {
                return null != e && (O.test(o(e)) || M(e))
            },
            R = function(e) {
                if (null == e) return !0;
                if (B(e) && !e.length) return !0;
                if (D(e)) {
                    for (var t in e) return !1;
                    return !0
                }
                return !1
            },
            H = function(e, t) {
                if (e === t) return !0;
                if (null != e && null == t || null == e && null != t) return !1;
                var n = !0;
                return V(e, function(e, o) {
                    var i = c(t, o);
                    e !== i && (n = !1)
                }), n
            },
            W = function(e, t) {
                return H(e, t) && H(t, e)
            },
            j = function e(t, n, o, i, a) {
                if (null == o && (o = []), L(t)) n(t, o, i, a);
                else if (D(t) || B(t)) {
                    for (var l in n(t, o, i, a), t)
                        if (t.hasOwnProperty(l)) {
                            var s = r.call(o);
                            s.push(l), e(t[l], n, s, t, l)
                        }
                } else n(t, o, i, a)
            },
            V = function(e, t) {
                j(e, function(e, n, o, i) {
                    B(e) || D(e) || t(e, n, o, i)
                })
            },
            N = function(e, t) {
                for (var n, o = {}, a = 0; a < t.length; a++) n = t[a], e[n] && (o[n] = e[n]);
                return o
            },
            U = function(e, t) {
                for (var n = 0; n < e.length; n++)
                    if (e[n] === t) return n;
                return -1
            }
    },
    50: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'supportedLanguages', function() {
            return d
        });
        n.d(t, 'defineLanguage', function() {
            return u
        });
        n.d(t, 'getLanguage', function() {
            return p
        });
        n.d(t, 'defineTranslations', function() {
            return c
        });
        n.d(t, 'getTranslation', function() {
            return f
        });
        n.d(t, 'getLanguagePreference', function() {
            return b
        });
        n.d(t, 'loadAndDefineTranslation', function() {
            return A
        });
        n.d(t, 'getDefaultTranslation', function() {
            return _
        });
        var o = n(2),
            i = n(5),
            a = n(28),
            r = n.n(a),
            l = o['default'].languages = o['default'].languages || {},
            s = o['default'].translations = o['default'].translations || {};
        o['default']._translationPromises || (o['default']._translationPromises = {});
        var d = ['ar', 'de', 'es', 'en-US', 'fr', 'it', 'ja', 'ko', 'pt', 'ru', 'zh-CN'],
            u = function(e, t, n) {
                l[e] = {
                    code: e,
                    text: h(t)
                }, n && c(e, n)
            },
            p = function(e) {
                return l[e]
            },
            c = function(e, t) {
                if (null == l[e]) throw new Error('Must define a language with code '.concat(e, ' before defining its translations.'));
                var n = s[e];
                n ? Object(i.merge)(n, t) : s[e] = Object(i.clone)(t)
            },
            m, g = function(e) {
                return null == e ? '?' : e
            },
            y = o['default'].cachedDecodings = o['default'].cachedDecodings || {},
            h = function(e) {
                return (m || (m = document.createElement('textarea')), null != y[e]) ? y[e] : (m.innerHTML = e, y[e] = m.value, m.value)
            },
            f = function(e, t) {
                var n;
                return n = s[e] && s[e][t] ? s[e][t] : s['en-US'][t], h(g(n))
            },
            b = function() {
                return o['default'].languagePreference = navigator.languages || [navigator.language], o['default'].languagePreference
            },
            A = function(e) {
                if (o['default']._translationPromises[e]) return o['default']._translationPromises[e];
                var t = new r.a(function(t, n) {
                    o['default'].asyncRequire(['translations/'.concat(e, '.js')]).then(function() {
                        t({
                            code: e,
                            translations: s[e]
                        })
                    }).catch(n)
                });
                return o['default']._translationPromises[e] = t, t
            },
            _ = function() {
                var e = b(),
                    t = e.filter(function(e) {
                        return -1 !== d.indexOf(e)
                    })[0] || 'en-US';
                return s[t] ? r.a.resolve({
                    code: t,
                    translations: s[t]
                }) : A(t)
            };
        u('en-US', 'English'), c('en-US', {
            PLAY_BUTTON_TITLE_WHEN_NOT_PLAYING: 'Play',
            PLAY_BUTTON_TITLE_WHEN_PLAYING: 'Pause',
            REWATCH: 'Rewatch',
            SKIP: 'Skip'
        }), o['default']._initializers.initDefaultTranslation = _, o['default'].getDefaultTranslation = _, o['default'].suppportedLanguages = d, o['default'].defineLanguage = u, o['default'].getLanguage = p, o['default'].getLanguagePreference = b, o['default'].defineTranslations = c, o['default'].getTranslation = f, o['default'].loadAndDefineTranslation = A
    },
    51: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'xhr', function() {
            return r
        });
        n.d(t, 'xhrGet', function() {
            return l
        });
        n.d(t, 'xhrPost', function() {
            return s
        });
        n.d(t, 'xhrJsonPost', function() {
            return d
        });
        var o = n(6),
            i = n(28),
            a = n.n(i),
            r = function(e, t, n) {
                var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : {},
                    i = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : {};
                return new a.a(function(a, r) {
                    var l = i.XMLHttpRequest || XMLHttpRequest,
                        s = new l;
                    i.afterConstructor && i.afterConstructor(s);
                    var d = function() {
                        if (!(s.readyState < 4))
                            if (!(null != s.status && (200 <= s.status && 300 > s.status || 304 == s.status))) {
                                var n = new Error(''.concat(e, ' ').concat(t, ' - Got an unsuccessful status code: ').concat(s.status, '. ').concat(s.statusText));
                                console.error(n.message), r(n)
                            } else if (s.response && 'string' != typeof s.response) a({
                            data: s.response,
                            status: s.status,
                            statusText: s.statusText,
                            xhr: s
                        });
                        else if ('json' === i.dataType) try {
                            var o = JSON.parse(s.responseText);
                            a({
                                data: o,
                                status: s.status,
                                statusText: s.statusText,
                                xhr: s
                            })
                        } catch (n) {
                            var l = new Error(''.concat(e, ' ').concat(t, ' - Error parsing response text: ').concat(s.responseText, '.'));
                            console.error(l.message), r(l)
                        } else a({
                            data: s.responseText,
                            status: s.status,
                            statusText: s.statusText,
                            xhr: s
                        })
                    };
                    try {
                        s.addEventListener('readystatechange', d, !1)
                    } catch (t) {
                        console.error(t.message), console.error(t.stack)
                    }
                    s.addEventListener('error', function() {
                        var e = new Error('XHR error');
                        e.status = s.status, e.xhr = s, r(e)
                    }, !1);
                    if (s.addEventListener('timeout', function(t) {
                            var e = new Error('XHR timeout');
                            e.status = s.status, e.message = t && t.message, e.xhr = s, r(t)
                        }, !1), s.open(e, t, !0), i.withCredentials && (s.withCredentials = !0), i.timeout && (s.timeout = i.timeout), null != i.dataType && (s.responseType = i.dataType), 'POST' === e && s.setRequestHeader('content-type', 'application/x-www-form-urlencoded'), o)
                        for (var u in o) o.hasOwnProperty(u) && s.setRequestHeader(u.toLowerCase(), o[u]);
                    s.send(n), i.afterSend && i.afterSend(s)
                })
            },
            l = function(e, t, n) {
                return r('GET', e, null, t, n)
            },
            s = function(e, t, n, o) {
                return r('POST', e, t, n, o)
            },
            d = function(e, t, n, i) {
                return n = Object(o['default'])({}, n, {
                    "content-type": 'application/json'
                }), r('POST', e, JSON.stringify(t), n, i)
            }
    },
    52: function(e, t, n) {
        'use strict';
        n.r(t);
        var r = n(16);

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function i(e, t) {
            for (var n, o = 0; o < t.length; o++) n = t[o], n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }

        function a(e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), e
        }
        var l = Object(r.cachedDetect)(),
            s = /^#?([0-9a-f]{3,4}|[0-9a-f]{6,8})$/i,
            d = /^rgba?\((\d{1,3}(?:\.\d+)?%?),\s*(\d{1,3}(?:\.\d+)?%?),\s*(\d{1,3}(?:\.\d+)?%?)(?:,\s*([01]?\.?\d*))?\)$/,
            u = /^\d+(\.\d+)*%$/,
            p = /([0-9a-f])/gi,
            c = function(e) {
                return u.test(e) ? 2.55 * parseFloat(e) : e
            },
            m = function(e, t, n) {
                return 0 > n && (n += 1), 1 < n && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < 1 / 2 ? t : n < 2 / 3 ? e + 6 * ((t - e) * (2 / 3 - n)) : e
            },
            g = function() {
                function e(t) {
                    o(this, e), t instanceof e ? (this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a) : t ? this.parse(t) : (this.r = this.g = this.b = 0, this.a = 1)
                }
                return a(e, [{
                    key: 'parse',
                    value: function(e) {
                        if (e += '', s.test(e)) {
                            var t = e.replace(/^#/, '');
                            (3 === t.length || 4 === t.length) && (t = t.replace(p, '$1$1')), this.r = parseInt(t.substr(0, 2), 16), this.g = parseInt(t.substr(2, 2), 16), this.b = parseInt(t.substr(4, 2), 16), this.a = 8 === t.length ? parseInt(t.substr(6, 2), 16) / 255 : 1
                        } else if (d.test(e)) {
                            var n = e.match(d);
                            this.r = parseFloat(c(n[1])), this.g = parseFloat(c(n[2])), this.b = parseFloat(c(n[3])), this.a = n[4] ? parseFloat(n[4]) : 1
                        }
                        return this
                    }
                }, {
                    key: 'clone',
                    value: function() {
                        return new e(this)
                    }
                }, {
                    key: '_hslFromRgb',
                    value: function() {
                        var e = this.r / 255,
                            t = this.g / 255,
                            n = this.b / 255,
                            o = Math.max(e, t, n),
                            i = Math.min(e, t, n),
                            a = (o + i) / 2;
                        o === i && (this._h = this._s = 0);
                        var r, l = o - i;
                        if (0 == l) return this._h = 0, this._s = 0, this._l = 100 * e, this;
                        r = .5 < a ? l / (2 - o - i) : l / (o + i);
                        var s;
                        return s = o === e ? (t - n) / l + (t < n ? 6 : 0) : o === t ? (n - e) / l + 2 : (e - t) / l + 4, s /= 6, this._h = 360 * s, this._s = 100 * r, this._l = 100 * a, this
                    }
                }, {
                    key: '_rgbFromHsl',
                    value: function() {
                        var e = this._h / 360,
                            t = this._s / 100,
                            n = this._l / 100,
                            o = .5 > n ? n * (1 + t) : n + t - n * t,
                            i = 2 * n - o;
                        return this.r = 255 * m(i, o, e + 1 / 3), this.g = 255 * m(i, o, e), this.b = 255 * m(i, o, e - 1 / 3), this
                    }
                }, {
                    key: 'blendChannel',
                    value: function(e, t, n) {
                        return this[e] = n * t + (1 - n) * this[e], this
                    }
                }, {
                    key: 'blend',
                    value: function(t, n) {
                        return t = new e(t), this.blendChannel('r', t.r, n), this.blendChannel('g', t.g, n), this.blendChannel('b', t.b, n), this
                    }
                }, {
                    key: 'lightenChannel',
                    value: function(e, t) {
                        return this[e] += t, 0 > this[e] ? this[e] = 0 : 255 < this[e] && (this[e] = 255), this
                    }
                }, {
                    key: 'lighten',
                    value: function(e) {
                        return this.looksLikePercent(e) ? this.lightness(this.lightness() + parseFloat(e)) : (this.lightenChannel('r', e), this.lightenChannel('g', e), this.lightenChannel('b', e)), this
                    }
                }, {
                    key: 'darken',
                    value: function(e) {
                        return 'string' == typeof e ? this.lighten('-'.concat(e)) : this.lighten(-e)
                    }
                }, {
                    key: 'looksLikePercent',
                    value: function(e) {
                        return /^-?\d+(\.\d+)?%$/.test(e)
                    }
                }, {
                    key: 'lightness',
                    value: function(e) {
                        return this._hslFromRgb(), null == e ? this._l : (this._l = Math.max(0, Math.min(100, e)), this._rgbFromHsl(), this)
                    }
                }, {
                    key: 'saturation',
                    value: function(e) {
                        return this._hslFromRgb(), null == e ? this._s : (this._s = Math.max(0, Math.min(100, e)), this._rgbFromHsl(), this)
                    }
                }, {
                    key: 'grayLevel',
                    value: function() {
                        return (.299 * this.r + .587 * this.g + .114 * this.b) / 255
                    }
                }, {
                    key: 'whiteLevel',
                    value: function() {
                        return Math.min(Math.min(this.r, this.g), this.b)
                    }
                }, {
                    key: 'isGrayscale',
                    value: function() {
                        return this.r === this.g && this.g === this.b
                    }
                }, {
                    key: 'distanceFrom',
                    value: function(e) {
                        return Math.sqrt(Math.pow(this.r - e.r, 2) + Math.pow(this.g - e.g, 2) + Math.pow(this.b - e.b, 2))
                    }
                }, {
                    key: 'channelDominance',
                    value: function() {
                        var e = this;
                        return ['r', 'g', 'b'].sort(function(t, n) {
                            return e[n] - e[t]
                        })
                    }
                }, {
                    key: 'alpha',
                    value: function(e) {
                        return null == e ? this.a : (this.a = e, this)
                    }
                }, {
                    key: 'red',
                    value: function(e) {
                        return null == e ? this.r : (this.r = e, this)
                    }
                }, {
                    key: 'green',
                    value: function(e) {
                        return null == e ? this.g : (this.g = e, this)
                    }
                }, {
                    key: 'blue',
                    value: function(e) {
                        return null == e ? this.b : (this.b = e, this)
                    }
                }, {
                    key: 'toHex',
                    value: function() {
                        var e = Math.round(this.r).toString(16),
                            t = Math.round(this.g).toString(16),
                            n = Math.round(this.b).toString(16);
                        return 1 === e.length && (e = '0' + e), 1 === t.length && (t = '0' + t), 1 === n.length && (n = '0' + n), '' + e + t + n
                    }
                }, {
                    key: 'toHexWithAlpha',
                    value: function() {
                        var e = Math.round(255 * this.a).toString(16);
                        return 1 === e.length && (e = '0' + e), '' + e + this.toHex()
                    }
                }, {
                    key: 'toRgb',
                    value: function() {
                        return 'rgb('.concat(Math.round(this.r), ',').concat(Math.round(this.g), ',').concat(Math.round(this.b), ')')
                    }
                }, {
                    key: 'toRgba',
                    value: function() {
                        return 'rgba('.concat(Math.round(this.r), ',').concat(Math.round(this.g), ',').concat(Math.round(this.b), ',').concat(this.a, ')')
                    }
                }, {
                    key: 'toRgbaOrHex',
                    value: function() {
                        return l.browser.msie && 9 > l.browser.version ? '#'.concat(this.toHex()) : this.toRgba()
                    }
                }, {
                    key: 'toPercent',
                    value: function() {
                        return 'rgba('.concat(100 * (this.r / 255), '%,').concat(100 * (this.g / 255), '%,').concat(100 * (this.b / 255), '%,').concat(this.a, ')')
                    }
                }, {
                    key: 'toIeGradient',
                    value: function() {
                        return 'progid:DXImageTransform.Microsoft.gradient(startColorStr=\'#'.concat(this.toHexWithAlpha(), '\', endColorStr=\'#').concat(this.toHexWithAlpha(), '\')')
                    }
                }, {
                    key: 'toString',
                    value: function() {
                        return this.toPercent()
                    }
                }]), e
            }();
        t['default'] = g
    },
    53: function(e) {
        var t;
        t = function() {
            function e(t) {
                var n, o, i, a, r, l, s, d, u;
                if (d = t.seedRange, s = t.seedFunction, u = t.seedStart, i = null == (a = t.outputStart) ? 0 : a, o = null == (r = t.outputEnd) ? 1 : r, n = null == (l = t.easing) ? e.linear : l, null == d) throw new Error('Must provide seedRange argument');
                if (null != s && 'function' != typeof s) throw new Error('Given seed is not a function');
                if ('function' != typeof n) throw new Error('Invalid easing function given: ' + this.easing);
                this._seedRange = d, this._seedFunction = s || function() {
                    return new Date().getTime()
                }, this._outputStart = i, this._outputEnd = o, this._easing = n, this._seedStart = ('function' == typeof u ? u() : void 0) || this.seed()
            }
            return e.prototype.seed = function() {
                return this.seedFunction()()
            }, e.prototype.seedStart = function() {
                return this._seedStart
            }, e.prototype.seedRange = function() {
                return this._valOrFn(this._seedRange)
            }, e.prototype.seedFunction = function() {
                return this._seedFunction
            }, e.prototype.outputStart = function() {
                return this._valOrFn(this._outputStart)
            }, e.prototype.outputEnd = function() {
                return this._valOrFn(this._outputEnd)
            }, e.prototype.easing = function() {
                return this._valOrFn(this._easing)
            }, e.prototype.value = function() {
                return this._easing.apply(this, this.easingArgs())
            }, e.prototype.atEnd = function() {
                return 1 === this.ratio()
            }, e.prototype.atStart = function() {
                return 0 === this.ratio()
            }, e.prototype.easingArgs = function() {
                return [this.c(), this.t(), this.d(), this.b()]
            }, e.prototype.seedDelta = function() {
                return 0 < this.seedRange() ? Math.min(this.seedRange(), this.seed() - this.seedStart()) : 0 > this.seedRange() ? Math.max(this.seedRange(), this.seed() - this.seedStart()) : 0
            }, e.prototype.ratio = function() {
                var e, t;
                return t = this.seedRange(), 0 === t ? 1 : e = Math.max(0, Math.min(1, this.seedDelta() / t))
            }, e.prototype.c = function() {
                return this.outputEnd() - this.outputStart()
            }, e.prototype.t = function() {
                return this.seedDelta()
            }, e.prototype.d = function() {
                return this.seedRange()
            }, e.prototype.b = function() {
                return this.outputStart()
            }, e.prototype._valOrFn = function(e) {
                return 'function' == typeof e ? e() : e
            }, e.linear = function(e, n, t, o) {
                return e * n / (t || 1) + o
            }, e.easeInOut = function(e, n, t, o) {
                return n /= (t || 1) / 2, 1 > n ? e / 2 * n * n + o : (n -= 1, -e / 2 * (n * (n - 2) - 1) + o)
            }, e
        }(), e.exports = t
    },
    54: function(e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'h', function() {
            return i
        });
        n.d(t, 'createElement', function() {
            return i
        });
        n.d(t, 'cloneElement', function() {
            return l
        });
        n.d(t, 'Component', function() {
            return I
        });
        n.d(t, 'render', function() {
            return M
        });
        n.d(t, 'rerender', function() {
            return s
        });
        n.d(t, 'options', function() {
            return O
        });
        n.d(t, 'components', function() {
            return G
        });

        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }

        function a() {}
        var O = {},
            L = [],
            R = [];

        function i(e, t) {
            var n, o, r, l, i = R;
            for (l = arguments.length; 2 < l--;) L.push(arguments[l]);
            for (t && null != t.children && (!L.length && L.push(t.children), delete t.children); L.length;)
                if ((o = L.pop()) && void 0 !== o.pop)
                    for (l = o.length; l--;) L.push(o[l]);
                else 'boolean' == typeof o && (o = null), (r = 'function' != typeof e) && (null == o ? o = '' : 'number' == typeof o ? o += '' : 'string' != typeof o && (r = !1)), r && n ? i[i.length - 1] += o : i === R ? i = [o] : i.push(o), n = r;
            var s = new a;
            return s.nodeName = e, s.children = i, s.attributes = null == t ? void 0 : t, s.key = null == t ? void 0 : t.key, void 0 !== O.vnode && O.vnode(s), s
        }

        function r(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }
        var H = 'function' == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

        function l(e, t) {
            return i(e.nodeName, r(r({}, e.attributes), t), 2 < arguments.length ? [].slice.call(arguments, 2) : e.children)
        }
        var W = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
            j = [];

        function d(e) {
            !e._dirty && (e._dirty = !0) && 1 == j.push(e) && (O.debounceRendering || H)(s)
        }

        function s() {
            var e, t = j;
            for (j = []; e = t.pop();) e._dirty && x(e)
        }

        function u(e, t, n) {
            return 'string' == typeof t || 'number' == typeof t ? void 0 !== e.splitText : 'string' == typeof t.nodeName ? !e._componentConstructor && p(e, t.nodeName) : n || e._componentConstructor === t.nodeName
        }

        function p(e, t) {
            return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase()
        }

        function m(e) {
            var t = r({}, e.attributes);
            t.children = e.children;
            var n = e.nodeName.defaultProps;
            if (n !== void 0)
                for (var o in n) void 0 === t[o] && (t[o] = n[o]);
            return t
        }

        function c(e, t) {
            var n = t ? document.createElementNS('http://www.w3.org/2000/svg', e) : document.createElement(e);
            return n.normalizedNodeName = e, n
        }

        function g(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }

        function y(e, t, n, a, r) {
            if ('className' === t && (t = 'class'), 'key' === t);
            else if ('ref' === t) n && n(null), a && a(e);
            else if ('class' === t && !r) e.className = a || '';
            else if ('style' === t) {
                if (a && 'string' != typeof a && 'string' != typeof n || (e.style.cssText = a || ''), a && 'object' === o(a)) {
                    if ('string' != typeof n)
                        for (var l in n) l in a || (e.style[l] = '');
                    for (var l in a) e.style[l] = 'number' == typeof a[l] && !1 === W.test(l) ? a[l] + 'px' : a[l]
                }
            } else if ('dangerouslySetInnerHTML' === t) a && (e.innerHTML = a.__html || '');
            else if ('o' == t[0] && 'n' == t[1]) {
                var i = t !== (t = t.replace(/Capture$/, ''));
                t = t.toLowerCase().substring(2), a ? !n && e.addEventListener(t, b, i) : e.removeEventListener(t, b, i), (e._listeners || (e._listeners = {}))[t] = a
            } else if ('list' !== t && 'type' !== t && !r && t in e) f(e, t, null == a ? '' : a), (null == a || !1 === a) && e.removeAttribute(t);
            else {
                var s = r && t !== (t = t.replace(/^xlink\:?/, ''));
                null == a || !1 === a ? s ? e.removeAttributeNS('http://www.w3.org/1999/xlink', t.toLowerCase()) : e.removeAttribute(t) : 'function' != typeof a && (s ? e.setAttributeNS('http://www.w3.org/1999/xlink', t.toLowerCase(), a) : e.setAttribute(t, a))
            }
        }

        function f(e, t, n) {
            try {
                e[t] = n
            } catch (t) {}
        }

        function b(t) {
            return this._listeners[t.type](O.event && O.event(t) || t)
        }
        var V = [],
            N = 0,
            U = !1,
            Q = !1;

        function A() {
            for (var e; e = V.pop();) O.afterMount && O.afterMount(e), e.componentDidMount && e.componentDidMount()
        }

        function _(e, t, n, o, i, a) {
            N++ || (U = null != i && void 0 !== i.ownerSVGElement, Q = null != e && !('__preactattr_' in e));
            var r = v(e, t, n, o, a);
            return i && r.parentNode !== i && i.appendChild(r), --N || (Q = !1, !a && A()), r
        }

        function v(e, t, n, o, r) {
            var l = e,
                s = U;
            if ((null == t || 'boolean' == typeof t) && (t = ''), 'string' == typeof t || 'number' == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (l = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(l, e), k(e, !0))), l.__preactattr_ = !0, l;
            var d = t.nodeName;
            if ('function' == typeof d) return D(e, t, n, o);
            if (U = 'svg' === d || 'foreignObject' !== d && U, d += '', (!e || !p(e, d)) && (l = c(d, U), e)) {
                for (; e.firstChild;) l.appendChild(e.firstChild);
                e.parentNode && e.parentNode.replaceChild(l, e), k(e, !0)
            }
            var u = l.firstChild,
                m = l.__preactattr_,
                g = t.children;
            if (null == m) {
                m = l.__preactattr_ = {};
                for (var y = l.attributes, a = y.length; a--;) m[y[a].name] = y[a].value
            }
            return !Q && g && 1 === g.length && 'string' == typeof g[0] && null != u && void 0 !== u.splitText && null == u.nextSibling ? u.nodeValue != g[0] && (u.nodeValue = g[0]) : (g && g.length || null != u) && w(l, g, n, o, Q || null != m.dangerouslySetInnerHTML), S(l, t.attributes, m), U = s, l
        }

        function w(e, t, n, o, a) {
            var r, l, s, d, p, c = e.childNodes,
                m = [],
                y = {},
                h = 0,
                f = 0,
                b = c.length,
                A = 0,
                _ = t ? t.length : 0;
            if (0 !== b)
                for (var w = 0; w < b; w++) {
                    var i = c[w],
                        C = i.__preactattr_,
                        S = _ && C ? i._component ? i._component.__key : C.key : null;
                    null == S ? (C || (void 0 === i.splitText ? a : !a || i.nodeValue.trim())) && (m[A++] = i) : (h++, y[S] = i)
                }
            if (0 !== _)
                for (var w = 0; w < _; w++) {
                    d = t[w], p = null;
                    var S = d.key;
                    if (null != S) h && void 0 !== y[S] && (p = y[S], y[S] = void 0, h--);
                    else if (!p && f < A)
                        for (r = f; r < A; r++)
                            if (void 0 !== m[r] && u(l = m[r], d, a)) {
                                p = l, m[r] = void 0, r === A - 1 && A--, r === f && f++;
                                break
                            } p = v(p, d, n, o), s = c[w], p && p !== e && p !== s && (null == s ? e.appendChild(p) : p === s.nextSibling ? g(s) : e.insertBefore(p, s))
                }
            if (h)
                for (var w in y) void 0 !== y[w] && k(y[w], !1);
            for (; f <= A;) void 0 !== (p = m[A--]) && k(p, !1)
        }

        function k(e, t) {
            var n = e._component;
            n ? F(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), (!1 === t || null == e.__preactattr_) && g(e), C(e))
        }

        function C(e) {
            for (e = e.lastChild; e;) {
                var t = e.previousSibling;
                k(e, !0), e = t
            }
        }

        function S(e, t, n) {
            for (var o in n) t && null != t[o] || null == n[o] || y(e, o, n[o], n[o] = void 0, U);
            for (o in t) 'children' === o || 'innerHTML' === o || o in n && t[o] === ('value' === o || 'checked' === o ? e[o] : n[o]) || y(e, o, n[o], n[o] = t[o], U)
        }
        var G = {};

        function P(e) {
            var t = e.constructor.name;
            (G[t] || (G[t] = [])).push(e)
        }

        function E(e, t, n) {
            var o, a = G[e.name];
            if (e.prototype && e.prototype.render ? (o = new e(t, n), I.call(o, t, n)) : (o = new I(t, n), o.constructor = e, o.render = T), a)
                for (var r = a.length; r--;)
                    if (a[r].constructor === e) {
                        o.nextBase = a[r].nextBase, a.splice(r, 1);
                        break
                    } return o
        }

        function T(e, t, n) {
            return this.constructor(e, n)
        }

        function B(e, t, n, o, i) {
            e._disable || (e._disable = !0, (e.__ref = t.ref) && delete t.ref, (e.__key = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (!e.prevContext && (e.prevContext = e.context), e.context = o), !e.prevProps && (e.prevProps = e.props), e.props = t, e._disable = !1, 0 !== n && (1 !== n && !1 === O.syncComponentUpdates && e.base ? d(e) : x(e, 1, i)), e.__ref && e.__ref(e))
        }

        function x(e, n, o, i) {
            if (!e._disable) {
                var a, l, s, d = e.props,
                    u = e.state,
                    p = e.context,
                    c = e.prevProps || d,
                    g = e.prevState || u,
                    y = e.prevContext || p,
                    h = e.base,
                    f = e.nextBase,
                    b = h || f,
                    v = e._component,
                    w = !1;
                if (h && (e.props = c, e.state = g, e.context = y, 2 !== n && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(d, u, p) ? w = !0 : e.componentWillUpdate && e.componentWillUpdate(d, u, p), e.props = d, e.state = u, e.context = p), e.prevProps = e.prevState = e.prevContext = e.nextBase = null, e._dirty = !1, !w) {
                    a = e.render(d, u, p), e.getChildContext && (p = r(r({}, p), e.getChildContext()));
                    var C, S, P = a && a.nodeName;
                    if ('function' == typeof P) {
                        var T = m(a);
                        l = v, l && l.constructor === P && T.key == l.__key ? B(l, T, 1, p, !1) : (C = l, e._component = l = E(P, T, p), l.nextBase = l.nextBase || f, l._parentComponent = e, B(l, T, 0, p, !1), x(l, 1, o, !0)), S = l.base
                    } else s = b, C = v, C && (s = e._component = null), (b || 1 === n) && (s && (s._component = null), S = _(s, a, p, o || !h, b && b.parentNode, !0));
                    if (b && S !== b && l !== v) {
                        var D = b.parentNode;
                        D && S !== D && (D.replaceChild(S, b), !C && (b._component = null, k(b, !1)))
                    }
                    if (C && F(C), e.base = S, S && !i) {
                        for (var I = e, M = e; M = M._parentComponent;)(I = M).base = S;
                        S._component = I, S._componentConstructor = I.constructor
                    }
                }
                if (!h || o ? V.unshift(e) : !w && (e.componentDidUpdate && e.componentDidUpdate(c, g, y), O.afterUpdate && O.afterUpdate(e)), null != e._renderCallbacks)
                    for (; e._renderCallbacks.length;) e._renderCallbacks.pop().call(e);
                N || i || A()
            }
        }

        function D(e, t, n, o) {
            for (var i = e && e._component, a = i, r = e, l = i && e._componentConstructor === t.nodeName, s = l, d = m(t); i && !s && (i = i._parentComponent);) s = i.constructor === t.nodeName;
            return i && s && (!o || i._component) ? (B(i, d, 3, n, o), e = i.base) : (a && !l && (F(a), e = r = null), i = E(t.nodeName, d, n), e && !i.nextBase && (i.nextBase = e, r = null), B(i, d, 1, n, o), e = i.base, r && e !== r && (r._component = null, k(r, !1))), e
        }

        function F(e) {
            O.beforeUnmount && O.beforeUnmount(e);
            var t = e.base;
            e._disable = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;
            var n = e._component;
            n ? F(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.nextBase = t, g(t), P(e), C(t)), e.__ref && e.__ref(null)
        }

        function I(e, t) {
            this._dirty = !0, this.context = t, this.props = e, this.state = this.state || {}
        }
        r(I.prototype, {
            setState: function(e, t) {
                var n = this.state;
                this.prevState || (this.prevState = r({}, n)), r(n, 'function' == typeof e ? e(n, this.props) : e), t && (this._renderCallbacks = this._renderCallbacks || []).push(t), d(this)
            },
            forceUpdate: function(e) {
                e && (this._renderCallbacks = this._renderCallbacks || []).push(e), x(this, 2)
            },
            render: function() {}
        });

        function M(e, t, n) {
            return _(n, e, {}, !1, t, !1)
        }
        t['default'] = {
            h: i,
            createElement: i,
            cloneElement: l,
            Component: I,
            render: M,
            rerender: s,
            options: O,
            components: G
        }
    },
    55: function(e, t, n) {
        'use strict';
        n.r(t);
        var o = n(2),
            i = n(28),
            a = n.n(i),
            r = n(27),
            l = n(20);
        if (!o['default'].define) {
            var s = o['default'].modulePromises = {},
                d = o['default'].moduleDeps = {},
                u = o['default'].moduleResolveQueues = {},
                p = function(e, t) {
                    null == u[e] && (u[e] = []), u[e].push(t)
                },
                c = function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 12e4;
                    if (null != s[e]) return s[e];
                    var n = ''.concat(Object(l.eV1Protocol)(), '//').concat(Object(l.eV1Host)(), '/assets/external/').concat(e);
                    return s[e] = new a.a(function(o, i) {
                        p(e, o), Object(r['default'])(n, t).catch(function(t) {
                            setTimeout(function() {
                                throw t
                            }, 1), i(t)
                        })
                    }), s[e]
                },
                m = function(e) {
                    if (null != d[e]) return d[e];
                    throw new Error('Cannot synchronously require dep "'.concat(e, '" because it is not defined.'))
                };
            o['default'].define = function(e, t) {
                d[e] = t, null == s[e] && (s[e] = a.a.resolve(t)), u[e] && (u[e].map(function(e) {
                    return e(t)
                }), delete u[e])
            }, o['default'].asyncDefine = function(e, t) {
                return s[e] = t.then(function(t) {
                    return o['default'].define(e, t), t
                }), s[e]
            }, o['default'].asyncRequire = function(e, t) {
                return e instanceof Array ? a.a.all(e.map(function(e) {
                    return c(e, t)
                })) : c(e, t)
            }, o['default'].syncRequire = function(e) {
                return e instanceof Array ? depPath.map(function(e) {
                    return m(e)
                }) : m(e)
            }
        }
    },
    56: function(e, t, n) {
        n(57), n(58), n(60), n(18), n(17), n(61), n(62)
    },
    57: function(e, t, n) {
        var o;
        o = n(2)['default'], o.obj || (o.obj = n(5))
    },
    58: function(e, t, n) {
        var o, a, i, r, l, s, d, u, p, c, m, g;
        a = n(2)['default'], a.util || (u = n(30), g = u.unescapeHtml, c = u.snakeCase, i = u.camelCase, r = u.notSetOrTrue, d = u.poll, m = u.throttle, o = n(35), p = n(59), l = p.overpassNumbersBase64, s = p.overpassNumbersFontFace, a.util = {
            bindEvent: function() {
                var e;
                return (e = a.elem).bind.apply(e, arguments)
            },
            unbindEvent: function() {
                var e;
                return (e = a.elem).unbind.apply(e, arguments)
            },
            elemHeight: function(e) {
                return a.elem.height(e)
            },
            elemWidth: function(e) {
                return a.elem.width(e)
            },
            elemInDom: function(e) {
                return a.elem.inDom(e)
            },
            winHeight: function() {
                return a.elem.height(window)
            },
            winWidth: function() {
                return a.elem.width(window)
            },
            docHeight: function() {
                return a.elem.height(document)
            },
            docWidth: function() {
                return a.elem.width(document)
            },
            unescapeHtml: g,
            addInlineCss: o.addInlineCss,
            cssTags: o.getCssTags,
            execCssTags: o.execCssTags,
            removeCssTags: o.removeCssTags,
            scriptTags: o.getScriptTags,
            execScriptTags: o.execScriptTags,
            removeScriptTags: o.removeScriptTags,
            scrollTop: function(e) {
                var t, n, o, i;
                return null == e ? ('undefined' != typeof document && null !== document ? null == (o = document.documentElement) ? void 0 : o.scrollTop : void 0) || ('undefined' != typeof document && null !== document ? null == (i = document.body) ? void 0 : i.scrollTop : void 0) || 0 : (null != (t = document.body) && (t.scrollTop = e), null == (n = document.documentElement) ? void 0 : n.scrollTop = e)
            },
            scrollLeft: function(e) {
                var t, n, o, i;
                return null == e ? ('undefined' != typeof document && null !== document ? null == (o = document.documentElement) ? void 0 : o.scrollLeft : void 0) || ('undefined' != typeof document && null !== document ? null == (i = document.body) ? void 0 : i.scrollLeft : void 0) || 0 : (null != (t = document.body) && (t.scrollLeft = e), null == (n = document.documentElement) ? void 0 : n.scrollLeft = e)
            },
            applyTransform: function(e, t) {
                var n, o, i, a, r;
                for (o = ['msTransform', 'mozTransform', 'webkitTransform', 'transform'], r = [], (i = 0, a = o.length); i < a; i++) n = o[i], r.push(e.style[n] = t);
                return r
            },
            applyTransformOrigin: function(e, t) {
                var n, o, i, a, r;
                for (o = ['msTransformOrigin', 'mozTransformOrigin', 'webkitTransformOrigin', 'transformOrigin'], r = [], (i = 0, a = o.length); i < a; i++) n = o[i], r.push(e.style[n] = t);
                return r
            },
            vendoredCss: function(e) {
                return function(t) {
                    var n, o;
                    return o = ['-webkit-', '-moz-', '-o-', '-ms-', ''],
                        function() {
                            var i, a, r;
                            for (r = [], i = 0, a = o.length; i < a; i++) n = o[i], r.push('' + n + e + ': ' + t + ';');
                            return r
                        }().join('\n')
                }
            },
            transitionCss: function() {
                var e, t, n;
                return arguments[0] instanceof Array ? (t = arguments, n = function() {
                    var n, o, i;
                    for (i = [], n = 0, o = t.length; n < o; n++) e = t[n], i.push(e[0] + ' ' + e[1] + ' linear ' + (e[2] || '0s'));
                    return i
                }().join(',')) : (e = arguments, n = e[0] + ' ' + e[1] + ' linear ' + (e[2] || '0s')), a.util.vendoredCss('transition')(n)
            },
            transformCss: function(e) {
                return a.util.vendoredCss('transform')(e)
            },
            niceDuration: function(e) {
                var t, n, o;
                return t = o = 0, 0 < e && (t += Math.floor(e / 60), e %= 60), o = Math.round(e), 60 === o && (t += 1, o = 0), n = t + ':' + this.padNumber(o, 2), n
            },
            padNumber: function(e, t) {
                var n;
                for (null == t && (t = 0), n = '' + e; n.length < t;) n = '0' + n;
                return n
            },
            localDate: function(e) {
                var t, n;
                return null == e && (e = new Date), n = -e.getTimezoneOffset(), t = 0 <= n ? '+' : '-', '' + e.getFullYear() + '-' + this.padNumber(e.getMonth() + 1, 2) + '-' + this.padNumber(e.getDate(), 2) + 'T' + this.padNumber(e.getHours(), 2) + ':' + this.padNumber(e.getMinutes(), 2) + ':' + this.padNumber(e.getSeconds(), 2) + t + this.padNumber(Math.abs(Math.floor(n / 60)), 2) + ':' + this.padNumber(Math.abs(Math.floor(n % 60)), 2)
            },
            requestAnimationFrame: function(e) {
                var t;
                return t = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
                    return setTimeout(e, 1e3 / 60)
                }, t(e)
            },
            notSetOrTrue: r,
            indexOf: function(e, t) {
                var n, o, i;
                for (n = o = 0, i = e.length; 0 <= i ? o <= i : o >= i; n = 0 <= i ? ++o : --o)
                    if ('function' == typeof t) {
                        if (t(e[n])) return n
                    } else if (e[n] === t && e[n] === t) return n;
                return -1
            },
            insertIntoArray: function(e, t, n) {
                var o;
                return null == n && (n = {}), n.after ? (o = a.util.indexOf(e, n.detect || n.after), 0 <= o ? e.splice(o + 1, 0, t) : 'undefined' != typeof console && null !== console ? console.log(n.after + ' not found when trying to add ' + t + ' to array') : void 0) : n.before ? (o = a.util.indexOf(e, n.detect || n.before), 0 <= o ? e.splice(o, 0, t) : 'undefined' != typeof console && null !== console ? console.log(n.before + ' not found when trying to add ' + t + ' to array') : void 0) : null == n.index ? e.push(t) : e.splice(n.index, 0, t)
            },
            throttle: m,
            toArray: function(e, t) {
                if (null == t && (t = /\s+/), e instanceof Array) return e;
                if ('string' == typeof e) return e.split(t);
                throw new Error('Don\'t know how to convert ' + e + ' into an array.')
            },
            poll: d,
            aps: function(e) {
                var t, n, o, i;
                for (i = [], n = 0, o = e.length; n < o; n++) t = e[n], i.push(t);
                return i
            },
            pageLoaded: o.pageLoaded,
            isDocReady: o.isDocReady,
            onDocReady: function() {
                var e, t, n, o, i, r, l, s;
                return 1 < arguments.length ? (l = arguments[0], t = arguments[1]) : (l = 1e4, t = arguments[0]), a.util.isDocReady() ? t() : top === self && document.documentElement.doScroll ? (r = function() {
                    var t;
                    try {
                        return document.documentElement.doScroll('left'), !0
                    } catch (e) {
                        return t = e, !1
                    }
                }, a.util.poll(r, t, 50, l, t)) : (i = function() {
                    if (a.util.isDocReady()) return clearTimeout(o), s(), t()
                }, e = function() {
                    return a.elem.bind(document, 'DOMContentLoaded', i), a.elem.bind(document, 'readystatechange', i), a.elem.bind(window, 'load', i)
                }, s = function() {
                    return a.elem.unbind(document, 'DOMContentLoaded', i), a.elem.unbind(document, 'readystatechange', i), a.elem.unbind(window, 'load', i)
                }, n = function() {
                    return s(), t()
                }, o = setTimeout(n, l), e())
            },
            camelCase: i,
            snakeCase: c,
            breakIdentifier: {},
            eachIndexOf: function(e, t, n) {
                var o, i;
                for (o = -1, i = []; - 1 !== (o = e.indexOf(t, o + 1)) && !(n(o) === a.util.breakIdentifier);) i.push(void 0);
                return i
            },
            removeFromArray: function(e, t) {
                var n;
                return n = e.indexOf(t), e.splice(n, 1)
            },
            assetSizeShorthandToNumeric: function(e) {
                return '4k' === e ? 2160 : parseInt(e, 10)
            },
            numericAssetSizeSnapped: function(e, t) {
                var n, o;
                return n = e / t, o = e * t + 1, o >= 3840 * (3840 / n) ? 2160 : o >= 2560 * (2560 / n) ? 1440 : o >= 1920 * (1920 / n) ? 1080 : o >= 1280 * (1280 / n) ? 720 : o >= 960 * (960 / n) ? 540 : o >= 640 * (640 / n) ? 360 : t
            },
            parentFramesLength: function() {
                var t;
                try {
                    return parent.frames.length
                } catch (e) {
                    return t = e, a.warn(t), 1
                }
            },
            injectWistiaOverpassFontFace: function() {
                return a._overpassFontFacePromise ? a._overpassFontFacePromise : a._overpassFontFacePromise = a.asyncRequire('overpassFontFace.js')
            },
            removeWistiaOverpassFontFace: function() {
                if (a._overpassFontFacePromise) return a._overpassFontFacePromise.then(function() {
                    return function(e) {
                        var t;
                        return t = e.removeWistiaOverpassFontFace, t()
                    }
                }(this))
            }
        })
    },
    59: function(e, t, n) {
        'use strict';
        n.r(t);
        var o = n(2),
            i = n(35),
            a = '\n@font-face {\nfont-family: \'WistiaPlayerOverpassNumbers\';\nsrc: url(data:application/x-font-ttf;charset=utf-8;base64,'.concat('AAEAAAARAQAABAAQRFNJRwAAAAEAAA7oAAAACEdQT1Ow+b/jAAAONAAAAKhHU1VCAAEAAAAADtwAAAAKT1MvMl1sVb8AAAe0AAAAYGNtYXAApwIpAAAIFAAAALJjdnQgAAAAAAAAClQAAAAEZnBnbUM+8IgAAAjIAAABCWdhc3AAGgAjAAAOJAAAABBnbHlmWNZE7QAAARwAAAXMaGVhZIS0XikAAAckAAAANmhoZWEF5gGwAAAHkAAAACRobXR4GNICwAAAB1wAAAA0bG9jYQi0CoYAAAcIAAAAHG1heHAAGQBKAAAG6AAAACBuYW1lGpIbcAAAClgAAAOPcG9zdAAPAKQAAA3oAAAAPHByZXBoUamTAAAJ1AAAAH8ACgBd/wYBmgLuAAMADwAVABkAIwApADUAOQA9AEgAAAUhESEHFTMVIxUzNSM1MzUHFTM1IzUHIzUzBxUzFSMVMzUzNQcVIxUzNQcVMzUzFSM1IxUzNQcVMzUHIzUzBxUzBxUzNSM3MzUBmv7DAT3yQUKmQkKmpkIiISFCQkJkQiGFpmQiIWQhpqamIWRkhUZGpmZGIPoD6EMhJSEhJSGBaCJGRiRhISUhRiE8QiJkejgXL1Bxca1xcVAvZyEvISEvIQAAAAIARv/0AiYCyAAVACUAAAQ3Njc2NTQmJyYjIgcGBwYVFBYXFjMmJyY1NDc2MzIXFhUUBwYjAY87MRgTGRo/flo7LxkTGRs9f1wqIR8pX1oqIR4pXgw9M1tJVkOAMnU9MV1IV0Z/MXQ/X0qCeUxmX0uBfEplAAAAAAEAKAAAAOUCvAAIAAATIwYGIxUzETPlLRBHOXdGArwwJyj9wwAAAAABAEcAAAISAsgAJAAAJSE2Nz4CNzY2NzY1NCYjIgcGBxc2MzIWFRQHBgcHBgYHBhUhAhL+fwszEjIhCDBDG0J0Z1c+OhE+HX9HUTMjUhMrOhhEActDPTARJRYFHjAcRFRbaisoQRxxSzs8NSM2DR0uHFJzAAEAMv/0AggCyAA0AAAENjc2NjU0Jic2NjU0JicmJiMiBwYHFzY3NjMyFhcWFRQGIyMVMzIWFRQHBiMiJicHFhcWMwFJViIiJT83Ki8fHBxMKlM7MRpBFR8rPBkvEidLPyUvS1EwLEg+TxpBGzM6YAwfGxxLK0RiFhdSMCdDGBcaLiZAGS4aJBEQIjk6RUBMQkIlIjxCG0spMAAAAAIAHgAAAiICvAAKAA0AACUzNSMRIwEVIRUzAxEjAbhqair+kAFURkb5vTwBw/4mJb0CQ/62AAAAAQBG//QCLgK8AC0AADYWFxYzMjY3NjY1NCYnJiYjIgYHNyE1IQMXNjc2MzIXFhYVFAYHBgYjIicmJwdTLh1ETjpfIyAiIx8fUy4tVCAoASz+nDk7FykzN0QuFBccGBlEJkIuKiQpPB8MHSkjIVUtMVMfHSEeHfQ//pUSGxIWMRc+IiE+GBgbFxUkMwACADz/9AIEAsgAIQA2AAAENjc2NjU0JicmJiMiBgc2Njc2Njc1BgYHBgYVFBYXFhYzEhcWFRQGBwYjIiYnJiY1NDY3NjYzAVFSHx8jIBwdTCo2UxoIMiUlWzFKhDExNh4dHlc4RS0rFxUsSCE7FRYZGBUVOyMMJB8gVTAnTh4fJCEfLFkoKDsPNxJaPz+RSjpjIyYpAYAtLUgiOhUuGBYVOyEjPBYVGAABACgAAAHLArwADAAANjc2NzUhFSEGBwYHM+ooN4L+XQFTdzMrAkamjsSWLjyXqIq3AAAAAwBG//QCEALIACMALwBCAAAABgcGBhUUFhcGBwYVFBYXFjMyNjc2NjU0Jic2NjU0JicmJiMCJjU0NjMyFhUUBiMCJyY1NDY3NjYzMhcWFhUUBwYjAQJJGxoeMCw1JCMiH0JiMFUfHyJEOS4vHhobSSk5RUc3N0dFOUQrLRYVFToiRC4UFi0rRALIHRkZQiQuThQTNTRCLE0cPCAcHE0sQmcVE04vJEIZGR3+0D8zOkVFOjM//pspK0gfOBYWGC4WOB9IKykAAAACADz/9AIEAsgAIAA0AAASBgcGBhUUFhcWFjMyNjcGBgcGBgcVNjY3NjY1NCYnJiMCJyY1NDc2MzIWFxYWFRQGBwYGI/RUICAkIBwbTCo3VRoGLCMkWDJKfy8uMhwbPG1NLSssLUchOxYWGBgVFTsjAsgjIB9WMClNHh4iIyEtXCgpPA83Elo/PpJKOWMlTv58Ly1IRC4vGRYWOyEjPBYWGQAAAAIAMv/yALAB4wALABcAABI2NTQmIyIGFRQWMxI2NTQmIyIGFRQWM4slJRoaJSUaGiUlGholJRoBZSYZGSYmGRkm/o0mGRkmJhkZJgABAAAADQBJAAoAAAAAAAEAAAAAAAEAAAAAAAAAAAAAAAAAYgBiAJ4AsgDsAToBVgGcAfACCgJuAsAC5gABAAAAARmZfAtXkV8PPPUAAwPoAAAAAE2yzjUAAAAA1Z4zgwAe/wYCLgLuAAAABwACAAAAAAAAAfQAXQAAAAACbABGAU4AKAJYAEcCTgAyAksAHgJ0AEYCSgA8AfMAKAJWAEYCSgA8AOIAMgABAAADtv8GAAACdAAAACgCLgABAAAAAAAAAAAAAAAAAAAADQADAhYBkAAFAAgCigJYAAAASwKKAlgAAAFeABQBMgAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABERUxWAEAAIAA6Au7/BgEKA7YA+gAAAAEAAAAAAf8CvAAAACAAAgAAAAMAAAADAAAAigABAAAAAAAcAAMAAQAAAIoABgBuAAAACQAyAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAwAEAAUABgAHAAgACQAKAAsADAAEACgAAAAGAAQAAQACACAAOv//AAAAIAAw////4f/SAAEAAAAAAAAAALAALEAOBQYHDQYJFA4TCxIIERBDsAEVRrAJQ0ZhZEJDRUJDRUJDRUJDRrAMQ0ZhZLASQ2FpQkNGsBBDRmFksBRDYWlCQ7BAUHmxBkBCsQUHQ7BAUHmxB0BCsxAFBRJDsBNDYLAUQ2CwBkNgsAdDYLAgYUJDsBFDUrAHQ7BGUlp5swUFBwdDsEBhQkOwQGFCsRAFQ7ARQ1KwBkOwRlJaebMFBQYGQ7BAYUJDsEBhQrEJBUOwEUNSsBJDsEZSWnmxEhJDsEBhQrEIBUOwEUOwQGFQebIGQAZDYEKzDQ8MCkOwEkOyAQEJQxAUEzpDsAZDsApDEDpDsBRDZbAQQxA6Q7AHQ2WwD0MQOi0AAACxAAAAQrE7AEOwAFB5uP+/QBAAAQAAAwQBAAABAAAEAgIAQ0VCQ2lCQ7AEQ0RDYEJDRUJDsAFDsAJDYWpgQkOwA0NEQ2BCHLEtAEOwAVB5swcFBQBDRUJDsF1QebIJBUBCHLIFCgVDYGlCuP/NswABAABDsAVDRENgQhy4LQAdAAAAAAAAAAASAN4AAQAAAAAAAQAWAAAAAQAAAAAAAgAFABYAAQAAAAAAAwAnABsAAQAAAAAABAAcAEIAAQAAAAAABQAPAF4AAQAAAAAABgAcAG0AAQAAAAAACQAgAIkAAQAAAAAACgA4AKkAAwABBAkAAQA4AOEAAwABBAkAAgAOARkAAwABBAkAAwBOAScAAwABBAkABAA4AXUAAwABBAkABQAeAa0AAwABBAkABgA4AXUAAwABBAkACQBAAcsAAwABBAkACgBwAgsAAwABBAkAEAAsAnsAAwABBAkAEQAKAqdXaXN0aWEtUGxheWVyLU92ZXJwYXNzTGlnaHQxLjEwMDtERUxWO1dpc3RpYS1QbGF5ZXItT3ZlcnBhc3MtTGlnaHRXaXN0aWEtUGxheWVyLU92ZXJwYXNzIExpZ2h0VmVyc2lvbiAxLjAzMTAwV2lzdGlhLVBsYXllci1PdmVycGFzcy1MaWdodERlbHZlIFdpdGhyaW5ndG9uLCBUaG9tYXMgSm9ja2luQ29weXJpZ2h0IChjKSAyMDE0IGJ5IFJlZCBIYXQsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4AVwBpAHMAdABpAGEALQBQAGwAYQB5AGUAcgAtAE8AdgBlAHIAcABhAHMAcwAgAEwAaQBnAGgAdABSAGUAZwB1AGwAYQByADEALgAxADAAMAA7AEQARQBMAFYAOwBXAGkAcwB0AGkAYQAtAFAAbABhAHkAZQByAC0ATwB2AGUAcgBwAGEAcwBzAC0ATABpAGcAaAB0AFcAaQBzAHQAaQBhAC0AUABsAGEAeQBlAHIALQBPAHYAZQByAHAAYQBzAHMALQBMAGkAZwBoAHQAVgBlAHIAcwBpAG8AbgAgADEALgAwADMAMQAwADAARABlAGwAdgBlACAAVwBpAHQAaAByAGkAbgBnAHQAbwBuACwAIABUAGgAbwBtAGEAcwAgAEoAbwBjAGsAaQBuAEMAbwBwAHkAcgBpAGcAaAB0ACAAKABjACkAIAAyADAAMQA0ACAAYgB5ACAAUgBlAGQAIABIAGEAdAAsACAASQBuAGMALgAgAEEAbABsACAAcgBpAGcAaAB0AHMAIAByAGUAcwBlAHIAdgBlAGQALgBXAGkAcwB0AGkAYQAtAFAAbABhAHkAZQByAC0ATwB2AGUAcgBwAGEAcwBzAEwAaQBnAGgAdAAAAgAAAAAAAP+FABQAAAAAAAAAAAAAAAAAAAAAAAAAAAANAAAAAwATABQAFQAWABcAGAAZABoAGwAcAB0AAQADAAcACgATAAf//wAPAAEAAAAKAB4ALAABREZMVAAIAAQAAAAA//8AAQAAAAFrZXJuAAgAAAABAAAAAQAEAAIAAAABAAgAAQBmAAQAAAAIABoAIAAmADAAOgBIAFIAYAABAAb/7AABAAb/9gACAAn/9gAL//EAAgAJ//YAC//xAAMABP/7AAn/9gAL//YAAgAJ/+wAC//dAAMABv+6AAj/4gAJACMAAQAJ//YAAgABAAMACgAAAAEAAAAAAAAAAAAAAAAAAQAAAAA=', ');\n}\n');
        o['default']._overpassNumbersFontFace || (o['default']._overpassNumbersFontFace = Object(i.addInlineCss)(document.body || document.head, a));
        t['default'] = {
            overpassNumbersFontFace: '\n@font-face {\nfont-family: \'WistiaPlayerOverpassNumbers\';\nsrc: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAARAQAABAAQRFNJRwAAAAEAAA7oAAAACEdQT1Ow+b/jAAAONAAAAKhHU1VCAAEAAAAADtwAAAAKT1MvMl1sVb8AAAe0AAAAYGNtYXAApwIpAAAIFAAAALJjdnQgAAAAAAAAClQAAAAEZnBnbUM+8IgAAAjIAAABCWdhc3AAGgAjAAAOJAAAABBnbHlmWNZE7QAAARwAAAXMaGVhZIS0XikAAAckAAAANmhoZWEF5gGwAAAHkAAAACRobXR4GNICwAAAB1wAAAA0bG9jYQi0CoYAAAcIAAAAHG1heHAAGQBKAAAG6AAAACBuYW1lGpIbcAAAClgAAAOPcG9zdAAPAKQAAA3oAAAAPHByZXBoUamTAAAJ1AAAAH8ACgBd/wYBmgLuAAMADwAVABkAIwApADUAOQA9AEgAAAUhESEHFTMVIxUzNSM1MzUHFTM1IzUHIzUzBxUzFSMVMzUzNQcVIxUzNQcVMzUzFSM1IxUzNQcVMzUHIzUzBxUzBxUzNSM3MzUBmv7DAT3yQUKmQkKmpkIiISFCQkJkQiGFpmQiIWQhpqamIWRkhUZGpmZGIPoD6EMhJSEhJSGBaCJGRiRhISUhRiE8QiJkejgXL1Bxca1xcVAvZyEvISEvIQAAAAIARv/0AiYCyAAVACUAAAQ3Njc2NTQmJyYjIgcGBwYVFBYXFjMmJyY1NDc2MzIXFhUUBwYjAY87MRgTGRo/flo7LxkTGRs9f1wqIR8pX1oqIR4pXgw9M1tJVkOAMnU9MV1IV0Z/MXQ/X0qCeUxmX0uBfEplAAAAAAEAKAAAAOUCvAAIAAATIwYGIxUzETPlLRBHOXdGArwwJyj9wwAAAAABAEcAAAISAsgAJAAAJSE2Nz4CNzY2NzY1NCYjIgcGBxc2MzIWFRQHBgcHBgYHBhUhAhL+fwszEjIhCDBDG0J0Z1c+OhE+HX9HUTMjUhMrOhhEActDPTARJRYFHjAcRFRbaisoQRxxSzs8NSM2DR0uHFJzAAEAMv/0AggCyAA0AAAENjc2NjU0Jic2NjU0JicmJiMiBwYHFzY3NjMyFhcWFRQGIyMVMzIWFRQHBiMiJicHFhcWMwFJViIiJT83Ki8fHBxMKlM7MRpBFR8rPBkvEidLPyUvS1EwLEg+TxpBGzM6YAwfGxxLK0RiFhdSMCdDGBcaLiZAGS4aJBEQIjk6RUBMQkIlIjxCG0spMAAAAAIAHgAAAiICvAAKAA0AACUzNSMRIwEVIRUzAxEjAbhqair+kAFURkb5vTwBw/4mJb0CQ/62AAAAAQBG//QCLgK8AC0AADYWFxYzMjY3NjY1NCYnJiYjIgYHNyE1IQMXNjc2MzIXFhYVFAYHBgYjIicmJwdTLh1ETjpfIyAiIx8fUy4tVCAoASz+nDk7FykzN0QuFBccGBlEJkIuKiQpPB8MHSkjIVUtMVMfHSEeHfQ//pUSGxIWMRc+IiE+GBgbFxUkMwACADz/9AIEAsgAIQA2AAAENjc2NjU0JicmJiMiBgc2Njc2Njc1BgYHBgYVFBYXFhYzEhcWFRQGBwYjIiYnJiY1NDY3NjYzAVFSHx8jIBwdTCo2UxoIMiUlWzFKhDExNh4dHlc4RS0rFxUsSCE7FRYZGBUVOyMMJB8gVTAnTh4fJCEfLFkoKDsPNxJaPz+RSjpjIyYpAYAtLUgiOhUuGBYVOyEjPBYVGAABACgAAAHLArwADAAANjc2NzUhFSEGBwYHM+ooN4L+XQFTdzMrAkamjsSWLjyXqIq3AAAAAwBG//QCEALIACMALwBCAAAABgcGBhUUFhcGBwYVFBYXFjMyNjc2NjU0Jic2NjU0JicmJiMCJjU0NjMyFhUUBiMCJyY1NDY3NjYzMhcWFhUUBwYjAQJJGxoeMCw1JCMiH0JiMFUfHyJEOS4vHhobSSk5RUc3N0dFOUQrLRYVFToiRC4UFi0rRALIHRkZQiQuThQTNTRCLE0cPCAcHE0sQmcVE04vJEIZGR3+0D8zOkVFOjM//pspK0gfOBYWGC4WOB9IKykAAAACADz/9AIEAsgAIAA0AAASBgcGBhUUFhcWFjMyNjcGBgcGBgcVNjY3NjY1NCYnJiMCJyY1NDc2MzIWFxYWFRQGBwYGI/RUICAkIBwbTCo3VRoGLCMkWDJKfy8uMhwbPG1NLSssLUchOxYWGBgVFTsjAsgjIB9WMClNHh4iIyEtXCgpPA83Elo/PpJKOWMlTv58Ly1IRC4vGRYWOyEjPBYWGQAAAAIAMv/yALAB4wALABcAABI2NTQmIyIGFRQWMxI2NTQmIyIGFRQWM4slJRoaJSUaGiUlGholJRoBZSYZGSYmGRkm/o0mGRkmJhkZJgABAAAADQBJAAoAAAAAAAEAAAAAAAEAAAAAAAAAAAAAAAAAYgBiAJ4AsgDsAToBVgGcAfACCgJuAsAC5gABAAAAARmZfAtXkV8PPPUAAwPoAAAAAE2yzjUAAAAA1Z4zgwAe/wYCLgLuAAAABwACAAAAAAAAAfQAXQAAAAACbABGAU4AKAJYAEcCTgAyAksAHgJ0AEYCSgA8AfMAKAJWAEYCSgA8AOIAMgABAAADtv8GAAACdAAAACgCLgABAAAAAAAAAAAAAAAAAAAADQADAhYBkAAFAAgCigJYAAAASwKKAlgAAAFeABQBMgAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABERUxWAEAAIAA6Au7/BgEKA7YA+gAAAAEAAAAAAf8CvAAAACAAAgAAAAMAAAADAAAAigABAAAAAAAcAAMAAQAAAIoABgBuAAAACQAyAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAwAEAAUABgAHAAgACQAKAAsADAAEACgAAAAGAAQAAQACACAAOv//AAAAIAAw////4f/SAAEAAAAAAAAAALAALEAOBQYHDQYJFA4TCxIIERBDsAEVRrAJQ0ZhZEJDRUJDRUJDRUJDRrAMQ0ZhZLASQ2FpQkNGsBBDRmFksBRDYWlCQ7BAUHmxBkBCsQUHQ7BAUHmxB0BCsxAFBRJDsBNDYLAUQ2CwBkNgsAdDYLAgYUJDsBFDUrAHQ7BGUlp5swUFBwdDsEBhQkOwQGFCsRAFQ7ARQ1KwBkOwRlJaebMFBQYGQ7BAYUJDsEBhQrEJBUOwEUNSsBJDsEZSWnmxEhJDsEBhQrEIBUOwEUOwQGFQebIGQAZDYEKzDQ8MCkOwEkOyAQEJQxAUEzpDsAZDsApDEDpDsBRDZbAQQxA6Q7AHQ2WwD0MQOi0AAACxAAAAQrE7AEOwAFB5uP+/QBAAAQAAAwQBAAABAAAEAgIAQ0VCQ2lCQ7AEQ0RDYEJDRUJDsAFDsAJDYWpgQkOwA0NEQ2BCHLEtAEOwAVB5swcFBQBDRUJDsF1QebIJBUBCHLIFCgVDYGlCuP/NswABAABDsAVDRENgQhy4LQAdAAAAAAAAAAASAN4AAQAAAAAAAQAWAAAAAQAAAAAAAgAFABYAAQAAAAAAAwAnABsAAQAAAAAABAAcAEIAAQAAAAAABQAPAF4AAQAAAAAABgAcAG0AAQAAAAAACQAgAIkAAQAAAAAACgA4AKkAAwABBAkAAQA4AOEAAwABBAkAAgAOARkAAwABBAkAAwBOAScAAwABBAkABAA4AXUAAwABBAkABQAeAa0AAwABBAkABgA4AXUAAwABBAkACQBAAcsAAwABBAkACgBwAgsAAwABBAkAEAAsAnsAAwABBAkAEQAKAqdXaXN0aWEtUGxheWVyLU92ZXJwYXNzTGlnaHQxLjEwMDtERUxWO1dpc3RpYS1QbGF5ZXItT3ZlcnBhc3MtTGlnaHRXaXN0aWEtUGxheWVyLU92ZXJwYXNzIExpZ2h0VmVyc2lvbiAxLjAzMTAwV2lzdGlhLVBsYXllci1PdmVycGFzcy1MaWdodERlbHZlIFdpdGhyaW5ndG9uLCBUaG9tYXMgSm9ja2luQ29weXJpZ2h0IChjKSAyMDE0IGJ5IFJlZCBIYXQsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4AVwBpAHMAdABpAGEALQBQAGwAYQB5AGUAcgAtAE8AdgBlAHIAcABhAHMAcwAgAEwAaQBnAGgAdABSAGUAZwB1AGwAYQByADEALgAxADAAMAA7AEQARQBMAFYAOwBXAGkAcwB0AGkAYQAtAFAAbABhAHkAZQByAC0ATwB2AGUAcgBwAGEAcwBzAC0ATABpAGcAaAB0AFcAaQBzAHQAaQBhAC0AUABsAGEAeQBlAHIALQBPAHYAZQByAHAAYQBzAHMALQBMAGkAZwBoAHQAVgBlAHIAcwBpAG8AbgAgADEALgAwADMAMQAwADAARABlAGwAdgBlACAAVwBpAHQAaAByAGkAbgBnAHQAbwBuACwAIABUAGgAbwBtAGEAcwAgAEoAbwBjAGsAaQBuAEMAbwBwAHkAcgBpAGcAaAB0ACAAKABjACkAIAAyADAAMQA0ACAAYgB5ACAAUgBlAGQAIABIAGEAdAAsACAASQBuAGMALgAgAEEAbABsACAAcgBpAGcAaAB0AHMAIAByAGUAcwBlAHIAdgBlAGQALgBXAGkAcwB0AGkAYQAtAFAAbABhAHkAZQByAC0ATwB2AGUAcgBwAGEAcwBzAEwAaQBnAGgAdAAAAgAAAAAAAP+FABQAAAAAAAAAAAAAAAAAAAAAAAAAAAANAAAAAwATABQAFQAWABcAGAAZABoAGwAcAB0AAQADAAcACgATAAf//wAPAAEAAAAKAB4ALAABREZMVAAIAAQAAAAA//8AAQAAAAFrZXJuAAgAAAABAAAAAQAEAAIAAAABAAgAAQBmAAQAAAAIABoAIAAmADAAOgBIAFIAYAABAAb/7AABAAb/9gACAAn/9gAL//EAAgAJ//YAC//xAAMABP/7AAn/9gAL//YAAgAJ/+wAC//dAAMABv+6AAj/4gAJACMAAQAJ//YAAgABAAMACgAAAAEAAAAAAAAAAAAAAAAAAQAAAAA=);\n}\n',
            removeOverpassNumbersFontFace: function() {
                o['default']._overpassNumbersFontFace && Object(i.elemRemove)(o['default']._overpassNumbersFontFace)
            }
        }
    },
    6: function(e, t, n) {
        'use strict';
        n.r(t);
        var o = function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        };
        t['default'] = function(e) {
            for (var t = 0; t < (1 >= arguments.length ? 0 : arguments.length - 1); t++) o(e, 1 > t + 1 || arguments.length <= t + 1 ? void 0 : arguments[t + 1]);
            return e
        }
    },
    60: function(e, t, n) {
        var o, i, a;
        i = n(2)['default'], i.elem || (i.Elem = o = n(35), i.elem = a = {}, a.html = o.elemHtml, a.fromObject = o.elemFromObject, a.toObject = o.elemToObject, a.clone = o.elemClone, a.append = o.elemAppend, a.prepend = o.elemPrepend, a.before = o.elemBefore, a.after = o.elemAfter, a.remove = o.elemRemove, a.removeClass = o.elemRemoveClass, a.addClass = o.elemAddClass, a.hasClass = o.elemHasClass, a.classes = o.elemClasses, a.style = o.elemStyle, a.vendoredProperties = o.vendoredProperties, a.vendoredProperty = o.vendoredProperty, a.vendorPrefixes = o.vendorPrefixes, a.propsWithVendorPrefixes = o.propsWithVendorPrefixes, a.width = o.elemWidth, a.height = o.elemHeight, a.isBoxModel = o.isBoxModel, a.offset = o.elemOffset, a.containsOffset = o.elemContainsOffset, a.scrollOffset = o.elemScrollOffset, a.isHidden = o.elemIsHidden, a.inDom = o.elemInDom, a.isDescendantOf = o.elemIsDescendantOf, a.ancestorHasClass = o.elemAncestorHasClass, a.ancestors = o.elemAncestors, a.isInside = o.elemIsInside, a.animate = o.elemAnimate, a.bind = o.elemBind, a.unbind = o.elemUnbind, a.unbindAll = o.elemUnbindAll, a.unbindAllInside = o.elemUnbindAllInside, a._bindKey = o.elemBindKey, a.rebind = o.elemRebind, a.bindOnce = o.elemBindOnce, a.trigger = o.elemTrigger, a.fullscreenElement = o.fullscreenElement, a.requestFullscreen = o.elemRequestFullscreen, a.cancelFullscreen = o.elemCancelFullscreen, a.stripEventAttributes = o.elemStripEventAttributes, a.mutationObserver = o.elemMutationObserver, a.domDistance = o.elemDomDistance, a.allBetween = o.elemAllBetween)
    },
    61: function(e, t, n) {
        var o, i, a, r, l, s, d;
        if (i = n(2)['default'], o = n(5), !i.hasState)
            for (r in i.hasState = {
                    updateState: function(e) {
                        var t, n, i, r, l;
                        for (this.state || (this.state = {}), t = a(this.state, e), l = o.clone(this.state), o.merge(l, e), this.state = l, (n = 0, i = t.length); n < i; n++) r = t[n], this.trigger('property:updated:' + r);
                        if (0 !== t.length) return this.trigger('property:updated:all')
                    },
                    getState: function(e) {
                        var t;
                        return t = o.clone(this.state), e ? t[e] : stateCone
                    }
                }, a = function(e, t) {
                    var n, o, i;
                    for (o in n = [], t) i = t[o], l(i, e[o]) && n.push(o);
                    return n
                }, l = function(e, t) {
                    return i.obj.isObject(e) ? !i.obj.equalsDeep(e, t) : e !== t
                }, s = i.bindable, s) d = s[r], i.bindable.hasOwnProperty(r) && (i.hasState[r] = d)
    },
    62: function(e, t, n) {
        (function(e) {
            var t;
            if (!e.StopGo) return t = n(15).wlog, t = t.getPrefixedFunctions('StopGo'), e.StopGo = n(26), e.StopGo.prototype._debug = function() {
                return t.notice.apply(t, arguments)
            }
        })(Wistia)
    },
    63: function(e, t, n) {
        (function(e) {
            var t;
            if (!e.url) return t = n(14), e.url = {}, e.url.proto = t.proto, e.url.paramsToJson = t.queryParamsToObject, e.url.urlComponentToJson = t.urlComponentToObject, e.url.jsonToParams = t.objectToQueryParams, e.url.splitPath = t.splitPath, e.url.joinPath = t.joinPath, e.url._brack = t.brack, e.url._debrack = t.debrack, e.url.create = t.Url.create, e.url.parse = t.Url.parse
        })(Wistia)
    },
    64: function(e, t, n) {
        var o = [].slice;
        (function(e) {
            var t, i, a, r;
            if (i = e, !i.wlog) return a = n(15), r = a.wlog, t = a.LOG_LEVELS, i.wlog = r, i.log = r.error, i.error = r.error, i.warn = r.warn, i.notice = r.notice, i.info = r.info, i.debug = r.debug, i.logLevels = t, i.stacktrace = function() {
                var t;
                try {
                    throw new Error('stacktrace')
                } catch (e) {
                    return t = e, t.stack
                }
            }, i.logHelpers = {
                _log: function() {
                    var e, t, n;
                    return n = arguments[0], t = 2 <= arguments.length ? o.call(arguments, 1) : [], e = i[n], t = [].concat(this._logPrefix()).concat(t), e.apply(null, t)
                },
                _logPrefix: function() {
                    return [this.constructor.name]
                },
                error: function() {
                    var e;
                    return e = 1 <= arguments.length ? o.call(arguments, 0) : [], this._log.apply(this, ['error'].concat(o.call(e)))
                },
                warn: function() {
                    var e;
                    return e = 1 <= arguments.length ? o.call(arguments, 0) : [], this._log.apply(this, ['notice'].concat(o.call(e)))
                },
                notice: function() {
                    var e;
                    return e = 1 <= arguments.length ? o.call(arguments, 0) : [], this._log.apply(this, ['notice'].concat(o.call(e)))
                },
                info: function() {
                    var e;
                    return e = 1 <= arguments.length ? o.call(arguments, 0) : [], this._log.apply(this, ['info'].concat(o.call(e)))
                },
                debug: function() {
                    var e;
                    return e = 1 <= arguments.length ? o.call(arguments, 0) : [], this._log.apply(this, ['debug'].concat(o.call(e)))
                },
                log: function() {
                    var e;
                    return e = 1 <= arguments.length ? o.call(arguments, 0) : [], this._log.apply(this, ['error'].concat(o.call(e)))
                }
            }, i._initializers.initWLog = function() {
                var e, t, n, o, a, l, s, d, u, p, c;
                if (t = i.url.parse(location.href), document.referrer && (u = i.url.parse(document.referrer)), ((e = null == t || null == (n = t.params) ? void 0 : n.wlog) || top !== self && (e = null == u || null == (o = u.params) ? void 0 : o.wlog)) && r.setLevel(e), ((p = null == t || null == (a = t.params) ? void 0 : a.wgrep) || (p = null == u || null == (l = u.params) ? void 0 : l.wgrep)) && r.setGrep(new RegExp(p, 'i')), (c = null == t || null == (s = t.params) ? void 0 : s.wgrepv) || (c = null == u || null == (d = u.params) ? void 0 : d.wgrepv)) return r.setGrepv(new RegExp(c, 'i'))
            }, i._destructors.destroyWLog = function() {
                return null == r ? void 0 : r.reset()
            }
        })(Wistia)
    },
    65: function(e, t, n) {
        var o;
        o = n(16).cachedDetect,
            function(e) {
                return e._initializers.initDetect = function() {
                    if (!e.detect) return e.detect = o()
                }
            }(Wistia)
    },
    66: function(e, t, n) {
        (function(e) {
            var t, o, i;
            if (t = e, o = n(39).globalEventLoop, null == (i = t._initializers) || !i.initEventLoop) return t._initializers.initEventLoop = function() {
                return t.eventLoop = o
            }, t._destructors.destroyEventLoop = function() {
                var e;
                return null != (e = t.eventLoop) && e.stop(), t.eventLoop = null
            }
        })(Wistia)
    },
    67: function() {
        (function(e) {
            var t, n, o, i, a;
            if (o = e, !o.embed) return t = o.lib('player/lib/judy'), n = o.lib('promiscuous'), i = o.lib('player/lib/media_data').fetchMedia, o._embed = {}, o.embed = function(e, t) {
                var n, i;
                return null == t && (t = {}), o.info('Wistia.embed', e, t), 'string' == typeof e ? i = e : e.type && 'ab-test' === e.type ? (i = e.hashedId, [e.control, e.variant].filter(Boolean).forEach(a), o.cacheAbTest(e.hashedId, e)) : (i = e.hashedId, o.remote._convertEmbedSslToAkamai(e), o.cacheMedia(i, e)), n = new o.PublicApi(i, t), n
            }, o.embedEngine = function(e, a, r, l) {
                var s;
                return null == r && (r = {}), null == l && (l = {}), s = 'string' == typeof a ? a : a.hashedId, new n(function(n) {
                    var d;
                    return d = function(i) {
                        var a, s;
                        return a = t.buildContext(l), s = t.bestUsableEngine(a, i, r), o.asyncRequire(s).then(function(t) {
                            var a;
                            return a = new t(e, i, o.obj.merge({
                                duration: i.duration
                            }, r)), n(a)
                        })
                    }, 'string' == typeof a ? i(s, function(e) {
                        return o.remote._convertEmbedSslToAkamai(e), o.cacheMedia(s, e), d(e)
                    }) : d(a)
                })
            }, a = function(e) {
                return o.remote._convertEmbedSslToAkamai(e.media), o.cacheMedia(e.media.hashedId, e.media)
            }
        })(Wistia)
    },
    68: function(e, t, n) {
        var o = function(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            },
            i = [].slice;
        (function(e) {
            var t, a, r, l, s, d, u, p, c, m;
            if (r = e, !r.PublicApi) return t = n(11), a = n(28), c = n(10).pluginScriptsToLoad, r.Judy = t, r.Assets = n(12), u = n(35).inUserEventContext, m = n(20), s = m.eV1Protocol, l = m.eV1Host, d = n(17).globalTrigger, r.PublicApi = function() {
                function n(e, t) {
                    this._definePluginMethod = o(this._definePluginMethod, this), this._doResize = o(this._doResize, this), this._doMonitor = o(this._doMonitor, this), this._initWithMediaData = o(this._initWithMediaData, this), this._allocEmbedSlot = o(this._allocEmbedSlot, this);
                    var n, i;
                    this.on('problem', function(e) {
                        return function(t) {
                            return t.video = e, d('problem', t)
                        }
                    }(this)), this.info('initialize'), this._hasImpl = new r.StopGo, this._notReplacing = new r.StopGo, this._notReplacing(!0), this.hasPlugins = new r.StopGo, this.up = new r.StopGo, this.up(!0), this.down = new r.StopGo, this.down(!1), this.inViewport = new r.StopGo, this.inViewport(!1), this._implVersion = 0, this._playlistIndex = 0, this._attrs = {}, this.params = {}, this.options = {}, this.controls = {}, this._pluginStopGos = {}, this.plugins = {}, this.data = {}, this._definePluginMethod(), this.hashedId(e), this._givenOptions = t, this._playlist = [], this._setupContainer(), this._validate(), this._inferPropertiesBeforeMediaData(), this._dedupContainer(), this._addToGlobalCache(), this._setupBindings(), this._resetTracker(), this.supportedPlayers = [], this.addToPlaylist(this.hashedId(), t), this.down(this.looksDown()), this.up(this.looksUp()), this._hasImpl(function(e) {
                        return function() {
                            var t;
                            if (e._wvideoInUrl()) return e._scrollToContainer(), null != (t = e.popover) && t.show(), e.play()
                        }
                    }(this)), null != (i = window.wistiaEmbeds) && i.bindHandles(), this.monitor(), this.embedded(function(e) {
                        return function() {
                            return e.monitor()
                        }
                    }(this)), this.ready(function(e) {
                        return function() {
                            return e.monitor()
                        }
                    }(this)), n = function(e) {
                        return function() {
                            return e._onInitializable(function() {
                                return e._withFreeEmbedSlots(function() {
                                    var t;
                                    return e._initTime = new Date().getTime(), e.hasData(function() {
                                        return e._hasDataTime = new Date().getTime()
                                    }), e.embedded(function() {
                                        return e._embeddedTime = new Date().getTime()
                                    }), e.ready(function() {
                                        return e._readyTime = new Date().getTime()
                                    }), t = e._gatherOptions(), t.mediaData ? e._initWithMediaData(t.mediaData) : r.remote.media(e.hashedId(), e._initWithMediaData, t)
                                })
                            })
                        }
                    }(this), this._shouldBePopover() ? (this.popover = {
                        show: function(e) {
                            return function() {
                                return e._hasImpl(function() {
                                    return e.popover.show()
                                })
                            }
                        }(this),
                        hide: function(e) {
                            return function() {
                                return e._hasImpl(function() {
                                    return e.popover.hide()
                                })
                            }
                        }(this),
                        height: function(e) {
                            return function(t, n) {
                                return null == t ? 0 : e._hasImpl(function() {
                                    return e.popover.height(t, n)
                                })
                            }
                        }(this),
                        width: function(e) {
                            return function(t, n) {
                                return null == t ? 0 : e._hasImpl(function() {
                                    return e.popover.width(t, n)
                                })
                            }
                        }(this)
                    }, r.asyncRequire('popover.js').then(function(e) {
                        return function() {
                            return e.popover = new r.Popover(e), n()
                        }
                    }(this))) : n(), this.trigger('initembed')
                }
                return n.prototype._withFreeEmbedSlots = function(e) {
                    var t;
                    return this._setupEmbedSlots(), t = null, this.embedded(function(e) {
                        return function() {
                            return clearTimeout(t), t = setTimeout(function() {
                                return e._freeEmbedSlot()
                            }, e._embedSlotThrottleInterval())
                        }
                    }(this)), null == this._freeEmbedSlotOnError && (this._freeEmbedSlotOnError = function(e) {
                        return function() {
                            return e._freeEmbedSlot(), e.unbind
                        }
                    }(this)), this.rebind('servererror', this._freeEmbedSlotOnError), r._embedSlotFree(function(n) {
                        return function() {
                            return n._allocEmbedSlot(), t = setTimeout(function() {
                                return n._freeEmbedSlot()
                            }, 1e3), e()
                        }
                    }(this))
                }, n.prototype._onInitializable = function(e) {
                    return this.popover ? r.elem.isHidden(this.container) ? (this.info('popover, delaying init until container is visible'), r.eventLoop.add(this.uuid + '.wait_for_container_visible', 500, function(t) {
                        return function() {
                            var n;
                            if (!r.elem.isHidden(t.container)) {
                                t.info('container became visible, initializing');
                                try {
                                    e()
                                } catch (e) {
                                    n = e, r.error(n)
                                }
                                return r.eventLoop.remove
                            }
                        }
                    }(this))) : e() : e()
                }, n.prototype._setupEmbedSlots = function() {
                    if (null == r._embedSlots && (r._embedSlots = []), !r._embedSlotFree) return r._embedSlotFree = new r.StopGo, r._embedSlotFree(!0)
                }, n.prototype._maxEmbedSlots = function() {
                    var e, t, n;
                    return n = function() {
                        var n, o;
                        for (e in n = r.data('video'), o = [], n) t = n[e], o.push(e);
                        return o
                    }().length, 20 < n ? 5 : 10 < n ? 8 : 13
                }, n.prototype._embedSlotThrottleInterval = function() {
                    return 500
                }, n.prototype._freeEmbedSlot = function() {
                    var e;
                    if (this._setupEmbedSlots(), r._embedSlots = function() {
                            var t, n, o, i;
                            for (o = r._embedSlots, i = [], (t = 0, n = o.length); t < n; t++) e = o[t], e !== this && i.push(e);
                            return i
                        }.call(this), r._embedSlots.length < this._maxEmbedSlots()) return r._embedSlotFree(!0)
                }, n.prototype._allocEmbedSlot = function() {
                    if (this._setupEmbedSlots(), r._embedSlots.push(this), r._embedSlots.length >= this._maxEmbedSlots()) return r._embedSlotFree(!1)
                }, n.prototype._shouldLazyLoad = function() {
                    var e;
                    return e = this._gatherOptions(), !window._inWistiaIframe && parent === self && (e.lazyLoad || this.popover && !1 !== e.lazyLoad)
                }, n.prototype._initWithMediaData = function(e) {
                    var n, o, i;
                    this.info('_initWithMediaData', e);
                    try {
                        0 === r.Player.assets(e, {
                            public: !0
                        }).length && r.Metrics.videoCount(this, 'player/no-public-assets')
                    } catch (e) {
                        n = e, this.debug(n)
                    }
                    return this.isRemoved() ? void this.notice('abort, video already removed') : e.error ? (this.notice('display error message from server'), this._displayServerError(e), void this.trigger('servererror')) : (this.hashedId(e.hashedId), this._originalMediaData = e, this._mediaData = this._transformMediaData(e), this.data.media = e, this.info('_optionSources', this._optionSources()), this._opts = this._gatherOptions(), this.info('_opts', r.obj.clone(this._opts)), r.obj.merge(this._mediaData, this._opts.mergeMediaData), this._inferPropertiesAfterMediaData(), i = t.choosePlayer(this.judyCtx(), this._mediaData, this._opts), this._playerPlugins = t.playerPlugins(this.judyCtx(), i, this._mediaData, this._opts), t.logWarnings(this.judyCtx(), i, this._mediaData, this._opts), this._implVersion += 1, o = this._implVersion, this._execPlugins(function(n) {
                        return function() {
                            var a, e, l;
                            if (n._implVersion !== o) return void n.notice('_initWithMediaData(): impl changed from', o, 'to', n._implVersion, 'not completing init');
                            n.hasPlugins(!0), e = r.PublicApi.classFor(i), n.supportedPlayers = t.supportedPlayers(n.judyCtx(), n._mediaData.assets);
                            try {
                                n._impl = new e(n).init()
                            } catch (t) {
                                throw a = t, n.error('Failed to initialize impl of class', e, 'preferred', i, 'supported', n.supportedPlayers), a
                            }
                            return n.grid = n._impl.setupGrid({
                                initDimensions: !1
                            }), n._hasImpl(!0), n.hasData(!0), (null == (l = n._embedContainer) ? void 0 : l.parentNode) ? (n._runMethodsFromOptions(), n._impl.embed(), 0 < n._getFadeInTime() && r.elem.style(n._impl.gridChildren(), {
                                opacity: 0
                            }), n._impl.embedded(function() {
                                return 0 < n._getFadeInTime() ? r.elem.animate(n._impl.gridChildren(), {
                                    opacity: 1
                                }, {
                                    time: n._getFadeInTime(),
                                    callback: function() {
                                        return n.trigger('transitiondone')
                                    }
                                }) : n.trigger('transitiondone')
                            }), r.timeout(n.uuid + '.prefetch_next_media', function() {
                                return n.prefetchNextMedia()
                            }, 2e3), n._injectJsonLd()) : n.notice('embed(): container removed, giving up')
                        }
                    }(this)))
                }, n.prototype._getFadeInTime = function() {
                    return null == this._opts.fadeInTime ? 200 : this._opts.fadeInTime
                }, n.prototype.judyCtx = function() {
                    return this._judyCtx || (this._judyCtx = t.buildContext({
                        pageUrl: this._attrs.pageUrl
                    }))
                }, n.prototype._iframeUrl = function(e) {
                    return null == e && (e = ''), e + '//' + r.remote.externalEmbedHost(e) + '/embed/iframe/' + this.hashedId()
                }, n.prototype._removeJsonLd = function() {
                    if (this._jsonLd) return r.elem.remove(this._jsonLd), this._jsonLd = null
                }, n.prototype._wvideoInUrl = function() {
                    var e;
                    return !this._opts._inIframe && (e = r.url.parse(this._attrs.pageUrl), e.params.wvideo === this.hashedId())
                }, n.prototype._scrollToContainer = function() {
                    var e;
                    return e = r.elem.offset(this.container), r.util.scrollTop(e.top - 100)
                }, n.prototype._injectJsonLd = function() {
                    var e, t, n;
                    if ('notplayable' !== this.playerType) return (this._removeJsonLd(), !this._opts._inIframe) ? !1 === this._opts.seo ? void 0 : (e = {
                        "@context": 'http://schema.org/',
                        "@id": this._iframeUrl('https:'),
                        "@type": 'VideoObject',
                        duration: 'PT' + this.humanDuration().toUpperCase(),
                        name: this.name(),
                        thumbnailUrl: this.stillUrl({
                            protocol: 'https:'
                        }),
                        embedUrl: this._iframeUrl('https:'),
                        uploadDate: this._createdAtIso8601()
                    }, this._mediaData.captions && (e.transcript = null == (t = this._mediaData.captions[0]) ? void 0 : t.text), this._mediaData.seoDescription && (e.description = this._mediaData.seoDescription), n = JSON.stringify(e), this._jsonLd = r.elem.fromObject({
                        tagName: 'script',
                        type: 'application/ld+json',
                        childNodes: n
                    }), this._jsonLd._wistia = !0, r.elem.append(document.head, this._jsonLd)) : void 0
                }, n.prototype._createdAtIso8601 = function() {
                    var e, t, n, o;
                    return e = new Date(1e3 * this._mediaData.createdAt), o = e.getFullYear(), n = e.getMonth() + 1, t = e.getDate(), 10 > n && (n = '0' + n), 10 > t && (t = '0' + t), o + '-' + n + '-' + t
                }, n.prototype._setDeprecatedProperties = function() {
                    return this.options = r.obj.clone(this._opts), this.params = r.obj.clone(this._opts), r.obj.merge(this.params, this._attrs), this._attrs.email && (this.params.trackEmail = this._attrs.email), this._hasImpl(function(e) {
                        return function() {
                            var t;
                            return e.playerType = e.embedType = null == (t = e._impl) ? void 0 : t.playerType
                        }
                    }(this))
                }, n.prototype.elem = function() {
                    var e;
                    return null == (e = this._impl) ? void 0 : 'function' == typeof e.elem ? e.elem() : void 0
                }, n.prototype._resetTracker = function() {
                    var e;
                    return null != (e = this._tracker) && e.reset(), this._tracker || (this._tracker = new r.VideoTracker2(this)), this.tracker = this._tracker, this._visitorKey = this._tracker.visitorKey(), this._tracker.monitor()
                }, n.prototype._execPlugins = function(e) {
                    return this._pluginScripts = c(this.judyCtx(), this._mediaData, this._opts, this._playerPlugins), r.plugin._setFnForDefinedPlugins(this, this._pluginScripts), this.info('_execPlugins', this._pluginScripts), r.plugin._execQueue(this, this._pluginScripts, e)
                }, n.prototype._optionSources = function(e) {
                    var t, n, o, i, a, l, s, d, u, p, c, m, g;
                    for (a in null == e && (e = {}), e = r.obj.merge({
                            givenOptions: r.obj.clone(this._givenOptions),
                            mediaData: r.obj.clone(this._mediaData),
                            hashedId: this._hashedId,
                            container: this.container
                        }, e), o = e.givenOptions, 'v1' === o.version ? t = {} : e.mediaData ? (t = r.obj.clone(e.mediaData.embed_options), delete t.stillUrl) : t = {}, l = {}, c = r.url.parse(this._inferPageUrl()), s = ['autoPlay', 'controlsVisibleOnLoad', 'fadeInTime', 'fakeFullscreen', 'hls', 'muted', 'nativeMode', 'playbar', 'playerForce', 'playsinline', 'silentAutoPlay', 'swatchEnabled', 'videoFoam', 'volumeControl'], d = c.params || {}, d) g = d[a], /^w_/.test(a) && (a = a.replace(/^w_/, ''), 0 <= r.obj.indexOf(s, a) && (l[a] = g));
                    if (n = {}, p = {
                            customize: t,
                            global: r.options('__global__'),
                            hashedId: r.options(e.hashedId),
                            dom: r.options('__' + e.container.id + '_dom_options__'),
                            container: r.options(e.container.id),
                            inline: o,
                            inferredOptions: n,
                            queryParamOptions: l,
                            override: e.override || {}
                        }, o.optionSourceOverrides)
                        for (i in u = o.optionSourceOverrides, u) m = u[i], p.hasOwnProperty(i) && (p[i] = m);
                    for (i in p) m = p[i], r.obj.isEmpty(m) && delete p[i];
                    return p
                }, n.prototype._gatherOptions = function(e) {
                    var t, n, o, i, a, l, s;
                    for (t in null == e && (e = {}), o = {}, l = this._optionSources(e), l) s = l[t], 0 <= (null == (i = e.only) ? void 0 : i.indexOf(t)) ? r.obj.merge(o, s) : 0 > (null == (a = e.except) ? void 0 : a.indexOf(t)) ? r.obj.merge(o, s) : !e.only && !e.except && r.obj.merge(o, s);
                    return r.obj.cast(o), this._normalizeOptions(o), n = e.mediaData || this._mediaData, 'html5' === o.playerPreference && (o.playerPreference = 'vulcan-v2'), (null == n ? void 0 : n.useMediaDataHostLogic) && (o.useMediaDataHostLogic = !0), o
                }, n.prototype.hashedId = function(e) {
                    return null == e ? this._hashedId : (this._hashedId = e, this)
                }, n.prototype._normalizeOptions = function(e) {
                    return e.twitter && (this.info('twitter detected'), r.obj.get(e, 'plugin.socialbar-v1') && (this.info('disabled socialbar'), r.obj.set(e, 'plugin.socialbar-v1.on', !1)), r.obj.get(e, 'plugin.transcript-v2') && (this.info('disabled transcript'), r.obj.set(e, 'plugin.transcript-v2.on', !1))), null != e.playButtonVisible && (e.playButton = r.obj.cast(e.playButtonVisible), delete e.playButtonVisible), e
                }, n.prototype._setupContainer = function() {
                    var e, t, n, o;
                    if (this._containerId = this._givenOptions.container ? this._givenOptions.container : 'wistia_' + this.hashedId(), this.container = 'string' == typeof this._containerId ? document.getElementById(this._containerId) : this._containerId, this.container) {
                        for (this.container.wistiaApi = this, this._startingHtml = this.container.innerHTML, o = Array.prototype.slice.call(this.container.childNodes), (t = 0, n = o.length); t < n; t++) e = o[t], r.elem.hasClass(e, 'wistia_swatch') || r.elem.remove(e);
                        r.elem.addClass(this.container, 'wistia_embed_initialized')
                    }
                    return this.info('container', this.container)
                }, n.prototype._inferPropertiesBeforeMediaData = function() {
                    var e;
                    if (this.chrome = r.elem.fromObject({
                            id: r.seqId('wistia_chrome_'),
                            class: 'w-chrome',
                            style: r.generate.relativeBlockCss(),
                            tabindex: -1
                        }), r.elem.style(this.chrome, {
                            outline: 'none',
                            overflow: 'hidden',
                            boxSizing: 'content-box',
                            mozBoxSizing: 'content-box',
                            webkitBoxSizing: 'content-box'
                        }), e = this._gatherOptions(), this._shouldBePopover() ? (this._popoverContainer = r.elem.fromObject({
                            role: 'dialog',
                            "aria-modal": !0,
                            id: this.container.id + '_popover_container'
                        }), this._embedContainer = r.elem.fromObject({
                            id: this.container.id + '_popover',
                            style: {
                                height: this._popoverSize(e).height + 'px',
                                width: this._popoverSize(e).width + 'px'
                            }
                        }), r.elem.append(this._popoverContainer, this._embedContainer), r.elem.append(document.body, this._popoverContainer)) : this._embedContainer = this.container, r.elem.append(this._embedContainer, this.chrome), this.uuid = e.uuid ? e.uuid : r.seqId(), this.info('uuid', this.uuid), null != e.playlistLoop && (this._attrs.playlistLoop = e.playlistLoop), this._embedContainer) return this._attrs.startingWidth = r.elem.width(this._embedContainer), this._attrs.startingHeight = r.elem.height(this._embedContainer)
                }, n.prototype._shouldBePopover = function() {
                    var e;
                    return e = this._gatherOptions(), !e._inIframe && (!0 === e.popover || 'v2' === e.popover)
                }, n.prototype._popoverSize = function(e) {
                    var t, n, o, i, a;
                    return null == e && (e = this._opts), null == e && (e = {}), e.popoverSize ? (i = (null == (o = e.popoverSize) ? void 0 : o.split('x')) || [640, 360], a = i[0], t = i[1], a = parseInt(a), t = parseInt(t)) : this._mediaData ? (n = this.asset({
                        container: 'mp4',
                        width: [0, 960],
                        sortBy: 'width desc'
                    })) ? (a = n.width, t = n.height) : (a = 640, t = 360) : (a = 640, t = 360), {
                        width: a,
                        height: t
                    }
                }, n.prototype._inferPropertiesAfterMediaData = function() {
                    var e, t, n, o, i, a;
                    return this._attrs.shouldTrack = !this._opts.doNotTrack, this._attrs.seekThreshold = this._opts.seekThreshold || 1.5, i = this._inferQualityRangeFromOpts(), o = i[0], n = i[1], this._attrs.qualityMin = o, this._attrs.qualityMax = n, this._attrs.qualityMax < this._attrs.qualityMin && (this.error('qualityMax ' + this._attrs.qualityMax + ' is less than qualityMin ' + this._attrs.qualityMin + '. Setting qualityMax to ' + this._attrs.qualityMin + '.'), this._attrs.qualityMax = this._attrs.qualityMin), this._attrs.rawEmbed = null == this._opts.rawEmbed ? null == this._opts._inIframe || !r.obj.cast(this._opts._inIframe || !1) : r.obj.cast(this._opts.rawEmbed), this._attrs.pageUrl || (this._attrs.pageUrl = this._inferPageUrl()), null != this._opts.trackEmail && (this._attrs.email = this._opts.trackEmail), !this._attrs.email && this._attrs.shouldTrack && (a = this._extractEmailFromParams(), a && (this._attrs.email = a)), !this._attrs.email && r.localStorage([this._attrs.pageUrl, 'trackEmail']) && (this._attrs.email = r.localStorage([this._attrs.pageUrl, 'trackEmail'])), e = this._attrs.playerColor, t = e && e !== this._opts.playerColor, this._attrs.playerColor = r.Player._sanePlayerColor(this._opts.playerColor || '636155'), t && this.trigger('playercolorchange', this._attrs.playerColor, e), this._attrs.playerBackgroundColor = this._opts.playerBackgroundColor || '#000000', this._attrs.trackWithJs = !0, this._attrs.newStillLogic = !0, this._opts.noDeprecatedProperties || this._setDeprecatedProperties(), this
                }, n.prototype._inferPageUrl = function() {
                    var e, t, n;
                    return (null == (e = this._opts) ? void 0 : e.pageUrl) ? this._opts.pageUrl : (null == (t = window.FreshUrl) ? void 0 : t.originalUrl) ? null == (n = window.FreshUrl) ? void 0 : n.originalUrl : top === self ? location.href || '' : document.referrer || ''
                }, n.prototype._inferQualityRangeFromOpts = function() {
                    var e, t, n, o, i, a, l, s, d, u, p;
                    return t = 360, e = 2160, this._opts.videoQuality && 'auto' !== this._opts.videoQuality ? 'sd-only' === this._opts.videoQuality ? [200, 360] : 'md' === this._opts.videoQuality ? [540, e] : 'hd-only' === this._opts.videoQuality ? [720, e] : /width:/.test(this._opts.videoQuality) ? (d = this._opts.videoQuality.match(/width:(\d+)/i), n = d[0], u = d[1], p = parseInt(u, 10), (i = r.Player.asset(this._mediaData, {
                        container: /mp4|flv/,
                        status: r.Player.READY,
                        public: !0
                    })) ? (o = i.width / i.height, a = Math.round(p / o), [a, a]) : (this.warn('No assets available to determine aspect for videoQuality \'' + this._opts.videoQuality + '\', using default qualityMin/qualityMax'), [t, e])) : (this.warn('Unknown videoQuality setting \'' + this._opts.videoQuality + '\', using default qualityMin/qualityMax'), [t, e]) : (s = null == this._opts.qualityMin ? t : r.util.assetSizeShorthandToNumeric(this._opts.qualityMin), l = null == this._opts.qualityMax ? e : r.util.assetSizeShorthandToNumeric(this._opts.qualityMax), [s, l])
                }, n.prototype._extractEmailFromParams = function() {
                    var e, t, n, o, i, a;
                    return (i = (null == (n = this._attrs.pageUrl) ? void 0 : n.match(/wemail\=([^\&\#]+)/)) || null, i) ? i[1] : (a = (null == (o = this._attrs.pageUrl) ? void 0 : o.match(/wkey\=([^\&\#]+)/)) || null, a ? (e = a[1], t = r.base64.decode(e), t) : null)
                }, n.prototype._runMethodsFromOptions = function() {
                    var e, t, n, o;
                    if (null != this._opts.foreignData && this.foreignData(this._opts.foreignData), null == this._opts.email ? null != this._opts.trackEmail && this.email(this._opts.trackEmail) : this.email(this._opts.email), null != this._opts.playerLanguage && this.playerLanguage(this._opts.playerLanguage), null != this._opts.videoFoam && this.videoFoam(this._opts.videoFoam), this._opts.controlScaling && this.controlScaling(this._opts.controlScaling), this._hasImpl(function(e) {
                            return function() {
                                if (null != e._opts.playerColor && 'flash' !== e.playerType) return e.playerColor(e._opts.playerColor)
                            }
                        }(this)), null != this._opts.volume && this.volume(this._opts.volume), (!0 === this._opts.muted || 0 === this._opts.volume) && this.mute(), !1 === this._opts.muted && this.unmute(), this._opts.suppressPlay && this.suppressPlay(this._opts.suppressPlay), (!this.popover || ('function' == typeof(e = this.popover).isVisible ? e.isVisible() : void 0)) && this._opts.autoPlay && this._hasImpl(function(e) {
                            return function() {
                                return e._playSuspendedOffScreenEnabled() ? e.inViewport() ? e.play() : e.bind('enterviewport', function() {
                                    return e.play(), e.unbind
                                }) : e.play()
                            }
                        }(this)), this._opts.pause && this.pause(), null != this._opts.time) return n = r.detect.iphone || r.detect.ipad || r.detect.android, t = this.popover && !this.popover._visible, o = 'playing' !== this.state() && (n || t), this.time(this._opts.time, {
                        lazy: o
                    })
                }, n.prototype._playSuspendedOffScreenEnabled = function() {
                    return null != this._opts.playSuspendedOffScreen && 'auto' !== this._opts.playSuspendedOffScreen ? this._opts.playSuspendedOffScreen : this.isMuted()
                }, n.prototype._validate = function() {
                    var e;
                    if (e = this._errors(), 0 < e.length) {
                        throw new Error(e.join(', '))
                    }
                    return !0
                }, n.prototype._errors = function() {
                    var e;
                    return e = [], this.container || e.push('Could not find element with ID "' + this._containerId + '" in DOM. Failed to initialize video "' + this._hashedId + '".'), e
                }, n.prototype._dedupContainer = function() {
                    var e, t, n, o, i, a, l;
                    if (r.data('video')) {
                        for (l in a = [], o = r.data('video'), o) e = o[l], this.container.id && (null == (i = e.container) ? void 0 : i.id) === this.container.id && a.push(e);
                        for (t = 0, n = a.length; t < n; t++) e = a[t], this.notice('_dedupContainer', e.container.id), e.remove();
                        if (0 < a.length) return this.container.wistiaApi = this
                    }
                }, n.prototype._addToGlobalCache = function() {
                    return this.info('_addToGlobalCache', this.uuid), r.data(['video', this.uuid], this)
                }, n.prototype._displayServerError = function(e) {
                    var t;
                    return e.iframe ? (t = this._gatherOptions().useMediaDataHostLogic ? s() + '//' + l() : r.proto() + '//' + r.remote.embedHost(), this.container.innerHTML = '<iframe src=\'' + t + '/embed/iframe/' + this.hashedId() + '\' height=\'' + this.height() + '\' width=\'' + this.width() + '\' frameborder=\'0\' scrolling=\'no\'></iframe>') : this.container.innerHTML = '<div style=\'background:#fff;border:2px dashed #ddd;color:#aaa;font-family:Century Gothic,Arial;font-size:14px;text-align:center;width:' + this.width() + ';height:' + this.height() + ';\'><div style=\'padding:20px;\'>' + (e.message || e.error) + '</div></div>'
                }, n.prototype._implExec = function() {
                    var e, t;
                    return t = arguments[0], e = 2 <= arguments.length ? i.call(arguments, 1) : [], this._hasImpl(function(n) {
                        return function() {
                            var o;
                            return n._impl[t] ? n._impl[t]._originalMethod === n[t] ? void n.warn('calling ' + t + ' would result in an infinite loop') : (o = n._impl)[t].apply(o, e) : n.warn(t + ' is not defined', r.stacktrace())
                        }
                    }(this)), this
                }, n.prototype._implGet = function() {
                    var e, t, n, o;
                    return n = arguments[0], t = arguments[1], e = 3 <= arguments.length ? i.call(arguments, 2) : [], null == t && (t = null), this._hasImpl() ? this._impl[n] ? this._impl[n]._originalMethod === this[n] ? void this.warn('calling ' + n + ' would result in an infinite loop') : (o = this._impl)[n].apply(o, e) : this.warn(n + ' is not defined', r.stacktrace()) : t
                }, n.prototype._implSetOrGet = function() {
                    var e, t, n;
                    return n = arguments[0], t = arguments[1], e = 3 <= arguments.length ? i.call(arguments, 2) : [], 0 < e.length ? this._implExec.apply(this, [n].concat(i.call(e))) : this._implGet(n, t)
                }, n.prototype._implPromise = function() {
                    var e, t;
                    return t = arguments[0], e = 2 <= arguments.length ? i.call(arguments, 1) : [], new a(function(n) {
                        return function(o, i) {
                            return n._hasImpl(function() {
                                var r, l;
                                return n._impl[t] ? n._impl[t]._originalMethod === n[t] ? void n.warn('calling ' + t + ' would result in an infinite loop') : (l = (r = n._impl)[t].apply(r, e), l instanceof a ? l.then(o)['catch'](i) : o(l)) : i(new Error(t + ' is not defined on _impl'))
                            })
                        }
                    }(this))
                }, n.prototype.rebuild = function() {
                    return this._hasImpl(function(e) {
                        return function() {
                            return e._impl.rebuild(), e._runMethodsFromOptions()
                        }
                    }(this))
                }, n.prototype.fullRebuild = function(e) {
                    return null == e && (e = {}), this.replaceWith(this._impl._mediaData, r.obj.merge({
                        force: this._impl.playerType,
                        inPlace: !1,
                        transition: 'none'
                    }, e))
                }, n.prototype.rebuildAs = function(e, t) {
                    return null == t && (t = {}), this.fullRebuild(r.obj.merge(this._givenOptions, t, {
                        force: e,
                        transition: 'none'
                    }))
                }, n.prototype.replace = function(e, t) {
                    return null == t && (t = {}), this.replaceWith(e, r.obj.merge({
                        inlineOptionsOnly: !0
                    }, t))
                }, n.prototype.replaceWith = function(e, t) {
                    var n;
                    return null == t && (t = {}), this.info('replaceWith', e, t), n = function(n) {
                        return function() {
                            var o, i, a;
                            return a = n._impl ? n._replaceWithMediaData : n._initWithMediaData, n._impl.trigger('beforereplace'), n._notReplacing(!1), n.hasData(!1), n._hasImpl(!1), n._initTime = new Date().getTime(), n.hasData(function() {
                                return n._hasDataTime = new Date().getTime(), n.embedded(function() {
                                    return n._embeddedTime = new Date().getTime()
                                })
                            }), r.obj.isObject(e) ? a.call(n, e, t) : (o = r.mediaFromCache(e)) ? a.call(n, o, t) : (i = r.obj.merge({}, n._gatherOptions(), t), r.remote.media(e, function(e) {
                                return a.call(n, e, t)
                            }, i))
                        }
                    }(this), this._hasImpl(function(e) {
                        return function() {
                            return e._notReplacing(n)
                        }
                    }(this)), this
                }, n.prototype._replaceWithMediaData = function() {
                    var e;
                    return e = 1 <= arguments.length ? i.call(arguments, 0) : [], this._impl.commandQueueOpen.synchronize(function(t) {
                        return function(n) {
                            return t._replaceWithMediaDataQueuable.apply(t, e), t._notReplacing(n)
                        }
                    }(this))
                }, n.prototype._replaceWithMediaDataQueuable = function(e, n) {
                    var o, i, a, l, s, d, p, c, m, g, y, h, f, b;
                    return (null == n && (n = {}), r.remote._convertEmbedSslToAkamai(e), n = r.obj.clone(n), this.info('_replaceWithMediaData', e, n), e.error) ? (this._displayServerError(e), void this.trigger('servererror')) : (null == n.playlistIndex ? this._inPlaylist(e.hashedId) && (this._playlistIndex = this._playlistIndexOf(e.hashedId)) : (this._playlistIndex = n.playlistIndex, delete n.playlistIndex), n.inlineOptionsOnly && (s = n.inlineOptionsOnly, delete n.inlineOptionsOnly), null != n.inPlace && (l = n.inPlace, delete n.inPlace), null != n.transition && (f = n.transition, delete n.transition), null != n.transitionTime && (b = n.transitionTime, delete n.transitionTime), this.hasData(!1), this._hasImpl(!1), this._tracker.stopMonitoring(), this._clobberVideoBindings(), this._savedState = {}, this._suspended = !1, p = this._impl, 'function' == typeof p.wipeOutstandingAsyncFunctions && p.wipeOutstandingAsyncFunctions(), this._hashedId = e.hashedId, this._originalMediaData = e, this._mediaData = this._transformMediaData(e), this.data.media = e, this._givenOptions = n, this._opts = s ? this._gatherOptions({
                        only: 'inline'
                    }) : this._gatherOptions(), this._embedOptions = null, p.trigger('beforereplaceengine'), p.freezeLastFrame(), c = new r.StopGo, h = function() {
                        return c.go()
                    }, u() && !0 === this._opts.autoPlay && !p.isMuted() ? (o = p.engine, o ? (o.stopStreaming(), o.play().then(h)['catch'](h), setTimeout(h, 2e3)) : h()) : h(), !1 === (null == (m = this._mediaData.embed_options.plugin) || null == (g = m.passwordProtectedVideo) ? void 0 : g.on) && null != (null == (y = this._opts.plugin) ? void 0 : y.passwordProtectedVideo) && (this._opts.plugin.passwordProtectedVideo.on = !1), this.info('_opts', r.obj.clone(this._opts)), r.obj.merge(this._mediaData, this._opts.mediaData), this._inferPropertiesAfterMediaData(), a = 'notplayable' !== p.playerType && 'passwordprotected' !== p.playerType && (!!('html5' === p.playerType && (r.detect.iphone || r.detect.android || r.detect.ipad || r.detect.safari)) || null != l && l), this.info('inPlace', a), d = t.choosePlayer(this.judyCtx(), this._mediaData, this._opts), this._playerPlugins = t.playerPlugins(this.judyCtx(), d, this._mediaData, this._opts), t.logWarnings(this.judyCtx(), d, this._mediaData, this._opts), a && (this.removePlugins(), p.stopStreaming()), this.plugin = null, this._pluginStopGos = {}, this._definePluginMethod(), this.hasPlugins(!1), p.commandQueueOpen.setQueue([]), this.removeSwatch(), this._implVersion += 1, i = this._implVersion, c(function(e) {
                        return function() {
                            var n;
                            return null != (n = p.engine) && n.destroy(), e._execPlugins(function() {
                                var n, o;
                                return e._implVersion === i ? (e.hasPlugins(!0), e.supportedPlayers = t.supportedPlayers(e.judyCtx(), e._mediaData.assets), o = r.PublicApi.classFor(d), e._impl = new o(e).init(), e._setupBindings(), e.grid = a ? e._impl.grid = p.grid : e._impl.setupGrid({
                                    initDimensions: !1
                                }), 'function' == typeof(n = e._impl).transferStateFrom && n.transferStateFrom(p), e._hasImpl(!0), e.hasData(!0), e._resetTracker(), a || e._runMethodsFromOptions(), a ? e._replaceMode(function() {
                                    return e._impl.initFrom(p)
                                }) : e._replaceMode(function() {
                                    return e._embedWithTransitionFrom(p, f, {
                                        time: b
                                    })
                                }), e.embedded(function() {
                                    return e._notReplacing(!0)
                                }), a && e._runMethodsFromOptions(), e._allowContainerMatch() && e.width(e.containerWidth(), {
                                    constrain: !0
                                }), r.timeout(e._impl.uuid + '.inject_json_ld', function() {
                                    return e._injectJsonLd()
                                }), e.trigger('afterreplace'), r.timeout(e.uuid + '.prefetch_next_media', function() {
                                    return e.prefetchNextMedia()
                                }, 2e3)) : void e.notice('replaceWith(): impl changed from', i, 'to', e._implVersion, 'not completing replacement')
                            })
                        }
                    }(this)))
                }, n.prototype._embedWithTransitionFrom = function(e, t, n) {
                    var o;
                    return null == t && (t = 'none'), this.info('_embedWithTransitionFrom', e, t), o = new a(function(e) {
                        return function(t) {
                            var n, o;
                            return (null == (n = e._impl.lastPlayInfo()) ? void 0 : n.isPending) ? (o = e._impl.on('play', function() {
                                return o(), t()
                            }), r.timeout(e._impl.uuid + '.slow_play_fallback', function() {
                                return e._impl.embedded(function() {
                                    return o(), t()
                                })
                            }, 2e3)) : e._impl.embedded(t)
                        }
                    }(this)), 'slide' === t || 'slideleft' === t ? (this.info('slideleft'), this._impl.embed(e), o.then(function(t) {
                        return function() {
                            return e.slideOutLeft(n, function() {
                                return e.remove()
                            }), t._impl.slideInLeft(n, function() {
                                return t._impl.trigger('transitiondone')
                            })
                        }
                    }(this))) : 'slideright' === t ? (this.info('slideright'), this._impl.embed(e), o.then(function(t) {
                        return function() {
                            return e.slideOutRight(n, function() {
                                return e.remove()
                            }), t._impl.slideInRight(n, function() {
                                return t._impl.trigger('transitiondone')
                            })
                        }
                    }(this))) : 'fade' === t ? (this.info('fade'), 'transparent' !== e._opts.wmode && (e.grid.center.style.backgroundColor = '#000'), null != n.time && (n.time = Math.round(n.time / 2)), e.fadeOut(n, function(t) {
                        return function() {
                            var i;
                            return e.remove(), 'transparent' !== t._impl._opts.wmode && null != (i = t._impl.grid) && (i.center.style.backgroundColor = '#000'), t._impl.embed(e), o.then(function() {
                                return t._impl.fadeIn(n, function() {
                                    var e;
                                    return null != (e = t._impl) && (e.grid.center.style.backgroundColor = ''), t._impl.trigger('transitiondone')
                                })
                            })
                        }
                    }(this))) : 'crossfade' === t ? (this.info('crossfade'), e.grid && r.elem.style(e.grid.root, {
                        position: 'absolute',
                        zIndex: 0
                    }), r.elem.style(this._impl.grid.root, {
                        zIndex: 1
                    }), this._impl.embed(e), o.then(function(t) {
                        return function() {
                            return t._impl.fadeIn(n, function() {
                                return e.remove(), r.elem.style(t._impl.grid.root, {
                                    zIndex: ''
                                }), t._impl.trigger('transitiondone')
                            })
                        }
                    }(this))) : (this.info('no transition'), this._impl.embed(e), e.remove(), this._impl.trigger('transitiondone'))
                }, n.prototype._clobberVideoBindings = function() {
                    var e, t, n, o;
                    for (e in t = this._bindings, n = [], t) o = t[e], 'afterreplace' === e || 'beforereplace' === e || 'all' === e ? n.push(void 0) : n.push(this.unbind(e));
                    return n
                }, n.prototype._replaceMode = function(e) {
                    return this.info('_replaceMode', !0), this._impl._replacing = !0, e(), this._impl.embedded(function(e) {
                        return function() {
                            return e._impl._replacing = !1, e.info('_replaceMode', !1)
                        }
                    }(this))
                }, n.prototype.remove = function() {
                    var e, t, n, o, i, a, l, s;
                    return this.info('remove'), this.trigger('down'), this.trigger('beforeremove'), this._freeEmbedSlot(), null != (e = this.elem()) && null != (t = e.mux) && 'function' == typeof t.destroy && t.destroy(), this.removeSwatch(), this._implExec('remove', {
                        trigger: !1
                    }), this._hasImpl(!1), this._removeJsonLd(), null != (n = this.popover) && n.remove(), null != (o = this._impl) && o.stopStreaming(), null != (i = this._intersectionObserver) && i.disconnect(), r.elem.unbindAll(this._foamDummyElem), r.elem.remove(this._foamDummyElem), null != (a = r.eventLoop) && a.remove(this.uuid), r.clearTimeouts(this.uuid), this._unbindListeners(), r.elem.remove(this.chrome), r.removeData(['video', this.uuid]), this.trigger('afterremove'), this._bindings = {}, this.container.wistiaApi = 'removed', this._impl = null, null != (l = window.__wistiaStores) && (l[this.uuid] = null), null == (s = window.__wistiaStores) ? void 0 : delete s[this.uuid]
                }, n.prototype.removeSwatch = function() {
                    var e;
                    if (e = this.container.querySelector('.wistia_swatch'), e) return r.elem.remove(e)
                }, n.prototype.fullRemove = function() {
                    var e, t, n;
                    return t = this._embedContainer, n = this._popoverContainer, e = this.container, this.remove(), r.elem.remove(t), r.elem.remove(n), r.elem.remove(e), this.container = this._embedContainer = null, this
                }, n.prototype.isRemoved = function() {
                    return !r.data(['video', this.uuid])
                }, n.prototype._unbindListeners = function() {
                    if (r.elem.unbindAllInside(this.chrome), this._throttleTriggerViewport && r.elem.unbind(window, 'scroll', this._throttleTriggerViewport), this._doResize) return r.elem.unbind(window, 'resize', this._doResize)
                }, n.prototype._saveState = function() {
                    var e;
                    return this._savedState = {
                        state: this.state(),
                        time: this.time(),
                        volume: this.volume(),
                        inFullscreen: this.inFullscreen(),
                        uuid: null == (e = this._impl) ? void 0 : e.uuid
                    }
                }, n.prototype.suspend = function() {
                    var e;
                    if (!this._suspended) return this._saveState(), this.info('suspend', r.obj.clone(this._savedState)), this.pause(), this.suppressPlay(!0), ((null == (e = this._impl) ? void 0 : 'function' == typeof e._inNativeMode ? e._inNativeMode() : void 0) || !r.detect.fullscreenEnabled) && this.cancelFullscreen(), this._suspended = !0, this._suspendPlayBinding = function(e) {
                        return function() {
                            return e.pause()
                        }
                    }(this), this._suspendSeekBinding = function(e) {
                        return function() {
                            return e.pause(), e.time(e._savedState.time)
                        }
                    }(this), this.bind('play', this._suspendPlayBinding), this.bind('seek', this._suspendSeekBinding), this.trigger('suspendstatechange', !0), this
                }, n.prototype.resume = function(e) {
                    var t, n, o;
                    if (null == e && (e = {}), !!this._suspended) return (n = r.obj.merge({}, this._savedState, e), this.info('resume', r.obj.clone(n)), this._suspended = !1, this.unbind('play', this._suspendPlayBinding), this.unbind('seek', this._suspendSeekBinding), n.uuid !== (null == (t = this._impl) ? void 0 : t.uuid)) ? this : (this.suppressPlay(!1), this.volume(n.volume), o = {
                        pause: 'playing' !== n.state
                    }, null != n.time && .5 < Math.abs(n.time - this.time()) && ('ended' === n.state ? 'flash' === this.playerType && 1800 < this.duration() ? this.time(n.time - 10, o) : this.time(n.time - 1, o) : this.time(n.time, o)), 'playing' === n.state && this.play(), this.trigger('suspendstatechange', !1), this)
                }, n.prototype._setupBindings = function() {
                    return this.bind('afterend', function(e) {
                        return function() {
                            return e._suspended ? e.bind('suspendstatechange', function(t) {
                                if (!1 === t) return 'ended' === e.state() && e._nextEmbedOrPlaylistLoop(), e.unbind
                            }) : e._nextEmbedOrPlaylistLoop()
                        }
                    }(this)), this.bind('widthchange', function(e) {
                        return function() {
                            var t, n;
                            return null != (t = e._impl) && (t._width = e._width = e.width()), null == (n = e._impl) ? void 0 : n._videoWidth = e._videoWidth = e.videoWidth()
                        }
                    }(this)), this.bind('heightchange', function(e) {
                        return function() {
                            return e._impl._height = e._height = e.height(), e._impl._videoHeight = e._videoHeight = e.videoHeight()
                        }
                    }(this)), window.IntersectionObserver ? (this.looksUp() && (this.inViewport(this._isInViewportNow()), this.inViewport() ? this.trigger('enterviewport') : this.trigger('leaveviewport')), this._intersectionObserver = new IntersectionObserver(function(e) {
                        return function(t) {
                            return t[0].isIntersecting ? (e.trigger('enterviewport'), e.inViewport(!0)) : (e.trigger('leaveviewport'), e.inViewport(!1))
                        }
                    }(this)), this._intersectionObserver.observe(this.container)) : top === self ? (null == this._throttleTriggerViewport && (this._throttleTriggerViewport = r.util.throttle(300, function(e) {
                        return function() {
                            var t;
                            return (t = e._isInViewportNow(), t && !e._inViewport) ? (e._inViewport = !0, e.inViewport(!0), e.trigger('enterviewport')) : !t && e._inViewport ? (e._inViewport = !1, e.inViewport(!1), e.trigger('leaveviewport')) : void 0
                        }
                    }(this))), r.elem.rebind(window, 'scroll', this._throttleTriggerViewport), this.bind('initembed', this._throttleTriggerViewport), this.bind('up', this._throttleTriggerViewport), this.looksUp() && this._throttleTriggerViewport()) : (this._inViewport = !0, this.inViewport(!0)), r.elem.rebind(window, 'resize', this._doResize), this.bind('sphericaltap', function(e) {
                        return window.location = e
                    })
                }, n.prototype._nextEmbedOrPlaylistLoop = function() {
                    return this.nextVideo() ? this.embedNext() : this._attrs.playlistLoop ? (this.info('playlistLoop'), this.embedIndex(0, {
                        autoPlay: !0
                    })) : void 0
                }, n.prototype._isInViewportNow = function() {
                    var e, t, n, o, i;
                    return !(this.down() || this.looksDown()) && (!(window.IntersectionObserver || top === self) || (e = r.elem.offset(this.container), n = e.top, t = n + r.elem.height(this.container), i = r.util.scrollTop(), o = r.util.scrollTop() + r.elem.height(window), n >= i && n < o || t >= i && t < o || n <= i && t >= o))
                }, n.prototype._pauseEventLoop = function() {
                    var e;
                    if (r.eventLoop.pause(this.uuid), null == (e = this._impl) ? void 0 : e.uuid) return r.eventLoop.pause(this._impl.uuid)
                }, n.prototype._unpauseEventLoop = function() {
                    var e;
                    if (r.eventLoop.unpause(this.uuid), null == (e = this._impl) ? void 0 : e.uuid) return r.eventLoop.unpause(this._impl.uuid)
                }, n.prototype.playlistIndex = function() {
                    return this._playlistIndexOf(this.hashedId())
                }, n.prototype.nextVideo = function() {
                    return 0 <= this.playlistIndex() ? this._playlist[this.playlistIndex() + 1] || null : null
                }, n.prototype.previousVideo = function() {
                    return 0 < this.playlistIndex() ? this._playlist[this.playlistIndex() - 1] || null : null
                }, n.prototype._playlistIndexOf = function(e) {
                    var t, n, o, i;
                    for (t = n = 0, o = this._playlist.length; 0 <= o ? n <= o : n >= o; t = 0 <= o ? ++n : --n)
                        if ((null == (i = this._playlist[t]) ? void 0 : i.hashedId) === e) return t;
                    return -1
                }, n.prototype._inPlaylist = function(e) {
                    return 0 <= this._playlistIndexOf(e)
                }, n.prototype._setTransitionOptions = function(e) {
                    if (e.transition || (e.transition = this._opts.playlistTransition || 'fade'), e.transitionTime || (e.transitionTime = this._opts.playlistTransitionTime), e.playlistIndex && 'slide' === e.transition) return e.playlistIndex >= this._playlistIndex ? e.transition = 'slideleft' : e.transition = 'slideright'
                }, n.prototype.embedNext = function(e) {
                    var t, n;
                    return n = this.nextVideo(), this.info('embedNext', n), t = r.obj.merge({
                        autoPlay: !0
                    }, n.options, e), t.playlistIndex = this._playlistIndex + 1, this._setTransitionOptions(t), this.replaceWith(n.hashedId, t)
                }, n.prototype.embedPrevious = function(e) {
                    var t, n;
                    return n = this.previousVideo(), this.info('embedPrevious', n), t = r.obj.merge({
                        autoPlay: !0
                    }, n.options, e), t.playlistIndex = this._playlistIndex - 1, this.replaceWith(n.hashedId, t)
                }, n.prototype.embedIndex = function(e, t) {
                    var n, o;
                    return o = this._playlist[e], this.info('embedIndex', e, o), n = r.obj.merge({
                        autoPlay: !0
                    }, o.options, t), n.playlistIndex = e, this.replaceWith(o.hashedId, n)
                }, n.prototype.addToPlaylist = function(e, t, n) {
                    var o, i, a, l, s, d, u;
                    for (null == t && (t = {}), null == n && (n = {}), null == this._playlist && (this._playlist = []), s = r.util.toArray(e), (a = 0, l = s.length); a < l; a++) i = s[a], o = {
                        hashedId: i,
                        options: t
                    }, n = r.obj.clone(n), n.after ? n.detect = function(e) {
                        return e.hashedId === n.after
                    } : n.before && (n.detect = function(e) {
                        return e.hashedId === n.before
                    }), this.info('addToPlaylist', o, n), r.util.insertIntoArray(this._playlist, o, n), i === (null == (d = this.nextVideo()) ? void 0 : d.hashedId) ? this.prefetchMedia(i, t) : i === (null == (u = this.previousVideo()) ? void 0 : u.hashedId) && this.prefetchMedia(i, t);
                    return this.info('updated _playlist', r.obj.clone(this._playlist)), this.trigger('playlistchange', this._playlist), this._playlist
                }, n.prototype.setPlaylist = function(e, t) {
                    return null == t && (t = {}), this._playlist = [], this.addToPlaylist(e, t), this._playlistIndex = this._playlistIndexOf(this.hashedId()), this.trigger('playlistchange', this._playlist)
                }, n.prototype.prefetchNextMedia = function() {
                    var e;
                    if (!this._opts._inLegacyPlaylist && (e = this.nextVideo())) return this.prefetchMedia(e.hashedId, e.options)
                }, n.prototype.prefetchMedia = function(e, n) {
                    return this.info('@prefetchMedia', e), r.remote.media(e, function(o) {
                        return function(i) {
                            var a;
                            return o.info('prefetched', e), o._prefetchPluginScripts(i, n), a = t.bestUsableEngine(o.judyCtx(), i, n), r.asyncRequire(a)
                        }
                    }(this), n)
                }, n.prototype._prefetchPluginScripts = function(e, t) {
                    var n, o, i, a, s;
                    if (this.info('@_prefetchPluginScripts for', e, t), i = this._gatherOptions({
                            givenOptions: t,
                            mediaData: e,
                            hashedId: e.hashedId,
                            container: this.container
                        }), a = c(this.judyCtx(), e, i), a = function() {
                            var e, t, n;
                            for (n = [], e = 0, t = a.length; e < t; e++) s = a[e], r.plugin._prefetched[s.src] || n.push(s);
                            return n
                        }(), 0 === a.length) return void this.info('@_prefetchPluginScripts: no need to fetch plugins');
                    for (n = 0, o = a.length; n < o; n++) s = a[n], r.plugin._prefetched[s.src] = 'fetching';
                    return this.info('prefetching scripts', a), r.remote.scripts(a, function(e) {
                        return function() {
                            var t, n;
                            for (t = 0, n = a.length; t < n; t++) s = a[t], r.plugin._prefetched[s.src] = 'fetched';
                            return e.info('prefetched scripts', a)
                        }
                    }(this))
                }, n.prototype.addPlugin = function(e, t) {
                    return null == t && (t = {}), this.info('addPlugin', e, t), new a(function(n) {
                        return function(o) {
                            return n._hasImpl(function() {
                                return n.hasPlugin(e) || r.plugin._inject(n, e, t), n.plugin(e).then(function(e) {
                                    return o(e)
                                })
                            })
                        }
                    }(this))
                }, n.prototype.hasPlugin = function(e) {
                    return !!this.plugin[e]
                }, n.prototype.turnOffPluginApis = function() {
                    var e, t, n, o, i;
                    for (n in this.info('turnOffPluginApis'), o = this.plugin, i = [], o) t = o[n], i.push('function' == typeof(e = this._pluginStopGos)[n] ? e[n](!1) : void 0);
                    return i
                }, n.prototype.removePlugin = function(t) {
                    var n, e, o;
                    if (e = this.plugin[t], !!e) {
                        try {
                            'function' == typeof e.remove && e.remove()
                        } catch (e) {
                            n = e, setTimeout(function() {
                                return function() {
                                    throw n
                                }
                            }(this), 0)
                        }
                        return delete this.plugin[t], (null == (o = this._impl.plugin) ? void 0 : o[t]) && delete this._impl.plugin[t], e.uuid && this.plugins && (delete this.plugins[this.uuid], r.removeData(['plugins', t, this.uuid, e.uuid])), this.fit(), this.trigger('pluginremoved', t)
                    }
                }, n.prototype.removePlugins = function() {
                    var e, t, n, o;
                    for (t in this.info('removePlugins'), n = this.plugin, o = [], n) e = n[t], o.push(this.removePlugin(t));
                    return o
                }, n.prototype.containerWidth = function() {
                    return this._attrs.rawEmbed ? r.elem.width(this._embedContainer) : r.util.winWidth()
                }, n.prototype.containerHeight = function() {
                    return this._attrs.rawEmbed ? r.elem.height(this._embedContainer) : r.util.winHeight()
                }, n.prototype._goToDownState = function() {
                    return this.info('_goToDownState'), this._stateBeforeDown = this._lastState, this.up(!1), this.down(!0), 'flash' !== this.embedType && this.pause(), this.ready(!1), this.trigger('down')
                }, n.prototype._goToUpState = function() {
                    var e;
                    return this.info('_goToUpState'), this.down(!1), this._ignoreUp = !0, this._doSizing(), this._ignoreUp = !1, this.up(!0), this.ready(!1), 'flash' === this.embedType ? this.rebuild() : (this.fit(), null != (e = this._impl) && e.checkForReady(), 'playing' === this._stateBeforeDown && this.play()), this.trigger('up')
                }, n.prototype._checkDownState = function() {
                    var e;
                    return (e = this.looksDown(), this.up() && e) ? (this.info('moving to down state'), this._goToDownState()) : this.down() && !e ? (this.info('moving to up state'), this._goToUpState()) : void 0
                }, n.prototype._removeHandleIfGoneFromDOM = function() {
                    return !!this.embedded() && (this.elem() ? this._embedContainer && !this._embedContainer.parentNode && (this.warn('container removed from DOM', this._embedContainer.id), this.remove(), !0) : (this.warn('video element removed from DOM', this._embedContainer.id), this.remove(), !0))
                }, n.prototype._doFoam = function() {
                    var e, t, n, o, i, a, l, s, d, u, p;
                    if (null == this._parentBoxSizing && (this._parentBoxSizing = r.elem.style(this._embedContainer.parentNode, 'box-sizing')), this.popover ? (p = r.elem.width(window), u = r.elem.height(window), d = p / u, s = Math.min(p, u), t = 500 < s ? 160 : .2 > Math.abs(d - this.aspect()) ? .2 * s : .1 * s, l = d > this.aspect() ? Math.round((u - t) * this.aspect()) : p - t) : 'border-box' === this._parentBoxSizing ? (!this._foamDummyElem && (this._foamDummyElem = r.elem.fromObject({
                            class: 'wistia_video_foam_dummy',
                            "data-source-container-id": this._embedContainer.id,
                            style: {
                                border: 0,
                                display: 'block',
                                height: 0,
                                margin: 0,
                                padding: 0,
                                position: 'static',
                                visibility: 'hidden',
                                width: 'auto'
                            }
                        }), r.elem.before(this._embedContainer, this._foamDummyElem)), l = r.elem.width(this._foamDummyElem)) : l = r.elem.width(this._embedContainer.parentNode), !isNaN(l) && (this._lastParentWidth !== l || !this._didFoam)) return this._didFoam = !0, a = l, i = a - this.extraWidth(), o = this.heightForWidth(i), n = o + this.extraHeight(), e = this.videoFoam(), e.maxHeight && n > e.maxHeight && (n = e.maxHeight, o = n - this.extraHeight(), i = this.widthForHeight(o), a = i + this.extraWidth()), e.maxWidth && a > e.maxWidth && (a = e.maxWidth, i = a - this.extraWidth(), o = this.heightForWidth(i), n = o + this.extraHeight()), e.minHeight && n < e.minHeight && (n = e.minHeight, o = n - this.extraHeight(), i = this.widthForHeight(o), a = i + this.extraWidth()), e.minWidth && a < e.minWidth && (a = e.minWidth, i = a - this.extraWidth(), o = this.heightForWidth(i), n = o + this.extraHeight()), this.info('videoFoam set width', a), this.width(a, {
                        constrain: !0
                    }), this._lastParentWidth = l
                }, n.prototype._allowFoam = function() {
                    var e;
                    return this._hasImpl() && this.grid && (this.up() || this._ignoreUp) && this.looksUp() && this._attrs.rawEmbed && (this._attrs.videoFoam || (null == (e = this.popover) ? void 0 : e.isResponsive()))
                }, n.prototype._allowContainerMatch = function() {
                    return (this.up() || this._ignoreUp) && !this._opts.dontMonitorSize && !this.inFullscreen()
                }, n.prototype._doContainerMatch = function() {
                    var e, t;
                    if (t = this.containerWidth(), e = this.containerHeight(), this._lastWidth !== t && (this.notice('container width changed to ' + t + ', matching'), this.width(t, {
                            dontChangeContainer: !0
                        }), this.info('_doContainerMatch set width', t), this.trigger('widthchange', t, this._lastWidth), this._lastWidth = t), this._lastHeight !== e) return this.notice('container height changed to ' + e + ', matching'), this.height(e, {
                        dontChangeContainer: !0
                    }), this.trigger('heightchange', e, this._lastHeight), this._lastHeight = e
                }, n.prototype.monitor = function() {
                    return this.info('monitor'), this._lastWidth = this._attrs.startingWidth, this._lastHeight = this._attrs.startingHeight, this._lastParentWidth = this.width(), this._didFoam = !1, this._hasImpl(function(e) {
                        return function() {
                            return r.eventLoop.add(e.uuid + '.monitor', 500, e._doMonitor)
                        }
                    }(this))
                }, n.prototype._doMonitor = function() {
                    if (!this._removeHandleIfGoneFromDOM()) return this._checkDownState(), this.chrome && !r.elem.inDom(this.chrome) && (this.notice('Chrome was removed from DOM. Injecting it back in.'), r.elem.append(this._embedContainer, this.chrome)), this._doSizing()
                }, n.prototype._doSizing = function() {
                    return this.popover ? this.popover.fixedSizeTooBigForWindow() ? this._doFoam() : this._opts.popoverSize ? (this._lastWidth = this.width(), this._lastHeight = this.height(), this.width(this._popoverSize().width), this.height(this._popoverSize().height)) : this._doFoam() : this._allowFoam() ? this._doFoam() : this._allowContainerMatch() ? this._doContainerMatch() : void 0
                }, n.prototype.looksDown = function() {
                    return !this._embedContainer || !r.elem.inDom(this._embedContainer) || r.elem.isHidden(this._embedContainer)
                }, n.prototype.looksUp = function() {
                    return !this.looksDown()
                }, n.prototype._doResize = function() {
                    return 'function' == typeof this._throttleTriggerViewport && this._throttleTriggerViewport(), this._debounceDoMonitor || this.embedded(function(e) {
                        return function() {
                            return r.util.requestAnimationFrame(function() {
                                return e._doMonitor(), e._debounceDoMonitor = !1
                            })
                        }
                    }(this)), this._debounceDoMonitor = !0
                }, n.prototype._definePluginMethod = function() {
                    return this.plugin ? void 0 : this.plugin = function(e) {
                        return function(t, n) {
                            var o;
                            return (o = e._pluginStopGos[t]) || (o = e._pluginStopGos[t] = new r.StopGo, o(!!e.plugin[t], e.plugin[t])), n ? o(function() {
                                return n(e.plugin[t])
                            }) : o
                        }
                    }(this)
                }, n.prototype.videoFoam = function(e) {
                    return null == e ? this._attrs.videoFoam || !1 : (this.info('videoFoam', e), this._attrs.videoFoam = e, this.monitor(), e)
                }, n.prototype._formattedDurationToSeconds = function(e) {
                    return r.TimeHelper.isValidHumanDuration(e) ? r.TimeHelper.humanDurationToSeconds(e) : r.TimeHelper.isValidIso8601(e) ? r.TimeHelper.iso8601ToSeconds(e) : e
                }, n.prototype._transformAndUpdateMediaData = function() {
                    var e;
                    return this._mediaData = this._transformMediaData(this._originalMediaData), null == (e = this._impl) ? void 0 : e._mediaData = this._mediaData
                }, n.prototype._mediaDataTransforms = function() {
                    var e;
                    return e = [], r.remote._isEmbedSslMedia(this._originalMediaData) || this._useEmbedSslHost && e.push(function(e) {
                        var t, n, o, i, a;
                        for (i = e.assets, n = 0, o = i.length; n < o; n++) t = i[n], t.url && (a = r.url.parse(t.url), a.host = 'embed-ssl.wistia.com', a.protocol = 'https:', t.url = a.absolute());
                        return e
                    }), e
                }, n.prototype._transformMediaData = function(e, t) {
                    var n, o, i, a;
                    for (null == t && (t = this._mediaDataTransforms()), i = r.obj.clone(e), (n = 0, o = t.length); n < o; n++) a = t[n], i = a(i);
                    return i
                }, n.prototype.specialBind = function() {
                    var e, n, o, a, t, r;
                    return n = arguments[0], e = 2 <= arguments.length ? i.call(arguments, 1) : [], 'crosstime' === n ? (a = e[0], o = e[1], this.onCrossTime(a, o), function(e) {
                        return function() {
                            return e.unbindOnCrossTime(a, o)
                        }
                    }(this)) : 'betweentimes' === n && (t = e[0], r = e[1], o = e[2], this.betweenTimes(t, r, o), function(e) {
                        return function() {
                            return e.unbindBetweenTimes(t, r, o)
                        }
                    }(this))
                }, n.prototype.specialUnbind = function() {
                    var e, n, o, a, t, r;
                    return n = arguments[0], e = 2 <= arguments.length ? i.call(arguments, 1) : [], 'crosstime' === n ? (a = e[0], o = e[1], this.unbindOnCrossTime(a, o), !0) : 'betweentimes' === n && (t = e[0], r = e[1], o = e[2], this.unbindBetweenTimes(t, r, o), !0)
                }, n.prototype.onCrossTime = function(e, t) {
                    var n, o, i, a, l, s, d;
                    if (!/^(\d+\.)?\d+$/.test(e)) throw 'onCrossTime: Expected first argument to be a number';
                    if ('function' != typeof t) throw 'onCrossTime: Expected second argument to be a function';
                    return null == this._onCrossTimeBindings && (this._onCrossTimeBindings = {}), null == (o = this._onCrossTimeBindings)[e] && (o[e] = []), d = this.uuid + '.' + r.uniqId('after_time_'), n = this.time() > e, i = function(o) {
                        return function() {
                            var i;
                            return o.time() < e ? a() : !n && (n = !0, i = t.call(o), i === o.unbind) ? o.unbindOnCrossTime(e, t) : void 0
                        }
                    }(this), a = function(t) {
                        return function() {
                            return t.time() >= e ? (r.clearTimeouts(d), i()) : n ? void 0 : r.timeout(d, i, 1e3 * (e - t.time()))
                        }
                    }(this), l = function(t) {
                        return function() {
                            if (t.time() < e) {
                                if (n = !1, 2 > e - t.time()) return a()
                            } else if (!n) return i()
                        }
                    }(this), s = function() {
                        return function() {
                            return r.clearTimeouts(d)
                        }
                    }(this), this.bind('play', l), this.bind('timechange', l), this.bind('pause', s), this.bind('end', s), this.bind('waiting', s), 'playing' !== this.state() || n || l(), this._onCrossTimeBindings[e].push({
                        fn: t,
                        setupTimeoutFromNowIfClose: l,
                        suspendTimeoutIndefinitely: s
                    }), this
                }, n.prototype.unbindOnCrossTime = function(e, t) {
                    var n, o, i, a, r, l;
                    if (!(this._onCrossTimeBindings && this._onCrossTimeBindings[e])) return this;
                    for (n = null, i = 0, l = this._onCrossTimeBindings[e], (a = 0, r = l.length); a < r; a++) {
                        if (o = l[a], o.fn === t) {
                            n = o;
                            break
                        }
                        i += 1
                    }
                    return n ? (this.unbind('play', n.setupTimeoutFromNowIfClose), this.unbind('timechange', n.setupTimeoutFromNowIfClose), this.unbind('pause', n.suspendTimeoutIndefinitely), this.unbind('end', n.suspendTimeoutIndefinitely), this.unbind('waiting', n.suspendTimeoutIndefinitely), this._onCrossTimeBindings[e].splice(i, 1), 0 === this._onCrossTimeBindings[e].length && delete this._onCrossTimeBindings[e], this) : this
                }, n.prototype.betweenTimes = function(e, n, o) {
                    var t, i, a, r;
                    if (!(/^(\d+\.)?\d+$/.test(e) && /^(\d+\.)?\d+$/.test(n))) throw 'betweenTimes: Expected first two arguments to be numbers';
                    if ('function' != typeof o) throw 'betweenTimes: Expected second argument to be a function';
                    return a = e + '-' + n, null == this._betweenTimeBindings && (this._betweenTimeBindings = {}), null == (t = this._betweenTimeBindings)[a] && (t[a] = []), r = !1, i = function(i) {
                        return function() {
                            var a, l;
                            if (l = i.time(), e <= l && l < n && !r ? (r = !0, a = o.call(i, r)) : !(e <= l && l < n) && r && (r = !1, a = o.call(i, r)), a === i.unbind) return i.unbindBetweenTimes(e, n, o)
                        }
                    }(this), this.onCrossTime(e, i), this.onCrossTime(n, i), this.bind('timechange', i), i(), this._betweenTimeBindings[a].push({
                        fn: o,
                        onTimechange: i
                    }), this
                }, n.prototype.unbindBetweenTimes = function(e, t, n) {
                    var o, i, a, r, l, s, d;
                    if (d = e + '-' + t, !this._betweenTimeBindings[d]) return this;
                    for (o = null, a = 0, s = this._betweenTimeBindings[d], (r = 0, l = s.length); r < l; r++) {
                        if (i = s[r], i.fn === n) {
                            o = i;
                            break
                        }
                        a += 1
                    }
                    return o ? (this.unbindOnCrossTime(e, o.onTimechange), this.unbindOnCrossTime(t, o.onTimechange), this.unbind('timechange', o.onTimechange), this._betweenTimeBindings[d].splice(a, 1), 0 === this._betweenTimeBindings[d].length && delete this._betweenTimeBindings[d], this) : this
                }, n.prototype.aspect = function() {
                    return this._implGet('aspect', 0)
                }, n.prototype.asset = function() {
                    return this._implGet.apply(this, ['asset', null].concat(i.call(arguments)))
                }, n.prototype.assets = function() {
                    return this._implGet.apply(this, ['assets', null].concat(i.call(arguments)))
                }, n.prototype.bigPlayButtonEnabled = function() {
                    return this._implSetOrGet.apply(this, ['bigPlayButtonEnabled', !1].concat(i.call(arguments)))
                }, n.prototype.bigPlayButtonTimeEnabled = function() {
                    return this._implSetOrGet.apply(this, ['bigPlayButtonTimeEnabled', !1].concat(i.call(arguments)))
                }, n.prototype.cancelOverlay = function() {
                    return this._implPromise.apply(this, ['cancelOverlay'].concat(i.call(arguments)))
                }, n.prototype.cancelFullscreen = function() {
                    return this._implExec('cancelFullscreen')
                }, n.prototype.captureCurrentFrame = function() {
                    return this._implGet.apply(this, ['captureCurrentFrame', null].concat(i.call(arguments)))
                }, n.prototype.controlScaling = function() {
                    return this._implSetOrGet.apply(this, ['controlScaling', 'auto'].concat(i.call(arguments)))
                }, n.prototype.createControl = function() {
                    return this._implGet.apply(this, ['createControl', null].concat(i.call(arguments)))
                }, n.prototype.defineOverlay = function() {
                    return this._implExec.apply(this, ['defineOverlay'].concat(i.call(arguments)))
                }, n.prototype.destroyControl = function() {
                    return this._implExec.apply(this, ['destroyControl'].concat(i.call(arguments)))
                }, n.prototype.duration = function() {
                    return this._implGet('duration', null)
                }, n.prototype.embedded = function() {
                    return this._implSetOrGet.apply(this, ['embedded', !1].concat(i.call(arguments)))
                }, n.prototype.embedOptions = function() {
                    return this._hasImpl() ? this._implGet.apply(this, ['embedOptions', {}].concat(i.call(arguments))) : this._embedOptions ? this._embedOptions : this._embedOptions = this._gatherOptions()
                }, n.prototype.enterInputContext = function() {
                    return this._implExec.apply(this, ['enterInputContext'].concat(i.call(arguments)))
                }, n.prototype.eventKey = function() {
                    return this._tracker.eventKey() || null
                }, n.prototype.exitInputContext = function() {
                    return this._implExec.apply(this, ['exitInputContext'].concat(i.call(arguments)))
                }, n.prototype.extraHeight = function() {
                    return this._implGet('extraHeight', 0)
                }, n.prototype.extraWidth = function() {
                    return this._implGet('extraWidth', 0)
                }, n.prototype.fit = function() {
                    return this._implExec('fit')
                }, n.prototype.fullscreenButtonEnabled = function() {
                    return this._implSetOrGet.apply(this, ['fullscreenButtonEnabled', !1].concat(i.call(arguments)))
                }, n.prototype.focus = function() {
                    return this._implExec('focus')
                }, n.prototype.getBuffered = function() {
                    return this._implGet('getBuffered', [])
                }, n.prototype.getFocusedChapter = function() {
                    return this._implGet('getFocusedChapter', null)
                }, n.prototype.getInputContext = function() {
                    return this._implGet('getInputContext', [])
                }, n.prototype.getOverlays = function() {
                    return this._implGet('getOverlays', {})
                }, n.prototype.getRegion = function() {
                    return this._implGet.apply(this, ['getRegion', null].concat(i.call(arguments)))
                }, n.prototype.getVideoElement = function() {
                    return this._implGet('getVideoElement', null)
                }, n.prototype.hasData = function() {
                    return this._implSetOrGet.apply(this, ['hasData', !1].concat(i.call(arguments)))
                }, n.prototype.height = function() {
                    return this._implSetOrGet.apply(this, ['height', null].concat(i.call(arguments)))
                }, n.prototype.heightForWidth = function() {
                    return this._implGet.apply(this, ['heightForWidth', null].concat(i.call(arguments)))
                }, n.prototype.hideControls = function() {
                    return this._implExec.apply(this, ['hideControls', null].concat(i.call(arguments)))
                }, n.prototype.humanDuration = function() {
                    return r.TimeHelper.secondsToHumanDuration(this.duration())
                }, n.prototype.ieSizeHack = function() {
                    return this._implExec('ieSizeHack')
                }, n.prototype.inFullscreen = function() {
                    return this._implGet('inFullscreen', !1)
                }, n.prototype.inSilentPlaybackMode = function() {
                    return this._implGet('inSilentPlaybackMode', !1)
                }, n.prototype.isMuted = function() {
                    return this._implGet('isMuted')
                }, n.prototype.lastPauseInfo = function() {
                    return this._implGet('lastPauseInfo', {})
                }, n.prototype.lastPlayInfo = function() {
                    return this._implGet('lastPlayInfo', {})
                }, n.prototype.layout = function() {
                    return this._implSetOrGet.apply(this, ['layout', 'primary'].concat(i.call(arguments)))
                }, n.prototype.look = function() {
                    return this._implSetOrGet.apply(this, ['look', {}].concat(i.call(arguments)))
                }, n.prototype.mp4Asset = function() {
                    return this._implGet.apply(this, ['mp4Asset', null].concat(i.call(arguments)))
                }, n.prototype.mute = function() {
                    return this._implExec('mute')
                }, n.prototype.playerLanguage = function(e) {
                    return e && (this._wasPlayerLanguageSetViaApi = !0), this._implSetOrGet.apply(this, ['playerLanguage', 'en-US'].concat(i.call(arguments)))
                }, n.prototype.name = function() {
                    return this._implGet('name', '')
                }, n.prototype.originalAsset = function() {
                    return this._implGet.apply(this, ['originalAsset', null].concat(i.call(arguments)))
                }, n.prototype.pause = function() {
                    return this._implExec('pause')
                }, n.prototype.percentWatched = function() {
                    return this._implGet('percentWatched', 0)
                }, n.prototype.playbarControlEnabled = function() {
                    return this._implSetOrGet.apply(this, ['playbarControlEnabled', !1].concat(i.call(arguments)))
                }, n.prototype.play = function() {
                    return this._implExec('play')
                }, n.prototype.playbackRate = function() {
                    return this._implSetOrGet.apply(this, ['playbackRate', 1].concat(i.call(arguments)))
                }, n.prototype.playbackRateControlEnabled = function() {
                    return this._implSetOrGet.apply(this, ['playbackRateControlEnabled', !1].concat(i.call(arguments)))
                }, n.prototype.playerColor = function() {
                    return this._implSetOrGet.apply(this, ['playerColor', '636155'].concat(i.call(arguments)))
                }, n.prototype.playerBackgroundColor = function() {
                    return this._implSetOrGet.apply(this, ['playerBackgroundColor', '000000'].concat(i.call(arguments)))
                }, n.prototype.requestFullscreen = function() {
                    return this._implExec('requestFullscreen')
                }, n.prototype.requestOverlay = function() {
                    return this._implPromise.apply(this, ['requestOverlay'].concat(i.call(arguments)))
                }, n.prototype.qualityControlEnabled = function() {
                    return this._implSetOrGet.apply(this, ['qualityControlEnabled', !1].concat(i.call(arguments)))
                }, n.prototype.ready = function() {
                    return this._implSetOrGet.apply(this, ['ready', !1].concat(i.call(arguments)))
                }, n.prototype.releaseChromeless = function() {
                    return this._implExec.apply(this, ['releaseChromeless'].concat(i.call(arguments)))
                }, n.prototype.releaseControls = function() {
                    return this._implExec.apply(this, ['releaseControls'].concat(i.call(arguments)))
                }, n.prototype.requestChromeless = function() {
                    return this._implExec.apply(this, ['requestChromeless'].concat(i.call(arguments)))
                }, n.prototype.requestControls = function() {
                    return this._implExec.apply(this, ['requestControls'].concat(i.call(arguments)))
                }, n.prototype.secondsWatched = function() {
                    return this._implGet('secondsWatched', 0)
                }, n.prototype.secondsWatchedVector = function() {
                    return this._implGet('secondsWatchedVector', [])
                }, n.prototype.selectableQualities = function() {
                    return this._implGet('selectableQualities', [])
                }, n.prototype.selectedQuality = function() {
                    return this._implGet('selectedQuality', [])
                }, n.prototype.setFocusedChapter = function() {
                    return this._implSetOrGet.apply(this, ['setFocusedChapter', null].concat(i.call(arguments)))
                }, n.prototype.settingsControlEnabled = function() {
                    return this._implSetOrGet.apply(this, ['settingsControlEnabled', !1].concat(i.call(arguments)))
                }, n.prototype.showControls = function() {
                    return this._implExec.apply(this, ['showControls', null].concat(i.call(arguments)))
                }, n.prototype.smallPlayButtonEnabled = function() {
                    return this._implSetOrGet.apply(this, ['smallPlayButtonEnabled', !1].concat(i.call(arguments)))
                }, n.prototype.state = function() {
                    return this._implGet('state', 'beforeplay')
                }, n.prototype.stillUrl = function() {
                    return this._implGet.apply(this, ['stillUrl', null].concat(i.call(arguments)))
                }, n.prototype.suppressPlay = function() {
                    return this._implSetOrGet.apply(this, ['suppressPlay', this].concat(i.call(arguments)))
                }, n.prototype.thumbnailAssets = function() {
                    return this._implGet('thumbnailAssets', [])
                }, n.prototype.time = function() {
                    var e, n;
                    return n = arguments[0], e = 2 <= arguments.length ? i.call(arguments, 1) : [], null == n ? this._implSetOrGet('time', 0) : this._implSetOrGet.apply(this, ['time', 0, this._formattedDurationToSeconds(n)].concat(i.call(e)))
                }, n.prototype.timeInHumanDuration = function() {
                    return e.TimeHelper.secondsToHumanDuration(this._implGet.apply(this, ['time', 0].concat(i.call(arguments))))
                }, n.prototype.timeInIso8601Duration = function() {
                    return e.TimeHelper.secondsToIso8601(this._implGet.apply(this, ['time', 0].concat(i.call(arguments))))
                }, n.prototype.trim = function() {
                    return this._implSetOrGet.apply(this, ['trim', {
                        start: 0,
                        end: -1
                    }].concat(i.call(arguments)))
                }, n.prototype.unmute = function() {
                    return this._implExec('unmute')
                }, n.prototype.undefineOverlay = function() {
                    return this._implPromise.apply(this, ['undefineOverlay'].concat(i.call(arguments)))
                }, n.prototype.videoHeight = function() {
                    return this._implSetOrGet.apply(this, ['videoHeight', null].concat(i.call(arguments)))
                }, n.prototype.videoQuality = function() {
                    return this._implSetOrGet.apply(this, ['videoQuality', 'auto'].concat(i.call(arguments)))
                }, n.prototype.videoWidth = function() {
                    return this._implSetOrGet.apply(this, ['videoWidth', null].concat(i.call(arguments)))
                }, n.prototype.visitorKey = function() {
                    return this._tracker.visitorKey() || null
                }, n.prototype.volume = function() {
                    return this._implSetOrGet.apply(this, ['volume', 0].concat(i.call(arguments)))
                }, n.prototype.volumeControlEnabled = function() {
                    return this._implSetOrGet.apply(this, ['volumeControlEnabled', !1].concat(i.call(arguments)))
                }, n.prototype.whenVideoElementInDom = function() {
                    return new a(function(e) {
                        return function(t) {
                            return e._hasImpl(function() {
                                return t(e._implGet.apply(e, ['whenVideoElementInDom', null].concat(i.call(arguments))))
                            })
                        }
                    }(this))
                }, n.prototype.width = function() {
                    return this._implSetOrGet.apply(this, ['width', null].concat(i.call(arguments)))
                }, n.prototype.widthForHeight = function() {
                    return this._implGet.apply(this, ['widthForHeight', null].concat(i.call(arguments)))
                }, n.prototype.chaptersEnabled = function() {
                    return this._implSetOrGet.apply(this, ['chaptersEnabled', null].concat(i.call(arguments)))
                }, n.prototype.chaptersVisibleOnLoad = function() {
                    return this._implSetOrGet.apply(this, ['chaptersVisibleOnLoad', null].concat(i.call(arguments)))
                }, n.prototype.addChapter = function() {
                    return this._implExec.apply(this, ['addChapter'].concat(i.call(arguments)))
                }, n.prototype.getChapter = function() {
                    return this._implGet.apply(this, ['getChapter', null].concat(i.call(arguments)))
                }, n.prototype.removeChapter = function() {
                    return this._implExec.apply(this, ['removeChapter'].concat(i.call(arguments)))
                }, n.prototype.chapters = function() {
                    return this._implSetOrGet.apply(this, ['chapters', []].concat(i.call(arguments)))
                }, n.prototype.customerLogo = function() {
                    return this._implExec.apply(this, ['customerLogo'].concat(i.call(arguments)))
                }, n.prototype.setControlEnabled = function(e, t) {
                    return this._implSetOrGet('setControlEnabled', null, e, t)
                }, n.prototype.isControlDisabled = function(e) {
                    return this._implGet('isControlDisabled', !1, e)
                }, n.prototype.isControlEnabled = function(e) {
                    return this._implGet('isControlEnabled', !1, e)
                }, n.prototype.whenControlMounted = function(e) {
                    return this._implPromise('whenControlMounted', e)
                }, n.prototype.getControl = function(e) {
                    return this._implGet('getControl', null, e)
                }, n.prototype.getEmail = function() {
                    return this.email()
                }, n.prototype.getEventKey = function() {
                    return this.eventKey()
                }, n.prototype.getVisitorKey = function() {
                    return this.visitorKey()
                }, n.prototype.setEmail = function(e) {
                    return this.email(e)
                }, n.prototype.setPlayerColor = function() {
                    return this._implExec.apply(this, ['playerColor'].concat(i.call(arguments)))
                }, n.prototype.removeReadyFn = function() {
                    var e;
                    return e = 1 <= arguments.length ? i.call(arguments, 0) : [], this._hasImpl(function(t) {
                        return function() {
                            var n;
                            return (n = t._impl.ready).remove.apply(n, e)
                        }
                    }(this))
                }, n.prototype.email = function(e) {
                    var t, n;
                    return null == e ? this._attrs.email || null : (this.info('email', e), t = this._attrs.email, this._attrs.email = e, r.localStorage([this._attrs.pageUrl, 'trackEmail'], e), (null == (n = this._opts) ? void 0 : n.noDeprecatedProperties) || (this.params.trackEmail = e), this._implExec('email', e), e !== t && this.trigger('emailchange', e), this)
                }, n.prototype.foreignData = function(e) {
                    var t;
                    if (void 0 === e) return this._attrs.foreignData || this._foreignData || null;
                    if (null === e) return this._attrs.foreignData = null, this.trigger('foreigndatachange', e);
                    if (this.info('foreignData', e), !r.obj.isObject(e)) throw new Error('foreignData can only be an Object');
                    return e = r.obj.clone(e), this._attrs.foreignData = e, null != (t = this.tracker) && t.transmit({
                        force: !0
                    }), this.trigger('foreigndatachange', e)
                }, n.classFor = function(e) {
                    var t, n;
                    return e instanceof r.Player ? e = e.embedType : e instanceof r.PublicApi && (e = null == (t = e._impl) ? void 0 : t.embedType), n = function() {
                        return 'vulcan' === e ? r.VulcanPlayer : 'vulcan-v2' === e ? r.VulcanV2Player : 'html5' === e ? r.Html5Player : 'flash' === e ? r.FlashPlayer : 'external' === e ? r.ExternalPlayer : 'notplayable' === e ? r.NotPlayablePlayer : 'passwordprotected' === e ? r.PasswordProtectedPlayer : r.Player
                    }(), n ? n : (r.Metrics.count('player/' + e + '-class-not-defined', 1, {
                        ua: navigator.userAgent,
                        detect: r.detect
                    }), r.error('PublicApi.classFor: embedType is ' + e + ' but its class is not defined. Using \'vulcan-v2\' instead.'), r.VulcanV2Player)
                }, n
            }(), r.mixin(r.PublicApi.prototype, r.bindable), p = r.PublicApi.prototype.trigger, r.PublicApi.prototype._triggerNoImpl = function() {
                var e, t, n;
                return t = arguments[0], e = 2 <= arguments.length ? i.call(arguments, 1) : [], p.call.apply(p, [this, t].concat(i.call(e))), null == (n = window.wistiaEmbeds) ? void 0 : n.trigger.apply(n, [t, this].concat(i.call(e)))
            }, r.PublicApi.prototype.trigger = function() {
                var e, t;
                return e = 1 <= arguments.length ? i.call(arguments, 0) : [], this._impl ? (t = this._impl).trigger.apply(t, e) : this._triggerNoImpl.apply(this, e)
            }, r.mixin(r.PublicApi.prototype, r.logHelpers), r.PublicApi.prototype._logPrefix = function() {
                var e;
                return [this.constructor.name, this.hashedId() || 'no hashedId', null == (e = this.container) ? void 0 : e.id, this.uuid]
            }
        })(Wistia)
    },
    69: function() {
        (function(e) {
            if (!e.generate) return e.generate = {}, e.generate.html = function(t) {
                var n, o, a, r, l, i, s, d, u, p, c, m, g, y;
                if (/string|number|boolean/.test(typeof t)) return t.toString();
                if (t instanceof Array) {
                    for (c = '', l = 0, d = t.length; l < d; l++) r = t[l], c += e.generate.html(r);
                    return c
                }
                if ('object' != typeof t) return t.toString();
                for (s in o = [], t) g = t[s], 'tagName' === s ? m = g : 'childNodes' === s ? a = g : o.push({
                    key: s,
                    val: g
                });
                for (m || (m = 'div'), c = '<' + m, (i = 0, u = o.length); i < u; i++) n = o[i], 'style' === n.key && e.obj.isObject(n.val) && (n.val = function() {
                    var e, t;
                    for (p in e = n.val, t = [], e) y = e[p], t.push(p.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() + ':' + y);
                    return t
                }().join(';') + ';'), c += ' ' + n.key + '="' + n.val + '"';
                return /^(br|hr|img|link|meta|input)$/i.test(m) ? c += ' />' : (c += '>', a && ('string' == typeof a ? c += a : 'object' == typeof a && (c += e.generate.html(a))), c += '</' + m + '>'), c
            }, e.generate.stillWidth = function(e) {
                var t, n, o, i, a, r, l, s;
                for (r = [640, 960, 1280, 1920, 3840], 3840 > e.masterStillWidth && r.push(e.masterStillWidth), t = [], (n = 0, i = r.length); n < i; n++) s = r[n], s <= e.masterStillWidth && t.push(s);
                for (l = t.sort(function(e, t) {
                        return e - t
                    }), o = 0, a = l.length; o < a; o++)
                    if (s = l[o], e.videoWidth <= s) return s;
                return Math.max.apply(Math, t)
            }, e.generate.relativeBlockCss = function(e, t) {
                return null == e && (e = '100%'), null == t && (t = '100%'), 'display:inline-block;*display:inline;height:' + t + ';margin:0;padding:0;position:relative;vertical-align:top;width:' + e + ';zoom:1;'
            }, e.generate.video = function(t, n, o) {
                return o = e.obj.merge({}, n.params, o, {
                    uuid: n.uuid,
                    videoWidth: n.videoWidth(),
                    videoHeight: n.videoHeight()
                }), 'flash' === t ? e.generate.flashEmbedCode(n._mediaData, o) : 'html5' === t ? e.generate.html5EmbedElem(n._mediaData, o) : 'romulus' === t ? e.generate.romulusEmbedElem(n._mediaData, o) : 'external' === t ? e.generate.externalEmbedCode(n._mediaData, o) : 'flashUrl' === t ? e.generate.flashUrl(n._mediaData, o) : void 0
            }
        })(Wistia)
    },
    7: function(e, t, n) {
        'use strict';
        n.r(t);
        var o = n(2);
        t['default'] = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 'wistia_',
                t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : '',
                n = o['default']._sequenceVal || 1;
            return o['default']._sequenceVal = n + 1, '' + e + n + t
        }
    },
    70: function(e, t, n) {
        var o = function(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            },
            i = [].slice;
        (function(e) {
            var t, a, r, l, s, d, u, p, c, m, g, y;
            if (s = e, !s.Player) {
                for (r = n(5), a = n(11), t = n(12), l = n(28), d = n(20).eV1Protocol, s.Player = function() {
                        function r(e) {
                            var t, n, i;
                            for (t in this.publicApi = e, this._percentWatchedThreshold = o(this._percentWatchedThreshold, this), this.uuid = s.seqId(), this.info('constructor'), this.transferFacadeProperties(), this._impl = this, i = this.publicApi, i) n = i[t], n instanceof s.StopGo && !this.hasOwnProperty(t) && (this[t] = n);
                            this.plugin = this.publicApi.plugin, this.ready = new s.StopGo, this.hasData = new s.StopGo, this.embedded = new s.StopGo, this.commandQueueOpen = new s.StopGo, this.hasData(!0), this.commandQueueOpen(!0), this.playing = new s.StopGo, this.notFullscreen = new s.StopGo, this.resetStateVariables(), this.setupPercentTracking(), this._recordFirstEmbedIfEligible(), this
                        }
                        return r.FAILED = -1, r.QUEUED = 0, r.PROCESSING = 1, r.READY = 2, r.prototype.init = function() {
                            return this.setupPipedreamTracking(), this
                        }, r.prototype.transferFacadeProperties = function() {
                            var e, t, n, o, i;
                            for (o = '_attrs\n_embedContainer\n_givenOptions\n_hashedId\n_hasImpl\n_mediaData\n_opts\n_originalMediaData\n_tracker\nchrome\ncontainer\ncontrols\ndata\ndown\nfullscreenContainer\noptions\nparams\nplugin\nplugins\nup'.split(/[\n\s]+/), i = [], (e = 0, t = o.length); e < t; e++) n = o[e], i.push(this[n] = this.publicApi[n]);
                            return i
                        }, r.prototype.elem = function() {
                            return null
                        }, r.prototype.embed = function() {
                            throw new Error('Define in subclass!')
                        }, r.prototype.checkForReady = function() {
                            throw new Error('Define in subclass!')
                        }, r.prototype.setupGrid = function(e) {
                            return this.grid || (this.grid = s.createGrid(this, e), s.elem.append(this.chrome, this.grid.root)), this.grid
                        }, r.prototype.implContainer = function() {
                            return this._opts.subContainer ? this._embedContainer : this.grid.center
                        }, r.prototype.placeEmbed = function(e) {
                            var t;
                            return t = this.implContainer(), this.info('placeEmbed', t, e), this.wrapperElem = s.elem.fromObject({
                                id: s.seqId('wistia_video_wrapper_'),
                                style: s.generate.relativeBlockCss(),
                                class: 'wistia_video_wrapper'
                            }), s.elem.style(this.wrapperElem, {
                                overflow: 'hidden'
                            }), s.elem.append(t, this.wrapperElem), 'string' == typeof e ? this.wrapperElem.innerHTML += e : s.elem.append(this.wrapperElem, e)
                        }, r.prototype.stopStreaming = function() {}, r.prototype.wipeOutstandingAsyncFunctions = function() {
                            var e;
                            if (this.info('wipeOutstandingAsyncFunctions'), null != (e = s.eventLoop) && e.remove(this.uuid), s.clearTimeouts(this.uuid), this._remoteMediaKey) return s.clearTimeouts(this._remoteMediaKey)
                        }, r.prototype.resetStateVariables = function() {
                            return this.info('resetStateVariables'), this._lastTimePosition = -1, this._lastState = 'beforeplay', this._streamSet = !1, this._issuedPlay = !1, this._issuedPause = !1, this._beforePlay = !0, this._hasPlayed = !1, this._waiting = 0, this._ended = !1, this.playing(!1)
                        }, r.prototype.rebuild = function(e) {
                            return null == e && (e = {}), this.info('rebuild'), this.embedded(function(e) {
                                return function() {
                                    return e.ready(!1), e._oldVideoElem = e.elem(), e.stopStreaming(), s.elem.remove(e.wrapperElem), e.wipeOutstandingAsyncFunctions(), e.embed()
                                }
                            }(this)), this
                        }, r.prototype.cancelFullscreen = function() {
                            return this.info('cancelFullscreen'), this.rebuild()
                        }, r.prototype.requestFullscreen = function() {}, r.prototype.fit = function() {
                            return this.info('fit'), this._opts.dontFit || (this.grid.root.style.height = s.elem.height(this.chrome) + 'px', this.grid.root.style.width = s.elem.width(this.chrome) + 'px'), s.grid.fitVertical(this), s.grid.fitHorizontal(this)
                        }, r.prototype.setupPercentTracking = function() {
                            var e, t, n;
                            if (!this._trackPercent) {
                                if ('playing' === this.state())
                                    for (n = e = 0, t = Math.floor(this.time()); 0 <= t ? e < t : e > t; n = 0 <= t ? ++e : --e) this._logSecondWatched(n);
                                return null == this._trackPercent && (this._trackPercent = function(e) {
                                    return function(t) {
                                        var n;
                                        if (n = e.percentWatched(), e._logSecondWatched(t), e.percentWatched() !== n) return e.trigger('percentwatchedchanged', e.percentWatched(), n), e._percentWatchedThreshold(e.percentWatched())
                                    }
                                }(this)), this.rebind('secondchange', this._trackPercent)
                            }
                        }, r.prototype._percentWatchedThreshold = function(e) {
                            var t, n, o, i, a, r;
                            for (null == this._thresholds && (this._thresholds = [.25, .5, .75, 1]), r = [], o = Math.round(100 * e) / 100, i = this._thresholds, (t = 0, n = i.length); t < n; t++) a = i[t], o >= a ? this.trigger('percentWatchedThreshold', a) : r.push(a);
                            return this._thresholds = r
                        }, r.prototype._logSecondWatched = function(e) {
                            var t;
                            if (null == this._secondsWatched && (this._secondsWatched = function() {
                                    var e, n, o;
                                    for (o = [], t = e = 0, n = Math.floor(this.duration()); 0 <= n ? e < n : e > n; t = 0 <= n ? ++e : --e) o.push(0);
                                    return o
                                }.call(this)), null == this._totalWatched && (this._totalWatched = 0), null == this._totalRewatched && (this._totalRewatched = 0), !(e >= this._secondsWatched.length)) return this._secondsWatched[e] += 1, 1 === this._secondsWatched[e] ? this._totalWatched += 1 : this._totalRewatched += 1
                        }, r.prototype.percentWatched = function() {
                            return this.secondsWatched() / Math.floor(this.duration())
                        }, r.prototype.secondsWatched = function() {
                            return this._totalWatched || 0
                        }, r.prototype.secondsWatchedVector = function() {
                            return this._secondsWatched
                        }, r.prototype._isOnWistia = function() {
                            return this._opts._inIframe ? !!document.referrer.match(/wistia\.(dev|st|com)/) : !!window.location.href.match(/wistia\.(dev|st|com)/)
                        }, r.prototype._isLoggedIn = function() {
                            var e;
                            return null == (e = document.getElementsByTagName('body')[0]) ? void 0 : e.classList.contains('logged_in')
                        }, r.prototype._isShared = function() {
                            return this._isOnWistia() && !this._isLoggedIn()
                        }, r.prototype._isExternallyEmbedded = function() {
                            return !this._isOnWistia()
                        }, r.prototype._recordFirstEmbedIfEligible = function() {
                            var t, o, i;
                            if (this._mediaData.firstEmbedForAccount || this._mediaData.firstShareForAccount) return (t = n(20).appHost, i = d() + '//' + t() + '/account/activities', o = {
                                account_key: this._mediaData.accountKey,
                                media_hashed_id: this._mediaData.hashedId
                            }, this._mediaData.firstEmbedForAccount && this._isExternallyEmbedded()) ? (o.first_embed = this._isExternallyEmbedded(), e.remote.post(i, {
                                data: JSON.stringify(o),
                                dataType: 'json'
                            })) : this._mediaData.firstShareForAccount && this._isShared() ? (o.first_share = this._isShared(), e.remote.post(i, {
                                data: JSON.stringify(o),
                                dataType: 'json'
                            })) : void 0
                        }, r.prototype.setupPipedreamTracking = function() {
                            return this.whenVideoElementInDom().then(function(e) {
                                return function() {
                                    return e._opts.flashShim ? void 0 : s.timeout(e.uuid + '.track-initembed', function() {
                                        var t, n, o, i, r;
                                        for (s.Metrics.videoCount(e, 'player/initembed'), r = s.Metrics.assetBuckets(e), (o = 0, i = r.length); o < i; o++) n = r[o], s.Metrics.videoCount(e, 'player/initembed.' + n);
                                        return t = a.usablePlayers(e.publicApi.judyCtx(), e.publicApi._mediaData), s.Metrics.videoCount(e, 'player/available-players', 1, {
                                            available_players: t
                                        })
                                    }, 100)
                                }
                            }(this)), this.bind('play', function(e) {
                                return function() {
                                    var t, n, o, i;
                                    for (s.Metrics.videoCount(e, 'player/play'), i = s.Metrics.assetBuckets(e), (n = 0, o = i.length); n < o; n++) t = i[n], s.Metrics.videoCount(e, 'player/play.' + t);
                                    return e.unbind
                                }
                            }(this)), s.Metrics.countEventOnce(this, 'enter-fullscreen'), s.Metrics.countEventOnce(this, 'end'), s.Metrics.countShowLoadingOnce(this), s.Metrics.countShowLoadingAll(this), s.Metrics.countShowLoadingLongTimeOnce(this), s.Metrics.countShowLoadingLongTimeAll(this), this.bind('secondchange', function(e) {
                                return function() {
                                    if (10 <= e.secondsWatched()) return s.Metrics.videoCount(e, 'player/played-10-seconds'), e.unbind
                                }
                            }(this)), this.bind('secondchange', function(e) {
                                return function() {
                                    if (30 <= e.secondsWatched()) return s.Metrics.videoCount(e, 'player/played-30-seconds'), e.unbind
                                }
                            }(this))
                        }, r.prototype.animate = function(e, t) {
                            var n;
                            return null == e && (e = {}), null == t && (t = {}), this.info('animate', e, t), n = t.callback, t.callback = function(e) {
                                return function() {
                                    return s.elem.style(e.grid.root, {
                                        position: 'relative'
                                    }), 'function' == typeof n ? n() : void 0
                                }
                            }(this), s.elem.style(this.grid.root, {
                                position: 'absolute'
                            }), s.elem.animate(this.grid.root, e, t), this
                        }, r.prototype.slide = function() {
                            var e, t, n;
                            return e = arguments[0], n = arguments[1], t = 3 <= arguments.length ? i.call(arguments, 2) : [], this.animate.apply(this, [{
                                transform: 'translate(' + e + 'px,' + n + 'px)'
                            }].concat(i.call(t)))
                        }, r.prototype._shortAnimArgs = function(e) {
                            var t;
                            return 'function' == typeof e[0] ? t = {
                                callback: e[0]
                            } : t = s.obj.merge({}, e[0], {
                                callback: e[1]
                            })
                        }, r.prototype.slideOutLeft = function() {
                            var e;
                            return e = this._shortAnimArgs(arguments), s.elem.style(this.grid.root, {
                                transform: 'translate(0px, 0px)'
                            }), setTimeout(function(t) {
                                return function() {
                                    return t.slide(-t.videoWidth(), 0, e)
                                }
                            }(this), 1), this
                        }, r.prototype.slideInLeft = function() {
                            var e;
                            return e = this._shortAnimArgs(arguments), s.elem.style(this.grid.root, {
                                transform: 'translate(' + this.videoWidth() + 'px, 0px)'
                            }), setTimeout(function(t) {
                                return function() {
                                    return t.slide(0, 0, e)
                                }
                            }(this), 1), this
                        }, r.prototype.slideOutRight = function() {
                            var e;
                            return e = this._shortAnimArgs(arguments), s.elem.style(this.grid.root, {
                                transform: 'translate(0px, 0px)'
                            }), setTimeout(function(t) {
                                return function() {
                                    return t.slide(t.videoWidth(), 0, e)
                                }
                            }(this), 1), this
                        }, r.prototype.slideInRight = function() {
                            var e;
                            return e = this._shortAnimArgs(arguments), s.elem.style(this.grid.root, {
                                transform: 'translate(' + -this.videoWidth() + 'px, 0px)'
                            }), setTimeout(function(t) {
                                return function() {
                                    return t.slide(0, 0, e)
                                }
                            }(this), 1), this
                        }, r.prototype.fade = function() {
                            var e, t, n;
                            return t = arguments[0], e = 2 <= arguments.length ? i.call(arguments, 1) : [], null == t && (t = 0), (n = s.elem).animate.apply(n, [this.gridChildren(), {
                                opacity: t
                            }].concat(i.call(e)))
                        }, r.prototype.fadeIn = function() {
                            var e, t;
                            return t = this._shortAnimArgs(arguments), e = t.callback, t.callback = function(t) {
                                return function() {
                                    return s.elem.style(t.gridChildren(), {
                                        opacity: ''
                                    }), 'function' == typeof e ? e() : void 0
                                }
                            }(this), s.elem.style(this.gridChildren(), {
                                opacity: 0
                            }), setTimeout(function(e) {
                                return function() {
                                    return e.fade(1, t)
                                }
                            }(this), 1)
                        }, r.prototype.fadeOut = function() {
                            var e;
                            return e = this._shortAnimArgs(arguments), s.elem.style(this.gridChildren(), {
                                opacity: 1
                            }), setTimeout(function(t) {
                                return function() {
                                    return t.fade(0, e)
                                }
                            }(this), 1)
                        }, r.prototype.gridChildren = function() {
                            var e, t, n, o, i, a, r, l;
                            for (l in r = [], i = this.grid, i)
                                for (o = i[l], a = o.childNodes, (t = 0, n = a.length); t < n; t++) e = a[t], s.isGridElem(this.grid, e) || r.push(e);
                            return r
                        }, r.prototype.remove = function(e) {
                            var t, n;
                            return null == e && (e = {}), this.info('remove'), !1 !== e.trigger && this.trigger('beforeremove'), this.hasData(!1), this.ready(!1), this.embedded(!1), null != (t = this.engine) && t.destroy(), this.stopStreaming(), !1 !== e.trigger && this.trigger('down'), !1 !== e.trigger && this.trigger('afterremove'), this.wipeOutstandingAsyncFunctions(), this._bindings = {}, this.cleanupRefs(), (null == (n = this.grid) ? void 0 : n.root) && (s.elem.unbindAllInside(this.grid.root), s.elem.remove(this.grid.root)), this.grid = null
                        }, r.prototype.isRemoved = function() {
                            return null === this.grid
                        }, r.prototype.freezeLastFrame = function() {}, r.prototype.cleanupRefs = function() {
                            var e, t, n, o, i;
                            for (e in 'function' == typeof this.cleanup && this.cleanup(), t = this, o = [], t) i = t[e], i !== this && o.push(null == (n = this[e]) ? void 0 : 'function' == typeof n.cleanup ? n.cleanup() : void 0);
                            return o
                        }, r.prototype._baseEventLoopDuration = 300, r.prototype._eventLoopDuration = 300, r.prototype.play = function() {
                            return this.info('play'), this.ready(function(e) {
                                return function() {
                                    return e.play()
                                }
                            }(this)), this
                        }, r.prototype.canAutoPlay = function() {
                            return !0
                        }, r.prototype.suppressPlay = function(e) {
                            return null == e ? this._suppressPlay : (this.info('suppressPlay', e), this._suppressPlay = !!e)
                        }, r.prototype.pause = function() {
                            return this.info('pause'), this.ready(function(e) {
                                return function() {
                                    return e.pause()
                                }
                            }(this)), this
                        }, r.prototype.time = function(e) {
                            return null == e ? 0 : (this.info('time', e), this.ready(function(t) {
                                return function() {
                                    return t.time(e)
                                }
                            }(this)), this)
                        }, r.prototype.state = function() {
                            return 'beforeplay'
                        }, r.prototype.duration = function() {
                            return this._mediaData.duration || null
                        }, r.prototype.mute = function() {
                            return this._muted = !0, this.trigger('volumechange', this.volume())
                        }, r.prototype.unmute = function() {
                            return this._muted = !1, this._isPlayingSilently = !1, this.trigger('volumechange', this.volume())
                        }, r.prototype.isMuted = function() {
                            return !!this._opts.muted
                        }, r.prototype.volume = function(e) {
                            return null == e ? 0 : (this.info('volume', e), this.ready(function(t) {
                                return function() {
                                    return t.volume(e)
                                }
                            }(this)))
                        }, r.prototype.playerLanguage = function(e) {
                            return null == e ? s.getLanguage(this._attrs.playerLanguage) || s.getLanguage('en-US') : this.embedded(function(t) {
                                return function() {
                                    if (!s.getLanguage(e)) throw new Error('Language ' + e + ' isn\'t defined.');
                                    return e === t._attrs.playerLanguage ? void 0 : (t._attrs.playerLanguage = e, t.trigger('playerlanguagechange', s.getLanguage(e)))
                                }
                            }(this))
                        }, r.prototype.name = function() {
                            return this._mediaData.name || null
                        }, r.prototype.hashedId = function() {
                            return this._hashedId
                        }, r.prototype.bigPlayButtonEnabled = function() {
                            return this
                        }, r.prototype.smallPlayButtonEnabled = function() {
                            return this
                        }, r.prototype.playbarControlEnabled = function() {
                            return this
                        }, r.prototype.volumeControlEnabled = function() {
                            return this
                        }, r.prototype.fullscreenButtonEnabled = function() {
                            return this
                        }, r.prototype.focus = function() {
                            var e;
                            return null == (e = this.chrome) ? void 0 : e.focus()
                        }, r.prototype.setPlayerColor = function(e) {
                            return this.playerColor(e), this
                        }, r.prototype.playerColor = function(e) {
                            var t;
                            return null == e ? this._attrs.playerColor : (this.info('playerColor', e), t = this._attrs.playerColor, this._attrs.playerColor = s.Player._sanePlayerColor(e), t !== this._attrs.playerColor && this.trigger('playercolorchange', this._attrs.playerColor, t), this)
                        }, r._sanePlayerColor = function(e) {
                            var t, n, o, i;
                            if (e) {
                                if (e = ('' + e).replace(/^#/g, ''), 6 > e.length) {
                                    for (o = '', t = n = 0, i = 6 - e.length; 0 <= i ? n < i : n > i; t = 0 <= i ? ++n : --n) o += '0';
                                    e = '' + o + e
                                }
                                return /^[\da-f]{6}$/i.test(e) || (e = '636155'), e
                            }
                            return '636155'
                        }, r.prototype.playbackRate = function(e) {
                            return null == e ? 1 : this
                        }, r.prototype.videoQuality = function(e) {
                            return null == e ? 'auto' : this
                        }, r.prototype.width = function(e, t) {
                            var n, o, i;
                            return null == t && (t = {}), null == e ? (i = s.elem.width(this.grid.left) + s.elem.width(this.grid.center) + s.elem.width(this.grid.right), i) : (this.info('width', e, t), e = parseInt(e, 10), n = this.width(), this.grid.wrapper.style.width = this.chrome.style.width = e + 'px', t.dontChangeContainer || (this._embedContainer.style.width = e + 'px'), this.grid.center.style.width = '100%', 'flash' === this.embedType && null != (o = this.elem()) && (o.style.width = '100%'), this._opts.dontFit ? (this.grid.main.style.width = e - s.elem.width(this.grid.left) - s.elem.width(this.grid.right) + 'px', this.grid.main.style.marginLeft = s.elem.width(this.grid.left) + 'px') : (s.grid.fitHorizontal(this), s.grid.fitVertical(this)), (e !== n || t.trigger) && this.trigger('widthchange', e, n), t.constrain && this.constrainToWidth({
                                trigger: t.trigger
                            }), this._width = e, this)
                        }, r.prototype.height = function(e, t) {
                            var n, o, i;
                            return null == t && (t = {}), null == e ? (i = s.elem.height(this.grid.center) + Math.max(s.elem.height(this.grid.above), s.elem.height(this.grid.top)) + Math.max(s.elem.height(this.grid.below), s.elem.height(this.grid.bottom)), i) : (this.info('height', e, t), e = parseInt(e, 10), n = this.height(), this.grid.wrapper.style.height = this.chrome.style.height = e + 'px', t.dontChangeContainer || (this._embedContainer.style.height = e + 'px'), this.grid.center.style.height = '100%', 'flash' === this.embedType && null != (o = this.elem()) && (o.style.height = '100%'), this._opts.dontFit ? (this.grid.main.style.height = e - s.elem.height(this.grid.above) - s.elem.height(this.grid.below) + 'px', this.grid.main.style.marginTop = s.elem.height(this.grid.top) + 'px') : (s.grid.fitHorizontal(this), s.grid.fitVertical(this)), (e !== n || t.trigger) && this.trigger('heightchange', e, n), t.constrain && this.constrainToHeight({
                                trigger: t.trigger
                            }), this)
                        }, r.prototype.videoWidth = function(e, t) {
                            var n, o;
                            return null == t && (t = {}), null == e ? s.elem.width(this.grid.center) : (this.info('videoWidth', e, t), e = parseInt(e, 10), o = this.width(), this.grid.center.style.width = '100%', this.grid.main.style.width = e + 'px', n = s.elem.width(this.grid.left) + s.elem.width(this.grid.right), this.grid.wrapper.style.width = this.chrome.style.width = e + n + 'px', t.dontChangeContainer || (this._embedContainer.style.width = e + n + 'px'), s.grid.fitHorizontal(this), s.grid.fitVertical(this), (e !== o || t.trigger) && this.trigger('widthchange', e, o), t.constrain && this.constrainToWidth({
                                trigger: t.trigger
                            }), this)
                        }, r.prototype.videoHeight = function(e, t) {
                            var n, o, i, a;
                            return null == t && (t = {}), null == e ? s.elem.height(this.grid.center) : (this.info('videoHeight', e, t), e = parseInt(e, 10), i = this.height(), this.grid.main.style.height = e + 'px', this.grid.center.style.height = '100%', this.grid.main.style.height = e + 'px', a = Math.max(s.elem.height(this.grid.above), s.elem.height(this.grid.top)), n = Math.max(s.elem.height(this.grid.below), s.elem.height(this.grid.bottom)), o = a + n, this.grid.wrapper.style.height = this.chrome.style.height = e + o + 'px', t.dontChangeContainer || (this._embedContainer.style.height = e + o + 'px'), s.grid.fitHorizontal(this), s.grid.fitVertical(this), (e !== i || t.trigger) && this.trigger('heightchange', e, i), t.constrain && this.constrainToHeight({
                                trigger: t.trigger
                            }), this)
                        }, r.prototype.constrainToHeight = function(e) {
                            return this.videoWidth(this.widthForHeight(this.videoHeight()), e)
                        }, r.prototype.constrainToWidth = function(e) {
                            return this.videoHeight(this.heightForWidth(this.videoWidth()), e)
                        }, r.prototype.extraHeight = function() {
                            var e, t;
                            return t = Math.max(s.elem.height(this.grid.above), s.elem.height(this.grid.top)), e = Math.max(s.elem.height(this.grid.below), s.elem.height(this.grid.bottom)), t + e
                        }, r.prototype.extraWidth = function() {
                            return s.elem.width(this.grid.left) + s.elem.width(this.grid.right)
                        }, r.prototype.heightForWidth = function(e) {
                            return Math.round(e / this.aspect())
                        }, r.prototype.widthForHeight = function(e) {
                            return Math.round(e * this.aspect())
                        }, r.prototype.aspect = function() {
                            var e;
                            return this._opts.aspect ? this._opts.aspect : this._currentAsset ? 'variable' === this._currentAsset.width ? this.mp4Aspect() || this.originalAspect() : this._currentAsset.width / this._currentAsset.height : (e = this.asset({
                                container: /mp4|flv/
                            })) ? e.width / e.height : 640 / 360
                        }, r.prototype.mp4Aspect = function() {
                            var e;
                            return (e = this.mp4Asset({
                                width: 640
                            }) || this.mp4Asset({
                                width: 960
                            }) || this.mp4Asset()) ? e.width / e.height : null
                        }, r.prototype.originalAspect = function() {
                            return this.originalAsset() ? this.originalAsset().width / this.originalAsset().height : this.bestAsset().width / this.bestAsset().height
                        }, r.prototype.inFullscreen = function() {
                            return !1
                        }, r.prototype.visitorKey = function() {
                            return this._tracker.visitorKey()
                        }, r.prototype.eventKey = function() {
                            return this._tracker.eventKey()
                        }, r.prototype.getVisitorKey = function() {
                            return this.visitorKey()
                        }, r.prototype.getEventKey = function() {
                            return this.eventKey()
                        }, r.prototype.disableTextTracks = function() {
                            return this.info('disableTextTracks'), null == this._disableTextTracks && (this._disableTextTracks = function(e) {
                                return function() {
                                    var t, n, o, i, a, r;
                                    if (null != (o = e.elem()) && o.textTracks) {
                                        for (i = e.elem().textTracks, a = [], (t = 0, n = i.length); t < n; t++) r = i[t], a.push(r.mode = 'disabled');
                                        return a
                                    }
                                }
                            }(this)), this.rebind('play', this._disableTextTracks)
                        }, r.prototype.sdAsset = function() {
                            throw new Error('Implement in subclass!')
                        }, r.prototype.mdAsset = function() {
                            throw new Error('Implement in subclass!')
                        }, r.prototype.hdAsset = function() {
                            throw new Error('Implement in subclass!')
                        }, r.assets = t.filter, r.asset = t.one, r.assetsWithinQualityRange = t.withinQualityRange, r.stillUrl = t.stillUrl, r.bakeryHosts = function() {
                            return t.BAKERY_HOSTS
                        }, r.isBakeryUrl = t.isBakeryUrl, r.stillAsset = t.still, r.prototype.stillUrl = function(e) {
                            var n, o;
                            return e = s.obj.merge({
                                videoWidth: this.grid ? this.videoWidth() : null,
                                videoHeight: this.grid ? this.videoHeight() : null
                            }, this._opts, e), e.playerColor || (e.playerColor = null == (n = this._mediaData) || null == (o = n.embed_options) ? void 0 : o.playerColor), t.stillUrl(this._mediaData.assets, e)
                        }, r.prototype.stillAsset = function() {
                            return t.still(this._mediaData.assets)
                        }, r.prototype.thumbnailAssets = function() {
                            return t.thumbnailAssets(this._mediaData.assets, s.obj.merge({}, this._opts, {
                                playButton: !1,
                                videoHeight: this.videoHeight(),
                                videoWidth: this.videoWidth()
                            }))
                        }, r.prototype._replaceStillAsset = function(e) {
                            var t, n;
                            return n = function() {
                                var e, n, o, i;
                                for (o = this.assets(), i = [], (e = 0, n = o.length); e < n; e++) t = o[e], 'still_image' !== t.type && i.push(t);
                                return i
                            }.call(this), this._mediaData.assets = n, this._mediaData.assets.push(e)
                        }, r.prototype._refreshDataFromServer = function(e, t) {
                            return s.remote.ajax('//' + s.remote.embedHost() + '/embed/medias/' + this.hashedId() + '.json', {
                                dataType: 'json',
                                fallbackToJsonp: !0,
                                jsonpCallback: 'wistia_jsonp_refresh_' + this.hashedId(),
                                success: function(t) {
                                    return function(n) {
                                        return t._originalMediaData = n.media, t._mediaData = t.publicApi._transformMediaData(n.media), t._newStill && t._replaceStillAsset(t._newStill), t.publicApi._mediaData = t._mediaData, s.cacheMedia(t.hashedId(), t._mediaData), 'function' == typeof e && e(), t.trigger('refreshed-from-server')
                                    }
                                }(this),
                                error: t
                            })
                        }, r.prototype.assets = function(e) {
                            return t.filter(this._mediaData.assets, e)
                        }, r.prototype.asset = function(e) {
                            var t;
                            return 'string' == typeof arguments[0] ? (t = arguments[0] + 'Asset', e = arguments[1], this[t](e)) : (e = arguments[0], this.assets(e)[0] || null)
                        }, r.prototype.mp4Asset = function(e) {
                            return t.mp4(this._mediaData.assets, e)
                        }, r.prototype.qualityOptions = function() {
                            return {
                                qualityMin: this._attrs.qualityMin,
                                qualityMax: this._attrs.qualityMax
                            }
                        }, r.prototype.mp4AssetInRange = function(e) {
                            return null == e && (e = {}), t.mp4(this._mediaData.assets, s.obj.merge(this.qualityOptions(), e))
                        }, r.prototype.webmAsset = function(e) {
                            return t.webm(this._mediaData.assets, e)
                        }, r.prototype.webmAssetInRange = function(e) {
                            return null == e && (e = {}), t.webm(this._mediaData.assets, s.obj.merge(this.qualityOptions(), e))
                        }, r.prototype.playableAsset = function(e) {
                            return t.playable(this._mediaData.assets, e)
                        }, r.prototype.playableAssetInRange = function(e) {
                            return null == e && (e = {}), t.playable(this._mediaData.assets, s.obj.merge(this.qualityOptions(), e))
                        }, r.prototype.flashAsset = function(e) {
                            return t.flv(this._mediaData.assets, e)
                        }, r.prototype.flashAssetInRange = function(e) {
                            return null == e && (e = {}), t.flv(this._mediaData.assets, s.obj.merge(this.qualityOptions(), e))
                        }, r.prototype.hlsAsset = function(e) {
                            return t.m3u8(this._mediaData.assets, e)
                        }, r.prototype.hlsAssetInRange = function(e) {
                            return null == e && (e = {}), t.m3u8(this._mediaData.assets, s.obj.merge(this.qualityOptions(), e))
                        }, r.prototype.isScreencast = function() {
                            return t.isScreencast(this._mediaData.assets)
                        }, r.prototype.originalAsset = function() {
                            return this._original || (this._original = t.original(this._mediaData.assets))
                        }, r.prototype.iphoneAsset = function(e) {
                            return null == e && (e = {}), this._iphoneAsset || (this._iphoneAsset = t.iphone(this._mediaData.assets, e))
                        }, r.prototype.iphoneAssetInRange = function(e) {
                            return null == e && (e = {}), t.iphone(this._mediaData.assets, s.obj.merge(this.qualityOptions(), e))
                        }, r.prototype.trim = function(e) {
                            return null == e ? this._trimSettings || {
                                start: 0,
                                end: -1
                            } : this._trimSettings = e
                        }, r.prototype.getVideoElement = function() {
                            return null
                        }, r.prototype.whenVideoElementInDom = function() {
                            return new l(function() {})
                        }, r.prototype.embedOptions = function() {
                            return this._embedOptions ? this._embedOptions : this._embedOptions = s.obj.clone(this._opts)
                        }, r.prototype.inSilentPlaybackMode = function() {
                            return !1
                        }, r
                    }(), s.mixin(s.Player.prototype, s.bindable), s.mixin(s.Player.prototype, s.logHelpers), s.Player.prototype._logPrefix = function() {
                        var e;
                        return [this.constructor.name, this.hashedId() || 'no hashedId', null == (e = this._embedContainer) ? void 0 : e.id, this.uuid]
                    }, c = s.Player.prototype.trigger, s.Player.prototype.trigger = function() {
                        var e, t;
                        return e = 1 <= arguments.length ? i.call(arguments, 0) : [], c.apply(this, e), (t = this.publicApi)._triggerNoImpl.apply(t, e)
                    }, y = Object.getOwnPropertyNames(s.PublicApi.prototype), (u = 0, p = y.length); u < p; u++) m = y[u], g = s.PublicApi.prototype[m], 'function' != typeof g || s.Player.prototype.hasOwnProperty(m) || function(e, t) {
                    return s.Player.prototype[e] = function() {
                        var t, n;
                        return t = 1 <= arguments.length ? i.call(arguments, 0) : [], (n = this.publicApi)[e].apply(n, t)
                    }, s.Player.prototype[e]._originalMethod = t
                }(m, g);
                return s.Video = s.Player
            }
        })(Wistia)
    },
    71: function() {
        (function(e) {
            return null == e._onFullscreenChange && (e._onFullscreenChange = function() {
                return e.elem.fullscreenElement() ? e.trigger('enter-fullscreen', e.elem.fullscreenElement()) : e.trigger('cancel-fullscreen')
            }), e._initializers.initFullscreenTriggers = function() {
                return e.elem.rebind(document, 'mozfullscreenchange', e._onFullscreenChange), e.elem.rebind(document, 'webkitfullscreenchange', e._onFullscreenChange), e.elem.rebind(document, 'MSFullscreenChange', e._onFullscreenChange), e.elem.rebind(document, 'fullscreenchange', e._onFullscreenChange)
            }, e._destructors.destroyFullscreenTriggers = function() {
                return e.elem.unbind(document, 'mozfullscreenchange', e._onFullscreenChange), e.elem.unbind(document, 'webkitfullscreenchange', e._onFullscreenChange), e.elem.unbind(document, 'MSFullscreenChange', e._onFullscreenChange), e.elem.unbind(document, 'fullscreenchange', e._onFullscreenChange)
            }
        })(Wistia)
    },
    715: function(e, t, n) {
        'use strict';
        n.r(t);
        var o = n(0),
            i = n(433)
    },
    72: function(e, t, n) {
        (function(t) {
            var e;
            return e = n(20).eV1Protocol, t.BandwidthTest = function() {
                function e(e) {
                    this.opt = e, this.opt = t.obj.merge({
                        minKbps: 2500,
                        timeoutLength: 4e3,
                        freshFor: 36e5
                    }, this.opt), this.opt.uuid || (this.opt.uuid = t.seqId('bandwidth_test_'))
                }
                return e.prototype.start = function() {
                    var e, n, o, i;
                    return null != (o = this._testXhr) && o.abort(), this._testStart = new Date().getTime(), this._testXhr = new XMLHttpRequest, this._testXhr.open('GET', this.testFileUrl(), !0), n = Math.floor(100 * Math.random()), i = 1e6 * n, e = i + 999999, this._testXhr.setRequestHeader('Range', 'bytes=' + i + '-' + e), t.timeout(this.uuid + '.cancel_bandwidth_test', function(e) {
                        return function() {
                            return e.trigger('timeout'), e.fail()
                        }
                    }(this), this.opt.timeoutLength), this._testDataLoaded = 0, this._onTestXhrProgress = function(e) {
                        return function(t) {
                            return e._testDataLoaded = t.loaded, e.trigger('progress', t)
                        }
                    }(this), this._testXhr.addEventListener('progress', this._onTestXhrProgress), this._onTestXhrLoaded = function(e) {
                        return function() {
                            return e.succeed()
                        }
                    }(this), this._testXhr.addEventListener('load', this._onTestXhrLoaded), this._testXhr.send(null), this.trigger('started')
                }, e.prototype.fail = function() {
                    return this._sampleKbps(), this._supportsHd = !1, this.saveResult(), this.trigger('failed'), this.end()
                }, e.prototype.succeed = function() {
                    if (this._sampleKbps(), this._supportsHd = !0, this.saveResult(), this.trigger('succeeded'), this.end(), this._suspiciouslyFast()) return this._reportSuspiciousBandwidthTest()
                }, e.prototype._reportSuspiciousBandwidthTest = function() {
                    var n, e, o;
                    try {
                        if (this._suspiciouslyFast()) return t.Metrics.count('player/suspicious-bandwidth-test', 1, {
                            bw_test_time: this._testTime,
                            visitor_key: t.visitorKey.value(),
                            location: ('undefined' != typeof location && null !== location ? null == (e = location.protocol) ? void 0 : e.length : void 0) && ('undefined' != typeof location && null !== location ? null == (o = location.hostname) ? void 0 : o.length : void 0) ? location.protocol + '//' + location.hostname : null,
                            connection_type: t.Metrics.connectionType(),
                            agent: navigator.userAgent
                        })
                    } catch (e) {
                        return n = e, t.error(n)
                    }
                }, e.prototype._suspiciouslyFast = function() {
                    return .05 > this._testTime
                }, e.prototype._sampleKbps = function() {
                    return this._testEnd = new Date().getTime(), this._testTime = (this._testEnd - this._testStart) / 1e3, this._kbps = 8 * this._testDataLoaded / 1e3 / this._testTime
                }, e.prototype.endEarly = function() {
                    return null == this._supportsHd && null != this._testDataLoaded ? (this._sampleKbps(), this._supportsHd = !(1 < this._testTime) || this._kbps >= this.opt.minKbps, this.trigger('ended-early'), this.end()) : (this.end(), this.trigger('ended-early'))
                }, e.prototype.end = function() {
                    var e, n, o;
                    return this._onTestXhrLoaded && null != (e = this._testXhr) && e.removeEventListener('load', this._onTestXhrLoaded), this._onTestXhrProgress && null != (n = this._testXhr) && n.removeEventListener('progress', this._onTestXhrProgress), null != (o = this._testXhr) && o.abort(), this._testXhr = null, t.clearTimeouts(this.uuid + '.cancel_bandwidth_test'), this.trigger('ended')
                }, e.prototype.testFileUrl = function() {
                    return this.opt.testFileUrl || ('https:' === t.proto() ? 'https://embed-ssl.wistia.com/deliveries/6992339c876a95a37250fbe5b0a0eaecca3018a5/file.jpg?bust=2015-12-29a' : 'http://embed-e.wistia.com/deliveries/6992339c876a95a37250fbe5b0a0eaecca3018a5/file.jpg?bust=2015-12-29a')
                }, e.prototype.saveKey = function() {
                    return this.opt.saveKey || 'bandwidth_test'
                }, e.prototype.saveResult = function() {
                    return t.localStorage(this.saveKey(), {
                        updatedAt: new Date().getTime(),
                        supportsHd: this._supportsHd,
                        clientKbps: this._kbps
                    })
                }, e.prototype.savedResult = function() {
                    return t.localStorage(this.saveKey())
                }, e.prototype.isFresh = function() {
                    var e, t;
                    return e = new Date().getTime() - ((null == (t = this.savedResult()) ? void 0 : t.updatedAt) || 0), e < this.opt.freshFor
                }, e.prototype.supportsHd = function() {
                    return this._supportsHd || !1
                }, e
            }(), t.mixin(t.BandwidthTest.prototype, t.bindable)
        })(Wistia)
    },
    73: function(e, t, n) {
        var o, i, a, r = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        o = n(2)['default'], a = n(45).isVisitorTrackingEnabled, i = o.lib('utilities/obj').assign,
            function(e) {
                return e.VideoTracker2 ? void 0 : e.VideoTracker2 = function() {
                    function t(t) {
                        this.publicApi = t, this.resendAllFailedEvents = r(this.resendAllFailedEvents, this), this.retrySendingFailedEvent = r(this.retrySendingFailedEvent, this), this.eventQueue = [], this.clockStart = new Date().getTime(), this.isIE = navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/MSIE/), this.initializedOnce = !1, this.monitoring = !1, this.publicApi.hasData(function(t) {
                            return function() {
                                t.params = e.extend({
                                    transmitInterval: 1e3 * (t.publicApi._mediaData.trackingTransmitInterval || 10)
                                }, t.publicApi._opts), !t.publicApi._attrs.shouldTrack
                            }
                        }(this)), this
                    }
                    return t.prototype.conversions = {
                        "missing-conversion": 0,
                        "pre-roll-email": 1,
                        "post-roll-email": 2,
                        "mid-roll-email": 3,
                        "post-roll-click": 4,
                        "mid-roll-click": 5,
                        "non-video": 6
                    }, t.prototype._getAccountKey = function() {
                        return this.publicApi._opts.accountKey || this.publicApi._mediaData.accountKey
                    }, t.prototype._data = function() {
                        var e;
                        return e = {
                            account_key: this._getAccountKey(),
                            session_id: this.visitorKey(),
                            media_id: this.publicApi._mediaData.mediaKey,
                            event_key: this.eventKey(),
                            media_duration: parseFloat(this.publicApi._mediaData.duration),
                            visitor_version: this._getVisitorVersion(),
                            referrer: this.publicApi._attrs.pageUrl,
                            event_details: this.eventQueue,
                            foreign_data: this.publicApi.foreignData(),
                            seconds_watched: this.publicApi.secondsWatched()
                        }, this.publicApi.email() && (e.email = this.publicApi.email()), (this.publicApi._opts.anonymizeIp || !a()) && (e.anonymizeIp = !0), this.params.conversionType && (e.conversion_type = this.conversions[this.params.conversionType]), this.params.conversionData && (e.conversion_data = this.params.conversionData), this.publicApi._opts.channel && (e.channel = this.publicApi._opts.channel), JSON.stringify(e)
                    }, t.prototype._secondsSinceTime = function(e) {
                        return e ? Math.round((new Date().getTime() - e) / 1e3) : null
                    }, t.prototype.nullToNone = function(e) {
                        return null === e ? 'none' : e
                    }, t.prototype.lastLoadForAccount = function() {
                        return this.nullToNone(this._secondsSinceTime(Wistia.localStorage('accounts_loaded.' + this._getAccountKey())))
                    }, t.prototype.lastLoadForMedia = function() {
                        return this.nullToNone(this._secondsSinceTime(Wistia.localStorage('medias_loaded.' + this.publicApi.hashedId())))
                    }, t.prototype.lastPlayForAccount = function() {
                        return this.nullToNone(this._secondsSinceTime(Wistia.localStorage('accounts_played.' + this._getAccountKey())))
                    }, t.prototype.lastPlayForMedia = function() {
                        return this.nullToNone(this._secondsSinceTime(Wistia.localStorage('medias_played.' + this.publicApi.hashedId())))
                    }, t.prototype.lastRecordingOfActionForMedia = function(e) {
                        return this.nullToNone(this._secondsSinceTime(Wistia.localStorage('action_recorded.' + this.publicApi.hashedId() + '.' + e)))
                    }, t.prototype.recordLastActionForMedia = function(e) {
                        return Wistia.localStorage('action_recorded.' + this.publicApi.hashedId() + '.' + e, new Date().getTime())
                    }, t.prototype.recordLoad = function() {
                        return this.publicApi.info('recordLoad'), Wistia.localStorage('accounts_loaded.' + this._getAccountKey(), new Date().getTime()), Wistia.localStorage('medias_loaded.' + this.publicApi.hashedId(), new Date().getTime())
                    }, t.prototype.recordPlay = function() {
                        return this.publicApi.info('recordPlay'), Wistia.localStorage('accounts_played.' + this._getAccountKey(), new Date().getTime()), Wistia.localStorage('medias_played.' + this.publicApi.hashedId(), new Date().getTime())
                    }, t.prototype.isValidKey = function(e) {
                        return 25 < (null == e ? void 0 : e.length) && /^[a-z0-9_\-\.]+$/i.test(e)
                    }, t.prototype._saveVisitorVersion = function(e) {
                        if (null == e && (e = 1), null == Wistia.localStorage('visitor_version')) return Wistia.localStorage('visitor_version', e)
                    }, t.prototype._getVisitorVersion = function() {
                        var e;
                        return e = Wistia.localStorage('visitor_version'), e ? e : (this._saveVisitorVersion(0), 0)
                    }, t.prototype.reset = function() {
                        return this.stopMonitoring(), this.initializedOnce = !1, this._eventKey = null
                    }, t.prototype.initialize = function() {
                        return this.initializedOnce || (this.publicApi.info('video tracker initialize'), this._lastLoadForAccount = this.lastLoadForAccount(), this._lastLoadForMedia = this.lastLoadForMedia(), this._lastPlayForAccount = this.lastPlayForAccount(), this._lastPlayForMedia = this.lastPlayForMedia(), this._failedEventsQueue = [], this._retryTimer = null, this._retryInterval = 1e3, this.initializedOnce = !0, this.log('initialized'), this.recordLoad(), this.debounceTransmit()), this
                    }, t.prototype.monitor = function() {
                        return this.publicApi.embedded(function(n) {
                            return function() {
                                return n.stopMonitoring(), n.publicApi.info('_tracker.monitor'), n.initialize(), null == n.onPlaybackRateChange && (n.onPlaybackRateChange = function(e) {
                                    return n.log('playbackRateChange', null, e)
                                }), null == n.onPlay && (n.onPlay = function() {
                                    if (n.log('play'), n.recordPlay(), !n._played) return n._played = !0, n.debounceTransmit()
                                }), null == n.onPause && (n.onPause = function() {
                                    if (.3 < Math.abs(n.publicApi.duration() - n.publicApi.time())) return n.log('pause')
                                }), null == n.onEnd && (n.onEnd = function() {
                                    return n.log('end'), n.transmit()
                                }), null == n.onSeek && (n.onSeek = function(e, t) {
                                    if (5 <= Math.abs(t - e)) return n.log('seek')
                                }), null == n.onPercentWatchedThreshold && (n.onPercentWatchedThreshold = function(e) {
                                    return n.log('percentWatchedThreshold', null, e), n.transmit()
                                }), n.monitoring = !0, n.publicApi.rebind('play', n.onPlay), n.publicApi.rebind('pause', n.onPause), n.publicApi.rebind('end', n.onEnd), n.publicApi.rebind('seek', n.onSeek), n.publicApi.rebind('playbackratechange', n.onPlaybackRateChange), n.publicApi.rebind('percentWatchedThreshold', n.onPercentWatchedThreshold), 'playing' === n.publicApi.state() && n.onPlay(), e.timeout(n.publicApi.uuid + '.start_tracking_timeout', function() {
                                    return n.publicApi.info('_tracker start tracking_loop'), e.eventLoop.add(n.publicApi.uuid + '.tracking_loop', n.params.transmitInterval, function() {
                                        return 'playing' === n.publicApi.state() && n.log('update'), n.transmit()
                                    })
                                }, Math.random() * n.params.transmitInterval + 1e3)
                            }
                        }(this))
                    }, t.prototype.stopMonitoring = function() {
                        if (this.publicApi.info('_tracker.stopMonitoring'), this.monitoring = !1, this.onPlay && this.publicApi.unbind('play', this.onPlay), this.onPause && this.publicApi.unbind('pause', this.onPause), this.onEnd && this.publicApi.unbind('end', this.onEnd), this.onSeek && this.publicApi.unbind('seek', this.onSeek), this.onPercentWatchedChanged) return this.publicApi.unbind('percentwatchedchanged', this.onPercentWatchedChanged)
                    }, t.prototype.distilleryUrl = function() {
                        return this.publicApi._opts.statsUrl || this.publicApi._mediaData.distilleryUrl
                    }, t.prototype.sendToDistillery = function(t) {
                        return e.detect.browser.msie && 11 > e.detect.browser.version ? this.sendDataUsingJsonp(t) : this.sendDataUsingXhr(t)
                    }, t.prototype.sendDataUsingXhr = function(t) {
                        var n;
                        return n = 3e4, e.remote.post(this.distilleryUrl(), {
                            contentType: 'text/plain',
                            data: encodeURIComponent(t),
                            timeout: n
                        })
                    }, t.prototype.sendDataUsingJsonp = function(t) {
                        var n, o;
                        return n = 3e4, o = this.distilleryUrl() + '?data=' + encodeURIComponent(t), this.isIE && (o += '&ie=1'), e.remote.script(o, null, n)
                    }, t.prototype.retrySendingFailedEvent = function() {
                        return this.sendToDistillery(this._failedEventsQueue.shift())
                    }, t.prototype.resendAllFailedEvents = function() {
                        var e, t, n, o, i, a, r, l;
                        if (o = this._failedEventsQueue.length, clearTimeout(this._retryTimer), !!(0 < o)) {
                            for (l = 350, r = this._failedEventsQueue, t = function(e) {
                                    return function(t, n) {
                                        return setTimeout(function() {
                                            return e.sendToDistillery(t)
                                        }, l * n)
                                    }
                                }(this), (n = i = 0, a = r.length); i < a; n = ++i) e = r[n], t(e, n);
                            return this._failedEventsQueue = []
                        }
                    }, t.prototype.transmit = function(t) {
                        return null == t && (t = {}), this.publicApi._attrs.shouldTrack ? e.util.pageLoaded(function(n) {
                            return function() {
                                return e.visitorKey.ready(function() {
                                    var o, i;
                                    if ((0 < n.eventQueue.length || t.force) && (o = n._data(), n.publicApi.info('_tracker.transmit', o), n.publicApi.trigger('transmit-stats', o), n.sendToDistillery(e.base64.encode(o)), n.eventQueue = []), !e.visitorKey._reported && (e.visitorKey._reported = !0, i = e.visitorKey.origin(), ('new' === i || 'timeout' === i) && e.Metrics.videoCount(n.publicApi, 'player/visitor_key/new', 1, {
                                            visitor_key: e.visitorKey.value(),
                                            visitor_key_origin: i
                                        }), 'timeout' === i && e.Metrics.videoCount(n.publicApi, 'player/visitor_key/shim_timeout', 1, {
                                            visitor_key: e.visitorKey.value()
                                        }), 'suggested' === i && e.Metrics.videoCount(n.publicApi, 'player/visitor_key/suggested', 1, {
                                            visitor_key: e.visitorKey.value()
                                        }), /-conflict$/.test(i))) return e.Metrics.videoCount(n.publicApi, 'player/visitor_key/conflict', 1, {
                                        visitor_key: e.visitorKey.value()
                                    })
                                })
                            }
                        }(this)) : void 0
                    }, t.prototype.debounceTransmit = function() {
                        return e.timeout(this.publicApi.uuid + '.transmit_play_data', function(e) {
                            return function() {
                                return e.transmit()
                            }
                        }(this), 350)
                    }, t.prototype.log = function(e, t, n) {
                        var o;
                        if (this.publicApi._attrs.shouldTrack) return this.publicApi.info('_tracker.log', e, t, n), 'conversion' === e ? (this.params.conversionType = t, this.params.conversionData = n, this.transmit({
                            force: !0
                        })) : (o = {
                            key: e,
                            value: this.timeInVideo(),
                            timeDelta: this.timeDelta()
                        }, 'initialized' === e ? (o.lastAccountInstance = this._lastLoadForAccount, o.lastMediaInstance = this._lastLoadForMedia) : 'play' === e ? (o.lastAccountInstance = this._lastPlayForAccount, o.lastMediaInstance = this._lastPlayForMedia) : 'playbackRateChange' === e ? o.value = n : 'percentWatchedThreshold' == e && (o.value = n), this.publicApi.debug('_tracker.log', o), this.eventQueue.push(o))
                    }, t.prototype.logConversionOpportunity = function(t) {
                        var n;
                        return this.publicApi._attrs.shouldTrack ? null == t.co_key ? e.Metrics.videoCount(this.publicApi, 'player/no-co-key', 1) : (n = {
                            key: 'conversion',
                            value: t,
                            timeDelta: this.timeDelta()
                        }, this.publicApi.info('_tracker.logConversionOpportunity', t), this.eventQueue.push(n)) : void 0
                    }, t.prototype.logAction = function(e, t) {
                        var n, o, a;
                        return null == t && (t = {}), n = {
                            time: this.publicApi.time(),
                            key: e,
                            type: 'default',
                            category: 'default',
                            text: 'test',
                            uniqueToVisitor: !1
                        }, o = i({}, n, t), a = {
                            value: o,
                            key: 'action',
                            timeDelta: this.timeDelta()
                        }, this.eventQueue.push(a)
                    }, t.prototype.clearActionRecordings = function() {
                        return ['chapterImpression', 'chapterConversion', 'shareImpression', 'shareConversion'].forEach(function(e) {
                            return function(t) {
                                return Wistia.localStorage('action_recorded.' + e.publicApi.hashedId() + '.' + t, '', !0)
                            }
                        }(this))
                    }, t.prototype.logCaptionSelection = function(e) {
                        var t;
                        if (this.publicApi._attrs.shouldTrack) return e.caption_key ? (t = {
                            key: 'caption',
                            value: e,
                            timeDelta: this.timeDelta()
                        }, this.publicApi.info('_tracker.logCaptionSelection', e), this.eventQueue.push(t)) : void 0
                    }, t.prototype.logChapterClick = function(e, t) {
                        return this.logAction('chapterConversion', {
                            text: e.title,
                            type: 'conversion',
                            category: 'chapter',
                            uniqueToVisitor: !0,
                            time: t
                        }), this.logAction('chapterSelection-' + e.id, {
                            text: e.title,
                            type: 'interaction',
                            category: 'chapter',
                            time: t
                        })
                    }, t.prototype.logShareClick = function(e) {
                        return this.logAction('shareConversion', {
                            text: e,
                            type: 'conversion',
                            category: 'share',
                            uniqueToVisitor: !0
                        }), this.logAction('shareClick-' + e, {
                            text: e,
                            type: 'interaction',
                            category: 'share'
                        })
                    }, t.prototype.timeInVideo = function() {
                        var e;
                        return e = this.publicApi.time(), null == e && ('beforeplay' === this.publicApi.state() ? e = 0 : e = this.publicApi.duration()), e.toFixed(1)
                    }, t.prototype.timeDelta = function() {
                        return new Date().getTime() - this.clockStart
                    }, t.prototype.visitorKey = function() {
                        return e.visitorKey.ready() ? e.visitorKey.value() : null
                    }, t.prototype.eventKey = function() {
                        return this.isValidKey(this._eventKey) ? this._eventKey : (this._eventKey = e.uniqId('87807890a94cb12dd5bac50a108ce05e'.substring(0, 7) + '_'), this._eventKey)
                    }, t
                }()
            }(Wistia)
    },
    74: function(e, t, n) {
        var o;
        o = n(30), Wistia.base64 || (Wistia.base64 = {}), Wistia.base64.decode || (Wistia.base64._keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=', Wistia.base64.encode = o.base64Encode)
    },
    75: function(e, t, n) {
        var o;
        o = n(30), Wistia.base64 || (Wistia.base64 = {}), Wistia.base64.decode || (Wistia.base64._keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=', Wistia.base64.decode = o.base64Decode)
    },
    76: function(e, t, n) {
        (function(e) {
            var t, o, i, a, r, l, s, d, u, p;
            if (!e.remote) return s = n(13), l = n(25), o = n(12), i = e.Hosts = n(20), t = e.Ajax = n(24), a = e.MediaData = n(42), r = e.PlaylistData = n(48), p = n(29), d = p.jsonp, u = p.jsonpPlus, e.remote = {}, e.remote.appHostname = s, e.remote.embedHost = i.cdnFastWistiaComHost, e.remote.externalEmbedHost = i.cdnFastWistiaNetHost, e.remote.appHost = i.appHost, e.remote.assetHost = i.deliveryHost, e.remote.assetUrlWithCorrectHost = function(e, t, n) {
                return o.assetUrlWithCorrectHost(t, n)
            }, e.remote.findScriptInDomBySrc = l.findScriptInDomBySrc, e.remote.script = l.runScript, e.remote.scripts = l.runScripts, e.remote.scriptInputsToHash = l.scriptInputsToHash, e.remote.ajaxDefaults = t.AJAX_DEFAULTS, e.remote.get = t.ajaxGet, e.remote.head = t.ajaxHead, e.remote.post = t.ajaxPost, e.remote.ajax = t.ajax, e.remote.canEditMedia = a.canEditMedia, e.remote.media = a.fetchMedia, e.remote._isEmbedSslMedia = a.isEmbedSslMedia, e.remote._convertEmbedSslToAkamai = a.convertEmbedSslToAkamai, e.cacheMedia = a.cacheMedia, e.cacheAbTest = a.cacheAbTest, e.uncacheMedia = a.uncacheMedia, e.uncacheAbtest = a.uncacheAbTest, e.mediaFromCache = a.mediaFromCache, e.abTestFromCache = a.abTestFromCache, e.remote.playlist = r.fetchPlaylist, e.remote.fetch = u, e.jsonp = {
                get: d
            }
        })(Wistia)
    },
    77: function(e, t, n) {
        (function(e) {
            var t, o, i, a, r, l;
            if (!e.Metrics) return o = n(20).metricsHost, a = n(44), i = a.msend, l = a.send, t = a.count, r = a.sample, e.Metrics = {
                count: t,
                sample: r,
                send: l,
                msend: i,
                videoCount: function(e, t, n, o) {
                    return null == n && (n = 1), this.videoSend(e, 'count', t, n, o)
                },
                videoSample: function(e, t, n, o) {
                    return this.videoSend(e, 'sample', t, n, o)
                },
                videoSend: function(t, n, o, i, a) {
                    return null == a && (a = {}), 'function' == typeof t.hasData ? t.hasData(function(r) {
                        return function() {
                            var l, s, d, u, p, c, m, g, y, h, f, b, A, _, v;
                            if (l = ('function' == typeof t.bandwidthTest ? t.bandwidthTest().savedResult() : void 0) || {}, a = e.obj.merge({
                                    location: ('undefined' != typeof location && null !== location ? null == (d = location.protocol) ? void 0 : d.length : void 0) && ('undefined' != typeof location && null !== location ? null == (g = location.hostname) ? void 0 : g.length : void 0) ? location.protocol + '//' + location.hostname : null,
                                    agent: navigator.userAgent,
                                    account_key: null == (y = t._mediaData) ? void 0 : y.accountKey,
                                    at: t.time(),
                                    video_id: t.hashedId(),
                                    embed_type: t.playerType,
                                    duration: t.duration(),
                                    client_kbps: l.clientKbps,
                                    supports_hd: l.supportsHd,
                                    autoplay: null != (h = t._opts) && h.autoPlay,
                                    in_iframe: top !== self,
                                    device_pixel_ratio: window.devicePixelRatio,
                                    window_width: e.elem.width(window),
                                    window_height: e.elem.height(window),
                                    video_width: t.videoWidth(),
                                    video_height: t.videoHeight(),
                                    visitor_key: null == (f = t._tracker) ? void 0 : f.visitorKey(),
                                    event_key: null == (b = t._tracker) ? void 0 : b.eventKey(),
                                    event_time_delta: null == (A = t._tracker) ? void 0 : A.timeDelta(),
                                    connection_type: r.connectionType(),
                                    version: 9,
                                    channel: e.channelName
                                }, a), /romulus|html5|vulcan/.test(t.playerType) && (e.detect.trident ? a.errorState = null == (_ = t.elem()) || null == (v = _.error) ? void 0 : v.code : a.errorState = null == (u = t.elem()) ? void 0 : u.error), null != t._cacheStatus && (a.cache_status = t._cacheStatus), null != t._assetServer && (a.asset_server = t._assetServer), null != t._cacheHit && (a.cache_hit = t._cacheHit), t.inFullscreen && (a.in_fullscreen = t.inFullscreen()), null == t._substream ? (a.substream = null, a.adaptive = null, s = null == (p = t.data) ? void 0 : p.asset) : (a.substream = t._substream.index, a.adaptive = t._substream.adaptive, a.current_level = t._substream.currentLevel, a.all_level_names = t._substream.allLevelNames, s = t._substream.asset, a.hls_error_counts = t._substream.hlsErrorCounts()), null != s && (a.asset_type = s.type, a.asset_slug = s.slug, a.bitrate = s.bitrate, a.asset_height = s.height, a.asset_width = s.width), 0 < (null == (c = t.videoElem) || null == (m = c.buffered) ? void 0 : m.length) && (a.bufferedFrom0 = t.videoElem.buffered.end(0)), null != t._timeToFirstByte && (a.time_to_first_byte = t._timeToFirstByte), a.buffered = null == t.totalBuffered ? void 0 : t.totalBuffered(), a.played = null == t.totalPlayed ? void 0 : t.totalPlayed(), r.send(n, o, i, a), t._mediaData && t._mediaData.accountKey && t._mediaData.accountSpecificMetrics) return r.send(n, t._mediaData.accountKey + '/' + o, i, a)
                        }
                    }(this)) : void 0
                },
                countEvent: function(e, t, n) {
                    var o;
                    return n || (n = t), null == (o = this._private.countEventCallbacks)[n] && (o[n] = this._private.mkCountEventCallback(t, n)), e.rebind(t, this._private.countEventCallbacks[n])
                },
                countEventOnce: function(e, t, n) {
                    var o;
                    return n || (n = t), null == (o = this._private.countEventOnceCallbacks)[n] && (o[n] = this._private.mkCountEventOnceCallback(t, n)), e.rebind(t, this._private.countEventOnceCallbacks[n])
                },
                sampleEvent: function(e, t, n) {
                    var o;
                    return n || (n = t), null == (o = this._private.sampleEventCallbacks)[n] && (o[n] = this._private.mkSampleEventCallback(t, n)), e.rebind(t, this._private.sampleEventCallbacks[n])
                },
                countShowLoadingOnce: function(e) {
                    var t;
                    return t = -1, e.bind('waiting', function(n) {
                        return function(o) {
                            return 2 > t && 2 <= o ? (n.videoCount(e, 'player/show-loading/first', 1), t = o, e.unbind) : t = o
                        }
                    }(this))
                },
                countShowLoadingAll: function(e) {
                    var t;
                    return t = -1, e.bind('waiting', function(n) {
                        return function(o) {
                            return 2 > t && 2 <= o && n.videoCount(e, 'player/show-loading/all', 1), t = o
                        }
                    }(this)), e.bind('done-waiting', function() {
                        return t = -1
                    })
                },
                countShowLoadingLongTimeOnce: function(e) {
                    var t;
                    return t = -1, e.bind('waiting', function(n) {
                        return function(o) {
                            return 5 > t && 5 <= o ? (n.videoCount(e, 'player/show-loading-long-time/first', 1), t = o, e.unbind) : t = o
                        }
                    }(this))
                },
                countShowLoadingLongTimeAll: function(e) {
                    var t;
                    return t = -1, e.bind('waiting', function(n) {
                        return function(o) {
                            return 5 > t && 5 <= o && n.videoCount(e, 'player/show-loading-long-time/all', 1), t = o
                        }
                    }(this)), e.bind('done-waiting', function() {
                        return t = -1
                    })
                },
                assetBuckets: function(t) {
                    var n, o;
                    return n = t.engine ? t.engine.currentAsset() : t._currentAsset, o = e.detect.iphone || e.detect.android || e.detect.blackberry || /mobile/i.test(navigator.userAgent), n ? o ? e.detect.iphone ? ['mobile', 'iphone'] : e.detect.android ? ['mobile', 'android'] : ['mobile'] : /hls/.test(n.type) ? ['hls'] : /md/.test(n.type) ? ['md'] : /hd/.test(n.type) ? ['hd'] : ['sd'] : []
                },
                connectionType: function() {
                    var e;
                    return e = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection, null == e ? void 0 : e.type
                },
                sumTimeRanges: function(e) {
                    var t, n, o, i;
                    if (null == e) return null;
                    for (i = 0, t = n = 0, o = e.length; 0 <= o ? n < o : n > o; t = 0 <= o ? ++n : --n) i += e.end(t) - e.start(t);
                    return i
                },
                millisecondsSince: function(e) {
                    return new Date().getTime() - e
                },
                _private: {
                    countEventCallbacks: {},
                    mkCountEventCallback: function(t, n) {
                        return function(o) {
                            return n || (n = t), e.Metrics.videoCount(this, 'player/' + n, o)
                        }
                    },
                    countEventOnceCallbacks: {},
                    mkCountEventOnceCallback: function(t, n) {
                        return function(o) {
                            return n || (n = t), e.Metrics.videoCount(this, 'player/' + n, o), this.unbind
                        }
                    },
                    sampleEventCallbacks: {},
                    mkSampleEventCallback: function(t, n) {
                        return function(o) {
                            return n || (n = t), e.Metrics.videoSample(this, 'player/' + n, o)
                        }
                    }
                }
            }
        })(Wistia)
    },
    78: function(e, t, n) {
        (function(e) {
            var t, o, i, a;
            if (e.Plugin || (e.Plugin = {}), !e.Plugin.Base) return (a = n(20), o = a.eV1Host, i = a.eV1Protocol, t = n(10).allow3rdParty, e.Plugin.Base = function() {
                function t() {
                    this.pluginName = 'plugin', this
                }
                return t.prototype.instances = function() {
                    return e.data(['plugins', this.pluginName, this.video.uuid])
                }, t.prototype.register = function(t) {
                    var n;
                    return n = this.playlist || this.video, n.plugins[this.uuid] = t, e.data(['plugins', this.pluginName, n.uuid, this.uuid], t)
                }, t.prototype.remove = function(t) {
                    var n;
                    if (null == t && (t = {}), n = this.playlist || this.video, n.plugins[this.uuid] = null, e.removeData(['plugins', this.pluginName, n.uuid, this.uuid]), n.plugins[this.uuid] === this && delete n.plugins[this.uuid], n.plugin[this.pluginName] === this && delete n.plugin[this.pluginName], !t.dontFit) return e.grid.fitHorizontal(n), e.grid.fitVertical(n)
                }, t.prototype.fit = function() {}, t.prototype.init = function(t, n) {
                    return null == t.plugins && (t.plugins = {}), (null == t ? void 0 : t.playlist) ? this.playlist = t : this.video = t, this.target = this.playlist || this.video, this.options = n || {}, this.params = e.extend({}, n || {}), this.uuid = this.params.uuid || e.seqId('wistia_', '_plugin')
                }, t
            }(), !e.plugin) ? (e.plugin = function(t, n) {
                var o, i, a, r, l, s;
                if ((o = null == (r = e.pluginQueue) || null == (l = r[t]) ? void 0 : l.shift()) && (a = function() {
                        var e, i;
                        return o.video.info('initializing plugin', t, o.options), e = n(o.video._impl || o.video, o.options) || !0, o.video.plugin[t] = e, o.video._impl && (o.video._impl.plugin[t] = e), o.video.trigger('plugininitialized', t), null == (i = o.video._pluginStopGos) ? void 0 : 'function' == typeof i[t] ? i[t](!0, e) : void 0
                    }, i = function() {
                        return o.options.initBeforeHasData ? a() : o.video.hasData(a)
                    }, !0 !== o.options.initBeforeHasData && (null == (s = o.video) ? void 0 : s.looksDown()) ? (o.video.notice('W.plugin: delaying initialization of plugin until "up"', t, o.options), o.video.bind('up', function() {
                        return i(), this.unbind
                    })) : o.video._implVersion === o.implVersion ? i() : o.video.notice('W.plugin impl changed, ignoring initialization', t, o.options)), !e.plugin[t]) return e.plugin[t] = n
            }, e.plugin._prefetched = {}, e.plugin._inject = function(t, n, a) {
                var r, l;
                if (null == a && (a = {}), !1 !== a.on) return r = i() + '//' + o() + '/assets/external/' + n + '.js', l = [{
                    name: n,
                    options: a,
                    src: a.src && e.plugin._allow3rdParty(t.options) ? a.src : r,
                    async: !0
                }], e.plugin._setFnForDefinedPlugins(t, l), e.plugin._execQueue(t, l)
            }, e.plugin._allow3rdParty = function(e) {
                return t(e)
            }, e.plugin._setFnForDefinedPlugins = function(t, n) {
                var o, i, a, r;
                for (a = [], o = 0, i = n.length; o < i; o++) r = n[o], e.plugin[r.name] && a.push(function(n) {
                    return n.fn = function() {
                        var o;
                        return o = function() {
                            var o, i, a;
                            return i = e.plugin[n.name](t._impl || t, n.options) || !0, t.plugin[n.name] = i, t._impl && (t._impl.plugin[n.name] = i, t.trigger('plugininitialized', n.name)), null == (a = t._pluginStopGos) ? void 0 : 'function' == typeof a[o = n.name] ? a[o](!0, i) : void 0
                        }, n.options.initBeforeHasData ? o() : t.hasData(o)
                    }, n.async = !1
                }(r));
                return a
            }, e.plugin._queueUndefinedPlugins = function(t, n) {
                var o, i, a, r, l, s;
                for (null == e.pluginQueue && (e.pluginQueue = {}), l = [], (o = 0, i = n.length); o < i; o++) r = n[o], r.subScripts ? l.push(function() {
                    var n, o, i, l;
                    for (i = r.subScripts, l = [], (n = 0, o = i.length); n < o; n++) s = i[n], a = s.name || s.src, null == e.pluginQueue[a] && (e.pluginQueue[a] = []), r.fn ? l.push(void 0) : l.push(e.pluginQueue[a].push({
                        video: t,
                        implVersion: t._implVersion,
                        options: s.options
                    }));
                    return l
                }()) : (a = r.name || r.src, null == e.pluginQueue[a] && (e.pluginQueue[a] = []), r.fn ? l.push(void 0) : l.push(e.pluginQueue[a].push({
                    video: t,
                    implVersion: t._implVersion,
                    options: r.options
                })));
                return l
            }, e.plugin._execQueue = function(t, n, o) {
                return e.plugin._queueUndefinedPlugins(t, n), e.remote.scripts(n, o)
            }, e.plugin._init = function(t, n, o) {
                var i, a, r;
                return r = t.charAt(0).toUpperCase() + t.substr(1), a = e.Plugin[r], i = new a, i.init(n, o), i
            }, e.plugin._instance = function(t, n, o) {
                return e.data(['plugins', t, n.uuid, o])
            }, e.plugin._remove = function(t, n, o) {
                var i;
                null != (i = e.plugin._instance(t, n, o)) && i.remove()
            }, e.plugin._isActive = function(t, n, o) {
                return !!e.plugin._instance(t, n, o)
            }, e.plugin._defined = function() {
                var t, n, o, i;
                for (t in n = e.plugin, o = [], n) i = n[t], /^_/.test(t) || o.push({
                    name: t,
                    options: i
                });
                return o
            }) : void 0
        })(Wistia)
    },
    79: function() {
        (function(e) {
            var t;
            if (!e.seo) return t = e.seo = {}, e.seo.inject = function() {}
        })(Wistia)
    },
    8: function(e, t, n) {
        n(9), n(55), n(56), n(63), n(64), n(65), n(66), n(67), n(68), n(69), n(70), n(71), n(72), n(73), n(74), n(75), n(76), n(77), n(78), n(79), n(80), n(81), n(82), n(83), n(85), n(86), n(87), n(88), n(89), n(90), n(91), n(92), n(93), n(94), n(96)
    },
    80: function(e, t, n) {
        (function(e) {
            var t;
            if (!e.localStorage) return t = n(21), e.localStorage = t.setOrGet, e.removeLocalStorage = t.removeLocalStorage, e.dumpLocalStorage = t.dumpLocalStorage, e._initializers.initLocalStorage = function() {
                return t.init()
            }, e._destructors.destroyLocalStorage = function() {
                return t.uncache()
            }
        })(Wistia)
    },
    81: function() {
        (function(n) {
            return n.cookie ? void 0 : n.cookie = function(o, i, a) {
                var r, l, s, e, d;
                if (1 < arguments.length && '[object Object]' !== i + '') {
                    a = n.extend({}, a), null == i && (a.expires = -1), 'number' == typeof a.expires && (r = a.expires, d = a.expires = new Date, d.setDate(d.getDate() + r)), i = i + '';
                    try {
                        return document.cookie = [encodeURIComponent(o), '=', a.raw ? i : encodeURIComponent(i), a.expires ? '; expires=' + a.expires.toUTCString() : '', a.path ? '; path=' + a.path : '', a.domain ? '; domain=' + a.domain : '', a.secure ? '; secure' : ''].join('')
                    } catch (e) {
                        if (s = e, /sandbox/i.test(s.message)) n.notice('sandboxed, can\'t write cookie'), null;
                        else throw s
                    }
                }
                a = i || {}, l = a.raw ? function(e) {
                    return e
                } : decodeURIComponent;
                try {
                    return (e = new RegExp('(?:^|; )' + encodeURIComponent(o) + '=([^;]*)').exec(document.cookie)) ? l(e[1]) : null
                } catch (e) {
                    if (s = e, /sandbox/i.test(s.message)) return n.notice('sandboxed, can\'t get cookie'), null;
                    throw s
                }
            }
        })(Wistia)
    },
    82: function() {
        (function(e) {
            e.gridify || (e.gridifyCss = function(e) {
                var t;
                return t = e.replace(/_grid$/, ''), '#' + e + '_wrapper{-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;font-family:Arial,sans-serif;font-size:14px;height:100%;position:relative;text-align:left;width:100%;}\n#' + e + '_wrapper *{-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;}\n#' + e + '_above{position:relative;}\n#' + e + '_main{display:block;height:100%;position:relative;}\n#' + e + '_behind{height:100%;left:0;position:absolute;top:0;width:100%;}\n#' + e + '_center{height:100%;overflow:hidden;position:relative;width:100%;}\n#' + e + '_front{display:none;height:100%;left:0;position:absolute;top:0;width:100%;}\n#' + e + '_top_inside{position:absolute;left:0;top:0;width:100%;}\n#' + e + '_top{width:100%;position:absolute;bottom:0;left:0;}\n#' + e + '_bottom_inside{position:absolute;left:0;bottom:0;width:100%;}\n#' + e + '_bottom{width:100%;position:absolute;top:0;left:0;}\n#' + e + '_left_inside{height:100%;position:absolute;left:0;top:0;}\n#' + e + '_left{height:100%;position:absolute;right:0;top:0;}\n#' + e + '_right_inside{height:100%;right:0;position:absolute;top:0;}\n#' + e + '_right{height:100%;left:0;position:absolute;top:0;}\n#' + e + '_below{position:relative;}'
            }, e.gridifyHtml = function(e) {
                return {
                    id: e + '_wrapper',
                    childNodes: [{
                        id: e + '_above'
                    }, {
                        id: e + '_main',
                        childNodes: [{
                            id: e + '_behind'
                        }, {
                            id: e + '_center'
                        }, {
                            id: e + '_front'
                        }, {
                            id: e + '_top_inside',
                            childNodes: {
                                id: e + '_top'
                            }
                        }, {
                            id: e + '_bottom_inside',
                            childNodes: {
                                id: e + '_bottom'
                            }
                        }, {
                            id: e + '_left_inside',
                            childNodes: {
                                id: e + '_left'
                            }
                        }, {
                            id: e + '_right_inside',
                            childNodes: {
                                id: e + '_right'
                            }
                        }]
                    }, {
                        id: e + '_below'
                    }]
                }
            }, e.createGrid = function(t, n) {
                var o;
                return o = e.createGridSkeleton(), e.initGridDimensions(t, o, n), o
            }, e.createGridSkeleton = function() {
                var t, n, o, a, i, r, l, s;
                for (n = e.seqId('wistia_grid_'), o = e.elem.fromObject(e.gridifyHtml(n)), t = e.css(o, e.gridifyCss(n)), r = {}, r.css = t, r.root = o, e.elem.style(o, {
                        display: 'none'
                    }), e.elem.append(document.body, o), s = ['wrapper', 'main', 'above', 'below', 'top', 'right', 'bottom', 'left', 'top_inside', 'right_inside', 'bottom_inside', 'left_inside', 'front', 'center', 'behind'], (a = 0, i = s.length); a < i; a++) l = s[a], r[l] = document.getElementById(n + '_' + l);
                return e.elem.remove(o), e.elem.style(o, {
                    display: 'block'
                }), r
            }, e.initGridDimensions = function(t, n, o) {
                var i, a, r;
                if (null == o && (o = {}), !1 !== o.initDimensions) return a = t._embedContainer, i = t.chrome, r = t._opts, i.style.height = e.elem.height(a) + 'px', n.main.style.width = e.elem.width(a) + 'px'
            }, e.gridify = function(t, n) {
                var o, a, i, r, l, s;
                for (l = {}, o = n.id + '_grid', n.innerHTML = e.generate.html(e.gridifyHtml(o)), r = ['wrapper', 'main', 'above', 'below', 'top', 'right', 'bottom', 'left', 'top_inside', 'right_inside', 'bottom_inside', 'left_inside', 'front', 'center', 'behind'], (a = 0, i = r.length); a < i; a++) s = r[a], l[s] = document.getElementById(o + '_' + s);
                return e.util.addInlineCss(l.wrapper, e.gridifyCss(o)), l.wrapper.style.height = e.elem.height(n) + 'px', l.main.style.width = e.elem.width(n) + 'px', l
            }, e.isGridElem = function(e, t) {
                var n, o;
                for (o in e)
                    if (n = e[o], t === n) return !0;
                return !1
            }, e.grid = {}, e.grid.allNodesHidden = function(e) {
                var t, n, o;
                if (0 === e.length) return !0;
                for (t = 0, n = e.length; t < n; t++)
                    if (o = e[t], o.style && 'none' !== o.style.display) return !1;
                return !0
            }, e.grid.zeroEmptySections = function(t) {
                var n, o, i, a, r, l;
                for (a = ['top', 'bottom', 'left', 'right', 'above', 'below'], r = [], (o = 0, i = a.length); o < i; o++) l = a[o], n = t.grid[l], n.childNodes.length ? e.grid.allNodesHidden(n.childNodes) ? (n.style.height = '0px', n.style.fontSize = '0px', n.style.lineHeight = '0px', r.push(n.isEmpty = !0)) : (n.style.height = '', n.style.fontSize = '', r.push(n.style.lineHeight = '')) : (n.appendChild(document.createTextNode(' ')), n.style.height = '0px', n.style.fontSize = '0px', n.style.lineHeight = '0px', r.push(n.isEmpty = !0));
                return r
            }, e.grid.wrapperHeight = function(t) {
                var n, o;
                return n = t.grid.wrapper, o = e.elem.height(n), o
            }, e.grid.wrapperWidth = function(t) {
                var n, o;
                return n = t.grid.wrapper, o = e.elem.width(n), o
            }, e.grid.fitVertical = function(t) {
                var n, o, i, a, r, l;
                t._opts.dontFit || (e.grid.zeroEmptySections(t), o = t.grid, i = o.main, l = o.wrapper, r = Math.max(e.elem.height(o.above), e.elem.height(o.top)), n = Math.max(e.elem.height(o.below), e.elem.height(o.bottom)), a = Math.max(0, e.grid.wrapperHeight(t) - r - n), i.style.height = a + 'px', 0 === e.elem.width(o.left) && (i.style.left = '0px'), i.style.marginTop = e.elem.height(o.top) + 'px')
            }, e.grid.fitHorizontal = function(t) {
                var n, o, i, a, r, l;
                t._opts.dontFit || (e.grid.zeroEmptySections(t), n = t.grid, l = n.wrapper, i = n.main, o = e.elem.width(n.left), r = e.elem.width(n.right), a = e.grid.wrapperWidth(t) - o - r, i.style.width = a + 'px', i.style.left = o + 'px')
            }, e.grid.fit = function(t, n) {
                /left|right/.test(n) ? e.grid.fitHorizontal(t) : /top|bottom|above|below/.test(n) && e.grid.fitVertical(t), t.ieSizeHack()
            })
        })(Wistia)
    },
    83: function(e, t, n) {
        (function(e) {
            return e.Color ? void 0 : e.Color = n(84)
        })(Wistia)
    },
    84: function(e, t, n) {
        var o, i;
        i = n(16).cachedDetect, o = function() {
            function e(t) {
                t instanceof e ? (this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a) : t ? this.parse(t) : (this.r = this.g = this.b = 0, this.a = 1), this
            }
            var t, n, o, a, r, l, s;
            return e.detect = i(), r = /^#?([0-9a-f]{3,4}|[0-9a-f]{6,8})$/i, s = /^rgba?\((\d{1,3}(?:\.\d+)?%?),\s*(\d{1,3}(?:\.\d+)?%?),\s*(\d{1,3}(?:\.\d+)?%?)(?:,\s*([01]?\.?\d*))?\)$/, l = /^\d+(\.\d+)*%$/, n = /([0-9a-f])/gi, t = function(e) {
                return .5 + e << 0
            }, a = function(e) {
                return l.test(e) ? 2.55 * parseFloat(e) : e
            }, o = function(e, t, n) {
                return 0 > n && (n += 1), 1 < n && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < 1 / 2 ? t : n < 2 / 3 ? e + 6 * ((t - e) * (2 / 3 - n)) : e
            }, e.prototype.parse = function(e) {
                var t, o;
                return e += '', r.test(e) ? (o = e.replace(/^\#/, ''), (3 === o.length || 4 === o.length) && (o = o.replace(n, '$1$1')), this.r = parseInt(o.substr(0, 2), 16), this.g = parseInt(o.substr(2, 2), 16), this.b = parseInt(o.substr(4, 2), 16), this.a = 8 === o.length ? parseInt(o.substr(6, 2), 16) / 255 : 1) : s.test(e) && (t = e.match(s), this.r = parseFloat(a(t[1])), this.g = parseFloat(a(t[2])), this.b = parseFloat(a(t[3])), this.a = t[4] ? parseFloat(t[4]) : 1), this
            }, e.prototype.clone = function() {
                return new e(this)
            }, e.prototype._hslFromRgb = function() {
                var e, t, n, o, i, a, l, d, r, s;
                return (d = this.r / 255, n = this.g / 255, e = this.b / 255, a = Math.max(d, n, e), l = Math.min(d, n, e), i = (a + l) / 2, s = a, a === l && (this._h = this._s = 0), t = a - l, 0 === t) ? (this._h = 0, this._s = 0, this._l = 100 * d, this) : (r = .5 < i ? t / (2 - a - l) : t / (a + l), o = a === d ? (n - e) / t + (n < e ? 6 : 0) : a === n ? (e - d) / t + 2 : (d - n) / t + 4, o /= 6, this._h = 360 * o, this._s = 100 * r, this._l = 100 * i, this)
            }, e.prototype._rgbFromHsl = function() {
                var e, t, n, i, a;
                return e = this._h / 360, a = this._s / 100, t = this._l / 100, i = .5 > t ? t * (1 + a) : t + a - t * a, n = 2 * t - i, this.r = 255 * o(n, i, e + 1 / 3), this.g = 255 * o(n, i, e), this.b = 255 * o(n, i, e - 1 / 3), this
            }, e.prototype.blendChannel = function(e, t, n) {
                return this[e] = n * t + (1 - n) * this[e], this
            }, e.prototype.blend = function(t, n) {
                return t = new e(t), this.blendChannel('r', t.r, n), this.blendChannel('g', t.g, n), this.blendChannel('b', t.b, n), this
            }, e.prototype.lightenChannel = function(e, t) {
                return this[e] += t, 0 > this[e] ? this[e] = 0 : 255 < this[e] && (this[e] = 255), this
            }, e.prototype.lighten = function(e) {
                return this.looksLikePercent(e) ? this.lightness(this.lightness() + parseFloat(e)) : (this.lightenChannel('r', e), this.lightenChannel('g', e), this.lightenChannel('b', e)), this
            }, e.prototype.darken = function(e) {
                return 'string' == typeof e ? this.lighten('-' + e) : this.lighten(-e)
            }, e.prototype.looksLikePercent = function(e) {
                return /^\-?\d+(\.\d+)?%$/.test(e)
            }, e.prototype.lightness = function(e) {
                return this._hslFromRgb(), null == e ? this._l : (this._l = Math.max(0, Math.min(100, e)), this._rgbFromHsl(), this)
            }, e.prototype.saturation = function(e) {
                return this._hslFromRgb(), null == e ? this._s : (this._s = Math.max(0, Math.min(100, e)), this._rgbFromHsl(), this)
            }, e.prototype.grayLevel = function() {
                return (.299 * this.r + .587 * this.g + .114 * this.b) / 255
            }, e.prototype.whiteLevel = function() {
                return Math.min(Math.min(this.r, this.g), this.b)
            }, e.prototype.isGrayscale = function() {
                return this.r === this.g && this.g === this.b
            }, e.prototype.distanceFrom = function(e) {
                return Math.sqrt(Math.pow(this.r - e.r, 2) + Math.pow(this.g - e.g, 2) + Math.pow(this.b - e.b, 2))
            }, e.prototype.channelDominance = function() {
                return ['r', 'g', 'b'].sort(function(e) {
                    return function(t, n) {
                        return e[n] - e[t]
                    }
                }(this))
            }, e.prototype.alpha = function(e) {
                return null == this.a ? this.a : (this.a = e, this)
            }, e.prototype.red = function(e) {
                return null == e ? this.r : (this.r = e, this)
            }, e.prototype.green = function(e) {
                return null == this.g ? this.g : (this.g = e, this)
            }, e.prototype.blue = function(e) {
                return null == this.b ? this.b : (this.b = e, this)
            }, e.prototype.toHex = function() {
                var e, t, n;
                return n = Math.round(this.r).toString(16), t = Math.round(this.g).toString(16), e = Math.round(this.b).toString(16), 1 === n.length && (n = '0' + n), 1 === t.length && (t = '0' + t), 1 === e.length && (e = '0' + e), '' + n + t + e
            }, e.prototype.toHexWithAlpha = function() {
                var e;
                return e = Math.round(255 * this.a).toString(16), 1 === e.length && (e = '0' + e), '' + e + this.toHex()
            }, e.prototype.toRgb = function() {
                return 'rgb(' + Math.round(this.r) + ',' + Math.round(this.g) + ',' + Math.round(this.b) + ')'
            }, e.prototype.toRgba = function() {
                return 'rgba(' + Math.round(this.r) + ',' + Math.round(this.g) + ',' + Math.round(this.b) + ',' + this.a + ')'
            }, e.prototype.toRgbaOrHex = function() {
                return this.constructor.detect.browser.msie && 9 > this.constructor.detect.browser.version ? '#' + this.toHex() : this.toRgba()
            }, e.prototype.toPercent = function() {
                return 'rgba(' + 100 * (this.r / 255) + '%,' + 100 * (this.g / 255) + '%,' + 100 * (this.b / 255) + '%,' + this.a + ')'
            }, e.prototype.toIeGradient = function() {
                return 'progid:DXImageTransform.Microsoft.gradient(startColorStr=\'#' + this.toHexWithAlpha() + '\', endColorStr=\'#' + this.toHexWithAlpha() + '\')'
            }, e.prototype.toString = function() {
                return this.toPercent()
            }, e
        }(), e.exports = o
    },
    85: function(e, t, n) {
        (function(t) {
            var o;
            if (!t.embeds) return t.embeds = {}, o = n(15).wlog, t.embeds.setup = function(e) {
                return t.embeds.notEmbedding(function() {
                    var n, o, i, a, r, l, s, d, u;
                    t.embeds.notEmbedding(!1), a = [];
                    try {
                        for (e = t.embeds.uninitialized(e), e && e.length && 0 < e.length && t.info('initializing', null == e ? void 0 : e.length, 'embedElems'), (l = 0, s = e.length); l < s; l++) {
                            i = e[l];
                            try {
                                t.info('initializing elem', i), r = t.embeds.hashedIdForElem(i, {
                                        asyncOnly: !0
                                    }), i.id ? document.getElementById(i.id) !== i && (d = t.embeds.genIdFor(r), t.error('Duplicate DOM ID found for container "' + i.id + '". Changing it to "' + d + '" to avoid issues.', i), i.id = d) : i.id = t.embeds.genIdFor(r), u = t.embeds.optionsFromElemClass(i), t.options('__' + i.id + '_dom_options__', u),
                                    function(e, n) {
                                        return a.push(function() {
                                            if (!t.embeds.containerIsInitialized(n)) return t.embed(e, {
                                                container: n.id
                                            })
                                        })
                                    }(r, i)
                            } catch (e) {
                                n = e, t.error(n)
                            }
                        }
                    } catch (e) {
                        o = e, t.error(o)
                    }
                    return a.push(function() {
                        return t.watchForInit()
                    }), a.push(function() {
                        return t.embeds.notEmbedding(!0)
                    }), t.asyncChain('embeds_setup', a)
                })
            }, t.embeds._setupThrottled = t.util.throttle(500, t.embeds.setup), t.embeds.optionsFromElemClass = function(e) {
                var n, o, i, a, r, l;
                for (a = [], l = t.elem.classes(e), (n = 0, i = l.length); n < i; n++) o = l[n], 0 < o.indexOf('=') && a.push(o);
                return r = t.url.paramsToJson(a.join('&')), t.obj.cast(r), r
            }, t.embeds.hashedIdForElem = function(e, t) {
                var n, o, i, a, r, l;
                return null == t && (t = {}), t.asyncOnly ? (null == (n = e.className) || null == (o = n.match(/wistia_async_([^\s]+)/)) ? void 0 : o[1]) || null : (null == (i = e.className) || null == (a = i.match(/wistia_async_([^\s]+)/)) ? void 0 : a[1]) || (null == (r = e.className) || null == (l = r.match(/wistia_([^\s]+)/)) ? void 0 : l[1]) || null
            }, t.embeds.genIdFor = function(e) {
                var t, n, o;
                for (t = 'wistia-' + e, o = 1; n = t + '-' + o, !!document.getElementById(n);) o += 1;
                return n
            }, t.embeds._options = {}, t.embeds.options = function(e, n) {
                var o, i, a, r;
                if (t.obj.isObject(e) && (n = e, e = '__global__'), null != n) return t.embeds._options[e] = t.obj.cast(t.obj.clone(n));
                if (e) {
                    if (t.embeds._options[e]) return t.embeds._options[e];
                    if (o = t.api(e), null === o) return {};
                    for (i in a = t.embeds._options, a)
                        if (r = a[i], t.api(i) === o) return r;
                    return {}
                }
                return t.embeds._options
            }, t.options = t.embeds.options, t.embeds.api = function(e) {
                var n, o, i, a, r, l, s;
                return null == e && (e = 'wistia_embed'), document.querySelectorAll ? document.querySelectorAll('div.' + e + ',span.' + e) : (o = (null == (a = document.body) ? void 0 : a.getElementsByTagName('div')) || [], s = (null == (r = document.body) ? void 0 : r.getElementsByTagName('span')) || [], n = function() {
                    var n, a, r;
                    for (r = [], n = 0, a = o.length; n < a; n++) i = o[n], t.elem.hasClass(i, e) && r.push(i);
                    return r
                }(), l = function() {
                    var n, o, a;
                    for (a = [], n = 0, o = s.length; n < o; n++) i = s[n], t.elem.hasClass(i, e) && a.push(i);
                    return a
                }(), n.concat(l))
            }, t.embeds.uninitialized = function(e) {
                var n, o, i, a, r;
                for (null == e && (e = t.embeds.api()), r = [], (i = 0, a = e.length); i < a; i++) n = e[i], o = t.embeds.hashedIdForElem(n, {
                    asyncOnly: !0
                }), o && !t.embeds.containerIsInitialized(n) && r.push(n);
                return r
            }, t.embeds.containerIsInitialized = function() {
                return function(e) {
                    return e && e.wistiaApi && !(e.wistiaApi instanceof t.IframeApiProxy)
                }
            }(this), t.embeds.initialized = function() {
                var e, n, o, i;
                for (i in n = t._data.video, o = [], n) e = n[i], o.push(e);
                return o
            }, t.embeds.observe = function() {
                var n, i;
                if (!t.embeds.initObserver) {
                    if (t.embeds.initObserver = t.elem.mutationObserver(function(e) {
                            var n, o, i, a, r, l, s, d, u, p;
                            for (o = [], n = !1, (i = 0, a = e.length); i < a; i++)
                                for (s = e[i], 0 < (null == (u = s.addedNodes) ? void 0 : u.length) && (n = !0), p = s.addedNodes || [], (l = 0, r = p.length); l < r; l++) d = p[l], t.elem.hasClass(d, 'wistia_embed') && o.push(d);
                            if (0 < o.length && setTimeout(function() {
                                    return t.embeds.setup(o)
                                }, 10), n) return t.embeds._setupThrottled()
                        }), n = {
                            subtree: !0,
                            childList: !0
                        }, 0 < t.detect.ios.version) return t.util.onDocReady(function() {
                        return t.embeds.initObserver.observe(document.body, n)
                    });
                    try {
                        return t.embeds.initObserver.observe(document.body, n)
                    } catch (e) {
                        return i = e, o.notice(i), t.util.onDocReady(function() {
                            return t.embeds.initObserver.observe(document.body, n)
                        })
                    }
                }
            }, t.embeds.unobserve = function() {
                var e;
                return null != (e = t.embeds.initObserver) && e.disconnect(), t.embeds.initObserver = null
            }, t.embeds.poll = function(e) {
                return null == e && (e = 500), t.eventLoop.add('poll_setup_embeds', e, function() {
                    return t.embeds.setup()
                })
            }, t.embeds.unpoll = function() {
                var e;
                return null == (e = t.eventLoop) ? void 0 : e.remove('poll_setup_embeds')
            }, t.embeds.watch = function() {
                return t.embeds._dontWatch = !1, t.detect.mutationObserver && !t.detect.trident ? (t.embeds.observe(), t.embeds.poll(2e3)) : t.embeds.poll()
            }, t.embeds.dontWatch = function() {
                return t.embeds._dontWatch = !0, t.embeds.unwatch()
            }, t.embeds.unwatch = function() {
                return t.embeds.unobserve(), t.embeds.unpoll()
            }, t.flushInit = function() {
                var n, e, i, a;
                if (window.wistiaInit) {
                    if (wistiaInit instanceof Array)
                        for (i = 0, a = wistiaInit.length; i < a; i++) {
                            e = wistiaInit[i];
                            try {
                                'function' == typeof e && e(t)
                            } catch (e) {
                                n = e, o.error(n)
                            }
                        } else 'function' == typeof wistiaInit && wistiaInit(t);
                    return window.wistiaInit = null
                }
            }, t.addQueue = function(e) {
                return t._queueNames.push(e), t.watchForInit()
            }, t._queueNames = ['_wq', 'wistiaInitQueue'], t._wqBoundListeners = [], t.flushInitQueue = function() {
                var n, e, i, a, r, l, s, d, u, p, c, m, g, y, h, f;
                for (g = t._queueNames, y = [], (r = 0, s = g.length); r < s; r++)
                    if (c = g[r], p = window[c], !!(p && p instanceof Array && 0 < p.length)) {
                        for (a = []; 0 < p.length;)
                            if (h = p.shift(), !t.obj.isObject(h)) 'function' == typeof h ? function(e) {
                                var n;
                                return n = function() {
                                    return e(t)
                                }, a.push(n)
                            }(h) : t.notice(c + ': Don\'t know what to do with ' + h + ', ignoring.');
                            else if (h.revoke && t.revokeQueueListener(h.revoke), h.__unbinds || (h.__unbinds = []), h.id) m = !1, h.options && ('_all' === h.id ? (t.options(h.options), m = !0) : (t.options(h.id, h.options), m = !0)),
                            function(e) {
                                var n, o;
                                return o = '_all' === e.id ? [] : [e.id], e.onFind && (n = o.concat([function(t) {
                                    return e.onFind(t)
                                }]), e.__unbinds = e.__unbinds.concat(t.api.apply(t, n)), m = !0), e.onHasData && (n = o.concat([function(t) {
                                    return t.hasData(function() {
                                        return e.onHasData(t)
                                    })
                                }]), e.__unbinds = e.__unbinds.concat(t.api.apply(t, n)), m = !0), e.onEmbedded && (n = o.concat([function(t) {
                                    return t.embedded(function() {
                                        return e.onEmbedded(t)
                                    })
                                }]), e.__unbinds = e.__unbinds.concat(t.api.apply(t, n)), m = !0), e.onReady && (n = o.concat([function(t) {
                                    return t.ready(function() {
                                        return e.onReady(t)
                                    })
                                }]), e.__unbinds = e.__unbinds.concat(t.api.apply(t, n)), m = !0), m ? t._wqBoundListeners.push(e) : t.error('No initialization function provided for ID ' + e.id, e)
                            }(h);
                        else
                            for (l in i = function(e, n, o) {
                                    var i, r;
                                    if ('function' == typeof o) return r = function(e) {
                                        return e.hasData(function() {
                                            return o(e)
                                        })
                                    }, i = function() {
                                        return e.__unbinds = '_all' === n ? e.__unbinds.concat(t.api(r)) : e.__unbinds.concat(t.api(n, r)), t._wqBoundListeners.push(e)
                                    }, a.push(i);
                                    if (t.obj.isObject(o)) return i = '_all' === n ? function() {
                                        return t.options(o)
                                    } : function() {
                                        return t.options(n, o)
                                    }, a.push(i);
                                    if ('__unbinds' === n || 'revoke' === n);
                                    else return t.error('Unknown initialization object:', o, 'Expected Object or Function.')
                                }, h) f = h[l], i(h, l, f);
                        for (u = 0, d = a.length; u < d; u++) {
                            e = a[u];
                            try {
                                'function' == typeof e && e(t)
                            } catch (e) {
                                n = e, o.error(n)
                            }
                        }
                        y.push(p.length = 0)
                    } return y
            }, t.getInitQueueListeners = function() {
                return t.obj.assign([], t._wqBoundListeners)
            }, t.revokeQueueListener = function(e) {
                var n, o, i, a, r, l, s, d;
                for (s = e instanceof Array ? e : [e], l = [], (n = 0, o = s.length); n < o; n++) {
                    if (e = s[n], e.__unbinds) {
                        for (r = e.__unbinds, a = 0, i = r.length; a < i; a++) d = r[a], 'function' == typeof d && d();
                        delete e.__unbinds
                    }
                    l.push(t._wqBoundListeners = t._wqBoundListeners.filter(function(t) {
                        return t !== e
                    }))
                }
                return l
            }, t.watchForInit = function() {
                if (null == t._pollInit && (t._pollInit = function() {
                        return t.flushInitQueue(), t.flushInit()
                    }), t._pollInit(), t.eventLoop) return t.eventLoop.unpause('poll_init'), t.eventLoop.add('poll_init', 500, t._pollInit)
            }, t.api = function(e, n) {
                var o, i, a, r, l, s, d, u, p, c, m;
                if (null != e) {
                    if (n) return t.api.onFind(e, n);
                    if ('function' == typeof e) return t.api.onFind(e);
                    if ('string' != typeof e) 'number' == typeof e ? (l = e, o = t.api.all(), 0 > l && (l = o.length + l), a = (null == (m = o[l]) ? void 0 : m.container) || null) : window.HtmlElement && e instanceof HtmlElement ? a = e : t.error('W.api: Unrecognized matcher', e);
                    else if (u = e, a = document.getElementById(u), !a)
                        for (i = t.api.all(), s = 0, d = i.length; s < d; s++)
                            if (r = i[s], 0 === (null == (p = r.hashedId()) ? void 0 : p.indexOf(u)) || 0 === (null == (c = r.container.id) ? void 0 : c.indexOf(u))) {
                                a = r.container;
                                break
                            } return (null == a ? void 0 : a.wistiaApi) && (a.wistiaApi instanceof t.PublicApi || t.IframeApi && a.wistiaApi instanceof t.IframeApi) ? a.wistiaApi : null
                }
                return t.api.all()[0] || null
            }, t.api.all = function() {
                return t.api._apiHandles().concat(t.api._iframeHandles())
            }, t.api._apiHandles = function() {
                return t.embeds.initialized()
            }, t.api._apiHandlesByDomOrder = function() {
                var e, n, o, i, a;
                for (n = t.embeds.api('wistia_embed_initialized'), a = [], (o = 0, i = n.length); o < i; o++) e = n[o], e.wistiaApi && e.wistiaApi instanceof t.PublicApi && a.push(e.wistiaApi);
                return a
            }, t.api._iframeHandles = function() {
                var e, n, o, i;
                for (i in n = t._data.iframe_api, o = [], n) e = n[i], o.push(e);
                return o
            }, t.api.onFind = function(e, n) {
                var o, i;
                return 'function' == typeof e && (n = e, e = null), o = function(o) {
                        return (null === e || t.api(e) === o) && (n(o), !0)
                    }, wistiaEmbeds.each(o), i = [wistiaEmbeds.on('initembed', o), wistiaEmbeds.on('afterreplace', o)],
                    function() {
                        return function() {
                            var e, t, n, o;
                            for (n = [], e = 0, t = i.length; e < t; e++) o = i[e], n.push(o());
                            return n
                        }
                    }(this)
            }, t._asyncInitSoonAfterLoad = function(e) {
                return null == e && (e = 10), setTimeout(function() {
                    var n;
                    try {
                        return t.embeds.setup(), t.embeds._dontWatch || t.embeds.watch(), t.watchForInit()
                    } catch (e) {
                        return n = e, o.error(n)
                    }
                }, e)
            }, t._initializers.initAsyncEmbeds = function() {
                var e, n, o;
                return t.embeds.notEmbedding = new t.StopGo, t.embeds.notEmbedding(!0), null == t._data && (t._data = {}), null == (e = t._data).video && (e.video = {}), null == (n = t._data).iframe_api && (n.iframe_api = {}), window._inWistiaIframe ? setTimeout(function() {
                    return t.watchForInit()
                }, 10) : (0 < t.detect.ios.version ? t.util.onDocReady(t._asyncInitSoonAfterLoad) : (!t.util.isDocReady() && t.util.onDocReady(t._asyncInitSoonAfterLoad), t._asyncInitSoonAfterLoad()), t._asyncInitSoonAfterLoad(500), null == (o = t.eventLoop) ? void 0 : o.pause('poll_init'))
            }, t._destructors.destroyAsyncEmbeds = function() {
                var e, n;
                return t.clearTimeouts('embeds_setup'), null != (e = t.eventLoop) && e.remove('poll_init'), null == (n = t.embeds) ? void 0 : n.unwatch()
            }
        })(Wistia)
    },
    86: function(e, t, n) {
        'use strict';
        n.r(t);
        var o = n(2);
        o['default']._initializers.initEmbedLinks = function() {
            wistiaEmbeds.bind('initembed', function() {
                o['default'].timeout('maybe_load_embed_links_1', r, 1), o['default'].timeout('maybe_load_embed_links_1000', r, 1e3), o['default'].timeout('maybe_load_embed_links_3000', r, 3e3)
            }), o['default'].util.onDocReady(function() {
                r(), o['default'].timeout('maybe_load_embed_links_5000', r, 5e3)
            })
        }, o['default']._destructors.destroyEmbedLinks = function() {
            o['default'].EmbedLink.EmbedLinkClass && o['default'].EmbedLink.EmbedLinkClass._onEv1Destroy()
        };
        var i = function() {
                return o['default'].asyncRequire('embedLinks.js')
            },
            a = function() {
                for (var e = o['default'].api._apiHandlesByDomOrder(), t = 0; t < e.length; t++)
                    if (e[t]._opts && e[t]._opts.playlistLinks) return !0;
                return !!(0 < document.querySelectorAll('a[href^="#wistia_"]').length)
            },
            r = function() {
                a() && i()
            };
        o['default'].EmbedLink = {}, o['default'].EmbedLink.setup = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return i().then(function() {
                var e;
                (e = o['default'].EmbedLink.EmbedLinkClass).setup.apply(e, t)
            })
        }, o['default'].EmbedLink.setupAll = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return i().then(function() {
                var e;
                (e = o['default'].EmbedLink.EmbedLinkClass).setupAll.apply(e, t)
            })
        }, o['default'].EmbedLink.destroyAll = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return i().then(function() {
                var e;
                (e = o['default'].EmbedLink.EmbedLinkClass).destroyAll.apply(e, t)
            })
        }
    },
    87: function() {
        var e = [].slice;
        (function(t) {
            var n, o, i, a, r;
            if (o = t.lib('promiscuous'), t.iframeInit || (t.iframeInit = function(e, n) {
                    return t.asyncRequire('insideIframe.js').then(function(t) {
                        return t(e, n)
                    })
                }), !t.IframeApiProxy) {
                for (i in n = function() {
                        function n(e) {
                            this.iframe = e, this.loadIframeApi()
                        }
                        return n.prototype.loadIframeApi = function() {
                            return new o(function() {
                                return function(e) {
                                    return setTimeout(function() {
                                        return t.asyncRequire('iframeApi.js').then(function(t) {
                                            return function() {
                                                return t._loaded = !0, e()
                                            }
                                        }(this))
                                    }, 0)
                                }
                            }(this))
                        }, n.prototype.proxyFn = function() {
                            var t, n, o;
                            return n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], this._loaded ? (o = this.iframe.wistiaApi)[n].apply(o, t) : (this.loadIframeApi().then(function(e) {
                                return function() {
                                    var o;
                                    if (e.iframe.wistiaApi !== e) return (o = e.iframe.wistiaApi)[n].apply(o, t)
                                }
                            }(this)), this)
                        }, n.prototype._hasImpl = function() {
                            var t;
                            return t = 1 <= arguments.length ? e.call(arguments, 0) : [], this.proxyFn.apply(this, ['_hasImpl'].concat(e.call(t)))
                        }, n.prototype.hasData = function() {
                            var t;
                            return t = 1 <= arguments.length ? e.call(arguments, 0) : [], this.proxyFn.apply(this, ['hasData'].concat(e.call(t)))
                        }, n.prototype.embedded = function() {
                            var t;
                            return t = 1 <= arguments.length ? e.call(arguments, 0) : [], this.proxyFn.apply(this, ['embedded'].concat(e.call(t)))
                        }, n.prototype.ready = function() {
                            var t;
                            return t = 1 <= arguments.length ? e.call(arguments, 0) : [], this.proxyFn.apply(this, ['ready'].concat(e.call(t)))
                        }, n.prototype.up = function() {
                            var t;
                            return t = 1 <= arguments.length ? e.call(arguments, 0) : [], this.proxyFn.apply(this, ['up'].concat(e.call(t)))
                        }, n.prototype.down = function() {
                            return this.proxyFn.apply(this, ['down'].concat(e.call(args)))
                        }, n
                    }(), a = t.PublicApi.prototype, a) r = a[i], n.prototype[i] || 'function' != typeof r || function(t) {
                    return n.prototype[t] = function() {
                        var n;
                        return n = 1 <= arguments.length ? e.call(arguments, 0) : [], this.proxyFn.apply(this, [t].concat(e.call(n)))
                    }
                }(i);
                t.IframeApiProxy = n
            }
            return null == t.maybeRequireIframeApi && (t.maybeRequireIframeApi = function() {
                var e, t, o, i, a;
                if (a = document.querySelectorAll('iframe.wistia_embed,iframe[name=wistia_embed],iframe.wistia_playlist,iframe[name=wistia_playlist]'), 0 < a.length) {
                    for (i = [], e = 0, o = a.length; e < o; e++) t = a[e], t.wistiaApi ? i.push(void 0) : i.push(t.wistiaIframeApiProxy = t.wistiaApi = new n(t));
                    return i
                }
            }), null == t.onIframePostMessage && (t.onIframePostMessage = function(e) {
                if ('new-wistia-iframe' === e.data) return t.asyncRequire('iframeApi.js'), t.elem.unbind
            }), t.elem.rebind(window, 'message', t.onIframePostMessage), t.bind('ev1initend', function() {
                return t.maybeRequireIframeApi(), t.elem.rebind(window, 'message', t.onIframePostMessage)
            }), t.bind('ev1destroystart', function() {
                return t.elem.unbind(window, 'message', t.onIframePostMessage)
            })
        })(Wistia)
    },
    88: function() {
        var e = function(e, n) {
                function o() {
                    this.constructor = e
                }
                for (var i in n) t.call(n, i) && (e[i] = n[i]);
                return o.prototype = n.prototype, e.prototype = new o, e.__super__ = n.prototype, e
            },
            t = {}.hasOwnProperty;
        (function(t) {
            if (!t.EmbedListener) return t.EmbedListener = function(n) {
                function o() {
                    this.uuid = t.seqId(), this.bindHandles(), this.bind('down', function(e) {
                        return function() {
                            return e.info('got down event, prune and rebind handles'), t.timeout('prune_zombies_later', function() {
                                return e.pruneZombies(), e.bindHandles()
                            })
                        }
                    }(this)), this.bind('up', function(e) {
                        return function(t) {
                            return e.info('got up event, set _bound=false for', t), t._bound = !1, e.bindHandles()
                        }
                    }(this))
                }
                return e(o, n), o.prototype.bindHandles = function() {
                    var e, t, n, o, i;
                    for (e = this.allUnboundHandles(), this.info('bindHandles', e), i = [], (n = 0, o = e.length); n < o; n++) t = e[n], this.info('bind to all events for', t), t._bound = !0, i.push(this.push(t));
                    return i
                }, o.prototype.pruneZombies = function() {
                    var e, t, n, o, i, a, r, l, s, d, u;
                    for (this.info('pruneZombies'), u = [], l = this.allBoundHandles(), (n = 0, a = l.length); n < a; n++) e = l[n], e.looksDown() ? this.info('prune zombie', e) : u.push(e);
                    for (t = o = 0, s = this.length; 0 <= s ? o <= s : o >= s; t = 0 <= s ? ++o : --o) delete this[t];
                    for (this.length = 0, d = [], (i = 0, r = u.length); i < r; i++) e = u[i], d.push(this.push(e));
                    return d
                }, o.prototype.allBoundHandles = function() {
                    var e, t, n, o, i;
                    for (i = [], o = this.allHandles(), (t = 0, n = o.length); t < n; t++) e = o[t], e._bound && i.push(e);
                    return i
                }, o.prototype.allUnboundHandles = function() {
                    var e, t, n, o, i;
                    for (i = [], o = this.allHandles(), (t = 0, n = o.length); t < n; t++) e = o[t], e._bound || i.push(e);
                    return i
                }, o.prototype.allHandles = function() {
                    return this.apiHandles().concat(this.iframeApiHandles())
                }, o.prototype.iframeApiHandles = function() {
                    var e, n, o, i, a;
                    for (this.iframes || (this.iframes = document.getElementsByTagName('iframe')), a = [], i = this.iframes, (n = 0, o = i.length); n < o; n++) e = i[n], e.wistiaApi && !(e.wistiaApi instanceof t.IframeApiProxy) && a.push(e.wistiaApi);
                    return a
                }, o.prototype.apiHandles = function() {
                    var e, t, n, o;
                    if (t = [], window.Wistia)
                        for (n in o = Wistia.data('video'), o) e = o[n], t.push(e);
                    return t
                }, o.prototype.each = function(e) {
                    var t, n, o, i, a;
                    for (i = this.allBoundHandles(), a = [], (n = 0, o = i.length); n < o; n++) t = i[n], a.push(e(t));
                    return a
                }, o.prototype.onFind = function(e) {
                    var t;
                    return t = function(t) {
                        return function(n) {
                            return n.up(function() {
                                return t.info('onFind', n), e(n), n.unbind
                            })
                        }
                    }(this), this.each(t), this.bind('initembed', t)
                }, o
            }(Array), t.mixin(t.EmbedListener.prototype, t.bindable), t.mixin(t.EmbedListener.prototype, t.logHelpers), t._initializers.initEmbedShepherd = function() {
                return window.wistiaEmbeds ? (t.info('window.wistiaEmbeds already exists, call bindHandles'), 'function' == typeof wistiaEmbeds.bindHandles && wistiaEmbeds.bindHandles()) : (t.info('initialize embed shepherd'), window.wistiaEmbeds = new t.EmbedListener), t.info('call window.wistiaEmbedShepherdReady()'), 'function' == typeof window.wistiaEmbedShepherdReady ? window.wistiaEmbedShepherdReady() : void 0
            }, t._destructors.destroyEmbedShepherd = function() {
                var e;
                return null != (e = window.wistiaEmbeds) && e.each(function(e) {
                    return e._bound = !1
                }), window.wistiaEmbeds = null
            }
        })(Wistia)
    },
    89: function(e, t, n) {
        (function(e) {
            var t, o, i, a, r, l;
            if (t = e, !t.VisitorKey) return l = n(20), o = l.eV1Host, i = l.eV1Protocol, a = n(17).globalBind, r = n(45).isVisitorTrackingEnabled, t.DISTILLERY_COOKIE = '__distillery', a('visitortrackingchange', function() {
                var e, n, o, i, a, l;
                for (a = t.api.all(), n = 0, i = a.length; n < i; n++) l = a[n], 'function' == typeof l._postDownVisitorTrackingEnabled && l._postDownVisitorTrackingEnabled();
                if (t.visitorKey) {
                    if (o = r(), !o) return t.visitorKey.unpersist(), t.cookie('muxData', '', {
                        expires: 0,
                        path: '/'
                    }), t.cookie('wistia-http2-push-disabled', '', {
                        expires: 0,
                        path: '/'
                    }), 'function' == typeof(e = t._destructors).destroyMux ? e.destroyMux() : void 0;
                    if (t.visitorKey.value()) return t.visitorKey.persist(t.visitorKey.value())
                }
            }), !0 === window.wistiaDisableCookies && null == window.wistiaIframeShim && (window.wistiaIframeShim = !1), t.VisitorKey = function() {
                function e() {
                    this.ready = new t.StopGo, this.unbinds = [], setTimeout(function(e) {
                        return function() {
                            return e.unbinds.push(t.api.onFind(function(t) {
                                return t.hasData(function() {
                                    var n;
                                    return t.iframe || !0 !== (null == (n = t._mediaData) ? void 0 : n.privacyMode) || e.unpersist(), e.doInit()
                                })
                            }))
                        }
                    }(this), 0)
                }
                return e.prototype.reinitialize = function() {
                    return this.destroy(), this.unbinds = [], this.ready = new t.StopGo, this._initialized = !1, this.doInit()
                }, e.prototype.doInit = function() {
                    if (!this._initialized) return this._initialized = !0, !1 === r() || !1 === window.wistiaIframeShim || t.detect.browser.msie && (8 > t.detect.browser.version || t.detect.browser.quirks) || !t.detect.localstorage ? (this.savedValue() || (this._origin = 'new', this.persist(t.VisitorKey.generate())), this.ready(!0)) : (this.setupOutsideShim(), t.util.pageLoaded(function(e) {
                        return function() {
                            return e.executeShim('send_visitor_key|' + (e.savedValue() || '') + '|' + '87807890a94cb12dd5bac50a108ce05e', !0)
                        }
                    }(this)))
                }, e.prototype.setupOutsideShim = function() {
                    return this.info('@setupOutsideShim'), null == this._outsideShim && (this._outsideShim = function(e) {
                        return function(n) {
                            var o, i, a, r;
                            if (!e._ignoreShimMessages) return (t.clearTimeouts('shim_timeout'), 'string' == typeof n.data && /^visitor_key/.test(n.data)) ? (a = n.data.split('|'), o = a[0], r = a[1], i = a[2], e._origin = i, e.info('outsideShim got message ' + n.data), e.persist(r), t.timeout('remove_iframe_shim', function() {
                                return t.elem.remove(e._iframeShim)
                            }, 1e3), t.timeout('visitor_key_ready', function() {
                                return e.info('visitorKey ready(true)'), e.ready(!0)
                            }), t.elem.unbind) : void 0
                        }
                    }(this)), t.elem.rebind(window, 'message', this._outsideShim)
                }, e.prototype.executeShim = function(e, n) {
                    var a;
                    if (null == n && (n = !1), this.info('@executeShim', e, n), this._iframeShim = t.elem.fromObject({
                            allowtransparency: 'true',
                            frameborder: 0,
                            height: 1,
                            scrolling: 'no',
                            src: i() + '//' + o() + '/embed/iframe_shim?' + t.url.jsonToParams(this.ev1ParamsForShim()),
                            style: {
                                height: '1px',
                                left: '-200px',
                                position: 'absolute',
                                top: '-200px',
                                width: '1px',
                                direction: 'ltr'
                            },
                            tagName: 'iframe',
                            width: 1
                        }), this._iframeShim.onload = function(t) {
                            return function() {
                                return t.info('post request for visitor key', e), t._iframeShim.contentWindow.postMessage(e, '*')
                            }
                        }(this), (a = document.getElementsByTagName('script')[0]) && t.elem.after(a, this._iframeShim), n) return t.timeout('shim_timeout', function(n) {
                        return function() {
                            return n.notice('shim timeout for', e), t.elem.unbind(window, 'message', n._outsideShim), n.savedValue() || (n._origin = 'timeout', n.persist(t.VisitorKey.generate())), n.ready(!0)
                        }
                    }(this), 5e3)
                }, e.prototype.persist = function(e) {
                    var n;
                    return t.VisitorKey.isValid(e) ? (this.info('@persist', e), this._value = e, !!r()) ? (!0 !== window.wistiaDisableCookies && this.localStorageValue() !== this._value && t.localStorage(t.DISTILLERY_COOKIE, this._value), !0 !== window.wistiaDisableCookies && this.cookieValue() !== this._value) ? (n = new Date, n.setTime(n.getTime() + 3.1536e10), t.cookie(t.DISTILLERY_COOKIE, this._value, {
                        expires: n,
                        path: '/'
                    })) : void 0 : void 0 : void this.error(new Error('Attempted to persist invalid visitor key \'' + e + '\''))
                }, e.prototype.unpersist = function() {
                    if (this.clearFromCurrentDomain(), !window._wistiaIframeShim) return this.clearFromShimDomain()
                }, e.prototype.clear = function() {
                    return this.info('clear'), this.unpersist(), this._value = null
                }, e.prototype.clearFromCurrentDomain = function() {
                    if (t.removeLocalStorage(t.DISTILLERY_COOKIE, null), t.cookie(t.DISTILLERY_COOKIE)) return t.cookie(t.DISTILLERY_COOKIE, '', {
                        expires: 0,
                        path: '/'
                    })
                }, e.prototype.clearFromShimDomain = function() {
                    return this.executeShim('clear_visitor_key')
                }, e.prototype.value = function() {
                    return this._value || this.savedValue()
                }, e.prototype.savedValue = function() {
                    return r() ? this.localStorageValue() || this.cookieValue() : void 0
                }, e.prototype.cookieValue = function() {
                    return t.cookie(t.DISTILLERY_COOKIE)
                }, e.prototype.localStorageValue = function() {
                    return t.localStorage(t.DISTILLERY_COOKIE)
                }, e.prototype.isValid = function() {
                    return t.VisitorKey.isValid(this.value())
                }, e.prototype.origin = function() {
                    return this._origin
                }, e.prototype.ev1ParamsForShim = function() {
                    var e, n, o, i, a, r, l, s, d, u;
                    for (d = document.getElementsByTagName('script'), r = {
                            domain: 'net'
                        }, (n = 0, a = d.length); n < a; n++)
                        if (s = d[n], u = s.getAttribute('src')) {
                            if (!u.indexOf) continue;
                            if (e = 0 <= u.indexOf(t.remote.embedHost()) ? 'com' : 0 <= u.indexOf(t.remote.externalEmbedHost()) ? 'net' : null, o = 0 <= u.indexOf('/E-v1.js'), i = 0 <= u.indexOf('/static/'), e && o) return l = {
                                domain: e
                            }, i && (l.legacy = !0), l
                        } return {
                        domain: 'net'
                    }
                }, e.prototype.cancelShim = function() {
                    if (this._iframeShim && (t.elem.remove(this._iframeShim), this._iframeShim = null), this._outsideShim) return t.elem.unbind(window, 'message', this._outsideShim)
                }, e.prototype.destroy = function() {
                    var e, t, n, o;
                    for (this._ignoreShimMessages = !1, this.cancelShim(), n = this.unbinds, (e = 0, t = n.length); e < t; e++) o = n[e], o();
                    return this.unbinds = []
                }, e.isValid = function(e) {
                    return 25 < (null == e ? void 0 : e.length) && /^[a-z0-9_\-\.]+$/i.test(e)
                }, e.generate = function() {
                    return t.uniqId('87807890a94cb12dd5bac50a108ce05e'.substring(0, 7) + '_')
                }, e
            }(), t.mixin(t.VisitorKey.prototype, t.logHelpers), t._initializers.initVisitorKey = function() {
                return t.visitorKey = new t.VisitorKey
            }, t._destructors.destroyVisitorKey = function() {
                var e;
                return null != (e = t.visitorKey) && e.destroy(), t.visitorKey = null
            }
        })(Wistia)
    },
    9: function(e, t, n) {
        'use strict';
        n.r(t);
        var o = n(10),
            i = n(23),
            a = n(24),
            r = n(12),
            l = n(19),
            s = n(33),
            d = n(34),
            u = n(30),
            p = n(16),
            c = n(35),
            m = n(39),
            g = n(40),
            y = n(17),
            h = n(20),
            f = n(41),
            b = n(11),
            A = n(29),
            _ = n(21),
            v = n(42),
            w = n(44),
            k = n(5),
            C = n(47),
            S = n(48),
            P = n(49),
            E = n(25),
            T = n(4),
            B = n(50),
            x = n(14),
            D = n(15),
            F = n(51),
            I = n(45),
            M = n(22),
            O = n(52),
            L = n(53),
            R = n.n(L),
            H = n(54),
            W = n(28),
            j = n.n(W),
            V = n(7),
            N = n(26),
            U = n.n(N),
            Q = n(27),
            G = n(55);
        Object(i.registerWLib)('utilities/seqid', V['default']), Object(i.registerWLib)('player/lib/assets', r), Object(i.registerWLib)('player/lib/ajax', a), Object(i.registerWLib)('utilities/bindify', l), Object(i.registerWLib)('utilities/cacheable', s), Object(i.registerWLib)('utilities/color', O['default']), Object(i.registerWLib)('player/control_definitions', d), Object(i.registerWLib)('utilities/core', u), Object(i.registerWLib)('utilities/detect', p), Object(i.registerWLib)('player/lib/elem', c), Object(i.registerWLib)('utilities/event_loop', m), Object(i.registerWLib)('player/lib/fit-control', g), Object(i.registerWLib)('utilities/globalBindAndTrigger', y), Object(i.registerWLib)('player/lib/hosts', h), Object(i.registerWLib)('interpolation', R.a), Object(i.registerWLib)('utilities/isMouseDown', f), Object(i.registerWLib)('utilities/json', JSON), Object(i.registerWLib)('player/lib/jsonp', A), Object(i.registerWLib)('player/lib/judy', b), Object(i.registerWLib)('utilities/localstorage', _), Object(i.registerWLib)('player/lib/media_data', v), Object(i.registerWLib)('utilities/metrics', w), Object(i.registerWLib)('utilities/obj', k), Object(i.registerWLib)('player/lib/overpassFontFamily', C), Object(i.registerWLib)('player/lib/playlist_data', S), Object(i.registerWLib)('preact', H['default']), Object(i.registerWLib)('promiscuous', j.a), Object(i.registerWLib)('utilities/runScript', Q['default']), Object(i.registerWLib)('player/lib/script-utils', E), Object(i.registerWLib)('utilities/stopgo', U.a), Object(i.registerWLib)('player/lib/timeout-utils', T), Object(i.registerWLib)('player/translations', B), Object(i.registerWLib)('utilities/url', x), Object(i.registerWLib)('utilities/wlog', D), Object(i.registerWLib)('utilities/xhr', F), Object(i.registerWLib)('utilities/trackingConsentApi', I), Object(i.registerWLib)('utilities/wistiaLocalStorage', M)
    },
    90: function() {
        (function(e) {
            return e.TimeHelper ? void 0 : e.TimeHelper = function() {
                function e() {}
                var t, n;
                return e.secondsIntoDurationGroups = function(e) {
                    var t, o, i;
                    return e = n(e), i = Math.floor(e), t = Math.floor(i / 3600), i -= 3600 * t, o = Math.floor(i / 60), i -= 60 * o, {
                        hours: t,
                        minutes: o,
                        seconds: i
                    }
                }, n = function(e) {
                    return 0 | Math.abs(parseInt(e))
                }, e.secondsToIso8601 = function(e) {
                    var t, n, o, i, a;
                    return t = this.secondsIntoDurationGroups(e), n = t.hours.toString(), o = t.minutes.toString(), i = t.seconds.toString(), a = ['00'.substring(n.length) + n, '00'.substring(o.length) + o, '00'.substring(i.length) + i], a.join(':')
                }, e.secondsToHumanDuration = function(e) {
                    var t, n, o, i, a;
                    for (n in t = this.secondsIntoDurationGroups(e), i = {
                            hours: 0 === t.hours ? void 0 : t.hours + 'h',
                            minutes: 0 !== t.minutes || 60 <= e && 0 !== t.seconds ? t.minutes + 'm' : void 0,
                            seconds: 0 !== t.seconds || 0 === t.minutes && 3600 > e ? t.seconds + 's' : void 0
                        }, o = '', i) a = i[n], null != a && (o += a);
                    return o
                }, e.TRIM_REGEXP = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, e.isValidHumanDuration = function(e) {
                    var t, n, o, i, a, r, l, s, d, u, p, c;
                    if (void 0 === e || null === e || '' === e) return !1;
                    if (e = ('' + e).replace(this.TRIM_REGEXP, ''), null === e.match(/[\dhms]+/) || null === e.match(/[hms]+/)) return !1;
                    if (e.match(/[\dhms]+/)[0] !== e) return !1;
                    for (d = ['h', 'm', 's'], n = 0, i = d.length; n < i; n++)
                        if (r = d[n], p = new RegExp(r, 'g'), null !== e.match(p) && 1 < e.match(p).length) return !1;
                    if (l = e.match(/[hms]/g), 3 === l.length && ('h' !== l[0] || 'm' !== l[1] || 's' !== l[2])) return !1;
                    if (2 === l.length) {
                        for (t = !1, s = l.join(''), u = ['hm', 'hs', 'ms'], (o = 0, a = u.length); o < a; o++)
                            if (c = u[o], s === c) {
                                t = !0;
                                break
                            } if (!t) return !1
                    }
                    return !0
                }, t = function(e, t) {
                    var n, o;
                    return n = new RegExp('\\d+' + e), o = t.match(n), o ? parseInt(o[0].match(/\d+/)[0]) : 0
                }, e.humanDurationToSeconds = function(e) {
                    var n, o, i, a, r;
                    if (e = e ? e.toString() : '', r = 0, this.isValidHumanDuration(e))
                        for (o = [3600 * t('h', e), 60 * t('m', e), t('s', e)], i = 0, a = o.length; i < a; i++) n = o[i], r += n;
                    return r
                }, e.isValidIso8601 = function(e) {
                    return void 0 !== e && null !== e && '' !== e && 'string' == typeof e && (e = e.replace(this.TRIM_REGEXP, ''), null !== e.match(/[\d:]+/) && e.match(/[\d:]+/)[0] === e)
                }, e.iso8601ToSeconds = function(e) {
                    var t, o, a, i, r, l, s;
                    for (e = e ? e.toString() : '', s = 0, l = [1, 60, 3600], o = e.split(':').reverse(), (a = i = 0, r = o.length); i < r; a = ++i) t = o[a], s += t * l[a];
                    return n(s)
                }, e
            }()
        })(Wistia)
    },
    91: function() {
        (function(t) {
            return t._initializers.initSpecificTime = function() {
                var n, e, o;
                try {
                    return parent === self ? (o = location.href.match(/[\?&]wtime=([\dhms]*)/), !(2 <= (null == o ? void 0 : o.length))) || t._specificTimeInitiated ? void 0 : (t._specificTimeInitiated = !0, e = !1, wistiaEmbeds.onFind(function(t) {
                        if (!e) return e = !0, t.embedded(function() {
                            var e;
                            return null == (e = t.popover) ? void 0 : e.show()
                        }), t.time(o[1]).play()
                    })) : void 0
                } catch (e) {
                    return n = e, t.error(n), t._specificTimeInitiated = !1
                }
            }
        })(Wistia)
    },
    92: function(e, t, n) {
        (function(e) {
            return e.Interpolation ? void 0 : e.Interpolation = n(53)
        })(Wistia)
    },
    93: function() {
        (function(e) {
            return null == e.mux && (e.mux = {}), e._initializers.initMux = function() {
                if (!e.mux._setup) return e.mux._setup = !0, e.mux._disabled = !1, e.api.onFind(function(t) {
                    var n;
                    return n = function() {
                        return window.wistiaDisableMux
                    }, n() || e.mux._disabled || t.iframe || t._opts && !1 === t._opts.mux ? void 0 : e.asyncRequire('wistia-mux.js').then(function(e) {
                        return t.embedded(function() {
                            return n() ? void 0 : e(t)
                        })
                    })
                })
            }, e._destructors.destroyMux = function() {
                var t, n, o, i, a, r;
                for (e.mux._disabled = !0, o = e.api.all(), a = [], (t = 0, n = o.length); t < n; t++) r = o[t], a.push(null == (i = r.mux) ? void 0 : 'function' == typeof i.destroy ? i.destroy() : void 0);
                return a
            }
        })(Wistia)
    },
    94: function(e, t, n) {
        (function(e) {
            return e.featureEvent ? void 0 : e.featureEvent = n(95)
        })(Wistia)
    },
    95: function(e, t, n) {
        var o, i, a, r, l;
        i = n(13), o = n(24).ajaxPost, a = n(14).objectToQueryParams, l = function(e, t) {
            return t || (t = {}), t.key = e, o('/feature_events', {
                data: a(t)
            })
        }, r = function(e, t, n) {
            return n || (n = {}), n.key = e, n.account_id = t, o('//' + 'fast.wistia.net' + '/feature_events', {
                data: a(n)
            })
        }, e.exports = {
            trackForCurrentAccount: l,
            track: r
        }
    },
    96: function(e, t, n) {
        'use strict';
        n.r(t);
        var o = n(2),
            i = o['default'].lib('utilities/obj'),
            a = i.isEmpty,
            r = o['default'].lib('player/lib/elem'),
            l = r.pageLoaded,
            s = function(e) {
                if (e._mediaData && e._mediaData.integrations)
                    for (var t in e._mediaData.integrations)
                        if (e._mediaData.integrations[t]) return !0;
                return !1
            };
        window._wq = window._wq || [], window._wq.push({
            id: '_all',
            onHasData: function(e) {
                s(e) && l(function() {
                    setTimeout(function() {
                        o['default'].asyncRequire('allIntegrations.js')
                    }, 1e3)
                })
            }
        })
    },
    97: function() {
        (function(e) {
            var t, n;
            return n = e.initializeOnce = function() {
                return e._initializers.initDetect(), e._initializers.initWLog(), e._initializers.initVisitorKey(), e._initializers.initEventLoop(), e._initializers.initFullscreenTriggers(), e.trigger('ev1initonce')
            }, t = e.initializeEveryTime = function() {
                var t;
                return e.trigger('ev1initstart'), e._initializers.initEmbedShepherd(), e._initializers.initMux(), e._initializers.initAsyncEmbeds(), e._initializers.initEmbedLinks(), e._initializers.initSpecificTime(), e._initializers.initDefaultTranslation(), null != (t = e.eventLoop) && t.resync(), e.trigger('ev1initend')
            }, e.destroy = function() {
                return e.trigger('ev1destroystart'), e._destructors.destroyAsyncEmbeds(), e._destructors.destroyEmbedShepherd(), e._destructors.destroyEmbedLinks(), e._destructors.destroyFullscreenTriggers(), e._destructors.destroyEventLoop(), e._destructors.destroyVisitorKey(), e._destructors.destroyWLog(), e._destructors.destroyMux(), e.trigger('ev1destroyend')
            }, e.destroyGlobals = function() {
                var e, t, n;
                for (e in window.Wistia = null, window.wistiaApi = null, window.wistiaDispatch = null, window.wistiaBindIframes = null, window.wistiaEmbeds = null, window._wistiaElemId = null, window.wistiaInitQueue = null, window.wistiaInit = null, window.wistiaEmbedShepherdReady = null, t = [], window) n = window[e], /^wistiajson/.test(e) ? t.push(window[e] = null) : t.push(void 0);
                return t
            }, e.reinitialize = function() {
                return e.destroy(), e.initializeOnce(), e.initializeEveryTime()
            }, e._initialized || (e._initialized = !0, e.initializeOnce()), e.initializeEveryTime()
        })(Wistia)
    }
});