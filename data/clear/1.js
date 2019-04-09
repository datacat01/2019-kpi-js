var $E = function(selector, filter) {return ($(filter) || document).getElement(selector);};
var $ES = function(selector, filter) {return ($(filter) || document).getElements(selector);};

var turtl = {
	events: new Composer.Event(),

	// our salty core communication lib(eral tears).
	core: null,

	// our "remember me" lib. THAT'S IT, STAN. REMEMBERRR
	remember_me: null,

	// holds the DOM object that turtl does all of its operations within
	main_container_selector: '#main',

	// global key handler for attaching keyboard events to the app
	keyboard: null,

	// a modal helper
	overlay: null,

	initialized: false,
	loaded: false,

	// holds the title breadcrumbs
	titles: [],

	controllers: {
		pages: null,
		header: null,
		nav: null,
		sidebar: null,
		loading: null
	},

	// a value we update to indicate the API connection state
	connected: true,

	// some general (CHECKMATE, )libs we use
	router: null,
	param_router: new ParamRouter(),
	api: null,
	back: null,
	settings: new PublicSetting(),

	// our last routes
	last_url: null,
	last_routes: [],

	// whether or not our locale data is loaded
	localized: false,

	// -------------------------------------------------------------------------
	// Data section
	// -------------------------------------------------------------------------
	user: null,

	// holds space/board/note data for the user (ie, the user's profile)
	profile: null,

	// holds the search model
	search: null,
	// -------------------------------------------------------------------------

	init: function()
	{
		if(this.initialized) return false;

		turtl.user = new User();
		turtl.search = new Search();
		turtl.controllers.pages = new PagesController();
		turtl.controllers.header = new HeaderController();
		turtl.controllers.loading = new LoadingController();
		turtl.controllers.pages.bind('prerelease', function() {
			// always scroll to the top of the window on page load
			$(window).scrollTo(0, 0);
			turtl.events.trigger('header:set-actions', false);
		});

		turtl.events.bind('ui-error', function(msg, err) {
			barfr.barf(msg+': '+derr(err).message);
		});

		var core_ready_promise = new Promise(function(resolve) {
			turtl.events.bind_once('core:ready', resolve, 'turtl:main:core-ready');
		});

		turtl.core = new CoreComm(config.core.adapter, config.core.options);
		turtl.remember_me = new RememberMe(config.remember_me.adapter, config.remember_me.options);

		var core_connected_promise = new Promise(function(resolve, reject) {
			turtl.core.bind('connected', function(yesno) {
				if(!yesno) return;
				turtl.core.unbind('connected', 'turtl:init:core-connected');
				resolve();
			}, 'turtl:init:core-connected');
		}.bind(this));

		turtl.events.bind('all', function() {
			var ev = arguments[0];
			log.debug('turtl.events -- '+ev, Array.prototype.slice.call(arguments, 1));
		});

		turtl.core.bind('error', function(err) {
			turtl.events.trigger('core-error', err);
		});

		turtl.core.bind('event', function(ev, data) {
			turtl.dispatch_core_event(ev, data);
		});

		turtl.keyboard = new TurtlKeyboard();
		turtl.keyboard.attach();

		turtl.overlay = new TurtlOverlay();

		config.routes = turtl.param_router.parse_routes(config.routes);

		var initial_route = window.location.pathname;
		turtl.setup_user({initial_route: initial_route});

		var connect_barf_id = null;
		turtl.events.bind('sync:connected', function(connected) {
			if(connected === turtl.connected) return;
			turtl.connected = connected;
			if(connected) {
				if(connect_barf_id) barfr.close_barf(connect_barf_id);
				connect_barf_id = barfr.barf(i18next.t('Connected to the Turtl service! Disengaging offline mode. Syncing your profile.'));
			} else {
				if(connect_barf_id) barfr.close_barf(connect_barf_id);
				connect_barf_id = barfr.barf(i18next.t('Disconnected from the Turtl service. Engaging offline mode. Your changes will be saved and synced once back online!'));
			}
		});

		turtl.events.bind('app:localized', function() {
			turtl.localized = true;
		});
		turtl.controllers.pages.bind('prerelease', function() {
			var space_id = turtl.param_router.get().space_id;
			if(!space_id) return;
			if(!turtl.profile) return;
			turtl.profile.set_current_space(space_id);
		});

		return Promise.all([core_ready_promise, core_connected_promise])
			.bind(this)
			.then(function() {
				var current_settings = {};
				try { current_settings = JSON.parse(localStorage['login_settings']); } catch(_) {}
				var endpoint = current_settings.endpoint || localStorage.config_api_url;
				if(!endpoint) return;
				return App.prototype.set_api_config({endpoint: endpoint})
					.catch(function(err) {
						barfr.barf(i18next.t('There was a problem setting the API endpoint. Try restarting the app.'));
						log.error('core: set endpoint: ', derr(err));
						throw err;
					});
			})
			.then(function() {
				// load the sidebar after we set up the user/profile object
				turtl.controllers.sidebar = new SidebarController();

				this.initialized = true;
				turtl.events.trigger('loaded');

				// let RememberMe manage the login from here
				return turtl.remember_me.login();
			})
			.finally(function() {
				turtl.route(initial_route);
			});
},
