window.addEventListener('load', function() {
    var gdpr_allow_event = new Event('gdprAllow');
    var gdpr_deny_event = new Event('gdprDeny');

    var host = window.location.host.split('.');
    var domain = host[host.length - 2] + '.' + host[host.length - 1];

    window.cookieconsent.initialise({
        cookie: {
            name: 'gdpr_cookie_consent',
            domain: domain
        },
        palette: {
            popup: {
                background: '#263A47',
                text: '#FFF'
            },
            button: {
                background: '#ff6c2c',
                text: '#FFF',
                border: 'transparent'
            }
        },
        type: 'opt-in',
        content: {
            message: 'This site uses cookies for analytics and personalized content. For more information visit our ',
            link: 'Privacy Policy',
            href: 'https://cpanel.com/privacy-policy.html',
            policy: 'Manage Cookies'
        },
        onInitialise: function(status) {
            document.dispatchEvent(this.hasConsented() ? gdpr_allow_event : gdpr_deny_event);
        },
        onStatusChange: function(status) {
            document.dispatchEvent(this.hasConsented() ? gdpr_allow_event : gdpr_deny_event);
        }
    })
});