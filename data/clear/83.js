var _elqQ = _elqQ || [];
_elqQ.push(['elqSetSiteId', '1731649222']);
_elqQ.push(['elqTrackPageView']);

(function() {
    function async_load() {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://static.buydomains.com//browser/js/vendor/elqCfg.min.js?version=201904031';
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
    }

    if (window.addEventListener)
        window.addEventListener('DOMContentLoaded', async_load, false);
    else if (window.attachEvent)
        window.attachEvent('onload', async_load);
})();

var timerId = null,
    timeout = 5;

function WaitUntilCustomerGUIDIsRetrieved() {
    if (!!(timerId)) {
        if (timeout == 0) {
            return;
        }
        if (typeof this.GetElqCustomerGUID === 'function') {
            document.getElementById("baseGUID").value = GetElqCustomerGUID();
            return;
        }
        timeout -= 1;
    }
    timerId = setTimeout("WaitUntilCustomerGUIDIsRetrieved()", 500);
    return;
}
window.onload = WaitUntilCustomerGUIDIsRetrieved;
_elqQ.push(['elqGetCustomerGUID']);