/*
 * custom.js
 *
 * Drupal.settings used
 * --------------------

 *
 */
(function($) {

    Drupal.behaviors.ftc_gov = {

        attach: function() {

            //var mobileMenuIds = Drupal.settings.custom.mobile_menu_ids;
            // only set the value of page if Drupal.setting.page.na
            //var pagetitle = Drupal.settings.page.title;
            //var selected = Drupal.settings.page.selected;
            //console.log(page);
            //console.log(selected);

            //var path = "test!";
            //console.log(page);
            // do this only if page === ftc-cases else do nothing 

            var myElement = $("body");
            var classes = myElement.attr('class').split(/\s+/);
            var match = "";
            for (var i = 0; i < classes.length; i++) {
                var className = classes[i];
                //console.log(className)
                if (className === 'ftc-cases') {
                    // console.log(match);
                    match = className;
                    //console.log()
                }
            }


            if (match === 'ftc-cases') {
                //alert("js loaded!.");
                // we simply move our select list ubove release date text filed.
                $("#caseblock").insertBefore("body.ftc-cases #edit-field-release-date-value-wrapper");
                //$("#caseblock")
                //.prependTo("body.ftc-cases #edit-field-release-date-value-wrapper");

                // Hide and show div's based on options selected{
                //var optionValue = $("#caseblock").val();
                //alert(selected);

                // $('#caseblock').live('change', function(e) {
                //	 alert(e.target.options[e.target.selectedIndex].text);
                //	});

                // Just making sure if the optionValue === - Selected - then only hide both else just show what was selected previously// 


                $(document).ready(function() {
                    var optionValue = $("body.ftc-cases #caseblock option:selected").text();
                    if (optionValue == "- Select -") {
                        $('body.ftc-cases #edit-date-filter-wrapper, body.ftc-cases 			#edit-field-release-date-value-wrapper').hide();
                    } else if (optionValue == "Released Date") {
                        $("body.ftc-cases 				#edit-date-filter-wrapper").hide('fast');
                    } else {
                        $("body.ftc-cases #edit-field-release-date-value-wrapper").hide();
                    }
                });

                optionValue = "";
                //console.log (optionValue);

                $('#caseblock').change(function() {


                    var optionValue = $("body.ftc-cases #caseblock option:selected").text();

                    switch (optionValue) {
                        case "Released Date":
                            $("body.ftc-cases #edit-field-release-date-value-wrapper").show('fast');
                            $("body.ftc-cases #edit-date-filter-wrapper").hide('fast');
                            break;

                        case "Updated Date":
                            $("body.ftc-cases #edit-date-filter-wrapper").show('fast');
                            $("body.ftc-cases #edit-field-release-date-value-wrapper").hide('fast');
                            break;

                        case "- Select -":
                            $('body.ftc-cases #edit-date-filter-wrapper, body.ftc-cases 					#edit-field-release-date-value-wrapper').hide('fast');
                            break;
                    }



                });


            } //end if page === "ftc-cases"

        }

    };

}(jQuery));