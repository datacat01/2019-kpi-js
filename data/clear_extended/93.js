(function(assets, attributes, doc) {
    if (!assets || !attributes) {
        return;
    }

    function loadScript(src, attribs) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;

        Object.keys(attribs).forEach(function(currentValue) {
            script.setAttribute(currentValue, attribs[currentValue]);
        });

        doc.head.appendChild(script);
    }

    Object.keys(assets).forEach(function(currentValue) {
        if (window.ckies) {
            if (!window.ckies.useMarketing() && currentValue.indexOf('gaTracker') !== -1) {
                return;
            }
        }
        loadScript(assets[currentValue], attributes[currentValue]);
    });
})({
    "jimdom.js": "https:\/\/assets2.jimstatic.com\/jimdom.js.a90ea1e7f1dd0a27a50e.js",
    "gaTracker.js": "https:\/\/assets1.jimstatic.com\/gaTracker.js.d223721ef18e74f30c58.js"
}, {
    "jimdom.js": {
        "id": "jimdom",
        "async": "true",
        "defer": "defer",
        "data-options": "{\"logoutput\":false,\"jimdoenv\":\"prod\"}"
    },
    "gaTracker.js": {
        "async": "true",
        "defer": "defer"
    }
}, document);