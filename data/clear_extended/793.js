(function($, Modernizr, window, document, undefined) {
    var transEndEventNames = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            msTransition: "MSTransitionEnd",
            transition: "transitionend"
        },
        transEndEventName = transEndEventNames[Modernizr.prefixed("transition")],
        support = {
            transitions: Modernizr.csstransitions
        };

    function getParameterByName(name, url) {
        if (!url) {
            url = window.location.href
        }
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) {
            return null
        }
        if (!results[2]) {
            return ""
        }
        return decodeURIComponent(results[2].replace(/\+/g, " "))
    }

    function isMobile() {
        if ($(window).width() < 480) {
            return true
        }
        return false
    }

    function isTablet() {
        if ($(window).width() < 768) {
            return true
        }
        return false
    }

    function isDesk() {
        if ($(window).width() < 1200) {
            return true
        }
        return false
    }

    function getBaseDomain() {
        var host = window.location.host;
        var hostname = host.match("wuloc|wudev|wustage|wufoo");
        var tld = host.match(".com.mx|.co.uk|.com");
        var domain = hostname + tld;
        return domain.split(":")[0]
    }
    $(window).on("resize", function() {
        window.requestAnimationFrame(handleWindowResize)
    });

    function handleWindowResize() {}
    $('a[href^="#"]:not([href="#"])').click(function(e) {
        e.preventDefault();
        var target = $(this).attr("href"),
            targetTop = 0;
        if (target.length > 1 && $(target).length) {
            if ($(".jump-links").length) {
                targetTop = $(target).offset().top - $(".jump-links").height()
            } else {
                targetTop = $(target).offset().top
            }
            if ($(this).hasClass("jump-links__link")) {
                $(".jump-links__link").removeClass("is-active");
                $(this).addClass("is-active")
            }
            $("body").addClass("scrolling");
            $("html, body").stop().animate({
                scrollTop: targetTop + 10
            }, 600, function() {
                $("body").removeClass("scrolling")
            });
            $(this).blur()
        }
    });
    $('a[href="#"]').click(function(e) {
        e.preventDefault()
    });
    if (!Modernizr.svg) {
        $("[data-svg-fallback]").each(function(e) {
            var src = $(this).attr("src");
            src = src.replace(".svg", ".png");
            $(this).attr("src", src)
        })
    }
    $(".mob-toggle-nav").on("click", function(e) {
        e.preventDefault();
        $(".nav--mob").toggleClass("is-open");
        $("body").toggleClass("has-mob-nav")
    });
    $(".c-scene__cloud").addClass("c-scene__cloud--active");
    $("[data-hover-replace]").on("mouseleave mouseenter", function() {
        var replacementText = $(this).attr("data-hover-replace"),
            originalText = $(this).attr("data-original-text") || $(this).text();
        $(this).text() === originalText ? $(this).attr("data-original-text", originalText).text(replacementText) : $(this).text(originalText)
    });
    $(".m-icon-list").each(function() {
        var $this = $(this);
        $this.waypoint(function(direction) {
            $this.addClass("is-active")
        }, {
            offset: "75%"
        })
    });
    if ($(".jump-links").length) {
        $(".jump-links").next().waypoint(function() {
            $(".jump-links").toggleClass("is-active");
            $("body").toggleClass("has-sticky-nav")
        }, {
            offset: $(".jump-links").height()
        });
        $(".jump-links__link").each(function() {
            var $link = $(this);
            if ($link.attr("href").slice(0, 1) == "#") {
                $section = $($link.attr("href"))
            } else {
                return false
            }
            if ($section.length) {
                var inview = new Waypoint.Inview({
                    element: $section,
                    enter: function(direction) {
                        $(".jump-links__link").removeClass("is-active");
                        $link.addClass("is-active")
                    }
                })
            }
        })
    }
    $("[data-term-toggle]").on("click", function(e) {
        e.preventDefault();
        var $plans = $(this).closest(".m-plans");
        if ($(this).attr("data-term-toggle") == "monthly") {
            $plans.removeClass("is-annual").addClass("is-monthly")
        } else if ($(this).attr("data-term-toggle") == "annual") {
            $plans.removeClass("is-monthly").addClass("is-annual")
        } else {
            if ($plans.hasClass("is-monthly")) {
                $plans.removeClass("is-monthly").addClass("is-annual")
            } else {
                $plans.removeClass("is-annual").addClass("is-monthly")
            }
        }
        if ($plans.hasClass("is-monthly")) {
            $plans.find(".m-plans__price").each(function() {
                var $main = $(this).find(".m-plans__price-main");
                var $sub = $(this).find(".m-plans__price-change");
                $main.text($main.attr("data-plan-monthly"));
                $sub.text($sub.attr("data-plan-monthly"))
            });
            $plans.find(".m-plans__cta").each(function() {
                $(this).attr("href", $(this).attr("data-plan-monthly"))
            })
        } else {
            $plans.find(".m-plans__price").each(function() {
                var $main = $(this).find(".m-plans__price-main");
                var $sub = $(this).find(".m-plans__price-change");
                $main.text($main.attr("data-plan-annual"));
                $sub.text($sub.attr("data-plan-annual"))
            });
            $plans.find(".m-plans__cta").each(function() {
                $(this).attr("href", $(this).attr("data-plan-annual"))
            })
        }
    });
    $(".m-plans__info").on("click", function(e) {
        e.preventDefault();
        $(this).closest(".m-plans__plan").toggleClass("is-expanded")
    });
    $(".m-comp-chart").each(function() {
        var activeItem = $(this).find(".m-comp-chart__btn--highlighted").data("plan");
        $(this).find('td[data-plan="' + activeItem + '"], th[data-plan="' + activeItem + '"]').addClass("m-comp-chart__cell--active")
    });
    $(".m-comp-chart__btn").on("click", function() {
        var activeItem = $(this).data("plan"),
            $table = $(this).closest(".m-comp-chart").find(".m-comp-chart__table");
        $table.find(".m-comp-chart__cell--active").removeClass("m-comp-chart__cell--active");
        $table.find('td[data-plan="' + activeItem + '"], th[data-plan="' + activeItem + '"]').addClass("m-comp-chart__cell--active");
        $(this).closest(".m-comp-chart").find(".m-comp-chart__btn--highlighted").removeClass("m-comp-chart__btn--highlighted");
        $(this).addClass("m-comp-chart__btn--highlighted")
    });
    $(".m-accordions__title").on("click", function(e) {
        e.preventDefault();
        $(this).closest(".m-accordions__accordion").toggleClass("is-open").find(".m-accordions__panel").slideToggle()
    });
    $(".m-slider__slides").each(function() {
        $(this).slick({
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 1e4,
            dots: true,
            slidesToShow: 1,
            adaptiveHeight: false,
            nextArrow: $(this).next(".m-slider__nav").find(".slick-next"),
            prevArrow: $(this).next(".m-slider__nav").find(".slick-prev")
        })
    });
    if ($("html").hasClass("gdpr-prompt")) {
        $(".gdpr-popup").addClass("is-active")
    }
    $("button.gdpr-popup__opt-in, button.gdpr-popup__opt-out").on("click", function(e) {
        e.preventDefault();
        var reload = $(this).hasClass("gdpr-reload"),
            optin = $(this).hasClass("gdpr-popup__opt-in") ? "yes" : "no";
        $(".gdpr-popup p").text("Saving cookie preferences...");
        $.post(ajax_object.ajax_url, {
            action: "set-gdpr-cookie",
            optin: optin
        }, function(response) {
            $(".gdpr-popup p").text("Saved cookie preferences!");
            $(".gdpr-popup").removeClass("is-active");
            if (reload) {
                window.location.reload(true)
            }
            if (optin == "yes") {
                $("html").addClass("gdpr-opted-in");
                response = JSON.parse(response);
                $("head").append(response.headerTrackingHtml);
                $("body").append(response.footerTrackingHtml)
            } else {
                $("html").addClass("gdpr-opted-out")
            }
        })
    });
    $(".js-clear-cookies").on("click", function(e) {
        e.preventDefault();
        $.post(ajax_object.ajax_url, {
            action: "remove-all-cookies"
        }, function(response) {
            window.location.reload(true)
        })
    });
    $("#accountCreateId").on("submit", function(e) {
        document.cookie = "wuSignup=1;path=/;domain=." + getBaseDomain() + ";max-age=86400;"
    })
})(jQuery, Modernizr, window, document);