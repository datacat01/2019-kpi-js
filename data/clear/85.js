var startGoogleSigninApp = function() {
    gapi.load('auth2', function() {
        auth2 = gapi.auth2.init({
            client_id: '26200011094-f6n31v26gh6o5hsjh2960tei8tdeiq28.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
        });
        attachSignin(document.getElementById('googleButton'));
    });
};