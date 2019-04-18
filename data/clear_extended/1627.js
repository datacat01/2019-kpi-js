require(['core/first'], function() {
    require(['theme_bootstrapbase/bootstrap', 'core/log'], function(bootstrap, log) {
        log.debug('Bootstrap initialised')
    })
});

function customise_dock_for_theme(dock) {
    dock.on('dock:panelgenerated', function() {
        dock.get('panel').once('dockpanel:beforeshow', function() {
            Y.all('.dockeditempanel_content').addClass('block')
        });
        dock.get('panel').on('dockpanel:beforeshow', function() {
            var content = Y.all('.dockeditempanel_content');
            content.setStyle('maxWidth', content.get('winWidth') - dock.get('dockNode').get('offsetWidth') - 10)
        })
    });
    dock.on('dock:initialised', function() {
        var navbar = Y.one('header.navbar'),
            navbarbtn = Y.one('header.navbar .btn-navbar'),
            navcollapse = Y.one('header.navbar .nav-collapse'),
            container = Y.one('#dock .dockeditem_container'),
            margintop = null,
            newmargintop = null,
            diff = null;
        if (navbar && navbarbtn && container) {
            margintop = parseInt(container.getStyle('marginTop').replace(/px$/, ''), 10);
            diff = margintop - parseInt(navbar.get('offsetHeight'), 10);
            navbarbtn.ancestor().on('click', function() {
                navcollapse.toggleClass('active');
                if (!this.hasClass('active')) {
                    newmargintop = (parseInt(navbar.get('offsetHeight'), 10) + diff);
                    container.setStyle('marginTop', newmargintop + 'px')
                } else {
                    container.setStyle('marginTop', margintop + 'px')
                }
                navcollapse.toggleClass('active');
                dock.fire('dock:itemschanged')
            }, navbarbtn)
        }
    })
}