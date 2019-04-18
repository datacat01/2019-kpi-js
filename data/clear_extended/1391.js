/* Source and licensing information for the line(s) below can be found at https://www.bmj.com/sites/default/themes/bmj/the_bmj/js/oas.js. */
var oas_tag = oas_tag || {};
oas_tag.url = 'oasc-eu1.247realmedia.com';
oas_tag.sizes = function() {
    oas_tag.definePos('Top', [728, 90]);
    oas_tag.definePos('Top2', [728, 90]);
    oas_tag.definePos('Middle1', [300, 250]);
    oas_tag.definePos('Middle2', [300, 250])
};
oas_tag.site_page = window.location.hostname + window.location.pathname;
oas_tag.query = parseQuery();
oas_tag.allowSizeOverride = true;
oas_tag.analytics = true;
oas_tag.taxonomy = '';
(function() {
    oas_tag.version = '1';
    oas_tag.loadAd = oas_tag.loadAd || function() {};
    var oas = document.createElement('script'),
        protocol = 'https:' == document.location.protocol ? 'https://' : 'http://',
        node = document.getElementsByTagName('script')[0];
    oas.type = 'text/javascript';
    oas.async = true;
    oas.src = protocol + oas_tag.url + '/om/' + oas_tag.version + '.js';
    node.parentNode.insertBefore(oas, node)
})();
oas_tag.loadAd("Top");
oas_tag.loadAd("Top2");
oas_tag.loadAd("Middle1");
oas_tag.loadAd("Middle2")

function parseQuery() {
    var url = window.location.href,
        regex = /(.*search\/advanced\/)(.*)?$/,
        regmatch = url.match(regex);
    if (!regmatch) return result = '';
    var qstrings = decodeURIComponent(regmatch[2]),
        checkQueryStr = /(title:\S+)/.test(qstrings),
        myarray = [];
    if (checkQueryStr) {
        result = JSON.parse('{' + qstrings.replace(/(\S+)(:)/g, '"$1"$2"').replace(/(\s+)/g, '",').replace(/$/g, '"') + ' }');
        result.title === undefined ? '' : myarray.push(result.title);
        result.abstract_title === undefined ? '' : myarray.push(result.abstract_title);
        result.text_abstract_title === undefined ? '' : myarray.push(result.text_abstract_title);
        result = myarray.join('+')
    } else result = qstrings.replace().replace(/(\s+)/g, '+');
    return result
};
/* Source and licensing information for the above line(s) can be found at https://www.bmj.com/sites/default/themes/bmj/the_bmj/js/oas.js. */