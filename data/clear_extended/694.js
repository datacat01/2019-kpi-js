/*
 alert.www.js
 For adding emergency announcements to www.epa.gov
 Note: do not edit this file on an NCC server (drupal1/drupal2);
 All edits will be lost at next rsync from NCC origin servers, once NCC comes back online.
 This file is for emergency alerts from Akamai only.

[process]
	a. download and edit file
		/192423/sites/all/modules/custom/epa_core/js/alert.js
	b. Edit the var EPA_alert_text in place below with a relevant message
	c. Remove the comment markers from around the entire script below
    (the beginning slash-star and the ending star-slash)
	d. upload edited file back to Akamai
	e. Fast purge https://www.epa.gov/sites/all/modules/custom/epa_core/js/alert.js
		(NOTE: choose DELETE, not invalidate)
	f. Also use inspector to find what ?random-string is in use and purge it too
		e.g. ?8ang45d
	g. After event is over, purge alert.js and alert.js?random-string
	h. Delete file from NetStorarge container 192423 (same location as step a)
	i. Make sure file on d1/2/3 has commented out code
[/process]
*/

/*
(function ($) {

if (document.location.hostname !== www.epa.gov) {
  Drupal.behaviors.alert = {
    attach: function(context) {
      var EPA_alert_text = "From 9pm EDT on Friday, 01 June 2018 to 6am EDT on Monday, 04 June 2018, EPA's website will operate in diminished capacity. Some services, such as search, will be unavailable.";
      var EPA_alert_container = '<div id="block-pane-epa-admin-public-alert-message" class="block block-pane block-pane-epa-admin-public-alert-message contextual-links-region block-alert"><div class="sitewide-alert sitewide-alert--warning"><div class="sitewide-alert__content"><p>' + EPA_alert_text + '</p></div></div></div>';
      $('header', context).before(EPA_alert_container);
    }
  }
}

})(jQuery);*/