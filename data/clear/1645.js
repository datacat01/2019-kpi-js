! function() {
    function e(t, i, r) {
        function n(o, a) {
            if (!i[o]) {
                if (!t[o]) {
                    var h = "function" == typeof require && require;
                    if (!a && h) return h(o, !0);
                    if (s) return s(o, !0);
                    var u = new Error("Cannot find module '" + o + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = i[o] = {
                    exports: {}
                };
                t[o][0].call(c.exports, function(e) {
                    return n(t[o][1][e] || e)
                }, c, c.exports, e, t, i, r)
            }
            return i[o].exports
        }
        for (var s = "function" == typeof require && require, o = 0; o < r.length; o++) n(r[o]);
        return n
    }
    return e
}()({
    1: [function(e, t, i) {
        "use strict";
        ! function(e) {
            var t = window.imkt || (window.imkt = {});
            t.utils = t.utils || {}, t.bitbucket = t.bitbucket || {}, t.bitbucket.CoreJs = function(t, i) {
                this.$domRoot = e("body"), this.$userTierSelect = e("[name^='usersSelectDropdown']", this.$domRoot), this.heroPhrases = e(".hero-phrase--animated").map(function(t, i) {
                    return e(i).text()
                }), this.heroPhraseContainer = e(".hero-phrase--animated:first-child"), this.heroPhrasesCounter = 1, window.imkt.watAdgBB = this, this.init()
            }, t.bitbucket.CoreJs.prototype = {
                init: function() {
                    var i = this;
                    e("body").hasClass("edit") || (this.$userTierSelect.length && !this.isMobile() && e.getScript(t.constants.libPath + "select2/select2.min.js" + t.constants.cdnVersionQuery).done(function() {
                        i.$userTierSelect.each(function() {
                            e(this).select2({
                                minimumResultsForSearch: -1
                            })
                        })
                    }), this.bindEvents(), this.initPhraseLoop())
                },
                bindEvents: function() {
                    this.$userTierSelect.on("change", function() {
                        var i = e(this),
                            r = e(this).val().split(","),
                            n = r[0],
                            s = r[1],
                            o = /(\d+|unlimited)(?=\_users)/i;
                        if (i.parents(".pricing-column").find(".monthlyPricing").text(t.utils.general.numberWithCommas(s)), e(".pricing-column.cloud").is(":visible")) {
                            var a = i.parents(".pricing-column.cloud").find("a.button");
                            a.attr("href", a.attr("href").replace(o, n))
                        }
                    }), e(".feature-roll-over").on("mouseenter", function() {
                        var t = e(this).data("custom");
                        e(".feature-roll-over--image, .feature-roll-over").removeClass("active"), e("." + t).addClass("active"), e(this).addClass("active")
                    })
                },
                initPhraseLoop: function() {
                    setInterval(this.initPhraseTransition.bind(this), 5e3)
                },
                swapPhrase: function() {
                    var e = this.heroPhrases[this.heroPhrasesCounter];
                    this.heroPhraseContainer.text(e), this.heroPhraseContainer.fadeIn(500), this.heroPhrasesCounter < this.heroPhrases.length - 1 ? this.heroPhrasesCounter++ : this.heroPhrasesCounter = 0
                },
                initPhraseTransition: function() {
                    this.heroPhraseContainer.fadeOut(500, this.swapPhrase.bind(this))
                },
                isMobile: function() {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                }
            }, e(function() {
                new t.bitbucket.CoreJs
            })
        }(jQuery)
    }, {}]
}, {}, [1]);