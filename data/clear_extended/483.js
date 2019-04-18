/*
 *  (c) 2000-2017 deviantART, Inc. All rights reserved.
 */
DWait.ready(["jms/lib/jquery/jquery.current.js", "jms/lib/pubsub.js", "jms/lib/browser.js"], function() {
    var i = {
        $body: null,
        $navbar: null,
        $navbarContainer: null,
        $sidebar: null,
        $sidebarContainer: null,
        $jumpToTop: null,
        $sidebarSpacer: null,
        useStickySidebar: !1,
        paused: !1,
        updatingDOM: !1,
        oldPageXOffset: 0,
        oldPageYOffset: 0,
        navbarIsSticky: !1,
        sidebarIsSticky: !1,
        navbarStaticTop: 0,
        sidebarStickyTop: 0,
        sidebarStickyBottom: 0,
        lastSidebarPositionTop: 0,
        init: function() {
            this.$body = $("body"), this.$navbarContainer = $("#navbar-menu"), this.$navbar = $("#navbar-menu .navbar-menu-inner"), this.$sidebarContainer = $(".browse-container"), this.$sidebarSpacer = $("#browse-sidemenu .browse-left-bar-spacer"), this.$sidebar = $(".browse-left-bar-inner"), this.$jumpToTop = $("#navbar-menu .jump-to-top"), (this.$navbarContainer.length || (this.$navbarContainer = this.$navbar = $("#head"), this.$navbarContainer)) && (this.useStickySidebar = this.isSidebarOpen(), this.bindEvents(), this.updateDOM())
        },
        bindEvents: function() {
            $(window).on("resize scroll", function(i) {
                this.paused || this.updatingDOM || (this.updatingDOM = !0, window.requestAnimationFrame ? window.requestAnimationFrame(this.updateDOM.bind(this, i.type)) : window.setTimeout(this.updateDOM.bind(this, i.type), 20))
            }.bind(this)), this.$jumpToTop.on("click", function() {
                $("html, body").animate({
                    scrollTop: 0
                })
            }), PubSub.subscribe([{
                eventname: "Browse.sidebar_toggle",
                subscriber: this,
                callback: function(i, t) {
                    this.toggleSidebarStickiness(t)
                }
            }, {
                eventname: "MinibrowseView.take_over_page",
                subscriber: this,
                callback: function() {
                    this.paused || this.pause()
                }
            }, {
                eventname: "MinibrowseView.restore_page",
                subscriber: this,
                callback: function() {
                    this.unpause()
                }
            }, {
                eventname: "Signup.headerRefresh",
                subscriber: this,
                callback: function() {
                    this.init()
                }
            }])
        },
        updateDOM: function(i) {
            this.$navbarContainer.length && ("scroll" != i && (this.navbarStaticTop = this.$navbarContainer.offset().top, this.sidebarStickyTop = this.$navbar.outerHeight(), this.sidebarStickyBottom = $(window).height()), this.updateNavbarDOM(), this.updateSidebarDOM(), this.updatingDOM = !1, this.oldPageXOffset = window.pageXOffset, this.oldPageYOffset = window.pageYOffset)
        },
        updateNavbarDOM: function() {
            window.pageYOffset > this.navbarStaticTop && !this.paused ? (this.navbarIsSticky || (this.navbarIsSticky = !0, this.$navbar.addClass("sticky"), this.$navbar.css("min-width", this.$body.css("min-width"))), this.$navbar.css("left", -window.pageXOffset)) : this.navbarIsSticky && (this.navbarIsSticky = !1, this.$navbar.removeClass("sticky").css({
                top: "",
                left: "",
                "min-width": ""
            }))
        },
        updateSidebarDOM: function() {
            if (window.pageYOffset > this.navbarStaticTop && this.useStickySidebar && !this.paused) {
                this.sidebarIsSticky || (this.sidebarIsSticky = !0, this.$sidebarSpacer.height(this.$sidebar.height() + this.$navbar.height()), this.$sidebar.addClass("sticky"));
                var i = this.calculateStickySidebarTop();
                if (i == this.lastSidebarPositionTop) return;
                this.$sidebar.css("top", i), this.lastSidebarPositionTop = i + 1 - 1, this.$sidebar.css("left", -window.pageXOffset)
            } else this.sidebarIsSticky && (this.sidebarIsSticky = !1, this.$sidebarSpacer.height(""), this.$sidebar.removeClass("sticky").css({
                top: "",
                left: ""
            }), this.lastSidebarPositionTop = 0)
        },
        calculateStickySidebarTop: function() {
            var i = this.$sidebar[0].getBoundingClientRect(),
                t = this.$sidebarContainer[0].getBoundingClientRect(),
                s = i.top - (window.pageYOffset - this.oldPageYOffset);
            return s = Math.max(s, this.sidebarStickyBottom - i.height), s = Math.min(s, this.sidebarStickyTop), s = Math.min(s, t.bottom - i.height), s = Math.max(s, t.top)
        },
        isSidebarOpen: function() {
            return this.$sidebar.is(":visible")
        },
        toggleSidebarStickiness: function(i) {
            this.useStickySidebar = i, this.updateDOM()
        },
        pause: function() {
            this.paused = !0, this.updateDOM()
        },
        unpause: function() {
            this.paused = !1, this.updateDOM()
        }
    };
    Browser.isTouch || i.init(), window.DWait && DWait.run("jms/pages/browse-scroll.js")
});
if (window.DWait) {
    DWait.count()
}