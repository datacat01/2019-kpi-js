window.hzmr = window.hzmr || [];
/************* Start NewGalleryRequest.php Ajax Connector for locale ru-RU**************/
try {
    //<script>
    HZ.ajaz.Services.newGallery = function(newGalleryName, newGalleryDescription, allowDuplicate, privacy, onSuccess, extras) {
        var params = [{
                name: 'newGalleryName',
                value: newGalleryName
            },
            {
                name: 'newGalleryDescription',
                value: newGalleryDescription
            },
            {
                name: 'allowDuplicate',
                value: allowDuplicate
            }
        ];

        if (privacy) {
            params.push({
                name: 'privacy',
                value: privacy
            });
        }

        var url = "\/newGallery";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };


    window.hzmr.push("NewGalleryRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End NewGallery Ajax Connector  **************/
/************* Start UserPreferencesRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ajaz.Services.updateUserPreferences = function(preferenceType, preferenceData, onSuccess, extras) {
        var params = [{
                name: 'preferenceType',
                value: preferenceType
            },
            {
                name: 'preferenceData',
                value: preferenceData
            }
        ];
        var url = "\/userPreferencesUpdate";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };


    window.hzmr.push("UserPreferencesRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End UserPreferences Ajax Connector  **************/
/************* Start AuthorizeRequest.php Ajax Connector for locale ru-RU**************/
try { //<script type="text/javascript">
    HZ.ns("HZ.ajaz.Authorize");

    HZ.ajaz.Services.fbSignUp = function(onSuccess, redirectUrl, defaultEmail, extras, reAuth) {
        var reAuthValue = reAuth ? "1" : "0";
        var defaultEmailValue = defaultEmail ? defaultEmail : "";
        var params = [{
                name: 'op',
                value: 'f'
            },
            {
                name: 'a',
                value: HZ.sns.JsSdk.fb.getFbAppId()
            },
            {
                name: 'fbtoken',
                value: HZ.sns.JsSdk.fb.getFbAccessToken()
            },
            {
                name: 'ss',
                value: HZ.auth.Manager.getSignupSource()
            },
            {
                name: 'sp',
                value: HZ.auth.Manager.getSourcePage()
            },
            {
                name: 'fbra',
                value: reAuthValue
            },
            {
                name: 'e',
                value: defaultEmailValue
            },
            {
                name: 'rdr',
                value: HZ.utils.Links.base64Encode(redirectUrl)
            },
            {
                name: 'jt',
                value: encodeURIComponent(HZ.data.CSRFToken)
            }
        ];

        var url = "https:\/\/www.houzz.ru\/authorize";

        var wrapperCallbackFn = function(response) {
            if (response && response.success && response.success == "true") {
                if (response[HZ.ajaz.Authorize.JSON_KEY_CV])
                    HZ.data.CSRFToken = response[HZ.ajaz.Authorize.JSON_KEY_CV];
            }

            onSuccess(response);
        };

        extras = extras || {};
        extras.dataType = "jsonp";
        extras.type = "GET";

        HZ.ajaz.AjaxReq.send(url, params, wrapperCallbackFn, extras);
    };

    HZ.ajaz.Services.googleSignUp = function(onSuccess, googleOneTimeAuthCode, redirectUrl, extras) {
        var params = [{
                name: 'op',
                value: 'g'
            },
            {
                name: 'ss',
                value: HZ.auth.Manager.getSignupSource()
            },
            {
                name: 'sp',
                value: HZ.auth.Manager.getSourcePage()
            },
            {
                name: 'gCode',
                value: encodeURIComponent(googleOneTimeAuthCode)
            },
            {
                name: 'rdr',
                value: HZ.utils.Links.base64Encode(redirectUrl)
            },
            {
                name: 'jt',
                value: encodeURIComponent(HZ.data.CSRFToken)
            }
        ];

        var url = "https:\/\/www.houzz.ru\/authorize";

        var wrapperCallbackFn = function(response) {
            if (response && response.success && response.success == "true") {
                if (response[HZ.ajaz.Authorize.JSON_KEY_CV])
                    HZ.data.CSRFToken = response[HZ.ajaz.Authorize.JSON_KEY_CV];
            }

            onSuccess(response);
        };

        extras = extras || {};
        extras.dataType = "jsonp";
        extras.type = "GET";

        HZ.ajaz.AjaxReq.send(url, params, wrapperCallbackFn, extras);
    };

    HZ.ajaz.Services.removeFbLogin = function(onSuccess, extras) {
        var params = [{
                name: 'op',
                value: 'fbr'
            },
            {
                name: 'a',
                value: HZ.sns.JsSdk.fb.getFbAppId()
            },
            {
                name: 'jt',
                value: encodeURIComponent(HZ.data.CSRFToken)
            }
        ];

        var url = "https:\/\/www.houzz.ru\/authorize";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };

    HZ.ajaz.Services.enableFbLogin = function(fbAccessToken, onSuccess, extras) {
        var params = [{
                name: 'op',
                value: 'fbl'
            },
            {
                name: 'a',
                value: HZ.sns.JsSdk.fb.getFbAppId()
            },
            {
                name: 'fbtoken',
                value: fbAccessToken
            },
            {
                name: 'jt',
                value: encodeURIComponent(HZ.data.CSRFToken)
            }
        ];

        var url = "https:\/\/www.houzz.ru\/authorize";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };

    HZ.ajaz.Services.enableGoogleLogin = function(onSuccess, authCode, extras) {
        var params = [{
                name: 'op',
                value: 'gl'
            },
            {
                name: 'gCode',
                value: authCode
            },
            {
                name: 'jt',
                value: encodeURIComponent(HZ.data.CSRFToken)
            }
        ];

        var url = "https:\/\/www.houzz.ru\/authorize";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };

    HZ.ajaz.Services.updateAutoRegisterPassword = function(duck, onSuccess, extras) {
        var params = [{
                name: 'op',
                value: 'duck'
            },
            {
                name: 'pwd',
                value: duck
            },
            {
                name: 'jt',
                value: encodeURIComponent(HZ.data.CSRFToken)
            }
        ];

        var url = "https:\/\/www.houzz.ru\/authorize";
        extras = extras || {};


        if (HZ.utils.Config.ajazEndpointPrefix) {
            var url_parts = document.createElement('a');
            url_parts.href = url;
            extras.url = HZ.utils.Config.ajazEndpointPrefix + url_parts.pathname + url_parts.search + url_parts.hash;
            HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
        } else {
            var wrapperCallbackFn = function(response) {
                if (response && response.success && response.success == "true") {
                    if (response[HZ.ajaz.Authorize.JSON_KEY_CV])
                        HZ.data.CSRFToken = response[HZ.ajaz.Authorize.JSON_KEY_CV];
                }

                onSuccess(response);
            };
            HZ.ajaz.AjaxReq.send(url, params, wrapperCallbackFn, extras);
        }

    };


    HZ.ajaz.Services.inlineSignup = function(email, setSession, firstName, sourceLink, redirectUrl, onSuccess, extras) {
        //check the null case of redirectUrl
        if (!redirectUrl) {
            redirectUrl = "";
        }
        var params = [{
                name: 'op',
                value: 'nls'
            },
            {
                name: 'e',
                value: email
            },
            {
                name: 'sess',
                value: setSession
            },
            {
                name: 'f',
                value: firstName
            },
            {
                name: 'ss',
                value: sourceLink
            },
            {
                name: 'sp',
                value: HZ.auth.Manager.getSourcePage()
            },
            {
                name: 'rdr',
                value: HZ.utils.Links.base64Encode(redirectUrl)
            },
            {
                name: 'jt',
                value: encodeURIComponent(HZ.data.CSRFToken)
            },
            {
                name: 'timeoutInMs',
                value: 30000
            }
        ];

        var url = "https:\/\/www.houzz.ru\/authorize";

        extras = extras || {};
        extras.type = "GET";
        // hack to ensure c2 lightbox inline signup call from within jukwaa page works
        if (HZ.utils.Config.ajazEndpointPrefix) {
            var url_parts = document.createElement('a');
            url_parts.href = url;
            extras.url = HZ.utils.Config.ajazEndpointPrefix + url_parts.pathname + url_parts.search + url_parts.hash;
            return HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);

        } else {
            extras.dataType = "jsonp";
            var wrapperCallbackFn = function(response) {
                if (response && response.success && response.success == "true") {
                    if (response[HZ.ajaz.Authorize.JSON_KEY_CV])
                        HZ.data.CSRFToken = response[HZ.ajaz.Authorize.JSON_KEY_CV];
                }
                onSuccess(response);
            };
            return HZ.ajaz.AjaxReq.send(url, params, wrapperCallbackFn, extras);
        }

    };

    HZ.ajaz.Services.signup = function(username, duck, email, sourceLink, rcCha, rcResp, redirect, onSuccess, extras) {
        var params = [{
                name: 'op',
                value: 's'
            },
            {
                name: 'un',
                value: username
            },
            {
                name: 'pwd',
                value: duck
            },
            {
                name: 'e',
                value: email
            },
            {
                name: 'ss',
                value: sourceLink
            },
            {
                name: 'sp',
                value: HZ.auth.Manager.getSourcePage()
            },
            {
                name: 'recaptcha_challenge_field',
                value: rcCha
            },
            {
                name: 'recaptcha_response_field',
                value: rcResp
            },
            {
                name: 'rdr',
                value: redirect
            },
            {
                name: 'jt',
                value: encodeURIComponent(HZ.data.CSRFToken)
            }
        ];



        var wrapperCallbackFn = function(response) {
            if (response && response.success && response.success == "true") {
                if (response[HZ.ajaz.Authorize.JSON_KEY_CV])
                    HZ.data.CSRFToken = response[HZ.ajaz.Authorize.JSON_KEY_CV];
            }
            onSuccess(response);
        };

        var url = "https:\/\/www.houzz.ru\/authorize";
        HZ.ajaz.AjaxReq.send(url, params, wrapperCallbackFn, extras);
    };

    HZ.ajaz.Services.signIn = function(username, duck, keep, redirectUrl, onSuccess, extras) {
        var params = [{
                name: 'op',
                value: 'l'
            },
            {
                name: 'un',
                value: username
            },
            {
                name: 'pwd',
                value: duck
            },
            {
                name: 'rdr',
                value: redirectUrl
            },
            {
                name: 'k',
                value: keep
            },
            {
                name: 'jt',
                value: encodeURIComponent(HZ.data.CSRFToken)
            }
        ];

        var wrapperCallbackFn = function(response) {
            if (response && response.success && response.success == "true") {
                if (response[HZ.ajaz.Authorize.JSON_KEY_CV])
                    HZ.data.CSRFToken = response[HZ.ajaz.Authorize.JSON_KEY_CV];
            }

            onSuccess(response);
        };

        var url = "https:\/\/www.houzz.ru\/authorize";

        HZ.ajaz.AjaxReq.send(url, params, wrapperCallbackFn, extras);
    };

    HZ.ajaz.Services.magicLinkSignIn = function(username, keep, redirectUrl, onSuccess, extras) {
        var params = [{
                name: 'op',
                value: 'mls'
            },
            {
                name: 'un',
                value: username
            },
            {
                name: 'rdr',
                value: redirectUrl
            },
            {
                name: 'k',
                value: keep
            },
            {
                name: 'jt',
                value: encodeURIComponent(HZ.data.CSRFToken)
            }
        ];

        var wrapperCallbackFn = function(response) {
            if (response && response.success && response.success == "true") {
                if (response[HZ.ajaz.Authorize.JSON_KEY_CV])
                    HZ.data.CSRFToken = response[HZ.ajaz.Authorize.JSON_KEY_CV];
            }

            onSuccess(response);
        };

        var url = "https:\/\/www.houzz.ru\/authorize";

        HZ.ajaz.AjaxReq.send(url, params, wrapperCallbackFn, extras);
    };

    HZ.ajaz.Services.proSignup = function(onSuccess, extras) {
        var params = [{
                name: 'op',
                value: 'ps'
            },
            {
                name: 'jt',
                value: encodeURIComponent(HZ.data.CSRFToken)
            }
        ];

        var url = "https:\/\/www.houzz.ru\/authorize";

        extras = extras || {};
        extras.dataType = "jsonp";
        extras.type = "GET";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };

    HZ.ajaz.Services.authCheckName = function(username, onSuccess, extras) {
        var params = [{
                name: 'op',
                value: 'u'
            },
            {
                name: 'un',
                value: username
            }
        ];

        var url = "\/authsvc";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };

    HZ.ajaz.Authorize.emailCheckCache = {};

    HZ.ajaz.Authorize.authCheckEmail = function(email, onSuccess, extras) {
        if (HZ.ajaz.Authorize.emailCheckCache[email]) {
            // check has already been run, return cached value
            onSuccess(HZ.ajaz.Authorize.emailCheckCache[email]);
            return;
        }
        var params = [{
                name: 'op',
                value: 'e'
            },
            {
                name: 'e',
                value: email
            }
        ];

        var url = "\/authsvc";

        HZ.ajaz.AjaxReq.send(url, params,
            function(resp) {
                if (resp && resp.success && resp.success == "true") {
                    // cache this result for future queries
                    HZ.ajaz.Authorize.emailCheckCache[email] = resp;
                }

                onSuccess(resp);
            },
            extras);
    };

    HZ.ajaz.Authorize.JSON_KEY_REDIRECT_URL = "redirectUrl";
    HZ.ajaz.Authorize.JSON_KEY_EMAIL = "email";
    HZ.ajaz.Authorize.JSON_KEY_IS_VALID = "valid";
    HZ.ajaz.Authorize.JSON_KEY_CREATE_PRO_PROFILE_URL = "createProProfileUrl";
    HZ.ajaz.Authorize.JSON_KEY_SURL = "sUrl";
    HZ.ajaz.Authorize.JSON_VALUE_OK = "ok";
    HZ.ajaz.Authorize.JSON_VALUE_MALFORMED = "m";
    HZ.ajaz.Authorize.JSON_VALUE_INVALID = "i";
    HZ.ajaz.Authorize.USER_TYPE_PRO_SIGNUP = "4";
    HZ.ajaz.Authorize.USER_TYPE_HOMEOWNER = "1";
    HZ.ajaz.Authorize.JSON_KEY_CV = "cv";
    HZ.ajaz.Authorize.EMAIL_MINOR_ERROR = [
        7,
        4
    ];
    HZ.ajaz.Authorize.PASSWORD_ERROR = [
        2
    ];

    HZ.ajaz.Services.sendInvitations = function(emailList, onSuccess, extras) {
        var params = [{
                name: 'op',
                value: 'i'
            },
            {
                name: 'ie',
                value: emailList
            }
        ];

        var url = "https:\/\/www.houzz.ru\/authorize";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    //</script>


    window.hzmr.push("AuthorizeRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End Authorize Ajax Connector  **************/
/************* Start NoOpRequest.php Ajax Connector for locale ru-RU**************/
try { //<script type="text/javascript">
    HZ.ns("HZ.ajaz.NoOP");

    HZ.ajaz.Services.setSession = function(url, onSuccess, extras) {

        extras = extras || {};
        extras.dataType = "jsonp";
        extras.crossDomain = true;
        extras.type = "GET";

        HZ.ajaz.AjaxReq.send(url, [], onSuccess, extras);
    };

    //</script>


    window.hzmr.push("NoOpRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End NoOp Ajax Connector  **************/
/************* Start LightboxGetNextSpacesRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ajaz.Services.getNextSpaces = function(contextType, descriptor, nextPosition, onSuccess, extras) {
        var params = [{
                name: 'type',
                value: contextType
            },
            {
                name: 'nextpos',
                value: nextPosition
            },
            {
                name: 'version',
                value: 101
            },
            {
                name: "requestId",
                value: HZ.utils.Logger.pageRequestId
            }
        ];
        for (var property in descriptor) {
            params.push({
                name: property,
                value: descriptor[property]
            });
        }
        var url = '/lightBoxGetNextSpaces';

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Services.ERROR_VERSION_MISMATCH = 1001

    window.hzmr.push("LightboxGetNextSpacesRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End LightboxGetNextSpaces Ajax Connector  **************/
/************* Start LightboxGetSpaceDataRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ajaz.Services.getRecognitionData = function(spaceId, tagIds, onSuccess, extras) {
        if (Array.isArray(tagIds)) {
            tagIds = JSON.stringify(tagIds);
        }
        var params = [{
                name: 'sid',
                value: spaceId
            },
            {
                name: 'itIds',
                value: tagIds
            },
            {
                name: 'getItRd',
                value: true
            },
            {
                name: 'version',
                value: 101
            },
            {
                name: "requestId",
                value: HZ.utils.Logger.pageRequestId
            }
        ];
        var url = '/lightBoxGetSpaceData';

        return HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };

    HZ.ajaz.Services.getQuestionsData = function(spaceId, onSuccess, extras) {
        var params = [{
                name: 'sid',
                value: spaceId
            },
            {
                name: 'getQuestions',
                value: true
            },
            {
                name: 'version',
                value: 101
            },
            {
                name: "requestId",
                value: HZ.utils.Logger.pageRequestId
            }
        ];
        var url = '/lightBoxGetSpaceData';

        return HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };

    HZ.ajaz.Services.getSpaceData = function(spaceId, vendorListingId, detailLevel, onSuccess, extras) {
        var params = [{
                name: 'sid',
                value: spaceId
            },
            {
                name: 'lid',
                value: vendorListingId
            },
            {
                name: 'detailLevel',
                value: detailLevel
            },
            {
                name: 'extras',
                value: extras
            },
            {
                name: 'version',
                value: 101
            },
            {
                name: "requestId",
                value: HZ.utils.Logger.pageRequestId
            }
        ];
        var url = '/lightBoxGetSpaceData';
        return HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };

    HZ.ajaz.Services.getSpaceBuzz = function(spaceId, onSuccess, extras) {
        var params = [{
                name: 'sid',
                value: spaceId
            },
            {
                name: 'detailLevel',
                value: 4
            },
            {
                name: 'version',
                value: 101
            },
            {
                name: "requestId",
                value: HZ.utils.Logger.pageRequestId
            }
        ];
        var url = '/lightBoxGetSpaceData';
        return HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };

    HZ.ajaz.Services.getSpaceByVariations = function(spaceId, vendorListingId, variations, detailLevel, onSuccess, extras) {
        var variationOptionParamValue = "";
        for (var i = 0; i < variations.length; i++) {
            var option = variations[i];
            var optionId = option.id;
            var optionValue = option.value;
            variationOptionParamValue += optionId + '::' + encodeURIComponent(optionValue);
            variationOptionParamValue += '__';
        }
        var params = [{
                name: 'sid',
                value: spaceId
            },
            {
                name: 'lid',
                value: vendorListingId
            },
            {
                name: 'vo',
                value: variationOptionParamValue
            },
            {
                name: 'detailLevel',
                value: detailLevel
            },
            {
                name: 'version',
                value: 101
            },
            {
                name: "requestId",
                value: HZ.utils.Logger.pageRequestId
            }
        ];
        var url = '/lightBoxGetSpaceData';
        return HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };

    HZ.ajaz.Services.DETAIL_LEVEL_EXTENDED_WITH_AD_SPACE_INFO = 3;
    HZ.ajaz.Services.DETAIL_LEVEL_ALL_WITH_AD_SPACE_INFO = 6;
    HZ.ajaz.Services.DETAIL_LEVEL_PRODUCTS_BY_TAG = 8;
    HZ.ajaz.Services.DETAIL_LEVEL_BASE_SPACE_INFO = 1;
    HZ.ajaz.Services.DETAIL_LEVEL_EXTENDED_SPACE_INFO = 2;
    HZ.ajaz.Services.DETAIL_LEVEL_EDIT_SPACE = 7;
    HZ.ajaz.Services.PACIFIC_TIME_ZONE_OFFSET = -25200;
    HZ.ajaz.Services.LONDON_TIME_ZONE_OFFSET = 3600;


    window.hzmr.push("LightboxGetSpaceDataRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End LightboxGetSpaceData Ajax Connector  **************/
/************* Start AddImageTagRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ns('HZ.ajaz.Services.ImageTags');
    HZ.ajaz.Services.ImageTags = {
        getImageTagParams: function(imageTag) {
            var params = [{
                    name: 'type',
                    value: imageTag.type
                },
                {
                    name: 'id',
                    value: imageTag.spaceId
                },
                {
                    name: 'ven',
                    value: encodeURIComponent(imageTag.vendorName)
                },
                {
                    name: 'com',
                    value: (encodeURIComponent(imageTag.comments))
                },
                {
                    name: 'targetId',
                    value: imageTag.targetSpaceId
                },
                {
                    name: 'link',
                    value: encodeURIComponent(imageTag.link)
                },
                {
                    name: 'x',
                    value: imageTag.x
                },
                {
                    name: 'y',
                    value: imageTag.y
                }
            ];
            return params;
        },
        addImageTag: function(imageTag, callback) {
            var params = this.getImageTagParams(imageTag);
            params.push({
                name: 'op',
                value: 'a'
            });
            var url = "\/addImageTag";
            return HZ.ajaz.AjaxReq.send(url, params, callback);
        },
        addImageTagAndTagBound: function(imageTag, tagBound, callback) {
            var params = this.getImageTagParams(imageTag);
            params.push({
                name: 'boxX',
                value: tagBound.boxX
            });
            params.push({
                name: 'boxY',
                value: tagBound.boxY
            });
            params.push({
                name: 'boxWidth',
                value: tagBound.boxWidth
            });
            params.push({
                name: 'boxHeight',
                value: tagBound.boxHeight
            });
            params.push({
                name: 'op',
                value: 'awb'
            });
            var url = "\/addImageTag";
            return HZ.ajaz.AjaxReq.send(url, params, callback);
        },
        updateImageTag: function(imageTag, callback) {
            var params = this.getImageTagParams(imageTag);
            params.push({
                name: 'op',
                value: 'u'
            });
            params.push({
                name: 'tagId',
                value: imageTag.imageTagId
            });
            var url = "\/addImageTag";
            return HZ.ajaz.AjaxReq.send(url, params, callback);
        },
        updateImageTagAndTagBound: function(imageTag, tagBound, newType, callback) {
            var params = this.getImageTagParams(imageTag);
            params.push({
                name: 'boxX',
                value: tagBound.boxX
            });
            params.push({
                name: 'boxY',
                value: tagBound.boxY
            });
            params.push({
                name: 'boxWidth',
                value: tagBound.boxWidth
            });
            params.push({
                name: 'boxHeight',
                value: tagBound.boxHeight
            });
            params.push({
                name: 'op',
                value: 'utb'
            });
            params.push({
                name: 'tagId',
                value: (imageTag.imageTagId) ? imageTag.imageTagId : imageTag.tid
            });
            params.push({
                name: 'newType',
                value: newType
            });
            var url = "\/addImageTag";
            return HZ.ajaz.AjaxReq.send(url, params, callback);
        },
        updateCheckedImageTag: function(imageTag, callback) {
            var params = this.getImageTagParams(imageTag);
            params.push({
                name: 'op',
                value: 'uct'
            });
            params.push({
                name: 'tagId',
                value: (imageTag.imageTagId) ? imageTag.imageTagId : imageTag.tid
            });
            var url = "\/addImageTag";
            return HZ.ajaz.AjaxReq.send(url, params, callback);
        },
        deleteImageTag: function(imageTag, callback) {
            var params = this.getImageTagParams(imageTag);
            params.push({
                name: 'op',
                value: 'd'
            });
            params.push({
                name: 'tagId',
                value: (imageTag.imageTagId) ? imageTag.imageTagId : imageTag.tid
            });
            var url = "\/addImageTag";
            return HZ.ajaz.AjaxReq.send(url, params, callback);
        }
    };


    window.hzmr.push("AddImageTagRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End AddImageTag Ajax Connector  **************/
/************* Start ProductLookupRequest.php Ajax Connector for locale ru-RU**************/
try {
    HZ.ns('HZ.ajaz.Services.ProductLookup');
    HZ.ajaz.Services.ProductLookup.lookupProduct = function(query, buyFilter, vendorFilter, countryFilter, houseId, onSuccess, extras) {
        var params = [{
                name: 'value',
                value: query
            },
            {
                name: 'buyFilter',
                value: buyFilter
            },
            {
                name: 'vendorFilter',
                value: vendorFilter
            },
            {
                name: 'countryFilter',
                value: countryFilter
            },
            {
                name: 'houseId',
                value: houseId
            },
            {
                name: 'op',
                value: 'query'
            }
        ];
        var url = "\/productLookup";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    }

    HZ.ajaz.Services.ProductLookup.productRecognition = function(houseId, boxWidth, boxHeight, boxX, boxY, onSuccess, extras) {
        var params = [{
                name: 'houseId',
                value: houseId
            },
            {
                name: 'boxWidth',
                value: boxWidth
            },
            {
                name: 'boxHeight',
                value: boxHeight
            },
            {
                name: 'boxX',
                value: boxX
            },
            {
                name: 'boxY',
                value: boxY
            },
            {
                name: 'op',
                value: 'recognition'
            }
        ];
        var url = "\/productLookup";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    }

    HZ.ajaz.Services.ProductLookup.productTagRecognition = function(tagId, onSuccess, extras) {
        var params = [{
                name: 'tagId',
                value: tagId
            },
            {
                name: 'op',
                value: 'tag_recognition'
            }
        ];
        var url = "\/productLookup";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    }



    window.hzmr.push("ProductLookupRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End ProductLookup Ajax Connector  **************/
/************* Start CacheColorPickerColorsRequest.php Ajax Connector for locale ru-RU**************/
try { // <script>
    HZ.ns("HZ.ajaz.Services");
    HZ.ajaz.Services.cacheColorPickerColors = function(spaceId, colors, locations, imgWidth, imgHeight, onSuccess, extras) {
        var params = [{
                name: "spaceId",
                value: spaceId
            },
            {
                name: "colors",
                value: JSON.stringify(colors)
            },
            {
                name: "locations",
                value: JSON.stringify(locations)
            },
            {
                name: "imgWidth",
                value: imgWidth
            },
            {
                name: "imgHeight",
                value: imgHeight
            },
        ];
        var url = "\/cacheColorPickerColors";
        return HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };


    window.hzmr.push("CacheColorPickerColorsRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End CacheColorPickerColors Ajax Connector  **************/
/************* Start GetManufacturerColorsRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ajaz.Services.getManufacturerColors = function(colors, mft, onSuccess, extras) {
        var params = [{
                name: 'colors',
                value: JSON.stringify(colors)
            },
            {
                name: 'mft',
                value: mft
            }
        ];
        var url = "\/getManufacturerColors";
        return HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };


    window.hzmr.push("GetManufacturerColorsRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End GetManufacturerColors Ajax Connector  **************/
/************* Start SaveColorPaletteRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ajaz.Services.saveColorPaletteMulti = function(spaceId, palette, mftOrCampId, galleryIds, comment, isPrivate, onSuccess, extras) {
        var params = [{
                name: 'spaceId',
                value: spaceId
            },
            {
                name: 'palette',
                value: JSON.stringify(palette)
            },
            {
                name: 'galleryIds',
                value: galleryIds
            },
            {
                name: 'comment',
                value: JSON.stringify(comment)
            },
            {
                name: 'isPrivate',
                value: isPrivate
            },
        ];
        var mftOrCampIdParam;
        if ($.isNumeric(mftOrCampId)) {
            mftOrCampIdParam = {
                name: 'campaignId',
                value: mftOrCampId
            }
        } else {
            mftOrCampIdParam = {
                name: 'mft',
                value: mftOrCampId
            }
        }
        params.push(mftOrCampIdParam);

        var url = "\/saveColorPalette";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };

    HZ.ajaz.Services.saveColorPalette = function(spaceId, palette, mftOrCampId, galleryId, comment, isPrivate, newGalleryName, onSuccess, extras) {
        var params = [{
                name: 'spaceId',
                value: spaceId
            },
            {
                name: 'palette',
                value: JSON.stringify(palette)
            },
            {
                name: 'galleryId',
                value: galleryId
            },
            {
                name: 'comment',
                value: JSON.stringify(comment)
            },
            {
                name: 'isPrivate',
                value: isPrivate
            },
            {
                name: 'newGalleryName',
                value: JSON.stringify(newGalleryName)
            }
        ];
        var mftOrCampIdParam;
        if ($.isNumeric(mftOrCampId)) {
            mftOrCampIdParam = {
                name: 'campaignId',
                value: mftOrCampId
            }
        } else {
            mftOrCampIdParam = {
                name: 'mft',
                value: mftOrCampId
            }
        }
        params.push(mftOrCampIdParam);

        var url = "\/saveColorPalette";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };


    window.hzmr.push("SaveColorPaletteRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End SaveColorPalette Ajax Connector  **************/
/************* Start GetSpaceAjaxRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ajaz.Services.getDownloadUrl = function(houseId, onSuccess, extras) {
        var params = [{
            name: 'houseId',
            value: houseId
        }];

        var url = '/getSpaceAjax';

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };


    window.hzmr.push("GetSpaceAjaxRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End GetSpaceAjax Ajax Connector  **************/
/************* Start CartActionsRequest.php Ajax Connector for locale ru-RU**************/
try { // <script>
    // Defineing a new package name "Cart"
    HZ.ns('HZ.ajaz.Services.Cart');
    HZ.ajaz.Services.Cart.addItem = function(houseId, productId, quantity, onSuccess, extras) {
        var params = [{
                name: 'op',
                value: 'add'
            },
            {
                name: 'ac',
                value: '0'
            },
            {
                name: 'hid',
                value: houseId
            },
            {
                name: 'pId',
                value: productId
            },
            {
                name: 'q',
                value: quantity
            }
        ];
        var url = "\/editCart";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };

    // need to be deleted once UK launch new return policy
    // start here
    HZ.ajaz.Services.Cart.getReturnPolicy = function(houseId, vendorId, onSuccess, extras) {
        var params = [{
                name: 'op',
                value: 'getPolicy'
            },
            {
                name: 'hid',
                value: houseId
            },
            {
                name: 'vId',
                value: vendorId
            },
            {
                name: 'ac',
                value: '6'
            }
        ];
        var url = "\/editCart";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    // end here

    HZ.ajaz.Services.Cart.getWarranty = function(houseId, vendorId, onSuccess, extras) {
        var params = [{
                name: 'op',
                value: 'getPolicy'
            },
            {
                name: 'hid',
                value: houseId
            },
            {
                name: 'vId',
                value: vendorId
            },
            {
                name: 'ac',
                value: '6'
            }
        ];
        var url = "\/editCart";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Services.Cart.updateItem = function(cartItemId, quantity, productId, onSuccess, extras) {
        var params = [{
                name: 'ciId',
                value: cartItemId
            },
            {
                name: 'q',
                value: quantity
            },
            {
                name: 'pId',
                value: productId
            }
        ];
        if (quantity == 0) {
            params.push({
                name: 'op',
                value: 'remove'
            }, {
                name: 'ac',
                value: '2'
            });
        } else {
            params.push({
                name: 'op',
                value: 'update'
            }, {
                name: 'ac',
                value: '1'
            });
        }
        var url = "\/editCart";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Services.Cart.removeItem = function(cartItemId, onSuccess, extras) {
        var params = [{
                name: 'op',
                value: 'remove'
            },
            {
                name: 'ac',
                value: '2'
            },
            {
                name: 'ciId',
                value: cartItemId
            }
        ];
        var url = "\/editCart";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Services.Cart.updateShippingMethod = function(vendorId, shippingClass, shippingMethod, onSuccess, extras) {
        var params = [{
                name: 'op',
                value: 'updateShipping'
            },
            {
                name: 'ac',
                value: '4'
            },
            {
                name: 'vId',
                value: vendorId
            },
            {
                name: 'smId',
                value: shippingMethod
            },
            {
                name: 'scls',
                value: shippingClass
            }
        ];
        var url = "\/editCart";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Services.Cart.applyCoupon = function(couponCode, onSuccess, extras) {
        var params = [{
                name: 'op',
                value: 'applyCoupon'
            },
            {
                name: 'ac',
                value: '7'
            },
            {
                name: 'cpn',
                value: couponCode
            }
        ];
        var url = "\/editCart";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Services.Cart.getCartDetails = function(onSuccess, extras) {
        var params = [{
                name: 'op',
                value: 'inquire'
            },
            {
                name: 'ac',
                value: '5'
            }
        ];
        var url = "\/editCart";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Services.Cart.addFromWishList = function(houseId, onSuccess, extras) {
        var params = [{
                name: 'op',
                value: 'addFromWishList'
            },
            {
                name: 'ac',
                value: '9'
            },
            {
                name: 'hid',
                value: houseId
            }
        ];
        var url = "\/editCart";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Services.Cart.moveToWishList = function(cartItemId, productId, onSuccess, extras) {
        var params = [{
                name: 'op',
                value: 'moveToWishList'
            },
            {
                name: 'ac',
                value: '8'
            },
            {
                name: 'ciId',
                value: cartItemId
            },
            {
                name: 'pId',
                value: productId
            }
        ];
        var url = "\/editCart";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Services.Cart.removeFromWishList = function(houseId, onSuccess, extras) {
        var params = [{
                name: 'op',
                value: 'removeFromWishList'
            },
            {
                name: 'ac',
                value: '10'
            },
            {
                name: 'hid',
                value: houseId
            }
        ];
        var url = "\/editCart";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Services.Cart.addToWishList = function(houseId, onSuccess, extras) {
        var params = [{
                name: 'op',
                value: 'addToWishList'
            },
            {
                name: 'ac',
                value: '11'
            },
            {
                name: 'hid',
                value: houseId
            }
        ];
        var url = "\/editCart";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    }


    window.hzmr.push("CartActionsRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End CartActions Ajax Connector  **************/
/************* Start TileAjaxRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ns("HZ.ajaz.Tile");
    HZ.ajaz.Tile.calculate = function(quantity, spaceId, listingId, onSuccess, extras) {
        var url = "\/tileAjax";
        var params = [{
                name: 'op',
                value: 'calc'
            },
            {
                name: 'sid',
                value: spaceId
            },
            {
                name: 'lid',
                value: listingId
            },
            {
                name: 'q',
                value: quantity
            }
        ];
        return HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };

    HZ.ajaz.Tile.getOptions = function(spaceId, listingId, from, to, onSuccess, extras) {
        var url = "\/tileAjax";
        var params = [{
                name: 'op',
                value: 'opts'
            },
            {
                name: 'sid',
                value: spaceId
            },
            {
                name: 'lid',
                value: listingId
            },
            {
                name: 'from',
                value: from
            },
            {
                name: 'to',
                value: to
            }
        ];
        return HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };


    window.hzmr.push("TileAjaxRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End TileAjax Ajax Connector  **************/
/************* Start ReportProductAjaxRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    // Defineing a new package name "ReportProduct"
    HZ.ns('HZ.ajaz.Services.ReportProduct');
    HZ.ajaz.Services.ReportProduct.getFlagReasons = function(houseId, onSuccess, extras) {
        var params = [{
                name: 'hid',
                value: houseId
            },
            {
                name: 'ac',
                value: 'g'
            }
        ];
        var url = "\/reportProduct";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Services.ReportProduct.flagProduct = function(houseId, reasonIds, newReasonIds, comments, onSuccess, extras) {
        var params = [{
                name: 'hid',
                value: houseId
            },
            {
                name: 'fids',
                value: reasonIds
            },
            {
                name: 'nfids',
                value: newReasonIds
            },
            {
                name: 'cm',
                value: comments
            },
            {
                name: 'ac',
                value: 'f'
            }
        ];
        var url = "\/reportProduct";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    }


    window.hzmr.push("ReportProductAjaxRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End ReportProductAjax Ajax Connector  **************/
/************* Start LocationAutoCompleteRequest.php Ajax Connector for locale ru-RU**************/
try {
    HZ.ajaz.Services.autoCompleteLocation = function(textFragment, onSuccess, countryToSearchIn, format, extras) {
        var params = [{
            name: 'query',
            value: textFragment
        }];
        if (countryToSearchIn) {
            params.push({
                name: 'country',
                value: countryToSearchIn
            });
        }
        var resultFormat = 'full';
        if (format) {
            resultFormat = format;
        }
        params.push({
            name: 'resultFormat',
            value: resultFormat
        });

        var url = "\/locationComplete";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };

    HZ.ajaz.Services.getLocationStrByZipcode = function(operation, zipcode, countryToSearchIn, onSuccess, extras) {
        var params = [{
                name: 'zipcode',
                value: zipcode
            },
            {
                name: 'op',
                value: operation
            },
            {
                name: 'country',
                value: countryToSearchIn
            }
        ];
        var url = "\/locationComplete";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };

    HZ.ajaz.Services.getJapaneseAreasByPostalCode = function(postalCode, onSuccess, extras) {
        var params = [{
                name: 'zipcode',
                value: postalCode
            },
            {
                name: 'op',
                value: 'getAreasByJpZip'
            }
        ];
        var url = "\/locationComplete";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };


    window.hzmr.push("LocationAutoCompleteRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End LocationAutoComplete Ajax Connector  **************/
/************* Start ChangeShipToLocationAjaxRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ns('HZ.ajaz.Services.ChangeShipToLocation');
    HZ.ajaz.Services.ChangeShipToLocation.getShipTransitTime = function(listingId, locationValue, onSuccess, extras) {
        var params = [{
                name: 'lid',
                value: listingId
            },
            {
                name: 'lv',
                value: locationValue
            },
            {
                name: 'ac',
                value: 'agst'
            }
        ];
        var url = "\/changeShipToLocation";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };


    window.hzmr.push("ChangeShipToLocationAjaxRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End ChangeShipToLocationAjax Ajax Connector  **************/
/************* Start SendEmailRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>

    HZ.ajaz.Services.sendEmail = function(messageOptions, sendForm, onSuccess, extras) {
        var url = '/sendEmail';

        var params = [];
        for (var option in messageOptions) {
            if (messageOptions[option] != null) {
                params.push({
                    name: option,
                    value: messageOptions[option]
                });

            }
        }
        params.push({
            name: 'referrerPath',
            value: window.location.pathname
        });
        if (sendForm) {
            params.push({
                name: '__ct',
                value: HZ.data.CSRFToken
            });
            var formOptions = {
                data: params,
                dataType: 'json',
                success: onSuccess,
                type: 'POST',
                url: url
            };
            sendForm.ajaxSubmit(formOptions);
        } else {
            HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
        }
    };

    HZ.ajaz.Services.sendShareEmail = function(messageOptions, onSuccess, extras) {
        var url = '/sendEmail';
        var params = [];
        for (var option in messageOptions) {
            if (messageOptions[option] != null)
                params.push({
                    name: option,
                    value: messageOptions[option]
                });
        }
        params.push({
            name: 'referrerPath',
            value: window.location.pathname
        });
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };

    HZ.ajaz.Services.sendGuestEmail = function(messageOptions, onSuccess, extras) {
        var params = [];
        for (var option in messageOptions) {
            if (messageOptions[option] != null)
                params.push({
                    name: option,
                    value: messageOptions[option]
                });
        }
        params.push({
            name: 'referrerPath',
            value: window.location.pathname
        });
        var url = '/sendEmail';
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };

    HZ.ns("HZ.sendEmail.types");
    HZ.sendEmail.types = {
        SPACE: 3,
        GALLERY: 1,
        QUESTION: 5,
        PRO: 10,
        PRO_REPLY: 23,
        MP: 16,
        MP_SELLER: 17,
        MP_BUYER: 39,
        SURVEY: 28,
        SHARE_COLOR_PALETTE: 43,
        USER: 2,
        USER_REPLY: 48,
        TRADE_EMAIL: 66
    };
    HZ.ns("HZ.sendEmail.events");
    HZ.sendEmail.events = {
        BTN: "en_send_btn_photo",
        ADDTOIBK: "en_send_addtoibk_photo",
        SHARECP: "scp",
        ADDTOIBK_SHARE_EMAIL: "addibk_share_email",
        SEND_BTN_ADDTOIBK_SHARE_EMAIL: "send_btn_addibk_share_email",
        ADDTOIBK_SHARE_EMAIL_SEND: "addibk_share_email_send"
    };
    HZ.ns("HZ.sendEmail.texts");
    HZ.sendEmail.texts = {
        DEFAULT_MESSAGE_SPACE: "Оцените потрясающее интерьерное решение, найденное мной на www.houzz.ru!",
        DEFAULT_MESSAGE_PRODUCT: "Оцените потрясающий товар, найденный мной на www.houzz.ru!",
        DEFAULT_MESSAGE_GALLERY: "Оцените потрясающие интерьерные решения, найденные мной на www.houzz.ru!",
        DEFAULT_MESSAGE_QUESTION: "Посмотрите, какую увлекательную тему обсуждают пользователи Houzz – присоединяйтесь!",
        DEFAULT_MESSAGE_COLOR_PALETTE: "Посмотрите на мою палитру, созданную на Houzz.",
        CONFIRM_MESSAGE_SENT: "Сообщение успешно отправлено.",
        CONFIRM_EMAIL_SENT: "Письмо успешно отправлено.",
        ERROR_TO_EMPTY: "Пожалуйста, укажите тему письма.",
        ERROR_SUBJECT_EMPTY: "Пожалуйста, укажите тему письма.",
        ERROR_MESSAGE_EMPTY: "Пожалуйста, отправьте сообщение по электронной почте.",
        ERROR_TEXT_LOCATION_EMPTY: "Укажите местоположение.",
        ERROR_PHONE_NOT_TEN_DIGIT: "Пожалуйста, укажите номер телефона.",
        ERROR_INVALID_PHONE: "Введите номер телефона. Добавьте + перед кодом страны при вводе номера в международном формате.",
        ERROR_EMAIL_ADDRESSES_EMPTY: "Пожалуйста, укажите адреса получателей через запятую.",
        ERROR_PRO_CONFIRM_INQUIRY_NOT_AGREE: "Пожалуйста, подтвердите запрос на индивидуальный проект.",
        ERROR_INVALID_TO_EMAIL_ADDRESSES: "Пожалуйста, укажите адреса получателей через запятую.",
        ERROR_INVALID_FROM_EMAIL_ADDRESS: "Пожалуйста, введите действительный адрес электронной почты.",
        ERROR_NO_PHONE: "Пожалуйста, введите номер телефона.",
        ERROR_NO_ZIP: "Пожалуйста, введите индекс.",
        ERROR_UNKNOWN: "Произошла неизвестная ошибка. Пожалуйста, повторите отправку письма через несколько минут.",
        ERROR_NO_CONTACT_NAME: "Пожалуйста, укажите ваше имя"
    };
    HZ.ajaz.Services.sendEmail.ERROR_RECOVERABLE = 1;
    HZ.ajaz.Services.sendEmail.PHONE_VALIDATION_FAILURE = "Введите номер телефона. Добавьте + перед кодом страны при вводе номера в международном формате.";
    HZ.ajaz.Services.sendEmail.ERROR_FATAL = 2;

    HZ.sendEmail.params = {
        to: "emailTo",
        from: "emailFrom",
        message: 'emailMessage',
        isVisitor: 'isVisitor',
        subject: 'emailSubject',
        phone: 'phone',
        zipCode: 'zipCode',
        event: 'event',
        type: 'type',
        referenceId: 'refId',
        replyToId: 'replyId',
        captchaResponse: 'cr',
        isDealerLocation: 'isdealloc',
        shareImageUrl: 'simgurl',
        signupSourceLink: 'sourceLink',
        shareLink: 'slink'
    };


    window.hzmr.push("SendEmailRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End SendEmail Ajax Connector  **************/
/************* Start CurrentSessionUserInfoRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ns('HZ.ajaz.Services.User');
    HZ.ajaz.Services.User.getCurrentSessionUserExtraData = function(onSuccess, extras) {
        var params = [{
            name: 'ac',
            value: 'getExtraData'
        }];
        var url = "\/currentSessionUserInfo";
        return HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };

    HZ.ajaz.Services.User.getCurrentSessionUserContactData = function(onSuccess, extras) {
        var url = "\/currentSessionUserInfo";
        var params = [{
            name: 'ac',
            value: 'getContactData'
        }];
        return HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };


    window.hzmr.push("CurrentSessionUserInfoRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End CurrentSessionUserInfo Ajax Connector  **************/
/************* Start PhoneValidationAjaxRequest.php Ajax Connector for locale ru-RU**************/
try {
    HZ.ajaz.Services.validatePhoneNumber = function(phoneNumber) {
        var params = [{
                name: 'api',
                value: 'validatePhoneNumber'
            },
            {
                name: 'phoneNumber',
                value: phoneNumber
            },
            {
                name: 'timeoutInMs',
                value: 30000
            }
        ];
        var url = "\/phoneValidationAjax";
        return HZ.ajaz.AjaxReq.send(url, params);
    };

    HZ.ajaz.Services.validateInternationalPhoneNumber = function(phoneNumber, country) {
        var params = [{
                name: 'api',
                value: 'validateInternationalPhoneNumber'
            },
            {
                name: 'phoneNumber',
                value: phoneNumber
            },
            {
                name: 'country',
                value: country
            },
            {
                name: 'timeoutInMs',
                value: 30000
            }
        ];
        var url = "\/phoneValidationAjax";
        return HZ.ajaz.AjaxReq.send(url, params);
    };

    HZ.ajaz.Services.validateMobileExperian = function(phoneNumber) {
        var params = [{
                name: 'api',
                value: 'validateMobileExperian'
            },
            {
                name: 'phoneNumber',
                value: phoneNumber
            },
            {
                name: 'timeoutInMs',
                value: 30000
            }
        ];
        var url = "\/phoneValidationAjax";
        return HZ.ajaz.AjaxReq.send(url, params);
    };

    HZ.ajaz.Services.updateSmsPhone = function(userId, phoneNumber) {
        var params = [{
                name: 'api',
                value: 'updateSmsPhone'
            },
            {
                name: 'phoneNumber',
                value: phoneNumber
            },
            {
                name: 'userId',
                value: userId
            },
            {
                name: 'timeoutInMs',
                value: 30000
            }
        ];
        var url = "\/phoneValidationAjax";
        return HZ.ajaz.AjaxReq.send(url, params);
    };

    HZ.ajaz.Services.updateCancelSmsPopupRedis = function(userId) {
        var params = [{
                name: 'api',
                value: 'updateCancelSmsPopupRedis'
            },
            {
                name: 'userId',
                value: userId
            },
            {
                name: 'timeoutInMs',
                value: 30000
            }
        ];
        var url = "\/phoneValidationAjax";
        return HZ.ajaz.AjaxReq.send(url, params);
    };



    window.hzmr.push("PhoneValidationAjaxRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End PhoneValidationAjax Ajax Connector  **************/
/************* Start GetProfessionalProjectsRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ajaz.Services.getProfessionalProjects = function(proUserId, onSuccess, extras) {
        var url = '/getProfessionalProjects';
        var params = [{
            name: 'proUserId',
            value: proUserId
        }];

        // kinda hacky, but what to do?
        if (HZ.prosite && HZ.prosite.Designer && HZ.prosite.Designer.demoId) {
            params.push({
                name: 'demoid',
                value: HZ.prosite.Designer.demoId
            });
        }

        // Populate some of the extra parameters
        if (extras) {
            params.push({
                name: 'extraProjIds',
                value: extras.projIds
            });
            params.push({
                name: 'extraProjOnly',
                value: extras.requiredProj
            });
        }
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };



    window.hzmr.push("GetProfessionalProjectsRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End GetProfessionalProjects Ajax Connector  **************/
/************* Start GetProfessionalProjectPhotosRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>

    HZ.ajaz.Services.getProfessionalProjectPhotosPaginated = function(projectId, proUserId, fromItem, itemsPerPage, onSuccess, extras) {
        var params = [{
                    name: 'projectId',
                    value: projectId
                },
                {
                    name: 'proUserId',
                    value: proUserId
                },
                {
                    name: 'fromItem',
                    value: fromItem
                },
                {
                    name: 'itemsPerPage',
                    value: itemsPerPage
                },
            ],
            url = '/getProfessionalProjectPhotos';
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };

    HZ.ajaz.Services.getProfessionalProjectPhotos = function(projectId, proUserId, onSuccess, extras) {
        var params = [{
                name: 'projectId',
                value: projectId
            },
            {
                name: 'proUserId',
                value: proUserId
            }
        ];

        var url = '/getProfessionalProjectPhotos';

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };

    HZ.ajaz.Services.getProfessionalProjectPhotosByIds = function(houseIds, onSuccess, extras) {
        var params = [{
            name: 'idList',
            value: houseIds
        }];

        var url = '/getProfessionalProjectPhotos';

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };


    window.hzmr.push("GetProfessionalProjectPhotosRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End GetProfessionalProjectPhotos Ajax Connector  **************/
/************* Start GetHousesByGalleryRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ajaz.Services.getHousesByGallery = function(galleryId, fromItem, itemsPerPage, onSuccess, extras) {
        var params = [{
            name: 'galleryId',
            value: galleryId
        }];
        var url = "\/getHousesByGallery";
        if (typeof fromItem !== "undefined" && fromItem !== null) {
            params.push({
                name: 'fromItem',
                value: fromItem
            });
        }
        if (typeof itemsPerPage !== "undefined" && itemsPerPage !== null) {
            params.push({
                name: 'itemsPerPage',
                value: itemsPerPage
            });
        }
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };



    window.hzmr.push("GetHousesByGalleryRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End GetHousesByGallery Ajax Connector  **************/
/************* Start BuzzAjaxRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ajaz.Services.movePhotos = function(houseIds, fromGalleryId, toGalleryId, isNewGallery, newGalleryTitle, onSuccess, extras) {
        var params = [{
                name: 'houseIds',
                value: houseIds
            },
            {
                name: 'fromGalleryId',
                value: fromGalleryId
            },
            {
                name: 'toGalleryId',
                value: toGalleryId
            },
            {
                name: 'newIdeabook',
                value: isNewGallery
            },
            {
                name: 'newGalleryTitle',
                value: newGalleryTitle
            },
            {
                name: 'moveAction',
                value: 'move'
            }
        ];

        var url = "\/buzzAjaxRequest";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };

    HZ.ajaz.Services.copyPhotos = function(houseIds, fromGalleryId, toGalleryId, isNewGallery, newGalleryTitle, onSuccess, extras) {
        var params = [{
                name: 'houseIds',
                value: houseIds
            },
            {
                name: 'fromGalleryId',
                value: fromGalleryId
            },
            {
                name: 'toGalleryId',
                value: toGalleryId
            },
            {
                name: 'newIdeabook',
                value: isNewGallery
            },
            {
                name: 'newGalleryTitle',
                value: newGalleryTitle
            },
            {
                name: 'moveAction',
                value: 'copy'
            }
        ];

        var url = "\/buzzAjaxRequest";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Services.removePhotos = function(fromGalleryId, houseIds, onSuccess, extras) {

        var params = [{
                name: 'houseIds',
                value: houseIds
            },
            {
                name: 'fromGalleryId',
                value: fromGalleryId
            },
            {
                name: 'moveAction',
                value: 'remove'
            }
        ];
        var url = "\/buzzAjaxRequest";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Services.fetchSpaces = function(fromGalleryId, startFrom, pageSize, thumbWidth, thumbHeight, onSuccess, extras) {

        var params = [{
                name: 'fromGalleryId',
                value: fromGalleryId
            },
            {
                name: 'startFrom',
                value: startFrom
            },
            {
                name: 'itemsPerPage',
                value: pageSize
            },
            {
                name: 'thumbWidth',
                value: thumbWidth
            },
            {
                name: 'thumbHeight',
                value: thumbHeight
            },
            {
                name: 'moveAction',
                value: 'fetchSpaces'
            }
        ];
        var url = "\/buzzAjaxRequest";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Services.deleteIdeabook = function(galleryId, onSuccess, extras) {
        var params = [{
                name: 'fromGalleryId',
                value: galleryId
            },
            {
                name: 'moveAction',
                value: 'delete'
            }
        ];

        var url = "\/buzzAjaxRequest";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Services.saveOrder = function(galleryId, houseIds, onSuccess, extras) {
        var params = [{
                name: 'fromGalleryId',
                value: galleryId
            },
            {
                name: 'houseIds',
                value: houseIds
            },
            {
                name: 'moveAction',
                value: 'order'
            }
        ];

        var url = "\/buzzAjaxRequest";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Services.saveComment = function(galleryId, houseIds, buzzComment, buzzPrivacy, onSuccess, extras) {
        var params = [{
                name: 'fromGalleryId',
                value: galleryId
            },
            {
                name: 'houseIds',
                value: houseIds
            },
            {
                name: 'buzzComment',
                value: buzzComment
            },
            {
                name: 'buzzPrivacy',
                value: buzzPrivacy
            },
            {
                name: 'moveAction',
                value: 'comment'
            }
        ];

        var url = "\/buzzAjaxRequest";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Services.updateBuzzComment = function(galleryId, houseId, buzzComment, onSuccess, extras) {
        var params = [{
                name: 'fromGalleryId',
                value: galleryId
            },
            {
                name: 'houseId',
                value: houseId
            },
            {
                name: 'buzzComment',
                value: buzzComment
            },
            {
                name: 'moveAction',
                value: 'updateBuzzComment'
            }
        ];

        var url = "\/buzzAjaxRequest";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Services.updateBuzzPrivacy = function(galleryId, houseId, buzzComment, buzzPrivacy, onSuccess, extras) {
        var params = [{
                name: 'fromGalleryId',
                value: galleryId
            },
            {
                name: 'houseId',
                value: houseId
            },
            {
                name: 'buzzPrivacy',
                value: buzzPrivacy
            },
            {
                name: 'moveAction',
                value: 'updateBuzzPrivacy'
            }
        ];

        var url = "\/buzzAjaxRequest";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Services.addBuzz = function(galleryId, houseId, buzzComment, buzzIsPrivate, houseIds, startFrom, onSuccess, extras) {
        startFrom = startFrom || 1;
        var params = [{
                name: 'fromGalleryId',
                value: galleryId
            },
            {
                name: 'houseId',
                value: houseId
            },
            {
                name: 'houseIds',
                value: houseIds
            },
            {
                name: 'startFrom',
                value: startFrom
            },
            {
                name: 'buzzComment',
                value: buzzComment
            },
            {
                name: 'buzzPrivacy',
                value: buzzIsPrivate
            },
            {
                name: 'moveAction',
                value: 'addBuzz'
            }
        ];

        var url = "\/buzzAjaxRequest";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Services.changeTitle = function(galleryId, title, onSuccess, extras) {
        var params = [{
                name: 'fromGalleryId',
                value: galleryId
            },
            {
                name: 'galleryTitle',
                value: title
            },
            {
                name: 'moveAction',
                value: 'changeTitle'
            }
        ];

        var url = "\/buzzAjaxRequest";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Services.changeSubtitle = function(galleryId, subtitle, onSuccess, extras) {
        var params = [{
                name: 'fromGalleryId',
                value: galleryId
            },
            {
                name: 'gallerySubtitle',
                value: subtitle
            },
            {
                name: 'moveAction',
                value: 'changeSubtitle'
            }
        ];

        var url = "\/buzzAjaxRequest";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Services.changeDescription = function(galleryId, description, onSuccess, extras) {
        var params = [{
                name: 'fromGalleryId',
                value: galleryId
            },
            {
                name: 'galleryDescription',
                value: description
            },
            {
                name: 'moveAction',
                value: 'changeDescription'
            }
        ];

        var url = "\/buzzAjaxRequest";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Services.changeGalleryMeta = function(galleryId, title, subtitle, description, galleryCategory, coverSpaceId, onSuccess, extras) {
        var params = [{
                name: 'fromGalleryId',
                value: galleryId
            },
            {
                name: 'moveAction',
                value: 'changeMeta'
            }
        ];

        //////// Short Title Header AB Test ////////
        var shortTitle = extras.shortTitle;
        var shortSubtitle = extras.shortSubtitle;
        var shortDesc = extras.shortDesc;
        if (shortTitle) {
            params.push({
                name: 'galleryShortTitle',
                value: shortTitle
            });
        }
        if (shortSubtitle) {
            params.push({
                name: 'galleryShortSubtitle',
                value: shortSubtitle
            });
        }
        if (shortDesc) {
            params.push({
                name: 'galleryShortDesc',
                value: shortDesc
            });
        }
        ////////////////////////////////////////////

        if (title != null) {
            params.push({
                name: 'galleryTitle',
                value: title
            });
        }
        if (subtitle != null) {
            params.push({
                name: 'gallerySubtitle',
                value: subtitle
            });
        }
        if (description != null) {
            params.push({
                name: 'galleryDescription',
                value: description
            });
        }
        if (galleryCategory != null) {
            params.push({
                name: 'galleryCategory',
                value: galleryCategory
            });
        }
        if (coverSpaceId != null) {
            params.push({
                name: 'coverSpaceId',
                value: coverSpaceId
            });
        }

        var url = "\/buzzAjaxRequest";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Services.changeGallerySeoMeta = function(galleryId, metaTitle, metaDescription, urlSlug, shareUrlSlug, redirectUrl, allowShareUrlChange, onSuccess, extras) {
        var params = [{
                name: 'fromGalleryId',
                value: galleryId
            },
            {
                name: 'moveAction',
                value: 'changeSeoMeta'
            }
        ];

        if (metaTitle != null) {
            params.push({
                name: 'galleryMetaTitle',
                value: metaTitle
            });
        }
        if (metaDescription != null) {
            params.push({
                name: 'galleryMetaDescription',
                value: metaDescription
            });
        }
        if (urlSlug != null) {
            params.push({
                name: 'galleryUrlSlug',
                value: urlSlug
            });
        }
        if (shareUrlSlug != null) {
            params.push({
                name: 'galleryShareUrlSlug',
                value: shareUrlSlug
            });
        }
        if (redirectUrl != null) {
            params.push({
                name: 'galleryRedirectUrl',
                value: redirectUrl
            });
        }
        if (allowShareUrlChange != null) {
            params.push({
                name: 'allowShareUrlSlugChange',
                value: allowShareUrlChange
            });
        }

        var url = "\/buzzAjaxRequest";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Services.getMyGalleries = function(withPrivateText, onSuccess, extras) {
        var params = [{
            name: 'moveAction',
            value: 'getMyGalleries'
        }];

        if (typeof withPrivateText == "boolean") {
            params.push({
                name: 'withPrivateText',
                value: withPrivateText
            });
        } else {
            params.push({
                name: 'withPrivateText',
                value: true
            });
            extras = onSuccess;
            onSuccess = withPrivateText;
        }

        var url = "\/buzzAjaxRequest";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };


    window.hzmr.push("BuzzAjaxRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End BuzzAjax Ajax Connector  **************/
/************* Start GetMinimalSpaceDataRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ajaz.Services.getMinimalSpaceData = function(matchedUrlString, onSuccess) {
        var params = [{
            name: 'urls',
            value: matchedUrlString
        }];
        var url = '/getMinimalSpaceData';

        HZ.ajaz.AjaxReq.send(url, params, onSuccess);
    };


    window.hzmr.push("GetMinimalSpaceDataRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End GetMinimalSpaceData Ajax Connector  **************/
/************* Start HoverCardRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ajaz.Services.getHoverCardData = function(dataType, dataId, onSuccess) {
        var params = [{
                name: 'type',
                value: dataType
            },
            {
                name: 'id',
                value: dataId
            }
        ];
        var url = '/hoverCard';

        HZ.ajaz.AjaxReq.send(url, params, onSuccess);
    };


    window.hzmr.push("HoverCardRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End HoverCard Ajax Connector  **************/
/************* Start FollowRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ajaz.Services.updateFavorite = function(action, objectId, objectType, onSuccess, extras) {
        var params = [{
                name: 'op',
                value: action
            },
            {
                name: 'i',
                value: objectId
            },
            {
                name: 't',
                value: objectType
            }
        ];

        var url = "\/follow";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    }

    HZ.ajaz.Services.updateFollow = function(operation, username, onSuccess, extras) {
        if (operation != "f" && operation != "u") {
            return false; // invalid operation
        }

        var params = [{
                name: 'op',
                value: operation
            },
            {
                name: 'u',
                value: username
            }
        ];

        var url = "\/follow";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    }



    window.hzmr.push("FollowRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End Follow Ajax Connector  **************/
/************* Start GetMoreUnifiedStoriesAjaxRequest.php Ajax Connector for locale ru-RU**************/
try { // <script>
    HZ.ns('HZ.ajaz.Services.UnifiedStories');
    HZ.ajaz.Services.UnifiedStories.getUnifiedStories = function(fromTimestamp, listsToFetch, onSuccess, extras, page) {
        var params = [{
                name: 'op',
                value: 'getMoreStories'
            },
            {
                name: 'listsToFetch',
                value: listsToFetch
            },
            {
                name: 'fromTimestamp',
                value: JSON.stringify(fromTimestamp)
            }
        ];

        if (typeof page !== "undefined") {
            params.push({
                name: 'page',
                value: page
            });
        }

        var url = "\/getMoreUnifiedStoriesAjax";
        HZ.ajaz.AjaxReq.send(url, params, HZ.activityFeed.NewDataHandler(onSuccess), extras);
    };

    HZ.ajaz.Services.UnifiedStories.hasNewItems = function(from, onSuccess, extras) {
        var params = [{
                name: 'op',
                value: 'hasNewItems'
            },
            {
                name: 'newItemsFrom',
                value: from
            }
        ];

        var url = "\/getMoreUnifiedStoriesAjax";
        HZ.ajaz.AjaxReq.send(url, params, HZ.activityFeed.NewDataHandler(onSuccess), extras);
    };


    window.hzmr.push("GetMoreUnifiedStoriesAjaxRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End GetMoreUnifiedStoriesAjax Ajax Connector  **************/
/************* Start CommentManagerAjaxRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>

    HZ.ajaz.Services.getComments = function(objectType, objectId, numItems, endId, startId, source, languages, isReferrerGalleryFeed, onSuccess, extras) {
        var params = [{
            name: 'op',
            value: 'getComments'
        }];

        if (typeof objectType != 'undefined' && objectType != null)
            params.push({
                name: 'objectType',
                value: objectType
            });
        if (typeof objectId != 'undefined' && objectId != null)
            params.push({
                name: 'objectId',
                value: objectId
            });
        if (typeof numItems != 'undefined' && numItems != null)
            params.push({
                name: 'itemsPerPage',
                value: numItems
            });
        if (typeof endId != 'undefined' && endId != null)
            params.push({
                name: 'fromId',
                value: endId
            });
        if (typeof startId != 'undefined' && startId != null)
            params.push({
                name: 'startId',
                value: startId
            });
        if (typeof source != 'undefined' && source != null)
            params.push({
                name: 'source',
                value: source
            });
        if (typeof languages != 'undefined' && languages != null)
            params.push({
                name: 'preferredLanguages',
                value: languages
            });
        if (typeof isReferrerGalleryFeed != 'undefined' && isReferrerGalleryFeed != null) {
            params.push({
                name: 'isReferrerGalleryFeed',
                value: isReferrerGalleryFeed
            })
        }

        var url = "\/commentManagerAjaxRequest";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };


    HZ.ajaz.Services.deleteComment = function(objectType, objectId, commentId, onSuccess, extras) {
        var params = [{
            name: 'op',
            value: 'deleteComment'
        }];

        if (typeof objectType != 'undefined' && objectType != null)
            params.push({
                name: 'objectType',
                value: objectType
            });
        if (typeof objectId != 'undefined' && objectId != null)
            params.push({
                name: 'objectId',
                value: objectId
            });
        if (typeof commentId != 'undefined' && commentId != null)
            params.push({
                name: 'commentId',
                value: commentId
            });

        var url = "\/commentManagerAjaxRequest";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };

    HZ.ajaz.Services.updateComment = function(objectType, objectId, commentId, body, privacy, source, isHtml, onSuccess, extras) {
        var params = [{
            name: 'op',
            value: 'updateComment'
        }];
        if (typeof objectType != 'undefined' && objectType != null)
            params.push({
                name: 'objectType',
                value: objectType
            });
        if (typeof objectId != 'undefined' && objectId != null)
            params.push({
                name: 'objectId',
                value: objectId
            });
        if (typeof commentId != 'undefined' && commentId != null)
            params.push({
                name: 'commentId',
                value: commentId
            });
        if (typeof body != 'undefined' && body != null)
            params.push({
                name: 'body',
                value: body
            });
        if (typeof privacy != 'undefined' && privacy != null)
            params.push({
                name: 'privacy',
                value: privacy
            });
        if (typeof source != 'undefined' && source != null)
            params.push({
                name: 'source',
                value: source
            });
        if (typeof isHtml != 'undefined' && isHtml != null)
            params.push({
                name: 'isHtml',
                value: isHtml
            });

        var url = "\/commentManagerAjaxRequest";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };




    window.hzmr.push("CommentManagerAjaxRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End CommentManagerAjax Ajax Connector  **************/
/************* Start FeedAjaxRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>

    HZ.ajaz.Services.getOutgoingFeedStories = function(user, fromTimes, renderMode, onSuccess, extras) {
        params = new Array();
        params.push({
            name: 'op',
            value: 'getOutgoing'
        });
        params.push({
            name: 'user',
            value: user
        });
        params.push({
            name: 'fromTimes',
            value: JSON.stringify(fromTimes)
        });
        params.push({
            name: 'renderMode',
            value: renderMode
        });
        var url = "\/feedAjaxRequest";
        HZ.ajaz.AjaxReq.send(url, params, HZ.activityFeed.NewDataHandler(onSuccess), extras);
    };

    HZ.ajaz.Services.getIncomingFeedStories = function(user, fromTimes, renderMode, onSuccess, extras) {
        params = new Array();
        params.push({
            name: 'op',
            value: 'getIncoming'
        });
        params.push({
            name: 'user',
            value: user
        });
        params.push({
            name: 'fromTimes',
            value: JSON.stringify(fromTimes)
        });
        params.push({
            name: 'renderMode',
            value: renderMode
        });
        var url = "\/feedAjaxRequest";
        HZ.ajaz.AjaxReq.send(url, params, HZ.activityFeed.NewDataHandler(onSuccess), extras);
    };



    window.hzmr.push("FeedAjaxRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End FeedAjax Ajax Connector  **************/
/************* Start ContentFlagAjaxRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ns("HZ.ajaz.ContentFlag");
    HZ.ajaz.ContentFlag.addFlag = function(objectType, objectId, type, comment, onSuccess, extras) {
        var params = [{
                name: 'action',
                value: "add"
            },
            {
                name: 'objectType',
                value: objectType
            },
            {
                name: 'objectId',
                value: objectId
            },
            {
                name: 'type',
                value: type
            },
            {
                name: 'comment',
                value: comment
            }
        ];
        var url = "\/contentFlagAjax";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.ContentFlag.updateFlag = function(objectType, objectId, type, comment, status, onSuccess, extras) {
        var params = [{
                name: 'action',
                value: "update"
            },
            {
                name: 'objectType',
                value: objectType
            },
            {
                name: 'objectId',
                value: objectId
            },
            {
                name: 'type',
                value: type
            },
            {
                name: 'comment',
                value: comment
            },
            {
                name: 'status',
                value: status
            }
        ];
        var url = "\/contentFlagAjax";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.ContentFlag.removeFlag = function(objectType, objectId, onSuccess, extras) {
        var params = [{
                name: 'action',
                value: "remove"
            },
            {
                name: 'objectType',
                value: objectType
            },
            {
                name: 'objectId',
                value: objectId
            }
        ];
        var url = "\/contentFlagAjax";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.ContentFlag.COMMENTABLE_FORUM = 4;
    HZ.ajaz.ContentFlag.COMMENTABLE_GALLERY = 2;
    HZ.ajaz.ContentFlag.COMMENT = 9;
    HZ.ajaz.ContentFlag.ANSWER = 6;


    window.hzmr.push("ContentFlagAjaxRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End ContentFlagAjax Ajax Connector  **************/
/************* Start LikeRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ns("HZ.ajaz.Like");
    HZ.ajaz.Like.like = function(action, objectId, objectType, onSuccess, extras) {
        var params = [{
                name: 'action',
                value: action
            },
            {
                name: 'objectId',
                value: objectId
            },
            {
                name: 'objectType',
                value: objectType
            }
        ];

        var url = "\/like";

        return HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Like.SOURCE_LINK_LIKE = 8;


    window.hzmr.push("LikeRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End Like Ajax Connector  **************/
/************* Start ClippingRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ns("HZ.ajaz.Clipping");
    HZ.ajaz.Clipping.clip = function(action, objectId, objectType, onSuccess, extras) {
        var params = [{
                name: 'action',
                value: action
            },
            {
                name: 'objectId',
                value: objectId
            },
            {
                name: 'objectType',
                value: objectType
            }
        ];

        var url = "\/clipping";

        return HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Clipping.SOURCE_LINK_CLIPPING = 300;


    window.hzmr.push("ClippingRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End Clipping Ajax Connector  **************/
/************* Start GetFeaturedSpacesRequest.php Ajax Connector for locale ru-RU**************/
try {
    var FeaturedSpacesAjaxController = {
        getFeaturedSpaces: function(offset, category, style, metroArea, onSuccess, extras) {
            var params = [{
                    name: 'offset',
                    value: offset
                },
                {
                    name: 'cat',
                    value: category
                },
                {
                    name: 'style',
                    value: style
                },
                {
                    name: 'met',
                    value: metroArea
                },
                {
                    name: 'op',
                    value: 'f'
                }
            ];
            var url = "\/getFeaturedSpaces";
            HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
        },
        getFeaturedSpaces2: function(offset, thumbSize, onSuccess, extras) {
            var params = [{
                    name: 'offset',
                    value: offset
                },
                {
                    name: 'tNum',
                    value: thumbSize
                },
                {
                    name: 'op',
                    value: 'f2'
                }
            ];
            var url = "\/getFeaturedSpaces";
            HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
        },
        getRecommendedSpaces: function(spacesSubset, category, onSuccess, extras) {
            var givenSpacesIds = spacesSubset.join(",");
            var params = [{
                    name: 'bs',
                    value: givenSpacesIds
                },
                {
                    name: 'cat',
                    value: category
                },
                {
                    name: 'op',
                    value: 'r'
                }
            ];
            var url = "\/getFeaturedSpaces";
            HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
        },
        publishGallerySpacesToHomeSlideshow: function(gid, onSuccess, extras) {
            var params = [{
                    name: 'gid',
                    value: gid
                },
                {
                    name: 'op',
                    value: 'p'
                }
            ];
            var url = "\/getFeaturedSpaces";
            HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
        }
    }


    window.hzmr.push("GetFeaturedSpacesRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End GetFeaturedSpaces Ajax Connector  **************/
/************* Start TipBoxRequest.php Ajax Connector for locale ru-RU**************/
try {
    //<script>
    HZ.ajaz.Services.tipBox = function(tipId, onSuccess, extras) {
        var params = [{
            name: 'tipId',
            value: tipId
        }];

        var url = "\/tipBox";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    }


    window.hzmr.push("TipBoxRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End TipBox Ajax Connector  **************/
/************* Start SetVisitorPropertyRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ajaz.Services.VISITOR_PROPERTY_SHOW_SAVE_PHOTO_TIP = "onboarding.showSavePhotoTip";
    HZ.ajaz.Services.VISITOR_PROPERTY_PRIMARY_ONBOARDING_TOOLTIP = "onboarding.primaryTooltip";
    HZ.ajaz.Services.VISITOR_PROPERTY_SHOW_SAVE_PHOTO_TIP_ON = "on";
    HZ.ajaz.Services.VISITOR_PROPERTY_SHOW_SAVE_PHOTO_TIP_OFF = "off";
    HZ.ajaz.Services.VISITOR_PROPERTY_IDEABOOK_TIP_ALREADY_SHOWN = "onboarding.ideaBookTipAlreadyShown";
    HZ.ajaz.Services.VISITOR_PROPERTY_IDEABOOK_TIP_PHOTO_SAVED = "onboarding.ideaBookTipPhotoSaved";
    HZ.ajaz.Services.VISITOR_PROPERTY_IDEABOOK_NAVIGATION_SHOWN = "ideaBookNavigationShown";
    HZ.ajaz.Services.VISITOR_PROPERTY_SIGNED_OUT_NOTIFICATION = "push_signed_out";
    HZ.ajaz.Services.VISITOR_PROPERTY_PRO_DIRECTORY_WIZARD_SHOWN = "proDirectoryWizardShown";
    HZ.ajaz.Services.VISITOR_PROPERTY_ODS_PROMO_DISMISSED = "odsPromoDismiss";
    HZ.ajaz.Services.VISITOR_PROPERTY_TRADE_PROGRAM_NOTICE_DISMISS = "tpMemberNoticeDismiss";
    HZ.ajaz.Services.VISITOR_PROPERTY_TRADE_PROMO = "tradePromoBanner";
    HZ.ajaz.Services.VISITOR_PROPERTY_TRADE_PROMO_DIALOG = "tradePromoDialog";
    HZ.ajaz.Services.setVisitorProperty = function(propertyName, value, onSuccess, extras) {
        var params = [{
                name: 'prop',
                value: propertyName
            },
            {
                name: 'v',
                value: value
            }
        ];
        var url = "\/setVisitorProperty";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };

    HZ.ajaz.Services.COOKIE_BANNER = "cookieBanner";


    window.hzmr.push("SetVisitorPropertyRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End SetVisitorProperty Ajax Connector  **************/
/************* Start SearchSuggestionRequest.php Ajax Connector for locale ru-RU**************/
try {
    HZ.ajaz.Services.searchTypeAhead = function(textFragment, searchType, source, onSuccess, extras, bd) {
        source = source || c;
        var params = [{
                name: 'query',
                value: textFragment
            },
            {
                name: 'type',
                value: searchType
            },
            {
                name: 'bd',
                value: bd
            },
            {
                name: 'source',
                value: source
            }
        ];
        var url = "\/searchSuggestion";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    }


    window.hzmr.push("SearchSuggestionRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End SearchSuggestion Ajax Connector  **************/
/************* Start VerificationEmailRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ajaz.Services.sendVerificationEmail = function(operation, isNewUser, onSuccess, extras) {
        var params = [{
                name: 'op',
                value: operation
            },
            {
                name: 'isNewUser',
                value: isNewUser
            }
        ];
        var url = "\/verificationEmail";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };


    window.hzmr.push("VerificationEmailRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End VerificationEmail Ajax Connector  **************/
/************* Start BuzzRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ns("HZ.ajaz.Services");
    /*
     * Add photo to multiple galleries
     */
    HZ.ajaz.Services.addToGalleries = function(spaceId, galleryIds, privacy, comment, onSuccess, extras) {
        var params = [{
                name: 'op',
                value: "m"
            },
            {
                name: 'gids',
                value: galleryIds
            },
            {
                name: 'id',
                value: spaceId
            },
            {
                name: 'privacy',
                value: privacy
            },
            {
                name: 'comments',
                value: comment
            },
        ];

        var url = "\/addToGallery";
        return HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };

    HZ.ajaz.Services.addToGallery = function(spaceId, newGalleryName, existingGalleryId, privacy, comment, onSuccess, extras) {
        var params = [{
                name: 'op',
                value: "a"
            },
            {
                name: 'id',
                value: spaceId
            },
            {
                name: 'gtitle',
                value: newGalleryName
            },
            {
                name: 'gid',
                value: existingGalleryId
            },
            {
                name: 'privacy',
                value: privacy
            },
            {
                name: 'comments',
                value: comment
            },
        ];
        var url = "\/addToGallery";
        return HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    /*
     * Submis a photo-question to the Discussions section
     */
    HZ.ajaz.Services.postToForum = function(spaceId, title, comments, topic, onSuccess, extras) {
        var params = [{
                name: 'op',
                value: "f"
            },
            {
                name: 'id',
                value: spaceId
            },
            {
                name: 'title',
                value: title
            },
            {
                name: 'comments',
                value: comments
            },
            {
                name: 'topic',
                value: topic
            },
        ];
        var url = "\/addToGallery";
        return HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };


    window.hzmr.push("BuzzRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End Buzz Ajax Connector  **************/
/************* Start GetEmbedSpaceCodeRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ajaz.Services.getEmbedSpaceCode = function(spaceId, onSuccess) {
        var params = [{
            name: 'spaceId',
            value: spaceId
        }];
        var extras = {
            //				type: 'GET'
            type: 'POST'
        };
        var url = "\/getEmbedSpaceCode";

        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    }


    window.hzmr.push("GetEmbedSpaceCodeRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End GetEmbedSpaceCode Ajax Connector  **************/
/************* Start GetQuestionsForSpaceRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ns("HZ.spaceActions");
    HZ.spaceActions.getExistingQuestions = function(spaceId, onSuccess, extras) {
        var params = [{
            name: 'id',
            value: spaceId
        }];
        var url = "\/getQuestionsForSpace";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    }



    window.hzmr.push("GetQuestionsForSpaceRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End GetQuestionsForSpace Ajax Connector  **************/
/************* Start TrustPilotAjaxRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ns("HZ.TrustPilot");
    HZ.TrustPilot.Settings = {
        getTrustPilotUrl: "getTrustPilotUrl",
        setTrustPilotUserPreference: "setTrustPilotUserPreference"
    };

    HZ.ajaz.Services.getTrustPilotUrl = function(op, onSuccess, extras) {
        var params = [{
            name: 'op',
            value: op
        }];
        var url = "\/trustPilotAjax";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };
    HZ.ajaz.Services.setTrustPilotUserPreference = function(op, onSuccess, extras) {
        var params = [{
            name: 'op',
            value: op
        }];
        var url = "\/trustPilotAjax";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };


    window.hzmr.push("TrustPilotAjaxRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End TrustPilotAjax Ajax Connector  **************/
/************* Start WelcomeToHouzzAjaxRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ns("HZ.ajaz.WelcomeToHouzz");
    /*
     * Save basic profile (first name, last name and zip code)
     */
    HZ.ajaz.Services.saveBasicProfile = function(firstName, lastName, zipCode, onSuccess, extras) {
        var params = [{
                name: 'op',
                value: "saveBasicProfile"
            },
            {
                name: 'firstName',
                value: firstName
            },
            {
                name: 'lastName',
                value: lastName
            },
            {
                name: 'zipCode',
                value: zipCode
            }
        ];

        var url = "\/welcomeToHouzzAjax";
        return HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };


    window.hzmr.push("WelcomeToHouzzAjaxRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End WelcomeToHouzzAjax Ajax Connector  **************/
/************* Start UILoggerAjaxRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ajaz.Services.logCountInTSDB = function(metricTrackingPrefix, metricTrackingName, count /*optional, default is 1*/ , metricPrefix /*optional, default is "perf"*/ , tags /*Will be used to filter result*/ ) {
        if (!metricTrackingPrefix || !metricTrackingName) {
            return (new $.Deferred()).reject().promise();
        }

        var params = [{
                name: 'api',
                value: 'logCount'
            },
            {
                name: 'metricPrefix',
                value: metricPrefix || ""
            },
            {
                name: 'metricTrackingPrefix',
                value: metricTrackingPrefix
            },
            {
                name: 'metricTrackingName',
                value: metricTrackingName
            },
            {
                name: 'metricCount',
                value: $.isNumeric(count) && count > 0 ? count : 1
            },
            {
                name: 'metricTags',
                value: tags ? JSON.stringify(tags) : null
            }
        ];
        var url = "\/uiLoggerAjax";
        return HZ.ajaz.AjaxReq.send(url, params, null, {
            error: function() {}
        });
    };



    window.hzmr.push("UILoggerAjaxRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End UILoggerAjax Ajax Connector  **************/
/************* Start JsErrorLoggerAjaxRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>
    HZ.ajaz.Services.logJsErr = function(errLog) {
        var rrid = errLog['rrid'],
            m = errLog['m'],
            f = errLog['f'],
            l = errLog['l'],
            url = errLog['url'],
            cws = errLog['cws'],
            b = navigator.appName,
            v = navigator.appVersion,
            ce = navigator.cookieEnabled,
            p = navigator.platform,
            j = errLog['j'],
            st = errLog['st'],
            pc = errLog['pc'],
            r = (document.referrer ? encodeURIComponent(document.referrer) : ""),
            rv = "",
            env = errLog.env ? errLog.env : 'c'; //default env to c (c2), j if it's from jukwaa
        if (window.hzmr && window.hzmr.version) {
            rv = window.hzmr.version;
        }
        var params = [{
                name: 'rrid',
                value: rrid
            },
            {
                name: 'm',
                value: m
            },
            {
                name: 'f',
                value: f
            },
            {
                name: 'l',
                value: l
            },
            {
                name: 'url',
                value: url
            },
            {
                name: 'cws',
                value: cws
            },
            {
                name: 'b',
                value: b
            },
            {
                name: 'v',
                value: v
            },
            {
                name: 'ce',
                value: ce
            },
            {
                name: 'p',
                value: p
            },
            {
                name: 'j',
                value: j
            },
            {
                name: 'st',
                value: st
            },
            {
                name: 'pc',
                value: pc
            },
            {
                name: 'r',
                value: r
            },
            {
                name: 'rv',
                value: rv
            },
            {
                name: 'env',
                value: env
            }
        ];

        var url = "\/jsErrAjax";

        HZ.ajaz.AjaxReq.send(url, params);
    };


    window.hzmr.push("JsErrorLoggerAjaxRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End JsErrorLoggerAjax Ajax Connector  **************/
/************* Start SearchKeywordRequest.php Ajax Connector for locale ru-RU**************/
try { //<script>

    HZ.ajaz.Services.autoCompleteKeyword = function(textFragment, type, onSuccess, extras) {
        var params = [{
                name: 'query',
                value: textFragment
            },
            {
                name: 'type',
                value: type
            }
        ];
        var url = "\/searchKeyword";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };

    HZ.ajaz.Services.autoCompleteTags = function(textFragment, onSuccess, extras) {
        var params = [{
                name: 'action',
                value: 'searchTags'
            },
            {
                name: 'query',
                value: textFragment
            }
        ];
        var url = "\/searchKeyword";
        HZ.ajaz.AjaxReq.send(url, params, onSuccess, extras);
    };


    window.hzmr.push("SearchKeywordRequest:3985");
} catch (err) {
    HZ.utils.Logger.sendJsExceptionStackTrace(err)
}

/*************  End SearchKeyword Ajax Connector  **************/