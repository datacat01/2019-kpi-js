/*! Picturefill - v2.3.1 - 2015-04-09
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
window.matchMedia || (window.matchMedia = function() {
        "use strict";
        var a = window.styleMedia || window.media;
        if (!a) {
            var b = document.createElement("style"),
                c = document.getElementsByTagName("script")[0],
                d = null;
            b.type = "text/css", b.id = "matchmediajs-test", c.parentNode.insertBefore(b, c), d = "getComputedStyle" in window && window.getComputedStyle(b, null) || b.currentStyle, a = {
                matchMedium: function(a) {
                    var c = "@media " + a + "{ #matchmediajs-test { width: 1px; } }";
                    return b.styleSheet ? b.styleSheet.cssText = c : b.textContent = c, "1px" === d.width
                }
            }
        }
        return function(b) {
            return {
                matches: a.matchMedium(b || "all"),
                media: b || "all"
            }
        }
    }()),
    function(a, b, c) {
        "use strict";

        function d(b) {
            "object" == typeof module && "object" == typeof module.exports ? module.exports = b : "function" == typeof define && define.amd && define("picturefill", function() {
                return b
            }), "object" == typeof a && (a.picturefill = b)
        }

        function e(a) {
            var b, c, d, e, f, i = a || {};
            b = i.elements || g.getAllElements();
            for (var j = 0, k = b.length; k > j; j++)
                if (c = b[j], d = c.parentNode, e = void 0, f = void 0, "IMG" === c.nodeName.toUpperCase() && (c[g.ns] || (c[g.ns] = {}), i.reevaluate || !c[g.ns].evaluated)) {
                    if (d && "PICTURE" === d.nodeName.toUpperCase()) {
                        if (g.removeVideoShim(d), e = g.getMatch(c, d), e === !1) continue
                    } else e = void 0;
                    (d && "PICTURE" === d.nodeName.toUpperCase() || !g.sizesSupported && c.srcset && h.test(c.srcset)) && g.dodgeSrcset(c), e ? (f = g.processSourceSet(e), g.applyBestCandidate(f, c)) : (f = g.processSourceSet(c), (void 0 === c.srcset || c[g.ns].srcset) && g.applyBestCandidate(f, c)), c[g.ns].evaluated = !0
                }
        }

        function f() {
            function c() {
                clearTimeout(d), d = setTimeout(h, 60)
            }
            g.initTypeDetects(), e();
            var d, f = setInterval(function() {
                    return e(), /^loaded|^i|^c/.test(b.readyState) ? void clearInterval(f) : void 0
                }, 250),
                h = function() {
                    e({
                        reevaluate: !0
                    })
                };
            a.addEventListener ? a.addEventListener("resize", c, !1) : a.attachEvent && a.attachEvent("onresize", c)
        }
        if (a.HTMLPictureElement) return void d(function() {});
        b.createElement("picture");
        var g = a.picturefill || {},
            h = /\s+\+?\d+(e\d+)?w/;
        g.ns = "picturefill",
            function() {
                g.srcsetSupported = "srcset" in c, g.sizesSupported = "sizes" in c, g.curSrcSupported = "currentSrc" in c
            }(), g.trim = function(a) {
                return a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "")
            }, g.makeUrl = function() {
                var a = b.createElement("a");
                return function(b) {
                    return a.href = b, a.href
                }
            }(), g.restrictsMixedContent = function() {
                return "https:" === a.location.protocol
            }, g.matchesMedia = function(b) {
                return a.matchMedia && a.matchMedia(b).matches
            }, g.getDpr = function() {
                return a.devicePixelRatio || 1
            }, g.getWidthFromLength = function(a) {
                var c;
                if (!a || a.indexOf("%") > -1 != !1 || !(parseFloat(a) > 0 || a.indexOf("calc(") > -1)) return !1;
                a = a.replace("vw", "%"), g.lengthEl || (g.lengthEl = b.createElement("div"), g.lengthEl.style.cssText = "border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden", g.lengthEl.className = "helper-from-picturefill-js"), g.lengthEl.style.width = "0px";
                try {
                    g.lengthEl.style.width = a
                } catch (d) {}
                return b.body.appendChild(g.lengthEl), c = g.lengthEl.offsetWidth, 0 >= c && (c = !1), b.body.removeChild(g.lengthEl), c
            }, g.detectTypeSupport = function(b, c) {
                var d = new a.Image;
                return d.onerror = function() {
                    g.types[b] = !1, e()
                }, d.onload = function() {
                    g.types[b] = 1 === d.width, e()
                }, d.src = c, "pending"
            }, g.types = g.types || {}, g.initTypeDetects = function() {
                g.types["image/jpeg"] = !0, g.types["image/gif"] = !0, g.types["image/png"] = !0, g.types["image/svg+xml"] = b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), g.types["image/webp"] = g.detectTypeSupport("image/webp", "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")
            }, g.verifyTypeSupport = function(a) {
                var b = a.getAttribute("type");
                if (null === b || "" === b) return !0;
                var c = g.types[b];
                return "string" == typeof c && "pending" !== c ? (g.types[b] = g.detectTypeSupport(b, c), "pending") : "function" == typeof c ? (c(), "pending") : c
            }, g.parseSize = function(a) {
                var b = /(\([^)]+\))?\s*(.+)/g.exec(a);
                return {
                    media: b && b[1],
                    length: b && b[2]
                }
            }, g.findWidthFromSourceSize = function(c) {
                for (var d, e = g.trim(c).split(/\s*,\s*/), f = 0, h = e.length; h > f; f++) {
                    var i = e[f],
                        j = g.parseSize(i),
                        k = j.length,
                        l = j.media;
                    if (k && (!l || g.matchesMedia(l)) && (d = g.getWidthFromLength(k))) break
                }
                return d || Math.max(a.innerWidth || 0, b.documentElement.clientWidth)
            }, g.parseSrcset = function(a) {
                for (var b = [];
                    "" !== a;) {
                    a = a.replace(/^\s+/g, "");
                    var c, d = a.search(/\s/g),
                        e = null;
                    if (-1 !== d) {
                        c = a.slice(0, d);
                        var f = c.slice(-1);
                        if (("," === f || "" === c) && (c = c.replace(/,+$/, ""), e = ""), a = a.slice(d + 1), null === e) {
                            var g = a.indexOf(","); - 1 !== g ? (e = a.slice(0, g), a = a.slice(g + 1)) : (e = a, a = "")
                        }
                    } else c = a, a = "";
                    (c || e) && b.push({
                        url: c,
                        descriptor: e
                    })
                }
                return b
            }, g.parseDescriptor = function(a, b) {
                var c, d = b || "100vw",
                    e = a && a.replace(/(^\s+|\s+$)/g, ""),
                    f = g.findWidthFromSourceSize(d);
                if (e)
                    for (var h = e.split(" "), i = h.length - 1; i >= 0; i--) {
                        var j = h[i],
                            k = j && j.slice(j.length - 1);
                        if ("h" !== k && "w" !== k || g.sizesSupported) {
                            if ("x" === k) {
                                var l = j && parseFloat(j, 10);
                                c = l && !isNaN(l) ? l : 1
                            }
                        } else c = parseFloat(parseInt(j, 10) / f)
                    }
                return c || 1
            }, g.getCandidatesFromSourceSet = function(a, b) {
                for (var c = g.parseSrcset(a), d = [], e = 0, f = c.length; f > e; e++) {
                    var h = c[e];
                    d.push({
                        url: h.url,
                        resolution: g.parseDescriptor(h.descriptor, b)
                    })
                }
                return d
            }, g.dodgeSrcset = function(a) {
                a.srcset && (a[g.ns].srcset = a.srcset, a.srcset = "", a.setAttribute("data-pfsrcset", a[g.ns].srcset))
            }, g.processSourceSet = function(a) {
                var b = a.getAttribute("srcset"),
                    c = a.getAttribute("sizes"),
                    d = [];
                return "IMG" === a.nodeName.toUpperCase() && a[g.ns] && a[g.ns].srcset && (b = a[g.ns].srcset), b && (d = g.getCandidatesFromSourceSet(b, c)), d
            }, g.backfaceVisibilityFix = function(a) {
                var b = a.style || {},
                    c = "webkitBackfaceVisibility" in b,
                    d = b.zoom;
                c && (b.zoom = ".999", c = a.offsetWidth, b.zoom = d)
            }, g.setIntrinsicSize = function() {
                var c = {},
                    d = function(a, b, c) {
                        b && a.setAttribute("width", parseInt(b / c, 10))
                    };
                return function(e, f) {
                    var h;
                    e[g.ns] && !a.pfStopIntrinsicSize && (void 0 === e[g.ns].dims && (e[g.ns].dims = e.getAttribute("width") || e.getAttribute("height")), e[g.ns].dims || (f.url in c ? d(e, c[f.url], f.resolution) : (h = b.createElement("img"), h.onload = function() {
                        if (c[f.url] = h.width, !c[f.url]) try {
                            b.body.appendChild(h), c[f.url] = h.width || h.offsetWidth, b.body.removeChild(h)
                        } catch (a) {}
                        e.src === f.url && d(e, c[f.url], f.resolution), e = null, h.onload = null, h = null
                    }, h.src = f.url)))
                }
            }(), g.applyBestCandidate = function(a, b) {
                var c, d, e;
                a.sort(g.ascendingSort), d = a.length, e = a[d - 1];
                for (var f = 0; d > f; f++)
                    if (c = a[f], c.resolution >= g.getDpr()) {
                        e = c;
                        break
                    } e && (e.url = g.makeUrl(e.url), b.src !== e.url && (g.restrictsMixedContent() && "http:" === e.url.substr(0, "http:".length).toLowerCase() ? void 0 !== window.console && console.warn("Blocked mixed content image " + e.url) : (b.src = e.url, g.curSrcSupported || (b.currentSrc = b.src), g.backfaceVisibilityFix(b))), g.setIntrinsicSize(b, e))
            }, g.ascendingSort = function(a, b) {
                return a.resolution - b.resolution
            }, g.removeVideoShim = function(a) {
                var b = a.getElementsByTagName("video");
                if (b.length) {
                    for (var c = b[0], d = c.getElementsByTagName("source"); d.length;) a.insertBefore(d[0], c);
                    c.parentNode.removeChild(c)
                }
            }, g.getAllElements = function() {
                for (var a = [], c = b.getElementsByTagName("img"), d = 0, e = c.length; e > d; d++) {
                    var f = c[d];
                    ("PICTURE" === f.parentNode.nodeName.toUpperCase() || null !== f.getAttribute("srcset") || f[g.ns] && null !== f[g.ns].srcset) && a.push(f)
                }
                return a
            }, g.getMatch = function(a, b) {
                for (var c, d = b.childNodes, e = 0, f = d.length; f > e; e++) {
                    var h = d[e];
                    if (1 === h.nodeType) {
                        if (h === a) return c;
                        if ("SOURCE" === h.nodeName.toUpperCase()) {
                            null !== h.getAttribute("src") && void 0 !== typeof console && console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");
                            var i = h.getAttribute("media");
                            if (h.getAttribute("srcset") && (!i || g.matchesMedia(i))) {
                                var j = g.verifyTypeSupport(h);
                                if (j === !0) {
                                    c = h;
                                    break
                                }
                                if ("pending" === j) return !1
                            }
                        }
                    }
                }
                return c
            }, f(), e._ = g, d(e)
    }(window, window.document, new window.Image);;
