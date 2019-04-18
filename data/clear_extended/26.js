/*! adobe-globalnav - v1.0.33 - 03-27-2019, 12:36:26 AM

ADOBE CONFIDENTIAL
==================
Copyright 2018 Adobe Systems Incorporated
All Rights Reserved.

NOTICE: All information contained herein is, and remains
the property of Adobe Systems Incorporated and its suppliers,
if any. The intellectual and technical concepts contained
herein are proprietary to Adobe Systems Incorporated and its
suppliers and are protected by trade secret or copyright law.
Dissemination of this information or reproduction of this material
is strictly forbidden unless prior written permission is obtained
from Adobe Systems Incorporated.
*/

/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

! function() {
    var e, t, n, i, o, a, r, s, l, c, u, d, p, h, f, m, g, v, y, b, S, w, E, k, C, L, P, I, _, x, M, A, T, N, R, D, F;
    ! function(t, n) {
        "object" == typeof exports && exports && "string" != typeof exports.nodeName ? n(exports) : e = function(e) {
            return "function" == typeof n ? n(e) : n
        }({})
    }(this, function(e) {
        function t(e) {
            return "function" == typeof e
        }

        function n(e) {
            return m(e) ? "array" : typeof e
        }

        function i(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }

        function o(e, t) {
            return null != e && "object" == typeof e && t in e
        }

        function a(e, t) {
            return g.call(e, t)
        }

        function r(e) {
            return !a(v, e)
        }

        function s(e) {
            return String(e).replace(/[&<>"'`=\/]/g, function(e) {
                return y[e]
            })
        }

        function l(t, n) {
            function o() {
                if (v && !y)
                    for (; g.length;) delete f[g.pop()];
                else g = [];
                v = !1, y = !1
            }

            function a(e) {
                if ("string" == typeof e && (e = e.split(S, 2)), !m(e) || 2 !== e.length) throw new Error("Invalid tags: " + e);
                s = new RegExp(i(e[0]) + "\\s*"), l = new RegExp("\\s*" + i(e[1])), p = new RegExp("\\s*" + i("}" + e[1]))
            }
            if (!t) return [];
            var s, l, p, h = [],
                f = [],
                g = [],
                v = !1,
                y = !1;
            a(n || e.tags);
            for (var C, L, P, I, _, x, M = new d(t); !M.eos();) {
                if (C = M.pos, P = M.scanUntil(s))
                    for (var A = 0, T = P.length; A < T; ++A) I = P.charAt(A), r(I) ? g.push(f.length) : y = !0, f.push(["text", I, C, C + 1]), C += 1, "\n" === I && o();
                if (!M.scan(s)) break;
                if (v = !0, L = M.scan(k) || "name", M.scan(b), "=" === L ? (P = M.scanUntil(w), M.scan(w), M.scanUntil(l)) : "{" === L ? (P = M.scanUntil(p), M.scan(E), M.scanUntil(l), L = "&") : P = M.scanUntil(l), !M.scan(l)) throw new Error("Unclosed tag at " + M.pos);
                if (_ = [L, P, C, M.pos], f.push(_), "#" === L || "^" === L) h.push(_);
                else if ("/" === L) {
                    if (x = h.pop(), !x) throw new Error('Unopened section "' + P + '" at ' + C);
                    if (x[1] !== P) throw new Error('Unclosed section "' + x[1] + '" at ' + C)
                } else "name" === L || "{" === L || "&" === L ? y = !0 : "=" === L && a(P)
            }
            if (x = h.pop()) throw new Error('Unclosed section "' + x[1] + '" at ' + M.pos);
            return u(c(f))
        }

        function c(e) {
            for (var t, n, i = [], o = 0, a = e.length; o < a; ++o) t = e[o], t && ("text" === t[0] && n && "text" === n[0] ? (n[1] += t[1], n[3] = t[3]) : (i.push(t), n = t));
            return i
        }

        function u(e) {
            for (var t, n, i = [], o = i, a = [], r = 0, s = e.length; r < s; ++r) switch (t = e[r], t[0]) {
                case "#":
                case "^":
                    o.push(t), a.push(t), o = t[4] = [];
                    break;
                case "/":
                    n = a.pop(), n[5] = t[2], o = a.length > 0 ? a[a.length - 1][4] : i;
                    break;
                default:
                    o.push(t)
            }
            return i
        }

        function d(e) {
            this.string = e, this.tail = e, this.pos = 0
        }

        function p(e, t) {
            this.view = e, this.cache = {
                ".": this.view
            }, this.parent = t
        }

        function h() {
            this.cache = {}
        }
        var f = Object.prototype.toString,
            m = Array.isArray || function(e) {
                return "[object Array]" === f.call(e)
            },
            g = RegExp.prototype.test,
            v = /\S/,
            y = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            },
            b = /\s*/,
            S = /\s+/,
            w = /\s*=/,
            E = /\s*\}/,
            k = /#|\^|\/|>|\{|&|=|!/;
        d.prototype.eos = function() {
            return "" === this.tail
        }, d.prototype.scan = function(e) {
            var t = this.tail.match(e);
            if (!t || 0 !== t.index) return "";
            var n = t[0];
            return this.tail = this.tail.substring(n.length), this.pos += n.length, n
        }, d.prototype.scanUntil = function(e) {
            var t, n = this.tail.search(e);
            switch (n) {
                case -1:
                    t = this.tail, this.tail = "";
                    break;
                case 0:
                    t = "";
                    break;
                default:
                    t = this.tail.substring(0, n), this.tail = this.tail.substring(n)
            }
            return this.pos += t.length, t
        }, p.prototype.push = function(e) {
            return new p(e, this)
        }, p.prototype.lookup = function(e) {
            var n, i = this.cache;
            if (i.hasOwnProperty(e)) n = i[e];
            else {
                for (var a, r, s = this, l = !1; s;) {
                    if (e.indexOf(".") > 0)
                        for (n = s.view, a = e.split("."), r = 0; null != n && r < a.length;) r === a.length - 1 && (l = o(n, a[r])), n = n[a[r++]];
                    else n = s.view[e], l = o(s.view, e);
                    if (l) break;
                    s = s.parent
                }
                i[e] = n
            }
            return t(n) && (n = n.call(this.view)), n
        }, h.prototype.clearCache = function() {
            this.cache = {}
        }, h.prototype.parse = function(e, t) {
            var n = this.cache,
                i = n[e];
            return null == i && (i = n[e] = l(e, t)), i
        }, h.prototype.render = function(e, t, n) {
            var i = this.parse(e),
                o = t instanceof p ? t : new p(t);
            return this.renderTokens(i, o, n, e)
        }, h.prototype.renderTokens = function(e, t, n, i) {
            for (var o, a, r, s = "", l = 0, c = e.length; l < c; ++l) r = void 0, o = e[l], a = o[0], "#" === a ? r = this.renderSection(o, t, n, i) : "^" === a ? r = this.renderInverted(o, t, n, i) : ">" === a ? r = this.renderPartial(o, t, n, i) : "&" === a ? r = this.unescapedValue(o, t) : "name" === a ? r = this.escapedValue(o, t) : "text" === a && (r = this.rawValue(o)), void 0 !== r && (s += r);
            return s
        }, h.prototype.renderSection = function(e, n, i, o) {
            function a(e) {
                return r.render(e, n, i)
            }
            var r = this,
                s = "",
                l = n.lookup(e[1]);
            if (l) {
                if (m(l))
                    for (var c = 0, u = l.length; c < u; ++c) s += this.renderTokens(e[4], n.push(l[c]), i, o);
                else if ("object" == typeof l || "string" == typeof l || "number" == typeof l) s += this.renderTokens(e[4], n.push(l), i, o);
                else if (t(l)) {
                    if ("string" != typeof o) throw new Error("Cannot use higher-order sections without the original template");
                    l = l.call(n.view, o.slice(e[3], e[5]), a), null != l && (s += l)
                } else s += this.renderTokens(e[4], n, i, o);
                return s
            }
        }, h.prototype.renderInverted = function(e, t, n, i) {
            var o = t.lookup(e[1]);
            if (!o || m(o) && 0 === o.length) return this.renderTokens(e[4], t, n, i)
        }, h.prototype.renderPartial = function(e, n, i) {
            if (i) {
                var o = t(i) ? i(e[1]) : i[e[1]];
                return null != o ? this.renderTokens(this.parse(o), n, i, o) : void 0
            }
        }, h.prototype.unescapedValue = function(e, t) {
            var n = t.lookup(e[1]);
            if (null != n) return n
        }, h.prototype.escapedValue = function(t, n) {
            var i = n.lookup(t[1]);
            if (null != i) return e.escape(i)
        }, h.prototype.rawValue = function(e) {
            return e[1]
        }, e.name = "mustache.js", e.version = "2.3.0", e.tags = ["{{", "}}"];
        var C = new h;
        return e.clearCache = function() {
            return C.clearCache()
        }, e.parse = function(e, t) {
            return C.parse(e, t)
        }, e.render = function(e, t, i) {
            if ("string" != typeof e) throw new TypeError('Invalid template! Template should be a "string" but "' + n(e) + '" was given as the first argument for mustache#render(template, view, partials)');
            return C.render(e, t, i)
        }, e.to_html = function(n, i, o, a) {
            var r = e.render(n, i, o);
            return t(a) ? void a(r) : r
        }, e.escape = s, e.Scanner = d, e.Context = p, e.Writer = h, e
    }), t = '<header id="AdobePrimaryNav" class="Gnav-wrapper" role="banner"><nav class="Gnav" role="navigation"><a class="Gnav-logo" href="{{{strings.adobeIndex}}}"{{#tracking}} {{tracking.dataProperty}}="{{tracking.prefix}}{{tracking.logo}}"{{/tracking}}><svg class="Gnav-logo-image" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewbox="0 0 24 20" focusable="false"><path fill="#FF0000" d="M15.1,0H24v20L15.1,0z M8.9,0H0v20L8.9,0z M12,7.4L17.6,20h-3.8l-1.6-4H8.1L12,7.4z"/></svg><span class="Gnav-logo-text">Adobe</span></a><div class="Gnav-menu-wrapper"><button class="Gnav-hamburger" aria-expanded="false" aria-haspopup="true" aria-label="{{strings.hamburger}}" tabindex="1" role="button"><span class="Gnav-hamburger-box"><span class="Gnav-hamburger-inner"></span></span></button><div class="Gnav-menu-content"><span id="search_form_placeholder"></span><div class="Gnav-search-curtain"></div><ul class="Gnav-menu" data-gnav-scrollable="mobile">{{> globalnavContent}}</ul></div></div><div class="Gnav-actions"><span id="search_icon_placeholder"></span>{{#profile}}{{#strings.signIn}}<a href="#" class="Gnav-action-login"{{#tracking}} {{tracking.dataProperty}}="{{tracking.prefix}}{{tracking.signIn}}"{{/tracking}}>{{strings.signIn}}</a>{{/strings.signIn}}{{/profile}}<span class="Gnav-applauncher is-empty"></span></div></nav></header>', n = '{{#m}}{{#t}}<li class="Gnav-menu-item{{#hasSubmenu}} has-submenu{{/hasSubmenu}}{{#isActive}} is-active{{/isActive}}"{{#i}} id="{{i}}"{{/i}}>{{^hasSubmenu}}{{#u}}<a href="{{{u}}}"{{#e}} title="{{e}}"{{/e}} class="Gnav-menu-label" data-type="item"{{#o}} target="_blank" rel="noopener"{{/o}}>{{t}}</a>{{/u}}{{/hasSubmenu}}{{#hasSubmenu}}<a href="#"{{#e}} title="{{e}}"{{/e}} class="Gnav-menu-label" data-type="item" aria-haspopup="true" aria-expanded="false" role="button">{{t}}</a><ul class="Gnav-submenus" data-type="popup"{{#hasMultipleColumns}} role="group"{{/hasMultipleColumns}} data-gnav-scrollable="desktop">{{#c}}<li class="Gnav-submenu-wrapper">{{#h}}<h5 class="Gnav-submenu-headline">{{h}}</h5>{{/h}}<ul class="Gnav-submenu" data-type="column">{{#c}}{{#u}}{{#t}}<li class="Gnav-submenu-item"{{#i}} id="{{i}}"{{/i}}><a href="{{{u}}}"{{#e}} title="{{e}}"{{/e}} class="{{linkClass}}" data-type="columnitem"{{#o}} target="_blank" rel="noopener"{{/o}}{{#isJarvisCTA}} data-open-jarvis-chat{{/isJarvisCTA}}><span class="Gnav-submenu-title">{{t}}</span>{{#d}}{{^isButton}}<span class="Gnav-submenu-description">{{d}}</span>{{/isButton}}{{/d}}</a></li>{{/t}}{{/u}}{{/c}}</ul></li>{{/c}}</ul>{{/hasSubmenu}}</li>{{/t}}{{/m}}{{#hasMoreItems}}<li class="Gnav-menu-item has-submenu is-moreMenu{{#isMoreMenuActive}} is-active{{/isMoreMenuActive}}"><a href="#" title="{{strings.more}}" class="Gnav-menu-label" data-type="item" aria-haspopup="true" aria-expanded="false" role="button">{{strings.more}}</a><div class="Gnav-submenus" data-type="popup" role="group" data-gnav-scrollable="desktop"><ul class="Gnav-moreMenu" data-type="column">{{#moreItems}}<li class="Gnav-moreMenu-item{{#hasSubmenu}} has-submenu{{/hasSubmenu}}{{#isActive}} is-active{{/isActive}}"{{#i}} id="{{i}}"{{/i}}>{{^hasSubmenu}}{{#u}}<a href="{{{u}}}"{{#e}} title="{{e}}"{{/e}} class="Gnav-moreMenu-label" data-type="columnitem"{{#o}} target="_blank" rel="noopener"{{/o}}>{{t}}</a>{{/u}}{{/hasSubmenu}}{{#hasSubmenu}}<a href="#"{{#e}} title="{{e}}"{{/e}} class="Gnav-moreMenu-label" data-type="columnitem" aria-haspopup="true" aria-expanded="false" role="button">{{t}}</a><div class="Gnav-submenus"{{#hasMultipleColumns}} role="group"{{/hasMultipleColumns}}>{{#c}}<div class="Gnav-submenu-wrapper"><ul class="Gnav-submenu">{{#c}}{{#u}}{{#t}}<li class="Gnav-submenu-item"{{#i}} id="{{i}}"{{/i}}><a href="{{{u}}}"{{#e}} title="{{e}}"{{/e}} class="{{linkClass}}" data-type="columnitem"{{#o}} target="_blank" rel="noopener"{{/o}}{{#isJarvisCTA}} data-open-jarvis-chat{{/isJarvisCTA}}><span class="Gnav-submenu-title">{{t}}</span>{{#d}}{{^isButton}}<span class="Gnav-submenu-description">{{d}}</span>{{/isButton}}{{/d}}</a></li>{{/t}}{{/u}}{{/c}}</ul></div>{{/c}}</div>{{/hasSubmenu}}</li>{{/moreItems}}</ul></div></li>{{/hasMoreItems}}', i = function() {
            var e = {};
            return e.isObject = function(e) {
                return null !== e && "object" == typeof e
            }, e.isEmptyObject = function(e) {
                var t;
                if (this.isObject(e))
                    for (t in e)
                        if (e.hasOwnProperty(t)) return !1;
                return !0
            }, e.isFunction = function(e) {
                return "function" == typeof e
            }, e.isArray = function(e) {
                return this.isObject(e) && e.constructor === Array
            }, e.formatString = function(e, t) {
                if ("string" == typeof e && Array.isArray(t) && t.length) return e.replace(/{(\d+)}/g, function(e, n) {
                    return "undefined" != typeof t[n] ? t[n] : e
                })
            }, e.getPropertySafely = function(e, t) {
                var n, i, o;
                if (e && "object" == typeof e && !Array.isArray(e) && "string" == typeof t && Object.keys(e).length && t.length) {
                    for (t = t.split("."), i = t.length, o = e, n = 0; n < i; n++) {
                        if (!o.hasOwnProperty(t[n])) return;
                        o = o[t[n]]
                    }
                    return o
                }
            }, e.safeToLowerCase = function(e) {
                return "string" == typeof e ? e.toLowerCase() : e
            }, e.isValidHex = function(e) {
                return "string" == typeof e && /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
            }, e.removeSelectorIdentifier = function(e) {
                return "string" == typeof e ? e.replace(/^[\.#]/, "") : void 0
            }, e.mergeObjects = function(e, t) {
                var n = !this.isEmptyObject(e) && !this.isArray(e),
                    i = !this.isEmptyObject(t) && !this.isArray(t);
                return e = n ? e : {}, t = i ? t : {}, Object.keys(e).forEach(function(n) {
                    t[n] = e[n]
                }), t
            }, e
        }(), o = function(e) {
            var t = {},
                n = "adobeGlobalnav";
            return t.strings = {
                id: n,
                debug: n + "Debug",
                studentsDomain: "adobe-students"
            }, t.tracking = Object.freeze({
                prefix: "Globalnav:",
                dataProperty: "data-adobe-analytics-linkName",
                logo: "Menu:Adobe",
                search: "Menu:Search",
                signIn: "Menu:SignIn",
                signInPrompt: "Menu:SignIn:Prompt",
                avatar: "Menu:Profile"
            }), t.events = Object.freeze({
                ims_ready: n + ":ImsReady",
                profile_data_ready: n + ":ProfileDataReady",
                profile_sign_in: n + ":ProfileSignIn",
                profile_sign_out: n + ":ProfileSignOut",
                data_ready: n + ":DataReady",
                globalnav_ready: n + ":GlobalnavReady",
                privacy_consent: n + ":PrivacyConsent",
                jarvis_ready: n + ":JarvisReady"
            }), t.breakpoints = {
                mobile: 600,
                tablet: 1440,
                footer: 1080
            }, t.endpoints = {
                globalnavContent: '//www.adobe.com/services/globalnav.json',
                searchContent: '//www.adobe.com/services/searchasyoutype.json',
                privacyFilesURL: '//www.adobe.com/etc/beagle/public/globalnav/privacy-files/',
                adobeIndex: '//www.adobe.com',
                profileContent: 'https://cc-collab.adobe.io/profile',
                accountURL: '//account.adobe.com?lang={0}',
                accountProfileURL: '//account.adobe.com/profile?lang={0}'
            }, t.messages = {
                noConfig: "You need to provide a configuration for the globalnav",
                noTarget: "You need to provide a valid HTMLElement target",
                noLocale: "No locale set; default locale will be used",
                requestAuthoredContent: "Requesting authored content from {0}",
                noAuthoredContent: "Cannot render globalnav based on authored content",
                allAuthoredContent: "Authored content",
                globalnavAuthoredContent: "Globalnav authored content"
            }, t.adChoices = {
                ocid: 414,
                pid: 86,
                cdn: {
                    https: "https://info.evidon.com/c/betrad/pub",
                    http: "http://cdn.betrad.com/pub"
                },
                pixel: "//l.betrad.com/pub/p.gif",
                evidon: "//info.evidon.com"
            }, t.prompt = {
                cookie: n + "_prompt",
                dtmPaidCookie: "aam_tnt",
                dtmCCPaidSegment: "seg=9856511"
            }, t.profile = {
                defaultAvatar: "https://a3.behance.net/img/profile/no-image-138.jpg"
            }, t.applauncher = {
                enabled: !0,
                version: "latest",
                variant: "multiCloud",
                assetID: {
                    css: "applauncher-css",
                    js: "applauncher-js"
                },
                environment: 'prod',
                cdn: "//{0}.adobeccstatic.com/appl/{1}/AppLauncher.{2}",
                analyticsContext: {
                    consumer: {
                        name: n,
                        version: "latest",
                        platform: "web",
                        client_id: e.getPropertySafely(window, "adobeid.client_id")
                    },
                    event: {
                        visitor_guid: ""
                    },
                    consent: {
                        name: "Evidon",
                        version: "latest"
                    }
                },
                assetMaxWaitTime: 3e3
            }, t.jarvis = {
                source: 'client',
                version: "latest",
                assetID: {
                    css: "jarvis-css",
                    js: "jarvis-js"
                },
                locale: {
                    language: "en",
                    region: "US"
                },
                environment: 'prod',
                cdn: "https://{0}.messaging.adobe.com/{1}/AdobeMessagingClient.{2}",
                triggerAttribute: "data-open-jarvis-chat",
                assetMaxWaitTime: 3e3,
                loadFailed: n + ":JarvisLoadFailed"
            }, t.misc = {
                marketingCloudCookie: "AMCV_9E1005A551ED61CA0A490D45@AdobeOrg",
                marketingIdParam: "MCMID"
            }, t
        }(i), a = function() {
            var e = {};
            return e.primaryNavigation = {
                id: "#AdobePrimaryNav",
                spacing: ".Gnav-spacing",
                active: ".Gnav-active",
                sticky: ".Gnav-sticky",
                wrapper: ".Gnav-wrapper",
                logoText: ".Gnav-logo-text",
                navigation: ".Gnav",
                menuWrapper: ".Gnav-menu-wrapper",
                hamburger: ".Gnav-hamburger",
                hamburgerInner: ".Gnav-hamburger-inner",
                menuContent: ".Gnav-menu-content",
                menu: ".Gnav-menu",
                menuItem: ".Gnav-menu-item",
                menuLabel: ".Gnav-menu-label",
                moreMenuItem: ".Gnav-moreMenu-item",
                moreMenuLabel: ".Gnav-moreMenu-label",
                submenus: ".Gnav-submenus",
                submenuWrapper: ".Gnav-submenu-wrapper",
                submenuHeadline: ".Gnav-submenu-headline",
                submenuLink: ".Gnav-submenu-link",
                submenuDescription: ".Gnav-submenu-description",
                submenuCta: ".Gnav-submenu-cta",
                search: ".SAYT",
                searchInput: ".SAYT-input",
                searchIcons: ".SAYT-icons",
                searchClose: ".SAYT-close",
                searchResults: ".SAYT-results",
                hubblets: ".SAYT-hubblets",
                hubbletHeadline: ".SAYT-hubblet-headline",
                hubbletDescriptionLink: ".SAYT-hubblet-description-link",
                suggestionHeadline: ".SAYT-suggestion-headline",
                suggestionDescription: ".SAYT-suggestion-description",
                advancedSearchLink: ".SAYT-advancedSearch-link",
                prompt: ".Gnav-prompt",
                promptLogin: ".Gnav-prompt-login",
                actions: ".Gnav-actions",
                actionSearch: ".SAYT-action-search",
                actionClose: ".SAYT-action-close",
                actionLogin: ".Gnav-action-login",
                profile: ".Gnav-profile",
                searchCurtain: ".Gnav-search-curtain",
                applauncher: ".Gnav-applauncher",
                applauncherModifier: ".Gnav-applauncher-modifier",
                applauncherIcon: ".app-launcher-icon",
                appLauncherOverlay: ".app-launcher-overlay-container",
                applauncherSpectrumDialogue: ".spectrum-Dialog-content"
            }, e.secondaryNavigation = {
                wrapper: ".Subnav-wrapper",
                navigation: ".Subnav",
                trigger: ".Subnav-trigger",
                logo: ".Subnav-logo",
                menuWrapper: ".Subnav-menu-wrapper",
                menu: ".Subnav-menu",
                menuItem: ".Subnav-menu-item"
            }, e.footerNavigation = {
                id: "#AdobeFooterNav",
                wrapper: ".Footernav-wrapper",
                breadrcumbsPlaceholder: ".Footernav-breadcrumbs-placeholder",
                breadcrumb: ".Footernav-breadcrumb",
                breadcrumbLink: ".Footernav-breadcrumb-link",
                menuItems: ".Footernav-menu-items",
                menuItem: ".Footernav-menu-item",
                menuLabel: ".Footernav-menu-label",
                submenuLink: ".Footernav-submenu-link",
                socialWrapper: ".Footernav-social-wrapper",
                socialLink: ".Footernav-social-link",
                products: ".Footernav-products",
                productLink: ".Footernav-product-link",
                selectRegion: ".Footernav-region",
                disclaimers: ".Footernav-disclaimers",
                disclaimer: ".Footernav-disclaimer",
                disclaimerLink: ".Footernav-disclaimer-link"
            }, e.modifiers = {
                hiddenOverflow: "Gnav-hiddenOverflow",
                hasSubnav: "has-subnav",
                isRetracted: "is-retracted",
                isScrolled: "is-scrolled",
                isLarge: "is-large",
                hasSubmenu: "has-submenu",
                isMoreMenu: "is-moreMenu",
                hasCustomTheme: "has-customTheme",
                isOpen: "is-open",
                isActive: "is-active",
                hasInput: "has-input",
                isHidden: "is-hidden",
                isVisible: "is-visible",
                isEmpty: "is-empty",
                hasMobileLayout: "has-mobileLayout",
                hasGradient: "has-gradient",
                isDark: "is-dark",
                isLight: "is-light",
                fontActive: "wf-active",
                isAdChoices: "is-adChoices",
                isLoading: "is-loading",
                showCurtain: "show-searchOverlay",
                showingCurtain: "showing-searchOverlay",
                hidingCurtain: "hiding-searchOverlay"
            }, e
        }(), r = function(e, t) {
            function n() {
                this.debug = window.location.search.indexOf(e.strings.debug) > -1
            }
            var i;
            return n.prototype.message = function() {
                    var t, n = [e.strings.debug + ":"],
                        i = arguments.length;
                    for (t = 0; t < i; t++) n.push(arguments[t]);
                    return n.concat()
                }, n.prototype.log = function() {
                    this.debug && window.console && t.isFunction(window.console.log) && window.console.log.apply(null, this.message.apply(null, arguments))
                }, n.prototype.warn = function() {
                    this.debug && window.console && t.isFunction(window.console.warn) && window.console.warn.apply(null, this.message.apply(null, arguments))
                }, n.prototype.error = function() {
                    this.debug && window.console && t.isFunction(window.console.error) && window.console.error.apply(null, this.message.apply(null, arguments))
                },
                function() {
                    return i = i || new n
                }
        }(o, i), s = function(e) {
            var t = {};
            return t.get = function(t) {
                var n = new XMLHttpRequest;
                return n.open("GET", t.endpoint, !0), t.headers && !e.isEmptyObject(t.headers) && Object.keys(t.headers).forEach(function(e) {
                    n.setRequestHeader(e, t.headers[e])
                }), n.onload = function() {
                    this.status >= 200 && this.status < 400 ? t.success && e.isFunction(t.success) && t.success(this.response) : t.error && e.isFunction(t.error) && t.error(this.response)
                }, n.onerror = function() {
                    t.error && e.isFunction(t.error) && t.error(this.response)
                }, n.send(), this
            }, t
        }(i), l = function(e, t) {
            var n = {};
            return n.isSet = function(e) {
                var t, n = !1;
                return "string" == typeof e && e.length && "string" == typeof document.cookie && (n = Boolean(document.cookie.split(";").filter(function(n) {
                    if (n.length) return t = n.split("="), t = t[0], t = t.trim(), t === e
                }).length)), n
            }, n.getValue = function(e, t) {
                var n, i, o, a;
                if ("string" == typeof e && e.length && "string" == typeof document.cookie)
                    for (n = document.cookie.split("; "), i = n.length, o = i - 1; o >= 0; o--)
                        if (a = n[o], "string" == typeof a && a.length && (a = a.split("="), e === a[0])) return "boolean" == typeof t && t ? a[1] : window.decodeURIComponent(a[1])
            }, n.setValue = function(t, n, i, o) {
                var a, r, s, l = "";
                "string" == typeof t && t.length && "string" == typeof document.cookie && (l += "boolean" == typeof o && o ? t + "=" + n : window.encodeURIComponent(t) + "=" + window.encodeURIComponent(n), e.isEmptyObject(i) || (a = i.path, "string" == typeof a && a.length && (l += "; path=" + a), r = i.expiration, r instanceof Date && (l += "; expires=" + r.toUTCString()), s = i.domain, "string" == typeof s && s.length && (l += "; domain=" + s)), document.cookie = l)
            }, n
        }(i, c), c = function(e, t) {
            var n = {};
            return n.closest = function(e, t) {
                if (!e || !t) return null;
                if ("function" != typeof window.Element.prototype.closest) {
                    for (; e && 1 === e.nodeType;) {
                        if (this.matches(e, t)) return e;
                        e = e.parentNode
                    }
                    return null
                }
                return e.closest(t)
            }, n.matches = function(e, t) {
                var n, i, o;
                return e && t ? "function" != typeof window.Element.prototype.matches ? (n = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector || function(e) {
                    i = (this.document || this.ownerDocument).querySelectorAll(e), o = i.length;
                    do --o; while (o >= 0 && i.item(o) !== this);
                    return o > -1
                }, n.apply(e, [t])) : e.matches(t) : null
            }, n.forEach = function(e, t, n) {
                var i, o;
                if (e && t)
                    for (i = 0, o = e.length, i; i < o; i++) t.call(n, e[i], i, e)
            }, n.Events = function() {
                var t = {};
                this.addEventListener = function(e, n) {
                    var i = t[e] || [];
                    i.push(n), t[e] = i
                }, this.dispatchEvent = function(n, i) {
                    var o, a, r = t[n];
                    if (r)
                        for (a = 0, o = r.length; a < o; ++a) e.isFunction(r[a]) && r[a].apply(null, [i, n])
                }
            }, n.addPassiveEventListener = function(t, n, i) {
                var o, a = !1;
                if (t && "object" == typeof t && "string" == typeof n && n.length > 0 && e.isFunction(i)) {
                    try {
                        o = Object.defineProperty({}, "passive", {
                            get: function() {
                                a = !0
                            }
                        }), window.addEventListener("testPassiveEvents", null, o), window.removeEventListener("testPassiveEvents", null, o)
                    } catch (e) {}
                    t.addEventListener(n, i, !!a && {
                        passive: !0
                    })
                }
            }, n.isInteger = function(e) {
                var t;
                return t = "function" == typeof Number.isInteger ? Number.isInteger : function(e) {
                    return "number" == typeof e && window.isFinite(e) && Math.floor(e) === e
                }, t.apply(null, [e])
            }, n.isRTL = function() {
                return "rtl" === document.querySelector("html").getAttribute("dir")
            }, n.isElementVisible = function(e) {
                return !!(e && e instanceof HTMLElement && (e.offsetWidth || e.offsetHeight || e.getClientRects().length) && "hidden" !== window.getComputedStyle(e).getPropertyValue("visibility"))
            }, n.findItems = function(t, n) {
                var i, o, a;
                if (t && t.length > 0 && e.isFunction(n))
                    for (i = [], a = t.length, o = 0; o < a; o++) n(t[o]) && i.push(t[o]);
                return i
            }, n.removeItems = function(t, n) {
                t && t.length > 0 && e.isFunction(n) && t.forEach(function(e, i) {
                    n(t[i]) && t.splice(i, 1)
                })
            }, n.loadResource = function(t) {
                var n, i, o = e.getPropertySafely(t, "path"),
                    a = e.getPropertySafely(t, "type"),
                    r = e.getPropertySafely(t, "async"),
                    s = e.getPropertySafely(t, "callback"),
                    l = e.getPropertySafely(t, "error"),
                    c = e.getPropertySafely(t, "id");
                !o || "string" != typeof o || !a || ["style", "script"].indexOf(a) < 0 || ("script" === a ? (n = document.createElement("script"), n.type = "text/javascript", n.src = o, "boolean" == typeof r && (n.async = r)) : "style" === a && (n = document.createElement("link"), n.type = "text/css", n.rel = "stylesheet", n.href = o), e.isFunction(s) && (i = !1, n.onload = function() {
                    i || (i = !0, s())
                }), e.isFunction(l) && (n.onerror = function() {
                    l()
                }), "string" == typeof c && c.length > 0 && (n.id = c), document.querySelector("head").appendChild(n))
            }, n.getParamValuesFromCookie = function(n) {
                var i, o, a, r, s = {};
                if (!e.isEmptyObject(n) && "string" == typeof n.cookieName && n.cookieName.length && "string" == typeof n.paramsSeparator && n.paramsSeparator.length) {
                    if (this.isInteger(n.paramsStartIndex) || (n.paramsStartIndex = 0), i = t.getValue(n.cookieName), i && (o = i.split(n.paramsSeparator), e.isArray(o)))
                        for (a = n.paramsStartIndex, r = o.length, a; a < r; a += 2) o.hasOwnProperty(a) && o.hasOwnProperty(a + 1) && (s[o[a]] = o[a + 1]);
                    return "string" == typeof n.paramName && n.paramName.length ? s[n.paramName] : s
                }
            }, n
        }(i, l), u = function(e, t) {
            var n = {},
                i = {};
            return i.requestUpdate = function() {
                i.updating || requestAnimationFrame(i.update), i.updating = !0
            }, i.update = function() {
                i.getCurrentScrollDirection(), i.isToleranceExceeded() && ("up" === i.currentScrollDirection ? i.instantCallbacks.upScrollCallbacks.forEach(function(e) {
                    e()
                }) : i.instantCallbacks.downScrollCallbacks.forEach(function(e) {
                    e()
                }), i.previousScrollPosition = i.currentScrollPosition), i.previousScrollDirection = i.currentScrollDirection, i.updating = !1
            }, i.isPageFullyScrolled = function() {
                return i.currentScrollPosition + window.innerHeight >= document.height
            }, i.isPageNotScrolled = function() {
                return i.currentScrollPosition <= 0
            }, i.getCurrentScrollDirection = function() {
                i.isPageNotScrolled() ? i.currentScrollDirection = "up" : i.isPageFullyScrolled() ? i.currentScrollDirection = "down" : i.previousScrollDirection && i.currentScrollPosition === i.previousScrollPosition ? i.currentScrollDirection = i.previousScrollDirection : i.currentScrollDirection = i.currentScrollPosition > i.previousScrollPosition ? "down" : "up"
            }, i.isToleranceExceeded = function() {
                return i.currentScrollPosition >= i.previousScrollPosition + i.scrollTolerance || i.currentScrollPosition <= i.previousScrollPosition - i.scrollTolerance
            }, i.listen = function() {
                var e;
                t.addPassiveEventListener(window, "scroll", function() {
                    i.currentScrollPosition = window.pageYOffset, i.currentScrollPosition !== i.previousScrollPosition && (i.requestUpdate(), clearTimeout(e), e = setTimeout(function() {
                        i.getCurrentScrollDirection(), "up" === i.currentScrollDirection ? i.debounceCallbacks.upScrollCallbacks.forEach(function(e) {
                            e()
                        }) : "down" === i.currentScrollDirection && i.debounceCallbacks.downScrollCallbacks.forEach(function(e) {
                            e()
                        }), i.previousScrollPosition = i.currentScrollPosition
                    }, 50))
                })
            }, n.init = function(e) {
                i.hasInitialised || (i.currentScrollPosition = 0, i.currentScrollDirection = void 0, i.previousScrollPosition = 0, i.previousScrollDirection = void 0, i.updating = !1, i.listenerAdded = !1, i.scrollTolerance = 10, i.instantCallbacks = {}, i.instantCallbacks.downScrollCallbacks = [], i.instantCallbacks.upScrollCallbacks = [], i.debounceCallbacks = {}, i.debounceCallbacks.downScrollCallbacks = [], i.debounceCallbacks.upScrollCallbacks = [], i.hasInitialised = !0), e && (e.onInstantDownScroll && this.addDownScrollCallback(e.onInstantDownScroll), e.onInstantUpScroll && this.addUpScrollCallback(e.onInstantUpScroll), e.onDebouncedDownScroll && this.addDownScrollCallback(e.onDebouncedDownScroll, "debounce"), e.onDebouncedUpScroll && this.addUpScrollCallback(e.onDebouncedUpScroll, "debounce")), i.listenerAdded || (i.listen(), i.listenerAdded = !0)
            }, n.addDownScrollCallback = function(t, n) {
                e.isFunction(t) && ("debounce" === n ? i.debounceCallbacks.downScrollCallbacks.push(t) : i.instantCallbacks.downScrollCallbacks.push(t))
            }, n.addUpScrollCallback = function(t, n) {
                e.isFunction(t) && ("debounce" === n ? i.debounceCallbacks.upScrollCallbacks.push(t) : i.instantCallbacks.upScrollCallbacks.push(t))
            }, n
        }(i, c), d = function() {
            var e = {},
                t = ["africa", "at", "au", "be_en", "be_fr", "be_nl", "bg", "br", "ca", "ca_fr", "ch_de", "ch_fr", "ch_it", "cis_en", "cis_ru", "cn", "cy_en", "cz", "de", "dk", "eeurope", "ee", "en", "es", "fi", "fr", "gr_en", "hk_en", "hk_zh", "hr", "hu", "ie", "il_en", "il_he", "in", "it", "jp", "kr", "la", "lt", "lu_de", "lu_en", "lu_fr", "lv", "mena_ar", "mena_en", "mena_fr", "mt", "mx", "nl", "no", "nz", "pl", "pt", "ro", "rs", "ru", "se", "sea", "sg", "si", "sk", "tr", "tw", "ua", "uk"];
            return e.getLocales = function() {
                return t
            }, e.isMatch = function(e) {
                return !(!e || "string" != typeof e) && t.indexOf(e.toLowerCase()) > -1
            }, e.getDefault = function() {
                return "en"
            }, e
        }(), p = function() {
            var e = {};
            return e.isIE = function() {
                var e = window.navigator.userAgent;
                return e.indexOf("MSIE") > -1 || e.indexOf("Trident") > -1
            }, e
        }(), h = Object.freeze({
            TAB: 9,
            RETURN: 13,
            ESC: 27,
            SPACE: 32,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40
        }), f = function(e, t, n, i, o) {
            function a(e, t, i) {
                return e instanceof HTMLElement && n.isInteger(t) && i.node instanceof HTMLElement ? (this.node = e, this.position = t, this.column = i, this.popup = this.column.popup, void this.init()) : void r.warn("could not create Columnitem element; details", arguments)
            }
            var r = t();
            return a.prototype.init = function() {
                this.events = {
                    keydown: this.handleKey.bind(this),
                    click: this.handleClick.bind(this),
                    focus: this.handleFocus.bind(this),
                    blur: this.handleBlur.bind(this)
                }, this.node.addEventListener("keydown", this.events.keydown), this.node.addEventListener("click", this.events.click), this.node.addEventListener("focus", this.events.focus), this.node.addEventListener("blur", this.events.blur)
            }, a.prototype.handleKey = function(e) {
                switch (e.keyCode) {
                    case o.DOWN:
                        e.preventDefault(), this.moveDown();
                        break;
                    case o.UP:
                        e.preventDefault(), this.moveUp();
                        break;
                    case o.LEFT:
                        e.preventDefault(), n.isRTL() ? this.moveRight() : this.moveLeft();
                        break;
                    case o.RIGHT:
                        e.preventDefault(), n.isRTL() ? this.moveLeft() : this.moveRight();
                        break;
                    case o.ESC:
                        this.closePopup();
                        break;
                    case o.SPACE:
                    case o.RETURN:
                        this.handleClick(e);
                        break;
                    case o.TAB:
                        this.handleTab(e)
                }
            }, a.prototype.handleClick = function(e) {
                this.column.setIndex(this.position), this.isExpandable() ? (e.preventDefault(), this.isExpanded() ? this.collapse() : (this.closeSimilar(), this.expand())) : e.keyCode === o.SPACE && this.node.click()
            }, a.prototype.handleFocus = function(e) {
                this.column.setIndex(this.position)
            }, a.prototype.handleBlur = function(e) {
                var t, n;
                this.column.setIndex(-1), e.relatedTarget && (n = this.popup.item.menu, t = e.relatedTarget.getAttribute("data-type"), "item" !== t && "columnitem" !== t && n.closePopups())
            }, a.prototype.handleTab = function(e) {
                var t = this.popup.item,
                    n = t.menu;
                this.position === this.column.items.length - 1 && this.column.position === this.popup.items.length - 1 && t.position === n.items.length - 1 || n.getNextVisibleItem(t.position) === -1 || (e.preventDefault(), e.shiftKey ? this.moveUp() : this.moveDown())
            }, a.prototype.moveDown = function() {
                this.isExpandable() && !this.isExpanded() && (this.closeSimilar(), this.expand()), this.column.moveToNextColumnItem(this.position)
            }, a.prototype.moveUp = function() {
                return this.isExpandable() && this.isExpanded() ? void this.collapse() : void this.column.moveToPreviousColumnItem(this.position)
            }, a.prototype.moveLeft = function() {
                this.popup.moveToPreviousColumn(this.column.position, "first")
            }, a.prototype.moveRight = function() {
                this.popup.moveToNextColumn(this.column.position, "first")
            }, a.prototype.closePopup = function() {
                this.popup.collapse(), this.popup.menu.moveToItem(this.popup.item.position), this.popup.menu.popupFlag = !1
            }, a.prototype.isExpandable = function() {
                return "true" === this.node.getAttribute("aria-haspopup")
            }, a.prototype.isExpanded = function() {
                return "true" === this.node.getAttribute("aria-expanded")
            }, a.prototype.expand = function() {
                var t;
                this.isExpandable() && (t = n.closest(this.node, this.popup.menu.config.moreMenuClass), t instanceof HTMLElement && (t.classList.add(e.modifiers.isOpen), this.node.setAttribute("aria-expanded", !0)))
            }, a.prototype.collapse = function() {
                var t;
                this.isExpandable() && (t = n.closest(this.node, i.formatString("{0}.{1}", [this.popup.menu.config.moreMenuClass, e.modifiers.isOpen])), t instanceof HTMLElement && (t.classList.remove(e.modifiers.isOpen), this.node.setAttribute("aria-expanded", !1)))
            }, a.prototype.closeSimilar = function() {
                n.forEach(this.column.items, function(e) {
                    this.position !== e.position && e.isExpandable() && e.isExpanded() && e.collapse()
                }.bind(this))
            }, a.prototype.reset = function() {
                this.node.removeEventListener("keydown", this.events.keydown, !1), this.node.removeEventListener("click", this.events.click, !1), this.node.removeEventListener("focus", this.events.focus, !1), this.node.removeEventListener("blur", this.events.blur, !1), this.events = void 0, this.node = void 0, this.position = void 0, this.column = void 0, this.popup = void 0
            }, a
        }(a, r, c, i, h), m = function(e, t, n) {
            function i(e, n, i) {
                return e instanceof HTMLElement && t.isInteger(n) && i.node instanceof HTMLElement ? (this.node = e, this.position = n, this.popup = i, void this.init()) : void o.warn("could not create Column element; details", arguments)
            }
            var o = e();
            return i.prototype.init = function() {
                var e = this.node.querySelectorAll('[data-type="columnitem"]');
                return e && e.length ? (this.items = [], this.index = -1, void t.forEach(e, function(e, t) {
                    this.items.push(new n(e, t, this))
                }.bind(this))) : void o.warn("could not find any columnitems for column:", this)
            }, i.prototype.moveToPreviousColumnItem = function(e) {
                var t, n, i, a = e - 1;
                if (!this.hasItems()) return void o.warn("column is empty; cannot move");
                if (a < 0) return this.popup.moveToPreviousColumn(this.position, "last"), void(this.index = -1);
                if (t = this.items[e], t.isExpandable()) {
                    for (i = e; i > 0;)
                        if (i--, this.items[i].isExpandable()) {
                            n = this.items[i];
                            break
                        } n.isExpanded() || n.expand()
                }
                this.items[a].node.focus(), this.index = a
            }, i.prototype.moveToNextColumnItem = function(e) {
                var t = e + 1;
                return this.hasItems() ? t >= this.items.length ? (this.popup.moveToNextColumn(this.position, "first", !0), void(this.index = -1)) : (this.items[t].node.focus(), void(this.index = t)) : void o.warn("column is empty; cannot move")
            }, i.prototype.moveToColumnItem = function(e) {
                return this.hasItems() ? void(e < 0 || e >= this.items.length || (this.items[e].node.focus(), this.index = e)) : void o.warn("column is empty; cannot move")
            }, i.prototype.hasItems = function() {
                return this.items && this.items.length
            }, i.prototype.setIndex = function(e) {
                t.isInteger(e) && (this.index = e)
            }, i.prototype.reset = function() {
                t.forEach(this.items, function(e) {
                    e.reset()
                }), this.items = void 0, this.index = -1, this.node = void 0, this.position = void 0, this.popup = void 0
            }, i
        }(r, c, f), g = function(e, t, n) {
            function i(e) {
                return e.getBoundingClientRect()
            }
            var o = {};
            return o.adjust = function(i) {
                var o, a, r, s, l, c;
                i && i instanceof HTMLElement && (o = document.documentElement.clientWidth, o >= e.breakpoints.mobile && (!i.hasNewPosition || i.hasNewPosition && i.cachedWindowWidth && i.cachedWindowWidth !== o) && (i.cachedWindowWidth = o, a = i.querySelector("[data-type=popup]"), r = a.offsetWidth, r < o ? (s = this.getLeftWindowOffset(i), n.isRTL() && (s = o - s - i.offsetWidth), s + r > o ? (i.hasNewPosition = !0, l = o - s - r, c = t.formatString("{0}px", [l]), n.isRTL() ? a.style.right = c : a.style.left = c) : this.reset(i)) : this.reset(i)))
            }, o.reset = function(e) {
                var t;
                delete e.hasNewPosition,
                    delete e.cachedWindowWidth, t = e.querySelector("[data-type=popup]"), n.isRTL() ? t.style.right = "" : t.style.left = ""
            }, o.getLeftWindowOffset = function(e) {
                return Math.round(i(e).left)
            }, o.getTopWindowOffset = function(e) {
                return Math.round(i(e).top)
            }, o
        }(o, i, c), v = function(e, t, n, i, o, a) {
            function r(e, t) {
                return e instanceof HTMLElement && t.node instanceof HTMLElement ? (this.node = e, this.item = t, this.menu = this.item.menu, void this.init()) : void s.warn("could not create Popup element; details", arguments)
            }
            var s = t();
            return r.prototype.init = function() {
                var e = this.node.querySelectorAll('[data-type="column"]');
                return e && e.length ? (this.items = [], this.index = -1, void n.forEach(e, function(e, t) {
                    this.items.push(new o(e, t, this))
                }.bind(this))) : void s.warn("could not find any columns for popup:", this)
            }, r.prototype.moveToPreviousColumn = function(e, t) {
                var n, i = e - 1;
                return this.hasItems() ? i < 0 ? (this.menu.moveToItem(this.item.position), void(this.index = -1)) : (n = this.items[i], this.index = i, void(t && ("first" === t ? n.moveToColumnItem(0) : "last" === t && n.moveToColumnItem(n.items.length - 1)))) : void s.warn("popup is empty; cannot move")
            }, r.prototype.moveToNextColumn = function(e, t, n) {
                var i, o = e + 1;
                return this.hasItems() ? o >= this.items.length ? (n ? this.menu.moveToNextItem(this.item.position) : this.menu.moveToItem(this.item.position), void(this.index = -1)) : (i = this.items[o], this.index = o, void(t && ("first" === t ? i.moveToColumnItem(0) : "last" === t && i.moveToColumnItem(i.items.length - 1)))) : void s.warn("popup is empty; cannot move")
            }, r.prototype.moveToFirstColumnItem = function() {
                var e;
                this.hasItems() && (e = this.items[0], e.moveToColumnItem(0), this.index = 0)
            }, r.prototype.moveToLastColumnItem = function() {
                var e;
                this.hasItems() && (e = this.items[this.items.length - 1], e.moveToColumnItem(e.items.length - 1), this.index = this.items.length - 1)
            }, r.prototype.hasItems = function() {
                return this.items && this.items.length
            }, r.prototype.isExpanded = function() {
                return "true" === this.item.node.getAttribute("aria-expanded")
            }, r.prototype.expand = function() {
                var t = n.closest(this.item.node, this.menu.config.popupClass);
                t instanceof HTMLElement && (this.closeSimilar("item"), this.closeSimilar("columnitem"), t.classList.add(e.modifiers.isOpen), this.item.node.setAttribute("aria-expanded", !0), a.adjust(t))
            }, r.prototype.collapse = function() {
                var e = n.closest(this.item.node, this.menu.config.popupClass);
                e instanceof HTMLElement && (this.closeSimilar("item"), this.closeSimilar("columnitem"))
            }, r.prototype.closeSimilar = function(t) {
                var o, a, r, s;
                "item" === t ? (o = i.formatString("{0}.{1}", [this.menu.config.popupClass, e.modifiers.isOpen]), a = document.querySelectorAll(o), s = '[data-type="item"]') : "columnitem" === t && (o = i.formatString("{0}.{1}", [this.menu.config.moreMenuClass, e.modifiers.isOpen]), a = document.querySelectorAll(o), s = '[data-type="columnitem"]'), a && a.length && n.forEach(a, function(t) {
                    t instanceof HTMLElement && (t.classList.remove(e.modifiers.isOpen), r = t.querySelector(s), r instanceof HTMLElement && "true" === r.getAttribute("aria-haspopup") && r.setAttribute("aria-expanded", !1))
                })
            }, r.prototype.reset = function() {
                n.forEach(this.items, function(e) {
                    e.reset()
                }), this.items = void 0, this.index = -1, this.node = void 0, this.item = void 0, this.menu = void 0
            }, r
        }(a, r, c, i, m, g), y = function(e, t, n, i) {
            function o(e, n, i) {
                return e instanceof HTMLElement && t.isInteger(n) && i.node instanceof HTMLElement ? (this.node = e, this.position = n, this.menu = i, void this.init()) : void a.warn("could not create Item element; details", arguments)
            }
            var a = e();
            return o.prototype.init = function() {
                var e = t.matches(this.node.nextElementSibling, '[data-type="popup"]') ? this.node.nextElementSibling : null;
                e && (this.popup = new i(e, this)), this.events = {
                    keydown: this.handleKey.bind(this),
                    click: this.handleClick.bind(this),
                    focus: this.handleFocus.bind(this),
                    blur: this.handleBlur.bind(this)
                }, this.node.addEventListener("keydown", this.events.keydown), this.node.addEventListener("click", this.events.click), this.node.addEventListener("focus", this.events.focus), this.node.addEventListener("blur", this.events.blur)
            }, o.prototype.handleKey = function(e) {
                switch (e.keyCode) {
                    case n.DOWN:
                        e.preventDefault(), this.moveDown();
                        break;
                    case n.UP:
                        e.preventDefault(), this.moveUp();
                        break;
                    case n.LEFT:
                        e.preventDefault(), t.isRTL() ? this.moveRight() : this.moveLeft();
                        break;
                    case n.RIGHT:
                        e.preventDefault(), t.isRTL() ? this.moveLeft() : this.moveRight();
                        break;
                    case n.ESC:
                        this.closePopup();
                        break;
                    case n.SPACE:
                    case n.RETURN:
                        this.handleClick(e);
                        break;
                    case n.TAB:
                        this.handleTab(e)
                }
            }, o.prototype.handleClick = function(e) {
                this.menu.setIndex(this.position), this.hasPopup() ? (e.preventDefault(), this.popup.isExpanded() ? (this.popup.collapse(), this.menu.popupFlag = !1) : (this.popup.expand(), this.menu.popupFlag = !0)) : e.keyCode === n.SPACE && this.node.click()
            }, o.prototype.handleFocus = function(e) {
                this.menu.setIndex(this.position)
            }, o.prototype.handleBlur = function(e) {
                var t;
                this.hasPopup() && this.popup.isExpanded() ? this.menu.setIndex(this.position) : this.menu.setIndex(-1), e.relatedTarget && (t = e.relatedTarget.getAttribute("data-type"), "item" !== t && "columnitem" !== t && this.menu.closePopups())
            }, o.prototype.handleTab = function(e) {
                if (e.shiftKey) {
                    if (0 === this.position || this.menu.getPreviousVisibleItem(this.position) === -1) return;
                    e.preventDefault(), this.menu.popupFlag ? this.moveUp() : this.moveLeft()
                } else {
                    if (this.position === this.menu.items.length - 1 || this.menu.getNextVisibleItem(this.position) === -1) return;
                    e.preventDefault(), this.menu.popupFlag ? this.moveDown() : this.moveRight()
                }
            }, o.prototype.moveDown = function() {
                this.hasPopup() ? (this.popup.isExpanded() || (this.popup.expand(), this.menu.popupFlag = !0), this.popup.moveToFirstColumnItem()) : this.moveRight()
            }, o.prototype.moveUp = function() {
                this.hasPopup() && this.popup.isExpanded() ? (this.popup.collapse(), this.menu.moveToPreviousItem(this.position, !0, "last")) : this.moveLeft()
            }, o.prototype.moveLeft = function() {
                this.menu.moveToPreviousItem(this.position)
            }, o.prototype.moveRight = function() {
                this.menu.moveToNextItem(this.position)
            }, o.prototype.closePopup = function() {
                this.hasPopup() && this.popup.isExpanded() && (this.popup.collapse(), this.menu.popupFlag = !1)
            }, o.prototype.hasPopup = function() {
                return !!this.popup
            }, o.prototype.reset = function() {
                this.node.removeEventListener("keydown", this.events.keydown, !1), this.node.removeEventListener("click", this.events.click, !1), this.node.removeEventListener("focus", this.events.focus, !1), this.node.removeEventListener("blur", this.events.blur, !1), this.events = void 0, this.hasPopup() && (this.popup.reset(), this.popup = void 0), this.menu = void 0, this.position = void 0, this.node = void 0
            }, o
        }(r, c, h, v), b = function(e, t, n, i, o) {
            function a(t, n) {
                return t instanceof HTMLElement ? (this.node = t, this.config = {
                    popupClass: n && n.popupClass || i.formatString("{0}.{1}", [e.primaryNavigation.menuItem, e.modifiers.hasSubmenu]),
                    moreMenuClass: n && n.moreMenuClass || i.formatString("{0}.{1}", [e.primaryNavigation.moreMenuItem, e.modifiers.hasSubmenu])
                }, this.hasDocumentClickBinded = !1, this.popupFlag = !1, void this.init()) : void r.warn("could not create Menu element; details", arguments)
            }
            var r = t();
            return a.prototype.init = function() {
                var e = this.node.querySelectorAll('[data-type="item"]');
                e && e.length || r.warn("could not find any items for menu:", this), this.items = [], this.index = -1, n.forEach(e, function(e, t) {
                    this.items.push(new o(e, t, this))
                }.bind(this)), this.hasDocumentClickBinded || (document.addEventListener("click", this.closePopupsClickOutside.bind(this)), this.hasDocumentClickBinded = !0)
            }, a.prototype.closePopupsClickOutside = function(e) {
                var t;
                t = i.formatString(".{0}", [this.node.className.replace(/\s+/g, ".")]), n.closest(e.target, t) || this.closePopups()
            }, a.prototype.closePopups = function() {
                n.forEach(this.items, function(e) {
                    e.closePopup()
                })
            }, a.prototype.moveToPreviousItem = function(e, t, n) {
                var i, o, a = this.getPreviousVisibleItem(e);
                return this.hasItems() ? void(a < 0 || a === -1 || (i = this.items[e], i.hasPopup() ? i.popup.isExpanded() && i.popup.collapse() : this.popupFlag = !1, t = void 0 === t ? this.popupFlag : t, o = this.items[a], o.node.focus(), t && o.hasPopup() && (o.popup.expand(), n && ("first" === n ? o.popup.moveToFirstColumnItem() : "last" === n && o.popup.moveToLastColumnItem())), this.index = a)) : void r.warn("menu is empty; cannot move")
            }, a.prototype.moveToNextItem = function(e, t, n) {
                var i, o, a = this.getNextVisibleItem(e);
                return this.hasItems() ? void(a >= this.items.length || a === -1 || (i = this.items[e], i.hasPopup() ? i.popup.isExpanded() && i.popup.collapse() : this.popupFlag = !1, t = void 0 === t ? this.popupFlag : t, o = this.items[a], o.node.focus(), t && o.hasPopup() && (o.popup.expand(), n && ("first" === n ? o.popup.moveToFirstColumnItem() : "last" === n && o.popup.moveToLastColumnItem())), this.index = a)) : void r.warn("menu is empty; cannot move")
            }, a.prototype.moveToItem = function(e) {
                return this.hasItems() ? void(e < 0 || e >= this.items.length || (this.items[e].node.focus(), this.index = e)) : void r.warn("menu is empty; cannot move")
            }, a.prototype.hasItems = function() {
                return this.items && this.items.length
            }, a.prototype.setIndex = function(e) {
                n.isInteger(e) && (this.index = e)
            }, a.prototype.blurActiveItem = function() {
                this.index >= 0 && this.items[this.index].node.blur()
            }, a.prototype.getNextVisibleItem = function(e) {
                do
                    if (e++, e >= this.items.length) return -1; while (!n.isElementVisible(this.items[e].node));
                return e
            }, a.prototype.getPreviousVisibleItem = function(e) {
                do
                    if (e--, e < 0) return -1; while (!n.isElementVisible(this.items[e].node));
                return e
            }, a.prototype.destroy = function() {
                n.forEach(this.items, function(e) {
                    e.reset()
                }), this.popupFlag = !1, this.items = void 0, this.index = -1
            }, a.prototype.reset = function() {
                this.destroy(), this.init()
            }, a
        }(a, r, c, i, y), S = function(e, t, n, i) {
            function o(e) {
                var n, o, a;
                n = document.querySelector("html"), n.classList.contains(t.modifiers.fontActive) ? i.isFunction(e) && !b && (b = !0, e()) : (a = new MutationObserver(function(n) {
                    n.forEach(function(n) {
                        n.target.classList.contains(t.modifiers.fontActive) && (i.isFunction(e) && !b && (b = !0, e()), a.disconnect())
                    })
                }), o = {
                    attributes: !0,
                    childList: !1,
                    characterData: !1,
                    attributeFilter: ["class"]
                }, a.observe(n, o))
            }

            function a(e) {
                var o, a, r, s, l, c = [];
                if (!S && e && !i.isEmptyObject(e) && (o = document.querySelector(t.primaryNavigation.menu), l = e.m.length, n.isElementVisible(o))) {
                    for (a = o.querySelectorAll(t.primaryNavigation.menuItem), r = a.length, s = 0; s < r; s++) n.isElementVisible(a[s]) && c.push(a[s]);
                    if (c.length === l) {
                        for (s = 0; s < l; s++) e.m[s].position = s, e.m[s].width = c[s].offsetWidth;
                        S = !0
                    }
                }
            }

            function r(e, t, n) {
                var i;
                e instanceof Array && t instanceof Array && e.length > 0 && (i = e.indexOf(n), e.splice(i, 1), t.push(n))
            }

            function s(e) {
                r(m.m, m.moreItems, e)
            }

            function l(e) {
                r(m.moreItems, m.m, e)
            }

            function c() {
                var e = document.querySelector(i.formatString(".{0}", [t.modifiers.isMoreMenu]));
                return e ? e.offsetWidth : 0
            }

            function u() {
                return m.moreItems && 1 === m.moreItems.length ? 0 : c()
            }

            function d() {
                m.hasMoreItems = !!(m.moreItems && m.moreItems.length > 0), m.isMoreMenuActive = !1, S && (m.m.sort(function(e, t) {
                    return e.position > t.position ? 1 : -1
                }), m.moreItems.sort(function(e, t) {
                    return e.position > t.position ? 1 : -1
                })), m.moreItems.forEach(function(e) {
                    if (e.isActive) return void(m.isMoreMenuActive = !0)
                }), g(m)
            }

            function p() {
                var e, t, n;
                if (m.moreItems && m.moreItems.length > 0) {
                    for (y = [], t = m.moreItems.length, e = 0; e < t; e++) n = m.moreItems[0], l(n);
                    d()
                }
            }

            function h() {
                var i, o, a, r = document.querySelector(t.primaryNavigation.navigation),
                    h = r.scrollWidth,
                    f = 0,
                    g = document.documentElement.clientWidth,
                    v = !1;
                if (g >= e.breakpoints.mobile)
                    if (h > g) {
                        for (o = n.findItems(m.m, function(e) {
                                return void 0 !== e.l
                            }), a = n.findItems(m.m, function(e) {
                                return void 0 === e.l
                            }); h - f > g && m.m.length > 1;) o.length > 0 ? (i = o[o.length - 1], o.pop()) : (i = a[a.length - 1], a.pop()), y.push(h - f - c()), s(i), f += i.width;
                        d(), r.scrollWidth > g && m.m.length > 1 && (o.length > 0 ? (i = o[o.length - 1], o.pop()) : (i = a[a.length - 1], a.pop()), s(i), y.push(r.scrollWidth - c()), d())
                    } else {
                        for (o = n.findItems(m.moreItems, function(e) {
                                return void 0 !== e.l
                            }), a = n.findItems(m.moreItems, function(e) {
                                return void 0 === e.l
                            }); y && y.length > 0 && h >= y[y.length - 1] + u();) i = a.length > 0 ? a.shift() : o.shift(), l(i), y.pop(), v = !0;
                        v && d()
                    }
                else m.hasMoreItems && p()
            }

            function f(e) {
                i.isEmptyObject(e) || (m = {
                    m: e.menu,
                    moreItems: [],
                    hasMoreItems: !1
                })
            }
            var m, g, v = {},
                y = [],
                b = !1,
                S = !1;
            return v.init = function(e, t) {
                var n;
                f(e), g = t, o(function() {
                    this.reflow()
                }.bind(this)), window.addEventListener("resize", function() {
                    clearTimeout(n), n = setTimeout(function() {
                        this.reflow()
                    }.bind(this), 200)
                }.bind(this))
            }, v.updateData = function(e) {
                !i.isEmptyObject(e) && !i.isEmptyObject(e.m) && i.isArray(e.m) && i.isArray(e.moreItems) && "boolean" == typeof e.hasMoreItems && (m = e)
            }, v.getNavData = function() {
                return m
            }, v.updateNav = d, v.reflow = function() {
                i.isEmptyObject(m) || (a(m), h())
            }, v
        }(o, a, c, i), w = function(e, t, n) {
            function i() {
                this.createStyleSheet()
            }
            var o;
            return i.prototype.createStyleSheet = function() {
                    var e = document.createElement("style");
                    e.id = n.strings.id, e.type = "text/css", document.querySelector("head").appendChild(e), this.sheet = e.sheet
                }, i.prototype.insertRule = function(n) {
                    var i = "";
                    n && n.selector && n.rules && !t.isEmptyObject(n.rules) && (Array.isArray(n.selector) && (n.selector = n.selector.join(",")), Object.keys(n.rules).forEach(function(e) {
                        i += e + ":" + n.rules[e] + ";"
                    }), i = t.formatString("{0}{{1}}", [n.selector, i]), "string" == typeof n.media && n.media.length && (i = t.formatString("@media {0}{{1}}", [n.media, i])), this.sheet.insertRule(i, e.isInteger(n.index) ? n.index : this.sheet.cssRules.length))
                }, i.prototype.deleteRule = function(t) {
                    e.isInteger(t) && t >= 0 && t < this.sheet.cssRules.length && this.sheet.removeRule(t)
                },
                function() {
                    return o = o || new i
                }
        }(c, i, o), E = function(e, t, n, i, o, a, r, s) {
            var l = {},
                c = {},
                u = !1,
                d = a(),
                p = {
                    themes: {
                        dark: t.modifiers.isDark,
                        light: t.modifiers.isLight
                    }
                };
            return l.setElements = function() {
                l.elements = {
                    subnavTriggerElement: document.querySelector(t.secondaryNavigation.trigger),
                    subnavWrapperElement: document.querySelector(t.secondaryNavigation.wrapper),
                    subnavElement: document.querySelector(t.secondaryNavigation.navigation),
                    navigationWrapperElement: document.querySelector(t.primaryNavigation.active),
                    subnavLogoElement: document.querySelector(t.secondaryNavigation.logo)
                }
            }, l.checkElementsExist = function(e) {
                var t;
                for (t in e)
                    if (e.hasOwnProperty(t) && !(e[t] instanceof HTMLElement)) return !1;
                return !0
            }, l.adjustHorizontally = function() {
                var n = l.elements.subnavElement.scrollWidth,
                    i = window.innerWidth;
                i >= e.breakpoints.mobile ? (l.breakpoint = l.breakpoint ? l.breakpoint : n, l.breakpoint >= i ? (l.elements.subnavElement.parentNode.classList.add(t.modifiers.hasMobileLayout), l.elements.subnavLogoElement.setAttribute("tabindex", "-1")) : (l.elements.subnavElement.parentNode.classList.remove(t.modifiers.hasMobileLayout), l.elements.subnavLogoElement.removeAttribute("tabindex"))) : (l.elements.subnavElement.parentNode.classList.remove(t.modifiers.hasMobileLayout), l.elements.subnavLogoElement.setAttribute("tabindex", "-1"))
            }, l.initKeyboardNavigation = function() {
                var e = document.querySelector(t.secondaryNavigation.menu);
                l.checkElementsExist([e]) && (l.keyboard = new r(e, {
                    popupClass: i.formatString("{0}.{1}", [t.secondaryNavigation.menuItem, t.modifiers.hasSubmenu])
                }))
            }, l.addEventListeners = function() {
                var e;
                u || (l.elements.subnavTriggerElement.addEventListener("click", function(e) {
                    n.closest(e.target, t.secondaryNavigation.menuWrapper) || (l.elements.subnavElement.classList.toggle(t.modifiers.isOpen), this.setAttribute("aria-expanded", "true" !== this.getAttribute("aria-expanded")), l.elements.subnavElement.classList.contains(t.modifiers.isOpen) && (l.subnavFocusableElements = l.elements.subnavElement.querySelectorAll('a, button, input:not([disabled]), [tabindex]:not([tabindex="-1"])'), l.subnavFocusableElements = n.findItems(l.subnavFocusableElements, function(e) {
                        return n.isElementVisible(e)
                    }), l.subnavFocusableElements && l.subnavFocusableElements.length > 0 && (l.firstSubnavFocusableElement = l.subnavFocusableElements[0], l.lastSubnavFocusableElement = l.subnavFocusableElements[l.subnavFocusableElements.length - 1], l.firstSubnavFocusableElement.addEventListener("keydown", l.closeDropdownOnBlur), l.lastSubnavFocusableElement.addEventListener("keydown", l.closeDropdownOnBlur))))
                }), document.addEventListener("click", function(e) {
                    n.closest(e.target, t.secondaryNavigation.navigation) || l.closeDropdown()
                }), window.addEventListener("resize", function() {
                    clearTimeout(e), e = setTimeout(function() {
                        l.adjustHorizontally()
                    }, 200)
                }), o.init({
                    onInstantDownScroll: function() {
                        l.keyboard instanceof r && l.disableSticky && (l.keyboard.closePopups(), l.keyboard.blurActiveItem())
                    }
                }), u = !0)
            }, l.closeDropdownOnBlur = function(e) {
                e.keyCode === s.TAB && (e.target === l.lastSubnavFocusableElement || e.shiftKey && e.target === l.firstSubnavFocusableElement) && l.closeDropdown()
            }, l.closeDropdown = function() {
                l.elements.subnavElement.classList.contains(t.modifiers.isOpen) && (l.elements.subnavElement.classList.remove(t.modifiers.isOpen), l.elements.subnavTriggerElement.setAttribute("aria-expanded", !1), l.firstSubnavFocusableElement instanceof HTMLElement && l.firstSubnavFocusableElement.removeEventListener("keydown", l.closeDropdownOnBlur), l.lastSubnavFocusableElement instanceof HTMLElement && l.lastSubnavFocusableElement.removeEventListener("keydown", l.closeDropdownOnBlur))
            }, l.setCustomTheme = function(e) {
                var n, o, a, r;
                l.checkElementsExist([l.elements.subnavWrapperElement]) && e && !i.isEmptyObject(e) && (e.base && p.themes[e.base] && l.elements.subnavWrapperElement.classList.add(p.themes[e.base]), e.gradient && (n = i.getPropertySafely(e, "gradient.fromColor"), o = i.getPropertySafely(e, "gradient.toColor"), a = parseFloat(i.getPropertySafely(e, "gradient.opacity")), i.isValidHex(n) && i.isValidHex(o) && (l.elements.subnavWrapperElement.classList.add(t.modifiers.hasGradient), r = {
                    "background-image": i.formatString("linear-gradient(90deg,{0},{1})", [n, o])
                }, isNaN(a) || (r.opacity = a), d.insertRule({
                    selector: i.formatString("{0}.{1}::before", [t.secondaryNavigation.wrapper, t.modifiers.hasGradient]),
                    rules: r
                }))))
            }, l.initInteractions = function() {
                l.setElements(), l.checkElementsExist(l.elements) && (l.initKeyboardNavigation(), l.addEventListeners(), l.adjustHorizontally())
            }, c.reset = function() {
                l.breakpoint = void 0, l.keyboard instanceof r && l.keyboard.destroy(), l.initInteractions()
            }, c.init = function(e, t) {
                l.disableSticky = t, l.initInteractions(), l.setCustomTheme(e)
            }, c
        }(o, a, c, i, u, w, b, h),
        function(e, t, n, i, o, a) {
            var r, s, l, c, u, d, p, h, f, m;
            r = function() {
                var e = {},
                    t = "adobeSearch";
                return e.strings = {
                    id: t,
                    debug: t + "Debug"
                }, e.events = {
                    searchStart: t + ":SearchStart",
                    searchEnd: t + ":SearchEnd",
                    searchEscape: t + ":SearchEscape",
                    suggestionsOpen: t + ":SuggestionsOpen",
                    suggestionsClose: t + ":SuggestionsClose"
                }, e.tracking = Object.freeze({
                    prefix: "AdobeSearch:",
                    dataProperty: "data-adobe-analytics-linkName",
                    search: "Menu:Search"
                }), e.endpoints = {
                    authoredContent: '//(none)/services/globalnav.json',
                    adobeIndex: '//(none)',
                    searchContent: '//(none)/services/searchasyoutype.json'
                }, e
            }(), s = function() {
                var e = {};
                return e.primaryNavigation = {
                    search: ".SAYT",
                    searchAnnouncements: ".SAYT-announcements",
                    searchInput: ".SAYT-input",
                    searchClose: ".SAYT-close",
                    searchResults: ".SAYT-results",
                    actionSearch: ".SAYT-action-search",
                    searchIcons: ".SAYT-icons",
                    searchForm: ".SAYT-form",
                    searchHubblets: ".SAYT-hubblets",
                    searchHubbletDesc: ".SAYT-hubblet-description"
                }, e.themes = {
                    dark: "dark",
                    darkSelector: "is-dark"
                }, e.modifiers = {
                    isOpen: "is-open",
                    hasInput: "has-input",
                    isHidden: "is-hidden",
                    isVisible: "is-visible",
                    hasCustomBreakpoint: "has-custom-breakpoint"
                }, e
            }(), l = function(e, t, n) {
                function i() {
                    this.createStyleSheet()
                }
                var o;
                return i.prototype.createStyleSheet = function() {
                        var e = document.createElement("style");
                        e.id = n.strings.id, e.type = "text/css", document.querySelector("head").appendChild(e), this.sheet = e.sheet
                    }, i.prototype.insertRule = function(n) {
                        var i = "";
                        n && n.selector && n.rules && !t.isEmptyObject(n.rules) && (Array.isArray(n.selector) && (n.selector = n.selector.join(",")), Object.keys(n.rules).forEach(function(e) {
                            i += e + ":" + n.rules[e] + ";"
                        }), i = t.formatString("{0}{{1}}", [n.selector, i]), "string" == typeof n.media && n.media.length && (i = t.formatString("@media {0}{{1}}", [n.media, i])), this.sheet.insertRule(i, e.isInteger(n.index) ? n.index : this.sheet.cssRules.length))
                    }, i.prototype.deleteRule = function(t) {
                        e.isInteger(t) && t >= 0 && t < this.sheet.cssRules.length && this.sheet.removeRule(t)
                    },
                    function() {
                        return o = o || new i
                    }
            }(i, t, r), c = function(e, t, n, i) {
                var o = {},
                    a = i();
                return o.apply = function(i) {
                    var o, r, s = t.formatString("{0}", [e.primaryNavigation.search]);
                    i && !t.isEmptyObject(i) && n.isInteger(i.breakpoint) && (o = t.formatString("screen and (min-width: {0}px)", [i.breakpoint]), document.querySelector(e.primaryNavigation.search).classList.add(e.modifiers.hasCustomBreakpoint), document.querySelector(e.primaryNavigation.actionSearch).classList.add(e.modifiers.hasCustomBreakpoint), r = [], r.push(t.formatString("{0}", [s])), a.insertRule({
                        media: o,
                        selector: r,
                        rules: {
                            position: "absolute",
                            top: "0",
                            left: "50%",
                            width: "100%",
                            height: "100%",
                            "min-width": "280px",
                            "max-width": "750px",
                            display: "none",
                            "flex-direction": "row",
                            "align-items": "center",
                            transform: "translateX(-50%)",
                            "z-index": "11",
                            "background-color": "#f4f4f4"
                        }
                    }), r = [], r.push(t.formatString("{0}.{1}", [s, e.modifiers.isOpen])), a.insertRule({
                        media: o,
                        selector: r,
                        rules: {
                            display: "flex"
                        }
                    }), r = [], r.push(t.formatString("{0} {1}", [s, e.primaryNavigation.searchForm])), a.insertRule({
                        media: o,
                        selector: r,
                        rules: {
                            height: "auto",
                            padding: "0 30px"
                        }
                    }), r = [], r.push(t.formatString("{0} {1}.{2} {3} svg path", [s, e.primaryNavigation.searchForm, e.modifiers.hasInput, e.primaryNavigation.searchIcons])), a.insertRule({
                        media: o,
                        selector: r,
                        rules: {
                            opacity: "1",
                            transform: "none"
                        }
                    }), r = [], r.push(t.formatString("{0} {1}", [s, e.primaryNavigation.searchClose])), a.insertRule({
                        media: o,
                        selector: r,
                        rules: {
                            display: "none"
                        }
                    }), r = [], r.push(t.formatString("{0} {1}", [s, e.primaryNavigation.searchResults])), a.insertRule({
                        media: o,
                        selector: r,
                        rules: {
                            position: "absolute",
                            top: "100%",
                            left: "0",
                            right: "0",
                            width: "100%"
                        }
                    }), r = [], r.push(t.formatString("{0} {1}:before", [s, e.primaryNavigation.searchResults])), a.insertRule({
                        media: o,
                        selector: r,
                        rules: {
                            display: "none"
                        }
                    }), r = [], r.push(t.formatString("{0} {1}:not(:only-child)", [s, e.primaryNavigation.searchHubblets])), a.insertRule({
                        media: o,
                        selector: r,
                        rules: {
                            "border-bottom": "1px solid #f3f3f3"
                        }
                    }), r = [], r.push(t.formatString("{0}.{1} {2}:not(:only-child)", [s, e.themes.darkSelector, e.primaryNavigation.searchHubblets])), a.insertRule({
                        media: o,
                        selector: r,
                        rules: {
                            "border-bottom": "1px solid #4b4b4b"
                        }
                    }), r = [], r.push(t.formatString("{0} {1}:not(:only-child):after", [s, e.primaryNavigation.searchHubblets])), a.insertRule({
                        media: o,
                        selector: r,
                        rules: {
                            display: "none"
                        }
                    }), r = [], r.push(t.formatString("{0} {1}", [s, e.primaryNavigation.searchHubbletDesc])), a.insertRule({
                        media: o,
                        selector: r,
                        rules: {
                            display: "flex"
                        }
                    }), r = [], r.push(t.formatString("{0}", [e.primaryNavigation.actionSearch])), a.insertRule({
                        media: o,
                        selector: r,
                        rules: {
                            display: "flex"
                        }
                    }), r = [], r.push(t.formatString("[dir=rtl] {0} {1}", [s, e.primaryNavigation.searchIcons])), a.insertRule({
                        media: o,
                        selector: r,
                        rules: {
                            "margin-left": "auto",
                            "margin-right": "10px"
                        }
                    }))
                }, o
            }(s, t, i, l), u = function(e, t) {
                function n() {
                    this.debug = window.location.search.indexOf(e.strings.debug) > -1
                }
                var i;
                return n.prototype.message = function() {
                        var t, n = [e.strings.debug + ":"],
                            i = arguments.length;
                        for (t = 0; t < i; t++) n.push(arguments[t]);
                        return n.concat()
                    }, n.prototype.log = function() {
                        this.debug && window.console && t.isFunction(window.console.log) && window.console.log.apply(null, this.message.apply(null, arguments))
                    }, n.prototype.warn = function() {
                        this.debug && window.console && t.isFunction(window.console.warn) && window.console.warn.apply(null, this.message.apply(null, arguments))
                    }, n.prototype.error = function() {
                        this.debug && window.console && t.isFunction(window.console.error) && window.console.error.apply(null, this.message.apply(null, arguments))
                    },
                    function() {
                        return i = i || new n
                    }
            }(r, t), d = Object.freeze({
                RETURN: 13,
                ESC: 27,
                SPACE: 32
            }), p = '<aside class="SAYT{{#config.theme}} {{config.theme}}{{/config.theme}}" role="search">    <form action="{{config.strings.advancedSearchURL}}" method="get" class="SAYT-form">        <input type="text" name="q" autocomplete="off" placeholder="{{config.strings.searchLabel}}" class="SAYT-input" aria-label="{{config.strings.searchLabel}}" aria-autocomplete="list" aria-controls="SAYT-results">        <div class="SAYT-icons">            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false">                <path d="M14 2A8 8 0 0 0 7.4 14.5L2.4 19.4a1.5 1.5 0 0 0 2.1 2.1L9.5 16.6A8 8 0 1 0 14 2Zm0 14.1A6.1 6.1 0 1 1 20.1 10 6.1 6.1 0 0 1 14 16.1Z"></path>            </svg>            <a href="#" tabindex="-1" class="SAYT-close" role="button"{{#config.strings.clearSearch}} aria-label="{{config.strings.clearSearch}}"{{/config.strings.clearSearch}}></a>        </div>    </form>    <div class="SAYT-announcements" role="status"></div>    <div class="SAYT-results" id="SAYT-results" data-gnav-scrollable="all" role="region"{{#config.strings.searchResults}} aria-label="{{config.strings.searchResults}}"{{/config.strings.searchResults}}></div></aside>', h = '<a href="#" aria-label="{{config.strings.searchLabel}}" class="SAYT-action-search{{#config.theme}} {{config.theme}}{{/config.theme}}" aria-haspopup="true" aria-expanded="false" role="button"{{#tracking}} {{tracking.dataProperty}}="{{tracking.prefix}}{{tracking.search}}"{{/tracking}}>    <span class="SAYT-action-icons">        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" focusable="false">            <path d="M14 2A8 8 0 0 0 7.4 14.5L2.4 19.4a1.5 1.5 0 0 0 2.1 2.1L9.5 16.6A8 8 0 1 0 14 2Zm0 14.1A6.1 6.1 0 1 1 20.1 10 6.1 6.1 0 0 1 14 16.1Z"></path>        </svg>        <span class="SAYT-action-close"></span>    </span></a>', f = '{{! Hubblets section}}{{#hasHubblets}}<ul class="SAYT-hubblets"{{#strings.productSuggestions}} aria-label="{{strings.productSuggestions}}"{{/strings.productSuggestions}}>{{#hubblets}}<li class="SAYT-hubblet"><a href="{{u}}" title="{{t}}" class="SAYT-hubblet-image-wrapper" tabindex="-1"{{#o}} target="_blank" rel="noopener"{{/o}}><img src="https://www.adobe.com{{i}}" alt="{{t}}" class="SAYT-hubblet-image" /></a><div class="SAYT-hubblet-content"><a href="{{u}}" class="SAYT-hubblet-headline"{{#o}} target="_blank" rel="noopener"{{/o}}>{{h}}</a><ul class="SAYT-hubblet-description">{{#l}}<li class="SAYT-hubblet-description-item"><a href="{{u}}" aria-label="{{h}} - {{t}}" class="SAYT-hubblet-description-link"{{#o}} target="_blank" rel="noopener"{{/o}}>{{t}}</a></li>{{/l}}</ul></div></li>{{/hubblets}}</ul>{{/hasHubblets}}{{! Suggestions section}}{{#hasSuggestions}}<ul class="SAYT-suggestions"{{#strings.searchSuggestions}} aria-label="{{strings.searchSuggestions}}"{{/strings.searchSuggestions}}>{{#suggestions}}<li class="SAYT-suggestion"><a href="{{u}}" class="SAYT-suggestion-link"{{#o}} target="_blank" rel="noopener"{{/o}}><span class="SAYT-suggestion-headline">{{t}}</span><span class="SAYT-suggestion-description">{{d}}</span></a></li>{{/suggestions}}</ul>{{/hasSuggestions}}{{! More results section}}{{#showMore}}<div class="SAYT-advancedSearch"><a href="{{moreLink}}" class="SAYT-advancedSearch-link">{{message}}</a></div>{{/showMore}}', m = function(e, t, n, i, o, a, r, s, l, c, u, d, p, h) {
                var f = {
                        event: new r.Events,
                        elements: {}
                    },
                    m = {
                        events: e.events
                    },
                    g = i();
                return f.setElements = function(e) {
                    this.elements = {
                        searchElement: document.querySelector(t.primaryNavigation.search),
                        searchCloseElement: document.querySelector(t.primaryNavigation.searchClose)
                    }
                }, f.checkElementsExist = function(e) {
                    var t;
                    for (t in e)
                        if (e.hasOwnProperty(t) && !(e[t] instanceof HTMLElement)) return !1;
                    return !0
                }, f.init = function(e) {
                    var t;
                    return e.inputSelector && (e.input = document.querySelector(e.inputSelector)), e.resultsSelector && (e.results = document.querySelector(e.resultsSelector)), e.triggerSelector && (t = document.querySelectorAll(e.triggerSelector)), !e || o.isEmptyObject(e) ? void g.warn("[Search]: config is empty") : e.input && e.input instanceof HTMLElement ? e.results && e.results instanceof HTMLElement ? t && t.length ? !e.strings || o.isEmptyObject(e.strings) ? void g.warn("[Search]: strings is empty") : (this.input = e.input, this.results = e.results, this.triggers = t, this.locale = e.locale, this.strings = e.strings, this.searchNamespace = e.searchNamespace, this.setElements(e), n.apply(e), void(this.checkElementsExist(this.elements) && this.checkElementsExist([this.input, this.results]) && this.bindEvents(e.triggerSelector))) : void g.warn("[Search]: trigger is empty/ not in DOM") : void g.warn("[Search]: results is empty/ not in DOM") : void g.warn("[Search]: input is empty/ not in DOM")
                }, f.bindTriggerEvents = function(e) {
                    e.addEventListener("click", function(e) {
                        e.preventDefault(), this.toggleSearch()
                    }.bind(this)), e.addEventListener("keydown", function(e) {
                        e.keyCode !== c.RETURN && e.keyCode !== c.SPACE || (e.preventDefault(), this.toggleSearch())
                    }.bind(this))
                }, f.bindEvents = function(n) {
                    function i() {
                        var e;
                        clearTimeout(e), e = setTimeout(function() {
                            f.hideSearch()
                        }.bind(this), 200)
                    }
                    var o;
                    this.input.addEventListener("keydown", function(e) {
                        e.keyCode === c.RETURN && "" === this.input.value && e.preventDefault()
                    }.bind(this)), this.input.addEventListener("input", function(e) {
                        this.checkInputState(), this.getResults(this.input.value)
                    }.bind(this)), this.elements.searchCloseElement.addEventListener("click", function(e) {
                        e.preventDefault(), this.hideSearch()
                    }.bind(this)), this.elements.searchCloseElement.addEventListener("keydown", function(e) {
                        e.keyCode !== c.RETURN && e.keyCode !== c.SPACE || (e.preventDefault(), this.hideSearch(), this.input.focus())
                    }.bind(this)), this.input.addEventListener("paste", function(e) {
                        this.data = null, this.getResults(e.clipboardData.getData("text"))
                    }.bind(this));
                    for (o in this.triggers) this.triggers[o] instanceof HTMLElement && this.bindTriggerEvents(this.triggers[o]);
                    this.elements.searchElement.addEventListener("keydown", function(t) {
                        t.keyCode === c.ESC && (t.preventDefault(), document.activeElement === this.input ? this.input.value ? (this.clearResults(), this.input.value = "", this.checkInputState()) : (this.hideSearch(), this.triggers[0].focus(), this.event.dispatchEvent(e.events.searchEscape)) : this.input.focus())
                    }.bind(this)), document.addEventListener("click", function(e) {
                        r.closest(e.target, t.primaryNavigation.search) || r.closest(e.target, n) || !this.isVisible() || this.hideSearch()
                    }.bind(this)), a.init({
                        onInstantDownScroll: function() {
                            this.isVisible() && this.hideSearch()
                        }.bind(this),
                        onInstantUpScroll: function() {
                            this.isVisible() && this.hideSearch()
                        }.bind(this),
                        onDebouncedDownScroll: function() {
                            this.isVisible() && this.hideSearch()
                        }.bind(this),
                        onDebouncedUpScroll: function() {
                            this.isVisible() && this.hideSearch()
                        }.bind(this)
                    }), window.addEventListener("resize", function() {
                        "undefined" == typeof window.orientation && i()
                    }.bind(this)), window.addEventListener("orientationchange", function() {
                        i()
                    }.bind(this))
                }, f.announceResults = function(e) {
                    this.announcementsElement = this.announcementsElement || document.querySelector(t.primaryNavigation.searchAnnouncements), e && this.announcementsElement instanceof HTMLElement && (this.announcementsElement.innerText = e)
                }, f.getResults = function(t) {
                    var n = o.formatString("{0}/{1}{2}", [e.endpoints.searchContent, this.searchNamespace ? this.searchNamespace : "home", this.locale !== l.getDefault() ? "/" + this.locale : ""]);
                    t = this.parseTerm(t), t ? t.length <= 2 || !this.data ? s.get({
                        endpoint: o.formatString("{0}/{1}.json", [n, t.substr(0, 2)]),
                        success: function(e) {
                            this.data = JSON.parse(e), this.handleResults()
                        }.bind(this),
                        error: function(e) {
                            this.updateResults({
                                showMore: !0,
                                message: this.strings.advancedSearch
                            })
                        }.bind(this)
                    }) : this.handleResults() : this.clearResults()
                }, f.handleResults = function() {
                    var n = this.parseTerm(this.input.value);
                    n ? (this.results.classList.add(t.modifiers.isVisible), this.event.dispatchEvent(e.events.suggestionsOpen), n.length < 2 ? this.populateResults(n) : this.filterResults(n)) : this.clearResults()
                }, f.populateResults = function(e) {
                    var t = [],
                        n = [];
                    Object.keys(this.data.hu).forEach(function(e) {
                        this.data.hu[e].h = this.data.hu[e].h || this.data.hu[e].t, delete this.data.hu[e].t, this.data.hu[e].l instanceof Array && this.data.hu[e].l.length && this.data.hu[e].l.forEach(function(e) {
                            e.o = e.hasOwnProperty("o") ? e.o : void 0
                        }), t.push(this.data.hu[e])
                    }.bind(this)), Object.keys(this.data.su).forEach(function(e) {
                        n.push(this.data.su[e])
                    }.bind(this)), this.updateResults({
                        hubblets: t,
                        hasHubblets: t.length > 0,
                        suggestions: n,
                        hasSuggestions: n.length > 0,
                        showMore: !0,
                        message: this.strings.allResults,
                        strings: this.strings
                    })
                }, f.filterResults = function(e) {
                    var t = o.isEmptyObject(this.data.pm) ? null : this.getTermValues(this.data.pm, e),
                        n = [],
                        i = [];
                    t ? (Array.isArray(t.hu) && t.hu.length && t.hu.forEach(function(e) {
                        this.data.hu[e].h = this.data.hu[e].h || this.data.hu[e].t, delete this.data.hu[e].t, this.data.hu[e].l instanceof Array && this.data.hu[e].l.length && this.data.hu[e].l.forEach(function(e) {
                            e.o = e.hasOwnProperty("o") ? e.o : void 0
                        }), n.push(this.data.hu[e])
                    }.bind(this)), Array.isArray(t.su) && t.su.length && t.su.forEach(function(e) {
                        i.push(this.data.su[e])
                    }.bind(this)), this.updateResults({
                        hubblets: n,
                        hasHubblets: n.length > 0,
                        suggestions: i,
                        hasSuggestions: i.length > 0,
                        showMore: !0,
                        message: this.strings.allResults,
                        strings: this.strings
                    })) : this.updateResults({
                        showMore: !0,
                        message: this.strings.advancedSearch
                    })
                }, f.clearResults = function() {
                    this.data = null, this.results.innerHTML = "", this.results.classList.remove(t.modifiers.isVisible), this.announceResults(this.strings.queryPrompt), this.event.dispatchEvent(e.events.suggestionsClose)
                }, f.parseTerm = function(e) {
                    return e ? e.trim().replace(/[-\/\#,+()$~%":*?<>{}\s]/g, "").toLowerCase() : void 0
                }, f.isVisible = function() {
                    return this.elements.searchElement && this.elements.searchElement.classList.contains(t.modifiers.isOpen)
                }, f.hideSearch = function() {
                    var n;
                    this.clearResults(), this.input.value = "";
                    for (n in this.triggers) this.triggers[n] instanceof HTMLElement && (this.triggers[n].classList.remove(t.modifiers.isOpen), this.triggers[n].setAttribute("aria-expanded", "false"));
                    this.checkInputState(), this.elements.searchElement.classList.remove(t.modifiers.isOpen), this.event.dispatchEvent(e.events.searchEnd)
                }, f.showSearch = function() {
                    var n;
                    this.elements.searchElement.classList.add(t.modifiers.isOpen), this.input.focus();
                    for (n in this.triggers) this.triggers[n] instanceof HTMLElement && (this.triggers[n].classList.add(t.modifiers.isOpen), this.triggers[n].setAttribute("aria-expanded", "true"));
                    this.checkInputState(), this.event.dispatchEvent(e.events.searchStart)
                }, f.toggleSearch = function() {
                    this.isVisible() ? this.hideSearch() : this.showSearch()
                }, f.updateResults = function(e) {
                    e.showMore && (e.moreLink = o.formatString("{0}?q={1}", [this.strings.advancedSearchURL, this.input.value])), this.results.innerHTML = u.render(h, e), e.hubblets || e.suggestions ? this.announceResults(this.strings.resultsFoundPrompt) : e.showMore && this.announceResults(this.strings.advancedSearchPrompt)
                }, f.getTermValues = function(e, t) {
                    var n, i = t.split(""),
                        o = i.length;
                    for (n = 0; n < o; n++) {
                        if (!e[i[n]]) return null;
                        e = e[i[n]]
                    }
                    return e.re
                }, f.checkInputState = function() {
                    this.elements.searchCloseElement.setAttribute("tabindex", this.input.value ? 0 : -1), this.input.parentElement.classList.toggle(t.modifiers.hasInput, !!this.input.value)
                }, f.getLocale = function(e) {
                    return e && l.isMatch(e) ? e : l.getDefault()
                }, f.overrideEndpointsConfig = function(t) {
                    e.endpoints.authoredContent = o.getPropertySafely(t, "authoredContentSearch") || e.endpoints.authoredContent, e.endpoints.searchContent = o.getPropertySafely(t, "searchContentURL") || e.endpoints.searchContent, e.endpoints.adobeIndex = o.getPropertySafely(t, "adobeIndex") || e.endpoints.adobeIndex, e.tracking = o.getPropertySafely(t, "tracking") || e.tracking
                }, f.renderSearchForm = function(e) {
                    var t = e.searchInputPlaceholder;
                    t && t instanceof HTMLElement && (t.insertAdjacentHTML("afterend", u.render(d, {
                        config: e
                    })), t.parentNode.removeChild(t))
                }, f.renderSearchAction = function(t) {
                    var n, i;
                    for (n in t.searchIconPlaceholders) i = t.searchIconPlaceholders[n], i && i instanceof HTMLElement && (i.insertAdjacentHTML("afterend", u.render(p, {
                        config: t,
                        tracking: e.tracking
                    })), i.parentNode.removeChild(i))
                }, f.renderHtml = function(e) {
                    this.renderSearchAction(e), this.renderSearchForm(e), this.init(e)
                }, f.prepareHtmlRendering = function(e, n, i) {
                    var o = {
                        inputSelector: t.primaryNavigation.searchInput,
                        resultsSelector: t.primaryNavigation.searchResults,
                        triggerSelector: t.primaryNavigation.actionSearch,
                        locale: i,
                        strings: n
                    };
                    e && (o.searchInputPlaceholder = e.searchInputPlaceholder, o.searchIconPlaceholders = e.searchIconPlaceholders, o.searchNamespace = e.searchNamespace, e.theme === t.themes.dark && (o.theme = t.themes.darkSelector), e.breakpoint && r.isInteger(e.breakpoint) && (o.breakpoint = e.breakpoint)), this.renderHtml(o)
                }, f.mapSearchAuthoredContent = function(t, n) {
                    return n && n.length || (n = l.getDefault(), g.error(o.formatString("[Search]: Locale not defined, defaulting to {0}", [n]))), {
                        advancedSearchURL: o.formatString("{0}/{1}search.html", [e.endpoints.adobeIndex, n !== l.getDefault() ? n + "/" : ""]),
                        advancedSearch: o.getPropertySafely(t, "y"),
                        allResults: o.getPropertySafely(t, "a"),
                        productSuggestions: o.getPropertySafely(t, "ps"),
                        searchSuggestions: o.getPropertySafely(t, "ss"),
                        queryPrompt: o.getPropertySafely(t, "qp"),
                        resultsFoundPrompt: o.getPropertySafely(t, "np"),
                        advancedSearchPrompt: o.getPropertySafely(t, "ns"),
                        searchLabel: o.getPropertySafely(t, "s"),
                        searchResults: o.getPropertySafely(t, "sr"),
                        clearSearch: o.getPropertySafely(t, "cs")
                    }
                }, f.getAuthoredContent = function(t) {
                    var n, i = this.getLocale(t.locale),
                        a = {},
                        r = {};
                    this.overrideEndpointsConfig(t), o.isEmptyObject(t.labels) ? (n = o.formatString("{0}/{1}/{2}/{3}.json", [e.endpoints.authoredContent, window.location.hostname, i, "search"]), s.get({
                        endpoint: n,
                        success: function(e) {
                            e = JSON.parse(e), r = o.isEmptyObject(e.s) ? e.n : e.s, a = f.mapSearchAuthoredContent(r, i), this.prepareHtmlRendering(t, a, i)
                        }.bind(this),
                        error: function(e) {
                            a = {}, this.prepareHtmlRendering(t, a, i)
                        }.bind(this)
                    })) : (a = f.mapSearchAuthoredContent(t.labels, i), this.prepareHtmlRendering(t, a, i))
                }, m.init = function(e) {
                    f.getAuthoredContent(e), delete this.init
                }, m.addEventListener = function(e, t) {
                    f.event.addEventListener(e, t)
                }, m.setTheme = function(e) {
                    var n, i;
                    if (e === t.themes.dark) {
                        if (!f.elements.searchElement.classList.contains(t.themes.darkSelector)) {
                            f.elements.searchElement.classList.add(t.themes.darkSelector), n = document.querySelectorAll(t.primaryNavigation.actionSearch);
                            for (i in n) n[i] instanceof HTMLElement && n[i].classList.add(t.themes.darkSelector)
                        }
                    } else if (f.elements.searchElement.classList.contains(t.themes.darkSelector)) {
                        f.elements.searchElement.classList.remove(t.themes.darkSelector), n = document.querySelectorAll(t.primaryNavigation.actionSearch);
                        for (i in n) n[i] instanceof HTMLElement && n[i].classList.remove(t.themes.darkSelector)
                    }
                }, m.isVisible = function() {
                    return f.isVisible()
                }, m.hideSearch = function() {
                    f.hideSearch()
                }, m
            }(r, s, c, u, t, a, i, n, o, d, e, p, h, f), window.adobeSearch = m
        }(function() {
            return "undefined" != typeof e ? e : {}
        }(), function() {
            return "undefined" != typeof i ? i : {}
        }(), function() {
            return "undefined" != typeof s ? s : {}
        }(), function() {
            return "undefined" != typeof c ? c : {
                Events: function() {}
            }
        }(), function() {
            return "undefined" != typeof d ? d : {}
        }(), function() {
            return "undefined" != typeof u ? u : {}
        }()), k = window.adobeSearch, C = function(e, t, n, i) {
            var o = {},
                a = i();
            return o.apply = function(i) {
                var o, r, s = n.formatString("{0}{1}.{2}", [t.primaryNavigation.id, t.primaryNavigation.wrapper, t.modifiers.hasCustomTheme]),
                    l = n.formatString("screen and (min-width: {0}px)", [e.breakpoints.mobile]);
                i && !n.isEmptyObject(i) && (document.querySelector(t.primaryNavigation.wrapper).classList.add(t.modifiers.hasCustomTheme), n.isValidHex(i.mBackgroundColor) && (o = [], o.push(n.formatString("{0}", [s])), a.insertRule({
                    selector: o,
                    rules: {
                        "background-color": i.mBackgroundColor
                    }
                }), o = [], o.push(n.formatString("{0} {1}", [s, t.primaryNavigation.menuContent])), a.insertRule({
                    media: l,
                    selector: o,
                    rules: {
                        "background-color": i.mBackgroundColor
                    }
                })), n.isValidHex(i.dBackgroundColor) && (o = [], o.push(n.formatString("{0} {1}", [s, t.primaryNavigation.menu])), o.push(n.formatString("{0} {1}", [s, t.primaryNavigation.searchResults])), a.insertRule({
                    selector: o,
                    rules: {
                        "background-color": i.dBackgroundColor
                    }
                }), o = [], o.push(n.formatString("{0} {1}", [s, t.primaryNavigation.submenus])), a.insertRule({
                    media: l,
                    selector: o,
                    rules: {
                        "background-color": i.dBackgroundColor
                    }
                }), o = [], o.push(n.formatString("{0} {1}", [s, t.primaryNavigation.menu])), a.insertRule({
                    media: l,
                    selector: o,
                    rules: {
                        "background-color": "transparent"
                    }
                })), n.isValidHex(i.mLinkColor) && (o = [], o.push(n.formatString("{0}", [s])), o.push(n.formatString("{0} {1}.{2} > {3}", [s, t.primaryNavigation.menuItem, t.modifiers.isOpen, t.primaryNavigation.menuLabel])), a.insertRule({
                    selector: o,
                    rules: {
                        color: i.mLinkColor,
                        fill: i.mLinkColor
                    }
                }), o = [], o.push(n.formatString("{0} {1} {2}::before", [s, t.primaryNavigation.actionSearch, t.primaryNavigation.actionClose])), o.push(n.formatString("{0} {1} {2}::after", [s, t.primaryNavigation.actionSearch, t.primaryNavigation.actionClose])), a.insertRule({
                    selector: o,
                    rules: {
                        "background-color": i.mLinkColor
                    }
                }), o = [], o.push(n.formatString("{0} {1}:not(.{2}) {3}", [s, t.primaryNavigation.menuWrapper, t.modifiers.isOpen, t.primaryNavigation.hamburgerInner])), o.push(n.formatString("{0} {1} {2}::before", [s, t.primaryNavigation.menuWrapper, t.primaryNavigation.hamburgerInner])), o.push(n.formatString("{0} {1} {2}::after", [s, t.primaryNavigation.menuWrapper, t.primaryNavigation.hamburgerInner])), a.insertRule({
                    selector: o,
                    rules: {
                        "background-color": i.mLinkColor
                    }
                }), o = [], o.push(n.formatString("{0} {1}", [s, t.primaryNavigation.logoText])), o.push(n.formatString("{0}:hover:nth-last-child(2)", [s])), a.insertRule({
                    media: l,
                    selector: o,
                    rules: {
                        color: i.mLinkColor,
                        fill: i.mLinkColor
                    }
                }), o = [], o.push(n.formatString("{0} {1}.{2} {3}", [s, t.primaryNavigation.menuItem, t.modifiers.isActive, t.primaryNavigation.menuLabel])), a.insertRule({
                    media: l,
                    selector: o,
                    rules: {
                        color: i.mLinkColor
                    }
                })), n.isValidHex(i.dLinkColor) && (o = [], o.push(n.formatString("{0} {1}", [s, t.primaryNavigation.submenuLink])), o.push(n.formatString("{0} {1}", [s, t.primaryNavigation.moreMenuLabel])), o.push(n.formatString("{0} {1}", [s, t.primaryNavigation.hubbletHeadline])), o.push(n.formatString("{0} {1}", [s, t.primaryNavigation.suggestionHeadline])), o.push(n.formatString("{0} {1}", [s, t.primaryNavigation.advancedSearchLink])), a.insertRule({
                    selector: o,
                    rules: {
                        color: i.dLinkColor
                    }
                }), a.insertRule({
                    selector: n.formatString("{0} {1}::after", [s, t.primaryNavigation.moreMenuLabel]),
                    rules: {
                        "border-top-color": i.dLinkColor
                    }
                })), n.isValidHex(i.mLinkHoverColor) && (o = [], o.push(n.formatString("{0} {1}.{2} > {3}", [s, t.primaryNavigation.menuItem, t.modifiers.isOpen, t.primaryNavigation.menuLabel])), o.push(n.formatString("{0} {1}", [s, t.primaryNavigation.searchInput])), o.push(n.formatString("{0} {1} path", [s, t.primaryNavigation.searchIcons])), a.insertRule({
                    selector: o,
                    rules: {
                        color: i.mLinkHoverColor,
                        fill: i.mLinkHoverColor
                    }
                }), o = [], o.push(n.formatString("{0} {1}::before", [s, t.primaryNavigation.searchClose])), o.push(n.formatString("{0} {1}::after", [s, t.primaryNavigation.searchClose])), a.insertRule({
                    selector: o,
                    rules: {
                        "background-color": i.mLinkHoverColor
                    }
                }), o = [], o.push(n.formatString("{0} {1}:hover", [s, t.primaryNavigation.menuLabel])), o.push(n.formatString("{0} {1}:focus", [s, t.primaryNavigation.menuLabel])), o.push(n.formatString("{0} {1}:focus", [s, t.primaryNavigation.actionLogin])), a.insertRule({
                    media: l,
                    selector: o,
                    rules: {
                        color: i.mLinkHoverColor
                    }
                }), o = [], o.push(n.formatString("{0} {1}:focus", [s, t.primaryNavigation.actionSearch])), o.push(n.formatString("{0} {1}:focus {2} svg", [s, t.primaryNavigation.applauncherModifier, t.primaryNavigation.applauncherIcon])), a.insertRule({
                    media: l,
                    selector: o,
                    rules: {
                        fill: i.mLinkHoverColor
                    }
                }), a.insertRule({
                    media: l,
                    selector: n.formatString('{0}:nth-last-child(2) {1}[aria-expanded="true"] {2} svg', [s, t.primaryNavigation.applauncherModifier, t.primaryNavigation.applauncherIcon]),
                    rules: {
                        fill: i.mLinkHoverColor
                    }
                })), n.isValidHex(i.dLinkHoverColor) && (o = [], o.push(n.formatString("{0} {1}:hover svg path", [s, t.primaryNavigation.actionSearch])), o.push(n.formatString("{0} {1}:hover", [s, t.primaryNavigation.hubbletHeadline])), o.push(n.formatString("{0} {1}:hover", [s, t.primaryNavigation.hubbletDescriptionLink])), o.push(n.formatString("{0} {1}:hover", [s, t.primaryNavigation.suggestionHeadline])), o.push(n.formatString("{0} {1}:hover", [s, t.primaryNavigation.advancedSearchLink])), a.insertRule({
                    selector: o,
                    rules: {
                        color: i.dLinkHoverColor,
                        fill: i.dLinkHoverColor
                    }
                }), o = [], o.push(n.formatString("{0} {1} {2}:hover::before", [s, t.primaryNavigation.actionSearch, t.primaryNavigation.actionClose])), o.push(n.formatString("{0} {1} {2}:hover::after", [s, t.primaryNavigation.actionSearch, t.primaryNavigation.actionClose])), a.insertRule({
                    selector: o,
                    rules: {
                        "background-color": i.dLinkHoverColor
                    }
                }), o = [], o.push(n.formatString("{0} {1}:hover::after", [s, t.primaryNavigation.moreMenuLabel])), o.push(n.formatString("{0} {1}:focus::after", [s, t.primaryNavigation.moreMenuLabel])), a.insertRule({
                    selector: o,
                    rules: {
                        "border-top-color": i.dLinkHoverColor
                    }
                }), o = [], o.push(n.formatString("{0} {1}:hover {2} svg", [s, t.primaryNavigation.applauncherModifier, t.primaryNavigation.applauncherIcon])), o.push(n.formatString("{0} {1}:hover", [s, t.primaryNavigation.submenuLink])), o.push(n.formatString("{0} {1}:focus", [s, t.primaryNavigation.submenuLink])), o.push(n.formatString("{0} {1}:hover", [s, t.primaryNavigation.moreMenuLabel])), o.push(n.formatString("{0} {1}:focus", [s, t.primaryNavigation.moreMenuLabel])), o.push(n.formatString("{0} {1}:hover", [s, t.primaryNavigation.actionLogin])), a.insertRule({
                    media: l,
                    selector: o,
                    rules: {
                        color: i.dLinkHoverColor,
                        fill: i.dLinkHoverColor
                    }
                })), n.isValidHex(i.mLinkHoverBackgroundColor) && (o = [], o.push(n.formatString("{0} {1}.{2} > {3}", [s, t.primaryNavigation.menuItem, t.modifiers.isOpen, t.primaryNavigation.menuLabel])), o.push(n.formatString("{0} {1}.{2} {3}", [s, t.primaryNavigation.menuWrapper, t.modifiers.isOpen, t.primaryNavigation.hamburger])), o.push(n.formatString("{0} {1}", [s, t.primaryNavigation.search])), a.insertRule({
                    selector: o,
                    rules: {
                        "background-color": i.mLinkHoverBackgroundColor
                    }
                }), o = [], o.push(n.formatString("{0} {1}:hover", [s, t.primaryNavigation.menuLabel])), o.push(n.formatString("{0} {1}:focus", [s, t.primaryNavigation.menuLabel])), a.insertRule({
                    media: l,
                    selector: o,
                    rules: {
                        "background-color": i.mLinkHoverBackgroundColor
                    }
                })), n.isValidHex(i.dLinkHoverBackgroundColor) && (o = [], o.push(n.formatString("{0} {1}:hover", [s, t.primaryNavigation.moreMenuLabel])), o.push(n.formatString("{0} {1}:focus", [s, t.primaryNavigation.moreMenuLabel])), o.push(n.formatString("{0} {1}:hover", [s, t.primaryNavigation.submenuLink])), o.push(n.formatString("{0} {1}:focus", [s, t.primaryNavigation.submenuLink])), a.insertRule({
                    media: l,
                    selector: o,
                    rules: {
                        "background-color": i.dLinkHoverBackgroundColor
                    }
                })), n.isValidHex(i.mLinkDimmedColor) && a.insertRule({
                    media: l,
                    selector: n.formatString("{0}:nth-last-child(2)", [s]),
                    rules: {
                        color: i.mLinkDimmedColor,
                        fill: i.mLinkDimmedColor
                    }
                }), n.isValidHex(i.headlineColor) && a.insertRule({
                    selector: n.formatString("{0} {1}", [s, t.primaryNavigation.submenuHeadline]),
                    rules: {
                        color: i.headlineColor
                    }
                }), n.isValidHex(i.descriptionColor) && (o = [], o.push(n.formatString("{0} {1}", [s, t.primaryNavigation.submenuDescription])), o.push(n.formatString("{0} {1}", [s, t.primaryNavigation.suggestionDescription])), o.push(n.formatString("{0} {1}", [s, t.primaryNavigation.hubbletDescriptionLink])), a.insertRule({
                    selector: o,
                    rules: {
                        color: i.descriptionColor
                    }
                })), n.isValidHex(i.separatorColor) && (o = [], o.push(n.formatString("{0} {1}", [s, t.primaryNavigation.menuContent])), o.push(n.formatString("{0} {1}::before", [s, t.primaryNavigation.menuItem])), o.push(n.formatString("{0} {1} + {1}::before", [s, t.primaryNavigation.submenuWrapper])), o.push(n.formatString("{0} {1}::before", [s, t.primaryNavigation.searchResults])), o.push(n.formatString("{0} {1}:not(:only-child)::after", [s, t.primaryNavigation.hubblets])), a.insertRule({
                    selector: o,
                    rules: {
                        "border-color": i.separatorColor
                    }
                }), o = [], o.push(n.formatString("{0} {1} + {1}", [s, t.primaryNavigation.moreMenuItem])), o.push(n.formatString("{0} {1}.{2} {3}", [s, t.primaryNavigation.moreMenuItem, t.modifiers.isOpen, t.primaryNavigation.moreMenuLabel])), o.push(n.formatString("{0} {1} {2} + {2}", [s, t.primaryNavigation.moreMenuItem, t.primaryNavigation.submenuWrapper])), o.push(n.formatString("{0} {1}", [s, t.primaryNavigation.submenus])), o.push(n.formatString("{0} {1} + {1}", [s, t.primaryNavigation.submenuWrapper])), o.push(n.formatString("{0} {1}:not(:only-child)", [s, t.primaryNavigation.hubblets])), a.insertRule({
                    media: l,
                    selector: o,
                    rules: {
                        "border-color": i.separatorColor
                    }
                })), r = i.caretColor || i.carretColor, n.isValidHex(r) && a.insertRule({
                    selector: n.formatString("{0} {1}::after", [s, t.primaryNavigation.menuLabel]),
                    rules: {
                        "border-top-color": r
                    }
                }))
            }, o
        }(o, a, i, w), L = function(e, t, n, i) {
            var o = {},
                a = i();
            return o.apply = function(i) {
                var o, r, s = n.formatString("{0}{1}.{2}", [t.footerNavigation.id, t.footerNavigation.wrapper, t.modifiers.hasCustomTheme]),
                    l = n.formatString("screen and (min-width: {0}px)", [e.breakpoints.footer]);
                i && !n.isEmptyObject(i) && (document.querySelector(t.footerNavigation.wrapper).classList.add(t.modifiers.hasCustomTheme), n.isValidHex(i.backgroundColor) && (o = [], o.push(s), a.insertRule({
                    selector: o,
                    rules: {
                        "background-color": i.backgroundColor
                    }
                })), n.isValidHex(i.columnTitleColor) && (o = [], o.push(n.formatString("{0} {1}", [s, t.footerNavigation.menuLabel])), a.insertRule({
                    selector: o,
                    rules: {
                        color: i.columnTitleColor
                    }
                })), n.isValidHex(i.columnTitleBackgroundColor) && (o = [], o.push(n.formatString("{0} {1}.{2} > {3}", [s, t.footerNavigation.menuItem, t.modifiers.isOpen, t.footerNavigation.menuLabel])), a.insertRule({
                    selector: o,
                    rules: {
                        "background-color": i.columnTitleBackgroundColor
                    }
                }), a.insertRule({
                    media: l,
                    selector: o,
                    rules: {
                        "background-color": "transparent"
                    }
                })), n.isValidHex(i.linkColor) && (o = [], o.push(n.formatString("{0} {1}", [s, t.footerNavigation.breadcrumb])), o.push(n.formatString("{0} {1}", [s, t.footerNavigation.submenuLink])), o.push(n.formatString("{0} {1}", [s, t.footerNavigation.disclaimers])), a.insertRule({
                    selector: o,
                    rules: {
                        color: i.linkColor
                    }
                }), o = [], o.push(n.formatString("{0} {1}", [s, t.footerNavigation.socialLink])), a.insertRule({
                    selector: o,
                    rules: {
                        fill: i.linkColor
                    }
                }), o = [], o.push(n.formatString("{0} {1}", [s, t.footerNavigation.productLink])), o.push(n.formatString("{0} {1}", [s, t.footerNavigation.selectRegion])), a.insertRule({
                    selector: o,
                    rules: {
                        color: i.linkColor,
                        fill: i.linkColor
                    }
                })), n.isValidHex(i.linkHoverColor) && (o = [], o.push(n.formatString("{0} {1}:hover", [s, t.footerNavigation.breadcrumbLink])), o.push(n.formatString("{0} {1}:hover", [s, t.footerNavigation.submenuLink])), o.push(n.formatString("{0} {1}:hover:after", [s, t.footerNavigation.selectRegion])), o.push(n.formatString("{0} {1}:hover", [s, t.footerNavigation.disclaimerLink])), a.insertRule({
                    selector: o,
                    rules: {
                        color: i.linkHoverColor
                    }
                }), o = [], o.push(n.formatString("{0} {1}:hover", [s, t.footerNavigation.socialLink])), a.insertRule({
                    selector: o,
                    rules: {
                        fill: i.linkHoverColor
                    }
                }), o = [], o.push(n.formatString("{0} {1}:hover", [s, t.footerNavigation.productLink])), o.push(n.formatString("{0} {1}:hover", [s, t.footerNavigation.selectRegion])), a.insertRule({
                    selector: o,
                    rules: {
                        color: i.linkHoverColor,
                        fill: i.linkHoverColor
                    }
                })), n.isValidHex(i.separatorColor) && (o = [], o.push(n.formatString("{0} {1}:first-child:before", [s, t.footerNavigation.menuItem])), o.push(n.formatString("{0} {1}:after", [s, t.footerNavigation.menuItem])), o.push(n.formatString("{0} {1}", [s, t.footerNavigation.socialWrapper])), o.push(n.formatString("{0} {1}", [s, t.footerNavigation.products])), a.insertRule({
                    selector: o,
                    rules: {
                        "border-color": i.separatorColor
                    }
                }), o = [], o.push(n.formatString("{0} {1} + {1}", [s, t.footerNavigation.menuItem])), a.insertRule({
                    media: l,
                    selector: o,
                    rules: {
                        "border-color": i.separatorColor
                    }
                })), r = i.caretColor || i.carretColor, n.isValidHex(r) && (o = [], o.push(n.formatString("{0} {1}:after", [s, t.footerNavigation.menuLabel])), a.insertRule({
                    selector: o,
                    rules: {
                        "border-top-color": r
                    }
                })))
            }, o
        }(o, a, i, w),
        function(e, t, n) {
            var i, o, a;
            i = function() {
                var e = {},
                    t = "adobePrivacy";
                return e.strings = {
                    id: t,
                    debug: t + "Debug",
                    testNotice: "testNotice"
                }, e.events = Object.freeze({
                    privacy_consent: t + ":PrivacyConsent"
                }), e.privacy = {
                    id: 414,
                    cdn: '//www.adobe.com/etc/beagle/public/globalnav/privacy-files/',
                    notice: "sitenotice/",
                    evidonCDN: "//c.evidon.com/",
                    country: "//c.evidon.com/geo/country.js",
                    cookieTime: 13,
                    cookieName: "_evidon_consent_cookie",
                    evidonPixelId: 22
                }, e
            }(), o = function(e, t) {
                function n() {
                    this.debug = window.location.search.indexOf(e.strings.debug) > -1
                }
                var i;
                return n.prototype.message = function() {
                        var t, n = [e.strings.debug + ":"],
                            i = arguments.length;
                        for (t = 0; t < i; t++) n.push(arguments[t]);
                        return n.concat()
                    }, n.prototype.log = function() {
                        this.debug && window.console && t.isFunction(window.console.log) && window.console.log.apply(null, this.message.apply(null, arguments))
                    }, n.prototype.warn = function() {
                        this.debug && window.console && t.isFunction(window.console.warn) && window.console.warn.apply(null, this.message.apply(null, arguments))
                    }, n.prototype.error = function() {
                        this.debug && window.console && t.isFunction(window.console.error) && window.console.error.apply(null, this.message.apply(null, arguments))
                    },
                    function() {
                        return i = i || new n
                    }
            }(i, e), a = function(e, t, n, i, o) {
                var a = {
                        event: new n.Events,
                        userProvidedConsent: !1
                    },
                    r = {},
                    s = i();
                return a.dispatchEvent = function(e) {
                    var t;
                    return "function" == typeof window.CustomEvent ? t = new CustomEvent(e) : (t = document.createEvent("CustomEvent"), t.initCustomEvent(e, !1, !1, void 0)), window.dispatchEvent(t)
                }, a.overrideEndpointsConfig = function(n) {
                    e.privacy.cdn = t.getPropertySafely(n, "privacyFilesPath") || e.privacy.cdn
                }, a.dropPixel = function(e) {
                    var n = t.getPropertySafely(window, "evidon.notice.pixelsDropped");
                    "undefined" != typeof e && (t.isObject(t.getPropertySafely(window, "evidon.notice")) && t.isFunction(window.evidon.notice.dropPixel) && t.isArray(n) && n.length > 1 ? (window.evidon.notice.dropPixel(e), s.log("evidon pixel dropped for navigation consent")) : setTimeout(function() {
                        a.dropPixel(e)
                    }, 200))
                }, a.setNavigationConsentAcrossDomains = function() {
                    function t(e) {
                        var t, n, i, o = "www",
                            a = "adobe.com";
                        if ("string" == typeof e && e.length)
                            for (t = [o + "." + a, o + ".stage." + a, o + ".stage2." + a, o + ".con-a." + a, o + ".con-b." + a, o + ".qa01." + a, o + ".qa02." + a, o + ".qa03." + a, o + ".qa04." + a, o + ".qa05." + a, o + ".dev01." + a, o + ".dev02." + a, o + ".dev03." + a, o + ".dev04." + a], i = t.length, n = 0; n < i; n++)
                                if (e.indexOf(t[n]) !== -1) return !0;
                        return !1
                    }

                    function n() {
                        var e, t = window.location.hostname.toLowerCase().split("."),
                            n = [],
                            i = "",
                            a = "sat_domain",
                            r = "A";
                        if (c) return c;
                        for (i = t.pop(), n.unshift(i); t.length > 0;) {
                            i = t.pop(), n.unshift(i), e = new Date, e.setTime(e.getTime() + 1e3);
                            try {
                                o.setValue(a, r, {
                                    expiration: e,
                                    domain: n.join(".")
                                })
                            } catch (e) {
                                break
                            }
                            if (o.getValue(a) === r) {
                                c = n.join(".");
                                break
                            }
                        }
                        return c
                    }
                    var i, r, s = o.isSet(e.privacy.cookieName),
                        l = document.referrer,
                        c = "";
                    i = n(), !s && l && l !== document.URL && t(l) && l.indexOf(i) !== -1 && (r = new Date, r.setMonth(r.getMonth() + e.privacy.cookieTime), o.setValue(e.privacy.cookieName, (new Date).toISOString(), {
                        expiration: r,
                        domain: i,
                        path: "/"
                    }, !0), a.dropPixel(e.privacy.evidonPixelId))
                }, r.init = function(t) {
                    function i() {
                        var e = window.location.hostname.split("."),
                            t = "";
                        return 2 === e.length ? t = e[0] : e.length > 2 && (t = e[e.length - 2], "com" !== t && "co" !== t || (t = e[e.length - 3])), t
                    }
                    var o, r, l, c = e.privacy.id,
                        u = e.privacy.country;
                    a.overrideEndpointsConfig(t), a.setNavigationConsentAcrossDomains(), o = e.privacy.cdn, r = o + e.privacy.notice, window.evidon = window.evidon || {}, window.evidon.id = c, window.evidon.test = window.location.search.indexOf(e.strings.testNotice) > -1, s.log("test notice", window.evidon.test), window.evidon.priorConsentCallback = function() {
                        a.userProvidedConsent = !0, a.event.dispatchEvent(e.events.privacy_consent), a.dispatchEvent(e.events.privacy_consent), s.log("prior consent callback")
                    }, l = i(), n.loadResource({
                        id: "evidon-notice",
                        path: r + "evidon-sitenotice-tag.js",
                        type: "script",
                        async: !0
                    }), n.loadResource({
                        id: "evidon-location",
                        path: u,
                        type: "script",
                        async: !0
                    }), n.loadResource({
                        id: "evidon-themes",
                        path: r + c + "/snthemes.js",
                        type: "script",
                        async: !0
                    }), window.evidon.test ? n.loadResource({
                        id: "evidon-settings",
                        path: e.privacy.evidonCDN + e.privacy.notice + c + "/" + l + "/test/settings.js",
                        type: "script",
                        async: !0
                    }) : n.loadResource({
                        id: "evidon-settings",
                        path: r + c + "/" + l + "/settings.js",
                        type: "script",
                        async: !0
                    })
                }, r.loadResource = function(e) {
                    n.loadResource(e)
                }, r.hasUserProvidedConsent = function() {
                    return a.userProvidedConsent
                }, r.showConsentPopup = function() {
                    var e = t.getPropertySafely(window.evidon, "notice");
                    "object" == typeof e && t.isFunction(e.showConsentTool) && e.showConsentTool()
                }, r.events = e.events, r
            }(i, e, t, o, n), window.adobePrivacy = a
        }(function() {
            return "undefined" != typeof i ? i : {}
        }(), function() {
            return "undefined" != typeof c ? c : {
                Events: function() {}
            }
        }(), function() {
            return "undefined" != typeof l ? l : {}
        }()), P = window.adobePrivacy, I = '<footer id="AdobeFooterNav" class="Footernav-wrapper{{#excludeNavigation}} is-small{{/excludeNavigation}}"><svg class="Footernav-svg-icons" xmlns="http://www.w3.org/2000/svg"><defs><g id="Footernav-icon-facebook"><path d="M16.2,0c1,0,1.9,0.4,2.6,1.1S20,2.7,20,3.8v12.5c0,1-0.4,1.9-1.1,2.6S17.3,20,16.2,20h-2.4v-7.7h2.6l0.4-3h-3  V7.3c0-0.5,0.1-0.9,0.3-1.1c0.2-0.2,0.6-0.4,1.2-0.4l1.6,0V3.1C16.3,3.1,15.6,3,14.6,3c-1.2,0-2.1,0.3-2.8,1C11,4.8,10.7,5.7,10.7,7  v2.2H8.1v3h2.6V20H3.8c-1,0-1.9-0.4-2.6-1.1S0,17.3,0,16.2V3.8c0-1,0.4-1.9,1.1-2.6S2.7,0,3.8,0H16.2z"/></g><g id="Footernav-icon-twitter"><path d="M16.7,6.3c-0.5,0.2-1,0.4-1.6,0.4c0.6-0.3,1-0.9,1.2-1.5c-0.6,0.3-1.1,0.6-1.7,0.7C14,5.3,13.4,5,12.6,5  c-0.8,0-1.4,0.3-1.9,0.8C10.1,6.3,9.8,7,9.8,7.7c0,0.3,0,0.5,0.1,0.6C8.8,8.3,7.7,8,6.7,7.5c-1-0.5-1.8-1.2-2.5-2  C4,5.9,3.9,6.4,3.9,6.9c0,1,0.4,1.7,1.2,2.3C4.6,9.1,4.2,9,3.8,8.8v0c0,0.7,0.2,1.2,0.7,1.7c0.4,0.5,1,0.8,1.6,0.9  c-0.3,0.1-0.5,0.1-0.7,0.1c-0.1,0-0.3,0-0.5-0.1c0.2,0.5,0.5,1,1,1.4s1,0.5,1.6,0.5c-1,0.8-2.1,1.2-3.4,1.2c-0.2,0-0.4,0-0.7,0  c1.3,0.8,2.7,1.2,4.2,1.2c1,0,1.9-0.2,2.7-0.5c0.9-0.3,1.6-0.7,2.2-1.2c0.6-0.5,1.1-1.1,1.6-1.8c0.4-0.7,0.8-1.4,1-2.1  c0.2-0.7,0.3-1.5,0.3-2.2c0-0.2,0-0.3,0-0.4C15.8,7.3,16.3,6.8,16.7,6.3z M20,3.8v12.5c0,1-0.4,1.9-1.1,2.6S17.3,20,16.2,20H3.8  c-1,0-1.9-0.4-2.6-1.1S0,17.3,0,16.2V3.8c0-1,0.4-1.9,1.1-2.6S2.7,0,3.8,0h12.5c1,0,1.9,0.4,2.6,1.1S20,2.7,20,3.8z" /></g><g id="Footernav-icon-linkedin"><path d="M3.1,16.7h3v-9h-3V16.7z M6.3,4.9c0-0.5-0.2-0.8-0.5-1.1C5.5,3.5,5.1,3.4,4.6,3.4S3.7,3.5,3.4,3.8  C3.1,4.1,2.9,4.5,2.9,4.9c0,0.4,0.2,0.8,0.5,1.1s0.7,0.4,1.2,0.4h0c0.5,0,0.9-0.1,1.2-0.4S6.3,5.4,6.3,4.9z M13.9,16.7h3v-5.2  c0-1.3-0.3-2.3-1-3c-0.6-0.7-1.5-1-2.5-1c-1.2,0-2.1,0.5-2.7,1.5h0V7.7h-3c0,0.6,0,3.6,0,9h3v-5.1c0-0.3,0-0.6,0.1-0.7  c0.1-0.3,0.3-0.6,0.6-0.8c0.3-0.2,0.6-0.3,1-0.3c1,0,1.5,0.7,1.5,2V16.7z M20,3.8v12.5c0,1-0.4,1.9-1.1,2.6S17.3,20,16.2,20H3.8  c-1,0-1.9-0.4-2.6-1.1S0,17.3,0,16.2V3.8c0-1,0.4-1.9,1.1-2.6S2.7,0,3.8,0h12.5c1,0,1.9,0.4,2.6,1.1S20,2.7,20,3.8z" /></g><g id="Footernav-icon-instagram"><path d="M17.7,16.9V8.5H16c0.2,0.5,0.3,1.1,0.3,1.7c0,1.1-0.3,2.1-0.8,3c-0.6,0.9-1.3,1.7-2.3,2.2s-2,0.8-3.1,0.8  c-1.7,0-3.2-0.6-4.4-1.8s-1.8-2.6-1.8-4.3c0-0.6,0.1-1.2,0.3-1.7H2.2v8.4c0,0.2,0.1,0.4,0.2,0.6c0.2,0.2,0.3,0.2,0.6,0.2h13.9  c0.2,0,0.4-0.1,0.6-0.2C17.7,17.3,17.7,17.1,17.7,16.9z M14,10c0-1.1-0.4-2-1.2-2.8c-0.8-0.8-1.7-1.1-2.8-1.1c-1.1,0-2,0.4-2.8,1.1  S6,8.9,6,10s0.4,2,1.2,2.8s1.7,1.1,2.8,1.1c1.1,0,2.1-0.4,2.8-1.1C13.6,12,14,11,14,10z M17.7,5.3V3.1c0-0.2-0.1-0.5-0.3-0.6  c-0.2-0.2-0.4-0.3-0.6-0.3h-2.3c-0.3,0-0.5,0.1-0.6,0.3c-0.2,0.2-0.3,0.4-0.3,0.6v2.1c0,0.3,0.1,0.5,0.3,0.6  c0.2,0.2,0.4,0.3,0.6,0.3h2.3c0.3,0,0.5-0.1,0.6-0.3C17.6,5.7,17.7,5.5,17.7,5.3z M20,2.6v14.9c0,0.7-0.3,1.3-0.8,1.8  c-0.5,0.5-1.1,0.8-1.8,0.8H2.6c-0.7,0-1.3-0.3-1.8-0.8C0.3,18.7,0,18.1,0,17.4V2.6c0-0.7,0.3-1.3,0.8-1.8S1.9,0,2.6,0h14.9  c0.7,0,1.3,0.3,1.8,0.8C19.7,1.3,20,1.9,20,2.6z" /></g><g id="Footernav-icon-vkontakte"><path d="M9.8 15.7H11c0 0 0.4 0 0.5-0.2 0.2-0.2 0.2-0.5 0.2-0.5s0-1.6 0.7-1.8c0.7-0.2 1.7 1.6 2.7 2.2 0.8 0.5 1.3 0.4 1.3 0.4l2.7 0c0 0 1.4-0.1 0.7-1.2 -0.1-0.1-0.4-0.8-2-2.3 -1.7-1.6-1.5-1.3 0.6-4 1.2-1.6 1.7-2.6 1.6-3.1 -0.1-0.4-1-0.3-1-0.3l-3 0c0 0-0.2 0-0.4 0.1 -0.2 0.1-0.3 0.3-0.3 0.3s-0.5 1.3-1.1 2.3c-1.3 2.3-1.9 2.4-2.1 2.3 -0.5-0.3-0.4-1.3-0.4-2 0-2.2 0.3-3.1-0.7-3.4 -0.3-0.1-0.6-0.1-1.4-0.1 -1.1 0-2 0-2.5 0.3C6.8 4.7 6.5 5.1 6.7 5.1c0.2 0 0.6 0.1 0.9 0.4C7.9 6 7.9 6.9 7.9 6.9S8 9.5 7.4 9.8c-0.4 0.2-1-0.2-2.2-2.3C4.7 6.5 4.2 5.3 4.2 5.3S4.1 5.1 4 5C3.8 4.8 3.5 4.8 3.5 4.8l-2.9 0c0 0-0.4 0-0.6 0.2 -0.1 0.2 0 0.5 0 0.5s2.2 5.2 4.8 7.9C7.1 15.8 9.8 15.7 9.8 15.7"/></g><g id="Footernav-icon-weibo"><path d="M7.5,14.3c0.2-0.3,0.2-0.5,0.1-0.8S7.4,13.1,7.2,13c-0.3-0.1-0.5-0.1-0.8,0s-0.5,0.3-0.7,0.5c-0.2,0.3-0.2,0.5-0.1,0.8 c0.1,0.3,0.2,0.4,0.5,0.6s0.5,0.1,0.8,0C7.1,14.8,7.4,14.6,7.5,14.3z M8.6,13c0.1-0.1,0.1-0.2,0-0.3c0-0.1-0.1-0.2-0.2-0.2 c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0.1-0.2,0.2c-0.1,0.2-0.1,0.4,0.1,0.5c0.1,0,0.2,0,0.3,0C8.4,13.1,8.5,13.1,8.6,13z M10.5,14.2 c-0.3,0.8-0.9,1.3-1.8,1.7S7.1,16.2,6.3,16c-0.8-0.3-1.3-0.7-1.6-1.4s-0.3-1.4,0.1-2.1c0.3-0.7,0.9-1.2,1.7-1.6 c0.8-0.3,1.6-0.4,2.3-0.2c0.8,0.2,1.4,0.7,1.8,1.3C10.8,12.7,10.9,13.4,10.5,14.2z M14,12.4c-0.1-0.7-0.4-1.3-1-1.9 c-0.6-0.6-1.4-1-2.3-1.2C9.7,9,8.7,8.9,7.6,9c-1.7,0.2-3,0.7-4.1,1.6s-1.6,1.9-1.5,3c0.1,0.7,0.4,1.3,1,1.9s1.4,1,2.3,1.2 s2,0.3,3.1,0.2c1.7-0.2,3-0.7,4.1-1.6C13.6,14.5,14.1,13.5,14,12.4z M17.4,12.4c0,0.5-0.1,1-0.4,1.6s-0.7,1-1.2,1.5 c-0.5,0.5-1.2,0.9-1.9,1.3c-0.7,0.4-1.6,0.7-2.5,0.9c-1,0.2-2,0.3-3,0.3S6.3,18,5.3,17.7c-1-0.2-1.9-0.6-2.7-1 c-0.8-0.4-1.4-1-1.9-1.7C0.2,14.3,0,13.6,0,12.8C0,11.9,0.3,11,0.8,10S2,8.1,3,7.2C4.2,5.9,5.5,5,6.8,4.5S9,4.1,9.5,4.6 c0.5,0.5,0.6,1.3,0.2,2.3c0,0.1,0,0.2,0,0.2c0,0,0.1,0.1,0.1,0.1c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0l0.1,0c1-0.4,1.9-0.7,2.7-0.7 c0.8,0,1.4,0.2,1.7,0.7c0.3,0.5,0.3,1.1,0,2c0,0.1,0,0.2-0.1,0.2s0,0.1,0.1,0.1c0.1,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.2,0.1 c0.4,0.1,0.8,0.3,1.1,0.5c0.3,0.2,0.6,0.5,0.9,0.9C17.3,11.5,17.4,12,17.4,12.4z M16.6,5.5c0.3,0.3,0.5,0.8,0.6,1.2 c0.1,0.5,0.1,0.9-0.1,1.3c-0.1,0.2-0.2,0.3-0.3,0.4c-0.2,0.1-0.3,0.1-0.5,0c-0.2-0.1-0.3-0.2-0.4-0.3c-0.1-0.2-0.1-0.3,0-0.5 C16,7.1,16,6.7,15.6,6.3S14.9,5.9,14.4,6c-0.2,0-0.3,0-0.5-0.1c-0.2-0.1-0.2-0.2-0.3-0.4c0-0.2,0-0.3,0.1-0.5 c0.1-0.2,0.2-0.2,0.4-0.3c0.4-0.1,0.9-0.1,1.3,0.1C15.9,4.9,16.3,5.1,16.6,5.5z M18.6,3.6c0.6,0.7,1.1,1.5,1.3,2.5S20,8,19.7,8.8 c-0.1,0.2-0.2,0.3-0.4,0.4c-0.2,0.1-0.4,0.1-0.6,0c-0.2-0.1-0.3-0.2-0.4-0.4c-0.1-0.2-0.1-0.4-0.1-0.6c0.2-0.6,0.2-1.2,0.1-1.9 c-0.1-0.7-0.4-1.3-0.9-1.8c-0.5-0.5-1-0.9-1.7-1.1c-0.6-0.2-1.3-0.2-1.9-0.1c-0.2,0-0.4,0-0.6-0.1C13.2,3.3,13,3.1,13,2.9 c0-0.2,0-0.4,0.1-0.6s0.3-0.3,0.5-0.3c0.9-0.2,1.8-0.2,2.7,0.1S18,2.9,18.6,3.6z"/></g><g id="Footernav-icon-reader"><path d="M9.9 38.7C4.8 42.6 1.2 48.1 2.6 49l0 0 -1.2-0.6 0 0C0.6 47.5 2.3 42.8 9.9 38.7L9.9 38.7 9.9 38.7 9.9 38.7z"/><path d="M48.9 34.4c2.7-5.7-19.2-4.8-35.2 2.6C26.2 32.2 49.2 30.1 48.9 34.4L48.9 34.4 48.9 34.4 48.9 34.4z"/><path d="M24.2 4.2c0.6-3.2-1-3-1.4-3l0 0h-1l0 0c-0.5 0-1 0.4-1.2 1.3 -1.5 5.7 1.2 20 8.9 26.6 6.8 5.8 18.7 8.5 19.2 5.7 -2.5 1.2-11.7-1.8-18-6.8 -7.3-6-10.5-20.9-8.9-25.6 0.2-0.5 0.5-1 0.7-1.1C23.2 1.7 24 2.5 24.2 4.2L24.2 4.2 24.2 4.2 24.2 4.2z"/><path d="M24.1 5.1c-0.7 3.4-1 11.2-7.4 24.2 -6.9 13.9-12 20.4-15.3 19l0 0L2.6 49l0 0c2.6 1.3 7.5-3.1 15.5-18.6C24.2 18.5 23.9 12.3 24.1 5.1L24.1 5.1 24.1 5.1 24.1 5.1z"/></g><g id="Footernav-icon-air"><path d="M47.9 34.6c-0.1-0.2-0.4-0.5-0.6-0.7 -2.7-2.8-4.7-6-5.8-9.7 -0.1-0.2-0.1-0.3-0.1-0.5 0-0.2-0.1-0.3-0.1-0.5 -0.9-3.7-0.8-7.5 0.2-11.3 0 0 0.1-0.6 0.2-0.9 0.8-4.7-2.1-9.4-6.9-10.7 -4.8-1.3-9.8 1.4-11.4 6.1 -0.1 0.2-0.2 0.6-0.2 0.6 -1 3.7-2.8 7-5.4 9.7 -2.9 3-6.6 5.1-10.7 6.3l0 0c-5 1.3-8 6.5-6.7 11.5 1.3 5 6.5 8 11.6 6.6 3.8-1 7.6-1.1 11.3-0.2 0.2 0 0.3 0.1 0.5 0.1 0.2 0 0.3 0.1 0.5 0.1 3.6 1.1 6.9 3.1 9.7 5.8 0.3 0.3 0.6 0.6 0.9 0.8 3.7 2.8 9 2.6 12.4-0.8C50.7 43.7 50.9 38.3 47.9 34.6zM36.3 30.1C35 35 29.9 37.9 25 36.6c-4.9-1.3-7.8-6.4-6.5-11.3 1.3-4.9 6.4-7.8 11.3-6.5C34.7 20.1 37.6 25.2 36.3 30.1z"/></g><g id="Footernav-icon-flash"><path d="M45.8 9.7l-1 0.1c-6.2 0.4-9.6 4.8-12.2 10.3 2.1 0 7.7 0 7.7 0v9.7c0 0-10.4 0-11.7 0 -1.6 3.9-3.7 7.9-6.3 11.5C18.1 47.3 12 49.7 5.2 50l-1.1 0v-9.7l1-0.1c7.6-0.4 11.2-6.3 15.3-17 1.8-5.5 3.9-10 7.3-14.7 3.7-5.1 9.9-8.3 17-8.5l1.1 0V9.7z"/></g><g id="Footernav-icon-shockwave"><path d="M3.4 23.1c0 1-0.8 1.8-1.8 1.8s-1.8-0.8-1.8-1.8V7.2c0-1 0.8-1.8 1.8-1.8s1.8 0.8 1.8 1.8V23.1zM9.2 31c0 1-0.8 1.8-1.8 1.8S5.5 32 5.5 31V15.1c0-1 0.8-1.8 1.8-1.8s1.8 0.8 1.8 1.8V31zM15 34.7c0 1-0.8 1.8-1.8 1.8s-1.8-0.8-1.8-1.8V18.7c0-1 0.8-1.8 1.8-1.8s1.8 0.8 1.8 1.8V34.7zM20.8 35.7c0 1-0.8 1.8-1.8 1.8s-1.8-0.8-1.8-1.8V19.8c0-1 0.8-1.8 1.8-1.8s1.8 0.8 1.8 1.8V35.7zM26.6 34.1c0 1-0.8 1.8-1.8 1.8 -1 0-1.8-0.8-1.8-1.8V18.2c0-1 0.8-1.8 1.8-1.8 1 0 1.8 0.8 1.8 1.8V34.1zM32.4 31.5c0 1-0.8 1.8-1.8 1.8 -1 0-1.8-0.8-1.8-1.8V15.6c0-1 0.8-1.8 1.8-1.8 1 0 1.8 0.8 1.8 1.8V31.5zM38.2 31.5c0 1-0.8 1.8-1.8 1.8 -1 0-1.8-0.8-1.8-1.8V15.6c0-1 0.8-1.8 1.8-1.8 1 0 1.8 0.8 1.8 1.8V31.5zM44 34.7c0 1-0.8 1.8-1.8 1.8 -1 0-1.8-0.8-1.8-1.8V18.7c0-1 0.8-1.8 1.8-1.8 1 0 1.8 0.8 1.8 1.8V34.7zM49.8 41.5c0 1-0.8 1.8-1.8 1.8 -1 0-1.8-0.8-1.8-1.8V25.6c0-1 0.8-1.8 1.8-1.8 1 0 1.8 0.8 1.8 1.8V41.5z"/></g><g id="Footernav-icon-region"><path d="M50 23.8c-0.2-3.3-1-6.5-2.4-9.5l0 0C43.7 5.9 35.4 0.4 26.2 0h-2.4C14.6 0.4 6.3 5.9 2.4 14.3l0 0c-1.4 3-2.2 6.2-2.4 9.5l0 0v2.4l0 0c0.2 3.3 1 6.5 2.4 9.5l0 0c4 8.4 12.2 13.9 21.4 14.3h2.4c9.2-0.4 17.5-5.9 21.4-14.3l0 0c1.4-3 2.2-6.2 2.4-9.5l0 0V23.8zM47.6 23.8h-9.5c0-3.2-0.4-6.4-1.2-9.5H45C46.6 17.2 47.5 20.5 47.6 23.8zM33.6 11.9h-7.4V2.6C29.3 3.3 31.9 7.1 33.6 11.9zM23.8 2.6v9.3h-7.4C18.1 7.1 20.7 3.3 23.8 2.6zM23.8 14.3v9.5h-9.5c0.1-3.2 0.6-6.4 1.4-9.5H23.8zM23.8 26.2v9.5h-8.1c-0.8-3.1-1.3-6.3-1.4-9.5H23.8zM23.8 38.1v9.3c-3.1-0.7-5.7-4.5-7.4-9.3H23.8zM26.2 47.4v-9.3h7.4C31.9 42.9 29.3 46.7 26.2 47.4zM26.2 35.7v-9.5h9.5c-0.1 3.2-0.6 6.4-1.4 9.5H26.2zM26.2 23.8v-9.5h8.1c0.8 3.1 1.3 6.3 1.4 9.5H26.2zM43.3 11.9h-7.1c-0.9-3.1-2.4-6.1-4.5-8.6C36.4 4.8 40.5 7.8 43.3 11.9zM18.6 3.3c-2.2 2.5-3.8 5.4-4.8 8.6H6.7C9.6 7.8 13.8 4.8 18.6 3.3zM5 14.3h8.1c-0.7 3.1-1.1 6.3-1.2 9.5H2.4C2.5 20.5 3.4 17.2 5 14.3zM2.4 26.2h9.5c0 3.2 0.4 6.4 1.2 9.5H5C3.4 32.8 2.5 29.5 2.4 26.2zM6.4 38.1h7.4c0.9 3.1 2.4 6.1 4.5 8.6 -4.7-1.5-8.8-4.5-11.7-8.6H6.4zM31.4 46.7c2.2-2.5 3.8-5.4 4.8-8.6h7.4C40.6 42.2 36.3 45.3 31.4 46.7zM45 35.7h-8.1c0.7-3.1 1.1-6.3 1.2-9.5h9.5C47.5 29.5 46.6 32.8 45 35.7z"/></g><g id="Footernav-icon-adChoices">   <path d="M2.2 20c1 0 1.7-0.5 2.4-0.9 0.6-0.3 1.2-0.7 1.9-1 3.2-1.7 6.4-3.5 9.6-5.3 1-0.5 2.3-1 3-1.9 0.2-0.3 0.5-0.7 0.4-1.2 -0.3-1.1-1.7-1.5-2.6-2 -2.2-1.2-4.5-2.5-6.7-3.7 -0.8-0.5-2-1.4-3-0.7C6.8 3.5 6.6 3.7 6.5 4c-0.1 0.4 0 0.9 0 1.3 0 1.1 0 2.1 0 3.2 0 0.9-0.1 1.6 0.5 2 0.2 0.1 0.6 0.2 0.9 0.1 1-0.4 0.7-2.2 0.7-3.6 0-0.4 0-0.8 0-1.1 1.7 0.9 3.4 1.8 5.1 2.6 0.6 0.3 1.6 0.6 1.8 1.4 0.2 0.9-1.7 1.6-2.3 1.9 -2.3 1.3-4.6 2.6-6.9 3.9 -0.5 0.3-1.8 1.3-2.6 1 -0.3-0.1-0.5-0.4-0.5-0.6 -0.1-0.4-0.1-1-0.1-1.5 0-1.1 0-2.2 0-3.2 0-1.8 0-3.6 0-5.4 0-0.8-0.1-1.8 0.2-2.3 0.7-1 2.3 0.8 2.8-0.8 0.1-0.4-0.1-0.8-0.3-1C5.4 1.3 3.6 0.4 2.9 0.2 2.7 0.1 2.2 0 1.9 0c-1.7 0.3-1.3 3-1.3 5 0 3.3 0 6.6 0 9.9 0 1.5-0.2 3.5 0.4 4.4C1.3 19.8 1.6 19.8 2.2 20L2.2 20zM7.4 13.5c1.5 0 1.6-1.9 0.2-2.2 -0.8-0.1-1.4 0.7-1.2 1.4C6.6 13.2 6.9 13.3 7.4 13.5L7.4 13.5z"/></g></defs></svg><div class="Footernav">{{^excludeNavigation}}{{> footerBreadcrumbs}}{{#m.length}}<div class="Footernav-menu"><ul class="Footernav-menu-items">{{#m}}{{#t}}<li class="Footernav-menu-item{{#a}} is-social{{/a}}" id="{{i}}"><a href="#"{{#e}} title="{{e}}"{{/e}} class="Footernav-menu-label" data-type="item" aria-haspopup="true" aria-expanded="false" role="button">{{t}}</a><div class="Footernav-submenu-wrapper" data-type="popup"><ul class="Footernav-submenu" data-type="column">{{#c}}{{#u}}<li class="Footernav-submenu-item" id="{{i}}"><a href="{{u}}"{{#e}} title="{{e}}"{{/e}} class="Footernav-submenu-link" data-type="columnitem"{{#o}} target="_blank" rel="noopener"{{/o}}>{{h}}</a></li>{{/u}}{{/c}}</ul>{{#a}}{{#s.length}}<ul class="Footernav-social-wrapper" data-type="column">{{#s}}{{#u}}<li class="Footernav-social" id="{{i}}"><a href="{{u}}" title="{{t}}" class="Footernav-social-link" data-type="columnitem"{{#o}} target="_blank" rel="noopener"{{/o}}><svg class="Footernav-social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" focusable="false"><use xlink:href="#Footernav-icon-{{s}}"></use></svg></a></li>{{/u}}{{/s}}</ul>{{/s.length}}{{/a}}</div></li>{{/t}}{{/m}}</ul></div>{{/m.length}}{{#d.length}}<ul class="Footernav-products">{{#d}}{{#u}}<li class="Footernav-product" id="{{i}}"><a href="{{u}}"{{#e}} title="{{e}}"{{/e}} class="Footernav-product-link"><span class="Footernav-product-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" focusable="false"><use xlink:href="#Footernav-icon-{{d}}"></use></svg></span><span class="Footernav-product-name">{{t}}</span></a></li>{{/u}}{{/d}}</ul>{{/d.length}}{{/excludeNavigation}}<div class="Footernav-misc"><a href="#" class="Footernav-region" aria-haspopup="true" role="button"><div class="Footernav-region-icon"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50" focusable="false"><use xlink:href="#Footernav-icon-region"></use></svg></div><div class="Footernav-region-text">{{c.r}}</div></a><ul class="Footernav-disclaimers">{{#c.c}}<li class="Footernav-disclaimer">{{c.c}}</li>{{/c.c}}{{#p}}<li class="Footernav-disclaimer" id="{{i}}"><a href="{{u}}"{{#e}} title="{{e}}"{{/e}} class="Footernav-disclaimer-link"{{#o}} target="_blank" rel="noopener"{{/o}}>{{t}}</a>{{#a}}<span class="Footernav-disclaimer-suffix">{{a}}</span>{{/a}}</li>{{/p}}<li class="Footernav-disclaimer is-adChoices">    <a href="#" title="AdChoices" class="Footernav-disclaimer-link"><svg class="Footernav-adChoices-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" focusable="false"><use xlink:href="#Footernav-icon-adChoices"></use></svg><span class="Footernav-adChoices-text">{{c.v}}</span></a></li></ul></div></div><div class="evidon-notice-link"></div></footer>',
        _ = '{{#breadcrumbs}}<div class="Footernav-breadcrumbs-wrapper">{{#showLogo}}<a href="{{{adobeIndex}}}" class="Footernav-breadcrumbs-logo"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 20" focusable="false"><path fill="#FF0000" d="M15.1,0H24v20L15.1,0z M8.9,0H0v20L8.9,0z M12,7.4L17.6,20h-3.8l-1.6-4H8.1L12,7.4z"/></svg></a>{{/showLogo}}{{#links.length}}<ul class="Footernav-breadcrumbs">{{#links}}<li class="Footernav-breadcrumb"><a href="{{url}}" class="Footernav-breadcrumb-link">{{title}}</a></li>{{/links}}</ul>{{/links.length}}</div>{{/breadcrumbs}}', x = function(e, t, n, i, o, a, r, s, l, c) {
            var u = {},
                d = {};
            return u.addAdditionalDataFields = function(e, t) {
                var n = e.breadcrumbs,
                    i = e.excludeNavigation;
                n && !o.isEmptyObject(n) && (t.breadcrumbs = n), i && (t.excludeNavigation = i)
            }, u.replacePlaceholderElement = function(e, t) {
                e.insertAdjacentHTML("afterend", t), e.parentNode.removeChild(e)
            }, u.buildFooter = function(t, n) {
                var i = e.render(l, n, {
                    footerBreadcrumbs: c
                });
                u.replacePlaceholderElement(t, i)
            }, u.renderBreadcrumbs = function(t, i) {
                var a, r;
                t && !o.isEmptyObject(t) && (a = document.querySelector(n.footerNavigation.breadrcumbsPlaceholder), t.adobeIndex = i, r = e.render(c, {
                    breadcrumbs: t
                }), a instanceof HTMLElement && u.replacePlaceholderElement(a, r))
            }, u.attachRegionModalAction = function(e) {
                var t = document.querySelector(n.footerNavigation.selectRegion);
                t instanceof HTMLElement && o.isFunction(e) && t.addEventListener("click", function(t) {
                    t.preventDefault(), e()
                })
            }, u.attachEventListeners = function(e) {
                var t;
                e.excludeNavigation || window.addEventListener("resize", function() {
                    clearTimeout(t), t = setTimeout(u.setKeyboard, 300)
                })
            }, u.setKeyboard = function() {
                var e = document.querySelector(n.footerNavigation.menuItems);
                e instanceof HTMLElement && (window.innerWidth >= t.breakpoints.footer ? (u.disableHeadingAccessibility(), u.keyboard && u.keyboard instanceof a && u.keyboard.destroy()) : (u.enableHeadingAccessibility(), u.keyboard && u.keyboard instanceof a ? u.keyboard.reset() : e && e instanceof HTMLElement && (u.keyboard = new a(e, {
                    popupClass: n.footerNavigation.menuItem
                }))))
            }, u.disableHeadingAccessibility = function() {
                var e = document.querySelectorAll(n.footerNavigation.menuLabel);
                i.forEach(e, function(e) {
                    e.removeAttribute("aria-haspopup"), e.removeAttribute("aria-expanded"), e.style.setProperty("pointer-events", "none"), e.setAttribute("role", "heading"), e.setAttribute("tabindex", "-1")
                })
            }, u.enableHeadingAccessibility = function() {
                var e = document.querySelectorAll(n.footerNavigation.menuLabel);
                i.forEach(e, function(e) {
                    e.setAttribute("aria-haspopup", "true"), e.setAttribute("aria-expanded", "false"), e.style.removeProperty("pointer-events"), e.setAttribute("role", "button"), e.removeAttribute("tabindex")
                })
            }, u.attachEvidonModalAction = function() {
                var e = document.querySelector(o.formatString("{0}.{1} {2}", [n.footerNavigation.disclaimer, n.modifiers.isAdChoices, n.footerNavigation.disclaimerLink]));
                e instanceof HTMLElement && e.addEventListener("click", function(e) {
                    e.preventDefault(), o.isFunction(s.showConsentPopup) && s.showConsentPopup()
                })
            }, u.setTheme = function(e) {
                r.apply(e)
            }, d.init = function(e, t, n) {
                var i;
                if (e && !o.isEmptyObject(e)) {
                    if (e.progressiveEnhancement) u.renderBreadcrumbs(e.breadcrumbs, t.adobeIndex);
                    else {
                        if (i = e.target, !(i && i instanceof HTMLElement)) return;
                        if (!t || o.isEmptyObject(t)) return;
                        u.addAdditionalDataFields(e, t), u.buildFooter(e.target, t)
                    }
                    u.setTheme(e.theme), u.setKeyboard(), u.attachRegionModalAction(e.regionModal), u.attachEvidonModalAction(), u.attachEventListeners(e)
                }
            }, d
        }(e, o, a, c, i, b, L, P, I, _),
        function(e, t, n, i, o) {
            var a, r, s, l, c, u, d, p;
            a = function() {
                var e = {},
                    t = "adobeProfile";
                return e.strings = {
                    id: t,
                    debug: t + "Debug",
                    ellipsis: "...",
                    localLink: "local link",
                    hashtag: "#"
                }, e.events = {
                    data_ready: t + ":DataReady",
                    profile_ready: t + ":ProfileReady",
                    sign_out: t + ":SignOut"
                }, e.messages = {
                    config: "config",
                    storage: "storage",
                    no_config: "PE01",
                    no_target: "PE02",
                    request_error: "PE03 {0}",
                    profile_data_missing: "PW01 {0}",
                    request_data: "PL01 {0}",
                    profile_data: "PL02",
                    profile_labels: "PL03",
                    build_profile: "PL04",
                    locale: "PL05 {0}",
                    custom_theme: "PL06 {0}",
                    custom_class: "PL07 {0}",
                    custom_behance: "PL08 {0}",
                    format_name: "PL09 {0}",
                    format_email: "PL10 {0}; {1}",
                    build_events: "PL11",
                    method_executed: "PL12 {0}, {1}"
                }, e.endpoints = {
                    profile: 'https://cc-collab.adobe.io/profile',
                    locales: '//www.adobe.com/services/globalnav.json',
                    account: '//account.adobe.com?lang={0}',
                    accountProfile: '//account.adobe.com/profile?lang={0}'
                }, e.profile = {
                    requiredProperties: ["id", "first_name", "last_name", "email", "avatar"],
                    defaultAvatar: "https://a3.behance.net/img/profile/no-image-138.jpg"
                }, e.analytics = {
                    timeout: 601
                }, e
            }(), r = function(e, t) {
                var n = {},
                    i = document.createElement("canvas");
                return n.getElementProperties = function(e, t) {
                    var n, i, o, a = {};
                    if (!e || !t) return null;
                    for (t = Array.isArray(t) ? t : [t], n = t.length, i = 0; i < n; i++) o = t[i], "string" == typeof o && (a[o] = window.getComputedStyle(e)[o]);
                    return a
                }, n.measure = function(t, n) {
                    var o;
                    return t && n ? (o = i.getContext("2d"), o.font = e.formatString("{0} {1} {2}", [n["font-weight"], n["font-size"], n["font-family"]]), o.measureText(t.trim()).width) : null
                }, n.truncateEmail = function(n, i, o) {
                    var a = !1,
                        r = !1;
                    if (!n || !i || !o) return null;
                    for (; this.measure(e.formatString("{0}@{1}", [n, i]), o) > parseFloat(o.width);) n.length >= i.length && (n = e.formatString("{0}{1}", [n.slice(0, a ? -4 : -1), t.strings.ellipsis]), a = !0), n.length <= i.length && (i = e.formatString("{0}{1}", [i.slice(0, r ? -4 : -1), t.strings.ellipsis]), r = !0);
                    return e.formatString("{0}@{1}", [n, i])
                }, n
            }(t, a), s = function(e, t) {
                var n = function(e) {
                    this.debug = e
                };
                return n.prototype.message = function() {
                    var e, n = [t.strings.debug + ":"],
                        i = arguments.length;
                    for (e = 0; e < i; e++) n.push(arguments[e]);
                    return n.concat()
                }, n.prototype.log = function() {
                    this.debug && window.console && e.isFunction(window.console.log) && window.console.log.apply(null, this.message.apply(null, arguments))
                }, n.prototype.warn = function() {
                    this.debug && window.console && e.isFunction(window.console.warn) && window.console.warn.apply(null, this.message.apply(null, arguments))
                }, n.prototype.error = function() {
                    this.debug && window.console && e.isFunction(window.console.error) && window.console.error.apply(null, this.message.apply(null, arguments))
                }, n
            }(t, a), l = function(e) {
                var t = {},
                    n = {};
                return t.capitalizeFirstLetter = function(e) {
                    return "string" == typeof e ? e.charAt(0).toUpperCase() + e.slice(1) : e
                }, t.getTypes = function(e) {
                    if ("string" == typeof e || e instanceof Array) return "string" == typeof e ? [e] : e
                }, t.doesValueMatchType = function(n, i) {
                    return !!("undefined" != typeof n && "" !== n && i && !e.isEmptyObject(i) && i instanceof Array) && i.some(function(i) {
                        var o = n instanceof Object,
                            a = o && !e.isEmptyObject(n) && n instanceof window[t.capitalizeFirstLetter(i)],
                            r = !a && !!n && typeof n === i,
                            s = !r && !!n && new RegExp(i).test(n);
                        return !!(a || r || s)
                    })
                }, n.isValid = function(n, i) {
                    var o = !0;
                    return !e.isEmptyObject(n) && !e.isEmptyObject(i) && (e.isEmptyObject(i.mandatory) || (o = Object.keys(i.mandatory).every(function(e) {
                        var o = t.getTypes(i.mandatory[e]);
                        return !!n.hasOwnProperty(e) && t.doesValueMatchType(n[e], o)
                    })), o && !e.isEmptyObject(i.optional) && (o = Object.keys(i.optional).every(function(e) {
                        var o = t.getTypes(i.optional[e]);
                        return !n.hasOwnProperty(e) || t.doesValueMatchType(n[e], o)
                    })), o)
                }, n
            }(t), c = function() {
                var e = {};
                return e.isIE = function() {
                    var e = window.navigator.userAgent;
                    return e.indexOf("MSIE") > -1 || e.indexOf("Trident") > -1
                }, e
            }(), u = Object.freeze({
                TAB: 9,
                RETURN: 13,
                ESC: 27,
                SPACE: 32,
                UP: 38,
                DOWN: 40
            }), d = '<div class="Profile{{#class}} {{class}}{{/class}}{{#theme}} {{theme}}{{/theme}}" data-profile="profile"><a href="#" class="Profile-thumbnail" data-profile="thumbnail" style="background-image: url({{user.avatar}});" role="button" aria-haspopup="true" aria-expanded="false" aria-label="{{user.display_name}}{{user.honorific_title}}"{{#tracking}} {{tracking.dataProperty}}="{{tracking.prefix}}{{tracking.avatar}}"{{/tracking}}></a><div class="Profile-dropdown" data-profile="dropdown"><a href="{{endpoint.accountURL}}" class="Profile-header" aria-label="{{strings.v}}" data-profile="header"><div class="Profile-data"><p class="Profile-name" data-profile="name">{{user.display_name}}{{user.honorific_title}}</p><p class="Profile-email" data-profile="email" title="{{user.email}}">{{user.email}}</p><span class="Profile-header-cta">{{strings.v}}</span></div><div class="Profile-avatar" role="link" tabindex="0"{{#strings.l}} aria-label="{{strings.l}}"{{/strings.l}} data-profile="avatar" data-url="{{endpoint.profileURL}}" style="background-image: url({{user.avatar}});"></div></a>{{#behance}}<div class="Profile-applications" data-profile="applications"><ul class="Profile-menu"><li class="Profile-menu-item"><a href="{{behance}}" class="Profile-menu-link" data-profile="behance"><div class="Profile-menu-text">{{strings.b}}</div></a></li></ul></div>{{/behance}}{{#adminTemplate}}<div class="Profile-content" data-profile="links"><ul class="Profile-menu">{{#user.teamAdmin}}<li class="Profile-menu-item"><a href="{{strings.u}}" class="Profile-menu-link"><div class="Profile-menu-text">{{strings.t}}</div></a></li>{{/user.teamAdmin}}{{#user.enterpriseAdmin}}<li class="Profile-menu-item"><a href="{{strings.w}}" class="Profile-menu-link"><div class="Profile-menu-text">{{strings.e}}</div></a></li>{{/user.enterpriseAdmin}}</ul></div>{{/adminTemplate}}{{#localMenu}}<div class="Profile-localLinks-menu" data-profile="local-links"><div class="Profile-localLinks-title">{{title}}</div><ul class="Profile-menu">{{#links}}<li class="Profile-menu-item"><a href="{{#hasUrl}}{{action}}{{/hasUrl}}{{^hasUrl}}#{{/hasUrl}}" class="Profile-menu-link{{#hasClass}} {{class}}{{/hasClass}}"{{#target}} target="{{target}}" rel="noopener"{{/target}}{{#analyticsID}} id="Profile.Menu.{{analyticsID}}"{{/analyticsID}}{{#description}} aria-label="{{description}}"{{/description}} data-profile="local-link"><div class="Profile-menu-text">{{label}}</div></a></li>{{/links}}</ul></div>{{/localMenu}}<ul class="Profile-menu"><li class="Profile-menu-item"><a href="#" class="Profile-menu-link" data-profile="sign-out"><div class="Profile-menu-text">{{strings.s}}</div></a></li></ul></div></div>', p = function(e, t, n, i, o, a, r, s, l, c, u, d) {
                var p = {
                        data: null,
                        labels: null,
                        locale: void 0,
                        event: new i.Events,
                        ready: {
                            profileLabels: !1,
                            profileData: !1,
                            checked: !1,
                            checkConstraint: function() {
                                this.profileLabels && this.profileData && !this.checked && (this.checked = !0, p.event.dispatchEvent(e.events.data_ready, p.data))
                            }
                        }
                    },
                    h = new a(window.location.search.indexOf(e.strings.debug) > -1),
                    f = {};
                return p.mapProfileData = function(e) {
                    var n = window.adobeIMS.getUserProfile(),
                        i = t.getPropertySafely(e, "user.avatar"),
                        o = t.getPropertySafely(e, "sections.manage.items.team.id"),
                        a = t.getPropertySafely(e, "sections.manage.items.enterprise.id"),
                        r = t.getPropertySafely(e, "user.name.id"),
                        s = {};
                    return s.id = n.userId, s.first_name = n.first_name, s.last_name = n.last_name, s.display_name = n.displayName, s.name_id = r, s.email = n.email, s.avatar = i, s.teamAdmin = !!o, s.enterpriseAdmin = !!a, s
                }, p.mapProfileLabels = function(e) {
                    if (e && !t.isEmptyObject(e)) return e
                }, p.expandProfile = function() {
                    var e = document.querySelector('[data-profile="profile"]'),
                        t = e && e.querySelector('[data-profile="thumbnail"]');
                    p.checkElementsExist([e, t]) && (p.isProfileExpanded() || p.executeMethodWithAnalytics({
                        type: "render"
                    }, !0, function() {
                        e.classList.remove("Profile-hidden"), e.classList.remove("Profile-collapsed"), e.classList.add("Profile-expanded"), t.setAttribute("aria-expanded", !0)
                    }))
                }, p.collapseProfile = function() {
                    var e = document.querySelector('[data-profile="profile"]'),
                        t = e && e.querySelector('[data-profile="thumbnail"]');
                    p.checkElementsExist([e, t]) && p.isProfileExpanded() && p.executeMethodWithAnalytics({
                        type: "hide"
                    }, !0, function() {
                        e.classList.remove("Profile-expanded"), e.classList.add("Profile-collapsed"), t.setAttribute("aria-expanded", !1)
                    })
                }, p.isProfileExpanded = function() {
                    var e = document.querySelector('[data-profile="profile"]'),
                        t = e && e.querySelector('[data-profile="thumbnail"]');
                    return !!p.checkElementsExist([e, t]) && (e.classList.contains("Profile-expanded") && "true" === t.getAttribute("aria-expanded"))
                }, p.setProfileData = function(e) {
                    p.data = p.mapProfileData(e), p.ready.profileData = !0, p.ready.checkConstraint()
                }, p.getProfileData = function(i, o) {
                    var a = {
                        Authorization: "Bearer " + window.adobeIMS.getAccessToken()
                    };
                    l.isIE() && (a["Cache-Control"] = "no-cache", a.Pragma = "no-cache", a.Expires = "-1"), n.get({
                        endpoint: e.endpoints.profile,
                        headers: a,
                        success: function(n) {
                            t.isFunction(i) && i(JSON.parse(n)), h.log(e.messages.profile_data, p.data)
                        }.bind(this),
                        error: function(n) {
                            t.isFunction(o) && o({
                                user: {
                                    avatar: e.profile.defaultAvatar
                                }
                            }), h.error(t.formatString(e.messages.request_error, [e.endpoints.profile]))
                        }.bind(this)
                    })
                }, p.getProfileLabels = function() {
                    n.get({
                        endpoint: t.formatString("{0}/{1}/{2}/profile.json", [e.endpoints.locales, window.location.hostname, p.locale]),
                        success: function(n) {
                            p.labels = p.mapProfileLabels(JSON.parse(n).p), t.isEmptyObject(p.labels) ? (p.ready.profileLabels = !1, h.error(t.formatString(e.messages.request_error, [e.endpoints.locales]))) : (h.log(e.messages.profile_labels, p.labels), p.ready.profileLabels = !0, p.ready.checkConstraint())
                        }.bind(this),
                        error: function(n) {
                            p.ready.profileLabels = !1, h.error(t.formatString(e.messages.request_error, [e.endpoints.locales]))
                        }.bind(this)
                    })
                }, p.checkProfileData = function(n) {
                    var i, o = e.profile.requiredProperties,
                        a = o.length;
                    if (!n) return !1;
                    for (i = 0; i < a; i++)
                        if (!t.getPropertySafely(n, o[i])) return h.warn(t.formatString(e.messages.profile_data_missing, [o[i]])), !1;
                    return !0
                }, p.checkElementsExist = function(e) {
                    var t, n;
                    if (!(e instanceof Array && e.length > 0)) return !1;
                    for (n = e.length, t = 0; t < n; t++)
                        if (!(e[t] instanceof HTMLElement)) return !1;
                    return !0
                }, p.buildProfile = function(n) {
                    var i, o = n.target,
                        a = t.getPropertySafely(n, "accountURL") || e.endpoints.account,
                        r = t.getPropertySafely(n, "accountProfileURL") || e.endpoints.accountProfile,
                        s = p.toAccountManagementLanguage(),
                        l = {
                            user: p.data,
                            strings: p.labels,
                            class: n.class,
                            theme: n.theme,
                            behance: n.behanceProfile,
                            tracking: n.tracking,
                            localMenu: p.localMenuData,
                            endpoint: {
                                accountURL: t.formatString(a, [s]),
                                profileURL: t.formatString(r, [s])
                            }
                        };
                    l.adminTemplate = t.getPropertySafely(l, "user.teamAdmin") || t.getPropertySafely(l, "user.enterpriseAdmin"), "undefined" != typeof t.getPropertySafely(l, "user.name_id") && p.labels.h && (l.user.honorific_title = " " + p.labels.h), h.log(e.messages.build_profile), h.log(t.formatString(e.messages.locale, [p.locale])), h.log(t.formatString(e.messages.custom_theme, [!!n.theme && n.theme])), h.log(t.formatString(e.messages.custom_class, [!!n.class && n.class])), h.log(t.formatString(e.messages.custom_behance, [!!n.behanceProfile])), o.insertAdjacentHTML("afterend", u.render(d, l)), o.parentNode.removeChild(o), p.formatData(), p.setEvents(), i = document.querySelector('[data-profile="profile"]'), i instanceof HTMLElement && i.classList.add("Profile-hidden"), p.event.dispatchEvent(e.events.profile_ready), p.executeMethodWithAnalytics({
                        type: "init"
                    }, !0, function() {})
                }, p.setEvents = function() {
                    var n = document.querySelector('[data-profile="profile"]'),
                        o = n && n.querySelector('[data-profile="dropdown"]'),
                        a = n && n.querySelector('[data-profile="thumbnail"]'),
                        r = n && n.querySelector('[data-profile="header"]'),
                        s = n && n.querySelector('[data-profile="sign-out"]'),
                        l = n && n.querySelector('[data-profile="local-links"]'),
                        c = n && n.querySelector('[data-profile="behance"]'),
                        u = !1,
                        d = !1;
                    p.checkElementsExist([n, o, a, r, s]) && (h.log(e.messages.build_events), p.initKeyboardNavigation(), document.addEventListener("click", function(e) {
                        !i.closest(e.target, '[data-profile="profile"]') && p.isProfileExpanded() && p.collapseProfile()
                    }), o.addEventListener("animationend", function(e) {
                        n.classList.contains("Profile-collapsed") && n.classList.add("Profile-hidden")
                    }), a.addEventListener("click", function(e) {
                        e.preventDefault(), p.isProfileExpanded() ? p.collapseProfile() : p.expandProfile(), p.focusedLinkIndex = 0
                    }), r.addEventListener("click", function(e) {
                        var n;
                        "avatar" === e.target.getAttribute("data-profile") ? (n = e.target.getAttribute("data-url"), n && "" !== n && (e.preventDefault(), p.executeMethodWithAnalytics({
                            type: "click",
                            subType: "avatar",
                            event: e
                        }, !1, function() {
                            window.location = n
                        }))) : p.analytics && !t.isEmptyObject(p.analytics) && (u = "_blank" === r.getAttribute("target"), u || e.preventDefault(), p.executeMethodWithAnalytics({
                            type: "click",
                            subType: "account",
                            event: e
                        }, u, function() {
                            var e = r.getAttribute("href");
                            u || "" !== e && (window.location = e)
                        }))
                    }), s.addEventListener("click", function(t) {
                        t.preventDefault(), p.event.dispatchEvent(e.events.sign_out), p.executeMethodWithAnalytics({
                            type: "click",
                            subType: "sign-out",
                            event: t
                        }, !1, function() {
                            window.adobeIMS.signOut()
                        })
                    }), l instanceof HTMLElement && l.addEventListener("click", function(t) {
                        var n = i.closest(t.target, '[data-profile="local-link"]');
                        n instanceof HTMLElement && (n.getAttribute("href") === e.strings.hashtag && t.preventDefault(), p.executeMethodWithAnalytics({
                            type: "click",
                            subType: n.getAttribute("id") || e.strings.localLink,
                            event: t
                        }, !1, function() {
                            p.executeLocalLinkCallback(n, t)
                        }))
                    }), p.analytics && !t.isEmptyObject(p.analytics) && c && c instanceof HTMLElement && c.addEventListener("click", function(e) {
                        d = "_blank" === c.getAttribute("target"), d || e.preventDefault(), p.executeMethodWithAnalytics({
                            type: "click",
                            subType: "behance",
                            event: e
                        }, d, function() {
                            var e = c.getAttribute("href");
                            d || "" !== e && (window.location = e)
                        })
                    }))
                }, p.initKeyboardNavigation = function() {
                    function e() {
                        p.collapseProfile(), p.focusedLinkIndex = 0, l[0].focus()
                    }

                    function t(e) {
                        i.closest(e.target, '[tabindex="0"]') || (e.shiftKey ? 0 !== p.focusedLinkIndex && p.focusedLinkIndex-- : p.focusedLinkIndex < l.length - 1 && p.focusedLinkIndex++)
                    }

                    function n() {
                        p.isProfileExpanded() ? p.focusedLinkIndex < l.length - 1 && p.focusedLinkIndex++ : (p.expandProfile(), p.focusedLinkIndex = 1), l[p.focusedLinkIndex].focus()
                    }

                    function o() {
                        p.isProfileExpanded() && (0 === p.focusedLinkIndex ? p.collapseProfile() : p.focusedLinkIndex > 0 && (p.focusedLinkIndex--, l[p.focusedLinkIndex].focus()))
                    }

                    function a(e) {
                        var t, n = i.closest(e.target, "a"),
                            o = i.closest(e.target, '[tabindex="0"]'),
                            a = o instanceof HTMLElement ? o : n;
                        a instanceof HTMLElement && (t = i.closest(a, '[data-profile="profile"]'), t && a.click())
                    }

                    function r(e) {
                        var t, n = i.closest(e.target, '[tabindex="0"]');
                        n instanceof HTMLElement && (t = i.closest(n, '[data-profile="profile"]'), t && n.click())
                    }
                    var s = document.querySelector('[data-profile="profile"]'),
                        l = s instanceof HTMLElement && s.querySelectorAll("a");
                    l instanceof NodeList && (p.focusedLinkIndex = 0, s.addEventListener("keydown", function(i) {
                        switch (i.keyCode) {
                            case c.ESC:
                                e();
                                break;
                            case c.TAB:
                                t(i);
                                break;
                            case c.DOWN:
                                i.preventDefault(), n();
                                break;
                            case c.UP:
                                i.preventDefault(), o();
                                break;
                            case c.SPACE:
                                i.preventDefault(), a(i);
                                break;
                            case c.RETURN:
                                r(i)
                        }
                    }))
                }, p.formatData = function() {
                    var n, i, a, r, s, l, c, u = document.querySelector('[data-profile="profile"]'),
                        d = u instanceof HTMLElement && u.classList.contains("Profile-hidden"),
                        f = u instanceof HTMLElement && u.querySelector('[data-profile="email"]'),
                        m = u instanceof HTMLElement && u.querySelector('[data-profile="name"]');
                    p.checkElementsExist([u, f, m]) && (d && u.classList.add("Profile-invisible"), n = f.textContent.trim(), i = o.getElementProperties(f, ["width", "font-family", "font-size", "font-weight"]), a = m.textContent.trim(), m.classList.remove("Profile-name_long"), r = o.getElementProperties(m, ["width", "font-family", "font-size", "font-weight"]), o.measure(n, i) > parseFloat(i.width) && (c = n.split("@"), s = c[0], l = c[1], h.log(t.formatString(e.messages.format_email, [n, o.truncateEmail(s, l, i)])), f.textContent = o.truncateEmail(s, l, i)), o.measure(a, r) > parseFloat(r.width) && (h.log(t.formatString(e.messages.format_name, [a])), m.classList.add("Profile-name_long")), d && u.classList.remove("Profile-invisible"))
                }, p.exportEvents = function() {
                    f.events = e.events
                }, p.updateUserProfileData = function(e) {
                    var n;
                    t.isFunction(window.adobeIMS.isSignedInUser) && !window.adobeIMS.isSignedInUser() || window.adobeIMS.acquireAccessToken(function() {
                        n = window.adobeIMS.getUserProfile(), n && t.isFunction(e) && e(n)
                    })
                }, p.updateUserProfileDisplay = function(e) {
                    var t = document.querySelector('[data-profile="profile"]'),
                        n = t instanceof HTMLElement && t.querySelector('[data-profile="email"]'),
                        i = t instanceof HTMLElement && t.querySelector('[data-profile="name"]');
                    "object" == typeof e && "object" == typeof p.data && n instanceof HTMLElement && i instanceof HTMLElement && (p.data.email = e.email, p.data.first_name = e.first_name, p.data.last_name = e.last_name, p.data.display_name = e.displayName, n.textContent = e.email, i.textContent = e.displayName, p.formatData())
                }, p.updateUserProfile = function() {
                    p.updateUserProfileData(p.updateUserProfileDisplay)
                }, p.updateUserAvatarData = function(e) {
                    function n(n) {
                        i = t.getPropertySafely(n, "user.avatar"), i && t.isFunction(e) && e(i)
                    }
                    var i;
                    t.isFunction(window.adobeIMS.isSignedInUser) && !window.adobeIMS.isSignedInUser() || p.getProfileData(n, n)
                }, p.updateUserAvatarDisplay = function(e) {
                    var t = document.querySelector('[data-profile="profile"]'),
                        n = t instanceof HTMLElement && t.querySelector('[data-profile="thumbnail"]'),
                        i = t instanceof HTMLElement && t.querySelector('[data-profile="avatar"]');
                    "string" == typeof e && "object" == typeof p.data && n instanceof HTMLElement && i instanceof HTMLElement && (p.data.avatar = e, n.style.backgroundImage = "url(" + e + ")", i.style.backgroundImage = "url(" + e + ")")
                }, p.updateUserAvatar = function() {
                    p.updateUserAvatarData(p.updateUserAvatarDisplay)
                }, p.update = function() {
                    function e() {
                        !i && t && n && (i = !0, p.updateUserProfileDisplay(t), p.updateUserAvatarDisplay(n))
                    }
                    var t, n, i = !1;
                    p.updateUserProfileData(function(n) {
                        t = n, e()
                    }), p.updateUserAvatarData(function(t) {
                        n = t, e()
                    })
                }, p.toAccountManagementLanguage = function() {
                    var e = r.getDefault(),
                        t = {
                            africa: "en",
                            at: "de",
                            au: "en",
                            be_en: "en",
                            be_fr: "fr",
                            be_nl: "nl",
                            bg: "bg",
                            br: "pt",
                            ca: "en",
                            ca_fr: "fr",
                            ch_de: "de",
                            ch_fr: "fr",
                            ch_it: "it",
                            cis_en: "en",
                            cis_ru: "ru",
                            cn: "zh_CN",
                            cy_en: "en",
                            cz: "cs",
                            de: "de",
                            dk: "da",
                            eeurope: "en",
                            ee: "et",
                            en: "en",
                            es: "es",
                            fi: "fi",
                            fr: "fr",
                            gr_en: "en",
                            hk_en: "en",
                            hk_zh: "zh_TW",
                            hr: "hr",
                            hu: "hu",
                            ie: "en",
                            il_en: "en",
                            il_he: "he",
                            in: "en",
                            it: "it",
                            jp: "ja",
                            kr: "ko",
                            la: "es",
                            lt: "lt",
                            lu_de: "de",
                            lu_en: "en",
                            lu_fr: "fr",
                            lv: "lv",
                            mena_ar: "ar",
                            mena_en: "en",
                            mena_fr: "fr",
                            mt: "en",
                            mx: "es",
                            nl: "nl",
                            no: "nb",
                            nz: "en",
                            pl: "pl",
                            pt: "pt",
                            ro: "ro",
                            rs: "sr",
                            ru: "ru",
                            se: "sv",
                            sea: "en",
                            sg: "en",
                            si: "sl",
                            sk: "sk",
                            tr: "tr",
                            tw: "zh_TW",
                            ua: "ua",
                            uk: "en"
                        };
                    return r.isMatch(p.locale) ? (t[p.locale] && (e = t[p.locale]), e) : e
                }, p.executeLocalLinkCallback = function(e, n) {
                    var o, a, r;
                    e instanceof HTMLElement && (o = i.closest(e, "li"), a = i.closest(e, "ul"), o instanceof HTMLElement && a instanceof HTMLElement && a.childNodes instanceof NodeList && (r = Array.prototype.indexOf.call(a.childNodes, o))), "number" == typeof r && r > -1 && !t.isEmptyObject(p.localMenuData) && t.isFunction(p.localMenuData.links[r].action) && n instanceof Event && (n.preventDefault(), p.localMenuData.links[r].action())
                }, p.isLocalMenuDataValid = function(e) {
                    var t;
                    return t = s.isValid(e, {
                        mandatory: {
                            title: "string",
                            links: "array"
                        }
                    }), t && (t = e.links.every(function(e) {
                        return s.isValid(e, {
                            mandatory: {
                                label: "string",
                                action: ["string", "function"]
                            },
                            optional: {
                                description: "string",
                                class: "string",
                                target: "^_\\w+$",
                                analyticsID: "string"
                            }
                        })
                    })), t
                }, p.mapLocalMenuData = function(e) {
                    if (e && !t.isEmptyObject(e)) {
                        if (e.links instanceof Array && e.links.length > 0 && (e.links = e.links.slice(0, 7)), p.isLocalMenuDataValid(e)) return e.links.forEach(function(e) {
                            "string" == typeof e.action && (e.hasUrl = !0), "string" == typeof e.class && e.class.length && (e.hasClass = !0)
                        }), e;
                        h.warn("localMenu config is not valid")
                    }
                }, p.setupCustomAnalytics = function(n) {
                    var o, a;
                    n.analytics && !t.isEmptyObject(n.analytics) && (o = parseInt(n.analytics.timeout, 10), a = t.isFunction(n.analytics.callback) ? n.analytics.callback : void 0, i.isInteger(o) && "undefined" != typeof a && (p.analytics = {
                        callback: a,
                        timeout: o < e.analytics.timeout ? o : e.analytics.timeout
                    }))
                }, p.executeMethodWithAnalytics = function(n, i, o) {
                    function a(n) {
                        s || (o(), s = !0, h.log(t.formatString(e.messages.method_executed, [o.name, n])))
                    }
                    var r, s = !1;
                    t.isEmptyObject(p.analytics) ? a(0) : (i ? a(1) : r = setTimeout(function() {
                        a(2)
                    }, p.analytics.timeout), p.analytics.callback.apply(null, [n, function() {
                        a(3), clearTimeout(r)
                    }]))
                }, f.init = function(n) {
                    var i, o;
                    return !n || t.isEmptyObject(n) ? void h.error(e.messages.no_config) : n.target && n.target instanceof HTMLElement ? (n.locale && r.isMatch(n.locale) || (n.locale = r.getDefault()), p.locale = n.locale, i = n.data || p.data, o = p.mapProfileLabels(n.labels) || p.labels, p.localMenuData = p.mapLocalMenuData(n.localMenu), p.checkProfileData(i) ? (h.log(t.formatString(e.messages.request_data, [n.data ? e.messages.config : e.messages.storage])), p.data = i, h.log(e.messages.profile_data, p.data), setTimeout(function() {
                        p.ready.profileData = !0, p.ready.checkConstraint()
                    }, 0)) : (h.log(t.formatString(e.messages.request_data, [e.endpoints.profile])), p.getProfileData(p.setProfileData, p.setProfileData)), o && !t.isEmptyObject(o) ? (h.log(t.formatString(e.messages.request_data, [n.data ? e.messages.config : e.messages.storage])), p.labels = o, h.log(e.messages.profile_labels, p.labels), setTimeout(function() {
                        p.ready.profileLabels = !0, p.ready.checkConstraint()
                    }, 0)) : (h.log(t.formatString(e.messages.request_data, [e.endpoints.locales])), p.getProfileLabels()), this.addEventListener(e.events.data_ready, function() {
                        var t, i = !1;
                        return n.target && n.target instanceof HTMLElement ? (t = n.target.parentElement, t && t instanceof HTMLElement || (i = !0)) : i = !0, i ? void h.error(e.messages.no_target) : void p.buildProfile(n)
                    }), p.setupCustomAnalytics(n), p.exportEvents(), void delete this.init) : void h.error(e.messages.no_target)
                }, f.addEventListener = function(e, t) {
                    p.event.addEventListener(e, t)
                }, f.getUserProfile = function() {
                    return h.log(e.messages.profile_data, p.data), p.data
                }, f.expand = function() {
                    p.expandProfile()
                }, f.collapse = function() {
                    p.collapseProfile()
                }, f.update = function() {
                    p.update()
                }, f.updateProfile = function() {
                    p.updateUserProfile()
                }, f.updateAvatar = function() {
                    p.updateUserAvatar()
                }, f
            }(a, t, n, i, r, s, o, l, c, u, e, d), window.adobeProfile = p
        }(function() {
            return "undefined" != typeof e ? e : {}
        }(), function() {
            return "undefined" != typeof i ? i : {}
        }(), function() {
            return "undefined" != typeof s ? s : {}
        }(), function() {
            return "undefined" != typeof c ? c : {
                Events: function() {}
            }
        }(), function() {
            return "undefined" != typeof d ? d : {}
        }()), M = window.adobeProfile, A = '<div class="Gnav-prompt{{#isReversed}} is-reversed{{/isReversed}}"><a href="#" title="{{strings.signIn}}" class="Gnav-prompt-login Gnav-submenu-cta"{{#tracking}} {{tracking.dataProperty}}="{{tracking.prefix}}{{tracking.signInPrompt}}"{{/tracking}}>{{strings.signIn}}</a>{{#strings.promptMessage}}<p class="Gnav-prompt-message">{{strings.promptMessage}}</p>{{/strings.promptMessage}}</div>', T = function(e, t, n, i, o) {
            var a = {},
                r = {};
            return r.init = function(r, s) {
                var l, c;
                l = !!window.sessionStorage && "true" === window.sessionStorage.getItem(e.prompt.cookie), r && r instanceof HTMLElement && !l && (r.insertAdjacentHTML("beforeend", t.render(n, {
                    tracking: s.tracking,
                    strings: s.strings,
                    isReversed: s.isReversed
                })), c = 1e3 * parseInt(s.timeout, 10), a.element = document.querySelector(o.primaryNavigation.prompt), a.element && a.element instanceof HTMLElement && i.isInteger(c) && (this.setEvents(), setTimeout(function() {
                    this.close()
                }.bind(this), c)))
            }, r.setEvents = function() {
                var e, t = document.querySelector(o.primaryNavigation.promptLogin);
                document.addEventListener("click", function(e) {
                    i.closest(e.target, o.primaryNavigation.prompt) || this.close()
                }.bind(this)), t && t instanceof HTMLElement && t.addEventListener("click", function(t) {
                    t.preventDefault(), e = document.querySelector(o.primaryNavigation.actionLogin), e && e instanceof HTMLElement && e.click()
                })
            }, r.close = function() {
                a.element && a.element instanceof HTMLElement && !a.element.classList.contains(o.modifiers.isHidden) && (a.element.classList.add(o.modifiers.isHidden), window.sessionStorage && window.sessionStorage.setItem(e.prompt.cookie, !0))
            }, r
        }(o, e, A, c, a),
        function(e, t) {
            var n, i, o;
            n = function() {
                var e = {};
                return e.requiredFields = ["bit", "release", "feature"], e.ims = {
                    environment: {
                        production: "na1",
                        stage: "na1-stg1"
                    },
                    releaseFlagCookie: "fg"
                }, e.sophia = {
                    protocol: "https",
                    environment: {
                        production: "p13n",
                        stage: "p13n-stage"
                    },
                    api: ".adobe.io/fg/api/v3/feature",
                    sessionItem: "sophia_user_features"
                }, e.debug = "userFeaturesDebug", e.messages = {
                    prod: "Production",
                    stage: "Stage",
                    empty: "no data",
                    config_invalid: "Provide a valid config for invoking checkFeatures.",
                    ims_not_ready: "adobeIMS is not ready to be used. Invoke checkFeatures after loading IMS.",
                    user_not_logged_in: "User is not logged in.",
                    ims_environment: "IMS environment",
                    sophia_environment: "Sophia environment",
                    get_sophia_features_api: "Retrieving user features from Sophia API",
                    get_sophia_features_cache: "Retrieving user features from an earlier Sophia API call - Session Storage",
                    get_sophia_features_endpoint: "Retrieving user features from Sophia URL",
                    get_sophia_features_headers: "Retrieving user features with headers",
                    get_sophia_features_success: "User features were retrieved successfully",
                    get_features_status: "Checking if the user matches the release and feature",
                    set_sophia_features_cache: "Setting user features in Session Storage",
                    clear_sophia_features_cache: "Clearing cached Session Storage response",
                    error_sophia_features: "Error retrieving Sophia features",
                    execute_positive: "Execute positive callback",
                    execute_negative: "Execute negative callback"
                }, e
            }(), i = function(e, t) {
                function n() {
                    this.debug = window.location.search.indexOf(e.debug) > -1
                }
                var i;
                return n.prototype.message = function() {
                        var t, n = [e.debug + ":"],
                            i = arguments.length;
                        for (t = 0; t < i; t++) n.push(arguments[t]);
                        return n.concat()
                    }, n.prototype.log = function() {
                        this.debug && window.console && t.isFunction(window.console.log) && window.console.log.apply(null, this.message.apply(null, arguments))
                    }, n.prototype.warn = function() {
                        this.debug && window.console && t.isFunction(window.console.warn) && window.console.warn.apply(null, this.message.apply(null, arguments))
                    }, n.prototype.error = function() {
                        this.debug && window.console && t.isFunction(window.console.error) && window.console.error.apply(null, this.message.apply(null, arguments))
                    },
                    function() {
                        return i = i || new n
                    }
            }(n, e), o = function(e, t, n, i) {
                var o = {},
                    a = {},
                    r = i();
                return o.mapConfig = function(e) {
                    var t;
                    return t = e.campaigns ? e : {
                        language: e.language,
                        campaigns: [{
                            bit: e.bit,
                            release: e.release,
                            feature: e.feature
                        }]
                    }
                }, o.isValidConfig = function(n, i, o) {
                    var a, r = !1;
                    return !(!n.campaigns || t.isEmptyObject(n.campaigns) || !n.language) && (r = n.campaigns.every(function(n) {
                        return e.requiredFields.every(function(e) {
                            return a = t.getPropertySafely(n, e), "undefined" != typeof a && "" !== a
                        })
                    }), !!r && (!!t.isFunction(i) && !("undefined" != typeof o && !t.isFunction(o))))
                }, o.isImsReady = function() {
                    return window.adobeIMS && window.adobeIMS.isReady()
                }, o.isLoggedIn = function() {
                    return window.adobeIMS && !t.isEmptyObject(window.adobeIMS.isSignedInUser())
                }, o.isImsProduction = function() {
                    var t, n = window.adobeIMS.getUrlForApiCall(window.adobeIMS.IMSAPIs.fg_value),
                        i = new RegExp("https://adobeid-(.*).services.adobe.com");
                    return t = i.exec(n), Array.isArray(t) && t[1] === e.ims.environment.production
                }, o.getReleaseFlagFromCookie = function() {
                    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e.ims.releaseFlagCookie).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1"))
                }, o.areInitConditionsMet = function(n) {
                    return !(!n || t.isEmptyObject(n)) && (o.isImsReady() ? !!o.isLoggedIn() || (r.error(e.messages.user_not_logged_in), !1) : (r.error(e.messages.ims_not_ready), !1))
                }, o.checkCachedSophiaResponse = function(n, i, a) {
                    var s;
                    window.sessionStorage ? (s = JSON.parse(window.sessionStorage.getItem(e.sophia.sessionItem)), t.isEmptyObject(s) ? (r.log(e.messages.get_sophia_features_api), o.callSophiaAPI(n, i, a)) : (r.log(e.messages.get_sophia_features_cache), o.executePositiveCallback(i, s))) : (r.log(e.messages.get_sophia_features_api), o.callSophiaAPI(n, i, a))
                }, o.executeNegativeCallback = function(n, i) {
                    "undefined" != typeof n && t.isFunction(n) && (r.log(e.messages.execute_negative), n(i))
                }, o.executePositiveCallback = function(n, i) {
                    "undefined" != typeof n && t.isFunction(n) && (r.log(e.messages.execute_positive), n(i))
                }, o.getSophiaFeatures = function(t, n, i) {
                    var a;
                    a = function(a) {
                        var s = t.campaigns.some(function(e) {
                            return a.releases.some(function(t) {
                                return parseInt(t.bit_index, 10) === parseInt(e.bit, 10) && (t.release_name === e.release && t.features.indexOf(e.feature) !== -1)
                            })
                        });
                        r.log(e.messages.get_features_status, s), s ? (r.log(e.messages.execute_positive), o.executePositiveCallback(n, a)) : o.executeNegativeCallback(i, a)
                    }, o.checkCachedSophiaResponse(t, a, i)
                }, o.callSophiaAPI = function(t, i, a) {
                    var s, l, c = {},
                        u = window.adobeIMS.getClientID();
                    l = o.isImsProduction() ? e.sophia.environment.production : e.sophia.environment.stage, r.log(e.messages.ims_environment, o.isImsProduction() ? e.messages.prod : e.messages.stage), r.log(e.messages.sophia_environment, l), s = "?clientId=" + u, s += "&cchClientLanguage=" + t.language,
                        c["x-api-key"] = u, o.isLoggedIn() ? c.Authorization = "Bearer " + window.adobeIMS.getAccessToken() : s += "&rf=" + o.getReleaseFlagFromCookie(), r.log(e.messages.get_sophia_features_endpoint, e.sophia.protocol + "://" + l + e.sophia.api + s), r.log(e.messages.get_sophia_features_headers, c), n.get({
                            endpoint: e.sophia.protocol + "://" + l + e.sophia.api + s,
                            headers: c,
                            success: function(t) {
                                t && t.length ? (r.log(e.messages.get_sophia_features_success, JSON.parse(t)), r.log(e.messages.set_sophia_features_cache), window.sessionStorage.setItem(e.sophia.sessionItem, t), t = JSON.parse(t), o.executePositiveCallback(i, t)) : (r.error(e.messages.error_sophia_features, e.messages.empty), o.executeNegativeCallback(a, t))
                            },
                            error: function(t) {
                                r.error(e.messages.error_sophia_features, t), o.executeNegativeCallback(a)
                            }
                        })
                }, a.checkFeatures = function(t, n, i) {
                    if (o.areInitConditionsMet(t)) return t = o.mapConfig(t), o.isValidConfig(t, n, i) ? void o.getSophiaFeatures(t, n, i) : void r.error(e.messages.config_invalid)
                }, a.getUserFeatures = function(e, n, i) {
                    if (o.areInitConditionsMet(e)) return !!e.language && (!!t.isFunction(n) && (!("undefined" != typeof i && !t.isFunction(i)) && void o.checkCachedSophiaResponse(e, n, i)))
                }, a.clearCache = function() {
                    window.sessionStorage && (r.log(e.messages.clear_sophia_features_cache), window.sessionStorage.removeItem(e.sophia.sessionItem))
                }, a
            }(n, e, t, i), window.adobeUserFeatures = o
        }(function() {
            return "undefined" != typeof i ? i : {}
        }(), function() {
            return "undefined" != typeof s ? s : {}
        }()), N = window.adobeUserFeatures, R = function(e, t, n, i, o, a, r, s) {
            var l = {},
                c = t(),
                u = {
                    event: {
                        dataReady: !1,
                        userReady: !1,
                        checked: !1,
                        constraint: function() {
                            var e;
                            this.dataReady && this.userReady && !this.checked && (this.checked = !0, c.log("applauncher config toggle:", u.config.toggle), c.log("applauncher config globalnav:", u.config.globalnav), c.log("applauncher config supported locale:", u.config.localeSupported), u.isConfigurationReady() ? (l.loadAssets(), e = document.querySelector(s.primaryNavigation.applauncher), e instanceof HTMLElement && (e.classList.remove(s.modifiers.isEmpty), r.reflow())) : c.log("applauncher config constraint is false"))
                        }
                    },
                    loaded: {
                        cssReady: !1,
                        jsReady: !1,
                        checked: !1,
                        constraint: function() {
                            this.cssReady && this.jsReady && !this.checked && (this.checked = !0, l.render())
                        }
                    },
                    config: {
                        toggle: e.applauncher.enabled,
                        globalnav: !0,
                        localeSupported: !1,
                        consent: !1
                    },
                    locale: void 0,
                    environment: e.applauncher.environment,
                    version: e.applauncher.version,
                    theme: void 0
                };
            return u.isConfigurationReady = function() {
                return u.config.toggle && u.config.globalnav && u.config.localeSupported
            }, u.attachApplauncherEventListeners = function() {
                var e, t, n, r;
                e = document.querySelector(s.primaryNavigation.applauncherModifier), e instanceof HTMLElement && (e.addEventListener("keydown", function(e) {
                    e.keyCode !== a.UP && e.keyCode !== a.DOWN || e.preventDefault()
                }), n = new MutationObserver(function(n) {
                    n.forEach(function(n) {
                        "true" === e.getAttribute("aria-expanded") && (t = e.querySelector(s.primaryNavigation.applauncherSpectrumDialogue), t instanceof HTMLElement && t.setAttribute("data-gnav-scrollable", "all"))
                    })
                }), r = {
                    attributes: !0,
                    attributeFilter: ["aria-expanded"]
                }, n.observe(e, r), o.init({
                    onInstantDownScroll: function() {
                        "true" === e.getAttribute("aria-expanded") && !i.isEmptyObject(u.applauncherInstance) && i.isFunction(u.applauncherInstance.collapse) && u.applauncherInstance.collapse()
                    }
                }))
            }, u.getApplauncherLocale = function(e) {
                var t, n = {
                    africa: "en_US",
                    at: "de_DE",
                    au: "en_US",
                    be_en: "en_US",
                    be_fr: "fr_FR",
                    be_nl: "nl_NL",
                    bg: void 0,
                    br: "pt_BR",
                    ca: "en_US",
                    ca_fr: "fr_FR",
                    ch_de: "de_DE",
                    ch_fr: "fr_FR",
                    ch_it: "it_IT",
                    cis_en: "en_US",
                    cis_ru: "ru_RU",
                    cn: "zh_CN",
                    cy_en: "en_US",
                    cz: "cs_CZ",
                    de: "de_DE",
                    dk: "da_DK",
                    eeurope: "en_US",
                    ee: void 0,
                    en: "en_US",
                    es: "es_ES",
                    fi: "fi_FI",
                    fr: "fr_FR",
                    gr_en: "en_US",
                    hk_en: "en_US",
                    hk_zh: "zh_TW",
                    hr: void 0,
                    hu: void 0,
                    ie: "en_US",
                    il_en: "en_US",
                    il_he: void 0,
                    in: "en_US",
                    it: "it_IT",
                    jp: "ja_JP",
                    kr: "ko_KR",
                    la: "es_ES",
                    lt: void 0,
                    lu_de: "de_DE",
                    lu_en: "en_US",
                    lu_fr: "fr_FR",
                    lv: void 0,
                    mena_ar: void 0,
                    mena_en: "en_US",
                    mena_fr: "fr_FR",
                    mt: "en_US",
                    mx: "es_ES",
                    nl: "nl_NL",
                    no: "nb_NO",
                    nz: "en_US",
                    pl: "pl_PL",
                    pt: "pt_PT",
                    ro: void 0,
                    rs: void 0,
                    ru: "ru_RU",
                    se: "sv_SE",
                    sea: "en_US",
                    sg: "en_US",
                    si: void 0,
                    sk: void 0,
                    tr: "tr_TR",
                    tw: "zh_TW",
                    ua: "uk_UA",
                    uk: "en_US"
                };
                return "string" == typeof e && e.length && (t = n[e]), t
            }, l.init = function(e) {
                return !e || i.isEmptyObject(e) ? void c.error("applauncher has no config") : ("boolean" == typeof e.toggle && (u.config.toggle = e.toggle, c.log("applauncher config toggle:", u.config.toggle)), "string" == typeof e.theme && e.theme.length && (u.theme = e.theme, c.log("applauncher theme:", u.theme)), "string" == typeof e.locale && e.locale.length && (u.locale = u.getApplauncherLocale(e.locale), c.log("applauncher locale:", u.locale), u.config.localeSupported = "string" == typeof u.locale && !!u.locale.length), "boolean" == typeof e.initGlobalnav && (u.config.globalnav = e.initGlobalnav, c.log("applauncher config globalnav:", u.config.globalnav)), void delete this.init)
            }, l.setEventDataReady = function(e) {
                u.isConfigurationReady() && ("boolean" == typeof e && (u.event.dataReady = e, c.log("applauncher event data ready:", u.event.dataReady)), u.event.constraint())
            }, l.setEventUserReady = function(e) {
                u.isConfigurationReady() && ("boolean" == typeof e && (u.event.userReady = e, c.log("applauncher event user ready:", u.event.userReady)), u.event.constraint())
            }, l.setVersion = function(e) {
                u.isConfigurationReady() && "string" == typeof e && e.length && (u.version = e, c.log("applauncher version:", u.version))
            }, l.setConsent = function(e) {
                "boolean" == typeof e && ("object" == typeof u.applauncherInstance && !i.isEmptyObject(u.applauncherInstance) && i.isFunction(u.applauncherInstance.setUserConsent) && u.applauncherInstance.setUserConsent(e), u.config.consent = e)
            }, l.loadAssets = function() {
                function t() {
                    o instanceof HTMLElement && o.parentNode instanceof HTMLElement && o.parentNode.removeChild(o), c.log("applauncher assets could not be loaded")
                }
                var o = document.querySelector(s.primaryNavigation.applauncher);
                c.log("applauncher assets are loading"), n.loadResource({
                    path: i.formatString(e.applauncher.cdn, [u.environment, u.version, "js"]),
                    type: "script",
                    id: e.applauncher.assetID.js,
                    async: !0,
                    callback: function() {
                        u.loaded.jsReady = !0, u.loaded.constraint()
                    },
                    error: t
                }), n.loadResource({
                    path: i.formatString(e.applauncher.cdn, [u.environment, u.version, "css"]),
                    type: "style",
                    id: e.applauncher.assetID.css,
                    async: !0,
                    callback: function() {
                        u.loaded.cssReady = !0, u.loaded.constraint()
                    },
                    error: t
                }), setTimeout(function() {
                    u.loaded.cssReady && u.loaded.jsReady || (u.loaded.checked = !0, t())
                }, e.applauncher.assetMaxWaitTime)
            }, l.render = function() {
                var t, o;
                i.isFunction(window.AppLauncher) && (t = {
                    target: document.querySelector(s.primaryNavigation.applauncher),
                    className: i.removeSelectorIdentifier(s.primaryNavigation.applauncherModifier),
                    analyticsContext: e.applauncher.analyticsContext,
                    env: e.applauncher.environment,
                    locale: u.locale,
                    variant: e.applauncher.variant,
                    hasUserConsent: u.config.consent,
                    onReady: function() {
                        u.attachApplauncherEventListeners()
                    }
                }, u.theme && (t.theme = u.theme), o = n.getParamValuesFromCookie({
                    cookieName: window.encodeURIComponent(e.misc.marketingCloudCookie),
                    paramsSeparator: "|",
                    paramsStartIndex: 1,
                    paramName: e.misc.marketingIdParam
                }), o && (t.analyticsContext.event.visitor_guid = o), u.applauncherInstance = window.AppLauncher(t), c.log("applauncher was rendered"))
            }, l
        }(o, r, c, i, u, h, S, a), D = function(e, t, n, i, o) {
            var a = {},
                r = t(),
                s = {
                    event: new n.Events,
                    author: {
                        dataReady: !1,
                        checked: !1,
                        constraint: function() {
                            this.dataReady && !this.checked && (this.checked = !0, s.isConfigurationReady() ? a.loadAssets() : r.log("Jarvis config constraint is false"))
                        }
                    },
                    loaded: {
                        cssReady: !1,
                        jsReady: !1,
                        checked: !1,
                        constraint: function() {
                            this.cssReady && this.jsReady && !this.checked && (this.checked = !0, s.renderable.isRenderable = !0, s.renderable.constraint())
                        }
                    },
                    renderable: {
                        isRenderable: !1,
                        isConsentGiven: !1,
                        checked: !1,
                        constraint: function() {
                            this.isRenderable && this.isConsentGiven && !this.checked && (this.checked = !0, a.render())
                        }
                    },
                    config: {
                        consent: !1,
                        surfaceName: void 0,
                        surfaceVersion: void 0,
                        onReady: void 0,
                        onError: void 0,
                        openExistingChat: void 0,
                        closeExistingChat: void 0
                    },
                    locale: {
                        language: e.jarvis.locale.language,
                        region: e.jarvis.locale.region
                    },
                    assetsSource: e.jarvis.source,
                    environment: e.jarvis.environment,
                    version: e.jarvis.version,
                    newChatEnabled: void 0
                };
            return s.isConfigurationReady = function() {
                return !!s.config.surfaceName && !!s.config.surfaceVersion
            }, s.setJarvisLocale = function(e) {
                var t, n = {
                    africa: "en_ZA",
                    at: "de_AT",
                    au: "en_AU",
                    be_en: "en_BE",
                    be_fr: "fr_BE",
                    be_nl: "nl_BE",
                    bg: "bg_BG",
                    br: "pt_BR",
                    ca: "en_CA",
                    ca_fr: "fr_CA",
                    ch_de: "de_CH",
                    ch_fr: "fr_CH",
                    ch_it: "it_CH",
                    cis_en: "en_CIS",
                    cis_ru: "en_RU",
                    cn: "zh_CN",
                    cy_en: "en_CY",
                    cz: "cs_CZ",
                    de: "de_DE",
                    dk: "da_DK",
                    eeurope: void 0,
                    ee: "et_EE",
                    en: "en_US",
                    es: "es_ES",
                    fi: "fi_FI",
                    fr: "fr_FR",
                    gr_en: "en_GR",
                    hk_en: "en_HK",
                    hk_zh: "zh_HK",
                    hr: "hr_HR",
                    hu: "hu_HU",
                    ie: "en_IE",
                    il_en: "en_IL",
                    il_he: "he_IL",
                    in: "en_IN",
                    it: "it_IT",
                    jp: "ja_JP",
                    kr: "ko_KR",
                    la: "es_LA",
                    lt: "lt_LT",
                    lu_de: "de_LU",
                    lu_en: "en_LU",
                    lu_fr: "fr_LU",
                    lv: "lv_LV",
                    mena_ar: "ar_MENA",
                    mena_en: "en_MENA",
                    mena_fr: "fr_MENA",
                    mt: "en_MT",
                    mx: "es_MX",
                    nl: "nl_NL",
                    no: "nb_NO",
                    nz: "en_NZ",
                    pl: "pl_PL",
                    pt: "pt_PT",
                    ro: "ro_RO",
                    rs: "sr_RS",
                    ru: "ru_RU",
                    se: "sv_SE",
                    sea: "en_SEA",
                    sg: "en_SEA",
                    si: "sl_SI",
                    sk: "sk_SK",
                    tr: "tr_TR",
                    tw: "zh_TW",
                    ua: "uk_UA",
                    uk: "en_GB"
                };
                "string" == typeof e && e.length && (t = n[e], "string" == typeof t && t.length && (t = t.split("_"), i.isArray(t) && 2 === t.length && (s.locale = {
                    language: t[0],
                    region: t[1]
                })))
            }, s.attachJarvisEventListeners = function() {
                document.addEventListener("click", function(t) {
                    n.closest(t.target, i.formatString("[{0}]", [e.jarvis.triggerAttribute])) && (t.preventDefault(), a.openChat(t))
                })
            }, s.analytics = {
                isAnalyticsAvailable: function() {
                    return i.isObject(window.digitalData) && !i.isEmptyObject(window._satellite)
                },
                getBaseEventObject: function(e) {
                    var t = {};
                    return i.isEmptyObject(e) || (t = {
                        chatConversationId: e["event.context_guid"],
                        chatConversationSessionId: e["event.session_guid"],
                        chatWorkflow: e["event.workflow"],
                        chatCategory: e["event.category"],
                        chatSubcategory: e["event.subcategory"],
                        chatType: e["event.type"],
                        chatSubtype: e["event.subtype"],
                        chatUserguid: e["event.user_guid"],
                        chatLanguage: e["event.language"],
                        chatPagename: e["event.pagename"],
                        chatVisitorguid: e["event.visitor_guid"],
                        chatUrl: e["event.url"],
                        chatOrgguid: e["event.org_guid"],
                        chatReferrer: e["event.referrer"],
                        chatClientId: e["source.client_id"],
                        chatSourceName: e["source.name"],
                        chatPlatform: e["source.platform"],
                        chatContentName: e["content.name"],
                        chatEnv: e["env.com.name"]
                    }), t
                },
                setChatIconRenderEvent: function(e) {
                    this.isAnalyticsAvailable() && !i.isEmptyObject(e) && (window.digitalData.primaryEvent = {
                        eventInfo: {
                            eventName: i.formatString("chat:{0}:{1}:{2}:{3}:{4}", [e["event.workflow"] || "", e["event.subcategory"] || "", e["event.subtype"] || "", e["content.name"] || "", e["event.type"] || ""]),
                            eventAction: i.formatString("{0}:{1}:{2}", [e["event.subcategory"] || "", e["content.name"] || "", e["event.type"] || ""])
                        }
                    }, window.digitalData.chat = {}, window.digitalData.chat.chatInfo = this.getBaseEventObject(e), window.digitalData.chat.chatInfo.chatConversationUnread = e["content.name"], this.sendAnalyticsEvent())
                },
                setChatIconClickEvent: function(e) {
                    this.isAnalyticsAvailable() && !i.isEmptyObject(e) && (window.digitalData.primaryEvent = {
                        eventInfo: {
                            eventName: i.formatString("chat:{0}:{1}:{2}:{3}:{4}", [e["event.workflow"] || "", e["event.subcategory"] || "", e["event.subtype"] || "", e["content.name"] || "", e["event.type"] || ""]),
                            eventAction: i.formatString("{0}:{1}:{2}:{3}", [e["event.subcategory"] || "", e["event.subtype"] || "", e["content.name"] || "", e["event.type"] || ""])
                        }
                    }, window.digitalData.chat = {}, window.digitalData.chat.chatInfo = this.getBaseEventObject(e), window.digitalData.chat.chatInfo.chatConversationUnread = e["content.name"], this.sendAnalyticsEvent())
                },
                setChatErrorEvent: function(e) {
                    this.isAnalyticsAvailable() && !i.isEmptyObject(e) && (window.digitalData.primaryEvent = {
                        eventInfo: {
                            eventName: i.formatString("chat:{0}:{1}:{2}:error", [e["event.workflow"] || "", e["event.subtype"] || "", e["event.type"] || ""]),
                            eventAction: i.formatString("{0}:{1}:{2}:error", [e["event.subcategory"] || "", e["event.subtype"] || "", e["event.type"] || ""])
                        }
                    }, window.digitalData.chat = {}, window.digitalData.chat.chatInfo = this.getBaseEventObject(e), window.digitalData.chat.chatInfo.chatErrorCode = e["event.error_code"], window.digitalData.chat.chatInfo.chatErrorType = e["event.error_type"], window.digitalData.chat.chatInfo.chatErrorDescription = e["event.error_desc"], this.sendAnalyticsEvent())
                },
                setPrimaryEvent: function(e) {
                    this.isAnalyticsAvailable() && !i.isEmptyObject(e) && (window.digitalData.primaryEvent = {
                        eventInfo: {
                            eventName: i.formatString("chat:{0}:{1}:{2}:{3}", [e["event.workflow"] || "", e["content.name"] || "", e["event.subtype"] || "", e["event.type"] || ""]),
                            eventAction: i.formatString("{0}:{1}:{2}:{3}", [e["event.subcategory"] || "", e["content.name"] || "", e["event.subtype"] || "", e["event.type"] || ""])
                        }
                    }, window.digitalData.chat = {}, window.digitalData.chat.chatInfo = this.getBaseEventObject(e), this.sendAnalyticsEvent())
                },
                setProductEvent: function(e) {
                    this.isAnalyticsAvailable() && !i.isEmptyObject(e) && (window.digitalData.primaryEvent = {
                        eventInfo: {
                            eventName: i.formatString("chat:{0}:{1}:{2}:{3}", [e["event.workflow"] || "", e["content.name"] || "", e["event.subtype"] || "", e["event.type"] || ""]),
                            eventAction: i.formatString("{0}:{1}:{2}:{3}", [e["event.subcategory"] || "", e["content.name"] || "", e["event.subtype"] || "", e["event.type"] || ""])
                        }
                    }, window.digitalData.chat = {
                        chatInfo: {
                            primaryProduct: {
                                productName: e["event.subtype"]
                            }
                        }
                    }, this.sendAnalyticsEvent())
                },
                setSurveyFeedbackEvent: function(e) {
                    this.isAnalyticsAvailable() && !i.isEmptyObject(e) && (window.digitalData.primaryEvent = {
                        eventInfo: {
                            eventName: i.formatString("chat:{0}:{1}:{2}:{3}:{4}", [e["event.workflow"] || "", e["content.name"] || "", e["event.subtype"] || "", e["event.type"] || "", e["content.id"] || ""]),
                            eventAction: i.formatString("{0}:{1}:{2}:{3}", [e["event.subcategory"] || "", e["content.name"] || "", e["event.subtype"] || "", e["event.type"] || ""])
                        }
                    }, this.sendAnalyticsEvent())
                },
                isEventSuppressed: function(e) {
                    var t = !1;
                    return ("init" === e["event.workflow"] && "request" === e["event.type"] || "Chat" === e["event.workflow"] && "window" === e["event.subtype"] && "load" === e["event.type"]) && (t = !0), t
                },
                sendAnalyticsEvent: function() {
                    this.isAnalyticsAvailable() && i.isFunction(window._satellite.track) && (r.log("Jarvis analytics: DTM data sent by the Global Navigation:", {
                        "digitalData.primaryEvent": window.digitalData.primaryEvent,
                        "digitalData.chat": window.digitalData.chat
                    }), window._satellite.track("event"))
                }
            }, a.init = function(e) {
                var t = ["onReady", "onError", "openExistingChat", "closeExistingChat"];
                return !e || i.isEmptyObject(e) ? void r.error("jarvis has no config") : ("string" == typeof e.surfaceName && e.surfaceName.length && (s.config.surfaceName = e.surfaceName), "string" == typeof e.surfaceVersion && e.surfaceVersion.length && (s.config.surfaceVersion = e.surfaceVersion), "string" == typeof e.locale && e.locale.length && s.setJarvisLocale(e.locale), t.forEach(function(t) {
                    i.isFunction(e[t]) && (s.config[t] = e[t])
                }), void delete this.init)
            }, a.loadAssets = function() {
                function t() {
                    o || (o = !0, r.log("Jarvis assets could not be loaded"), s.event.dispatchEvent(e.jarvis.loadFailed))
                }
                var o = !1;
                r.log("Jarvis assets are loading"), n.loadResource({
                    path: i.formatString(e.jarvis.cdn, [s.assetsSource, s.version, "js"]),
                    type: "script",
                    id: e.jarvis.assetID.js,
                    async: !0,
                    callback: function() {
                        i.isEmptyObject(window.AdobeMessagingExperienceClient) || (a.interface = window.AdobeMessagingExperienceClient), s.loaded.jsReady = !0, s.loaded.constraint()
                    },
                    error: t
                }), n.loadResource({
                    path: i.formatString(e.jarvis.cdn, [s.assetsSource, s.version, "css"]),
                    type: "style",
                    id: e.jarvis.assetID.css,
                    async: !0,
                    callback: function() {
                        s.loaded.cssReady = !0, s.loaded.constraint()
                    },
                    error: t
                }), setTimeout(function() {
                    s.loaded.cssReady && s.loaded.jsReady || (s.loaded.checked = !0, t())
                }, e.jarvis.assetMaxWaitTime)
            }, a.render = function() {
                var t, o;
                o = n.getParamValuesFromCookie({
                    cookieName: window.encodeURIComponent(e.misc.marketingCloudCookie),
                    paramsSeparator: "|",
                    paramsStartIndex: 1,
                    paramName: e.misc.marketingIdParam
                }), t = {
                    appid: s.config.surfaceName,
                    appver: s.config.surfaceVersion,
                    appType: "Web",
                    language: s.locale.language,
                    region: s.locale.region,
                    env: s.environment,
                    cookiesEnabled: s.config.consent,
                    cookies: {
                        mcid: o
                    },
                    clientId: i.isFunction(i.getPropertySafely(window, "adobeIMS.getClientID")) ? window.adobeIMS.getClientID() : "",
                    callbacks: {
                        initCallback: function(t) {
                            s.newChatEnabled = this.interface.isAdobeMessagingClientEnabled(), s.attachJarvisEventListeners(), s.event.dispatchEvent(e.events.jarvis_ready, t), i.isFunction(s.config.onReady) && s.config.onReady.apply(null, [s.newChatEnabled, t])
                        }.bind(this),
                        onReadyCallback: function() {},
                        initErrorCallback: function(t) {
                            i.isFunction(s.config.onError) && s.config.onError.apply(null, arguments), s.event.dispatchEvent(e.jarvis.loadFailed)
                        },
                        signInProvider: function() {
                            window.adobeIMS.signIn()
                        },
                        analyticsCallback: function(e) {
                            var t = i.getPropertySafely(e, "events.0.data");
                            r.log("Jarvis analytics: Ingest data from the Jarvis analytics callback method:", e), i.isObject(t) && !s.analytics.isEventSuppressed(t) && ("launch" === i.safeToLowerCase(t["event.subcategory"]) && "init" === i.safeToLowerCase(t["event.workflow"]) ? "render" === i.safeToLowerCase(t["event.type"]) ? s.analytics.setChatIconRenderEvent(t) : "click" === i.safeToLowerCase(t["event.type"]) && s.analytics.setChatIconClickEvent(t) : "auth-subproduct" === i.safeToLowerCase(t["content.name"]) ? s.analytics.setProductEvent(t) : "5-star-survey" === i.safeToLowerCase(t["content.name"]) ? s.analytics.setSurveyFeedbackEvent(t) : t.hasOwnProperty("event.error_code") && t.hasOwnProperty("event.error_type") ? s.analytics.setChatErrorEvent(t) : s.analytics.setPrimaryEvent(t))
                        }
                    }
                }, !i.isEmptyObject(window.adobeIMS) && i.isFunction(window.adobeIMS.isSignedInUser) && window.adobeIMS.isSignedInUser() && (t.accessToken = "Bearer " + window.adobeIMS.getAccessToken()), this.interface.initialize(t), r.log("Jarvis is rendered with config:", t)
            }, a.isChatOpen = function() {
                var e = a.interface && i.isFunction(a.interface.isAdobeMessagingClientInitialized) && a.interface.isAdobeMessagingClientInitialized(),
                    t = e && i.isFunction(a.interface.getMessagingExperienceState) && "hidden" !== a.interface.getMessagingExperienceState().windowState;
                return t
            }, a.openChat = function(e) {
                var t, n;
                "boolean" == typeof s.newChatEnabled && s.newChatEnabled ? !a.isChatOpen() && i.isFunction(a.interface.openMessagingWindow) && (r.log("Open new chat"), e instanceof Event ? (t = e.target.tagName.toLowerCase(), n = "img" === t ? e.target.alt.trim() : e.target.innerText.trim(), a.interface.openMessagingWindow({
                    sourceType: t,
                    sourceText: n
                })) : a.interface.openMessagingWindow({})) : i.isFunction(s.config.openExistingChat) ? (r.log("Open existing chat"), s.config.openExistingChat()) : r.log("No method to open existing chat")
            }, a.closeChat = function() {
                "boolean" == typeof s.newChatEnabled && s.newChatEnabled ? a.isChatOpen() && i.isFunction(a.interface.closeMessageWindow) && (r.log("Close new chat"), a.interface.closeMessageWindow()) : i.isFunction(s.config.closeExistingChat) ? (r.log("Close existing chat"), s.config.closeExistingChat()) : r.log("No method to close existing chat")
            }, a.addEventListener = function(e, t) {
                "string" == typeof e && e.length && i.isFunction(t) && s.event.addEventListener(e, t)
            }, a.setConsent = function(e) {
                "boolean" == typeof e && (s.config.consent = e, r.log("Jarvis tracking consent:", s.config.consent), s.renderable.isConsentGiven = s.config.consent, s.renderable.constraint())
            }, a.setVersion = function(e) {
                s.isConfigurationReady() && "string" == typeof e && e.length && (s.version = e, r.log("Jarvis version:", s.version))
            }, a.setEventDataReady = function(e) {
                s.isConfigurationReady() && ("boolean" == typeof e && (s.author.dataReady = e, r.log("Jarvis author data ready:", s.author.dataReady)), s.author.constraint())
            }, a
        }(o, r, c, i, a), F = function(e, t, n, i, o, a, r, s, l, c, u, d, p, h, f, m, g, v, y, b, S, w, E, k, C, L) {
            var P = r(),
                I = {
                    event: new l.Events,
                    flags: {},
                    ready: {
                        profileData: !1,
                        profileLabels: !1,
                        authoredData: !1,
                        checked: !1,
                        checkConstraint: function() {
                            this.authoredData && this.profileLabels && this.profileData && !this.checked && (this.checked = !0, I.event.dispatchEvent(i.events.data_ready, {
                                loggedIn: I.isLoggedIn(),
                                userInfo: I.rawProfileData
                            }))
                        }
                    }
                },
                _ = {},
                x = {
                    ctaPrimaryButton: "primaryButton",
                    ctaJarvisButton: "jarvisButton"
                };
            return I.getAuthoredContent = function(e, t) {
                var n, o, r, l, c = a.formatString("{0}/{1}", [i.endpoints.adobeIndex, I.globalnavLocale !== d.getDefault() ? I.globalnavLocale : ""]),
                    u = window.location.hostname;
                n = e ? e : i.endpoints.globalnavContent, u.indexOf(i.strings.studentsDomain) > -1 && 0 !== n.indexOf("https://") && (0 === n.indexOf("http://") ? n = n.replace("http://", "https://") : 0 === n.indexOf("//") && (n = n.replace("//", "https://"))), I.flags.initGnav ? o = "all" : I.flags.initFooter && (o = "footer"), r = a.formatString("{0}/{1}/{2}/{3}.json", [n, u, I.globalnavLocale, I.langMaster ? "langmaster" : o]), P.log(a.formatString(i.messages.requestAuthoredContent, [r])), s.get({
                    endpoint: r,
                    success: function(e) {
                        e = JSON.parse(e), P.log(i.messages.allAuthoredContent, e), I.flags.initGnav && (l = a.getPropertySafely(e, "n.m"), I.globalnavTheme = a.getPropertySafely(e, "n.d"), I.globalnavStrings = {
                            signIn: a.getPropertySafely(e, "n.l"),
                            promptMessage: a.getPropertySafely(e, "n.sp"),
                            promptTimeout: a.getPropertySafely(e, "n.t"),
                            isPromptReversed: a.getPropertySafely(e, "n.sr"),
                            hamburger: a.getPropertySafely(e, "n.n"),
                            trackingID: a.getPropertySafely(e, "n.p"),
                            search: a.getPropertySafely(e, "n.s"),
                            allResults: a.getPropertySafely(e, "n.a"),
                            advancedSearch: a.getPropertySafely(e, "n.y"),
                            advancedSearchURL: a.formatString("{0}/{1}search.html", [i.endpoints.adobeIndex, I.globalnavLocale !== d.getDefault() ? I.globalnavLocale + "/" : ""]),
                            adobeIndex: c,
                            more: a.getPropertySafely(e, "n.r"),
                            searchResults: a.getPropertySafely(e, "n.sr"),
                            productSuggestions: a.getPropertySafely(e, "n.ps"),
                            searchSuggestions: a.getPropertySafely(e, "n.ss"),
                            clearSearch: a.getPropertySafely(e, "n.cs"),
                            queryPrompt: a.getPropertySafely(e, "n.qp"),
                            resultsFoundPrompt: a.getPropertySafely(e, "n.np"),
                            advancedSearchPrompt: a.getPropertySafely(e, "n.ns")
                        }, I.searchLabels = a.getPropertySafely(e, "n"), I.globalnavMenu = I.parseGlobalnavContent(l, t), I.profileLabels = a.getPropertySafely(e, "p"), C.setVersion(a.getPropertySafely(e, "n.v")), I.flags.initJarvis && L.setVersion(a.getPropertySafely(e, "n.j"))), I.flags.initFooter && !a.isEmptyObject(e.f) && (I.footernavData = I.parseFooternavContent(e.f), I.footernavData.adobeIndex = c), I.globalnavMenu || I.footernavData ? (I.ready.authoredData = !0, I.ready.profileLabels = !0, a.isEmptyObject(I.profileLabels) && (I.flags.initProfile = !1, I.removeSignInElement()), I.ready.checkConstraint(), P.log(i.messages.globalnavAuthoredContent, I.globalnavMenu || I.footernavData)) : P.error(i.messages.noAuthoredContent)
                    }.bind(this),
                    error: function(e) {
                        P.error("error globalnav content")
                    }.bind(this)
                })
            }, I.setFlags = function(e) {
                var t, n, i, r, s, l;
                I.flags.progressiveEnhancementEnabled = e.progressiveEnhancement, n = document.querySelector(o.primaryNavigation.wrapper), I.flags.initGnavWithProgressiveEnhancement = I.flags.progressiveEnhancementEnabled && n instanceof HTMLElement, I.flags.initGnavWithTarget = !!(!I.flags.progressiveEnhancementEnabled && e.target && e.target instanceof HTMLElement), I.flags.initGnav = I.flags.initGnavWithProgressiveEnhancement || I.flags.initGnavWithTarget, I.flags.initProfile = ("undefined" == typeof e.profile || !!e.profile) && I.flags.initGnav, I.flags.initPrompt = I.flags.initProfile && "boolean" == typeof e.prompt && !!e.prompt, r = a.getPropertySafely(e, "jarvis.surfaceName"), s = a.getPropertySafely(e, "jarvis.surfaceVersion"), l = a.getPropertySafely(e, "jarvis.callback"), I.flags.initJarvis = !a.isEmptyObject(e.jarvis) && "string" == typeof r && !!r.length && "string" == typeof s && !!s.length && ("undefined" == typeof l || a.isFunction(l)), I.flags.hasCustomSignIn = a.isFunction(e.signIn), i = document.querySelector(o.footerNavigation.wrapper), I.flags.initFooterWithProgressiveEnhancement = I.flags.progressiveEnhancementEnabled && i instanceof HTMLElement, I.flags.initFooterWithTarget = !I.flags.progressiveEnhancementEnabled && e.footer && e.footer.target && e.footer.target instanceof HTMLElement, I.flags.initFooter = I.flags.initFooterWithProgressiveEnhancement || I.flags.initFooterWithTarget, t = I.flags.initGnav && (I.flags.initGnavWithProgressiveEnhancement ? n : e.target), I.flags.isGnavAtTop = I.isElementAtTop(t), I.flags.stickyEnabled = void 0 === e.disableSticky || !e.disableSticky, I.flags.removeSpacingAfterRender = I.flags.initGnavWithTarget && (!I.flags.stickyEnabled || I.flags.stickyEnabled && !I.flags.isGnavAtTop), I.flags.customBackground = a.getPropertySafely(e, "theme.mBackgroundColor"), I.flags.highlightWithId = !!e.highlight && !!e.highlight.id && "string" == typeof e.highlight.id, I.flags.highlightWithParser = !I.flags.highlightWithId && ("undefined" == typeof e.highlight || "undefined" == typeof e.highlight.autoDetect || e.highlight.autoDetect)
            }, I.setProfileDataByImsState = function() {
                setTimeout(function() {
                    I.event.dispatchEvent(i.events.ims_ready, {
                        loggedIn: I.isLoggedIn(),
                        userProfile: window.adobeIMS.getUserProfile()
                    })
                }, 0), I.isLoggedIn() ? I.getProfileData() : (I.ready.profileData = !0, I.ready.checkConstraint())
            }, I.getProfileData = function() {
                function e(e) {
                    I.rawProfileData = e, I.profileData = I.parseProfileData(I.rawProfileData), I.event.dispatchEvent(i.events.profile_data_ready, {
                        loggedIn: I.isLoggedIn(),
                        userInfo: I.rawProfileData,
                        profile: I.profileData
                    }), I.ready.profileData = !0, I.ready.checkConstraint()
                }
                var t = {
                    Authorization: "Bearer " + window.adobeIMS.getAccessToken()
                };
                p.isIE() && (t["Cache-Control"] = "no-cache", t.Pragma = "no-cache", t.Expires = "-1"), s.get({
                    endpoint: i.endpoints.profileContent,
                    headers: t,
                    success: function(t) {
                        e(JSON.parse(t))
                    }.bind(this),
                    error: function(t) {
                        e({
                            user: {
                                avatar: i.profile.defaultAvatar
                            }
                        })
                    }.bind(this)
                })
            }, I.imsReadyProfileActions = function() {
                function e() {
                    var e = 0,
                        t = !1,
                        n = setInterval(function() {
                            return window.adobeIMS && window.adobeIMS.isReady() ? void clearInterval(n) : t ? void clearInterval(n) : 30 === ++e ? t ? void P.log("imslib.error already triggered") : (P.warn("imslib.error from timeout"), t = !0, clearInterval(n), I.flags.initProfile = !1, I.ready.profileData = !0, I.removeSignInElement(), void I.ready.checkConstraint()) : void 0
                        }, 100)
                }
                var t, n, i;
                I.flags.initProfile ? window.adobeIMS ? window.adobeIMS.isReady() ? (P.log("imslib.ready from method"), I.setProfileDataByImsState()) : (e(), document.addEventListener(a.getPropertySafely(window.adobeIMS, "DomEvents.READY"), function(e) {
                    P.log("imslib.ready from event"), I.setProfileDataByImsState()
                })) : (n = 0, i = !1, t = setInterval(function() {
                    return P.log("script is cached; waiting for IMS to load", n, i), i ? void clearInterval(t) : window.adobeIMS ? (i = !0, clearInterval(t), void(window.adobeIMS.isReady() ? (P.log("imslib.ready from method from cached script"), I.setProfileDataByImsState()) : (e(), document.addEventListener(a.getPropertySafely(window.adobeIMS, "DomEvents.READY"), function(e) {
                        P.log("imslib.ready from event from cached script"), I.setProfileDataByImsState()
                    })))) : 20 === ++n ? (clearInterval(t), console.error("ims not found"), I.flags.initProfile = !1, I.ready.profileData = !0, I.removeSignInElement(), void I.ready.checkConstraint()) : void 0
                }, 100)) : (I.ready.profileData = !0, I.ready.checkConstraint())
            }, I.parseProfileData = function(e) {
                var t = window.adobeIMS.getUserProfile(),
                    n = a.getPropertySafely(e, "user.avatar"),
                    i = a.getPropertySafely(e, "sections.manage.items.team.id"),
                    o = a.getPropertySafely(e, "sections.manage.items.enterprise.id"),
                    r = a.getPropertySafely(e, "user.name.id"),
                    s = {};
                return s.id = t.userId, s.first_name = t.first_name, s.last_name = t.last_name, s.display_name = t.displayName, s.name_id = r, s.email = t.email, s.avatar = n, s.teamAdmin = !!i, s.enterpriseAdmin = !!o, s
            }, I.getProfileTheme = function(e) {
                var t, n;
                return t = a.getPropertySafely(e, "profile.theme"), n = "undefined" != typeof t ? a.formatString("theme-{0}", [t]) : void 0
            }, I.initProfile = function(e, t) {
                var n = document.querySelector(o.primaryNavigation.actionLogin);
                I.flags.initProfile && (I.isLoggedIn() ? (S.init({
                    target: n,
                    locale: I.globalnavLocale,
                    class: a.removeSelectorIdentifier(o.primaryNavigation.profile),
                    accountURL: i.endpoints.accountURL,
                    accountProfileURL: i.endpoints.accountProfileURL,
                    labels: I.profileLabels,
                    data: I.profileData,
                    theme: e.theme,
                    tracking: i.tracking,
                    localMenu: e.localMenu
                }), S.addEventListener(S.events.sign_out, function() {
                    I.event.dispatchEvent(i.events.profile_sign_out)
                })) : (n && n instanceof HTMLElement && n.addEventListener("click", function(e) {
                    e.preventDefault(), I.event.dispatchEvent(i.events.profile_sign_in), I.flags.hasCustomSignIn ? t(window.adobeIMS.signIn.bind(window.adobeIMS)) : window.adobeIMS.signIn()
                }), setTimeout(function() {
                    I.event.dispatchEvent(i.events.profile_data_ready, {
                        loggedIn: !1,
                        userInfo: null,
                        profile: null
                    })
                }, 0)))
            }, I.initPrompt = function() {
                I.flags.initPrompt && I.isCCPaidAnonymous() && w.init(document.querySelector(o.primaryNavigation.actions), {
                    tracking: i.tracking,
                    strings: I.globalnavStrings,
                    timeout: I.globalnavStrings.promptTimeout,
                    isReversed: I.globalnavStrings.isPromptReversed
                })
            }, I.isCCPaidAnonymous = function() {
                var e, t = 0,
                    n = !1;
                return I.isLoggedIn() || (e = c.getValue(i.prompt.dtmPaidCookie), "string" == typeof e && e.length && (t = e.split(",").filter(function(e) {
                    return e === i.prompt.dtmCCPaidSegment
                }).length, n = 1 === t)), P.log("Anonymous user is paid: ", n), n
            }, I.removeSignInElement = function() {
                var e = document.querySelector(o.primaryNavigation.actionLogin);
                e && e instanceof HTMLElement && e.parentNode.removeChild(e)
            }, I.isLoggedIn = function() {
                return !a.isEmptyObject(window.adobeIMS) && a.isFunction(window.adobeIMS.isSignedInUser) && !a.isEmptyObject(window.adobeIMS.isSignedInUser())
            }, I.parseGlobalnavContent = function(e, t) {
                var n, i, r, s, l, c, u, d, p, h, f = ["o", "e"];
                if (e && Array.isArray(e)) {
                    for (I.flags.highlightWithParser && (u = I.getCleanUrl(window.location.href)), i = e.length, n = 0; n < i; n++)
                        if (e[n].hasSubmenu = !!e[n].c, e[n].hasMultipleColumns = !!(e[n].hasSubmenu && e[n].c.length > 1), I.flags.highlightWithId && e[n].i === t.id && (e[n].isActive = !0, I.addHighlightForProgressiveEnhancement(e[n].i)), e[n].hasSubmenu)
                            for (s = e[n].c.length, r = 0; r < s; r++)
                                for (c = e[n].c[r].c.length, l = 0; l < c; l++) {
                                    for (e[n].c[r].c[l].b === x.ctaJarvisButton ? (e[n].c[r].c[l].linkClass = a.removeSelectorIdentifier(o.primaryNavigation.submenuCta), e[n].c[r].c[l].isButton = !0, e[n].c[r].c[l].isJarvisCTA = !0) : e[n].c[r].c[l].b === x.ctaPrimaryButton ? (e[n].c[r].c[l].linkClass = a.removeSelectorIdentifier(o.primaryNavigation.submenuCta), e[n].c[r].c[l].isButton = !0) : e[n].c[r].c[l].linkClass = a.removeSelectorIdentifier(o.primaryNavigation.submenuLink), h = 0; h < f.length; h++) "undefined" != typeof e[n][f[h]] && "undefined" == typeof e[n].c[r].c[l][f[h]] && (e[n].c[r].c[l][f[h]] = void 0);
                                    I.flags.highlightWithParser && !p && (d = e[n].c[r].c[l].u, "string" == typeof d && (0 !== d.indexOf("http") && (d = a.formatString("{0}{1}", [window.location.protocol, d])), d = I.getCleanUrl(d), u === d && (e[n].isActive = !0, I.addHighlightForProgressiveEnhancement(e[n].i), p = !0)))
                                }
                    return e
                }
            }, I.addHighlightForProgressiveEnhancement = function(e) {
                var t;
                I.flags.initGnavWithProgressiveEnhancement && (t = document.querySelector(a.formatString('{0} [id="{1}"]', [o.primaryNavigation.navigation, e])), t && t instanceof HTMLElement && t.classList.add(o.modifiers.isActive))
            }, I.getCleanUrl = function(e) {
                var t, n, i;
                if ("string" == typeof e && e.length > 0) {
                    if (a.isFunction(window.URL)) try {
                        t = new URL(e)
                    } catch (e) {} else n = document.createElement("a"), n.href = e, t = n;
                    return i = !!(t && t.host && t.pathname), i && a.formatString("{0}{1}", [t.host, t.pathname])
                }
            }, I.renderGlobalnav = function(o, a) {
                var r = o.target;
                r.insertAdjacentHTML("afterend", e.render(t, {
                    m: a.menu,
                    strings: a.strings,
                    config: o,
                    profile: a.profile,
                    tracking: i.tracking
                }, {
                    globalnavContent: n
                })), r.parentNode.removeChild(r)
            }, I.attachGnavFunctionality = function(e) {
                var t, n, i, r, s, l = {};
                t = document.querySelector(o.primaryNavigation.navigation), t instanceof HTMLElement && (n = parseInt(window.getComputedStyle(t).getPropertyValue("max-width")), n && t.scrollWidth > n && t.classList.add(o.modifiers.isLarge), I.setKeyboard(), I.setSearch(e.locale), i = a.mergeObjects(e.theme, I.globalnavTheme), I.setTheme(i), I.flags.initProfile && (l.theme = I.getProfileTheme(e), l.localMenu = a.getPropertySafely(e, "profile.localMenu"), s = e.signIn, I.initProfile(l, s)), I.flags.initPrompt && I.initPrompt(), u.init({
                    onInstantUpScroll: function() {
                        r = document.querySelector(o.primaryNavigation.sticky), r instanceof HTMLElement && r.classList.remove(o.modifiers.isRetracted)
                    },
                    onInstantDownScroll: function() {
                        r = document.querySelector(o.primaryNavigation.sticky), r instanceof HTMLElement && ((1 === r.children.length && window.pageYOffset > r.offsetHeight || r.children.length > 1) && r.classList.add(o.modifiers.isRetracted), r.classList.add(o.modifiers.isScrolled)), I.keyboard.index >= 0 && (I.keyboard.closePopups(), I.keyboard.blurActiveItem()), I.closeHamburgerMenu(), S.collapse()
                    },
                    onDebouncedUpScroll: function() {
                        r = document.querySelector(o.primaryNavigation.sticky), r instanceof HTMLElement && 0 === window.pageYOffset && (r.classList.remove(o.modifiers.isScrolled), r.classList.remove(o.modifiers.isRetracted));
                    }
                }))
            }, I.buildMenu = function(t, i) {
                var a, r = document.querySelector(o.primaryNavigation.menu);
                i.config = t, a = e.render(n, i), r.innerHTML = a, I.keyboard instanceof h ? I.keyboard.reset() : I.keyboard = new h(r)
            }, I.setTheme = function(e) {
                a.isEmptyObject(e) || y.apply(e)
            }, I.setKeyboard = function() {
                var e = document.querySelector(o.primaryNavigation.navigation),
                    t = document.querySelector(o.primaryNavigation.menuWrapper),
                    n = document.querySelector(o.primaryNavigation.menu),
                    a = document.querySelector(o.primaryNavigation.hamburger);
                I.keyboard = new h(n), a.addEventListener("click", function(e) {
                    v.hideSearch(), t.classList.toggle(o.modifiers.isOpen), this.setAttribute("aria-expanded", "true" !== this.getAttribute("aria-expanded"))
                }), document.addEventListener("click", function(e) {
                    l.closest(e.target, o.primaryNavigation.menuWrapper) || I.closeHamburgerMenu()
                }), e.addEventListener("keydown", function(t) {
                    v.isVisible() && t.keyCode === f.TAB && I.loopFocusableSectionItems(e, t)
                }), t.addEventListener("keydown", function(e) {
                    e.keyCode === f.TAB && (window.innerWidth < i.breakpoints.mobile && t.classList.contains(o.modifiers.isOpen) ? (I.loopFocusableSectionItems(t, e), a.setAttribute("tabindex", "")) : a.setAttribute("tabindex", "1"))
                })
            }, I.loopFocusableSectionItems = function(e, t) {
                var n, i, o;
                e && e instanceof HTMLElement && t && t.keyCode === f.TAB && (n = e.querySelectorAll('a, button, input:not([disabled]), [tabindex]:not([tabindex="-1"])'), n = l.findItems(n, function(e) {
                    return l.isElementVisible(e)
                }), n && n.length > 0 && (i = n[0], o = n[n.length - 1], t.shiftKey ? t.target === i && (t.preventDefault(), o.focus()) : t.target === o && (t.preventDefault(), i.focus())))
            }, I.closeHamburgerMenu = function() {
                var e = document.querySelector(o.primaryNavigation.menuWrapper),
                    t = document.querySelector(o.primaryNavigation.hamburger);
                l.isElementVisible(e) && e.classList.contains(o.modifiers.isOpen) && (e.classList.remove(o.modifiers.isOpen), t.setAttribute("aria-expanded", !1), t.focus())
            }, I.showSearchCurtain = function() {
                var e, t = document.querySelector(o.primaryNavigation.searchCurtain),
                    n = document.querySelector(o.primaryNavigation.wrapper);
                t && t instanceof HTMLElement && n && n instanceof HTMLElement && (0 !== n.getBoundingClientRect().top ? (e = n.getBoundingClientRect().top + n.offsetHeight, t.style.top = a.formatString("{0}px", [e])) : t.style.top = "", n.classList.add(o.modifiers.showCurtain), n.classList.add(o.modifiers.showingCurtain), setTimeout(function() {
                    n.classList.remove(o.modifiers.showingCurtain)
                }, 100))
            }, I.hideSearchCurtain = function() {
                var e = document.querySelector(o.primaryNavigation.wrapper);
                e && e instanceof HTMLElement && (e.classList.add(o.modifiers.hidingCurtain), setTimeout(function() {
                    e.classList.remove(o.modifiers.showCurtain), e.classList.remove(o.modifiers.hidingCurtain)
                }, 100))
            }, I.setSearch = function(e) {
                var t = document.querySelector(o.primaryNavigation.menu);
                v.init({
                    searchInputPlaceholder: document.querySelector("#search_form_placeholder"),
                    searchIconPlaceholders: [document.querySelector("#search_icon_placeholder")],
                    authoredContentSearch: i.endpoints.globalnavContent,
                    tracking: i.tracking,
                    labels: I.searchLabels,
                    searchContentURL: i.endpoints.searchContent,
                    adobeIndex: i.endpoints.adobeIndex,
                    locale: e
                }), v.addEventListener(v.events.searchStart, function() {
                    t.classList.add(o.modifiers.isHidden), I.showSearchCurtain()
                }), v.addEventListener(v.events.searchEnd, function() {
                    t.classList.remove(o.modifiers.isHidden), I.hideSearchCurtain()
                }), v.addEventListener(v.events.searchEscape, function() {
                    I.closeHamburgerMenu()
                }), v.addEventListener(v.events.suggestionsOpen, function() {
                    t.classList.add(o.modifiers.isHidden)
                }), v.addEventListener(v.events.suggestionsClose, function() {
                    window.innerWidth < i.breakpoints.mobile && t.classList.remove(o.modifiers.isHidden)
                })
            }, I.setTopSpacing = function(e) {
                var t, n, i, r;
                n = document.querySelector(o.primaryNavigation.spacing), n instanceof HTMLElement || (i = e && e.parentElement, i instanceof HTMLElement && (r = a.isValidHex(I.flags.customBackground) ? a.formatString(' style="background-color: {0}"', [I.flags.customBackground]) : "", t = i.children && 2 === i.children.length ? a.formatString(" {0}", [o.modifiers.hasSubnav]) : "", i.insertAdjacentHTML("beforebegin", a.formatString('<div class="{0}{1}"{2}></div>', [a.removeSelectorIdentifier(o.primaryNavigation.spacing), t, r]))))
            }, I.removeTopSpacing = function() {
                var e = document.querySelector(o.primaryNavigation.spacing);
                e instanceof HTMLElement && e.parentNode.removeChild(e)
            }, I.isElementAtTop = function(e) {
                return e instanceof HTMLElement && e.getBoundingClientRect().top + window.pageYOffset === 0
            }, I.setSticky = function() {
                var e, t = document.querySelector(o.primaryNavigation.wrapper);
                I.flags.stickyEnabled && t instanceof HTMLElement && t.parentElement instanceof HTMLElement && (t.parentElement.classList.add(a.removeSelectorIdentifier(o.primaryNavigation.sticky)), I.setTopSpacing(t), e = document.querySelector(o.primaryNavigation.spacing), e instanceof HTMLElement && e.classList.remove(o.modifiers.isHidden))
            }, I.unsetSticky = function() {
                var e = document.querySelector(o.primaryNavigation.sticky),
                    t = document.querySelector(o.primaryNavigation.spacing);
                e instanceof HTMLElement && e.classList.remove(a.removeSelectorIdentifier(o.primaryNavigation.sticky)), t instanceof HTMLElement && t.classList.add(o.modifiers.isHidden)
            }, I.setLocale = function(e, t) {
                I.langMaster = !!e, t ? I.langMaster ? I.globalnavLocale = t : I.globalnavLocale = d.isMatch(t) ? t : d.getDefault() : I.globalnavLocale = d.getDefault()
            }, I.setCallbacks = function(e) {
                e && "object" == typeof e && !a.isEmptyObject(e) && (I.callbacks = e, l.forEach(Object.keys(i.events), function(e) {
                    a.isFunction(I.callbacks[e]) && this.addEventListener(i.events[e], function() {
                        I.callbacks[e].apply(null, arguments)
                    })
                }.bind(this)))
            }, I.removeJarvisCtas = function() {
                function e(e) {
                    function t(e) {
                        return e.b === x.ctaJarvisButton
                    }
                    var n, i, o, a;
                    if (e && Array.isArray(e)) {
                        for (i = e.length, n = 0; n < i; n++)
                            if (e[n].hasSubmenu)
                                for (a = e[n].c.length, o = 0; o < a; o++) l.removeItems(e[n].c[o].c, t);
                        return e
                    }
                }
                var t;
                I.flags.initGnav && (t = m.getNavData(), a.isEmptyObject(t) || (t.m = e(t.m), t.moreItems = e(t.moreItems), m.updateData(t), m.updateNav()))
            }, I.parseFooternavContent = function(e) {
                var t, n, i, o, r, s = ["e"];
                if (e && !a.isEmptyObject(e) && a.isArray(e.m)) {
                    for (n = e.m.length, t = 0; t < n; t++)
                        if (a.isArray(e.m[t].c))
                            for (o = e.m[t].c.length, i = 0; i < o; i++)
                                for (r = 0; r < s.length; r++) "undefined" != typeof e.m[t][s[r]] && "undefined" == typeof e.m[t].c[i][s[r]] && (e.m[t].c[i][s[r]] = void 0);
                    return e
                }
            }, I.addDropdownsScrollListeners = function() {
                window.addEventListener("wheel", function(e) {
                    I.handleElementScroll(e)
                }), window.addEventListener("touchmove", function(e) {
                    I.handleElementScroll(e)
                })
            }, I.handleElementScroll = function(e) {
                var t, n, r = document.querySelector("body");
                l.closest(e.target, "[data-gnav-scrollable]") ? (n = l.closest(e.target, '[data-gnav-scrollable="all"]') ? "all" : window.innerWidth >= i.breakpoints.mobile ? l.closest(e.target, a.formatString("{0}.{1}", [o.secondaryNavigation.wrapper, o.modifiers.hasMobileLayout])) ? "mobile-layout" : "desktop" : l.closest(e.target, '[data-gnav-scrollable="mobile-layout"]') ? "mobile-layout" : "mobile", t = l.closest(e.target, a.formatString('[data-gnav-scrollable="{0}"]', [n])), "touchmove" === e.type ? (r.classList.add(o.modifiers.hiddenOverflow), r.style.overflow = "hidden") : (r.classList.contains(o.modifiers.hiddenOverflow) && (r.classList.remove(o.modifiers.hiddenOverflow), r.style.overflow = ""), I.preventElementScrollingPropagation(e, t))) : (r.classList.remove(o.modifiers.hiddenOverflow), r.style.overflow = "")
            }, I.preventElementScrollingPropagation = function(e, t) {
                var n, i, o, a, r, s;
                t && t instanceof HTMLElement && e && (n = t.clientHeight, i = t.scrollHeight, i > n ? (a = e.deltaY, r = a < 0, s = a > 0, o = t.scrollTop, (0 === o && r || o >= i - n && s) && e.preventDefault()) : i === n && e.preventDefault())
            }, I.initializeGnav = function(e, t, n, r) {
                var s;
                I.flags.initGnav ? (I.flags.initGnavWithTarget && I.renderGlobalnav(e, {
                    menu: t,
                    strings: n,
                    profile: r
                }), s = document.querySelector(o.primaryNavigation.wrapper), I.flags.removeSpacingAfterRender && I.removeTopSpacing(), I.flags.stickyEnabled && I.flags.isGnavAtTop && I.setSticky(), I.attachGnavFunctionality(e), s.parentElement.classList.add(a.removeSelectorIdentifier(o.primaryNavigation.active)), 2 === s.parentElement.children.length && s.parentElement.classList.add(o.modifiers.hasSubnav), m.init({
                    menu: t
                }, function(t) {
                    t.strings = n, I.buildMenu(e, t)
                })) : P.error(i.messages.noTarget)
            }, I.initializeSubnav = function(e, t) {
                var n = a.getPropertySafely(e, "theme");
                g.init(n, t)
            }, I.initializeFooternav = function(e, t, n, i) {
                I.flags.initFooter && e && !a.isEmptyObject(e) && (e.progressiveEnhancement = n, b.init(e, t, i))
            }, I.initializePrivacy = function() {
                k.init({
                    privacyFilesPath: i.endpoints.privacyFilesURL
                }), window.addEventListener(k.events.privacy_consent, function() {
                    I.event.dispatchEvent(i.events.privacy_consent)
                })
            }, I.initializeJarvis = function(e) {
                var t, n = a.formatString("{0} [{1}]", [o.primaryNavigation.menu, i.jarvis.triggerAttribute]);
                L.addEventListener(i.events.jarvis_ready, function(e) {
                    I.event.dispatchEvent(i.events.jarvis_ready, e), a.isFunction(a.getPropertySafely(window, "AdobeMessagingExperienceClient.isAdobeMessagingClientEnabled")) && window.AdobeMessagingExperienceClient.isAdobeMessagingClientEnabled() === !1 ? I.removeJarvisCtas() : (t = document.querySelectorAll(n), t.forEach(function(e) {
                        e.classList.add(o.modifiers.isVisible)
                    }))
                }), L.addEventListener(i.jarvis.loadFailed, function() {
                    I.removeJarvisCtas()
                }), document.addEventListener("click", function(e) {
                    l.closest(e.target, n) && I.keyboard.closePopups()
                }), a.isEmptyObject(e) ? P.log("Jarvis config is empty") : (e.locale = I.globalnavLocale, L.init(e))
            }, _.init = function(e) {
                return !e || a.isEmptyObject(e) ? void P.error(i.messages.noConfig) : (I.setFlags(e), void((I.flags.initGnav || I.flags.initFooter) && (I.flags.initGnavWithTarget && I.setTopSpacing(e.target), I.setLocale(e.langmaster, e.locale), C.init({
                    toggle: a.getPropertySafely(e, "applauncher.enabled"),
                    theme: a.getPropertySafely(e, "applauncher.theme"),
                    locale: I.globalnavLocale,
                    initGlobalnav: I.flags.initGnav
                }), I.setCallbacks.apply(this, [e.callbacks]), I.getAuthoredContent(e.contentEndpoint, e.highlight), P.log("Profile configured as visible in the globalnav:", I.flags.initProfile), I.imsReadyProfileActions(), I.addDropdownsScrollListeners(), this.addEventListener(i.events.data_ready, function() {
                    I.initializeGnav(e, I.globalnavMenu, I.globalnavStrings, I.flags.initProfile), I.initializeSubnav(e.subnav, e.disableSticky), I.initializeFooternav(e.footer, I.footernavData, e.progressiveEnhancement, I.globalnavLocale), I.initializePrivacy(), (I.flags.initGnav || I.flags.initFooter) && setTimeout(function() {
                        I.event.dispatchEvent(i.events.globalnav_ready, {
                            loggedIn: I.isLoggedIn()
                        })
                    }, 0), C.setEventDataReady(!0), I.flags.initJarvis ? L.setEventDataReady(!0) : I.removeJarvisCtas()
                }), this.addEventListener(i.events.ims_ready, function(e) {
                    C.setEventUserReady(a.getPropertySafely(e, "loggedIn"))
                }), this.addEventListener(i.events.privacy_consent, function() {
                    C.setConsent(!0), I.flags.initJarvis && L.setConsent(!0)
                }), this.addEventListener(i.events.profile_sign_in, function() {
                    E.clearCache()
                }), this.addEventListener(i.events.profile_sign_out, function() {
                    E.clearCache()
                }), P.log("Initialise Jarvis:", I.flags.initJarvis), I.flags.initJarvis && (P.log("Jarvis will be initialised with config:", a.getPropertySafely(e, "jarvis")), I.initializeJarvis(a.getPropertySafely(e, "jarvis"))), delete this.init)))
            }, _.addEventListener = function(e, t) {
                I.event.addEventListener(e, t)
            }, _.resetSubnav = function() {
                g.reset()
            }, _.setSticky = function() {
                I.setSticky()
            }, _.unsetSticky = function() {
                I.unsetSticky()
            }, _.checkUserFeatures = function() {
                E.checkFeatures.apply(E, arguments)
            }, _.getUserFeatures = function() {
                E.getUserFeatures.apply(E, arguments)
            }, _.loadResource = function() {
                k.loadResource.apply(k, arguments)
            }, _.hasUserProvidedConsent = function() {
                return k.hasUserProvidedConsent.apply(k, arguments)
            }, _.openJarvisChat = function() {
                L.openChat.apply(L, arguments)
            }, _.closeJarvisChat = L.closeChat, _.events = i.events, _
        }(e, t, n, o, a, i, r, s, c, l, u, d, p, b, h, S, E, k, C, x, M, T, N, P, R, D), F.init(window.adobeGlobalnavConfig), window.adobeGlobalnav = F
}();