(function($) {

    $.fn.changeElementTypeTo = function(newType, newClasses) {
        if (!this.length)
            return;

        var attrs = {};

        $.each(this[0].attributes, function(idx, attr) {
            attrs[attr.nodeName] = attr.nodeValue;
        });

        attrs['class'] = newClasses;

        this.replaceWith(function() {
            return $("<" + newType + " />", attrs).append($(this).contents());
        });
    }

    $.fn.changeElementTypeReverse = function(newType) {
        if (!this.length)
            return;

        var attrs = {};

        $.each(this[0].attributes, function(idx, attr) {
            // don't include the faux- classes
            if (attr.nodeValue !== 'faux-table-cell' &&
                attr.nodeValue !== 'faux-table-row' &&
                attr.nodeValue !== 'faux-table-cell faux-table-cell-th' &&
                attr.nodeValue !== 'faux-table-cell faux-table-cell-td')
                attrs[attr.nodeName] = attr.nodeValue;
        });

        this.replaceWith(function() {
            return $("<" + newType + " />", attrs).append($(this).contents());
        });
    }

    function mobilizeAgendaTable() {
        $(".field-name-field-agenda-text table tr, table.responsive-table tr").changeElementTypeTo("div", "faux-table-row");
        $(".field-name-field-agenda-text table td, table.responsive-table td").changeElementTypeTo("div", "faux-table-cell faux-table-cell-td");
        $(".field-name-field-agenda-text table th, table.responsive-table th").changeElementTypeTo("div", "faux-table-cell faux-table-cell-th");
    }


    function unMobilizeAgendaTable() {
        $(".field-name-field-agenda-text table div.faux-table-row, table.responsive-table div.faux-table-row").changeElementTypeReverse("tr");
        $(".field-name-field-agenda-text table div.faux-table-cell-td, table.responsive-table div.faux-table-cell-td").changeElementTypeReverse("td");
        $(".field-name-field-agenda-text table div.faux-table-cell-th, table.responsive-table div.faux-table-cell-th").changeElementTypeReverse("th");
    }

    unMobilizeAgendaTable();

    /**
     * Trigger the responsive-agenda-tables.js code.
     */
    enquire.register("screen and (max-width:47.9em)", {

        match: mobilizeAgendaTable,

        unmatch: unMobilizeAgendaTable

    });


})(jQuery);