var MainApp = angular.module("MainApp", ["indexController", "seoControllers", "sitePagesControllers", "searchPageControllers", "modalControllers", "ngModal", "ngFitText", "formsControllers"]);
! function(window, document, angular, undefined) {
    "use strict";
    angular.module("ngFitText", []).value("fitTextDefaultConfig", {
        debounce: !1,
        delay: 250,
        loadDelay: 10,
        compressor: 1,
        min: 0,
        max: Number.POSITIVE_INFINITY
    }).directive("fittext", ["$timeout", "fitTextDefaultConfig", "fitTextConfig", function($timeout, config, fitTextConfig) {
        return {
            restrict: "A",
            scope: !0,
            link: function(scope, element, attrs) {
                angular.extend(config, fitTextConfig.config);
                var resizePromise, parent = element.parent(),
                    domElem = element[0],
                    domElemStyle = domElem.style,
                    computed = window.getComputedStyle(element[0], null),
                    newlines = element.children().length || 1,
                    loadDelay = attrs.fittextLoadDelay || config.loadDelay,
                    compressor = isNaN(parseInt(attrs.fittext)) ? config.compressor : attrs.fittext,
                    min = attrs.fittextMin || config.min,
                    max = attrs.fittextMax || config.max,
                    minFontSize = "inherit" === min ? computed["font-size"] : min,
                    maxFontSize = "inherit" === max ? computed["font-size"] : max,
                    lineHeight = computed["line-height"],
                    display = computed.display,
                    calcSize = 10;

                function resize() {
                    var ratio;
                    domElem.offsetHeight * domElem.offsetWidth != 0 && (domElemStyle.fontSize = calcSize + "px", domElemStyle.lineHeight = "1", domElemStyle.display = "inline-block", domElemStyle.fontSize = (ratio = calcSize * newlines / domElem.offsetWidth / newlines, Math.max(Math.min((parent[0].offsetWidth - (parseFloat(getComputedStyle(parent[0]).paddingLeft) + parseFloat(getComputedStyle(parent[0]).paddingRight)) - 6) * ratio * compressor, parseFloat(maxFontSize)), parseFloat(minFontSize)) + "px"), domElemStyle.lineHeight = lineHeight, domElemStyle.display = display)
                }

                function resizer() {
                    resizePromise && $timeout.cancel(resizePromise), resizePromise = $timeout(function() {
                        resizePromise = null, resize()
                    }, 5)
                }
                $timeout(function() {
                    resizer()
                }, loadDelay), scope.$watch(function() {
                    return [scope.$eval(attrs.ngBind), parent[0].offsetWidth, element[0].offsetWidth].join("_")
                }, function() {
                    resizer()
                }), config.debounce ? angular.element(window).bind("resize", config.debounce(function() {
                    scope.$apply(resizer)
                }, config.delay)) : angular.element(window).bind("resize", function() {
                    scope.$apply(resizer)
                })
            }
        }
    }]).provider("fitTextConfig", function() {
        var self = this;
        return this.config = {}, this.$get = function() {
            var extend = {};
            return extend.config = self.config, extend
        }, this
    })
}(window, document, angular), MainApp.config(function(ngModalDefaultsProvider) {
    return ngModalDefaultsProvider.set({
        closeButtonHtml: ""
    })
}), MainApp.config(["$httpProvider", function($httpProvider) {
    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded", $httpProvider.defaults.transformRequest.unshift(function(data, headersGetter) {
        var key, result = [];
        for (key in data) data.hasOwnProperty(key) && (void 0 === data[key] && (data[key] = ""), result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key])));
        return result.join("&")
    })
}]), MainApp.run(function($rootScope) {
    $rootScope.$on("showModal", function(event, args) {
        $rootScope.$broadcast("handleShowModal", args)
    }), $rootScope.$on("populateModalParams", function(event, args) {
        $rootScope.$broadcast("handlePopulateModalParams", args)
    }), $rootScope.$on("hideSearchFilterDropdowns", function(event, args) {
        $rootScope.$broadcast("handleHideSearchFilterDropdowns", args)
    }), $rootScope.trackingParamsAllowed = !1, angular.element(document).ready(function() {
        -1 !== document.cookie.indexOf("tracking_params_allowed=true") && ($rootScope.trackingParamsAllowed = !0, $rootScope.$apply(), function(url) {
            console.log("Including: " + url);
            var script = document.createElement("script");
            script.setAttribute("src", url), script.setAttribute("type", "text/javascript"), document.getElementsByTagName("head")[0].appendChild(script)
        }("/bold_chat.js"))
    })
}), MainApp.directive("gaData", function() {
    return {
        restrict: "A",
        scope: {
            gaData: "@?",
            gaEvent: "@?",
            gaPView: "@?",
            gaPEvent: "@?"
        },
        link: function(scope, element, attrs) {
            var params, cb;
            if (scope.gaData) {
                for (params = scope.gaData.split(","); params.length < 5;) params.push("");
                var cat = params[0],
                    act = params[1],
                    opt_label = params[2],
                    opt_value = params[3],
                    follow = params[4];
                cb = function() {
                    customGATracking.eventTrack(cat, act, opt_label, opt_value, follow)
                }, element.on(scope.gaEvent ? scope.gaEvent : "click", cb)
            }
            if (scope.gaPView) {
                for (params = scope.gaPView.split(","); params.length < 2;) params.push("");
                var pageName = params[0],
                    domainName = params[1];
                cb = function() {
                    customGATracking.pageTrack(pageName, domainName)
                }, element.on(scope.gaPevent ? scope.gaPEvent : "click", cb)
            }
        }
    }
}), MainApp.value("noSpecialChars", /^((?!(\/|\\|`|&|~|!|@|#|\$|%|\^|\*|\+|=|\[|\{|\]|\}|\||;|:|_|<|>|\?|\(|\)|[^\x00-\x7F])).)*$/).value("validEmail", /^([a-zA-Z0-9])([a-zA-Z0-9_\-\.]+)@(((\[a-z]{1,3}\.[a-z]{1,3}\.[a-z]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3}))/).value("validPhone", /^[\(\)\.\-\+ 0-9]+$/).value("validDomain", /(?=^.{1,254}$)(^(?:(?!\d+\.)[a-zA-Z0-9_\-]{1,63}\.)+([a-zA-Z]{2,})$)/).value("euCountryCodes", ["BE", "EL", "LT", "PT", "BG", "ES", "LU", "RO", "CZ", "FR", "HU", "SI", "DK", "HR", "MT", "SK", "DE", "IT", "NL", "FI", "EE", "CY", "AT", "SE", "IE", "LV", "PL", "UK"]).factory("geoIpDetect", ["$http", "$q", "bdApiUrl", function($http, $q, bdApiUrl) {
    return $http.get(bdApiUrl + "/geoip/detect").then(function(success) {
        console.log("success: " + JSON.stringify(success.data)), success.data.ofacBlocked && (window.location = "/sdnnotice");
        var deferred = $q.defer();
        return deferred.resolve(success.data), deferred.promise
    }, function(error) {
        console.log("failed to detect country: " + JSON.stringify(error))
    })
}]).run(["geoIpDetect", "euCountryCodes", "$rootScope", "$http", "$location", function(geoIpDetect, euCountryCodes, $rootScope, $http, $location) {
    geoIpDetect.then(function(geoIpData) {
        $http({
            url: "/geo-ip-detect?" + window.location.search.substr(1),
            method: "POST",
            data: {
                data: JSON.stringify(geoIpData)
            }
        }).then(function(geoIpData) {
            geoIpData = geoIpData.data, console.log("countryCode = " + geoIpData.countryCode), $rootScope.isEu = euCountryCodes.includes(geoIpData.countryCode), console.log("is EU: " + $rootScope.isEu), dataLayer.push({
                event: "geoIP",
                countryCode: geoIpData.countryCode,
                isEU: $rootScope.isEu
            })
        })
    })
}]), MainApp.filter("noFractionCurrency", ["$filter", "$locale", function(filter, locale) {
    var currencyFilter = filter("currency"),
        formats = locale.NUMBER_FORMATS;
    return function(amount, num, currencySymbol) {
        0 === num && (num = -1);
        var value = currencyFilter(amount, currencySymbol);
        if (void 0 === value) return "";
        var sep = value.indexOf(formats.DECIMAL_SEP) + 1,
            symbol = "";
        return sep < value.indexOf(formats.CURRENCY_SYM) && (symbol = " " + formats.CURRENCY_SYM), value.substring(0, sep + num) + symbol
    }
}]), MainApp.filter("trusthtml", function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val)
    }
}), MainApp.factory("BrowserCookieService", function() {
    return {
        isCookiesEnabled: function(scope) {
            var cookieEnabled = !!navigator.cookieEnabled;
            return void 0 !== navigator.cookieEnabled || cookieEnabled || (document.cookie = "testcookie", cookieEnabled = -1 != document.cookie.indexOf("testcookie")), cookieEnabled
        }
    }
}), MainApp.factory("CountryDropdownService", function($http) {
    return selectUserDefaultCountry = function(scope, selectId) {
        $http.get("/get-user-country-info/").then(function(result) {
            scope.countryName = result.data.country_name.replace("&amp;", "&");
            var dropdown = document.getElementById(selectId);
            null !== dropdown && "" === dropdown.value && setSelectedIndexByValue(document.getElementById(selectId), scope.countryName)
        })
    }, setSelectedIndexByValue = function(s, v) {
        for (var i = 0; i < s.options.length; i++)
            if (s.options[i].text == v) return void(s.options[i].selected = !0)
    }, changeCountry = function(scope) {
        $http.get("/get-country-name-by-code/?chosenCountry=" + scope.visitor.country).then(function(result) {
            scope.countryName = result.data.replace("&amp;", "&")
        })
    }, {
        selectUserDefaultCountry: selectUserDefaultCountry,
        setSelectedIndexByValue: setSelectedIndexByValue,
        changeCountry: changeCountry
    }
}), MainApp.factory("MonetateParsingService", function() {
    return parseCurrentExperience = function(scope) {
        if (void 0 !== window.monetate && void 0 !== window.monetate.campaigns) {
            var currentMonetateCampaigns = window.monetate.campaigns,
                currentExperiences = "";
            angular.forEach(currentMonetateCampaigns, function(value, key) {
                currentExperiences = currentExperiences + " [ " + value.key + " : " + value.split + " ] "
            }), scope.currentExperiences = currentExperiences
        }
    }, {
        parseCurrentExperience: parseCurrentExperience
    }
}), MainApp.factory("SocialMediaService", function() {
    return disableSocialButtons = function(scope) {
        scope.socialRequiredState = {
            "background-color": "#CAE5FF"
        }, scope.socialClicked = "true", scope.buttonState = "disabled"
    }, facebookCallAPI = function(scope) {
        FB.api("/me?fields=name,email", function(response) {
            var nameFields = response.name;
            nameFields = nameFields.split(" "), scope.visitor.first = "", scope.visitor.last = "", nameFields[0], nameFields[1], scope.visitor.first = nameFields[0], scope.visitor.last = nameFields[1], scope.visitor.email = response.email, scope.visitor.emailconfirmed = response.email, scope.visitor.phone = "", response.first_name && response.last_name && response.email || customGATracking.eventTrack("Social Pull", "TDFS - Partial", "Facebook"), disableSocialButtons(scope), scope.$apply(), facebookSaveLocalCache(scope.visitor.first, scope.visitor.last, scope.visitor.email, scope.visitor.phone)
        })
    }, googleSaveLocalCache = function(first, last, email, phone) {
        localStorage.setItem("GFirst", first), localStorage.setItem("GLast", last), localStorage.setItem("GEmail", email), localStorage.setItem("GPhone", phone)
    }, facebookSaveLocalCache = function(first, last, email, phone) {
        localStorage.setItem("FBFirst", first), localStorage.setItem("FBLast", last), localStorage.setItem("FBEmail", email), localStorage.setItem("FBPhone", phone)
    }, {
        getVisitorFacebook: function(scope) {
            FB.getLoginStatus(function(response) {
                return "connected" === response.status ? facebookCallAPI(scope) : (FB.login(function(response) {
                    if (response.authResponse) return facebookCallAPI(scope)
                }, {
                    scope: "public_profile,email"
                }), !1)
            })
        },
        onGoogleSignIn: function(googleUser, scope) {
            var profile = googleUser.getBasicProfile(),
                firstName = profile.getGivenName(),
                lastName = profile.getFamilyName(),
                email = profile.getEmail();
            firstName && lastName && email || customGATracking.eventTrack("Social Pull", "TDFS - Partial", "Google"), googleSaveLocalCache(firstName, lastName, email, ""), disableSocialButtons(scope)
        },
        googleGetLocalCache: function(scope) {
            return visitor = {}, visitor.first = localStorage.getItem("GFirst"), visitor.last = localStorage.getItem("GLast"), visitor.email = localStorage.getItem("GEmail"), visitor.emailconfirmed = localStorage.getItem("GEmail"), visitor.phone = localStorage.getItem("GPhone"), visitor.country = window.country, disableSocialButtons(scope), visitor
        },
        facebookGetLocalCache: function(scope) {
            return visitor = {}, visitor.first = localStorage.getItem("FBFirst"), visitor.last = localStorage.getItem("FBLast"), visitor.email = localStorage.getItem("FBEmail"), visitor.emailconfirmed = localStorage.getItem("FBEmail"), visitor.phone = localStorage.getItem("FBPhone"), visitor.country = window.country, disableSocialButtons(scope), visitor
        }
    }
});
var formsControllers = angular.module("formsControllers", []);
formsControllers.controller("priContactFormController", ["$scope", "$rootScope", "$http", "SocialMediaService", "BrowserCookieService", "CountryDropdownService", "MonetateParsingService", "$filter", "validDomain", "noSpecialChars", "validEmail", "validPhone", "euCountryCodes", function($scope, $rootScope, $http, SocialMediaService, BrowserCookieService, CountryDropdownService, MonetateParsingService, $filter, validDomain, noSpecialChars, validEmail, validPhone, euCountryCodes) {
    $scope.noSpecialChars = noSpecialChars, $scope.validEmail = validEmail, $scope.validPhone = validPhone, $scope.validDomain = validDomain, $scope.euCountryCodes = euCountryCodes, $scope.$watch(function() {
        return $rootScope.isEu
    }, function() {
        $scope.isEu = $rootScope.isEu, console.log("Form isEU Visitor: " + $scope.isEu)
    }, !0), $scope.visitor = {}, $scope.correctCaptchaSelected = !0, $scope.showSubmitFormButton = !0, $scope.showWaitingFormSubmission = !1, $scope.showValidationMessages = !1, $scope.showMakeOfferValidationError = !1, $scope.showBadEmailError = !1, $scope.showBadEmailMessage = "", $scope.visitor.country = window.country, $scope.dialogType = "tdfs", $scope.sld = "", $scope.ext = "", $scope.price = 0, $scope.domain = "", $scope.contactTollFree = "866-277-3420", $scope.contactWW = "+1-339-222-5135", CountryDropdownService.selectUserDefaultCountry($scope, "country"), $scope.attachSignin = function(element) {
        auth2.attachClickHandler(element, {}, function(googleUser) {
            SocialMediaService.onGoogleSignIn(googleUser, $scope), $scope.getGoogleVisitor("TDFS Lander")
        }, function(error) {})
    };
    try {
        window.attachSignin = $scope.attachSignin, startGoogleSigninApp()
    } catch (err) {
        console.log("user opted out of google oauth")
    }
    $scope.getGoogleVisitor = function(clickType) {
        BrowserCookieService.isCookiesEnabled() ? ($scope.visitor = SocialMediaService.googleGetLocalCache($scope), setTimeout(function() {
            $scope.$apply()
        }, 100), customGATracking.eventTrack("Google Response", clickType, "Form Populated")) : alert("Please enable browser cookies to connect to Google"), customGATracking.eventTrack("Google Engagement", clickType, "Button Click")
    }, $scope.getFacebookVisitor = function(clickType) {
        if (BrowserCookieService.isCookiesEnabled()) {
            if (!getValidCachedUser(SocialMediaService.facebookGetLocalCache($scope))) return SocialMediaService.getVisitorFacebook($scope), !1;
            customGATracking.eventTrack("Facebook Response", clickType, "Form Populated")
        } else alert("Please enable browser cookies to connect to Facebook");
        customGATracking.eventTrack("Facebook Engagement", clickType, "Button Click")
    }, getValidCachedUser = function(cachedVisitor) {
        return !!(cachedVisitor.first && cachedVisitor.last && cachedVisitor.email) && ($scope.visitor = cachedVisitor, !0)
    }, $scope.getDefinedOrDefaultValue = function(value, defaultTo) {
        return void 0 !== value && "" !== value ? value : defaultTo
    }, $scope.traffic_id = $scope.getDefinedOrDefaultValue(window.traffic_id, ""), $scope.traffic_type = $scope.getDefinedOrDefaultValue(window.traffic_type, ""), $scope.utm_campaign = $scope.getDefinedOrDefaultValue(window.utm_campaign, ""), $scope.utm_content = $scope.getDefinedOrDefaultValue(window.utm_content, ""), $scope.utm_source = $scope.getDefinedOrDefaultValue(window.utm_source, ""), $scope.referrer_id = $scope.getDefinedOrDefaultValue(window.referrer_id, ""), $scope.utm_medium = $scope.getDefinedOrDefaultValue(window.utm_medium, ""), $scope.$on("handlePopulateModalParams", function(event, args) {
        if (void 0 !== args.type && ("make-offer" == args.type || "price-request" == args.type)) {
            $scope.dialogType = args.type, $scope.showValidationMessages = !1, $scope.sld = args.sld, $scope.ext = args.ext, $scope.price = args.price;
            var noFractionCurrencyFilter = $filter("noFractionCurrency");
            $scope.displayPrice = noFractionCurrencyFilter(args.price, 0, "$"), $scope.domain = $scope.sld + "." + $scope.ext;
            var phoneCampaign = "makeoffer_search";
            $scope.showModalPhoneNumbers = !1, "make-offer" == args.type && (customGATracking.pageTrack("/mo-begin/", $scope.domain), customGATracking.eventTrack("Search Engagement", "Make Offer - Listed Results", $scope.domain), customGATracking.adRemarket($scope.domain, "Search Results - MO", $scope.price)), "price-request" == args.type && (phoneCampaign = "pricerequest_search", customGATracking.pageTrack("/pri-begin/", $scope.domain), customGATracking.eventTrack("Search Engagement", "Price Request - Listed Results", $scope.domain), customGATracking.adRemarket($scope.domain, "Search Results - PR", $scope.price));
            var campaignName = "makeoffer";
            "price-request" == args.type && (campaignName = "pricerequest"), "Domain_Search" == window.traffic_id && (campaignName = "Domain_Search"), "ir" == window.traffic_id && (campaignName = "affiliate"), $scope.traffic_id = $scope.getDefinedOrDefaultValue(window.traffic_id, campaignName + "_search"), $scope.traffic_type = $scope.getDefinedOrDefaultValue(window.traffic_type, campaignName), $scope.utm_campaign = $scope.getDefinedOrDefaultValue(window.utm_campaign, campaignName + "_search"), $scope.utm_content = $scope.getDefinedOrDefaultValue(window.utm_content, ""), $scope.utm_source = $scope.getDefinedOrDefaultValue(window.utm_source, campaignName), $http({
                url: "/get-phones-by-traffic-id/" + phoneCampaign,
                method: "GET"
            }).then(function(response) {
                void 0 !== response.data && (void 0 !== response.data.TDFS_PHONE && "" !== response.data.TDFS_PHONE && ($scope.contactTollFree = response.data.TDFS_PHONE), void 0 !== response.data.TDFS_PHONEWW && "" !== response.data.TDFS_PHONEWW && ($scope.contactWW = response.data.TDFS_PHONEWW)), $scope.showModalPhoneNumbers = !0
            })
        }
    }), $scope.trackModalPhoneClick = function() {
        "make-offer" == $scope.dialogType ? customGATracking.eventTrack("Search Engagment", "Make Offer- Phone", "Phone Click") : customGATracking.eventTrack("Search Engagment", "PRI - Phone", "Phone Click")
    }, $scope.inArray = function(needle, haystack) {
        for (var i = 0, len = haystack.length; i < len; i++) {
            if (haystack[i] == needle) return i;
            0
        }
        return -1
    }, $scope.changeCountry = function() {
        -1 < $scope.inArray($scope.visitor.country, $scope.euCountryCodes) && ($scope.isEu = !0), CountryDropdownService.changeCountry($scope)
    }, $scope.validateEmail = "yes", $scope.setValidateEmail = function(validateEmail) {
        $scope.validateEmail = validateEmail
    }, $scope.isBrokerageName = !1, $scope.setIsBrokerageName = function() {
        $scope.isBrokerageName = !0, -1 === window.location.href.indexOf("develop.com") && (window.location.href = "/lander/develop.com?version=brokerage18")
    }, $scope.submit = function(isFormValid) {
        if (MonetateParsingService.parseCurrentExperience($scope), $scope.utm_content = $scope.getDefinedOrDefaultValue($scope.utm_content, $scope.currentExperiences), console.log("Monetate: " + $scope.utm_content), $scope.showValidationMessages = !0, $scope.correctCaptchaSelected = !0, "make-offer" == $scope.dialogType) {
            $scope.showMakeOfferValidationError = !1;
            /^[0-9]+(\.\d{0,2}[^\.])?\d$/.exec($scope.visitor.offerprice) || (isFormValid = !($scope.showMakeOfferValidationError = !0))
        }
        "no" === $scope.validateEmail && ($scope.showNonMatchingEmailError = !1, $scope.visitor.emailconfirmed !== $scope.visitor.email && (isFormValid = !1, $scope.showNonMatchingEmailError = !0)), $scope.showNonTLDEmailError = !1;
        return /\.[a-zA-Z0-9]+$/.exec($scope.visitor.email) || (isFormValid = !1, $scope.showNonTLDEmailError = !0), $scope.apiEndPoint = "/tdfs/", $scope.isBrokerageName && ($scope.apiEndPoint = "/tdfs-brokerage/"), isFormValid && ($scope.showSubmitFormButton = !1, $scope.showWaitingFormSubmission = !0, $scope.showBadEmailError = !1, void 0 === $scope.visitor.country && ($scope.visitor.country = window.country), $scope.correctCaptchaSelected = !0, $http({
            url: $scope.apiEndPoint,
            method: "POST",
            data: {
                domain: $scope.domain,
                emailfield: $scope.visitor.email,
                firstname: $scope.visitor.first,
                lastname: $scope.visitor.last,
                middlename: $scope.visitor.middle,
                country: $scope.visitor.country,
                phonefield: $scope.visitor.phone,
                makeofferprice: $scope.visitor.offerprice,
                traffic_id: $scope.traffic_id,
                traffic_type: $scope.traffic_type,
                utm_campaign: $scope.utm_campaign,
                utm_content: $scope.utm_content,
                utm_source: $scope.utm_source,
                referrer_id: $scope.referrer_id,
                utm_medium: $scope.utm_medium,
                "g-recaptcha-response": window.grecaptchaValue,
                "should-confirm-email": $scope.validateEmail
            }
        }).then(function(response) {
            if ("bad captcha" == response.data) return $scope.correctCaptchaSelected = !1, $scope.showSubmitFormButton = !0, $scope.showWaitingFormSubmission = !1;
            if (!1 === response.data.contactEmailValid) return $scope.showBadEmailError = !0, $scope.showBadEmailMessage = "Invalid Email Address", $scope.showSubmitFormButton = !0, $scope.showWaitingFormSubmission = !1, grecaptcha.reset(), !1;
            if ("rejected" == response.data) window.location.href = "/sdnnotice/";
            else {
                var dialogThankYou = "";
                "tdfs" == $scope.dialogType && (customGATracking.adRemarket($scope.domain, "TDFS Submitted", $scope.price), customGATracking.pageTrack("/tdfs-submission/", $scope.domain), customGATracking.eventTrack("TDFS", "Get Price - Click Submit", $scope.domain), customGATracking.adRemarket($scope.domain, "TDFS form", $scope.price)), "make-offer" == $scope.dialogType && (customGATracking.adRemarket($scope.domain, "Make Offer Submitted", $scope.price), customGATracking.adRemarket($scope.domain, "MO form", $scope.price), dialogThankYou = "&thanks-confirmation=make-offer", customGATracking.pageTrack("/mo-submission/", $scope.domain), document.getElementById("elqFormName").value = "MOForm"), "price-request" == $scope.dialogType && (customGATracking.adRemarket($scope.domain, "Price Request Submitted", $scope.price), dialogThankYou = "&thanks-confirmation=price-request", customGATracking.pageTrack("/pri-submission/", $scope.domain)), $scope.isBrokerageName ? document.location.search = document.location.search + "&msg=thank-you" : (document.getElementById("elqFwd").value = document.getElementById("elqFwd").value + "&firstName=" + $scope.visitor.first + "&domain=" + $scope.domain + dialogThankYou, document.getElementById("priContactForm").action = window.elqEndpoint, document.getElementById("elqCustomerGUID").value = document.getElementById("baseGUID").value, document.getElementById("domain").value = $scope.domain, document.getElementById("firstname").value = $scope.visitor.first, document.getElementById("lastname").value = $scope.visitor.last, document.getElementById("emailfield").value = $scope.visitor.email, "no" === $scope.validateEmail && (document.getElementById("emailconfirm").value = $scope.visitor.email), document.getElementById("phonefield").value = $scope.visitor.phone, document.getElementById("country").value = $scope.visitor.country, document.getElementById("traffic_id").value = $scope.traffic_id, document.getElementById("traffic_type").value = $scope.traffic_type, document.getElementById("utm_campaign").value = $scope.utm_campaign, document.getElementById("utm_content").value = $scope.utm_content, document.getElementById("utm_source").value = $scope.utm_source, document.getElementById("referrer_id").value = $scope.referrer_id, document.getElementById("utm_medium").value = $scope.utm_medium, document.forms.priContactForm.submit())
            }
        })), !1
    }
}]), formsControllers.controller("eBookFormController", ["$scope", "$http", function($scope, $http) {
    $scope.showValidationMessages = !1, $scope.showNonTLDEmailError = !1, $scope.submit = function(isFormValid) {
        $scope.showValidationMessages = !0;
        /\.[a-zA-Z0-9]+$/.exec($scope.visitor.email) || (isFormValid = !1, $scope.showNonTLDEmailError = !0), isFormValid && (customGATracking.eventTrack("Category Engagement", "Ebook Submit", 1), document.forms.eBookContactForm.submit())
    }
}]);
var indexController = angular.module("indexController", []);
indexController.controller("homePageController", ["$scope", "$http", "validDomain", "noSpecialChars", "validEmail", "validPhone", function($scope, $http, validDomain, noSpecialChars, validEmail, validPhone) {
    $scope.noSpecialChars = noSpecialChars, $scope.validEmail = validEmail, $scope.validPhone = validPhone, $scope.validDomain = validDomain, $scope.date = new Date, $scope.recentlySoldDomains = {}, $scope.numberOfDomains = 0, $scope.numberOfDomainsShown = 6, $scope.updateListSeconds = 2e3, $scope.showContainerHomeRecents = !0, $scope.currentNumberInList = 0, $scope.animation = "", $scope.recentlySoldLoaded = !1, customGATracking.eventTrack("BD Video", "Home Page", "Video Shown"), $http.get("/get-latest-sold").success(function(data, status, headers, config) {
        $scope.recentlySoldDomains = data, $scope.numberOfDomains = $scope.recentlySoldDomains.length, $scope.numberOfDomains < $scope.numberOfDomainsShown && ($scope.numberOfDomainsShown = $scope.numberOfDomains - 1), $scope.start = 1, $scope.end = $scope.start + $scope.numberOfDomainsShown, setInterval(function() {
            var range = [];
            $scope.position = $scope.start, $scope.recentlySoldLoaded = !0, $scope.currentNumberInList = 0;
            for (var i = $scope.start; i < $scope.end; i++) $scope.position >= $scope.numberOfDomains && ($scope.position = 1), $scope.currentNumberInList = $scope.currentNumberInList + 1, $scope.recentlySoldDomains[$scope.position].animate = "", 1 == $scope.currentNumberInList && ($scope.recentlySoldDomains[$scope.position].animate = "fade-out"), $scope.currentNumberInList == $scope.numberOfDomainsShown && ($scope.recentlySoldDomains[$scope.position].animate = "fade-in"), range.push($scope.recentlySoldDomains[$scope.position]), $scope.position = $scope.position + 1;
            $scope.domainsList = range, $scope.start = $scope.start + 1, $scope.start >= $scope.numberOfDomains && ($scope.start = 1), $scope.end = $scope.start + $scope.numberOfDomainsShown, $scope.$apply()
        }, $scope.updateListSeconds)
    }).error(function(data, status, headers, config) {
        $scope.showContainerHomeRecents = !1
    })
}]);
var modalControllers = angular.module("modalControllers", []);
modalControllers.controller("defaultModalController", ["$scope", "$http", "$sce", "validDomain", "noSpecialChars", "validEmail", "validPhone", function($scope, $http, $sce, validDomain, noSpecialChars, validEmail, validPhone) {
    $scope.noSpecialChars = noSpecialChars, $scope.validEmail = validEmail, $scope.validPhone = validPhone, $scope.validDomain = validDomain, $scope.modalData = {
        message: "",
        modalShown: !1,
        youtubeVideoSource: "",
        youtubeSourceIFrame: ""
    }, $scope.$on("handleShowModal", function(event, args) {
        $scope.modalOpenedByURL || ($scope.modalData.modalShown = !0, $scope.$emit("populateModalParams", args))
    }), $scope.toggleModal = function() {
        $scope.modalData.modalShown = !$scope.modalData.modalShown, $scope.trackGAEvent(), $scope.modalData.youtubeSourceIFrame = "", $scope.modalData.modalShown && ($scope.modalData.youtubeSourceIFrame = '<iframe style="width: 100%; min-height: 340px;" src="' + $scope.modalData.youtubeVideoSource + '" frameborder="0" allowfullscreen></iframe>')
    }, $scope.trackGAEvent = function() {
        $scope.modalData.modalShown && void 0 !== $scope.eventTracked.category && "" !== $scope.eventTracked.category && customGATracking.eventTrack($scope.eventTracked.category, $scope.eventTracked.action, $scope.eventTracked.value)
    }, $scope.trustYoutubeSrc = function(src) {
        return $sce.trustAsResourceUrl(src)
    }
}]), modalControllers.directive("youtubeVideoUrl", function() {
    return {
        restrict: "A",
        link: function(scope, elem, attr) {
            scope.modalData.youtubeVideoSource = attr.youtubeVideoUrl
        }
    }
}), modalControllers.directive("trackModalShownEvent", function() {
    return {
        restrict: "A",
        link: function(scope, elem, attr) {
            scope.eventTracked = JSON.parse(attr.trackModalShownEvent)
        }
    }
}), modalControllers.directive("showModalByUrlParams", function() {
    return {
        restrict: "A",
        link: function(scope, elem, attr) {
            scope.modalOpenedByURL = !1, "" !== attr.showModalByUrlParams && (scope.modalOpenedByURL = !0), -1 < window.location.search.indexOf(attr.showModalByUrlParams) && scope.toggleModal()
        }
    }
});
var searchPageControllers = angular.module("searchPageControllers", []);
searchPageControllers.controller("searchPageController", ["$scope", "$http", "validDomain", "noSpecialChars", "validEmail", "validPhone", function($scope, $http, validDomain, noSpecialChars, validEmail, validPhone) {
    if ($scope.noSpecialChars = noSpecialChars, $scope.validEmail = validEmail, $scope.validPhone = validPhone, $scope.validDomain = validDomain, $scope.domains = [], $scope.start = 0, $scope.resultsEnd = 10, $scope.pageLength = 10, $scope.sortKey = null, $scope.sortDir = null, $scope.pageLoaded = !1, $scope.isLastPage = !1, $scope.isfirstPage = !0, $scope.exactMatch = !1, $scope.totalResults = "", $scope.isLoadingResults = !0, $scope.showSearchResultsContainer = !1, $scope.showLoaderContainer = !1, $scope.showNoResultsMessage = !1, $scope.showExactMatchPriceRequest = !1, $scope.showExactMatchBuyNow = !1, $scope.showTopDirectMatchBuyNow = !1, $scope.showTopDirectMatchPriceRequest = !1, $scope.showSortByTextDropdown = !1, $scope.sortByText = "Relevancy", $scope.next = function() {
            $scope.isLastPage || ($scope.start = $scope.start + $scope.pageLength, window.startSearchOver = !1, $scope.getResults())
        }, $scope.previous = function() {
            $scope.isFirstPage || ($scope.start = $scope.start - $scope.pageLength, $scope.getResults())
        }, $scope.hideSearchFilterDropdowns = function() {
            $scope.$emit("hideSearchFilterDropdowns")
        }, $scope.changeSortDropdown = function(selectedValue) {
            $scope.relevancySelected = $scope.alphaAtoZSelected = $scope.alphaZtoASelected = $scope.priceLowSelected = $scope.priceHighSelected = "", "Relevancy" == selectedValue && ($scope.relevancySelected = "selected", $scope.sortKey = "quality", $scope.sortDir = "desc"), "Alphabetical A to Z" == selectedValue && ($scope.alphaAtoZSelected = "selected", $scope.sortKey = "alpha", $scope.sortDir = "asc"), "Alphabetical Z to A" == selectedValue && ($scope.alphaZtoASelected = "selected", $scope.sortKey = "alpha", $scope.sortDir = "desc"), "Price Low to High" == selectedValue && ($scope.priceLowSelected = "selected", $scope.sortKey = "price", $scope.sortDir = "asc"), "Price High to Low" == selectedValue && ($scope.priceHighSelected = "selected", $scope.sortKey = "price", $scope.sortDir = "desc"), $scope.sortByText = selectedValue, $scope.showSortByTextDropdown = !1, window.startSearchOver = !0, $scope.getResults()
        }, $scope.checkUndefined = function(value) {
            return void 0 === value ? "" : value
        }, $scope.trackBuyNowExactMatch = function() {
            if (void 0 !== $scope.exactMatch.sld && void 0 !== $scope.exactMatch.ext && void 0 !== $scope.exactMatch.price) {
                var action = "/addcart/" + $scope.exactMatch.sld + "." + $scope.exactMatch.ext + "?price=" + $scope.exactMatch.price;
                customGATracking.eventTrack("Search Engagement", "Buy Now - Top", "Exact Match", action)
            }
        }, $scope.trackBuyNowClick = function(sld, ext) {
            var domain = sld + "." + ext;
            customGATracking.eventTrack("Search Engagement", "Buy Now - Listed Results", domain)
        }, $scope.moreLikeThis = function(sld, ext) {
            window.searchedTerm = sld, window.tlds = "." + ext, window.startSearchOver = !0, $scope.searchTerm = $scope.checkUndefined(window.searchedTerm), $scope.getResults()
        }, $scope.getResults = function() {
            $scope.showSearchResultsContainer = !1, $scope.showLoaderContainer = !0, $scope.showNoResultsMessage = !1, $scope.isLoadingResults = !0, $scope.exactMatch = !1, $scope.showExactMatchPriceRequest = !1, $scope.showExactMatchBuyNow = !1, $scope.showTopDirectMatchBuyNow = !1, $scope.showTopDirectMatchPriceRequest = !1;
            var term = $scope.checkUndefined(window.searchedTerm);
            $scope.searchTerm = $scope.checkUndefined(window.searchedTerm);
            var contains = $scope.checkUndefined(window.contains),
                tlds = $scope.checkUndefined(window.tlds),
                excludeKeywords = $scope.checkUndefined(window.excludeKeywords),
                excludeHyphens = $scope.checkUndefined(window.excludeHyphens),
                excludeNumerals = $scope.checkUndefined(window.excludeNumerals),
                minPrice = $scope.checkUndefined(window.minPrice),
                maxPrice = $scope.checkUndefined(window.maxPrice),
                excludeNoPrice = $scope.checkUndefined(window.excludeNoPrice),
                category = $scope.checkUndefined(window.category),
                categoryName = $scope.checkUndefined(window.categorySelectedName);
            $scope.pageLoaded || ($scope.start = $scope.checkUndefined(window.start), $scope.sortKey = $scope.checkUndefined(window.sortKey), $scope.sortDir = $scope.checkUndefined(window.sortDir), $scope.pageLoaded = !0), "All Categories" == categoryName && (categoryName = ""), "" === (tlds = tlds.replace(/[,]$/, "")) && (tlds = ".com");
            var siteSearchURI = "/search/?q=" + term;
            siteSearchURI = (siteSearchURI = (siteSearchURI = (siteSearchURI = siteSearchURI + "&minPrice=" + minPrice) + "&maxPrice=" + maxPrice) + "&tlds=" + tlds) + "&primaryCategory=" + categoryName, customGATracking.pageTrack(siteSearchURI, "Search Results"), window.startSearchOver && (window.startSearchOver = !1, $scope.start = 0), $http({
                url: "/uni-search/",
                method: "POST",
                data: {
                    contains: contains,
                    term: term,
                    tlds: tlds,
                    excludeKeywords: excludeKeywords,
                    excludeHyphens: excludeHyphens,
                    excludeNumerals: excludeNumerals,
                    minPrice: minPrice,
                    maxPrice: maxPrice,
                    excludeNoPrice: excludeNoPrice,
                    category: category,
                    categoryName: categoryName,
                    start: $scope.start,
                    sortKey: $scope.sortKey,
                    sortDir: $scope.sortDir
                }
            }).then(function(response) {
                $scope.domains = response.data, $scope.totalResults = $scope.domains.totalResults, $scope.resultsEnd = $scope.start + $scope.pageLength, $scope.resultsEnd > $scope.totalResults && ($scope.resultsEnd = $scope.totalResults), $scope.isLoadingResults = !1, $scope.showNoResultsMessage = !1, $scope.exactMatch = response.data.exact.shift();
                var hasExactMatch = !1;
                void 0 !== $scope.exactMatch && (hasExactMatch = !0);
                var resultsForPage = $scope.pageLength;
                hasExactMatch && resultsForPage--, $scope.isLastPage = !1, $scope.isFirstPage = !1, response.data.terms.length < resultsForPage && ($scope.isLastPage = !0), 0 === $scope.start && ($scope.isFirstPage = !0), 0 === response.data.terms.length && ($scope.showNoResultsMessage = !0), $scope.showSearchResultsContainer = !0, $scope.showLoaderContainer = !1, hasExactMatch && ("" === $scope.exactMatch.price ? $scope.showTopDirectMatchPriceRequest = !0 : $scope.showTopDirectMatchBuyNow = !0, 0 === $scope.start && ("" === $scope.exactMatch.price ? $scope.showExactMatchPriceRequest = !0 : $scope.showExactMatchBuyNow = !0), $scope.showNoResultsMessage = !1)
            })
        }, $scope.searchTerm = $scope.checkUndefined(window.searchedTerm), $scope.openRequestLeaderboardModal = function(type, sld, ext, price) {
            customGATracking.eventTrack("Search Engagement", "Price Request - Leader Board", sld + "." + ext), $scope.$emit("showModal", {
                type: type,
                sld: sld,
                ext: ext,
                price: price
            })
        }, $scope.openRequestModal = function(type, sld, ext, price) {
            $scope.$emit("showModal", {
                type: type,
                sld: sld,
                ext: ext,
                price: price
            })
        }, $scope.openRequestModalByURL = function(domain) {
            var domainDetails = domain.split("."),
                domainTerm = domainDetails[0],
                domainTLD = domainDetails[1];
            void 0 !== domainTerm && void 0 !== domainTLD && $http({
                url: "/uni-search/",
                method: "POST",
                data: {
                    term: domainTerm,
                    tlds: domainTLD
                }
            }).then(function(response) {
                $scope.exactMatch = response.data.exact.shift(), void 0 !== $scope.exactMatch && ("" === $scope.exactMatch.price ? $scope.openRequestModal("price-request", domainTerm, domainTLD, $scope.exactMatch.price) : $scope.openRequestModal("make-offer", domainTerm, domainTLD, $scope.exactMatch.price))
            })
        }, $scope.getQueryParam = function(param) {
            var result = window.location.search.match(new RegExp("(\\?|&)" + param + "(\\[\\])?=([^&]*)"));
            return !!result && result[3]
        }, -1 < window.location.href.indexOf("action=inquire")) {
        var inquiredDomain = $scope.getQueryParam("domain"),
            checkThankYou = $scope.getQueryParam("msg");
        "" !== inquiredDomain && "thank-you" != checkThankYou && $scope.openRequestModalByURL(inquiredDomain)
    }
}]), searchPageControllers.controller("pickListController", ["$scope", "$http", function($scope, $http) {
    $scope.panelOpened = "panelOpened", $scope.togglePanel = function() {
        "" == $scope.panelOpened ? $scope.panelOpened = "panelOpened" : $scope.panelOpened = ""
    }, $scope.modalBackground = !1, $scope.backgroundFill = function() {
        $scope.modalBackground = !$scope.modalBackground
    }, $scope.closeModal = function() {
        $scope.modalConfirm = !1, $scope.modalBackground = !1
    }, $scope.modalConfirm = !1, $scope.showValidationMessages = !1, $scope.visitor = {}, $scope.continueConfirm = function(isFormValid) {
        $http({
            url: "/pick-list-submit/",
            method: "POST",
            data: {
                id: $scope.pickListId
            }
        }).then(function(response) {
            $scope.modalConfirm = !0
        })
    }, $scope.buyNowFromCart = function() {
        $http({
            url: "/picklist-create-cart/?pickListId=" + $scope.pickListId,
            method: "GET"
        }).then(function(url) {
            window.location.href = url.data
        })
    }, $scope.continueBrowsing = function() {
        $scope.modalConfirm = !1, $scope.modalBackground = !$scope.modalBackground
    }, $scope.domains = [], $scope.start = 0, $scope.pageLength = 10, $scope.sortKey = "price", $scope.sortDir = "asc", $scope.pageLoaded = !1, $scope.isLastPage = !1, $scope.isfirstPage = !0, $scope.exactMatch = !1, $scope.showSearchResultsContainer = !1, $scope.showLoaderContainer = !1, $scope.showNoResultsMessage = !1, $scope.showExactMatchPriceRequest = !1, $scope.showExactMatchBuyNow = !1, $scope.showTopDirectMatchBuyNow = !1, $scope.showTopDirectMatchPriceRequest = !1, $scope.showSortByTextDropdown = !1, $scope.sortByText = "Relevancy", $scope.next = function() {
        $scope.isLastPage || ($scope.start = $scope.start + $scope.pageLength, window.startSearchOver = !1, $scope.getResults())
    }, $scope.previous = function() {
        $scope.isFirstPage || ($scope.start = $scope.start - $scope.pageLength, $scope.getResults())
    }, $scope.hideSearchFilterDropdowns = function() {
        $scope.$emit("hideSearchFilterDropdowns")
    }, $scope.toggleSort = function(selectedSort) {
        if ("alpha" == selectedSort) {
            if ("desc" == $scope.sortDir) return $scope.changeSorting("Alphabetical A to Z"), !0;
            if ("asc" == $scope.sortDir || null == $scope.sortDir) return $scope.changeSorting("Alphabetical Z to A"), !0
        } else if ("price" == selectedSort) {
            if ("desc" == $scope.sortDir) return $scope.changeSorting("Price Low to High"), !0;
            if ("asc" == $scope.sortDir || null == $scope.sortDir) return $scope.changeSorting("Price High to Low"), !0
        } else "reset" == selectedSort && $scope.changeSorting("Relevancy")
    }, $scope.changeSorting = function(selectedValue) {
        $scope.relevancySelected = $scope.alphaAtoZSelected = $scope.alphaZtoASelected = $scope.priceLowSelected = $scope.priceHighSelected = "", "Relevancy" == selectedValue && ($scope.relevancySelected = "selected", $scope.sortKey = "quality", $scope.sortDir = "desc"), "Alphabetical A to Z" == selectedValue && ($scope.alphaAtoZSelected = "selected", $scope.sortKey = "alpha", $scope.sortDir = "asc"), "Alphabetical Z to A" == selectedValue && ($scope.alphaZtoASelected = "selected", $scope.sortKey = "alpha", $scope.sortDir = "desc"), "Price Low to High" == selectedValue && ($scope.priceLowSelected = "selected", $scope.sortKey = "price", $scope.sortDir = "asc"), "Price High to Low" == selectedValue && ($scope.priceHighSelected = "selected", $scope.sortKey = "price", $scope.sortDir = "desc"), $scope.sortByText = selectedValue, window.startSearchOver = !0, $scope.getResults()
    }, $scope.checkUndefined = function(value) {
        return void 0 === value ? "" : value
    }, $scope.isPageLoaded = !1, $scope.getResults = function() {
        $scope.showSearchResultsContainer = !1, $scope.showLoaderContainer = !0, $scope.showNoResultsMessage = !1, $scope.showSidePopout = !1, $scope.exactMatch = !1, $scope.showExactMatchPriceRequest = !1, $scope.showExactMatchBuyNow = !1, $scope.showTopDirectMatchBuyNow = !1, $scope.showTopDirectMatchPriceRequest = !1;
        var term = $scope.checkUndefined(window.searchedTerm);
        $scope.searchTerm = $scope.checkUndefined(window.searchedTerm);
        var contains = $scope.checkUndefined(window.contains),
            tlds = $scope.checkUndefined(window.tlds),
            excludeKeywords = $scope.checkUndefined(window.excludeKeywords),
            excludeHyphens = $scope.checkUndefined(window.excludeHyphens),
            excludeNumerals = $scope.checkUndefined(window.excludeNumerals),
            minPrice = $scope.checkUndefined(window.minPrice),
            maxPrice = $scope.checkUndefined(window.maxPrice),
            excludeNoPrice = $scope.checkUndefined(window.excludeNoPrice),
            category = $scope.checkUndefined(window.category),
            categoryName = $scope.checkUndefined(window.categorySelectedName);
        $scope.pageLoaded || ($scope.start = $scope.checkUndefined(window.start), $scope.pageLoaded = !0), "All Categories" == categoryName && (categoryName = ""), "" === (tlds = tlds.replace(/[,]$/, "")) && (tlds = ".com");
        var siteSearchURI = "/pick-list-search/?q=" + term;
        siteSearchURI = (siteSearchURI = (siteSearchURI = (siteSearchURI = siteSearchURI + "&minPrice=" + minPrice) + "&maxPrice=" + maxPrice) + "&tlds=" + tlds) + "&primaryCategory=" + categoryName, customGATracking.pageTrack(siteSearchURI, "Search Results"), window.startSearchOver && (window.startSearchOver = !1, $scope.start = 0), $http({
            url: "/uni-search/",
            method: "POST",
            data: {
                contains: contains,
                term: term,
                tlds: tlds,
                excludeKeywords: excludeKeywords,
                excludeHyphens: excludeHyphens,
                excludeNumerals: excludeNumerals,
                minPrice: minPrice,
                maxPrice: maxPrice,
                excludeNoPrice: excludeNoPrice,
                category: category,
                categoryName: categoryName,
                start: $scope.start,
                sortKey: $scope.sortKey,
                sortDir: $scope.sortDir,
                picklist: $scope.pickListId
            }
        }).then(function(response) {
            $scope.domains = response.data, angular.forEach($scope.domains.terms, function(domainInSearch, key) {
                angular.forEach($scope.selectDomains, function(domain, key) {
                    domainInSearch.sld.toLowerCase() + "." + domainInSearch.ext.toLowerCase() == domain.toLowerCase() && (domainInSearch.isChecked = !0)
                })
            }), $scope.showNoResultsMessage = !1;
            var resultsForPage = $scope.pageLength;
            $scope.isLastPage = !1, $scope.isFirstPage = !1, response.data.terms.length < resultsForPage && ($scope.isLastPage = !0), 0 === $scope.start && ($scope.isFirstPage = !0), 0 === response.data.terms.length && ($scope.showNoResultsMessage = !0), $scope.showSearchResultsContainer = !0, $scope.showLoaderContainer = !1, $scope.isPageLoaded || ($scope.isPageLoaded = !0, $scope.getPickListStatus())
        })
    }, $scope.searchTerm = $scope.checkUndefined(window.searchedTerm), $scope.resetTotals = function() {
        $scope.totalSelectedDomains = 0, $scope.totalOriginalPrice = 0, $scope.totalAverageDiscount = 0, $scope.totalDiscountPrice = 0
    }, $scope.resetTotals(), $scope.loadingTotals = !1, $scope.selectDomains = [], $scope.addDomain = function(domain, isBulkRemove) {
        var addDomain = !0;
        domain = domain.toLowerCase(), angular.forEach($scope.selectDomains, function(dealDomains, key) {
            dealDomains == domain && (addDomain = !1)
        }), addDomain && ($scope.selectDomains.push(domain), $http({
            url: "/pick-list-add-remove-by-id/" + $scope.pickListId + "/select",
            method: "POST",
            data: {
                domain: domain
            }
        }).then(function(response) {
            $scope.updateTotals(response.data), isBulkRemove && ($scope.addUpdatingBulkCount = $scope.addUpdatingBulkCount - 1)
        }))
    }, $scope.contains = function(arr, element) {
        for (var i = 0; i < arr.length; i++)
            if (arr[i] === element) return !0;
        return !1
    }, $scope.removeDomain = function(domainToRemove, isBulkRemove) {
        $scope.selectDomainsNew = [], domainToRemove = domainToRemove.toLowerCase(), angular.forEach($scope.selectDomains, function(domain, key) {
            domain != domainToRemove ? $scope.selectDomainsNew.push(domain) : angular.forEach($scope.domains.terms, function(dealDomain, key) {
                domainToRemove == dealDomain.sld.toLowerCase() + "." + dealDomain.ext.toLowerCase() && (dealDomain.isChecked = !1)
            })
        }), $scope.selectDomains = $scope.selectDomainsNew, $http({
            url: "/pick-list-add-remove-by-id/" + $scope.pickListId + "/unselect",
            method: "POST",
            data: {
                domain: domainToRemove
            }
        }).then(function(response) {
            $scope.updateTotals(response.data), isBulkRemove && ($scope.removeUpdatingBulkCount = $scope.removeUpdatingBulkCount - 1)
        })
    }, $scope.getSelectedDomains = function() {
        var domainNamesSelected = [];
        return angular.forEach($scope.selectDomains, function(domain, key) {
            domainNamesSelected.push(domain)
        }), domainNamesSelected
    }, $scope.toggleDomain = function(domain) {
        var domainToggled = domain.sld.toLowerCase() + "." + domain.ext.toLowerCase();
        $scope.contains($scope.selectDomains, domainToggled) ? (domain.isChecked = !1, $scope.removeDomain(domainToggled)) : ($scope.addDomain(domainToggled), $scope.getSelectedDomains(), domain.isChecked = !0)
    }, $scope.updateTotals = function(response) {
        $scope.resetTotals(), response.selected && ($scope.totalSelectedDomains = parseInt(response.selected.length)), response.selected_domains && ($scope.totalSelectedDomains = parseInt(response.selected_domains.length)), $scope.totalOriginalPrice = parseInt(response.total_selected_price), $scope.totalDiscountPrice = parseInt(response.total_selected_sale_price), $scope.totalAverageDiscount = 100 - $scope.totalDiscountPrice / $scope.totalOriginalPrice * 100
    }, $scope.addUpdatingBulkCount = 0, $scope.removeUpdatingBulkCount = 0, $scope.selectAllForPage = function(option) {
        $scope.addUpdatingBulkCount = 0, $scope.removeUpdatingBulkCount = 10, angular.forEach($scope.domains.terms, function(dealDomain, key) {
            dealDomain.isChecked || ($scope.addUpdatingBulkCount = $scope.addUpdatingBulkCount + 1)
        }), "yes" == option ? angular.forEach($scope.domains.terms, function(dealDomain, key) {
            $scope.addDomain(dealDomain.sld + "." + dealDomain.ext, !0), dealDomain.isChecked = !0
        }) : angular.forEach($scope.domains.terms, function(dealDomain, key) {
            $scope.removeDomain(dealDomain.sld + "." + dealDomain.ext, !0), dealDomain.isChecked = !1
        })
    }, $scope.inquiryErrorMessage = "", $scope.inquireNow = function() {
        $scope.inquiryErrorMessage = "", $scope.totalSelectedDomains ? ($scope.backgroundFill(), $scope.continueConfirm(), $scope.showSidePopout = !$scope.showSidePopout) : $scope.inquiryErrorMessage = "Please choose domains from the list"
    }, $scope.getPickListStatus = function() {
        $http({
            url: "/pick-list-selections-by-id/" + $scope.pickListId + "/select",
            method: "GET"
        }).then(function(response) {
            $scope.selectDomains = response.data.selected_domains, $scope.updateTotals(response.data), angular.forEach($scope.domains.terms, function(domainInSearch, key) {
                angular.forEach($scope.selectDomains, function(domain, key) {
                    domainInSearch.sld.toLowerCase() + "." + domainInSearch.ext.toLowerCase() == domain.toLowerCase() && (domainInSearch.isChecked = !0)
                })
            })
        })
    }, $scope.pickListId = 0, $scope.setPickListId = function(pickListId) {
        $scope.pickListId = pickListId
    }, $scope.setAddToCartLimit = function(domainsLimit) {
        $scope.addToCartLimit = domainsLimit
    }
}]);
var seoControllers = angular.module("seoControllers", []);
seoControllers.controller("categoriesHomePageController", ["$scope", "$http", "validDomain", "noSpecialChars", "validEmail", "validPhone", function($scope, $http, validDomain, noSpecialChars, validEmail, validPhone) {
    $scope.noSpecialChars = noSpecialChars, $scope.validEmail = validEmail, $scope.validPhone = validPhone, $scope.validDomain = validDomain, $scope.visitor = {}, $scope.isExpanded = !1, $scope.showForm = !1, $scope.toggleEBookForm = function() {
        $scope.showForm = !$scope.showForm, $scope.showForm ? ($scope.isExpanded = !0, customGATracking.eventTrack("Category Engagement", "Ebook Form", 1)) : $scope.isExpanded = !1
    }
}]), seoControllers.controller("categoryExampleDomainsListController", ["$scope", "$http", "validDomain", "noSpecialChars", "validEmail", "validPhone", function($scope, $http, validDomain, noSpecialChars, validEmail, validPhone) {
    $scope.noSpecialChars = noSpecialChars.toString(), $scope.validEmail = validEmail.toString(), $scope.validPhone = validPhone.toString(), $scope.validDomain = validDomain.toString(), $scope.domains = {}, $scope.categoryDomainsLoaded = !1, $scope.trackBuyNowClick = function(sld, ext) {
        var domain = sld + "." + ext;
        customGATracking.eventTrack("Category Page Engagement", "Buy Now - Listed Results", domain)
    }, $scope.openRequestModal = function(type, sld, ext, price) {
        $scope.$emit("showModal", {
            type: type,
            sld: sld,
            ext: ext,
            price: price
        })
    }, $scope.init = function(categoryId) {
        $http({
            url: "/get-example-domains-by-category/" + categoryId,
            method: "GET"
        }).then(function(response) {
            $scope.categoryDomainsLoaded = !0, $scope.domains = response.data
        })
    }
}]);
var sitePagesControllers = angular.module("sitePagesControllers", []);
sitePagesControllers.controller("contactPageController", ["$scope", "$http", "CountryDropdownService", "validDomain", "noSpecialChars", "validEmail", "validPhone", function($scope, $http, CountryDropdownService, validDomain, noSpecialChars, validEmail, validPhone) {
    $scope.noSpecialChars = noSpecialChars, $scope.validEmail = validEmail, $scope.validPhone = validPhone, $scope.validDomain = validDomain, $scope.visitor = {}, $scope.correctCaptchaSelected = !0, $scope.visitor.buyDomain = "", $scope.showSubmitFormButton = !0, $scope.showWaitingFormSubmission = !1, $scope.visitor.messageType = "general-feedback", $scope.showQuestionDomainPurchased = !1, $scope.visitor.country = window.country, CountryDropdownService.selectUserDefaultCountry($scope, "select-country-three"), $scope.changeCountry = function() {
        CountryDropdownService.changeCountry($scope)
    }, $scope.resetForm = function() {
        $scope.domainInterested = !1, $scope.domainChoices = !1, $scope.domainBuying = !1, $scope.domainPurchased = !1, $scope.domainTransferring = !1
    }, $scope.radioSelected = function(selectedValue) {
        $scope.visitor.buying = "", $scope.visitor.purchased = "", $scope.domainPurchased = "buy-domain" == selectedValue ? !($scope.domainBuying = !0) : !($scope.domainBuying = !1), $scope.showQuestionDomainPurchased = !0
    }, $scope.changeInquiry = function(inquiry) {
        switch ($scope.inquiryText = $scope.inquiryTextMap[inquiry], $scope.resetForm(), inquiry) {
            case "general-feedback":
                $scope.domainInterested = !0;
                break;
            case "domain-purchase":
                $scope.domainChoices = !0, $scope.domainBuying = !0, $scope.radioSelected("buy-domain"), $scope.visitor.buyDomain = "buy-domain";
                break;
            case "domain-transfer":
                $scope.domainTransferring = !0
        }
    }, $scope.inquiryTextMap = {
        "general-feedback": "I have general feedback",
        "domain-purchase": "I have a question about a domain purchase",
        "contact-sales": "I'd like to contact sales or a domain expert",
        "domain-transfer": "I need help with transferring a domain"
    }, $scope.resetForm(), $scope.domainInterested = !0, $scope.inquiryText = $scope.inquiryTextMap["general-feedback"], $scope.showValidationMessages = !1, $scope.submit = function(isFormValid) {
        $scope.showValidationMessages = !0;
        var currentErrors = [];
        angular.forEach($scope.contactfrm.$error.required, function(value, key) {
            this.push(value.$name)
        }, currentErrors), "domainNameBuying" == currentErrors[0] && $scope.domainPurchased && (isFormValid = !0), "domainNamePurchased" == currentErrors[0] && $scope.domainBuying && (isFormValid = !0);
        var currentPatternErrors = [];
        if (angular.forEach($scope.contactfrm.$error.pattern, function(value, key) {
                this.push(value.$name)
            }, currentPatternErrors), 0 < currentPatternErrors.length) return document.querySelector(".focus-invalid.ng-invalid").focus(), !1;
        if ($scope.contactfrm.phonefield.$error.required || $scope.contactfrm.phonefield.$error.pattern || $scope.contactfrm.phonefield.$error.minlength || $scope.contactfrm.phonefield.$error.maxlength) return document.querySelector(".focus-invalid.ng-invalid").focus(), !1;
        "domain-purchase" != $scope.visitor.messageType && 2 == currentErrors.length && "domainNameBuying" == currentErrors[0] && "domainNamePurchased" == currentErrors[1] && (isFormValid = !0), "domain-purchase" == $scope.visitor.messageType && 1 == currentErrors.length && ("domainNameBuying" == currentErrors[0] && "" !== $scope.visitor.buying && (isFormValid = !0), "domainNamePurchased" == currentErrors[0] && "" !== $scope.visitor.purchased && (isFormValid = !0)), "domain-purchase" === $scope.visitor.messageType && ($scope.showQuestionDomainPurchased = !0, $scope.visitor.buyDomain = "buy-domain", $scope.domainChoices = !0), $scope.showNonTLDEmailError = !1;
        return /\.[a-zA-Z0-9]+$/.exec($scope.visitor.email) || (isFormValid = !1, $scope.showNonTLDEmailError = !0), $scope.showNonMatchingEmailError = !1, $scope.visitor.emailconfirmed != $scope.visitor.email && (isFormValid = !1, $scope.showNonMatchingEmailError = !0), isFormValid ? (void 0 === $scope.visitor.country && ($scope.visitor.country = window.country), customGATracking.pageTrack("/contact-submission/", "Contact Form Submitted MobilePRI"), $scope.correctCaptchaSelected = !0, $scope.showSubmitFormButton = !1, $scope.showWaitingFormSubmission = !0, $http({
            url: "/contact-customer-service/",
            method: "POST",
            data: {
                "choose-buy-domain": $scope.visitor.buyDomain,
                "contact-us-company-name": $scope.visitor.companyName,
                "contact-us-email": $scope.visitor.email,
                "contact-us-first-name": $scope.visitor.first,
                "contact-us-last-name": $scope.visitor.last,
                "contact-us-phone-number": $scope.visitor.phone,
                "domain-name-buying": $scope.visitor.buying,
                "domain-name-expert-buying": "",
                "domain-name-expert-selling": "",
                "domain-name-interested": $scope.visitor.domainNameInterested,
                "domain-name-portfolio-sell": "",
                "domain-name-purchased": $scope.visitor.purchased,
                "domain-name-register-hosting": "",
                "domain-name-remove": "",
                "domain-name-transfer": $scope.visitor.transfer,
                "message-contact": $scope.visitor.message,
                "select-country-three": $scope.visitor.country,
                "select-message-type": $scope.visitor.messageType,
                subject: $scope.visitor.subject,
                "g-recaptcha-response": window.grecaptchaValue
            }
        }).then(function(response) {
            if ("bad captcha" == response.data) return $scope.correctCaptchaSelected = !1, $scope.showSubmitFormButton = !0, $scope.showWaitingFormSubmission = !1, document.querySelector(".focus-invalid.ng-invalid").focus(), !1;
            "rejected" == response.data ? window.location.href = "/sdnnotice/" : "success" == response.data.result && (customGATracking.pageTrack("/contact-complete/", "Contact Form Submitted"), customGATracking.adRemarket($scope.domain, "Contact Form Submitted", ""), document.forms.contactfrm.submit())
        })) : document.querySelector(".focus-invalid.ng-invalid").focus(), !1
    }
}]), sitePagesControllers.controller("faqsPageController", ["$scope", "$http", function($scope, $http) {}]), sitePagesControllers.controller("bulkDealController", ["$scope", "$http", function($scope, $http) {
    $scope.isActive = !1, $scope.activate = function() {
        $scope.isActive = !$scope.isActive
    }, $scope.bulkDealDomains = [{
        domain: "KensCleaning.com",
        price: 1588,
        discount: 33
    }, {
        domain: "KensingtonClassic.com",
        price: 2388,
        discount: 5
    }, {
        domain: "KensPhotography.com",
        price: 2288,
        discount: 33
    }, {
        domain: "KensBbq.com",
        price: 2288,
        discount: 25
    }, {
        domain: "KenSweet.com",
        price: 2288,
        discount: 33
    }, {
        domain: "KennethsElectrical.com",
        price: 588,
        discount: 10
    }, {
        domain: "KennethCarter.com",
        price: 888,
        discount: 20
    }, {
        domain: "KennethJackson.com",
        price: 2088,
        discount: 15
    }, {
        domain: "KennethK.com",
        price: 4588,
        discount: 5
    }, {
        domain: "KennethMiller.com",
        price: 1100,
        discount: 10
    }, {
        domain: "KennethNelson.com",
        price: 2488,
        discount: 20
    }, {
        domain: "KensWorth.com",
        price: 4288,
        discount: 15
    }, {
        domain: "KensingtonMt.com",
        price: 588,
        discount: 5
    }, {
        domain: "KensingtonDentist.com",
        price: 4688,
        discount: 15
    }, {
        domain: "KensApplianceRepair.com",
        price: 1688,
        discount: 33
    }], $scope.resetTotals = function() {
        $scope.totalSelectedDomains = 0, $scope.totalOriginalPrice = 0, $scope.totalAverageDiscount = 0, $scope.totalDiscountPrice = 0
    }, $scope.resetTotals(), $scope.loadingTotals = !1, $scope.selectDomains = [], $scope.updateTotals = function() {
        $scope.loadingTotals = !0, $scope.resetTotals(), $scope.selectDomains = [], angular.forEach($scope.bulkDealDomains, function(domain, key) {
            selectedDomain = {}, domain.isChecked && (selectedDomain.domain = domain.domain, $scope.selectDomains.push(selectedDomain), $scope.totalSelectedDomains = $scope.totalSelectedDomains + 1, $scope.totalOriginalPrice = $scope.totalOriginalPrice + domain.price, $scope.totalDiscountPrice = $scope.totalDiscountPrice + (domain.price - domain.price * domain.discount / 100), $scope.totalAverageDiscount = ($scope.totalOriginalPrice - $scope.totalDiscountPrice) / $scope.totalOriginalPrice * 100)
        }), $scope.loadingTotals = !0
    }, $scope.selectAllForPage = function(option) {
        var isChecked = !1;
        "yes" == option && (isChecked = !0), angular.forEach($scope.bulkDealDomains, function(dealDomains, key) {
            dealDomains.isChecked = isChecked
        }), $scope.resetTotals(), $scope.updateTotals()
    }, $scope.removeDomain = function(domainToRemove) {
        $scope.selectDomainsNew = [], angular.forEach($scope.selectDomains, function(domain, key) {
            domain.domain != domainToRemove ? $scope.selectDomainsNew.push(domain) : angular.forEach($scope.bulkDealDomains, function(dealDomains, key) {
                dealDomains.domain == domainToRemove && (dealDomains.isChecked = !1)
            })
        }), $scope.selectDomains = $scope.selectDomainsNew, $scope.updateTotals()
    }, $scope.showModalInquiry = !1, $scope.inquiryErrorMessage = "", $scope.first = "Kevin", $scope.inquireNow = function() {
        $scope.inquiryErrorMessage = "", $scope.totalSelectedDomains ? ($scope.showModalInquiry = !0, $scope.showSidePopout = !$scope.showSidePopout) : $scope.inquiryErrorMessage = "Please choose domains from the list"
    }
}]), sitePagesControllers.controller("policyController", ["$scope", "$http", function($scope, $http) {
    switch ($scope.privacySelected = $scope.dataSelected = $scope.billingSelected = $scope.saleSelected = $scope.useSelected = $scope.trademarkSelected = $scope.affiliateSelected = !1, window.location.pathname) {
        case "/buydomains-policies/":
            $scope.privacySelected = !0;
            break;
        case "/buydomains-data-request-policy/":
            $scope.dataSelected = !0;
            break;
        case "/buydomains-billing/":
            $scope.billingSelected = !0;
            break;
        case "/buydomains-terms-of-sale/":
            $scope.saleSelected = !0;
            break;
        case "/buydomains-terms-of-use/":
            $scope.useSelected = !0;
            break;
        case "/buydomains-trademark-complaint-procedure/":
            $scope.trademarkSelected = !0;
            break;
        case "/buydomains-affiliate-disclosure/":
            $scope.affiliateSelected = !0
    }
}]), MainApp.directive("bulkDealSearchBar", function() {
    return {
        restrict: "E",
        templateUrl: "/browser/js/views/bulkDealSearchBar.html",
        scope: {
            searchFunction: "&",
            searchTerm: "@"
        },
        controller: ["$scope", "$http", function($scope, $http) {
            window.tlds ? (-1 == window.tlds.indexOf(",") ? $scope.TLDsChosenArray = [window.tlds] : $scope.TLDsChosenArray = window.tlds.split(","), $scope.TLDsChosen = window.tlds) : ($scope.TLDsChosenArray = [".com"], $scope.TLDsChosen = ".com");
            var selected = $scope.TLDsChosenArray;
            $scope.allTlds = [], $http.get("/tld-list/").then(function(result) {
                var tlds = result.data,
                    tldsWithStatus = [];
                for (i = 0; i < tlds.length; i++) {
                    var arrayElement = {
                        name: tlds[i],
                        selected: 0 <= selected.indexOf(tlds[i])
                    };
                    tldsWithStatus.push(arrayElement)
                }
                $scope.allTlds = tldsWithStatus
            }), $scope.$watch("allTlds|filter:{selected:true}", function(nv) {
                $scope.TLDsChosenArray = nv.map(function(tld) {
                    return tld.name
                }), $scope.TLDsChosen = nv.map(function(tld) {
                    return tld.name
                }).join(",")
            }, !0), $scope.searchTerm = window.searchedTerm, $scope.pageLoaded = !1, $scope.textBoxClass = "search-field", $scope.containsDropdownValue = "Contains", $scope.firstrun = !0, $scope.showSearchTermMask = !0, $scope.TLDsChosenDisplay = ".com", $scope.newSearch = function() {
                window.searchedTerm = $scope.searchTerm, window.contains = $scope.containsDropdownValue;
                /[^A-Za-z0-9_\-\. ]/.test($scope.searchTerm);
                if ($scope.searchBoxMessage = "", $scope.textBoxClass = "search-field", $scope.pageLoaded ? window.tlds = $scope.TLDsChosen : ($scope.preSelectedTLDS(), $scope.updateTLDContainerTitle(), $scope.pageLoaded = !0), window.excludeKeywords = $scope.excludeKeywords, window.excludeHyphens = $scope.excludeHyphens, window.excludeNumerals = $scope.excludeNumerals, parseInt($scope.minPrice) >= parseInt($scope.maxPrice)) {
                    var minPriceTmp = $scope.minPrice;
                    $scope.minPrice = $scope.maxPrice, $scope.maxPrice = minPriceTmp
                }
                window.minPrice = $scope.minPrice, window.maxPrice = $scope.maxPrice, window.excludeNoPrice = $scope.excludeNoPrice, window.startSearchOver = !0, $scope.firstrun || customGATracking.eventTrack("Search Initiation Bulk Deals", "Search in Search", $scope.searchTerm), $scope.searchFunction(), $scope.firstrun = !1
            }, $scope.changeContainsDropdown = function(containsValueSelected) {
                $scope.containsSelected = $scope.startsSelected = $scope.endsSelected = "", "Contains" == containsValueSelected && ($scope.containsSelected = "selected"), "Starts with" == containsValueSelected && ($scope.startsSelected = "selected"), "Ends with" == containsValueSelected && ($scope.endsSelected = "selected"), $scope.containsDropdownValue = containsValueSelected, $scope.newSearch()
            }, $scope.captureEnterKey = function(keyEvent) {
                13 === keyEvent.which && $scope.newSearch()
            }, $scope.updateTLDContainerTitle = function() {
                1 < $scope.TLDsChosenArray.length ? $scope.TLDsChosenDisplay = "..." : ("" === $scope.TLDsChosen && ($scope.TLDsChosen = ".com"), $scope.TLDsChosenDisplay = $scope.TLDsChosen)
            }, $scope.selectTLD = function(tldName) {}, $scope.updateContainerState = function(container) {
                "TLDContainerClass" == container && ($scope.TLDsChosen ? ($scope.updateTLDContainerTitle(), $scope.TLDContainerClass = "activated", customGATracking.eventTrack("Search Refinement Bulk Deals", "TLDs - " + $scope.TLDsChosen, "Selected")) : ($scope.TLDsChosenDisplay = ".com", $scope.TLDContainerClass = ""), $scope.newSearch()), "excludeContainerClass" == container && ($scope.excludeHyphens || $scope.excludeNumerals ? ($scope.excludeContainerClass = "activated", customGATracking.eventTrack("Search Refinement Bulk Deals", "Exclude Hyphens", "true")) : $scope.excludeContainerClass = ""), "priceContainerClass" == container && ($scope.excludeNoPrice ? ($scope.priceContainerClass = "activated", customGATracking.eventTrack("Search Refinement Bulk Deals", "Exclude No Price", "true")) : $scope.priceContainerClass = ""), window.startSearchOver = !0
            }, $scope.preSelectedTLDS = function() {
                var preselectedTLDs = window.tlds.replace(/[,]$/, "");
                preselectedTLDs.split(",");
                $scope.com = !1, preselectedTLDs && ".com" != preselectedTLDs && ($scope.TLDContainerClass = "activated")
            }, $scope.getTLDsChosenList = function() {
                return $scope.TLDsChosen
            }, $scope.stringToArray = function(inputString) {
                return inputString.split(",")
            }, $scope.trackSearchRefinement = function(title, type) {
                var trackValue = "";
                "PriceLow" == type && (trackValue = $scope.minPrice), "PriceHigh" == type && (trackValue = $scope.maxPrice), customGATracking.eventTrack("Bulk Deals " + title, type, trackValue)
            }, $scope.clearForm = function() {
                angular.forEach($scope.allTlds, function(tld) {
                    ".com" == tld.name ? tld.selected = !0 : tld.selected = !1
                }), $scope.containsDropdownValue = "Contains", $scope.containsSelected = "selected", $scope.startsSelected = $scope.endsSelected = "", $scope.excludeHyphens = !1, $scope.excludeNumerals = !1, $scope.excludeNoPrice = !1, $scope.priceContainerClass = "", $scope.TLDContainerClass = "", $scope.excludeContainerClass = "", $scope.TLDsChosen = "", $scope.TLDsChosenDisplay = ".com", $scope.minPrice = "0", $scope.maxPrice = "max", customGATracking.eventTrack("Search Refinement Bulk Deals", "Clear all", "true"), $scope.newSearch()
            }, $scope.$watch("allTlds", function(allTldsChanged) {
                if ($scope.allTlds.length) {
                    var validTLDs = [];
                    for (i = 0; i < $scope.allTlds.length; i++) validTLDs[i] = $scope.allTlds[i].name;
                    usersTLDs = window.tlds.split(","), window.tlds = "", angular.forEach(usersTLDs, function(userTLD) {
                        -1 < validTLDs.indexOf(userTLD) && (window.tlds = window.tlds + userTLD + ",")
                    }), $scope.newSearch()
                }
            })
        }]
    }
}), MainApp.directive("offendingChars", function() {
    return {
        restrict: "A",
        templateUrl: "/browser/html/offendingChars.html",
        scope: {
            model: "=",
            inputfield: "@"
        },
        link: function(scope, elem, attrs) {
            var charCheck = /\(|\)|&|`|~|!|@|#|\$|%|\^|\*|\+|=|_|\[|\{|\]|\}|\||;|:|<|>|\/|\?|\(|\)/g;
            document.getElementById(scope.inputfield).onkeyup = function() {
                scope.offendingChars = [], scope.textFieldValue = document.getElementById(scope.inputfield).value, scope.textFieldValue = scope.textFieldValue.match(charCheck), scope.textFieldValue && scope.textFieldValue.forEach(function(character) {
                    -1 === scope.offendingChars.indexOf(character) && scope.offendingChars.push(character)
                }), scope.$apply()
            }
        }
    }
}), MainApp.directive("searchBar", function() {
    return {
        restrict: "E",
        templateUrl: "/browser/js/views/searchBar.html",
        scope: {
            searchFunction: "&",
            searchTerm: "@"
        },
        controller: ["$scope", "$http", function($scope, $http) {
            window.tlds ? (-1 == window.tlds.indexOf(",") ? $scope.TLDsChosenArray = [window.tlds] : $scope.TLDsChosenArray = window.tlds.split(","), $scope.TLDsChosen = window.tlds) : ($scope.TLDsChosenArray = [".com"], $scope.TLDsChosen = ".com");
            var selected = $scope.TLDsChosenArray;
            $scope.allTlds = [], $http.get("/tld-list/").then(function(result) {
                var tlds = result.data,
                    tldsWithStatus = [];
                for (i = 0; i < tlds.length; i++) {
                    var arrayElement = {
                        name: tlds[i],
                        selected: 0 <= selected.indexOf(tlds[i])
                    };
                    tldsWithStatus.push(arrayElement)
                }
                $scope.allTlds = tldsWithStatus
            }), $scope.$watch("allTlds|filter:{selected:true}", function(nv) {
                $scope.TLDsChosenArray = nv.map(function(tld) {
                    return tld.name
                }), $scope.TLDsChosen = nv.map(function(tld) {
                    return tld.name
                }).join(",")
            }, !0), $scope.searchTerm = window.searchedTerm, $scope.pageLoaded = !1, $scope.textBoxClass = "search-field", $scope.chosenCategoryName = "All Categories", $scope.containsDropdownValue = "Contains", $scope.firstrun = !0, $scope.showSearchTermMask = !0, $scope.newSearch = function() {
                window.searchedTerm = $scope.searchTerm, window.contains = $scope.containsDropdownValue;
                var isNonLatinSearch = /[^A-Za-z0-9_\-\. ]/.test($scope.searchTerm);
                if ("" === window.categorySearched && (void 0 === $scope.searchTerm || "" === $scope.searchTerm || isNonLatinSearch)) return !($scope.textBoxClass = "search-field error-tld-textbox");
                if ($scope.textBoxClass = "search-field", $scope.pageLoaded ? window.tlds = $scope.TLDsChosen : ($scope.preSelectedTLDS(), $scope.updateTLDContainerTitle(), $scope.pageLoaded = !0), window.excludeKeywords = $scope.excludeKeywords, window.excludeHyphens = $scope.excludeHyphens, window.excludeNumerals = $scope.excludeNumerals, parseInt($scope.minPrice) >= parseInt($scope.maxPrice)) {
                    var minPriceTmp = $scope.minPrice;
                    $scope.minPrice = $scope.maxPrice, $scope.maxPrice = minPriceTmp
                }
                window.minPrice = $scope.minPrice, window.maxPrice = $scope.maxPrice, window.excludeNoPrice = $scope.excludeNoPrice, window.category = $scope.categorySelected, window.categorySelectedName = $scope.chosenCategoryName, window.startSearchOver = !0, $scope.firstrun || customGATracking.eventTrack("Search Initiation", "Search in Search", $scope.searchTerm), $scope.searchFunction(), $scope.firstrun = !1
            }, $scope.changeContainsDropdown = function(containsValueSelected) {
                $scope.containsSelected = $scope.startsSelected = $scope.endsSelected = "", "Contains" == containsValueSelected && ($scope.containsSelected = "selected"), "Starts with" == containsValueSelected && ($scope.startsSelected = "selected"), "Ends with" == containsValueSelected && ($scope.endsSelected = "selected"), $scope.containsDropdownValue = containsValueSelected, $scope.newSearch()
            }, $scope.captureEnterKey = function(keyEvent) {
                13 === keyEvent.which && $scope.newSearch()
            }, $scope.updateTLDContainerTitle = function() {
                1 < $scope.TLDsChosenArray.length ? $scope.TLDsChosenDisplay = "..." : ("" === $scope.TLDsChosen && ($scope.TLDsChosen = ".com"), $scope.TLDsChosenDisplay = $scope.TLDsChosen)
            }, $scope.selectTLD = function(tldName) {}, $scope.updateContainerState = function(container) {
                "TLDContainerClass" == container && ($scope.TLDsChosen ? ($scope.updateTLDContainerTitle(), $scope.TLDContainerClass = "activated", customGATracking.eventTrack("Search Refinement", "TLDs - " + $scope.TLDsChosen, "Selected")) : ($scope.TLDsChosenDisplay = ".com", $scope.TLDContainerClass = ""), window.tlds != $scope.TLDsChosen && $scope.newSearch()), "excludeContainerClass" == container && ($scope.excludeHyphens || $scope.excludeNumerals ? ($scope.excludeContainerClass = "activated", customGATracking.eventTrack("Search Refinement", "Exclude Hyphens", "true")) : $scope.excludeContainerClass = ""), "priceContainerClass" == container && ($scope.excludeNoPrice ? ($scope.priceContainerClass = "activated", customGATracking.eventTrack("Search Refinement", "Exclude No Price", "true")) : $scope.priceContainerClass = ""), "categoryContainerClass" == container && ($scope.categoryContainerClass = "activated"), window.startSearchOver = !0
            }, $scope.getCategoryName = function() {
                angular.forEach($scope.listCategories, function(value, key) {
                    value.id == $scope.categorySelected && ($scope.chosenCategoryName = value.name)
                })
            }, $scope.preSelectedTLDS = function() {
                var preselectedTLDs = window.tlds.replace(/[,]$/, "");
                preselectedTLDs.split(",");
                $scope.com = !1, preselectedTLDs && ".com" != preselectedTLDs && ($scope.TLDContainerClass = "activated")
            }, $scope.getTLDsChosenList = function() {
                return $scope.TLDsChosen
            }, $scope.stringToArray = function(inputString) {
                return inputString.split(",")
            }, $scope.trackSearchRefinement = function(title, type) {
                var trackValue = "";
                "PriceLow" == type && (trackValue = $scope.minPrice), "PriceHigh" == type && (trackValue = $scope.maxPrice), "Category" == type && (trackValue = $scope.chosenCategoryName), customGATracking.eventTrack(title, type, trackValue)
            }, $scope.clearForm = function() {
                angular.forEach($scope.allTlds, function(tld) {
                    ".com" == tld.name ? tld.selected = !0 : tld.selected = !1
                }), $scope.containsDropdownValue = "Contains", $scope.containsSelected = "selected", $scope.startsSelected = $scope.endsSelected = "", $scope.excludeHyphens = !1, $scope.excludeNumerals = !1, $scope.excludeNoPrice = !1, $scope.categorySelected = 0, $scope.priceContainerClass = "", $scope.TLDContainerClass = "", $scope.categoryContainerClass = "", $scope.excludeContainerClass = "", $scope.TLDsChosen = "", $scope.TLDsChosenDisplay = ".com", $scope.chosenCategoryName = "All Categories", $scope.minPrice = "0", $scope.maxPrice = "max", customGATracking.eventTrack("Search Refinement", "Clear all", "true"), $scope.newSearch()
            }, $scope.listCategories = [{
                id: 0,
                name: "All Categories"
            }], $scope.categorySelected = 0, $http({
                url: "/get-categories-list/",
                method: "GET",
                data: {}
            }).then(function(response) {
                $scope.listCategories = response.data, void($scope.categorySelected = 0) !== window.categorySearched && "" !== window.categorySearched && ($scope.categorySelected = window.categorySearched, $scope.getCategoryName(), $scope.newSearch(), $scope.trackSearchRefinement("Search by category from category page link", "Category"), $scope.updateContainerState("categoryContainerClass"))
            }), $scope.$watch("allTlds", function(allTldsChanged) {
                if ($scope.allTlds.length) {
                    var validTLDs = [];
                    for (i = 0; i < $scope.allTlds.length; i++) validTLDs[i] = $scope.allTlds[i].name;
                    usersTLDs = window.tlds.split(","), window.tlds = "", angular.forEach(usersTLDs, function(userTLD) {
                        -1 < validTLDs.indexOf(userTLD) && (window.tlds = window.tlds + userTLD + ",")
                    }), $scope.newSearch()
                }
            })
        }]
    }
}), MainApp.directive("setFixedTop", function($window) {
    return function(scope, element, attrs) {
        var offsetTop = (element = document.getElementById(attrs.id)).getBoundingClientRect().top,
            existingElementClasses = element.className;
        angular.element($window).bind("scroll", function() {
            this.pageYOffset > offsetTop ? element.className = existingElementClasses + " set-fixed-top" : element.className = existingElementClasses
        })
    }
}), MainApp.directive("tldSelector", function() {
    return {
        restrict: "E",
        templateUrl: "/browser/js/views/tldDropdown.html",
        scope: {
            formClass: "@",
            formId: "@",
            topUlClass: "@",
            inputTextboxId: "@",
            inputTextboxPlaceholderText: "@",
            tldATagId: "@",
            buttonLiTagClass: "@",
            buttonLiTagId: "@",
            ulTldContainerId: "@",
            ulTldContainerName: "@",
            searchEventTracking: "@",
            iframeMode: "@"
        },
        controller: ["$scope", "$http", function($scope, $http) {
            $scope.runAsIframe = !1, $scope.iframeMode && 1 == $scope.iframeMode && ($scope.runAsIframe = !0), $scope.TLDsChosenArray = [".com"], $scope.TLDsChosen = ".com", $scope.allTlds = [], $http.get("/tld-list/").then(function(result) {
                var tlds = result.data,
                    tldsWithStatus = [];
                for (i = 0; i < tlds.length; i++) {
                    var arrayElement = {
                        name: tlds[i],
                        selected: !1
                    };
                    tldsWithStatus.push(arrayElement)
                }
                $scope.allTlds = tldsWithStatus
            }), $scope.$watch("allTlds|filter:{selected:true}", function(nv) {
                $scope.TLDsChosenArray = nv.map(function(tld) {
                    return tld.name
                }), $scope.TLDsChosen = nv.map(function(tld) {
                    return tld.name
                }).join(",")
            }, !0), $scope.TLDsChosenDisplay = ".com", $scope.TLDsChosenDisplayStyle = "", $scope.com = !0, $scope.textBoxClass = "search-field", $scope.hideErrorMessage = function() {
                $scope.textBoxClass = "search-field"
            }, $scope.showTLDContainer = !1, $scope.showTLDSelector = function() {
                $scope.showTLDContainer = !$scope.showTLDContainer
            }, $scope.hideTLDSelector = function() {
                $scope.showTLDContainer = !1
            }, $scope.captureEnterKey = function(keyEvent) {
                13 === keyEvent.which && $scope.searchTLDs()
            }, $scope.searchTLDs = function() {
                var isNonLatinSearch = /[^A-Za-z0-9_\-\. ]/.test($scope.nameSearched);
                if (void 0 === $scope.nameSearched || "" === $scope.nameSearched || isNonLatinSearch) $scope.textBoxClass = "search-field error-tld-textbox";
                else if ($scope.nameSearched = $scope.nameSearched.replace("www.", ""), $scope.nameSearched = $scope.nameSearched.replace(/ /g, ""), $scope.nameSearched = $scope.nameSearched.replace(/@/g, ""), $scope.nameSearched = $scope.nameSearched.replace(/[^a-z0-9\-\.]+/gi, ""), "" !== $scope.nameSearched)
                    if (-1 < $scope.nameSearched.indexOf(".")) {
                        var userChosenTLD = $scope.nameSearched.substring($scope.nameSearched.indexOf("."));
                        $scope.nameSearched = $scope.nameSearched.substring(0, $scope.nameSearched.indexOf("."));
                        var acceptedManualTLD = !1;
                        $scope.acceptedTLDs = $scope.allTlds.map(function(o) {
                            return o.name
                        });
                        for (var i = 0; i < $scope.acceptedTLDs.length; i++) $scope.acceptedTLDs[i] === userChosenTLD && (acceptedManualTLD = !0);
                        acceptedManualTLD || (userChosenTLD = ".com"), $scope.trackGAEvent(), window.top.location.href = "/search/" + $scope.nameSearched + "?tlds=" + userChosenTLD
                    } else $scope.trackGAEvent(), window.top.location.href = "/search/" + $scope.nameSearched + "?tlds=" + $scope.getTLDsList()
            }, $scope.trackGAEvent = function() {
                $scope.searchEventTracking = JSON.parse($scope.searchEventTracking), void 0 !== $scope.searchEventTracking.category && "" !== $scope.searchEventTracking.category && customGATracking.eventTrack($scope.searchEventTracking.category, $scope.searchEventTracking.action, $scope.nameSearched)
            }, $scope.getTLDsList = function() {
                var tldParam = "";
                return "" === (tldParam += $scope.TLDsChosen) && (tldParam += ".com,"), tldParam.replace(/[,;]$/, "")
            }, $scope.updateTLDContainerTitle = function() {
                $scope.TLDsChosenDisplayStyle = "";
                var tldsList = $scope.getTLDsList();
                1 < tldsList.split(",").length ? $scope.TLDsChosenDisplay = "..." : (4 < tldsList.length && ($scope.TLDsChosenDisplayStyle = "font-size: 14px;"), $scope.TLDsChosenDisplay = tldsList)
            }
        }]
    }
});