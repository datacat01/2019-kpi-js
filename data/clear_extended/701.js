! function(a, e) {
    e.behaviors.epa = {
        attach: function(e) {
            a("html.no-js", e).removeClass("no-js")
        }
    }, e.behaviors.skiplinks = {
        attach: function(e) {
            var t = navigator.userAgent.toLowerCase().indexOf("webkit") > -1,
                s = navigator.userAgent.toLowerCase().indexOf("opera") > -1;
            a("#main-content, #site-navigation", e).attr("tabindex", -1), (t || s) && a('.skip-links a[href^="#"]', e).click(function() {
                var e = "#" + this.href.split("#")[1];
                a(e).focus()
            })
        }
    }, e.behaviors.epaNew = {
        attach: function(e) {
            var t = new Date;
            t = t.getTime(), a("ins[data-date]", e).each(function() {
                var e = a(this).data().date.replace(/\,/g, "/"),
                    s = Date.parse(e) + 2592e6;
                t < s && a(this).addClass("new")
            })
        }
    }, e.behaviors.tablesorter = {
        attach: function(e) {
            a("table.tablesorter", e).tablesorter()
        }
    }, e.behaviors.accordion = {
        attach: function(e) {
            a(".accordion", e).each(function() {
                var e = a(this).find(".accordion-title"),
                    t = e.next(".accordion-pane");
                t.addClass("is-closed"), e.each(function() {
                    var s = a(this).next(".accordion-pane");
                    a(this).click(function(i) {
                        a(this).hasClass("is-active") ? (a(this).removeClass("is-active"), s.addClass("is-closed")) : (e.removeClass("is-active"), t.addClass("is-closed"), a(this).addClass("is-active"), s.removeClass("is-closed")), i.preventDefault()
                    })
                })
            })
        }
    }, e.behaviors.headerImages = {
        attach: function(e) {
            a(".box", e).each(function() {
                var e = a(".image.view-mode-block_header:not(.caption, .block_header-processed)", this).first(),
                    t = a(this);
                e.addClass("block_header-processed"), e.detach(), t.prepend(e)
            })
        }
    }, e.behaviors.setLoginFocus = {
        attach: function(e) {
            a("body.page-user #edit-name").focus()
        }
    }
}(jQuery, Drupal);