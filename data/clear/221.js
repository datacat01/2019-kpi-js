(function(a) {
    var c = a(".reuters-logo a"),
        b = a(".header-mini-logo"),
        f = a(".nav-item a"),
        d = a(".home-icon"),
        e = a("#breakingNewsContainer a"),
        g = a(".edition-list a");
    a("#utilities");
    var h = a("#searchbox");
    a(".footer-links");
    var k = a(".newsletter-module .nl-signup");
    a = a(".article-info .article-section");
    c.on("mousedown", logoClick);
    b.on("mousedown", stickyLogoClick);
    f.on("mousedown", navClick);
    d.on("mousedown", homeIconClick);
    e.on("mousedown", breakingNewsClick);
    g.on("mousedown", editionListClick);
    h.on("mousedown",
        "#search-submit-button", searchClick);
    k.on("mousedown", newsletterModuleTracking);
    a.on("mousedown", articleChannelClick);
    moduleTracking()
})(jQuery);

function logoClick() {
    analytics.track("ui.interaction", {
        topic_channel: document.querySelector('[name\x3d"analyticsAttributes.topicChannel"]').content,
        topic_sub_channel: document.querySelector('[name\x3d"analyticsAttributes.topicSubChannel"]').content,
        content_type: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
        edition: document.querySelector('[name\x3d"analyticsAttributes.edition"]').content,
        platform: "Desktop",
        content_type_channel: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
        content_channel: document.querySelector('[name\x3d"analyticsAttributes.channel"]').content,
        canonical_url: document.querySelector('[name\x3d"analyticsAttributes.canonicalUrl"]').content,
        ui_element: "Reuters Logo"
    })
}

function navClick() {
    var a = this.text.trim();
    "" != a && analytics.track("ui.interaction", {
        topic_channel: document.querySelector('[name\x3d"analyticsAttributes.topicChannel"]').content,
        topic_sub_channel: document.querySelector('[name\x3d"analyticsAttributes.topicSubChannel"]').content,
        content_type: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
        edition: document.querySelector('[name\x3d"analyticsAttributes.edition"]').content,
        platform: "Desktop",
        content_type_channel: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
        content_channel: document.querySelector('[name\x3d"analyticsAttributes.channel"]').content,
        canonical_url: document.querySelector('[name\x3d"analyticsAttributes.canonicalUrl"]').content,
        ui_element: a
    })
}

function homeIconClick() {
    analytics.track("ui.interaction", {
        topic_channel: document.querySelector('[name\x3d"analyticsAttributes.topicChannel"]').content,
        topic_sub_channel: document.querySelector('[name\x3d"analyticsAttributes.topicSubChannel"]').content,
        content_type: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
        edition: document.querySelector('[name\x3d"analyticsAttributes.edition"]').content,
        platform: "Desktop",
        content_type_channel: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
        content_channel: document.querySelector('[name\x3d"analyticsAttributes.channel"]').content,
        canonical_url: document.querySelector('[name\x3d"analyticsAttributes.canonicalUrl"]').content,
        ui_element: "Home Icon"
    })
}

function breakingNewsClick() {
    analytics.track("ui.interaction", {
        topic_channel: document.querySelector('[name\x3d"analyticsAttributes.topicChannel"]').content,
        topic_sub_channel: document.querySelector('[name\x3d"analyticsAttributes.topicSubChannel"]').content,
        content_type: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
        edition: document.querySelector('[name\x3d"analyticsAttributes.edition"]').content,
        platform: "Desktop",
        content_type_channel: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
        content_channel: document.querySelector('[name\x3d"analyticsAttributes.channel"]').content,
        canonical_url: document.querySelector('[name\x3d"analyticsAttributes.canonicalUrl"]').content,
        ui_element: "Breaking News"
    })
}

function editionListClick() {
    analytics.track("ui.interaction", {
        topic_channel: document.querySelector('[name\x3d"analyticsAttributes.topicChannel"]').content,
        topic_sub_channel: document.querySelector('[name\x3d"analyticsAttributes.topicSubChannel"]').content,
        content_type: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
        edition: document.querySelector('[name\x3d"analyticsAttributes.edition"]').content,
        platform: "Desktop",
        content_type_channel: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
        content_channel: document.querySelector('[name\x3d"analyticsAttributes.channel"]').content,
        canonical_url: document.querySelector('[name\x3d"analyticsAttributes.canonicalUrl"]').content,
        ui_element: "edition switcher"
    })
}

