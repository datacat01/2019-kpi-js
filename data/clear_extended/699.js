! function(e) {
    Drupal.behaviors.epaSearchAutocomplete = {
        attach: function(t) {
            e("#search-box", t).autocomplete({
                minLength: 2,
                select: function(t, a) {
                    e(this).val(a.item.label), e(this).closest("form").submit()
                },
                source: function(e, t) {
                    jQuery.ajax({
                        url: "https://search.epa.gov/epasearch/autocomplete?output=json",
                        dataType: "jsonp",
                        data: {
                            q: e.term
                        },
                        success: function(e, a, o) {
                            t(e)
                        }
                    })
                }
            }), e("#search-box", t).autocomplete("widget").addClass("epa-search-autocomplete")
        }
    }
}(jQuery);