if (typeof Drupal !== "undefined" && typeof jQuery !== "undefined") {
    (function(e) {
        Drupal.behaviors.picture = {
            attach: function(t) {
                if (!("HTMLPictureElement" in window)) {
                    var n = e(t).find("img");
                    if (n.length) {
                        window.picturefill({
                            elements: n.get()
                        })
                    }
                }
                if (t === "#cboxLoadedContent" && e(t).find("picture").length) {
                    e.colorbox.resize();
                    e("img", t).once("colorbox-lazy-load", function() {
                        e(this).load(function() {
                            this.style.maxHeight = e(window).height() + "px";
                            this.style.maxWidth = e(window).width() + "px";
                            e.colorbox.resize({
                                innerHeight: this.height,
                                innerWidth: this.width
                            });
                            this.style.maxHeight = null;
                            this.style.maxWidth = null
                        })
                    })
                }
            }
        }
    })(jQuery)
};
(function($) {

    // Checks if a given element resides in default extra leaving container page.
    function isInExtraLeavingContainer(element) {
        return $(element).closest('div.extlink-extra-leaving').length > 0;
    }

    Drupal.settings.extlink_extra.colorboxSettings = Drupal.settings.extlink_extra.colorboxSettings || {
        href: Drupal.settings.extlink_extra.extlink_alert_url + ' .extlink-extra-leaving',
        height: '50%',
        width: '50%',
        initialWidth: '50%',
        initialHeight: '50%',
        className: 'extlink-extra-leaving-colorbox',
        onComplete: function() { // Note - drupal colorbox module automatically attaches drupal behaviors to loaded content.
            // Allow our cancel link to close the colorbox.
            jQuery('div.extlink-extra-back-action a').click(function(e) {
                jQuery.colorbox.close();
                return false;
            })
            extlink_extra_timer();
        },
        onClosed: extlink_stop_timer
    };

    Drupal.behaviors.extlink_extra = {
        // Function mostly duplicated from extlink.js.
        // Returns an array of DOM elements of all external links.
        extlinkAttach: function(context) {
            var settings = Drupal.settings;

            if (!settings.hasOwnProperty('extlink')) {
                return;
            }

            // Strip the host name down, removing ports, subdomains, or www.
            var pattern = /^(([^\/:]+?\.)*)([^\.:]{4,})((\.[a-z]{1,4})*)(:[0-9]{1,5})?$/;
            var host = window.location.host.replace(pattern, '$3$4');
            var subdomain = window.location.host.replace(pattern, '$1');

            // Determine what subdomains are considered internal.
            var subdomains;
            if (settings.extlink.extSubdomains) {
                subdomains = "([^/]*\\.)?";
            } else if (subdomain == 'www.' || subdomain == '') {
                subdomains = "(www\\.)?";
            } else {
                subdomains = subdomain.replace(".", "\\.");
            }

            // Build regular expressions that define an internal link.
            var internal_link = new RegExp("^https?://" + subdomains + host, "i");

            // Extra internal link matching.
            var extInclude = false;
            if (settings.extlink.extInclude) {
                extInclude = new RegExp(settings.extlink.extInclude.replace(/\\/, '\\'), "i");
            }

            // Extra external link matching.
            var extExclude = false;
            if (settings.extlink.extExclude) {
                extExclude = new RegExp(settings.extlink.extExclude.replace(/\\/, '\\'), "i");
            }

            // Extra external link CSS selector exclusion.
            var extCssExclude = false;
            if (settings.extlink.extCssExclude) {
                extCssExclude = settings.extlink.extCssExclude;
            }

            // Extra external link CSS selector explicit.
            var extCssExplicit = false;
            if (settings.extlink.extCssExplicit) {
                extCssExplicit = settings.extlink.extCssExplicit;
            }

            // Find all links which are NOT internal and begin with http as opposed
            // to ftp://, javascript:, etc. other kinds of links.
            // When operating on the 'this' variable, the host has been appended to
            // all links by the browser, even local ones.
            // In jQuery 1.1 and higher, we'd use a filter method here, but it is not
            // available in jQuery 1.0 (Drupal 5 default).
            var external_links = new Array();
            var mailto_links = new Array();
            $("a, area", context).each(function(el) {
                try {
                    var url = this.href.toLowerCase();
                    if (url.indexOf('http') == 0 &&
                        (!url.match(internal_link) && !(extExclude && url.match(extExclude))) ||
                        (extInclude && url.match(extInclude)) &&
                        !(extCssExclude && $(this).parents(extCssExclude).length > 0) &&
                        !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {

                        // Add a class of 'extlink' to all external links except those within
                        // the 'now leaving' area.
                        if (!isInExtraLeavingContainer(this)) {
                            $(this).addClass('extlink');
                        }

                        external_links.push(this);
                    }
                    // Do not include area tags with begin with mailto: (this prohibits
                    // icons from being added to image-maps).
                    else if (this.tagName != 'AREA' &&
                        url.indexOf('mailto:') == 0 &&
                        !(extCssExclude && $(this).parents(extCssExclude).length > 0) &&
                        !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
                        mailto_links.push(this);
                    }
                }
                // IE7 throws errors often when dealing with irregular links, such as:
                // <a href="node/10"></a> Empty tags.
                // <a href="http://user:pass@example.com">example</a> User:pass syntax.
                catch (error) {
                    return false;
                }
            });

            return external_links;
        },

        // Our click handler for external links.
        clickReaction: function(e) {
            // Allow the default behavior for link if it's within the warning area.
            // This keeps us from firing an infinite loop of reactions.
            if (isInExtraLeavingContainer(this)) {
                return true;
            }

            var external_url = jQuery(this).attr('href');
            var back_url = window.location.href;
            var alerturl = Drupal.settings.extlink_extra.extlink_alert_url;

            // "Don't warn" pattern matching.
            var extlink_exclude_warning = false;
            if (Drupal.settings.extlink_extra.extlink_exclude_warning) {
                extlink_exclude_warning = new RegExp(Drupal.settings.extlink_extra.extlink_exclude_warning.replace(/\\/, '\\'));
            }
            // Don't do any warnings if the href matches the "don't warn" pattern.
            if (extlink_exclude_warning) {
                var url = external_url.toLowerCase();
                if (url.match(extlink_exclude_warning)) {
                    return true;
                }
            }

            // This is what extlink does by default (except
            if (Drupal.settings.extlink_extra.extlink_alert_type == 'confirm') {
                var text = Drupal.settings.extlink.extAlertText.value;
                text = text.replace(/\[extlink:external\-url\]/gi, external_url);
                text = text.replace(/\[extlink:back-url\]/gi, back_url);
                return confirm(text);
            }

            // Set cookies that the modal or page can read to determine the 'go to' and 'back' links.
            $.cookie("external_url", external_url, {
                path: '/'
            });
            $.cookie("back_url", back_url, {
                path: '/'
            });

            if (Drupal.settings.extlink_extra.extlink_alert_type == 'colorbox') {
                jQuery.colorbox(Drupal.settings.extlink_extra.colorboxSettings);
                return false;
            }

            if (Drupal.settings.extlink_extra.extlink_alert_type == 'page') {
                // If we're here, alert text is on but pop-up is off; we should redirect to an intermediate confirm page.
                window.location = alerturl;
                return false;
            }
        },

        attach: function(context) {
            // Build an array of external_links exactly like extlink does.
            var external_links = this.extlinkAttach(context);

            // Unbind the click handlers added by extlink and replace with our own
            // This whole section of code that does the finding, unbinding, and rebinding
            // could be made a lot less redundant and more efficient if this issue could be resolved: http://drupal.org/node/1715520
            $(external_links).unbind('click').not('.ext-override, .extlink-extra-leaving a').click(this.clickReaction);

            $(document).ready(function() {
                if (Drupal.settings.extlink_extra.extlink_url_override == 1) {
                    if (Drupal.settings.extlink_extra.extlink_url_params.external_url) {
                        $.cookie("external_url", Drupal.settings.extlink_extra.extlink_url_params.external_url, {
                            path: '/'
                        });
                    }
                    if (Drupal.settings.extlink_extra.extlink_url_params.back_url) {
                        $.cookie("back_url", Drupal.settings.extlink_extra.extlink_url_params.back_url, {
                            path: '/'
                        });
                    }
                }
            });

            // Dynamically replace hrefs of back and external links on page load. This
            // is to compensate for aggressive caching situations where the now-leaving
            // is returning cached results.
            if (Drupal.settings.extlink_extra.extlink_cache_fix == 1) {
                if (jQuery('.extlink-extra-leaving').length > 0) {
                    // grab our cookies
                    var external_url = $.cookie("external_url");
                    var back_url = $.cookie("back_url");

                    // First, find any links within the .extlink-extra-leaving area that use our placeholder text and set their HREFs.
                    // Using jquery's attr function here (rather than text replace) is important because IE7 or (IE10+ in
                    // compatibility mode, possibly others) will have already turned link HREFs with a value of
                    // "external-url-placeholder" into a fully qualified link that has protocol and domain prepended, so we need to
                    // replace the whole thing.
                    $goLinks = jQuery('.extlink-extra-leaving a[href*=external-url-placeholder]').attr('href', external_url);
                    $backLinks = jQuery('.extlink-extra-leaving a[href*=back-url-placeholder]').attr('href', back_url);

                    // Respect the 'Open external links in a new window' in our modal/page with aggressive caching.  Use of the text
                    // placeholder means that extlink's attach function doesn't catch these.
                    if (Drupal.settings.extlink.extTarget) {
                        // Apply the 'target' attribute to the 'go' links.
                        $goLinks.attr('target', Drupal.settings.extlink.extTarget);
                    }

                    // Next find any other places within text or whatever that have the placeholder text.
                    var html = jQuery('.extlink-extra-leaving').html();
                    html = html.replace(/external-url-placeholder/gi, external_url);
                    html = html.replace(/back-url-placeholder/gi, back_url);
                    jQuery('.extlink-extra-leaving').html(html);
                }
            }

            // If the timer is configured, we'll call it for the intermediate page.
            if (Drupal.settings.extlink_extra.extlink_alert_type == 'page') {
                if (jQuery('.extlink-extra-leaving').length > 0) {
                    extlink_extra_timer();
                }
            }

            // Apply 508 fix - extlink module makes empty <spans> to show the external link icon, screen readers
            // have trouble with this.
            if (Drupal.settings.extlink_extra.extlink_508_fix == 1) {
                // Go through each <a> tag with an 'ext' class,
                $.each($("a.ext"), function(index, value) {
                    // find a <span> next to it with 'ext' class,
                    var nextSpan = $(this).next('span.ext');
                    if (nextSpan.length) {
                        // if found add the text 'External Link' to the empty <span> (or whatever is configured by the user)
                        nextSpan.html(Drupal.settings.extlink_extra.extlink_508_text);

                        // and move the span inside the <a> tag (at the end).
                        $(this).append(nextSpan);
                    }
                });
            }
        }
    }

})(jQuery);

// Global var that will be our JS interval.
var extlink_int;

function extlink_extra_timer() {
    if (Drupal.settings.extlink_extra.extlink_alert_timer == 0 || Drupal.settings.extlink_extra.extlink_alert_timer == null) {
        return;
    }
    extlink_int = setInterval(function() {
        var container = jQuery('.automatic-redirect-countdown');
        var count = container.attr('rel');
        if (count == null) {
            count = Drupal.settings.extlink_extra.extlink_alert_timer;
        }
        if (count >= 0) {
            container.html('<span class="extlink-timer-text">Automatically redirecting in: </span><span class="extlink-count">' + count + '</span><span class="extlink-timer-text"> seconds.</span>');
            container.attr('rel', --count);
        } else {
            extlink_stop_timer();
            container.remove();
            window.location = jQuery('div.extlink-extra-go-action a').attr('href');
        }
    }, 1000);
}

function extlink_stop_timer() {
    clearInterval(extlink_int);
};