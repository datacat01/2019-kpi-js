document.addEventListener('DOMContentLoaded', function() {
    function launchInterstitial() {
        if (window.angular.element(document).injector().get('featureToggles').isOn('cashBack')) {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                console.log('Mobile interstitial loaded');
                (function(document, tag) {
                    var scriptTag = document.createElement(tag),
                        firstScriptTag = document.getElementsByTagName(tag)[0];
                    scriptTag.src = 'https://content.mqcdn.com/yogi/yogi/3rd_party/empyr/empyr-interstitial.mobile.js';

                    firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);
                }(document, 'script'));
            } else {
                console.log('Desktop interstitial loaded');
                (function(document, tag) {
                    var scriptTag = document.createElement(tag),
                        firstScriptTag = document.getElementsByTagName(tag)[0];
                    scriptTag.src = 'https://content.mqcdn.com/yogi/yogi/3rd_party/empyr/empyr-interstitial.desktop.js';

                    firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);
                }(document, 'script'));
            }
        }
    }
    // Wait for angular to bootstrap.
    var interval = setInterval(function() {
        if (window.angular &&
            window.angular.element &&
            window.angular.element(document) &&
            window.angular.element(document).injector &&
            window.angular.element(document).injector() &&
            window.angular.element(document).injector().get('featureToggles') &&
            window.angular.element(document).injector().get('featureToggles').isOn) {

            clearInterval(interval);
            launchInterstitial();
        }
    }, 500);
});