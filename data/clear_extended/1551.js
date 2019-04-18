/*! elsevier-matrix - v2.0.10 - 2019-04-12 */
function truncMobText() {
    $(window).width() <= "480" ? ($(".truncated-title").removeClass("hide"), $(".normal-title").addClass("hide")) : ($(".truncated-title").addClass("hide"), $(".normal-title").removeClass("hide"))
}

function substringMatcher(e) {
    return function(t, o) {
        var n, i;
        n = [], i = new RegExp("^" + t, "i"), $.each(e, function(e, t) {
            i.test(t) && n.push({
                value: t
            })
        }), o(n)
    }
}

function innovation_popups() {
    var e = $(".ci-tooltip"),
        t = $(".ci-tooltip-background"),
        o = $(".ci-tooltip-header"),
        n = $(".ci-tooltip-trigger"),
        i = $(".div-citooltip-close"),
        a = $(".ci-tooltip-up-arrow");
    n.each(function() {
        var n = $(this);
        n.find(".ci-tooltip.arrow_r").on("click", function(e) {
            e.stopPropagation()
        }), n.find(".div-tooltip-clickable").on("click", function(e) {
            e.stopImmediatePropagation()
        }), i.add(t).unbind().on("click", function(o) {
            o.preventDefault(), e.hide(), t.hide()
        }), n.click(function(i) {
            i.stopPropagation(), i.preventDefault(), a.remove(), t.show(), n.find(e).show();
            var r = "" !== n.attr("data-tooltip-id") ? n.attr("data-tooltip-id") : void 0,
                s = n.find(".ci-tooltip-inner");
            if (s.length ? s.html("") : o.after("<span class='ci-tooltip-inner'></span>"), n.find(".div-tooltip-clickable").click(function() {
                    window.location.href = $(this).data("url")
                }), n.find(".ci-tooltip-inner").html("<span class='loader-image'><img src='/s/resources/elsevier-content-innovation/ajax-loader.gif'/></span>"), void 0 !== r) {
                $.ajax({
                    type: "POST",
                    url: "/_resources/content-innovation/ci-lightbox-content?id=" + r,
                    jsonpCallback: "retdata",
                    crossDomain: !0,
                    dataType: "jsonp",
                    success: function(e) {
                        e = e.arr[0].content, n.find(".ci-tooltip-inner").html(e), n.find(".loader-image").remove(), n.find(".div-tooltip-clickable").each(function() {
                            var e = $(this);
                            "" === e.data("url") || "#" === e.data("url") ? e.hide() : e.show()
                        })
                    }
                })
            }
        })
    })
}

function surveyInit(e) {
    var t = function() {
            setCookie("survey", "No", {
                expires: 180,
                domain: "elsevier.com"
            })
        },
        o = !!location.search.match(/survey\=on/),
        n = (100 * Math.random()).toFixed(2);
    ("Yes" !== e.inactive && n < e.target && "No" !== getCookie(e.cookieName) || o) && $("#surveyPopup").fadeIn(), $(".survey-accept").attr("href", e.url), $(".survey-decline").on("click", function() {
        t(), $("#surveyPopup").fadeOut()
    }), $(".survey-accept").on("click", function() {
        $("#surveyPopup").fadeOut(), t()
    }), $(".lb-close").on("click", function() {
        t(), $("#surveyPopup").fadeOut()
    })
}
"function" != typeof NodeList.prototype.forEach && "function" == typeof Array.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), String.prototype.includes || Object.defineProperty(String.prototype, "includes", {
        value: function(e, t) {
            "use strict";
            return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
        }
    }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        enumerable: !1,
        value: function(e) {
            return this.filter(function(t) {
                return t === e
            }).length > 0
        }
    }), Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
        value: function(e) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var t = Object(this),
                o = t.length >>> 0;
            if ("function" != typeof e) throw new TypeError("predicate must be a function");
            for (var n = arguments[1], i = 0; i < o;) {
                var a = t[i];
                if (e.call(n, a, i, t)) return i;
                i++
            }
            return -1
        }
    }), Array.from || (Array.from = function() {
        var e = Object.prototype.toString,
            t = function(t) {
                return "function" == typeof t || "[object Function]" === e.call(t)
            },
            o = Math.pow(2, 53) - 1,
            n = function(e) {
                var t = function(e) {
                    var t = Number(e);
                    return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
                }(e);
                return Math.min(Math.max(t, 0), o)
            };
        return function(e) {
            var o = Object(e);
            if (null == e) throw new TypeError("Array.from requires an array-like object - not null or undefined");
            var i, a = arguments.length > 1 ? arguments[1] : void 0;
            if (void 0 !== a) {
                if (!t(a)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                arguments.length > 2 && (i = arguments[2])
            }
            for (var r, s = n(o.length), l = t(this) ? Object(new this(s)) : new Array(s), c = 0; c < s;) r = o[c], l[c] = a ? void 0 === i ? a(r, c) : a.call(i, r, c) : r, c += 1;
            return l.length = s, l
        }
    }()), String.prototype.endsWith || Object.defineProperty(String.prototype, "endsWith", {
        value: function(e, t) {
            "use strict";
            return (void 0 === t || t > this.length) && (t = this.length), this.substring(t - e.length, t) === e
        }
    }), $(document).ready(function() {
        var e = $(".pagination .previous-link a"),
            t = $(".pagination .next-link a"),
            o = $(".elsevier-matrix-form");
        e.length && "" !== e.attr("href") && $("head").append('<link rel="prev" href=' + e.attr("href") + ">"), t.length && "" !== t.attr("href") && $("head").append('<link rel="next" href=' + t.attr("href") + ">"), $("#search_page_142830").addClass("form-full-width").css("width", "100%"), o.length && o.wrap('<div class="row"><div class="large-12 columns"></div></div>'), 0 === $(".news-knovel-template .footer-news-wide").text().length && $(".news-knovel-template .footer-news-wide img").hide(), window.location.href.match(/queries_query_query/) && $(".news-knovel-template .lcont").removeClass("hide"), window.location.href.match(/\/industry-insights(\/|$|\?)/) ? ($(".news-knovel-template input[name='rootid']").remove(), $(".news-knovel-template select[name='rootid']").removeClass("hide")) : $(".news-knovel-template select[name='rootid']").remove();
        var n = window.location.href.match(/rootid=([0-9]+)/);
        n && $(".news-knovel-template select[name='rootid']").val(n[1]), $(".news-knovel-template select[name*='pubdate']").change(function() {
            $(".news-knovel-template input#filled").val(""), $(".news-knovel-template select[name*='pubdate']").each(function() {
                "--" !== $(this).val() && $(".news-knovel-template input#filled").val("true")
            })
        });
        for (var i = "<option value='--'></option>", a = (new Date).getFullYear(), r = a; r >= a - 10; r--) i += "<option value='" + r + "'>" + r + "</option>";
        $(".news-knovel-template .news-wide-search-year").html(i), $.extend({
            getUrlVars: function() {
                for (var e, t = [], o = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), n = 0; n < o.length; n++) e = o[n].split("="), t.push(e[0]), t[e[0]] = e[1];
                return t
            },
            getUrlVar: function(e) {
                return $.getUrlVars()[e]
            }
        });
        var s = {
            vars: {
                optionalValue: "1645",
                fbResourceUrl: "/administration/oa-dynamic-data/open-access-journals",
                highlightClass: "highlight",
                t: null,
                arrowOffsetLeft: 88,
                arrowOffsetRight: 240,
                popupOffset: 145
            },
            sel: {
                oaNormal: ".open-access-normal",
                oaSupport: ".open-access-optional",
                highlightEl: ".highlight",
                oaPopup: ".oa-popup",
                oaPopupContent: ".oa-popup-content",
                openAccessWrapper: ".open-access",
                arrowBox: ".arrow-box"
            },
            init: function() {
                (jQuery(s.sel.oaNormal).length > 0 || jQuery(s.sel.oaSupport).length > 0) && s.setJournals(), jQuery(s.sel.oaPopup) && s.makePopups()
            },
            setJournals: function() {
                var e = this,
                    t = 0;
                jQuery.ajax({
                    dataType: "json",
                    url: e.vars.fbResourceUrl,
                    success: function(o) {
                        t = o.contents.length, jQuery(e.sel.oaNormal).prepend(t)
                    }
                })
            },
            makePopups: function() {
                var e = this,
                    t = 0,
                    o = null,
                    n = null;
                jQuery(e.sel.oaPopup).each(function() {
                    if (o = jQuery(this).next(e.sel.oaPopupContent), void 0 !== (n = o.html())) {
                        jQuery(this).data("popupid", "oa_c_" + t);
                        var i = "arrow-box",
                            a = jQuery(this).position(),
                            r = parseInt(jQuery(this).width(), 10) / 2;
                        a.top = parseInt(a.top, 10) + 30, a.left = parseInt(a.left, 10) + r, a.left = a.left - s.vars.arrowOffsetLeft, jQuery(this).hasClass("oa-popup-right") && (i += " arrow-box-right", a.left = a.left + s.vars.arrowOffsetLeft - s.vars.arrowOffsetRight);
                        var l = "<div class='" + i + "' style='display:none; left: " + a.left + "px ; top: " + a.top + "px ;' id='oa_c_" + t + "'>";
                        l += n, l += "</div>", o.remove(), jQuery(this).after(l), s.attachPopupHandlers(jQuery(this)), s.popupHover(jQuery("#oa_c_" + t)), t++
                    } else jQuery(this).removeClass("oa-popup")
                })
            },
            attachPopupHandlers: function(e) {
                e.hover(function() {
                    jQuery(this).data("open", !0);
                    var e = jQuery(this).data("popupid");
                    jQuery("#" + e).fadeIn()
                }, function() {
                    var e = jQuery(this).data("popupid");
                    jQuery("#" + e).data("visible", !0), s.vars.t = setTimeout(function() {
                        jQuery("#" + e).fadeOut(), jQuery("#" + e).data("visbile", !1)
                    }, 700)
                })
            },
            popupHover: function(e) {
                e.hover(function() {
                    clearTimeout(s.vars.t)
                }, function() {
                    jQuery(this).fadeOut()
                })
            }
        };

        function l() {
            if ($("#all-types:not(:checked)").length) {
                for (var e = $(".gscopes:not(:checked)"), t = "", o = 0; o < e.length; o++) t += (0 !== o ? "," : "") + $(e[o]).val() + "!";
                for (o = 0; o < e.length - 1; o++) t += "+";
                $("#gscope").val(t)
            } else $("#gscope").val("");
            $("#gscope").val() ? $("#gscope").attr("name", "gscopes1") : $("#gscope").attr("name", ""), 0 === $(".gscopes:checked").length && $("#gscope").val("")
        }

        function c() {
            if ($("#all-types:not(:checked)").length) {
                for (var e = $(".meta_T:not(:checked)"), t = "", o = 0; o < e.length; o++) t += (0 !== o ? " " : "") + $(e[o]).val();
                $("#meta_T_not").val(t)
            } else $("#meta_T_not").val("");
            $("#meta_T_not").val() ? $("#meta_T_not").attr("name", "meta_T_not") : $("#meta_T_not").attr("name", ""), 0 === $(".meta_T:checked").length && $("#meta_T_not").val("")
        }
        s.init(), $(".book-filters select").change(function() {
            window.location.href = $(this).val()
        }), $(".exhibition-filters select").change(function() {
            var e = window.location.href.split("?")[0] + "?";
            $(".exhibition-filters select").each(function() {
                0 !== $(this).find("option:selected").index() && (e += "&" + $(this).attr("name") + "=" + $(this).val())
            }), window.location.href = e
        }), $('.agreements-page [desc="table"]').hide().eq(0).show(), $("#toolkit-dropdown-one").on("change", function() {
            $('.agreements-page [desc="table"]').hide();
            var e = $("option:selected", this).val();
            $(".agreements-page #" + e).show()
        }), $("#all-types").change(function() {
            $(this).prop("checked") && ($(".gscopes, .meta_T").prop("checked", !1), $("#gscope").val(""), $("#meta_T_not").val(""))
        }), $(".gscopes, .meta_T").change(function() {
            $(".gscopes:checked, .meta_T:checked").length && $("#all-types").prop("checked", !1)
        }), l(), $(".gscopes").change(function() {
            l()
        }), c(), $(".meta_T").change(function() {
            c()
        }), $(".searchform").submit(function() {
            "JN" === $("#filter").val() || "BK" === $("#filter").val() ? $("#filter").after("<input type='hidden' name='meta_T' value='" + $("#filter").val() + "' />") : "" !== $("#filter").val() && $("#filter").after("<input type='hidden' name='gscope1' value='" + $("#filter").val() + "' />")
        })
    }),
    function(e) {
        e.fn.ellipsis = function() {
            return this.each(function() {
                var t = e(this);
                if ("hidden" === t.css("overflow")) {
                    var o = t.html(),
                        n = t.hasClass("multiline"),
                        i = e(this.cloneNode(!0)).hide().css("position", "absolute").css("overflow", "visible").width(n ? t.width() : "auto").height(n ? "auto" : t.height());
                    t.after(i);
                    for (var a = n ? function() {
                            return i.height() > t.height()
                        } : function() {
                            return i.width() > t.width()
                        }; o.length > 0 && a();) o = o.substr(0, o.length - 1), i.html(o + "...");
                    t.html(i.html()), i.remove()
                }
            })
        }, e(".add-expander").each(function() {
            e(this).addClass("long hide").after(e(".add-expander").clone().removeClass("long hide").addClass("short multiline ellipsis expander-contracted "))
        }), e(".journal-title").length > 0 && e(window).width() <= "480" && truncMobText(), e(window).on("resize", function() {
            truncMobText()
        });
        var t = e("#secondary-nav");
        t.length && t.find("li").each(function() {
            var t = e(this),
                o = t.find("a").first();
            o.attr("data-id") === o.attr("data-globals-id") && t.addClass("menu-item-active")
        }), e(".show-more-btn").on("click", function(t) {
            t.preventDefault(), e(this).siblings(".full-description-text").toggleClass("hide"), e(this).parent().find(".show-more-btn").toggleClass("hide")
        }), innovation_popups(), "undefined" != typeof surveyOptions && surveyInit(surveyOptions)
    }(jQuery), $(window).load(function() {
        $(".ellipsis").ellipsis(), $(".view_full_description").click(function(e) {
            e.preventDefault(), $(".book-description.long:visible").length > 0 ? ($(".book-description.long").hide(), $(".book-description.short").show(), $(this).text("View full description")) : ($(".book-description.long").show(), $(".book-description.short").hide(), $(this).text("Hide full description"))
        }), $(".add-expander-book").each(function() {
            $(this).addClass("long hide").after($(".add-expander-book").clone().removeClass("long hide").addClass("short multiline ellipsis expander-contracted big"))
        }), $(".view_full_content").click(function(e) {
            e.preventDefault(), $(".book-content.long:visible").length > 0 ? ($(".book-content.long").hide(), $(".book-content.short").show(), $(this).text("View full contents")) : ($(".book-content.long").show(), $(".book-content.short").hide(), $(this).text("Hide full contents"))
        })
    });
var article, articleTop, articleBottom, articleInnerWidth, articleInnerHeight, articleSocialBar, articleSocialBarHeight, articleSocialBarTop, differencePixel, articleImageHeight, imageDiffPixel, articleImage, articleImageTop, sNav, sNavTop, sNavPrev, sNavPrevBottom, TICK_COUNT = 200,
    lastScrollPosition = 0,
    win = jQuery(window);

function initStickyNav() {
    (sNav = jQuery(".secondary-nav.sticky")).length && (sNavPrev = sNav.prev(), sNavPrevBottom = sNavPrev.offset().top + sNavPrev.outerHeight(), sNav.css("z-index", "1000"), sNav.css("background", "#FFFFFF"), jQuery(".secondary-nav.sticky li").each(function() {
        jQuery(this).on("click", function() {
            $(this).siblings().removeClass("active"), $(this).addClass("active")
        })
    }))
}

function scrollStickyNav() {
    if (sNav.length) {
        var e = win.scrollTop();
        parseInt(e) >= parseInt(sNavPrevBottom) ? (sNav.css("position", "fixed"), sNav.css("top", 0)) : (sNav.css("position", "relative"), sNav.css("top", "auto"))
    }
}

function positionArticleLinks() {
    article = jQuery(".article-content"), articleSocialBar = jQuery(".article-info.sticky"), article.length && articleSocialBar.length && (articleTop = article.offset().top, articleBottom = articleTop + article.outerHeight(), articleInnerWidth = article.innerWidth(), articleInnerHeight = article.innerHeight(), articleSocialBarHeight = articleSocialBar.outerHeight(), articleSocialBarTop = articleSocialBar.offset().top, articleImage = jQuery(".article-image-main"), articleImageHeight = jQuery(".article-image-main").outerHeight(), articleImageTop = articleImage.offset().top, imageDiffPixel = articleImageHeight + articleImageTop + articleSocialBarHeight, differencePixel = -1 * (articleSocialBarTop - articleBottom + articleSocialBarHeight), articleSocialBar.css("width", articleInnerWidth + "px"), articleSocialBar.css("z-index", "9999"))
}

function scrollArticleLinks() {
    if (article.length && articleSocialBar.length) {
        var e = win.scrollTop() + win.height(),
            t = articleBottom - e;
        parseInt(e) < parseInt(imageDiffPixel) ? (articleSocialBar.css("position", "absolute"), articleSocialBar.css("top", articleImageHeight)) : parseInt(t) <= differencePixel ? (articleSocialBar.css("position", "relative"), articleSocialBar.css("bottom", 0), articleSocialBar.css("top", "auto")) : (articleSocialBar.css("position", "fixed"), articleSocialBar.css("bottom", 0), articleSocialBar.css("top", "auto"))
    }
}

function globalHashFix() {
    try {
        var e = window.location.hash;
        if (e.length > 1) {
            var t = $(e);
            if (t.length > 0) {
                var o = $("header").outerHeight() || 0,
                    n = $(".sn-nav__contain").outerHeight() || 0;
                $("html, body").scrollTop(t.offset().top - (o + n))
            }
        }
    } catch (e) {}
}

function getPath(e) {
    e = e || location.pathname;
    let t = new RegExp("[#|?].*"),
        o = new RegExp("^/|/$", "g"),
        n = new RegExp("/", "g");
    return (e = (e = (e = e.replace(t, "")).replace(o, "")).replace(n, ":")) || "Home"
}

function updateOLCounter() {
    $("ol[start]").each(function() {
        var e = parseInt($(this).attr("start")) - 1;
        $(this).css("counter-increment", "section " + e)
    })
}
$(window).load(function() {
    globalHashFix()
}), jQuery(document).ready(function() {
    ! function(e) {
        "use strict";
        e('.main-navigation ul li a[target="_blank"]').click(function(e) {
            return e.preventDefault(), e.stopImmediatePropagation(), window.open(this.href, "_blank"), !1
        }), e.fn.showHideContent = function(t) {
            e(".matrix-show-hide-content").hide();
            var o = jQuery(this);
            o.click(function(n) {
                n.preventDefault();
                var i = e(this);
                i.toggleClass("open").closest(".matrix-show-hide-trigger").next(".matrix-show-hide-content").slideToggle(), i.hasClass("open") && i.children(".default-text").length ? i.children(".default-text").text("Read less") : !i.hasClass("open") && i.children(".default-text").length && i.children(".default-text").text("Read more"), t && (o.hasClass("arrow-up") ? (o.removeClass("arrow-up"), o.addClass("arrow-down"), o.text("Read more")) : jQuery(this).hasClass("arrow-down") && (o.removeClass("arrow-down"), o.addClass("arrow-up"), o.text("Read less")))
            })
        }, e.fn.collapseToggle = function() {
            e(this).each(function() {
                var t, o = e(this),
                    n = o.closest(".collapse-group"),
                    i = n.find(".collapse-content");
                n.addClass("collapsed"), o.click(function(o) {
                    o.preventDefault();
                    var a = e(this),
                        r = e(this).text();
                    clearTimeout(t), n.hasClass("collapsed") ? (a.text(r.replace(/(.*)more(.*)/i, "$1less$2")), t = setTimeout(function() {
                        i.css("max-height", i.height())
                    }, 400)) : (a.text(r.replace(/(.*)less(.*)/i, "$1more$2")), i.css("max-height", "")), n.toggleClass("collapsed")
                })
            })
        }, e.fn.centerForms = function() {
            e(this).length && e(".elsevier-matrix-form").wrap('<div class="row"><div class="large-12 columns"></div></div>')
        }, e(".toggle-hidden-content").showHideContent(!0), e(".collapse-toggle").collapseToggle(), e(".elsevier-matrix-form").centerForms(), positionArticleLinks(), scrollArticleLinks(), initStickyNav(), scrollStickyNav(), jQuery(window).scroll(function() {
            setTimeout(function() {
                scrollArticleLinks(), scrollStickyNav()
            }, TICK_COUNT)
        }), e("ol[start]").length && updateOLCounter()
    }(jQuery)
}), $(function() {
    var e = $("main > div:first"),
        t = $("header"),
        o = $(".accessibility-link");
    o.length && o.keypress(function(o) {
        13 === o.which && ($(window).scrollTop(e.offset().top - t.outerHeight()), e.attr("tabindex", 0), e.focus())
    })
}), $(document).ready(function() {
    ! function(e, t) {
        "use strict";
        jQuery.fn[t] = function(e) {
            return e ? this.bind("resize", (o = e, function() {
                var e = this,
                    t = arguments;
                a ? clearTimeout(a) : i && o.apply(e, t), a = setTimeout(function() {
                    i || o.apply(e, t), a = null
                }, n || 100)
            })) : this.trigger(t);
            var o, n, i, a
        }
    }(jQuery, "smartresize")
});
var scrollTimeout, $body = $body || $("body"),
    $header = $("header"),
    $cartContainer = $(".shopping-cart-container"),
    $primaryMenu = $(".primary-menu"),
    $closePrimaryMenu = $(".js-close-primary-menu"),
    $closePrimaryMenuModal = $(".js-header-menu-toggle-open, .js-close-primary-menu, .modal"),
    $menuIcon = $(".js-header-menu-toggle-open .main-ui-icon"),
    $menuToggleOpen = $(".js-header-menu-toggle-open"),
    $menuItemLink = $(".menu-item-link"),
    $navigation = $(".main-navigation"),
    $spineSectionPrimary = $(".primary-menu .spine-section"),
    scrolling = !1,
    mouseClick = !1;

function activateStickyHeader() {
    function e() {
        $menuToggleOpen.click(function(e) {
            e.preventDefault(), e.stopPropagation(), o(), $cartContainer.removeClass("show-menu"), $(".spine-level-1").css("position", "static"), $primaryMenu.addClass("open"), $menuItemLink.attr("tabIndex", "6"),
                function() {
                    if (!$body.hasClass("menu-open")) {
                        var e = i();
                        $body.addClass("menu-open"), $body.css({
                            top: 0 - e
                        })
                    }
                }(), $spineSectionPrimary.eq(1).scrollTop(0), $closePrimaryMenu.focus(), n() && $closePrimaryMenu.blur(), $menuIcon.hasClass("open") && t(!0), $body.hasClass("vertical-menu") && $menuIcon.toggleClass("open")
        }), $closePrimaryMenu.click(function(e) {
            e.stopPropagation(), t(!0)
        }), $closePrimaryMenuModal.mousedown(function() {
            mouseClick = !0
        })
    }

    function t(e) {
        ! function() {
            if ($body.hasClass("menu-open")) {
                var e = i();
                $body.attr("style", "").removeClass("menu-open"), $(window).scrollTop(e)
            }
        }(), $menuItemLink.attr("tabIndex", "-1"), $primaryMenu.hasClass("open") && ($primaryMenu.removeClass("open"), e && ($menuToggleOpen.focus(), n() && $menuToggleOpen.blur()))
    }

    function o() {
        t(!0), $(".gh-is-expanded").removeClass("gh-is-expanded"), window.location.pathname.indexOf("search-results") < 0 && $(".header-container .bigsearch-area").slideUp("fast")
    }

    function n() {
        var e = mouseClick;
        return mouseClick = !1, e
    }

    function i() {
        var e = Math.abs(($body.css("top") || "0").replace("px", ""));
        return $body.scrollTop() || $(window).scrollTop() || e
    }

    function a(e, t) {
        const o = document.querySelectorAll(e);
        Array.from(o).forEach(function(e) {
            e.addEventListener("click", function() {
                window.location = elcm.ECOMM_URL + t
            })
        })
    }
    $(function() {
        e(), $(".modal").on("click", function(e) {
            e.stopPropagation(), o(), $body.hasClass("vertical-menu") && $menuIcon.removeClass("open")
        }), $('header[role="banner"]').click(function(e) {
            e.target === this && ($body.hasClass("vertical-menu") || o())
        }), $(".main-ui-item-cart").click(function() {
            o(), $menuIcon.removeClass("open")
        }), Foundation.utils.is_small_only() && $body.removeClass("vertical-menu"), $(document).keyup(function(e) {
            switch (e.keyCode) {
                case 27:
                    mouseClick = !1, o(), $menuIcon.removeClass("open");
                    break;
                case 9:
                    mouseClick = !1, $primaryMenu.hasClass("open") && !$(document.activeElement).is(".spine-level-1 a, .js-close-primary-menu") && (t(!1), $menuIcon.removeClass("open"))
            }
        }), a(".signin-btn", "auth"), a(".view-account-btn", "account"), a(".sign-out-btn", "logout"), a("#aa-globalheader-shopping-chart", "cart"), $(".gh-ppvr-trigger").on("click", function() {
            ! function(e) {
                let t = $(e);
                if (o(), t.hasClass("gh-is-expanded")) return void t.removeClass("gh-is-expanded");
                $(".gh-is-expanded").removeClass("gh-is-expanded"), t.addClass("gh-is-expanded")
            }($(this).parents(".gh-ppvr"))
        }), $(".gh-hamburger button").on("click", function() {
            const e = $(this),
                t = "true" === e.attr("aria-expanded");
            e.attr("aria-expanded", !t), $("#gh-drawer").toggleClass("gh-is-expanded"), $("#gh-overlay").toggleClass("u-display-none")
        }), $("#gh-overlay").on("click", function() {
            const e = $(this);
            e.addClass("u-display-none"), $("#gh-drawer").removeClass("gh-is-expanded"), e.attr("aria-expanded", !1)
        }), $(".bigsearch-toggle").on("click", function() {
            $(".gh-is-expanded").removeClass("gh-is-expanded")
        }), $body.on("click", function(e) {
            if ($("#gh-drawer").hasClass("gh-is-expanded")) return;
            const t = $(e.target);
            t.parents(".bigsearch-area").length || t.hasClass("bigsearch-area") || t.parents().hasClass("gh-ppvr") || t.parents().hasClass("button-link") || t.parents("#js-wrapper-search-link").length || ($(".gh-is-expanded").removeClass("gh-is-expanded"), o(), $body.hasClass("vertical-menu") && $menuIcon.removeClass("open"))
        })
    }), $(function() {
        $primaryMenu.show()
    })
}

