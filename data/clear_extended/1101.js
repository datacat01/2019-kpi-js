//Check to see if IE, add class to careers video indicators for font-awesome fallback



(function($) {
    function msieversion() {

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
            // If Internet Explorer, return version number
            //alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
            $('.video-indicator').addClass('has-ie');
        } else { // If another browser, return 0
            return false;
        }
    }

    $(document).ready(function() {
        msieversion();
    });

})(jQuery);