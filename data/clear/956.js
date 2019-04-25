(function() {
    var INJECT_PAYLOAD, REQUEST_SUBMITTED, getSession, injectCss, injectFbPixel, installScrollListener, installStickyHeader, putSession, randomString, resource, submitPixel, __FH_NONSPONSOR_PAGE__, __FH_SPONSOR_PAGE__, __FH__,
        __bind = function(fn, me) {
            return function() {
                return fn.apply(me, arguments);
            };
        };

    INJECT_PAYLOAD = {
        "country": "UA",
        "geo": {
            "country": "UA",
            "region": "30",
            "city": "Kyiv",
            "postalCode": "02152",
            "source": "ip",
            "regionName": "Ky\u00efvs'ka mis'ka rada",
            "approximate_timezone": "America/New_York"
        }
    };

    REQUEST_SUBMITTED = "<div class=\"__fh__request-submitted\">\n    <span class=\"checkmark\">&#10004;</span>\n    Request Submitted!\n</div>";

    __FH__ = (function() {
        function __FH__(options) {
            var franchise, isActive, pageType, trackingData;
            this.options = options;
            this.trackView = __bind(this.trackView, this);
            pageType = this.options.page_type;
            trackingData = this.options.tracking_data;
            if (pageType === 'franchise' || pageType === 'article') {
                franchise = INJECT_PAYLOAD.franchise || {};
                this.trackView(franchise, pageType, trackingData);
                console.log(franchise.status);
                isActive = franchise.status === 'sponsor' || franchise.status === 'capped';
                if (isActive) {
                    this.page = new __FH_SPONSOR_PAGE__({
                        franchise: franchise,
                        pageType: pageType,
                        trackingData: trackingData
                    });
                } else {
                    this.page = new __FH_NONSPONSOR_PAGE__({
                        franchise: franchise,
                        pageType: pageType,
                        trackingData: trackingData
                    });
                }
            }
        }

        __FH__.prototype.trackView = function(franchise, pageType, trackingData) {
            submitPixel('elg/track-franchise-view', {
                sessionId: __FHSESSION__,
                pageType: pageType,
                franchiseId: franchise.id,
                franchiseName: franchise.name,
                sponsor: franchise.status === 'sponsor',
                mobile: $(window).width() < 970,
                tracking: trackingData
            });
            return injectFbPixel(franchise);
        };

        return __FH__;

    })();

    __FH_SPONSOR_PAGE__ = (function() {
        function __FH_SPONSOR_PAGE__(options) {
            this.options = options;
            this.submitLead = __bind(this.submitLead, this);
            this.renderSubmitted = __bind(this.renderSubmitted, this);
            this.prefill = __bind(this.prefill, this);
            this.onLeadFormSubmit = __bind(this.onLeadFormSubmit, this);
            this.leadsSubmitted = __bind(this.leadsSubmitted, this);
            this.invalidate = __bind(this.invalidate, this);
            this.gotoLeadForm = __bind(this.gotoLeadForm, this);
            this.getTracking = __bind(this.getTracking, this);
            this.franchise = this.options.franchise;
            this.pageType = this.options.pageType;
            this.trackingData = this.options.trackingData;
            this.$leadForm = $("<div class=\"__fh__ __fh__lead-form __fh__" + this.pageType + "\">\n    <form>\n        <div class=\"__fh__form-header\">\n            <img\n                src=\"" + (resource('images/ent-e.png')) + "\"\n                class=\"__fh__ent-logo\"\n            />\n            <span class=\"__fh__form-header-label\">\n                Get Free Info\n            </span>\n            <span class=\"__fh__orange-line\"></span>\n        </div>\n        <div class=\"__fh__form-help\">\n            <p class=\"__fh__help-leader\">\n                Fill out our form to receive free info from\n            </p>\n            <p class=\"__fh__franchise-name\">\n                " + this.franchise.name + "\n            </p>\n        </div>\n        <div class=\"__fh__form-fields\">\n            <div class=\"__fh__help-text\">\n                Please fill out the form to\n                <strong>get free info!</strong>\n            </div>\n            <input type=\"text\"\n                class=\"form-control\"\n                name=\"name\"\n                placeholder=\"First and last name\"\n                required />\n            <input type=\"email\"\n                class=\"form-control\"\n                name=\"email\"\n                placeholder=\"Email\"\n                required />\n            <input type=\"tel\"\n                class=\"form-control\"\n                name=\"phone\"\n                placeholder=\"Phone Number\"\n                required />\n            <input type=\"text\"\n                class=\"form-control\"\n                name=\"zip\"\n                placeholder=\"Postal code\"\n                required />\n            <select name=\"capital\" class=\"form-control\" required>\n                <option selected=\"\" value=\"\">Available Capital to Invest</option>\n                <option value=\"24999\">Less than $25,000</option>\n                <option value=\"49999\">$25,000 to $49,999</option>\n                <option value=\"74999\">$50,000 to $74,999</option>\n                <option value=\"99999\">$75,000 to $99,999</option>\n                <option value=\"149999\">$100,000 to $149,999</option>\n                <option value=\"199999\">$150,000 to $199,999</option>\n                <option value=\"249999\">$200,000 to $249,999</option>\n                <option value=\"499999\">$250,000 to $499,999</option>\n                <option value=\"999999\">$500,000 to $999,999</option>\n                <option value=\"9999999\">More than $1,000,000</option>\n            </select>\n            <div class=\"__fh__disclaimer\">\n                Please review our\n                <a href=\"https://www.entrepreneur.com/privacypolicy\" target=\"_blank\">\n                    Privacy Policy\n                </a>\n            </div>\n            <div class=\"__fh__guidant-checkbox\">\n                <h4>Need Financing?</h4>\n                <input type=\"checkbox\"\n                    class=\"form-control\"\n                    name=\"guidant\"\n                    id=\"__fh__guidant\" />\n                <label for=\"__fh__guidant\">\n                    $50,000 in your IRA/401k can fund your\n                    franchise. Check here to see how Guidant\n                    Financial can help.\n                </label>\n            </div>\n            <button class=\"__fh__submit-button __fh__button\">\n                Complete your request!\n            </button>\n        </div>\n    </form>\n</div>");
            $('#fh-cta').append(this.$leadForm);
            this.$leadForm.submit(this.onLeadFormSubmit);
            this.$sticky = $("<a class=\"__fh__sticky-button\" href=\"#\">\n    <span class=\"__fh__sicky-label\">\n        Get Free Info\n        <span class=\"__fh__franchise-name\">\n            on " + this.franchise.name + "\n        </span>\n    </span>\n</a>");
            installStickyHeader(this.$sticky);
            this.$sticky.click(this.gotoLeadForm);
            this.prefill();
        }

        __FH_SPONSOR_PAGE__.prototype.getTracking = function() {
            var tracking;
            tracking = {
                utm_source: "entrepreneur",
                utm_campaign: "sponsor",
                utm_medium: "inject",
                utm_page_type: this.pageType,
                utm_sess: __FHSESSION__
            };
            tracking = $.extend(tracking, this.trackingData);
            return tracking;
        };

        __FH_SPONSOR_PAGE__.prototype.gotoLeadForm = function() {
            return this.submitLead({
                guidant: false,
                franchise: this.franchise.id,
                sessionId: __FHSESSION__
            });
        };

        __FH_SPONSOR_PAGE__.prototype.invalidate = function($el, message) {
            $el.addClass('__fh__invalid');
            return $el.before("<div class=\"__fh__error-msg\">" + message + "</div>");
        };

        __FH_SPONSOR_PAGE__.prototype.leadsSubmitted = function() {
            return this.$leadForm.html("<h1>THANKS!</h1>");
        };

        __FH_SPONSOR_PAGE__.prototype.onLeadFormSubmit = function(ev) {
            var $capital, $email, $guidant, $name, $phone, $zip, capital, email, guidant, invalid, name, phone, requiredCapital, zip;
            ev.preventDefault();
            this.$leadForm.find('.__fh__invalid').removeClass('__fh__invalid');
            this.$leadForm.find('.__fh__error-msg').remove();
            $email = this.$leadForm.find('input[name=email]');
            $phone = this.$leadForm.find('input[name=phone]');
            $name = this.$leadForm.find('input[name=name]');
            $zip = this.$leadForm.find('input[name=zip]');
            $capital = this.$leadForm.find('select[name=capital]');
            $guidant = this.$leadForm.find('input[name=guidant]');
            email = $email.val();
            phone = $phone.val();
            name = $name.val();
            zip = $zip.val();
            capital = $capital.val();
            guidant = $guidant.prop('checked');
            invalid = false;
            email = email.toLowerCase().replace(' ', '');
            if (!email.match(/^.+@.+\..+$/)) {
                this.invalidate($email, "Must be a valid email.");
                invalid = true;
            }
            if (name.trim().split(" ").length < 2) {
                this.invalidate($name, "Must be your full name.");
                invalid = true;
            }
            if (capital === "") {
                this.invalidate($capital, "Please enter your available capital.");
                invalid = true;
            } else {
                requiredCapital = this.franchise.capital;
                if (parseInt(capital) < requiredCapital) {
                    this.invalidate($capital, "This franchise requires $" + (requiredCapital.toLocaleString()) + ".");
                    invalid = true;
                }
            }
            if (!invalid) {
                this.renderSubmitted();
                putSession('__FHUSER__', {
                    email: email,
                    phone: phone,
                    name: name,
                    zip: zip,
                    capital: capital
                });
                return this.submitLead({
                    email: email,
                    phone: phone,
                    name: name,
                    zip: zip,
                    capital: capital,
                    guidant: guidant,
                    franchise: this.franchise.id,
                    sessionId: __FHSESSION__
                });
            }
        };

        __FH_SPONSOR_PAGE__.prototype.prefill = function() {
            if (window.__FHUSER__ != null) {
                this.$leadForm.find('input[name=email]').val(window.__FHUSER__.email);
                this.$leadForm.find('input[name=phone]').val(window.__FHUSER__.phone);
                this.$leadForm.find('input[name=name]').val(window.__FHUSER__.name);
                this.$leadForm.find('input[name=zip]').val(window.__FHUSER__.zip);
                return this.$leadForm.find('select[name=capital]').val(window.__FHUSER__.capital);
            }
        };

        __FH_SPONSOR_PAGE__.prototype.renderSubmitted = function() {
            this.$leadForm.addClass('submitted');
            this.$leadForm.find('.__fh__form-header').html(REQUEST_SUBMITTED);
            this.$leadForm.find('.__fh__form-help').hide();
            return this.submitted = true;
        };

        __FH_SPONSOR_PAGE__.prototype.submitLead = function(data) {
            var $form, $input, tracking, url;
            tracking = this.getTracking();
            url = "" + __FHDOMAIN__ + "/elg/post-lead/?" + ($.param(tracking));
            $form = $("<form\n    action=\"" + url + "\"\n    method=\"POST\"\n    target=\"_blank\">\n    <input type=\"hidden\" name=\"d\" />\n</form>");
            $input = $form.find('input');
            $input.val(JSON.stringify(data));
            $form.append($input);
            $('body').append($form);
            return $form.submit();
        };

        return __FH_SPONSOR_PAGE__;

    })();

    __FH_NONSPONSOR_PAGE__ = (function() {
        function __FH_NONSPONSOR_PAGE__(options) {
            this.options = options;
            this.makeQuizUrl = __bind(this.makeQuizUrl, this);
            this.gotoQuiz = __bind(this.gotoQuiz, this);
            this.getTracking = __bind(this.getTracking, this);
            this.franchise = this.options.franchise;
            this.pageType = this.options.pageType;
            this.trackingData = this.options.trackingData;
            this.$mainCta = $("<div class=\"__fh__ __fh__miniquiz\">\n    <div class=\"__fh__form-header\">\n        <img\n            src=\"" + (resource('images/ent-e.png')) + "\"\n            class=\"__fh__ent-logo\"\n        />\n        <span class=\"__fh__form-header-label\">\n            The Franchise Quiz\n        </span>\n        <span class=\"__fh__orange-line\"></span>\n    </div>\n    <div class=\"__fh__form-help\">\n        <p class=\"__fh__help-leader\">\n            Take this short quiz and find the perfect\n            franchise for you to start!\n        </p>\n    </div>\n    <div class=\"__fh__miniquiz-answers\">\n        <h4>What industry are you interested in?</h4>\n        <a\n            href=\"" + (this.makeQuizUrl('childrens-franchises')) + "\"\n            target=\"_blank\"\n            class=\"__fh__answer __fh__blue\"\n        >\n            Children's\n        </a>\n        <a\n            href=\"" + (this.makeQuizUrl('food-franchises')) + "\"\n            target=\"_blank\"\n            class=\"__fh__answer __fh__purple\"\n        >\n            Food &amp; Beverages\n        </a>\n        <a\n            href=\"" + (this.makeQuizUrl('healthcare-franchises')) + "\"\n            target=\"_blank\"\n            class=\"__fh__answer __fh__red\"\n        >\n            Health &amp; Senior Care\n        </a>\n        <a\n            href=\"" + (this.makeQuizUrl('fitness-franchises')) + "\"\n            target=\"_blank\"\n            class=\"__fh__answer __fh__teal\"\n        >\n            Fitness &amp; Beauty\n        </a>\n        <a\n            href=\"" + (this.makeQuizUrl('retail-franchises')) + "\"\n            target=\"_blank\"\n            class=\"__fh__answer __fh__green\"\n        >\n            Retail\n        </a>\n        <a\n            href=\"" + (this.makeQuizUrl('home-services-franchises')) + "\"\n            target=\"_blank\"\n            class=\"__fh__answer __fh__orange\"\n        >\n            Home Services\n        </a>\n        <a\n            href=\"" + (this.makeQuizUrl('home-based-franchises')) + "\"\n            target=\"_blank\"\n            class=\"__fh__answer __fh__yellow\"\n        >\n            Work from Home\n        </a>\n        <a\n            href=\"" + (this.makeQuizUrl('')) + "\"\n            target=\"_blank\"\n            class=\"__fh__answer __fh__brown\"\n        >\n            Open to Any Industry\n        </a>\n    </div>\n</div>");
            $('#fh-cta').prepend(this.$mainCta);
            this.$sticky = $("<a class=\"__fh__sticky-button\" href=\"#\">\n    <span class=\"__fh__sicky-label\">\n        Take the\n        <span class=\"__fh__franchise-word\">\n            Franchise\n        </span>\n        Quiz\n    </span>\n</a>");
            installStickyHeader(this.$sticky);
            this.$sticky.click(this.gotoQuiz);
        }

        __FH_NONSPONSOR_PAGE__.prototype.getTracking = function() {
            var tracking;
            tracking = {
                utm_source: "entrepreneur",
                utm_campaign: "nonsponsor",
                utm_medium: "inject",
                utm_page_type: this.pageType,
                utm_sess: __FHSESSION__
            };
            tracking = $.extend(tracking, this.trackingData);
            return tracking;
        };

        __FH_NONSPONSOR_PAGE__.prototype.gotoQuiz = function() {
            var tracking;
            tracking = this.getTracking();
            return window.open("" + __FHDOMAIN__ + "/franchise-quiz/?" + ($.param(tracking)));
        };

        __FH_NONSPONSOR_PAGE__.prototype.makeQuizUrl = function(industry) {
            var payload, tracking;
            tracking = this.getTracking();
            payload = $.extend({}, tracking);
            payload['quizSeed'] = JSON.stringify({
                'industry': industry
            });
            return "" + __FHDOMAIN__ + "/franchise-quiz/?" + ($.param(payload));
        };

        return __FH_NONSPONSOR_PAGE__;

    })();

    injectCss = function(css) {
        var head, style;
        style = document.createElement('style');
        style.type = 'text/css';
        css = ".__fh__ a {\n  color: #1289C4;\n  font-weight: 700; }\n\n.__fh__ input, .__fh__ select {\n  display: block;\n  border-radius: 5px;\n  border: 1px solid #757575;\n  padding: 5px 10px; }\n\n.__fh__ [type=checkbox] + label {\n  height: auto; }\n\n.__fh__article {\n  margin-bottom: 15px; }\n\n.__fh__button {\n  width: 100%;\n  background-color: #FF862E;\n  height: 50px;\n  line-height: 50px;\n  color: #FFFFFF;\n  font-size: 18px;\n  text-align: center;\n  border: none;\n  outline: none; }\n\n.__fh__form-header {\n  padding: 32px 28px 12px 28px;\n  display: flex;\n  align-items: center; }\n  @media (max-width: 969px) and (min-width: 768px) {\n    .__fh__form-header {\n      padding: 12px 12px 0px 12px; } }\n  .__fh__form-header .__fh__form-header-label {\n    font-size: 22px;\n    line-height: 38px;\n    font-weight: 700;\n    padding: 0 10px 0 0;\n    background-color: #FFFFFF; }\n  .__fh__form-header .__fh__orange-line {\n    flex-grow: 1;\n    background-color: #FF862E;\n    height: 2px; }\n  .__fh__form-header .__fh__ent-logo {\n    margin-right: 10px; }\n    @media (max-width: 969px) and (min-width: 768px) {\n      .__fh__form-header .__fh__ent-logo {\n        display: none; } }\n\n.__fh__form-help {\n  padding: 0 30px 12px 30px; }\n  @media (max-width: 969px) and (min-width: 768px) {\n    .__fh__form-help {\n      padding: 0 14px 12px 14px; } }\n  .__fh__form-help p {\n    margin: 0;\n    font-size: 16px; }\n  .__fh__form-help .__fh__help-leader {\n    color: #757575; }\n  .__fh__form-help .__fh__franchise-name {\n    color: #212121;\n    font-weight: 700; }\n\n.__fh__lead-form, .__fh__miniquiz {\n  margin: 0 auto;\n  border-radius: 10px;\n  width: auto;\n  background-color: #FFFFFF;\n  overflow-y: auto;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); }\n\n@media (max-width: 969px) {\n  .__fh__lead-form {\n    margin-top: 10px; } }\n\n.__fh__lead-form.__fh__article {\n  float: none;\n  width: auto; }\n  .__fh__lead-form.__fh__article .__fh__form-fields {\n    max-width: inherit; }\n\n.__fh__lead-form .__fh__disclaimer {\n  margin: 12px 0 12px 0; }\n\n.__fh__lead-form .__fh__error-msg {\n  color: #EA7A59;\n  font-size: 11px;\n  margin-bottom: 2px; }\n\n.__fh__lead-form .__fh__form-fields {\n  padding: 0 30px 30px 30px;\n  margin: 0 auto; }\n  .__fh__lead-form .__fh__form-fields .select-wrapper input.select-dropdown, .__fh__lead-form .__fh__form-fields .select-wrapper .caret {\n    display: none; }\n  @media (max-width: 969px) and (min-width: 768px) {\n    .__fh__lead-form .__fh__form-fields {\n      padding: 0 14px 12px 14px; } }\n  @media (min-width: 970px) {\n    .__fh__lead-form .__fh__form-fields {\n      overflow: hidden; } }\n\n.__fh__lead-form .__fh__guidant-checkbox {\n  margin: 10px 0; }\n  .__fh__lead-form .__fh__guidant-checkbox h4 {\n    font-weight: 700;\n    font-size: 16px;\n    margin-bottom: 10px; }\n  .__fh__lead-form .__fh__guidant-checkbox input {\n    float: left;\n    width: auto;\n    border: none;\n    background-color: transparent;\n    box-shadow: none;\n    -webkit-box-shadown: none; }\n  .__fh__lead-form .__fh__guidant-checkbox label {\n    display: block;\n    font-size: 12px;\n    font-weight: normal;\n    padding-left: 25px;\n    color: #212121; }\n\n.__fh__lead-form .__fh__help-text {\n  display: none; }\n\n.__fh__lead-form .__fh__invalid {\n  border-color: #EA7A59; }\n\n.__fh__lead-form button {\n  margin-top: 12px;\n  margin-bottom: 12px;\n  border-radius: 5px; }\n\n.__fh__lead-form .__fh__cancel-button {\n  height: 42px;\n  line-height: 42px;\n  background-color: #EA7A59;\n  display: none; }\n\n.__fh__lead-form input {\n  margin-bottom: 10px;\n  font-size: 16px; }\n\n.__fh__lead-form.submitted .__fh__form-fields {\n  max-height: 0;\n  padding: 0 12px; }\n\n.__fh__miniquiz .__fh__miniquiz-answers {\n  padding: 0 30px 36px 30px; }\n  @media (max-width: 969px) and (min-width: 768px) {\n    .__fh__miniquiz .__fh__miniquiz-answers {\n      padding: 0 14px 18px 14px; } }\n  .__fh__miniquiz .__fh__miniquiz-answers h4 {\n    font-size: 16px;\n    font-weight: 700; }\n  .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer {\n    display: block;\n    width: auto;\n    margin: 0 0 5px 0;\n    font-size: 20px;\n    line-height: 48px;\n    color: #FFFFFF;\n    text-align: center; }\n    .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer:hover, .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer:active {\n      color: #FFFFFF; }\n    .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer.__fh__blue {\n      background: #618FCB; }\n      .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer.__fh__blue:hover {\n        background: #5076A8; }\n      .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer.__fh__blue:active {\n        background: #405F87; }\n    .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer.__fh__brown {\n      background: #BF8F59; }\n      .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer.__fh__brown:hover {\n        background: #9E7649; }\n      .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer.__fh__brown:active {\n        background: #7F5F3B; }\n    .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer.__fh__green {\n      background: #6DC18B; }\n      .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer.__fh__green:hover {\n        background: #5A9F73; }\n      .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer.__fh__green:active {\n        background: #48805C; }\n    .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer.__fh__orange {\n      background: #EFAD66; }\n      .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer.__fh__orange:hover {\n        background: #C59054; }\n      .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer.__fh__orange:active {\n        background: #9E7444; }\n    .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer.__fh__purple {\n      background: #AD75AF; }\n      .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer.__fh__purple:hover {\n        background: #906091; }\n      .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer.__fh__purple:active {\n        background: #744D75; }\n    .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer.__fh__red {\n      background: #EA7A59; }\n      .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer.__fh__red:hover {\n        background: #C16449; }\n      .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer.__fh__red:active {\n        background: #9B503B; }\n    .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer.__fh__teal {\n      background: #79BBAD; }\n      .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer.__fh__teal:hover {\n        background: #639B90; }\n      .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer.__fh__teal:active {\n        background: #507D74; }\n    .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer.__fh__yellow {\n      background: #CABA66; }\n      .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer.__fh__yellow:hover {\n        background: #A79B54; }\n      .__fh__miniquiz .__fh__miniquiz-answers .__fh__answer.__fh__yellow:active {\n        background: #867D44; }\n\n.__fh__request-submitted {\n  font-size: 24px;\n  padding-bottom: 20px;\n  font-weight: 700; }\n  .__fh__request-submitted .checkmark {\n    color: #FF862E;\n    margin-right: 5px; }\n\n.__fh__main-quiz-cta {\n  background-color: #FF862E;\n  color: #FFFFFF;\n  float: right;\n  width: 300px;\n  padding: 30px;\n  text-align: center;\n  cursor: pointer;\n  line-height: 1.2; }\n  .__fh__main-quiz-cta .__fh__ent-logo {\n    width: 250px; }\n  .__fh__main-quiz-cta .__fh__follower {\n    font-size: 26px; }\n  .__fh__main-quiz-cta .__fh__leader {\n    font-size: 32px;\n    font-weight: bold;\n    margin-top: 32px;\n    font-style: italic;\n    text-align: left; }\n  .__fh__main-quiz-cta .__fh__quiz-icon {\n    margin: 36px auto 12px auto;\n    width: 92px;\n    height: 92px; }\n  .__fh__main-quiz-cta, .__fh__main-quiz-cta.__fh__article {\n    float: none;\n    width: auto;\n    text-align: left;\n    padding: 12px;\n    margin-bottom: 12px;\n    overflow: hidden;\n    position: relative; }\n    .__fh__main-quiz-cta .__fh__ent-logo, .__fh__main-quiz-cta.__fh__article .__fh__ent-logo {\n      display: none; }\n    .__fh__main-quiz-cta .__fh__leader, .__fh__main-quiz-cta.__fh__article .__fh__leader {\n      font-size: 20px;\n      margin: 4px 0 0 60px; }\n    .__fh__main-quiz-cta .__fh__follower, .__fh__main-quiz-cta.__fh__article .__fh__follower {\n      font-size: 15px;\n      margin: 0 0 0 60px; }\n    .__fh__main-quiz-cta .__fh__quiz-icon, .__fh__main-quiz-cta.__fh__article .__fh__quiz-icon {\n      position: absolute;\n      left: 12px;\n      top: 12px;\n      display: block;\n      width: 48px !important;\n      height: 48px !important;\n      margin: 0; }\n\n.__fh__sticky-button {\n  background-color: #FF862E;\n  color: #FFFFFF;\n  font-size: 1rem;\n  text-align: center;\n  font-weight: bold;\n  display: flex;\n  cursor: pointer;\n  align-items: center; }\n  .__fh__sticky-button img {\n    height: 30px;\n    margin-right: 5px; }\n  .__fh__sticky-button.__fh__franchise-page {\n    position: relative;\n    z-index: 100;\n    border-radius: 5px;\n    padding: 0 20px 0 10px;\n    height: 40px; }\n    @media (max-width: 969px) {\n      .__fh__sticky-button.__fh__franchise-page img, .__fh__sticky-button.__fh__franchise-page .__fh__franchise-word, .__fh__sticky-button.__fh__franchise-page .__fh__franchise-name {\n        display: none; } }\n    @media (max-width: 600px) {\n      .__fh__sticky-button.__fh__franchise-page {\n        border-radius: 0;\n        justify-content: center; }\n        .__fh__sticky-button.__fh__franchise-page img, .__fh__sticky-button.__fh__franchise-page .__fh__franchise-word {\n          display: inline; }\n        .__fh__sticky-button.__fh__franchise-page img {\n          height: 25px; } }\n  .__fh__sticky-button.__fh__business-opportunity {\n    position: fixed;\n    top: -200px;\n    left: 0;\n    right: 0;\n    z-index: 104000000;\n    transition: top 0.25s;\n    height: 50px;\n    justify-content: center; }\n    .__fh__sticky-button.__fh__business-opportunity.show {\n      top: 90px; }\n      @media (max-width: 767px) {\n        .__fh__sticky-button.__fh__business-opportunity.show {\n          top: 60px; }\n          .__fh__sticky-button.__fh__business-opportunity.show .__fh__franchise-name {\n            display: none; } }\n    @media (max-width: 600px) {\n      .__fh__sticky-button.__fh__business-opportunity {\n        border-radius: 0;\n        justify-content: center; }\n        .__fh__sticky-button.__fh__business-opportunity .__fh__franchise-name {\n          display: none; } }\n";
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head = document.head || document.getElementsByTagName('head')[0];
        return head.appendChild(style);
    };

    injectFbPixel = function(franchise) {
        var inject;
        inject =
            function() {
                ! function(f, b, e, v, n, t, s) {
                    if (f.fbq) return;
                    n = f.fbq = function() {
                        n.callMethod ?
                            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                    };
                    if (!f._fbq) f._fbq = n;
                    n.push = n;
                    n.loaded = !0;
                    n.version = '2.0';
                    n.queue = [];
                    t = b.createElement(e);
                    t.async = !0;
                    t.src = v;
                    s = b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t, s)
                }(window, document, 'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1459355267664163');
                fbq('track', 'PageView');
                fbq('track', 'ViewContent', {
                    content_ids: ["" + franchise.id],
                    content_type: 'product',
                });
            };
        return inject();
    };

    installScrollListener = function($el) {
        return $(window).scroll(function() {
            var scrollTop, windowHeight;
            windowHeight = $(window).height();
            scrollTop = $(window).scrollTop();
            return $el.toggleClass('show', scrollTop > 0.6 * windowHeight);
        });
    };

    installStickyHeader = function($el) {
        var url;
        url = $('link[rel=canonical]').attr('href');
        if (url.indexOf('/business-opportunities/') >= 0) {
            $('body').append($el);
            $el.addClass('__fh__business-opportunity');
            return installScrollListener($el);
        } else {
            $('#fh-header-button').append($el);
            return $el.addClass('__fh__franchise-page');
        }
    };

    resource = function(path) {
        return "" + __FHDOMAIN__ + "/resource/" + path;
    };

    getSession = function(key) {
        var e, val, _ref;
        val = (_ref = window.localStorage) != null ? _ref.getItem(key) : void 0;
        try {
            return JSON.parse(val);
        } catch (_error) {
            e = _error;
            return null;
        }
    };

    putSession = function(key, value) {
        var _ref;
        return (_ref = window.localStorage) != null ? _ref.setItem(key, JSON.stringify(value)) : void 0;
    };

    randomString = function(len) {
        var i, possible, text, _i;
        text = "";
        possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (i = _i = 0; 0 <= len ? _i <= len : _i >= len; i = 0 <= len ? ++_i : --_i) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };

    submitPixel = function(path, options) {
        var url;
        url = "" + __FHDOMAIN__ + "/" + path + ".gif?" + ($.param({
            d: JSON.stringify(options)
        }));
        return $('body').append("<img src=\"" + url + "\" />");
    };

    $(function() {
        var data, infoText, sessionId;
        sessionId = getSession('__fh__session');
        if (!sessionId) {
            sessionId = randomString(32);
            putSession('__fh__session', sessionId);
        }
        window.__FHSESSION__ = sessionId;
        window.__FHUSER__ = getSession('__FHUSER__');
        infoText = $('script[name="__fh__"]').text();
        if (infoText) {
            injectCss();
            data = JSON.parse(infoText);
            window.__FHDOMAIN__ = data.domain;
            return window.__FHC__ = new __FH__(data);
        }
    });

}).call(this);