function getLocaleFromUrl() {
    const e = window.location.pathname.split("/")[1],
        t = /^([a-z][a-z]-[a-z][a-z])$/.exec(e);
    return t ? t[0] : "global"
}
document.addEventListener("DOMContentLoaded", function() {
    if (sessionStorage)
        if (sessionStorage.getItem("notFirstPageLoad")) {
            let e = document.querySelector("#promotion-script-tag");
            e && (e.src = e.getAttribute("data-src"))
        } else sessionStorage.setItem("notFirstPageLoad", !0);
    elcm && elcm.featureFlag && elcm.featureFlag.isActive && elcm.featureFlag.isActive("global-header-c") && "global" === getLocaleFromUrl() || document.querySelector(".global-header.header-container") || activateStickyHeader()
});
var elcm = elcm || {};
elcm.solutions = function(e) {
    var t = e(".btn-toggle"),
        o = e(".filter-wrapper"),
        n = e(".filter-wrapper__filter-input"),
        i = e(".filter-nav"),
        a = e(".filter-nav a"),
        r = e(".item-wrapper"),
        s = e(".item-wrapper .tile"),
        l = e(".no-results"),
        c = e(".filter-wrapper .icon-standalone-delete"),
        u = {
            classes: {
                tile: ".tile",
                flipContainer: ".flip-container",
                notFound: "filter-nav--not-found",
                filterWrapperActive: "filter-wrapper--active",
                flipActive: "flip-container--hover"
            }
        };

    function p() {
        r.show(), s.show(), l.hide(), a.removeClass(u.classes.notFound)
    }

    function d(t) {
        t.each(function() {
            var t = e(this);
            i.find('a:contains("' + t.find("a").text()[0].toUpperCase() + '")').removeClass(u.classes.notFound)
        }), t.length > 0 ? l.hide() : l.show(), r.show(), r.each(function() {
            var t = e(this),
                o = t.find(u.classes.tile).is(":visible");
            o ? t.show() : t.hide()
        })
    }

    function h() {
        e(this).closest(u.classes.flipContainer).toggleClass(u.classes.flipActive)
    }

    function f(e) {
        var t = e.target.value.toLowerCase();
        "blur" === e.type && t.length < 1 && o.removeClass(u.classes.filterWrapperActive), "focus" === e.type && o.addClass(u.classes.filterWrapperActive)
    }

    function g() {
        n.val("").blur(), p()
    }

    function m(t) {
        var o = t.target.value.toLowerCase();
        o.length > 0 ? (a.addClass(u.classes.notFound), d(s.filter(function() {
            var t = e(this);
            if (t.text().toLowerCase().indexOf(o) > -1) return t.show(), t;
            t.hide()
        }))) : p()
    }
    return {
        init: function() {
            n.on("focus blur", f), n.on("keyup change", m), t.on("click", h), c.on("click", g)
        }
    }
}(jQuery || {}), $(function() {
    document.getElementsByClassName("solutions-page").length > 0 && elcm.solutions.init()
});
! function(e) {
    function __webpack_require__(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, __webpack_require__), n.l = !0, n.exports
    }
    var t = window.webpackJsonp;
    window.webpackJsonp = function(r, o, a) {
        for (var i, s, u, c = 0, l = []; c < r.length; c++) s = r[c], n[s] && l.push(n[s][0]), n[s] = 0;
        for (i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
        for (t && t(r, o, a); l.length;) l.shift()();
        if (a)
            for (c = 0; c < a.length; c++) u = __webpack_require__(__webpack_require__.s = a[c]);
        return u
    };
    var r = {},
        n = {
            2: 0
        };
    __webpack_require__.e = function(e) {
        function onScriptComplete() {
            a.onerror = a.onload = null, clearTimeout(i);
            var t = n[e];
            0 !== t && (t && t[1](new Error("Loading chunk " + e + " failed.")), n[e] = void 0)
        }
        var t = n[e];
        if (0 === t) return new Promise(function(e) {
            e()
        });
        if (t) return t[2];
        var r = new Promise(function(r, o) {
            t = n[e] = [r, o]
        });
        t[2] = r;
        var o = document.getElementsByTagName("head")[0],
            a = document.createElement("script");
        a.type = "text/javascript", a.charset = "utf-8", a.async = !0, a.timeout = 12e4, __webpack_require__.nc && a.setAttribute("nonce", __webpack_require__.nc), a.src = __webpack_require__.p + "" + e + ".js";
        var i = setTimeout(onScriptComplete, 12e4);
        return a.onerror = a.onload = onScriptComplete, o.appendChild(a), r
    }, __webpack_require__.m = e, __webpack_require__.c = r, __webpack_require__.i = function(e) {
        return e
    }, __webpack_require__.d = function(e, t, r) {
        __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, __webpack_require__.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return __webpack_require__.d(t, "a", t), t
    }, __webpack_require__.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, __webpack_require__.p = "", __webpack_require__.oe = function(e) {
        throw console.error(e), e
    }, __webpack_require__(__webpack_require__.s = 180)
}([function(e, t, r) {
    var n = r(35)("wks"),
        o = r(39),
        a = r(3).Symbol,
        i = "function" == typeof a;
    (e.exports = function(e) {
        return n[e] || (n[e] = i && a[e] || (i ? a : o)("Symbol." + e))
    }).store = n
}, function(e, t, r) {
    e.exports = r(160).default
}, function(e, t, r) {
    "use strict";

    function isArray(e) {
        return "[object Array]" === a.call(e)
    }

    function isArrayBuffer(e) {
        return "[object ArrayBuffer]" === a.call(e)
    }

    function isFormData(e) {
        return "undefined" != typeof FormData && e instanceof FormData
    }

    function isArrayBufferView(e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
    }

    function isString(e) {
        return "string" == typeof e
    }

    function isNumber(e) {
        return "number" == typeof e
    }

    function isUndefined(e) {
        return void 0 === e
    }

    function isObject(e) {
        return null !== e && "object" == typeof e
    }

    function isDate(e) {
        return "[object Date]" === a.call(e)
    }

    function isFile(e) {
        return "[object File]" === a.call(e)
    }

    function isBlob(e) {
        return "[object Blob]" === a.call(e)
    }

    function isFunction(e) {
        return "[object Function]" === a.call(e)
    }

    function isStream(e) {
        return isObject(e) && isFunction(e.pipe)
    }

    function isURLSearchParams(e) {
        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
    }

    function trim(e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "")
    }

    function isStandardBrowserEnv() {
        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
    }

    function forEach(e, t) {
        if (null !== e && void 0 !== e)
            if ("object" == typeof e || isArray(e) || (e = [e]), isArray(e))
                for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
            else
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
    }

    function merge() {
        function assignValue(t, r) {
            "object" == typeof e[r] && "object" == typeof t ? e[r] = merge(e[r], t) : e[r] = t
        }
        for (var e = {}, t = 0, r = arguments.length; t < r; t++) forEach(arguments[t], assignValue);
        return e
    }

    function extend(e, t, r) {
        return forEach(t, function(t, o) {
            e[o] = r && "function" == typeof t ? n(t, r) : t
        }), e
    }
    var n = r(45),
        o = r(175),
        a = Object.prototype.toString;
    e.exports = {
        isArray: isArray,
        isArrayBuffer: isArrayBuffer,
        isBuffer: o,
        isFormData: isFormData,
        isArrayBufferView: isArrayBufferView,
        isString: isString,
        isNumber: isNumber,
        isObject: isObject,
        isUndefined: isUndefined,
        isDate: isDate,
        isFile: isFile,
        isBlob: isBlob,
        isFunction: isFunction,
        isStream: isStream,
        isURLSearchParams: isURLSearchParams,
        isStandardBrowserEnv: isStandardBrowserEnv,
        forEach: forEach,
        merge: merge,
        extend: extend,
        trim: trim
    }
}, function(e, t) {
    var r = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = r)
}, function(e, t, r) {
    "use strict";

    function escapeChar(e) {
        return n[e]
    }

    function extend(e) {
        for (var t = 1; t < arguments.length; t++)
            for (var r in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], r) && (e[r] = arguments[t][r]);
        return e
    }

    function indexOf(e, t) {
        for (var r = 0, n = e.length; r < n; r++)
            if (e[r] === t) return r;
        return -1
    }

    function escapeExpression(e) {
        if ("string" != typeof e) {
            if (e && e.toHTML) return e.toHTML();
            if (null == e) return "";
            if (!e) return e + "";
            e = "" + e
        }
        return a.test(e) ? e.replace(o, escapeChar) : e
    }

    function isEmpty(e) {
        return !e && 0 !== e || !(!u(e) || 0 !== e.length)
    }

    function createFrame(e) {
        var t = extend({}, e);
        return t._parent = e, t
    }

    function blockParams(e, t) {
        return e.path = t, e
    }

    function appendContextPath(e, t) {
        return (e ? e + "." : "") + t
    }
    t.__esModule = !0, t.extend = extend, t.indexOf = indexOf, t.escapeExpression = escapeExpression, t.isEmpty = isEmpty, t.createFrame = createFrame, t.blockParams = blockParams, t.appendContextPath = appendContextPath;
    var n = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;",
            "=": "&#x3D;"
        },
        o = /[&<>"'`=]/g,
        a = /[&<>"'`=]/,
        i = Object.prototype.toString;
    t.toString = i;
    var s = function(e) {
        return "function" == typeof e
    };
    s(/x/) && (t.isFunction = s = function(e) {
        return "function" == typeof e && "[object Function]" === i.call(e)
    }), t.isFunction = s;
    var u = Array.isArray || function(e) {
        return !(!e || "object" != typeof e) && "[object Array]" === i.call(e)
    };
    t.isArray = u
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.hasBodyClass = function(e) {
        return document.body.classList.contains(e)
    }, t.hasElement = function(e) {
        return document.querySelectorAll(e).length > 0
    }, t.deBounce = function(e, t) {
        var r = void 0;
        return function() {
            var n = this,
                o = arguments,
                a = function() {
                    return e.apply(n, o)
                };
            clearTimeout(r), r = setTimeout(a, t)
        }
    }, t.showElement = function(e) {
        e.style.display = "block"
    }, t.hideElement = function(e) {
        e.style.display = "none"
    }, t.getCurTop = function() {
        var e = $("body"),
            t = Math.abs((e.css("top") || "0").replace("px", ""));
        return e.scrollTop() || $(window).scrollTop() || t
    }, t.decodeHtml = function(e) {
        var t = document.createElement("textarea");
        return t.innerHTML = e, t.value
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.objGet = t.toggleSearch = t.getSiteSearchPath = t.urlContainsPath = t.getLocaleFromUrl = t.getEnvFromUrl = void 0;
    var n = r(5),
        o = (t.getEnvFromUrl = function() {
            switch (window.location.host) {
                case "www.elsevier.com":
                case "elsevier.com":
                    return "production";
                case "elsevier.staging.squiz.co.uk":
                    return "staging";
                default:
                    return "develop"
            }
        }, t.getLocaleFromUrl = function() {
            var e = window.location.pathname.split("/")[1],
                t = /^([a-z][a-z]-[a-z][a-z])$/,
                r = t.exec(e);
            return r ? r[0] : "global"
        });
    t.urlContainsPath = function(e) {
        return window.location.pathname.indexOf(e) > -1
    }, t.getSiteSearchPath = function(e) {
        var t = o();
        return "global" === t ? e + "?" : "/" + t + e + "?"
    }, t.toggleSearch = function(e, t) {
        var r = $("body");
        $(e).on("click", t, function(e) {
            if (e.preventDefault(), window.location.pathname.indexOf("search-results") > -1) return !1;
            $(".header-container .bigsearch-area").slideToggle(100, function() {
                $(".header-container .bigsearch-input").focus(), $(".js-header-menu-toggle-open .main-ui-icon").removeClass("open")
            });
            var t = (0, n.getCurTop)();
            r.hasClass("menu-open") ? (r.attr("style", "").removeClass("menu-open"), $(window).scrollTop(t)) : (r.addClass("menu-open"), r.css({
                top: 0 - t
            })), $(".primary-menu").removeClass("open"), $(".js-header-menu-toggle-open .main-ui-icon").hasClass("open") && r.addClass("menu-open"), r.hasClass("menu-open") ? $(".header-container .bigsearch-area").css({
                position: "relative",
                "z-index": 1e3
            }) : $(".header-container .bigsearch-area").css({
                position: "static"
            })
        })
    }, t.objGet = function(e, t) {
        return t.split(".").reduce(function(e, t) {
            return void 0 === e || null === e ? e : e[t]
        }, e)
    }
}, function(e, t) {
    var r = e.exports = {
        version: "2.6.5"
    };
    "number" == typeof __e && (__e = r)
}, function(e, t, r) {
    var n = r(12);
    e.exports = function(e) {
        if (!n(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.config = {
        checkout: {
            develop: {
                url: "https://checkout.dev.ecommerce.elsevier.com"
            },
            staging: {
                url: "https://checkout.staging.ecommerce.elsevier.com"
            },
            production: {
                url: "https://checkout.elsevier.com"
            }
        },
        cdn: {
            develop: {
                url: "https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io"
            },
            staging: {
                url: "https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io"
            },
            production: {
                url: "https://cdn.elsevier.io"
            }
        },
        urls: {
            develop: {
                url: "https://elsevier-internet-dev.squiz.co.uk"
            },
            staging: {
                url: "https://elsevier.staging.squiz.co.uk"
            },
            production: {
                url: "https://www.elsevier.com"
            }
        },
        sitesearch: {
            appName: "sitesearch",
            develop: {
                url: "https://site-search-api-willgibson.dev.ecommerce.elsevier.com"
            },
            staging: {
                url: "https://site-search-api.staging.ecommerce.elsevier.com"
            },
            production: {
                url: "https://site-search-api.prod.ecommerce.elsevier.com"
            },
            path: "/search-results",
            routes: {
                search: "/search"
            }
        },
        genuine: {
            develop: {
                url: "https://enterprise-sit.api.elsevier.com/cxf/authenticity/checkAuthenticityPS"
            },
            staging: {
                url: "https://enterprise-sit.api.elsevier.com/cxf/authenticity/checkAuthenticityPS"
            },
            production: {
                url: "https://enterprise.api.elsevier.com/cxf/authenticity/checkAuthenticityPS"
            }
        },
        geo: {
            develop: {
                url: "https://elsevier-internet-dev.squiz.co.uk/__geo"
            },
            staging: {
                url: "https://elsevier.staging.squiz.co.uk/__geo"
            },
            production: {
                url: "https://www.elsevier.com/__geo"
            }
        },
        searchtool: {
            develop: {
                url: "https://institute-certificate-generator.dev.ecommerce.elsevier.com"
            },
            staging: {
                url: "https://institute-certificate-generator.staging.ecommerce.elsevier.com"
            },
            production: {
                url: "https://institute-certificate-generator.prod.ecommerce.elsevier.com"
            }
        }
    }
}, function(e, t, r) {
    var n = r(20);
    e.exports = function(e, t, r) {
        if (n(e), void 0 === t) return e;
        switch (r) {
            case 1:
                return function(r) {
                    return e.call(t, r)
                };
            case 2:
                return function(r, n) {
                    return e.call(t, r, n)
                };
            case 3:
                return function(r, n, o) {
                    return e.call(t, r, n, o)
                }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}, function(e, t, r) {
    var n = r(16),
        o = r(32);
    e.exports = r(14) ? function(e, t, r) {
        return n.f(e, t, o(1, r))
    } : function(e, t, r) {
        return e[t] = r, e
    }
}, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function(e, t) {
    var r = {}.toString;
    e.exports = function(e) {
        return r.call(e).slice(8, -1)
    }
}, function(e, t, r) {
    e.exports = !r(30)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t) {
    e.exports = {}
}, function(e, t, r) {
    var n = r(8),
        o = r(125),
        a = r(143),
        i = Object.defineProperty;
    t.f = r(14) ? Object.defineProperty : function(e, t, r) {
        if (n(e), t = a(t, !0), n(r), o) try {
            return i(e, t, r)
        } catch (e) {}
        if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
        return "value" in r && (e[t] = r.value), e
    }
}, function(e, t, r) {
    var n = r(3),
        o = r(11),
        a = r(22),
        i = r(39)("src"),
        s = r(124),
        u = ("" + s).split("toString");
    r(7).inspectSource = function(e) {
        return s.call(e)
    }, (e.exports = function(e, t, r, s) {
        var c = "function" == typeof r;
        c && (a(r, "name") || o(r, "name", t)), e[t] !== r && (c && (a(r, i) || o(r, i, e[t] ? "" + e[t] : u.join(String(t)))), e === n ? e[t] = r : s ? e[t] ? e[t] = r : o(e, t, r) : (delete e[t], o(e, t, r)))
    })(Function.prototype, "toString", function() {
        return "function" == typeof this && this[i] || s.call(this)
    })
}, function(e, t, r) {
    "use strict";

    function Exception(e, t) {
        var r = t && t.loc,
            o = void 0,
            a = void 0;
        r && (o = r.start.line, a = r.start.column, e += " - " + o + ":" + a);
        for (var i = Error.prototype.constructor.call(this, e), s = 0; s < n.length; s++) this[n[s]] = i[n[s]];
        Error.captureStackTrace && Error.captureStackTrace(this, Exception);
        try {
            r && (this.lineNumber = o, Object.defineProperty ? Object.defineProperty(this, "column", {
                value: a,
                enumerable: !0
            }) : this.column = a)
        } catch (e) {}
    }
    t.__esModule = !0;
    var n = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
    Exception.prototype = new Error, t.default = Exception, e.exports = t.default
}, function(e, t, r) {
    e.exports = r(82)
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function(e, t, r) {
    var n = r(3),
        o = r(7),
        a = r(11),
        i = r(17),
        s = r(10),
        u = function(e, t, r) {
            var c, l, p, f, d = e & u.F,
                h = e & u.G,
                v = e & u.S,
                m = e & u.P,
                g = e & u.B,
                b = h ? n : v ? n[t] || (n[t] = {}) : (n[t] || {}).prototype,
                y = h ? o : o[t] || (o[t] = {}),
                x = y.prototype || (y.prototype = {});
            h && (r = t);
            for (c in r) l = !d && b && void 0 !== b[c], p = (l ? b : r)[c], f = g && l ? s(p, n) : m && "function" == typeof p ? s(Function.call, p) : p, b && i(b, c, p, e & u.U), y[c] != p && a(y, c, f), m && x[c] != p && (x[c] = p)
        };
    n.core = o, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e.exports = u
}, function(e, t) {
    var r = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return r.call(e, t)
    }
}, function(e, t, r) {
    var n = r(36),
        o = Math.min;
    e.exports = function(e) {
        return e > 0 ? o(n(e), 9007199254740991) : 0
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.regionMap = {
        global: {
            name: "Global",
            lang: "English",
            locale: {
                name: "Global",
                lang: "English"
            },
            code: "GLOBAL",
            siteSearch: {
                searchBox: "Search for books, journals or webpages...",
                searchBoxMobile: "Search...",
                noResults: "No search results found for",
                noSearchTerm: "Please enter at least one keyword to perform a search.",
                serviceUnavailable: "Service currently unavailable, please try again later.",
                searchResultsFoundFor: "search results found for",
                all: "in all",
                pages: "in webpages",
                books: "in books",
                journals: "in journals",
                labels: {
                    webpages: "Webpages",
                    books: "Books",
                    journals: "Journals"
                },
                previous: "Previous",
                next: "Next",
                seconds: "seconds",
                alternativeTxt: "Alternatively these popular pages can help you:",
                alternativeLinks: [{
                    txt: "Submit your paper",
                    path: "/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "Find an article",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "Find a journal",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "Find a book",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "de-de": {
            name: "Germany",
            lang: "German",
            locale: {
                name: "Deutschland",
                lang: "Deutsch"
            },
            code: "DEU",
            siteSearch: {
                searchBox: "Nach Büchern, Zeitschriften oder Websites suchen...",
                searchBoxMobile: "Suchen...",
                noResults: "Keine Suchergebnisse gefunden für",
                noSearchTerm: "Bitte geben Sie mindestens ein Suchwort ein, um eine Suche durchzuführen.",
                serviceUnavailable: "Der Dienst steht momentan nicht zur Verfügung, bitte versuchen Sie es später erneut.",
                searchResultsFoundFor: "Suchergebnisse gefunden für",
                all: "insgesamt",
                pages: "in Seiten",
                books: "in Büchern",
                journals: "in Zeitschriften",
                labels: {
                    webpages: "Seiten",
                    books: "Büchern",
                    journals: "Zeitschriften"
                },
                previous: "Bisherige",
                next: "Nächster",
                seconds: "sekunden",
                alternativeTxt: "Alternativ können Ihnen diese beliebten Seiten weiterhelfen:",
                alternativeLinks: [{
                    txt: "Wissenschaftliche Arbeit einreichen",
                    path: "/de-de/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "Einen Artikel finden",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "Zeitschrift suchen",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "Ein Buch finden",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "en-gb": {
            name: "United Kingdom",
            lang: "English",
            locale: {
                name: "United Kingdom",
                lang: "English"
            },
            code: "GBR",
            siteSearch: {
                searchBox: "Search for books, journals or webpages...",
                searchBoxMobile: "Search...",
                noResults: "No search results found for",
                noSearchTerm: "Please enter at least one keyword to perform a search.",
                serviceUnavailable: "Service currently unavailable, please try again later.",
                searchResultsFoundFor: "search results found for",
                all: "in all",
                pages: "in webpages",
                books: "in books",
                journals: "in journals",
                labels: {
                    webpages: "Webpages",
                    books: "Books",
                    journals: "Journals"
                },
                previous: "Previous",
                next: "Next",
                seconds: "seconds",
                alternativeTxt: "Alternatively these popular pages can help you:",
                alternativeLinks: [{
                    txt: "Submit your paper",
                    path: "/en-gb/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "Find an article",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "Find a journal",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "Find a book",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "en-au": {
            name: "Australia",
            lang: "English",
            locale: {
                name: "Australia",
                lang: "English"
            },
            code: "AUS",
            siteSearch: {
                searchBox: "Search for books, journals or webpages...",
                searchBoxMobile: "Search...",
                noResults: "No search results found for",
                noSearchTerm: "Please enter at least one keyword to perform a search.",
                serviceUnavailable: "Service currently unavailable, please try again later.",
                searchResultsFoundFor: "search results found for",
                all: "in all",
                pages: "in webpages",
                books: "in books",
                journals: "in journals",
                labels: {
                    webpages: "Webpages",
                    books: "Books",
                    journals: "Journals"
                },
                previous: "Previous",
                next: "Next",
                seconds: "seconds",
                alternativeTxt: "Alternatively these popular pages can help you:",
                alternativeLinks: [{
                    txt: "Submit your paper",
                    path: "/en-au/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "Find an article",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "Find a journal",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "Find a book",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "en-in": {
            name: "India",
            lang: "English",
            locale: {
                name: "India",
                lang: "English"
            },
            code: "IND",
            siteSearch: {
                searchBox: "Search for books, journals or webpages...",
                searchBoxMobile: "Search...",
                noResults: "No search results found for",
                noSearchTerm: "Please enter at least one keyword to perform a search.",
                serviceUnavailable: "Service currently unavailable, please try again later.",
                searchResultsFoundFor: "search results found for",
                all: "in all",
                pages: "in webpages",
                books: "in books",
                journals: "in journals",
                labels: {
                    webpages: "Webpages",
                    books: "Books",
                    journals: "Journals"
                },
                previous: "Previous",
                next: "Next",
                seconds: "seconds",
                alternativeTxt: "Alternatively these popular pages can help you:",
                alternativeLinks: [{
                    txt: "Submit your paper",
                    path: "/en-in/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "Find an article",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "Find a journal",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "Find a book",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "en-xm": {
            name: "Middle East",
            lang: "English",
            locale: {
                name: "Middle East",
                lang: "English"
            },
            code: "XM",
            siteSearch: {
                searchBox: "Search for books, journals or webpages...",
                searchBoxMobile: "Search...",
                noResults: "No search results found for",
                noSearchTerm: "Please enter at least one keyword to perform a search.",
                serviceUnavailable: "Service currently unavailable, please try again later.",
                searchResultsFoundFor: "search results found for",
                all: "in all",
                pages: "in webpages",
                books: "in books",
                journals: "in journals",
                labels: {
                    webpages: "Webpages",
                    books: "Books",
                    journals: "Journals"
                },
                previous: "Previous",
                next: "Next",
                seconds: "seconds",
                alternativeTxt: "Alternatively these popular pages can help you:",
                alternativeLinks: [{
                    txt: "Submit your paper",
                    path: "/en-xm/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "Find an article",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "Find a journal",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "Find a book",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "en-xs": {
            name: "South East Asia",
            lang: "English",
            locale: {
                name: "South East Asia",
                lang: "English"
            },
            code: "XS",
            siteSearch: {
                searchBox: "Search for books, journals or webpages...",
                searchBoxMobile: "Search...",
                noResults: "No search results found for",
                noSearchTerm: "Please enter at least one keyword to perform a search.",
                serviceUnavailable: "Service currently unavailable, please try again later.",
                searchResultsFoundFor: "search results found for",
                all: "in all",
                pages: "in webpages",
                books: "in books",
                journals: "in journals",
                labels: {
                    webpages: "Webpages",
                    books: "Books",
                    journals: "Journals"
                },
                previous: "Previous",
                next: "Next",
                seconds: "seconds",
                alternativeTxt: "Alternatively these popular pages can help you:",
                alternativeLinks: [{
                    txt: "Submit your paper",
                    path: "/en-xs/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "Find an article",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "Find a journal",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "Find a book",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "es-es": {
            name: "Spain",
            lang: "Spanish",
            locale: {
                name: "España",
                lang: "Español"
            },
            code: "ESP",
            siteSearch: {
                searchBox: "Buscar libros, revistas o páginas web",
                searchBoxMobile: "Buscar...",
                noResults: "No se han encontrado resultados de la búsqueda para",
                noSearchTerm: "Introduzca al menos una palabra clave para realizar una búsqueda.",
                serviceUnavailable: "Servicio no disponible en este momento, vuelva a intentarlo más tarde",
                searchResultsFoundFor: "Se han encontrado resultados de la búsqueda para",
                all: "en todo",
                pages: "en páginas",
                books: "en libros",
                journals: "en revistas",
                labels: {
                    webpages: "Páginas",
                    books: "Libros",
                    journals: "Revistas"
                },
                previous: "Anterior",
                next: "Siguiente",
                seconds: "segundos",
                alternativeTxt: "Como alternativa, estas populares páginas pueden ayudarle:",
                alternativeLinks: [{
                    txt: "Envíe su artículo",
                    path: "/es-es/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "Encontrar un artículo",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "Encontrar una revista",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "Encontrar un libro",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "es-mx": {
            name: "Mexico",
            lang: "Spanish",
            locale: {
                name: "México",
                lang: "Español"
            },
            code: "MEX",
            siteSearch: {
                searchBox: "Buscar libros, revistas o páginas web",
                searchBoxMobile: "Buscar...",
                noResults: "No se han encontrado resultados de la búsqueda para",
                noSearchTerm: "Introduzca al menos una palabra clave para realizar una búsqueda.",
                serviceUnavailable: "Servicio no disponible en este momento, vuelva a intentarlo más tarde",
                searchResultsFoundFor: "Se han encontrado resultados de la búsqueda para",
                all: "en todo",
                pages: "en páginas",
                books: "en libros",
                journals: "en revistas",
                labels: {
                    webpages: "Páginas",
                    books: "Libros",
                    journals: "Revistas"
                },
                previous: "Anterior",
                next: "Siguiente",
                seconds: "segundos",
                alternativeTxt: "Como alternativa, estas populares páginas pueden ayudarle:",
                alternativeLinks: [{
                    txt: "Envíe su artículo",
                    path: "/es-mx/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "Encontrar un artículo",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "Encontrar una revista",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "Encontrar un libro",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "fr-fr": {
            name: "France",
            lang: "French",
            locale: {
                name: "France",
                lang: "Français"
            },
            code: "FRA",
            siteSearch: {
                searchBox: "Rechercher des livres, revues ou pages web...",
                searchBoxMobile: "Chercher...",
                noResults: "Aucun résultat de recherche pour",
                noSearchTerm: "Veuillez saisir au moins un mot clé pour lancer la recherche.",
                serviceUnavailable: "Service actuellement indisponible, veuillez réessayer plus tard",
                searchResultsFoundFor: "résultats de recherche pour",
                all: "tout",
                pages: "pages",
                books: "livres",
                journals: "revues",
                labels: {
                    webpages: "Pages",
                    books: "Livres",
                    journals: "Revues"
                },
                previous: "Précédent",
                next: "Prochain",
                seconds: "secondes",
                alternativeTxt: "Autrement, ces pages plus visitées peuvent vous aider:",
                alternativeLinks: [{
                    txt: "Soumettre votre article",
                    path: "/fr-fr/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "Rechercher un article",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "Trouver une revue",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "Trouver un livre",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "ko-kr": {
            name: "Korea",
            lang: "Korean",
            locale: {
                name: "한국",
                lang: "한국어"
            },
            code: "KOR",
            siteSearch: {
                searchBox: "도서, 저널 혹은 웹페이지 검색...",
                searchBoxMobile: "검색...",
                noResults: "검색 결과가 없습니다.",
                noSearchTerm: "검색을 수행하려면 하나 이상의 키워드를 입력하십시오.",
                serviceUnavailable: "현재 서비스를 사용할 수 없습니다. 나중에 다시 이용하시기 바랍니다.",
                searchResultsFoundFor: "다음에 대한 검색 결과",
                all: "전체에서",
                pages: "페이지에서",
                books: "도서에서",
                journals: "저널에서",
                labels: {
                    webpages: "웹페이지",
                    books: "도서",
                    journals: "저널"
                },
                previous: "이전",
                next: "다음",
                seconds: "seconds",
                alternativeTxt: "이러한 인기 페이지를 통해 다음과 같은 이점을 누릴 수 있습니다.",
                alternativeLinks: [{
                    txt: "논문 제출",
                    path: "/ko-kr/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "논문 찾기",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "저널 찾기",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "도서 찾기",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "ja-jp": {
            name: "Japan",
            lang: "Japanese",
            locale: {
                name: "日本",
                lang: "日本語"
            },
            code: "JPN",
            siteSearch: {
                searchBox: "書籍、ジャーナル、ウェブサイトを検索する...",
                searchBoxMobile: "検索...",
                noResults: "検索結果なし",
                noSearchTerm: "検索をするために最低一つのキーワードを入力してください。",
                serviceUnavailable: "現在お使いいただけません。後ほどお試しください。",
                searchResultsFoundFor: "検索結果",
                all: "すべて",
                pages: "ページ",
                books: "書籍",
                journals: "ジャーナル",
                labels: {
                    webpages: "ウェブページ",
                    books: "書籍",
                    journals: "ジャーナル"
                },
                previous: "前",
                next: "次へ",
                seconds: "秒",
                alternativeTxt: "またはこちらの好評なページをご利用ください:",
                alternativeLinks: [{
                    txt: "論文を提出する",
                    path: "/ja-jp/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "論文を検索する",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "ジャーナル検索",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "書籍を検索する",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "pl-pl": {
            name: "Poland",
            lang: "Polish",
            locale: {
                name: "Polska",
                lang: "Polski"
            },
            code: "POL",
            siteSearch: {
                searchBox: "Wyszukiwanie książek, czasopism lub stron internetowych...",
                searchBoxMobile: "Szukaj...",
                noResults: "Brak wyników wyszukiwania",
                noSearchTerm: "Aby przeprowadzić wyszukiwanie, wprowadź co najmniej jedno słowo kluczowe.",
                serviceUnavailable: "Serwis czasowo niedostępny, spróbuj ponownie później",
                searchResultsFoundFor: "wyników wyszukiwania",
                all: "we wszystkich treściach",
                pages: "na stronach",
                books: "w książkach",
                journals: "w czasopismach",
                labels: {
                    webpages: "Stronach",
                    books: "Książkach",
                    journals: "Czasopismach"
                },
                previous: "Poprzedni",
                next: "Kolejny",
                seconds: "sekundy",
                alternativeTxt: "Możesz też uzyskać pomoc na tych popularnych stronach:",
                alternativeLinks: [{
                    txt: "Prześlij swój artykuł",
                    path: "/pl-pl/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "Znajdź artykuł",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "Szukaj czasopisma",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "Znajdź książkę",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "pt-br": {
            name: "Brazil",
            lang: "Portuguese",
            locale: {
                name: "Brasil",
                lang: "Português"
            },
            code: "BRA",
            siteSearch: {
                searchBox: "Pesquisar livros, revistas ou páginas da internet...",
                searchBoxMobile: "Pesquisar...",
                noResults: "Nenhum resultado encontrado para",
                noSearchTerm: "Insira pelo menos uma palavra-chave para realizar a busca.",
                serviceUnavailable: "Serviço indisponível no momento, tente novamente mais tarde",
                searchResultsFoundFor: "pesquisar resultados encontrados para",
                all: "em tudo",
                pages: "em páginas",
                books: "em livros",
                journals: "em revistas",
                labels: {
                    webpages: "Páginas da internet",
                    books: "Livros",
                    journals: "Revistas científicas"
                },
                previous: "Anterior",
                next: "Próximo",
                seconds: "segundos",
                alternativeTxt: "Ou essas páginas populares podem ajudar você a:",
                alternativeLinks: [{
                    txt: "Envie o seu artigo",
                    path: "/pt-br/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "Encontrar um artigo",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "Encontre uma revista científica",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "Encontrar um livro",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "tr-tr": {
            name: "Turkey",
            lang: "Turkish",
            locale: {
                name: "Türkiye",
                lang: "Türkçe"
            },
            code: "TUR",
            siteSearch: {
                searchBox: "Kitap, dergi veya internet sayfası arayın...",
                searchBoxMobile: "Ara",
                noResults: "Şunun için arama sonucu bulunamadı:",
                noSearchTerm: "Lütfen arama yapmak için en az bir anahtar sözcük girin.",
                serviceUnavailable: "Hizmet şu anda kullanılamıyor, lütfen daha sonra yeniden deneyin",
                searchResultsFoundFor: "şunun için bulunan arama sonuçları:",
                all: "tümünde",
                pages: "sayfalarda",
                books: "kitaplarda",
                journals: "dergilerde",
                labels: {
                    webpages: "İnternet sayfaları",
                    books: "Kitaplar",
                    journals: "Akademik Dergiler"
                },
                previous: "Önceki",
                next: "Sonraki",
                seconds: "saniyeler",
                alternativeTxt: "Alternatif olarak şu popüler sayfalar size yardımcı olabilir:",
                alternativeLinks: [{
                    txt: "Makalenizi gönderin",
                    path: "/tr-tr/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "Bir kitap bulun",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "Makale bulun",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "Bir Dergi bulun",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "zh-cn": {
            name: "China",
            lang: "Chinese (Simplified)",
            locale: {
                name: "中国",
                lang: "简体中文"
            },
            code: "CHN",
            siteSearch: {
                searchBox: "搜索图书、期刊或网页......",
                searchBoxMobile: "搜索...",
                noResults: "未发现任何搜索结果",
                noSearchTerm: "请输入至少一个关键词来执行搜索。",
                serviceUnavailable: "当前服务不可用，请稍后再试",
                searchResultsFoundFor: "发现搜索结果",
                all: "在所有刊物中",
                pages: "在页面中",
                books: "在图书中",
                journals: "在期刊中",
                labels: {
                    webpages: "网页",
                    books: "图书",
                    journals: "期刊"
                },
                previous: "上一页",
                next: "下一页",
                seconds: "秒",
                alternativeTxt: "或者，这些流行页可帮助您：",
                alternativeLinks: [{
                    txt: "提交您的论文",
                    path: "/zh-cn/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "查找文章",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "查找期刊",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "查找图书",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "zh-tw": {
            name: "Taiwan",
            lang: "Taiwanese Mandarin",
            locale: {
                name: "台灣",
                lang: "繁體中文"
            },
            code: "TWN",
            siteSearch: {
                searchBox: "搜尋書籍、期刊或網頁…",
                searchBoxMobile: "搜尋…",
                noResults: "沒有找到搜尋結果",
                noSearchTerm: "請輸入至少一個關鍵字以執行搜尋。",
                serviceUnavailable: "目前無法使用服務，請稍後再試",
                searchResultsFoundFor: "找到搜尋結果",
                all: "所有",
                pages: "頁面",
                books: "書籍",
                journals: "期刊",
                labels: {
                    webpages: "網頁",
                    books: "書籍",
                    journals: "期刊"
                },
                previous: "前一頁",
                next: "後一頁",
                seconds: "秒",
                alternativeTxt: "或者，這些熱門頁面可幫助您：",
                alternativeLinks: [{
                    txt: "提交您的論文",
                    path: "/zh-tw/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "尋找論文",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "尋找期刊",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "找尋書籍",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "en-af": {
            name: "Africa",
            lang: "English",
            code: "AF"
        },
        "en-bh": {
            name: "Bahrain",
            lang: "English",
            code: "BHR"
        },
        "en-iq": {
            name: "Iraq",
            lang: "English",
            code: "IRQ"
        },
        "en-jo": {
            name: "Jordan",
            lang: "English",
            code: "JOR"
        },
        "en-kw": {
            name: "Kuwait",
            lang: "English",
            code: "KWT"
        },
        "en-lb": {
            name: "Lebanon",
            lang: "English",
            code: "LBN"
        },
        "en-om": {
            name: "Oman",
            lang: "English",
            code: "OMN"
        },
        "en-ps": {
            name: "Palestinian Territory, Occupied",
            lang: "English",
            code: "PSE"
        },
        "en-qa": {
            name: "Qatar",
            lang: "English",
            code: "QAT"
        },
        "en-sa": {
            name: "Saudi Arabia",
            lang: "English",
            code: "SAU"
        },
        "en-sy": {
            name: "Syrian Arab Republic (Syria)",
            lang: "English",
            code: "SYR"
        },
        "en-ae": {
            name: "United Arab Emirates",
            lang: "English",
            code: "ARE"
        },
        "en-ye": {
            name: "Yemen",
            lang: "English",
            code: "YEM"
        },
        "en-bn": {
            name: "Brunei",
            lang: "English",
            code: "BRN"
        },
        "en-kh": {
            name: "Cambodia",
            lang: "English",
            code: "KHM"
        },
        "en-id": {
            name: "Indonesia",
            lang: "English",
            code: "IDN"
        },
        "en-la": {
            name: "Laos",
            lang: "English",
            code: "LAO"
        },
        "en-my": {
            name: "Malaysia",
            lang: "English",
            code: "MYS"
        },
        "en-mm": {
            name: "Myanmar",
            lang: "English",
            code: "MMR"
        },
        "en-ph": {
            name: "Philippines",
            lang: "English",
            code: "PHL"
        },
        "en-sg": {
            name: "Singapore",
            lang: "English",
            code: "SGP"
        },
        "en-th": {
            name: "Thailand",
            lang: "English",
            code: "THA"
        },
        "en-vn": {
            name: "Vietnam",
            lang: "English",
            code: "VNM"
        }
    }
}, function(e, t, r) {
    "use strict";
    (function(t) {
        function setContentTypeIfUnset(e, t) {
            !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }
        var n = r(2),
            o = r(96),
            a = {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            i = {
                adapter: function() {
                    var e;
                    return "undefined" != typeof XMLHttpRequest ? e = r(41) : void 0 !== t && (e = r(41)), e
                }(),
                transformRequest: [function(e, t) {
                    return o(t, "Content-Type"), n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e) ? e : n.isArrayBufferView(e) ? e.buffer : n.isURLSearchParams(e) ? (setContentTypeIfUnset(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : n.isObject(e) ? (setContentTypeIfUnset(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
                }],
                transformResponse: [function(e) {
                    if ("string" == typeof e) try {
                        e = JSON.parse(e)
                    } catch (e) {}
                    return e
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function(e) {
                    return e >= 200 && e < 300
                }
            };
        i.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        }, n.forEach(["delete", "get", "head"], function(e) {
            i.headers[e] = {}
        }), n.forEach(["post", "put", "patch"], function(e) {
            i.headers[e] = n.merge(a)
        }), e.exports = i
    }).call(t, r(61))
}, , function(e, t, r) {
    var n = r(13),
        o = r(0)("toStringTag"),
        a = "Arguments" == n(function() {
            return arguments
        }()),
        i = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        };
    e.exports = function(e) {
        var t, r, s;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(r = i(t = Object(e), o)) ? r : a ? n(t) : "Object" == (s = n(t)) && "function" == typeof t.callee ? "Arguments" : s
    }
}, function(e, t) {
    e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function(e, t, r) {
    var n = r(12),
        o = r(3).document,
        a = n(o) && n(o.createElement);
    e.exports = function(e) {
        return a ? o.createElement(e) : {}
    }
}, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function(e, t) {
    e.exports = !1
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function(e, t, r) {
    var n = r(16).f,
        o = r(22),
        a = r(0)("toStringTag");
    e.exports = function(e, t, r) {
        e && !o(e = r ? e : e.prototype, a) && n(e, a, {
            configurable: !0,
            value: t
        })
    }
}, function(e, t, r) {
    var n = r(35)("keys"),
        o = r(39);
    e.exports = function(e) {
        return n[e] || (n[e] = o(e))
    }
}, function(e, t, r) {
    var n = r(7),
        o = r(3),
        a = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (e.exports = function(e, t) {
        return a[e] || (a[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: n.version,
        mode: r(31) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function(e, t) {
    var r = Math.ceil,
        n = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? n : r)(e)
    }
}, function(e, t, r) {
    var n = r(49),
        o = r(28);
    e.exports = function(e) {
        return n(o(e))
    }
}, function(e, t, r) {
    var n = r(28);
    e.exports = function(e) {
        return Object(n(e))
    }
}, function(e, t) {
    var r = 0,
        n = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++r + n).toString(36))
    }
}, , function(e, t, r) {
    "use strict";
    (function(t) {
        var n = r(2),
            o = r(88),
            a = r(91),
            i = r(97),
            s = r(95),
            u = r(44),
            c = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || r(90);
        e.exports = function(e) {
            return new Promise(function(l, p) {
                var f = e.data,
                    d = e.headers;
                n.isFormData(f) && delete d["Content-Type"];
                var h = new XMLHttpRequest,
                    v = "onreadystatechange",
                    m = !1;
                if ("test" === t.env.NODE_ENV || "undefined" == typeof window || !window.XDomainRequest || "withCredentials" in h || s(e.url) || (h = new window.XDomainRequest, v = "onload", m = !0, h.onprogress = function() {}, h.ontimeout = function() {}), e.auth) {
                    var g = e.auth.username || "",
                        b = e.auth.password || "";
                    d.Authorization = "Basic " + c(g + ":" + b)
                }
                if (h.open(e.method.toUpperCase(), a(e.url, e.params, e.paramsSerializer), !0), h.timeout = e.timeout, h[v] = function() {
                        if (h && (4 === h.readyState || m) && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:"))) {
                            var t = "getAllResponseHeaders" in h ? i(h.getAllResponseHeaders()) : null,
                                r = e.responseType && "text" !== e.responseType ? h.response : h.responseText,
                                n = {
                                    data: r,
                                    status: 1223 === h.status ? 204 : h.status,
                                    statusText: 1223 === h.status ? "No Content" : h.statusText,
                                    headers: t,
                                    config: e,
                                    request: h
                                };
                            o(l, p, n), h = null
                        }
                    }, h.onerror = function() {
                        p(u("Network Error", e, null, h)), h = null
                    }, h.ontimeout = function() {
                        p(u("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", h)), h = null
                    }, n.isStandardBrowserEnv()) {
                    var y = r(93),
                        x = (e.withCredentials || s(e.url)) && e.xsrfCookieName ? y.read(e.xsrfCookieName) : void 0;
                    x && (d[e.xsrfHeaderName] = x)
                }
                if ("setRequestHeader" in h && n.forEach(d, function(e, t) {
                        void 0 === f && "content-type" === t.toLowerCase() ? delete d[t] : h.setRequestHeader(t, e)
                    }), e.withCredentials && (h.withCredentials = !0), e.responseType) try {
                    h.responseType = e.responseType
                } catch (t) {
                    if ("json" !== e.responseType) throw t
                }
                "function" == typeof e.onDownloadProgress && h.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && h.upload && h.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
                    h && (h.abort(), p(e), h = null)
                }), void 0 === f && (f = null), h.send(f)
            })
        }
    }).call(t, r(61))
}, function(e, t, r) {
    "use strict";

    function Cancel(e) {
        this.message = e
    }
    Cancel.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, Cancel.prototype.__CANCEL__ = !0, e.exports = Cancel
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return !(!e || !e.__CANCEL__)
    }
}, function(e, t, r) {
    "use strict";
    var n = r(87);
    e.exports = function(e, t, r, o, a) {
        var i = new Error(e);
        return n(i, t, r, o, a)
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t) {
        return function() {
            for (var r = new Array(arguments.length), n = 0; n < r.length; n++) r[n] = arguments[n];
            return e.apply(t, r)
        }
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getQueryParam = function(e) {
        e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
        var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
            r = t.exec(location.search);
        return null === r ? "" : decodeURIComponent(r[1].replace(/\+/g, " "))
    }, t.getClientOS = function(e) {
        return e.indexOf("Win") > -1 ? "Windows" : e.indexOf("Mac") > -1 ? "Mac" : e.indexOf("X11") > -1 ? "Unix" : e.indexOf("Linux") > -1 ? "Linux" : "Other"
    }, t.storageAvailable = function(e) {
        try {
            var t = window[e],
                r = "__storage_test__";
            return t.setItem(r, r), t.removeItem(r), !0
        } catch (e) {
            return e instanceof DOMException && (22 === e.code || 1014 === e.code || "QuotaExceededError" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name) && 0 !== storage.length
        }
    }
}, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t, r) {
    var n = r(3).document;
    e.exports = n && n.documentElement
}, function(e, t, r) {
    var n = r(13);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == n(e) ? e.split("") : Object(e)
    }
}, function(e, t, r) {
    var n = r(15),
        o = r(0)("iterator"),
        a = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (n.Array === e || a[o] === e)
    }
}, function(e, t, r) {
    var n = r(8);
    e.exports = function(e, t, r, o) {
        try {
            return o ? t(n(r)[0], r[1]) : t(r)
        } catch (t) {
            var a = e.return;
            throw void 0 !== a && n(a.call(e)), t
        }
    }
}, function(e, t, r) {
    "use strict";
    var n = r(31),
        o = r(21),
        a = r(17),
        i = r(11),
        s = r(15),
        u = r(128),
        c = r(33),
        l = r(133),
        p = r(0)("iterator"),
        f = !([].keys && "next" in [].keys()),
        d = function() {
            return this
        };
    e.exports = function(e, t, r, h, v, m, g) {
        u(r, t, h);
        var b, y, x, w = function(e) {
                if (!f && e in j) return j[e];
                switch (e) {
                    case "keys":
                    case "values":
                        return function() {
                            return new r(this, e)
                        }
                }
                return function() {
                    return new r(this, e)
                }
            },
            _ = t + " Iterator",
            k = "values" == v,
            S = !1,
            j = e.prototype,
            E = j[p] || j["@@iterator"] || v && j[v],
            T = E || w(v),
            P = v ? k ? w("entries") : T : void 0,
            R = "Array" == t ? j.entries || E : E;
        if (R && (x = l(R.call(new e))) !== Object.prototype && x.next && (c(x, _, !0), n || "function" == typeof x[p] || i(x, p, d)), k && E && "values" !== E.name && (S = !0, T = function() {
                return E.call(this)
            }), n && !g || !f && !S && j[p] || i(j, p, T), s[t] = T, s[_] = d, v)
            if (b = {
                    values: k ? T : w("values"),
                    keys: m ? T : w("keys"),
                    entries: P
                }, g)
                for (y in b) y in j || a(j, y, b[y]);
            else o(o.P + o.F * (f || S), t, b);
        return b
    }
}, function(e, t, r) {
    var n = r(0)("iterator"),
        o = !1;
    try {
        var a = [7][n]();
        a.return = function() {
            o = !0
        }, Array.from(a, function() {
            throw 2
        })
    } catch (e) {}
    e.exports = function(e, t) {
        if (!t && !o) return !1;
        var r = !1;
        try {
            var a = [7],
                i = a[n]();
            i.next = function() {
                return {
                    done: r = !0
                }
            }, a[n] = function() {
                return i
            }, e(a)
        } catch (e) {}
        return r
    }
}, function(e, t, r) {
    "use strict";

    function PromiseCapability(e) {
        var t, r;
        this.promise = new e(function(e, n) {
            if (void 0 !== t || void 0 !== r) throw TypeError("Bad Promise constructor");
            t = e, r = n
        }), this.resolve = n(t), this.reject = n(r)
    }
    var n = r(20);
    e.exports.f = function(e) {
        return new PromiseCapability(e)
    }
}, function(e, t, r) {
    var n = r(134),
        o = r(47);
    e.exports = Object.keys || function(e) {
        return n(e, o)
    }
}, function(e, t, r) {
    var n, o, a, i = r(10),
        s = r(126),
        u = r(48),
        c = r(29),
        l = r(3),
        p = l.process,
        f = l.setImmediate,
        d = l.clearImmediate,
        h = l.MessageChannel,
        v = l.Dispatch,
        m = 0,
        g = {},
        b = function() {
            var e = +this;
            if (g.hasOwnProperty(e)) {
                var t = g[e];
                delete g[e], t()
            }
        },
        y = function(e) {
            b.call(e.data)
        };
    f && d || (f = function(e) {
        for (var t = [], r = 1; arguments.length > r;) t.push(arguments[r++]);
        return g[++m] = function() {
            s("function" == typeof e ? e : Function(e), t)
        }, n(m), m
    }, d = function(e) {
        delete g[e]
    }, "process" == r(13)(p) ? n = function(e) {
        p.nextTick(i(b, e, 1))
    } : v && v.now ? n = function(e) {
        v.now(i(b, e, 1))
    } : h ? (o = new h, a = o.port2, o.port1.onmessage = y, n = i(a.postMessage, a, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (n = function(e) {
        l.postMessage(e + "", "*")
    }, l.addEventListener("message", y, !1)) : n = "onreadystatechange" in c("script") ? function(e) {
        u.appendChild(c("script")).onreadystatechange = function() {
            u.removeChild(this), b.call(e)
        }
    } : function(e) {
        setTimeout(i(b, e, 1), 0)
    }), e.exports = {
        set: f,
        clear: d
    }
}, function(e, t, r) {
    var n = r(27),
        o = r(0)("iterator"),
        a = r(15);
    e.exports = r(7).getIteratorMethod = function(e) {
        if (void 0 != e) return e[o] || e["@@iterator"] || a[n(e)]
    }
}, function(e, t, r) {
    "use strict";
    var n = r(141)(!0);
    r(52)(String, "String", function(e) {
        this._t = String(e), this._i = 0
    }, function() {
        var e, t = this._t,
            r = this._i;
        return r >= t.length ? {
            value: void 0,
            done: !0
        } : (e = n(t, r), this._i += e.length, {
            value: e,
            done: !1
        })
    })
}, , function(e, t, r) {
    "use strict";

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function HandlebarsEnvironment(e, t, r) {
        this.helpers = e || {}, this.partials = t || {}, this.decorators = r || {}, i.registerDefaultHelpers(this), s.registerDefaultDecorators(this)
    }
    t.__esModule = !0, t.HandlebarsEnvironment = HandlebarsEnvironment;
    var n = r(4),
        o = r(18),
        a = _interopRequireDefault(o),
        i = r(163),
        s = r(161),
        u = r(171),
        c = _interopRequireDefault(u);
    t.VERSION = "4.1.0";
    t.COMPILER_REVISION = 7;
    var l = {
        1: "<= 1.0.rc.2",
        2: "== 1.0.0-rc.3",
        3: "== 1.0.0-rc.4",
        4: "== 1.x.x",
        5: "== 2.0.0-alpha.x",
        6: ">= 2.0.0-beta.1",
        7: ">= 4.0.0"
    };
    t.REVISION_CHANGES = l;
    HandlebarsEnvironment.prototype = {
        constructor: HandlebarsEnvironment,
        logger: c.default,
        log: c.default.log,
        registerHelper: function(e, t) {
            if ("[object Object]" === n.toString.call(e)) {
                if (t) throw new a.default("Arg not supported with multiple helpers");
                n.extend(this.helpers, e)
            } else this.helpers[e] = t
        },
        unregisterHelper: function(e) {
            delete this.helpers[e]
        },
        registerPartial: function(e, t) {
            if ("[object Object]" === n.toString.call(e)) n.extend(this.partials, e);
            else {
                if (void 0 === t) throw new a.default('Attempting to register a partial called "' + e + '" as undefined');
                this.partials[e] = t
            }
        },
        unregisterPartial: function(e) {
            delete this.partials[e]
        },
        registerDecorator: function(e, t) {
            if ("[object Object]" === n.toString.call(e)) {
                if (t) throw new a.default("Arg not supported with multiple decorators");
                n.extend(this.decorators, e)
            } else this.decorators[e] = t
        },
        unregisterDecorator: function(e) {
            delete this.decorators[e]
        }
    };
    var p = c.default.log;
    t.log = p, t.createFrame = n.createFrame, t.logger = c.default
}, function(e, t) {
    function defaultSetTimout() {
        throw new Error("setTimeout has not been defined")
    }

    function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined")
    }

    function runTimeout(e) {
        if (r === setTimeout) return setTimeout(e, 0);
        if ((r === defaultSetTimout || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
        try {
            return r(e, 0)
        } catch (t) {
            try {
                return r.call(null, e, 0)
            } catch (t) {
                return r.call(this, e, 0)
            }
        }
    }

    function runClearTimeout(e) {
        if (n === clearTimeout) return clearTimeout(e);
        if ((n === defaultClearTimeout || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
        try {
            return n(e)
        } catch (t) {
            try {
                return n.call(null, e)
            } catch (t) {
                return n.call(this, e)
            }
        }
    }

    function cleanUpNextTick() {
        s && a && (s = !1, a.length ? i = a.concat(i) : u = -1, i.length && drainQueue())
    }

    function drainQueue() {
        if (!s) {
            var e = runTimeout(cleanUpNextTick);
            s = !0;
            for (var t = i.length; t;) {
                for (a = i, i = []; ++u < t;) a && a[u].run();
                u = -1, t = i.length
            }
            a = null, s = !1, runClearTimeout(e)
        }
    }

    function Item(e, t) {
        this.fun = e, this.array = t
    }

    function noop() {}
    var r, n, o = e.exports = {};
    ! function() {
        try {
            r = "function" == typeof setTimeout ? setTimeout : defaultSetTimout
        } catch (e) {
            r = defaultSetTimout
        }
        try {
            n = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout
        } catch (e) {
            n = defaultClearTimeout
        }
    }();
    var a, i = [],
        s = !1,
        u = -1;
    o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        i.push(new Item(e, t)), 1 !== i.length || s || runTimeout(drainQueue)
    }, Item.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = noop, o.addListener = noop, o.once = noop, o.off = noop, o.removeListener = noop, o.removeAllListeners = noop, o.emit = noop, o.prependListener = noop, o.prependOnceListener = noop, o.listeners = function(e) {
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
}, , , , , , , , , , , , , , , , , , function(e, t, r) {
    r(148), r(58), r(150), r(149), e.exports = r(7).Promise
}, function(e, t, r) {
    r(145), e.exports = r(7).Array.forEach
}, function(e, t, r) {
    r(58), r(146), e.exports = r(7).Array.from
}, function(e, t, r) {
    "use strict";

    function createInstance(e) {
        var t = new a(e),
            r = o(a.prototype.request, t);
        return n.extend(r, a.prototype, t), n.extend(r, t), r
    }
    var n = r(2),
        o = r(45),
        a = r(84),
        i = r(25),
        s = createInstance(i);
    s.Axios = a, s.create = function(e) {
        return createInstance(n.merge(i, e))
    }, s.Cancel = r(42), s.CancelToken = r(83), s.isCancel = r(43), s.all = function(e) {
        return Promise.all(e)
    }, s.spread = r(98), e.exports = s, e.exports.default = s
}, function(e, t, r) {
    "use strict";

    function CancelToken(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function(e) {
            t = e
        });
        var r = this;
        e(function(e) {
            r.reason || (r.reason = new n(e), t(r.reason))
        })
    }
    var n = r(42);
    CancelToken.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason
    }, CancelToken.source = function() {
        var e;
        return {
            token: new CancelToken(function(t) {
                e = t
            }),
            cancel: e
        }
    }, e.exports = CancelToken
}, function(e, t, r) {
    "use strict";

    function Axios(e) {
        this.defaults = e, this.interceptors = {
            request: new a,
            response: new a
        }
    }
    var n = r(25),
        o = r(2),
        a = r(85),
        i = r(86),
        s = r(94),
        u = r(92);
    Axios.prototype.request = function(e) {
        "string" == typeof e && (e = o.merge({
            url: arguments[0]
        }, arguments[1])), e = o.merge(n, this.defaults, {
            method: "get"
        }, e), e.method = e.method.toLowerCase(), e.baseURL && !s(e.url) && (e.url = u(e.baseURL, e.url));
        var t = [i, void 0],
            r = Promise.resolve(e);
        for (this.interceptors.request.forEach(function(e) {
                t.unshift(e.fulfilled, e.rejected)
            }), this.interceptors.response.forEach(function(e) {
                t.push(e.fulfilled, e.rejected)
            }); t.length;) r = r.then(t.shift(), t.shift());
        return r
    }, o.forEach(["delete", "get", "head", "options"], function(e) {
        Axios.prototype[e] = function(t, r) {
            return this.request(o.merge(r || {}, {
                method: e,
                url: t
            }))
        }
    }), o.forEach(["post", "put", "patch"], function(e) {
        Axios.prototype[e] = function(t, r, n) {
            return this.request(o.merge(n || {}, {
                method: e,
                url: t,
                data: r
            }))
        }
    }), e.exports = Axios
}, function(e, t, r) {
    "use strict";

    function InterceptorManager() {
        this.handlers = []
    }
    var n = r(2);
    InterceptorManager.prototype.use = function(e, t) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t
        }), this.handlers.length - 1
    }, InterceptorManager.prototype.eject = function(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, InterceptorManager.prototype.forEach = function(e) {
        n.forEach(this.handlers, function(t) {
            null !== t && e(t)
        })
    }, e.exports = InterceptorManager
}, function(e, t, r) {
    "use strict";

    function throwIfCancellationRequested(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }
    var n = r(2),
        o = r(89),
        a = r(43),
        i = r(25);
    e.exports = function(e) {
        return throwIfCancellationRequested(e), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
            delete e.headers[t]
        }), (e.adapter || i.adapter)(e).then(function(t) {
            return throwIfCancellationRequested(e), t.data = o(t.data, t.headers, e.transformResponse), t
        }, function(t) {
            return a(t) || (throwIfCancellationRequested(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
        })
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r, n, o) {
        return e.config = t, r && (e.code = r), e.request = n, e.response = o, e
    }
}, function(e, t, r) {
    "use strict";
    var n = r(44);
    e.exports = function(e, t, r) {
        var o = r.config.validateStatus;
        r.status && o && !o(r.status) ? t(n("Request failed with status code " + r.status, r.config, null, r.request, r)) : e(r)
    }
}, function(e, t, r) {
    "use strict";
    var n = r(2);
    e.exports = function(e, t, r) {
        return n.forEach(r, function(r) {
            e = r(e, t)
        }), e
    }
}, function(e, t, r) {
    "use strict";

    function E() {
        this.message = "String contains an invalid character"
    }

    function btoa(e) {
        for (var t, r, o = String(e), a = "", i = 0, s = n; o.charAt(0 | i) || (s = "=", i % 1); a += s.charAt(63 & t >> 8 - i % 1 * 8)) {
            if ((r = o.charCodeAt(i += .75)) > 255) throw new E;
            t = t << 8 | r
        }
        return a
    }
    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    E.prototype = new Error, E.prototype.code = 5, E.prototype.name = "InvalidCharacterError", e.exports = btoa
}, function(e, t, r) {
    "use strict";

    function encode(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    var n = r(2);
    e.exports = function(e, t, r) {
        if (!t) return e;
        var o;
        if (r) o = r(t);
        else if (n.isURLSearchParams(t)) o = t.toString();
        else {
            var a = [];
            n.forEach(t, function(e, t) {
                null !== e && void 0 !== e && (n.isArray(e) && (t += "[]"), n.isArray(e) || (e = [e]), n.forEach(e, function(e) {
                    n.isDate(e) ? e = e.toISOString() : n.isObject(e) && (e = JSON.stringify(e)), a.push(encode(t) + "=" + encode(e))
                }))
            }), o = a.join("&")
        }
        return o && (e += (-1 === e.indexOf("?") ? "?" : "&") + o), e
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}, function(e, t, r) {
    "use strict";
    var n = r(2);
    e.exports = n.isStandardBrowserEnv() ? function() {
        return {
            write: function(e, t, r, o, a, i) {
                var s = [];
                s.push(e + "=" + encodeURIComponent(t)), n.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()), n.isString(o) && s.push("path=" + o), n.isString(a) && s.push("domain=" + a), !0 === i && s.push("secure"), document.cookie = s.join("; ")
            },
            read: function(e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove: function(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        }
    }() : function() {
        return {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    }()
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function(e, t, r) {
    "use strict";
    var n = r(2);
    e.exports = n.isStandardBrowserEnv() ? function() {
        function resolveURL(e) {
            var n = e;
            return t && (r.setAttribute("href", n), n = r.href), r.setAttribute("href", n), {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
            }
        }
        var e, t = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement("a");
        return e = resolveURL(window.location.href),
            function(t) {
                var r = n.isString(t) ? resolveURL(t) : t;
                return r.protocol === e.protocol && r.host === e.host
            }
    }() : function() {
        return function() {
            return !0
        }
    }()
}, function(e, t, r) {
    "use strict";
    var n = r(2);
    e.exports = function(e, t) {
        n.forEach(e, function(r, n) {
            n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = r, delete e[n])
        })
    }
}, function(e, t, r) {
    "use strict";
    var n = r(2);
    e.exports = function(e) {
        var t, r, o, a = {};
        return e ? (n.forEach(e.split("\n"), function(e) {
            o = e.indexOf(":"), t = n.trim(e.substr(0, o)).toLowerCase(), r = n.trim(e.substr(o + 1)), t && (a[t] = a[t] ? a[t] + ", " + r : r)
        }), a) : a
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return function(t) {
            return e.apply(null, t)
        }
    }
}, , , , , , , , , , , , , , , , , , function(e, t, r) {
    var n = r(0)("unscopables"),
        o = Array.prototype;
    void 0 == o[n] && r(11)(o, n, {}), e.exports = function(e) {
        o[n][e] = !0
    }
}, function(e, t) {
    e.exports = function(e, t, r, n) {
        if (!(e instanceof t) || void 0 !== n && n in e) throw TypeError(r + ": incorrect invocation!");
        return e
    }
}, function(e, t, r) {
    var n = r(37),
        o = r(23),
        a = r(142);
    e.exports = function(e) {
        return function(t, r, i) {
            var s, u = n(t),
                c = o(u.length),
                l = a(i, c);
            if (e && r != r) {
                for (; c > l;)
                    if ((s = u[l++]) != s) return !0
            } else
                for (; c > l; l++)
                    if ((e || l in u) && u[l] === r) return e || l || 0;
            return !e && -1
        }
    }
}, function(e, t, r) {
    var n = r(10),
        o = r(49),
        a = r(38),
        i = r(23),
        s = r(121);
    e.exports = function(e, t) {
        var r = 1 == e,
            u = 2 == e,
            c = 3 == e,
            l = 4 == e,
            p = 6 == e,
            f = 5 == e || p,
            d = t || s;
        return function(t, s, h) {
            for (var v, m, g = a(t), b = o(g), y = n(s, h, 3), x = i(b.length), w = 0, _ = r ? d(t, x) : u ? d(t, 0) : void 0; x > w; w++)
                if ((f || w in b) && (v = b[w], m = y(v, w, g), e))
                    if (r) _[w] = m;
                    else if (m) switch (e) {
                case 3:
                    return !0;
                case 5:
                    return v;
                case 6:
                    return w;
                case 2:
                    _.push(v)
            } else if (l) return !1;
            return p ? -1 : c || l ? l : _
        }
    }
}, function(e, t, r) {
    var n = r(12),
        o = r(127),
        a = r(0)("species");
    e.exports = function(e) {
        var t;
        return o(e) && (t = e.constructor, "function" != typeof t || t !== Array && !o(t.prototype) || (t = void 0), n(t) && null === (t = t[a]) && (t = void 0)), void 0 === t ? Array : t
    }
}, function(e, t, r) {
    var n = r(120);
    e.exports = function(e, t) {
        return new(n(e))(t)
    }
}, function(e, t, r) {
    "use strict";
    var n = r(16),
        o = r(32);
    e.exports = function(e, t, r) {
        t in e ? n.f(e, t, o(0, r)) : e[t] = r
    }
}, function(e, t, r) {
    var n = r(10),
        o = r(51),
        a = r(50),
        i = r(8),
        s = r(23),
        u = r(57),
        c = {},
        l = {},
        t = e.exports = function(e, t, r, p, f) {
            var d, h, v, m, g = f ? function() {
                    return e
                } : u(e),
                b = n(r, p, t ? 2 : 1),
                y = 0;
            if ("function" != typeof g) throw TypeError(e + " is not iterable!");
            if (a(g)) {
                for (d = s(e.length); d > y; y++)
                    if ((m = t ? b(i(h = e[y])[0], h[1]) : b(e[y])) === c || m === l) return m
            } else
                for (v = g.call(e); !(h = v.next()).done;)
                    if ((m = o(v, b, h.value, t)) === c || m === l) return m
        };
    t.BREAK = c, t.RETURN = l
}, function(e, t, r) {
    e.exports = r(35)("native-function-to-string", Function.toString)
}, function(e, t, r) {
    e.exports = !r(14) && !r(30)(function() {
        return 7 != Object.defineProperty(r(29)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t) {
    e.exports = function(e, t, r) {
        var n = void 0 === r;
        switch (t.length) {
            case 0:
                return n ? e() : e.call(r);
            case 1:
                return n ? e(t[0]) : e.call(r, t[0]);
            case 2:
                return n ? e(t[0], t[1]) : e.call(r, t[0], t[1]);
            case 3:
                return n ? e(t[0], t[1], t[2]) : e.call(r, t[0], t[1], t[2]);
            case 4:
                return n ? e(t[0], t[1], t[2], t[3]) : e.call(r, t[0], t[1], t[2], t[3])
        }
        return e.apply(r, t)
    }
}, function(e, t, r) {
    var n = r(13);
    e.exports = Array.isArray || function(e) {
        return "Array" == n(e)
    }
}, function(e, t, r) {
    "use strict";
    var n = r(131),
        o = r(32),
        a = r(33),
        i = {};
    r(11)(i, r(0)("iterator"), function() {
        return this
    }), e.exports = function(e, t, r) {
        e.prototype = n(i, {
            next: o(1, r)
        }), a(e, t + " Iterator")
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            value: t,
            done: !!e
        }
    }
}, function(e, t, r) {
    var n = r(3),
        o = r(56).set,
        a = n.MutationObserver || n.WebKitMutationObserver,
        i = n.process,
        s = n.Promise,
        u = "process" == r(13)(i);
    e.exports = function() {
        var e, t, r, c = function() {
            var n, o;
            for (u && (n = i.domain) && n.exit(); e;) {
                o = e.fn, e = e.next;
                try {
                    o()
                } catch (n) {
                    throw e ? r() : t = void 0, n
                }
            }
            t = void 0, n && n.enter()
        };
        if (u) r = function() {
            i.nextTick(c)
        };
        else if (!a || n.navigator && n.navigator.standalone)
            if (s && s.resolve) {
                var l = s.resolve(void 0);
                r = function() {
                    l.then(c)
                }
            } else r = function() {
                o.call(n, c)
            };
        else {
            var p = !0,
                f = document.createTextNode("");
            new a(c).observe(f, {
                characterData: !0
            }), r = function() {
                f.data = p = !p
            }
        }
        return function(n) {
            var o = {
                fn: n,
                next: void 0
            };
            t && (t.next = o), e || (e = o, r()), t = o
        }
    }
}, function(e, t, r) {
    var n = r(8),
        o = r(132),
        a = r(47),
        i = r(34)("IE_PROTO"),
        s = function() {},
        u = function() {
            var e, t = r(29)("iframe"),
                n = a.length;
            for (t.style.display = "none", r(48).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), u = e.F; n--;) delete u.prototype[a[n]];
            return u()
        };
    e.exports = Object.create || function(e, t) {
        var r;
        return null !== e ? (s.prototype = n(e), r = new s, s.prototype = null, r[i] = e) : r = u(), void 0 === t ? r : o(r, t)
    }
}, function(e, t, r) {
    var n = r(16),
        o = r(8),
        a = r(55);
    e.exports = r(14) ? Object.defineProperties : function(e, t) {
        o(e);
        for (var r, i = a(t), s = i.length, u = 0; s > u;) n.f(e, r = i[u++], t[r]);
        return e
    }
}, function(e, t, r) {
    var n = r(22),
        o = r(38),
        a = r(34)("IE_PROTO"),
        i = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = o(e), n(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? i : null
    }
}, function(e, t, r) {
    var n = r(22),
        o = r(37),
        a = r(118)(!1),
        i = r(34)("IE_PROTO");
    e.exports = function(e, t) {
        var r, s = o(e),
            u = 0,
            c = [];
        for (r in s) r != i && n(s, r) && c.push(r);
        for (; t.length > u;) n(s, r = t[u++]) && (~a(c, r) || c.push(r));
        return c
    }
}, function(e, t) {
    e.exports = function(e) {
        try {
            return {
                e: !1,
                v: e()
            }
        } catch (e) {
            return {
                e: !0,
                v: e
            }
        }
    }
}, function(e, t, r) {
    var n = r(8),
        o = r(12),
        a = r(54);
    e.exports = function(e, t) {
        if (n(e), o(t) && t.constructor === e) return t;
        var r = a.f(e);
        return (0, r.resolve)(t), r.promise
    }
}, function(e, t, r) {
    var n = r(17);
    e.exports = function(e, t, r) {
        for (var o in t) n(e, o, t[o], r);
        return e
    }
}, function(e, t, r) {
    "use strict";
    var n = r(3),
        o = r(16),
        a = r(14),
        i = r(0)("species");
    e.exports = function(e) {
        var t = n[e];
        a && t && !t[i] && o.f(t, i, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(e, t, r) {
    var n = r(8),
        o = r(20),
        a = r(0)("species");
    e.exports = function(e, t) {
        var r, i = n(e).constructor;
        return void 0 === i || void 0 == (r = n(i)[a]) ? t : o(r)
    }
}, function(e, t, r) {
    "use strict";
    var n = r(30);
    e.exports = function(e, t) {
        return !!e && n(function() {
            t ? e.call(null, function() {}, 1) : e.call(null)
        })
    }
}, function(e, t, r) {
    var n = r(36),
        o = r(28);
    e.exports = function(e) {
        return function(t, r) {
            var a, i, s = String(o(t)),
                u = n(r),
                c = s.length;
            return u < 0 || u >= c ? e ? "" : void 0 : (a = s.charCodeAt(u), a < 55296 || a > 56319 || u + 1 === c || (i = s.charCodeAt(u + 1)) < 56320 || i > 57343 ? e ? s.charAt(u) : a : e ? s.slice(u, u + 2) : i - 56320 + (a - 55296 << 10) + 65536)
        }
    }
}, function(e, t, r) {
    var n = r(36),
        o = Math.max,
        a = Math.min;
    e.exports = function(e, t) {
        return e = n(e), e < 0 ? o(e + t, 0) : a(e, t)
    }
}, function(e, t, r) {
    var n = r(12);
    e.exports = function(e, t) {
        if (!n(e)) return e;
        var r, o;
        if (t && "function" == typeof(r = e.toString) && !n(o = r.call(e))) return o;
        if ("function" == typeof(r = e.valueOf) && !n(o = r.call(e))) return o;
        if (!t && "function" == typeof(r = e.toString) && !n(o = r.call(e))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(e, t, r) {
    var n = r(3),
        o = n.navigator;
    e.exports = o && o.userAgent || ""
}, function(e, t, r) {
    "use strict";
    var n = r(21),
        o = r(119)(0),
        a = r(140)([].forEach, !0);
    n(n.P + n.F * !a, "Array", {
        forEach: function(e) {
            return o(this, e, arguments[1])
        }
    })
}, function(e, t, r) {
    "use strict";
    var n = r(10),
        o = r(21),
        a = r(38),
        i = r(51),
        s = r(50),
        u = r(23),
        c = r(122),
        l = r(57);
    o(o.S + o.F * !r(53)(function(e) {
        Array.from(e)
    }), "Array", {
        from: function(e) {
            var t, r, o, p, f = a(e),
                d = "function" == typeof this ? this : Array,
                h = arguments.length,
                v = h > 1 ? arguments[1] : void 0,
                m = void 0 !== v,
                g = 0,
                b = l(f);
            if (m && (v = n(v, h > 2 ? arguments[2] : void 0, 2)), void 0 == b || d == Array && s(b))
                for (t = u(f.length), r = new d(t); t > g; g++) c(r, g, m ? v(f[g], g) : f[g]);
            else
                for (p = b.call(f), r = new d; !(o = p.next()).done; g++) c(r, g, m ? i(p, v, [o.value, g], !0) : o.value);
            return r.length = g, r
        }
    })
}, function(e, t, r) {
    "use strict";
    var n = r(116),
        o = r(129),
        a = r(15),
        i = r(37);
    e.exports = r(52)(Array, "Array", function(e, t) {
        this._t = i(e), this._i = 0, this._k = t
    }, function() {
        var e = this._t,
            t = this._k,
            r = this._i++;
        return !e || r >= e.length ? (this._t = void 0, o(1)) : "keys" == t ? o(0, r) : "values" == t ? o(0, e[r]) : o(0, [r, e[r]])
    }, "values"), a.Arguments = a.Array, n("keys"), n("values"), n("entries")
}, function(e, t, r) {
    "use strict";
    var n = r(27),
        o = {};
    o[r(0)("toStringTag")] = "z", o + "" != "[object z]" && r(17)(Object.prototype, "toString", function() {
        return "[object " + n(this) + "]"
    }, !0)
}, function(e, t, r) {
    "use strict";
    var n, o, a, i, s = r(31),
        u = r(3),
        c = r(10),
        l = r(27),
        p = r(21),
        f = r(12),
        d = r(20),
        h = r(117),
        v = r(123),
        m = r(139),
        g = r(56).set,
        b = r(130)(),
        y = r(54),
        x = r(135),
        w = r(144),
        _ = r(136),
        k = u.TypeError,
        S = u.process,
        j = S && S.versions,
        E = j && j.v8 || "",
        T = u.Promise,
        P = "process" == l(S),
        R = function() {},
        A = o = y.f,
        M = !! function() {
            try {
                var e = T.resolve(1),
                    t = (e.constructor = {})[r(0)("species")] = function(e) {
                        e(R, R)
                    };
                return (P || "function" == typeof PromiseRejectionEvent) && e.then(R) instanceof t && 0 !== E.indexOf("6.6") && -1 === w.indexOf("Chrome/66")
            } catch (e) {}
        }(),
        C = function(e) {
            var t;
            return !(!f(e) || "function" != typeof(t = e.then)) && t
        },
        F = function(e, t) {
            if (!e._n) {
                e._n = !0;
                var r = e._c;
                b(function() {
                    for (var n = e._v, o = 1 == e._s, a = 0; r.length > a;) ! function(t) {
                        var r, a, i, s = o ? t.ok : t.fail,
                            u = t.resolve,
                            c = t.reject,
                            l = t.domain;
                        try {
                            s ? (o || (2 == e._h && L(e), e._h = 1), !0 === s ? r = n : (l && l.enter(), r = s(n), l && (l.exit(), i = !0)), r === t.promise ? c(k("Promise-chain cycle")) : (a = C(r)) ? a.call(r, u, c) : u(r)) : c(n)
                        } catch (e) {
                            l && !i && l.exit(), c(e)
                        }
                    }(r[a++]);
                    e._c = [], e._n = !1, t && !e._h && O(e)
                })
            }
        },
        O = function(e) {
            g.call(u, function() {
                var t, r, n, o = e._v,
                    a = B(e);
                if (a && (t = x(function() {
                        P ? S.emit("unhandledRejection", o, e) : (r = u.onunhandledrejection) ? r({
                            promise: e,
                            reason: o
                        }) : (n = u.console) && n.error && n.error("Unhandled promise rejection", o)
                    }), e._h = P || B(e) ? 2 : 1), e._a = void 0, a && t.e) throw t.v
            })
        },
        B = function(e) {
            return 1 !== e._h && 0 === (e._a || e._c).length
        },
        L = function(e) {
            g.call(u, function() {
                var t;
                P ? S.emit("rejectionHandled", e) : (t = u.onrejectionhandled) && t({
                    promise: e,
                    reason: e._v
                })
            })
        },
        q = function(e) {
            var t = this;
            t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), F(t, !0))
        },
        D = function(e) {
            var t, r = this;
            if (!r._d) {
                r._d = !0, r = r._w || r;
                try {
                    if (r === e) throw k("Promise can't be resolved itself");
                    (t = C(e)) ? b(function() {
                        var n = {
                            _w: r,
                            _d: !1
                        };
                        try {
                            t.call(e, c(D, n, 1), c(q, n, 1))
                        } catch (e) {
                            q.call(n, e)
                        }
                    }): (r._v = e, r._s = 1, F(r, !1))
                } catch (e) {
                    q.call({
                        _w: r,
                        _d: !1
                    }, e)
                }
            }
        };
    M || (T = function(e) {
        h(this, T, "Promise", "_h"), d(e), n.call(this);
        try {
            e(c(D, this, 1), c(q, this, 1))
        } catch (e) {
            q.call(this, e)
        }
    }, n = function(e) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }, n.prototype = r(137)(T.prototype, {
        then: function(e, t) {
            var r = A(m(this, T));
            return r.ok = "function" != typeof e || e, r.fail = "function" == typeof t && t, r.domain = P ? S.domain : void 0, this._c.push(r), this._a && this._a.push(r), this._s && F(this, !1), r.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }), a = function() {
        var e = new n;
        this.promise = e, this.resolve = c(D, e, 1), this.reject = c(q, e, 1)
    }, y.f = A = function(e) {
        return e === T || e === i ? new a(e) : o(e)
    }), p(p.G + p.W + p.F * !M, {
        Promise: T
    }), r(33)(T, "Promise"), r(138)("Promise"), i = r(7).Promise, p(p.S + p.F * !M, "Promise", {
        reject: function(e) {
            var t = A(this);
            return (0, t.reject)(e), t.promise
        }
    }), p(p.S + p.F * (s || !M), "Promise", {
        resolve: function(e) {
            return _(s && this === i ? T : this, e)
        }
    }), p(p.S + p.F * !(M && r(53)(function(e) {
        T.all(e).catch(R)
    })), "Promise", {
        all: function(e) {
            var t = this,
                r = A(t),
                n = r.resolve,
                o = r.reject,
                a = x(function() {
                    var r = [],
                        a = 0,
                        i = 1;
                    v(e, !1, function(e) {
                        var s = a++,
                            u = !1;
                        r.push(void 0), i++, t.resolve(e).then(function(e) {
                            u || (u = !0, r[s] = e, --i || n(r))
                        }, o)
                    }), --i || n(r)
                });
            return a.e && o(a.v), r.promise
        },
        race: function(e) {
            var t = this,
                r = A(t),
                n = r.reject,
                o = x(function() {
                    v(e, !1, function(e) {
                        t.resolve(e).then(r.resolve, n)
                    })
                });
            return o.e && n(o.v), r.promise
        }
    })
}, function(e, t, r) {
    for (var n = r(147), o = r(55), a = r(17), i = r(3), s = r(11), u = r(15), c = r(0), l = c("iterator"), p = c("toStringTag"), f = u.Array, d = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, h = o(d), v = 0; v < h.length; v++) {
        var m, g = h[v],
            b = d[g],
            y = i[g],
            x = y && y.prototype;
        if (x && (x[l] || s(x, l, f), x[p] || s(x, p, g), u[g] = f, b))
            for (m in n) x[m] || a(x, m, n[m], !0)
    }
}, , , , , , , , , , function(e, t, r) {
    "use strict";

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t
    }

    function create() {
        var e = new o.HandlebarsEnvironment;
        return l.extend(e, o), e.SafeString = i.default, e.Exception = u.default, e.Utils = l, e.escapeExpression = l.escapeExpression, e.VM = f, e.template = function(t) {
            return f.template(t, e)
        }, e
    }
    t.__esModule = !0;
    var n = r(60),
        o = _interopRequireWildcard(n),
        a = r(174),
        i = _interopRequireDefault(a),
        s = r(18),
        u = _interopRequireDefault(s),
        c = r(4),
        l = _interopRequireWildcard(c),
        p = r(173),
        f = _interopRequireWildcard(p),
        d = r(172),
        h = _interopRequireDefault(d),
        v = create();
    v.create = create, h.default(v), v.default = v, t.default = v, e.exports = t.default
}, function(e, t, r) {
    "use strict";

    function registerDefaultDecorators(e) {
        o.default(e)
    }
    t.__esModule = !0, t.registerDefaultDecorators = registerDefaultDecorators;
    var n = r(162),
        o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n)
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(4);
    t.default = function(e) {
        e.registerDecorator("inline", function(e, t, r, o) {
            var a = e;
            return t.partials || (t.partials = {}, a = function(o, a) {
                var i = r.partials;
                r.partials = n.extend({}, i, t.partials);
                var s = e(o, a);
                return r.partials = i, s
            }), t.partials[o.args[0]] = o.fn, a
        })
    }, e.exports = t.default
}, function(e, t, r) {
    "use strict";

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function registerDefaultHelpers(e) {
        o.default(e), i.default(e), u.default(e), l.default(e), f.default(e), h.default(e), m.default(e)
    }
    t.__esModule = !0, t.registerDefaultHelpers = registerDefaultHelpers;
    var n = r(164),
        o = _interopRequireDefault(n),
        a = r(165),
        i = _interopRequireDefault(a),
        s = r(166),
        u = _interopRequireDefault(s),
        c = r(167),
        l = _interopRequireDefault(c),
        p = r(168),
        f = _interopRequireDefault(p),
        d = r(169),
        h = _interopRequireDefault(d),
        v = r(170),
        m = _interopRequireDefault(v)
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(4);
    t.default = function(e) {
        e.registerHelper("blockHelperMissing", function(t, r) {
            var o = r.inverse,
                a = r.fn;
            if (!0 === t) return a(this);
            if (!1 === t || null == t) return o(this);
            if (n.isArray(t)) return t.length > 0 ? (r.ids && (r.ids = [r.name]), e.helpers.each(t, r)) : o(this);
            if (r.data && r.ids) {
                var i = n.createFrame(r.data);
                i.contextPath = n.appendContextPath(r.data.contextPath, r.name), r = {
                    data: i
                }
            }
            return a(t, r)
        })
    }, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(4),
        o = r(18),
        a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(o);
    t.default = function(e) {
        e.registerHelper("each", function(e, t) {
            function execIteration(t, o, a) {
                u && (u.key = t, u.index = o, u.first = 0 === o, u.last = !!a, c && (u.contextPath = c + t)), s += r(e[t], {
                    data: u,
                    blockParams: n.blockParams([e[t], t], [c + t, null])
                })
            }
            if (!t) throw new a.default("Must pass iterator to #each");
            var r = t.fn,
                o = t.inverse,
                i = 0,
                s = "",
                u = void 0,
                c = void 0;
            if (t.data && t.ids && (c = n.appendContextPath(t.data.contextPath, t.ids[0]) + "."), n.isFunction(e) && (e = e.call(this)), t.data && (u = n.createFrame(t.data)), e && "object" == typeof e)
                if (n.isArray(e))
                    for (var l = e.length; i < l; i++) i in e && execIteration(i, i, i === e.length - 1);
                else {
                    var p = void 0;
                    for (var f in e) e.hasOwnProperty(f) && (void 0 !== p && execIteration(p, i - 1), p = f, i++);
                    void 0 !== p && execIteration(p, i - 1, !0)
                } return 0 === i && (s = o(this)), s
        })
    }, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(18),
        o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n);
    t.default = function(e) {
        e.registerHelper("helperMissing", function() {
            if (1 !== arguments.length) throw new o.default('Missing helper: "' + arguments[arguments.length - 1].name + '"')
        })
    }, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(4);
    t.default = function(e) {
        e.registerHelper("if", function(e, t) {
            return n.isFunction(e) && (e = e.call(this)), !t.hash.includeZero && !e || n.isEmpty(e) ? t.inverse(this) : t.fn(this)
        }), e.registerHelper("unless", function(t, r) {
            return e.helpers.if.call(this, t, {
                fn: r.inverse,
                inverse: r.fn,
                hash: r.hash
            })
        })
    }, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0, t.default = function(e) {
        e.registerHelper("log", function() {
            for (var t = [void 0], r = arguments[arguments.length - 1], n = 0; n < arguments.length - 1; n++) t.push(arguments[n]);
            var o = 1;
            null != r.hash.level ? o = r.hash.level : r.data && null != r.data.level && (o = r.data.level), t[0] = o, e.log.apply(e, t)
        })
    }, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0, t.default = function(e) {
        e.registerHelper("lookup", function(e, t) {
            return e && e[t]
        })
    }, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(4);
    t.default = function(e) {
        e.registerHelper("with", function(e, t) {
            n.isFunction(e) && (e = e.call(this));
            var r = t.fn;
            if (n.isEmpty(e)) return t.inverse(this);
            var o = t.data;
            return t.data && t.ids && (o = n.createFrame(t.data), o.contextPath = n.appendContextPath(t.data.contextPath, t.ids[0])), r(e, {
                data: o,
                blockParams: n.blockParams([e], [o && o.contextPath])
            })
        })
    }, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(4),
        o = {
            methodMap: ["debug", "info", "warn", "error"],
            level: "info",
            lookupLevel: function(e) {
                if ("string" == typeof e) {
                    var t = n.indexOf(o.methodMap, e.toLowerCase());
                    e = t >= 0 ? t : parseInt(e, 10)
                }
                return e
            },
            log: function(e) {
                if (e = o.lookupLevel(e), "undefined" != typeof console && o.lookupLevel(o.level) <= e) {
                    var t = o.methodMap[e];
                    console[t] || (t = "log");
                    for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
                    console[t].apply(console, n)
                }
            }
        };
    t.default = o, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    (function(r) {
        t.__esModule = !0, t.default = function(e) {
            var t = void 0 !== r ? r : window,
                n = t.Handlebars;
            e.noConflict = function() {
                return t.Handlebars === e && (t.Handlebars = n), e
            }
        }, e.exports = t.default
    }).call(t, r(178))
}, function(e, t, r) {
    "use strict";

    function checkRevision(e) {
        var t = e && e[0] || 1,
            r = s.COMPILER_REVISION;
        if (t !== r) {
            if (t < r) {
                var n = s.REVISION_CHANGES[r],
                    o = s.REVISION_CHANGES[t];
                throw new i.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + n + ") or downgrade your runtime to an older version (" + o + ").")
            }
            throw new i.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
        }
    }

    function template(e, t) {
        function invokePartialWrapper(r, n, a) {
            a.hash && (n = o.extend({}, n, a.hash), a.ids && (a.ids[0] = !0)), r = t.VM.resolvePartial.call(this, r, n, a);
            var s = t.VM.invokePartial.call(this, r, n, a);
            if (null == s && t.compile && (a.partials[a.name] = t.compile(r, e.compilerOptions, t), s = a.partials[a.name](n, a)), null != s) {
                if (a.indent) {
                    for (var u = s.split("\n"), c = 0, l = u.length; c < l && (u[c] || c + 1 !== l); c++) u[c] = a.indent + u[c];
                    s = u.join("\n")
                }
                return s
            }
            throw new i.default("The partial " + a.name + " could not be compiled when running in runtime-only mode")
        }

        function ret(t) {
            function main(t) {
                return "" + e.main(r, t, r.helpers, r.partials, o, i, a)
            }
            var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                o = n.data;
            ret._setup(n), !n.partial && e.useData && (o = initData(t, o));
            var a = void 0,
                i = e.useBlockParams ? [] : void 0;
            return e.useDepths && (a = n.depths ? t != n.depths[0] ? [t].concat(n.depths) : n.depths : [t]), (main = executeDecorators(e.main, main, r, n.depths || [], o, i))(t, n)
        }
        if (!t) throw new i.default("No environment passed to template");
        if (!e || !e.main) throw new i.default("Unknown template object: " + typeof e);
        e.main.decorator = e.main_d, t.VM.checkRevision(e.compiler);
        var r = {
            strict: function(e, t) {
                if (!(t in e)) throw new i.default('"' + t + '" not defined in ' + e);
                return e[t]
            },
            lookup: function(e, t) {
                for (var r = e.length, n = 0; n < r; n++)
                    if (e[n] && null != e[n][t]) return e[n][t]
            },
            lambda: function(e, t) {
                return "function" == typeof e ? e.call(t) : e
            },
            escapeExpression: o.escapeExpression,
            invokePartial: invokePartialWrapper,
            fn: function(t) {
                var r = e[t];
                return r.decorator = e[t + "_d"], r
            },
            programs: [],
            program: function(e, t, r, n, o) {
                var a = this.programs[e],
                    i = this.fn(e);
                return t || o || n || r ? a = wrapProgram(this, e, i, t, r, n, o) : a || (a = this.programs[e] = wrapProgram(this, e, i)), a
            },
            data: function(e, t) {
                for (; e && t--;) e = e._parent;
                return e
            },
            merge: function(e, t) {
                var r = e || t;
                return e && t && e !== t && (r = o.extend({}, t, e)), r
            },
            nullContext: Object.seal({}),
            noop: t.VM.noop,
            compilerInfo: e.compiler
        };
        return ret.isTop = !0, ret._setup = function(n) {
            n.partial ? (r.helpers = n.helpers, r.partials = n.partials, r.decorators = n.decorators) : (r.helpers = r.merge(n.helpers, t.helpers), e.usePartial && (r.partials = r.merge(n.partials, t.partials)), (e.usePartial || e.useDecorators) && (r.decorators = r.merge(n.decorators, t.decorators)))
        }, ret._child = function(t, n, o, a) {
            if (e.useBlockParams && !o) throw new i.default("must pass block params");
            if (e.useDepths && !a) throw new i.default("must pass parent depths");
            return wrapProgram(r, t, e[t], n, 0, o, a)
        }, ret
    }

    function wrapProgram(e, t, r, n, o, a, i) {
        function prog(t) {
            var o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                s = i;
            return !i || t == i[0] || t === e.nullContext && null === i[0] || (s = [t].concat(i)), r(e, t, e.helpers, e.partials, o.data || n, a && [o.blockParams].concat(a), s)
        }
        return prog = executeDecorators(r, prog, e, i, n, a), prog.program = t, prog.depth = i ? i.length : 0, prog.blockParams = o || 0, prog
    }

    function resolvePartial(e, t, r) {
        return e ? e.call || r.name || (r.name = e, e = r.partials[e]) : e = "@partial-block" === r.name ? r.data["partial-block"] : r.partials[r.name], e
    }

    function invokePartial(e, t, r) {
        var n = r.data && r.data["partial-block"];
        r.partial = !0, r.ids && (r.data.contextPath = r.ids[0] || r.data.contextPath);
        var a = void 0;
        if (r.fn && r.fn !== noop && function() {
                r.data = s.createFrame(r.data);
                var e = r.fn;
                a = r.data["partial-block"] = function(t) {
                    var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    return r.data = s.createFrame(r.data), r.data["partial-block"] = n, e(t, r)
                }, e.partials && (r.partials = o.extend({}, r.partials, e.partials))
            }(), void 0 === e && a && (e = a), void 0 === e) throw new i.default("The partial " + r.name + " could not be found");
        if (e instanceof Function) return e(t, r)
    }

    function noop() {
        return ""
    }

    function initData(e, t) {
        return t && "root" in t || (t = t ? s.createFrame(t) : {}, t.root = e), t
    }

    function executeDecorators(e, t, r, n, a, i) {
        if (e.decorator) {
            var s = {};
            t = e.decorator(t, s, r, n && n[0], a, i, n), o.extend(t, s)
        }
        return t
    }
    t.__esModule = !0, t.checkRevision = checkRevision, t.template = template, t.wrapProgram = wrapProgram, t.resolvePartial = resolvePartial, t.invokePartial = invokePartial, t.noop = noop;
    var n = r(4),
        o = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }(n),
        a = r(18),
        i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(a),
        s = r(60)
}, function(e, t, r) {
    "use strict";

    function SafeString(e) {
        this.string = e
    }
    t.__esModule = !0, SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
        return "" + this.string
    }, t.default = SafeString, e.exports = t.default
}, function(e, t) {
    function isBuffer(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }

    function isSlowBuffer(e) {
        return "function" == typeof e.readFloatLE && "function" == typeof e.slice && isBuffer(e.slice(0, 0))
    }
    e.exports = function(e) {
        return null != e && (isBuffer(e) || isSlowBuffer(e) || !!e._isBuffer)
    }
}, , , function(e, t) {
    var r;
    r = function() {
        return this
    }();
    try {
        r = r || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (r = window)
    }
    e.exports = r
}, , function(e, t, r) {
    r(81), r(80), r(79), r(19), e.exports = r(1)
}]);
webpackJsonp([0], {
    100: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.sendPageData = t.setPageContentCommon = t.setJournalsPageContent = t.setBooksPageContent = t.setConnectPageContent = t.setConnectMetadataContent = void 0;
        var i = n(26),
            a = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(i),
            r = {},
            o = a.getPageName();
        t.setConnectMetadataContent = function() {
            var e = document.querySelector('meta[Name="Title"]') ? document.querySelector('meta[Name="Title"]') || document.querySelector('meta[Name="title"]') : "unknown";
            r.onlineDate = a.getPublishedDate("PubDate"), r.title = e.content
        }, t.setConnectPageContent = function() {
            r.url = window.location.href, r.breadcrumb = a.generateBreadcrumbString(), r.authorName = a.getMetadataContent('meta[name="Author"]'), r.subjectAreas = a.getMetadataContent('meta[name="Tag.Community"]'), r.section = "content", r.type = "article", o = "connect:tag:story"
        }, t.setBooksPageContent = function() {
            var e = [{
                bookTitle: ".book-title"
            }, {
                authorNames: ".editor"
            }, {
                subjectAreas: ".breadcrumb span"
            }, {
                format: '[itemprop="bookFormat"]'
            }, {
                isbn: ".isbn"
            }, {
                edition: ".edition"
            }, {
                publisher: ".imprint"
            }, {
                language: '[itemprop="inLanguage"]'
            }, {
                inStock: '[class="stock-availability available"]'
            }];
            if (a.updatePageDataContent(r, e), r.subjectAreas = r.subjectAreas.slice(2, -1).toString(), Array.isArray(r.isbn)) {
                for (var t = [], n = 0; n < r.isbn.length;) t.push(r.format[n] + ":" + r.isbn[n]), n++;
                r.id = t, r.format = r.format.filter(function(e, t) {
                    return r.format.indexOf(e) === t
                })
            } else r.id = r.format + ":" + r.isbn;
            r.format = r.format.toString(), r.breadcrumb = a.generateBreadcrumbString(), r.publishedDate = a.getPublishedDate("published.date"), r.url = window.location.href, r.section = "books", r.type = "books", o = "books:product"
        }, t.setJournalsPageContent = function() {
            var e = [{
                journalTitle: ".main-title"
            }, {
                editor: '[itemprop="editor"]'
            }, {
                subjectAreas: ".breadcrumb span"
            }, {
                issn: '[itemprop="issn"]'
            }, {
                edition: ".edition"
            }, {
                publisher: ".imprint"
            }, {
                language: '[itemprop="inLanguage"]'
            }];
            a.updatePageDataContent(r, e), r.subjectAreas = r.subjectAreas.slice(2, -1).toString(), r.breadcrumb = a.generateBreadcrumbString(), r.format = "print", r.publishedDate = a.getPublishedDate("published.date"), r.url = window.location.href, r.section = "journals", r.type = "journals";
            var t = document.querySelectorAll(".journal-buying-options div[id$=-subscription]")[0].id;
            o = "journals:product-" + t
        }, t.setPageContentCommon = function() {
            r.title = document.querySelector("title").textContent, r.url = window.location.href, r.breadcrumb = a.generateBreadcrumbString(), r.section = a.getPathArrayMinusLocale()[0], o = a.getPathArrayMinusLocale()[0].includes("solutions") ? a.generateSolutionsPageName() : a.generatePageName()
        }, t.sendPageData = function() {
            pageData = {
                content: [r],
                page: {
                    businessUnit: "ELS:OPS",
                    environment: a.getEnv(),
                    language: a.getLanguage(),
                    loadTimestamp: a.loadTimeStamp(),
                    name: o,
                    noTracking: "false",
                    productName: "EC",
                    type: "NP-GP",
                    loadTime: a.loadTime()
                },
                visitor: {
                    accessType: "ec:anon_guest",
                    ipAddress: ""
                }
            }
        }
    },
    101: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.sendPageFormViewData = t.waitForValidationFormSubmit = t.getFormData = void 0;
        var i = n(26),
            a = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(i),
            r = "",
            o = "";
        t.getFormData = function() {
            var e = a.languageCodes.indexOf(a.getUrlPathArray()[0].toLowerCase()) > -1 ? 2 : 1;
            "industry-insights" === a.getUrlPathArray()[e].toLowerCase() && e++;
            var t = {
                    "chemicals-and-materials": "CHEM",
                    "pharma-and-life-sciences-solutions": "ELSS",
                    "oil-and-gas": "OIL&GAS",
                    "education-and-research": "EDU&RES",
                    "embase-biomedical-research": "EM",
                    "engineering-village": "EV",
                    geofacets: "GF",
                    "pathway-studio-biological-research": "PS",
                    "pharmapendium-clinical-data": "PP",
                    "quosa-scientific-literature": "QU",
                    reaxys: "RX",
                    "knovel-engineering-information": "KN",
                    sciencedirect: "SD",
                    scopus: "SC",
                    "professional-services": "PF",
                    mendeley: "MD",
                    ssrn: "SS",
                    librarians: "LIB",
                    "research-intelligence": "RI",
                    connect: "CON",
                    "clinical-key": "CK",
                    "digital-commons": "DC",
                    "clinical-solutions": "CS",
                    macro: "MA",
                    "funding-institutional": "FI",
                    hivebench: "HB",
                    "patient-engagement": "PE"
                },
                n = a.getUrlPathArray()[e];
            n = n.toLowerCase(), r = t[n] || "CM-GENERIC";
            var i = "",
                s = a.getUrlPathArray()[a.getUrlPathArray().length - 1],
                l = {
                    contact: "CONTACT-SALES",
                    sales: "CONTACT-SALES",
                    newsltter: "NEWSLETTER-SIGNUP",
                    newsletter: "NEWSLETTER-SIGNUP",
                    "journal-title-suggestion": "JOURNAL-TITLE-SUGGESTION"
                },
                c = !1;
            Object.keys(l).forEach(function(e) {
                s.indexOf(e) >= 0 && (i = l[e], c = !0)
            }), c || (i = a.getUrlPathArray()[a.getUrlPathArray().length - 2]), a.getUrlPathStringColonSeparated().includes("promo:") && (r = "PROMO:" + r), o = r + ":" + i, a.getUrlPathStringColonSeparated().includes("promo:rd-solutions:") && (o = "PPC:" + a.getUrlPathArray()[2], a.getUrlPathArray()[3] && (o = o + ":" + a.getUrlPathArray()[3]), r = "PPC"), o = o.toUpperCase()
        }, t.waitForValidationFormSubmit = function waitForValidationFormSubmit() {
            [].forEach.call(document.querySelectorAll('a[id="submitButton"]'), function(e) {
                "Please Wait..." === e.textContent && pageDataTracker.trackEvent("formSubmit", {
                    form: {
                        productName: r,
                        step: "complete",
                        type: "lead",
                        name: o
                    }
                }), e.addEventListener("click", function() {
                    waitForValidationFormSubmit()
                })
            })
        }, t.sendPageFormViewData = function() {
            document.getElementById("recipient__email") || (pageData.form.errorType = "FE-" + o), pageDataTracker.trackEvent("formView", {
                form: {
                    productName: r,
                    step: "start",
                    type: "lead",
                    name: o
                }
            })
        }
    },
    102: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.sendSocialShareThisPageData = function() {
            [].forEach.call(document.querySelectorAll(".article-actions .social-share .holder-icon-social span"), function(e) {
                e.addEventListener("click", function() {
                    var t = e.getAttribute("title");
                    pageDataTracker.trackEvent("socialShare", {
                        social: {
                            sharePlatform: t
                        }
                    })
                })
            })
        }, t.sendSocialShareThatPageData = function() {
            [].forEach.call(document.querySelectorAll("div[id*=share-that-wrapper] .sidebar"), function(e) {
                e.addEventListener("click", function() {
                    var t = e.getAttribute("id");
                    pageDataTracker.trackEvent("socialShare", {
                        social: {
                            sharePlatform: t
                        }
                    })
                })
            })
        }
    },
    103: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.sendPageDataPdfDownloadTracker = function() {
            [].forEach.call(document.querySelectorAll('a[href$=".pdf"]'), function(e) {
                e.addEventListener("click", function() {
                    var t = e.getAttribute("href").split("/");
                    pageDataTracker.trackEvent("contentDownload", {
                        content: [{
                            format: "MIME-PDF",
                            type: "other-ct:scope-full",
                            id: t[t.length - 2],
                            title: t[t.length - 1]
                        }]
                    })
                })
            })
        }
    },
    104: function(e, t, n) {
        "use strict";

        function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(e, t, n) {
                return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
            }
        }();
        t.EmbeddedCatalog = function() {
            function EmbeddedCatalog(e) {
                _classCallCheck(this, EmbeddedCatalog), this.currentPath = window.location.pathname, this.embeddedParams = e, this.elements = {
                    header: document.querySelector("header"),
                    catalog: document.querySelector(".listing-content"),
                    searchForm: document.querySelector(".listing-content #listing-form-filters"),
                    clearSearch: document.querySelector(".listing-content .clear-filter a"),
                    productTypes: document.querySelectorAll(".listing-content #listing-form-filters-type option"),
                    sortBy: document.querySelector(".listing-content #listing-form-filters-results-sort"),
                    inputs: {
                        categoryrestriction: document.querySelector('.listing-content input[aria-label="Category Restriction"]'),
                        producttype: document.querySelector(".listing-content #listing-form-filters-type")
                    },
                    pagination: document.querySelectorAll('.listing-pagination a[aria-label="Pagination Navigation"]')
                }, this.updateUI(), this.addEventListeners()
            }
            return i(EmbeddedCatalog, [{
                key: "updateUI",
                value: function() {
                    this.scrollToCatalog(), this.changeClearSearchUrl(), this.changePaginationLinkUrls(), this.restrictProductTypes()
                }
            }, {
                key: "scrollToCatalog",
                value: function() {
                    if (window.location.href.indexOf("?") > -1) {
                        var e = this.elements.header.getBoundingClientRect().height,
                            t = this.elements.catalog.getBoundingClientRect().top;
                        window.scrollTo({
                            top: t - e,
                            behavior: "smooth"
                        })
                    }
                }
            }, {
                key: "changeClearSearchUrl",
                value: function() {
                    this.elements.clearSearch.href = this.currentPath + "?"
                }
            }, {
                key: "changePaginationLinkUrls",
                value: function() {
                    var e = this;
                    this.elements.pagination.forEach(function(t) {
                        t.href = t.href.replace("/catalog", e.currentPath), e.embeddedParams.forEach(function(e) {
                            t.href = t.href.replace(e.key + "=" + e.value, "").replace("&&", "&")
                        })
                    })
                }
            }, {
                key: "restrictProductTypes",
                value: function() {
                    var e = this.embeddedParams.filter(function(e) {
                        return "producttype" === e.key
                    })[0];
                    e && this.elements.productTypes.forEach(function(t) {
                        t.value !== e.value && t.remove()
                    })
                }
            }, {
                key: "addEventListeners",
                value: function() {
                    var e = this,
                        t = this.elements.sortBy,
                        n = this.elements.searchForm;
                    n.addEventListener("submit", function(t) {
                        t.preventDefault(), e.excludeEmbeddedParams(), e.redirectFormSubmit(n)
                    }), t.addEventListener("change", function(t) {
                        t.preventDefault(), e.excludeEmbeddedParams(), e.redirectFormSubmit(n)
                    })
                }
            }, {
                key: "excludeEmbeddedParams",
                value: function() {
                    var e = this;
                    this.embeddedParams.forEach(function(t) {
                        "categoryrestriction" === t.key && (e.elements.inputs.categoryrestriction.name = ""), "producttype" === t.key && (e.elements.inputs.producttype.name = "")
                    })
                }
            }, {
                key: "redirectFormSubmit",
                value: function(e) {
                    e.action = this.currentPath, e.submit()
                }
            }]), EmbeddedCatalog
        }()
    },
    105: function(e, t, n) {
        "use strict";

        function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.GlobalHeader = void 0;
        var i = function() {
                function defineProperties(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(e, t, n) {
                    return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
                }
            }(),
            a = n(6),
            r = n(5);
        t.GlobalHeader = function() {
            function GlobalHeader() {
                _classCallCheck(this, GlobalHeader), this.header = document.querySelector(".global-header.header-container"), this.classes = {
                    ariaExpanded: '[aria-expanded="true"]',
                    ghExpanded: "gh-is-expanded",
                    bigsearchExpanded: "gh-bigsearch-open",
                    showOverlay: "u-show-overlay",
                    menuOpen: "menu-open"
                }, this.dom = {
                    mainContent: document.querySelector("main#maincontent"),
                    dropdownTriggers: this.header.querySelectorAll(".gh-ppvr-trigger"),
                    bigsearchIcon: this.header.querySelector(".bigsearch-toggle"),
                    bigsearchArea: this.header.querySelector(".bigsearch-area"),
                    openMobileMenu: this.header.querySelector(".gh-open-menu"),
                    closeMobileMenu: this.header.querySelector(".gh-close-menu"),
                    mobileMenu: this.header.querySelector("#gh-drawer"),
                    overlay: this.header.querySelector("#gh-overlay"),
                    profileDropdownTrigger: this.header.querySelector("#gh-profile-dd-trigger"),
                    collapseTriggers: ["#gh-main-cnt", "#gh-nav-cnt", ".gh-nav-list"]
                }, this.init()
            }
            return i(GlobalHeader, [{
                key: "init",
                value: function() {
                    this.changeLinksToDropdowns(), this.addCollapserListeners(), this.addSearchIconListeners(), this.addMobileMenuListeners()
                }
            }, {
                key: "changeLinksToDropdowns",
                value: function() {
                    var e = this;
                    Array.from(this.dom.dropdownTriggers).forEach(function(t) {
                        var n = t.querySelector(".anchor");
                        n && (n.setAttribute("aria-haspopup", !0), n.setAttribute("aria-expanded", !1)), t.addEventListener("click", function(i) {
                            i.preventDefault(), e.hideOverlay(), e.toggleExpandedForDropdown(t, n)
                        })
                    })
                }
            }, {
                key: "toggleExpandedForDropdown",
                value: function(e, t) {
                    var n = !0 === e.parentNode.classList.contains(this.classes.ghExpanded);
                    n ? e.parentNode.classList.remove(this.classes.ghExpanded) : (this.collapseExpandedMenus(), this.collapseBigSearch(), e.parentNode.classList.add(this.classes.ghExpanded)), t && t.setAttribute("aria-expanded", !n)
                }
            }, {
                key: "addCollapserListeners",
                value: function() {
                    var e = this;
                    this.header.addEventListener("click", function(t) {
                        e.dom.collapseTriggers.forEach(function(n) {
                            document.querySelector(n).isEqualNode(t.target) && (e.hideOverlay(), e.collapseExpandedMenus(), e.collapseBigSearch())
                        })
                    }), this.dom.mainContent.addEventListener("click", function() {
                        e.collapseExpandedMenus(), e.collapseBigSearch()
                    })
                }
            }, {
                key: "addSearchIconListeners",
                value: function() {
                    var e = this;
                    this.dom.bigsearchIcon.addEventListener("click", function(t) {
                        t.preventDefault(), e.collapseExpandedMenus(), (0, a.urlContainsPath)("search-results") || (e.dom.bigsearchIcon.classList.contains(e.classes.bigsearchExpanded) ? (e.dom.bigsearchIcon.classList.remove(e.classes.bigsearchExpanded), e.dom.overlay.classList.remove(e.classes.showOverlay)) : (e.dom.bigsearchIcon.classList.add(e.classes.bigsearchExpanded), e.dom.overlay.classList.add(e.classes.showOverlay)))
                    })
                }
            }, {
                key: "addMobileMenuListeners",
                value: function() {
                    var e = this;
                    this.dom.openMobileMenu.addEventListener("click", function() {
                        var t = (0, r.getCurTop)();
                        document.body.classList.add(e.classes.menuOpen), document.body.style.top = "-" + t + "px", e.collapseExpandedMenus(), e.collapseBigSearch(), e.dom.mobileMenu.classList.add(e.classes.ghExpanded), e.dom.overlay.classList.add(e.classes.showOverlay)
                    }), this.dom.closeMobileMenu.addEventListener("click", function() {
                        e.hideOverlay(), e.dom.mobileMenu.classList.remove(e.classes.ghExpanded)
                    }), this.dom.overlay.addEventListener("click", function() {
                        e.hideOverlay(), e.dom.mobileMenu.classList.remove(e.classes.ghExpanded), e.collapseBigSearch()
                    })
                }
            }, {
                key: "hideOverlay",
                value: function() {
                    var e = (0, r.getCurTop)();
                    document.body.style.top = "", document.body.classList.remove(this.classes.menuOpen), window.scroll(0, e), this.dom.overlay.classList.remove(this.classes.showOverlay)
                }
            }, {
                key: "collapseExpandedMenus",
                value: function() {
                    var e = this;
                    this.dom.overlay.classList.remove(this.classes.showOverlay), Array.from(document.querySelectorAll("." + this.classes.ghExpanded)).forEach(function(t) {
                        t.classList.remove(e.classes.ghExpanded)
                    }), Array.from(document.querySelectorAll(this.classes.ariaExpanded)).forEach(function(e) {
                        e.setAttribute("aria-expanded", "false")
                    })
                }
            }, {
                key: "collapseBigSearch",
                value: function() {
                    this.dom.bigsearchIcon.classList.remove(this.classes.bigsearchExpanded), this.dom.overlay.classList.remove(this.classes.showOverlay), window.location.pathname.indexOf("search-results") < 0 && ($ ? $(".bigsearch-area").slideUp("fast") : this.dom.bigsearchArea.style.display = "none")
                }
            }]), GlobalHeader
        }()
    },
    106: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getGlobalHeaderEnglishConfig = void 0;
        var i = n(9);
        t.getGlobalHeaderEnglishConfig = function(e) {
            var t = {
                cdn: i.config.cdn[e].url,
                checkout: i.config.checkout[e].url
            };
            return {
                siteUrl: "/",
                checkoutUrl: t.checkout,
                aria: {
                    label: {
                        mobileMenu: "Mobile menu",
                        openMobileMenu: "Open mobile menu",
                        closeMobileMenu: "Close mobile menu",
                        profileDropdown: "Profile dropdown"
                    }
                },
                branding: {
                    linkTitle: "Home",
                    tree: {
                        imgUrl: t.cdn + "/matrix/includes/img/logo-tree-formatted.svg",
                        alt: "Elsevier Tree"
                    },
                    wordmark: {
                        imgUrl: t.cdn + "/matrix/includes/img/logo-text-formatted.svg",
                        alt: "Elsevier Wordmark"
                    }
                },
                account: {
                    signIn: {
                        title: "Sign in to view your account details and order history",
                        text: "Sign in",
                        url: "/auth"
                    },
                    signOut: {
                        text: "Sign out",
                        url: "/logout"
                    },
                    viewAccount: {
                        text: "View account",
                        url: "/account"
                    }
                },
                bigSearch: {
                    tabs: [{
                        label: "All",
                        value: "all",
                        checked: !0,
                        active: !0
                    }, {
                        label: "Pages",
                        value: "pages"
                    }, {
                        label: "Books",
                        value: "books"
                    }, {
                        label: "Journals",
                        value: "journals"
                    }],
                    text: {
                        inputLabel: "Search for books, journals or webpages...",
                        search: "Search",
                        performSearch: "Perform search"
                    }
                },
                cart: {
                    iconLabel: "View cart",
                    url: "/cart"
                },
                menu: {
                    iconLabel: "Menu",
                    sections: [{
                        heading: "About Elsevier",
                        noJsUrl: "/about",
                        items: [{
                            name: "About Us",
                            url: "/about"
                        }, {
                            name: "Elsevier Connect",
                            url: "/connect"
                        }, {
                            name: "Careers",
                            url: "/about/careers"
                        }]
                    }, {
                        heading: "Products & Solutions",
                        noJsUrl: "/solutions",
                        items: [{
                            name: "R & D Solutions",
                            url: "/rd-solutions"
                        }, {
                            name: "Clinical Solutions",
                            url: "/clinical-solutions"
                        }, {
                            name: "Research Platforms",
                            url: "/research-platforms"
                        }, {
                            name: "Research Intelligence",
                            url: "/research-intelligence"
                        }, {
                            name: "Education",
                            url: "/education"
                        }, {
                            name: "All Solutions",
                            url: "/solutions"
                        }]
                    }, {
                        heading: "Services",
                        noJsHide: "true",
                        items: [{
                            name: "Authors",
                            url: "/authors"
                        }, {
                            name: "Editors",
                            url: "/editors"
                        }, {
                            name: "Reviewers",
                            url: "/reviewers"
                        }, {
                            name: "Librarians",
                            url: "/librarians"
                        }]
                    }, {
                        heading: "Shop & Discover",
                        noJsUrl: "/books-and-journals",
                        items: [{
                            name: "Books and Journals",
                            url: "/books-and-journals"
                        }, {
                            name: "Author Webshop",
                            screenReaderText: "Opens in new window",
                            url: "https://webshop.elsevier.com/?utm_source=ecom&utm_medium=top&utm_campaign=webshop",
                            externalLink: "true"
                        }]
                    }]
                }
            }
        }
    },
    107: function(e, t, n) {
        "use strict";

        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function _asyncToGenerator(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function step(i, a) {
                        try {
                            var r = t[i](a),
                                o = r.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!r.done) return Promise.resolve(o).then(function(e) {
                            step("next", e)
                        }, function(e) {
                            step("throw", e)
                        });
                        e(o)
                    }
                    return step("next")
                })
            }
        }

        function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.InstituteCertificateTool = void 0;
        var i = function() {
                function defineProperties(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(e, t, n) {
                    return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
                }
            }(),
            a = n(19),
            r = _interopRequireDefault(a),
            o = n(176),
            s = _interopRequireDefault(o);
        t.InstituteCertificateTool = function() {
            function InstituteCertificateTool(e) {
                _classCallCheck(this, InstituteCertificateTool), this.config = e, this.mountNode = this.config.mountNode, this.uniqueFieldValues = [], this.searchToolUrl = this.config.searchToolUrl, this.searchToolPaths = {
                    certificate: "/certificate",
                    search: "/search",
                    uniqueFields: "/uniquefields"
                }, this.errorColor = "red", this.defaultTextColor = "black", this.pleaseFillMandatoryFieldsMessageTranslation = "“学科”与“年”为必选项。", this.noResultsReturnedMessageTranslation = "无匹配的结果。请修改您的搜索条件。", this.pdfShouldBeDownloadingMessageTranslation = "您的证书正在下载。若浏览器无响应，请再次点击此链接。", this.scholarNameTranslation = "学者姓名", this.institutionTranslation = "机构", this.certificateTranslation = "证书", this.downloadPdfTranslation = "下载证书", this.init()
            }
            return i(InstituteCertificateTool, [{
                key: "init",
                value: function() {
                    function init() {
                        return e.apply(this, arguments)
                    }
                    var e = _asyncToGenerator(s.default.mark(function _callee() {
                        return s.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.getUniqueValuesForYearAndTopic();
                                case 2:
                                    this.build(), this.getDOMElements(), this.registerEventListeners();
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }, _callee, this)
                    }));
                    return init
                }()
            }, {
                key: "getUniqueValuesForYearAndTopic",
                value: function() {
                    function getUniqueValuesForYearAndTopic() {
                        return e.apply(this, arguments)
                    }
                    var e = _asyncToGenerator(s.default.mark(function _callee2() {
                        var e = this;
                        return s.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, r.default.get(encodeURI("" + this.searchToolUrl + this.searchToolPaths.uniqueFields + "?field=year")).then(function(t) {
                                        e.uniqueFieldValues.year = t.data.uniqueFieldValues
                                    }).catch(function(e) {
                                        console.log(e)
                                    });
                                case 2:
                                    return t.next = 4, r.default.get(encodeURI("" + this.searchToolUrl + this.searchToolPaths.uniqueFields + "?field=topic")).then(function(t) {
                                        e.uniqueFieldValues.topic = t.data.uniqueFieldValues
                                    }).catch(function(e) {
                                        console.log(e)
                                    });
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }, _callee2, this)
                    }));
                    return getUniqueValuesForYearAndTopic
                }()
            }, {
                key: "build",
                value: function() {
                    var e = n(151);
                    this.mountNode.innerHTML = e({
                        year: this.uniqueFieldValues.year,
                        topic: this.uniqueFieldValues.topic
                    })
                }
            }, {
                key: "getDOMElements",
                value: function() {
                    this.keywordInput = document.getElementById("keyword"), this.yearSelected = document.getElementById("year"), this.topicSelected = document.getElementById("topic"), this.results = document.getElementById("results"), this.warningMessage = document.getElementById("warningMessage"), this.submitButton = document.getElementById("submit"), this.clearSearch = document.getElementById("clearSearch")
                }
            }, {
                key: "getCertificate",
                value: function(e) {
                    var t = this,
                        n = {
                            responseType: "arraybuffer"
                        };
                    this.warningMessage.innerHTML = "", r.default.post(encodeURI("" + this.searchToolUrl + this.searchToolPaths.certificate), {
                        id: e
                    }, n).then(function(e) {
                        var n = new Blob([e.data], {
                                type: "application/pdf"
                            }),
                            i = document.createElement("a");
                        i.href = window.URL.createObjectURL(n), i.download = "certificate.pdf", i.click(), t.warningMessage.innerHTML = t.pdfShouldBeDownloadingMessageTranslation + ' <a href="' + i + '" target="_blank">' + t.downloadPdfTranslation + "</a>"
                    }).catch(function(e) {
                        t.warningMessage.innerHTML = t.noResultsReturnedMessageTranslation
                    })
                }
            }, {
                key: "searchStudents",
                value: function(e) {
                    var t = this;
                    this.results.innerHTML = "";
                    var n = this.keywordInput.value.toLowerCase(),
                        i = this.yearSelected.value.toLowerCase(),
                        a = this.topicSelected.value.toLowerCase();
                    if (!i || !a) return this.warningMessage.innerHTML = this.pleaseFillMandatoryFieldsMessageTranslation, i || (this.yearSelected.style.color = this.errorColor), void(a || (this.topicSelected.style.color = this.errorColor));
                    i && a && (this.warningMessage.innerHTML = "", r.default.get(encodeURI("" + this.searchToolUrl + this.searchToolPaths.search + "?year=" + i + "&topic=" + a + "&keyword=" + n)).then(function(e) {
                        e.data.students.length > 0 ? (t.results.innerHTML = '<div id="header"><span>' + t.scholarNameTranslation + "</span><span>" + t.institutionTranslation + "</span><span>" + t.certificateTranslation + "</span></div>", e.data.students.filter(function(e) {
                            return t.results.innerHTML += "<div/><span>" + e.fullname + "</span><span>" + e.institution + "</span><span><a href='#' data-id=" + e.id + " tabindex='1'>" + t.downloadPdfTranslation + "</a></span></div>", !0
                        })) : t.warningMessage.innerHTML = t.noResultsReturnedMessageTranslation
                    }).catch(function(e) {
                        t.results.innerHTML = "" + e
                    }))
                }
            }, {
                key: "clearResults",
                value: function(e) {
                    this.results.innerHTML = "", this.warningMessage.innerHTML = ""
                }
            }, {
                key: "clearYearValidationColor",
                value: function(e) {
                    this.yearSelected.style.color = this.defaultTextColor, this.warningMessage.innerHTML = ""
                }
            }, {
                key: "clearTopicValidationColor",
                value: function(e) {
                    this.topicSelected.style.color = this.defaultTextColor, this.warningMessage.innerHTML = ""
                }
            }, {
                key: "registerEventListeners",
                value: function() {
                    var e = this;
                    this.results.addEventListener("click", function(t) {
                        t.target && "A" === t.target.nodeName && (t.preventDefault(), e.getCertificate(Number(t.target.getAttribute("data-id"))))
                    }), this.keywordInput.addEventListener("keypress", function(t) {
                        "Enter" === t.key && e.searchStudents(t)
                    }), this.clearSearch.addEventListener("keypress", function(t) {
                        "Enter" === t.key && e.clearResults(t)
                    }), this.submitButton.addEventListener("click", function(t) {
                        return e.searchStudents(t)
                    }), this.clearSearch.addEventListener("click", function(t) {
                        return e.clearResults(t)
                    }), this.yearSelected.addEventListener("click", function(t) {
                        return e.clearYearValidationColor(t)
                    }), this.topicSelected.addEventListener("click", function(t) {
                        return e.clearTopicValidationColor(t)
                    })
                }
            }]), InstituteCertificateTool
        }()
    },
    108: function(e, t, n) {
        "use strict";

        function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Timeline = void 0;
        var i = function() {
                function defineProperties(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(e, t, n) {
                    return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
                }
            }(),
            a = n(62),
            r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a),
            o = n(179),
            s = n(152);
        t.Timeline = function() {
            function Timeline(e) {
                _classCallCheck(this, Timeline), this.config = e, this.mountNode = document.querySelector(e.mountNode), this.activeSlideNum = e.activeSlideNum, this.currentSlideNum = e.activeSlideNum, this.contentItem = e.classItem, this.numSlides = o.chapters.length - 1, this.init()
            }
            return i(Timeline, [{
                key: "init",
                value: function() {
                    this.build(), this.getDOMElements(), this.registerEventHandlers()
                }
            }, {
                key: "build",
                value: function() {
                    this.mountNode.innerHTML = s({
                        activeSlideNum: this.activeSlideNum,
                        chapters: o.chapters
                    })
                }
            }, {
                key: "getDOMElements",
                value: function() {
                    this.$contentContainer = (0, r.default)(this.config.classContentContainer), this.$currentSlide = (0, r.default)("#" + this.activeSlideNum), this.$activeSlide = (0, r.default)("#" + this.activeSlideNum), this.$menuContainer = (0, r.default)(this.config.classMenuContainer), this.$menuItem = (0, r.default)(this.config.classMenuItem), this.$headerContainer = (0, r.default)(this.config.classHeaderContainer), this.$sliderContainer = (0, r.default)(this.config.classSliderContainer), this.$pageTop = (0, r.default)(this.config.classPageTop)
                }
            }, {
                key: "registerEventHandlers",
                value: function() {
                    var e = this;
                    window.onload = function() {
                        return e.resizeContainer()
                    }, window.onresize = function() {
                        return e.resizeContainer()
                    }, this.$menuItem.on("click", function(t) {
                        t.preventDefault(), e.scrollToMenu(), e.setActiveSlide(t.target.getAttribute("data-target"))
                    }), this.$pageTop.on("click", function(t) {
                        t.preventDefault(), e.scrollToMenu(), e.$pageTop.blur()
                    })
                }
            }, {
                key: "scrollToMenu",
                value: function() {
                    var e = this.$sliderContainer.offset().top - this.$headerContainer.outerHeight();
                    (0, r.default)("html, body").animate({
                        scrollTop: e
                    }, 1e3)
                }
            }, {
                key: "resizeContainer",
                value: function() {
                    this.$contentContainer.css("height", this.$activeSlide.height())
                }
            }, {
                key: "setActiveSlide",
                value: function(e) {
                    this.currentSlideNum = this.activeSlideNum, "prev" === e ? this.activeSlideNum-- : "next" === e ? this.activeSlideNum++ : this.activeSlideNum = parseInt(e, 10), this.$currentSlide = (0, r.default)("#" + this.currentSlideNum), this.$activeSlide = (0, r.default)("#" + this.activeSlideNum), this.animateSlide(), this.animateMenu()
                }
            }, {
                key: "animateSlide",
                value: function() {
                    var e = this;
                    if (this.currentSlideNum !== this.activeSlideNum) {
                        var t = this.getAnimationClasses(this.currentSlideNum);
                        this.$activeSlide.attr("class", t.enter), this.$currentSlide.attr("class", t.exit).one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
                            e.$currentSlide.removeClass("leave-right leave-left"), e.$activeSlide.removeClass("enter-left enter-right")
                        }), this.resizeContainer()
                    }
                }
            }, {
                key: "animateMenu",
                value: function() {
                    var e = this;
                    setTimeout(function() {
                        var t = e.$menuContainer.find("[data-target='" + e.activeSlideNum + "']"),
                            n = e.$menuItem,
                            i = n.offset().left,
                            a = t.offset().left - parseInt(t.parent().css("margin-left"), 10);
                        n.removeClass("selected"), t.addClass("selected"), e.$menuContainer.animate({
                            scrollLeft: a - i
                        }, {
                            duration: 500,
                            easing: "swing"
                        }, 800)
                    }, 500)
                }
            }, {
                key: "getAnimationClasses",
                value: function() {
                    return {
                        enter: this.contentItem + " selected " + (this.activeSlideNum > this.currentSlideNum ? "enter-right" : "enter-left"),
                        exit: this.contentItem + " " + (this.activeSlideNum > this.currentSlideNum ? "leave-left" : "leave-right")
                    }
                }
            }]), Timeline
        }()
    },
    109: function(e, t, n) {
        "use strict";

        function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(e, t, n) {
                return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
            }
        }();
        t.Tooltip = function() {
            function Tooltip(e) {
                _classCallCheck(this, Tooltip), this.config = e, this.init()
            }
            return i(Tooltip, [{
                key: "init",
                value: function() {
                    this.registerEventHandlerForLinks()
                }
            }, {
                key: "hideTooltip",
                value: function() {
                    var e = document.querySelector(this.config.openTooltipContent),
                        t = document.querySelector(this.config.callout),
                        n = document.querySelector(this.config.closeTooltip);
                    e.style.display = "none", e.classList.remove("borderTop"), e.classList.remove("borderBottom"), document.querySelector(this.config.openTooltip).classList.remove("open"), t.parentNode.removeChild(t), n.parentNode.removeChild(n)
                }
            }, {
                key: "showTooltip",
                value: function(e) {
                    e.target.classList.add("open");
                    var t = document.querySelector(this.config.openTooltipContent);
                    t.style.display = "inline-block";
                    var n = document.createElement("div");
                    n.classList.add("closeTooltip"), t.appendChild(n)
                }
            }, {
                key: "registerEventHandlerForLinks",
                value: function() {
                    var e = this;
                    Array.from(this.config.tooltipLinksAll).forEach(function(t) {
                        t.addEventListener("click", function(t) {
                            var n = t.target.className;
                            "tooltip-clickable" === n ? (document.querySelectorAll(e.config.openTooltipContent).length > 0 && e.hideTooltip(), e.showTooltip(t), e.calculateTooltipContentPosition(t), e.registerEventHandlerForCloseButton()) : "tooltip-clickable open" === n && e.hideTooltip()
                        })
                    })
                }
            }, {
                key: "registerEventHandlerForCloseButton",
                value: function() {
                    var e = this;
                    document.querySelector(this.config.closeTooltip).addEventListener("click", function(t) {
                        e.hideTooltip()
                    })
                }
            }, {
                key: "calculateClickPosition",
                value: function(e) {
                    var t = e.target.getBoundingClientRect().top / document.body.getBoundingClientRect().height,
                        n = e.target.getBoundingClientRect().left / document.body.getBoundingClientRect().width;
                    return t < .5 && n > .5 ? "bottomRight" : t < .5 && n < .5 ? "bottomLeft" : t > .5 && n < .5 ? "topLeft" : t > .5 && n > .5 ? "topRight" : void 0
                }
            }, {
                key: "calculateTooltipContentPosition",
                value: function(e) {
                    var t = document.querySelector(this.config.openTooltipContent),
                        n = t.offsetHeight + 19,
                        i = t.offsetWidth;
                    switch (this.calculateClickPosition(e)) {
                        case "bottomRight":
                            t.classList.add("borderTop"), t.style.marginTop = 39..toString() + "px", t.style.marginRight = i.toString() + "px", t.style.marginLeft = -i.toString() + "px";
                            break;
                        case "bottomLeft":
                            t.classList.add("borderTop"), t.style.marginTop = 39..toString() + "px", t.style.marginLeft = (-2).toString() + "rem";
                            break;
                        case "topLeft":
                            t.classList.add("borderBottom"), t.style.marginTop = (1 - n).toString() + "px", t.style.marginLeft = (-2).toString() + "rem", t.style.marginTop = (-t.offsetHeight - 19 + 1).toString() + "px";
                            break;
                        case "topRight":
                            t.classList.add("borderBottom"), t.style.marginTop = (1 - n).toString() + "px", t.style.marginRight = i.toString() + "px", t.style.marginLeft = -i.toString() + "px";
                            break;
                        default:
                            console.log("position not set")
                    }
                    var a = document.createElement("span");
                    a.classList.add("callout"), document.querySelector(this.config.openTooltip).appendChild(a), document.querySelector(this.config.callout).classList.add(this.calculateClickPosition(e))
                }
            }]), Tooltip
        }()
    },
    110: function(e, t, n) {
        "use strict";
        n(67), n(65), n(66), n(68), n(69), n(70), n(72), n(71), n(73), n(74), n(77), n(76), n(63), n(64)
    },
    112: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.getCookie = function(e) {
            var t = document.cookie.match("(^| )" + e + "=([^;]+)");
            return t ? {
                name: e,
                contents: t[2]
            } : void 0
        }, t.setCookie = function(e, t, n, i) {
            n = n || 1, i = void 0 === i ? "" : "domain=" + i + ";";
            var a = new Date;
            a.setDate(a.getDate() + n), t = window.escape(t) + (null == a ? "" : "; expires=" + a.toUTCString()), document.cookie = e + "=" + t + ";" + i + "path=/"
        }
    },
    113: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.changeInputFocusAtMaxLength = function(e, t) {
            var n = e[0];
            n.value.length === Number(n.maxLength) && t.focus()
        }, t.changeInputFocusAtLastDelete = function(e, t, n) {
            var i = t[0];
            8 !== e || i.value.length || n.focus()
        }
    },
    151: function(e, t, n) {
        var i = n(1);
        e.exports = (i.default || i).template({
            1: function(e, t, n, i, a) {
                var r = e.lambda,
                    o = e.escapeExpression;
                return '                <option value="' + o(r(t, t)) + '">' + o(r(t, t)) + "</option>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var r, o = null != t ? t : e.nullContext || {};
                return '<div id="studentSearchSection">\n    <div id="studentSearchFields">\n    <input id="keyword" class="searchInput" type="text" tabindex="1" placeholder="按学者姓名或机构搜索">\n        <select id="year" class="searchInput" tabindex="1">\n            <option value="" selected disabled hidden>年 *</option>\n' + (null != (r = n.each.call(o, null != t ? t.year : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? r : "") + '        </select>\n        <select id="topic" class="searchInput" tabindex="1">\n            <option value="" selected disabled hidden>学科 *</option>\n' + (null != (r = n.each.call(o, null != t ? t.topic : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? r : "") + '        </select>\n        <input id="submit" type="submit" value="搜索" tabindex="1">\n    </div>\n    <div id="clearSearch" tabindex="1"><a>取消搜索 x</a></div>\n    <br/>\n    <div id="warningMessage"></div>\n    <br/>\n    <div id="results"></div>\n</div>\n'
            },
            useData: !0
        })
    },
    152: function(e, t, n) {
        var i = n(1);
        e.exports = (i.default || i).template({
            1: function(e, t, n, i, a, r, o) {
                var s, l, c = null != t ? t : e.nullContext || {},
                    u = n.helperMissing;
                return '                    <li>\n                        <a href="#" data-target="' + e.escapeExpression((l = null != (l = n.index || a && a.index) ? l : u, "function" == typeof l ? l.call(c, {
                    name: "index",
                    hash: {},
                    data: a
                }) : l)) + '" class="menu-item' + (null != (s = (n.ifCond || t && t.ifCond || u).call(c, null != o[1] ? o[1].activeSlideNum : o[1], "===", a && a.index, {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(2, a, 0, r, o),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + '">' + (null != (l = null != (l = n.title || (null != t ? t.title : t)) ? l : u, s = "function" == typeof l ? l.call(c, {
                    name: "title",
                    hash: {},
                    data: a
                }) : l) ? s : "") + "</a>\n                    </li>\n"
            },
            2: function(e, t, n, i, a) {
                return " selected"
            },
            4: function(e, t, n, i, a, r, o) {
                var s, l, c = null != t ? t : e.nullContext || {},
                    u = n.helperMissing,
                    d = e.escapeExpression;
                return '            <li id="' + d((l = null != (l = n.index || a && a.index) ? l : u, "function" == typeof l ? l.call(c, {
                    name: "index",
                    hash: {},
                    data: a
                }) : l)) + '" class="slider-item' + (null != (s = (n.ifCond || t && t.ifCond || u).call(c, null != o[1] ? o[1].activeSlideNum : o[1], "===", a && a.index, {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(2, a, 0, r, o),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + '" data-title="' + d((l = null != (l = n.title || (null != t ? t.title : t)) ? l : u, "function" == typeof l ? l.call(c, {
                    name: "title",
                    hash: {},
                    data: a
                }) : l)) + '">\n' + (null != (s = n.each.call(c, null != t ? t.slides : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(5, a, 0, r, o),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "            </li>\n"
            },
            5: function(e, t, n, i, a) {
                var r, o, s = null != t ? t : e.nullContext || {},
                    l = n.helperMissing;
                return '                    <div class="clearfix">\n                        <h1>' + e.escapeExpression((o = null != (o = n.title || (null != t ? t.title : t)) ? o : l, "function" == typeof o ? o.call(s, {
                    name: "title",
                    hash: {},
                    data: a
                }) : o)) + "</h1>\n                        " + (null != (o = null != (o = n.description || (null != t ? t.description : t)) ? o : l, r = "function" == typeof o ? o.call(s, {
                    name: "description",
                    hash: {},
                    data: a
                }) : o) ? r : "") + "\n                    </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a, r, o) {
                var s, l = null != t ? t : e.nullContext || {};
                return '<section class="els-slider large-12 columns">\n    <div class="article-content">\n        <div class="row row-tight">\n            <div class="large-12 columns">\n                <h2>Stories that made our history</h2>\n            </div>\n        </div>\n    </div>\n    <div class="timeline">\n        <div class="menu-wrapper">\n            <ul class="menu">\n' + (null != (s = n.each.call(l, null != t ? t.chapters : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, a, 0, r, o),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + '            </ul>            \n        </div>\n    </div>\n\n    <div class="slider-content">\n        <ol>\n' + (null != (s = n.each.call(l, null != t ? t.chapters : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(4, a, 0, r, o),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + '        </ol>\n    </div>\n    <div class="row">\n        <div class="text-center">\n            <a class="cta-primary small timeline-top" href="#" title="Timeline top">Top</a>\n        </div>\n    </div>\n</section>\n'
            },
            useData: !0,
            useDepths: !0
        })
    },
    159: function(e, t, n) {
        var i = n(1);
        e.exports = (i.default || i).template({
            1: function(e, t, n, i, a) {
                var r, o, s = null != t ? t : e.nullContext || {},
                    l = n.helperMissing,
                    c = e.escapeExpression;
                return '                        <li class="' + (null != (r = n.if.call(s, null != t ? t.noJsHide : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? r : "") + 'gh-nav-item gh-has-dd gh-move-to-spine" data-aa-region="' + c((o = null != (o = n.dataRegion || (null != t ? t.dataRegion : t)) ? o : l, "function" == typeof o ? o.call(s, {
                    name: "dataRegion",
                    hash: {},
                    data: a
                }) : o)) + '">\n                            <div class="gh-ppvr">\n                                <div class="gh-ppvr-trigger">\n                                    <a class="anchor button-link-primary gh-nav-action" href="' + c((o = null != (o = n.noJsUrl || (null != t ? t.noJsUrl : t)) ? o : l, "function" == typeof o ? o.call(s, {
                    name: "noJsUrl",
                    hash: {},
                    data: a
                }) : o)) + '" tabindex="0">\n                                        <span class="anchor-text">' + c((o = null != (o = n.heading || (null != t ? t.heading : t)) ? o : l, "function" == typeof o ? o.call(s, {
                    name: "heading",
                    hash: {},
                    data: a
                }) : o)) + '</span>\n                                    </a>\n                                </div>\n                                <div class="gh-ppvr-cnt gh-ppvr-right">\n                                    <div class="gh-ppvr-arrow-cnt">\n                                        <div class="gh-ppvr-arrow gh-arrow-right">\n                                            <div class="u-position-relative">\n                                                <div class="gh-ppvr-arrow-fill"></div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class="gh-ppvr-cnt-inner">\n                                        <ul class="gh-dd-nav">\n' + (null != (r = n.each.call(s, null != t ? t.items : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(4, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? r : "") + "                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n"
            },
            2: function(e, t, n, i, a) {
                return "no-js-hide "
            },
            4: function(e, t, n, i, a) {
                var r, o, s = null != t ? t : e.nullContext || {},
                    l = n.helperMissing,
                    c = e.escapeExpression;
                return '                                                <li class="gh-nav-item">\n                                                    <a href="' + c((o = null != (o = n.url || (null != t ? t.url : t)) ? o : l, "function" == typeof o ? o.call(s, {
                    name: "url",
                    hash: {},
                    data: a
                }) : o)) + '" class="' + (null != (r = n.if.call(s, null != t ? t.externalLink : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? r : "") + 'anchor button-link-primary gh-nav-action" tabindex="0">\n                                                        <span class="anchor-text">\n                                                            ' + c((o = null != (o = n.name || (null != t ? t.name : t)) ? o : l, "function" == typeof o ? o.call(s, {
                    name: "name",
                    hash: {},
                    data: a
                }) : o)) + "\n                                                        </span>\n" + (null != (r = n.if.call(s, null != t ? t.screenReaderText : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? r : "") + "                                                    </a>\n                                                </li>\n"
            },
            5: function(e, t, n, i, a) {
                return "anchor-external-link "
            },
            7: function(e, t, n, i, a) {
                var r;
                return '                                                            <span class="gh-sr-only">' + e.escapeExpression((r = null != (r = n.screenReaderText || (null != t ? t.screenReaderText : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t : e.nullContext || {}, {
                    name: "screenReaderText",
                    hash: {},
                    data: a
                }) : r)) + "</span>\n"
            },
            9: function(e, t, n, i, a) {
                var r, o, s = null != t ? t : e.nullContext || {},
                    l = n.helperMissing,
                    c = e.escapeExpression;
                return '                            <li class="gh-nav-item gh-has-dd" data-aa-region="' + c((o = null != (o = n.dataRegion || (null != t ? t.dataRegion : t)) ? o : l, "function" == typeof o ? o.call(s, {
                    name: "dataRegion",
                    hash: {},
                    data: a
                }) : o)) + '">\n                                <div class="u-clr-grey5 u-margin-bottom-s gh-lbl" role="heading" aria-level="2" tabindex="0">' + c((o = null != (o = n.heading || (null != t ? t.heading : t)) ? o : l, "function" == typeof o ? o.call(s, {
                    name: "heading",
                    hash: {},
                    data: a
                }) : o)) + '</div>\n                                <ul class="gh-dd-nav">\n' + (null != (r = n.each.call(s, null != t ? t.items : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(10, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? r : "") + "                                </ul>\n                            </li>\n"
            },
            10: function(e, t, n, i, a) {
                var r, o, s = null != t ? t : e.nullContext || {},
                    l = n.helperMissing,
                    c = e.escapeExpression;
                return '                                        <li class="gh-nav-item">\n                                            <a href="' + c((o = null != (o = n.url || (null != t ? t.url : t)) ? o : l, "function" == typeof o ? o.call(s, {
                    name: "url",
                    hash: {},
                    data: a
                }) : o)) + '" class="' + (null != (r = n.if.call(s, null != t ? t.externalLink : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? r : "") + 'anchor button-link-primary gh-nav-action" tabindex="0">\n                                                <span class="anchor-text">' + c((o = null != (o = n.name || (null != t ? t.name : t)) ? o : l, "function" == typeof o ? o.call(s, {
                    name: "name",
                    hash: {},
                    data: a
                }) : o)) + "</span>\n" + (null != (r = n.if.call(s, null != t ? t.screenReaderText : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(11, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? r : "") + "                                            </a>\n                                        </li>\n"
            },
            11: function(e, t, n, i, a) {
                var r;
                return '                                                    <span class="gh-sr-only">' + e.escapeExpression((r = null != (r = n.screenReaderText || (null != t ? t.screenReaderText : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t : e.nullContext || {}, {
                    name: "screenReaderText",
                    hash: {},
                    data: a
                }) : r)) + "</span>\n"
            },
            13: function(e, t, n, i, a) {
                var r, o, s = null != t ? t : e.nullContext || {},
                    l = n.helperMissing,
                    c = e.escapeExpression;
                return '                                <li class="tab-title' + (null != (r = n.if.call(s, null != t ? t.active : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(14, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? r : "") + '">\n                                    <label class="r-label" tabindex="0">\n                                        <input class="bigsearch-radiobutton" name="labels" type="radio" value="' + c((o = null != (o = n.value || (null != t ? t.value : t)) ? o : l, "function" == typeof o ? o.call(s, {
                    name: "value",
                    hash: {},
                    data: a
                }) : o)) + '"' + (null != (r = n.if.call(s, null != t ? t.checked : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(16, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? r : "") + ">\n                                        <span>" + c((o = null != (o = n.label || (null != t ? t.label : t)) ? o : l, "function" == typeof o ? o.call(s, {
                    name: "label",
                    hash: {},
                    data: a
                }) : o)) + "</span>\n                                    </label>\n                                </li>\n"
            },
            14: function(e, t, n, i, a) {
                return " active"
            },
            16: function(e, t, n, i, a) {
                return 'checked=""'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var r, o, s = null != t ? t : e.nullContext || {},
                    l = n.helperMissing,
                    c = "function",
                    u = e.escapeExpression,
                    d = e.lambda;
                return '\n<div id="gh-overlay" class="u-overlay" tabindex="-1"></div>\n\n<header role="banner" id="gh-cnt">\n    <div id="gh-main-cnt" class="u-flex-center-ver u-position-relative gh-sides-padding">\n\n        <a href="' + u((o = null != (o = n.siteUrl || (null != t ? t.siteUrl : t)) ? o : l, typeof o === c ? o.call(s, {
                    name: "siteUrl",
                    hash: {},
                    data: a
                }) : o)) + '" id="gh-branding" class="u-flex-center-ver" title="' + u(d(null != (r = null != t ? t.branding : t) ? r.linkTitle : r, t)) + '">\n            <img src="' + u(d(null != (r = null != (r = null != t ? t.branding : t) ? r.tree : r) ? r.imgUrl : r, t)) + '" alt="' + u(d(null != (r = null != (r = null != t ? t.branding : t) ? r.tree : r) ? r.alt : r, t)) + '" class="gh-logo">\n            <img src="' + u(d(null != (r = null != (r = null != t ? t.branding : t) ? r.wordmark : r) ? r.imgUrl : r, t)) + '" alt="' + u(d(null != (r = null != (r = null != t ? t.branding : t) ? r.wordmark : r) ? r.alt : r, t)) + '" class="gh-wordmark gh-elsevier-wordmark">\n        </a>\n\n        <div id="gh-nav-cnt" class="u-flex-center-ver">\n\n            <nav aria-label="links" class="gh-nav gh-nav-links gh-nav-h">\n                <ul class="gh-nav-list u-list-reset">\n' + (null != (r = n.each.call(s, null != (r = null != t ? t.menu : t) ? r.sections : r, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? r : "") + '                </ul>\n            </nav>\n\n            <nav aria-label="utilities" class="gh-nav gh-nav-utilities gh-nav-h">\n                <ul class="gh-nav-list u-list-reset">\n                    <li id="js-wrapper-search-link" class="gh-nav-item">\n                        <button class="button-link button-link-primary gh-nav-action gh-icon-btn bigsearch-toggle" tabindex="0" aria-haspopup="true" aria-labelledby="bigsearch-label">\n                            <span class="search-text anchor-text">' + u(d(null != (r = null != (r = null != t ? t.bigSearch : t) ? r.text : r) ? r.search : r, t)) + '</span>\n                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" focusable="false" viewBox="0 0 100 128" width="18.75" height="24" class="gh-icon icon-search">\n                                <path d="m19.22 76.91c-5.84-5.84-9.05-13.6-9.05-21.85s3.21-16.01 9.05-21.85c5.84-5.83 13.59-9.05 21.85-9.05 8.25 0 16.01 3.22 21.84 9.05 5.84 5.84 9.05 13.6 9.05 21.85s-3.21 16.01-9.05 21.85c-5.83 5.83-13.59 9.05-21.84 9.05-8.26 0-16.01-3.22-21.85-9.05zm80.33 29.6l-26.32-26.32c5.61-7.15 8.68-15.9 8.68-25.13 0-10.91-4.25-21.17-11.96-28.88-7.72-7.71-17.97-11.96-28.88-11.96s-21.17 4.25-28.88 11.96c-7.72 7.71-11.97 17.97-11.97 28.88s4.25 21.17 11.97 28.88c7.71 7.71 17.97 11.96 28.88 11.96 9.23 0 17.98-3.07 25.13-8.68l26.32 26.32 7.03-7.03"></path>\n                                <rect x="0" y="0" width="100%" height="100%" stroke="none" opacity="0">\n                                    <title>' + u(d(null != (r = null != (r = null != t ? t.bigSearch : t) ? r.text : r) ? r.search : r, t)) + '</title>\n                                </rect>\n                            </svg>\n                        </button>\n                    </li>\n                    <li class="gh-nav-item gh-has-dd" data-aa-region="Cart">\n                        <div id="gh-cart-dd" class="gh-ppvr u-clr-grey7 gh-is-empty">\n                            <a href="' + u((o = null != (o = n.checkoutUrl || (null != t ? t.checkoutUrl : t)) ? o : l, typeof o === c ? o.call(s, {
                    name: "checkoutUrl",
                    hash: {},
                    data: a
                }) : o)) + u(d(null != (r = null != t ? t.cart : t) ? r.url : r, t)) + '" class="button-link button-link-primary gh-nav-action gh-icon-btn gh-has-badge" tabindex="0">\n\n                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" focusable="false" aria-label="' + u(d(null != (r = null != t ? t.cart : t) ? r.iconLabel : r, t)) + '" viewBox="0 0 118 128" width="22.125" height="24" class="gh-icon icon-shopping-cart">\n                                    <path d="m35.22 2e1c-2.23-6-8.93-12-16.62-12h-18.6v1e1h18.6c3.94 0 7.4 3.22 7.4 6.9v57.04c0 9.15 7.14 16.06 16.6 16.06h67.4v-1e1h-67.4c-4.01 0-6.6-2.38-6.6-6.06v-51.96h71.2c-0.77 1e1 -1.91 23.77-2.44 27.28-0.54 3.62-3.95 6.28-8.9 6.95-5.59 0.77-34.69 4.12-47.86 5.71v10.08c12.55-1.52 43.3-5.07 49.22-5.88 9.37-1.29 16.21-7.32 17.43-15.38 0.85-5.62 2.84-32.24 2.93-33.37l0.4-5.37h-82.76m64.78 84c-5.53 0-1e1 4.47-1e1 1e1 0 5.52 4.47 1e1 1e1 1e1 5.52 0 1e1 -4.48 1e1 -1e1 0-5.53-4.48-1e1 -1e1 -1e1m-64 0c-5.52 0-1e1 4.47-1e1 1e1 0 5.52 4.48 1e1 1e1 1e1s1e1 -4.48 1e1 -1e1c0-5.53-4.48-1e1 -1e1 -1e1"></path>\n                                    <rect x="0" y="0" width="100%" height="100%" stroke="none" opacity="0">\n                                        <title>' + u(d(null != (r = null != t ? t.cart : t) ? r.iconLabel : r, t)) + '</title>\n                                    </rect>\n                                </svg>\n\n                                <span id="shopping-cart-count-container" class="button-link-text hide">\n                                    <div class="gh-badge gh-badge-sm u-flex-center u-font-sans">\n                                        <span class="shopping-cart-count">0</span>\n                                    </div>\n                                </span>\n                                <input id="criteo-hash" type="hidden" />\n                            </a>\n                        </div>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n\n        <a href="' + u((o = null != (o = n.checkoutUrl || (null != t ? t.checkoutUrl : t)) ? o : l, typeof o === c ? o.call(s, {
                    name: "checkoutUrl",
                    hash: {},
                    data: a
                }) : o)) + u(d(null != (r = null != (r = null != t ? t.account : t) ? r.signIn : r) ? r.url : r, t)) + '" id="gh-signin-btn" class="button-link gh-icon-btn button-link-primary signin-btn" title="' + u(d(null != (r = null != (r = null != t ? t.account : t) ? r.viewAccount : r) ? r.text : r, t)) + '" data-aa-region="Account">\n            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" focusable="false" viewBox="0 0 106 128" width="19.875" height="24" class="gh-icon icon-person">\n                <path d="m11.07 1.2e2l0.84-9.29c1.97-18.79 23.34-22.93 41.09-22.93 17.74 0 39.11 4.13 41.08 22.84l0.84 9.38h10.04l-0.93-10.34c-2.15-20.43-20.14-31.66-51.03-31.66s-48.89 11.22-51.05 31.73l-0.91 10.27h10.03m41.93-102.29c-9.72 0-18.24 8.69-18.24 18.59 0 13.67 7.84 23.98 18.24 23.98s18.24-10.31 18.24-23.98c0-9.9-8.52-18.59-18.24-18.59zm0 52.29c-15.96 0-28-14.48-28-33.67 0-15.36 12.82-28.33 28-28.33s28 12.97 28 28.33c0 19.19-12.04 33.67-28 33.67"></path>\n            </svg>\n        </a>\n\n        <div id="gh-profile-cnt" class="u-flex-center-ver gh-move-to-spine gu-hide" data-aa-region="Account">\n            <div id="gh-profile-dd" class="gh-ppvr">\n                <div class="gh-ppvr-trigger">\n                    <button id="gh-profile-dd-trigger" title="' + u(d(null != (r = null != (r = null != t ? t.aria : t) ? r.label : r) ? r.profileDropdown : r, t)) + '" class="gh-avatar u-flex-center-ver gh-sm" role="button" tabindex="0" aria-label="' + u(d(null != (r = null != (r = null != t ? t.aria : t) ? r.label : r) ? r.profileDropdown : r, t)) + '" aria-haspopup="true">\n                        <span class="gh-initials"></span>\n                    </button>\n                </div>\n                <div class="gh-ppvr-cnt gh-ppvr-right">\n                    <div class="gh-ppvr-arrow-cnt">\n                        <div class="gh-ppvr-arrow gh-arrow-right">\n                            <div class="u-position-relative">\n                                <div class="gh-ppvr-arrow-fill"></div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="gh-ppvr-cnt-inner">\n                        <div class="gh-user-info u-flex-center-ver u-margin-bottom-m">\n                            <div class="gh-avatar u-flex-center-ver gh-md">\n                                <span class="gh-initials"></span>\n                            </div>\n                            <ul class="u-list-reset u-margin-left-s">\n                                <li class="gh-user-fname"></li>\n                                <li class="gh-user-email"></li>\n                            </ul>\n                        </div>\n                        <div class="gh-dd-actions">\n                            <a href="' + u((o = null != (o = n.checkoutUrl || (null != t ? t.checkoutUrl : t)) ? o : l, typeof o === c ? o.call(s, {
                    name: "checkoutUrl",
                    hash: {},
                    data: a
                }) : o)) + u(d(null != (r = null != (r = null != t ? t.account : t) ? r.viewAccount : r) ? r.url : r, t)) + '" class="button button-tertiary view-account-btn">\n                                <span class="button-text">' + u(d(null != (r = null != (r = null != t ? t.account : t) ? r.viewAccount : r) ? r.text : r, t)) + '</span>\n                            </a>\n                            <a href="' + u((o = null != (o = n.checkoutUrl || (null != t ? t.checkoutUrl : t)) ? o : l, typeof o === c ? o.call(s, {
                    name: "checkoutUrl",
                    hash: {},
                    data: a
                }) : o)) + u(d(null != (r = null != (r = null != t ? t.account : t) ? r.signOut : r) ? r.url : r, t)) + '" class="button button-primary sign-out-btn">\n                                <span class="button-text">' + u(d(null != (r = null != (r = null != t ? t.account : t) ? r.signOut : r) ? r.text : r, t)) + '</span>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div id="gh-mobile-menu">\n            <div class="gh-hamburger gh-open-menu u-fill-grey7 u-margin-left-m">\n                <button class="button-link u-flex-center-ver button-link-primary" aria-label="' + u(d(null != (r = null != (r = null != t ? t.aria : t) ? r.label : r) ? r.openMobileMenu : r, t)) + '" aria-expanded="false">\n\n                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="gh-icon gh-hamburger-svg-el" height="18" width="32">\n                        <path d="M0 14h40v2H0zm0-7h40v2H0zm0-7h40v2H0z"></path>\n                    </svg>\n\n                </button>\n            </div>\n\n\n            <div id="gh-drawer" aria-label="' + u(d(null != (r = null != (r = null != t ? t.aria : t) ? r.label : r) ? r.mobileMenu : r, t)) + '" role="navigation">\n                <header id="gh-drawer-header" class="u-padding-s-xs text-s">\n                    <div class="gh-hamburger gh-close-menu">\n                        <button class="button-link u-flex-center-ver button-link-primary" aria-label="' + u(d(null != (r = null != (r = null != t ? t.aria : t) ? r.label : r) ? r.closeMobileMenu : r, t)) + '">\n\n                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"\n                                viewBox="0 0 20 20">\n                                <rect x="9.01" y="-2.95" width="1.97" height="25.91" transform="translate(9.86 -4.29) rotate(45)"></rect>\n                                <rect x="9.01" y="-2.95" width="1.97" height="25.91" transform="translate(24 9.86) rotate(135)"></rect>\n                            </svg>\n\n                        </button>\n                    </div>\n                    <div id="gh-m-signin" class="gh-dh-opt" data-aa-region="Account">\n                        <div>\n                            <p class="u-margin-bottom-s" tabindex="0">' + u(d(null != (r = null != (r = null != t ? t.account : t) ? r.signIn : r) ? r.title : r, t)) + '</p>\n                            <div class="gh-dh-actions">\n                                <a href="' + u((o = null != (o = n.checkoutUrl || (null != t ? t.checkoutUrl : t)) ? o : l, typeof o === c ? o.call(s, {
                    name: "checkoutUrl",
                    hash: {},
                    data: a
                }) : o)) + u(d(null != (r = null != (r = null != t ? t.account : t) ? r.signIn : r) ? r.url : r, t)) + '" class="button-link button-link-secondary signin-btn">\n                                    <span class="button-link-text">' + u(d(null != (r = null != (r = null != t ? t.account : t) ? r.signIn : r) ? r.text : r, t)) + '</span>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                    <div id="gh-m-profile-cnt" class="gh-dh-opt gu-hide" data-aa-region="Account">\n                        <div class="gh-avatar u-flex-center-ver u-margin-right-s gh-xs">\n                            <span class="gh-initials"></span>\n                        </div>\n                        <div class="gh-dh-profile">\n                            <div class="gh-user-info gh-mobile">\n                                <span class="gh-user-email"></span>\n                            </div>\n                            <div class="gh-dh-actions">\n                                <a href="' + u((o = null != (o = n.checkoutUrl || (null != t ? t.checkoutUrl : t)) ? o : l, typeof o === c ? o.call(s, {
                    name: "checkoutUrl",
                    hash: {},
                    data: a
                }) : o)) + u(d(null != (r = null != (r = null != t ? t.account : t) ? r.viewAccount : r) ? r.url : r, t)) + '" class="button-link u-margin-right-m button-link-secondary view-account-btn">\n                                    <span class="button-link-text">' + u(d(null != (r = null != (r = null != t ? t.account : t) ? r.viewAccount : r) ? r.text : r, t)) + '</span>\n                                </a>\n                                <a href="' + u((o = null != (o = n.checkoutUrl || (null != t ? t.checkoutUrl : t)) ? o : l, typeof o === c ? o.call(s, {
                    name: "checkoutUrl",
                    hash: {},
                    data: a
                }) : o)) + u(d(null != (r = null != (r = null != t ? t.account : t) ? r.signOut : r) ? r.url : r, t)) + '" class="button-link button-link-secondary sign-out-btn">\n                                    <span class="button-link-text">' + u(d(null != (r = null != (r = null != t ? t.account : t) ? r.signOut : r) ? r.text : r, t)) + '</span>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </header>\n                <div id="gh-mob-inst-cnt"></div>\n                <nav aria-label="links" class="gh-nav gh-nav-links gh-nav-v">\n                    <ul class="gh-nav-list u-list-reset">\n' + (null != (r = n.each.call(s, null != (r = null != t ? t.menu : t) ? r.sections : r, {
                    name: "each",
                    hash: {},
                    fn: e.program(9, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? r : "") + '                    </ul>\n                </nav>\n            </div>\n        </div>\n    </div>\n</header>\n\n<div class="standout bigsearch-area hide clearfix">\n    <div class="large-12">\n        <form id="js-bigsearch" class="bigsearch-form form-full-width" role="search" action="/search-results" method="get" data-aa-region="Header Search">\n            <div class="row row-tight">\n                <div class="columns bigsearch-input-wrapper">\n                    <div class="columns medium-12 search-input">\n                        <label id="bigsearch-label" for="search" class="search">' + u(d(null != (r = null != (r = null != t ? t.bigSearch : t) ? r.text : r) ? r.inputLabel : r, t)) + '</label>\n                        <span aria-hidden="true" class="icon-standalone-delete btn-toggle btn-toggle__close"></span>\n                        <input id="search" name="query" class="bigsearch-input" type="search" autoComplete="off">\n                        <button class="search-form-button" aria-label="' + u(d(null != (r = null != (r = null != t ? t.bigSearch : t) ? r.text : r) ? r.performSearch : r, t)) + '"><span>' + u(d(null != (r = null != (r = null != t ? t.bigSearch : t) ? r.text : r) ? r.search : r, t)) + '</span></button>\n                    </div>\n                    <div class="columns medium-12 search-error">\n                        <span></span>\n                    </div>\n                </div>\n            </div>\n            <div class="bigsearch-tabs-wrapper">\n                <div class="row row-tight bigsearch-tabs">\n                    <div class="columns small-12">\n                        <ul class="tabs" role="tablist">\n' + (null != (r = n.each.call(s, null != (r = null != t ? t.bigSearch : t) ? r.tabs : r, {
                    name: "each",
                    hash: {},
                    fn: e.program(13, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? r : "") + "                        </ul>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n"
            },
            useData: !0
        })
    },
    176: function(e, t, n) {
        var i = function() {
                return this || "object" == typeof self && self
            }() || Function("return this")(),
            a = i.regeneratorRuntime && Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime") >= 0,
            r = a && i.regeneratorRuntime;
        if (i.regeneratorRuntime = void 0, e.exports = n(177), a) i.regeneratorRuntime = r;
        else try {
            delete i.regeneratorRuntime
        } catch (e) {
            i.regeneratorRuntime = void 0
        }
    },
    177: function(e, t) {
        ! function(t) {
            "use strict";

            function wrap(e, t, n, i) {
                var a = t && t.prototype instanceof Generator ? t : Generator,
                    r = Object.create(a.prototype),
                    o = new Context(i || []);
                return r._invoke = makeInvokeMethod(e, n, o), r
            }

            function tryCatch(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }

            function Generator() {}

            function GeneratorFunction() {}

            function GeneratorFunctionPrototype() {}

            function defineIteratorMethods(e) {
                ["next", "throw", "return"].forEach(function(t) {
                    e[t] = function(e) {
                        return this._invoke(t, e)
                    }
                })
            }

            function AsyncIterator(e) {
                function invoke(t, n, i, r) {
                    var o = tryCatch(e[t], e, n);
                    if ("throw" !== o.type) {
                        var s = o.arg,
                            l = s.value;
                        return l && "object" == typeof l && a.call(l, "__await") ? Promise.resolve(l.__await).then(function(e) {
                            invoke("next", e, i, r)
                        }, function(e) {
                            invoke("throw", e, i, r)
                        }) : Promise.resolve(l).then(function(e) {
                            s.value = e, i(s)
                        }, function(e) {
                            return invoke("throw", e, i, r)
                        })
                    }
                    r(o.arg)
                }

                function enqueue(e, n) {
                    function callInvokeWithMethodAndArg() {
                        return new Promise(function(t, i) {
                            invoke(e, n, t, i)
                        })
                    }
                    return t = t ? t.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg()
                }
                var t;
                this._invoke = enqueue
            }

            function makeInvokeMethod(e, t, n) {
                var i = d;
                return function(a, r) {
                    if (i === p) throw new Error("Generator is already running");
                    if (i === m) {
                        if ("throw" === a) throw r;
                        return doneResult()
                    }
                    for (n.method = a, n.arg = r;;) {
                        var o = n.delegate;
                        if (o) {
                            var s = maybeInvokeDelegate(o, n);
                            if (s) {
                                if (s === g) continue;
                                return s
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (i === d) throw i = m, n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        i = p;
                        var l = tryCatch(e, t, n);
                        if ("normal" === l.type) {
                            if (i = n.done ? m : h, l.arg === g) continue;
                            return {
                                value: l.arg,
                                done: n.done
                            }
                        }
                        "throw" === l.type && (i = m, n.method = "throw", n.arg = l.arg)
                    }
                }
            }

            function maybeInvokeDelegate(e, t) {
                var i = e.iterator[t.method];
                if (i === n) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = n, maybeInvokeDelegate(e, t), "throw" === t.method)) return g;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return g
                }
                var a = tryCatch(i, e.iterator, t.arg);
                if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, g;
                var r = a.arg;
                return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = n), t.delegate = null, g) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, g)
            }

            function pushTryEntry(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function resetTryEntry(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function Context(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(pushTryEntry, this), this.reset(!0)
            }

            function values(e) {
                if (e) {
                    var t = e[o];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var i = -1,
                            r = function next() {
                                for (; ++i < e.length;)
                                    if (a.call(e, i)) return next.value = e[i], next.done = !1, next;
                                return next.value = n, next.done = !0, next
                            };
                        return r.next = r
                    }
                }
                return {
                    next: doneResult
                }
            }

            function doneResult() {
                return {
                    value: n,
                    done: !0
                }
            }
            var n, i = Object.prototype,
                a = i.hasOwnProperty,
                r = "function" == typeof Symbol ? Symbol : {},
                o = r.iterator || "@@iterator",
                s = r.asyncIterator || "@@asyncIterator",
                l = r.toStringTag || "@@toStringTag",
                c = "object" == typeof e,
                u = t.regeneratorRuntime;
            if (u) return void(c && (e.exports = u));
            u = t.regeneratorRuntime = c ? e.exports : {}, u.wrap = wrap;
            var d = "suspendedStart",
                h = "suspendedYield",
                p = "executing",
                m = "completed",
                g = {},
                f = {};
            f[o] = function() {
                return this
            };
            var v = Object.getPrototypeOf,
                y = v && v(v(values([])));
            y && y !== i && a.call(y, o) && (f = y);
            var b = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(f);
            GeneratorFunction.prototype = b.constructor = GeneratorFunctionPrototype, GeneratorFunctionPrototype.constructor = GeneratorFunction, GeneratorFunctionPrototype[l] = GeneratorFunction.displayName = "GeneratorFunction", u.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === GeneratorFunction || "GeneratorFunction" === (t.displayName || t.name))
            }, u.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, l in e || (e[l] = "GeneratorFunction")), e.prototype = Object.create(b), e
            }, u.awrap = function(e) {
                return {
                    __await: e
                }
            }, defineIteratorMethods(AsyncIterator.prototype), AsyncIterator.prototype[s] = function() {
                return this
            }, u.AsyncIterator = AsyncIterator, u.async = function(e, t, n, i) {
                var a = new AsyncIterator(wrap(e, t, n, i));
                return u.isGeneratorFunction(t) ? a : a.next().then(function(e) {
                    return e.done ? e.value : a.next()
                })
            }, defineIteratorMethods(b), b[l] = "Generator", b[o] = function() {
                return this
            }, b.toString = function() {
                return "[object Generator]"
            }, u.keys = function(e) {
                var t = [];
                for (var n in e) t.push(n);
                return t.reverse(),
                    function next() {
                        for (; t.length;) {
                            var n = t.pop();
                            if (n in e) return next.value = n, next.done = !1, next
                        }
                        return next.done = !0, next
                    }
            }, u.values = values, Context.prototype = {
                constructor: Context,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(resetTryEntry), !e)
                        for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0],
                        t = e.completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    function handle(i, a) {
                        return o.type = "throw", o.arg = e, t.next = i, a && (t.method = "next", t.arg = n), !!a
                    }
                    if (this.done) throw e;
                    for (var t = this, i = this.tryEntries.length - 1; i >= 0; --i) {
                        var r = this.tryEntries[i],
                            o = r.completion;
                        if ("root" === r.tryLoc) return handle("end");
                        if (r.tryLoc <= this.prev) {
                            var s = a.call(r, "catchLoc"),
                                l = a.call(r, "finallyLoc");
                            if (s && l) {
                                if (this.prev < r.catchLoc) return handle(r.catchLoc, !0);
                                if (this.prev < r.finallyLoc) return handle(r.finallyLoc)
                            } else if (s) {
                                if (this.prev < r.catchLoc) return handle(r.catchLoc, !0)
                            } else {
                                if (!l) throw new Error("try statement without catch or finally");
                                if (this.prev < r.finallyLoc) return handle(r.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var i = this.tryEntries[n];
                        if (i.tryLoc <= this.prev && a.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var r = i;
                            break
                        }
                    }
                    r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                    var o = r ? r.completion : {};
                    return o.type = e, o.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, g) : this.complete(o)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), g
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), resetTryEntry(n), g
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var i = n.completion;
                            if ("throw" === i.type) {
                                var a = i.arg;
                                resetTryEntry(n)
                            }
                            return a
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, i) {
                    return this.delegate = {
                        iterator: values(e),
                        resultName: t,
                        nextLoc: i
                    }, "next" === this.method && (this.arg = n), g
                }
            }
        }(function() {
            return this || "object" == typeof self && self
        }() || Function("return this")())
    },
    179: function(e, t) {
        e.exports = {
            chapters: [{
                title: "<br/>Inspiration",
                slides: [{
                    title: "1580",
                    description: "<p>On the run from Catholic persecution, Protestant bookbinder Louis Elzevier settles in Leiden, the Netherlands. The Elzevier family expands its business, and makes a name for itself in academia by publishing some of the greatest minds of the seventeenth century.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1580.jpg'/><p class='text-center'>The Elzeviers’ print shop in the second half of the seventeenth century.</p>"
                }, {
                    title: "1712",
                    description: "<p>As the publisher of ground-breaking scientific authors such as Galileo and Descartes, the Elzevier family enjoyed an excellent reputation for over a century. Though the company goes bankrupt and ceases to exist, they are remembered as some of the greatest publishers who had ever lived.</p><p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1712.jpg' /></p><p class='text-center'>Galileo’s Two New Sciences was first published by the Elzeviers in 1638.</p>"
                }]
            }, {
                title: "<br/>Founding",
                slides: [{
                    title: "1880",
                    description: "<p>Jacobus Robbers joins hands with four other businessmen in founding modern Elsevier in Rotterdam, the Netherlands. Inspired by the historical publishers, they adopt their name and the Non Solus printer’s mark – meaning “not alone” – which highlights the relationship between authors and publishers.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1880.jpg' /><p class='text-center'>Elsevier’s first logo, inspired by the classic Non Solus.</p>"
                }, {
                    title: "1884",
                    description: "<p>Elsevier’s goal is to spread knowledge and entertainment among all layers of the Dutch population. The company publishes preacher-researcher Anthony Winkler Prins’s Illustrated Encyclopedia, whose quality ensured it would remain one of Elsevier’s flagship products for over a century.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1884.jpg' /><p class='text-center'>A tome from the Winkler Prins Encyclopedia in the 1930s.</p>"
                }]
            }, {
                title: "Science <br/>publishing",
                slides: [{
                    title: "1928",
                    description: "<p>23-year-old journalist Ted Klautz accepts the position of secretary at Elsevier. Young, bold and ambitious, he has a good grasp of the changing times that see the arrival of new media, the expansion of advertising, and increasing competition. Three years later, he is made director of the company.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1928.jpg' /><p class='text-center'>Portrait of Ted Klautz as director of Elsevier, circa 1931.</p>"
                }, {
                    title: "1937",
                    description: "<p>The persecution of Jews in Nazi Germany leads to many people fleeing the country. As a result, Germany’s once-thriving academic publishing industry is rapidly crumbling. Considering it their moral duty to help those in need, Elsevier begins publishing the works of German exiled scientists.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1937.jpg' /><p class='text-center'>One of Elsevier’s most ambitious projects of the day, an Encyclopaedia of Organic Chemistry.</p>"
                }, {
                    title: "1940",
                    description: "<p>Anticipating the center of academia would eventually shift to the English-speaking world, Elsevier founds offices in London and New York. Director Ted Klautz’s ambitions in science publishing need to be put on hold as the Netherlands is occupied by the Nazis in May.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1940.jpg' /><p class='text-center'>A wartime dinner in honor of chemist and Elsevier advisor Jan Ketelaar, who had just been appointed professor at the University of Amsterdam.</p>"
                }, {
                    title: "1945",
                    description: "<p>The Netherlands is liberated. After years of suppression, Elsevier prepares to make a new start. A newsmagazine titled Elsevier’s Weekly is launched, and becomes the most widely-read Dutch periodical of the 1940s and 1950s – enabling the company to further invest in academic publishing.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1945.jpg' /><p class='text-center'>A newsstand promoting Elsevier’s Weekly in the 1950s.</p>"
                }]
            }, {
                title: "Post-war <br/>growth",
                slides: [{
                    title: "1947",
                    description: "<p>Elsevier publishes a broad array of scientific works in the Research in Holland series, and launches Biochimica et Biophysica Acta, its first journal. Though the company is praised for the quality of its content, it proves difficult for a small Dutch newcomer to make its mark on the academic world.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1947.jpg' /><p class='text-center'>Cover for a book in the Research in Holland series, 1946.</p>"
                }, {
                    title: "1958",
                    description: "<p>After more than two decades of investments, Elsevier’s science division yields its first profit. To strengthen its relationship with academia, and ensure a continuous stream of manuscripts for publication, the company starts to hire more scientists to develop its portfolio.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1958.jpg' /><p class='text-center'>Advertising for Chemistry of Carbon Compounds, one of Elsevier’s first scientific titles that achieved financial success, ca. 1958.</p>"
                }, {
                    title: "1963",
                    description: "<p>Listed on the Amsterdam stock market since 1952, Elsevier has become an internationally-oriented publishing company that includes a thriving science division. With a constantly expanding staff, director Dolf van den Brink opens a modern office on the edge of the Dutch capital.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1963.jpg' /><p class='text-center'>The Elsevier offices on Jan van Galenstraat in Amsterdam, ca. 1973.</p>"
                }, {
                    title: "1970",
                    description: "<p>Elsevier’s science division is merged with the North-Holland Publishing Company, expanding the company’s chemistry-oriented portfolio with a large number of physics titles. Elsevier now ranks among the largest science publishers in the world, joining the likes of Pergamon, Springer, and Wiley.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1970.jpg' /><p class='text-center'>Brochure for Associated Scientific Publishers, in which the new companies North-Holland and Excerpta Medica were also included, ca. 1974.</p>"
                }]
            }, {
                title: "New <br/>technology",
                slides: [{
                    title: "1971",
                    description: "<p>Elsevier acquires Excerpta Medica, a small medical abstract publisher based in Amsterdam. As the first and only company in the world that employed a database for the production of journals, it introduced computer technology to Elsevier.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1971.jpg' /><p class='text-center'>Excerpta Medica’s workflow, from manuscript to database to printed journal, ca. 1971.</p>"
                }, {
                    title: "1978",
                    description: "<p>Always aiming to be on the forefront of technology, Elsevier invests in the new media of the day. The company merges with Dutch newspaper publisher NDU, and devises a strategy to broadcast textual news to people’s television sets through Viewdata and Teletext technology.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1978.jpg' /><p class='text-center'>Elsevier internal newspaper article about the new Viewdata technology, ca. 1978.</p>"
                }, {
                    title: "1979",
                    description: "<p>Elsevier Science Publishers launches the Article Delivery Over Network Information System (ADONIS) project in conjunction with four business partners. The project aims to find a way to deliver scientific articles to libraries electronically, and would continue for over a decade.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1979.jpg' /><p class='text-center'>Article on ADONIS from the last stage of the project, ca. 1993.</p>"
                }, {
                    title: "1981",
                    description: "<p>In a time when stock market takeovers are rapidly becoming the norm, the Elsevier Group sets out to grow by retaining only its most valuable assets in science and B2B publishing – and finding an international merger partner.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1981.png' /><p class='text-center'>Elsevier-NDU NV brochure, circa 1980</p>"
                }]
            }, {
                title: "<br/>Merger",
                slides: [{
                    title: "1987",
                    description: "<p>Elsevier announces the divestment of its consumer books division. Elsevier surprises the Dutch business world by attempting a take-over of publisher Kluwer. Though the merger is not realized, Elsevier catches the eye of future partner Reed International.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1987.jpg' /><p class='text-center'>A photo of the shareholders’ meeting, during which Kluwer was the point of discussion, 1987.</p>"
                }, {
                    title: "1991",
                    description: "<p>In conjunction with nine American universities, Elsevier’s The University Licensing Project (TULIP) becomes the first ground-breaking step in making published, copyrighted material available over the Internet. It forms the basis for ScienceDirect, launched six years later.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1991.jpg' /><p class='text-center'>TULIP landing page, ca. 1993.</p>"
                }, {
                    title: "1993",
                    description: "<p>Elsevier merges with Reed International to form the Reed Elsevier Group PLC, a British-Dutch media company based in London. Elsevier Science Publishers continues as a subsidiary of Reed Elsevier (today known as RELX Group).</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1993.jpg' /><p class='text-center'>The Reed Elsevier board of directors, ca. 1992.</p>"
                }]
            }, {
                title: "Digital <br/>age",
                slides: [{
                    title: "1997",
                    description: "<p>After almost two decades of experiments, ScienceDirect is launched as the first online repository of electronic (scientific) books and articles. Though librarians and researchers initially need to get used to the new technology, more and more of them switch to e-only subscriptions.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1997.jpg' /><p class='text-center'>ScienceDirect landing page, ca. 2000.</p>"
                }, {
                    title: "2001",
                    description: "<p>Elsevier Science Publishers is expanded with a set of strong American imprints predominantly aimed at medical professionals, including Mosby’s, W.B. Saunders, and Academic Press. The following year, the Reed Elsevier subsidiary officially changes its name to simply 'Elsevier.'</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/2001.jpg' /><p class='text-center'>Some of the American books and journals now part of the Elsevier family, ca. 2001.</p>"
                }, {
                    title: "2004",
                    description: "<p>Scopus is launched. The abstract database covers journals and books from various publishers, and measures performance on both author and publication levels. Elsevier initiates a strategy as part of which “workflow solutions” software aims to help researchers in their work.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/2004.jpg' /><p class='text-center'>Scopus landing page, ca. 2005.</p>"
                }, {
                    title: "2009",
                    description: "<p>SciVal Spotlight is released. Based on citations in the Scopus database, this strategic analysis tool enabled research administrators to make informed decisions by measuring their institution’s relative standing in terms of productivity, grants, publications, and more.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/2009.jpg' /><p class='text-center'>SciVal, ca. 2009.</p>"
                }]
            }, {
                title: "Information <br/>analytics",
                slides: [{
                    title: "2013",
                    description: "<p>Mendeley joins the Elsevier family. Originally a London-based start-up, the app allows researchers to manage and share papers, discover new data and collaborate online.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/2013.jpg' /><p class='text-center'>The Mendeley crew, ca. 2013.</p>"
                }, {
                    title: "2015",
                    description: "<p>By the 2010s Elsevier had evolved into a technology-driven business with an audience of millions of researchers worldwide. With the advent of digital technology the company started focusing on analytical and decision-making tools, helping with a wider range of high-value tasks and problems – moving beyond ‘read this’ and ‘how to find this’ to answer the customer’s most pressing question: ‘what should I do?’.</p>"
                }]
            }]
        }
    },
    26: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            a = t.prodMatch = new RegExp(/^(www\.)?elsevier.com/),
            r = (t.getEnv = function() {
                return window.location.hostname.match(a) ? "prod" : "dev"
            }, t.getUrlPathArray = function() {
                return window.location.pathname.split("/").filter(String)
            }),
            o = t.getUrlPathStringColonSeparated = function() {
                return window.location.pathname.split("/").filter(String).toString().replace("[#|?].*", "").replace(/^\/|\/$/g, "").replace(/,/g, ":")
            },
            s = t.languageCodes = ["de-de", "en-au", "en-gb", "en-in", "en-xm", "en-xs", "es-es", "es-mx", "fr-fr", "ja-jp", "ko-kr", "pl-pl", "pt-br", "tr-tr", "zh-cn", "zh-tw"],
            l = t.getLocaleFound = function() {
                return s.some(function(e) {
                    return r().includes(e)
                })
            },
            c = t.getPathArrayMinusLocale = function() {
                return l() ? r().slice(1) : r()
            },
            u = (t.getLanguage = function() {
                return s.indexOf(r()[0]) > -1 ? r()[0] : "en"
            }, t.getPageName = function() {
                return s.indexOf(r()[0]) > -1 ? r().length > 1 ? /:(.+)/.exec(o())[1] : "Home" : r().length > 0 ? o() : "Home"
            }, t.loadTime = function() {
                var e = "";
                if ("undefined" != typeof performance && "object" === i(performance.timing)) {
                    var t = performance.timing,
                        n = t.redirectStart || t.fetchStart || t.requestStart,
                        a = t.domContentLoadedEventEnd || t.domInteractive || t.domComplete || t.loadEventComplete;
                    n && a && a > n && (e = a - n)
                }
                return e.toString()
            }, t.loadTimeStamp = function() {
                var e = "";
                if ("undefined" != typeof performance && "object" === i(performance.timing)) {
                    var t = performance.timing,
                        n = t.redirectStart || t.fetchStart || t.requestStart;
                    n && (e = n)
                }
                return e.toString()
            }, t.pathExists = function(e) {
                return window.location.pathname.indexOf(e) > -1
            }, t.elementExists = function(e) {
                return document.querySelectorAll(e).length > 0
            }, t.getPublishedDate = function(e) {
                var t = 'meta[Name="' + e + '"]',
                    n = document.querySelector(t);
                if (n && n.content) {
                    var i = n.content.substr(0, n.content.indexOf(" "));
                    return new Date(i).getTime() / 1e3
                }
                return "unknown"
            }, t.getMetadataContent = function(e) {
                var t = document.querySelector(e);
                return t && t.content ? t.content : "unknown"
            }, t.generateBreadcrumbString = function() {
                var e = document.querySelectorAll(".breadcrumb li");
                return Array.from(e).map(function(e) {
                    return e.textContent.trim()
                }).join(" > ")
            }, t.generateSolutionsPageName = function() {
                var e = "solutions:" + c()[1].trim();
                return "solutions" === r()[r().length - 2] ? e + ":home" : r().findIndex(function(e) {
                    return e.includes("content") || e.includes("resource")
                }) > 0 ? e + ":content" : r().findIndex(function(e) {
                    return e.includes("contact") || e.includes("sales") || "form" === e || "forms" === e
                }) > 0 ? e + ":form" : r().findIndex(function(e) {
                    return e.includes("support")
                }) > 0 ? e + ":support" : r().findIndex(function(e) {
                    return "news" === e || "newsletter" === e
                }) > 0 ? e + ":news" : e + ":info"
            }, {
                editors: [{
                    evise: "evise"
                }, {
                    perk: "perk"
                }, {
                    journal: "journal-info"
                }, {
                    mendeley: "mendeley"
                }],
                authors: [{
                    journal: "journal-authors"
                }, {
                    books: "book-authors"
                }, {
                    services: "author-services"
                }, {
                    schemas: "author-schemas"
                }, {
                    cited: "most-cited"
                }],
                reviewers: [{}],
                librarians: [{
                    "article-news": "article-news"
                }],
                about: [{
                    "press-releases": "press-releases"
                }, {
                    careers: "careers"
                }, {
                    "our-business": "our-business"
                }, {
                    "our-business": "locations"
                }, {
                    "our-business": "this-is-elsevier"
                }, {
                    "our-initiatives": "corporate-responsibility"
                }, {
                    "our-initiatives": "open-science"
                }, {
                    "our-initiatives": "partnerships"
                }, {
                    media: "newsroom"
                }, {
                    media: "industry-standards"
                }, {
                    media: "policies"
                }]
            });
        t.generatePageName = function() {
            var e = c()[0].toString();
            return u[e] ? (u[e].some(function(t) {
                if (c().toString() === e) return e += ":home", !0;
                var n = Object.keys(t).map(function(e) {
                    return t[e]
                });
                return c().findIndex(function(e) {
                    return e.includes(n)
                }) > 0 ? (e += ":" + Object.keys(t), !0) : void 0
            }), e === c()[0].toString() ? e += ":other" : e) : "pageNameNotFound"
        }, t.updatePageDataContent = function(e, t) {
            return Array.from(t).forEach(function(t) {
                var n = Object.keys(t).map(function(e) {
                        return t[e]
                    }),
                    i = Object.keys(t),
                    a = void 0;
                if (document.querySelectorAll(n).length > 0)
                    if (a = document.querySelectorAll(n), a.length > 1) {
                        var r = [];
                        Array.from(a).forEach(function(e) {
                            r.push(e.textContent.trim())
                        }), e[i.toString()] = r
                    } else e[i.toString()] = a[0].textContent.trim();
                else e[i.toString()] = "unknown"
            }), e
        }
    },
    62: function(e, t) {
        e.exports = jQuery
    },
    63: function(e, t, n) {
        "use strict";

        function _interopRequireWildcard(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.AaDataEventTracking = t.AaDataPageTracking = void 0;
        var i = n(26),
            a = _interopRequireWildcard(i),
            r = n(100),
            o = _interopRequireWildcard(r),
            s = n(99),
            l = n(101),
            c = n(102),
            u = n(103),
            d = t.AaDataPageTracking = function() {
                var e = ["/connect/", "/books/", "/journals/"],
                    t = ["/solutions/", "/reviewers/", "/authors/", "/editors/", "/librarians/"],
                    n = ["/reviewers", "/authors", "/editors", "/librarians"],
                    i = window.location.pathname,
                    r = e.some(function(e) {
                        return i.includes(e)
                    }),
                    s = t.some(function(e) {
                        return i.includes(e)
                    }),
                    l = n.some(function(e) {
                        return i.endsWith(e)
                    });
                r ? (i.includes("/connect/") && a.elementExists("#breadcrumb") && o.setConnectMetadataContent(), i.includes("/connect/") && a.elementExists("#breadcrumb") && o.setConnectPageContent(), i.includes("/books/") && a.elementExists("section.book") && o.setBooksPageContent(), i.includes("/journals/") && a.elementExists("section.journal") && o.setJournalsPageContent(), o.sendPageData()) : s || l ? (o.setPageContentCommon(), o.sendPageData()) : pageData = {
                    content: [{}],
                    page: {
                        businessUnit: "ELS:OPS",
                        environment: a.getEnv(),
                        language: a.getLanguage(),
                        loadTimestamp: a.loadTimeStamp(),
                        name: a.getPageName(),
                        noTracking: "false",
                        productName: "EC",
                        type: "NP-GP",
                        loadTime: a.loadTime()
                    },
                    visitor: {
                        accessType: "ec:anon_guest",
                        ipAddress: ""
                    }
                }
            },
            h = t.AaDataEventTracking = function() {
                "undefined" != typeof videojs && (0, s.sendBcVideoTrackEvent)(), "undefined" != typeof validateFront && ((0, l.getFormData)(), (0, l.sendPageFormViewData)(), (0, l.waitForValidationFormSubmit)()), document.querySelectorAll(".st-sticky-share-buttons, .article-actions .social-share").length > 0 && (0, c.sendSocialShareThisPageData)(), document.querySelectorAll("div[id*=share-that-wrapper] .sidebar").length > 0 && (0, c.sendSocialShareThatPageData)(), document.querySelectorAll('a[href$=".pdf"]').length > 0 && (0, u.sendPageDataPdfDownloadTracker)()
            };
        "loading" === document.readyState && new d, document.addEventListener("readystatechange", function() {
            "complete" === document.readyState && new h
        })
    },
    64: function(e, t, n) {
        "use strict"
    },
    65: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.GenuineProduct = void 0;
        var i = n(62),
            a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            r = n(9),
            o = n(113);
        t.GenuineProduct = function() {
            var e = function(e, t) {
                    var n = e.val().split("-");
                    e.val(n[0] || ""), t.val(n[1] || "")
                },
                t = function(e, t, n) {
                    (0, a.default)(".service-unavailable").hide(), e.addClass("loading");
                    var i = {
                        identifierCode: t.val().toUpperCase(),
                        validationCode: n.val().toUpperCase(),
                        longitude: elcm.user.geo.longitude,
                        latitude: elcm.user.geo.latitude
                    };
                    a.default.ajax({
                        url: r.config.genuine[elcm.env].url,
                        dataType: "json",
                        method: "GET",
                        data: i,
                        success: function(t) {
                            e.removeClass("loading"), 200 === t.code ? e.addClass("success") : e.addClass("fail")
                        },
                        error: function(t) {
                            e.removeClass("loading"), 400 === t.status ? e.addClass("fail") : (0, a.default)(".service-unavailable").show()
                        }
                    })
                };
            (0, a.default)(document).ready(function() {
                var n = (0, a.default)(".key"),
                    i = (0, a.default)(".genuine-box-container .key-1 input"),
                    r = (0, a.default)(".genuine-box-container .key-2 input"),
                    s = (0, a.default)(".genuine-box-container"),
                    l = (0, a.default)(".genuine-box-container button");
                n.keyup(function(n) {
                    var o = i.val(),
                        c = r.val();
                    o.match("-") && (e(i, r), r.focus()), 8 === o.length && 3 === c.length ? l.prop("disabled", !1) : l.prop("disabled", !0), 13 !== n.which || l.prop("disabled") || t(s, i, r), s.removeClass("success"), s.removeClass("fail"), (0, a.default)(".service-unavailable").hide()
                }), i.keyup(function() {
                    (0, o.changeInputFocusAtMaxLength)(i, r)
                }), r.keydown(function(e) {
                    (0, o.changeInputFocusAtLastDelete)(e.which, r, i)
                }), l.click(function() {
                    t(s, i, r)
                })
            })
        }()
    },
    66: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.activateGlobalHeaderFeature = void 0;
        var i = n(6),
            a = n(105),
            r = n(106),
            o = t.activateGlobalHeaderFeature = function(e) {
                var t = (0, r.getGlobalHeaderEnglishConfig)(e),
                    i = document.querySelector("aside.primary-menu");
                i && i.parentNode.removeChild(i);
                var a = n(159)(t),
                    o = document.createElement("div");
                o.className = "global-header header-container", o.innerHTML = a;
                var s = document.querySelector("div.header-container.header-fixed");
                return document.querySelector("div.inner-wrap").replaceChild(o, s)
            };
        document.addEventListener("DOMContentLoaded", function() {
            if (elcm && elcm.featureFlag && elcm.featureFlag.isActive && elcm.featureFlag.isActive("global-header") && "global" === (0, i.getLocaleFromUrl)()) {
                var e = elcm && elcm.env ? elcm.env : "develop";
                o(e)
            }
            document.querySelector(".global-header.header-container") && new a.GlobalHeader
        })
    },
    67: function(e, t, n) {
        "use strict";
        var i = n(107),
            a = n(5),
            r = n(9);
        document.addEventListener("DOMContentLoaded", function() {
            (0, a.hasElement)('[id="institute-search-tool"]') && new i.InstituteCertificateTool({
                mountNode: document.querySelector("#institute-search-tool"),
                searchToolUrl: r.config.searchtool[elcm.env].url
            })
        })
    },
    68: function(e, t, n) {
        "use strict";
        var i = n(5);
        document.addEventListener("DOMContentLoaded", function() {
            if ((0, i.hasElement)('[id^="share-that-wrapper"]')) {
                var e = (navigator.language, window.location),
                    t = "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600",
                    n = void 0;
                n = document.querySelectorAll('meta[Name="Title"]').length ? document.querySelector('meta[Name="Title"]').content : document.title.length > 0 ? document.title : "Elsevier";
                var a = void 0;
                a = document.querySelectorAll('meta[Name="Description"]').length > 0 ? document.querySelector('meta[Name="Description"]').content : "Elsevier ", document.getElementById("facebook") && document.getElementById("facebook").addEventListener("click", function(n) {
                    n.preventDefault(), window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(e), "", t)
                }, !1), document.getElementById("twitter") && document.getElementById("twitter").addEventListener("click", function(i) {
                    i.preventDefault(), window.open("https://twitter.com/share?url=" + encodeURIComponent(e) + "&text=" + n, "", t)
                }, !1), document.getElementById("linkedin") && document.getElementById("linkedin").addEventListener("click", function(i) {
                    i.preventDefault(), window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(e) + "&title=" + n + "&summary=" + a, "", t)
                }, !1), document.getElementById("email") && document.getElementById("email").addEventListener("click", function(n) {
                    n.preventDefault(), window.open("mailto:?subject=Shared%20from%20Elsevier&body=" + encodeURIComponent(e), "", t)
                }, !1), document.getElementById("wechat") && (document.getElementById("wechat-content").innerHTML = '<img id="page-qr-code" src="https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(e) + '" alt="scan me"/>')
            }
        })
    },
    69: function(e, t, n) {
        "use strict";
        var i = n(108),
            a = n(5);
        document.addEventListener("DOMContentLoaded", function() {
            (0, a.hasElement)("div.els-timeline") && new i.Timeline({
                mountNode: "#timeline",
                activeSlideNum: 0,
                classContentContainer: ".slider-content",
                classHeaderContainer: ".header-container",
                classMenuContainer: ".menu",
                classSliderContainer: ".els-slider",
                classItem: "slider-item",
                classMenuItem: ".menu-item",
                classPageTop: ".timeline-top"
            })
        })
    },
    70: function(e, t, n) {
        "use strict";
        var i = n(109),
            a = n(5);
        document.addEventListener("DOMContentLoaded", function() {
            (0, a.hasElement)("span.tooltip-clickable") && new i.Tooltip({
                tooltipLinksAll: document.querySelectorAll(".tooltip-clickable"),
                tooltipLink: ".tooltip-clickable",
                openTooltipContent: ".tooltip-clickable.open .info",
                openTooltip: ".tooltip-clickable.open",
                toolTipInfo: ".tooltip-clickable .info",
                callout: '.tooltip-clickable span[class^="callout"]',
                closeTooltip: ".closeTooltip"
            })
        })
    },
    71: function(e, t, n) {
        "use strict";

        function _toConsumableArray(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RegionSelector = void 0;
        var i = function() {
                function defineProperties(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(e, t, n) {
                    return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
                }
            }(),
            a = n(112),
            r = n(6),
            o = n(24),
            s = t.RegionSelector = function() {
                function RegionSelector(e) {
                    _classCallCheck(this, RegionSelector), this.locale = (0, r.getLocaleFromUrl)(), this.region = this.getRegion(), this.mountNode = e.mountNode, this.regionList = [].concat(_toConsumableArray(document.querySelectorAll(".location-selector .location-language-container .location-language"))), this.bindEvents(), this.renderDOM()
                }
                return i(RegionSelector, [{
                    key: "bindEvents",
                    value: function() {
                        var e = this;
                        this.regionList.forEach(function(t) {
                            t.addEventListener("click", function(t) {
                                return e.setRegion(t.currentTarget.getAttribute("data-locale"))
                            })
                        })
                    }
                }, {
                    key: "getRegion",
                    value: function() {
                        var e = o.regionMap[this.locale];
                        return e || o.regionMap.global
                    }
                }, {
                    key: "setRegion",
                    value: function(e) {
                        if (this.region = o.regionMap[e], !this.region) return console.error("No mapping found for region", {
                            region: e
                        });
                        (0, a.setCookie)("elsevierRegion", this.region.code.toUpperCase())
                    }
                }, {
                    key: "renderDOM",
                    value: function() {
                        this.mountNode.innerHTML = '<a href="/location-selector">' + this.region.locale.name + ' - <span class="language">' + this.region.locale.lang + "</span></a>"
                    }
                }]), RegionSelector
            }();
        document.addEventListener("DOMContentLoaded", function() {
            var e = document.querySelector(".region-current");
            e && new s({
                mountNode: e
            })
        })
    },
    72: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getClientData = t.getGeoData = void 0;
        var i = n(19),
            a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            r = n(9),
            o = n(46),
            s = t.getGeoData = function() {
                var e = (0, o.storageAvailable)("sessionStorage"),
                    t = "elcm.user.geo";
                return e && sessionStorage.getItem(t) ? Promise.resolve(JSON.parse(sessionStorage.getItem(t))) : a.default.get(r.config.geo[elcm.env].url).then(function(n) {
                    var i = n.data;
                    return e && sessionStorage.setItem(t, JSON.stringify(i)), i
                }).catch(function(e) {
                    return {}
                })
            },
            l = t.getClientData = function() {
                var e = window.screen,
                    t = window.navigator;
                return {
                    os: (0, o.getClientOS)(t.userAgent),
                    browser: t.appName,
                    browserLang: t.language,
                    screenWidth: e.width,
                    screenHeight: e.height,
                    localStorage: !!window.localStorage,
                    cookies: t.cookieEnabled
                }
            };
        document.addEventListener("DOMContentLoaded", function() {
            elcm.user = elcm.user || {}, elcm.user.client = l(), elcm.user.geo = elcm.user.geo || {}, s().then(function(e) {
                elcm.user.geo = e
            })
        })
    },
    73: function(e, t, n) {
        "use strict";
        var i = n(6);
        (0, i.urlContainsPath)("/zh-cn") && document.addEventListener("DOMContentLoaded", function() {
            if ((0, i.urlContainsPath)("/about/careers/nested-content/tile-profile")) {
                var e = document.querySelector(".article-tile-quote-container q");
                e.innerHTML = e.innerHTML.replace(/\.+$/, "")
            }
        })
    },
    74: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.correctJapaneseQuoteEnding = void 0;
        var i = n(6),
            a = t.correctJapaneseQuoteEnding = function(e) {
                return "…" === e.slice(-1) || "。" === e.slice(-1) ? e : "..." === e.slice(-3) ? e.slice(0, e.length - 3) + "…" : (e = e.replace(/\.+$/, ""), "。" !== e.slice(-1) ? e + "。" : e)
            };
        (0, i.urlContainsPath)("/ja-jp") && document.addEventListener("DOMContentLoaded", function() {
            for (var e = document.querySelectorAll("q") || [], t = 0; t < e.length; t++) e[t].innerHTML = a(e[t].innerHTML);
            for (var n = document.querySelectorAll("blockquote p") || [], i = 0; i < n.length; i++) n[i].innerHTML = a(n[i].innerHTML)
        })
    },
    76: function(e, t, n) {
        "use strict";
        var i = n(5);
        document.addEventListener("DOMContentLoaded", function() {
            var e = function(e, t, n, i, a) {
                var r = 0;
                ! function animate() {
                    var n = requestAnimationFrame(animate);
                    "left" === t ? e.scrollLeft -= a : e.scrollLeft += a, (r += a) >= i && cancelAnimationFrame(n)
                }()
            };
            if ((0, i.hasElement)(".m-carousel")) {
                var t = document.querySelector(".m-carousel-container"),
                    n = document.querySelector(".buttonLeft"),
                    a = document.querySelector(".buttonRight");
                n.style.display = "none";
                var r = t.querySelector(".m-carousel");
                r.addEventListener("scroll", function(e) {
                    n.style.display = 0 === e.target.scrollLeft ? "none" : "block";
                    var t = e.target.scrollWidth - e.target.clientWidth;
                    a.style.display = e.target.scrollLeft === t ? "none" : "block"
                }), a.addEventListener("click", function() {
                    e(r, "right", 0, 300, 10)
                }), n.addEventListener("click", function() {
                    e(r, "left", 0, 300, 10)
                })
            }
        })
    },
    77: function(e, t, n) {
        "use strict";
        var i = n(6),
            a = n(104);
        document.addEventListener("DOMContentLoaded", function() {
            if ((0, i.urlContainsPath)("/solutions/journals-consult/catalog")) {
                var e = [{
                    key: "producttype",
                    value: "journals"
                }, {
                    key: "categoryrestriction",
                    value: "27322"
                }];
                new a.EmbeddedCatalog(e)
            }
        })
    },
    99: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.sendBcVideoTrackEvent = function() {
            for (var e = function() {
                    "0" === parseFloat(this.cache_.currentTime).toFixed(0) ? pageDataTracker.trackEvent("videoStart", {
                        video: {
                            id: this.id(),
                            length: parseFloat(this.mediainfo.duration).toFixed(2),
                            position: parseFloat(this.cache_.currentTime).toFixed(0)
                        }
                    }) : pageDataTracker.trackEvent("videoPlay", {
                        video: {
                            id: this.id(),
                            length: parseFloat(this.mediainfo.duration).toFixed(2),
                            position: parseFloat(this.cache_.currentTime).toFixed(2)
                        }
                    })
                }, t = function() {
                    parseFloat(this.cache_.currentTime).toFixed(2) === parseFloat(this.mediainfo.duration).toFixed(2) ? pageDataTracker.trackEvent("videoComplete", {
                        video: {
                            id: this.id(),
                            length: parseFloat(this.mediainfo.duration).toFixed(2),
                            position: parseFloat(this.cache_.currentTime).toFixed(2)
                        }
                    }) : pageDataTracker.trackEvent("videoStop", {
                        video: {
                            id: this.id(),
                            length: parseFloat(this.mediainfo.duration).toFixed(2),
                            position: parseFloat(this.cache_.currentTime).toFixed(2)
                        }
                    })
                }, n = document.body.getElementsByTagName("video"), i = {}, a = 0; a < n.length; a++) {
                var r = n[a].getAttribute("data-video-id");
                n[a].setAttribute("id", r), i.bcID = videojs(r), i.bcID.on("pause", t), i.bcID.on("play", e)
            }
        }
    }
}, [110]);
webpackJsonp([1], {
    111: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.pushEvent = function(e, t, n) {
            if ("google" === e) try {
                n.event = t, dataLayer.push(n), delete n.event
            } catch (e) {
                console.error("Error pushing event to Google")
            } else if ("adobe" === e) try {
                pageDataTracker.trackEvent(t, n)
            } catch (e) {
                console.error("Error pushing event to Adobe")
            }
        }
    },
    114: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.sanitiseInput = function(e) {
            return encodeURIComponent(e.replace(/[&<>='"]/g, "").trim())
        }, t.capitalizeFirst = function(e) {
            return "string" == typeof e ? e.charAt(0).toUpperCase() + e.slice(1) : e
        }, t.truncateString = function(e, t) {
            return e && e.length > t ? e.substr(0, t) + "..." : e
        }, t.commaSeparateNumber = function(e) {
            return "number" == typeof e ? e.toLocaleString() : e
        }
    },
    115: function(e, t, n) {
        "use strict";

        function _toConsumableArray(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }
        var a = n(78),
            l = n(9),
            r = n(24),
            s = n(5),
            i = n(6);
        n(75), document.addEventListener("DOMContentLoaded", function() {
            var e = document.getElementById("js-bigsearch"),
                t = document.querySelector(".search-input"),
                n = document.querySelector(".bigsearch-input"),
                u = document.querySelector(".search-input label"),
                o = document.querySelector(".search-error span"),
                c = document.querySelector(".search-input .icon-standalone-delete"),
                h = document.querySelector(".bigsearch-tabs"),
                d = document.querySelector("#js-bigsearch .tabs"),
                p = (0, i.getLocaleFromUrl)();
            if (e) {
                var m = function() {
                        u.innerHTML = Foundation.utils.is_medium_up() ? r.regionMap[p].siteSearch.searchBox : r.regionMap[p].siteSearch.searchBoxMobile
                    },
                    f = function() {
                        "" !== n.value ? c.style.display = "inline" : c.style.display = "none"
                    };
                "global" !== p && (e.action = "/" + p + l.config.sitesearch.path), m(),
                    function() {
                        (0, i.urlContainsPath)("search-results") || (h.style.display = "none")
                    }(), (0, i.toggleSearch)("#js-wrapper-search-link", ".bigsearch-toggle"), window.addEventListener("resize", (0, s.deBounce)(function(e) {
                        m()
                    }, 150)), ["keyup", "focus", "blur", "change", "input"].forEach(function(e) {
                        n.addEventListener(e, function(a) {
                            "keyup" === e ? n.value.length && (o.innerHTML = "") : "focus" === e ? t.classList.add("active") : "blur" === e ? t.classList.remove("active") : "change" !== e && "input" !== e || f()
                        })
                    }), ["click", "keydown"].forEach(function(e) {
                        d.addEventListener(e, function(t) {
                            if (t.target && "LABEL" === t.target.nodeName)
                                if ("click" === e) {
                                    var n = [].concat(_toConsumableArray(d.querySelectorAll("li")));
                                    n.forEach(function(e) {
                                        return e.classList.remove("active")
                                    }), t.target.parentNode.classList.add("active")
                                } else {
                                    var a = t.which;
                                    13 !== a && 32 !== a || (t.preventDefault(), t.target.click())
                                }
                        })
                    }), c.addEventListener("click", function() {
                        n.value = "", n.focus(), c.style.display = "none"
                    }), e.addEventListener("submit", function(e) {
                        n.value.trim().length || (e.preventDefault(), o.innerHTML = r.regionMap[p].siteSearch.noSearchTerm, n.focus())
                    }), (0, s.hasBodyClass)("search-page") && ($(".bigsearch-area").removeClass("hide"), $(".standout.bigsearch-area").prependTo("#maincontent"), new a.SearchClient({
                        searchAPI: l.config.sitesearch[elcm.env].url,
                        searchPath: (0, i.getSiteSearchPath)(l.config.sitesearch.path),
                        searchRoutes: l.config.sitesearch.routes,
                        limit: Foundation.utils.is_small_only() ? 10 : 20,
                        allowedTypes: ["all", "pages", "books", "journals"],
                        locale: p,
                        classForm: "#js-bigsearch",
                        classAutoCompleteContainer: "#autocomplete-results",
                        classInputContainer: ".search-input",
                        classInput: "#search",
                        classResults: ".search-results",
                        classButton: ".search-form-button",
                        classTabContainer: ".tabs",
                        classTabContainerItems: ".tabs li"
                    }))
            }
        })
    },
    153: function(e, t, n) {
        var a = n(1);
        e.exports = (a.default || a).template({
            1: function(e, t, n, a, l) {
                return "                Elsevier Connect\n"
            },
            3: function(e, t, n, a, l) {
                var r;
                return null != (r = (n.ifCond || t && t.ifCond || n.helperMissing).call(null != t ? t : e.nullContext || {}, null != (r = null != t ? t._source : t) ? r.webpageType : r, "===", "journals", {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(4, l, 0),
                    inverse: e.program(6, l, 0),
                    data: l
                })) ? r : ""
            },
            4: function(e, t, n, a, l) {
                return "                Journals\n"
            },
            6: function(e, t, n, a, l) {
                var r;
                return "                " + e.escapeExpression((n.getObjectValue || t && t.getObjectValue || n.helperMissing).call(null != t ? t : e.nullContext || {}, null != (r = null != (r = null != t ? t.locale : t) ? r.siteSearch : r) ? r.labels : r, {
                    name: "getObjectValue",
                    hash: {
                        key: null != (r = null != t ? t._source : t) ? r.documentType : r
                    },
                    data: l
                })) + "\n            "
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, a, l) {
                var r;
                return '<div class="search-result-meta">\n    <p class="text-small text-ui">\n        <span class="category">\n' + (null != (r = (n.ifCond || t && t.ifCond || n.helperMissing).call(null != t ? t : e.nullContext || {}, null != (r = null != (r = null != t ? t._source : t) ? r.meta : r) ? r.community : r, "===", "Elsevier Connect", {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(1, l, 0),
                    inverse: e.program(3, l, 0),
                    data: l
                })) ? r : "") + "        </span>\n    </p>\n</div>\n"
            },
            useData: !0
        })
    },
    154: function(e, t, n) {
        var a = n(1);
        e.exports = (a.default || a).template({
            1: function(e, t, n, a, l) {
                var r;
                return "        <p>" + (null != (r = e.lambda(null != (r = null != (r = null != t ? t._source : t) ? r.meta : r) ? r.desc : r, t)) ? r : "") + "</p>\n"
            },
            3: function(e, t, n, a, l) {
                var r;
                return null != (r = n.if.call(null != t ? t : e.nullContext || {}, null != (r = null != t ? t.highlight : t) ? r["meta.desc.folded"] : r, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, l, 0),
                    inverse: e.program(6, l, 0),
                    data: l
                })) ? r : ""
            },
            4: function(e, t, n, a, l) {
                var r;
                return "        <p>" + (null != (r = e.lambda(null != (r = null != t ? t.highlight : t) ? r["meta.desc.folded"] : r, t)) ? r : "") + "...</p>\n"
            },
            6: function(e, t, n, a, l) {
                var r;
                return null != (r = n.if.call(null != t ? t : e.nullContext || {}, null != (r = null != t ? t.highlight : t) ? r["meta.desc"] : r, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, l, 0),
                    inverse: e.program(9, l, 0),
                    data: l
                })) ? r : ""
            },
            7: function(e, t, n, a, l) {
                var r;
                return "        <p>" + (null != (r = e.lambda(null != (r = null != t ? t.highlight : t) ? r["meta.desc"] : r, t)) ? r : "") + "...</p>\n"
            },
            9: function(e, t, n, a, l) {
                var r;
                return null != (r = n.if.call(null != t ? t : e.nullContext || {}, null != (r = null != (r = null != t ? t._source : t) ? r.meta : r) ? r.desc : r, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, l, 0),
                    inverse: e.program(12, l, 0),
                    data: l
                })) ? r : ""
            },
            10: function(e, t, n, a, l) {
                var r;
                return "        <p>" + (null != (r = e.lambda(null != (r = null != (r = null != t ? t._source : t) ? r.meta : r) ? r.desc : r, t)) ? r : "") + "...</p>\n"
            },
            12: function(e, t, n, a, l) {
                var r;
                return null != (r = n.if.call(null != t ? t : e.nullContext || {}, null != (r = null != t ? t.highlight : t) ? r.description : r, {
                    name: "if",
                    hash: {},
                    fn: e.program(13, l, 0),
                    inverse: e.program(15, l, 0),
                    data: l
                })) ? r : ""
            },
            13: function(e, t, n, a, l) {
                var r;
                return "        <p>" + (null != (r = e.lambda(null != (r = null != t ? t.highlight : t) ? r.description : r, t)) ? r : "") + "...</p>\n"
            },
            15: function(e, t, n, a, l) {
                var r;
                return null != (r = n.if.call(null != t ? t : e.nullContext || {}, null != (r = null != t ? t.highlight : t) ? r["file.content"] : r, {
                    name: "if",
                    hash: {},
                    fn: e.program(16, l, 0),
                    inverse: e.program(18, l, 0),
                    data: l
                })) ? r : ""
            },
            16: function(e, t, n, a, l) {
                var r;
                return "        <p>" + (null != (r = e.lambda(null != (r = null != t ? t.highlight : t) ? r["file.content"] : r, t)) ? r : "") + "...</p>\n"
            },
            18: function(e, t, n, a, l) {
                var r, s = null != t ? t : e.nullContext || {},
                    i = n.helperMissing;
                return "        <p>" + e.escapeExpression((n.encodeMyString || t && t.encodeMyString || i).call(s, (n.truncate || t && t.truncate || i).call(s, null != (r = null != t ? t._source : t) ? r.description : r, 170, {
                    name: "truncate",
                    hash: {},
                    data: l
                }), {
                    name: "encodeMyString",
                    hash: {},
                    data: l
                })) + "</p>\n    "
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, a, l) {
                var r, s = null != t ? t : e.nullContext || {};
                return '<div class="search-result-excerpt">\n' + (null != (r = n.if.call(s, (n.isValidSolutionResult || t && t.isValidSolutionResult || n.helperMissing).call(s, null != t ? t._source : t, {
                    name: "isValidSolutionResult",
                    hash: {},
                    data: l
                }), {
                    name: "if",
                    hash: {},
                    fn: e.program(1, l, 0),
                    inverse: e.program(3, l, 0),
                    data: l
                })) ? r : "") + "</div>\n"
            },
            useData: !0
        })
    },
    155: function(e, t, n) {
        var a = n(1);
        e.exports = (a.default || a).template({
            1: function(e, t, n, a, l) {
                var r;
                return "            " + (null != (r = e.lambda(null != (r = null != t ? t._source : t) ? r.shortName : r, t)) ? r : "") + "\n"
            },
            3: function(e, t, n, a, l) {
                var r;
                return null != (r = n.if.call(null != t ? t : e.nullContext || {}, null != (r = null != t ? t.highlight : t) ? r["meta.title.folded"] : r, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, l, 0),
                    inverse: e.program(6, l, 0),
                    data: l
                })) ? r : ""
            },
            4: function(e, t, n, a, l) {
                var r;
                return "            " + (null != (r = e.lambda(null != (r = null != t ? t.highlight : t) ? r["meta.title.folded"] : r, t)) ? r : "") + "\n"
            },
            6: function(e, t, n, a, l) {
                var r;
                return null != (r = n.if.call(null != t ? t : e.nullContext || {}, null != (r = null != t ? t.highlight : t) ? r["meta.title"] : r, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, l, 0),
                    inverse: e.program(9, l, 0),
                    data: l
                })) ? r : ""
            },
            7: function(e, t, n, a, l) {
                var r;
                return "            " + (null != (r = e.lambda(null != (r = null != t ? t.highlight : t) ? r["meta.title"] : r, t)) ? r : "") + "\n"
            },
            9: function(e, t, n, a, l) {
                var r;
                return null != (r = n.if.call(null != t ? t : e.nullContext || {}, null != (r = null != (r = null != t ? t._source : t) ? r.meta : r) ? r.title : r, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, l, 0),
                    inverse: e.program(12, l, 0),
                    data: l
                })) ? r : ""
            },
            10: function(e, t, n, a, l) {
                var r;
                return "            " + (null != (r = e.lambda(null != (r = null != (r = null != t ? t._source : t) ? r.meta : r) ? r.title : r, t)) ? r : "") + "\n"
            },
            12: function(e, t, n, a, l) {
                var r;
                return null != (r = n.if.call(null != t ? t : e.nullContext || {}, null != (r = null != t ? t.highlight : t) ? r.title : r, {
                    name: "if",
                    hash: {},
                    fn: e.program(13, l, 0),
                    inverse: e.program(15, l, 0),
                    data: l
                })) ? r : ""
            },
            13: function(e, t, n, a, l) {
                var r;
                return "            " + (null != (r = e.lambda(null != (r = null != t ? t.highlight : t) ? r.title : r, t)) ? r : "") + "\n"
            },
            15: function(e, t, n, a, l) {
                var r;
                return "            " + e.escapeExpression((n.truncate || t && t.truncate || n.helperMissing).call(null != t ? t : e.nullContext || {}, null != (r = null != t ? t._source : t) ? r.title : r, 70, {
                    name: "truncate",
                    hash: {},
                    data: l
                })) + "\n        "
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, a, l, r) {
                var s, i = null != t ? t : e.nullContext || {};
                return '<h2 class="search-title text-normal">\n' + (null != (s = e.invokePartial(n(40), t, {
                    name: "opening-a-tag",
                    data: r,
                    indent: "    ",
                    helpers: a,
                    partials: l,
                    decorators: e.decorators
                })) ? s : "") + (null != (s = a.if.call(i, (a.isValidSolutionResult || t && t.isValidSolutionResult || a.helperMissing).call(i, null != t ? t._source : t, {
                    name: "isValidSolutionResult",
                    hash: {},
                    data: r
                }), {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.program(3, r, 0),
                    data: r
                })) ? s : "") + "    </a>\n</h2>\n"
            },
            usePartial: !0,
            useData: !0
        })
    },
    156: function(e, t, n) {
        var a = n(1);
        e.exports = (a.default || a).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, a, l, r) {
                var s;
                return '<div class="search-result-url">\n' + (null != (s = e.invokePartial(n(40), t, {
                    name: "opening-a-tag",
                    data: r,
                    indent: "    ",
                    helpers: a,
                    partials: l,
                    decorators: e.decorators
                })) ? s : "") + "        " + e.escapeExpression((a.truncate || t && t.truncate || a.helperMissing).call(null != t ? t : e.nullContext || {}, null != (s = null != t ? t._source : t) ? s.url : s, 80, {
                    name: "truncate",
                    hash: {},
                    data: r
                })) + "\n    </a>\n</div>\n"
            },
            usePartial: !0,
            useData: !0
        })
    },
    157: function(e, t, n) {
        var a = n(1);
        e.exports = (a.default || a).template({
            1: function(e, t, n, a, l) {
                return '    <div class="columns small-8 medium-10">\n'
            },
            3: function(e, t, n, a, l) {
                return '    <div class="columns medium-11">\n'
            },
            5: function(e, t, a, l, r) {
                var s;
                return '        <div class="columns small-4 medium-2">\n' + (null != (s = e.invokePartial(n(59), t, {
                    name: "components/thumbnail",
                    hash: {
                        imageUrl: null != (s = null != t ? t._source : t) ? s.imageUrl : s
                    },
                    data: r,
                    indent: "            ",
                    helpers: a,
                    partials: l,
                    decorators: e.decorators
                })) ? s : "") + "        </div>\n"
            },
            7: function(e, t, n, a, l) {
                var r;
                return null != (r = n.if.call(null != t ? t : e.nullContext || {}, null != (r = null != (r = null != t ? t._source : t) ? r.meta : r) ? r.imageUrl : r, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, l, 0),
                    inverse: e.noop,
                    data: l
                })) ? r : ""
            },
            8: function(e, t, a, l, r) {
                var s;
                return '        <div class="columns small-4 medium-2">\n' + (null != (s = e.invokePartial(n(59), t, {
                    name: "components/thumbnail",
                    hash: {
                        imageUrl: null != (s = null != (s = null != t ? t._source : t) ? s.meta : s) ? s.imageUrl : s
                    },
                    data: r,
                    indent: "            ",
                    helpers: a,
                    partials: l,
                    decorators: e.decorators
                })) ? s : "") + "        </div>\n    "
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, a, l, r) {
                var s, i = null != t ? t : e.nullContext || {};
                return '<article class="row row-tight search-result">\n\n' + (null != (s = (a.ifCond || t && t.ifCond || a.helperMissing).call(i, null != (s = null != t ? t._source : t) ? s.imageUrl : s, "||", null != (s = null != (s = null != t ? t._source : t) ? s.meta : s) ? s.imageUrl : s, {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.program(3, r, 0),
                    data: r
                })) ? s : "") + '        <div class="search-result-body">\n' + (null != (s = e.invokePartial(n(155), t, {
                    name: "components/title",
                    data: r,
                    indent: "            ",
                    helpers: a,
                    partials: l,
                    decorators: e.decorators
                })) ? s : "") + (null != (s = e.invokePartial(n(156), t, {
                    name: "components/url",
                    data: r,
                    indent: "            ",
                    helpers: a,
                    partials: l,
                    decorators: e.decorators
                })) ? s : "") + (null != (s = e.invokePartial(n(154), t, {
                    name: "components/text-excerpt",
                    data: r,
                    indent: "            ",
                    helpers: a,
                    partials: l,
                    decorators: e.decorators
                })) ? s : "") + (null != (s = e.invokePartial(n(153), t, {
                    name: "components/meta",
                    data: r,
                    indent: "            ",
                    helpers: a,
                    partials: l,
                    decorators: e.decorators
                })) ? s : "") + "        </div>\n    </div>\n\n" + (null != (s = a.if.call(i, null != (s = null != t ? t._source : t) ? s.imageUrl : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.program(7, r, 0),
                    data: r
                })) ? s : "") + "\n</article>\n"
            },
            usePartial: !0,
            useData: !0
        })
    },
    158: function(e, t, n) {
        var a = n(1);
        e.exports = (a.default || a).template({
            1: function(e, t, n, a, l, r, s) {
                var i, u = null != t ? t : e.nullContext || {},
                    o = n.helperMissing;
                return "\n" + (null != (i = (n.ifCond || t && t.ifCond || o).call(u, null != t ? t.totalResults : t, "<", 1, {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(2, l, 0, r, s),
                    inverse: e.program(5, l, 0, r, s),
                    data: l
                })) ? i : "") + "\n" + (null != (i = (n.ifCond || t && t.ifCond || o).call(u, null != t ? t.numPages : t, ">", 1, {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(8, l, 0, r, s),
                    inverse: e.noop,
                    data: l
                })) ? i : "") + "\n"
            },
            2: function(e, t, n, a, l) {
                var r, s, i = e.lambda,
                    u = e.escapeExpression,
                    o = null != t ? t : e.nullContext || {};
                return '        <div class="row row-tight">\n            <div class="columns medium-12">\n                <div class="search-result-feedback text-center">\n                    <p class="text-medium text-ui">' + u(i(null != (r = null != (r = null != t ? t.locale : t) ? r.siteSearch : r) ? r.noResults : r, t)) + ' </p>\n                    <h1 class="search-results-query text-medium text-ui">"' + u((s = null != (s = n.searchQuery || (null != t ? t.searchQuery : t)) ? s : n.helperMissing, "function" == typeof s ? s.call(o, {
                    name: "searchQuery",
                    hash: {},
                    data: l
                }) : s)) + '"</h1>\n                </div>\n            </div>\n        </div>\n        <div class="row row-tight">\n            <div class="columns medium-12">\n                <p class="text-medium text-ui text-center">' + u(i(null != (r = null != (r = null != t ? t.locale : t) ? r.siteSearch : r) ? r.alternativeTxt : r, t)) + '</p>\n            </div>\n        </div>\n        <div class="row">\n            <nav class="top-tasks" aria-label="secondary">\n                <ul class="not-enum">\n' + (null != (r = n.each.call(o, null != (r = null != (r = null != t ? t.locale : t) ? r.siteSearch : r) ? r.alternativeLinks : r, {
                    name: "each",
                    hash: {},
                    fn: e.program(3, l, 0),
                    inverse: e.noop,
                    data: l
                })) ? r : "") + "                </ul>\n            </nav>\n        </div>\n"
            },
            3: function(e, t, n, a, l) {
                var r, s = null != t ? t : e.nullContext || {},
                    i = n.helperMissing,
                    u = e.escapeExpression;
                return '                        <li><a href="' + u((r = null != (r = n.path || (null != t ? t.path : t)) ? r : i, "function" == typeof r ? r.call(s, {
                    name: "path",
                    hash: {},
                    data: l
                }) : r)) + '" title="' + u((r = null != (r = n.txt || (null != t ? t.txt : t)) ? r : i, "function" == typeof r ? r.call(s, {
                    name: "txt",
                    hash: {},
                    data: l
                }) : r)) + '">' + u((r = null != (r = n.txt || (null != t ? t.txt : t)) ? r : i, "function" == typeof r ? r.call(s, {
                    name: "txt",
                    hash: {},
                    data: l
                }) : r)) + "</a></li>\n"
            },
            5: function(e, t, n, a, l, r, s) {
                var i, u, o = null != t ? t : e.nullContext || {},
                    c = n.helperMissing,
                    h = e.escapeExpression,
                    d = e.lambda;
                return '        <div class="row row-tight">\n            <div class="columns medium-12">\n                <div class="search-result-feedback">\n                    <p class="text-ui">\n                        ' + h((n.commaSeparateNumber || t && t.commaSeparateNumber || c).call(o, null != t ? t.totalResults : t, {
                    name: "commaSeparateNumber",
                    hash: {},
                    data: l
                })) + " " + h(d(null != (i = null != (i = null != t ? t.locale : t) ? i.siteSearch : i) ? i.searchResultsFoundFor : i, t)) + '\n                    </p>\n                    <h1 class="search-results-query text-ui">"' + (null != (u = null != (u = n.searchQuery || (null != t ? t.searchQuery : t)) ? u : c, i = "function" == typeof u ? u.call(o, {
                    name: "searchQuery",
                    hash: {},
                    data: l
                }) : u) ? i : "") + '"</h1>\n                    <p class="text-ui"> ' + h((n.getObjectValue || t && t.getObjectValue || c).call(o, null != (i = null != t ? t.locale : t) ? i.siteSearch : i, {
                    name: "getObjectValue",
                    hash: {
                        key: null != t ? t.searchType : t
                    },
                    data: l
                })) + ' </p>\n                    <p class="text-ui"> (' + h((u = null != (u = n.took || (null != t ? t.took : t)) ? u : c, "function" == typeof u ? u.call(o, {
                    name: "took",
                    hash: {},
                    data: l
                }) : u)) + " " + h(d(null != (i = null != (i = null != t ? t.locale : t) ? i.siteSearch : i) ? i.seconds : i, t)) + ")</p>\n                </div>\n            </div>\n            <hr/>\n        </div>\n" + (null != (i = n.each.call(o, null != (i = null != t ? t.results : t) ? i.data : i, {
                    name: "each",
                    hash: {},
                    fn: e.program(6, l, 0, r, s),
                    inverse: e.noop,
                    data: l
                })) ? i : "")
            },
            6: function(e, t, a, l, r, s, i) {
                var u;
                return null != (u = e.invokePartial(n(157), t, {
                    name: "partials/search-results/generic",
                    hash: {
                        searchResultPosition: (a.math || t && t.math || a.helperMissing).call(null != t ? t : e.nullContext || {}, r && r.key, "+", null != i[1] ? i[1].start : i[1], {
                            name: "math",
                            hash: {},
                            data: r
                        }),
                        locale: null != i[1] ? i[1].locale : i[1]
                    },
                    data: r,
                    indent: "            ",
                    helpers: a,
                    partials: l,
                    decorators: e.decorators
                })) ? u : ""
            },
            8: function(e, t, n, a, l) {
                var r;
                return '        <div id="pagination-wrapper" class="row">\n            <div class="columns medium-12">\n                <ol class="pagination">\n                    ' + (null != (r = (n.pagination || t && t.pagination || n.helperMissing).call(null != t ? t : e.nullContext || {}, null != t ? t.currentPage : t, null != t ? t.numPages : t, 5, {
                    name: "pagination",
                    hash: {},
                    data: l
                })) ? r : "") + "\n                </ol>\n            </div>\n        </div>\n"
            },
            10: function(e, t, n, a, l) {
                var r;
                return '\n    <div class="row row-tight">\n        <div class="columns medium-12">\n            <div class="search-result-feedback">\n                <p class="text-medium text-ui">' + e.escapeExpression(e.lambda(null != (r = null != (r = null != t ? t.locale : t) ? r.siteSearch : r) ? r.serviceUnavailable : r, t)) + "</p>\n            </div>\n        </div>\n    </div>\n\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, a, l, r, s) {
                var i;
                return null != (i = n.if.call(null != t ? t : e.nullContext || {}, null != t ? t.serviceIsAvailable : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, l, 0, r, s),
                    inverse: e.program(10, l, 0, r, s),
                    data: l
                })) ? i : ""
            },
            usePartial: !0,
            useData: !0,
            useDepths: !0
        })
    },
    40: function(e, t, n) {
        var a = n(1);
        e.exports = (a.default || a).template({
            1: function(e, t, n, a, l) {
                return ' target="_blank" '
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, a, l) {
                var r, s, i = e.lambda,
                    u = e.escapeExpression,
                    o = null != t ? t : e.nullContext || {},
                    c = n.helperMissing;
                return '<a\n    href="' + u(i(null != (r = null != t ? t._source : t) ? r.url : r, t)) + '"\n    title="' + u(i(null != (r = null != t ? t._source : t) ? r.title : r, t)) + '"\n    class="search-track"\n    ' + (null != (r = (n.ifCond || t && t.ifCond || c).call(o, null != (r = null != t ? t._source : t) ? r.documentType : r, "===", "journals", {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(1, l, 0),
                    inverse: e.noop,
                    data: l
                })) ? r : "") + '\n    data-event="search"\n    data-category="search-click"\n    data-label="' + u(i(null != (r = null != t ? t._source : t) ? r.documentType : r, t)) + '-title"\n    data-action="result-' + u((s = null != (s = n.searchResultPosition || (null != t ? t.searchResultPosition : t)) ? s : c, "function" == typeof s ? s.call(o, {
                    name: "searchResultPosition",
                    hash: {},
                    data: l
                }) : s)) + '"\n    data-value="' + u((s = null != (s = n.searchResultPosition || (null != t ? t.searchResultPosition : t)) ? s : c, "function" == typeof s ? s.call(o, {
                    name: "searchResultPosition",
                    hash: {},
                    data: l
                }) : s)) + '"\n    data-type="' + u(i(null != (r = null != t ? t._source : t) ? r.documentType : r, t)) + '"\n    data-division-code="' + u(i(null != (r = null != t ? t._source : t) ? r.divisionCode : r, t)) + '"\n    data-isbn="' + u(i(null != (r = null != t ? t._source : t) ? r.isbn : r, t)) + '"\n    data-issn="' + u(i(null != (r = null != t ? t._source : t) ? r.issn : r, t)) + '"\n>\n'
            },
            useData: !0
        })
    },
    59: function(e, t, n) {
        var a = n(1);
        e.exports = (a.default || a).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, a, l, r) {
                var s, i, u = e.escapeExpression;
                return '<figure class="search-result-image-static">\n' + (null != (s = e.invokePartial(n(40), t, {
                    name: "opening-a-tag",
                    data: r,
                    indent: "    ",
                    helpers: a,
                    partials: l,
                    decorators: e.decorators
                })) ? s : "") + '        <img src="' + u((i = null != (i = a.imageUrl || (null != t ? t.imageUrl : t)) ? i : a.helperMissing, "function" == typeof i ? i.call(null != t ? t : e.nullContext || {}, {
                    name: "imageUrl",
                    hash: {},
                    data: r
                }) : i)) + '" alt="' + u(e.lambda(null != (s = null != t ? t._source : t) ? s.title : s, t)) + '">\n    </a>\n</figure>\n'
            },
            usePartial: !0,
            useData: !0
        })
    },
    75: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.HandlebarsHelpers = void 0;
        var a = n(1),
            l = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a);
        t.HandlebarsHelpers = function() {
            l.default.registerHelper("ifCond", function(e, t, n, a) {
                switch (t) {
                    case "==":
                        return e == n ? a.fn(this) : a.inverse(this);
                    case "===":
                        return e === n ? a.fn(this) : a.inverse(this);
                    case "!=":
                        return e != n ? a.fn(this) : a.inverse(this);
                    case "!==":
                        return e !== n ? a.fn(this) : a.inverse(this);
                    case "<":
                        return e < n ? a.fn(this) : a.inverse(this);
                    case "<=":
                        return e <= n ? a.fn(this) : a.inverse(this);
                    case ">":
                        return e > n ? a.fn(this) : a.inverse(this);
                    case ">=":
                        return e >= n ? a.fn(this) : a.inverse(this);
                    case "&&":
                        return e && n ? a.fn(this) : a.inverse(this);
                    case "||":
                        return e || n ? a.fn(this) : a.inverse(this);
                    default:
                        return a.inverse(this)
                }
            }), l.default.registerHelper("pagination", function(e, t, n) {
                for (var a = "", l = 1; l <= t; l++) {
                    if (1 === l || l === t || l === e || l >= e - n && l <= e + n) {
                        var r = "";
                        l === e && (r = 'class="selected"'), a += "<li " + r + "><span>", a += '<a role="navigation" aria-label="Pagination Navigation" class="pagination-link" data-page="' + (l - 1 + 1) + '">' + l + "</a>", a += "</span></li>"
                    }(t > e + n + 1 && l === t - 1 || 2 === l && e - n > 2) && (a += "<li>…</li>")
                }
                return a
            }), l.default.registerHelper("math", function(e, t, n) {
                switch (e = parseFloat(e), n = parseFloat(n), t) {
                    case "+":
                        return e + n;
                    case "-":
                        return e - n;
                    case "*":
                        return e * n;
                    case "/":
                        return e !== n;
                    case "%":
                        return e % n;
                    default:
                        return NaN
                }
            }), l.default.registerHelper("getObjectValue", function(e, t) {
                return e[t.hash.key]
            }), l.default.registerHelper("capitalizeFirst", function(e) {
                return "string" == typeof e ? e.charAt(0).toUpperCase() + e.slice(1) : e
            }), l.default.registerHelper("truncate", function(e, t) {
                return e && e.length > t ? e.substr(0, t) + "..." : e
            }), l.default.registerHelper("commaSeparateNumber", function(e) {
                return "number" == typeof e ? e.toLocaleString() : e
            }), l.default.registerHelper("log", function(e) {
                console.log("variable = ", e)
            }), l.default.registerHelper("encodeMyString", function(e) {
                return new l.default.SafeString(e)
            }), l.default.registerHelper("isValidSolutionResult", function(e) {
                return "solution" === e.resultUIType && "" !== e.primaryActionText && "" !== e.primaryActionURL && "" !== e.secondaryActionText && "" !== e.secondaryActionURL
            })
        }()
    },
    78: function(e, t, n) {
        "use strict";

        function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SearchClient = void 0;
        var a = function() {
                function defineProperties(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }
                return function(e, t, n) {
                    return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
                }
            }(),
            l = n(19),
            r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(l),
            s = n(9),
            i = n(46),
            u = n(114),
            o = n(111),
            c = n(6),
            h = n(24);
        t.SearchClient = function() {
            function SearchClient(e) {
                _classCallCheck(this, SearchClient), this.config = e, this.queryStr = "", this.searchQuery = (0, u.sanitiseInput)((0, i.getQueryParam)("query")) || "", this.searchType = (0, u.sanitiseInput)((0, i.getQueryParam)("labels")) || "", this.currentPage = parseInt((0, u.sanitiseInput)((0, i.getQueryParam)("page")), 10) || 1, this.layout = (0, c.objGet)(elcm.testing, s.config.sitesearch.appName), this.searchLimit = e.limit, this.allowedTypes = e.allowedTypes, this.locale = e.locale, this.searchPath = e.searchPath, this.start = 0, this.numPages = 0, this.nextPage = 0, this.prevPage = 0, this.results = {}, this.searchForm = document.querySelector(e.classForm), this.searchInputContainer = document.querySelector(e.classInputContainer), this.searchResults = document.querySelector(e.classResults), this.searchInput = document.querySelector(e.classInput), this.searchButton = document.querySelector(e.classButton), this.tabContainer = document.querySelector(e.classTabContainer), this.tabContainerItems = document.querySelectorAll(e.classTabContainerItems), this.firstLoad = !0, this.firstResponse = !0, this.init()
            }
            return a(SearchClient, [{
                key: "init",
                value: function() {
                    this.registerHandlers(), this.setSelectedTab(), this.setSearchParams()
                }
            }, {
                key: "registerHandlers",
                value: function() {
                    var e = this;
                    this.tabContainer.addEventListener("change", function(t) {
                        return e.setSelectedTab(t.target)
                    }), this.searchResults.addEventListener("click", function(t) {
                        return e.handleResultsClick(t)
                    }), this.searchForm.addEventListener("submit", function(t) {
                        t.preventDefault(), e.searchInput.value.length || (e.searchInputContainer.classList.add("error"), e.searchInputContainer.classList.remove("active")), e.handleInputChange()
                    }), window.onpopstate = function() {
                        var t = window.history.state;
                        t && (e.searchQuery = t.query, e.searchLimit = t.limit, e.searchType = t.type, e.currentPage = t.page, e.makeSearchRequest())
                    }
                }
            }, {
                key: "handleResultsClick",
                value: function(e) {
                    var t = e.target,
                        n = t.classList;
                    if (n.contains("pagination-link")) {
                        e.preventDefault(), this.currentPage = parseInt(t.getAttribute("data-page"), 10), this.setSearchParams();
                        var a = {
                            eventCategory: "search-navigation",
                            eventAction: "page-" + this.currentPage,
                            eventLabel: "pagination",
                            eventValue: ""
                        };
                        n.contains("pag-prev") ? a.eventLabel = "back" : n.contains("pag-next") && (a.eventLabel = "next"), (0, o.pushEvent)("google", "search", a)
                    } else if (n.contains("search-track")) {
                        var l = t.getAttribute("data-type").slice(0, -1);
                        if ("book" === l || "journal" === l) {
                            var r = "book" === l ? "isbn" : "issn",
                                s = ("isbn" === r ? t.getAttribute("data-isbn") : t.getAttribute("data-issn")).replace(/-/g, ""),
                                i = t.getAttribute("data-division-code").replace(/&/g, ""),
                                u = t.getAttribute("data-value") || "";
                            (0, o.pushEvent)("adobe", "searchResultsClick", {
                                content: [{
                                    format: "MIME-" + l.toUpperCase(),
                                    id: "ec:" + l + ":" + r + ":" + s,
                                    detail: "ec:" + l + ":division:" + i
                                }],
                                search: {
                                    resultsPosition: u
                                }
                            })
                        }(0, o.pushEvent)("google", "search", {
                            eventCategory: "search-click",
                            eventAction: t.getAttribute("data-action") || "",
                            eventLabel: t.getAttribute("data-label") || "",
                            eventValue: t.getAttribute("data-value") || ""
                        })
                    }
                }
            }, {
                key: "setSelectedTab",
                value: function(e) {
                    Array.from(this.tabContainerItems).forEach(function(e) {
                        return e.classList.remove("active")
                    }), e ? this.handleInputChange() : e = document.querySelector("input[name='labels'][value='" + this.searchType + "']") || document.querySelector("input[name='labels'][value='all']"), e.checked = !0, e.parentNode.parentNode.classList.add("active")
                }
            }, {
                key: "handleInputChange",
                value: function() {
                    this.searchButton.blur(), this.searchInput.blur(), this.currentPage = 1, this.setSearchParams()
                }
            }, {
                key: "setSearchParams",
                value: function() {
                    var e = (0, u.sanitiseInput)(this.searchInput.value) || this.searchQuery,
                        t = (0, u.sanitiseInput)(document.querySelector("input[name='labels']:checked").value) || this.searchType,
                        n = parseInt((0, u.sanitiseInput)((0, i.getQueryParam)("page")), 10) || 1;
                    (e !== this.searchQuery || t !== this.searchType || n !== this.currentPage || this.firstLoad) && (this.firstLoad = !1, (0, o.pushEvent)("google", "search", {
                        eventCategory: "search-refinement",
                        eventAction: e + " -> " + this.searchQuery,
                        eventLabel: t + " -> " + this.searchType,
                        eventValue: ""
                    }), this.searchQuery = e, this.searchType = t, history.pushState({
                        query: this.searchQuery,
                        type: this.searchType,
                        limit: this.searchLimit,
                        page: this.currentPage
                    }, "", "" + this.searchPath + this.buildQueryString()), (0, o.pushEvent)("google", "search", {
                        eventCategory: "search-submit",
                        eventAction: "",
                        eventLabel: this.searchType,
                        eventValue: ""
                    }), this.makeSearchRequest())
                }
            }, {
                key: "validateSearchParams",
                value: function() {
                    return !!(this.allowedTypes.indexOf(this.searchType) > -1) || (this.searchType = "all", !1)
                }
            }, {
                key: "makeSearchRequest",
                value: function() {
                    var e = this;
                    if (this.validateSearchParams()) {
                        this.start = this.currentPage > 0 ? (this.currentPage - 1) * this.searchLimit : 0, this.queryStr = this.buildQueryString();
                        var t = {
                                query: this.searchQuery,
                                type: "pages" === this.searchType ? "webpages" : this.searchType,
                                start: this.start,
                                limit: this.searchLimit,
                                locale: this.locale
                            },
                            n = "" + this.config.searchAPI + this.config.searchRoutes.search + "?query=" + t.query + "&labels=" + t.type + "&start=" + t.start + "&limit=" + t.limit + "&lang=" + t.locale;
                        r.default.get(n).then(function(t) {
                            return e.handleSearchResponse(t.data)
                        }).catch(function(t) {
                            return e.handleSearchResponse({
                                error: t
                            })
                        })
                    }
                }
            }, {
                key: "handleSearchResponse",
                value: function(e) {
                    if (!e.error) {
                        this.results = {
                            took: e.took / 100,
                            totalResults: e.hits.total,
                            data: e.hits.hits
                        }, this.numPages = Math.ceil(this.results.totalResults / this.searchLimit), this.prevPage = this.currentPage > 1 ? this.currentPage - 1 : 0, this.nextPage = this.currentPage < this.numPages ? this.currentPage + 1 : 0;
                        for (var t = 0; t < this.results.data.length; t++) this.results.data[t]._source.documentType || (this.results.data[t]._source.documentType = this.results.data[t]._type);
                        (0, o.pushEvent)("google", "search", {
                            eventCategory: "search-results",
                            eventAction: "page-" + this.currentPage,
                            eventLabel: this.results.totalResults > 0 ? this.getContentCountString() : "no-results",
                            eventValue: ""
                        }), 0 === this.results.totalResults && (0, o.pushEvent)("google", "search", {
                            eventCategory: "search",
                            eventAction: "no-results",
                            eventLabel: this.searchQuery,
                            eventValue: ""
                        });
                        var n = {
                            totalResults: this.results.totalResults.toString()
                        };
                        pageData.search = n, this.firstResponse ? (this.firstResponse = !1, pageDataTracker.trackPageLoad()) : (0, o.pushEvent)("adobe", "searchResultsUpdated", {
                            search: n
                        })
                    }
                    this.updateSearchResultsUI()
                }
            }, {
                key: "updateSearchResultsUI",
                value: function() {
                    var e = n(158),
                        t = 0 !== Object.keys(this.results).length,
                        a = document.querySelector(".back-to-top"),
                        l = void 0;
                    this.searchQuery = decodeURIComponent(this.searchQuery), this.searchInput.value = this.searchQuery, l = t ? {
                        serviceIsAvailable: t,
                        searchQuery: this.searchQuery,
                        searchType: this.searchType,
                        searchPath: this.searchPath,
                        start: this.start + 1,
                        limit: this.searchLimit,
                        took: this.results.took,
                        totalResults: this.results.totalResults,
                        results: this.results,
                        numPages: this.numPages,
                        currentPage: this.currentPage,
                        prevPage: this.prevPage,
                        nextPage: this.nextPage,
                        queryStr: this.queryStr,
                        locale: h.regionMap[this.locale]
                    } : {
                        serviceIsAvailable: t
                    }, this.searchResults.innerHTML = e(l), a && window.scrollY > 0 && a.click()
                }
            }, {
                key: "getContentCountString",
                value: function() {
                    var e = this.results.data.reduce(function(e, t) {
                        return e[t._source.documentType]++, e
                    }, {
                        books: 0,
                        journals: 0,
                        webpages: 0
                    });
                    return e.books + " books, " + e.journals + " journals, " + e.webpages + " pages"
                }
            }, {
                key: "buildQueryString",
                value: function() {
                    return "query=" + this.searchQuery + "&labels=" + this.searchType + "&page=" + this.currentPage
                }
            }]), SearchClient
        }()
    }
}, [115]);