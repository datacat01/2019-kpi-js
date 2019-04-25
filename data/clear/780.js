fourSq.HomePage = function(a, c) {};
fourSq.HomePage = fourSq.corps.Page.extend({
    initialize: function(a) {
        fourSq.HomePage.__super__.initialize.call(this, a);
        this.productsPanelPrefix = "productsPanel";
        this.$el.find(".selectbox").select2({});
        this.selectedValue = "all";
        this.$seeAllBtn = this.$el.find(".showAllButton");
        this.$seeAllBtn2 = this.$el.find(".seeAllButtonLeft");
        this.decorate();
        this.setUpModal();
        this.setUpFooter();
        this.positionToolTip();
        this.cityGuidePopUp()
    },
    decorate: function() {
        var a = this.$el.find("." + this.productsPanelPrefix + "__solution"),
            c = this.$el.find(".fastlane__object"),
            b = this.$el.find(".battlecard__supportText");
        this.hideSupportTextOnMobile(b);
        c.click(fourSq.bind(function(b) {
            switch (b.currentTarget.name) {
                case "marketersBtn":
                    this.scrollTo(a[0]);
                    break;
                case "developersBtn":
                    this.scrollTo(a[1]);
                    break;
                case "explorersBtn":
                    this.scrollTo(a[2])
            }
        }, this));
        $(window).resize(fourSq.bind(function() {
            "all" === this.selectedValue ? this.hideSupportTextOnMobile(b) : this.showElement(b)
        }, this));
        this.$seeAllBtn.click(fourSq.bind(function() {
            this.hideSeeAllButton();
            this.showElement(a)
        }, this));
        this.$seeAllBtn2.click(fourSq.bind(function() {
            this.showElement(a);
            this.hideElement(this.$seeAllBtn2)
        }, this));
        a.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
            $(this).removeClass("slide-up-fade-in")
        });
        this.$el.find("select.selectbox").change(fourSq.bind(function() {
            this.selectedValue = this.$el.find("select.selectbox").children("option:selected").val();
            this.hideElement(a);
            this.hideSeeAllButton();
            if ("all" === this.selectedValue) this.hideElement(this.$seeAllBtn2),
                a.removeClass("hide").addClass("slide-up-fade-in"), this.hideSupportTextOnMobile(b);
            else {
                var c = $("." + this.selectedValue);
                c.removeClass("hide");
                c.addClass("slide-up-fade-in");
                this.showElement(this.$seeAllBtn2);
                this.showElement(b)
            }
        }, this))
    },
    hideSeeAllButton: function() {
        var a = this.$el.find(".showAllBackground"),
            c = this.$el.find(".exploreModule");
        this.hideElement(a);
        this.hideElement(this.$seeAllBtn);
        c.css("height", "unset")
    },
    setUpModal: function() {
        new fourSq.views.ContactFormModal({
            ctaButton: $(".nextStepModule .homepage-contactFormBtn")
        })
    },
    setUpFooter: function() {
        new fourSq.views.Footer
    },
    positionToolTip: function() {
        var a = this.$el.find(".customers-item__tooltip"),
            c = this.$el.find(".customers-item");
        c.mouseover(fourSq.bind(function(b) {
            b = $(b.currentTarget);
            var c = $(a[b.index()]);
            this.shouldShowToolTipOnBottom(b) ? c.addClass("tooltipdown") : c.addClass("tooltipup")
        }, this));
        c.mouseleave(function(b) {
            b = $(b.currentTarget);
            $(a[b.index()]).removeClass("tooltipdown tooltipup")
        })
    },
    shouldShowToolTipOnBottom: function(a) {
        a = a.offset().top;
        var c = $(window).scrollTop() +
            250;
        return a < c
    },
    cityGuidePopUp: function() {
        var a = this.$el.find(".cityGuide__close"),
            c = this.$el.find(".cityGuide");
        a.click(fourSq.bind(function() {
            this.hideElement(c)
        }, this))
    },
    showElement: function(a) {
        a.removeClass("hide").addClass("show")
    },
    hideElement: function(a) {
        a.removeClass("show").addClass("hide")
    },
    scrollTo: function(a) {
        this.hideSeeAllButton();
        this.$seeAllBtn2.click();
        a.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start"
        })
    },
    hideSupportTextOnMobile: function(a) {
        880 > Math.max(document.documentElement.clientWidth,
            window.innerWidth || 0) ? this.hideElement(a) : this.showElement(a)
    },
    pageViewName: function() {
        return fourSq.stats.action.View.DOTCOM
    }
});