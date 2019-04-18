// Initial chartbeat setup

var _sf_async_config = {};
// Test uid / domain
/*
	_sf_async_config.uid			= "12081";
	_sf_async_config.domain 		= "3.adweek.com";
*/
// Live uid / domain
_sf_async_config.uid = "3388";
_sf_async_config.domain = "adweek.com";
_sf_async_config.sections = chartData.sections;

_sf_async_config.authors = chartData.contributors;
_sf_async_config.title = chartData.postTitle;
_sf_async_config.useCanonical = true;

var _cbq = window._cbq || [];
_cbq.push(['_featuredCat', chartData.featuredCat]);


(function() {
    function loadChartbeat() {
        window._sf_endpt = (new Date()).getTime();
        var e = document.createElement('script');
        e.setAttribute('language', 'javascript');
        e.setAttribute('type', 'text/javascript');
        e.setAttribute('src', '//static.chartbeat.com/js/chartbeat_pub.js');
        document.body.appendChild(e);
    }

    var oldonload = window.onload;
    window.onload = (typeof window.onload != 'function') ?
        loadChartbeat :
        function() {
            oldonload();
            loadChartbeat();
        };

})();

function infiniteScrollCall() {

    $ = jQuery;
    // Get info from new infinite scroll article	
    var ai = awIS.articleIndex,
        newArticle = $(".main-content").eq(ai);

    // Reset chartbeat variables
    _sf_async_config.sections = newArticle.data("zone");
    _sf_async_config.authors = newArticle.data("authors");
    _sf_async_config.title = $(".entry-title").eq(ai).text();

    // Send to chartbeat again
    if (typeof pSUPERFLY !== 'undefined')
        pSUPERFLY.virtualPage(window.location.pathname, $(".entry-title").eq(ai).text());
    _cbq.push(['_featuredCat', newArticle.data("featured")]);
}

// Add to infinite scroll functions called on new post
if (typeof awIS !== 'undefined') {
    awIS.functions.push(infiniteScrollCall);
}


// Adds Comscore Script to page
var _comscore = _comscore || [];

_comscore.push({
    c1: 2,
    c2: 7395269,
    c3: "",
    c4: "",
    c5: "",
    c6: "",
    c15: ""
});

(function() {
    var s = document.createElement("script"),
        el = document.getElementsByTagName("script")[0];
    s.async = true;
    s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
})();