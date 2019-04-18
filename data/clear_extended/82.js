dataLayer = [];



// custom event and page tracking helper functions
var customGATracking = {

    //AdWords Remarketing
    adRemarket: function(prodid, pagetype, totalvalue) {
        if (!follow) var follow = false;
        dataLayer.push({
            'event': 'fireRemarketingTag',
            'google_tag_params': {
                'dynx_itemid': prodid,
                'dynx_pagetype': pagetype,
                'dynx_totalvalue': totalvalue
            }
        });
        if (follow !== false) {
            window.location = follow;
            return false;
        }
    },
    //AdWords Conversion
    adConversion: function(prodid, pagetype, totalvalue) {
        if (!follow) var follow = false;
        dataLayer.push({
            'event': 'fireConversionTag',
            'lead_itemid': prodid,
            'lead_pagetype': pagetype,
            'lead_totalvalue': totalvalue
        });
        if (follow !== false) {
            window.location = follow;
            return false;
        }
    },

    // track a specific event then redirect to new location if needed
    eventTrack: function(cat, act, opt_label, opt_value, follow) {
        if (!follow) var follow = false;

        dataLayer.push({
            'event': 'GAEvent',
            'uaCat': cat,
            'uaAct': act,
            'uaOptLabel': opt_label,
            'uaOptValue': opt_value
        });

        if (follow !== false) {
            window.location = follow;
            return false;
        }
    },

    // track a custom page view
    pageTrack: function(uri, pageTitle) {
        dataLayer.push({
            'event': 'VirtualPageview',
            'vpURI': uri,
            'vpTitle': pageTitle
        });

    }
};