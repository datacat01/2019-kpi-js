webpackJsonp([24], {
    407: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend(n(79), n(115).withOptions({
            type: "go"
        }), {
            className: "consumerSubscriptionsButton",
            isLink: !1,
            defaults: {
                size: "large",
                isScButton: !0,
                tcode: null
            },
            setup: function() {
                this.isLink = "a" === this.tagName, this.isLink && this.$el.attr("href", n(59).getRoute("consumerPremium"))
            },
            getUpsellRef: function() {
                return this.options.tcode
            }
        })
    },
    414: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend({
            template: n(457),
            css: n(465),
            className: "frontMobileTeaser",
            getTemplateData: function(e) {
                return e.appstoreUrl = n(142).getStoreUrl("appstore"), e.googlePlayUrl = n(142).getStoreUrl("googlePlay"), e
            }
        })
    },
    444: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".frontMobileTeaser{margin-top:60px;padding:0 70px;height:450px;background:#F2F2F2;display:-webkit-flex;display:-ms-flexbox;display:flex}.frontMobileTeaser__info{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:325px;margin-left:45px}.frontMobileTeaser__links{margin-top:28px}.frontMobileTeaser .g-appStoreButton{vertical-align:middle}.frontMobileTeaser__devices{-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;position:relative}.frontMobileTeaser__deviceWrapper{width:100%;padding-top:54%}.frontMobileTeaser__device{background-image:url(" + n(451) + ");background-repeat:no-repeat;background-position:bottom;background-size:100%;position:absolute;top:0;right:0;bottom:0;left:0}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:2dppx),(min-resolution:192dpi){.frontMobileTeaser__device{background-image:url(" + n(452) + ")}}@media (max-width:1239px){.frontMobileTeaser{height:350px}}@media (max-width:1079px){.frontMobileTeaser{height:325px}}", ""])
    },
    451: function(e, t, n) {
        e.exports = n.p + "assets/images/front/never_stop_listening@1x-9c5264f.jpg"
    },
    452: function(e, t, n) {
        e.exports = n.p + "assets/images/front/never_stop_listening@2x-ae7903c.jpg"
    },
    457: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, a) {
                var o, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression,
                    c = "function";
                return '<div class="frontMobileTeaser__devices">\n  <div class="frontMobileTeaser__deviceWrapper">\n    <figure class="frontMobileTeaser__device"></figure>\n  </div>\n</div>\n\n<div class="frontMobileTeaser__info">\n  <div class="g-type-marketing-header">' + u((n(51) || t && t.$t || l).call(s, "Never stop listening", {
                    name: "$t",
                    hash: {},
                    data: a
                })) + '</div>\n\n  <p class="g-type-marketing-info">' + u((n(51) || t && t.$t || l).call(s, "SoundCloud is available on Web, iOS, Android, Sonos, Chromecast, and Xbox One.", {
                    name: "$t",
                    hash: {},
                    data: a
                })) + '</p>\n\n  <div class="frontMobileTeaser__links">\n    <a href="' + u((o = null != (o = i.appstoreUrl || (null != t ? t.appstoreUrl : t)) ? o : l, typeof o === c ? o.call(s, {
                    name: "appstoreUrl",
                    hash: {},
                    data: a
                }) : o)) + '" target="_blank" class="g-appStoreButton g-appStoreButton__appStore sc-ir">\n      ' + u((n(51) || t && t.$t || l).call(s, "Download on the App Store", {
                    name: "$t",
                    hash: {
                        _comment: "Text on a app download button"
                    },
                    data: a
                })) + '\n    </a>\n    <a href="' + u((o = null != (o = i.googlePlayUrl || (null != t ? t.googlePlayUrl : t)) ? o : l, typeof o === c ? o.call(s, {
                    name: "googlePlayUrl",
                    hash: {},
                    data: a
                }) : o)) + '" target="_blank" class="g-appStoreButton g-appStoreButton__googlePlay sc-ir">\n      ' + u((n(51) || t && t.$t || l).call(s, "Get it on Google Play", {
                    name: "$t",
                    hash: {
                        _comment: "Text on a app download button"
                    },
                    data: a
                })) + "\n    </a>\n  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    465: function(e, t, n) {
        var i = n(444);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    667: function(e, t, n) {
        "use strict";

        function i(e) {
            return "track" === e ? "sound" : "playlist" === e ? "set" : e
        }
        e.exports = n(53).extend({
            template: n(1167),
            css: n(1257),
            className: "autocompleteItem",
            requiredModelAttributes: ["link", "output", "artwork_url"],
            attributes: {
                role: "option"
            },
            ModelClass: n(269),
            getTemplateData: function(e) {
                var t = this.model.get("output");
                return e.title = n(192).usertext(t, {
                    escapeExpression: !0,
                    paragraphs: !1,
                    links: !1,
                    userlinks: !1
                }), e.isQuery = this.model.isQuery(), e.iconName = i(this.model.getEntityType()), e.isQuery || (e.entityResourceId = this.model.resource.resource_id, e.entityResourceType = this.model.resource.resource_type), e
            }
        })
    },
    668: function(e, t, n) {
        "use strict";
        var i = n(169).extend({
            defaults: {
                dark: !0,
                size: "regular"
            }
        });
        e.exports = n(81).extend({
            css: n(1258),
            className: "searchAutocomplete g-dark-list",
            Subview: n(667),
            defaults: {
                query: null,
                maxDisplay: 10
            },
            ThrobberView: n(197),
            LoadingView: i,
            automaticErrorHandling: !1,
            setup: function(e) {
                var t = e.query;
                this.collection = new(n(1356))(null, {
                    query: t
                })
            },
            updateFilter: function(e) {
                this.collection.updateFilter(e)
            },
            getResultAt: function(e) {
                return this.collection.at(e)
            },
            getQueryUrn: function() {
                return this.collection.getQueryUrn()
            }
        })
    },
    669: function(e, t, n) {
        "use strict";

        function i() {
            var e = n(50).t("Search for <q>[[query]]</q>", {
                query: this.options.query
            }).toString();
            this.getElement("searchForText").html(e)
        }
        e.exports = n(53).extend(n(329), {
            template: n(1168),
            css: n(1259),
            className: "g-dark",
            attributes: {
                id: "searchMenuList"
            },
            maxItemDisplay: 5,
            itemSelector: ".autocompleteItem, .searchMenu__searchFor",
            highlightClassName: "g-dark-selected",
            defaults: {
                query: null
            },
            element2selector: {
                searchForText: ".searchMenu__searchForText"
            },
            updateListFilter: function(e) {
                this.options.query = e, this.subviews.list.updateFilter(e), i.call(this)
            },
            onItemSelected: function(e, t) {
                var n = this.isQueryEmpty() ? e : e - 1;
                return {
                    queryUrn: this.subviews.list.getQueryUrn(),
                    query: this.options.query,
                    shortcut: t.hasClass("searchMenu__searchFor") ? null : {
                        model: this.subviews.list.getResultAt(n),
                        index: n
                    }
                }
            },
            getTemplateData: function(e) {
                return e.isQueryEmpty = this.isQueryEmpty(), e
            },
            renderDecorate: function() {
                i.call(this)
            },
            isQueryEmpty: function() {
                var e = this.options.query;
                return !e || !e.trim()
            }
        })
    },
    670: function(e, t, n) {
        "use strict";

        function i() {
            this.getState("expanded") && this.$el.width(this.getMenuWidth())
        }

        function r() {
            return this.getElement("input").val().trim()
        }
        var a = n(58).trackV1Click;
        e.exports = n(53).extend(n(204), n(377), {
            css: n(1260),
            template: n(1169),
            className: "headerSearch",
            events: {
                "focus .headerSearch__input": "onInputFocus",
                "blur  .headerSearch__input": "onInputBlur"
            },
            zIndexLevel: "header-menu",
            inputSelector: ".headerSearch__input",
            MenuContentView: n(669),
            typingDelay: 100,
            category: null,
            formulatingSearch: !1,
            getRelativeElement: function() {
                return this.getFormElement()
            },
            setup: function() {
                this.showAllItems = !1, this.$el.one("focus", ".headerSearch__input", function() {
                    n(61).isLoggedIn() && (n(360).prefetch(), n(567).prefetch(), n(480).prefetch(), n(362).prefetch({
                        userId: n(54).get("me").id
                    }))
                })
            },
            renderDecorate: function() {
                this.listenTo(n(94), "resize:x:throttled", i).listenTo(n(56), "layout:change", this.onLayoutChange).listenTo(n(56), "search:focus", this.focusInput), this.getElement("input").addClass("g-all-transitions-300").attr({
                    "aria-autocomplete": "list",
                    "aria-owns": "searchMenuList"
                })
            },
            teardown: function() {
                this.stopListening(n(94), "resize:x:throttled").stopListening(n(56), "layout:change").stopListening(n(56), "search:focus")
            },
            getTemplateData: function(e) {
                return e.placeholderText = n(61).isLoggedIn() ? n(50).t("Search") : n(50).t("Search for artists, bands, tracks, podcasts"), e
            },
            updateMenuContent: function(e, t) {
                var n = t.query;
                this.getMenu().getContentView().updateListFilter(n)
            },
            onInputFocus: function() {
                this.formulatingSearch = !0;
                var e = r.call(this),
                    t = e ? {
                        q: e
                    } : null;
                a({
                    click_name: "search_formulation_init",
                    click_attributes: t
                })
            },
            onInputBlur: function() {
                if (this.formulatingSearch) {
                    var e = r.call(this),
                        t = e ? {
                            q: e
                        } : null;
                    a({
                        click_name: "search_formulation_exit",
                        click_attributes: t
                    }), this.formulatingSearch = !1
                }
            },
            onItemSelected: function(e) {
                e.shortcut ? (this.trackClick(e), this.emptyInput().blur(), n(54).get("router").navigate(e.shortcut.model.get("link"), {
                    trigger: !0
                })) : this.getFormElement().submit()
            },
            onSubmit: function() {
                var e = r.call(this),
                    t = n(167).getFilters();
                this.selectedItemIndex < 1 && e && (this.formulatingSearch = !1, a({
                    click_name: "search_formulation_end",
                    click_attributes: {
                        q: e
                    }
                }), n(54).get("router").navigateToRoute("search", [this.category, e, t], {
                    trigger: !0
                }), this.getInput().blur())
            },
            onLayoutChange: function(e) {
                "search" === e.layoutName ? (this.replaceInputValue(n(167).getValidParams(n(65).parse(window.location.href).query).q), this.category = e.args.category) : (this.replaceInputValue(""), this.category = null)
            },
            trackClick: function(e) {
                var t = e.queryUrn,
                    n = e.shortcut,
                    i = n.model;
                this.formulatingSearch = !1;
                var o = r.call(this),
                    s = o ? {
                        q: o
                    } : null;
                i.isQuery() ? a({
                    click_name: "search_formulation_end",
                    query_position: n.index,
                    query_urn: t,
                    click_attributes: s
                }) : (s.source = "search-autocomplete", a({
                    click_name: "item_navigation",
                    click_object: i.resource ? i.resource.getUrn() : null,
                    query_position: n.index,
                    query_urn: t,
                    click_attributes: s
                }))
            }
        })
    },
    785: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".autocompleteItem{padding:0}.autocompleteItem>a{display:block;padding:10px 40px 10px 14px;position:relative}.autocompleteItem__title{line-height:20px}.autocompleteItem__title>b{color:#fff}.autocompleteItem__icon{position:absolute;top:9px;right:14px}.autocompleteItem__queryIcon{height:20px;width:20px;background-image:url(" + n(1651) + ");background-size:17px 17px;background-repeat:no-repeat;background-position:center}", ""])
    },
    786: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".searchAutocomplete>.loading{background-color:#333;padding:5px 0}", ""])
    },
    787: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".searchMenu .loading{background-color:#333;padding:5px 0}.searchMenu__item{padding:0}.searchMenu__searchFor{padding:0;background-color:#333;border-bottom:1px solid rgba(0,0,0,.22);border-left:1px solid #404040;border-right:1px solid #404040;text-align:left;box-shadow:0 1px 0 rgba(255,255,255,.05)}.searchMenu__searchFor.g-dark-selected{background-color:#262626}.searchMenu__searchFor a{display:block;padding:10px 10px 10px 14px}", ""])
    },
    788: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".headerSearch{padding:9px 10px 8px;position:relative;appearance:none}.headerSearch__input{width:100%}.headerSearch__submit{border:0;padding:0;background:url(" + n(1652) + ") 0 0 no-repeat;width:15px;height:15px;position:absolute;right:20px;top:15px}.headerSearch__submit:focus{outline:0}.headerSearch__input{height:28px}", ""])
    },
    1167: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                return '    <div class="sc-media-image autocompleteItem__queryIcon"></div>\n'
            },
            3: function(e, t, i, r, a) {
                return '    <div class="sc-media-image">\n      ' + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(86), {
                    name: "$view",
                    hash: {
                        size: 20,
                        resource_type: null != t ? t.entityResourceType : t,
                        resource_id: null != t ? t.entityResourceId : t
                    },
                    data: a
                })) + "\n    </div>\n"
            },
            5: function(e, t, i, r, a) {
                return "    " + e.escapeExpression((n(199) || t && t.$icon || i.helperMissing).call(null != t ? t : {}, {
                    name: "$icon",
                    hash: {
                        "class": "autocompleteItem__icon",
                        type: null != t ? t.iconName : t,
                        size: "large"
                    },
                    data: a
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var a, o, s = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '<a class="sc-media sc-media-type-' + c((o = null != (o = n.iconName || (null != t ? t.iconName : t)) ? o : l, typeof o === u ? o.call(s, {
                    name: "iconName",
                    hash: {},
                    data: r
                }) : o)) + '" href="' + c((o = null != (o = n.link || (null != t ? t.link : t)) ? o : l, typeof o === u ? o.call(s, {
                    name: "link",
                    hash: {},
                    data: r
                }) : o)) + '">\n' + (null != (a = n["if"].call(s, null != t ? t.isQuery : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.program(3, r, 0),
                    data: r
                })) ? a : "") + '  <div class="sc-media-content">\n    <h2 class="autocompleteItem__title sc-truncate sc-type-h3 sc-type-light">' + (null != (o = null != (o = n.title || (null != t ? t.title : t)) ? o : l, a = typeof o === u ? o.call(s, {
                    name: "title",
                    hash: {},
                    data: r
                }) : o) ? a : "") + "</h2>\n  </div>\n\n" + (null != (a = n.unless.call(s, null != t ? t.isQuery : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? a : "") + "</a>\n"
            },
            useData: !0
        })
    },
    1168: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, a) {
                var o;
                return '  <div class="searchMenu__searchFor sc-type-small" role="option">\n    <a href="' + e.escapeExpression((n(57) || t && t.$route || i.helperMissing).call(null != t ? t : {}, "search", "", null != (o = null != t ? t._options : t) ? o.query : o, {
                    name: "$route",
                    hash: {},
                    data: a
                })) + '" class="sc-truncate searchMenu__searchForText"></a>\n  </div>\n'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, a) {
                var o, s = null != t ? t : {};
                return (null != (o = i.unless.call(s, null != t ? t.isQueryEmpty : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? o : "") + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(s, n(668), {
                    name: "$view",
                    hash: {
                        key: "list",
                        query: null != (o = null != t ? t._options : t) ? o.query : o
                    },
                    data: a
                })) + "\n\n"
            },
            useData: !0
        })
    },
    1169: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, a) {
                var o, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<input\n  class="headerSearch__input sc-input"\n  placeholder="' + u((o = null != (o = i.placeholderText || (null != t ? t.placeholderText : t)) ? o : l, "function" == typeof o ? o.call(s, {
                    name: "placeholderText",
                    hash: {},
                    data: a
                }) : o)) + '"\n  type="search"\n  name="q"\n  autocomplete="off"\n  aria-label="' + u((n(51) || t && t.$t || l).call(s, "Search", {
                    name: "$t",
                    hash: {},
                    data: a
                })) + '">\n<button class="headerSearch__submit submit sc-ir" type="submit">' + u((n(51) || t && t.$t || l).call(s, "Search", {
                    name: "$t",
                    hash: {},
                    data: a
                })) + "</button>\n"
            },
            useData: !0
        })
    },
    1257: function(e, t, n) {
        var i = n(785);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    1258: function(e, t, n) {
        var i = n(786);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    1259: function(e, t, n) {
        var i = n(787);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    1260: function(e, t, n) {
        var i = n(788);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    1750: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = n(e ? 1986 : 1985);
            return this.setViews({
                "l-front-hero": [t],
                "l-front-content": [n(1987)],
                "l-front-mobile-teaser": [n(414)],
                "l-front-osc-teaser": [n(1988)],
                "l-front-signup-teaser": [n(1989)],
                "l-front-footer": [n(223), {
                    content: "frontPage",
                    style: "marketing"
                }]
            })
        }
        e.exports = n(105).extend({
            template: n(1604),
            css: n(1629),
            displayHeader: !1,
            tracking: {
                pageName: "homepage:main"
            },
            setup: function() {
                var e = this;
                this.setTitle(n(50).t("SoundCloud – Listen to free music and podcasts on SoundCloud"), {
                    withoutSuffix: !0
                });
                var t = new(n(84))({
                        id: n(77).productIds.CONSUMER_SUBSCRIPTION_HIGH_TIER
                    }),
                    r = n(55).defer();
                return t.fetch().then(function() {
                    return i.call(e, t.isActive())
                }, function() {
                    return i.call(e, !1), n(55).resolve()
                }).then(r.resolve), r
            }
        })
    },
    1985: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend({
            template: n(3104),
            className: "frontHero"
        })
    },
    1986: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                this._isAnimating && (this._isAnimating = !1, this._currentSlide === this._totalSlides - 1 && (this._currentSlide = 0, this.setCarouselPosition()), this.setCarouselNav())
            }

            function r(e) {
                var n = t(e.target).index();
                this.showSlide(n), window.clearInterval(this._slideInterval), this.runCarousel()
            }

            function a(e) {
                window.clearInterval(this._slideInterval), this._slideInterval = null
            }

            function o(e) {
                this._slideInterval || this.runCarousel()
            }
            var s = n(77).productIds;
            e.exports = n(53).extend({
                className: "frontHero",
                template: n(3105),
                events: {
                    "transitionend .frontHero__carousel": i,
                    "click .frontHero__carouselNavDot": r,
                    "mouseenter .frontHero__container": a,
                    "mouseleave .frontHero__container": o
                },
                element2selector: {
                    carousel: ".frontHero__carousel",
                    carouselNav: ".frontHero__carouselNav"
                },
                states: {
                    eu: "m-eu"
                },
                _slideInterval: null,
                _isAnimating: !1,
                _currentSlide: 0,
                _totalSlides: 0,
                _slideWidth: 0,
                _$selectedCarouselNav: null,
                setup: function() {
                    this.model = new(n(84))({
                        id: s.CONSUMER_SUBSCRIPTION_HIGH_TIER
                    }), this.toggleState("eu", n(89).isEUCountry(n(54).get("geoip").get("country_code")))
                },
                getTemplateData: function(e) {
                    return e.isTrial = this.model.isTrial(), e
                },
                renderDecorate: function() {
                    var e = this.getElement("carousel"),
                        t = e.children(),
                        n = t.first().clone();
                    n.appendTo(e), t = t.add(n), this._totalSlides = t.length, this._slideWidth = 100 / this._totalSlides, t.css("width", this._slideWidth + "%"), this.setCarouselNav(), this.setCarouselPosition(), this.runCarousel()
                },
                runCarousel: function() {
                    var e = this;
                    this._slideInterval = window.setInterval(function() {
                        window.requestAnimationFrame(function() {
                            e.disposed || e.showSlide((e._currentSlide + 1) % e._totalSlides)
                        })
                    }, 4e3)
                },
                showSlide: function(e) {
                    if (!this._isAnimating) {
                        this._isAnimating = !0, this._currentSlide = e;
                        var t = this.getElement("carousel");
                        this._$selectedCarouselNav.css("background", "transparent"), t.css({
                            transform: "translateX(-" + this._currentSlide * this._slideWidth + "%)"
                        })
                    }
                },
                setCarouselPosition: function() {
                    var e = this.getElement("carousel"),
                        t = e.children();
                    e.css({
                        transform: "translateX(-" + this._currentSlide * this._slideWidth + "%)",
                        transition: "none",
                        width: 100 * this._totalSlides + "%"
                    }), t.find("a, button").attr("tabindex", "-1"), t.eq(this._currentSlide).find("a, button").attr("tabindex", "0"), window.getComputedStyle(e.get(0)).transform, e.css("transition", "transform 0.6s ease-in-out 0s")
                },
                setCarouselNav: function() {
                    var e = this.getElement("carouselNav");
                    this._$selectedCarouselNav = e.children().eq(this._currentSlide), this._$selectedCarouselNav.css("background", "#fff")
                }
            })
        }).call(t, n(1))
    },
    1987: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend({
            template: n(3106),
            css: n(3514),
            className: "frontContent"
        })
    },
    1988: function(e, t, n) {
        "use strict";
        var i = n(58).trackFrontPageClick;
        e.exports = n(53).extend({
            template: n(3107),
            css: n(3515),
            className: "onSoundCloudTeaser",
            events: {
                "click .onSoundCloudTeaser__cta": "onCtaClick"
            },
            onCtaClick: function() {
                i({
                    click_name: "osc_info"
                })
            }
        })
    },
    1989: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend({
            template: n(3108),
            css: n(3516),
            className: "signupModule"
        })
    },
    1990: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend({
            template: n(3109),
            css: n(3517),
            className: "trendingTracks",
            defaults: {
                limit: 12
            }
        })
    },
    2493: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, '.frontContent__actions{margin:49px 0 12px 0;font-size:16px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.frontContent__actions .headerSearch{padding:0;display:inline-block;width:600px;margin-right:14px}.frontContent__actions input[type="search"],.frontContent__actions input[type="search"]:focus{background:#f2f2f2;padding:0 16px;height:46px}.frontContent__search .headerSearch__input::-webkit-input-placeholder{font-size:16px;color:#999}.frontContent__search .headerSearch__input:-ms-input-placeholder{font-size:16px;color:#999}.frontContent__search .headerSearch__input::placeholder{font-size:16px;color:#999}.frontContent__actions .headerSearch__submit{background-size:19px 19px;background-position:center center;top:0;right:0;width:50px;height:46px}.frontContent__uploadButton{margin-left:14px;padding:13px 23px;height:46px}', ""])
    },
    2494: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".onSoundCloudTeaser{position:relative;height:350px;background-color:#892621;background-image:url(" + n(2864) + ");background-size:cover;background-position:right;color:#fff;-webkit-font-smoothing:antialiased;padding:0 570px 0 70px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.onSoundCloudTeaser__wrapper{max-width:520px}.onSoundCloudTeaser__title{font-size:36px;font-weight:100}.onSoundCloudTeaser__text{font-size:24px;line-height:1.35;margin:11px 0 26px}.onSoundCloudTeaser__cta{font-size:18px;padding:13px 24px;height:46px}@media screen and (max-width:1079px){.onSoundCloudTeaser__title{font-size:24px}.onSoundCloudTeaser__text{font-size:18px}}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi),(min-resolution:2dppx){.onSoundCloudTeaser{background-image:url(" + n(2865) + ");background-size:cover}}", ""])
    },
    2495: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".signupModule{text-align:center;height:375px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.signupModule__title{font-size:36px}.signupModule__copy{font-size:24px;margin-top:7px}.signupModule__login{margin:10px 0 10px}.signupModule__signIn{margin:5px 0 10px}.signupModule__signupCta{-webkit-font-smoothing:antialiased;font-size:18px;height:46px;padding:13px 23px;min-width:200px}.signupModule .loginButton{margin-left:10px;vertical-align:middle}", ""])
    },
    2496: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".trendingTracks{padding-bottom:10px}.trendingTracks__title{font-size:24px;text-align:center;padding-top:20px;margin-bottom:30px}.trendingTracks__cta{text-align:center;margin-top:5px}.trendingTracks__ctaButton{font-size:18px;height:46px;padding:13px 23px}", ""])
    },
    2864: function(e, t, n) {
        e.exports = n.p + "assets/images/home/hp_creator_image-e08dee4.jpg"
    },
    2865: function(e, t, n) {
        e.exports = n.p + "assets/images/home/hp_creator_image@2x-4a7581d.jpg"
    },
    3104: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, a) {
                var o = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '<div class="frontHero__content frontHero__listenerSlide">\n  <h2 class="frontHero__title">' + l((n(51) || t && t.$t || s).call(o, "Connect on SoundCloud", {
                    name: "$t",
                    hash: {},
                    data: a
                })) + '</h2>\n  <p class="frontHero__tagline sc-type-large">\n    ' + l((n(51) || t && t.$t || s).call(o, "Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the world.", {
                    name: "$t",
                    hash: {},
                    data: a
                })) + '\n  </p>\n  <div class="frontHero__cta">\n    ' + l((n(52) || t && t.$view || s).call(o, n(136), {
                    name: "$view",
                    hash: {
                        text: (n(51) || t && t.$t || s).call(o, "Sign up for free", {
                            name: "$t",
                            hash: {},
                            data: a
                        }),
                        type: "signup",
                        className: "frontHero__ctaButton sc-button sc-button-cta"
                    },
                    data: a
                })) + '\n  </div>\n</div>\n\n<h1 class="frontHero__logo">SoundCloud</h1>\n\n<div class="frontHero__signin">\n  ' + l((n(52) || t && t.$view || s).call(o, n(136), {
                    name: "$view",
                    hash: {
                        className: "frontHero__loginButton g-button-transparent-inverted"
                    },
                    data: a
                })) + "\n  " + l((n(52) || t && t.$view || s).call(o, n(136), {
                    name: "$view",
                    hash: {
                        text: (n(51) || t && t.$t || s).call(o, "Create account", {
                            name: "$t",
                            hash: {},
                            data: a
                        }),
                        type: "signup",
                        className: "frontHero__createAccountButton"
                    },
                    data: a
                })) + '\n  <a href="https://creators.soundcloud.com?utm_source=anon_sc_hp&utm_medium=cta" target="_blank" class="frontHero__creatorsButton g-button-transparent-inverted sc-button sc-button-medium">\n    ' + l((n(51) || t && t.$t || s).call(o, "For Creators", {
                    name: "$t",
                    hash: {},
                    data: a
                })) + "\n  </a>\n</div>\n"
            },
            useData: !0
        })
    },
    3105: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, a) {
                var o = null != t ? t : {},
                    s = i.helperMissing;
                return "          " + e.escapeExpression((n(52) || t && t.$view || s).call(o, n(270), {
                    name: "$view",
                    hash: {
                        tcode: "t1032",
                        className: "frontHero__ctaButton sc-button-cta",
                        size: "large",
                        text: (n(51) || t && t.$t || s).call(o, "Try it free for 30 days", {
                            name: "$t",
                            hash: {},
                            data: a
                        })
                    },
                    data: a
                })) + "\n"
            },
            3: function(e, t, i, r, a) {
                var o = null != t ? t : {},
                    s = i.helperMissing;
                return "          " + e.escapeExpression((n(52) || t && t.$view || s).call(o, n(270), {
                    name: "$view",
                    hash: {
                        tcode: "t1032",
                        className: "frontHero__ctaButton sc-button-cta",
                        size: "large",
                        text: (n(51) || t && t.$t || s).call(o, "Purchase now", {
                            name: "$t",
                            hash: {},
                            data: a
                        })
                    },
                    data: a
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, a) {
                var o, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<div class="frontHero__container">\n\n  <div class="frontHero__carousel">\n    <div class="frontHero__content frontHero__listenerSlide">\n      <div class="frontHero__title sc-font-light">' + u((n(51) || t && t.$t || l).call(s, "Discover more with SoundCloud Go+", {
                    name: "$t",
                    hash: {},
                    data: a
                })) + '</div>\n      <p class="frontHero__tagline sc-type-large">\n        ' + u((n(51) || t && t.$t || l).call(s, "SoundCloud Go+ lets you listen offline, ad-free, with over 150 million tracks &mdash; and growing.", {
                    name: "$t",
                    hash: {},
                    data: a
                })) + '\n      </p>\n      <div class="frontHero__cta">\n        ' + u((n(52) || t && t.$view || l).call(s, n(407), {
                    name: "$view",
                    hash: {
                        tcode: "t1033",
                        tagName: "a",
                        text: (n(51) || t && t.$t || l).call(s, "Learn more", {
                            name: "$t",
                            hash: {},
                            data: a
                        }),
                        className: "frontHero__learnButton g-button-transparent-inverted"
                    },
                    data: a
                })) + "\n" + (null != (o = i["if"].call(s, null != t ? t.isTrial : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.program(3, a, 0),
                    data: a
                })) ? o : "") + '      </div>\n    </div>\n    <div class="frontHero__content frontHero__creatorSlide">\n      <h2 class="frontHero__title">' + u((n(51) || t && t.$t || l).call(s, "What's next in music is first on SoundCloud", {
                    name: "$t",
                    hash: {},
                    data: a
                })) + '</h2>\n      <p class="frontHero__tagline sc-type-large">\n        ' + u((n(51) || t && t.$t || l).call(s, "Upload your first track and begin your journey. SoundCloud gives you space to create, find your fans, and connect with other artists.", {
                    name: "$t",
                    hash: {},
                    data: a
                })) + '\n      </p>\n      <div class="frontHero__cta">\n        <a type="button" class="frontHero__ctaButton sc-button sc-button-cta sc-button-large sc-button-responsive" href="' + u((n(57) || t && t.$route || l).call(s, "upload", {
                    name: "$route",
                    hash: {},
                    data: a
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Start uploading today", {
                    name: "$t",
                    hash: {},
                    data: a
                })) + '\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <div class="frontHero__carouselNav">\n    <div class="frontHero__carouselNavDot"></div>\n    <div class="frontHero__carouselNavDot"></div>\n  </div>\n\n  <h1 class="frontHero__logo">SoundCloud</h1>\n\n  <div class="frontHero__signin">\n    ' + u((n(52) || t && t.$view || l).call(s, n(136), {
                    name: "$view",
                    hash: {
                        className: "frontHero__loginButton g-button-transparent-inverted"
                    },
                    data: a
                })) + "\n    " + u((n(52) || t && t.$view || l).call(s, n(136), {
                    name: "$view",
                    hash: {
                        text: (n(51) || t && t.$t || l).call(s, "Create account", {
                            name: "$t",
                            hash: {},
                            data: a
                        }),
                        type: "signup",
                        className: "frontHero__createAccountButton"
                    },
                    data: a
                })) + '\n    <a href="https://creators.soundcloud.com?utm_source=anon_sc_hp&utm_medium=cta" target="_blank" class="frontHero__creatorsButton g-button-transparent-inverted sc-button sc-button-medium">\n      ' + u((n(51) || t && t.$t || l).call(s, "For Creators", {
                    name: "$t",
                    hash: {},
                    data: a
                })) + "\n    </a>\n  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    3106: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, a) {
                var o = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '<div class="frontContent__actions">\n  ' + l((n(51) || t && t.$t || s).call(o, '<span class="frontContent__search g-dark">[[[search]]]</span> or <a href="[[uploadHref]]" class="frontContent__uploadButton sc-button sc-button-cta sc-button-large">Upload your own</a>', {
                    name: "$t",
                    hash: {
                        uploadHref: (n(57) || t && t.$route || s).call(o, "upload", {
                            name: "$route",
                            hash: {},
                            data: a
                        }),
                        search: (n(52) || t && t.$view || s).call(o, n(670), {
                            name: "$view",
                            hash: {},
                            data: a
                        })
                    },
                    data: a
                })) + "\n</div>\n\n" + l((n(52) || t && t.$view || s).call(o, n(1990), {
                    name: "$view",
                    hash: {},
                    data: a
                })) + "\n"
            },
            useData: !0
        })
    },
    3107: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, a) {
                var o = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '<div class="onSoundCloudTeaser__wrapper">\n  <div class="onSoundCloudTeaser__title sc-font-light">' + l((n(51) || t && t.$t || s).call(o, "Calling all creators", {
                    name: "$t",
                    hash: {},
                    data: a
                })) + '</div>\n\n  <p class="onSoundCloudTeaser__text sc-type-large">\n    ' + l((n(51) || t && t.$t || s).call(o, "Get on SoundCloud to connect with fans, share your sounds, and grow your audience. What are you waiting for?", {
                    name: "$t",
                    hash: {},
                    data: a
                })) + '\n  </p>\n\n  <div>\n    <a class="onSoundCloudTeaser__cta sc-button sc-button-large g-button-transparent-inverted"\n       href="https://creators.soundcloud.com"\n       target="_blank">\n      ' + l((n(51) || t && t.$t || s).call(o, "Find out more", {
                    name: "$t",
                    hash: {},
                    data: a
                })) + "\n    </a>\n  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    3108: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, a) {
                var o = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '<div class="signupModule__title sc-font-light">\n  ' + l((n(51) || t && t.$t || s).call(o, "Thanks for listening. Now join in.", {
                    name: "$t",
                    hash: {
                        _comment: "This is an idiom in English, meaning 'thanks for hearing what we had to say', rather than actively listening to a track."
                    },
                    data: a
                })) + '\n</div>\n\n<p class="signupModule__copy sc-type-large">\n  ' + l((n(51) || t && t.$t || s).call(o, "Save tracks, follow artists and build playlists. All for free.", {
                    name: "$t",
                    hash: {},
                    data: a
                })) + '\n  </p>\n\n<p class="signupModule__login">\n  ' + l((n(52) || t && t.$view || s).call(o, n(136), {
                    name: "$view",
                    hash: {
                        size: "large",
                        text: (n(51) || t && t.$t || s).call(o, "Create account", {
                            name: "$t",
                            hash: {},
                            data: a
                        }),
                        type: "signup",
                        className: "signupModule__signupCta"
                    },
                    data: a
                })) + '\n</p>\n\n <p class="signupModule__signIn sc-font-light">\n  ' + l((n(51) || t && t.$t || s).call(o, "Already have an account?", {
                    name: "$t",
                    hash: {},
                    data: a
                })) + " " + l((n(52) || t && t.$view || s).call(o, n(136), {
                    name: "$view",
                    hash: {
                        size: "large"
                    },
                    data: a
                })) + "\n </p>\n"
            },
            useData: !0
        })
    },
    3109: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, a) {
                var o, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<div class="trendingTracks__title sc-font-light">' + u((n(51) || t && t.$t || l).call(s, "Hear what’s trending for free in the SoundCloud community", {
                    name: "$t",
                    hash: {},
                    data: a
                })) + "</div>\n\n" + u((n(52) || t && t.$view || l).call(s, n(187), {
                    name: "$view",
                    hash: {
                        playQueuePriority: 1,
                        showPlaceholders: !1,
                        maxDisplay: null != (o = null != t ? t._options : t) ? o.limit : o,
                        pageName: "front",
                        type: "featured-tracks"
                    },
                    data: a
                })) + '\n\n<div class="trendingTracks__cta"><a class="trendingTracks__ctaButton sc-button sc-button-large sc-button-cta" href="' + u((n(57) || t && t.$route || l).call(s, "home", {
                    name: "$route",
                    hash: {},
                    data: a
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Explore trending playlists", {
                    name: "$t",
                    hash: {},
                    data: a
                })) + "</a></div>\n"
            },
            useData: !0
        })
    },
    3514: function(e, t, n) {
        var i = n(2493);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3515: function(e, t, n) {
        var i = n(2494);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3516: function(e, t, n) {
        var i = n(2495);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3517: function(e, t, n) {
        var i = n(2496);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    }
}); //# sourceMappingURL=http://ent/web-sourcemaps/24-1113f3c-79a08b1-3.js.map