function searchClick() {
    analytics.track("search", {
        topic_channel: document.querySelector('[name\x3d"analyticsAttributes.topicChannel"]').content,
        topic_sub_channel: document.querySelector('[name\x3d"analyticsAttributes.topicSubChannel"]').content,
        content_type: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
        edition: document.querySelector('[name\x3d"analyticsAttributes.edition"]').content,
        platform: "Desktop",
        content_type_channel: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
        content_channel: document.querySelector('[name\x3d"analyticsAttributes.channel"]').content,
        canonical_url: document.querySelector('[name\x3d"analyticsAttributes.canonicalUrl"]').content,
        search_term: document.forms.searchbox.blob.value
    })
}

function articleChannelClick() {
    analytics.track("ui.interaction", {
        topic_channel: document.querySelector('[name\x3d"analyticsAttributes.topicChannel"]').content,
        topic_sub_channel: document.querySelector('[name\x3d"analyticsAttributes.topicSubChannel"]').content,
        content_type: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
        edition: document.querySelector('[name\x3d"analyticsAttributes.edition"]').content,
        platform: "Desktop",
        content_type_channel: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
        content_channel: document.querySelector('[name\x3d"analyticsAttributes.channel"]').content,
        canonical_url: document.querySelector('[name\x3d"analyticsAttributes.canonicalUrl"]').content,
        ui_element: "Channel Name"
    })
}

function stickyLogoClick() {
    analytics.track("ui.interaction", {
        topic_channel: document.querySelector('[name\x3d"analyticsAttributes.topicChannel"]').content,
        topic_sub_channel: document.querySelector('[name\x3d"analyticsAttributes.topicSubChannel"]').content,
        content_type: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
        edition: document.querySelector('[name\x3d"analyticsAttributes.edition"]').content,
        platform: "Desktop",
        content_type_channel: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
        content_channel: document.querySelector('[name\x3d"analyticsAttributes.channel"]').content,
        canonical_url: document.querySelector('[name\x3d"analyticsAttributes.canonicalUrl"]').content,
        ui_element: "Reuters Logo Sticky"
    })
}

function moduleTracking() {
    setTimeout(function() {
        $(".hp-module a").on("click", function() {
            var a = $(this).closest(".hp-module")[0].id.split("-").join(" ").toUpperCase();
            analytics.track("ui.interaction", {
                topic_channel: document.querySelector('[name\x3d"analyticsAttributes.topicChannel"]').content,
                topic_sub_channel: document.querySelector('[name\x3d"analyticsAttributes.topicSubChannel"]').content,
                content_type: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
                edition: document.querySelector('[name\x3d"analyticsAttributes.edition"]').content,
                platform: "Desktop",
                content_type_channel: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
                content_channel: document.querySelector('[name\x3d"analyticsAttributes.channel"]').content,
                canonical_url: document.querySelector('[name\x3d"analyticsAttributes.canonicalUrl"]').content,
                ui_element: a
            })
        });
        backButtonTracker()
    }, 1E3)
}

function newsletterModuleTracking() {
    var a = $(this).closest(".newsletter").find(".nl-name").text().toUpperCase(),
        a = "HP NEWSLETTER - " + a;
    analytics.track("ui.interaction", {
        topic_channel: document.querySelector('[name\x3d"analyticsAttributes.topicChannel"]').content,
        topic_sub_channel: document.querySelector('[name\x3d"analyticsAttributes.topicSubChannel"]').content,
        content_type: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
        edition: document.querySelector('[name\x3d"analyticsAttributes.edition"]').content,
        platform: "Desktop",
        content_type_channel: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
        content_channel: document.querySelector('[name\x3d"analyticsAttributes.channel"]').content,
        canonical_url: document.querySelector('[name\x3d"analyticsAttributes.canonicalUrl"]').content,
        ui_element: a
    })
}

