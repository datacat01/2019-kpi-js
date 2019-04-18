require.config({
    baseUrl: '//' + Drupal.settings.ucl.cdnPath,
    paths: {
        //libaries
        jquery: '//' + Drupal.settings.ucl.cdnPath + '/indigo/js/lib/jquery-2.1.1.min',
        jqueryUi: '//' + Drupal.settings.ucl.cdnPath + '/skins/indigo-theme-js/lib/jquery-ui-1.8.18.custom.min',
        underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min',
        backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
        fastclick: 'fastclick',
        googleAnalyticsLib: '//' + Drupal.settings.ucl.cdnPath + '/indigo/js/lib/googleAnalytics.min',
        owl: '//' + Drupal.settings.ucl.cdnPath + '/indigo/js/lib/owl.carousel.min',
        jwplayer: 'jwplayer',
        handleBars: '//' + Drupal.settings.ucl.cdnPath + '/indigo/js/lib/handlebars.min',
        typeAheadBundle: 'typeahead.bundle.min',
        handlebars: '//' + Drupal.settings.ucl.cdnPath + '/indigo/js/lib/handlebars.min',
        typeAheadBundle: '//' + Drupal.settings.ucl.cdnPath + '/indigo/js/lib/typeahead.bundle.min',
        fontAwesome: '//use.fontawesome.com/releases/v5.0.2/js/all',
        easyAuto: '//cdnjs.cloudflare.com/ajax/libs/easy-autocomplete/1.3.5/jquery.easy-autocomplete',
        ugSearch: Drupal.settings.basePath + 'sites/all/modules/custom/ucl_homepage/templates/js/lib/ug-search',
        searchWithAutoComplete: Drupal.settings.basePath + 'sites/all/modules/custom/ucl_homepage/templates/js/lib/searchWithAutoComplete',
        homeCourseFinder: Drupal.settings.basePath + 'sites/all/modules/custom/ucl_homepage/templates/js/lib/home-course-finder',
        general: '//' + Drupal.settings.ucl.cdnPath + '/indigo/js/app/general',
        allsite: Drupal.settings.basePath + 'sites/all/modules/custom/ucl_homepage/templates/js/lib/all-site'
    },
    shim: {
        ugSearch: {
            deps: ['jquery', 'easyAuto'],
            exports: 'ugSearch'
        },
        easyAuto: {
            deps: ['jquery']
        }
    }
});