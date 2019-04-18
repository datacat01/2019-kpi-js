;
var MonsterInsights = function() {
        var t = [],
            a = '';
        this.setLastClicked = function(e, n, i) {
            e = typeof e !== 'undefined' ? e : [];
            n = typeof n !== 'undefined' ? n : [];
            i = typeof i !== 'undefined' ? i : !1;
            t.valuesArray = e;
            t.fieldsArray = n
        };
        this.getLastClicked = function() {
            return t
        };
        this.setInternalAsOutboundCategory = function(e) {
            a = e
        };
        this.getInternalAsOutboundCategory = function() {
            return a
        };

        function s() {
            if (window.monsterinsights_debug_mode) {
                return !0
            } else {
                return !1
            }
        };

        function e(e, n) {
            e = typeof e !== 'undefined' ? e : [];
            n = typeof n !== 'undefined' ? n : {};
            __gaTracker('send', n);
            t.valuesArray = e;
            t.fieldsArray = n;
            t.tracked = !0;
            i('Tracked: ' + e.type);
            i(t)
        };

        function n(e) {
            e = typeof e !== 'undefined' ? e : [];
            t.valuesArray = e;
            t.fieldsArray = [];
            t.tracked = !1;
            i('Not Tracked: ' + e.exit);
            i(t)
        };

        function i(e) {
            if (s()) {
                console.dir(e)
            }
        };

        function r(e) {
            return e.replace(/^\s+|\s+$/gm, '')
        };

        function f() {
            var n = 0,
                e = document.domain,
                i = e.split('.'),
                t = '_gd' + (new Date()).getTime();
            while (n < (i.length - 1) && document.cookie.indexOf(t + '=' + t) == -1) {
                e = i.slice(-1 - (++n)).join('.');
                document.cookie = t + '=' + t + ';domain=' + e + ';'
            };
            document.cookie = t + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=' + e + ';';
            return e
        };

        function h(e) {
            e = e.toString();
            e = e.substring(0, (e.indexOf('#') == -1) ? e.length : e.indexOf('#'));
            e = e.substring(0, (e.indexOf('?') == -1) ? e.length : e.indexOf('?'));
            e = e.substring(e.lastIndexOf('/') + 1, e.length);
            if (e.length > 0 && e.indexOf('.') !== -1) {
                e = e.substring(e.indexOf('.') + 1);
                return e
            } else {
                return ''
            }
        };

        function u() {
            return typeof(__gaTracker) !== 'undefined' && __gaTracker && __gaTracker.hasOwnProperty('loaded') && __gaTracker.loaded == !0
        };

        function p(e) {
            return e.which == 1 || e.which == 2 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
        };

        function c() {
            var e = [];
            if (typeof monsterinsights_frontend.download_extensions == 'string') {
                e = monsterinsights_frontend.download_extensions.split(',')
            };
            return e
        };

        function d() {
            var e = [];
            if (typeof monsterinsights_frontend.inbound_paths == 'string') {
                e = JSON.parse(monsterinsights_frontend.inbound_paths)
            };
            return e
        };

        function y(e) {
            if (e.which == 1) {
                return 'event.which=1'
            } else if (e.which == 2) {
                return 'event.which=2'
            } else if (e.metaKey) {
                return 'metaKey'
            } else if (e.ctrlKey) {
                return 'ctrlKey'
            } else if (e.shiftKey) {
                return 'shiftKey'
            } else if (e.altKey) {
                return 'altKey'
            } else {
                return ''
            }
        };

        function m(e) {
            var s = c(),
                o = d(),
                t = 'unknown',
                u = e.href,
                g = h(e.href),
                v = f(),
                l = e.hostname,
                i = e.protocol,
                p = e.pathname;
            u = u.toString();
            var n, y, m = e.getAttribute('data-vars-ga-category');
            if (m) {
                return m
            };
            if (u.match(/^javascript\:/i)) {
                t = 'internal'
            } else if (i && i.length > 0 && (r(i) == 'tel' || r(i) == 'tel:')) {
                t = 'tel'
            } else if (i && i.length > 0 && (r(i) == 'mailto' || r(i) == 'mailto:')) {
                t = 'mailto'
            } else if (l && v && l.length > 0 && v.length > 0 && !l.endsWith(v)) {
                t = 'external'
            } else if (p && JSON.stringify(o) != '{}' && p.length > 0) {
                for (n in o) {
                    if (o[n].path.length > 0 && o[n].label.length > 0 && p.startsWith(o[n].path)) {
                        t = 'internal-as-outbound';
                        a = 'outbound-link-' + o[n].label;
                        break
                    }
                }
            } else if (l && window.monsterinsights_experimental_mode && l.length > 0 && document.domain.length > 0 && l !== document.domain) {
                t = 'cross-hostname'
            };
            if (g && (t === 'unknown' || 'external' === t) && s.length > 0 && g.length > 0) {
                for (n = 0, y = s.length; n < y; ++n) {
                    if (s[n].length > 0 && (u.endsWith(s[n]) || s[n] == g)) {
                        t = 'download';
                        break
                    }
                }
            };
            if (t === 'unknown') {
                t = 'internal'
            };
            return t
        };

        function b(e, t) {
            var n = (e.target && !e.target.match(/^_(self|parent|top)$/i)) ? e.target : !1;
            if (t.ctrlKey || t.shiftKey || t.metaKey || t.which == 2) {
                n = '_blank'
            };
            return n
        };

        function g(i) {
            var r = i.srcElement || i.target,
                t = [],
                l;
            t.el = r;
            t.ga_loaded = u();
            t.click_type = y(i);
            if (!u() || !p(i)) {
                t.exit = 'loaded';
                n(t);
                return
            }
            while (r && (typeof r.tagName == 'undefined' || r.tagName.toLowerCase() != 'a' || !r.href)) {
                r = r.parentNode
            };
            if (r && r.href && !r.hasAttribute('xlink:href')) {
                var g = r.href,
                    O = h(r.href),
                    K = c(),
                    E = d(),
                    D = monsterinsights_frontend.home_url,
                    I = f(),
                    o = m(r),
                    T = b(r, i),
                    v = r.getAttribute('data-vars-ga-action'),
                    w = r.getAttribute('data-vars-ga-label');
                t.el = r;
                t.el_href = r.href;
                t.el_protocol = r.protocol;
                t.el_hostname = r.hostname;
                t.el_port = r.port;
                t.el_pathname = r.pathname;
                t.el_search = r.search;
                t.el_hash = r.hash;
                t.el_host = r.host;
                t.debug_mode = s();
                t.download_extensions = K;
                t.inbound_paths = E;
                t.home_url = D;
                t.link = g;
                t.extension = O;
                t.type = o;
                t.target = T;
                t.title = r.title || r.textContent || r.innerText;
                if (o !== 'internal' && o !== 'javascript') {
                    var x = !1,
                        k = function() {
                            if (x) {
                                return
                            };
                            x = !0;
                            window.location.href = g
                        },
                        A = function() {
                            t.exit = 'external';
                            n(t)
                        },
                        C = function() {
                            t.exit = 'internal-as-outbound';
                            n(t)
                        },
                        L = function() {
                            t.exit = 'cross-hostname';
                            n(t)
                        };
                    if (T || o == 'mailto' || o == 'tel') {
                        if (o == 'download') {
                            l = {
                                hitType: 'event',
                                eventCategory: 'download',
                                eventAction: v || g,
                                eventLabel: w || t.title,
                            };
                            e(t, l)
                        } else if (o == 'tel') {
                            l = {
                                hitType: 'event',
                                eventCategory: 'tel',
                                eventAction: v || g,
                                eventLabel: w || t.title.replace('tel:', ''),
                            };
                            e(t, l)
                        } else if (o == 'mailto') {
                            l = {
                                hitType: 'event',
                                eventCategory: 'mailto',
                                eventAction: v || g,
                                eventLabel: w || t.title.replace('mailto:', ''),
                            };
                            e(t, l)
                        } else if (o == 'internal-as-outbound') {
                            l = {
                                hitType: 'event',
                                eventCategory: a,
                                eventAction: v || g,
                                eventLabel: w || t.title,
                            };
                            e(t, l)
                        } else if (o == 'external') {
                            l = {
                                hitType: 'event',
                                eventCategory: 'outbound-link',
                                eventAction: v || g,
                                eventLabel: w || t.title,
                            };
                            e(t, l)
                        } else if (o == 'cross-hostname') {
                            l = {
                                hitType: 'event',
                                eventCategory: 'cross-hostname',
                                eventAction: v || g,
                                eventLabel: w || t.title,
                            };
                            e(t, l)
                        } else {
                            if (o && o != 'internal') {
                                l = {
                                    hitType: 'event',
                                    eventCategory: o,
                                    eventAction: v || g,
                                    eventLabel: w || t.title,
                                };
                                e(t, l)
                            } else {
                                t.exit = 'type';
                                n(t)
                            }
                        }
                    } else {
                        if (o != 'cross-hostname' && o != 'external' && o != 'internal-as-outbound') {
                            if (!i.defaultPrevented) {
                                if (i.preventDefault) {
                                    i.preventDefault()
                                } else {
                                    i.returnValue = !1
                                }
                            }
                        };
                        if (o == 'download') {
                            l = {
                                hitType: 'event',
                                eventCategory: 'download',
                                eventAction: v || g,
                                eventLabel: w || t.title,
                                hitCallback: k,
                            };
                            e(t, l)
                        } else if (o == 'internal-as-outbound') {
                            window.onbeforeunload = function(n) {
                                if (!i.defaultPrevented) {
                                    if (i.preventDefault) {
                                        i.preventDefault()
                                    } else {
                                        i.returnValue = !1
                                    }
                                };
                                l = {
                                    hitType: 'event',
                                    eventCategory: a,
                                    eventAction: v || g,
                                    eventLabel: w || t.title,
                                    hitCallback: k,
                                };
                                if (navigator.sendBeacon) {
                                    l.transport = 'beacon'
                                };
                                e(t, l);
                                setTimeout(k, 1000)
                            }
                        } else if (o == 'external') {
                            window.onbeforeunload = function(n) {
                                if (!i.defaultPrevented) {
                                    if (i.preventDefault) {
                                        i.preventDefault()
                                    } else {
                                        i.returnValue = !1
                                    }
                                };
                                l = {
                                    hitType: 'event',
                                    eventCategory: 'outbound-link',
                                    eventAction: v || g,
                                    eventLabel: w || t.title,
                                    hitCallback: k,
                                };
                                if (navigator.sendBeacon) {
                                    l.transport = 'beacon'
                                };
                                e(t, l);
                                setTimeout(k, 1000)
                            }
                        } else if (o == 'cross-hostname') {
                            window.onbeforeunload = function(n) {
                                if (!i.defaultPrevented) {
                                    if (i.preventDefault) {
                                        i.preventDefault()
                                    } else {
                                        i.returnValue = !1
                                    }
                                };
                                l = {
                                    hitType: 'event',
                                    eventCategory: 'cross-hostname',
                                    eventAction: v || g,
                                    eventLabel: w || t.title,
                                    hitCallback: k,
                                };
                                if (navigator.sendBeacon) {
                                    l.transport = 'beacon'
                                };
                                e(t, l);
                                setTimeout(k, 1000)
                            }
                        } else {
                            if (o && o !== 'internal') {
                                l = {
                                    hitType: 'event',
                                    eventCategory: o,
                                    eventAction: v || g,
                                    eventLabel: w || t.title,
                                    hitCallback: k,
                                };
                                e(t, l)
                            } else {
                                t.exit = 'type';
                                n(t)
                            }
                        };
                        if (o != 'external' && o != 'cross-hostname' && o != 'internal-as-outbound') {
                            setTimeout(k, 1000)
                        } else {
                            if (o == 'external') {
                                setTimeout(A, 1100)
                            } else if (o == 'cross-hostname') {
                                setTimeout(L, 1100)
                            } else {
                                setTimeout(C, 1100)
                            }
                        }
                    }
                } else {
                    t.exit = 'internal';
                    n(t)
                }
            } else {
                t.exit = 'notlink';
                n(t)
            }
        };
        var l = window.location.hash;

        function v() {
            if (monsterinsights_frontend.hash_tracking === 'true' && l != window.location.hash) {
                l = window.location.hash;
                __gaTracker('set', 'page', location.pathname + location.search + location.hash);
                __gaTracker('send', 'pageview');
                i('Hash change to: ' + location.pathname + location.search + location.hash)
            } else {
                i('Hash change to (untracked): ' + location.pathname + location.search + location.hash)
            }
        };
        var o = window;
        if (o.addEventListener) {
            o.addEventListener('load', function() {
                document.body.addEventListener('click', g, !1)
            }, !1);
            window.addEventListener('hashchange', v, !1)
        } else {
            if (o.attachEvent) {
                o.attachEvent('onload', function() {
                    document.body.attachEvent('onclick', g)
                });
                window.attachEvent('onhashchange', v)
            }
        };
        if (typeof String.prototype.endsWith !== 'function') {
            String.prototype.endsWith = function(e) {
                return this.indexOf(e, this.length - e.length) !== -1
            }
        };
        if (typeof String.prototype.startsWith !== 'function') {
            String.prototype.startsWith = function(e) {
                return this.indexOf(e) === 0
            }
        };
        if (typeof Array.prototype.lastIndexOf !== 'function') {
            Array.prototype.lastIndexOf = function(e) {
                'use strict';
                if (this === void 0 || this === null) {
                    throw new TypeError()
                };
                var t, n, a = Object(this),
                    i = a.length >>> 0;
                if (i === 0) {
                    return -1
                };
                t = i - 1;
                if (arguments.length > 1) {
                    t = Number(arguments[1]);
                    if (t != t) {
                        t = 0
                    } else if (t != 0 && t != (1 / 0) && t != -(1 / 0)) {
                        t = (t > 0 || -1) * Math.floor(Math.abs(t))
                    }
                };
                for (n = t >= 0 ? Math.min(t, i - 1) : i - Math.abs(t); n >= 0; n--) {
                    if (n in a && a[n] === e) {
                        return n
                    }
                };
                return -1
            }
        }
    },
    MonsterInsightsObject = new MonsterInsights();