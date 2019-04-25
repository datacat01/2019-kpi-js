(function() {
    $(function() {
        var $container = $("#homepage-autocomplete-results");
        var vm = AutocompleteVM;
        if ($container[0]) ko.applyBindings(vm, $container[0])
    })
})(window, jQuery, ko);