var _bcvma = _bcvma || [];
_bcvma.push(["setAccountID", "2882483596352441248"]);
_bcvma.push(["setParameter", "InvitationDefID", "815288250086333991"]);
_bcvma.push(["pageViewed"]);

var bcLoad = function() {
    if (window.bcLoaded) return;
    window.bcLoaded = true;
    var vms = document.createElement("script");
    vms.type = "text/javascript";
    vms.async = true;
    vms.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + "vmss.boldchat.com/aid/2882483596352441248/bc.vms4/vms.js";
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(vms, s);
};

if (window.pageViewer && pageViewer.load) pageViewer.load();
else if (window.addEventListener) window.addEventListener('load', bcLoad, false);
else window.attachEvent('onload', bcLoad);