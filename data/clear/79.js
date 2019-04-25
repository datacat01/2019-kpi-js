// Copyright 2012 Google Inc. All rights reserved.
(function(w, g) {
    w[g] = w[g] || {};
    w[g].e = function(s) {
        return eval(s);
    };
})(window, 'google_tag_manager');
(function() {

    var data = {
        "resource": {
            "version": "294",
            "macros": [{
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return nytAnalytics.derivedReferrer.source?nytAnalytics.derivedReferrer.source:\"null\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=nytAnalytics.derivedReferrer.subchannel?nytAnalytics.derivedReferrer.subchannel:\"null\";return a})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "asset.derivedDesk"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 2], 8, 16], "?", ["escape", ["macro", 2], 8, 16], ":\"null\";return a})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=nytAnalytics.derivedReferrer.type?nytAnalytics.derivedReferrer.type:\"null\";return a})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=nytAnalytics.derivedReferrer.channel?nytAnalytics.derivedReferrer.channel:\"null\";return a})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.publishedTimestamp"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 6], 8, 16], "?window.nytAnalytics.formatDates(", ["escape", ["macro", 6], 8, 16], ",\"year\"):\"null\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 6], 8, 16], "?window.nytAnalytics.formatDates(", ["escape", ["macro", 6], 8, 16], ",\"date\"):\"null\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 6], 8, 16], "?window.nytAnalytics.formatDates(", ["escape", ["macro", 6], 8, 16], ",\"day\"):\"null\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 6], 8, 16], "?window.nytAnalytics.formatDates(", ["escape", ["macro", 6], 8, 16], ",\"hours\"):\"null\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 6], 8, 16], "?window.nytAnalytics.formatDates(", ["escape", ["macro", 6], 8, 16], ",\"month\"):\"null\"})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.wordCount"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return 100\u003E", ["escape", ["macro", 12], 8, 16], "?\"blurb_under_100\":400\u003E", ["escape", ["macro", 12], 8, 16], "?\"super_short_100_399\":800\u003E", ["escape", ["macro", 12], 8, 16], "?\"short_400_799\":1200\u003E", ["escape", ["macro", 12], 8, 16], "?\"medium_800_1199\":1600\u003E=", ["escape", ["macro", 12], 8, 16], "?\"long_1200_1600\":1600\u003C", ["escape", ["macro", 12], 8, 16], "?\"heave_over_1600\":\"\"})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.type"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"sub\"===", ["escape", ["macro", 14], 8, 16], "?1:0})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.regiId"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 16], 8, 16], "?1:0})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"sub\"===", ["escape", ["macro", 14], 8, 16], "?1:0})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.eventName"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){window.nytAnalytics=window.nytAnalytics||{};window.nytAnalytics.videoCustomMetrics=window.nytAnalytics.videoCustomMetrics||{\"auto-play-next\":32,\"auto-play-start\":31,\"percent-25-viewed\":24,\"percent-50-viewed\":25,\"percent-75-viewed\":26,\"3-seconds-viewed\":42,\"30-seconds-viewed\":43,\"360-drag-start\":58,\"360-drag-stop\":59,\"360-compass-click\":60,\"share-embed\":4,\"share-facebook\":4,\"share-twitter\":4,\"user-play\":1,\"video-complete\":3,\"user-play-audio\":34,\"percent-25-heard\":35,\"percent-50-heard\":36,\n\"percent-75-heard\":37,\"audio-complete\":38,\"audio-inview\":63};return window.nytAnalytics.videoCustomMetrics[", ["escape", ["macro", 19], 8, 16], "]||\"\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){window.nytAnalytics=window.nytAnalytics||{};window.nytAnalytics.videoActions=window.nytAnalytics.videoActions||{\"ad-complete\":\"ad complete\",\"ad-pause\":\"ad pause\",\"ad-resume\":\"ad resume\",\"ad-start\":\"ad start\",\"exit-fullscreen\":\"exit fullscreen\",\"go-fullscreen\":\"go fullscreen\",\"hd-off\":\"hd off\",\"hd-on\":\"hd on\",pause:\"pause\",resume:\"resume\",\"skip-ad\":\"ad skip\",\"video-load\":\"video load\",\"video-inview\":\"video inview\",\"auto-play-next\":\"autoplay next\",\"auto-play-start\":\"autoplay start\",\"percent-25-viewed\":\"viewed: 25%\",\n\"percent-50-viewed\":\"viewed: 50%\",\"percent-75-viewed\":\"viewed: 75%\",\"3-seconds-viewed\":\"3-seconds-viewed\",\"30-seconds-viewed\":\"30-seconds-viewed\",\"360-drag-start\":\"360-drag-start\",\"360-drag-stop\":\"360-drag-stop\",\"360-compass-click\":\"360-compass-click\",\"share-embed\":\"share: embed\",\"share-facebook\":\"share: facebook\",\"share-twitter\":\"share: twitter\",seek:\"seek\",\"user-play\":\"user play\",\"video-complete\":\"viewed:100%\",\"media-error\":\"media-error\",\"cherry-api-request-error\":\"cherry-api-request-error\",\"fw-admanager-load-error\":\"fw-admanager-load-error\",\n\"qos-library-load-failure\":\"qos-library-load-failure\",\"rendition-not-found\":\"rendition-not-found\",\"player-load\":\"player load\",\"imax-countdown-pause\":\"imax-countdown-pause\",\"imax-countdown-complete\":\"imax-countdown-complete\"};return window.nytAnalytics.videoActions[", ["escape", ["macro", 19], 8, 16], "]||", ["escape", ["macro", 19], 8, 16], "})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoDeliveryMethod"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.version"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return(\"live\"===", ["escape", ["macro", 22], 8, 16], "?\"Live | \":\"Video | \")+", ["escape", ["macro", 23], 8, 16], "})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoName"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return decodeURIComponent(", ["escape", ["macro", 25], 8, 16], ")})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){window.nytAnalytics=window.nytAnalytics||{};window.nytAnalytics.videoNonInteractions=window.nytAnalytics.videoNonInteractions||{\"cherry-api-request-error\":!0,\"fw-admanager-load-error\":!0,\"qos-library-load-failure\":!0,\"rendition-not-found\":!0,\"player-load\":!0,\"video-inview\":!0,\"imax-countdown-pause\":!0,\"imax-countdown-complete\":!0};return window.nytAnalytics.videoNonInteractions[", ["escape", ["macro", 19], 8, 16], "]||!1})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "application.name"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){notprod=!document.location.hostname.match(\/nytimes\\.com\/)||!!document.location.hostname.match(\/test\\.|dev\\.|stg\\.\/);switch(", ["escape", ["macro", 28], 8, 16], "){case \"nyt-help\":return\"UA-58630905-28\";default:return notprod?\"UA-58630905-7\":\"UA-58630905-2\"}})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.url"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 30], 8, 16], "||document.location.protocol+\"\/\/\"+document.location.host+document.location.pathname})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"object\"===typeof pageEventTracker})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "error.errors"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 33], 8, 16], "||{};return JSON.stringify(a).substr(0,128)})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 28], 8, 16], "})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.querySelector('meta[name\\x3d\"applicationName\"]');return a?a.content:\"\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 2], 8, 16], "?", ["escape", ["macro", 2], 8, 16], ":\"null\";return a})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.tracking.sessionStart"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=new Date(", ["escape", ["macro", 38], 8, 16], ");return a=a.getHours()})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return Date.now()})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return!1})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "interaction.module.element.name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "module.ga.eventAction"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.element.name"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 42], 8, 16], "||", ["escape", ["macro", 43], 8, 16], ";return\"object\"===typeof window.nytAnalytics.gaEvent\u0026\u0026\"object\"===typeof window.nytAnalytics.gaEvent[a]\u0026\u0026\"function\"===typeof window.nytAnalytics.gaEvent[a].action\u0026\u0026window.nytAnalytics.gaEvent[a].action()||", ["escape", ["macro", 44], 8, 16], "||", ["escape", ["macro", 45], 8, 16], "||", ["escape", ["macro", 46], 8, 16], "})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 42], 8, 16], "||", ["escape", ["macro", 43], 8, 16], ";return\"object\"===typeof window.nytAnalytics.gaEvent\u0026\u0026\"object\"===typeof window.nytAnalytics.gaEvent[a]\u0026\u0026\"function\"===typeof window.nytAnalytics.gaEvent[a].category\u0026\u0026window.nytAnalytics.gaEvent[a].category()||a})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "interaction.region"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.element.label"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.label"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 42], 8, 16], "||", ["escape", ["macro", 43], 8, 16], ";return\"object\"===typeof window.nytAnalytics.gaEvent\u0026\u0026\"object\"===typeof window.nytAnalytics.gaEvent[a]\u0026\u0026\"function\"===typeof window.nytAnalytics.gaEvent[a].label\u0026\u0026window.nytAnalytics.gaEvent[a].label()||", ["escape", ["macro", 49], 8, 16], "||", ["escape", ["macro", 50], 8, 16], "||", ["escape", ["macro", 51], 8, 16], "})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return!0})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return{}})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.pageType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "viewport.scrollTop"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "viewport.height"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "viewport.width"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){if(\"object\"!==typeof window.nytAnalytics)return\"\";var a=", ["escape", ["macro", 55], 8, 16], "||\"\";a=a.toLowerCase();window.nytAnalytics.comScorePage=window.nytAnalytics.comScorePage||1;if(!a||\"oak\"===a||\"article\"===a){a=window.nytAnalytics.comScorePage;var c=", ["escape", ["macro", 56], 8, 16], ",b=", ["escape", ["macro", 57], 8, 16], ",d=768\u003E", ["escape", ["macro", 58], 8, 16], ";b=d?4*b:2*b;window.nytAnalytics.comScorePage=Math.floor(c\/b)+1;return window.nytAnalytics.comScorePage!==a?\"track\":\"\"}})();"]
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "gclid",
                "vtp_enableMultiQueryKeys": false
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "dclid",
                "vtp_enableMultiQueryKeys": false
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var b=", ["escape", ["macro", 30], 8, 16], "||document.location.protocol+\"\/\/\"+document.location.host+document.location.pathname,a=\"\";", ["escape", ["macro", 60], 8, 16], "\u0026\u0026(a+=\"?gclid\\x3d\"+", ["escape", ["macro", 60], 8, 16], ");", ["escape", ["macro", 61], 8, 16], "\u0026\u0026(a+=(\"\"===a?\"?\":\"\\x26\")+\"dclid\\x3d\"+", ["escape", ["macro", 61], 8, 16], ");return\"\"===a?b:b+a})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 42], 8, 16], "||", ["escape", ["macro", 43], 8, 16], ";return\"object\"===typeof window.nytAnalytics.gaEvent\u0026\u0026\"object\"===typeof window.nytAnalytics.gaEvent[a]\u0026\u0026\"function\"===typeof window.nytAnalytics.gaEvent[a].value\u0026\u0026window.nytAnalytics.gaEvent[a].value()||\"\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return navigator.userAgent.match(\/iPhone|iPad\/i)?1:0})();"]
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "nyt-m"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var g=function(a,c){var b=(new RegExp(a+\"\\x3d([il]{1}).([^\\x26]+)\")).exec(c);if(b\u0026\u00263\u003C=b.length)switch(b[1]){case \"i\":return parseInt(b[2],10);case \"l\":return b[2].split(\".\").slice(1).map(function(a){return parseInt(a,10)})}return null},a,d={},e=", ["escape", ["macro", 65], 8, 16], ";if(e){var c=[\"v\",\"t\"];for(a=0;a\u003Cc.length;a++){var f=g(c[a],e);null!==f\u0026\u0026(d[c[a]]=f)}}return d})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\/OS 10_3_3.*CriOS\\\/[\\d\\.]+ Mobile\/.test(navigator.userAgent)?1:0})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventData.trigger"
            }, {
                "function": "__u",
                "vtp_stripWww": false,
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return 1;if(", ["escape", ["macro", 43], 8, 16], "||", ["escape", ["macro", 68], 8, 16], "===\"module\")return 1;if(", ["escape", ["macro", 69], 8, 16], ".indexOf(\"alpha\")\u003E-1)return 1;return 0})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"object\"===typeof nytAnalytics.pagemeta\u0026\u0026nytAnalytics.pagemeta.PST?nytAnalytics.pagemeta.PST.toLowerCase():\"null\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"object\"===typeof nytAnalytics.pagemeta\u0026\u0026nytAnalytics.pagemeta.PT?nytAnalytics.pagemeta.PT.toLowerCase():\"null\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"object\"===typeof nytAnalytics.pagemeta\u0026\u0026nytAnalytics.pagemeta.SCG?nytAnalytics.pagemeta.SCG.toLowerCase():\"null\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"object\"===typeof nytAnalytics.pagemeta\u0026\u0026nytAnalytics.pagemeta.CG?nytAnalytics.pagemeta.CG.toLowerCase():\"null\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var c=", ["escape", ["macro", 50], 8, 16], ",a=", ["escape", ["macro", 46], 8, 16], ",b=", ["escape", ["macro", 43], 8, 16], ";if(\"share-tools\"===b\u0026\u0026a){if(-1\u003Ca.indexOf(\"facebook\"))return 14;if(-1\u003Ca.indexOf(\"twitter\"))return 15;if(-1\u003Ca.indexOf(\"email\"))return 16;if(-1\u003Ca.indexOf(\"pinterest\"))return 17;if(-1\u003Ca.indexOf(\"linkedin\"))return 18;if(-1\u003Ca.indexOf(\"google\"))return 19;if(-1\u003Ca.indexOf(\"reddit\"))return 20;if(-1\u003Ca.indexOf(\"whatsapp\"))return 21;if(-1\u003Ca.indexOf(\"save\"))return 22;if(-1\u003Ca.indexOf(\"permalink\"))return 23}if(\"newsletters\"===\nb\u0026\u0026\"subscribe\"===a)return-1\u003Cc.indexOf(\"opt in\")?10:6;if(\"comments\"===b){if(\"submit-new\"===a)return 11;if(\"submit-reply\"===a)return 33}return\"\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return 1})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=navigator.userAgent;if(!\/.*(iphone|ipad|ipod|silk).*$\/i.test(a)\u0026\u0026(a=\/Mac OS X (\\d+)[_\\.](\\d+)([_\\.](\\d+))?\/.exec(a))\u0026\u00265\u003C=a.length){var b=parseInt(a[1],10);return 10\u003Eb||10===b\u0026\u00269\u003E=parseInt(a[2],10)?1:0}return 0})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.subscriptions.purchaseDate"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.subscriptions.activeSubscriberSince"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 78], 8, 16], "||", ["escape", ["macro", 79], 8, 16], ";try{var b=nytAnalytics.formatDates(a,\"dateAlone\")}catch(c){}return b})();"]
            }, {
                "function": "__cid"
            }, {
                "function": "__ctv"
            }, {
                "function": "__c",
                "vtp_value": "Production"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"", ["escape", ["macro", 81], 7], "-", ["escape", ["macro", 82], 7], "-", ["escape", ["macro", 83], 7], "\"})();"]
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return encodeURIComponent(", ["escape", ["macro", 85], 8, 16], ")})();"]
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return encodeURIComponent(", ["escape", ["macro", 87], 8, 16], ")})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return!!(window\u0026\u0026window.NYTD\u0026\u0026window.NYTD.Abra)})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return nyt_et.get_pageview_id()})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 28], 8, 16], "||(document.querySelector(\"meta[name\\x3dsourceApp]\")||{}).content;a||(a=\/^\\\/puzzles\\\/?|^\\\/crosswords\\\/?\/.test(document.location.pathname)?\"games-crosswords\":\/dg-cookie-policy\/.test(document.location.pathname)||\/help.nytimes.com\/.test(document.location.host)?\"help\":\"nyt-vi\");return a})();"]
            }, {
                "function": "__e"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "NYT-T"
            }, {
                "function": "__j",
                "vtp_name": "location.search"
            }, {
                "function": "__u",
                "vtp_enableMultiQueryKeys": false
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 43],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": ["macro", 41],
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "test-whitelist", "value", ["macro", 53]],
                    ["map", "key", "article-complete", "value", ["macro", 53]],
                    ["map", "key", "lire-modal", "value", ["macro", 53]],
                    ["map", "key", "LogIn", "value", ["macro", 53]],
                    ["map", "key", "welcome ad", "value", ["macro", 53]],
                    ["map", "key", "review", "value", ["macro", 53]],
                    ["map", "key", "Programs", "value", ["macro", 53]],
                    ["map", "key", "vi-beta-tools", "value", ["macro", 53]],
                    ["map", "key", "inline-message", "value", ["macro", 53]],
                    ["map", "key", "newsletters", "value", ["macro", 53]],
                    ["map", "key", "video-player-share", "value", ["macro", 53]],
                    ["map", "key", "gateway", "value", ["macro", 53]],
                    ["map", "key", "audio-player", "value", ["macro", 53]],
                    ["map", "key", "share-tools", "value", ["macro", 53]],
                    ["map", "key", "comments", "value", ["macro", 53]],
                    ["map", "key", "acm", "value", ["macro", 53]],
                    ["map", "key", "video-player", "value", ["macro", 53]],
                    ["map", "key", "first-scroll", "value", ["macro", 53]],
                    ["map", "key", "^games-prototype.*", "value", ["macro", 53]],
                    ["map", "key", "[M|m]odal", "value", ["macro", 53]],
                    ["map", "key", "settings", "value", ["macro", 53]],
                    ["map", "key", "Puzzle", "value", ["macro", 53]],
                    ["map", "key", "general", "value", ["macro", 53]],
                    ["map", "key", "gameplay", "value", ["macro", 53]]
                ]
            }, {
                "function": "__j",
                "vtp_name": "nytAnalytics.campaignMap.campaignSource"
            }, {
                "function": "__j",
                "vtp_name": "nytAnalytics.campaignMap.campaignMedium"
            }, {
                "function": "__j",
                "vtp_name": "nytAnalytics.campaignMap.campaignName"
            }, {
                "function": "__j",
                "vtp_name": "nytAnalytics.campaignMap.campaignContent"
            }, {
                "function": "__j",
                "vtp_name": "nytAnalytics.campaignMap.campaignKeyword"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 87],
                "vtp_name": "referrer.url"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 102], 8, 16], "\u0026\u0026\"null\"!==", ["escape", ["macro", 102], 8, 16], "?", ["escape", ["macro", 102], 8, 16], ":", ["escape", ["macro", 87], 8, 16], "})();"]
            }, {
                "function": "__c",
                "vtp_value": "1"
            }, {
                "function": "__c",
                "vtp_value": "2"
            }, {
                "function": "__c",
                "vtp_value": "3"
            }, {
                "function": "__c",
                "vtp_value": "4"
            }, {
                "function": "__c",
                "vtp_value": "1"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.url"
            }, {
                "function": "__c",
                "vtp_value": "2"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 41],
                "vtp_name": "asset.is_refresh"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a;(a=document.location.href)\u0026\u0026\"string\"===typeof a\u0026\u0026(a=a.replace(\/=[!#\\$%'\\*\\+\\-\\\/=\\?\\^_`\\{\\|\\}~;\\.,\"\\(\\),:;\u003C\u003E\\[\\\\\\]\\w]+(@|%40)[^.]+\\.[^\u0026]+\/g,\"\\x3demail_block\"));if(", ["escape", ["macro", 111], 8, 16], "){var b=-1\u003Ca.indexOf(\"?\")?\"\\x26\":\"?\";a+=b+\"WT.z_jog\\x3d1\"}return a})();"]
            }, {
                "function": "__c",
                "vtp_value": "3"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.location.search;", ["escape", ["macro", 111], 8, 16], "\u0026\u0026(connector=-1\u003CcleanURL.indexOf(\"?\")?\"\\x26\":\"?\",a+=connector+\"WT.z_jog\\x3d1\");return a})();"]
            }, {
                "function": "__c",
                "vtp_value": "4"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.section"
            }, {
                "function": "__c",
                "vtp_value": "5"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.paid_post"
            }, {
                "function": "__c",
                "vtp_value": "6"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.name"
            }, {
                "function": "__c",
                "vtp_value": "7"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.pagetype"
            }, {
                "function": "__c",
                "vtp_value": "8"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.region"
            }, {
                "function": "__c",
                "vtp_value": "9"
            }, {
                "function": "__c",
                "vtp_value": "10"
            }, {
                "function": "__c",
                "vtp_value": "11"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.collection"
            }, {
                "function": "__c",
                "vtp_value": "12"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.subsection"
            }, {
                "function": "__c",
                "vtp_value": "13"
            }, {
                "function": "__c",
                "vtp_value": "14"
            }, {
                "function": "__c",
                "vtp_value": "15"
            }, {
                "function": "__c",
                "vtp_value": "16"
            }, {
                "function": "__c",
                "vtp_value": "17"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.id"
            }, {
                "function": "__c",
                "vtp_value": "18"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.authors"
            }, {
                "function": "__c",
                "vtp_value": "19"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.headline"
            }, {
                "function": "__c",
                "vtp_value": "20"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.kicker"
            }, {
                "function": "__c",
                "vtp_value": "21"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.pageType"
            }, {
                "function": "__c",
                "vtp_value": "22"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.printPublishDate"
            }, {
                "function": "__c",
                "vtp_value": "23"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.section"
            }, {
                "function": "__c",
                "vtp_value": "24"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.gatewayViewed"
            }, {
                "function": "__c",
                "vtp_value": "25"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.subsection"
            }, {
                "function": "__c",
                "vtp_value": "26"
            }, {
                "function": "__c",
                "vtp_value": "27"
            }, {
                "function": "__c",
                "vtp_value": "28"
            }, {
                "function": "__c",
                "vtp_value": "29"
            }, {
                "function": "__c",
                "vtp_value": "30"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "null",
                "vtp_name": "asset.lastUpdatedTimestamp"
            }, {
                "function": "__c",
                "vtp_value": "31"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.characterCount"
            }, {
                "function": "__c",
                "vtp_value": "32"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.collectionName"
            }, {
                "function": "__c",
                "vtp_value": "33"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.collectionType"
            }, {
                "function": "__c",
                "vtp_value": "34"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.contentTone"
            }, {
                "function": "__c",
                "vtp_value": "35"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.series"
            }, {
                "function": "__c",
                "vtp_value": "36"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "asset.slug"
            }, {
                "function": "__c",
                "vtp_value": "37"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.wordCount"
            }, {
                "function": "__c",
                "vtp_value": "38"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.desk"
            }, {
                "function": "__c",
                "vtp_value": "39"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.typeOfMaterials"
            }, {
                "function": "__c",
                "vtp_value": "40"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.sourceNewsOrg"
            }, {
                "function": "__c",
                "vtp_value": "41"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.sourceUSvsIntl"
            }, {
                "function": "__c",
                "vtp_value": "42"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "application.name"
            }, {
                "function": "__c",
                "vtp_value": "43"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.desFacets"
            }, {
                "function": "__c",
                "vtp_value": "44"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.orgFacets"
            }, {
                "function": "__c",
                "vtp_value": "45"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.perFacets"
            }, {
                "function": "__c",
                "vtp_value": "46"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.geoFacets"
            }, {
                "function": "__c",
                "vtp_value": "47"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.paidPostParameter"
            }, {
                "function": "__c",
                "vtp_value": "48"
            }, {
                "function": "__c",
                "vtp_value": "49"
            }, {
                "function": "__c",
                "vtp_value": "50"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.pageSubType"
            }, {
                "function": "__c",
                "vtp_value": "51"
            }, {
                "function": "__c",
                "vtp_value": "52"
            }, {
                "function": "__c",
                "vtp_value": "53"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.originatingDesk"
            }, {
                "function": "__c",
                "vtp_value": "54"
            }, {
                "function": "__c",
                "vtp_value": "55"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.isLoggedIn"
            }, {
                "function": "__c",
                "vtp_value": "56"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.type"
            }, {
                "function": "__c",
                "vtp_value": "57"
            }, {
                "function": "__c",
                "vtp_value": "58"
            }, {
                "function": "__c",
                "vtp_value": "59"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.regiId"
            }, {
                "function": "__c",
                "vtp_value": "60"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.regiId"
            }, {
                "function": "__c",
                "vtp_value": "61"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"object\"===typeof ", ["escape", ["macro", 66], 8, 16], "?", ["escape", ["macro", 66], 8, 16], ".v:\"\"})();"]
            }, {
                "function": "__c",
                "vtp_value": ["macro", 213]
            }, {
                "function": "__c",
                "vtp_value": "62"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.edition"
            }, {
                "function": "__c",
                "vtp_value": "63"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "nyt-a"
            }, {
                "function": "__c",
                "vtp_value": ["macro", 218]
            }, {
                "function": "__c",
                "vtp_value": "64"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.isLoggedIn"
            }, {
                "function": "__c",
                "vtp_value": "65"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.type"
            }, {
                "function": "__c",
                "vtp_value": "66"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.DMA"
            }, {
                "function": "__c",
                "vtp_value": "67"
            }, {
                "function": "__c",
                "vtp_value": "68"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.channels"
            }, {
                "function": "__c",
                "vtp_value": "69"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.savedArticles"
            }, {
                "function": "__c",
                "vtp_value": "72"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.creative"
            }, {
                "function": "__c",
                "vtp_value": "73"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.flight"
            }, {
                "function": "__c",
                "vtp_value": "74"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.slideshow.length"
            }, {
                "function": "__c",
                "vtp_value": "75"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.slideshow.currentEntry"
            }, {
                "function": "__c",
                "vtp_value": "76"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.slideshow.title"
            }, {
                "function": "__c",
                "vtp_value": "79"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.search.process"
            }, {
                "function": "__c",
                "vtp_value": "80"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.search.mood"
            }, {
                "function": "__c",
                "vtp_value": "81"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.originalURL"
            }, {
                "function": "__c",
                "vtp_value": "82"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.campaignInternal"
            }, {
                "function": "__c",
                "vtp_value": "83"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.campaignInternal"
            }, {
                "function": "__c",
                "vtp_value": "84"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "application.beta"
            }, {
                "function": "__c",
                "vtp_value": "85"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.audioFranchise"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.series"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 43],
                "vtp_defaultValue": ["macro", 254],
                "vtp_map": ["list", ["map", "key", "audio-player", "value", ["macro", 255]]]
            }, {
                "function": "__c",
                "vtp_value": "86"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.regiCreateDate"
            }, {
                "function": "__c",
                "vtp_value": "87"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.newsletter.subscriber"
            }, {
                "function": "__c",
                "vtp_value": "88"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "search.era"
            }, {
                "function": "__c",
                "vtp_value": "89"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "search.genre"
            }, {
                "function": "__c",
                "vtp_value": "90"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "search.subgenre"
            }, {
                "function": "__c",
                "vtp_value": "91"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.newsletter.subscribeDate"
            }, {
                "function": "__c",
                "vtp_value": "92"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.offerID"
            }, {
                "function": "__c",
                "vtp_value": "93"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.subscription.stopped"
            }, {
                "function": "__c",
                "vtp_value": "94"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.subscription.corp"
            }, {
                "function": "__c",
                "vtp_value": "95"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 80],
                "vtp_name": "user.subscriptions.purchaseDate"
            }, {
                "function": "__c",
                "vtp_value": "96"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.subscriptions.activeBundles.0"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 278],
                "vtp_name": "user.subscriptions.bundle"
            }, {
                "function": "__c",
                "vtp_value": "97"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.bundeFilter"
            }, {
                "function": "__c",
                "vtp_value": "98"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.payflowType"
            }, {
                "function": "__c",
                "vtp_value": "99"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "market.firstSubLanding"
            }, {
                "function": "__c",
                "vtp_value": "100"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.IntGraphics"
            }, {
                "function": "__c",
                "vtp_value": "101"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.multiLingual"
            }, {
                "function": "__c",
                "vtp_value": "102"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.save_type"
            }, {
                "function": "__c",
                "vtp_value": "104"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.well.guideTitle"
            }, {
                "function": "__c",
                "vtp_value": "105"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.well.cardPosition"
            }, {
                "function": "__c",
                "vtp_value": "109"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.realEstateChannel"
            }, {
                "function": "__c",
                "vtp_value": "110"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.realEstatePageType"
            }, {
                "function": "__c",
                "vtp_value": "111"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.realEstateModuleID"
            }, {
                "function": "__c",
                "vtp_value": "112"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.realEstateModuleType"
            }, {
                "function": "__c",
                "vtp_value": "113"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.realEstateModuleItemID"
            }, {
                "function": "__c",
                "vtp_value": "114"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.payflowsProduct"
            }, {
                "function": "__c",
                "vtp_value": "116"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "payflows.region"
            }, {
                "function": "__c",
                "vtp_value": "117"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "payflows.rate"
            }, {
                "function": "__c",
                "vtp_value": "118"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.story_form"
            }, {
                "function": "__c",
                "vtp_value": "119"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.spotlights"
            }, {
                "function": "__c",
                "vtp_value": "120"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.krux_segment"
            }, {
                "function": "__c",
                "vtp_value": "121"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.print_section"
            }, {
                "function": "__c",
                "vtp_value": "122"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.referrer"
            }, {
                "function": "__c",
                "vtp_value": "123"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.contentId"
            }, {
                "function": "__c",
                "vtp_value": "124"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoAdDuration"
            }, {
                "function": "__c",
                "vtp_value": "125"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoAdPosition"
            }, {
                "function": "__c",
                "vtp_value": "126"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoDuration"
            }, {
                "function": "__c",
                "vtp_value": "127"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.durationGroup"
            }, {
                "function": "__c",
                "vtp_value": "128"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.https_test"
            }, {
                "function": "__c",
                "vtp_value": "129"
            }, {
                "function": "__c",
                "vtp_value": "130"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.www_testID"
            }, {
                "function": "__c",
                "vtp_value": "131"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.mobileweb_testID"
            }, {
                "function": "__c",
                "vtp_value": "132"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.qa_dimension_three"
            }, {
                "function": "__c",
                "vtp_value": "133"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "do.we.need.this"
            }, {
                "function": "__c",
                "vtp_value": "134"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.qa_dimension_four"
            }, {
                "function": "__c",
                "vtp_value": "135"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "asset.column"
            }, {
                "function": "__c",
                "vtp_value": "136"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.optimizely"
            }, {
                "function": "__c",
                "vtp_value": "137"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.optimizely"
            }, {
                "function": "__c",
                "vtp_value": "138"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoFranchise"
            }, {
                "function": "__c",
                "vtp_value": "139"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoSection"
            }, {
                "function": "__c",
                "vtp_value": "140"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.adblock_enabled"
            }, {
                "function": "__c",
                "vtp_value": "141"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoPrimaryPlaylistId"
            }, {
                "function": "__c",
                "vtp_value": "142"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoPrimaryPlaylistName"
            }, {
                "function": "__c",
                "vtp_value": "143"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.real_estate.listing.id"
            }, {
                "function": "__c",
                "vtp_value": "144"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.real_estate.listing.price"
            }, {
                "function": "__c",
                "vtp_value": "145"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.real_estate.buildingID"
            }, {
                "function": "__c",
                "vtp_value": "146"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.real_estate.new"
            }, {
                "function": "__c",
                "vtp_value": "147"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.real_estate.reduced"
            }, {
                "function": "__c",
                "vtp_value": "148"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.real_estate.open_house"
            }, {
                "function": "__c",
                "vtp_value": "149"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "newsletter.interface"
            }, {
                "function": "__c",
                "vtp_value": "150"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "newsletter.subinterface"
            }, {
                "function": "__c",
                "vtp_value": "154"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.campaignID_ecommerce"
            }, {
                "function": "__c",
                "vtp_value": "160"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.url_path_filter"
            }, {
                "function": "__c",
                "vtp_value": "162"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.url"
            }, {
                "function": "__c",
                "vtp_value": "163"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoType"
            }, {
                "function": "__c",
                "vtp_value": "164"
            }, {
                "function": "__c",
                "vtp_value": ["macro", 218]
            }, {
                "function": "__c",
                "vtp_value": "166"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.missing_paper.eligibility"
            }, {
                "function": "__c",
                "vtp_value": "167"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.missing_paper.resolution_type"
            }, {
                "function": "__c",
                "vtp_value": "168"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.missing_paper.redelivery_request"
            }, {
                "function": "__c",
                "vtp_value": "169"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.missing_paper.user_state"
            }, {
                "function": "__c",
                "vtp_value": "172"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.program.breakpoint.initial"
            }, {
                "function": "__c",
                "vtp_value": "173"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 396],
                "vtp_name": "presentation.program.breakpoint.rendered"
            }, {
                "function": "__c",
                "vtp_value": "179"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.contentId"
            }, {
                "function": "__c",
                "vtp_value": "180"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoName"
            }, {
                "function": "__c",
                "vtp_value": "181"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoType"
            }, {
                "function": "__c",
                "vtp_value": "182"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.section"
            }, {
                "function": "__c",
                "vtp_value": "183"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.subSection"
            }, {
                "function": "__c",
                "vtp_value": "184"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.duration"
            }, {
                "function": "__c",
                "vtp_value": "185"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.durationGroup"
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "cookieName", "value", "walley"],
                    ["map", "fieldName", "location", "value", ["macro", 62]],
                    ["map", "fieldName", "campaignSource", "value", ["macro", 97]],
                    ["map", "fieldName", "campaignMedium", "value", ["macro", 98]],
                    ["map", "fieldName", "campaignName", "value", ["macro", 99]],
                    ["map", "fieldName", "campaignContent", "value", ["macro", 100]],
                    ["map", "fieldName", "campaignKeyword", "value", ["macro", 101]],
                    ["map", "fieldName", "referrer", "value", ["macro", 103]]
                ],
                "vtp_useHashAutoLink": false,
                "vtp_contentGroup": ["list", ["map", "index", ["macro", 104], "group", ["macro", 74]],
                    ["map", "index", ["macro", 105], "group", ["macro", 73]],
                    ["map", "index", ["macro", 106], "group", ["macro", 72]],
                    ["map", "index", ["macro", 107], "group", ["macro", 71]]
                ],
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 108], "dimension", ["macro", 109]],
                    ["map", "index", ["macro", 110], "dimension", ["macro", 112]],
                    ["map", "index", ["macro", 113], "dimension", ["macro", 114]],
                    ["map", "index", ["macro", 115], "dimension", ["macro", 116]],
                    ["map", "index", ["macro", 117], "dimension", ["macro", 118]],
                    ["map", "index", ["macro", 119], "dimension", ["macro", 120]],
                    ["map", "index", ["macro", 121], "dimension", ["macro", 122]],
                    ["map", "index", ["macro", 123], "dimension", ["macro", 124]],
                    ["map", "index", ["macro", 125], "dimension", ["macro", 125]],
                    ["map", "index", ["macro", 126], "dimension", ["macro", 0]],
                    ["map", "index", ["macro", 127], "dimension", ["macro", 128]],
                    ["map", "index", ["macro", 129], "dimension", ["macro", 130]],
                    ["map", "index", ["macro", 131], "dimension", ["macro", 1]],
                    ["map", "index", ["macro", 132], "dimension", ["macro", 3]],
                    ["map", "index", ["macro", 133], "dimension", ["macro", 4]],
                    ["map", "index", ["macro", 134], "dimension", ["macro", 5]],
                    ["map", "index", ["macro", 135], "dimension", ["macro", 136]],
                    ["map", "index", ["macro", 137], "dimension", ["macro", 138]],
                    ["map", "index", ["macro", 139], "dimension", ["macro", 140]],
                    ["map", "index", ["macro", 141], "dimension", ["macro", 142]],
                    ["map", "index", ["macro", 143], "dimension", ["macro", 144]],
                    ["map", "index", ["macro", 145], "dimension", ["macro", 146]],
                    ["map", "index", ["macro", 147], "dimension", ["macro", 148]],
                    ["map", "index", ["macro", 149], "dimension", ["macro", 150]],
                    ["map", "index", ["macro", 151], "dimension", ["macro", 152]],
                    ["map", "index", ["macro", 153], "dimension", ["macro", 7]],
                    ["map", "index", ["macro", 154], "dimension", ["macro", 8]],
                    ["map", "index", ["macro", 155], "dimension", ["macro", 9]],
                    ["map", "index", ["macro", 156], "dimension", ["macro", 10]],
                    ["map", "index", ["macro", 157], "dimension", ["macro", 158]],
                    ["map", "index", ["macro", 159], "dimension", ["macro", 160]],
                    ["map", "index", ["macro", 161], "dimension", ["macro", 162]],
                    ["map", "index", ["macro", 163], "dimension", ["macro", 164]],
                    ["map", "index", ["macro", 165], "dimension", ["macro", 166]],
                    ["map", "index", ["macro", 167], "dimension", ["macro", 168]],
                    ["map", "index", ["macro", 169], "dimension", ["macro", 170]],
                    ["map", "index", ["macro", 171], "dimension", ["macro", 172]],
                    ["map", "index", ["macro", 173], "dimension", ["macro", 174]],
                    ["map", "index", ["macro", 175], "dimension", ["macro", 176]],
                    ["map", "index", ["macro", 177], "dimension", ["macro", 178]],
                    ["map", "index", ["macro", 179], "dimension", ["macro", 180]],
                    ["map", "index", ["macro", 181], "dimension", ["macro", 182]],
                    ["map", "index", ["macro", 183], "dimension", ["macro", 184]],
                    ["map", "index", ["macro", 185], "dimension", ["macro", 186]],
                    ["map", "index", ["macro", 187], "dimension", ["macro", 188]],
                    ["map", "index", ["macro", 189], "dimension", ["macro", 190]],
                    ["map", "index", ["macro", 191], "dimension", ["macro", 192]],
                    ["map", "index", ["macro", 193], "dimension", ["macro", 11]],
                    ["map", "index", ["macro", 194], "dimension", ["macro", 13]],
                    ["map", "index", ["macro", 195], "dimension", ["macro", 196]],
                    ["map", "index", ["macro", 197], "dimension", ["macro", 35]],
                    ["map", "index", ["macro", 198], "dimension", ["macro", 36]],
                    ["map", "index", ["macro", 199], "dimension", ["macro", 200]],
                    ["map", "index", ["macro", 201], "dimension", ["macro", 37]],
                    ["map", "index", ["macro", 202], "dimension", ["macro", 203]],
                    ["map", "index", ["macro", 204], "dimension", ["macro", 205]],
                    ["map", "index", ["macro", 206], "dimension", ["macro", 15]],
                    ["map", "index", ["macro", 207], "dimension", ["macro", 17]],
                    ["map", "index", ["macro", 208], "dimension", ["macro", 209]],
                    ["map", "index", ["macro", 210], "dimension", ["macro", 211]],
                    ["map", "index", ["macro", 212], "dimension", ["macro", 214]],
                    ["map", "index", ["macro", 215], "dimension", ["macro", 216]],
                    ["map", "index", ["macro", 217], "dimension", ["macro", 219]],
                    ["map", "index", ["macro", 220], "dimension", ["macro", 221]],
                    ["map", "index", ["macro", 222], "dimension", ["macro", 223]],
                    ["map", "index", ["macro", 224], "dimension", ["macro", 225]],
                    ["map", "index", ["macro", 226], "dimension", ["macro", 18]],
                    ["map", "index", ["macro", 227], "dimension", ["macro", 228]],
                    ["map", "index", ["macro", 229], "dimension", ["macro", 230]],
                    ["map", "index", ["macro", 231], "dimension", ["macro", 232]],
                    ["map", "index", ["macro", 233], "dimension", ["macro", 234]],
                    ["map", "index", ["macro", 235], "dimension", ["macro", 236]],
                    ["map", "index", ["macro", 237], "dimension", ["macro", 238]],
                    ["map", "index", ["macro", 239], "dimension", ["macro", 240]],
                    ["map", "index", ["macro", 241], "dimension", ["macro", 242]],
                    ["map", "index", ["macro", 243], "dimension", ["macro", 244]],
                    ["map", "index", ["macro", 245], "dimension", ["macro", 246]],
                    ["map", "index", ["macro", 247], "dimension", ["macro", 248]],
                    ["map", "index", ["macro", 249], "dimension", ["macro", 250]],
                    ["map", "index", ["macro", 251], "dimension", ["macro", 252]],
                    ["map", "index", ["macro", 253], "dimension", ["macro", 256]],
                    ["map", "index", ["macro", 257], "dimension", ["macro", 258]],
                    ["map", "index", ["macro", 259], "dimension", ["macro", 260]],
                    ["map", "index", ["macro", 261], "dimension", ["macro", 262]],
                    ["map", "index", ["macro", 263], "dimension", ["macro", 264]],
                    ["map", "index", ["macro", 265], "dimension", ["macro", 266]],
                    ["map", "index", ["macro", 267], "dimension", ["macro", 268]],
                    ["map", "index", ["macro", 269], "dimension", ["macro", 270]],
                    ["map", "index", ["macro", 271], "dimension", ["macro", 272]],
                    ["map", "index", ["macro", 273], "dimension", ["macro", 274]],
                    ["map", "index", ["macro", 275], "dimension", ["macro", 276]],
                    ["map", "index", ["macro", 277], "dimension", ["macro", 279]],
                    ["map", "index", ["macro", 280], "dimension", ["macro", 281]],
                    ["map", "index", ["macro", 282], "dimension", ["macro", 283]],
                    ["map", "index", ["macro", 284], "dimension", ["macro", 285]],
                    ["map", "index", ["macro", 286], "dimension", ["macro", 287]],
                    ["map", "index", ["macro", 288], "dimension", ["macro", 289]],
                    ["map", "index", ["macro", 290], "dimension", ["macro", 291]],
                    ["map", "index", ["macro", 292], "dimension", ["macro", 293]],
                    ["map", "index", ["macro", 294], "dimension", ["macro", 295]],
                    ["map", "index", ["macro", 296], "dimension", ["macro", 297]],
                    ["map", "index", ["macro", 298], "dimension", ["macro", 299]],
                    ["map", "index", ["macro", 300], "dimension", ["macro", 301]],
                    ["map", "index", ["macro", 302], "dimension", ["macro", 303]],
                    ["map", "index", ["macro", 304], "dimension", ["macro", 305]],
                    ["map", "index", ["macro", 306], "dimension", ["macro", 307]],
                    ["map", "index", ["macro", 308], "dimension", ["macro", 309]],
                    ["map", "index", ["macro", 310], "dimension", ["macro", 311]],
                    ["map", "index", ["macro", 312], "dimension", ["macro", 313]],
                    ["map", "index", ["macro", 314], "dimension", ["macro", 315]],
                    ["map", "index", ["macro", 316], "dimension", ["macro", 317]],
                    ["map", "index", ["macro", 318], "dimension", ["macro", 319]],
                    ["map", "index", ["macro", 320], "dimension", ["macro", 321]],
                    ["map", "index", ["macro", 322], "dimension", ["macro", 323]],
                    ["map", "index", ["macro", 324], "dimension", ["macro", 325]],
                    ["map", "index", ["macro", 326], "dimension", ["macro", 327]],
                    ["map", "index", ["macro", 328], "dimension", ["macro", 329]],
                    ["map", "index", ["macro", 330], "dimension", ["macro", 331]],
                    ["map", "index", ["macro", 332], "dimension", ["macro", 333]],
                    ["map", "index", ["macro", 334], "dimension", ["macro", 39]],
                    ["map", "index", ["macro", 335], "dimension", ["macro", 336]],
                    ["map", "index", ["macro", 337], "dimension", ["macro", 338]],
                    ["map", "index", ["macro", 339], "dimension", ["macro", 340]],
                    ["map", "index", ["macro", 341], "dimension", ["macro", 342]],
                    ["map", "index", ["macro", 343], "dimension", ["macro", 344]],
                    ["map", "index", ["macro", 345], "dimension", ["macro", 346]],
                    ["map", "index", ["macro", 347], "dimension", ["macro", 348]],
                    ["map", "index", ["macro", 349], "dimension", ["macro", 350]],
                    ["map", "index", ["macro", 351], "dimension", ["macro", 352]],
                    ["map", "index", ["macro", 353], "dimension", ["macro", 354]],
                    ["map", "index", ["macro", 355], "dimension", ["macro", 356]],
                    ["map", "index", ["macro", 357], "dimension", ["macro", 358]],
                    ["map", "index", ["macro", 359], "dimension", ["macro", 360]],
                    ["map", "index", ["macro", 361], "dimension", ["macro", 362]],
                    ["map", "index", ["macro", 363], "dimension", ["macro", 364]],
                    ["map", "index", ["macro", 365], "dimension", ["macro", 366]],
                    ["map", "index", ["macro", 367], "dimension", ["macro", 368]],
                    ["map", "index", ["macro", 369], "dimension", ["macro", 370]],
                    ["map", "index", ["macro", 371], "dimension", ["macro", 372]],
                    ["map", "index", ["macro", 373], "dimension", ["macro", 374]],
                    ["map", "index", ["macro", 375], "dimension", ["macro", 376]],
                    ["map", "index", ["macro", 377], "dimension", ["macro", 378]],
                    ["map", "index", ["macro", 379], "dimension", ["macro", 380]],
                    ["map", "index", ["macro", 381], "dimension", ["macro", 382]],
                    ["map", "index", ["macro", 383], "dimension", ["macro", 384]],
                    ["map", "index", ["macro", 385], "dimension", ["macro", 386]],
                    ["map", "index", ["macro", 387], "dimension", ["macro", 388]],
                    ["map", "index", ["macro", 389], "dimension", ["macro", 390]],
                    ["map", "index", ["macro", 391], "dimension", ["macro", 392]],
                    ["map", "index", ["macro", 393], "dimension", ["macro", 394]],
                    ["map", "index", ["macro", 395], "dimension", ["macro", 396]],
                    ["map", "index", ["macro", 397], "dimension", ["macro", 398]],
                    ["map", "index", ["macro", 399], "dimension", ["macro", 400]],
                    ["map", "index", ["macro", 401], "dimension", ["macro", 402]],
                    ["map", "index", ["macro", 403], "dimension", ["macro", 404]],
                    ["map", "index", ["macro", 405], "dimension", ["macro", 406]],
                    ["map", "index", ["macro", 407], "dimension", ["macro", 408]],
                    ["map", "index", ["macro", 409], "dimension", ["macro", 410]],
                    ["map", "index", ["macro", 411], "dimension", ["macro", 412]]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 29],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false
            }, {
                "function": "__r"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventData.gaAction"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.watSegs"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.nytdOtherData.subscriptions.0.bundle"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.propensity.p"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.tracking.adv"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.propensity.c1"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.propensity.c2"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.propensity.c3"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventData.hit.hitType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.eventValue"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.eventCategory"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.metric0Key"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.metric1Key"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.metric2Key"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.eventAction"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.hit.eventLabel"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "eventData.hit.dimension0Key"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "1",
                "vtp_name": "eventData.hit.dimension0Value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "eventData.hit.dimension1Key"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "1",
                "vtp_name": "eventData.hit.dimension1Value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "eventData.hit.dimension2Key"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "1",
                "vtp_name": "eventData.hit.dimension2Value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.propensity.engagementLevel"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 218],
                "vtp_name": "session.etAgentId"
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "register",
                "vtp_enableMultiQueryKeys": false
            }, {
                "function": "__t"
            }, {
                "function": "__c",
                "vtp_value": "nzcub"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 83],
                "vtp_defaultValue": "https:\/\/et.stg.nytimes.com\/",
                "vtp_map": ["list", ["map", "key", "Production", "value", "https:\/\/et.nytimes.com\/"]]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 43],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": ["macro", 41],
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "dock", "value", ["macro", 53]],
                    ["map", "key", "gateway", "value", ["macro", 53]]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "application.environment"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 54],
                "vtp_name": "asset"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 54],
                "vtp_name": "user"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 54],
                "vtp_name": "session"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "pageview.id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 449],
                "vtp_name": "interaction.dfp_page_view_id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 54],
                "vtp_name": "pageview.performance"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "presentation"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "pageview.heartbeat"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "5000",
                "vtp_name": "pageview.heartbeat.heartbeatInterval"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "DL.user.retentionSegment"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "DL.user.subscriberInfo.coreDigiBundle"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "DL.user.subscriberInfo.coreHDBundle"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "gtm.newUrlFragment"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "gtm.oldUrlFragment"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "user.id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "error.type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "interaction.module.context"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "interaction.module.element.label"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.label"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.slug"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "interaction.module.progress"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "newsletter"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "module"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "interaction.module"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventData"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 54],
                "vtp_name": "viewport"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.progress.timeInGame"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.headline"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.sectionContent"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.subsection"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.authors"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.section"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.desFacets"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "asset.geofacets"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 480],
                "vtp_name": "asset.geoFacets"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.orgFacets"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.perFacets"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.subscriberInfo"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.nytdOtherData"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session.isLoggedIn"
            }, {
                "function": "__k",
                "vtp_decodeCookie": true,
                "vtp_name": "b2b_cig_opt"
            }, {
                "function": "__k",
                "vtp_decodeCookie": true,
                "vtp_name": "edu_cig_opt"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "asset.column"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.collectionName"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.emotions"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "card"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "block"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "pageview.ad"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 43],
                "vtp_defaultValue": ["macro", 41],
                "vtp_map": ["list", ["map", "key", "gateway", "value", ["macro", 53]],
                    ["map", "key", "article_complete", "value", ["macro", 53]]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "abtest.test"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "abtest.variant"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 85],
                "vtp_name": "abtest.url"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "slideshow"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 83],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": "https:\/\/a.et.stg.nytimes.com",
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "Production", "value", "https:\/\/a.et.nytimes.com"]]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "version"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return{asset:", ["escape", ["macro", 446], 8, 16], ",session:", ["escape", ["macro", 448], 8, 16], ",user:", ["escape", ["macro", 447], 8, 16], ",version:", ["escape", ["macro", 503], 8, 16], "}})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "allocs"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 505],
                "vtp_name": "abtest.batch"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "referrer.url"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.characterCount"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.collectionType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.contentTone"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.desk"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.edition"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.kicker"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.lastUpdatedTimestamp"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.originatingDesk"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.printPublishDate"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.series"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.sourceNewsOrg"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.sourceUSvsIntl"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.geoFacets"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "asset.typeOfMaterials"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.channel"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.collection"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.module.region"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.pagetype"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.source"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "interaction.subchannel"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "marketing.paidPostParameter"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "presentation.pageSubType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.DMA"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.isLoggedIn"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.contentId"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.durationGroup"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoAdDuration"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoAdPosition"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoDuration"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoFranchise"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoPrimaryPlaylistId"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoPrimaryPlaylistName"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoSection"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.mData.videoType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.referrer"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video.url"
            }, {
                "function": "__c",
                "vtp_value": "70"
            }, {
                "function": "__c",
                "vtp_value": "71"
            }, {
                "function": "__c",
                "vtp_value": "77"
            }, {
                "function": "__c",
                "vtp_value": "78"
            }, {
                "function": "__c",
                "vtp_value": "103"
            }, {
                "function": "__c",
                "vtp_value": "106"
            }, {
                "function": "__c",
                "vtp_value": "107"
            }, {
                "function": "__c",
                "vtp_value": "108"
            }, {
                "function": "__c",
                "vtp_value": "115"
            }, {
                "function": "__c",
                "vtp_value": "151"
            }, {
                "function": "__c",
                "vtp_value": "152"
            }, {
                "function": "__c",
                "vtp_value": "153"
            }, {
                "function": "__c",
                "vtp_value": "155"
            }, {
                "function": "__c",
                "vtp_value": "156"
            }, {
                "function": "__c",
                "vtp_value": "157"
            }, {
                "function": "__c",
                "vtp_value": "158"
            }, {
                "function": "__c",
                "vtp_value": "159"
            }, {
                "function": "__c",
                "vtp_value": "160"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.tracking.pageIndex"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.tracking.avgSessionTime"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.tracking.sessionIndex"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.tracking.firstReferrer"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user.tracking"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "card.id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "eventData.type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.tracking.activeDays"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "user.subscriptions"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "1",
                "vtp_name": "eventData.hit.metric0Value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "1",
                "vtp_name": "eventData.hit.metric2Value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventData.hit.customMetrics"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventData.hit.customMetric"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "1",
                "vtp_name": "eventData.hit.metric1Value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "module.region"
            }, {
                "function": "__c",
                "vtp_value": "nzcu0"
            }, {
                "function": "__d",
                "vtp_elementSelector": "html",
                "vtp_attributeName": "data-nyt-ab",
                "vtp_selectorType": "CSS"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "presentation.program.breakpoint.initial"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 579],
                "vtp_name": "presentation.program.breakpoint.rendered"
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false
            }, {
                "function": "__e"
            }, {
                "function": "__r"
            }, {
                "function": "__hid"
            }],
            "tags": [{
                "function": "__html",
                "priority": 1000,
                "teardown_tags": ["list", ["tag", 72, 2]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"gtm_et_tag\" type=\"text\/gtmscript\"\u003Eif(typeof window.nytAnalytics===\"object\")window.nytAnalytics.activeTime=0;\nEventTracker=function(){var etHost,et2Host,clazz;var lastEventTime=0;var nextCallbackNum=0;var getMetaTag=function(n,d){var i;var m=document.getElementsByTagName(\"meta\");for(i=m.length-1;i\u003E=0;i--)if(m[i].name===n)return m[i].content;return d||\"\"};var sourceApp=getMetaTag(\"sourceApp\",", ["escape", ["macro", 28], 8, 16], "||\"nyt-vi\");var populateET2PageviewId=function(_evt){_evt.et2_pageview_id=", ["escape", ["macro", 90], 8, 16], "};etHost=function(){var etHost=\"et.nytimes.com\",hosts=[\"et.stg.nytimes.com\",\"et.dev.nytimes.com\"],env=\n", ["escape", ["macro", 445], 8, 16], ";if(env)if(env===\"dev\"||env===\"stg\"||env===\"staging\"||env.indexOf(\"preview\")\u003E-1)etHost=hosts[0];else{if(env===\"dev\"||env===\"development\")etHost=hosts[1]}else if(\/alpha\\..*\\.nytimes\\.com$\/.test(location.hostname)===true)etHost=hosts[0];else if(\/\\.dev\\.nytimes\\.com$\/.test(location.hostname)===true)etHost=hosts[1];return etHost}();et2Host=function(){return\"nyt-etv2-dev.appspot.com\"}();var xhr=function(http_method,api_endpoint,success_callback){this.constructor.prototype.ajax=function(requestString){var xmlHttp=\nnew XMLHttpRequest;var self=this;if(typeof xmlHttp===\"undefined\")return false;xmlHttp.open(http_method,this.api_endpoint,true);xmlHttp.setRequestHeader(\"Content-type\",\"text\/plain; charset\\x3dutf-8\");xmlHttp.withCredentials=true;xmlHttp.onreadystatechange=function(){if(xmlHttp.readyState===XMLHttpRequest.DONE\u0026\u0026xmlHttp.status===200)if(typeof self===\"object\"\u0026\u0026typeof self.success===\"function\")self.success(JSON?JSON.parse(xmlHttp.responseText):xmlHttp.responseText)};if(typeof requestString!==\"undefined\")xmlHttp.send(requestString)};\nif(typeof api_endpoint!==\"undefined\"||typeof success_callback!==\"undefined\"||typeof http_method!==\"undefined\"){this.api_endpoint=api_endpoint;this.success=success_callback;return this}else return false};var buildUrl=function(url,params,useFieldOverwrites){var key,value,qs=\"\";for(key in params)if(params.hasOwnProperty(key)===true){value=params[key];qs+=(qs?\"\\x26\":\"\")+key+\"\\x3d\"+encodeURIComponent(value)}if(qs.length\u003E0)return url+\"?\"+qs;else return url};var copyObject=function(obj){var key,objCopy;\nif(arguments.length===2){objCopy=obj;obj=arguments[1]}else objCopy={};for(key in obj)if(obj.hasOwnProperty(key))objCopy[key]=obj[key];return objCopy};var stringifyJson=JSON?JSON.stringify:function(obj){var t=typeof obj;if(t!=\"object\"||obj===null){if(t==\"string\")obj='\"'+obj+'\"';return String(obj)}else{var n,v,json=[],arr=obj\u0026\u0026obj.constructor==Array;for(n in obj)if(obj.hasOwnProperty(n)){v=obj[n];t=typeof v;if(t==\"string\")v='\"'+v+'\"';else if(t==\"object\"\u0026\u0026v!==null)v=stringifyJson(v);json.push((arr?\"\":\n'\"'+n+'\":')+String(v))}return(arr?\"[\":\"{\")+String(json)+(arr?\"]\":\"}\")}};var extractPageMetaTags=function(obj){var name,content,i;var tags=document.getElementsByTagName(\"meta\");var whiteListObj={PT:\"\",CG:\"\",SCG:\"\",byl:\"\",tom:\"\",hdl:\"\",ptime:\"\",cre:\"\",articleid:\"\",channels:\"\",CN:\"\",CT:\"\"};var errorPageMap={PST:\"Error Page\",errorpage:\"true\"};obj=obj||{};obj.sourceApp=sourceApp;for(i=0;i\u003Ctags.length;i++){name=tags[i].getAttribute(\"name\");content=tags[i].getAttribute(\"content\");if(typeof name===\"string\"\u0026\u0026\ntypeof content===\"string\"){if(whiteListObj.hasOwnProperty(name))whiteListObj[name]=content;if(errorPageMap[name]===content)obj.errorPage=\"true\"}}if(whiteListObj.CG.toLowerCase()===\"opinion\"){whiteListObj.channels+=whiteListObj.channels===\"\"?\"\":\";\";whiteListObj.channels+=whiteListObj.CG.toLowerCase()}function assetDataBackfill(whiteListObj){var assetData=", ["escape", ["macro", 446], 8, 16], "||{},assetBackfill={PT:", ["escape", ["macro", 55], 8, 16], ",articleid:assetData.id,hdl:assetData.headline,ptime:assetData.publishedTimestamp,\nbyl:Array.isArray(assetData.authors)\u0026\u0026assetData.authors.join(\",\"),CG:assetData.section,SCG:assetData.subSection,tom:assetData.tom,cre:assetData.newsSource},backfillKeys=Object.keys(assetBackfill),backFilled=\"\";for(i=0;i\u003CbackfillKeys.length;i++)if(!whiteListObj[backfillKeys[i]]\u0026\u0026assetBackfill[backfillKeys[i]]){if(backFilled)backFilled+=\",\";whiteListObj[backfillKeys[i]]=assetBackfill[backfillKeys[i]];backFilled+=backfillKeys[i]}whiteListObj.backfilled=backFilled}assetDataBackfill(whiteListObj);return obj.pageMetaData=\nstringifyJson(whiteListObj)};var additionalClientData=function(obj){var date,data;data={\"ul\":function(){var ul;if(navigator.appName===\"Netscape\")ul=navigator.language;else ul=navigator.userLanguage;return ul}(),\"js\":\"Yes\",\"jv\":function(){var agt=navigator.userAgent.toLowerCase(),major=parseInt(navigator.appVersion,10),mac=agt.indexOf(\"mac\")!=-1,ff=agt.indexOf(\"firefox\")!=-1,ff0=agt.indexOf(\"firefox\/0.\")!=-1,ff10=agt.indexOf(\"firefox\/1.0\")!=-1,ff15=agt.indexOf(\"firefox\/1.5\")!=-1,ff2up=ff\u0026\u0026!ff0\u0026\u0026!ff10\u0026\u0026\n!ff15,nn=!ff\u0026\u0026agt.indexOf(\"mozilla\")!=-1\u0026\u0026agt.indexOf(\"compatible\")==-1,nn4=nn\u0026\u0026major===4,nn6up=nn\u0026\u0026major\u003E=5,ie=agt.indexOf(\"msie\")!=-1\u0026\u0026agt.indexOf(\"opera\")==-1,ie4=ie\u0026\u0026major==4\u0026\u0026agt.indexOf(\"msie 4\")!=-1,ie5up=ie\u0026\u0026!ie4,op=agt.indexOf(\"opera\")!=-1,op5=agt.indexOf(\"opera 5\")!=-1||agt.indexOf(\"opera\/5\")!=-1,op6=agt.indexOf(\"opera 6\")!=-1||agt.indexOf(\"opera\/6\")!=-1,op7up=op\u0026\u0026!op5\u0026\u0026!op6,jv=\"1.1\";if(ff2up===true)jv=\"1.7\";else if(ff15===true)jv=\"1.6\";else if(ff0===true||ff10===true||nn6up===true||op7up===\ntrue)jv=\"1.5\";else if(mac===true\u0026\u0026ie5up===true||op6===true)jv=\"1.4\";else if(ie5up===true||nn4===true||op5===true)jv=\"1.3\";else if(ie4===true)jv=\"1.2\";return jv}(),\"fi\":\"No\"};date=new Date;data.tz=date.getTimezoneOffset()\/60*-1;data.bh=date.getHours();if(typeof screen===\"object\"){if(navigator.appName===\"Netscape\")data.cd=screen.pixelDepth;else data.cd=screen.colorDepth;data.sr=screen.width+\"x\"+screen.height}if(parseInt(navigator.appVersion,10)\u003E3)if(navigator.appName===\"Microsoft Internet Explorer\"\u0026\u0026\ndocument.body)data.bs=document.body.offsetWidth+\"x\"+document.body.offsetHeight;else if(navigator.appName===\"Netscape\")data.bs=window.innerWidth+\"x\"+window.innerHeight;if(typeof navigator.javaEnabled()===\"boolean\")data.jo=navigator.javaEnabled()?\"Yes\":\"No\";(function(){var i,flash;if(window.ActiveXObject)for(i=50;i\u003E0;i-=1)try{flash=new window.ActiveXObject(\"ShockwaveFlash.ShockwaveFlash.\"+i);data.fi=\"Yes\";data.fv=i+\".0\";break}catch(e){}else if(navigator.plugins\u0026\u0026navigator.plugins.length)for(i=0;i\u003Cnavigator.plugins.length;i+=\n1)if(navigator.plugins[i].name.indexOf(\"Shockwave Flash\")!=-1){data.fi=\"Yes\";data.fv=navigator.plugins[i].description.split(\" \")[2];break}})();if(window.matchMedia)if(window.matchMedia(\"(orientation: portrait)\").matches===true)data.or=\"port\";else if(window.matchMedia(\"(orientation: landscape)\").matches===true)data.or=\"land\";obj.additionalClientData=stringifyJson(data);return obj};clazz=function(){var trackNow,agentId,mergeNewData,getBaseUrl;var datumId=null;var parentDatumId=null;var firedFirstEvent=\nfalse;var firstEventReturned=false;var scripts=[];var queue=[];var newData=[];var et2agentId;var et2datumId=null;var et2parentDatumId=null;var firstET2EventReturned=false;var etAgentIdEventFired=false;if(this instanceof window.EventTracker===false)return new window.EventTracker;getBaseUrl=function(opts){if(typeof opts===\"object\"\u0026\u0026opts.et2)return false;return\"https:\/\/\"+etHost+\"\/\"};trackNow=function(evt,options){var scriptElem,oldScriptElem,et2evt;var callbackNum=nextCallbackNum;var useOverwrites=options\u0026\u0026\noptions.useFieldOverwrites===true?true:false;nextCallbackNum+=1;window.EventTracker[\"cb\"+callbackNum]=function(result){var i;delete window.EventTracker[\"cb\"+callbackNum];if(result.status\u0026\u0026result.status===\"OK\"){if(!datumId\u0026\u0026options.buffer\u0026\u0026!firstEventReturned){firstEventReturned=true;datumId=result.datumIds\u0026\u0026result.datumIds.length?result.datumIds[0]:result.datumId;for(i=0;i\u003Cqueue.length;i+=1)trackNow(queue[i].evt,queue[i].options);queue=[]}if(!agentId)agentId=result.agentId;if(options.callback)options.callback(null,\nresult)}else if(options.callback)options.callback(new Error(\"Event tracking failed\"),result)};evt=copyObject(evt);if(!options.buffer)evt.instant=\"1\";evt.callback=\"window.EventTracker.cb\"+callbackNum;if(datumId\u0026\u0026options.buffer)evt.datumId=datumId;if(options.sendMeta)extractPageMetaTags(evt);if(options.collectClientData)additionalClientData(evt);if(agentId){evt.agentId=agentId;if(!etAgentIdEventFired){etAgentIdEventFired=true;dataLayer.push({event:\"etAgentId\",session:{etAgentId:agentId}})}}if(options.config){options.config.merge(evt);\nif(evt._isNewPageTracker){delete evt.datumId;datumId=null;firstEventReturned=false;firstET2EventReturned=false;delete evt._isNewPageTracker}}var requestUrl=buildUrl(getBaseUrl(),evt,useOverwrites);var et2Url=getBaseUrl({\"et2\":true});if(et2Url){window.EventTracker[\"et2cb\"+callbackNum]=function(result){var i;delete window.EventTracker[\"et2cb\"+callbackNum];if(result.status\u0026\u0026result.status===\"OK\"){if(!et2datumId\u0026\u0026options.buffer\u0026\u0026!firstET2EventReturned){firstET2EventReturned=true;et2datumId=result.datumIds\u0026\u0026\nresult.datumIds.length?result.datumIds[0]:result.datumId;for(i=0;i\u003Cqueue.length;i+=1)trackNow(queue[i].evt,queue[i].options);queue=[]}if(!et2agentId)et2agentId=result.agentId}};et2evt=copyObject(evt);et2evt.callback=\"window.EventTracker.et2cb\"+callbackNum;if(et2datumId\u0026\u0026options.buffer)et2evt.datumId=et2datumId;if(et2evt.subject!==\"page\")et2evt.parentDatumId=et2parentDatumId;if(et2agentId)et2evt.agentId=et2agentId}if(requestUrl.length\u003C2048){scriptElem=document.createElement(\"script\");scriptElem.src=\nrequestUrl;document.body.appendChild(scriptElem);scripts.push(scriptElem);if(et2Url){var scriptElemET2;requestUrl=buildUrl(et2Url,et2evt,useOverwrites);scriptElemET2=document.createElement(\"script\");scriptElemET2.src=requestUrl;document.body.appendChild(scriptElemET2);scripts.push(scriptElemET2)}if(scripts.length\u003E5){oldScriptElem=scripts.shift();document.body.removeChild(oldScriptElem)}}else{var XHR=new xhr(\"POST\",getBaseUrl(),window.EventTracker[\"cb\"+callbackNum]);XHR.ajax(requestUrl.split(\"?\",2)[1]);\nif(et2Url){requestUrl=buildUrl(et2Url,et2evt,useOverwrites);XHR=new xhr(\"POST\",et2Url,window.EventTracker[\"et2cb\"+callbackNum]);XHR.ajax(requestUrl.split(\"?\",2)[1])}}};mergeNewData=function(target,reset){var newDataItem,i,key;if(newData.length\u003E0){for(i=0;i\u003CnewData.length;i++){newDataItem=newData[i];for(key in newDataItem)if(newDataItem.hasOwnProperty(key))target[key]=newDataItem[key]}if(reset)newData=[]}return target};this.track=function(evt,options){options=options||{};if(!options.background)lastEventTime=\n(new Date).valueOf();if(evt.subject!==\"page\"\u0026\u0026this.getParentDatumId()!==null)evt.parentDatumId=this.getParentDatumId();if(evt.subject!==\"page\"\u0026\u0026this.getET2ParentDatumId()!==null)this.getET2ParentDatumId();populateET2PageviewId(evt);evt.sourceApp=sourceApp;evt.gtm=", ["escape", ["macro", 84], 8, 16], ";evt=mergeNewData(evt,true);if(evt.subject!==\"page\"||evt.subject===\"page\"\u0026\u0026(!firedFirstEvent||evt._isNewPageTracker)){var assetData=", ["escape", ["macro", 446], 8, 16], ",skipFilters=[\"content\",\"jkiddata\"],dlUser=", ["escape", ["macro", 447], 8, 16], ",\ndlSession=", ["escape", ["macro", 448], 8, 16], ";delete assetData.storyElements;assetData.jkiddSrc=\"fe\";evt.assetData=JSON.stringify(assetData);if(false\u0026\u0026dlUser){var userData={\"userType\":dlUser.type,\"regiId\":dlUser.regiId,\"isNewsSubscriber\":dlUser.isNewsSubscriber?dlUser.isNewsSubscriber:0,\"loggedIn\":0,\"jkiddSrc\":\"fe\"};if(dlUser.subscriptions){userData.subscriptions=[dlUser.subscriptions];userData.lastUpdate=dlUser.lastUpdate}if(dlSession\u0026\u0026dlSession.isLoggedIn)userData.loggedIn=1;evt.userData=JSON.stringify(userData);\nskipFilters.push(\"userdata\")}evt.skipFilter=JSON.stringify(skipFilters)}if(!options.buffer)trackNow(evt,options);else if(datumId||firstEventReturned||!firedFirstEvent){firedFirstEvent=true;trackNow(evt,options)}else queue.push({evt:copyObject(evt),options:copyObject(options)})};this.updateData=function(oArg){if(oArg instanceof Array)newData=newData.concat(oArg);else if(typeof oArg===\"object\")newData.push(oArg)};this.hasTrackedEventRecently=function(){return(new Date).valueOf()-lastEventTime\u003C96E4};\nthis.getDatumId=function(){return datumId};this.getET2DatumId=function(){return et2datumId};this.getParentDatumId=function(){if(parentDatumId===null\u0026\u0026window.pageEventTracker\u0026\u0026window.pageEventTracker.getDatumId()!==null)parentDatumId=window.pageEventTracker.getDatumId();return parentDatumId};this.getET2ParentDatumId=function(){if(et2parentDatumId===null\u0026\u0026window.pageEventTracker\u0026\u0026window.pageEventTracker.getET2DatumId()!==null)et2parentDatumId=window.pageEventTracker.getET2DatumId();return et2parentDatumId};\nthis.pixelTrack=function(evt,qs){var imgsrc,validEvt,validQs;validEvt=function(e){var k;if(typeof e!==\"object\")return false;for(k in e)if(e.hasOwnProperty(k))return true;return false}(evt);validQs=typeof qs===\"string\"\u0026\u0026qs!==\"\";if(!validEvt\u0026\u0026!validQs)return;imgsrc=\"https:\/\/\"+etHost+\"\/pixel\";if(validEvt)imgsrc=buildUrl(imgsrc,evt);if(validQs)imgsrc+=(imgsrc.indexOf(\"?\")===-1?\"?\":\"\\x26\")+qs;imgsrc+=\"\\x26gtm\\x3d", ["escape", ["macro", 84], 7], "\";(new Image).src=imgsrc};this.buildUrl=buildUrl;this.mergeNewData=mergeNewData;\nthis.getBaseUrl=getBaseUrl;this.populateET2PageviewId=populateET2PageviewId;this.xhr=xhr;this.trackPost=function(evt,options){options=options||{};if(this.xhr)this.xhr(\"POST\",getBaseUrl(),options.callback).ajax(evt)}};clazz.Utils={copyObject:copyObject,stringifyJson:stringifyJson};return clazz}();\nwindow.EventTracker.Config=function(config){var etConfig=config||{};var _config=etConfig.event||{};var _options=etConfig.options||{};var processed={};var getValue=function(value){return typeof value===\"function\"?value():value};return{isSuppressed:function(name){var value=_config[name];return value\u0026\u0026value.suppress===true},get:function(name,defVal){var oneConfig,arr,value;if(oneConfig=_config[name]){if(oneConfig.suppress===true)return;if(oneConfig.repeat===false)processed[name]=1;if(defVal){arr=oneConfig.overwrite===\nfalse?[defVal,oneConfig.value]:[oneConfig.value,defVal];while(arr.length\u003E0)if(typeof(value=getValue(arr.shift()))!==\"undefined\")return value}else return getValue(oneConfig.value)}processed[name]=1;return getValue(defVal)},getOptions:function(name){return getValue(_options[name])},getOption:function(name,defVal){return _options.general\u0026\u0026_options.general[name]?_options.general[name]:defVal},merge:function(evt){var name,value;for(name in _config)if(_config.hasOwnProperty(name)){if(processed[name])continue;\nvalue=_config[name];if(value\u0026\u0026value.suppress===true){delete evt[name];continue}if(typeof(value=this.get(name,evt[name]))!==\"undefined\")evt[name]=value}}}};clearTimeout(window.pageEventTrackerTimeout);window.pageEventTrackerTimeout=0;\nwindow.pageEventTracker=function(updateFrequency){var genUUID=function(){return\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(\/[xy]\/g,function(c){var r=Math.random()*16|0,v=c===\"x\"?r:r\u00263|8;return v.toString(16)})};var setUpdateTimeout,bgTrackerTrack,evt;var utils=window.EventTracker.Utils;var tracker=new window.EventTracker;var impressions=[];var viewport_detail=[];var startTime=(new Date).valueOf();var config=new window.EventTracker.Config(window.EventTrackerPageConfig);var subject=config.get(\"subject\",\n\"page\");var url=config.get(\"url\",document.location.href);var referrer=config.get(\"referrer\",", ["escape", ["macro", 103], 8, 16], ");var linkTags=document.getElementsByTagName(\"link\");var assetUrl=config.get(\"assetUrl\",function(u){return function(){var i,link;var href=u||document.location.href,links=linkTags||[];var seenCanonicalOverride=false;if(links\u0026\u0026links.length\u003E0)for(i=0;i\u003Clinks.length;i++){link=links[i];if(link)if(link.rel===\"canonicalOverride\"){href=link.href;seenCanonicalOverride=true;break}else if(!seenCanonicalOverride\u0026\u0026\nlink.rel===\"canonical\"){href=link.href;break}}return href}}(url));if(", ["escape", ["macro", 111], 8, 16], "\u0026\u0026typeof url===\"string\"){var connector=url.indexOf(\"?\")\u003E-1?\"\\x26\":\"?\";url+=connector+\"WT.z_jog\\x3d1\"}var baseEvt={subject:subject,url:url,assetUrl:", ["escape", ["macro", 30], 8, 16], "||assetUrl,referrer:", ["escape", ["macro", 103], 8, 16], "||referrer,clientTimeStamp:Date.now(),totalTime:0,evtUUID:genUUID(),gtm:", ["escape", ["macro", 84], 8, 16], "};var resetTimeout=function(){clearTimeout(window.pageEventTrackerTimeout);window.pageEventTrackerTimeout=\n0};var addImpressions=function(myevt){if(impressions.length===0)return;myevt.impressions=utils.stringifyJson(impressions);impressions.length=0};var addViewportDetails=function(myevt){if(!", ["escape", ["macro", 70], 8, 16], "||viewport_detail.length===0)return;myevt.viewport_detail=utils.stringifyJson(viewport_detail);viewport_detail.length=0};tracker.addModuleImpression=function(module){if(config.isSuppressed(\"impressions\"))return;impressions.unshift(utils.copyObject(module));if(module.priority){delete module.priority;\nthis.shortCircuit()}};tracker.addViewportDetail=function(viewport){if(config.isSuppressed(\"viewport_detail\"))return;viewport_detail.unshift(utils.copyObject(viewport))};updateFrequency=config.getOption(\"updateFrequency\",6E4);bgTrackerTrack=function(isNewPageConfig){var newEvt=tracker.mergeNewData(utils.copyObject(baseEvt),false);newEvt.totalTime=(new Date).valueOf()-startTime;if(", ["escape", ["macro", 450], 8, 16], ")newEvt.page_view_id=", ["escape", ["macro", 450], 8, 16], ";if(", ["escape", ["macro", 451], 8, 16], ")newEvt.performance=JSON.stringify(", ["escape", ["macro", 451], 8, 16], ");\nif(", ["escape", ["macro", 452], 8, 16], ")newEvt.presentation=JSON.stringify(", ["escape", ["macro", 452], 8, 16], ");addImpressions(newEvt);addViewportDetails(newEvt);if(isNewPageConfig){newEvt._isNewPageTracker=true;tracker.populateET2PageviewId(newEvt)}tracker.track(newEvt,{background:true,useFieldOverwrites:true,buffer:true,callback:setUpdateTimeout,config:config})};setUpdateTimeout=function(){if(window.pageEventTrackerTimeout)resetTimeout();if(", ["escape", ["macro", 453], 8, 16], "\u0026\u0026", ["escape", ["macro", 454], 8, 16], ")return;window.pageEventTrackerTimeout=\nsetTimeout(function(){if(!tracker.getDatumId()){setUpdateTimeout();return}else if(!tracker.hasTrackedEventRecently())return;window.pageEventTrackerTimeout=0;bgTrackerTrack()},updateFrequency)};evt=tracker.mergeNewData(utils.copyObject(baseEvt),false);addImpressions(evt);addViewportDetails(evt);if(", ["escape", ["macro", 450], 8, 16], ")evt.page_view_id=", ["escape", ["macro", 450], 8, 16], ";if(", ["escape", ["macro", 451], 8, 16], ")evt.performance=JSON.stringify(", ["escape", ["macro", 451], 8, 16], ");if(", ["escape", ["macro", 452], 8, 16], ")evt.presentation=JSON.stringify(", ["escape", ["macro", 452], 8, 16], ");\n(function(){var links=linkTags||document.getElementsByTagName(\"link\");var objList=[];var link;for(var l=0;l\u003Clinks.length;l++){link=links[l];if(link\u0026\u0026link.rel===\"alternate\"\u0026\u0026link.hreflang)objList.push({\"language\":link.hreflang,\"url\":link.href})}if(objList.length\u003E0)evt.alternate=JSON.stringify(objList)})();tracker.populateET2PageviewId(evt);tracker.track(evt,utils.copyObject({sendMeta:true,useFieldOverwrites:true,buffer:true,collectClientData:true,callback:setUpdateTimeout,config:config},config.getOptions(\"firstcall\")));\ntracker.shortCircuit=function(){if(window.pageEventTrackerTimeout)resetTimeout();bgTrackerTrack()};tracker.trackNewPage=function(oConfig){if(!oConfig)return;oConfig.totalTime={value:0,repeat:false};var eventTrackerPageConfig={event:oConfig};config=new window.EventTracker.Config(eventTrackerPageConfig);if(window.pageEventTrackerTimeout)resetTimeout();bgTrackerTrack(true)};return tracker}();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 4
            }, {
                "function": "__html",
                "priority": 100,
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E!function(b){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var a=window.pintrk;a.queue=[];a.version=\"3.0\";a=document.createElement(\"script\");a.async=!0;a.src=b;b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(\"https:\/\/s.pinimg.com\/ct\/core.js\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 145
            }, {
                "function": "__csm",
                "once_per_event": true,
                "vtp_clientId": "3005403",
                "tag_id": 12
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["macro", 48],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 413],
                "vtp_eventAction": ["macro", 47],
                "vtp_eventLabel": ["macro", 52],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_eventValue": ["macro", 63],
                "vtp_metric": ["list", ["map", "index", ["macro", 75], "metric", ["macro", 76]]],
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 29],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 36
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": ["macro", 27],
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["macro", 24],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 413],
                "vtp_eventAction": ["macro", 21],
                "vtp_eventLabel": ["macro", 26],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_metric": ["list", ["map", "index", ["macro", 20], "metric", "1"]],
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 29],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 37
            }, {
                "function": "__ua",
                "setup_tags": ["list", ["tag", 74, 0]],
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_gaSettings": ["macro", 413],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 29],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 38
            }, {
                "function": "__img",
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/www.nytimes.com\/svc\/comscore\/pvc.html",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 414],
                "tag_id": 46
            }, {
                "function": "__ua",
                "teardown_tags": ["list", ["tag", 70, 0]],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": "scroll",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_enableLinkId": false,
                "vtp_gaSettings": ["macro", 413],
                "vtp_eventAction": ["macro", 415],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 29],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 52
            }, {
                "function": "__img",
                "setup_tags": ["list", ["tag", 48, 0]],
                "teardown_tags": ["list", ["tag", 47, 0]],
                "once_per_load": true,
                "vtp_useCacheBuster": true,
                "vtp_url": ["template", "https:\/\/stags.bluekai.com\/site\/50136?limit=1\u0026id=", ["escape", ["macro", 218], 12]],
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 414],
                "tag_id": 93
            }, {
                "function": "__flc",
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u4", "value", ["macro", 416]],
                    ["map", "key", "u5", "value", ["macro", 417]],
                    ["map", "key", "u6", "value", ["macro", 418]],
                    ["map", "key", "u7", "value", ["macro", 218]],
                    ["map", "key", "u8", "value", ["macro", 16]],
                    ["map", "key", "u10", "value", ["macro", 103]],
                    ["map", "key", "u11", "value", ["macro", 419]],
                    ["map", "key", "u12", "value", ["macro", 420]],
                    ["map", "key", "u13", "value", ["macro", 421]],
                    ["map", "key", "u14", "value", ["macro", 422]],
                    ["map", "key", "u15", "value", ["macro", 423]],
                    ["map", "key", "u16", "value", ["macro", 28]],
                    ["map", "key", "u17", "value", ["macro", 85]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "allpa0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "nyti-0",
                "vtp_ordinalType": "UNIQUE",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalUnique": "1",
                "vtp_number": ["macro", 414],
                "vtp_url": ["macro", 95],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 115
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventValue": ["macro", 425],
                "vtp_eventCategory": ["macro", 426],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_metric": ["list", ["map", "index", ["macro", 427], "metric", "1"],
                    ["map", "index", ["macro", 428], "metric", "1"],
                    ["map", "index", ["macro", 429], "metric", "1"]
                ],
                "vtp_gaSettings": ["macro", 413],
                "vtp_eventAction": ["macro", 430],
                "vtp_eventLabel": ["macro", 431],
                "vtp_dimension": ["list", ["map", "index", ["macro", 432], "dimension", ["macro", 433]],
                    ["map", "index", ["macro", 434], "dimension", ["macro", 435]],
                    ["map", "index", ["macro", 436], "dimension", ["macro", 437]],
                    ["map", "index", ["macro", 143], "dimension", ["macro", 144]]
                ],
                "vtp_trackingId": ["macro", 29],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 118
            }, {
                "function": "__flc",
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u4", "value", ["macro", 416]],
                    ["map", "key", "u5", "value", ["macro", 279]],
                    ["map", "key", "u6", "value", ["macro", 438]],
                    ["map", "key", "u7", "value", ["macro", 439]],
                    ["map", "key", "u8", "value", ["macro", 16]],
                    ["map", "key", "u9", "value", ["macro", 85]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "newsl0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "nyti-0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalStandard": ["macro", 414],
                "vtp_url": ["macro", 95],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 121
            }, {
                "function": "__img",
                "once_per_event": true,
                "vtp_useCacheBuster": false,
                "vtp_url": "https:\/\/dc.ads.linkedin.com\/collect\/?pid=105730\u0026conversionId=370658\u0026fmt=gif",
                "tag_id": 127
            }, {
                "function": "__img",
                "once_per_event": true,
                "vtp_useCacheBuster": false,
                "vtp_url": "https:\/\/5106.xg4ken.com\/pixel\/v1?track=1\u0026token=779fa3a5-6ae4-446a-b2cc-4fb016736663\u0026conversionType=Registers\u0026revenue=0.0\u0026currency=USD\u0026orderId=\u0026promoCode=\u0026customParam1=\u0026customParam2=",
                "tag_id": 128
            }, {
                "function": "__img",
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/5106.xg4ken.com\/pixel\/v1?track=1\u0026token=779fa3a5-6ae4-446a-b2cc-4fb016736663\u0026conversionType=Gateway\u0026revenue=0.0\u0026currency=USD\u0026orderId=\u0026promoCode=\u0026customParam1=\u0026customParam2=\"",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 414],
                "tag_id": 129
            }, {
                "function": "__flc",
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u4", "value", ["macro", 416]],
                    ["map", "key", "u5", "value", ["macro", 417]],
                    ["map", "key", "u6", "value", ["macro", 418]],
                    ["map", "key", "u7", "value", ["macro", 218]],
                    ["map", "key", "u8", "value", ["macro", 16]],
                    ["map", "key", "u10", "value", ["macro", 103]],
                    ["map", "key", "u11", "value", ["macro", 419]],
                    ["map", "key", "u12", "value", ["macro", 420]],
                    ["map", "key", "u13", "value", ["macro", 421]],
                    ["map", "key", "u14", "value", ["macro", 422]],
                    ["map", "key", "u15", "value", ["macro", 423]],
                    ["map", "key", "u16", "value", ["macro", 28]],
                    ["map", "key", "u17", "value", ["macro", 85]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "conve0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "regi0",
                "vtp_ordinalType": "UNIQUE",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalUnique": "1",
                "vtp_number": ["macro", 414],
                "vtp_url": ["macro", 95],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 133
            }, {
                "function": "__img",
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/dc.ads.linkedin.com\/collect\/?pid=105730\u0026conversionId=370666\u0026fmt=gif",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 414],
                "tag_id": 135
            }, {
                "function": "__twitter_website_tag",
                "once_per_event": true,
                "vtp_event_type": "Signup",
                "vtp_twitter_pixel_id": ["macro", 442],
                "tag_id": 136
            }, {
                "function": "__twitter_website_tag",
                "once_per_event": true,
                "vtp_event_type": "CompleteRegistration",
                "vtp_twitter_pixel_id": "nzcu8",
                "tag_id": 137
            }, {
                "function": "__flc",
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u4", "value", ["macro", 416]],
                    ["map", "key", "u5", "value", ["macro", 417]],
                    ["map", "key", "u6", "value", ["macro", 418]],
                    ["map", "key", "u7", "value", ["macro", 218]],
                    ["map", "key", "u8", "value", ["macro", 16]],
                    ["map", "key", "u10", "value", ["macro", 103]],
                    ["map", "key", "u11", "value", ["macro", 419]],
                    ["map", "key", "u12", "value", ["macro", 420]],
                    ["map", "key", "u13", "value", ["macro", 421]],
                    ["map", "key", "u14", "value", ["macro", 422]],
                    ["map", "key", "u15", "value", ["macro", 423]],
                    ["map", "key", "u16", "value", ["macro", 28]],
                    ["map", "key", "u17", "value", ["macro", 85]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "remar0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "gatew0",
                "vtp_ordinalType": "UNIQUE",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "5290727",
                "vtp_ordinalUnique": "1",
                "vtp_number": ["macro", 414],
                "vtp_url": ["macro", 95],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "tag_id": 138
            }, {
                "function": "__img",
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/5106.xg4ken.com\/pixel\/v1?track=1\u0026token=779fa3a5-6ae4-446a-b2cc-4fb016736663\u0026conversionType=Newsletters\u0026revenue=0.0\u0026currency=USD\u0026orderId=\u0026promoCode=\u0026customParam1=\u0026customParam2=",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 414],
                "tag_id": 139
            }, {
                "function": "__awct",
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "1008590664",
                "vtp_conversionLabel": "15HpCJzjkogBEMi-9-AD",
                "vtp_url": ["macro", 95],
                "vtp_enableProductReportingCheckbox": false,
                "tag_id": 153
            }, {
                "function": "__gclidw",
                "once_per_event": true,
                "vtp_enableCrossDomain": false,
                "vtp_enableCookieOverrides": false,
                "vtp_enableCrossDomainFeature": true,
                "tag_id": 159
            }, {
                "function": "__img",
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/conv-tm.everesttech.net\/stats\/1\/conv?cpk=r8r9vJweeOxyOVE1yJjr\u0026cak=qUqrnV6o1YdrHwpOUDqY",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 414],
                "tag_id": 160
            }, {
                "function": "__img",
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/rtd-tm.everesttech.net\/upi\/?sid=7hUAYoSZMFEXrlLULNp7\u0026cs=1",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 414],
                "tag_id": 161
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "registration",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 413],
                "vtp_eventAction": "register",
                "vtp_eventLabel": ["macro", 440],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 163
            }, {
                "function": "__img",
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": ["template", ["escape", ["macro", 443], 14, 3], "pixel?url=", ["escape", ["macro", 86], 12], "\u0026referrer=", ["escape", ["macro", 88], 12], "\u0026subject=registration-event\u0026eventName=registered\u0026sourceApp=nyt-vi\u0026instant=1\u0026gtm=", ["escape", ["macro", 84], 12]],
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 414],
                "tag_id": 164
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": true,
                "vtp_eventValue": ["macro", 63],
                "vtp_eventCategory": ["macro", 48],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_metric": ["list", ["map", "index", ["macro", 75], "metric", ["macro", 76]]],
                "vtp_gaSettings": ["macro", 413],
                "vtp_eventAction": "impression",
                "vtp_eventLabel": ["macro", 52],
                "vtp_trackingId": ["macro", 29],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 165
            }, {
                "function": "__img",
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": ["template", ["escape", ["macro", 443], 14, 3], "pixel?url=", ["escape", ["macro", 86], 12], "\u0026referrer=", ["escape", ["macro", 88], 12], "\u0026subject=registration-event\u0026eventName= hitRegiWall\u0026sourceApp=nyt-vi\u0026instant=1\u0026gtm=", ["escape", ["macro", 84], 12]],
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 414],
                "tag_id": 166
            }, {
                "function": "__hl",
                "tag_id": 176
            }, {
                "function": "__hl",
                "tag_id": 177
            }, {
                "function": "__hl",
                "tag_id": 178
            }, {
                "function": "__hl",
                "tag_id": 179
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.facebookPixel=function(g){function m(b){b=b||{};var a=b.pixelName||\"PageView\";b=f(b,e);fbq(\"track\",a,b)}function f(b,a){var c;b=b||{};a=a||{};for(c in a)b[c]=a[c]\u0026\u0026\"object\"===typeof a[c]?b[c]\u0026\u0026\"object\"===typeof b[c]?f(b[c],a[c]):f({},a[c]):a[c];return b}function n(b){for(var a=2166136261,c=0;c\u003Cb.length;++c)a^=b.charCodeAt(c),a+=(a\u003C\u003C1)+(a\u003C\u003C4)+(a\u003C\u003C7)+(a\u003C\u003C8)+(a\u003C\u003C24);return a\u003E\u003E\u003E0}g=", ["escape", ["macro", 14], 8, 16], ";var l=", ["escape", ["macro", 439], 8, 16], ",k=", ["escape", ["macro", 438], 8, 16], ",e={ad:", ["escape", ["macro", 419], 8, 16], ",articleId:", ["escape", ["macro", 420], 8, 16], "||\n\"\",fbk:localStorage.getItem(\"kxsegs\")||\"\",pScore:", ["escape", ["macro", 418], 8, 16], ",c1Score:", ["escape", ["macro", 421], 8, 16], ",c2Score:", ["escape", ["macro", 422], 8, 16], ",c3Score:", ["escape", ["macro", 423], 8, 16], ",sourceApp:", ["escape", ["macro", 28], 8, 16], "||\"nyt-vi\",watSegs:", ["escape", ["macro", 416], 8, 16], ",fbBrowser:\/\\\/FBIOS\/i.test(navigator.userAgent),content_ids:[n(window.location.pathname)],content_type:\"product\",content_category:nytAnalytics.pagemeta[\"dfp-ad-unit-path\"]||\"\",userAgent:navigator.userAgent,mc:", ["escape", ["macro", 213], 8, 16], "||\"\",referrer:", ["escape", ["macro", 103], 8, 16], ",\npageType:", ["escape", ["macro", 55], 8, 16], "};g\u0026\u0026\"anon\"!==g.toLowerCase()\u0026\u0026(e.userType=g,e.retentionRiskSegment=", ["escape", ["macro", 455], 8, 16], ",e.bundleCoreDigi=", ["escape", ["macro", 456], 8, 16], ",e.bundleCoreHD=", ["escape", ["macro", 457], 8, 16], ");l\u0026\u0026(e.agentID=l);\"number\"==typeof k\u0026\u00260\u003Ck\u0026\u0026(e.engagementLevel=k);window.fbq\u0026\u0026window.nytfbqInitialized||(window.nytfbqInitialized=!0,function(b){!function(a,b,e,g,d,h,f){a.fbq||(d=a.fbq=function(){d.callMethod?d.callMethod.apply(d,arguments):d.queue.push(arguments)},a._fbq||(a._fbq=d),d.push=d,d.loaded=\n!0,d.version=\"2.0\",d.queue=[],h=b.createElement(e),h.async=!0,h.src=g,f=b.getElementsByTagName(e)[0],f.parentNode.insertBefore(h,f))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"592202027582499\")}());return{fire:m}}();", ["escape", ["macro", 440], 8, 16], "\u0026\u0026window.facebookPixel.fire({pixelName:\"CompleteRegistration\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 6
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E\"object\"===typeof window.dataLayer\u0026\u0026window.dataLayer.push({video:\"\",asset:\"\",viewport:\"\"});\"object\"===typeof window.nytAnalytics\u0026\u0026window.nytAnalytics.resetPage();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 10
            }, {
                "function": "__html",
                "once_per_load": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){nytAnalytics=window.nytAnalytics||{};var e=function(a){return 10\u003Ea?\"0\"+a:a},f=function(a){var c=-5;if(10\u003Ea.getUTCMonth()\u0026\u00262\u003Ca.getUTCMonth())c=-4;else if(2===a.getUTCMonth()){var b=new Date(a.getUTCFullYear(),2,8,-5);b=0===b.getUTCDay()?8:15-b.getUTCDay();if(a.getUTCDate()\u003Eb||a.getUTCDate()===b\u0026\u00266\u003Ca.getUTCHours())c=-4}else 10===a.getUTCMonth()\u0026\u0026(a.getUTCFullYear(),b=0===b.getUTCDay()?1:8-b.getUTCDay(),a.getUTCDate()\u003Cb||a.getUTCDate()===b\u0026\u00267\u003Ea.getUTCHours())\u0026\u0026(c=-4);return c},g=\"Sunday Monday Tuesday Wednesday Thursday Friday Saturday\".split(\" \"),\nh=\"January February March April May June July August September October November December\".split(\" \");nytAnalytics.formattedDates=nytAnalytics.formattedDates||{};nytAnalytics.formatDates=function(a,c){var b=this.formattedDates;if(!a||!c)return\"\";if(\"undefined\"===typeof b[a]){var d=new Date(a);if(\"Invalid Date\"==d)return\"\";d.setTime(a+36E5*f(d));b[a]={year:d.getUTCFullYear(),date:[d.getUTCFullYear(),e(d.getUTCMonth()+1),e(d.getUTCDate()),e(d.getUTCHours())].join(\"-\"),dateAlone:[d.getUTCFullYear(),e(d.getUTCMonth()+\n1),e(d.getUTCDate())].join(\"-\"),day:g[d.getUTCDay()],hours:e(d.getUTCHours()),month:h[d.getUTCMonth()]}}return b[a][c]};nytAnalytics.resetPage=function(){this.currQuartile=this.maxQuartile=0;this.scrollComplete=this.scrollStart=!1;this.activeTime=0;this.maxViewport={}};nytAnalytics.resetPage();nytAnalytics.hitQuartile=function(a){var c=this.getData(\"viewport.documentHeight\")||document.getElementById(\"app\").clientHeight;c\/=4;this.currQuartile=25*Math.floor(a\/c);return this.currQuartile\u003Ethis.maxQuartile?\n(this.maxQuartile=this.currQuartile,!0):!1};nytAnalytics.getMaxViewport=function(a){var c=this.maxViewport;if(!c.scrollTop||!c.height||!c.width||(a.scrollTop+a.height)*a.width\u003E(c.scrollTop+c.height)*c.width)this.maxViewport=JSON.parse(JSON.stringify(a));return this.maxViewport};nytAnalytics.pagemeta=function(){var a,c={},b=document.getElementsByTagName(\"meta\");for(a=b.length-1;0\u003C=a;a--)c[b[a].name]=b[a].content;return c}();nytAnalytics.heartbeat=function(a){this.activeTime=this.activeTime||0;this.activeTime+=\na.heartbeatInterval;\"object\"===typeof pageEventTracker\u0026\u0026(pageEventTracker.updateData({depth:this.maxQuartile,viewport:JSON.stringify(this.getMaxViewport(a.viewport)),performance:JSON.stringify(a.performance),presentation:JSON.stringify(a.presentation),activeTime:this.activeTime}),a.heartbeatInterval\u0026\u0026(3E4\u003E=this.activeTime||12E4\u003E=this.activeTime\u0026\u00260===this.activeTime%(2*a.heartbeatInterval)||3E5\u003E=this.activeTime\u0026\u00260===this.activeTime%(4*a.heartbeatInterval)||3E5\u003Cthis.activeTime\u0026\u002618E5\u003E=this.activeTime\u0026\u0026\n0===this.activeTime%(6*a.heartbeatInterval))\u0026\u0026(pageEventTracker.shortCircuit(),\"function\"==typeof nyt_et\u0026\u0026nyt_et(\"send\",{subject:\"page_update\",performance:a.performance,presentation:a.presentation,activeTime:this.activeTime,gtm:", ["escape", ["macro", 84], 8, 16], "})))};nytAnalytics.interaction=function(a){if(\"function\"===typeof EventTracker){var c={};if(\"object\"===typeof c){c.assetUrl=a.asset_url;c.url=document.location.href;c.subject=\"module-interactions\";var b={eventData:a.eventData};a.module\u0026\u0026(b.moduleObj=a.module,\n\"object\"===typeof b.moduleObj.element\u0026\u0026\"undefined\"!==typeof b.moduleObj.element.label\u0026\u0026(b.moduleObj.element.label=b.moduleObj.element.label.toString()));a.card\u0026\u0026(b.cardObj=a.card);a.block\u0026\u0026(b.blockObj=a.block);a.newsletter\u0026\u0026(b.newsletter=a.newsletter);c.moduleData=JSON.stringify(b);(new EventTracker).track(c);\"function\"==typeof nyt_et\u0026\u0026(b.subject=\"interaction\",b.gtm=", ["escape", ["macro", 84], 8, 16], ",nyt_et(\"send\",JSON.parse(JSON.stringify(b))))}}};nytAnalytics.impression=function(a,c){var b={event:\"impression\"};\na.module\u0026\u0026(b.moduleObj=JSON.parse(JSON.stringify(a.module)));a.card\u0026\u0026(b.cardObj=JSON.parse(JSON.stringify(a.card)));a.block\u0026\u0026(b.blockObj=JSON.parse(JSON.stringify(a.block)));a.eventData\u0026\u0026(b.eventData=JSON.parse(JSON.stringify(a.eventData)));a.pageview_ad\u0026\u0026(b.adObj=JSON.parse(JSON.stringify(a.pageview_ad)));c\u0026\u0026(b.priority=!0);\"undefined\"!==typeof pageEventTracker?(\"object\"===typeof b.moduleObj\u0026\u0026\"gateway\"===b.moduleObj.name\u0026\u0026pageEventTracker.updateData({is_gateway:1}),pageEventTracker.updateData({activeTime:this.activeTime}),\npageEventTracker.addModuleImpression(b)):(this.impressionBuffer=window.nytAnalytics.impressionBuffer||[],this.impressionBuffer.push(b));\"function\"==typeof nyt_et\u0026\u0026(b.subject=\"impression\",b.gtm=", ["escape", ["macro", 84], 8, 16], ",c?nyt_et(\"send\",b):nyt_et(b));dataLayer.push({module:null,card:null,block:null,eventData:null,pageview:{ad:null}})};nytAnalytics.scrolling=function(a){var c={},b=a.viewport,d=b.scrollTop+b.height;b.activeTime=this.activeTime;\"function\"==typeof nyt_et\u0026\u0026nyt_et({subject:\"page_update\",viewport:b,\ngtm:", ["escape", ["macro", 84], 8, 16], "});\"object\"===typeof pageEventTracker\u0026\u0026(pageEventTracker.updateData({performance:JSON.stringify(a.performance),presentation:JSON.stringify(a.presentation),viewport:JSON.stringify(this.getMaxViewport(b))}),pageEventTracker.addViewportDetail(b),nytAnalytics.scrollStart||(dataLayer.push({event:\"gaScrollEvent\",eventData:{gaAction:\"scroll_start\"}}),nytAnalytics.scrollStart=!0,c.assetUrl=a.asset_url,c.url=document.location.href,c.subject=\"module-interactions\",c.moduleData=JSON.stringify({module:\"first-scroll\",\nregion:\"first-scroll\"}),(new EventTracker).track(c),\"function\"==typeof nyt_et\u0026\u0026nyt_et(\"send\",{subject:\"interaction\",gtm:", ["escape", ["macro", 84], 8, 16], ",eventData:{trigger:\"module\",type:\"scroll\"},moduleObj:{name:\"scroll\",element:{name:\"first-scroll\"}}})),nytAnalytics.hitQuartile(d)\u0026\u0026(pageEventTracker.updateData({depth:nytAnalytics.maxQuartile}),100===nytAnalytics.maxQuartile\u0026\u0026dataLayer.push({event:\"gaScrollEvent\",eventData:{gaAction:\"page_complete\"}}),pageEventTracker.shortCircuit()))};nytAnalytics.slideshow=\nfunction(a){var c={};a.slideshow\u0026\u0026(\"object\"===typeof pageEventTracker\u0026\u0026(c.slideshowObj=JSON.stringify(a.slideshow),pageEventTracker.updateData(c),pageEventTracker.shortCircuit()),\"function\"==typeof nyt_et\u0026\u0026(c.slideshowObj=JSON.parse(JSON.stringify(a.slideshow)),c.subject=\"page_update\",c.gtm=", ["escape", ["macro", 84], 8, 16], ",nyt_et(\"send\",c)),dataLayer.push({slideshow:null}))};nytAnalytics.getData=function(a){return(a=google_tag_manager[", ["escape", ["macro", 81], 8, 16], "].dataLayer.get(a))?\"object\"!==typeof a?a:JSON.parse(JSON.stringify(a)):\n\"\"};nytAnalytics.gaEvent={};nytAnalytics.gaEvent[\"see more\"]={category:function(){return nytAnalytics.getData(\"presentation.pageType\")+\" - \"+nytAnalytics.getData(\"interaction.type\")},action:function(){return nytAnalytics.getData(\"interaction.module.context\")+\" - \"+nytAnalytics.getData(\"interaction.module.name\")},label:function(){return nytAnalytics.getData(\"interaction.module.slug\")},value:function(){return\"\"}};nytAnalytics.gaEvent[\"see more\"]={category:function(){return nytAnalytics.getData(\"presentation.pageType\")+\n\" - \"+nytAnalytics.getData(\"interaction.type\")},action:function(){return nytAnalytics.getData(\"interaction.module.context\")+\" - \"+nytAnalytics.getData(\"interaction.module.name\")},label:function(){return nytAnalytics.getData(\"interaction.module.slug\")},value:function(){return\"\"}};nytAnalytics.gaEvent[\"games-prototype-spelling-bee\"]={value:function(){return nytAnalytics.getData(\"interaction.module.progress.timeInGame\")},label:function(){return nytAnalytics.getData(\"interaction.module.progress.guess\")}}})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 18
            }, {
                "function": "__html",
                "setup_tags": ["list", ["tag", 0, 0]],
                "teardown_tags": ["list", ["tag", 37, 0]],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 21
            }, {
                "function": "__html",
                "once_per_load": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"object\"===typeof window.nytAnalytics\u0026\u0026\"function\"===typeof window.nytAnalytics.getData){var eventObj={};\"object\"===typeof eventObj\u0026\u0026\"object\"===typeof pageEventTracker\u0026\u0026(eventObj={action:\"impression\",module:\"", ["escape", ["macro", 461], 7], "\",errorDetail:\"", ["escape", ["macro", 34], 7], "\",eventtimestamp:Date.now()},pageEventTracker.addModuleImpression(eventObj),pageEventTracker.shortCircuit(),window.dataLayer.push({error:\"\"}))};\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 22
            }, {
                "function": "__html",
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){window.dataLayer.push({event:\"delayError\"})},5E3);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 23
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){if(\"function\"===typeof EventTracker){var a={};a.assetUrl=", ["escape", ["macro", 30], 8, 16], ";a.url=document.location.href;a.subject=\"module-interactions\";var b={action:\"", ["escape", ["macro", 462], 7], "\",context:\"", ["escape", ["macro", 463], 7], "\",module:\"", ["escape", ["macro", 42], 7], "\",eventName:\"", ["escape", ["macro", 44], 7], "\",elementLabel:\"", ["escape", ["macro", 464], 7], "\",label:\"", ["escape", ["macro", 465], 7], "\",pgtype:\"", ["escape", ["macro", 55], 7], "\",region:\"", ["escape", ["macro", 49], 7], "\",slug:\"", ["escape", ["macro", 466], 7], "\"};", ["escape", ["macro", 467], 8, 16], "\u0026\u0026(b.progress=JSON.stringify(", ["escape", ["macro", 467], 8, 16], "));\n", ["escape", ["macro", 468], 8, 16], "\u0026\u0026(b.newsletter=JSON.stringify(", ["escape", ["macro", 468], 8, 16], "));a.moduleData=JSON.stringify(b);(new EventTracker).track(a);\"function\"===typeof nyt_et\u0026\u0026(a=JSON.parse(JSON.stringify({subject:\"interaction\",gtm:", ["escape", ["macro", 84], 8, 16], ",moduleObj:", ["escape", ["macro", 469], 8, 16], "||", ["escape", ["macro", 470], 8, 16], ",eventData:", ["escape", ["macro", 471], 8, 16], "||{type:", ["escape", ["macro", 462], 8, 16], ",pagetype:", ["escape", ["macro", 55], 8, 16], "}})),!a.eventData.pagetype\u0026\u0026", ["escape", ["macro", 55], 8, 16], "\u0026\u0026(a.eventData.pagetype=", ["escape", ["macro", 55], 8, 16], "),", ["escape", ["macro", 468], 8, 16], "\u0026\u0026\n(a.newsletter=JSON.parse(JSON.stringify(", ["escape", ["macro", 468], 8, 16], "))),nyt_et(\"send\",a))}})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 34
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){if(\"object\"===typeof window.nytAnalytics\u0026\u0026\"function\"===typeof window.nytAnalytics.getData\u0026\u0026\"function\"===typeof EventTracker){var a=window.nytAnalytics.getData(\"video\"),c={},b=nytAnalytics.getData(\"video.mData\");\"object\"===typeof a\u0026\u0026\"object\"===typeof a.mData\u0026\u0026(c.moduleData=JSON.stringify(a),c.subject=\"module-interactions\",c.assetUrl=", ["escape", ["macro", 30], 8, 16], ",c.url=document.location.href,(new EventTracker).track(c),b.assetUrl=", ["escape", ["macro", 30], 8, 16], ",b.url=document.location.href,b.referrer=", ["escape", ["macro", 103], 8, 16], ",\nb.event=a.eventName,b.subject=\"video-nytv\",(new EventTracker).track(b),\"function\"==typeof nyt_et\u0026\u0026(a=JSON.parse(JSON.stringify(a)),a.subject=\"interaction\",a.mData=b,nyt_et(\"send\",a)))}})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 35
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"scrolling_temp\" type=\"text\/gtmscript\"\u003EnytAnalytics.scrolling({viewport:", ["escape", ["macro", 472], 8, 16], ",performance:", ["escape", ["macro", 451], 8, 16], ",presentation:", ["escape", ["macro", 452], 8, 16], ",asset_url:", ["escape", ["macro", 30], 8, 16], "});(function(){var a=document.querySelector(\"#scrolling_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 40
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"heartbeat_temp\" type=\"text\/gtmscript\"\u003EnytAnalytics.heartbeat({viewport:", ["escape", ["macro", 472], 8, 16], ",heartbeatInterval:", ["escape", ["macro", 454], 8, 16], ",performance:", ["escape", ["macro", 451], 8, 16], ",presentation:", ["escape", ["macro", 452], 8, 16], "});(function(){var a=document.querySelector(\"#heartbeat_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 41
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"addtrackingparams_temp\" type=\"text\/gtmscript\"\u003E(function(){var c=function(a,b){var c=a\u0026\u0026a.length;if(c\u0026\u0026\"function\"===typeof b)if(\"function\"===typeof a.forEach)a.forEach(b);else if(\"function\"===typeof b)for(;c;)c--,b(a[c])},d=function(a,b){b=(-1\u003Ca.indexOf(\"?\")?\"\\x26\":\"?\")+b;return a=-1\u003Ca.indexOf(\"#\")?a.replace(\"#\",b+\"#\"):a+b};c(document.querySelectorAll(\"section[data-block-tracking-id]:not(.gtm-tagged)\"),function(a){var b=\"\";a.classList.add(\"gtm-tagged\");b=a.dataset\u0026\u0026a.dataset.blockTrackingId||\"\";c(a.querySelectorAll(\":not(header) \\x3e a\"),function(a){a.href=\nd(a.href,\"action\\x3dclick\\x26module\\x3d\"+encodeURIComponent(b)+\"\\x26pgtype\\x3d\"+", ["escape", ["macro", 55], 8, 16], ")})});c(document.querySelectorAll(\"div[class^\\x3dRecirculation-moreInContent]:not(.gtm-tagged), div[class^\\x3delementStyles-moreInContent]:not(.gtm-tagged)\"),function(a){var b=a.querySelector(\"h2\").textContent;b=b.replace(\/\u003C!\\-\\-[^\u003E]*\\-\\-\u003E\/g,\"\");b=b.replace(\"More in \",\"\");a.classList.add(\"gtm-tagged\");c(a.querySelectorAll(\"article a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3dMoreInSection\\x26pgtype\\x3d", ["escape", ["macro", 55], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3d\"+\nb)})});c(document.querySelectorAll(\"div[class^\\x3dTrending-trending]:not(.gtm-tagged)\"),function(a){a.classList.add(\"gtm-tagged\");c(a.querySelectorAll(\"li a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3dTrending\\x26pgtype\\x3d", ["escape", ["macro", 55], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3dTrending\")})});c(document.querySelectorAll(\"div[class^\\x3dassociated-collection]:not(.gtm-tagged)\"),function(a){if(a.querySelector(\"h2 a span\"))var b=a.querySelector(\"h2 a span\").innerHTML;b=b.replace(\/\u003C!\\-\\-[^\u003E]*\\-\\-\u003E\/g,\n\"\");a.classList.add(\"gtm-tagged\");c(a.querySelectorAll(\"article a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3dAssociated\\x26pgtype\\x3d", ["escape", ["macro", 55], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3d\"+b)})});c(document.querySelectorAll(\"div[class^\\x3dRecirculation-lonelyTrending]:not(.gtm-tagged)\"),function(a){a.classList.add(\"gtm-tagged\");c(a.querySelectorAll(\"article a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3dLonely%20Trending\\x26pgtype\\x3d", ["escape", ["macro", 55], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3dTrending\")})});\nc(document.querySelectorAll(\"div[class^\\x3delementStyles-relatedcoverage]\"),function(a){c(a.querySelectorAll(\"article a\"),function(a){a.classList.add(\"gtm-tagged\");a.href=d(a.href,\"action\\x3dclick\\x26module\\x3dRelatedCoverage\\x26pgtype\\x3d", ["escape", ["macro", 55], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3dRelated\")})});var e=document.querySelector(\"nav[class^\\x3dRibbon-ribbon]:not(.gtm-tagged)\");if(e){var f=\"Ribbon\";e.classList.add(\"gtm-tagged\");c(e.querySelectorAll(\"a:not(.gtm-tagged)\"),function(a){a.classList.add(\"gtm-tagged\");\na.href=d(a.href,\"action\\x3dclick\\x26module\\x3d\"+encodeURIComponent(f)+\"\\x26pgtype\\x3d\"+", ["escape", ["macro", 55], 8, 16], ")})}c(document.querySelectorAll(\"div[class^\\x3delementStyles-editorContent]:not(.gtm-tagged)\"),function(a){a.classList.add(\"gtm-tagged\");c(a.querySelectorAll(\"article a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3deditorContent\\x26pgtype\\x3d", ["escape", ["macro", 55], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3dTrending\")})});c(document.querySelectorAll(\".StoryBodyCompanionColumn aside\"),\nfunction(a){c(a.querySelectorAll(\"article a:not(.gtm-tagged)\"),function(a){a.classList.add(\"gtm-tagged\");a.href=d(a.href,\"action\\x3dclick\\x26module\\x3deditorContent\\x26pgtype\\x3d", ["escape", ["macro", 55], 7], "\\x26region\\x3dCompanionColumn\\x26contentCollection\\x3dTrending\")})});(function(){var a=document.querySelector(\"#addtrackingparams_temp\");a\u0026\u0026(a.outerHTML=\"\")})()})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 44
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer.push({video:\"\",asset:\"\"});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 45
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E\"object\"===typeof nytAnalytics\u0026\u0026\"object\"===typeof pageEventTracker\u0026\u0026(nytAnalytics.activeTime=nytAnalytics.activeTime||0,nytAnalytics.activeTime=1E3*", ["escape", ["macro", 473], 8, 16], ",pageEventTracker.updateData({activeTime:nytAnalytics.activeTime}),pageEventTracker.shortCircuit());\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 54
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.parent===window\u0026\u0026function(){function c(){var a;return a=(a=unescape(document.cookie).match(\"NYT-Edition\\x3d([^;]+)\"))\u0026\u0026a[1]\u0026\u0026-1!==a[1].indexOf(\"edition|GLOBAL\")?\"international.nytimes.com\":\"nytimes.com\"}function d(){var a;regex=\/(^.*)(nytimes.com.*)\/;return a=", ["escape", ["macro", 30], 8, 16], "\u0026\u0026", ["escape", ["macro", 30], 8, 16], ".match(regex)[2]}window._sf_async_config={uid:16698,domain:c(),pingServer:\"pnytimes.chartbeat.net\",useCanonical:!0,path:d(),title:", ["escape", ["macro", 474], 8, 16], "||document.title};_cbq=window._cbq=window._cbq||\n[];switch(", ["escape", ["macro", 14], 8, 16], "){case \"sub\":_cbq.push([\"_acct\",\"paid\"]);break;case \"anon\":_cbq.push([\"_acct\",\"anon\"]);break;case \"regi\":_cbq.push([\"_acct\",\"lgdin\"])}try{if(\"Homepage\"===", ["escape", ["macro", 55], 8, 16], ")window._sf_async_config.sections=\"Homepage\";else{var b=[];", ["escape", ["macro", 475], 8, 16], "\u0026\u0026b.push(", ["escape", ["macro", 475], 8, 16], ");", ["escape", ["macro", 476], 8, 16], "\u0026\u0026b.push(", ["escape", ["macro", 476], 8, 16], ");", ["escape", ["macro", 2], 8, 16], "\u0026\u0026b.push(", ["escape", ["macro", 2], 8, 16], ")}window._sf_async_config.sections=b.join(\",\")}catch(a){}try{window._sf_async_config.authors=\nArray.isArray(", ["escape", ["macro", 477], 8, 16], ")\u0026\u0026", ["escape", ["macro", 477], 8, 16], ".join(\",\")}catch(a){}window._sf_endpt=(new Date).getTime();firstScript=document.getElementsByTagName(\"script\")[0];cbScript=document.createElement(\"script\");cbScript.async=!0;cbScript.src=\"https:\/\/static.chartbeat.com\/js\/chartbeat.js\";firstScript.parentNode.insertBefore(cbScript,firstScript)}();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 68
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\n\u003Ciframe name=\"__bkframe\" height=\"0\" width=\"0\" frameborder=\"0\" style=\"display:none;position:absolute;clip:rect(0px 0px 0px 0px)\" src=\"about:blank\"\u003E\u003C\/iframe\u003E \n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/tags.bkrtx.com\/js\/bk-coretag.js\"\u003E\u003C\/script\u003E \n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var d=function(a){var e,g,b=[{name:\"Bot\",regex:\"(GomezAgent|yandex.com\/bots|(Googlebot|bingbot|YandexBot|facebookexternalhit)\/[\\\\d]+(?:.[\\\\d]+)?)\"},{name:\"UC Browser\",regex:\"(UCMini|UCBrowser)\/([\\\\d]+)(.[\\\\d]+)*\"},{name:\"Opera\",regex:\"(OPR|Opera)[\/ ]([\\\\d]+)(.[\\\\d]+)*\"},{name:\"Sogou Explorer\",regex:\"(SE) ([\\\\d]+)(.[a-zA-Z\\\\d]+)*\"},{name:\"\",regex:\"(Avant Browser)\"},{name:\"\",regex:\"((?:Mobile)?Iron|Puffin|Maxthon|Chromium|Sleipnir|Lightning|QQBrowser|Silk|chromeframe|iCab|Arora|Kindle|Midori|rekonq|Vienna|Epiphany|NetFront|konqueror|PhantomJS|YaBrowser|IEMobile|PaleMoon|Thunderbird|SeaMonkey|baidubrowser|NokiaBrowser|Edge|Avant Browser|Iceweasel|K-Meleon)\/([\\\\d]+)(.[\\\\d]+)*\"},\n{name:\"\",regex:\"(Lunascape)[\/ ]([\\\\d]+)(.[\\\\d]+)*\"},{name:\"Firefox\",regex:\"(Firefox)\/([\\\\d]+)(.[\\\\d]+)*\"},{name:\"MSIE\",regex:\"(?:(Windows).* Trident\/([\\\\d]+)(.[\\\\d]+)*|(MSIE) ([\\\\d]+)(.[\\\\d]+)*)\"},{name:\"Chrome\",regex:\"(Chrome)\/([\\\\d]+)(.[\\\\d]+)*\"},{name:\"Android Browser\",regex:\"(Android)[ \/]([\\\\d]+)(?:.[\\\\d]+.[\\\\d]+)?.*(Mobile )?Safari\"},{name:\"BlackBerry Browser\",regex:\"(BlackBerry|BB[\\\\d]+);.*Mobile Safari\"},{name:\"\",regex:\"(OmniWeb)\/v([\\\\d]+)(?:.[\\\\d]+)\"},{name:\"Chrome iOS\",regex:\"(CriOS)\/([\\\\d]+)(?:.[\\\\d]+)*\"},\n{name:\"Safari\",regex:\"(?:Version\/([\\\\d]+)(?:.[\\\\d]+)* )?(Safari)\/(?:[\\\\d]+(?:.[\\\\d]+)*)\",mobileRegex:\"(iPhone; CPU iPhone OS|iPad; CPU OS).*Mobile\/\"},{name:\"Facebook App\",regex:\"\\\\[(FBAN).*FBAV\/([\\\\d]+)(.[\\\\d]+)*.*\\\\]?\"},{name:\"NYT App\",regex:\"(NYTimes(-[a-zA-Z]+)?|Crosswords|NYTNow|Cooking|NYTOpinion|)\/([\\\\d]+)(.[\\\\d]+)* CFNetwork\/([\\\\d]+)(.[\\\\d]+)*\"},{name:\"AppleWebKit Based Browser\",regex:\"(AppleWebKit)\/([\\\\d]+)(.[\\\\d]+)*\"}];for(e=0;e\u003Cb.length;e++){var c=b[e];if((g=(new RegExp(c.regex)).exec(a))\u0026\u0026\n1\u003Cg.length)return e=c.name||g[1],c.mobileRegex\u0026\u0026(new RegExp(c.mobileRegex)).test(a)\u0026\u0026(e+=\" Mobile\"),e}return\"Unknown\"},a=function(a){return\"object\"===typeof a\u0026\u0026a instanceof Array?a.filter(function(a){return\"\"!==a}).map(function(a){return a.replace(\/,\/g,\" \")}):[]},k=", ["escape", ["macro", 478], 8, 16], "||(document.querySelector(\"meta[name\\x3dCG]\")||{}).content,l=\"\";if(!\/Homepage\/i.test(k)){l=a(", ["escape", ["macro", 479], 8, 16], ");var m=a(", ["escape", ["macro", 481], 8, 16], "||", ["escape", ["macro", 480], 8, 16], "||[]),b=a(", ["escape", ["macro", 482], 8, 16], ");a=a(", ["escape", ["macro", 483], 8, 16], ");\nl=l.concat(m).concat(b).concat(a).join(\",\")}bk_ignore_meta=!0;m=function(a){var c=[];if(null!=a\u0026\u0026\"\"!=a)for(var b in a)null!=a[b]\u0026\u0026\"InclusionFlag\"in a[b]\u0026\u00261==a[b].InclusionFlag\u0026\u0026c.push(b);return c.join(\",\")};bk_addPageCtx(\"regid\",", ["escape", ["macro", 16], 8, 16], ");a=", ["escape", ["macro", 484], 8, 16], "||{};var c=", ["escape", ["macro", 485], 8, 16], "||{};b=c.subscriptions||[];c=c.newsletters||[];var n=!1;0\u003Cb.length\u0026\u0026(n=\"F\"==b[0].grace?!1:!0);bk_addPageCtx(\"usertype\",", ["escape", ["macro", 14], 8, 16], ");bk_addPageCtx(\"userloggedin\",", ["escape", ["macro", 486], 8, 16], ");\nbk_addPageCtx(\"coresubtenure\",a.coreSubscriptionTenure?a.coreSubscriptionTenure:\"\");bk_addPageCtx(\"corestop\",a.coreStopCode?a.coreStopCode:\"\");bk_addPageCtx(\"corepromo\",!!a.coreOnPromotion);bk_addPageCtx(\"ingrace\",n);bk_addPageCtx(\"giftrecipient\",!!a.giftSubscriptionRecipient);bk_addPageCtx(\"childsubrecipient\",!!a.childSubscription);bk_addPageCtx(\"bundlecoredigi\",a.coreDigiBundle?a.coreDigiBundle:\"\");bk_addPageCtx(\"bundlecorehd\",a.coreHDBundle?a.coreHDBundle:\"\");bk_addPageCtx(\"bundlexword\",a.crosswordStandaloneBundle?\na.crosswordStandaloneBundle:\"\");bk_addPageCtx(\"bundlecooking\",a.cookingStandaloneBundle?a.cookingStandaloneBundle:\"\");bk_addPageCtx(\"bundleother\",a.otherBundle?a.otherBundle:\"\");bk_addPageCtx(\"b2bentitle\",!!a.b2bSubscription);bk_addPageCtx(\"marketingoptin\",!!a.marketingOptIn);bk_addPageCtx(\"formercoresub\",!!a.formerCoreSubscriber);bk_addPageCtx(\"formeredusub\",!!a.formerEduSubscriber);bk_addPageCtx(\"formerhdsub\",!!a.formerHDSubscriber);bk_addPageCtx(\"retentionscore\",a.retentionSegment||\"\");bk_addPageCtx(\"newsletters\",\nc.join());bk_addPageCtx(\"topwatseg\",", ["escape", ["macro", 416], 8, 16], ");bk_addPageCtx(\"sassegment\",a.sasSegment||\"\");bk_addPageCtx(\"hdstopreasoncode\",a.hdStopReasonCode||\"\");b=", ["escape", ["macro", 487], 8, 16], ";c=\"\";if(null!=b){try{var f=JSON.parse(unescape(b))}catch(g){f={}}f.isCorpUser\u0026\u0026(c=f.orgName)}bk_addPageCtx(\"businessname\",c);bk_addPageCtx(\"corpadblock\",\/CORP_ADBLOCK\/i.test(b));f=", ["escape", ["macro", 488], 8, 16], ";c=b=\"\";if(null!=f){try{var h=JSON.parse(unescape(f))}catch(g){h={}}if(c=h.isEduUser||\"\")b=h.nickName}bk_addPageCtx(\"isedu\",\nc);bk_addPageCtx(\"propensityedu\",b);bk_addPageCtx(\"propensityscore\",", ["escape", ["macro", 418], 8, 16], ");bk_addPageCtx(\"activedays\",", ["escape", ["macro", 419], 8, 16], ");h=", ["escape", ["macro", 66], 8, 16], "||{};bk_addPageCtx(\"metercount\",h.v||\"\");bk_addPageCtx(\"propensitysection\",", ["escape", ["macro", 423], 8, 16], ");bk_addPageCtx(\"propensitytype\",", ["escape", ["macro", 422], 8, 16], ");bk_addPageCtx(\"propensitysite\",", ["escape", ["macro", 421], 8, 16], ");bk_addPageCtx(\"url\",window.location.href);bk_addPageCtx(\"referrer\",", ["escape", ["macro", 103], 8, 16], ");bk_addPageCtx(\"section\",k);k=", ["escape", ["macro", 476], 8, 16], "||\n\"\";bk_addPageCtx(\"subsection\",k);bk_addPageCtx(\"pagetype\",", ["escape", ["macro", 55], 8, 16], ");bk_addPageCtx(\"keywords\",l);bk_addPageCtx(\"sourceapp\",", ["escape", ["macro", 182], 8, 16], ");bk_addPageCtx(\"browsername\",d(navigator.userAgent));bk_addPageCtx(\"funnelpropensity\",", ["escape", ["macro", 438], 8, 16], ");bk_addPageCtx(\"column\",", ["escape", ["macro", 489], 8, 16], ");d=", ["escape", ["macro", 490], 8, 16], "||[];bk_addPageCtx(\"collectionname\",d.join(\",\"));bk_addPageCtx(\"contenttype\",", ["escape", ["macro", 491], 8, 16], ");d=m(", ["escape", ["macro", 492], 8, 16], ");bk_addPageCtx(\"emotions\",d);\"object\"===\ntypeof bk_optly\u0026\u0026bk_optly instanceof Array\u0026\u00260\u003Cbk_optly.length\u0026\u0026(bk_addPageCtx(\"optlyexpname\",bk_optly[0].experience||\"\"),bk_addPageCtx(\"optlyexpvariant\",bk_optly[0].variant||\"\"));bk_addPageCtx(\"xwordstenure\",a.crosswordsSubscriptionTenure?a.crosswordsSubscriptionTenure:\"\");bk_addPageCtx(\"cookingtenure\",a.cookingSubscriptionTenure?a.cookingSubscriptionTenure:\"\");bk_addPageCtx(\"xwordsstop\",a.crosswordsStopCode?a.crosswordsStopCode:\"\");bk_addPageCtx(\"cookingstop\",a.cookingStopCode?a.cookingStopCode:\n\"\");bk_addPageCtx(\"productswitch\",a.productSwitch?a.productSwitch:\"\");bk_addPageCtx(\"giftsubgiver\",!!a.giftGiver);bk_addPageCtx(\"formerxwordsub\",!!a.formerCrosswordSubscriber);bk_addPageCtx(\"formercookingsub\",!!a.formerCookingSubscriber);bk_addPageCtx(\"watsegs\",a.watString?a.watString:\"\");bk_addPageCtx(\"edusub\",a.eduSubscriber?a.eduSubscriber:\"\");d=50134;navigator.userAgent.match(\/Android|iPhone|iPad|iPod|Windows Phone|webOS|BlackBerry|RIM\/i)\u0026\u0026(d=50747);bk_allow_multiple_calls=!0;bk_doJSTag(d,4)})();\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 83
            }, {
                "function": "__html",
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/tags.bluekai.com\/site\/50550?ret=js\u0026amp;limit=1\"\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 84
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"impression_temp\" type=\"text\/gtmscript\"\u003EnytAnalytics.impression({module:", ["escape", ["macro", 469], 8, 16], ",card:", ["escape", ["macro", 493], 8, 16], ",block:", ["escape", ["macro", 494], 8, 16], ",eventData:", ["escape", ["macro", 471], 8, 16], ",pageview_ad:", ["escape", ["macro", 495], 8, 16], "},", ["escape", ["macro", 496], 8, 16], ");(function(){var a=document.querySelector(\"#impression_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 107
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript id=\"interaction_temp\" type=\"text\/gtmscript\"\u003EnytAnalytics.interaction({module:", ["escape", ["macro", 469], 8, 16], ",card:", ["escape", ["macro", 493], 8, 16], ",block:", ["escape", ["macro", 494], 8, 16], ",newsletter:", ["escape", ["macro", 468], 8, 16], ",eventData:", ["escape", ["macro", 471], 8, 16], ",asset_url:", ["escape", ["macro", 30], 8, 16], "});dataLayer.push({module:null,card:null,block:null,newsletter:null,eventData:null});(function(){var a=document.querySelector(\"#interaction_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 109
            }, {
                "function": "__html",
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(b,c){var a=document.createElement(\"script\");a.type=\"text\/javascript\";c\u0026\u0026(a.onload=c,a.onerror=c);var d=document.getElementsByTagName(\"head\")[0];d.appendChild(a);a.src=b}b(\"https:\/\/a1.nyt.com\/analytics\/show-ads.js\",function(){pageEventTracker.updateData({adBlockEnabled:!1!==window.adBlockDetected});window.nyt_et\u0026\u0026nyt_et({subject:\"page_update\",adBlockEnabled:!1!==window.adBlockDetected})})})();\u003C\/script\u003E  ",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 112
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){try{var g=function(a){var c=a.mData||{};return{ns_st_ci:a.contentId||\"*null\",ns_st_cl:c.videoDuration||\"*null\",ns_st_pu:c.videoFranchise||\"*null\",ns_st_pr:decodeURIComponent(c?c.videoName||\"*null\":\"*null\"),c3:a.contentCollection,ns_st_tpr:\"*null\",ns_st_ep:\"*null\",ns_st_tep:\"*null\",ns_st_sn:\"*null\",ns_st_en:\"*null\",ns_st_ge:c.videoType||\"*null\",ns_st_ia:1,ns_st_ddt:\"*null\",ns_st_tdt:\"*null\",ns_st_st:\"*null\",c4:\"*null\",c6:\"*null\",ns_st_ce:\"*null\"}},h=function(a){var c=d.ReducedRequirementsStreamingAnalytics.AdType;\ne.playVideoContentPart({ns_st_cl:a.videoDuration},c.LinearOnDemandMidRoll)},k=function(a,c){var b=d.ReducedRequirementsStreamingAnalytics.ContentType,f=b.ShortFormOnDemand;c\u0026\u0026(f=b.Live);e.playVideoContentPart(a,f)},d=a.ns_,e=a.nyt_streamingAnalytics=a.nyt_streamingAnalytics||new d.ReducedRequirementsStreamingAnalytics({publisherId:\"3005403\"});a=", ["escape", ["macro", 497], 8, 16], "||{};var b=a.eventName,l=\"live\"===a.mData.videoDeliveryMethod,m=g(a);\"pause\"!==b\u0026\u0026\"video-complete\"!==b\u0026\u0026\"ad-pause\"!==b\u0026\u0026\"ad-complete\"!==\nb||e.stop();if(\"auto-play-start\"===b||\"user-play\"===b||\"resume\"===b)return k(m,l);if(\"ad-start\"===b)return h(a)}catch(n){console.log(\"gracefully failed to load comscore.\")}})(window);\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 113
            }, {
                "function": "__html",
                "once_per_load": true,
                "vtp_html": "\u003Cscript data-gtmsrc=\"\/\/a1.nyt.com\/analytics\/comscore-streaming.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 114
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Evar opty_payload,jkidd_data_user_tracking,dl_user=", ["escape", ["macro", 447], 8, 16], ";try{opty_payload={user:{isLoggedIn:", ["escape", ["macro", 486], 8, 16], "}};for(var name in dl_user)dl_user.hasOwnProperty(name)\u0026\u0026(\/jkidd\\-[lsp]\/.test(name)||(opty_payload.user[name]=dl_user[name]));window.NYToptly=window.NYToptly||{};window.NYToptly.jkidd=opty_payload;window.optimizely=window.optimizely||[];window.optimizely.push({type:\"page\",pageName:\"vi_page_data_ready\"})}catch(a){console.error(a)};\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 116
            }, {
                "function": "__html",
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){function e(){if(a.webkitRequestFileSystem)return a.webkitRequestFileSystem(a.TEMPORARY,1,c,b),!0}function f(){if(\"MozAppearance\"in document.documentElement.style){var a=indexedDB.open(\"test\");a.onerror=b;a.onsuccess=c;return!0}}function g(){if(0\u003CObject.prototype.toString.call(a.HTMLElement).indexOf(\"Constructor\")||\"[object SafariRemoteNotification]\"===(!a.safari||safari.pushNotification).toString()||a.localStorage\u0026\u0026\/Safari\/.test(a.navigator.userAgent)){try{a.openDatabase(null,null,null,\nnull)}catch(m){return b(),!0}try{localStorage.length||(localStorage.x=1,localStorage.removeItem(\"x\")),c()}catch(m){navigator.cookieEnabled?b():c()}return!0}}function h(){if(!a.indexedDB\u0026\u0026(a.PointerEvent||a.MSPointerEvent))return b(),!0}function k(a){function c(a,b){\"object\"===typeof pageEventTracker?pageEventTracker.updateData({incognitoEnabled:a}):5\u003Eb\u0026\u0026(b++,setTimeout(function(){c(a,b)},1E3*b))}c(a,0)}function l(b){a.nyt_et\u0026\u0026nyt_et({subject:\"page_update\",isIncognito:b})}var b,c;(function(a,d){b=\na||function(){};c=d||function(){};e()||f()||g()||h()||c()})(function(){k(!0)},function(){k(!1)});a.nyt_et\u0026\u0026function(a,d){b=a||function(){};c=d||function(){};e()||f()||g()||h()||c()}(function(){l(!0)},function(){l(!1)})})(window);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 120
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cimg src=\"", ["escape", ["macro", 443], 14, 3], "pixel.gif?subject=ab-alloc\u0026amp;test=", ["escape", ["macro", 498], 12], "\u0026amp;variant=", ["escape", ["macro", 499], 12], "\u0026amp;url=", ["escape", ["macro", 500], 12], "\u0026amp;instant=1\u0026amp;skipAugment=true\u0026amp;gtm=", ["escape", ["macro", 84], 12], "\u0026amp;et2_pageview_id=", ["escape", ["macro", 90], 12], "\"\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){nyt_et(\"send\",{subject:\"ab_alloc\",allocs:[{name:", ["escape", ["macro", 498], 8, 16], ",variant:", ["escape", ["macro", 499], 8, 16], "}],gtm:", ["escape", ["macro", 84], 8, 16], "})})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 123
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){var d=\"a.nytimes.com\",e=", ["escape", ["macro", 103], 8, 16], "||encodeURIComponent(document.referrer),f=", ["escape", ["macro", 30], 8, 16], "||encodeURIComponent(document.location.href),a=new XMLHttpRequest;a.withCredentials=!0;a.open(\"GET\",\"https:\/\/\"+d+\"\/svc\/nyt\/data-layer?sourceApp\\x3d\"+", ["escape", ["macro", 28], 8, 16], "+\"\\x26referrer\\x3d\"+e+\"\\x26assetUrl\\x3d\"+f,!0);a.onload=function(){var c=JSON.parse(a.responseText);c.event=\"pageDataReady\";window[b].push(c)};a.addEventListener(\"error\",function(){window[b].push({event:\"pageDataReady\"})});\na.send()})(\"dataLayer\");\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 124
            }, {
                "function": "__html",
                "setup_tags": ["list", ["tag", 33, 0]],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=setInterval(function(){window.facebookPixel\u0026\u0026window.facebookPixel.fire\u0026\u0026(window.facebookPixel.fire({pixelName:\"NewsletterSignup\"}),clearInterval(a))},1E3)})();\u003C\/script\u003E  ",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 134
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003EnytAnalytics.slideshow({slideshow:", ["escape", ["macro", 501], 8, 16], "});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 141
            }, {
                "function": "__html",
                "setup_tags": ["list", ["tag", 1, 0]],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=setInterval(function(){window.pintrk\u0026\u0026(pintrk(\"track\",\"signup\"),clearInterval(a))},1E3)})();\u003C\/script\u003E  ",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 144
            }, {
                "function": "__html",
                "teardown_tags": ["list", ["tag", 71, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,r){function l(){var b,c;if(c=d.crypto||d.msCrypto)c=c.getRandomValues(new Uint8Array(18));else for(c=[];18\u003Ec.length;)c.push(256*Math.random()^255\u0026(b=b||+new Date)),b=Math.floor(b\/256);return btoa(String.fromCharCode.apply(String,c)).replace(\/\\+\/g,\"-\").replace(\/\\\/\/g,\"_\")}var m,n,f,g,h,k=[],q=\"object\"==typeof d.navigator\u0026\u0026\"string\"==typeof d.navigator.userAgent\u0026\u0026\/iPad|iPhone|iPod\/.test(navigator.userAgent),p=\"object\"==typeof d.navigator\u0026\u0026d.navigator.sendBeacon?q?\"xhr_ios\":\"beacon\":\"xhr\";\nif(d.nyt_et)try{console.warn(\"et2 snippet should only load once per page\")}catch(b){}else d.nyt_et=function(){function b(){if(k.length){var c=m+\"\/track\",a=JSON.stringify(k);if(\"beacon\"===p)d.navigator.sendBeacon(c,a);else{var b=\"function\"==typeof XMLHttpRequest?new XMLHttpRequest:new ActiveXObject(\"Microsoft.XMLHTTP\");b.open(\"POST\",c);b.withCredentials=!0;b.setRequestHeader(\"Accept\",\"*\/*\");\"string\"==typeof a?b.setRequestHeader(\"Content-Type\",\"text\/plain;charset\\x3dUTF-8\"):\"[object Blob]\"==={}.toString.call(a)\u0026\u0026\na.type\u0026\u0026b.setRequestHeader(\"Content-Type\",a.type);try{b.send(a)}catch(t){}}k.length=0;clearTimeout(h);h=null}}var c,a=arguments;if(\"string\"==typeof a[0]\u0026\u0026\/init\/.test(a[0])\u0026\u0026(f=l(),\"init\"==a[0]\u0026\u0026!n)){if(n=l(),\"string\"!=typeof a[1]||!\/^http\/.test(a[1]))throw Error(\"init must include an et host url\");m=String(a[1]).replace(\/\\\/$\/,\"\");\"string\"==typeof a[2]\u0026\u0026(g=a[2])}var e=a[a.length-1];m\u0026\u0026\"object\"==typeof e\u0026\u0026(c=\"page\"==e.subject?f:l(),e.sourceApp\u0026\u0026(g=e.sourceApp),e.sourceApp=g,k.push({context_id:n,pageview_id:f,\nevent_id:c,client_lib:\"11b67b4-GTM\",sourceApp:g,how:p,client_ts:+new Date,data:JSON.parse(JSON.stringify(e))}),\"send\"==a[0]||c==f?b():h||(h=setTimeout(b,5500)))},d.nyt_et.get_pageview_id=function(){return f}}(window);\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Enyt_et.get_pageview_id()?nyt_et({subject:\"page_update\",assetUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,assetId:(document.querySelector(\"meta[name\\x3darticleid]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,url:location.href,referrer:\"", ["escape", ["macro", 103], 7], "\",client_tz_offset:(new Date).getTimezoneOffset(),sourceApp:", ["escape", ["macro", 91], 8, 16], ",gtm:", ["escape", ["macro", 84], 8, 16], "}):nyt_et(\"init\",", ["escape", ["macro", 502], 8, 16], ",", ["escape", ["macro", 91], 8, 16], ",{subject:\"page\",assetUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||\n{}).href,assetId:(document.querySelector(\"meta[name\\x3darticleid]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,url:location.href,referrer:\"", ["escape", ["macro", 103], 7], "\",client_tz_offset:(new Date).getTimezoneOffset(),sourceApp:", ["escape", ["macro", 91], 8, 16], ",gtm:", ["escape", ["macro", 84], 8, 16], "});nytAnalytics=window.nytAnalytics||{};nytAnalytics.et2_pageview_id=nyt_et.get_pageview_id();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 146
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cimg src=\"", ["escape", ["macro", 443], 14, 3], "pixel.gif?subject=ab-expose\u0026amp;test=", ["escape", ["macro", 498], 12], "\u0026amp;variant=", ["escape", ["macro", 499], 12], "\u0026amp;url=", ["escape", ["macro", 500], 12], "\u0026amp;instant=1\u0026amp;skipAugment=true\u0026amp;gtm=", ["escape", ["macro", 84], 12], "\u0026amp;et2_pageview_id=", ["escape", ["macro", 90], 12], "\"\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){nyt_et(\"send\",{subject:\"ab_expose\",test:", ["escape", ["macro", 498], 8, 16], ",variant:", ["escape", ["macro", 499], 8, 16], ",gtm:", ["escape", ["macro", 84], 8, 16], "})})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 147
            }, {
                "function": "__html",
                "setup_tags": ["list", ["tag", 1, 0]],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=setInterval(function(){window.pintrk\u0026\u0026(pintrk(\"track\",\"lead\",{lead_type:\"Newsletter\"}),clearInterval(a))},1E3)})();\u003C\/script\u003E  \n\n\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 152
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.nyt_et\u0026\u0026nyt_et(\"send\",{subject:\"page_update\",jsonKidd:", ["escape", ["macro", 504], 8, 16], ",assetUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,assetId:(document.querySelector(\"meta[name\\x3darticleid]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,url:location.href,referrer:\"", ["escape", ["macro", 103], 7], "\",client_tz_offset:(new Date).getTimezoneOffset(),sourceApp:", ["escape", ["macro", 91], 8, 16], ",gtm:", ["escape", ["macro", 84], 8, 16], "})})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 154
            }, {
                "function": "__html",
                "teardown_tags": ["list", ["tag", 71, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.nyt_et\u0026\u0026(nytAnalytics=window.nytAnalytics||{},nytAnalytics.et2_pageview_id===nyt_et.get_pageview_id()?nyt_et(\"pageinit\",\"", ["escape", ["macro", 502], 7], "\",{subject:\"page\",assetUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,assetId:(document.querySelector(\"meta[name\\x3darticleid]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,url:location.href,referrer:", ["escape", ["macro", 103], 8, 16], "||void 0,client_tz_offset:(new Date).getTimezoneOffset(),sourceApp:\"nyt-vi\",\ngtm:", ["escape", ["macro", 84], 8, 16], "}):nyt_et({subject:\"page_update\",assetUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,assetId:(document.querySelector(\"meta[name\\x3darticleid]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,url:location.href,referrer:", ["escape", ["macro", 103], 8, 16], "||void 0,client_tz_offset:(new Date).getTimezoneOffset(),sourceApp:\"nyt-vi\",gtm:", ["escape", ["macro", 84], 8, 16], "}),nytAnalytics.et2_pageview_id=nyt_et.get_pageview_id())})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 157
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,b){if(a\u0026\u0026a.length){nyt_et(\"send\",{subject:\"ab_alloc\",allocs:a});for(var d=\"\",c=0;c\u003Ca.length;c++)d+=\"subject\\x3dab-alloc\\x26test\\x3d\"+encodeURIComponent(a[c].test)+\"\\x26variant\\x3d\"+encodeURIComponent(a[c].variant||0)+\"\\x26url\\x3d\"+encodeURIComponent(window.location.href)+\"\\x26et2_pageview_id\\x3d\"+e+\"\\x26instant\\x3d1\\x26skipAugment\\x3dtrue\\n\";a=new window.XMLHttpRequest;a.withCredentials=!0;a.open(\"POST\",b);a.send(d);b=window.google_tag_manager[", ["escape", ["macro", 81], 8, 16], "];b.dataLayer.set(\"abtest\",\nvoid 0);b.dataLayer.set(\"allocs\",void 0)}})(", ["escape", ["macro", 506], 8, 16], ",", ["escape", ["macro", 90], 8, 16], ",", ["escape", ["macro", 443], 8, 16], ");\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 171
            }, {
                "function": "__html",
                "once_per_load": true,
                "vtp_html": "\u003Cscript id=\"gtm_beforeunload_temp\" type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"beforeunload\",function(){window.dataLayer.push({event:\"beforeunload\"})});(function(){var a=document.querySelector(\"#gtm_beforeunload_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 172
            }, {
                "function": "__html",
                "once_per_load": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Enyt_et.get_pageview_id()\u0026\u0026nyt_et(\"send\",{subject:\"page_exit\",assetUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,assetId:(document.querySelector(\"meta[name\\x3darticleid]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,url:location.href,referrer:\"", ["escape", ["macro", 103], 7], "\",client_tz_offset:(new Date).getTimezoneOffset(),activeTime:(window.nytAnalytics||{}).activeTime,exit:!0,gtm:", ["escape", ["macro", 84], 8, 16], "});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 173
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.iterateSettings={apiKey:\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55X2lkIjoiNWMwOThiM2QxNjU0YzEwMDAxMmM2OGY5IiwiaWF0IjoxNTQ0MTI5MzQxfQ.UI13nEXGs0udbZxhjyFLruAEed42XwFO4fZlCqOgY1o\"};\n(function(a,d,f,g,h){function e(){b=d.createElement(f);b.id=g;b.async=1;b.src=\"https:\/\/platform.iteratehq.com\/loader.js\";k.parentNode.insertBefore(b,k)}if(!d.getElementById(g)){a.IterateObjectName=h;var c=function(){c.c(arguments)};c.q=[];c.c=function(a){c.q.push(a)};a[h]=c;var b,k=d.getElementsByTagName(f)[0];\"complete\"===d.readyState?e():a.attachEvent?a.attachEvent(\"onload\",e):a.addEventListener(\"load\",e,!1)}})(window,document,\"script\",\"iterate-js\",\"Iterate\");\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 175
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){dataLayer.push({module:null,card:null,block:null,eventData:null})})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 119
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){if(window.nyt_et){var a={};3\u003CparseInt(navigator.appVersion,10)\u0026\u0026(\"Microsoft Internet Explorer\"===navigator.appName\u0026\u0026document.body?a.size=document.body.offsetWidth+\"x\"+document.body.offsetHeight:\"Netscape\"===navigator.appName\u0026\u0026(a.size=window.innerWidth+\"x\"+window.innerHeight));var b=new Date;a.timeZone=b.getTimezoneOffset()\/60*-1;a.timeZoneHour=b.getHours();window.matchMedia\u0026\u0026(!0===window.matchMedia(\"(orientation: portrait)\").matches?a.orientation=\"port\":!0===window.matchMedia(\"(orientation: landscape)\").matches\u0026\u0026\n(a.orientation=\"land\"));a.language=\"Netscape\"===navigator.appName?navigator.language:navigator.userLanguage;nyt_et({subject:\"page_update\",browser:a,assetUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,assetId:(document.querySelector(\"meta[name\\x3darticleid]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,url:location.href,referrer:\"", ["escape", ["macro", 103], 7], "\",client_tz_offset:(new Date).getTimezoneOffset(),gtm:", ["escape", ["macro", 84], 8, 16], "})}})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 156
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){for(nytAnalytics.impressionBuffer=window.nytAnalytics.impressionBuffer||[];nytAnalytics.impressionBuffer.length;)\"object\"===typeof nytAnalytics.impressionBuffer[0].moduleObj\u0026\u0026\"gateway\"===nytAnalytics.impressionBuffer[0].moduleObj.name\u0026\u0026pageEventTracker.updateData({is_gateway:1}),pageEventTracker.addModuleImpression(nytAnalytics.impressionBuffer.shift())})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 108
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var g=function(a){return\"string\"===typeof a?a.toLowerCase():a},n=function(a){if(!a)return{};a=decodeURI(a);try{return a='{\"'+a.replace(\/[\u0026]+\/g,\"\\x26\").replace(\/([\\?\u0026][^=]+)([\u0026]|$)\/g,\"$1\\x3d$2\").replace(\/(^\\?|\u0026$)\/g,\"\").replace(\/\u0026\/g,'\",\"').replace(\/=\/g,'\":\"')+'\"}',JSON.parse(a)}catch(c){return{}}},m=function(){var a=window.navigator.userAgent,c=", ["escape", ["macro", 103], 8, 16], "||document.referrer,e=document.location.href,b=n(document.location.search);-1\u003Cc.indexOf(\"?\")\u0026\u0026n(c.substr(c.indexOf(\"?\")));var d=\nc,f=\"src smid nl nrx partner campaignid mcid meid\".split(\" \"),h=\/^[^:]*:\\\/\\\/([^\\\/]*)\/,m=f.length,k;for(k=0;k\u003Cm;k++)if(b[f[k]]){var l=f[k];break}e=l?b[l]:\"\"!==d\u0026\u0026d.match(h)?d.match(h)[1]||\"\":\"\"===d\u0026\u0026\/\\.app\/.test(e)?\"NYT Mobile Apps\":\/FBIOS\/.test(a)?\"FBIOS\":\/FBAN\/.test(a)?\"FBAN\":\"\";l=r(e,b);d=e;a=b;f=c;h=\"NYT Mobile Apps\"===d||\"cur\"===a.smtyp||!!a.nl||\"sms\"===a.src||a.smprod\u0026\u0026a.smprod.indexOf\u0026\u0026(-1\u003Ca.smprod.indexOf(\"nytnow\")||-1\u003Ca.smprod.indexOf(\"tools\"))||a.partner\u0026\u0026a.partner.indexOf\u0026\u0026(-1\u003Ca.partner.indexOf(\"rss\")||\n-1\u003Ca.partner.indexOf(\"socialFlow\"))||!!a.nrx||d\u0026\u0026d.indexOf\u0026\u0026-1\u003Cd.indexOf(\"nytimes.com\")||g(d)===g(\"SafariPush\");a.mcid||a.meid||\"pay\"===a.smtyp||\/aud_dev\/.test(a[\"WT.mc_id\"])||\/paid.outbrain.com\/.test(f)?d=\"paid\":h?d=\"owned\":(p.test(d)\u0026\u0026d.indexOf(\"nytimes.com\"),d=\"earned\");a=e;f=\/naver|aol|lycos|search.netscape|cnn|mamma|terra|search.virgilio|alice|eniro|yahoo|aol|about|voila|baidu|yandex|wp|online.onetcenter|yam|rambler|daum|msn|bing|ask|altavista|alltheweb|bing|najdi|aol|seznam|search|duckduckgo|mynet|ekolay|pchome|kvasir|sesam|ozu|szukacz|google\/;\nh=\/\\.(facebook|twitter|reddit|pinterest|getpocket|stumbleupon|myspace|fark|digg|linkedin|plus.url.google|disqus|quora|yelp|meetup|goodreads|weibo|tumblr|instagram|urbanspoon|weebly|youtube|ycombinator|vk|meneame)\\.\/;c=f.test(a)?\"search\":q(a)||h.test(a)||\"t.co\"===a?\"social\":\/nytimes.com|nytnow.com\/.test(a)||\"NYT Mobile Apps\"===a?\"internal\":!b.moc\u0026\u0026!b.meid||null!==c\u0026\u0026\"\"!==c?(b.mcid||b.mc)\u0026\u0026null!==a?\"marketing_campaign\":b.nl||b.emc?\"newsletter\":null===a?null:g(a)===g(\"SafariPush\")||\"sms\"===a?\"notifications\":\n\"referring_links\":\"marketing_email\";b=e;b=\"string\"===typeof b\u0026\u0026\"SafariPush\"===b?b.toLowerCase():b;return{source:b,subchannel:l,type:d,channel:c}},p=\/.*\\..*\/,q=function(a){if(a){var c=\/^(fb\\-|tw\\-|pin\\-|pi\\-|pinterest\\-|re\\-|go\\-|li\\-|in\\-|kk\\-|ln\\-|wc\\-)\/;a=a\u0026\u0026a.match\u0026\u0026a.match(c);if(Array.isArray(a))return a[1]}},r=function(a,c){if(c.meid)return\"marketing email\";if(c.nl||c.emc)return\"Newsletter\";if(\"FBAN\"===a||\"FBIOS\"===a)return\"facebook\";if(\"NYT Mobile Apps\"==a)return a;if(\"sms\"===a)return\"sms notifications\";\nif(g(a)===g(\"SafariPush\"))return\"safari notifications\";if(p.test(a)){var e=\"stumbleupon typepad blogspot digg disqus facebook fark getpocket google linkedin Social pinterest quora reddit scoop slashdot twitter techmeme tinyurl vk\".split(\" \");var b={stumbleupon:\/corp.stumbleupon.com|stumbleupon.com\/,typepad:\/delong.typepad.com|economistsview.typepad.com\/,blogspot:\/digbysblog.blogspot.com\/,digg:\/digg.com\/,disqus:\/disqus.com\/,facebook:\/facebook.com|fb-nytdining|fb-nytimes|fb-nytmetro\u0026smtyp=cur|fb-nytopinion|fb-nytpolitics|fb-nytvideo|fb-share|fb-share?utm_hp_ref=parents|l.facebook.com|lm.facebook.com|m.facebook.com|www.facebook.com\/,\nfark:\/fark.com\/,getpocket:\/getpocket.com\/,google:\/go-share|gp-nytimes|plus.url.google.com\/,linkedin:\/li-nytimes|li-share|linkedin.com|lnkd.in\/,Social:\/netvibes.com|news.ycombinator.com|nythealth|nytimesarts|nytimesphoto|nytpolitics|nytscience|paper.li|pl-share\/,pinterest:\/pi-nytimes|pin-share|pinterest.com\/,quora:\/quora.com\/,reddit:\/re-share|re-share\/,scoop:\/scoop.it\/,slashdot:\/slashdot.org\/,twitter:\/t.co$|tw-bna|tw-dealbook|tw-nytdavidbrooks|tw-nytfashion|tw-nytfood|tw-nythealth|tw-nytimes|tw-nytimesbits|tw-nytimesbusiness|tw-nytimeskrugman|tw-nytimesmap|tw-nytimesmusic|tw-nytimesscience|tw-nytimestech|tw-nytimestheater|tw-nytimestravel|tw-nytimeswell|tw-nytimesworld|tw-nytmag|tw-nytmedia|tw-nytmetro|tw-nytmovies|tw-nytnational|tw-nytopinion|tw-nytstyles|tw-nytvideo|tw-share|tw-tmagazine|tw-upshotnyt\/,\ntechmeme:\/techmeme.com\/,tinyurl:\/tinyurl.com\/,vk:\/vk.com\/};ln=e.length;for(i=i=0;i\u003Cln;i++)if(b[e[i]].test(a))return rollup=e[i];return a}e={\"fb-\":\"facebook\",\"tw-\":\"twitter\",\"pin-\":\"pinterest\",\"pi-\":\"pinterest\",\"pinterest-\":\"pinterest\",\"re-\":\"reddit\",\"go-\":\"googleplus\",\"li-\":\"linkedin\",\"in-\":\"instagram\",\"kk-\":\"kakao\",\"ln-\":\"line\",\"wc-\":\"wechat\"};return e[q(a)]};window.nytAnalytics=window.nytAnalytics||{};nytAnalytics.derivedReferrer=m()})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 70
            }, {
                "function": "__html",
                "setup_tags": ["list", ["tag", 73, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var h=\"src|smprod|emc|smid|nl|partner|nrx|WT.mc_id|oc|CMP|mc|meid\",l=new RegExp(\"\\\\|(\"+h+\")\\x3d\",\"g\"),m=function(a){return function(c,b){var f=a.indexOf(c),e=a.indexOf(b);return f\u003Ee?1:f\u003Ce?-1:0}}(h.split(\"|\")),n=function(a,f){var b={campaignSource:a,campaignMedium:\"notifications\",campaignContent:c(f,\"msgid\")};\"sms\"===a.toLowerCase()\u0026\u0026(b.campaignName=f.subid);return b},c=function(a,c,b){return\"object\"===typeof a\u0026\u0026a.hasOwnProperty(c)?a[c]:b?b:\"\"},k=function(a){if(!a)return{};a=decodeURI(a);\ntry{return a='{\"'+a.replace(\/[\u0026]+\/g,\"\\x26\").replace(\/([\\?\u0026][^=]+)([\u0026]|$)\/g,\"$1\\x3d$2\").replace(\/(^\\?|\u0026$)\/g,\"\").replace(\/\u0026\/g,'\",\"').replace(\/=\/g,'\":\"')+'\"}',JSON.parse(a)}catch(f){return{}}};h=function(){var a,f=", ["escape", ["macro", 28], 8, 16], ",b={},g=", ["escape", ["macro", 103], 8, 16], ";var e=document.location.search||\"\";if(g\u0026\u0026\/.*\\.nytimes\\.com\/.test(g)||!e)return b;var d=k(e);if(a=e.replace(\/\\?|\u0026\/g,\"|\").match(l)){a=a.map(function(a){return a.replace(\/[\\|=]\/g,\"\")}).sort(m);d=k(e);b.campaignName=c(d,\"subid\");b.campaignContent=\nc(d,\"subid1\");b.campaignKeyword=c(d,\"subid2\")||c(d,\"ad-keywords\");e=a.shift();\"src\"===e\u0026\u0026\"safaripush\"!==c(d,e)\u0026\u0026\"sms\"!==c(d,e)\u0026\u0026(e=a.shift());if(\"smprod\"===e\u0026\u0026\"eta1\"===c(d,\"emc\")||\"emc\"===e\u0026\u0026\"eta1\"!==c(d,e)\u0026\u0026\"edit_na\"!==c(d,e)||\"smid\"===e\u0026\u0026\"\"!==c(d,\"nrx\"))e=a.shift();\"mc\"===e\u0026\u0026\"\"===c(d,\"mcid\")\u0026\u0026(e=a.shift());if(e)switch(a=c(d,e),e){case \"src\":b=n(a,d);break;case \"nl\":b={campaignSource:a,campaignMedium:\"email\",campaignName:c(d,\"emc\"),campaignContent:c(d,\"em_pos\")};break;case \"smid\":b={campaignSource:a,\ncampaignMedium:\"social\",campaignName:c(d,\"smtyp\"),campaignContent:c(d,\"smvar\")};break;case \"smprod\":b={campaignSource:function(){if(g){var a=g.match(\/https?:\\\/\\\/([^\/]*)\/);return a?a[1]:g}return\"nyt-fb-native-external-iframe\"===f?\"m.facebook.com\":\"null\"}(),campaignMedium:\"social\",campaignName:c(d,\"smid\"),campaignContent:a};break;case \"partner\":b.campaignSource=a;b.campaignMedium=\"rss\"===a.toLowerCase()?\"RSS\":\"partner\";break;case \"emc\":b=\"edit_na\"===a?{campaignName:c(d,\"emc\"),campaignContent:c(d,\"empos\"),\ncampaignSource:\"Breaking News\",campaignMedium:\"email\"}:{campaignSource:\"nytnow\",campaignMedium:\"email share\",campaignName:\"share tool\"};break;case \"nrx\":b.campaignSource=a;b.campaignMedium=\"Vanity URL\";break;case \"WT.mc_id\":b.campaignSource=a;b.campaignMedium=\"Marketing Campaigns\";break;case \"oc\":b.campaignSource=a;b.campaignMedium=\"Marketing Campaigns\";break;case \"CMP\":b.campaignSource=a;b.campaignMedium=\"Marketing Campaigns\";break;case \"mc\":b.campaignSource=c(d,\"mcid\");b.campaignMedium=a;break;\ncase \"meid\":b.campaignSource=a,b.campaignMedium=\"marketing email\",b.campaignName=c(d,\"moc\"),b.campaignContent=c(d,\"rid\"),b.campaignKeyword=c(d,\"dt\")}}return b};nytAnalytics=window.nytAnalytics||{};nytAnalytics.campaignMap=h()})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 66
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 92],
                "arg1": "gtm.historyChange"
            }, {
                "function": "_eq",
                "arg0": ["macro", 59],
                "arg1": "track"
            }, {
                "function": "_eq",
                "arg0": ["macro", 92],
                "arg1": "scrollComplete"
            }, {
                "function": "_eq",
                "arg0": ["macro", 92],
                "arg1": "gtm.js"
            }, {
                "function": "_sw",
                "arg0": ["macro", 93],
                "arg1": "out"
            }, {
                "function": "_re",
                "arg0": ["macro", 92],
                "arg1": ".*"
            }, {
                "function": "_re",
                "arg0": ["macro", 94],
                "arg1": "\\w+\\%40\\w+\\.\\w+|\\w+\\@\\w+\\.\\w+"
            }, {
                "function": "_eq",
                "arg0": ["macro", 96],
                "arg1": "true"
            }, {
                "function": "_eq",
                "arg0": ["macro", 92],
                "arg1": "moduleInteraction"
            }, {
                "function": "_eq",
                "arg0": ["macro", 92],
                "arg1": "videoEvent"
            }, {
                "function": "_eq",
                "arg0": ["macro", 92],
                "arg1": "pageDataReady"
            }, {
                "function": "_eq",
                "arg0": ["macro", 32],
                "arg1": "false"
            }, {
                "function": "_eq",
                "arg0": ["macro", 92],
                "arg1": "delayError"
            }, {
                "function": "_eq",
                "arg0": ["macro", 92],
                "arg1": "gaScrollEvent"
            }, {
                "function": "_eq",
                "arg0": ["macro", 67],
                "arg1": "1"
            }, {
                "function": "_eq",
                "arg0": ["macro", 77],
                "arg1": "1"
            }, {
                "function": "_eq",
                "arg0": ["macro", 424],
                "arg1": "event"
            }, {
                "function": "_re",
                "arg0": ["macro", 92],
                "arg1": "gaEvent"
            }, {
                "function": "_eq",
                "arg0": ["macro", 43],
                "arg1": "newsletters"
            }, {
                "function": "_eq",
                "arg0": ["macro", 46],
                "arg1": "subscribe"
            }, {
                "function": "_eq",
                "arg0": ["macro", 440],
                "arg1": "undefined"
            }, {
                "function": "_eq",
                "arg0": ["macro", 43],
                "arg1": "gateway"
            }, {
                "function": "_eq",
                "arg0": ["macro", 92],
                "arg1": "impression"
            }, {
                "function": "_eq",
                "arg0": ["macro", 444],
                "arg1": "true"
            }, {
                "function": "_sw",
                "arg0": ["macro", 51],
                "arg1": "elections"
            }, {
                "function": "_eq",
                "arg0": ["macro", 458],
                "arg1": "commentsContainer"
            }, {
                "function": "_eq",
                "arg0": ["macro", 459],
                "arg1": "commentsContainer"
            }, {
                "function": "_eq",
                "arg0": ["macro", 32],
                "arg1": "true"
            }, {
                "function": "_re",
                "arg0": ["macro", 92],
                "arg1": "error|delayError"
            }, {
                "function": "_eq",
                "arg0": ["macro", 92],
                "arg1": "error"
            }, {
                "function": "_re",
                "arg0": ["macro", 68],
                "arg1": "module|card|block",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 92],
                "arg1": "heartbeat"
            }, {
                "function": "_gt",
                "arg0": ["macro", 473],
                "arg1": "0"
            }, {
                "function": "_eq",
                "arg0": ["macro", 70],
                "arg1": "1"
            }, {
                "function": "_eq",
                "arg0": ["macro", 68],
                "arg1": "slideshow"
            }, {
                "function": "_eq",
                "arg0": ["macro", 92],
                "arg1": "allocation"
            }, {
                "function": "_eq",
                "arg0": ["macro", 92],
                "arg1": "trackVirtualPage"
            }, {
                "function": "_eq",
                "arg0": ["macro", 92],
                "arg1": "ab-expose"
            }, {
                "function": "_eq",
                "arg0": ["macro", 92],
                "arg1": "ab-alloc"
            }, {
                "function": "_eq",
                "arg0": ["macro", 92],
                "arg1": "beforeunload"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 2, 34, 44]
                ],
                [
                    ["if", 1, 2],
                    ["add", 2, 6]
                ],
                [
                    ["if", 3],
                    ["add", 2, 35, 61, 29, 30, 31, 32]
                ],
                [
                    ["if", 7, 8],
                    ["add", 3]
                ],
                [
                    ["if", 9],
                    ["add", 4, 40, 52]
                ],
                [
                    ["if", 10],
                    ["add", 5, 8, 9, 0, 43, 46, 47, 48, 51, 53, 54, 55, 64, 67, 69]
                ],
                [
                    ["if", 11, 12],
                    ["add", 5, 36]
                ],
                [
                    ["if", 13],
                    ["add", 7]
                ],
                [
                    ["if", 16, 17],
                    ["add", 10]
                ],
                [
                    ["if", 8, 18, 19],
                    ["add", 11, 16, 17, 20, 21, 22, 58, 63]
                ],
                [
                    ["if", 10],
                    ["unless", 20],
                    ["add", 12, 13, 15, 18, 25, 26, 33, 60]
                ],
                [
                    ["if", 21, 22],
                    ["add", 14, 19, 23, 24]
                ],
                [
                    ["if", 22, 23],
                    ["add", 27]
                ],
                [
                    ["if", 21, 22, 24],
                    ["add", 28]
                ],
                [
                    ["if", 27, 28],
                    ["add", 37]
                ],
                [
                    ["if", 11, 29],
                    ["add", 38]
                ],
                [
                    ["if", 8],
                    ["add", 39]
                ],
                [
                    ["if", 2],
                    ["add", 41, 43]
                ],
                [
                    ["if", 31],
                    ["add", 42]
                ],
                [
                    ["if", 8, 32],
                    ["add", 45]
                ],
                [
                    ["if", 22, 33],
                    ["unless", 34],
                    ["add", 49]
                ],
                [
                    ["if", 8, 30],
                    ["add", 50],
                    ["block", 39]
                ],
                [
                    ["if", 35],
                    ["add", 56]
                ],
                [
                    ["if", 36],
                    ["add", 57, 65]
                ],
                [
                    ["if", 22, 34],
                    ["add", 59]
                ],
                [
                    ["if", 37],
                    ["add", 62]
                ],
                [
                    ["if", 38],
                    ["add", 66]
                ],
                [
                    ["if", 39],
                    ["add", 68]
                ],
                [
                    ["if", 4, 5],
                    ["block", 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 27, 33, 46, 47, 48, 52, 53, 58, 60, 63]
                ],
                [
                    ["if", 3, 4],
                    ["block", 2, 22, 53, 1]
                ],
                [
                    ["if", 0, 4],
                    ["block", 2]
                ],
                [
                    ["if", 5, 6],
                    ["block", 3, 4, 5, 7, 9, 10, 11, 15, 19, 21, 27]
                ],
                [
                    ["if", 5, 14, 15],
                    ["block", 8, 47, 48]
                ],
                [
                    ["if", 3, 6],
                    ["block", 22]
                ],
                [
                    ["if", 0, 25],
                    ["block", 34]
                ],
                [
                    ["if", 0, 26],
                    ["block", 34]
                ]
            ]
        },
        "runtime": [
            [],
            []
        ]


    };
    var aa, ca = this,
        da = /^[\w+/_-]+[=]{0,2}$/,
        ea = null;
    var fa = function() {},
        ha = function(a) {
            return "function" == typeof a
        },
        ia = function(a) {
            return "string" == typeof a
        },
        ja = function(a) {
            return "number" == typeof a && !isNaN(a)
        },
        ka = function(a) {
            return "[object Array]" == Object.prototype.toString.call(Object(a))
        },
        la = function(a, b) {
            if (Array.prototype.indexOf) {
                var c = a.indexOf(b);
                return "number" == typeof c ? c : -1
            }
            for (var d = 0; d < a.length; d++)
                if (a[d] === b) return d;
            return -1
        },
        ma = function(a, b) {
            if (a && ka(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        oa = function(a, b) {
            if (!ja(a) ||
                !ja(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        pa = function(a, b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        qa = function(a) {
            return Math.round(Number(a)) || 0
        },
        ra = function(a) {
            return "false" == String(a).toLowerCase() ? !1 : !!a
        },
        sa = function(a) {
            var b = [];
            if (ka(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        ta = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        ua = function() {
            return (new Date).getTime()
        },
        va = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    va.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    va.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    va.prototype.contains = function(a) {
        return void 0 !== this.get(a)
    };
    var wa = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        xa = function(a) {
            var b = !1;
            return function() {
                if (!b) try {
                    a()
                } catch (c) {}
                b = !0
            }
        },
        ya = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        za = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Aa = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        };
    /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Ba = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Ca = function(a) {
            if (null == a) return String(a);
            var b = Ba.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Da = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Ea = function(a) {
            if (!a || "object" != Ca(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Da(a, "constructor") && !Da(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Da(a, b)
        },
        Fa = function(a, b) {
            var c = b || ("array" == Ca(a) ? [] : {}),
                d;
            for (d in a)
                if (Da(a, d)) {
                    var e = a[d];
                    "array" == Ca(e) ? ("array" != Ca(c[d]) && (c[d] = []), c[d] = Fa(e, c[d])) : Ea(e) ? (Ea(c[d]) || (c[d] = {}), c[d] = Fa(e, c[d])) : c[d] = e
                } return c
        };
    var f = window,
        u = document,
        Ga = navigator,
        Ha = u.currentScript && u.currentScript.src,
        Ia = function(a, b) {
            var c = f[a];
            f[a] = void 0 === c ? b : c;
            return f[a]
        },
        Ja = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Ka = function(a, b, c) {
            var d = u.createElement("script");
            d.type = "text/javascript";
            d.async = !0;
            d.src = a;
            Ja(d, b);
            c && (d.onerror = c);
            var e;
            if (null === ea) b: {
                var g = ca.document,
                    h = g.querySelector && g.querySelector("script[nonce]");
                if (h) {
                    var k = h.nonce || h.getAttribute("nonce");
                    if (k && da.test(k)) {
                        ea = k;
                        break b
                    }
                }
                ea = ""
            }
            e = ea;
            e && d.setAttribute("nonce", e);
            var l = u.getElementsByTagName("script")[0] || u.body || u.head;
            l.parentNode.insertBefore(d, l);
            return d
        },
        La = function() {
            if (Ha) {
                var a = Ha.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Ma = function(a, b) {
            var c = u.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = u.body && u.body.lastChild ||
                u.body || u.head;
            d.parentNode.insertBefore(c, d);
            Ja(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        Na = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        Oa = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Pa = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        z = function(a) {
            f.setTimeout(a, 0)
        },
        Ra = function(a) {
            var b =
                u.getElementById(a);
            if (b && Qa(b, "id") != a)
                for (var c = 1; c < document.all[a].length; c++)
                    if (Qa(document.all[a][c], "id") == a) return document.all[a][c];
            return b
        },
        Qa = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Sa = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Ta = function(a) {
            var b = u.createElement("div");
            b.innerHTML = "A<div>" + a + "</div>";
            b = b.lastChild;
            for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        },
        Ua = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var g = a, h = 0; g && h <= c; h++) {
                if (d[String(g.tagName).toLowerCase()]) return g;
                g = g.parentElement
            }
            return null
        };
    var Va = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var Xa = /:[0-9]+$/,
        Ya = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var g = d[e].split("=");
                if (decodeURIComponent(g[0]).replace(/\+/g, " ") === b) {
                    var h = g.slice(1).join("=");
                    return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
                }
            }
        },
        ab = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = Za(a.protocol) || Za(f.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : f.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
                (a.hostname = (a.hostname || f.location.hostname).replace(Xa, "").toLowerCase());
            var g = b,
                h, k = Za(a.protocol);
            g && (g = String(g).toLowerCase());
            switch (g) {
                case "url_no_fragment":
                    h = $a(a);
                    break;
                case "protocol":
                    h = k;
                    break;
                case "host":
                    h = a.hostname.replace(Xa, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(h);
                        l && l[0] && (h = h.substr(l[0].length))
                    }
                    break;
                case "port":
                    h = String(Number(a.port) || ("http" == k ? 80 : "https" == k ? 443 : ""));
                    break;
                case "path":
                    h = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = h.split("/");
                    0 <=
                        la(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
                    h = m.join("/");
                    break;
                case "query":
                    h = a.search.replace("?", "");
                    e && (h = Ya(h, e, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    h = 1 < n.length ? n[n.length - 1] : "";
                    h = h.split("/")[0];
                    break;
                case "fragment":
                    h = a.hash.replace("#", "");
                    break;
                default:
                    h = a && a.href
            }
            return h
        },
        Za = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        $a = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        bb = function(a) {
            var b = u.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (c = "/" + c);
            var d = b.hostname.replace(Xa, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        };
    var cb = function(a, b, c) {
            for (var d = [], e = String(b || document.cookie).split(";"), g = 0; g < e.length; g++) {
                var h = e[g].split("="),
                    k = h[0].replace(/^\s*|\s*$/g, "");
                if (k && k == a) {
                    var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                    l && c && (l = decodeURIComponent(l));
                    d.push(l)
                }
            }
            return d
        },
        fb = function(a, b, c, d) {
            var e = db(a, d);
            if (1 === e.length) return e[0].id;
            if (0 !== e.length) {
                e = eb(e, function(g) {
                    return g.yb
                }, b);
                if (1 === e.length) return e[0].id;
                e = eb(e, function(g) {
                    return g.Sa
                }, c);
                return e[0] ? e[0].id : void 0
            }
        };

    function hb(a, b, c) {
        var d = document.cookie;
        document.cookie = a;
        var e = document.cookie;
        return d != e || void 0 != c && 0 <= cb(b, e).indexOf(c)
    }
    var kb = function(a, b, c, d, e, g) {
        d = d || "auto";
        var h = {
            path: c || "/"
        };
        e && (h.expires = e);
        "none" !== d && (h.domain = d);
        var k;
        a: {
            var l = b,
                m;
            if (void 0 == l) m = a + "=deleted; expires=" + (new Date(0)).toUTCString();
            else {
                g && (l = encodeURIComponent(l));
                var n = l;
                n && 1200 < n.length && (n = n.substring(0, 1200));
                l = n;
                m = a + "=" + l
            }
            var p = void 0,
                t = void 0,
                q;
            for (q in h)
                if (h.hasOwnProperty(q)) {
                    var r = h[q];
                    if (null != r) switch (q) {
                        case "secure":
                            r && (m += "; secure");
                            break;
                        case "domain":
                            p = r;
                            break;
                        default:
                            "path" == q && (t = r), "expires" == q && r instanceof Date && (r =
                                r.toUTCString()), m += "; " + q + "=" + r
                    }
                } if ("auto" === p) {
                for (var v = ib(), x = 0; x < v.length; ++x) {
                    var y = "none" != v[x] ? v[x] : void 0;
                    if (!jb(y, t) && hb(m + (y ? "; domain=" + y : ""), a, l)) {
                        k = !0;
                        break a
                    }
                }
                k = !1
            } else p && "none" != p && (m += "; domain=" + p),
            k = !jb(p, t) && hb(m, a, l)
        }
        return k
    };

    function eb(a, b, c) {
        for (var d = [], e = [], g, h = 0; h < a.length; h++) {
            var k = a[h],
                l = b(k);
            l === c ? d.push(k) : void 0 === g || l < g ? (e = [k], g = l) : l === g && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function db(a, b) {
        for (var c = [], d = cb(a), e = 0; e < d.length; e++) {
            var g = d[e].split("."),
                h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var k = g.shift();
                k && (k = k.split("-"), c.push({
                    id: g.join("."),
                    yb: 1 * k[0] || 1,
                    Sa: 1 * k[1] || 1
                }))
            }
        }
        return c
    }
    var lb = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        mb = /(^|\.)doubleclick\.net$/i,
        jb = function(a, b) {
            return mb.test(document.location.hostname) || "/" === b && lb.test(a)
        },
        ib = function() {
            var a = [],
                b = document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            a.push("none");
            return a
        };
    var nb = [],
        ob = {
            "\x00": "&#0;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\x0B": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            "-": "&#45;",
            "/": "&#47;",
            "=": "&#61;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        },
        pb = function(a) {
            return ob[a]
        },
        rb = /[\x00\x22\x26\x27\x3c\x3e]/g;
    nb[3] = function(a) {
        return String(a).replace(rb, pb)
    };
    var vb = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
        wb = {
            "\x00": "\\x00",
            "\b": "\\x08",
            "\t": "\\t",
            "\n": "\\n",
            "\x0B": "\\x0b",
            "\f": "\\f",
            "\r": "\\r",
            '"': "\\x22",
            "&": "\\x26",
            "'": "\\x27",
            "/": "\\/",
            "<": "\\x3c",
            "=": "\\x3d",
            ">": "\\x3e",
            "\\": "\\\\",
            "\u0085": "\\x85",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029",
            $: "\\x24",
            "(": "\\x28",
            ")": "\\x29",
            "*": "\\x2a",
            "+": "\\x2b",
            ",": "\\x2c",
            "-": "\\x2d",
            ".": "\\x2e",
            ":": "\\x3a",
            "?": "\\x3f",
            "[": "\\x5b",
            "]": "\\x5d",
            "^": "\\x5e",
            "{": "\\x7b",
            "|": "\\x7c",
            "}": "\\x7d"
        },
        xb = function(a) {
            return wb[a]
        };
    nb[7] = function(a) {
        return String(a).replace(vb, xb)
    };
    nb[8] = function(a) {
        if (null == a) return " null ";
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(vb, xb) + "'"
        }
    };
    var Eb = /['()]/g,
        Fb = function(a) {
            return "%" + a.charCodeAt(0).toString(16)
        };
    nb[12] = function(a) {
        var b =
            encodeURIComponent(String(a));
        Eb.lastIndex = 0;
        return Eb.test(b) ? b.replace(Eb, Fb) : b
    };
    var Gb = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Hb = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\x0B": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        },
        Ib = function(a) {
            return Hb[a]
        };
    var Jb =
        /^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;
    nb[14] = function(a) {
        var b = String(a);
        return Jb.test(b) ? b.replace(Gb, Ib) : "#zSoyz"
    };
    nb[16] = function(a) {
        return a
    };
    var Kb = [],
        Lb = [],
        Mb = [],
        Nb = [],
        Ob = [],
        Pb = {},
        Qb, Rb, Sb, Tb = function(a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        Ub = function(a) {
            var b = a["function"];
            if (!b) throw Error("Error: No function name given for function call.");
            var c = !!Pb[b],
                d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && 0 === e.indexOf("vtp_") && (d[c ? e : e.substr(4)] = a[e]);
            return c ? Pb[b](d) : (void 0)(b, d)
        },
        Wb = function(a, b, c, d) {
            c = c || [];
            d = d || fa;
            var e = {},
                g;
            for (g in a) a.hasOwnProperty(g) && (e[g] = Vb(a[g], b, c, d));
            return e
        },
        Xb = function(a) {
            var b = a["function"];
            if (!b) throw "Error: No function name given for function call.";
            var c = Pb[b];
            return c ? c.priorityOverride || 0 : 0
        },
        Vb = function(a, b, c, d) {
            if (ka(a)) {
                var e;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        e = [];
                        for (var g = 1; g < a.length; g++) e.push(Vb(a[g], b, c, d));
                        return e;
                    case "macro":
                        var h = a[1];
                        if (c[h]) return;
                        var k = Kb[h];
                        if (!k || b(k)) return;
                        c[h] = !0;
                        try {
                            var l = Wb(k, b, c, d);
                            e = Ub(l);
                            Sb && (e = Sb.ff(e, l))
                        } catch (y) {
                            d(y, h), e = !1
                        }
                        c[h] = !1;
                        return e;
                    case "map":
                        e = {};
                        for (var m =
                                1; m < a.length; m += 2) e[Vb(a[m], b, c, d)] = Vb(a[m + 1], b, c, d);
                        return e;
                    case "template":
                        e = [];
                        for (var n = !1, p = 1; p < a.length; p++) {
                            var t = Vb(a[p], b, c, d);
                            Rb && (n = n || t === Rb.ob);
                            e.push(t)
                        }
                        return Rb && n ? Rb.kf(e) : e.join("");
                    case "escape":
                        e = Vb(a[1], b, c, d);
                        if (Rb && ka(a[1]) && "macro" === a[1][0] && Rb.Nf(a)) return Rb.Xf(e);
                        e = String(e);
                        for (var q = 2; q < a.length; q++) nb[a[q]] && (e = nb[a[q]](e));
                        return e;
                    case "tag":
                        var r = a[1];
                        if (!Nb[r]) throw Error("Unable to resolve tag reference " + r + ".");
                        return e = {
                            wd: a[2],
                            index: r
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v["function"] = a[1];
                        var x = Yb(v, b, c, d);
                        a[4] && (x = !x);
                        return x;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Yb = function(a, b, c, d) {
            try {
                return Qb(Wb(a, b, c, d))
            } catch (e) {
                JSON.stringify(a)
            }
            return null
        };
    var Zb = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Uc: a("convert_case_to"),
            Vc: a("convert_false_to"),
            Wc: a("convert_null_to"),
            Xc: a("convert_true_to"),
            Yc: a("convert_undefined_to"),
            ra: a("function"),
            ye: a("instance_name"),
            ze: a("live_only"),
            Ae: a("malware_disabled"),
            Bg: a("original_vendor_template_id"),
            Be: a("once_per_event"),
            md: a("once_per_load"),
            nd: a("setup_tags"),
            Ce: a("tag_id"),
            od: a("teardown_tags")
        }
    }();
    var $b = null,
        cc = function(a, b) {
            function c(t) {
                for (var q = 0; q < t.length; q++) e[t[q]] = !0
            }
            var d = [],
                e = [];
            $b = ac(a, b || function() {});
            for (var g = 0; g < Lb.length; g++) {
                var h = Lb[g],
                    k = bc(h);
                if (k) {
                    for (var l = h.add || [], m = 0; m < l.length; m++) d[l[m]] = !0;
                    c(h.block || [])
                } else null === k && c(h.block || [])
            }
            for (var n = [], p = 0; p < Nb.length; p++) d[p] && !e[p] && (n[p] = !0);
            return n
        },
        bc = function(a) {
            for (var b = a["if"] || [], c = 0; c < b.length; c++) {
                var d = $b(b[c]);
                if (!d) return null === d ? null : !1
            }
            for (var e = a.unless || [], g = 0; g < e.length; g++) {
                var h = $b(e[g]);
                if (null ===
                    h) return null;
                if (h) return !1
            }
            return !0
        },
        ac = function(a, b) {
            var c = [];
            return function(d) {
                void 0 === c[d] && (c[d] = Yb(Mb[d], a, void 0, b));
                return c[d]
            }
        };
    /*
     Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
    var rc = {},
        sc = null,
        tc = Math.random();
    rc.m = "GTM-P528B3";
    rc.sb = "430";
    var uc = "www.googletagmanager.com/gtm.js";
    var vc = uc,
        wc = null,
        xc = null,
        yc = null,
        zc = "//www.googletagmanager.com/a?id=" + rc.m + "&cv=294",
        Ac = {},
        Bc = {},
        Cc = function() {
            var a = sc.sequence || 0;
            sc.sequence = a + 1;
            return a
        };
    var E = function(a, b, c, d) {
            return (2 === Dc() || d || "http:" != f.location.protocol ? a : b) + c
        },
        Dc = function() {
            var a = La(),
                b;
            if (1 === a) a: {
                var c = vc;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, g = 1, h = u.getElementsByTagName("script"), k = 0; k < h.length && 100 > k; k++) {
                    var l = h[k].src;
                    if (l) {
                        l = l.toLowerCase();
                        if (0 === l.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === g && 0 === l.indexOf(d) && (g = 2)
                    }
                }
                b = g
            }
            else b = a;
            return b
        };
    var Ec = !1;
    var Ic = {},
        Jc = function(a) {
            Ic.GTM = Ic.GTM || [];
            Ic.GTM[a] = !0
        };
    var Kc = function() {
            return "&tc=" + Nb.filter(function(a) {
                return a
            }).length
        },
        Tc = function() {
            Lc && (f.clearTimeout(Lc), Lc = void 0);
            void 0 === Mc || Nc[Mc] && !Oc || (Pc[Mc] || Qc.Pf() || 0 >= Rc-- ? (Jc(1), Pc[Mc] = !0) : (Qc.fg(), Na(Sc()), Nc[Mc] = !0, Oc = ""))
        },
        Sc = function() {
            var a = Mc;
            if (void 0 === a) return "";
            for (var b, c = [], d = Ic.GTM || [], e = 0; e < d.length; e++) d[e] && (c[Math.floor(e / 6)] ^= 1 << e % 6);
            for (var g = 0; g < c.length; g++) c[g] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(c[g] || 0);
            b = c.join("");
            return [Uc, Nc[a] ? "" :
                "&es=1", Vc[a], b ? "&u=" + b : "", Kc(), Oc, "&z=0"
            ].join("")
        },
        Wc = function() {
            return [zc, "&v=3&t=t", "&pid=" + oa(), "&rv=" + rc.sb].join("")
        },
        Xc = "0.005000" > Math.random(),
        Uc = Wc(),
        Yc = function() {
            Uc = Wc()
        },
        Nc = {},
        Oc = "",
        Mc = void 0,
        Vc = {},
        Pc = {},
        Lc = void 0,
        Qc = function(a, b) {
            var c = 0,
                d = 0;
            return {
                Pf: function() {
                    if (c < a) return !1;
                    ua() - d >= b && (c = 0);
                    return c >= a
                },
                fg: function() {
                    ua() - d >= b && (c = 0);
                    c++;
                    d = ua()
                }
            }
        }(2, 1E3),
        Rc = 1E3,
        Zc = function(a, b) {
            if (Xc && !Pc[a] && Mc !== a) {
                Tc();
                Mc = a;
                Oc = "";
                var c;
                c = 0 === b.indexOf("gtm.") ? encodeURIComponent(b) :
                    "*";
                Vc[a] = "&e=" + c + "&eid=" + a;
                Lc || (Lc = f.setTimeout(Tc, 500))
            }
        },
        $c = function(a, b, c) {
            if (Xc && !Pc[a] && b) {
                a !== Mc && (Tc(), Mc = a);
                var d = c + String(b[Zb.ra] || "").replace(/_/g, "");
                Oc = Oc ? Oc + "." + d : "&tr=" + d;
                Lc || (Lc = f.setTimeout(Tc, 500));
                2022 <= Sc().length && Tc()
            }
        };
    var ad = new va,
        bd = {},
        cd = {},
        gd = {
            name: "dataLayer",
            set: function(a, b) {
                Fa(dd(a, b), bd);
                ed()
            },
            get: function(a) {
                return fd(a, 2)
            },
            reset: function() {
                ad = new va;
                bd = {};
                ed()
            }
        },
        fd = function(a, b) {
            if (2 != b) {
                var c = ad.get(a);
                if (Xc) {
                    var d = hd(a);
                    c !== d && Jc(5)
                }
                return c
            }
            return hd(a)
        },
        hd = function(a, b, c) {
            var d = a.split("."),
                e = !1,
                g = void 0;
            return e ? g : jd(d)
        },
        jd = function(a) {
            for (var b = bd, c = 0; c < a.length; c++) {
                if (null === b) return !1;
                if (void 0 === b) break;
                b = b[a[c]]
            }
            return b
        };
    var md = function(a, b) {
            cd.hasOwnProperty(a) || (ad.set(a, b), Fa(dd(a, b), bd), ed())
        },
        dd = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), g = 0; g < e.length - 1; g++) d = d[e[g]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        ed = function(a) {
            pa(cd, function(b, c) {
                ad.set(b, c);
                Fa(dd(b, void 0), bd);
                Fa(dd(b, c), bd);
                a && delete cd[b]
            })
        };
    var nd = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        od = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        pd = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        };
    var rd = function(a) {
            var b = fd("gtm.whitelist");
            b && Jc(9);
            var c = b && Aa(sa(b), od),
                d = fd("gtm.blacklist");
            d || (d = fd("tagTypeBlacklist")) && Jc(3);
            d ? Jc(8) : d = [];
            qd() && (d = sa(d), d.push("nonGooglePixels", "nonGoogleScripts"));
            0 <= la(sa(d), "google") && Jc(2);
            var e = d && Aa(sa(d), pd),
                g = {};
            return function(h) {
                var k = h && h[Zb.ra];
                if (!k || "string" != typeof k) return !0;
                k = k.replace(/^_*/, "");
                if (void 0 !== g[k]) return g[k];
                var l = Bc[k] || [],
                    m = a(k);
                if (b) {
                    var n;
                    if (n = m) a: {
                        if (0 > la(c, k))
                            if (l && 0 < l.length)
                                for (var p = 0; p < l.length; p++) {
                                    if (0 > la(c, l[p])) {
                                        Jc(11);
                                        n = !1;
                                        break a
                                    }
                                } else {
                                    n = !1;
                                    break a
                                }
                        n = !0
                    }
                    m = n
                }
                var t = !1;
                if (d) {
                    var q = 0 <= la(e, k);
                    if (q) t = q;
                    else {
                        var r;
                        b: {
                            for (var v = l || [], x = new va, y = 0; y < e.length; y++) x.set(e[y], !0);
                            for (var w = 0; w < v.length; w++)
                                if (x.get(v[w])) {
                                    r = !0;
                                    break b
                                } r = !1
                        }
                        var B = r;
                        B && Jc(10);
                        t = B
                    }
                }
                return g[k] = !m || t
            }
        },
        qd = function() {
            return nd.test(f.location && f.location.hostname)
        };
    var sd = {
        ff: function(a, b) {
            b[Zb.Uc] && "string" === typeof a && (a = 1 == b[Zb.Uc] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Zb.Wc) && null === a && (a = b[Zb.Wc]);
            b.hasOwnProperty(Zb.Yc) && void 0 === a && (a = b[Zb.Yc]);
            b.hasOwnProperty(Zb.Xc) && !0 === a && (a = b[Zb.Xc]);
            b.hasOwnProperty(Zb.Vc) && !1 === a && (a = b[Zb.Vc]);
            return a
        }
    };
    var td = {
            active: !0,
            isWhitelisted: function() {
                return !0
            }
        },
        ud = function(a) {
            var b = sc.zones;
            !b && a && (b = sc.zones = a());
            return b
        };
    var vd = !1,
        wd = 0,
        xd = [];

    function yd(a) {
        if (!vd) {
            var b = u.createEventObject,
                c = "complete" == u.readyState,
                d = "interactive" == u.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                vd = !0;
                for (var e = 0; e < xd.length; e++) z(xd[e])
            }
            xd.push = function() {
                for (var g = 0; g < arguments.length; g++) z(arguments[g]);
                return 0
            }
        }
    }

    function zd() {
        if (!vd && 140 > wd) {
            wd++;
            try {
                u.documentElement.doScroll("left"), yd()
            } catch (a) {
                f.setTimeout(zd, 50)
            }
        }
    }
    var Ad = function(a) {
        vd ? a() : xd.push(a)
    };
    var Bd = function() {
        function a(d) {
            return !ja(d) || 0 > d ? 0 : d
        }
        if (!sc._li && f.performance && f.performance.timing) {
            var b = f.performance.timing.navigationStart,
                c = ja(gd.get("gtm.start")) ? gd.get("gtm.start") : 0;
            sc._li = {
                cst: a(c - b),
                cbt: a(xc - b)
            }
        }
    };
    var Fd = !1,
        Gd = function() {
            return f.GoogleAnalyticsObject && f[f.GoogleAnalyticsObject]
        },
        Hd = !1;
    var Id = function(a) {
            f.GoogleAnalyticsObject || (f.GoogleAnalyticsObject = a || "ga");
            var b = f.GoogleAnalyticsObject;
            if (f[b]) f.hasOwnProperty(b) || Jc(12);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(new Date);
                f[b] = c
            }
            Bd();
            return f[b]
        },
        Jd = function(a, b, c, d) {
            b = String(b).replace(/\s+/g, "").split(",");
            var e = Gd();
            e(a + "require", "linker");
            e(a + "linker:autoLink", b, c, d)
        };
    var Ld = function() {},
        Kd = function() {
            return f.GoogleAnalyticsObject || "ga"
        },
        Md = !1;
    var Td = function(a) {
        var b = sc.consumeError;
        if (!b || !ha(b)) return;
        var c = [];
        if (a instanceof Error) {
            b(Sd({
                message: a.message
            }, c));
            return
        }
        ia(a) && b(Sd({
            message: a
        }, c));
    };

    function Sd(a, b) {
        a.containerId = rc.m;
        var c = {
            type: "GENERIC",
            value: a
        };
        b.length && (c.trace = b);
        return c
    };

    function Ud(a, b, c, d, e) {
        var g = Nb[a],
            h = Vd(a, b, c, d, e);
        if (!h) return null;
        var k = Vb(g[Zb.nd], d.fa, [], fa);
        if (k && k.length) {
            var l = k[0];
            h = Ud(l.index, b, {
                I: h,
                O: 1 === l.wd ? c.terminate : h,
                terminate: c.terminate
            }, d, e)
        }
        return h
    }

    function Vd(a, b, c, d, e) {
        function g() {
            if (h[Zb.Ae]) l();
            else {
                var y = Wb(h, d.fa, [], function(B) {
                        Jc(6);
                        Td(B)
                    }),
                    w = !1;
                y.vtp_gtmOnSuccess = function() {
                    if (!w) {
                        w = !0;
                        $c(d.id, Nb[a], "5");
                        k()
                    }
                };
                y.vtp_gtmOnFailure = function() {
                    if (!w) {
                        w = !0;
                        $c(d.id, Nb[a], "6");
                        l()
                    }
                };
                y.vtp_gtmTagId = h.tag_id;
                $c(d.id, h, "1");
                try {
                    Ub(y)
                } catch (B) {
                    Td(B);
                    $c(d.id, h, "7");
                    w || (w = !0, l())
                }
            }
        }
        var h = Nb[a],
            k = c.I,
            l = c.O,
            m = c.terminate;
        if (d.fa(h)) return null;
        var n = Vb(h[Zb.od], d.fa, [], fa);
        if (n && n.length) {
            var p = n[0],
                t = Ud(p.index, b, {
                    I: k,
                    O: l,
                    terminate: m
                }, d, e);
            if (!t) return null;
            k = t;
            l = 2 === p.wd ? m : t
        }
        if (h[Zb.md] || h[Zb.Be]) {
            var q = h[Zb.md] ? Ob : b,
                r = k,
                v = l;
            if (!q[a]) {
                g = xa(g);
                var x = Wd(a, q, g);
                k = x.I;
                l = x.O
            }
            return function() {
                q[a](r, v)
            }
        }
        return g
    }

    function Wd(a, b, c) {
        var d = [],
            e = [];
        b[a] = Xd(d, e, c);
        return {
            I: function() {
                b[a] = Yd;
                for (var g = 0; g < d.length; g++) d[g]()
            },
            O: function() {
                b[a] = Zd;
                for (var g = 0; g < e.length; g++) e[g]()
            }
        }
    }

    function Xd(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Yd(a) {
        a()
    }

    function Zd(a, b) {
        b()
    };

    function $d(a) {
        var b = 0,
            c = 0,
            d = !1;
        return {
            add: function() {
                c++;
                return xa(function() {
                    b++;
                    d && b >= c && a()
                })
            },
            Qe: function() {
                d = !0;
                b >= c && a()
            }
        }
    }
    var ce = function(a) {
        for (var b = $d(a.callback), c = [], d = [], e = 0; e < Nb.length; e++)
            if (a.Ua[e]) {
                var g = Nb[e];
                if (g[Zb.ze]) continue;
                var h = b.add();
                try {
                    var k = Ud(e, c, {
                        I: h,
                        O: h,
                        terminate: h
                    }, a, e);
                    k ? d.push({
                        Wd: e,
                        b: Xb(g),
                        uf: k
                    }) : (ae(e, a), h())
                } catch (m) {
                    h()
                }
            } b.Qe();
        d.sort(be);
        for (var l = 0; l < d.length; l++) d[l].uf();
        return 0 < d.length
    };

    function be(a, b) {
        var c, d = b.b,
            e = a.b;
        c = d > e ? 1 : d < e ? -1 : 0;
        var g;
        if (0 !== c) g = c;
        else {
            var h = a.Wd,
                k = b.Wd;
            g = h > k ? 1 : h < k ? -1 : 0
        }
        return g
    }

    function ae(a, b) {
        if (!Xc) return;
        var c = function(d) {
            var e = b.fa(Nb[d]) ? "3" : "4",
                g = Vb(Nb[d][Zb.nd], b.fa, [], fa);
            g && g.length && c(g[0].index);
            $c(b.id, Nb[d], e);
            var h = Vb(Nb[d][Zb.od], b.fa, [], fa);
            h && h.length && c(h[0].index)
        };
        c(a);
    }
    var de = !1,
        ee = function(a, b, c, d) {
            if ("gtm.js" == b) {
                if (de) return !1;
                de = !0
            }
            Zc(a, b);
            var e = rd(c),
                g = {
                    id: a,
                    name: b,
                    callback: d || fa,
                    fa: e,
                    Ua: []
                };
            g.Ua = cc(e, function(n) {
                Td(n)
            });
            var h = ce(g);
            "gtm.js" !== b && "gtm.sync" !== b || Ld();
            if (!h) return h;
            for (var k = {
                    __cl: !0,
                    __ecl: !0,
                    __ehl: !0,
                    __evl: !0,
                    __fsl: !0,
                    __hl: !0,
                    __jel: !0,
                    __lcl: !0,
                    __sdl: !0,
                    __tl: !0,
                    __ytl: !0
                }, l = 0; l <
                g.Ua.length; l++)
                if (g.Ua[l]) {
                    var m = Nb[l];
                    if (m && !k[m[Zb.ra]]) return !0
                } return !1
        };
    var F = {
        Ob: "event_callback",
        Qb: "event_timeout"
    };
    var ge = {};
    var he = /[A-Z]+/,
        ie = /\s/,
        je = function(a) {
            if (ia(a) && (a = ta(a), !ie.test(a))) {
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (he.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e]) return;
                        return {
                            id: a,
                            prefix: c,
                            containerId: c + "-" + d[0],
                            da: d
                        }
                    }
                }
            }
        },
        le = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = je(a[c]);
                d && (b[d.id] = d)
            }
            ke(b);
            var e = [];
            pa(b, function(g, h) {
                e.push(h)
            });
            return e
        };

    function ke(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.da[1] && b.push(d.containerId)
            } for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var me = null,
        ne = {},
        oe = {},
        qe, re = function(a, b) {
            var c = {
                event: a
            };
            b && (c.eventModel = Fa(b), b[F.Ob] && (c.eventCallback = b[F.Ob]), b[F.Qb] && (c.eventTimeout = b[F.Qb]));
            return c
        };
    var we = {
            config: function(a) {},
            event: function(a) {
                var b = a[1];
                if (ia(b) && !(3 < a.length)) {
                    var c;
                    if (2 <
                        a.length) {
                        if (!Ea(a[2])) return;
                        c = a[2]
                    }
                    var d = re(b, c);
                    return d
                }
            },
            js: function(a) {
                if (2 == a.length && a[1].getTime) return {
                    event: "gtm.js",
                    "gtm.start": a[1].getTime()
                }
            },
            policy: function(a) {
                if (3 === a.length) {
                    var b = a[1],
                        c = a[2];
                    ge[b] || (ge[b] = []);
                    ge[b].push(c)
                }
            },
            set: function(a) {
                var b;
                2 == a.length && Ea(a[1]) ? b = Fa(a[1]) : 3 == a.length && ia(a[1]) && (b = {}, b[a[1]] = a[2]);
                if (b) return b.eventModel = Fa(b), b.event = "gtag.set", b._clear = !0, b
            }
        },
        xe = {
            policy: !0
        };
    var ye = function() {
        return !1
    };
    var Ee = function(a) {
        if (De(a)) return a;
        this.ug = a
    };
    Ee.prototype.Af = function() {
        return this.ug
    };
    var De = function(a) {
        return !a || "object" !== Ca(a) || Ea(a) ? !1 : "getUntrustedUpdateValue" in a
    };
    Ee.prototype.getUntrustedUpdateValue = Ee.prototype.Af;
    var Fe = !1,
        Ge = [];

    function He() {
        if (!Fe) {
            Fe = !0;
            for (var a = 0; a < Ge.length; a++) z(Ge[a])
        }
    }
    var Ie = function(a) {
        Fe ? z(a) : Ge.push(a)
    };
    var Je = [],
        Ke = !1;

    function Le(a) {
        var b = a.eventCallback,
            c = xa(function() {
                ha(b) && z(function() {
                    b(rc.m)
                })
            }),
            d = a.eventTimeout;
        d && f.setTimeout(c, Number(d));
        return c
    }
    var Me = function(a) {
            return f["dataLayer"].push(a)
        },
        Oe = function(a) {
            var b = a._clear;
            pa(a, function(g, h) {
                "_clear" !== g && (b && md(g, void 0), md(g, h))
            });
            var c = a.event;
            if (!c) return !1;
            var d = a["gtm.uniqueEventId"];
            d || (d = Cc(), a["gtm.uniqueEventId"] = d, md("gtm.uniqueEventId", d));
            yc = c;
            var e = Ne(a);
            yc = null;
            if (!wc) {
                wc = a["gtm.start"];
            }
            return e
        };

    function Ne(a) {
        var b = a.event,
            c = a["gtm.uniqueEventId"],
            d, e = sc.zones;
        d = e ? e.checkState(rc.m, c) : td;
        if (!d.active) return !1;
        var g = Le(a);
        return ee(c, b, d.isWhitelisted, g) ? !0 : !1
    }
    var Pe = function() {
            for (var a = !1; !Ke && 0 < Je.length;) {
                Ke = !0;
                delete bd.eventModel;
                ed();
                var b = Je.shift();
                if (null != b) {
                    var c = De(b);
                    if (c) {
                        var d = b;
                        b = De(d) ? d.getUntrustedUpdateValue() : void 0;
                        for (var e = ["gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < e.length; g++) {
                            var h = e[g],
                                k = fd(h, 1);
                            if (ka(k) || Ea(k)) k = Fa(k);
                            cd[h] = k
                        }
                    }
                    try {
                        if (ha(b)) try {
                            b.call(gd)
                        } catch (v) {} else if (ka(b)) {
                            var l = b;
                            if (ia(l[0])) {
                                var m =
                                    l[0].split("."),
                                    n = m.pop(),
                                    p = l.slice(1),
                                    t = fd(m.join("."), 2);
                                if (void 0 !== t && null !== t) try {
                                    t[n].apply(t, p)
                                } catch (v) {}
                            }
                        } else {
                            var q = b;
                            if (q && ("[object Arguments]" == Object.prototype.toString.call(q) || Object.prototype.hasOwnProperty.call(q, "callee"))) {
                                a: {
                                    if (b.length && ia(b[0])) {
                                        var r = we[b[0]];
                                        if (r && (!c || !xe[b[0]])) {
                                            b = r(b);
                                            break a
                                        }
                                    }
                                    b = void 0
                                }
                                if (!b) {
                                    Ke = !1;
                                    continue
                                }
                            }
                            a = Oe(b) || a
                        }
                    } finally {
                        c && ed(!0)
                    }
                }
                Ke = !1
            }
            return !a
        },
        Qe = function() {
            var a = Pe();
            try {
                var b = rc.m,
                    c = f["dataLayer"].hide;
                if (c && void 0 !== c[b] && c.end) {
                    c[b] = !1;
                    var d = !0,
                        e;
                    for (e in c)
                        if (c.hasOwnProperty(e) && !0 === c[e]) {
                            d = !1;
                            break
                        } d && (c.end(), c.end = null)
                }
            } catch (g) {}
            return a
        },
        Re = function() {
            var a = Ia("dataLayer", []),
                b = Ia("google_tag_manager", {});
            b = b["dataLayer"] = b["dataLayer"] || {};
            Ad(function() {
                b.gtmDom || (b.gtmDom = !0, a.push({
                    event: "gtm.dom"
                }))
            });
            Ie(function() {
                b.gtmLoad || (b.gtmLoad = !0, a.push({
                    event: "gtm.load"
                }))
            });
            var c = a.push;
            a.push = function() {
                var d;
                if (0 < sc.SANDBOXED_JS_SEMAPHORE) {
                    d = [];
                    for (var e = 0; e < arguments.length; e++) d[e] = new Ee(arguments[e])
                } else d = [].slice.call(arguments, 0);
                var g = c.apply(a, d);
                Je.push.apply(Je, d);
                if (300 < this.length)
                    for (Jc(4); 300 < this.length;) this.shift();
                var h = "boolean" !== typeof g || g;
                return Pe() && h
            };
            Je.push.apply(Je, a.slice(0));
            z(Qe)
        };
    var Te = function(a) {
            return Se ? u.querySelectorAll(a) : null
        },
        Ue = function(a, b) {
            if (!Se) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!u.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        Ve = !1;
    if (u.querySelectorAll) try {
        var We = u.querySelectorAll(":root");
        We && 1 == We.length && We[0] == u.documentElement && (Ve = !0)
    } catch (a) {}
    var Se = Ve;
    var Xe;
    var tf = {};
    tf.ob = new String("undefined");
    var uf = function(a) {
        this.resolve = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === tf.ob ? b : a[d]);
            return c.join("")
        }
    };
    uf.prototype.toString = function() {
        return this.resolve("undefined")
    };
    uf.prototype.valueOf = uf.prototype.toString;
    tf.De = uf;
    tf.$b = {};
    tf.kf = function(a) {
        return new uf(a)
    };
    var vf = {};
    tf.gg = function(a, b) {
        var c = Cc();
        vf[c] = [a, b];
        return c
    };
    tf.td = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = vf[c];
            if (d && "function" === typeof d[b]) d[b]();
            vf[c] = void 0
        }
    };
    tf.Nf = function(a) {
        for (var b = !1, c = !1,
                d = 2; d < a.length; d++) b = b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    tf.Xf = function(a) {
        if (a === tf.ob) return a;
        var b = Cc();
        tf.$b[b] = a;
        return 'google_tag_manager["' + rc.m + '"].macro(' + b + ")"
    };
    tf.Rf = function(a, b, c) {
        a instanceof tf.De && (a = a.resolve(tf.gg(b, c)), b = fa);
        return {
            nc: a,
            I: b
        }
    };
    var wf = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": a.className,
                "gtm.elementId": a["for"] || Qa(a, "id") || "",
                "gtm.elementTarget": a.formTarget || a.target || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || a.href || a.src || a.code || a.codebase || "";
            return d
        },
        xf = function(a) {
            sc.hasOwnProperty("autoEventsSettings") || (sc.autoEventsSettings = {});
            var b = sc.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        yf = function(a, b, c) {
            xf(a)[b] = c
        },
        zf = function(a, b, c, d) {
            var e = xf(a),
                g = wa(e, b, d);
            e[b] = c(g)
        },
        Af = function(a, b, c) {
            var d = xf(a);
            return wa(d, b, c)
        };
    var Bf = function() {
            for (var a = Ga.userAgent + (u.cookie || "") + (u.referrer || ""), b = a.length, c = f.history.length; 0 < c;) a += c-- ^ b++;
            var d = 1,
                e, g, h;
            if (a)
                for (d = 0, g = a.length - 1; 0 <= g; g--) h = a.charCodeAt(g), d = (d << 6 & 268435455) + h + (h << 14), e = d & 266338304, d = 0 != e ? d ^ e >> 21 : d;
            return [Math.round(2147483647 * Math.random()) ^ d & 2147483647, Math.round(ua() / 1E3)].join(".")
        },
        Ef = function(a, b, c, d) {
            var e = Cf(b);
            return fb(a, e, Df(c), d)
        },
        Cf = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Df = function(a) {
            if (!a ||
                "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        };

    function Ff(a, b) {
        var c = "" + Cf(a),
            d = Df(b);
        1 < d && (c += "-" + d);
        return c
    };
    var Gf = ["1"],
        Hf = {},
        Lf = function(a, b, c, d) {
            var e = If(a);
            Hf[e] || Jf(e, b, c) || (Kf(e, Bf(), b, c, d), Jf(e, b, c))
        };

    function Kf(a, b, c, d, e) {
        var g;
        g = ["1", Ff(d, c), b].join(".");
        kb(a, g, c, d, 0 == e ? void 0 : new Date(ua() + 1E3 * (void 0 == e ? 7776E3 : e)))
    }

    function Jf(a, b, c) {
        var d = Ef(a, b, c, Gf);
        d && (Hf[a] = d);
        return d
    }

    function If(a) {
        return (a || "_gcl") + "_au"
    };
    var Mf = function() {
        for (var a = [], b = u.cookie.split(";"), c = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, d = 0; d < b.length; d++) {
            var e = b[d].match(c);
            e && a.push({
                Mc: e[1],
                value: e[2]
            })
        }
        var g = {};
        if (!a || !a.length) return g;
        for (var h = 0; h < a.length; h++) {
            var k = a[h].value.split(".");
            "1" == k[0] && 3 == k.length && k[1] && (g[a[h].Mc] || (g[a[h].Mc] = []), g[a[h].Mc].push({
                timestamp: k[1],
                xf: k[2]
            }))
        }
        return g
    };

    function Nf() {
        for (var a = Of, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Pf() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Of, Qf, Rf = function(a) {
            Of = Of || Pf();
            Qf = Qf || Nf();
            for (var b = [], c = 0; c < a.length; c += 3) {
                var d = c + 1 < a.length,
                    e = c + 2 < a.length,
                    g = a.charCodeAt(c),
                    h = d ? a.charCodeAt(c + 1) : 0,
                    k = e ? a.charCodeAt(c + 2) : 0,
                    l = g >> 2,
                    m = (g & 3) << 4 | h >> 4,
                    n = (h & 15) << 2 | k >> 6,
                    p = k & 63;
                e || (p = 64, d || (n = 64));
                b.push(Of[l], Of[m], Of[n], Of[p])
            }
            return b.join("")
        },
        Sf = function(a) {
            function b(l) {
                for (; d < a.length;) {
                    var m = a.charAt(d++),
                        n = Qf[m];
                    if (null != n) return n;
                    if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
                }
                return l
            }
            Of = Of || Pf();
            Qf = Qf ||
                Nf();
            for (var c = "", d = 0;;) {
                var e = b(-1),
                    g = b(0),
                    h = b(64),
                    k = b(64);
                if (64 === k && -1 === e) return c;
                c += String.fromCharCode(e << 2 | g >> 4);
                64 != h && (c += String.fromCharCode(g << 4 & 240 | h >> 2), 64 != k && (c += String.fromCharCode(h << 6 & 192 | k)))
            }
        };
    var Tf;

    function Uf(a, b) {
        if (!a || b === u.location.hostname) return !1;
        for (var c = 0; c < a.length; c++)
            if (a[c] instanceof RegExp) {
                if (a[c].test(b)) return !0
            } else if (0 <= b.indexOf(a[c])) return !0;
        return !1
    }
    var Vf = function() {
        var a = Ia("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Wf = /(.*?)\*(.*?)\*(.*)/,
        Xf = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Yf = /^(?:www\.|m\.|amp\.)+/,
        Zf = /([^?#]+)(\?[^#]*)?(#.*)?/,
        $f = /(.*?)(^|&)_gl=([^&]*)&?(.*)/,
        bg = function(a) {
            var b = [],
                c;
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var d = a[c];
                    void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(Rf(String(d))))
                } var e = b.join("*");
            return ["1", ag(e), e].join("*")
        },
        ag = function(a, b) {
            var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage ||
                    window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a
                ].join("*"),
                d;
            if (!(d = Tf)) {
                for (var e = Array(256), g = 0; 256 > g; g++) {
                    for (var h = g, k = 0; 8 > k; k++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                    e[g] = h
                }
                d = e
            }
            Tf = d;
            for (var l = 4294967295, m = 0; m < c.length; m++) l = l >>> 8 ^ Tf[(l ^ c.charCodeAt(m)) & 255];
            return ((l ^ -1) >>> 0).toString(36)
        },
        dg = function() {
            return function(a) {
                var b = bb(f.location.href),
                    c = b.search.replace("?", ""),
                    d = Ya(c, "_gl", !0) || "";
                a.query = cg(d) || {};
                var e = ab(b, "fragment").match($f);
                a.fragment = cg(e && e[3] ||
                    "") || {}
            }
        },
        cg = function(a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var g = Wf.exec(d);
                            if (g) {
                                c = g;
                                break a
                            }
                            d = decodeURIComponent(d)
                        }
                        c = void 0
                    }
                    var h = c;
                    if (h && "1" === h[1]) {
                        var k = h[3],
                            l;
                        a: {
                            for (var m = h[2], n = 0; n < b; ++n)
                                if (m === ag(k, n)) {
                                    l = !0;
                                    break a
                                } l = !1
                        }
                        if (l) {
                            for (var p = {}, t = k ? k.split("*") : [], q = 0; q < t.length; q += 2) p[t[q]] = Sf(t[q + 1]);
                            return p
                        }
                    }
                }
            } catch (r) {}
        };

    function eg(a, b, c) {
        function d(m) {
            var n = m,
                p = $f.exec(n),
                t = n;
            if (p) {
                var q = p[2],
                    r = p[4];
                t = p[1];
                r && (t = t + q + r)
            }
            m = t;
            var v = m.charAt(m.length - 1);
            m && "&" !== v && (m += "&");
            return m + l
        }
        c = void 0 === c ? !1 : c;
        var e = Zf.exec(b);
        if (!e) return "";
        var g = e[1],
            h = e[2] || "",
            k = e[3] || "",
            l = "_gl=" + a;
        c ? k = "#" + d(k.substring(1)) : h = "?" + d(h.substring(1));
        return "" + g + h + k
    }

    function fg(a, b, c) {
        for (var d = {}, e = {}, g = Vf().decorators, h = 0; h < g.length; ++h) {
            var k = g[h];
            (!c || k.forms) && Uf(k.domains, b) && (k.fragment ? ya(e, k.callback()) : ya(d, k.callback()))
        }
        if (za(d)) {
            var l = bg(d);
            if (c) {
                if (a && a.action) {
                    var m = (a.method || "").toLowerCase();
                    if ("get" === m) {
                        for (var n = a.childNodes || [], p = !1, t = 0; t < n.length; t++) {
                            var q = n[t];
                            if ("_gl" === q.name) {
                                q.setAttribute("value", l);
                                p = !0;
                                break
                            }
                        }
                        if (!p) {
                            var r = u.createElement("input");
                            r.setAttribute("type", "hidden");
                            r.setAttribute("name", "_gl");
                            r.setAttribute("value",
                                l);
                            a.appendChild(r)
                        }
                    } else if ("post" === m) {
                        var v = eg(l, a.action);
                        Va.test(v) && (a.action = v)
                    }
                }
            } else gg(l, a, !1)
        }
        if (!c && za(e)) {
            var x = bg(e);
            gg(x, a, !0)
        }
    }

    function gg(a, b, c) {
        if (b.href) {
            var d = eg(a, b.href, void 0 === c ? !1 : c);
            Va.test(d) && (b.href = d)
        }
    }
    var hg = function(a) {
            try {
                var b;
                a: {
                    for (var c = a.target || a.srcElement || {}, d = 100; c && 0 < d;) {
                        if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                            b = c;
                            break a
                        }
                        c = c.parentNode;
                        d--
                    }
                    b = null
                }
                var e = b;
                if (e) {
                    var g = e.protocol;
                    "http:" !== g && "https:" !== g || fg(e, e.hostname, !1)
                }
            } catch (h) {}
        },
        ig = function(a) {
            try {
                var b = a.target || a.srcElement || {};
                if (b.action) {
                    var c = ab(bb(b.action), "host");
                    fg(b, c, !0)
                }
            } catch (d) {}
        },
        jg = function(a, b, c, d) {
            var e = Vf();
            e.init || (Oa(u, "mousedown", hg), Oa(u, "keyup", hg), Oa(u, "submit", ig), e.init = !0);
            var g = {
                callback: a,
                domains: b,
                fragment: "fragment" === c,
                forms: !!d
            };
            Vf().decorators.push(g)
        },
        kg = function() {
            var a = u.location.hostname,
                b = Xf.exec(u.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var g = c.split("/"),
                    h = g[1];
                e = "s" === h ? decodeURIComponent(g[2]) : decodeURIComponent(h)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            return a.replace(Yf, "") === e.replace(Yf, "")
        },
        lg = function(a, b) {
            return !1 === a ? !1 : a || b || kg()
        };
    var mg = /^\w+$/,
        ng = /^[\w-]+$/,
        og = /^~?[\w-]+$/,
        pg = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha"
        };

    function qg(a) {
        return a && "string" == typeof a && a.match(mg) ? a : "_gcl"
    }
    var sg = function() {
        var a = bb(f.location.href),
            b = ab(a, "query", !1, void 0, "gclid"),
            c = ab(a, "query", !1, void 0, "gclsrc"),
            d = ab(a, "query", !1, void 0, "dclid");
        if (!b || !c) {
            var e = a.hash.replace("#", "");
            b = b || Ya(e, "gclid", void 0);
            c = c || Ya(e, "gclsrc", void 0)
        }
        return rg(b, c, d)
    };

    function rg(a, b, c) {
        var d = {},
            e = function(g, h) {
                d[h] || (d[h] = []);
                d[h].push(g)
            };
        if (void 0 !== a && a.match(ng)) switch (b) {
            case void 0:
                e(a, "aw");
                break;
            case "aw.ds":
                e(a, "aw");
                e(a, "dc");
                break;
            case "ds":
                e(a, "dc");
                break;
            case "gf":
                e(a, "gf");
                break;
            case "ha":
                e(a, "ha")
        }
        c && e(c, "dc");
        return d
    }

    function tg(a, b, c) {
        function d(p, t) {
            var q = ug(p, e);
            q && kb(q, t, h, g, l, !0)
        }
        b = b || {};
        var e = qg(b.prefix),
            g = b.domain || "auto",
            h = b.path || "/",
            k = void 0 == b.Jd ? 7776E3 : b.Jd;
        c = c || ua();
        var l = 0 == k ? void 0 : new Date(c + 1E3 * k),
            m = Math.round(c / 1E3),
            n = function(p) {
                return ["GCL", m, p].join(".")
            };
        a.aw && (!0 === b.$g ? d("aw", n("~" + a.aw[0])) : d("aw", n(a.aw[0])));
        a.dc && d("dc", n(a.dc[0]));
        a.gf && d("gf", n(a.gf[0]));
        a.ha && d("ha", n(a.ha[0]))
    }
    var ug = function(a, b) {
            var c = pg[a];
            if (void 0 !== c) return b + c
        },
        vg = function(a) {
            var b = a.split(".");
            return 3 !== b.length || "GCL" !== b[0] ? 0 : 1E3 * (Number(b[1]) || 0)
        };

    function wg(a) {
        var b = a.split(".");
        if (3 == b.length && "GCL" == b[0] && b[1]) return b[2]
    }
    var xg = function(a, b, c, d, e) {
            if (ka(b)) {
                var g = qg(e);
                jg(function() {
                    for (var h = {}, k = 0; k < a.length; ++k) {
                        var l = ug(a[k], g);
                        if (l) {
                            var m = cb(l, u.cookie);
                            m.length && (h[l] = m.sort()[m.length - 1])
                        }
                    }
                    return h
                }, b, c, d)
            }
        },
        yg = function(a) {
            return a.filter(function(b) {
                return og.test(b)
            })
        },
        zg = function(a) {
            for (var b = ["aw", "dc"], c = qg(a && a.prefix), d = {}, e = 0; e < b.length; e++) pg[b[e]] && (d[b[e]] = pg[b[e]]);
            pa(d, function(g, h) {
                var k = cb(c + h, u.cookie);
                if (k.length) {
                    var l = k[0],
                        m = vg(l),
                        n = {};
                    n[g] = [wg(l)];
                    tg(n, a, m)
                }
            })
        };
    var Ag = /^\d+\.fls\.doubleclick\.net$/;

    function Bg(a) {
        var b = bb(f.location.href),
            c = ab(b, "host", !1);
        if (c && c.match(Ag)) {
            var d = ab(b, "path").split(a + "=");
            if (1 < d.length) return d[1].split(";")[0].split("?")[0]
        }
    }

    function Cg(a, b) {
        if ("aw" == a || "dc" == a) {
            var c = Bg("gcl" + a);
            if (c) return c.split(".")
        }
        var d = qg(b);
        if ("_gcl" == d) {
            var e;
            e = sg()[a] || [];
            if (0 < e.length) return e
        }
        var g = ug(a, d),
            h;
        if (g) {
            var k = [];
            if (u.cookie) {
                var l = cb(g, u.cookie);
                if (l && 0 != l.length) {
                    for (var m = 0; m < l.length; m++) {
                        var n = wg(l[m]);
                        n && -1 === la(k, n) && k.push(n)
                    }
                    h = yg(k)
                } else h = k
            } else h = k
        } else h = [];
        return h
    }
    var Dg = function() {
            var a = Bg("gac");
            if (a) return decodeURIComponent(a);
            var b = Mf(),
                c = [];
            pa(b, function(d, e) {
                for (var g = [], h = 0; h < e.length; h++) g.push(e[h].xf);
                g = yg(g);
                g.length && c.push(d + ":" + g.join(","))
            });
            return c.join(";")
        },
        Eg = function(a, b, c, d, e) {
            Lf(b, c, d, e);
            var g = Hf[If(b)],
                h = sg().dc || [],
                k = !1;
            if (g && 0 < h.length) {
                var l = sc.joined_au = sc.joined_au || {},
                    m = b || "_gcl";
                if (!l[m])
                    for (var n = 0; n < h.length; n++) {
                        var p = "https://adservice.google.com/ddm/regclk",
                            t = p = p + "?gclid=" + h[n] + "&auiddc=" + g;
                        Ga.sendBeacon && Ga.sendBeacon(t) || Na(t);
                        k = l[m] = !0
                    }
            }
            null == a && (a = k);
            if (a && g) {
                var q = If(b),
                    r = Hf[q];
                r && Kf(q, r, c, d, e)
            }
        };
    var Fg;
    if (3 === rc.sb.length) Fg = "g";
    else {
        var Gg = "G";
        Fg = Gg
    }
    var Hg = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: Fg
        },
        Ig = function(a) {
            var b = rc.m.split("-"),
                c = b[0].toUpperCase(),
                d = Hg[c] || "i",
                e = a && "GTM" === c ? b[1] : "",
                g;
            if (3 === rc.sb.length) {
                var h = void 0;
                g = "2" + (h || "w")
            } else g = "";
            return g + d + rc.sb + e
        };
    var Jg = function(a) {
            return !(void 0 === a || null === a || 0 === (a + "").length)
        },
        Kg = function(a, b) {
            var c;
            if (2 === b.L) return a("ord", oa(1E11, 1E13)), !0;
            if (3 === b.L) return a("ord", "1"), a("num", oa(1E11, 1E13)), !0;
            if (4 === b.L) return Jg(b.sessionId) && a("ord", b.sessionId), !0;
            if (5 === b.L) c = "1";
            else if (6 === b.L) c = b.Gc;
            else return !1;
            Jg(c) && a("qty", c);
            Jg(b.vb) && a("cost", b.vb);
            Jg(b.transactionId) && a("ord", b.transactionId);
            return !0
        },
        Lg = encodeURIComponent,
        Mg = function(a, b) {
            function c(n, p, t) {
                g.hasOwnProperty(n) || (p += "", e += ";" + n + "=" +
                    (t ? p : Lg(p)))
            }
            var d = a.jc,
                e = a.protocol;
            e += a.Eb ? "//" + d + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
            e += ";src=" + Lg(d) + (";type=" + Lg(a.mc)) + (";cat=" + Lg(a.Na));
            var g = a.nf || {};
            pa(g, function(n, p) {
                e += ";" + Lg(n) + "=" + Lg(p + "")
            });
            if (Kg(c, a)) {
                Jg(a.Jb) && c("u", a.Jb);
                Jg(a.Ib) && c("tran", a.Ib);
                c("gtm", Ig());
                !1 === a.Me && c("npa", "1");
                if (a.hc) {
                    var h = Cg("dc", a.wa);
                    h && h.length && c("gcldc", h.join("."));
                    var k = Cg("aw", a.wa);
                    k && k.length && c("gclaw", k.join("."));
                    var l = Dg();
                    l && c("gac", l);
                    Lf(a.wa, void 0, a.hf, a.jf);
                    var m = Hf[If(a.wa)];
                    m && c("auiddc", m)
                }
                Jg(a.Cc) && c("prd", a.Cc, !0);
                pa(a.Pc, function(n, p) {
                    c(n, p)
                });
                e += b || "";
                Jg(a.Cb) && c("~oref", a.Cb);
                a.Eb ? Ma(e + "?", a.I) : Na(e + "?", a.I, a.O)
            } else z(a.O)
        };
    var Pg = !!f.MutationObserver,
        Qg = void 0,
        Rg = function(a) {
            if (!Qg) {
                var b = function() {
                    var c = u.body;
                    if (c)
                        if (Pg)(new MutationObserver(function() {
                            for (var e = 0; e < Qg.length; e++) z(Qg[e])
                        })).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                        else {
                            var d = !1;
                            Oa(c, "DOMNodeInserted", function() {
                                d || (d = !0, z(function() {
                                    d = !1;
                                    for (var e = 0; e < Qg.length; e++) z(Qg[e])
                                }))
                            })
                        }
                };
                Qg = [];
                u.body ? b() : z(b)
            }
            Qg.push(a)
        };
    var ih = f.clearTimeout,
        jh = f.setTimeout,
        G = function(a, b, c) {
            if (ye()) {
                b && z(b)
            } else return Ka(a, b, c)
        },
        kh = function() {
            return new Date
        },
        lh = function() {
            return f.location.href
        },
        mh = function(a) {
            return ab(bb(a), "fragment")
        },
        nh = function(a) {
            return $a(bb(a))
        },
        oh = function(a, b) {
            return fd(a, b || 2)
        },
        ph = function(a, b, c) {
            b && (a.eventCallback = b, c && (a.eventTimeout = c));
            return Me(a)
        },
        qh = function(a, b) {
            f[a] = b
        },
        L = function(a, b, c) {
            b && (void 0 === f[a] ||
                c && !f[a]) && (f[a] = b);
            return f[a]
        },
        rh = function(a, b, c) {
            return cb(a, b, void 0 === c ? !0 : !!c)
        },
        sh = function(a, b, c, d) {
            var e = {
                    prefix: a,
                    path: b,
                    domain: c,
                    Jd: d
                },
                g = sg();
            tg(g, e);
            zg(e)
        },
        th = function(a, b, c, d, e) {
            var g = dg(),
                h = Vf();
            h.data || (h.data = {
                query: {},
                fragment: {}
            }, g(h.data));
            var k = {},
                l = h.data;
            l && (ya(k, l.query), ya(k, l.fragment));
            for (var m = qg(b), n = 0; n < a.length; ++n) {
                var p = a[n];
                if (void 0 !== pg[p]) {
                    var t = ug(p, m),
                        q = k[t];
                    if (q) {
                        var r = Math.min(vg(q), ua()),
                            v;
                        b: {
                            for (var x = r, y = cb(t, u.cookie),
                                    w = 0; w < y.length; ++w)
                                if (vg(y[w]) > x) {
                                    v = !0;
                                    break b
                                } v = !1
                        }
                        v || kb(t, q, c, d, 0 == e ? void 0 : new Date(r + 1E3 * (null == e ? 7776E3 : e)), !0)
                    }
                }
            }
            var B = {
                prefix: b,
                path: c,
                domain: d
            };
            tg(rg(k.gclid, k.gclsrc), B);
        },
        uh = function(a, b, c, d, e) {
            xg(a, b, c, d, e);
        },
        vh = function(a, b) {
            if (ye()) {
                b && z(b)
            } else Ma(a, b)
        },
        wh = function(a) {
            return !!Af(a,
                "init", !1)
        },
        xh = function(a) {
            yf(a, "init", !0)
        },
        yh = function(a, b, c) {
            var d = (void 0 === c ? 0 : c) ? "www.googletagmanager.com/gtag/js" : vc;
            d += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
            b && pa(b, function(e, g) {
                g && (d += "&" + e + "=" + encodeURIComponent(g))
            });
            G(E("https://", "http://", d))
        };
    var Ah = tf.Rf;
    var Bh = new va;

    function Ch(a, b) {
        function c(h) {
            var k = bb(h),
                l = ab(k, "protocol"),
                m = ab(k, "host", !0),
                n = ab(k, "port"),
                p = ab(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" == l && "80" == n || "https" == l && "443" == n) l = "web", n = "default";
            return [l, m, n, p]
        }
        for (var d = c(String(a)), e = c(String(b)), g = 0; g < d.length; g++)
            if (d[g] !== e[g]) return !1;
        return !0
    }

    function Dh(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && ka(c)) {
            for (var d = 0; d < c.length; d++)
                if (Dh({
                        "function": a["function"],
                        arg0: b,
                        arg1: c[d]
                    })) return !0;
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var e;
                a: {
                    if (b) {
                        var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                        try {
                            for (var h = 0; h < g.length; h++)
                                if (b[g[h]]) {
                                    e = b[g[h]](c);
                                    break a
                                }
                        } catch (v) {}
                    }
                    e = !1
                }
                return e;
            case "_ew":
                var k, l;
                k = String(b);
                l = String(c);
                var m = k.length -
                    l.length;
                return 0 <= m && k.indexOf(l, m) == m;
            case "_eq":
                return String(b) == String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                var n;
                n = String(b).split(",");
                return 0 <= la(n, String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                var p;
                var t = a.ignore_case ? "i" : void 0;
                try {
                    var q = String(c) + t,
                        r = Bh.get(q);
                    r || (r = new RegExp(c, t), Bh.set(q, r));
                    p = r.test(b)
                } catch (v) {
                    p = !1
                }
                return p;
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return Ch(b, c)
        }
        return !1
    };
    var Fh = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var Gh = {},
        Hh = encodeURI,
        M = encodeURIComponent,
        Ih = Na;
    var Jh = function(a, b) {
        if (!a) return !1;
        var c = ab(bb(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var g = c.length - e.length;
                0 < g && "." != e.charAt(0) && (g--, e = "." + e);
                if (0 <= g && c.indexOf(e, g) == g) return !0
            }
        }
        return !1
    };
    var Kh = function(a, b, c) {
        for (var d = {}, e = !1, g = 0; a && g < a.length; g++) a[g] && a[g].hasOwnProperty(b) && a[g].hasOwnProperty(c) && (d[a[g][b]] = a[g][c], e = !0);
        return e ? d : null
    };
    Gh.Of = function() {
        var a = !1;
        a = !0;
        return a
    };
    var ti = function(a, b, c, d) {
            this.n = a;
            this.t = b;
            this.p = c;
            this.d = d
        },
        ui = function() {
            this.c = 1;
            this.e = [];
            this.p = null
        };

    function vi(a) {
        var b = sc,
            c = b.gss = b.gss || {};
        return c[a] = c[a] || new ui
    }
    var wi = function(a, b) {
            vi(a).p = b
        },
        xi = function(a) {
            var b = vi(a),
                c = b.p;
            if (c) {
                var d = b.e,
                    e = [];
                b.e = [];
                var g = function(h) {
                    for (var k = 0; k < h.length; k++) try {
                        var l = h[k];
                        l.d ? (l.d = !1, e.push(l)) : c(l.n, l.t, l.p)
                    } catch (m) {}
                };
                g(d);
                g(e)
            }
        };
    var zi = function() {
        var a = f.gaGlobal = f.gaGlobal || {};
        a.hid = a.hid || oa();
        return a.hid
    };
    var Oi = window,
        Pi = document,
        Qi = function(a) {
            var b = Oi._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === Oi["ga-disable-" + a]) return !0;
            try {
                var c = Oi.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (g) {}
            for (var d = cb("AMP_TOKEN", Pi.cookie, !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return Pi.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var Xi = function(a, b, c) {
            Wi(a);
            var d = Math.floor(ua() / 1E3);
            vi(a).e.push(new ti(b, d, c, void 0));
            xi(a)
        },
        Yi = function(a, b, c) {
            Wi(a);
            var d = Math.floor(ua() / 1E3);
            vi(a).e.push(new ti(b, d, c, !0))
        },
        Wi = function(a) {
            if (1 === vi(a).c) {
                vi(a).c = 2;
                var b = encodeURIComponent(a);
                Ka(("http:" != f.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com/gtag/js?id=" + b + "&l=dataLayer&cx=c"))
            }
        },
        $i = function(a, b) {},
        Zi = function(a, b) {};
    var W = {
        a: {}
    };
    W.a.ctv = ["google"],
        function() {
            (function(a) {
                W.__ctv = a;
                W.__ctv.g = "ctv";
                W.__ctv.h = !0;
                W.__ctv.b = 0
            })(function() {
                return "294"
            })
        }();
    W.a.jsm = ["customScripts"],
        function() {
            (function(a) {
                W.__jsm = a;
                W.__jsm.g = "jsm";
                W.__jsm.h = !0;
                W.__jsm.b = 0
            })(function(a) {
                if (void 0 !== a.vtp_javascript) {
                    var b = a.vtp_javascript;
                    try {
                        var c = L("google_tag_manager");
                        return c && c.e && c.e(b)
                    } catch (d) {}
                }
            })
        }();
    W.a.flc = [],
        function() {
            function a(b, c) {
                c = c ? c.slice(0, -1) : void 0;
                Mg(b, c)
            }(function(b) {
                W.__flc = b;
                W.__flc.g = "flc";
                W.__flc.h = !0;
                W.__flc.b = 0
            })(function(b) {
                var c = !b.hasOwnProperty("vtp_enableConversionLinker") || b.vtp_enableConversionLinker,
                    d = Kh(b.vtp_customVariable || [], "key", "value") || {},
                    e = {
                        Na: b.vtp_activityTag,
                        hc: c,
                        wa: b.vtp_conversionCookiePrefix || void 0,
                        vb: void 0,
                        L: {
                            UNIQUE: 3,
                            SESSION: 4
                        } [b.vtp_ordinalType] || 2,
                        jc: b.vtp_advertiserId,
                        mc: b.vtp_groupTag,
                        O: b.vtp_gtmOnFailure,
                        I: b.vtp_gtmOnSuccess,
                        Cb: b.vtp_useImageTag ?
                            void 0 : b.vtp_url,
                        protocol: "",
                        Gc: void 0,
                        Eb: !b.vtp_useImageTag,
                        sessionId: b.vtp_sessionId,
                        Ib: b.vtp_transactionVariable,
                        transactionId: void 0,
                        Jb: b.vtp_userVariable,
                        Pc: d
                    };
                if (b.vtp_enableAttribution) {
                    var g = b.vtp_attributionFields || [];
                    if (g.length) {
                        G("//www.gstatic.com/attribution/collection/attributiontools.js", function() {
                            a(e, L("google_attr").build([Kh(g, "key", "value") || {}]))
                        }, b.vtp_gtmOnFailure);
                        return
                    }
                }
                a(e)
            })
        }();
    W.a.c = ["google"],
        function() {
            (function(a) {
                W.__c = a;
                W.__c.g = "c";
                W.__c.h = !0;
                W.__c.b = 0
            })(function(a) {
                return a.vtp_value
            })
        }();
    W.a.d = ["google"],
        function() {
            (function(a) {
                W.__d = a;
                W.__d.g = "d";
                W.__d.h = !0;
                W.__d.b = 0
            })(function(a) {
                var b = null,
                    c = null,
                    d = a.vtp_attributeName;
                if ("CSS" == a.vtp_selectorType) {
                    var e = Te(a.vtp_elementSelector);
                    e && 0 < e.length && (b = e[0])
                } else b = Ra(a.vtp_elementId);
                b && (c = d ? Qa(b, d) : Sa(b));
                return ta(String(b && c))
            })
        }();
    W.a.e = ["google"],
        function() {
            (function(a) {
                W.__e = a;
                W.__e.g = "e";
                W.__e.h = !0;
                W.__e.b = 0
            })(function() {
                return yc
            })
        }();
    W.a.f = ["google"],
        function() {
            (function(a) {
                W.__f = a;
                W.__f.g = "f";
                W.__f.h = !0;
                W.__f.b = 0
            })(function(a) {
                var b = oh("gtm.referrer", 1) || u.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? ab(bb(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : nh(String(b)) : String(b)
            })
        }();
    W.a.j = ["google"],
        function() {
            (function(a) {
                W.__j = a;
                W.__j.g = "j";
                W.__j.h = !0;
                W.__j.b = 0
            })(function(a) {
                for (var b = String(a.vtp_name).split("."), c = L(b.shift()), d = 0; d < b.length; d++) c = c && c[b[d]];
                return c
            })
        }();
    W.a.k = ["google"],
        function() {
            (function(a) {
                W.__k = a;
                W.__k.g = "k";
                W.__k.h = !0;
                W.__k.b = 0
            })(function(a) {
                return rh(a.vtp_name, oh("gtm.cookie", 1), !!a.vtp_decodeCookie)[0]
            })
        }();
    W.a.r = ["google"],
        function() {
            (function(a) {
                W.__r = a;
                W.__r.g = "r";
                W.__r.h = !0;
                W.__r.b = 0
            })(function(a) {
                return oa(a.vtp_min, a.vtp_max)
            })
        }();
    W.a.t = ["google"],
        function() {
            (function(a) {
                W.__t = a;
                W.__t.g = "t";
                W.__t.h = !0;
                W.__t.b = 0
            })(function() {
                return kh().getTime()
            })
        }();
    W.a.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                W.__u = b;
                W.__u.g = "u";
                W.__u.h = !0;
                W.__u.b = 0
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : oh("gtm.url", 1)) || lh();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return nh(String(c));
                var e = bb(String(c)),
                    g;
                if ("QUERY" == d && b[a("vtp_multiQueryKeys")]) a: {
                    var h = b[a("vtp_queryKey")],
                        k;k = ka(h) ? h : String(h || "").replace(/\s+/g, "").split(",");
                    for (var l = 0; l < k.length; l++) {
                        var m = ab(e, "QUERY", void 0, void 0,
                            k[l]);
                        if (null != m) {
                            g = m;
                            break a
                        }
                    }
                    g = void 0
                }
                else g = ab(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0, "QUERY" == d ? b[a("vtp_queryKey")] : void 0);
                return g
            })
        }();
    W.a.v = ["google"],
        function() {
            (function(a) {
                W.__v = a;
                W.__v.g = "v";
                W.__v.h = !0;
                W.__v.b = 0
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = oh(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
                return void 0 !== c ? c : a.vtp_defaultValue
            })
        }();

    W.a.ua = ["google"],
        function() {
            var a, b = function(c) {
                var d = {},
                    e = {},
                    g = {},
                    h = {},
                    k = {};
                if (c.vtp_gaSettings) {
                    var l = c.vtp_gaSettings;
                    Fa(Kh(l.vtp_fieldsToSet, "fieldName", "value"), e);
                    Fa(Kh(l.vtp_contentGroup, "index", "group"), g);
                    Fa(Kh(l.vtp_dimension, "index", "dimension"), h);
                    Fa(Kh(l.vtp_metric, "index", "metric"), k);
                    c.vtp_gaSettings = null;
                    l.vtp_fieldsToSet = void 0;
                    l.vtp_contentGroup = void 0;
                    l.vtp_dimension = void 0;
                    l.vtp_metric = void 0;
                    var m = Fa(l);
                    c = Fa(c, m)
                }
                Fa(Kh(c.vtp_fieldsToSet, "fieldName", "value"), e);
                Fa(Kh(c.vtp_contentGroup,
                    "index", "group"), g);
                Fa(Kh(c.vtp_dimension, "index", "dimension"), h);
                Fa(Kh(c.vtp_metric, "index", "metric"), k);
                var n = Id(c.vtp_functionName);
                if (ha(n)) {
                    var p = "",
                        t = "";
                    c.vtp_setTrackerName && "string" == typeof c.vtp_trackerName ? "" !== c.vtp_trackerName && (t = c.vtp_trackerName, p = t + ".") : (t = "gtm" + Cc(), p = t + ".");
                    var q = {
                            name: !0,
                            clientId: !0,
                            sampleRate: !0,
                            siteSpeedSampleRate: !0,
                            alwaysSendReferrer: !0,
                            allowAnchor: !0,
                            allowLinker: !0,
                            cookieName: !0,
                            cookieDomain: !0,
                            cookieExpires: !0,
                            cookiePath: !0,
                            cookieUpdate: !0,
                            legacyCookieDomain: !0,
                            legacyHistoryImport: !0,
                            storage: !0,
                            useAmpClientId: !0,
                            storeGac: !0
                        },
                        r = {
                            allowAnchor: !0,
                            allowLinker: !0,
                            alwaysSendReferrer: !0,
                            anonymizeIp: !0,
                            cookieUpdate: !0,
                            exFatal: !0,
                            forceSSL: !0,
                            javaEnabled: !0,
                            legacyHistoryImport: !0,
                            nonInteraction: !0,
                            useAmpClientId: !0,
                            useBeacon: !0,
                            storeGac: !0,
                            allowAdFeatures: !0
                        },
                        v = function(K) {
                            var P = [].slice.call(arguments, 0);
                            P[0] = p + P[0];
                            n.apply(window, P)
                        },
                        x = function(K, P) {
                            return void 0 === P ? P : K(P)
                        },
                        y = function(K, P) {
                            if (P)
                                for (var ba in P) P.hasOwnProperty(ba) && v("set", K + ba, P[ba])
                        },
                        w = function() {},
                        B = function(K, P, ba) {
                            var na = 0;
                            if (K)
                                for (var X in K)
                                    if (K.hasOwnProperty(X) && (ba && q[X] || !ba && void 0 === q[X])) {
                                        var Z = r[X] ? ra(K[X]) : K[X];
                                        "anonymizeIp" != X || Z || (Z = void 0);
                                        P[X] = Z;
                                        na++
                                    } return na
                        },
                        A = {
                            name: t
                        };
                    B(e, A, !0);
                    n("create", c.vtp_trackingId || d.trackingId, A);
                    v("set", "&gtm", Ig(!0));
                    c.vtp_enableRecaptcha && v("require", "recaptcha", "recaptcha.js");
                    (function(K, P) {
                        void 0 !== c[P] && v("set", K, c[P])
                    })("nonInteraction", "vtp_nonInteraction");
                    y("contentGroup", g);
                    y("dimension", h);
                    y("metric", k);
                    var C = {};
                    B(e, C, !1) && v("set", C);
                    var D;
                    c.vtp_enableLinkId &&
                        v("require", "linkid", "linkid.js");
                    v("set", "hitCallback", function() {
                        var K = e && e.hitCallback;
                        ha(K) && K();
                        c.vtp_gtmOnSuccess()
                    });
                    if ("TRACK_EVENT" == c.vtp_trackType) {
                        c.vtp_enableEcommerce && (v("require", "ec", "ec.js"), w());
                        var H = {
                            hitType: "event",
                            eventCategory: String(c.vtp_eventCategory || d.category),
                            eventAction: String(c.vtp_eventAction || d.action),
                            eventLabel: x(String, c.vtp_eventLabel || d.label),
                            eventValue: x(qa, c.vtp_eventValue || d.value)
                        };
                        B(D,
                            H, !1);
                        v("send", H);
                    } else if ("TRACK_SOCIAL" == c.vtp_trackType) {} else if ("TRACK_TRANSACTION" == c.vtp_trackType) {} else if ("TRACK_TIMING" ==
                        c.vtp_trackType) {} else if ("DECORATE_LINK" == c.vtp_trackType) {} else if ("DECORATE_FORM" == c.vtp_trackType) {} else if ("TRACK_DATA" == c.vtp_trackType) {} else {
                        c.vtp_enableEcommerce && (v("require", "ec", "ec.js"), w());
                        if (c.vtp_doubleClick || "DISPLAY_FEATURES" == c.vtp_advertisingFeaturesType) {
                            var T =
                                "_dc_gtm_" + String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
                            v("require", "displayfeatures", void 0, {
                                cookieName: T
                            })
                        }
                        if ("DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == c.vtp_advertisingFeaturesType) {
                            var U = "_dc_gtm_" + String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
                            v("require", "adfeatures", {
                                cookieName: U
                            })
                        }
                        D ? v("send", "pageview", D) : v("send", "pageview");
                    }
                    if (!a) {
                        var Y = c.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                        c.vtp_useInternalVersion && !c.vtp_useDebugVersion && (Y = "internal/" + Y);
                        a = !0;
                        G(E("https:", "http:", "//www.google-analytics.com/" + Y, e && e.forceSSL), function() {
                            var K = Gd();
                            K && K.loaded || c.vtp_gtmOnFailure();
                        }, c.vtp_gtmOnFailure)
                    }
                } else z(c.vtp_gtmOnFailure)
            };
            W.__ua = b;
            W.__ua.g = "ua";
            W.__ua.h = !0;
            W.__ua.b = 0
        }();


    W.a.cid = ["google"],
        function() {
            (function(a) {
                W.__cid = a;
                W.__cid.g = "cid";
                W.__cid.h = !0;
                W.__cid.b = 0
            })(function() {
                return rc.m
            })
        }();
    W.a.gclidw = ["google"],
        function() {
            var a = ["aw", "dc", "gf", "ha"];
            (function(b) {
                W.__gclidw = b;
                W.__gclidw.g = "gclidw";
                W.__gclidw.h = !0;
                W.__gclidw.b = 100
            })(function(b) {
                z(b.vtp_gtmOnSuccess);
                var c, d, e;
                b.vtp_enableCookieOverrides && (e = b.vtp_cookiePrefix, c = b.vtp_path, d = b.vtp_domain);
                var g = e,
                    h = c,
                    k = d;
                b.vtp_enableCrossDomainFeature && (b.vtp_enableCrossDomain && !1 === b.vtp_acceptIncoming || (b.vtp_enableCrossDomain || kg()) && th(a, g, h, k));
                sh(e, c, d);
                Eg(null, e, c, d);
                var l = e;
                if (b.vtp_enableCrossDomainFeature && b.vtp_enableCrossDomain &&
                    b.vtp_linkerDomains) {
                    var m = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
                    uh(a, m, b.vtp_urlPosition, !!b.vtp_formDecoration, l)
                }
            })
        }();
    W.a.gas = ["google"],
        function() {
            (function(a) {
                W.__gas = a;
                W.__gas.g = "gas";
                W.__gas.h = !0;
                W.__gas.b = 0
            })(function(a) {
                var b = Fa(a),
                    c = b;
                c[Zb.ra] = null;
                c[Zb.ye] = null;
                var d = b = c;
                d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
                var e = d.vtp_cookieDomain;
                void 0 !== e && (d.vtp_fieldsToSet.push({
                    fieldName: "cookieDomain",
                    value: e
                }), delete d.vtp_cookieDomain);
                return b
            })
        }();

    W.a.hl = ["google"],
        function() {
            function a(g) {
                return g.target && g.target.location && g.target.location.href ? g.target.location.href : lh()
            }

            function b(g, h) {
                Oa(g, "hashchange", function(k) {
                    var l = a(k);
                    h({
                        source: "hashchange",
                        state: null,
                        url: nh(l),
                        B: mh(l)
                    })
                })
            }

            function c(g, h) {
                Oa(g, "popstate", function(k) {
                    var l = a(k);
                    h({
                        source: "popstate",
                        state: k.state,
                        url: nh(l),
                        B: mh(l)
                    })
                })
            }

            function d(g, h, k) {
                var l = h.history,
                    m = l[g];
                if (ha(m)) try {
                    l[g] = function(n, p, t) {
                        m.apply(l, [].slice.call(arguments, 0));
                        k({
                            source: g,
                            state: n,
                            url: nh(lh()),
                            B: mh(lh())
                        })
                    }
                } catch (n) {}
            }

            function e() {
                var g = {
                    source: null,
                    state: L("history").state || null,
                    url: nh(lh()),
                    B: mh(lh())
                };
                return function(h) {
                    var k = g,
                        l = {};
                    l[k.source] = !0;
                    l[h.source] = !0;
                    if (!l.popstate || !l.hashchange || k.B != h.B) {
                        var m = {
                            event: "gtm.historyChange",
                            "gtm.historyChangeSource": h.source,
                            "gtm.oldUrlFragment": g.B,
                            "gtm.newUrlFragment": h.B,
                            "gtm.oldHistoryState": g.state,
                            "gtm.newHistoryState": h.state
                        };
                        m["gtm.oldUrl"] = g.url, m["gtm.newUrl"] = h.url;
                        g = h;
                        ph(m)
                    }
                }
            }(function(g) {
                W.__hl = g;
                W.__hl.g = "hl";
                W.__hl.h = !0;
                W.__hl.b = 0
            })(function(g) {
                var h = L("self");
                if (!wh("hl")) {
                    var k = e();
                    b(h, k);
                    c(h, k);
                    d("pushState", h, k);
                    d("replaceState", h, k);
                    xh("hl")
                }
                z(g.vtp_gtmOnSuccess)
            })
        }();
    W.a.awct = ["google"],
        function() {
            var a = !1,
                b = [],
                c = function(k) {
                    var l = L("google_trackConversion"),
                        m = k.gtm_onFailure;
                    "function" == typeof l ? l(k) || m() : m()
                },
                d = function() {
                    for (; 0 < b.length;) c(b.shift())
                },
                e = function() {
                    return function() {
                        d();
                        a = !1
                    }
                },
                g = function() {
                    return function() {
                        d();
                        b = {
                            push: c
                        };
                    }
                },
                h = function(k) {
                    Bd();
                    var l = {
                            google_basket_transaction_type: "purchase",
                            google_conversion_domain: "",
                            google_conversion_id: k.vtp_conversionId,
                            google_conversion_label: k.vtp_conversionLabel,
                            google_conversion_value: k.vtp_conversionValue || 0,
                            google_remarketing_only: !1,
                            onload_callback: k.vtp_gtmOnSuccess,
                            gtm_onFailure: k.vtp_gtmOnFailure,
                            google_gtm: Ig()
                        },
                        m = function(p) {
                            return function(t, q, r) {
                                var v = "DATA_LAYER" == p ? oh(r) : k[q];
                                v && (l[t] = v)
                            }
                        },
                        n = m("JSON");
                    n("google_conversion_currency", "vtp_currencyCode");
                    n("google_conversion_order_id", "vtp_orderId");
                    k.vtp_enableProductReporting && (n = m(k.vtp_productReportingDataSource), n("google_conversion_merchant_id", "vtp_awMerchantId", "aw_merchant_id"), n("google_basket_feed_country",
                        "vtp_awFeedCountry", "aw_feed_country"), n("google_basket_feed_language", "vtp_awFeedLanguage", "aw_feed_language"), n("google_basket_discount", "vtp_discount", "discount"), n("google_conversion_items", "vtp_items", "items"), l.google_conversion_items = l.google_conversion_items.map(function(p) {
                        return {
                            value: p.price,
                            quantity: p.quantity,
                            item_id: p.id
                        }
                    }));
                    !k.hasOwnProperty("vtp_enableConversionLinker") || k.vtp_enableConversionLinker ? (k.vtp_conversionCookiePrefix && (l.google_gcl_cookie_prefix = k.vtp_conversionCookiePrefix),
                        l.google_read_gcl_cookie_opt_out = !1) : l.google_read_gcl_cookie_opt_out = !0;
                    b.push(l);
                    a || (a = !0, G("//www.googleadservices.com/pagead/conversion_async.js", g(), e("//www.googleadservices.com/pagead/conversion_async.js")))
                };
            W.__awct = h;
            W.__awct.g = "awct";
            W.__awct.h = !0;
            W.__awct.b = 0
        }();

    W.a.remm = ["google"],
        function() {
            (function(a) {
                W.__remm = a;
                W.__remm.g = "remm";
                W.__remm.h = !0;
                W.__remm.b = 0
            })(function(a) {
                for (var b = a.vtp_input, c = a.vtp_map || [], d = a.vtp_fullMatch, e = a.vtp_ignoreCase ? "gi" : "g", g = 0; g < c.length; g++) {
                    var h = c[g].key || "";
                    d && (h = "^" + h + "$");
                    var k = new RegExp(h, e);
                    if (k.test(b)) {
                        var l = c[g].value;
                        a.vtp_replaceAfterMatch && (l = String(b).replace(k, l));
                        return l
                    }
                }
                return a.vtp_defaultValue
            })
        }();
    W.a.smm = ["google"],
        function() {
            (function(a) {
                W.__smm = a;
                W.__smm.g = "smm";
                W.__smm.h = !0;
                W.__smm.b = 0
            })(function(a) {
                var b = a.vtp_input,
                    c = Kh(a.vtp_map, "key", "value") || {};
                return c.hasOwnProperty(b) ? c[b] : a.vtp_defaultValue
            })
        }();


    W.a.hid = ["google"],
        function() {
            (function(a) {
                W.__hid = a;
                W.__hid.g = "hid";
                W.__hid.h = !0;
                W.__hid.b = 0
            })(function() {
                return tf.ob
            })
        }();
    W.a.twitter_website_tag = ["nonGoogleScripts"],
        function() {
            (function(a) {
                W.__twitter_website_tag = a;
                W.__twitter_website_tag.g = "twitter_website_tag";
                W.__twitter_website_tag.h = !0;
                W.__twitter_website_tag.b = 0
            })(function(a) {
                (function(c, d) {
                    c.twq || (d = c.twq = function() {
                        d.exe ? d.exe.apply(d, arguments) : d.queue.push(arguments)
                    }, d.version = "1", d.queue = [], G("//static.ads-twitter.com/uwt.js"))
                })(window, void 0);
                window.twq("init", String(a.vtp_twitter_pixel_id));
                var b = Kh(a.vtp_event_parameters, "param_table_key_column", "param_table_value_column");
                b && void 0 !== b.content_ids && (b.content_ids = JSON.parse(b.content_ids.replace(/'/g, '"')));
                window.twq("track", String(a.vtp_event_type), b);
                z(a.vtp_gtmOnSuccess)
            })
        }();

    W.a.html = ["customScripts"],
        function() {
            function a(d, e, g, h) {
                return function() {
                    try {
                        if (0 < e.length) {
                            var k = e.shift(),
                                l = a(d, e, g, h);
                            if ("SCRIPT" == String(k.nodeName).toUpperCase() && "text/gtmscript" == k.type) {
                                var m = u.createElement("script");
                                m.async = !1;
                                m.type = "text/javascript";
                                m.id = k.id;
                                m.text = k.text || k.textContent || k.innerHTML || "";
                                k.charset && (m.charset = k.charset);
                                var n = k.getAttribute("data-gtmsrc");
                                n && (m.src = n, Ja(m, l));
                                d.insertBefore(m, null);
                                n || l()
                            } else if (k.innerHTML && 0 <= k.innerHTML.toLowerCase().indexOf("<script")) {
                                for (var p = []; k.firstChild;) p.push(k.removeChild(k.firstChild));
                                d.insertBefore(k, null);
                                a(k, p, l, h)()
                            } else d.insertBefore(k, null), l()
                        } else g()
                    } catch (t) {
                        z(h)
                    }
                }
            }
            var c = function(d) {
                if (u.body) {
                    var e =
                        d.vtp_gtmOnFailure,
                        g = Ah(d.vtp_html, d.vtp_gtmOnSuccess, e),
                        h = g.nc,
                        k = g.I;
                    if (d.vtp_useIframe) {} else d.vtp_supportDocumentWrite ? b(h, k, e) : a(u.body, Ta(h), k, e)()
                } else jh(function() {
                        c(d)
                    },
                    200)
            };
            W.__html = c;
            W.__html.g = "html";
            W.__html.h = !0;
            W.__html.b = 0
        }();


    W.a.img = ["customPixels"],
        function() {
            (function(a) {
                W.__img = a;
                W.__img.g = "img";
                W.__img.h = !0;
                W.__img.b = 0
            })(function(a) {
                var b = Ta('<a href="' + a.vtp_url + '"></a>')[0].href,
                    c = a.vtp_cacheBusterQueryParam;
                if (a.vtp_useCacheBuster) {
                    c || (c = "gtmcb");
                    var d = b.charAt(b.length - 1),
                        e = 0 <= b.indexOf("?") ? "?" == d || "&" == d ? "" : "&" : "?";
                    b += e + c + "=" + a.vtp_randomNumber
                }
                Ih(b, a.vtp_gtmOnSuccess, a.vtp_gtmOnFailure)
            })
        }();


    W.a.csm = ["nonGoogleScripts"],
        function() {
            (function(a) {
                W.__csm = a;
                W.__csm.g = "csm";
                W.__csm.h = !0;
                W.__csm.b = 0
            })(function(a) {
                var b = L("document");
                Ih(function(d) {
                    if (2048 < d.length) {
                        var e = d.substring(0, 2040).lastIndexOf("&");
                        d = d.substring(0, e) + "&ns_cut=" + M(d.substring(e + 1));
                        d = d.substring(0, 2048)
                    }
                    return d
                }(function(d, e) {
                    var g = kh(),
                        h = (e || "").split("&");
                    e = "";
                    for (var k = 0; k < h.length; k++)
                        if (h[k]) {
                            var l = h[k].match(/([^=]*)=?(.*)/);
                            e += "&" + M(l[1]) + "=" + M(l[2])
                        } return E("https://sb", "http://b", ".scorecardresearch.com/b?c1=2&c2=" +
                        M(d) + "&ns__t=" + g.valueOf() + "&ns_c=" + (b.characterSet || b.defaultCharset || "") + "&c8=" + M(b.title || "") + e + "&c7=" + M(b.URL) + "&c9=" + M(b.referrer))
                }(a.vtp_clientId, function() {
                    var d = "",
                        e = b.cookie;
                    if (0 <= e.indexOf("comScore"))
                        for (var g = e.split(";"), h = 0; h < g.length; h++) {
                            var k = g[h].indexOf("comScore");
                            0 <= k && (d = unescape(g[h].substring(k + 8)))
                        }
                    return d
                }())));
                var c = function() {
                    var d = E("https://sb", "http://b", ".scorecardresearch.com/c2/" + M(a.vtp_clientId) + "/cs.js");
                    G(d, a.vtp_gtmOnSuccess, a.vtp_gtmOnFailure)
                };
                "complete" ===
                b.readyState ? c() : Oa(L("self"), "load", c)
            })
        }();
    var aj = {};
    aj.macro = function(a) {
        if (tf.$b.hasOwnProperty(a)) return tf.$b[a]
    }, aj.onHtmlSuccess = tf.td(!0), aj.onHtmlFailure = tf.td(!1);
    aj.dataLayer = gd;
    aj.callback = function(a) {
        Ac.hasOwnProperty(a) && ha(Ac[a]) && Ac[a]();
        delete Ac[a]
    };
    aj.Ve = function() {
        sc[rc.m] = aj;
        Bc = W.a;
        Rb = Rb || tf;
        Sb = sd
    };
    aj.Jf = function() {
        sc = f.google_tag_manager = f.google_tag_manager || {};
        if (sc[rc.m]) {
            var a = sc.zones;
            a && a.unregisterChild(rc.m)
        } else {
            for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++) Kb.push(c[d]);
            for (var e = b.tags || [], g = 0; g < e.length; g++) Nb.push(e[g]);
            for (var h = b.predicates || [], k = 0; k < h.length; k++) Mb.push(h[k]);
            for (var l = b.rules || [], m = 0; m < l.length; m++) {
                for (var n = l[m], p = {}, t = 0; t <
                    n.length; t++) p[n[t][0]] = Array.prototype.slice.call(n[t], 1);
                Lb.push(p)
            }
            Pb = W;
            Qb = Dh;
            aj.Ve();
            Re();
            vd = !1;
            wd = 0;
            if ("interactive" == u.readyState && !u.createEventObject || "complete" == u.readyState) yd();
            else {
                Oa(u, "DOMContentLoaded", yd);
                Oa(u, "readystatechange", yd);
                if (u.createEventObject && u.documentElement.doScroll) {
                    var q = !0;
                    try {
                        q = !f.frameElement
                    } catch (y) {}
                    q && zd()
                }
                Oa(f, "load", yd)
            }
            Fe = !1;
            "complete" === u.readyState ? He() : Oa(f, "load", He);
            a: {
                if (!Xc) break a;f.setInterval(Yc, 864E5);
            }
            xc = (new Date).getTime();
        }
    };
    (0, aj.Jf)();

})()