function rcom_scrollTracker(a) {
    var c = 0,
        b = 0;
    return function(a) {
        a = $(document).height();
        var d = $(window).height(),
            e = a - d;
        a = $(this).scrollTop();
        d = 0;
        0 <= c && 0 < e && (e = a / e, a > c && 0.25 <= e && (0.5 <= e ? 0.75 <= e ? 0.98 <= e ? 100 !== b && (b = 100, d = 1) : 75 !== b && (b = 75, d = 1) : 50 !== b && (b = 50, d = 1) : 25 !== b && (b = 25, d = 1)));
        c = a;
        0 < d && (dataLayer.push({
                analyticsAttributes: ""
            }), 25 == b ? analytics.track("scroll.down.landing", {
                topic_channel: document.querySelector('[name\x3d"analyticsAttributes.topicChannel"]').content,
                topic_sub_channel: document.querySelector('[name\x3d"analyticsAttributes.topicSubChannel"]').content,
                content_type: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
                edition: document.querySelector('[name\x3d"analyticsAttributes.edition"]').content,
                platform: "Desktop",
                content_type_channel: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
                content_channel: document.querySelector('[name\x3d"analyticsAttributes.channel"]').content,
                canonical_url: document.querySelector('[name\x3d"analyticsAttributes.canonicalUrl"]').content,
                scroll_quartile: ".25"
            }) : 50 ==
            b ? analytics.track("scroll.down.landing", {
                topic_channel: document.querySelector('[name\x3d"analyticsAttributes.topicChannel"]').content,
                topic_sub_channel: document.querySelector('[name\x3d"analyticsAttributes.topicSubChannel"]').content,
                content_type: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
                edition: document.querySelector('[name\x3d"analyticsAttributes.edition"]').content,
                platform: "Desktop",
                content_type_channel: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
                content_channel: document.querySelector('[name\x3d"analyticsAttributes.channel"]').content,
                canonical_url: document.querySelector('[name\x3d"analyticsAttributes.canonicalUrl"]').content,
                scroll_quartile: ".5"
            }) : 75 == b ? analytics.track("scroll.down.landing", {
                topic_channel: document.querySelector('[name\x3d"analyticsAttributes.topicChannel"]').content,
                topic_sub_channel: document.querySelector('[name\x3d"analyticsAttributes.topicSubChannel"]').content,
                content_type: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
                edition: document.querySelector('[name\x3d"analyticsAttributes.edition"]').content,
                platform: "Desktop",
                content_type_channel: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
                content_channel: document.querySelector('[name\x3d"analyticsAttributes.channel"]').content,
                canonical_url: document.querySelector('[name\x3d"analyticsAttributes.canonicalUrl"]').content,
                scroll_quartile: ".75"
            }) : 100 == b && analytics.track("scroll.down.landing", {
                topic_channel: document.querySelector('[name\x3d"analyticsAttributes.topicChannel"]').content,
                topic_sub_channel: document.querySelector('[name\x3d"analyticsAttributes.topicSubChannel"]').content,
                content_type: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
                edition: document.querySelector('[name\x3d"analyticsAttributes.edition"]').content,
                platform: "Desktop",
                content_type_channel: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
                content_channel: document.querySelector('[name\x3d"analyticsAttributes.channel"]').content,
                canonical_url: document.querySelector('[name\x3d"analyticsAttributes.canonicalUrl"]').content,
                scroll_quartile: "1"
            }))
    }
}

function backButtonTracker() {
    var a = sessionStorage.getItem("sessionPages");
    sessionStorage.setItem("sessionPages", a + " " + window.location.pathname);
    if (null != a) {
        var a = a.split(" "),
            c = a.length;
        window.location.pathname == a[c - 2] && window.location.pathname != a[c - 1] && (a[c - 1].includes("/article/") ? analytics.track("article.recirculation", {
            canonical_url: document.querySelector('[name\x3d"analyticsAttributes.canonicalUrl"]').content,
            content_type: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
            content_type_channel: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
            content_channel: document.querySelector('[name\x3d"analyticsAttributes.channel"]').content,
            topic_channel: document.querySelector('[name\x3d"analyticsAttributes.topicChannel"]').content,
            topic_sub_channel: document.querySelector('[name\x3d"analyticsAttributes.topicSubChannel"]').content,
            edition: document.querySelector('[name\x3d"analyticsAttributes.edition"]').content,
            platform: "Desktop"
        }) : analytics.track("ui.interaction", {
            canonical_url: document.querySelector('[name\x3d"analyticsAttributes.canonicalUrl"]').content,
            content_type: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
            content_type_channel: document.querySelector('[name\x3d"analyticsAttributes.contentType"]').content,
            content_channel: document.querySelector('[name\x3d"analyticsAttributes.channel"]').content,
            topic_channel: document.querySelector('[name\x3d"analyticsAttributes.topicChannel"]').content,
            topic_sub_channel: document.querySelector('[name\x3d"analyticsAttributes.topicSubChannel"]').content,
            edition: document.querySelector('[name\x3d"analyticsAttributes.edition"]').content,
            platform: "Desktop",
            ui_element: "Back Button"
        }))
    }
    setTimeout(function() {
        sessionStorage.setItem("sessionPages", "")
    }, 6E5)
}

function inAppleMobileDevice() {
    return navigator && navigator.userAgent && null != navigator.userAgent && null != navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/) ? !0 : !1
};