/* concatenation of tpl_home_2016, fan_controls.js, fan_controls_2.js, video_element_wrapper.js, video.js, crossframe.js, fan_action.js, carousel.js, bcweekly.js, bcdaily.js, discover_vm.js, notable_video.js, notable_vm.js, homefeed.js, salesfeed_2015.js, fan_spotlight_2015.js, home.js, email_intake_vm.js */

/* ------------- tpl_home_2016 --------------- */

if ('undefined' === typeof window.Templ) {
    Log.server('Premature template registration: ' + ["home/bcweekly_email_panel", "home_2016/bcweekly", "home_2016/bcweekly_tracks", "home_2016/bcweekly_tracks_inner", "home_2016/bcweekly_player", "home_2016/bcweekly_browse", "home_2016/bcweekly_browse_inner", "home_2016/bcweekly_playing_tab_phone", "home_2016/bcweekly_share_phone", "home/home_2015/salesfeed_item", "home/home_2015/spotlight_content", "fan/fan_action_panel", "home/home_2015/discover_inline_player", "_autocomplete_search_widget", "home/header_2015", "rock_the_vote_banner", "fan/signup/fan_app_download_banner", "home/header_gift_balance"], 'warn');
} else {
    Templ.register({
        "home/bcweekly_email_panel": ["<div class=\"bcweekly-email-panel\" tabindex=\"0\">\n    <div>\n        <h4 class=\"panel-title\">Copy this link to share the show:</h4>\n        <div>\n            <input class=\"email-field\" type=\"text\" value=\"", {
            "filters": [
                ["a", []]
            ],
            "name": "siteroot",
            "type": "variable"
        }, "/?show=", {
            "filters": [
                ["u", []],
                ["a", []]
            ],
            "name": "show.show_id",
            "type": "variable"
        }, "&amp;play=1\" readonly>\n        </div>\n    </div>\n    <a class=\"close\" href=\"#\"><span class=\"bc-ui\">close</span></a>\n</div>"],
        "home_2016/bcweekly": ["<div id=\"bcweekly-inner\" class=\"bd-section bcweekly", {
            "blocks": [{
                "attachment": [" unpublished"],
                "expression": "!bcw.published_date ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, " ", {
            "blocks": [{
                "attachment": ["expanded"],
                "expression": "bcw.expanded ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, " ", {
            "blocks": [{
                "attachment": ["dark-mode"],
                "expression": "bcw.dark_mode ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\"\n\t", {
            "blocks": [{
                "attachment": ["\n\tstyle=\"background-image: url(", {
                    "blocks": [{
                        "attachment": [{
                            "filters": [
                                ["image_url", ["'weekly_mobile_web'"]]
                            ],
                            "name": "bcw.show_v2_image_id",
                            "type": "variable"
                        }],
                        "expression": "bcw.show_v2_image_id ",
                        "type": "ncondition"
                    }, {
                        "attachment": [{
                            "filters": [
                                ["image_url", ["'weekly_mobile_web'"]]
                            ],
                            "name": "bcw.show_image_id",
                            "type": "variable"
                        }],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, ");\"\n\t"],
                "expression": "is_phone ",
                "type": "ncondition"
            }, {
                "attachment": ["\n\tstyle=\"background-image: url(", {
                    "blocks": [{
                        "attachment": [{
                            "filters": [
                                ["image_url", ["'original'"]]
                            ],
                            "name": "bcw.show_v2_image_id",
                            "type": "variable"
                        }],
                        "expression": "bcw.show_v2_image_id ",
                        "type": "ncondition"
                    }, {
                        "attachment": [{
                            "filters": [
                                ["image_url", ["'original'"]]
                            ],
                            "name": "bcw.show_image_id",
                            "type": "variable"
                        }],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, ");\"\n\t"],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n>\n    <div class=\"row\">\n        <div class=\"close-show-mobile\">\n            <a href=\"#\" class=\"close-show-inner\">\n                <svg class=\"close-show-icon\" viewBox=\"0 0 12 12\"><use xlink:href=\"#close-weekly-archive\"></svg>\n            </a>\n        </div>\n    </div>\n</div>\n\n<div class=\"bcweekly-info bd-section\">\n    <div class=\"row\">\n        <div class=\"bcweekly-info-inner\">\n            ", {
            "template_name": "'home_2016/bcweekly_player'",
            "type": "include"
        }, "\n            ", {
            "template_name": "'home_2016/bcweekly_tracks'",
            "type": "include"
        }, "\n\n            <div class=\"close-show-desktop\">\n                <a href=\"#\" class=\"close-show-inner\"><svg class=\"close-show-icon\" viewBox=\"0 0 12 12\"><use xlink:href=\"#close-weekly-archive\"></svg><span class=\"close-show-text\">close show</span></a>\n            </div>\n        </div>\n    </div>\n\n    ", {
            "template_name": "'home_2016/bcweekly_browse'",
            "type": "include"
        }, "\n</div>"],
        "home_2016/bcweekly_tracks": ["<div class=\"bcweekly-tracks\">\n</div>"],
        "home_2016/bcweekly_tracks_inner": ["<ol class=\"bcweekly-track-list\">\n\n    ", {
            "attribs": {},
            "collection_name": "bcw.tracks",
            "nodelist": ["\n        ", {
                "blocks": [{
                    "attachment": ["\n            ", {
                        "expression": "\"album\" ",
                        "type": "let",
                        "variable": "tralbum_type"
                    }, "\n            ", {
                        "nodelist": ["a", {
                            "filters": [],
                            "name": "trk.album_id",
                            "type": "variable"
                        }],
                        "to": "tralbum_key",
                        "type": "capture"
                    }, "\n        "],
                    "expression": "trk.album_id ",
                    "type": "ncondition"
                }, {
                    "attachment": ["\n            ", {
                        "expression": "\"track\" ",
                        "type": "let",
                        "variable": "tralbum_type"
                    }, "\n            ", {
                        "nodelist": ["t", {
                            "filters": [],
                            "name": "trk.track_id",
                            "type": "variable"
                        }],
                        "to": "tralbum_key",
                        "type": "capture"
                    }, "\n        "],
                    "type": "else_ncondition"
                }],
                "type": "ef"
            }, "\n\n        <li class=\"row bcweekly-track ", {
                "blocks": [{
                    "attachment": ["first-track"],
                    "expression": "forloop.index0 == 0 ",
                    "type": "ncondition"
                }],
                "type": "ef"
            }, "\" data-index=\"", {
                "filters": [],
                "name": "forloop.index0",
                "type": "variable"
            }, "\">\n            <div class=\"col col-2-16 track-image-cell\">\n                <a href=\"", {
                "filters": [
                    ["tralbum_url", []],
                    ["a", []]
                ],
                "name": "trk.url_hints",
                "type": "variable"
            }, "?from=hpbcw\" data-collapsed-href=\"", {
                "filters": [
                    ["tralbum_url", []],
                    ["a", []]
                ],
                "name": "trk.url_hints",
                "type": "variable"
            }, "?from=hpbcw\" data-expanded-href=\"", {
                "filters": [
                    ["art_url", ["'screen'"]]
                ],
                "name": "trk.track_art_id",
                "type": "variable"
            }, "\">\n                    <span class=\"ratio-1-1\">\n                        <img ", {
                "filters": [
                    ["art", ["'art_thumbthumb'"]]
                ],
                "name": "trk.track_art_id",
                "type": "variable"
            }, " alt=\"\">\n                    </span>\n                </a>\n            </div>\n            <div class=\"col col-9-16 track-details-cell\">\n                <p class=\"track-details\">\n                    <a class=\"track-details\" href=\"", {
                "filters": [
                    ["tralbum_url", []],
                    ["a", []]
                ],
                "name": "trk.url_hints",
                "type": "variable"
            }, "?from=hpbcw\" target=\"_blank\">\n                        <span class=\"track-title\">", {
                "filters": [
                    ["h", []]
                ],
                "name": "trk.title",
                "type": "variable"
            }, "</span>\n                        ", {
                "blocks": [{
                    "attachment": ["from <span class=\"track-album\">", {
                        "filters": [
                            ["h", []]
                        ],
                        "name": "trk.album_title",
                        "type": "variable"
                    }, "</span>"],
                    "expression": "trk.album_title ",
                    "type": "ncondition"
                }],
                "type": "ef"
            }, "\n                    </a>\n                </p>\n                <p class=\"track-artist\">\n                    by <a href=\"", {
                "filters": [
                    ["band_url", []],
                    ["a", []]
                ],
                "name": "trk.url_hints",
                "type": "variable"
            }, "?from=hpbcw\"target=\"_blank\">", {
                "filters": [
                    ["h", []]
                ],
                "name": "trk.artist",
                "type": "variable"
            }, "</a>\n                </p>\n            </div>\n            <div class=\"col col-4-16\">\n                <div class=\"collect-item-container collection-controls-cell collect-item disabled\">\n                    <span class=\"buy-now collect-item\" data-collect-item=\"", {
                "filters": [
                    ["a", []]
                ],
                "name": "tralbum_key",
                "type": "variable"
            }, "\" data-collect-band=\"", {
                "filters": [
                    ["a", []]
                ],
                "name": "trk.band_id",
                "type": "variable"
            }, "\">\n                        <a href=\"", {
                "filters": [
                    ["tralbum_url", []],
                    ["a", []]
                ],
                "name": "trk.url_hints",
                "type": "variable"
            }, "?from=hpbcwbn\" target=\"_blank\" class=\"collect-link txt\"><span class=\"txt\">buy</span></a>\n                    </span>\n                    <span class=\"purchased-msg collect-item\" data-collect-item=\"", {
                "filters": [
                    ["a", []]
                ],
                "name": "tralbum_key",
                "type": "variable"
            }, "\" data-collect-band=\"", {
                "filters": [
                    ["a", []]
                ],
                "name": "trk.band_id",
                "type": "variable"
            }, "\">\n                        <a href=\"", {
                "filters": [
                    ["a", []]
                ],
                "name": "fan_data.url",
                "type": "variable"
            }, "\" target=\"_blank\">\n                            <span class=\"bc-ui2 collect-item-icon\"></span><span class=\"txt\">you own this</span>\n                        </a>\n                    </span>\n                    <span class=\"wishlist-msg collect-item ", {
                "blocks": [{
                    "attachment": ["logged-out"],
                    "expression": "!fan_data.id ",
                    "type": "ncondition"
                }],
                "type": "ef"
            }, "\" title=\"Add this album to your wishlist\" data-collect-item=\"", {
                "filters": [
                    ["a", []]
                ],
                "name": "tralbum_key",
                "type": "variable"
            }, "\" data-collect-band=\"", {
                "filters": [
                    ["a", []]
                ],
                "name": "trk.band_id",
                "type": "variable"
            }, "\" data-collect-stat=\"homepage_bcw_wishlist\" ", {
                "blocks": [{
                    "attachment": ["data-lo-querystr=\"", {
                        "filters": [
                            ["a", []]
                        ],
                        "name": "trk.lo_querystr",
                        "type": "variable"
                    }, "\" data-lo-from=\"hpbcwwlo\""],
                    "expression": "!fan_data.id ",
                    "type": "ncondition"
                }],
                "type": "ef"
            }, " data-collect-title=\"", {
                "blocks": [{
                    "attachment": [{
                        "filters": [
                            ["a", []]
                        ],
                        "name": "trk.album_title",
                        "type": "variable"
                    }],
                    "expression": "trk.album_title ",
                    "type": "ncondition"
                }, {
                    "attachment": [{
                        "filters": [
                            ["a", []]
                        ],
                        "name": "trk.title",
                        "type": "variable"
                    }],
                    "type": "else_ncondition"
                }],
                "type": "ef"
            }, "\">\n                        <a href=\"#\" target=\"_blank\" class=\"collect-link\">\n                            <span class=\"bc-ui2 collect-item-icon\"></span><span class=\"txt\">wishlist</span>\n                        </a>\n                    </span>\n                    <span class=\"wishlisted-msg collect-item\" data-collect-item=\"", {
                "filters": [
                    ["a", []]
                ],
                "name": "tralbum_key",
                "type": "variable"
            }, "\" data-collect-band=\"", {
                "filters": [
                    ["a", []]
                ],
                "name": "trk.band_id",
                "type": "variable"
            }, "\" data-collect-stat=\"homepage_bcw_wishlist\">\n                        <a href=\"#\" title=\"Remove this album from your wishlist\" class=\"collect-link\">\n                            <span class=\"bc-ui2 collect-item-icon\"></span><span class=\"txt\">in wishlist</span>\n                        </a>\n                    </span>\n                </div>\n            </div>\n            <div class=\"col col-1-16\">\n                <p class=\"track-number\">", {
                "filters": [
                    ["h", []]
                ],
                "name": "forloop.index",
                "type": "variable"
            }, "</p>\n            </div>\n            <div class=\"row track-large\">\n                <div class=\"col col-8-15\">\n                    <a href=\"", {
                "filters": [
                    ["tralbum_url", []],
                    ["a", []]
                ],
                "name": "trk.url_hints",
                "type": "variable"
            }, "?from=hpbcw\" class=\"ratio-1-1 popupImage\">\n                        <img ", {
                "filters": [
                    ["art", ["'art_solo_feature'"]]
                ],
                "name": "trk.track_art_id",
                "type": "variable"
            }, " alt=\"\">\n                    </a>\n                </div>\n                <div class=\"col col-7-15\">\n                    <p class=\"track-counter\">Currently playing <span>", {
                "filters": [
                    ["h", []]
                ],
                "name": "forloop.index",
                "type": "variable"
            }, "</span></p>\n\n                    <p class=\"track-details\">\n                        <a href=\"", {
                "filters": [
                    ["tralbum_url", []],
                    ["a", []]
                ],
                "name": "trk.url_hints",
                "type": "variable"
            }, "?from=hpbcw\" target=\"_blank\">\n                            <span class=\"track-title\">", {
                "filters": [
                    ["h", []]
                ],
                "name": "trk.title",
                "type": "variable"
            }, "</span> \n                            ", {
                "blocks": [{
                    "attachment": ["from <span class=\"track-album\">", {
                        "filters": [
                            ["h", []]
                        ],
                        "name": "trk.album_title",
                        "type": "variable"
                    }, "</span>"],
                    "expression": "trk.album_title ",
                    "type": "ncondition"
                }],
                "type": "ef"
            }, "\n                        </a>\n                    </p>\n\n                    ", {
                "blocks": [{
                    "attachment": ["\n                    <a class=\"track-bio-img popupImage\" href=\"", {
                        "filters": [
                            ["image_url", ["'bio_screen'"]]
                        ],
                        "name": "trk.bio_image_id",
                        "type": "variable"
                    }, "\">\n                        <img ", {
                        "filters": [
                            ["image", ["32"]]
                        ],
                        "name": "trk.bio_image_id",
                        "type": "variable"
                    }, " alt=\"\">\n                    </a>\n                    "],
                    "expression": "trk.bio_image_id ",
                    "type": "ncondition"
                }],
                "type": "ef"
            }, "\n                    \n                    <p class=\"track-artist\">by <a href=\"", {
                "filters": [
                    ["band_url", []],
                    ["a", []]
                ],
                "name": "trk.url_hints",
                "type": "variable"
            }, "?from=hpbcw\" target=\"_blank\">", {
                "filters": [
                    ["h", []]
                ],
                "name": "trk.artist",
                "type": "variable"
            }, "</a></p>\n                    ", {
                "blocks": [{
                    "attachment": ["\n                        <p class=\"track-loc\">\n                            ", {
                        "filters": [
                            ["h", []]
                        ],
                        "name": "trk.location_text",
                        "type": "variable"
                    }, "\n                        </p>\n                    "],
                    "expression": "trk.location_text ",
                    "type": "ncondition"
                }],
                "type": "ef"
            }, "\n                </div>\n                <div class=\"collect-item-container disabled\">\n                    \n                    <ul class=\"collect-item ", {
                "blocks": [{
                    "attachment": ["logged-out"],
                    "expression": "!fan_data.id ",
                    "type": "ncondition"
                }],
                "type": "ef"
            }, "\" data-collect-item=\"", {
                "filters": [
                    ["a", []]
                ],
                "name": "tralbum_key",
                "type": "variable"
            }, "\" data-collect-band=\"", {
                "filters": [
                    ["a", []]
                ],
                "name": "trk.band_id",
                "type": "variable"
            }, "\" data-collect-stat=\"homepage_bcw_wishlist\" ", {
                "blocks": [{
                    "attachment": ["data-lo-querystr=\"", {
                        "filters": [
                            ["a", []]
                        ],
                        "name": "trk.lo_querystr",
                        "type": "variable"
                    }, "\" data-lo-from=\"hpnnwlo\""],
                    "expression": "!fan_data.id ",
                    "type": "ncondition"
                }],
                "type": "ef"
            }, " data-collect-title=\"", {
                "blocks": [{
                    "attachment": [{
                        "filters": [
                            ["a", []]
                        ],
                        "name": "trk.album_title",
                        "type": "variable"
                    }],
                    "expression": "trk.album_title ",
                    "type": "ncondition"
                }, {
                    "attachment": [{
                        "filters": [
                            ["a", []]
                        ],
                        "name": "trk.title",
                        "type": "variable"
                    }],
                    "type": "else_ncondition"
                }],
                "type": "ef"
            }, "\">\n                        <li class=\"item-container buy-now\">\n                            <a href=\"", {
                "filters": [
                    ["tralbum_url", []],
                    ["a", []]
                ],
                "name": "trk.url_hints",
                "type": "variable"
            }, "?from=hpbcwbn\" target=\"_blank\" class=\"nav_button nav_button_buy\" id=\"nav_button_buy\">buy now</a>\n                        </li>\n                        <li class=\"item-container wishlist\">\n                            <span class=\"purchased-msg collection-btn\">\n                                <a href=\"", {
                "filters": [
                    ["a", []]
                ],
                "name": "fan_data.url",
                "type": "variable"
            }, "\">\n                                    <span class=\"bc-ui2 collect-item-icon\"></span><span class=\"txt\">you own this</span>\n                                </a>\n                            </span>\n                            <span class=\"wishlist-msg collection-btn\" title=\"Add this album to your wishlist\">\n                                <a href=\"#\" id=\"nav_button_collect\" target=\"_blank\" class=\"collect-link\">\n                                    <span class=\"bc-ui2 collect-item-icon\"></span><span class=\"txt\">wishlist</span>\n                                </a>\n                            </span>\n                            <span class=\"wishlisted-msg collection-btn\">\n                                <span title=\"Remove this album from your wishlist\">\n                                    <a href=\"#\" id=\"nav_button_uncollect\" class=\"collect-link\">\n                                        <span class=\"bc-ui2 collect-item-icon\"></span><span class=\"txt\">in wishlist</span>\n                                    </a>\n                                </span>\n                            </span>\n                        </li>\n                        <li class=\"item-container hear-more\">\n                            <a href=\"", {
                "filters": [
                    ["tralbum_url", []],
                    ["a", []]
                ],
                "name": "trk.url_hints",
                "type": "variable"
            }, "?from=hpbcw\" target=\"_blank\">visit album page &rarr;</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </li>\n\n    "],
            "reversed": null,
            "type": "for",
            "variable_name": "trk"
        }, "\n</ol>"],
        "home_2016/bcweekly_player": ["<div class=\"bcweekly-player\">\n    <div class=\"col\">\n        <a href=\"#\" class=\"play-btn\"", {
            "blocks": [{
                "attachment": [" style=\"background-color: #", {
                    "filters": [
                        ["a", []]
                    ],
                    "name": "bcw.button_color",
                    "type": "variable"
                }, "\""],
                "expression": "bcw.button_color ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "><span class=\"icon\"></span></a>\n    </div>\n    <div class=\"col\">\n        ", {
            "blocks": [{
                "attachment": ["\n            <ul class=\"bcweekly-tabs\">\n                <li class=\"bcweekly-tab tab-active\"><a href=\"#bcweekly-details-tab\" class=\"show-details\">Details</a></li>\n                <li class=\"bcweekly-tab disabled\"><a href=\"#bcweekly-playing-tab\" class=\"show-playing\">Now Playing</a></li>\n            </ul>\n            <div class=\"tab-content\">\n                <div id=\"bcweekly-details-tab\">\n                    <h2 class=\"bcweekly-title\">Bandcamp Weekly <em>", {
                    "filters": [
                        ["time", ["6"]],
                        ["h", []]
                    ],
                    "name": "bcw.date",
                    "type": "variable"
                }, "</em></h2>\n                    <p class=\"bcweekly-desc\">", {
                    "filters": [
                        ["h", []]
                    ],
                    "name": "bcw.desc",
                    "type": "variable"
                }, "</p>\n                    <p class=\"bcweekly-credits\">", {
                    "filters": [],
                    "name": "bcw.image_caption",
                    "type": "variable"
                }, "</p>\n                </div>\n                <div id=\"bcweekly-playing-tab\" style=\"display: none;\">\n                </div>\n            </div>\n            <p class=\"bcweekly-links-1\"><a href=\"#\" class=\"bcweekly-shows-link\">past shows</a></p>\n            <p class=\"bcweekly-links-2\"><a href=\"#\" class=\"bcweekly-shows-link\">past shows</a></p>\n            <p class=\"bcweekly-links-3\"><a href=\"#\" class=\"bcweekly-tracks-link\">Tracklist</a> <a href=\"#\" class=\"bcweekly-shows-link\">Past Shows</a> <a class=\"bcweekly-share-link\" href=\"#\">Share this Show</a></p>\n        "],
                "expression": "is_phone ",
                "type": "ncondition"
            }, {
                "attachment": ["\n            <h2 class=\"bcweekly-title\">Bandcamp Weekly <em>", {
                    "filters": [
                        ["time", ["6"]],
                        ["h", []]
                    ],
                    "name": "bcw.date",
                    "type": "variable"
                }, "</em></h2>\n            <p class=\"bcweekly-desc\">", {
                    "filters": [
                        ["h", []]
                    ],
                    "name": "bcw.desc",
                    "type": "variable"
                }, "</p>\n            <p class=\"bcweekly-credits\">", {
                    "filters": [],
                    "name": "bcw.image_caption",
                    "type": "variable"
                }, "</p>\n            <p class=\"bcweekly-links-1\"><a href=\"#\" class=\"bcweekly-shows-link\">past shows</a></p>\n            <div class=\"bcweekly-links-2\"><a href=\"#\" class=\"bcweekly-shows-link\">past shows</a><a class=\"bcweekly-share-link\" href=\"#\">share this show</a>\n            <ul class=\"social-controls\" data-url=\"", {
                    "filters": [
                        ["a", []]
                    ],
                    "name": "siteroot",
                    "type": "variable"
                }, "/?show=", {
                    "filters": [
                        ["u", []],
                        ["a", []]
                    ],
                    "name": "bcw.show_id",
                    "type": "variable"
                }, "&amp;play=1\">\n                <li class=\"facebook-share-ctrl\" data-stat=\"homepage_bcw_fb_like\">\n                    <a class=\"facebook-link\" title=\"Share on Facebook\"><span class=\"bc-home\"></span></a>\n                </li>\n                <li class=\"twitter-ctrl\" data-text=\"I'm listening to the Bandcamp Weekly &ndash; ", {
                    "filters": [
                        ["a", []]
                    ],
                    "name": "bcw.subtitle",
                    "type": "variable"
                }, ":\" data-stat=\"homepage_bcw_tweet\">\n                    <a class=\"twitter-link\" title=\"Share on Twitter\"><span class=\"bc-home\"></span></a>\n                </li>\n                \n                <li class=\"trigger-email-panel\">\n                    <a href=\"#\" class=\"email-link\" title=\"Share a link to this show\"><span class=\"bc-home\"></span></a>\n                </li>\n            </ul>\n            </div>\n            <p class=\"bcweekly-links-3\"><a href=\"#\" class=\"bcweekly-tracks-link\">Tracklist</a> <a href=\"#\" class=\"bcweekly-shows-link\">Past Shows</a> <a class=\"bcweekly-share-link\" href=\"#\">Share this Show</a>\n            </p>\n\n        "],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n    </div>\n    <div class=\"row bcweekly-scrubber\">\n        <div class=\"scrubber\">\n            <div class=\"scrubber-buffer\" style=\"width: 0%;\"></div>\n            <div class=\"scrubber-thumb ui-draggable\"></div>\n        </div>\n        <div class=\"scrubber-time\"><div class=\"time-output\">00:00 / --:--</div></div>\n    </div>\n    <span class=\"bcweekly-player-fade\"></span>\n</div>"],
        "home_2016/bcweekly_browse": ["<div class=\"bcweekly-browse hidden\">\n</div>"],
        "home_2016/bcweekly_browse_inner": ["<div class=\"bcweekly-browse-inner\">\n    <h3 class=\"bcweekly-browse-heading\">The Bandcamp Weekly archive</h3>\n    <ol class=\"browse-list\">\n        ", {
            "expression": "bcw_seq.length ",
            "type": "let",
            "variable": "episode_number"
        }, "\n        ", {
            "attribs": {},
            "collection_name": "bcw_seq",
            "nodelist": ["\n            <li class=\"col bcweekly-browse-item", {
                "blocks": [{
                    "attachment": [" unpublished"],
                    "expression": "show.unpub ",
                    "type": "ncondition"
                }],
                "type": "ef"
            }, "\" data-show-id=\"", {
                "filters": [
                    ["a", []]
                ],
                "name": "show.id",
                "type": "variable"
            }, "\">\n                <a href=\"", {
                "filters": [
                    ["a", []]
                ],
                "name": "siteroot",
                "type": "variable"
            }, "/?show=", {
                "filters": [
                    ["u", []],
                    ["a", []]
                ],
                "name": "show.id",
                "type": "variable"
            }, "\">\n                    <span class=\"show-image-wrapper ratio-16-9\">\n                        ", {
                "blocks": [{
                    "attachment": ["\n                        <img class=\"show-image\" ", {
                        "filters": [
                            ["image", ["'bio_app'"]]
                        ],
                        "name": "show.v2_image_id",
                        "type": "variable"
                    }, ">\n                        "],
                    "expression": "show.v2_image_id ",
                    "type": "ncondition"
                }, {
                    "attachment": ["\n                        <img class=\"show-image\" ", {
                        "filters": [
                            ["image", ["'bio_app'"]]
                        ],
                        "name": "show.image_id",
                        "type": "variable"
                    }, ">\n                        "],
                    "expression": "show.image_id ",
                    "type": "ncondition"
                }],
                "type": "ef"
            }, "\n                        <div class=\"bcweekly-browse-item-play\"><span class=\"icon\"></span></div>\n                    </span>\n                    <div class=\"show-details\">\n                        <div class=\"episode-date\">\n                            Episode ", {
                "filters": [
                    ["h", []]
                ],
                "name": "episode_number",
                "type": "variable"
            }, "\n                            -\n                            ", {
                "filters": [
                    ["date", ["\"%B %d, %Y\""]]
                ],
                "name": "show.date",
                "type": "variable"
            }, "\n                        </div>\n                        <p class=\"show-description\">", {
                "filters": [
                    ["h", []]
                ],
                "name": "show.desc",
                "type": "variable"
            }, "</p>\n                        <p class=\"show-credits\">", {
                "filters": [
                    ["strip_html", []]
                ],
                "name": "show.image_caption",
                "type": "variable"
            }, "</p>\n                    </div>\n                </a>\n            </li>\n            ", {
                "expression": "episode_number - 1 ",
                "type": "let",
                "variable": "episode_number"
            }, "\n        "],
            "reversed": null,
            "type": "for",
            "variable_name": "show"
        }, "\n\n    </ol>\n</div>\n<div class=\"bcweekly-browse-overlay-top\"></div>\n<div class=\"bcweekly-browse-overlay-bottom\"></div>\n<a href=\"#\" class=\"bcweekly-close-link\">\n    <svg class=\"bcweekly-close-icon\" viewBox=\"0 0 12 12\"><use xlink:href=\"#close-weekly-archive\"></svg>\n</a>"],
        "home_2016/bcweekly_playing_tab_phone": ["\n\n", {
            "blocks": [{
                "attachment": ["\n    ", {
                    "expression": "\"album\" ",
                    "type": "let",
                    "variable": "tralbum_type"
                }, "\n    ", {
                    "nodelist": ["a", {
                        "filters": [],
                        "name": "trk.album_id",
                        "type": "variable"
                    }],
                    "to": "tralbum_key",
                    "type": "capture"
                }, "\n"],
                "expression": "trk.album_id ",
                "type": "ncondition"
            }, {
                "attachment": ["\n    ", {
                    "expression": "\"track\" ",
                    "type": "let",
                    "variable": "tralbum_type"
                }, "\n    ", {
                    "nodelist": ["t", {
                        "filters": [],
                        "name": "trk.track_id",
                        "type": "variable"
                    }],
                    "to": "tralbum_key",
                    "type": "capture"
                }, "\n"],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n\n<div class=\"row bcweekly-now-playing-section track-large\">\n    <div class=\"col col-6-12\">\n        <a href=\"", {
            "filters": [
                ["art_url", ["'screen'"]]
            ],
            "name": "trk.track_art_id",
            "type": "variable"
        }, "\" class=\"ratio-1-1 popupImage\">\n            <img ", {
            "filters": [
                ["art", ["'art_thumb'"]]
            ],
            "name": "trk.track_art_id",
            "type": "variable"
        }, " alt=\"\">\n        </a>\n    </div>\n    <div class=\"col col-6-12\">\n        <p class=\"track-details\">\n            <a href=\"", {
            "filters": [
                ["tralbum_url", []],
                ["a", []]
            ],
            "name": "trk.url_hints",
            "type": "variable"
        }, "?from=hpbcw\" target=\"_blank\">\n                <span class=\"track-title\">", {
            "filters": [
                ["h", []]
            ],
            "name": "trk.title",
            "type": "variable"
        }, "</span> \n                ", {
            "blocks": [{
                "attachment": ["from <span class=\"track-album\">", {
                    "filters": [
                        ["h", []]
                    ],
                    "name": "trk.album_title",
                    "type": "variable"
                }, "</span>"],
                "expression": "trk.album_title ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n            </a>\n        </p>\n        ", {
            "blocks": [{
                "attachment": ["\n        <a class=\"track-bio-img popupImage\" href=\"", {
                    "filters": [
                        ["image_url", ["'bio_screen'"]]
                    ],
                    "name": "trk.bio_image_id",
                    "type": "variable"
                }, "\">\n            <img ", {
                    "filters": [
                        ["image", ["32"]]
                    ],
                    "name": "trk.bio_image_id",
                    "type": "variable"
                }, " alt=\"\">\n        </a>\n        "],
                "expression": "trk.bio_image_id ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n        <p class=\"track-artist\">by <a href=\"", {
            "filters": [
                ["band_url", []],
                ["a", []]
            ],
            "name": "trk.url_hints",
            "type": "variable"
        }, "?from=hpbcw\" target=\"_blank\">", {
            "filters": [
                ["h", []]
            ],
            "name": "trk.artist",
            "type": "variable"
        }, "</a></p>\n        ", {
            "blocks": [{
                "attachment": ["\n            <p class=\"track-loc\">\n                ", {
                    "filters": [
                        ["h", []]
                    ],
                    "name": "trk.location_text",
                    "type": "variable"
                }, "\n            </p>\n        "],
                "expression": "trk.location_text ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n    </div>\n    <div class=\"collect-item-container disabled\">\n        \n        <ul class=\"collect-item\" data-collect-item=\"", {
            "filters": [
                ["a", []]
            ],
            "name": "tralbum_key",
            "type": "variable"
        }, "\" data-collect-band=\"", {
            "filters": [
                ["a", []]
            ],
            "name": "trk.band_id",
            "type": "variable"
        }, "\" data-collect-stat=\"homepage_bcw_wishlist\">\n            \n            <li class=\"item-container buy-now\">\n                <a href=\"", {
            "filters": [
                ["tralbum_url", []],
                ["a", []]
            ],
            "name": "trk.url_hints",
            "type": "variable"
        }, "?from=hpbcwbn\" class=\"nav_button nav_button_buy\" id=\"nav_button_buy\" target=\"_blank\">buy now</a>\n            </li>\n            <li class=\"item-container wishlist\">\n                <span class=\"purchased-msg collection-btn\">\n                    <a href=\"", {
            "filters": [
                ["a", []]
            ],
            "name": "fan_data.url",
            "type": "variable"
        }, "\">\n                        <span class=\"bc-ui2 collect-item-icon\"></span><span class=\"txt\">you own this</span>\n                    </a>\n                </span>\n                <span class=\"wishlist-msg collection-btn\" title=\"Add this album to your wishlist\">\n                    <a href=\"", {
            "blocks": [{
                "attachment": ["/fans?from=hpbcwwlo"],
                "expression": "!fan_data ",
                "type": "ncondition"
            }, {
                "attachment": ["#"],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\" id=\"nav_button_collect\" target=\"_blank\" class=\"collect-link\">\n                        <span class=\"bc-ui2 collect-item-icon\"></span><span class=\"txt\">wishlist</span>\n                    </a>\n                </span>\n                <span class=\"wishlisted-msg collection-btn\">\n                    <span title=\"Remove this album from your wishlist\">\n                        <a href=\"#\" id=\"nav_button_uncollect\" class=\"collect-link\">\n                            <span class=\"bc-ui2 collect-item-icon\"></span><span class=\"txt\">in wishlist</span>\n                        </a>\n                    </span>\n                </span>\n            </li>\n            <li class=\"item-container hear-more\">\n                <a href=\"", {
            "filters": [
                ["tralbum_url", []],
                ["a", []]
            ],
            "name": "trk.url_hints",
            "type": "variable"
        }, "?from=hpbcwbn\" target=\"_blank\">hear more</a>\n            </li>\n        </ul>\n    </div>\n</div>"],
        "home_2016/bcweekly_share_phone": ["<ul class=\"bcweekly-share-panel social-controls\" data-url=\"", {
            "filters": [
                ["a", []]
            ],
            "name": "siteroot_https",
            "type": "variable"
        }, "/bcweekly/", {
            "filters": [
                ["u", []],
                ["a", []]
            ],
            "name": "show.show_id",
            "type": "variable"
        }, "\" data-text=\"I'm listening to the ", {
            "filters": [
                ["a", []]
            ],
            "name": "show.title",
            "type": "variable"
        }, " &ndash; ", {
            "filters": [
                ["a", []]
            ],
            "name": "show.subtitle",
            "type": "variable"
        }, ":\">\n    <li class=\"facebook-share-ctrl\">\n        <a class=\"facebook-link compound-button\">Facebook</a>\n    </li>\n    <li class=\"twitter-ctrl\">\n        <a class=\"twitter-link compound-button\">Twitter</a>\n    </li>\n    <li class=\"email-ctrl\">\n        <a class=\"email-link compound-button\">Email</a>\n    </li>\n</ul>\n"],
        "home/home_2015/salesfeed_item": ["<li class=\"salesfeed-item col col-2-16\">\n    <a class=\"item-inner", {
            "blocks": [{
                "attachment": [" item-bundle"],
                "expression": "item.item_type == 'b' ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\" href=\"", {
            "filters": [
                ["a", []]
            ],
            "name": "item.url",
            "type": "variable"
        }, "?from=salesfeed\">\n        ", {
            "blocks": [{
                "attachment": ["\n            <div class=\"bundle-badge\">\n                <div class=\"number\">", {
                    "filters": [],
                    "name": "item.releases",
                    "type": "variable"
                }, "</div>\n                <div class=\"releases\">releases</div>\n                <div class=\"items\">items</div>\n            </div>\n            <div class=\"bundle-box front\"></div>\n            <div class=\"bundle-box back\"></div>\n            <span class=\"item-img ratio-1-1\">\n                <img src=\"", {
                    "filters": [
                        ["a", []]
                    ],
                    "name": "item.art_url",
                    "type": "variable"
                }, "\" alt=\"\">\n            </span>\n        "],
                "expression": "item.item_type == 'b' ",
                "type": "ncondition"
            }, {
                "attachment": ["\n            <span class=\"item-img ratio-1-1\">\n                <img src=\"", {
                    "filters": [
                        ["a", []]
                    ],
                    "name": "item.art_url",
                    "type": "variable"
                }, "\" alt=\"\">\n            </span>\n        "],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n        <h5 class=\"item-title\">\n            ", {
            "blocks": [{
                "attachment": ["\n                Full Discography\n            "],
                "expression": "item.item_type == 'b' ",
                "type": "ncondition"
            }, {
                "attachment": ["\n                ", {
                    "filters": [
                        ["h", []]
                    ],
                    "name": "item.item_description",
                    "type": "variable"
                }, "\n            "],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n            ", {
            "blocks": [{
                "attachment": ["\n            <span class=\"album-title\">\n                ", {
                    "blocks": [{
                        "attachment": ["from"],
                        "expression": "item.item_type == 't' ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, " ", {
                    "filters": [
                        ["h", []]
                    ],
                    "name": "item.album_title",
                    "type": "variable"
                }, "\n            </span>\n            "],
                "expression": "item.album_title && (item.item_type == 'p' || item.item_type == 't') ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n            <span class=\"item-artist\">", {
            "blocks": [{
                "attachment": ["by "],
                "expression": "item.item_type != 'b' ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, {
            "filters": [
                ["h", []]
            ],
            "name": "item.artist_name",
            "type": "variable"
        }, "</span>\n        </h5>\n        <span class=\"item-price\">Sold for ", {
            "filters": [],
            "name": "item.amount_paid_fmt",
            "type": "variable"
        }, "  </span>\n        ", {
            "blocks": [{
                "attachment": ["\n        <span class=\"item-over\">\n            ", {
                    "filters": [],
                    "name": "item.amount_over_fmt",
                    "type": "variable"
                }, " more than the min  \n        </span>\n        "],
                "expression": "item.amount_over_fmt ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n        <span class=\"item-loc\">\n            in <span class=\"flag-icon flag-", {
            "filters": [
                ["h", []]
            ],
            "name": "item.country_code",
            "type": "variable"
        }, "\"></span> ", {
            "filters": [
                ["h", []]
            ],
            "name": "item.country",
            "type": "variable"
        }, "\n        </span>\n        <span class=\"item-timestamp\" data-utc-date=\"", {
            "filters": [
                ["a", []]
            ],
            "name": "item.utc_date_rounded",
            "type": "variable"
        }, "\">\n            <span class=\"now\">", {
            "blocks": [{
                "attachment": ["1 second ago"],
                "expression": "item.seconds_since <= 1 ",
                "type": "ncondition"
            }, {
                "attachment": [{
                    "filters": [
                        ["h", []]
                    ],
                    "name": "item.seconds_since",
                    "type": "variable"
                }, " seconds ago"],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "</span>\n        </span>\n    </a>\n</li>\n"],
        "home/home_2015/spotlight_content": [{
            "attribs": {
                "limit": 2
            },
            "collection_name": "fnsps",
            "nodelist": ["\n", {
                "nodelist": [{
                    "filters": [],
                    "name": "fnsp.fan_id",
                    "type": "variable"
                }],
                "to": "fan_key",
                "type": "capture"
            }, "\n<div class=\"spotlight-unit col col-6-12 ", {
                "blocks": [{
                    "attachment": ["unpublished"],
                    "expression": "!fnsp.published_date ",
                    "type": "ncondition"
                }],
                "type": "ef"
            }, " signup-tooltip-parent\" data-tooltip-id=\"o\">\n    <div class=\"row\">\n        <div class=\"col col-4-16\">\n            ", {
                "blocks": [{
                    "attachment": ["\n                <a class=\"spotlight-image\" href=\"", {
                        "filters": [
                            ["fan_page_url", []],
                            ["a", []]
                        ],
                        "name": "fnsp.username",
                        "type": "variable"
                    }, "\">\n                    <span class=\"ratio-1-1\">\n                        <img ", {
                        "filters": [
                            ["image", ["50"]]
                        ],
                        "name": "fnsp.photo_dynamic.image_id",
                        "type": "variable"
                    }, ">\n                    </span>\n                </a>\n            "],
                    "expression": "fnsp.photo_dynamic ",
                    "type": "ncondition"
                }],
                "type": "ef"
            }, "\n        </div>\n        <div class=\"col col-6-16 offset-1-16 spotlight-details\">\n            <h4 class=\"spotlight-name\">", {
                "filters": [
                    ["h", []]
                ],
                "name": "fnsp.name",
                "type": "variable"
            }, "</h4>\n            <p class=\"spotlight-location\">", {
                "filters": [
                    ["h", []]
                ],
                "name": "fnsp.location",
                "type": "variable"
            }, "</p>\n            <div class=\"follow-button-wrapper\">\n                <div class=\"spotlight-button follow-button follow-fan\" data-follow-fan=\"", {
                "filters": [
                    ["a", []]
                ],
                "name": "fan_key",
                "type": "variable"
            }, "\" data-fan-name=\"", {
                "filters": [
                    ["h", []]
                ],
                "name": "fnsp.name",
                "type": "variable"
            }, "\" data-follow-stat=\"homepage_feat_fan_follow\">\n                    ", {
                "blocks": [{
                    "attachment": ["\n                    <a class=\"follow-fan-btn\" href=\"", {
                        "blocks": [{
                            "attachment": ["/fans?from=hpffflo"],
                            "expression": "!page_identities.fan ",
                            "type": "ncondition"
                        }, {
                            "attachment": ["#"],
                            "type": "else_ncondition"
                        }],
                        "type": "ef"
                    }, "\">\n                        <span class=\"follow-msg\">Follow</span>\n                        <span class=\"following-msg\">Following</span>\n                    </a>\n                    "],
                    "expression": "!page_identities.fan || (page_identities.fan.id != fnsp.fan_id) ",
                    "type": "ncondition"
                }, {
                    "attachment": ["\n                    <a href=\"", {
                        "filters": [
                            ["a", []]
                        ],
                        "name": "page_identities.fan.url",
                        "type": "variable"
                    }, "\">that's you!</a>\n                    "],
                    "type": "else_ncondition"
                }],
                "type": "ef"
            }, "\n                </div>\n                <div class=\"signup-tooltip-outer fan-follow-tooltip-outer\"></div>\n            </div>\n        </div>\n        <div class=\"col col-5-16\">\n            <p class=\"spotlight-bio\">\n                ", {
                "filters": [
                    ["html_autolink", ["'target=\"_blank\"'"]],
                    ["newline_to_gap", []]
                ],
                "name": "fnsp.bio",
                "type": "variable"
            }, "\n            </p>\n            <a class=\"spotlight-link\" href=\"", {
                "filters": [
                    ["fan_page_url", []],
                    ["a", []]
                ],
                "name": "fnsp.username",
                "type": "variable"
            }, "\">view full profile</a>\n        </div>\n    </div>\n\n    <div class=\"spotlight-items row\">\n        ", {
                "attribs": {
                    "limit": 3
                },
                "collection_name": "fnsp.items",
                "nodelist": ["\n            ", {
                    "blocks": [{
                        "attachment": ["\n                ", {
                            "expression": "\"album\" ",
                            "type": "let",
                            "variable": "tralbum_type"
                        }, "\n            "],
                        "expression": "fnit.item_type == 'a' ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n                ", {
                            "expression": "\"track\" ",
                            "type": "let",
                            "variable": "tralbum_type"
                        }, "\n            "],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, "\n            ", {
                    "nodelist": [{
                        "filters": [],
                        "name": "fnit.item_type",
                        "type": "variable"
                    }, {
                        "filters": [],
                        "name": "fnit.item_id",
                        "type": "variable"
                    }],
                    "to": "tralbum_key",
                    "type": "capture"
                }, "\n\n            <div class=\"spotlight-item row playable-hover-target\">\n                <div class=\"col col-4-16\">\n                    <a class=\"item-img playable ratio-1-1\" href=\"", {
                    "filters": [
                        ["tralbum_url", []],
                        ["a", []]
                    ],
                    "name": "fnit.url_hints",
                    "type": "variable"
                }, "?from=hpff\" data-fanid=\"", {
                    "filters": [
                        ["a", []]
                    ],
                    "name": "fnsp.fan_id",
                    "type": "variable"
                }, "\" data-subitem-index=\"", {
                    "filters": [
                        ["a", []]
                    ],
                    "name": "forloop.index0",
                    "type": "variable"
                }, "\">\n                        <img ", {
                    "filters": [
                        ["art", ["'art_embedded_player_large'"]]
                    ],
                    "name": "fnit.art_id",
                    "type": "variable"
                }, " alt=\"\">\n                        <span class=\"plb-btn\">\n                            <span class=\"plb-bg\"></span>\n                            <span class=\"plb-ic\"></span>\n                        </span>\n                        <span class=\"hidden-access\">play ", {
                    "filters": [
                        ["h", []]
                    ],
                    "name": "tralbum_type",
                    "type": "variable"
                }, "</span>\n                    </a>\n                </div>\n                <div class=\"col col-11-16 offset-1-16\">\n                    <a class=\"item-link\" href=\"", {
                    "filters": [
                        ["tralbum_url", []],
                        ["a", []]
                    ],
                    "name": "fnit.url_hints",
                    "type": "variable"
                }, "?from=hpff\">\n                        <span class=\"item-title\">\n                            ", {
                    "filters": [
                        ["h", []]
                    ],
                    "name": "fnit.title",
                    "type": "variable"
                }, "\n                        </span>\n                        <span class=\"item-artist\">\n                            by ", {
                    "filters": [
                        ["h", []]
                    ],
                    "name": "fnit.artist_name",
                    "type": "variable"
                }, "\n                        </span>\n                    </a>\n                    <p class=\"item-desc\">\n                        ", {
                    "filters": [
                        ["html_autolink", ["'target=\"_blank\"'"]],
                        ["newline_to_gap", []]
                    ],
                    "name": "fnit.comment",
                    "type": "variable"
                }, "\n                    </p>\n                    <ul class=\"item-collection-controls horizontal-list collect-item ", {
                    "blocks": [{
                        "attachment": ["logged-out"],
                        "expression": "!page_identities.fan ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\" data-collect-item=\"", {
                    "filters": [
                        ["h", []]
                    ],
                    "name": "tralbum_key",
                    "type": "variable"
                }, "\" data-collect-band=\"", {
                    "filters": [
                        ["h", []]
                    ],
                    "name": "fnit.band_id",
                    "type": "variable"
                }, "\" data-collect-stat=\"homepage_feat_fan_wishlist", {
                    "blocks": [{
                        "attachment": ["_lo"],
                        "expression": "!page_identities.fan ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\" ", {
                    "blocks": [{
                        "attachment": ["data-lo-querystr=\"", {
                            "filters": [
                                ["a", []]
                            ],
                            "name": "fnit.lo_querystr",
                            "type": "variable"
                        }, "\" data-lo-from=\"hpffwlo\""],
                        "expression": "!page_identities.fan ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, ">\n                        <li class=\"buy-now\">\n                            <a href=\"", {
                    "filters": [
                        ["tralbum_url", []],
                        ["a", []]
                    ],
                    "name": "fnit.url_hints",
                    "type": "variable"
                }, "?from=hpffbn\">buy now</a>\n                        </li>\n                        <li class=\"purchased-msg collection-btn\">\n                            <a href=\"", {
                    "blocks": [{
                        "attachment": [{
                            "filters": [
                                ["a", []]
                            ],
                            "name": "page_identities.fan.url",
                            "type": "variable"
                        }],
                        "expression": "page_identities.fan ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\">\n                                <span class=\"bc-ui2 collect-item-icon\"></span><span class=\"txt\">you own this</span>\n                            </a>\n                        </li>\n                        <li class=\"wishlist-msg collection-btn\" title=\"Add this ", {
                    "filters": [
                        ["a", []]
                    ],
                    "name": "tralbum_type",
                    "type": "variable"
                }, " to your wishlist\">\n                            <a href=\"#\">\n                                <span class=\"bc-ui2 collect-item-icon\"></span><span class=\"txt\">wishlist</span>\n                            </a>\n                        </li>\n                        <li class=\"wishlisted-msg collection-btn\">\n                            <a href=\"#\" title=\"Remove this album from your wishlist\">\n                                <span class=\"bc-ui2 collect-item-icon\"></span><span class=\"txt\">in wishlist</span>\n                            </a>\n                            <a class=\"view\" href=\"", {
                    "blocks": [{
                        "attachment": [{
                            "filters": [
                                ["a", []]
                            ],
                            "name": "page_identities.fan.url",
                            "type": "variable"
                        }, "/wishlist"],
                        "expression": "page_identities.fan ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\" title=\"View your wishlist\">»</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        "],
                "reversed": null,
                "type": "for",
                "variable_name": "fnit"
            }, "\n    </div>\n</div>\n"],
            "reversed": null,
            "type": "for",
            "variable_name": "fnsp"
        }, "\n"],
        "fan/fan_action_panel": ["\n<div class=\"login-dlg\">\n    <div id=\"wishlist-message\">\n        ", {
            "blocks": [{
                "attachment": ["\n            ", {
                    "blocks": [{
                        "attachment": ["\n                ", {
                            "nodelist": ["Wishlisting requires a Bandcamp fan account. <a ", {
                                "nodelist": ["href=\"", {
                                    "filters": [
                                        ["a", []]
                                    ],
                                    "name": "signupUrl",
                                    "type": "variable"
                                }, "\""],
                                "type": "translateVariable",
                                "var_name": "link"
                            }, ">Learn more</a>."],
                            "type": "translate"
                        }, "\n            "],
                        "expression": "action == \"wishlist\" ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n                ", {
                            "nodelist": ["Following requires a Bandcamp fan account. <a ", {
                                "nodelist": ["href=\"", {
                                    "filters": [
                                        ["a", []]
                                    ],
                                    "name": "signupUrl",
                                    "type": "variable"
                                }, "\""],
                                "type": "translateVariable",
                                "var_name": "link"
                            }, ">Learn more</a>."],
                            "type": "translate"
                        }, "\n            "],
                        "expression": "action == \"follow\" ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n        "],
                "expression": "is_band_member ",
                "type": "ncondition"
            }, {
                "attachment": ["\n            ", {
                    "blocks": [{
                        "attachment": ["\n                ", {
                            "nodelist": ["Wishlisting requires a Bandcamp fan account. Please <a ", {
                                "nodelist": ["href=\"", {
                                    "filters": [
                                        ["a", []]
                                    ],
                                    "name": "loginUrl",
                                    "type": "variable"
                                }, "\""],
                                "type": "translateVariable",
                                "var_name": "login_link"
                            }, ">log in</a> or <a ", {
                                "nodelist": ["href=\"", {
                                    "filters": [
                                        ["a", []]
                                    ],
                                    "name": "signupUrl",
                                    "type": "variable"
                                }, "\""],
                                "type": "translateVariable",
                                "var_name": "signup_link"
                            }, ">learn more</a>."],
                            "type": "translate"
                        }, "\n            "],
                        "expression": "action == \"wishlist\" ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n                ", {
                            "nodelist": ["Following requires a Bandcamp fan account. Please <a ", {
                                "nodelist": ["href=\"", {
                                    "filters": [
                                        ["a", []]
                                    ],
                                    "name": "loginUrl",
                                    "type": "variable"
                                }, "\""],
                                "type": "translateVariable",
                                "var_name": "login_link"
                            }, ">log in</a> or <a ", {
                                "nodelist": ["href=\"", {
                                    "filters": [
                                        ["a", []]
                                    ],
                                    "name": "signupUrl",
                                    "type": "variable"
                                }, "\""],
                                "type": "translateVariable",
                                "var_name": "signup_link"
                            }, ">learn more</a>."],
                            "type": "translate"
                        }, "\n            "],
                        "expression": "action == \"follow\" ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n        "],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n    </div>\n</div>"],
        "home/home_2015/discover_inline_player": ["<table>\n    <tr>\n        <td class=\"play_cell\" rowspan=\"2\">\n            <a><div class=\"playbutton\"></div></a>\n        </td>\n        <td class=\"track_cell\" colspan=\"3\">\n            <div class=\"track_info\">\n                <span class=\"title-section hiddenelem\">\n                    <a class=\"title_link primaryText\" href=\"#\"><span class=\"title\"></span></a>\n                </span>\n                <span class=\"time secondaryText hiddenelem\">\n                    <span class=\"time_elapsed\"></span>\n                    /\n                    <span class=\"time_total\"></span>\n                </span>\n                <span class=\"message hiddenelem\"></span>\n            </div>\n        </td>\n    </tr>\n    <tr>\n        <td class=\"progbar_cell\" colspan=\"3\">\n            <div class=\"progbar\">\n                <div class=\"progbar_empty\">\n                    <div class=\"progbar_fill\"></div>\n                    <div class=\"thumb\"></div>\n                </div>\n            </div>\n        </td>\n    </tr>\n</table>\n"],
        "_autocomplete_search_widget": [{
            "blocks": [{
                "attachment": ["\n<div id=\"autocomplete-discover\" data-bind=\"css: {'autocompleted': showDiscover}\" class=\"header-rework-2018\">\n    <a class=\"discover-link best-selling\" data-bind=\"click: function () { discoverJumpRedirect('all'); }\">\n        <div>", {
                    "nodelist": ["best selling"],
                    "type": "translate"
                }, "</div>\n        <div class=\"shape-container\">\n            <span class=\"arrow\"></span>\n        </div>\n    </a>\n    <a class=\"discover-link rock\" data-bind=\"click: function () { discoverJumpRedirect('rock'); }\">\n        <div>rock</div>\n        <div class=\"shape-container\">\n            <span class=\"arrow\"></span>\n        </div>\n    </a>\n    <a class=\"discover-link hip-hop\" data-bind=\"click: function () { discoverJumpRedirect('hip-hop-rap'); }\">\n        <div>hip-hop/rap</div>\n        <div class=\"shape-container\">\n            <span class=\"arrow\"></span>\n        </div>\n    </a>\n    <a class=\"discover-link alternative\" data-bind=\"click: function () { discoverJumpRedirect('alternative'); }\">\n        <div>alternative</div>\n        <div class=\"shape-container\">\n            <span class=\"arrow\"></span>\n        </div>\n    </a>\n    <a class=\"discover-link electronic\" data-bind=\"click: function () { discoverJumpRedirect('electronic'); }\">\n        <div>electronic</div>\n        <div class=\"shape-container\">\n            <span class=\"arrow\"></span>\n        </div>\n    </a>\n    <a class=\"discover-link metal\" data-bind=\"click: function () { discoverJumpRedirect('metal'); }\">\n        <div>metal</div>\n        <div class=\"shape-container\">\n            <span class=\"arrow\"></span>\n        </div>\n    </a>\n    <a class=\"discover-link experimental\" data-bind=\"click: function () { discoverJumpRedirect('experimental'); }\">\n        <div>experimental</div>\n        <div class=\"shape-container\">\n            <span class=\"arrow\"></span>\n        </div>\n    </a>\n    <a class=\"discover-link pop\" data-bind=\"click: function () { discoverJumpRedirect('pop'); }\">\n        <div>pop</div>\n        <div class=\"shape-container\">\n            <span class=\"arrow\"></span>\n        </div>\n    </a>\n    <a class=\"discover-link\" data-bind=\"click: function () { discoverJumpRedirect('all'); }\">\n        <div>", {
                    "nodelist": ["view more"],
                    "type": "translate"
                }, "</div>\n        <div class=\"shape-container\">\n            <span class=\"arrow\"></span>\n        </div>\n    </a>\n</div>\n"],
                "expression": "cfg.header_rework_2018 ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n<div id=\"autocomplete-results\" ", {
            "blocks": [{
                "attachment": ["class=\"fade-in\""],
                "expression": "!cfg.header_rework_2018 ",
                "type": "ncondition"
            }, {
                "attachment": ["class=\"header-rework-2018\""],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, " data-bind=\"css: {'autocompleted': show}\" class=\"", {
            "blocks": [{
                "attachment": ["header-rework-2018"],
                "expression": "cfg.header_rework_2018 ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\">\n    <a class=\"results-genre\" href=\"\" data-bind=\"visible: genreName, click: discoverGenre\">\n        <div class=\"genre-label\" data-bind=\"visible: genreName\">\n            ", {
            "nodelist": ["Explore ", {
                "nodelist": ["<span data-bind=\"text: genreName\"></span>"],
                "type": "translateVariable",
                "var_name": "genre"
            }, " music "],
            "type": "translate"
        }, "\n        </div>\n        <div class=\"shape-container\">\n            <span class=\"arrow\"></span>\n        </div>\n    </a>\n    <p class=\"results-label\" data-bind=\"visible: genreName\">", {
            "nodelist": ["Or browse results titled ", {
                "nodelist": ["<span data-bind=\"text: genreName\"></span>"],
                "type": "translateVariable",
                "var_name": "genre"
            }, ":"],
            "type": "translate"
        }, "</p>\n    <ul id=\"autocomplete-result-item\" class=\"results-list\" data-bind=\"css:{'tag-room': tagUrl}, foreach: autocompleteResults\">\n        <li class=\"results-item\" data-bind=\"attr: {id: 'results-item-' + $index()}\">\n            <a data-bind=\"attr:{href: url}\">\n                <div class=\"results-art\" data-bind=\"css: {'blank-img': noImg, 'square': !artType, 'package-thumb': artType, 'round': roundArt}\">\n                <!-- ko if: !noImg -->\n                    <img data-bind=\"attr: {src: img}, css: {'round': roundArt}\"></img>\n                <!-- /ko -->\n                </div>\n                <div class=\"results-info\">\n                    <span class=\"results-title\" data-bind=\"text: name\"></span>\n                    <p class=\"results-name\">\n                    <span data-bind=\"visible: bandName\">", {
            "nodelist": ["by ", {
                "nodelist": ["<span data-bind=\"text: bandName\"></span>"],
                "type": "translateVariable",
                "var_name": "artist_name"
            }, ""],
            "type": "translate"
        }, "</span><span data-bind=\"visible: !bandName\"><span data-bind=\"text: bandName\"></span></p>\n                    <span class=\"results-type\" data-bind=\"text: typeText\"></span>\n                </div>\n            </a>\n        </li>\n    </ul>\n    <a class=\"see-all\" id=\"see-all\" href=\"\" data-bind=\"visible: hasAutocompleteResults\">\n        ", {
            "nodelist": ["See all results"],
            "type": "translate"
        }, "\n        <div class=\"shape-container\">\n            <span class=\"arrow\"></span>\n        </div>\n    </a>\n    <a class=\"autocomplete-tags\" id=\"autocomplete-tags\" data-bind=\"attr:{href: tagUrl}, visible: tagUrl\">\n        <span class=\"tag-label\">", {
            "nodelist": ["Music tagged with"],
            "type": "translate"
        }, " </span>\n        <span class=\"tag\" data-bind=\"text: tagName\"></span>\n        <div class=\"shape-container\">\n            <span class=\"arrow\"></span>\n        </div>\n    </a>\n</div>\n"],
        "home/header_2015": ["<div class=\"hd ", {
            "blocks": [{
                "attachment": ["header-rework-2018 ", {
                    "blocks": [{
                        "attachment": ["banner-lo"],
                        "expression": "!page_identities.user ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }],
                "expression": "cfg.header_rework_2018 ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, " row ", {
            "blocks": [{
                "attachment": ["logged-in"],
                "expression": "identities.user && user_type ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, " ", {
            "blocks": [{
                "attachment": ["tooltips-hidden"],
                "expression": "!is_client_render ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, " ", {
            "blocks": [{
                "attachment": ["corp-home"],
                "expression": "is_corp_home ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\">\n    <div class=\"row\">\n        <div class=\"col col-7-12\">\n            ", {
            "blocks": [{
                "attachment": ["\n                ", {
                    "blocks": [{
                        "attachment": ["\n                    <h1 class=\"hd-logo\"><span>Bandcamp</span></h1>\n                "],
                        "expression": "is_corp_home ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n                    <a href=\"", {
                            "filters": [
                                ["a", []]
                            ],
                            "name": "siteroot_https",
                            "type": "variable"
                        }, "\"><h1 class=\"hd-logo\"><span>Bandcamp</span></h1></a>\n                "],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, "\n                <h2 class=\"hd-sub-head\">", {
                    "nodelist": ["Discover amazing new music and directly support the artists who make it."],
                    "type": "translate"
                }, "</h2>\n            "],
                "expression": "!cfg.header_rework_2018 ",
                "type": "ncondition"
            }, {
                "attachment": ["\n                ", {
                    "blocks": [{
                        "attachment": ["\n                    <h1 class=\"corp-bclogo\"><svg width=\"137px\" height=\"22px\" viewBox=\"0 0 127 20\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#bandcamp-logo-color-bcaqua\">Bandcamp</use></svg></h1>\n                "],
                        "expression": "is_corp_home ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n                    <a href=\"", {
                            "filters": [
                                ["a", []]
                            ],
                            "name": "siteroot_https",
                            "type": "variable"
                        }, "\">\n                        <h1 class=\"corp-bclogo\"><svg width=\"137px\" height=\"22px\" viewBox=\"0 0 127 20\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#bandcamp-logo-color-bcaqua\">Bandcamp</use></svg>\n                        </h1>\n                    </a>\n                "],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, "\n                <h2 class=\"hd-sub-head ", {
                    "blocks": [{
                        "attachment": ["has-cart"],
                        "expression": "has_cart ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\">", {
                    "nodelist": ["Discover amazing new music and <a ", {
                        "nodelist": ["class=\"blue-gradient\" href=\"", {
                            "filters": [
                                ["a", []]
                            ],
                            "name": "siteroot_https",
                            "type": "variable"
                        }, "/fair_trade_music_policy\""],
                        "type": "translateVariable",
                        "var_name": "link"
                    }, ">directly support</a> the artists who make it."],
                    "type": "translate"
                }, "</h2>\n            "],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n            ", {
            "blocks": [{
                "attachment": ["\n            <ul class=\"hd-nav user-nav\">\n                ", {
                    "blocks": [{
                        "attachment": ["\n                <li class=\"user-nav-thumb\">\n                    <span class=\"user-nav-thumb\">\n                        <img ", {
                            "filters": [
                                ["image", ["'bio_navbar'"]]
                            ],
                            "name": "user_photo",
                            "type": "variable"
                        }, ">\n                    </span>\n                </li>\n                "],
                        "expression": "user_photo ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n                <li class=\"name\">\n                    ", {
                    "blocks": [{
                        "attachment": ["\n                        ", {
                            "nodelist": ["Hi ", {
                                "nodelist": [{
                                    "filters": [
                                        ["h", []]
                                    ],
                                    "name": "fan_name",
                                    "type": "variable"
                                }],
                                "type": "translateVariable",
                                "var_name": "name"
                            }, ""],
                            "type": "translate"
                        }, "\n                    "],
                        "expression": "fan_name ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n                        ", {
                            "nodelist": ["Hi ", {
                                "nodelist": [{
                                    "filters": [
                                        ["h", []]
                                    ],
                                    "name": "user_name",
                                    "type": "variable"
                                }],
                                "type": "translateVariable",
                                "var_name": "name"
                            }, ""],
                            "type": "translate"
                        }, "\n                    "],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, "\n                </li>\n\n                ", {
                    "blocks": [{
                        "attachment": ["\n                    <li class=\"signup-tooltip-parent\" data-tooltip-id=\"f\">\n                        <a href=\"", {
                            "filters": [
                                ["a", []]
                            ],
                            "name": "collection_url",
                            "type": "variable"
                        }, "/feed\">", {
                            "nodelist": ["feed"],
                            "type": "translate"
                        }, "</a>\n                        <div class=\"signup-tooltip-outer feed-tooltip-outer\"></div>\n                    </li>\n\n                    ", {
                            "blocks": [{
                                "attachment": ["\n                        <li class=\"signup-tooltip-parent\" data-tooltip-id=\"w\">\n                            <a href=\"", {
                                    "filters": [
                                        ["a", []]
                                    ],
                                    "name": "collection_url",
                                    "type": "variable"
                                }, "/wishlist\">", {
                                    "nodelist": ["wishlist"],
                                    "type": "translate"
                                }, "</a>\n                            <div class=\"signup-tooltip-outer wishlist-tooltip-outer\"></div>\n                        </li>\n                    "],
                                "expression": "has_wishlist && !has_collection ",
                                "type": "ncondition"
                            }, {
                                "attachment": ["\n                        <li class=\"signup-tooltip-parent\" data-tooltip-id=\"c\">\n                            <a href=\"", {
                                    "filters": [
                                        ["a", []]
                                    ],
                                    "name": "collection_url",
                                    "type": "variable"
                                }, "\">", {
                                    "nodelist": ["collection"],
                                    "type": "translate"
                                }, "</a>\n                            <div class=\"signup-tooltip-outer collection-tooltip-outer\"></div>\n                        </li>\n                        <li class=\"signup-tooltip-parent\" data-tooltip-id=\"w\">\n                            <a href=\"", {
                                    "filters": [
                                        ["a", []]
                                    ],
                                    "name": "collection_url",
                                    "type": "variable"
                                }, "/wishlist\">", {
                                    "nodelist": ["wishlist"],
                                    "type": "translate"
                                }, "</a>\n                            <div class=\"signup-tooltip-outer wishlist-tooltip-outer\"></div>\n                        </li>\n                    "],
                                "expression": "has_wishlist ",
                                "type": "ncondition"
                            }, {
                                "attachment": ["\n                        <li class=\"signup-tooltip-parent\" data-tooltip-id=\"c\">\n                            <a href=\"", {
                                    "filters": [
                                        ["a", []]
                                    ],
                                    "name": "collection_url",
                                    "type": "variable"
                                }, "\">", {
                                    "nodelist": ["collection"],
                                    "type": "translate"
                                }, "</a>\n                            <div class=\"signup-tooltip-outer collection-tooltip-outer\"></div>\n                        </li>\n                    "],
                                "type": "else_ncondition"
                            }],
                            "type": "ef"
                        }, "\n                "],
                        "expression": "collection_url && !identities.fan.private ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n\n                ", {
                    "blocks": [{
                        "attachment": ["\n                <li><a href=\"", {
                            "filters": [
                                ["a", []]
                            ],
                            "name": "band_url",
                            "type": "variable"
                        }, "\">your site</a></li>\n                "],
                        "expression": "band_url ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n                <li><a href=\"", {
                            "filters": [
                                ["a", []]
                            ],
                            "name": "partner_url",
                            "type": "variable"
                        }, "\">your page</a></li>\n                "],
                        "expression": "partner_url ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n\n                ", {
                    "blocks": [{
                        "attachment": ["\n                <li class=\"cartitem\">\n                    <a href=\"/cart\">\n                        <span class=\"cart bc-home\">&nbsp;</span>\n                        <span class=\"cart-item-count\">", {
                            "filters": [],
                            "name": "cart_quantity",
                            "type": "variable"
                        }, "</span>\n                    </a>\n                </li>\n                "],
                        "expression": "has_cart ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n\n                ", {
                    "blocks": [{
                        "attachment": ["\n                    ", {
                            "expression": "!cfg.header_rework_2018 && (band_url || partner_url) && collection_url ",
                            "type": "let",
                            "variable": "hide_gift_card_balance"
                        }, "\n                    ", {
                            "template_name": "'home/header_gift_balance'",
                            "type": "include"
                        }, "\n                "],
                        "expression": "gift_card_balance ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n            </ul>\n            "],
                "expression": "identities.user && user_type ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n        </div>\n        <div class=\"col col-5-12\">\n            <form class=\"searchwidget autocomplete-form signup-tooltip-parent\" id=\"autocomplete-form\" action=\"/search\" method=\"get\" data-tooltip-id=\"s\">\n                ", {
            "blocks": [{
                "attachment": ["\n                <input name=\"q\" type=\"text\" class=\"you-autocomplete-me dismiss-tooltip-alt\" placeholder=\"", {
                    "nodelist": ["Search for artist, track or album"],
                    "type": "translate"
                }, "\" tabindex=\"1\" autocomplete=\"off\" maxlength=\"2048\">\n                "],
                "expression": "!cfg.header_rework_2018 ",
                "type": "ncondition"
            }, {
                "attachment": ["\n                <input name=\"q\" type=\"text\" class=\"you-autocomplete-me dismiss-tooltip-alt\" placeholder=\"", {
                    "nodelist": ["Search and discover music"],
                    "type": "translate"
                }, "\" tabindex=\"1\" autocomplete=\"off\" maxlength=\"2048\">\n                "],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n                <div id=\"homepage-autocomplete-results\" class=\"homepage-autocomplete-results\" data-bind=\"with: AutocompleteVM\"> ", {
            "template_name": "'_autocomplete_search_widget'",
            "type": "include"
        }, " </div>\n                <input type=\"hidden\" name=\"from\" value=\"corphome\">\n                ", {
            "blocks": [{
                "attachment": ["\n                <button type=\"submit\"><span class=\"icon bc-home\"></span>", {
                    "nodelist": ["Search"],
                    "type": "translate"
                }, "</button>\n                "],
                "expression": "!cfg.header_rework_2018 ",
                "type": "ncondition"
            }, {
                "attachment": ["\n                <button type=\"submit\"><svg width=\"15\" height=\"16\" viewBox=\"0 0 15 16\" class=\"menubar-search-icon\"><use xlink:href=\"#menubar-search-input-icon\"></svg>", {
                    "nodelist": ["Search"],
                    "type": "translate"
                }, "</button>\n                "],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n                <div class=\"signup-tooltip-outer search-tooltip-outer\"></div>\n            </form>\n            <ul class=\"hd-nav corp-nav ", {
            "blocks": [{
                "attachment": ["has-cart"],
                "expression": "has_cart ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\">\n                ", {
            "blocks": [{
                "attachment": ["\n                ", {
                    "blocks": [{
                        "attachment": ["\n                <li>\n                    <a class=\"gift-cards-link\" href=\"/gift_cards?from=header\">", {
                            "nodelist": ["gift cards"],
                            "type": "translate"
                        }, "</a>\n                </li>\n                "],
                        "expression": "cfg.gift_cards ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n                <li class=\"signup-tooltip-parent\" data-tooltip-id=\"d\">\n                    <a class=\"discover-link\" href=\"/#discover\">", {
                    "nodelist": ["discover"],
                    "type": "translate"
                }, "</a>\n                    <div class=\"signup-tooltip-outer discover-tooltip-outer\"></div>\n                </li>\n                "],
                "expression": "!cfg.header_rework_2018 ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n                ", {
            "blocks": [{
                "attachment": ["\n                ", {
                    "blocks": [{
                        "attachment": ["\n                <li class=\"menubar-item cart-wrapper-corp-lo svg-icon\">\n                    <a href=\"/cart\">\n                        <svg width=\"26\" height=\"26\" class=\"menubar-cart-icon\">\n                            <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#menubar-cart-icon\"></use>                    \n                            <text x=\"15\" y=\"12\" dominant-baseline=\"middle\" text-anchor=\"middle\">\n                                ", {
                            "filters": [
                                ["h", []]
                            ],
                            "name": "cart_quantity",
                            "type": "variable"
                        }, "\n                            </text>\n                        </svg>\n                    </a>\n                </li>\n                "],
                        "expression": "has_cart && !identities.user ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n                "],
                "expression": "cfg.header_rework_2018 ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n                ", {
            "blocks": [{
                "attachment": ["\n                <li><a href=\"#\" class=\"all-signup-link\">", {
                    "nodelist": ["sign up"],
                    "type": "translate"
                }, "</a></li>\n                "],
                "expression": "!identities.user ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n                \n                ", {
            "blocks": [{
                "attachment": ["\n                <li class=\"log-out-link\"><a class=\"logout-action\" href=\"", {
                    "filters": [
                        ["a", []]
                    ],
                    "name": "siteroot_https",
                    "type": "variable"
                }, "/logout", {
                    "blocks": [{
                        "attachment": ["?corp_home=1"],
                        "expression": "is_corp_home ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\" ", {
                    "blocks": [{
                        "attachment": ["data-logout-override=\"corp_home\""],
                        "expression": "is_corp_home ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, ">", {
                    "nodelist": ["log out"],
                    "type": "translate"
                }, "</a></li>\n                "],
                "expression": "identities.user && user_type ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n                <li class=\"log-in-link\"><a href=\"", {
            "filters": [
                ["a", []]
            ],
            "name": "siteroot_https",
            "type": "variable"
        }, "/login", {
            "blocks": [{
                "attachment": ["?from=home"],
                "expression": "is_corp_home ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\">", {
            "nodelist": ["log in"],
            "type": "translate"
        }, "</a></li>\n                ", {
            "blocks": [{
                "attachment": ["\n                <li class=\"cartitem\">\n                    <a href=\"/cart\">\n                        <span class=\"cart bc-home\">&nbsp;</span>\n                        <span class=\"cart-item-count\">", {
                    "filters": [],
                    "name": "cart_quantity",
                    "type": "variable"
                }, "</span>\n                    </a>\n                </li>\n                "],
                "expression": "has_cart && !identities.user && !cfg.header_rework_2018 ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n            </ul>\n        </div>\n\n        ", {
            "blocks": [{
                "attachment": ["\n            <div class=\"hd-banner-2018 wide ", {
                    "blocks": [{
                        "attachment": ["has-cart"],
                        "expression": "has_cart ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\">\n                <a class=\"hd-banner-2018-inner blue-gradient\" href=\"/jobs\">", {
                    "filters": [
                        ["h", []]
                    ],
                    "name": "corp_hiring_banner_text",
                    "type": "variable"
                }, "</a>\n            </div>\n            \n            <div class=\"hd-banner-2018 small ", {
                    "blocks": [{
                        "attachment": ["has-cart"],
                        "expression": "has_cart ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\">\n                <a class=\"hd-banner-2018-inner blue-gradient\" href=\"/jobs\">", {
                    "nodelist": ["We’re hiring!"],
                    "type": "translate"
                }, "</a>\n            </div>\n        "],
                "expression": "has_corp_header && corp_hiring_banner_text && !is_jobs_page ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n\n    </div>\n\n    <div class='corp-banners'>\n        ", {
            "expression": "identities.fan && !identities.fan.verified && !identities.fan.private ",
            "type": "let",
            "variable": "is_unverified_fan"
        }, "\n        ", {
            "expression": "fan_onboarding.show_verify_banner && is_unverified_fan && !skip_verification_banner ",
            "type": "let",
            "variable": "show_verify_banner"
        }, "\n        ", {
            "expression": "fan_onboarding.email ",
            "type": "let",
            "variable": "verify_email"
        }, "\n        ", {
            "template_name": "'home_2016/fan_verify_banner'",
            "type": "include"
        }, "\n\n        ", {
            "blocks": [{
                "attachment": ["\n        ", {
                    "template_name": "'rock_the_vote_banner'",
                    "type": "include"
                }, "\n        "],
                "expression": "show_rock_the_vote_banner && !show_verify_banner ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n    </div>\n</div>\n\n", {
            "blocks": [{
                "attachment": ["\n<div class=\"hd-mobile row ", {
                    "blocks": [{
                        "attachment": ["logged-in"],
                        "expression": "identities.user && user_type ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\">    \n\n    ", {
                    "blocks": [{
                        "attachment": ["\n        <h1 class=\"hd-logo\"><span>Bandcamp</span></h1>\n    "],
                        "expression": "is_corp_home ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n        <a href=\"", {
                            "filters": [
                                ["a", []]
                            ],
                            "name": "siteroot_https",
                            "type": "variable"
                        }, "\"><h1 class=\"hd-logo\"><span>Bandcamp</span></h1></a>\n    "],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, "\n    ", {
                    "blocks": [{
                        "attachment": ["\n    <ul class=\"hd-nav user-nav\">\n\n        ", {
                            "blocks": [{
                                "attachment": ["\n            ", {
                                    "expression": "!cfg.header_rework_2018 && (band_url || partner_url) && collection_url ",
                                    "type": "let",
                                    "variable": "hide_gift_card_balance"
                                }, "\n            ", {
                                    "template_name": "'home/header_gift_balance'",
                                    "type": "include"
                                }, "\n        "],
                                "expression": "gift_card_balance ",
                                "type": "ncondition"
                            }, {
                                "attachment": ["\n            <li><a href=\"", {
                                    "filters": [
                                        ["a", []]
                                    ],
                                    "name": "siteroot_https",
                                    "type": "variable"
                                }, "/gift_cards\">", {
                                    "nodelist": ["gift cards"],
                                    "type": "translate"
                                }, "</a></li>\n        "],
                                "expression": "!cfg.header_rework_2018 && cfg.gift_cards && ((collection_url && !identities.fan.private) || band_url || partner_url) ",
                                "type": "ncondition"
                            }],
                            "type": "ef"
                        }, "\n\n                \n        \n        ", {
                            "blocks": [{
                                "attachment": ["\n        <li><a href=\"", {
                                    "filters": [
                                        ["a", []]
                                    ],
                                    "name": "collection_url",
                                    "type": "variable"
                                }, "\">", {
                                    "nodelist": ["collection"],
                                    "type": "translate"
                                }, "</a></li>\n        "],
                                "expression": "collection_url && !identities.fan.private ",
                                "type": "ncondition"
                            }],
                            "type": "ef"
                        }, "\n\n        ", {
                            "blocks": [{
                                "attachment": ["\n        <li><a href=\"", {
                                    "filters": [
                                        ["a", []]
                                    ],
                                    "name": "band_url",
                                    "type": "variable"
                                }, "\">your site</a></li>\n        "],
                                "expression": "band_url ",
                                "type": "ncondition"
                            }, {
                                "attachment": ["\n        <li><a href=\"", {
                                    "filters": [
                                        ["a", []]
                                    ],
                                    "name": "partner_url",
                                    "type": "variable"
                                }, "\">your page</a></li>\n        "],
                                "expression": "partner_url ",
                                "type": "ncondition"
                            }],
                            "type": "ef"
                        }, "\n\n        ", {
                            "blocks": [{
                                "attachment": ["\n        <li>\n            <a class=\"home-cartitem\" href=\"/cart\">\n                <span class=\"cart bc-home\"></span>\n                <span class=\"cart-item-count\">", {
                                    "filters": [],
                                    "name": "cart_quantity",
                                    "type": "variable"
                                }, "</span>\n            </a>\n        </li>\n        "],
                                "expression": "has_cart ",
                                "type": "ncondition"
                            }],
                            "type": "ef"
                        }, "\n\n    </ul>\n    "],
                        "expression": "identities.user && user_type ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n    <ul class=\"hd-nav corp-nav ", {
                            "blocks": [{
                                "attachment": ["has-cart"],
                                "expression": "has_cart ",
                                "type": "ncondition"
                            }],
                            "type": "ef"
                        }, "\">\n       <li>\n       <ul>\n            \n            ", {
                            "blocks": [{
                                "attachment": ["<li><span class=\"corp-nav-label\">for:</span></li>"],
                                "expression": "!has_cart ",
                                "type": "ncondition"
                            }],
                            "type": "ef"
                        }, "\n            <li><a href=\"/artists?from=hpartists\">", {
                            "nodelist": ["artists"],
                            "type": "translate"
                        }, "</a></li>\n            <li><a href=\"/fans?from=hpfans\">", {
                            "nodelist": ["fans"],
                            "type": "translate"
                        }, "</a></li>\n            <li><a href=\"/labels?from=hplabels\">", {
                            "nodelist": ["labels"],
                            "type": "translate"
                        }, "</a></li>\n        </ul>\n        </li>\n        <li class=\"log-in-link\"><a href=\"", {
                            "filters": [
                                ["a", []]
                            ],
                            "name": "siteroot_https",
                            "type": "variable"
                        }, "/login", {
                            "blocks": [{
                                "attachment": ["?from=home"],
                                "expression": "is_corp_home ",
                                "type": "ncondition"
                            }],
                            "type": "ef"
                        }, "\">", {
                            "nodelist": ["log in"],
                            "type": "translate"
                        }, "</a></li>\n        ", {
                            "blocks": [{
                                "attachment": ["\n        <li>\n            <a class=\"home-cartitem\" href=\"/cart\">\n                <span class=\"cart bc-home\"></span>\n                <span class=\"cart-item-count\">", {
                                    "filters": [],
                                    "name": "cart_quantity",
                                    "type": "variable"
                                }, "</span>\n            </a>\n        </li>\n        "],
                                "expression": "has_cart ",
                                "type": "ncondition"
                            }],
                            "type": "ef"
                        }, "\n    </ul>\n    "],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, "\n    <form class=\"searchwidget\" action=\"/search\" method=\"get\">\n        <input name=\"q\" type=\"text\" placeholder=\"", {
                    "nodelist": ["Search for artist, track or album"],
                    "type": "translate"
                }, "\" tabindex=\"1\" autocomplete=\"off\" maxlength=\"2048\">\n        <input type=\"hidden\" name=\"from\" value=\"corphome\">\n        <button type=\"submit\"><span class=\"icon bc-home\"></span>", {
                    "nodelist": ["Search"],
                    "type": "translate"
                }, "</button>\n    </form>\n    <div class='corp-banners'>\n        ", {
                    "blocks": [{
                        "attachment": ["\n        ", {
                            "template_name": "'rock_the_vote_banner'",
                            "type": "include"
                        }, "\n        "],
                        "expression": "show_rock_the_vote_banner && !show_verify_banner && is_corp_home ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n    </div>\n</div>\n"],
                "expression": "!cfg.header_rework_2018 ",
                "type": "ncondition"
            }, {
                "attachment": ["\n    ", {
                    "template_name": "'menubar_phone'",
                    "type": "include"
                }, "\n"],
                "expression": "show_header_2015 && !is_phone ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n"],
        "rock_the_vote_banner": ["<div class=\"corpbanner rock-the-vote\">\n    <div class=\"vote-logo-container\">\n        <a href=\"https://bandcamp.com/vote\">\n        <img class=\"vote-logo\" src=\"/img/icon-vote-bandcamp.png\"></img>\n        </a>\n    </div>\n    <div class=\"text\">\n        Today is election day! Do you know where to vote? <a href=\"https://www.rockthevote.org/voting-information/find-your-polling-place\">Find out here</a>.\n    </div>\n\n    <a class=\"dismiss-banner\" id=\"dismiss-rock-the-vote-notification\" href=\"#\">\n        <span class=\"ui-icon dismiss-icon\"></span>\n    </a>\n</div>\n"],
        "fan/signup/fan_app_download_banner": ["<div id='fan-app-download-banner-vm' class=\"corpbanner fan-app-download\">\n    <a class=\"dismiss-banner col\" id=\"dismiss-fan-app-download-banner\" href=\"#\"\n        data-bind=\"click: dismissBanner\">\n        <span class=\"ui-icon dismiss-icon\"></span>\n    </a>\n    <div class=\"app-icon-container col\">\n        <img class=\"app-icon\" src=\"/img/app-icon-fanapp-ios.png\"></img>\n    </div>\n    <div class=\"text col\">\n        <div class='row title'>Bandcamp</div>\n        ", {
            "blocks": [{
                "attachment": ["\n            <div class='row'>", {
                    "nodelist": ["Installed on your device"],
                    "type": "translate"
                }, "</div>\n        "],
                "expression": "isAppInstalled ",
                "type": "ncondition"
            }, {
                "attachment": ["\n            <div class='row'>", {
                    "nodelist": ["Free in the App Store"],
                    "type": "translate"
                }, "</div>\n        "],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n    </div>\n    <a href=\"", {
            "filters": [
                ["h", []]
            ],
            "name": "redirectToAppURL",
            "type": "variable"
        }, "\">\n        <button class='col'>\n            ", {
            "blocks": [{
                "attachment": ["\n                <span>", {
                    "nodelist": ["OPEN"],
                    "type": "translate"
                }, "</span>\n            "],
                "expression": "isAppInstalled ",
                "type": "ncondition"
            }, {
                "attachment": ["\n                <span>", {
                    "nodelist": ["GET"],
                    "type": "translate"
                }, "</span>\n            "],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n        </button>\n    </a>\n\n</div>"],
        "home/header_gift_balance": ["<li>\n    <a class=\"gift-balance-link\" href=\"", {
            "filters": [
                ["a", []]
            ],
            "name": "siteroot_https",
            "type": "variable"
        }, "/redeem\">\n        <svg class=\"icon gift-card-icon-bordered\" width=\"9px\" height=\"10px\" viewBox=\"0 0 9 10\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#gift-card-icon\"></use></svg>\n        <span class=\"all-balances\" ", {
            "blocks": [{
                "attachment": [" style=\"display: none;\" "],
                "expression": "hide_gift_card_balance ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, ">\n            <span class=\"gift-card-balance\">", {
            "filters": [
                ["money", ["1"]],
                ["h", []]
            ],
            "name": "gift_card_balance",
            "type": "variable"
        }, " ", {
            "filters": [
                ["h", []]
            ],
            "name": "gift_card_balance.currency",
            "type": "variable"
        }, "</span>\n        </span>\n    </a>\n</li>"]
    });
};
var FanControls = {
    Data: null,
    start: function(data) {
        if (FanControls._started) return;
        FanControls._started = true;
        FanControls._isFan = !!Identities.fan();
        if (data) FanControls.data = data;
        else FanControls.getData()
    },
    getData: function() {
        var d = $.Deferred();
        Log.debug("FanControls.getData: data is " + (FanControls.Data ? "present" : "not yet present"));
        if (FanControls.Data) d.resolve(FanControls.Data);
        else if (FanControls._data_promise) return FanControls._data_promise;
        else {
            FanControls._data_promise = d.promise();
            if (FanControls._isFan) $.ajax({
                type: "GET",
                url: "/api/fan/2/collection_summary",
                dataType: "json"
            }).then(function(summ) {
                Log.debug("FanControls.getData: xhr finished");
                FanControls.Data = summ;
                FanControls._data_promise = null;
                d.resolve(summ)
            });
            else {
                FanControls._data_promise = null;
                d.reject()
            }
        }
        return d.promise()
    },
    attach: function(container) {
        $(container).find(".wishlist-msg, .wishlisted-msg").click(FanControls.wishlist_click);
        $(container).find(".follow-fan").click(FanControls.followfan_click)
    },
    delegate: function(container) {
        $(container).on("click", ".collect-item .wishlist-msg, .collect-item .wishlisted-msg",
            FanControls.wishlist_click);
        $(container).on("click", ".follow-fan", FanControls.followfan_click);
        $(container).on("hover", ".following", function(e) {
            if (e.type == "mouseenter") $(".following-msg", this).html(TM("Unfollow"));
            else if (e.type == "mouseleave") $(".following-msg", this).html(TM("Following"))
        })
    },
    wishlist_click: function(ev) {
        if (ev.target && $(ev.target).hasClass("view")) return;
        var container = FanControls.findContainer(this, "collect-item");
        var cfg = $("#pagedata").data("blob").cfg || {};
        if (!Identities.fan() || Identities.fan() &&
            !Identities.fan().verified && !container.hasClass("wishlisted")) {
            ev.preventDefault();
            FanControls.signup_or_verify_wishlist_click(container);
            return
        }
        if (container.hasClass("disabled")) {
            ev.preventDefault();
            return
        }
        if (!FanControls._isFan) return;
        FanControls.getData().then(function() {
            ev.preventDefault();
            if (!FanControls.Data) {
                Log.debug("no FanControls.Data, why are we here?");
                return
            }
            var params = FanControls.collectParams(container);
            if (!params) {
                Log.debug("bad tralbum data on wishlist control");
                return
            }
            if (!FanControls.Data ||
                FanControls.Data.read_only) {
                Dialog.alert("Unavailable", "Oops! Wishlists are currently unavailable. Please try again later.");
                return
            }
            var wishlisted = container.hasClass("wishlisted");
            var statToken = container.attr("data-collect-stat");
            if (!wishlisted && statToken) Stats.record({
                kind: "click",
                click: statToken
            });
            if (!FanControls.Data.fan_id) {
                Dialog.alert("Login Required", "Please \x3ca href\x3d'" + Text.escapeHtml(siteroot_https) + "/login'\x3elog in\x3c/a\x3e to wishlist this " + (params.item_type == "a" ? "album" : "track") +
                    ". Don't have a fan account yet? \x3ca target\x3d'_blank' href\x3d'/fans'\x3eLearn more\x3c/a\x3e.");
                return
            }
            var allContainers = FanControls.matchingContainers(container, "collect-item", "collect-item");
            allContainers.toggleClass("wishlisted");
            FanControls.toggleItem(params);
            var callback = function(data) {
                if (data.ok) Log.note("item " + (wishlisted ? "removed" : "added") + " from wishlist");
                else {
                    allContainers.toggleClass("wishlisted");
                    FanControls.toggleItem(params)
                }
            };
            FanControls.doPost(wishlisted ? "/uncollect_item_cb" :
                "/collect_item_cb", params, callback);
            if (!wishlisted) {
                var pagedata = $("#pagedata").data("blob");
                if (pagedata.is_corp_home && window.FanOnboarding && window.FanOnboarding.showFirstWishlistTooltip && $(".signup-tooltip-parent.show-tooltip").length === 0 && MediaView.mode !== "phone") {
                    window.FanOnboarding.setFirstWishlistedItem(params.item_title, params.item_type);
                    var identities = $("#pagedata").data("blob").identities;
                    window.SignupUtils.renderHeader(identities, {
                        "has_collection": window.FanOnboarding.hasCollection,
                        "user_type": "fan",
                        "fan_name": identities.fan.name,
                        "collection_url": identities.fan.url,
                        "band_url": Identities.bmgr.bands().length > 0 ? Identities.bmgr.bands()[0].trackpipeUrl() : null
                    }, {
                        "action": "wishlist"
                    });
                    window.FanOnboarding.showTooltip("w");
                    $("body").removeClass("scroll-detected");
                    $("body").addClass("prevent-header-hiding");
                    window.FanOnboarding.showFirstWishlistTooltip = false
                }
            }
        })
    },
    signup_or_verify_wishlist_click: function($container) {
        var querystr = $container.data("lo-querystr") || "";
        var from = $container.data("lo-from");
        var params =
            this.collectParams($container);
        if (params) FanAction.doAction("wishlist", querystr, from, params.item_id, params.item_type, params.band_id, params)
    },
    followfan_click: function(ev) {
        var container = FanControls.findContainer(this, "follow-fan");
        var pagedata = $("#pagedata").data("blob") || {};
        var cfg = pagedata.cfg || {};
        if (container.hasClass("disabled")) {
            ev.preventDefault();
            return
        }
        if ((!Identities.fan() || !Identities.fan().verified) && !container.hasClass("following")) {
            ev.preventDefault();
            FanControls.signup_or_verify_followfan_click(container);
            return
        }
        if (!FanControls._isFan) return;
        var linkHref = $(ev.target).closest("a").attr("href");
        if (linkHref !== "#" && linkHref.indexOf("/fans") === -1) return;
        ev.preventDefault();
        if (!FanControls.Data) {
            Log.debug("no FanControls.Data, why are we here?");
            return
        }
        var params = FanControls.followFanParams(container);
        if (!params) {
            Log.debug("bad fan data on follow-fan control");
            return
        }
        if (!FanControls.Data || FanControls.Data.read_only) {
            Dialog.alert("Unavailable", "Oops! Wishlists are currently unavailable. Please try again later.");
            return
        }
        var following = container.hasClass("following");
        var statToken = container.attr("data-follow-stat");
        if (!following && statToken) Stats.record({
            kind: "click",
            click: statToken
        });
        if (!FanControls.Data.fan_id) {
            Dialog.alert("Login Required", "Please \x3ca href\x3d'" + Text.escapeHtml(siteroot_https) + "/login'\x3elog in\x3c/a\x3e to follow this fan. Don't have a fan account yet? \x3ca target\x3d'_blank' href\x3d'/fans'\x3eLearn more\x3c/a\x3e.");
            return
        }
        var allContainers = FanControls.matchingContainers(container,
            "follow-fan", "follow-fan");
        allContainers.toggleClass("following");
        FanControls.toggleFan(params);
        var callback = function(data) {
            if (data.ok == true) {
                Log.note("fan " + (following ? "removed" : "added") + " from follows");
                $("body").trigger("fan_" + (following ? "unfollow" : "follow") + "ed", [params.follow_id])
            } else {
                allContainers.toggleClass("following");
                FanControls.toggleFan(params)
            }
        };
        FanControls.doPost("/fan_follow_cb", params, callback)
    },
    signup_or_verify_followfan_click: function($container) {
        var params = this.followFanParams($container);
        if (params) FanAction.doAction("follow", null, null, params.follow_id, "f", null, params)
    },
    doPost: function(url, parms, callback) {
        if (Url.isCustomDomain()) url = siteroot_current + url;
        Crumb.ajax({
            type: "POST",
            url: url,
            data: parms,
            dataType: Url.isCustomDomain() && !$.support.cors ? "jsonp" : "json",
            xhrFields: {
                withCredentials: true
            },
            success: function(data) {
                callback(data);
                if (data.ok === true) Log.debug("XHR form submission succeeded with data", data);
                else {
                    Log.error("XHR POST returned error JSON", data);
                    return
                }
            },
            error: function(jqXHR,
                textStatus, errorThrown) {
                Log.error("XHR POST failed", jqXHR, textStatus, errorThrown)
            }
        })
    },
    findContainer: function(el, className) {
        container = $(el).closest("." + className);
        if (container.length == 0) {
            Log.debug("missing fan-controls container");
            return null
        }
        return container
    },
    matchingContainers: function(container, className, attrName) {
        return $("." + className + "[data-" + attrName + "\x3d" + container.attr("data-" + attrName) + "]")
    },
    getTralbumLookup: function(item_key) {
        if (!FanControls.Data || !FanControls.Data.collection_summary ||
            !FanControls.Data.collection_summary.tralbum_lookup) return null;
        return FanControls.Data.collection_summary.tralbum_lookup[item_key]
    },
    isFollowedFan: function(fanId) {
        if (!FanControls.Data || !FanControls.Data.collection_summary || !FanControls.Data.collection_summary.follows || !FanControls.Data.collection_summary.follows.following) return null;
        var following = FanControls.Data.collection_summary.follows.following || {};
        return following[fanId]
    },
    setTralbumLookup: function(item_key, item) {
        if (!FanControls.Data || !FanControls.Data.collection_summary ||
            !FanControls.Data.collection_summary.tralbum_lookup) Log.error("attempting to set tralbum lookup with no data!");
        FanControls.Data.collection_summary.tralbum_lookup[item_key] = item
    },
    initializeItems: function(rootElem) {
        var $rootElem = $(rootElem || document);
        Log.debug("FanControls.initializeItems");
        if (!FanControls._isFan) {
            $rootElem.find(".collect-item").removeClass("disabled");
            $rootElem.find(".follow-button").removeClass("disabled");
            return
        }
        Log.debug("FanControls.initializeItems getting data");
        FanControls.getData().then(function(data) {
            Log.debug("FanControls.initializeItems got data, doing some stuff");
            var summary = data && data.collection_summary;
            var tralbum_lookup = summary && summary.tralbum_lookup;
            var followdata = summary && summary.follows && summary.follows.following;
            if (tralbum_lookup) $rootElem.find(".collect-item").each(function(index, elem) {
                var $elem = $(elem);
                var itemKey = $elem.attr("data-collect-item");
                var tralbum = tralbum_lookup[itemKey];
                if (tralbum)
                    if (tralbum.purchased) $elem.addClass("purchased");
                    else $elem.addClass("wishlisted");
                else $elem.removeClass("purchased").removeClass("wishlisted");
                $elem.removeClass("disabled")
            });
            else Log.error("trying to render fan state but collection_summary data not found. Data:", data);
            if (followdata) $rootElem.find(".follow-button").each(function(index, elem) {
                var $elem = $(elem);
                var follow_fan = $elem.data("follow-fan");
                if (followdata[follow_fan]) $elem.addClass("following");
                else $elem.removeClass("following");
                $elem.removeClass("disabled")
            });
            else Log.error("trying to render fan state but following data not found.  Data:", data)
        })
    },
    toggleItem: function(params) {
        if (!FanControls.Data || FanControls.Data.read_only) return;
        var item_key = params.item_type + params.item_id;
        var item = FanControls.getTralbumLookup(item_key);
        if (item) {
            if (!item.purchased) FanControls.setTralbumLookup(item_key, null)
        } else FanControls.setTralbumLookup(item_key, {
            item_type: params.item_type,
            item_id: params.item_id,
            band_id: params.band_id,
            purchased: null
        })
    },
    toggleFan: function(params) {
        if (!FanControls.Data || FanControls.Data.read_only) return;
        var item_key = params.follow_id.toString();
        var following = FanControls.Data.collection_summary.follows.following;
        var item =
            following[item_key];
        if (item) following[item_key] = null;
        else following[item_key] = true
    },
    collectParams: function(container) {
        if (!container) return null;
        var fan_id = FanControls.Data ? FanControls.Data.fan_id : null;
        var band_id = container.attr("data-collect-band");
        var type_item = container.attr("data-collect-item") || "";
        var booyakasha_user = container.attr("data-booyakasha-user") || null;
        var item_type = type_item.substr(0, 1);
        var item_id = parseInt(type_item.substr(1));
        var context = container.attr("data-collect-context") || null;
        var refHint = container.attr("data-ref-hint") || null;
        var statToken = container.attr("data-collect-stat") || null;
        var itemTitle = container.attr("data-collect-title") || null;
        if (isNaN(item_id)) {
            Log.debug("bad or missing item spec for collect controls: " + type_item);
            return null
        }
        var params = {
            "fan_id": fan_id,
            "item_id": item_id,
            "item_type": item_type,
            "band_id": band_id,
            "context": context
        };
        if (refHint) params.ref_hint = refHint;
        if (itemTitle) params.item_title = itemTitle;
        if (window.ReferrerToken) params["ref_token"] = window.ReferrerToken;
        if (booyakasha_user) params["ref_username"] = booyakasha_user;
        if (statToken) params.stat_token = statToken;
        return params
    },
    followFanParams: function(container) {
        if (!container) return null;
        var fan_id = FanControls.Data ? FanControls.Data.fan_id : null;
        var follow_id = container.attr("data-follow-fan");
        var action = container.hasClass("following") ? "unfollow" : "follow";
        var statToken = container.attr("data-follow-stat");
        if (isNaN(follow_id)) {
            Log.debug("bad or missing item spec for follow-fan controls");
            return null
        }
        params = {
            "fan_id": fan_id,
            "follow_id": follow_id,
            "action": action
        };
        if (statToken) params.stat_token = statToken;
        return params
    },
    zzz: null
};
if (window.FanControlsAutoStart !== false) $(document).ready(function() {
    FanControls.start()
});
(function(window, $, ko) {
    var FanControls2 = {
        isWishlisted: function(itemType, itemId) {
            var tralbumLookup = FanControls.getTralbumLookup(itemType + itemId);
            return tralbumLookup && !tralbumLookup.purchased
        },
        isFollowedFan: function(fanId) {
            return FanControls.isFollowedFan(fanId)
        },
        wishlist: function(itemType, itemId, bandId, collectData) {
            var self = this;
            if (!Identities.fan()) return;
            if (window.TralbumData && TralbumData.current && TralbumData.current.id) FanControls.collectItem(Identities.fan().id, TralbumData.current.id, TralbumData.current.type,
                TralbumData.current.band_id);
            else {
                var params = {
                    fan_id: Identities.fan().id,
                    item_type: itemType,
                    item_id: itemId,
                    band_id: bandId,
                    purchased: null
                };
                if (collectData) $.each(collectData, function(k, v) {
                    if (collectData[k]) params[k] = v
                });
                var allContainers = $('.collect-item[data-collect-item\x3d"' + itemType + itemId + '"]');
                $.merge(allContainers, $('.collection-item-container[data-tralbumid\x3d"' + itemId + '"][data-tralbumtype\x3d"' + itemType + '"]'));
                var toggle = function() {
                    FanControls.toggleItem(params);
                    allContainers.toggleClass("wishlisted")
                };
                FanControls._started = false;
                FanControls.start();
                FanControls.initializeItems();
                FanControls.getData().then(function() {
                    var wishlisted = self.isWishlisted(itemType, itemId);
                    if (!wishlisted && params.stat_token) Stats.record({
                        kind: "click",
                        click: params.stat_token
                    });
                    toggle();
                    FanControls.doPost(wishlisted ? "/uncollect_item_cb" : "/collect_item_cb", params, function(data) {
                        if (data.ok === true) Log.note("item " + (wishlisted ? "removed" : "added") + " from wishlist");
                        else toggle()
                    })
                })
            }
        },
        followBand: function(bandId, fromSignup) {
            var BandData =
                window.BandData || null;
            if (BandData) BandFollow.followUnfollow(Identities.fan().id, BandData.id, TralbumData.current ? TralbumData.current.id : null, TralbumData.current ? TralbumData.current.type : null, fromSignup);
            else {
                var params = {
                    band_id: bandId,
                    fan_id: Identities.fan().id,
                    action: "follow"
                };
                var allContainers = $('.follow-band[data-follow-band\x3d"' + bandId + '"]');
                $.merge(allContainers, $("#follow-unfollow-band_" + bandId));
                var toggle = function() {
                    $(".following-msg", allContainers).html(TM("Following"));
                    allContainers.toggleClass("following")
                };
                FanControls._started = false;
                FanControls.start();
                FanControls.initializeItems();
                FanControls.getData().then(function() {
                    toggle();
                    FanControls.doPost("/fan_follow_band_cb", params, function(data) {
                        if (data.ok === true) Log.note("fan " + "followed");
                        else toggle()
                    })
                })
            }
        },
        followFan: function(fanId, followData) {
            var self = this;
            var params = {
                fan_id: Identities.fan().id,
                follow_id: fanId
            };
            if (followData) $.each(followData, function(k, v) {
                if (followData[k]) params[k] = v
            });
            var allContainers = $('.follow-fan[data-follow-fan\x3d"' + fanId + '"]');
            $.merge(allContainers, $("#follow-unfollow_" + fanId));
            FanControls._started = false;
            FanControls.start();
            allContainers.addClass("following");
            FanControls.getData().then(function() {
                FanControls.initializeItems();
                allContainers.addClass("following");
                var following = self.isFollowedFan(fanId);
                if (!following && params.stat_token) Stats.record({
                    kind: "click",
                    click: params.stat_token
                });
                FanControls.toggleFan(params);
                FanControls.doPost("/fan_follow_cb", params, function(data) {
                    if (data.ok === true) Log.note("fan " + (following ? "followed" :
                        "unfollowed"));
                    else;
                })
            })
        }
    };
    window.FanControls2 = FanControls2
})(window, $, ko);
var VideoElementWrapper = function() {
    function VideoElementWrapper(elem) {
        function eventhandler(name) {
            return function() {
                self.handleEvent(name)
            }
        }
        this.element = elem;
        this.state = "init";
        var eventnames = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "stalled", "suspend", "waiting"];
        var self = this;
        for (var i = 0; i < eventnames.length; i++) this.element.addEventListener(eventnames[i], eventhandler(eventnames[i]));
        this.$blackout = $('\x3cdiv class\x3d"wrapped-video-blackout"\x3e');
        this.$poster = $('\x3cimg class\x3d"wrapped-video-poster"\x3e');
        this.$play = $('\x3cdiv class\x3d"wrapped-video-play video-play-button"\x3e');
        this.$loading = $('\x3cdiv class\x3d"wrapped-video-loading video-loading-indicator"\x3e');
        $(elem).after(this.$blackout, this.$poster, this.$play, this.$loading);
        this.changeState("loading");
        this.$poster.add(this.$play).click(function() {
            elem.play()
        });
        var posterUrl = $(elem).attr("poster");
        if (posterUrl) {
            this.setPoster(posterUrl);
            this.changeState("ready")
        }
        this._stateTransitions = {
            "init": {
                "canplay": "ready",
                "playing": "playing",
                "ended": "ready",
                "error": "error",
                "progress": "ready"
            },
            "error": {
                "abort": "init",
                "emptied": "init",
                "suspend": "init"
            },
            "ready": {
                "play": "loading",
                "playing": "playing",
                "emptied": "loading"
            },
            "playing": {
                "emptied": "loading",
                "ended": "ended",
                "waiting": "loading",
                "error": "error"
            },
            "ended": {
                "play": "loading",
                "playing": "playing",
                "emptied": "loading"
            },
            "loading-playing": {
                "abort": "init",
                "playing": "playing",
                "ended": "ready",
                "error": "error"
            },
            "loading-notplaying": {
                "abort": "init",
                "canplay": "ready",
                "suspend": "ready",
                "ended": "ready",
                "error": "error"
            }
        }
    }
    VideoElementWrapper.prototype.changeState = function(state) {
        if (state && this.state != state) {
            $(this.element).parent().removeClass("state-" + this.state);
            Log.debug("new state: " + state);
            this.state = state;
            $(this.element).parent().addClass("state-" + this.state)
        }
    };
    VideoElementWrapper.prototype.handleEvent = function(eventName) {
        var currentState = this.state;
        if (currentState == "loading")
            if (this.element.paused) currentState =
                "loading-notplaying";
            else currentState = "loading-playing";
        Log.debug("videoevent: " + eventName + " in " + currentState);
        var transitionMap = this._stateTransitions[currentState];
        this.changeState(transitionMap && transitionMap[eventName])
    };
    VideoElementWrapper.prototype.setPoster = function(url) {
        this.$poster.attr("src", url)
    };
    return VideoElementWrapper
}();
(function(window, $) {
    function VideoPlayer(trackinfo, genericContainerSelector, properties) {
        this.init(trackinfo, genericContainerSelector, properties)
    }
    window.VideoPlayer = VideoPlayer;
    $.extend(VideoPlayer.prototype, {
        videoId: null,
        sourceType: null,
        prev_sourceType: null,
        properties: null,
        genericContainerSelector: null,
        genericIFrameElem: null,
        genericPlayer: null,
        captionText: null,
        trackinfo: null,
        musicPlaylist: null,
        currOnTrackPlayed: null,
        state: null,
        postAnimateFn: null,
        featuredId: null,
        init: function(trackinfo, genericContainerSelector,
            properties) {
            if (this.isPhone()) return;
            var hasGeneric = false;
            if (trackinfo) {
                this.trackinfo = trackinfo;
                for (var i = 0; i < trackinfo.length && !hasGeneric; i++)
                    if (trackinfo[i].video_source_type == "t") hasGeneric = true
            }
            if (genericContainerSelector) this.genericContainerSelector = genericContainerSelector;
            this.properties = properties || {};
            if (!this.properties.root_class_name) this.properties.root_class_name = "video-player";
            if (!this.properties.siteroot) this.properties.siteroot = siteroot_current;
            if (this.properties.guideElem && this.properties.parallelElem) {
                var self =
                    this;
                var originalPadding = $(self.properties.parallelElem).css("padding-top");
                var postAnimateFn = function(doExpand) {
                    if (doExpand) $(self.properties.parallelElem).css("padding-top", "" + ($(self.properties.guideElem).offset().top - $(self.properties.parallelElem).offset().top) + "px");
                    else $(self.properties.parallelElem).css("padding-top", originalPadding)
                };
                this.postAnimateFn = postAnimateFn
            }
            if (this.properties.featuredSelector) {
                var featuredId = $(this.properties.featuredSelector).attr("data-id");
                if (featuredId) this.featuredId =
                    featuredId
            }
            $(this.genericContainerSelector + " video.native-video-player").on("ended", function() {
                this.currentTime = 0
            })
        },
        doVideo: function(sourceType, videoId, caption, autoplay, autoscroll) {
            if (this.isPhone()) return;
            if (this.trackinfo && this.featuredId == videoId) {
                this.justHide();
                this.state = null;
                if (autoscroll) {
                    $("html, body").animate({
                        scrollTop: $(".featured-video-wrapper").offset().top - 20
                    }, 500);
                    var iframe = $(".featured-video-wrapper iframe")[0];
                    var video = $(".featured-video-wrapper video.native-video-player")[0];
                    if (iframe) {
                        Log.debug("posting play message to featured iframe");
                        iframe.contentWindow.postMessage("play", "*")
                    }
                    if (video) {
                        if (!VideoPlayer.featuredWrapper) VideoPlayer.featuredWrapper = new VideoElementWrapper(video);
                        video.load();
                        video.play()
                    }
                }
                return
            }
            if (this.state == "open" && this.sourceType == sourceType && this.videoId == videoId) {
                this.justHide();
                this.state = null;
                return
            }
            this.state = "open";
            this.preLoad(sourceType);
            this.sourceType = sourceType;
            this.videoId = videoId;
            this.captionText = caption;
            if (sourceType == "t") this.do23(videoId,
                autoplay, autoscroll)
        },
        _loadVideo: function(frameElem, videoElem, videoId, playIt) {
            if (frameElem) {
                var message = playIt ? "startvideo" : "loadvideo";
                var msg = {
                    message: message,
                    id: videoId,
                    from: this.musicPlaylist ? "a" : "t"
                };
                Log.debug("posting message to videoframe: " + JSON.stringify(msg));
                frameElem.contentWindow.postMessage(msg, "*")
            } else if (videoElem) {
                if (!VideoPlayer.wrapper) VideoPlayer.wrapper = new VideoElementWrapper(videoElem);
                var attrs = null;
                for (var i = 0; i < TralbumData.trackinfo.length; i++)
                    if (TralbumData.trackinfo[i].video_id ==
                        videoId) {
                        var video_url = TralbumData.trackinfo[i].video_mobile_url;
                        video_url = video_url.replace("video_mobile_high", "video_hd");
                        attrs = {
                            src: "http://bandcamp.23video.com/" + video_url,
                            poster: "//bandcamp.23video.com/" + TralbumData.trackinfo[i].video_poster_url
                        };
                        break
                    } if (attrs) {
                    videoElem.pause();
                    Log.debug("loading video with url " + attrs.src);
                    VideoPlayer.wrapper.setPoster(attrs.poster);
                    $(videoElem).attr(attrs)
                } else Log.error("do not have a video url for video id " + videoId)
            }
        },
        do23: function(videoId, autoplay, autoscroll) {
            var self =
                this;
            var iframeElem = $(this.genericContainerSelector + " iframe");
            var frame = iframeElem[0];
            var videoElem = $(this.genericContainerSelector + " video.native-video-player");
            var video = videoElem[0];
            if (!frame && !video) return;
            var newUrl = this.properties.siteroot + "/videoframe?video_id\x3d" + videoId;
            if (autoplay) newUrl += "\x26autoplay\x3d1";
            if (BandData && BandData.id) newUrl += "\x26band_id\x3d" + BandData.id;
            if (this.musicPlaylist) newUrl += "from\x3d'a'";
            else newUrl += "from\x3d't'";
            this.genericIFrameElem = iframeElem;
            this.postLoad("t");
            $(this.genericContainerSelector).addClass(this.properties.root_class_name + "-viz");
            this.showCaption();
            var scrollPosSelector = this.genericContainerSelector;
            var transition = !(this.prev_sourceType || this.properties.noAnimation);
            if (transition) {
                $("#bio-container").addClass("anim-hidden");
                $(this.genericContainerSelector).slideDown({
                    complete: function() {
                        if (self.state == "open") self._loadVideo(frame, video, videoId, autoplay);
                        else {
                            frame.contentWindow.location.replace(newUrl);
                            self._loadVideo(null, video, videoId, autoplay)
                        }
                        if (self.postAnimateFn) self.postAnimateFn(true);
                        if (autoscroll) {
                            var topView = $(window).scrollTop();
                            var topElement = $(scrollPosSelector).offset().top;
                            if (topElement < topView) {
                                var scrollPos = $(scrollPosSelector).offset().top - 20;
                                $("html, body").animate({
                                    scrollTop: scrollPos
                                }, 500)
                            }
                        }
                        $("#bio-container").removeClass("anim-hidden");
                        return
                    }
                })
            } else {
                $(this.genericContainerSelector).show();
                if (self.state == "open") self._loadVideo(frame, video, videoId, autoplay);
                else {
                    frame.contentWindow.location.replace(newUrl);
                    self._loadVideo(null, video, videoId, autoplay)
                }
                if (this.postAnimateFn) this.postAnimateFn(true);
                if (autoscroll) {
                    var topView = $(window).scrollTop();
                    var topElement = $(scrollPosSelector).offset().top;
                    if (topElement < topView) {
                        var scrollPos = $(scrollPosSelector).offset().top - 20;
                        $("html, body").animate({
                            scrollTop: scrollPos
                        }, 500)
                    }
                }
            }
            $(this.genericContainerSelector).removeClass(this.properties.root_class_name + "-hidden")
        },
        preLoad: function() {
            if (this.prev_sourceType == "t");
        },
        postLoad: function(sourceType) {
            if (!this.prev_sourceType || this.prev_sourceType == sourceType) return;
            var containerSelector = this.genericContainerSelector;
            this.justHide(containerSelector, false);
            this.state = null
        },
        justHide: function(containerSelector, transition) {
            var self = this;
            if (!(this.sourceType && this.videoId)) return;
            if (!containerSelector) containerSelector = this.genericContainerSelector;
            if (this.captionText) {
                var captionElem = $("." + this.properties.root_class_name + "-caption");
                captionElem.html("");
                captionElem.hide();
                this.captionText = null
            }
            if (transition) $(containerSelector).slideUp({
                complete: function() {
                    if (self.postAnimateFn) self.postAnimateFn(false)
                }
            });
            else {
                $(containerSelector).hide();
                this.postAnimateFn(false)
            }
            $(containerSelector).removeClass(this.properties.root_class_name + "-viz");
            $(containerSelector).addClass(this.properties.root_class_name + "-hidden");
            var iframeElem = $(containerSelector + " iframe");
            var frame = iframeElem[0];
            var videoElem = $(containerSelector + " video.native-video-player");
            var video = videoElem[0];
            if (frame) {
                Log.debug("posting stop message to player iframe");
                frame.contentWindow.postMessage("stop", "*")
            }
            if (video) {
                Log.debug("pausing video element");
                video.pause()
            }
        },
        _playTrackListener: function(tracknum,
            self) {
            var ti = null;
            if (!self) self = this;
            ++tracknum;
            for (var i = 0; i < self.trackinfo.length; i++)
                if (self.trackinfo[i].track_num == tracknum) {
                    ti = TralbumData.trackinfo[i];
                    break
                } if (!ti || !ti.video_id) {
                this.justHide(null, true);
                this.state = null;
                return
            }
            Log.debug("queuing video track: " + tracknum);
            this.doVideo(ti.video_source_type, ti.video_id, ti.video_caption, false, false)
        },
        setPlaylistListeners: function(playlist) {
            if (this.isPhone()) return;
            var self = this;
            playlist.ontrackplayed(function(tracknum) {
                if (tracknum == self.currOnTrackPlayed) return;
                self.currOnTrackPlayed = tracknum;
                Log.debug("VideoPlayer: ontrackplayed: " + tracknum);
                self._playTrackListener(tracknum, self)
            });
            this.musicPlaylist = playlist
        },
        showCaption: function() {
            var shown = false;
            var captionElem = $("." + this.properties.root_class_name + "-caption");
            var rootElem = $("." + this.properties.root_class_name);
            if (this.captionText) {
                captionElem.html(this.captionText);
                captionElem.show();
                if (rootElem) rootElem.addClass("caption-viz");
                shown = true
            } else if (captionElem) {
                captionElem.hide();
                if (rootElem) rootElem.removeClass("caption-viz")
            }
            return shown
        },
        isPhone: function() {
            return window.MediaView && MediaView.mode == "phone"
        },
        xxx: null
    });
    var TralbumPageVideoPlayer = {
        _hiddenForDialogs: [],
        init: function(playlist, noAnimation) {
            if (window.Browser && Browser.make == "safari" && Browser.platform == "iphone") {
                $(document).on("bc_dialog_open", function(arg, arg2) {
                    Log.debug("hiding video for IOS while dialog is open");
                    TralbumPageVideoPlayer._hiddenForDialogs.push($("video:visible").hide())
                });
                $(document).on("bc_dialog_close", function(arg, arg2) {
                    var hid = TralbumPageVideoPlayer._hiddenForDialogs;
                    $.each(hid, function(i, $elems) {
                        Log.debug("restoring hidden video because dialog is closing");
                        $elems.show()
                    });
                    TralbumPageVideoPlayer._hiddenForDialogs = []
                })
            }
            $("video.native-video-player").each(function() {
                if ($(this).parents(".featured-video-wrapper")[0]) {
                    if (!VideoPlayer.featuredWrapper) VideoPlayer.featuredWrapper = new VideoElementWrapper(this)
                } else if (!VideoPlayer.wrapper) VideoPlayer.wrapper = new VideoElementWrapper(this)
            });
            if (!window.tracklistVideoPlayer) {
                var tracklistVideoPlayer = new VideoPlayer(window.TralbumData.trackinfo,
                    ".middleColumn .video-wrapper", {
                        root_class_name: "video-wrapper",
                        parallelElem: "#rightColumn",
                        guideElem: "#tralbumArt",
                        noAnimation: !!noAnimation,
                        featuredSelector: ".featured-video-wrapper"
                    });
                window.tracklistVideoPlayer = tracklistVideoPlayer
            }
            if (playlist) window.tracklistVideoPlayer.setPlaylistListeners(playlist)
        }
    };
    window.TralbumPageVideoPlayer = TralbumPageVideoPlayer
})(window, jQuery);
var CrossFrame = function() {
    function CrossFrame(thisWindow, targetWindow, domain) {
        function callMethod(name, arg, serial) {
            function callFailure(err) {
                targetWindow.postMessage({
                    message: "crossframe_call_fail",
                    serial: serial,
                    error: err
                }, self.domain)
            }

            function callSuccess(result) {
                targetWindow.postMessage({
                    message: "crossframe_call_result",
                    serial: serial,
                    result: result
                }, self.domain)
            }
            var h = self.methodHandlers[name];
            if (h) try {
                h(arg).then(function(result) {
                    callSuccess(result)
                }).fail(function(err) {
                    callFailure(err)
                })
            } catch (e) {
                callFailure(err)
            } else callFailure("no such method")
        }

        function emitEvent(name, arg) {
            var handlers = self.eventHandlers[name];
            if (!handlers) {
                Log.debug("no handlers for " + name);
                return
            }
            for (var i = 0; i < handlers.length; i++) {
                Log.debug("calling handler for " + name + " with arg " + JSON.stringify(arg));
                try {
                    handlers[i].call(this, arg)
                } catch (e) {
                    Log.debug("caught exception in handler: " + e)
                }
            }
        }

        function popDeferred(serial) {
            var p = self.deferred[serial];
            if (p) delete self.deferred[serial];
            else Log.debug("hmm, didn't find a promise for call " + serial);
            return p
        }

        function resolveCall(serial,
            result) {
            var p = popDeferred(serial);
            if (p) p.resolve(result);
            else Log.debug("hmm, didn't find a promise for call " + serial)
        }

        function failCall(serial, err) {
            var p = popDeferred(serial);
            if (p) p.fail(err);
            else Log.debug("hmm, didn't find a promise for failed call " + serial)
        }

        function handleMessage(data) {
            switch (data.message) {
                case "crossframe_call":
                    callMethod(data.name, data.arg, data.serial);
                    break;
                case "crossframe_emit":
                    emitEvent(data.name, data.arg);
                    break;
                case "crossframe_call_result":
                    resolveCall(data.serial, data.result);
                    break;
                case "crossframe_call_fail":
                    failCall(data.serial, data.error);
                    break
            }
        }
        this.serial = 1;
        this.domain = domain;
        this.deferred = [];
        this.methodHandlers = {};
        this.eventHandlers = {};
        this.thisWindow = thisWindow;
        if (domain == "*") Log.error("warning: using * for CrossFrame domain; you should specify a specific domain");
        var self = this;
        this.call = function(name, arg) {
            var msg = {
                message: "crossframe_call",
                name: name,
                arg: arg,
                serial: this.serial++
            };
            var d = $.Deferred();
            this.deferred[msg.serial] = d;
            targetWindow.postMessage(msg, this.domain);
            return d.promise()
        };
        this.emit = function(name, arg) {
            var msg = {
                message: "crossframe_emit",
                name: name,
                arg: arg
            };
            targetWindow.postMessage(msg, this.domain)
        };
        this.messageListener = function(event) {
            if (self.domain == "*" || self.domain == event.origin) handleMessage(event.data);
            else;
        };
        thisWindow.addEventListener("message", this.messageListener);
        this.handlers = {}
    }
    CrossFrame.prototype.handleMethod = function(name, handler) {
        this.methodHandlers[name] = handler
    };
    CrossFrame.prototype.on = function(name, cb) {
        var handlers = this.eventHandlers[name];
        if (!handlers) {
            handlers = [];
            this.eventHandlers[name] = handlers
        }
        handlers.push(cb)
    };
    CrossFrame.prototype.destroy = function() {
        this.thisWindow.removeEventListener("message", this.messageListener);
        this.methodHandlers = null;
        this.eventHandlers = null
    };
    return CrossFrame
}();
(function(window, $) {
    var FanAction = {
        doAction: function(action, querystr, from, itemId, itemType, bandId, collectData) {
            var pagedata = $("#pagedata").data("blob") || {};
            var cfg = pagedata.cfg || {};
            var statClick = null;
            var isBandMember = Identities.bmgr.bands().length > 0;
            var isUnverifiedFan = Identities.fan() && !Identities.fan().private && !Identities.fan().verified;
            if (action === "wishlist")
                if (isUnverifiedFan) statClick = "unverified_fan_wishlist_open";
                else if (isBandMember) statClick = "logged_out_wishlist_open_band_no_fan";
            else statClick =
                "logged_out_wishlist_open";
            else if (action === "follow" && itemType === "f")
                if (isUnverifiedFan) statClick = "unverified_fan_fan_follow_open";
                else if (isBandMember) statClick = "logged_out_fan_follow_open_band_no_fan";
            else statClick = "logged_out_fan_follow_open";
            else if (action === "follow" && (!itemType || itemType === "b"))
                if (isUnverifiedFan) statClick = "unverified_fan_follow_open";
                else if (isBandMember) statClick = "logged_out_follow_open_band_no_fan";
            else statClick = "logged_out_follow_open";
            else if (action === "follow" && (!itemType ||
                    itemType === "g"))
                if (isUnverifiedFan) statClick = "unverified_fan_follow_open";
                else if (isBandMember) statClick = "logged_out_follow_open_band_no_fan";
            else statClick = "logged_out_genre_follow_open";
            if (statClick) Stats.record({
                "kind": "click",
                "click": statClick
            });
            var ref_token = window.ReferrerToken;
            if (ref_token) Crumb.ajax({
                type: "POST",
                url: "/api/editorial/3/wish_follow",
                dataAs: "JSON",
                data: {
                    "action": action,
                    "logged_in": false,
                    "ref_token": ref_token
                },
                success: function(response) {
                    if (response.error) Log.warn("Editorial logged out action recording error.",
                        response)
                },
                error: function(error) {
                    Log.warn("Editorial logged out action recording failed.", error)
                }
            });
            querystr = querystr || "";
            if (querystr.length === 0 && pagedata.signup_querystrings) querystr = pagedata.signup_querystrings[itemType + itemId] || "";
            var loginFrom = from || (action == "follow" ? "loflwlgn" : "lowllgn");
            var signupFrom = from || (action == "follow" ? "loflwlrn" : "lowllrn");
            var loginUrl;
            var signupUrl;
            if (querystr.length > 0) {
                loginUrl = siteroot_https + "/login" + querystr + "\x26action\x3d" + action + "\x26from\x3d" + loginFrom;
                signupUrl =
                    siteroot_https + "/fans" + querystr + "\x26action\x3d" + action + "\x26from\x3d" + signupFrom
            } else {
                loginUrl = siteroot_https + "/login?action\x3d" + action + "\x26from\x3d" + loginFrom;
                signupUrl = siteroot_https + "/fans?action\x3d" + action + "\x26from\x3d" + signupFrom
            }
            if (Identities.fan() && !Identities.fan().private && !Identities.fan().verified && window.VerifyNag) {
                var fan_email = pagedata.signup_params.email || window.FanSignup.state.email;
                window.verifyNag = window.verifyNag || new VerifyNag({
                    "fan_email": fan_email
                });
                window.verifyNag.openDialog()
            } else if (window.FanSignup) {
                var isBand =
                    (!Identities.fan() || Identities.fan().private) && Identities.user();
                if (MediaView.mode === "phone" && isBand) {
                    var fanSignupUrl = siteroot_https + "/fan_signup" + querystr + "\x26action\x3d" + action + "\x26from\x3d" + signupFrom + "\x26pane\x3dexisting_artist";
                    window.location.href = fanSignupUrl
                } else if (Url.isCustomDomain() && isBand)
                    if (FanSignup.subdomainURL) {
                        var params = {
                            "fan_action_pane": "existing_artist",
                            "fan_action": action
                        };
                        window.location.href = Url.addQueryParams(FanSignup.subdomainURL, params)
                    } else window.location.href =
                        siteroot_https + "/fans";
                else {
                    FanSignup.actionParams = {
                        "action": action
                    };
                    if (itemId && itemType) {
                        FanSignup.actionParams.actionItemId = itemId;
                        FanSignup.actionParams.actionItemType = itemType;
                        FanSignup.actionParams.actionBandId = bandId
                    } else if (bandId) FanSignup.actionParams.actionBandId = bandId;
                    if (collectData) FanSignup.actionParams.collectData = collectData;
                    FanSignup.actionParams.from = from;
                    FanSignup.actionParams.queryString = querystr;
                    var pane;
                    if (isBand && FanSignup.affiliations && (FanSignup.affiliations.fan || FanSignup.affiliations.fan_already_linked_email)) pane =
                        "dupe_fan";
                    else if (isBand) pane = "existing_artist";
                    else pane = "action";
                    FanSignup.openPane(pane, true)
                }
            } else {
                var title;
                if (action == "wishlist") title = TM("Wishlist");
                else if (action === "follow") title = TM("Follow");
                var dialogOptions = {
                    "title": title,
                    "buttons": [],
                    "minHeight": 100
                };
                if (MediaView.mode === "desktop") dialogOptions.width = "38em";
                NuDialog.showTemplate("fan/fan_action_panel", {
                        "siteroot": window.siteroot,
                        "is_band_member": Identities.bmgr.bands().length > 0,
                        "action": action,
                        "loginUrl": loginUrl,
                        "signupUrl": signupUrl
                    },
                    dialogOptions)
            }
        }
    };
    window.FanAction = FanAction;
    $(document).ready(function() {
        var urlParams = Url.parseQuery(location.search);
        var pagedata = $("#pagedata").data("blob") || {};
        var cfg = pagedata.cfg || {};
        if (urlParams.show_nag) {
            var fan_email = pagedata.signup_params.email || window.FanSignup.state.email;
            window.verifyNag = window.verifyNag || new VerifyNag({
                "fan_email": fan_email
            });
            window.verifyNag.openDialog();
            SignupUtils.cleanURL()
        }
        $(document).on("visibilitychange", function() {
            if (document.visibilityState && document.visibilityState ===
                "visible" && !Identities.user() && Cookie.get("identity")) window.location.reload(true)
        })
    })
})(window, jQuery);
var CarouselControl = function() {
    var self = {
        init: function(container, pagedata) {
            self.$container = $(container);
            self.pagedata = pagedata;
            self.bcweeklyIsBig = self.pagedata && self.pagedata.big_item && self.pagedata.big_item.is_bcweekly;
            self.$container.find(".carousel-big-item-details").on("mouseover", function() {
                $(this).siblings(".carousel-big-item").find(".carousel-item-hover-overlay").addClass("visible")
            });
            self.$container.find(".carousel-big-item-details").on("mouseout", function() {
                $(this).siblings(".carousel-big-item").find(".carousel-item-hover-overlay").removeClass("visible")
            })
        },
        expandWeekly: function(doPlaylistInit) {
            var d = $.Deferred();
            self.$container.addClass("bcweekly-expanded");
            self.$container.find(".bcweekly").addClass("expanded");
            if (doPlaylistInit && HomeControl.bcwControl) HomeControl.bcwControl.setupPlaylist();
            if (MediaView.mode === "desktop" && HomeControl.feedReader) {
                var feedWasPaused = HomeControl.feedReader.paused;
                HomeControl.feedReader.paused = true
            }
            setTimeout(function() {
                if (MediaView.mode === "desktop" && HomeControl.feedReader && !feedWasPaused) HomeControl.feedReader.paused = false;
                d.resolve()
            }, self.transitionDuration() + 100);
            return d.promise()
        },
        collapseWeekly: function() {
            if (!self.$container.hasClass("bcweekly-expanded")) return;
            var d = $.Deferred();
            HomeControl.bcwControl.jumpToTrack(0);
            HomeControl.bcwControl.playlist.stop();
            HomeControl.bcwControl.removeShowArg();
            self.$container.removeClass("bcweekly-expanded");
            if (MediaView.mode === "desktop" && self.bcweeklyIsBig) self.$container.find(".bcweekly").removeClass("expanded");
            var bcwItem = Iter.find(self.pagedata.small_items.concat(self.pagedata.big_item),
                function(i) {
                    return i.is_bcweekly
                });
            if (bcwItem) {
                var showIndex = HomeControl.bcwControl.showIdToIndex(bcwItem.show_id);
                if (showIndex != HomeControl.bcwControl.showIndex) setTimeout(function() {
                    HomeControl.bcwControl.navigateToShow(showIndex, false, !self.bcweeklyIsBig)
                }, self.transitionDuration() + 100)
            }
            if (MediaView.mode === "desktop" && HomeControl.feedReader) {
                var feedWasPaused = HomeControl.feedReader.paused;
                HomeControl.feedReader.paused = true
            }
            setTimeout(function() {
                if (MediaView.mode === "desktop" && HomeControl.feedReader &&
                    !feedWasPaused) HomeControl.feedReader.paused = false;
                d.resolve()
            }, self.transitionDuration() + 100);
            return d.promise()
        },
        transitionDuration: function() {
            return MediaView.mode === "desktop" ? 300 : 200
        },
        weeklyIsExpanded: function() {
            return self.$container.hasClass("bcweekly-expanded")
        }
    };
    self.init.apply(self, arguments);
    return self
};
var BCWeeklyControl = function() {
    var itemClass = "bcweekly-track";
    var expandedItemClass = "bcweekly-current";
    var trackAnimationDuration = 400;
    var trackAnimationDurationSlow = 2E3;
    var self = {
        init: function(root, showSeq, showData, showIndex, fanData, autoplay, openExpanded, openBrowser) {
            self.$root = $(root).first();
            self.showIndex = showIndex || 0;
            self.showSeq = showSeq || [];
            self.showData = showData || {};
            self.fanData = fanData || {};
            self.trackIndex = null;
            self.collapsedTrackItemHeight = null;
            self.playlist = null;
            self.$root.on("click", "." +
                itemClass,
                function(event) {
                    if ($(event.target).closest("a").hasClass("collect-link")) return true;
                    var $this = $(this);
                    if (event.ctrlKey || event.metaKey || event.shiftKey) return true;
                    if (!$this.hasClass(expandedItemClass)) {
                        event.preventDefault();
                        var clickedIndex = $this.data("index");
                        var currentIndex = self._currentlyPlayingIndex();
                        if (currentIndex != clickedIndex || MediaView.mode == "phone") self.jumpToTrack(clickedIndex);
                        self.showPlayingTabPhone()
                    }
                    self.expandTrack($this)
                }).on("click", ".play-btn", self.handlePlayClick).on("click",
                ".collect-item .collection-btn",
                function(event) {
                    event.stopPropagation();
                    if ($(event.target).closest("a").attr("href") == "#") event.preventDefault()
                }).on("click", ".social-controls .email-link", function(event) {
                self.toggleEmailPanel();
                return false
            }).on("click", ".bcweekly-shows-link", function(event) {
                self.showBrowser();
                return false
            }).on("click", ".bcweekly-close-link", function(event) {
                self.hideBrowser();
                return false
            }).on("click", ".bcweekly-browse-item", function(ev) {
                ev.preventDefault();
                if (ev.shiftKey || ev.ctrlKey ||
                    ev.metaKey || ev.altKey) return true;
                var newIndex = self.showIdToIndex($(this).data("show-id"));
                if (newIndex == self.showIndex) {
                    self.jumpToTrack(0);
                    self.hideBrowser()
                } else {
                    var showId = self.navigateToShow(newIndex, true);
                    if (showId) self.pushHistory(showId)
                }
                return false
            }).on("click", ".bcweekly-tracks-link", function(event) {
                self.showTracks();
                return false
            }).on("scroll", ".bcweekly-browse-inner", function(ev) {
                self.lastBrowsePanelScrollTop = $(this).scrollTop()
            }).on("click", ".bcweekly-share-link", function(event) {
                self.doShare();
                return false
            }).on("click", ".close-show-inner", function(event) {
                HomeControl.carouselControl.collapseWeekly();
                return false
            });
            PopupImage.delegate(self.$root);
            FanControls.delegate(self.$root);
            self.setupPlaylist();
            self.setupPlayerControls();
            self.setupSharing();
            if (MediaView.mode == "phone") {
                $.each(self.showData, function(id, show) {
                    self.fixupShowDataPhone(show)
                });
                self.initTabs()
            }
            $(window).on("popstate", $.proxy(self, "popHistory"));
            if (autoplay) self.autoplay();
            $(window).on("keydown", function(ev) {
                if (ev.keyCode ===
                    27) self.hideBrowser()
            });
            setTimeout(function() {
                self.renderTracklist();
                FanControls.initializeItems(self.$root)
            }, 100);
            if (openExpanded) self.$root.find(".bcweekly").addClass("expanded");
            if (openBrowser) self.openArchive()
        },
        renderTracklist: function() {
            var $tracks = self.$root.find(".bcweekly-tracks");
            if ($tracks.find(".bcweekly-track-list").length === 0 && $tracks.length !== 0) {
                Log.debug("bcweekly: rendering tracklist");
                Templ.renderElem($tracks[0], "home_2016/bcweekly_tracks_inner", {
                    bcw: self.currentShow(),
                    fan_data: self.fanData || {}
                })
            }
        },
        autoplay: function() {
            if (!self.playingOrPaused() && Browser.platform != "iphone") {
                Log.debug("bcweekly: autoplaying");
                HomeControl.carouselControl.expandWeekly(true);
                self.renderTracklist();
                FanControls.initializeItems(self.$root);
                self._trackbreaks = self._calculateTrackBreaks(null);
                self.playlist.playpause();
                self.precacheTrackArt()
            }
        },
        openArchive: function() {
            Log.debug("bcweekly: autoshow archive");
            HomeControl.carouselControl.expandWeekly(true);
            self.renderTracklist();
            FanControls.initializeItems(self.$root);
            self._trackbreaks = self._calculateTrackBreaks(null);
            self.precacheTrackArt();
            self.playlist.playpause();
            self.playlist.playpause();
            self.showBrowser()
        },
        handlePlayClick: function() {
            if (MediaView.mode !== "phone") self.renderTracklist();
            if (!self.playingOrPaused()) {
                self._trackbreaks = self._calculateTrackBreaks(null);
                if (self._trackbreaks[0] && self._trackbreaks[0].timecode === 0) self.expandTrack(self.trackElem(0));
                self.pushHistory((self.currentShow() || {}).show_id, true);
                setTimeout(self.showPlayingTabPhone, 0)
            }
            var expanding = !self.$root.find(".bcweekly").hasClass("expanded");
            var hasPlaylist = !!self.playlist;
            HomeControl.carouselControl.expandWeekly(!hasPlaylist).then(function() {
                if (expanding && MediaView.mode === "desktop") $("html, body").animate({
                    scrollTop: self.$root.find(".bcweekly").offset().top - 200
                });
                if (!hasPlaylist) self.playlist.playpause()
            });
            if (hasPlaylist) self.playlist.playpause();
            self.precacheTrackArt();
            return false
        },
        loadShowData: function(id) {
            var promise = $.Deferred();
            var data$$0 = self.showData[id];
            if (data$$0) {
                Log.debug("using cached show data for show " +
                    id);
                promise.resolve(data$$0)
            } else {
                Log.debug("loading show data for show " + id);
                var url = "/api/bcweekly/2/get?id\x3d" + Number(id);
                if (!Identities.fan()) url = url + "\x26lo\x3d1\x26lo_action_url\x3d" + siteroot_https;
                $.ajax({
                    type: "GET",
                    url: url,
                    dataType: "json"
                }).then(function(data) {
                    Log.debug("show data: ", data);
                    if (data.error) {
                        Log.debug("failed loading show data for show " + id);
                        promise.fail()
                    } else {
                        Log.debug("loaded show data for show " + id);
                        self.showData[id] = data;
                        promise.resolve(data)
                    }
                })
            }
            return promise
        },
        showBrowser: function() {
            var $browse =
                self.$root.find(".bcweekly-browse");
            $browse.removeClass("hidden");
            if ($browse.find(".bcweekly-browse-inner").length === 0) Templ.renderElem($browse[0], "home_2016/bcweekly_browse_inner", {
                bcw_seq: self.showSeq
            });
            if (!self.$root.hasClass("bcweekly-view-shows")) self.$root.addClass("bcweekly-view-shows");
            var $items = $browse.find(".bcweekly-browse-item");
            var $currItem = $items.filter("[data-show-id\x3d" + self.currentShow().show_id + "]");
            if (!$currItem.length) $currItem = $items.first();
            $items.removeClass("current");
            $currItem.addClass("current")
        },
        hideBrowser: function() {
            if (self.$root.hasClass("bcweekly-view-shows")) {
                self.$root.removeClass("bcweekly-view-shows");
                setTimeout(function() {
                    self.$root.find(".bcweekly-browse").addClass("hidden")
                }, 200)
            }
        },
        showTracks: function() {
            self.$root.toggleClass("bcweekly-view-tracks")
        },
        navigateToShow: function(sel, autoplay, expand) {
            function renderShow(data) {
                if (autoplay || expand) data.expanded = true;
                if (MediaView.mode === "phone") self.fixupShowDataPhone(data);
                Templ.renderElem($("#bcweekly")[0], "home_2016/bcweekly", {
                    pagedata: $("#pagedata").data("blob"),
                    bcw: data,
                    fan_data: self.fanData,
                    bcweekly_sharing: $("#pagedata").data("blob").bcweekly_sharing,
                    page_identities: Identities.initialData
                });
                self.showIndex = sel;
                self.setupPlaylist();
                self.setupPlayerControls();
                self.setupSharing();
                self.hideSpinner();
                self.hideBrowser();
                var $tracks = $(".bcweekly-tracks");
                Templ.renderElem($tracks[0], "home_2016/bcweekly_tracks_inner", {
                    bcw: data,
                    fan_data: self.fanData || {}
                });
                FanControls.initializeItems(self.$root);
                if (data.tracks.length > 0 && autoplay) self.handlePlayClick()
            }
            if (sel < 0 || sel >=
                self.showSeq.length || sel == self.showIndex) return null;
            Log.debug("bcweekly: navigating to show index: ", sel);
            self.playlist.stop();
            self.$root.find(".bcweekly").removeClass("sharing");
            var seqEntry = self.showSeq[sel];
            var id = seqEntry.id;
            var doLoad = self.loadShowData(id);
            if (doLoad.isResolved()) doLoad.then(function(data) {
                renderShow(data);
                setTimeout(function() {
                    self.$root.find(".bcweekly-browse").addClass("hidden")
                }, 200)
            });
            else {
                var tmpData = {
                    "subtitle": seqEntry.subtitle,
                    "show_image_id": seqEntry.image_id,
                    "show_v2_image_id": seqEntry.v2_image_id,
                    "date": seqEntry.date,
                    "title": "Bandcamp Weekly",
                    "show_id": seqEntry.id,
                    "published_date": seqEntry.published_date,
                    "image_caption": seqEntry.image_caption,
                    "desc": seqEntry.desc,
                    "show_screen_image_id": seqEntry.image_id,
                    "button_color": seqEntry.button_color,
                    "tracks": []
                };
                renderShow(tmpData);
                self.showSpinner();
                doLoad.then(function(data) {
                    renderShow(data);
                    setTimeout(function() {
                        self.$root.find(".bcweekly-browse").addClass("hidden")
                    }, 200);
                    HomeControl.updateCollectionInfo(self.$root)
                })
            }
            return id
        },
        showIdToIndex: function(showId) {
            var seq =
                self.showSeq;
            for (var i = 0; i < seq.length; i++)
                if (showId == seq[i].id) return i;
            return -1
        },
        showSpinner: function() {
            self.$root.find(".bcweekly-bd").addClass("loading")
        },
        hideSpinner: function() {
            self.$root.find(".bcweekly-bd").removeClass("loading")
        },
        trackElem: function(trackIndex) {
            return self.$root.find("li.bcweekly-track").eq(trackIndex)
        },
        expandTrack: function(elem, slow) {
            if (MediaView.mode === "phone") self.expandTrackPhone(elem);
            else self.expandTrackDesktop(elem, slow)
        },
        expandTrackDesktop: function(elem, slow) {
            var $elem =
                $(elem);
            var $siblings = $elem.siblings();
            var oldTrackIndex = self.trackIndex;
            self.trackIndex = $elem.data("index");
            if (oldTrackIndex != self.trackIndex) Log.debug("bcweekly: selected track index " + self.trackIndex);
            if (!$elem.hasClass(expandedItemClass)) {
                self.animateTrackItem($elem, true, slow);
                $siblings.filter("." + expandedItemClass + ", :animated").each(function() {
                    self.animateTrackItem(this, false, slow)
                })
            }
        },
        collapseAllTracks: function() {
            self.$root.find("." + expandedItemClass).each(function() {
                self.animateTrackItem(this,
                    false)
            });
            self.fadeTrackItems(self.$root.find("." + itemClass), true)
        },
        animateTrackItem: function(elem, expand, slow) {
            var $elem = $(elem);
            if (expand) {
                $elem.addClass(expandedItemClass);
                setTimeout(function() {
                    self.scrollTrackList(slow)
                }, .25 * 1E3)
            } else $elem.removeClass(expandedItemClass)
        },
        fadeTrackItems: function(elems, fadeIn, slow) {
            var dur = slow ? trackAnimationDurationSlow : trackAnimationDuration;
            $(elems).children().stop(true, false).animate({
                opacity: fadeIn ? 1 : .5
            }, dur / 2)
        },
        scrollTrackList: function(slow) {
            var $scroller =
                self.$root.find(".bcweekly-tracks");
            var newScrollTop = (self.trackIndex || 0) * self.trackItemHeight() + 1;
            var dur = slow ? trackAnimationDurationSlow : trackAnimationDuration;
            if (newScrollTop != $scroller.scrollTop()) $scroller.stop(true, false).animate({
                scrollTop: newScrollTop
            }, dur)
        },
        trackItemHeight: function() {
            if (self.collapsedTrackItemHeight === null) {
                var maxHeight = 0;
                self.$root.find("." + itemClass + ":not(." + expandedItemClass + ")").each(function() {
                    var thisHeight = $(this)[0].getBoundingClientRect().height;
                    if (thisHeight > maxHeight) maxHeight =
                        thisHeight
                });
                Log.debug("bcweekly: collapsed track item height: " + maxHeight);
                self.collapsedTrackItemHeight = maxHeight
            }
            return self.collapsedTrackItemHeight
        },
        setupPlaylist: function() {
            if (!self.playlist) {
                var opts = {
                    no_trackstate: true,
                    savepos: true
                };
                var pl = new Player.Playlist(new WrapperSoundPlayer, self.STAT_FROM, null, opts);
                self.playlist = pl;
                Player.Playlist.coordinator.onplaying(function() {
                    Log.debug("TPI.play");
                    TitlePlayIndicator.play()
                });
                Player.Playlist.coordinator.onstopped(function() {
                    Log.debug("TPI.stop");
                    TitlePlayIndicator.stop()
                });
                pl.onstatechanged(self._playlist_onstate);
                pl.ontime(self._playlist_ontime);
                pl.onloaded(self._playlist_onloaded)
            }
            var show = self.currentShow();
            if (show) {
                var trackinfo = {
                    file: show.audio_stream,
                    duration: show.audio_duration,
                    id: show.audio_track_id
                };
                self.playlist.load([trackinfo]);
                self._updateTime(0, show.audio_duration)
            }
            self._updateLoaded()
        },
        setupPlayerControls: function() {
            function dragPositionTime(event_page_x) {
                var thumb = self.$root.find(".bcweekly-player .scrubber-thumb");
                var scrubber =
                    self.$root.find(".bcweekly-player .scrubber");
                var travel = scrubber.width() - thumb.width();
                var thumbPos = event_page_x - scrubber.offset().left - self._thumbDragOffset;
                if (thumbPos < 0) thumbPos = 0;
                else if (thumbPos > travel) thumbPos = travel;
                var result = self.playlist.duration() * (thumbPos / travel);
                return result
            }

            function startDrag(event_page_x) {
                self._thumbDragging = true;
                self.playlist.seeking = true;
                self._thumbDragOffset = event_page_x - thumb.offset().left
            }

            function doDrag(event_page_x) {
                var t = dragPositionTime(event_page_x);
                self._drag_pos =
                    t;
                self._updateTime(t, self.playlist.duration())
            }

            function endDrag(event_page_x, cancel) {
                self._thumbDragging = false;
                self.playlist.seeking = true;
                if (!cancel) {
                    var t = dragPositionTime(event_page_x);
                    var trackIndex = self._trackAtTime(t);
                    self._trackbreaks = self._calculateTrackBreaks(trackIndex);
                    if (trackIndex) {
                        var li = self.trackElem(trackIndex);
                        self.expandTrack(li)
                    } else self.collapseAllTracks();
                    self.clearTrackStat();
                    self.playlist.play_track(0, dragPositionTime(event_page_x));
                    self._updateTime(t, self.playlist.duration())
                }
            }

            function touchEventX(ev) {
                return ev.originalEvent.changedTouches[0].pageX
            }

            function addHandlers() {
                scrubber.on("touchmove", touchmove);
                scrubber.on("touchend", touchend);
                scrubber.on("touchcancel", touchcancel)
            }

            function removeHandlers() {
                scrubber.off("touchmove", touchmove);
                scrubber.off("touchend", touchend);
                scrubber.off("touchcancel", touchcancel)
            }

            function touchstart(ev) {
                ev.preventDefault();
                startDrag(touchEventX(ev));
                addHandlers()
            }

            function touchmove(ev) {
                doDrag(touchEventX(ev));
                self._updatePlaypos()
            }

            function touchend(ev) {
                removeHandlers();
                endDrag(touchEventX(ev), false)
            }

            function touchcancel(ev) {
                removeHandlers();
                endDrag(touchEventX(ev), true)
            }
            var thumb = self.$root.find(".scrubber-thumb");
            var scrubber = self.$root.find(".bcweekly-player .scrubber");
            if (self._use_touch()) scrubber.on("touchstart", touchstart);
            else thumb.draggable({
                containment: "parent",
                start: function(ev) {
                    startDrag(ev.pageX)
                },
                drag: function(ev) {
                    doDrag(ev.pageX)
                },
                stop: function(ev) {
                    endDrag(ev.pageX)
                }
            })
        },
        currentShow: function() {
            if (self.showIndex === null) return null;
            var show = self.showSeq[self.showIndex];
            if (show === null) return null;
            return show && self.showData[show.id] || {}
        },
        precacheTrackArt: function() {
            var show = self.currentShow();
            if (!show || show.precached_track_art) return;
            Log.debug("bcweekly: precaching expanded track art");
            $.each(show.tracks, function(i, track) {
                var thumburl = ImageUtils.artURL(track.track_art_id, "art_thumb");
                PopupImage.preload_url(thumburl)
            });
            show.precached_track_art = true
        },
        _trackAtTime: function(time) {
            time = time || 0;
            var show = self.currentShow();
            for (var i = 0; i < show.tracks.length; i++)
                if (show.tracks[i].timecode >
                    time) break;
            Log.debug("track at time " + time + ": " + (i - 1));
            return i === 0 ? null : i - 1
        },
        _currentlyPlayingIndex: function() {
            if (!self.playingOrPaused()) return null;
            var curTime = self.playlist.position();
            return self._trackAtTime(curTime)
        },
        _calculateTrackBreaks: function(starting_at) {
            var i = starting_at;
            if (i === null) i = 0;
            var trackbreaks = [];
            for (var show = self.currentShow(); i < show.tracks.length; i++) {
                var tc = show.tracks[i].timecode;
                if (i == starting_at) tc = 0;
                trackbreaks.push({
                    timecode: tc,
                    index: i
                })
            }
            return trackbreaks
        },
        _use_touch: function() {
            return Browser.platform ==
                "iphone"
        },
        jumpToTrack: function(index) {
            var show = self.currentShow();
            if (!show) return;
            var track = show.tracks[index];
            self._trackbreaks = self._calculateTrackBreaks(index);
            if (track) {
                self.startNewTrackStat(track.track_id);
                self.playShow(index === 0 ? 0 : track.timecode);
                self.precacheTrackArt()
            }
        },
        playShow: function(timecode) {
            if (timecode === null) this.playlist.play();
            else this.playlist.play_track(0, timecode)
        },
        getPlaylist: function() {
            return this.playlist
        },
        startNewTrackStat: function(track_id) {
            var trackinfo = {
                id: track_id
            };
            this._currentTrackStat = new Player.PlayStat(trackinfo, this.STAT_FROM)
        },
        completeCurrentTrackStat: function() {
            if (this._currentTrackStat) {
                this._currentTrackStat.play_progress(100, 100);
                this._currentTrackStat = null
            }
        },
        clearTrackStat: function() {
            this._currentTrackStat = null
        },
        _playlist_onstate: function(arg) {
            if (arg.newstate == "COMPLETED") {
                self.completeCurrentTrackStat();
                self.collapseAllTracks()
            }
            self.$root.find(".bcweekly").removeClass("playing busy");
            if (arg.newstate == "PLAYING" || arg.newstate == "BUFFERING") self.$root.find(".bcweekly").addClass(arg.newstate ==
                "BUFFERING" && Capabilities.hasAnimation() ? "busy" : "playing")
        },
        _playlist_ontime: function(arg) {
            if (self._trackbreaks.length > 0) {
                var nexttrack = self._trackbreaks[0];
                if (nexttrack.timecode < arg.position) {
                    var li = self.trackElem(nexttrack.index);
                    self.completeCurrentTrackStat();
                    var track = self.currentShow().tracks[nexttrack.index];
                    self.startNewTrackStat(track.track_id);
                    self.expandTrack(li);
                    self._trackbreaks.shift()
                }
            }
            if (!self._thumbDragging) {
                self._updateTime(arg.position, arg.duration);
                self._updatePlaypos()
            }
        },
        _playlist_onloaded: function(arg) {
            self._updateLoaded()
        },
        _updateTime: function(position, duration) {
            self.$root.find(".time-output").html(Time.timeStr(position || 0) + " / " + Time.timeStr(duration || 0))
        },
        _updatePlaypos: function() {
            var thumb = self.$root.find(".bcweekly-player .scrubber-thumb");
            var scrubber = self.$root.find(".bcweekly-player .scrubber");
            var fraction_played = (self._thumbDragging ? self._drag_pos : self.playlist.position()) / self.playlist.duration();
            var thumb_left = (scrubber.width() - thumb.width()) * fraction_played;
            self.$root.find(".scrubber-thumb").css("left",
                thumb_left + "px")
        },
        _updateLoaded: function() {
            self.$root.find(".scrubber-buffer").css("width", self.playlist.percent_loaded() + "%")
        },
        playingOrPaused: function() {
            switch (self.playlist.get_state()) {
                case "PLAYING":
                case "PAUSED":
                case "BUFFERING":
                    return true
            }
            return false
        },
        setupSharing: function() {
            if (MediaView.mode != "phone") SocialControls.initFromDOM(self.$root.find(".social-controls"))
        },
        doShare: function() {
            self.$root.find(".bcweekly").addClass("sharing");
            if (MediaView.mode == "phone") this.showSharePhone()
        },
        showEmailPanel: function(show) {
            show =
                show || self.currentShow();
            if (!show || self.$emailPanel) return;
            var $elem = self.$emailPanel = $(Templ.render("home/bcweekly_email_panel", {
                "show": show
            })).appendTo(self.$root.find(".bcweekly-info-inner")).bcdismissable({
                triggerElements: self.$root.find(".social-controls .trigger-email-panel"),
                dismissed: function(ev) {
                    self.hideEmailPanel()
                }
            });
            $elem.find(".close").click(function(ev) {
                self.hideEmailPanel();
                return false
            });
            $elem.find(".email-field").on("click", function(ev) {
                $(this).select()
            });
            $elem.position({
                my: "center bottom",
                at: "center+30 top+5",
                of: "#bcweekly .trigger-email-panel",
                collision: "flipfit"
            }).css({
                display: "none",
                visibility: "visible"
            }).slideDown(100, function() {
                $elem.find(".email-field").select()
            })
        },
        hideEmailPanel: function() {
            if (self.$emailPanel) {
                self.$emailPanel.bcdismissable("destroy").remove();
                self.$emailPanel = null
            }
        },
        toggleEmailPanel: function() {
            if (self.$emailPanel) self.hideEmailPanel();
            else {
                self.showEmailPanel();
                Stats.record({
                    kind: "click",
                    click: "homepage_bcw_email"
                })
            }
        },
        showSharePhone: function(show) {
            show = show ||
                self.currentShow();
            if (!show) return;
            var params = {
                "show": show
            };
            var dlg = NuDialog.showTemplate("home_2016/bcweekly_share_phone", params, {
                title: "Share Show",
                buttons: [],
                close: function() {
                    self.$root.find(".bcweekly").removeClass("sharing");
                    $(this).remove()
                }
            });
            SocialControls.initFromDOM(dlg[0])
        },
        scrollBrowsePanel: function($browse, $currItem) {
            var $scroller = $browse.find(".bcweekly-browse-inner");
            var scrollTop = self.lastBrowsePanelScrollTop || $scroller.scrollTop() || 0;
            var scrollHeight = $scroller.height();
            var itemPos =
                $currItem.position();
            var itemHeight = $currItem.outerHeight();
            var offset = 0;
            if (itemPos.top < scrollTop) offset = itemPos.top - scrollTop;
            else if (itemPos.top + itemHeight > scrollTop + scrollHeight) offset = itemPos.top + itemHeight - (scrollTop + scrollHeight);
            Log.warn(scrollTop, scrollHeight, Math.round(itemPos.top), Math.round(itemHeight), Math.round(offset));
            scrollTop += offset;
            $scroller.scrollTop(scrollTop);
            self.lastBrowsePanelScrollTop = $scroller.scrollTop();
            Log.warn($scroller.scrollTop())
        },
        pushHistory: function(showId, replace) {
            if (!showId ||
                !history.pushState) return;
            var url = Url.toHash(location.href);
            var foreignArgsArr = [];
            var argName = "show";
            $.each(Url.parseQueryArray(url.search), function() {
                if (this.name != argName) foreignArgsArr.push(this)
            });
            url.search = "?" + Url.joinQueryArray(foreignArgsArr.concat({
                name: argName,
                value: showId
            }));
            url = Url.fromHash(url);
            Log.debug("bcweekly: " + (replace ? "replacing" : "pushing") + " history: " + url);
            if (replace) history.replaceState({}, "", url);
            else history.pushState({}, "", url)
        },
        popHistory: function(ev) {
            var showId = parseInt(Url.getQueryParam(location.href,
                "show")) || null;
            var navigated = self.navigateToShow(showId ? self.showIdToIndex(showId) : 0);
            if (navigated) Log.debug("bcweekly: popping history: ", location.href)
        },
        removeShowArg: function() {
            if (!history.replaceState) return;
            var url = Url.toHash(location.href);
            var foreignArgsArr = [];
            var argName = "show";
            $.each(Url.parseQueryArray(url.search), function() {
                if (this.name != argName) foreignArgsArr.push(this)
            });
            if (foreignArgsArr.length > 0) url.search = "?" + Url.joinQueryArray(foreignArgsArr);
            else url.search = "";
            url = Url.fromHash(url);
            history.replaceState({}, "", url)
        },
        fixupShowDataPhone: function(show) {
            var firstTrack = show.tracks[0];
            if (firstTrack) firstTrack.timecode = 0
        },
        expandTrackPhone: function(elem) {
            var $elem = $(elem);
            self.trackIndex = $elem.data("index");
            if (!$elem.hasClass("current")) {
                Log.debug("bcweekly: selected track index " + self.trackIndex);
                var show = self.currentShow();
                var track = show && show.tracks[self.trackIndex];
                if (track) {
                    var showCollectControls = self.fanData && !self.fanData.read_only;
                    var params = {
                        trk: track,
                        fan_data: self.fanData,
                        show_collect_controls: showCollectControls
                    };
                    $("#bcweekly-playing-tab").renderLiquid("home_2016/bcweekly_playing_tab_phone", params);
                    $(".bcweekly-tabs .bcweekly-tab").removeClass("disabled");
                    FanControls.initializeItems($("#bcweekly-playing-tab"));
                    this.highlightTrackPhone(self.trackIndex)
                }
            }
        },
        highlightTrackPhone: function(trackIndex) {
            this.$root.find("." + itemClass).removeClass("current");
            if (trackIndex !== null) this.trackElem(trackIndex).addClass("current")
        },
        initTabs: function() {
            self.$root.on("click", ".bcweekly-tabs",
                function(event) {
                    self.switchTabs($(event.target).closest(".bcweekly-tab"));
                    return false
                })
        },
        switchTabs: function(tab) {
            var $tab = $(tab);
            if (!$tab.length || $tab.hasClass("tab-active") || $tab.hasClass("disabled")) return;
            var $tabs = self.$root.find(".bcweekly-tabs .bcweekly-tab");
            $tabs.removeClass("tab-active");
            $tab.addClass("tab-active");
            $tabs.each(function() {
                var $thisTab = $(this);
                var href = $thisTab.find("a").attr("href");
                var selector = href && Url.toHash(href).hash;
                if (selector)
                    if ($thisTab.is($tab)) $(selector).show();
                    else $(selector).hide()
            });
            Dom.scrollToElement(self.$root, 0, false)
        },
        showPlayingTabPhone: function() {
            if (MediaView.mode != "phone") return;
            var $tab = self.$root.find(".bcweekly-tabs .bcweekly-tab").has("a[href\x3d#bcweekly-playing-tab]");
            $tab.removeClass("disabled");
            self.switchTabs($tab)
        },
        showDetailsTabPhone: function() {
            if (MediaView.mode != "phone") return;
            var $tab = self.$root.find(".bcweekly-tabs .bcweekly-tab").has("a[href\x3d#bcweekly-details-tab]");
            $tab.removeClass("disabled");
            self.switchTabs($tab)
        },
        STAT_FROM: "bcweekly",
        xxx: null
    };
    self.init.apply(self, arguments);
    return self
};
(function() {
    function BCDailyManager(rootNode) {
        var $node = $(rootNode);
        var currentBatch = parseInt(sessionStorage.getItem("bcdaily_current_batch")) || 1;
        for (var i = 1; i <= currentBatch; i++) $node.addClass("batch-" + i);
        $node.on("click", ".stepper-bcdaily", function() {
            $node.addClass("batch-" + ++currentBatch);
            sessionStorage.setItem("bcdaily_current_batch", currentBatch)
        })
    }
    window.BCDailyManager = BCDailyManager
})();
(function(window, $, ko) {
    function RecommendationsVM(init, parent) {
        var self = this;
        var items = [];
        if (init.recommendations && init.recommendations.length > 0) Iter.each(init.recommendations, function(rec) {
            var item = {
                date: Time.relative_day(rec.rec_date),
                why: rec.rec_why,
                bandName: rec.rec_band_name,
                staffFanURL: null,
                bandURL: null
            };
            if (rec.rec_band_url_hash) Templ.runWithContext(function() {
                item.bandURL = Url.addQueryParams(Templ.filters.band_url(rec.rec_band_url_hash), {
                    "from": parent.parent.referrer()
                })
            });
            if (rec.rec_staff_fan_username) Templ.runWithContext(function() {
                item.staffFanURL =
                    Url.addQueryParams(Templ.filters.fan_page_url(rec.rec_staff_fan_username), {
                        "from": parent.parent.referrer()
                    })
            });
            items.push(item)
        });
        self.items = items;
        self.currentIndex = ko.observable(0);
        self.currentItem = ko.computed(function() {
            var currentIndex = self.currentIndex();
            if (!items || items.length === 0 || !items[currentIndex]) return null;
            return items[currentIndex]
        });
        self.pageForward = function() {
            var currentIndex = self.currentIndex();
            if (currentIndex + 1 >= self.items.length) return;
            self.currentIndex(currentIndex + 1)
        };
        self.pageBackward =
            function() {
                var currentIndex = self.currentIndex();
                if (currentIndex - 1 < 0) return;
                self.currentIndex(currentIndex - 1)
            }
    }

    function ItemVM(init, parent) {
        var self = this;
        self.parent = parent;
        self.itemId = init.id;
        self.itemType = init.type;
        self.bandId = init.band_id;
        self.artId = init.art_id;
        self.tralbumKey = self.itemType + self.itemId;
        self.isPreorder = init.is_preorder;
        self.loQuerystr = init.lo_querystr;
        self.featuredTrack = init.featured_track;
        self.urlHints = init.url_hints;
        Templ.runWithContext(function() {
            self.bandURL = Url.addQueryParams(Templ.filters.band_url(self.urlHints), {
                "from": parent.referrer()
            });
            self.itemURL = Url.addQueryParams(Templ.filters.tralbum_url(self.urlHints), {
                "from": parent.referrer()
            });
            self.buyURL = Url.addQueryParams(self.itemURL, {
                "action": "download",
                "from": parent.referrer()
            })
        });
        self.buyNow = function() {
            Stats.record({
                kind: "click",
                click: "discover_buy_now"
            });
            return true
        };
        self.hearMore = function() {
            Stats.record({
                kind: "click",
                click: "discover_hear_more"
            });
            return true
        };
        self.addToWishlist = function() {
            Stats.record({
                kind: "click",
                click: "nav_button_collect"
            });
            return true
        };
        self.bioImage = init.bio_image;
        self.title = init.primary_text;
        self.artist = init.secondary_text;
        self.genre = init.genre_text;
        self.location = init.location_text;
        self.playing = ko.observable(false);
        var packageArts = [];
        var pkgKey;
        for (var i = 1; i < 5; i++) {
            pkgKey = "package_art" + i;
            if (init[pkgKey]) packageArts.push(init[pkgKey])
        }
        self.packageArts = ko.observableArray(packageArts);
        self.recommendations = new RecommendationsVM(init, self);
        self.playMe = function(item, ev) {
            if (ev.which !== 1) return;
            parent.player.playpauseItem(self)
        }
    }

    function PagingItemVM(details,
        parent) {
        var self = this;
        self.name = ko.observable(details.name);
        self.value = ko.observable(details.value);
        self.disabled = ko.observable(details.value === null);
        self.isFiller = ko.observable(details.filler);
        self.selected = ko.computed(function() {
            return parent.currentPage() === self.value()
        });
        var highlight = details.forceHighlight && details.forceHighlight === details.name || !details.forceHighlight && parent.highlight && parent.currentPage() === details.value;
        self.highlight = ko.observable(highlight);
        self.immediate = ko.observable(highlight);
        if (highlight) setTimeout(function() {
            self.immediate(false);
            self.highlight(false)
        }, 0);
        self.selectMe = function() {
            parent.selectItem(self)
        }
    }

    function PagingVM(_numPages, parent) {
        var self = this;
        self.numPages = ko.observable(_numPages);
        self.currentPage = ko.computed({
            read: function() {
                return parent.pageNumber() + 1
            },
            write: function(value) {
                parent.pageNumber(value - 1)
            }
        });
        self.selectItem = function(item) {
            var value = item.value();
            var name = item.name();
            var forceHighlight = name === "next" || name === "previous" ? name : null;
            if (value && 0 < value <=
                self.numPages()) parent.jumpToPage(value - 1, null, forceHighlight)
        };
        self.pagingItems = ko.observableArray();
        self.highlight = false;
        self.update = function(forceHighlight) {
            var currentPage = self.currentPage();
            var numPages = self.numPages();
            var items = [];
            if (numPages < 2) return items;
            var lowerPage = 2;
            var upperPage = numPages - 1;
            var lowerEllipses = false;
            var upperEllipses = false;
            if (numPages > 9) {
                if (currentPage > 6) lowerEllipses = true;
                if (currentPage < numPages - 5) upperEllipses = true;
                if (lowerEllipses && upperEllipses) {
                    lowerPage = currentPage -
                        2;
                    upperPage = currentPage + 2
                } else if (lowerEllipses) lowerPage = numPages - 6;
                else if (upperEllipses) upperPage = 7
            }
            items.push(new PagingItemVM({
                name: "previous",
                value: currentPage > 1 ? currentPage - 1 : null,
                forceHighlight: forceHighlight
            }, self));
            items.push(new PagingItemVM({
                name: "1",
                value: 1,
                forceHighlight: forceHighlight
            }, self));
            if (lowerEllipses) items.push(new PagingItemVM({
                name: "...",
                filler: true,
                forceHighlight: forceHighlight
            }, self));
            for (var n = lowerPage; n <= upperPage; n++) items.push(new PagingItemVM({
                    name: n,
                    value: n,
                    forceHighlight: forceHighlight
                },
                self));
            if (upperEllipses) items.push(new PagingItemVM({
                name: "...",
                filler: true,
                forceHighlight: forceHighlight
            }, self));
            if (numPages > 1) items.push(new PagingItemVM({
                name: numPages,
                value: numPages,
                forceHighlight: forceHighlight
            }, self));
            items.push(new PagingItemVM({
                name: "next",
                value: currentPage < numPages ? currentPage + 1 : null,
                forceHighlight: forceHighlight
            }, self));
            self.pagingItems(items)
        };
        self.updateNext = function() {
            self.update("next")
        };
        self.updatePrev = function() {
            self.update("previous")
        };
        self.update();
        self.highlight =
            true;
        self.visible = ko.observable(true)
    }

    function GenresVM(initialItems, selectedGenre, parent) {
        var self = this;
        self.level = ko.observable(0);
        self.pushHistory = parent.history.pushHistory;
        var selectedPill = selectedGenre && Iter.find(initialItems, function(item) {
            return item.value === selectedGenre
        }) || initialItems[0];
        self.pills = ko.observableArray(initialItems);
        self.selectedPill = ko.observable(selectedPill);
        self.selectPill = function(pill) {
            if (self.pillIsSelected(pill)) return false;
            self.selectedPill(pill);
            return true
        };
        self.pillIsSelected =
            function(pill) {
                return self.selectedPill() === pill
            };
        self.UISelectPill = function(pill) {
            var changed = self.selectPill(pill);
            if (changed) self.pushHistory()
        };
        self.currentGenreValue = ko.computed(function() {
            var currentGenre = self.selectedPill();
            if (!currentGenre) return null;
            return currentGenre.value
        });
        self.backgroundColor = ko.computed(function() {
            var color = DiscoverColors.get(self.currentGenreValue(), self.level());
            if (!color) return;
            return "hsla(" + color.hue + ", " + color.sat + "%, " + color.light + "%, " + color.alpha + ")"
        });
        self.backgroundFadeRight =
            ko.computed(function() {
                var color = DiscoverColors.get(self.currentGenreValue(), self.level());
                if (!color) return;
                return "linear-gradient(to right, hsla(" + color.hue + ", " + color.sat + "%, " + color.light + "%, 0), hsla(" + color.hue + ", " + color.sat + "%, " + color.light + "%, 1) 65%)"
            });
        self.backgroundFadeLeft = ko.computed(function() {
            var color = DiscoverColors.get(self.currentGenreValue(), self.level());
            if (!color) return;
            return "linear-gradient(to left, hsla(" + color.hue + ", " + color.sat + "%, " + color.light + "%, 0), hsla(" + color.hue +
                ", " + color.sat + "%, " + color.light + "%, 1) 65%)"
        });
        self.setByValue = function(val) {
            if (val === null || val === undefined) self.selectedPill(self.pills()[0]);
            else {
                var pill = Iter.find(self.pills(), function(p) {
                    return p.value === val
                });
                if (!pill) pill = self.pills()[0];
                self.selectedPill(pill)
            }
        };
        self.$container = parent.$root.find(".discover-genres.client-rendered");
        self.scrollLeftVisible = ko.observable(true);
        self.scrollRightVisible = ko.observable(true)
    }

    function SubgenresVM(allSubgenres, selectedGenre, selectedSubgenre, parent) {
        var self =
            this;
        self.level = ko.observable(1);
        self.pushHistory = parent.history.pushHistory;
        self.selectedPill = ko.observable(null);
        var pills = selectedGenre && allSubgenres[selectedGenre] || [];
        var selectedPill = selectedSubgenre && Iter.find(pills, function(item) {
            return item.value === selectedSubgenre
        }) || pills[0];
        self.pills = ko.observableArray(pills);
        self.selectedPill = ko.observable(selectedPill);
        self.immediatePillTransition = ko.observable(false);
        self.visible = ko.computed({
            read: function() {
                return parent.genres.selectedPill().value !==
                    "all" && parent.slices.selectedPill().value !== "rec" && self.pills().length > 0
            },
            deferEvaluation: true
        });
        self.selectPill = function(pill) {
            if (self.pillIsSelected(pill)) return false;
            self.selectedPill(pill);
            return true
        };
        self.pillIsSelected = function(pill) {
            return self.selectedPill() === pill
        };
        self.UISelectPill = function(pill) {
            var changed = self.selectPill(pill);
            if (changed) self.pushHistory()
        };
        self.backgroundColor = ko.computed(function() {
            var color = DiscoverColors.get(parent.genres.currentGenreValue(), self.level());
            if (!color) return "";
            return "hsla(" + color.hue + ", " + color.sat + "%, " + color.light + "%, " + color.alpha + ")"
        });
        self.backgroundFadeRight = ko.computed(function() {
            var color = DiscoverColors.get(parent.genres.currentGenreValue(), self.level());
            if (!color) return "";
            return "linear-gradient(to right, hsla(" + color.hue + ", " + color.sat + "%, " + color.light + "%, 0), hsla(" + color.hue + ", " + color.sat + "%, " + color.light + "%, 1) 65%)"
        });
        self.backgroundFadeLeft = ko.computed(function() {
            var color = DiscoverColors.get(parent.genres.currentGenreValue(), self.level());
            if (!color) return "";
            return "linear-gradient(to left, hsla(" + color.hue + ", " + color.sat + "%, " + color.light + "%, 0), hsla(" + color.hue + ", " + color.sat + "%, " + color.light + "%, 1) 65%)"
        });
        self.setByValue = function(val) {
            if (self.pills().length === 0) return;
            if (val === null || val === undefined) self.selectedPill(self.pills()[0]);
            else {
                var pill = Iter.find(self.pills(), function(p) {
                    return p.value === val
                });
                if (!pill) pill = self.pills()[0];
                self.selectedPill(pill)
            }
        };
        self.$container = parent.$root.find(".discover-subgenres.client-rendered");
        self.scrollLeftVisible = ko.observable(true);
        self.scrollRightVisible = ko.observable(true)
    }

    function SlicesVM(initialItems, selectedSlice, parent) {
        var self = this;
        self.level = ko.observable(2);
        self.pushHistory = parent.history.pushHistory;
        var selectedPill = selectedSlice && Iter.find(initialItems, function(item) {
            return item.value === selectedSlice
        }) || initialItems[0];
        self.pills = ko.observableArray(initialItems);
        self.selectedPill = ko.observable(selectedPill);
        self.selectPill = function(pill) {
            if (self.pillIsSelected(pill)) return false;
            self.selectedPill(pill);
            return true
        };
        self.pillIsSelected = function(pill) {
            return self.selectedPill() === pill
        };
        self.UISelectPill = function(pill) {
            var changed = self.selectPill(pill);
            if (changed) self.pushHistory()
        };
        self.selectedPill.subscribe(function(pill) {
            if (pill.value === "rec") {
                parent.locations.selected(false);
                parent.formats.selected(false);
                parent.dates.selected(false);
                if (parent.subgenres.pills().length > 0) parent.subgenres.selectPill(parent.subgenres.pills()[0])
            } else parent.formats.selected(true)
        });
        self.backgroundColor =
            ko.computed(function() {
                var color = DiscoverColors.get(parent.genres.currentGenreValue(), self.level());
                if (!color) return "";
                return "hsla(" + color.hue + ", " + color.sat + "%, " + color.light + "%, " + color.alpha + ")"
            });
        self.setByValue = function(val) {
            if (val === null || val === undefined) self.selectedPill(self.pills()[0]);
            else {
                var pill = Iter.find(self.pills(), function(p) {
                    return p.value === val
                });
                if (!pill) pill = self.pills()[0];
                self.selectedPill(pill)
            }
        }
    }

    function LocationsVM(locations, selectedLocation, parent) {
        var self = this;
        self.level =
            ko.observable(2);
        self.pushHistory = parent.history.pushHistory;
        var selectedPill = null;
        if (selectedLocation !== null && selectedLocation !== undefined) selectedPill = Iter.find(locations, function(item) {
            return parseInt(item.value) === selectedLocation
        }) || locations[0];
        self.selectedPill = ko.observable(selectedPill);
        var selected = selectedPill && parseInt(selectedPill.value) !== 0;
        self.selected = ko.observable(selected);
        self.pills = ko.observableArray(locations);
        self.selectPill = function(pill) {
            if (self.pillIsSelected(pill)) return false;
            self.selectedPill(pill);
            return true
        };
        self.pillIsSelected = function(pill) {
            return self.selectedPill() === pill
        };
        self.UISelectPill = function(pill) {
            var changed = self.selectPill(pill);
            if (changed) self.pushHistory()
        };
        self.selectorVisible = ko.computed(function() {
            return !(parent.slices.selectedPill() && parent.slices.selectedPill().value === "rec")
        });
        self.toggleSelected = function() {
            var _selected = self.selected();
            if (!_selected && parent.slices.selectedPill().value === "rec") return;
            self.selected(!_selected)
        };
        self.selected.subscribe(function(val) {
            var pills =
                self.pills();
            if (val) {
                Stats.record({
                    kind: "click",
                    click: "discover_location"
                });
                if (!self.pillIsSelected(pills[0])) {
                    self.selectedPill(pills[0]);
                    self.pushHistory()
                }
            } else if (!self.pillIsSelected(pills[0])) {
                self.selectedPill(pills[0]);
                self.pushHistory()
            }
            self.pushHistory()
        });
        self.selectedPill.subscribe(function(newPill) {
            if (newPill && parseInt(newPill.value > 0)) {
                self.selected(true);
                parent.dates.selected(false)
            }
        });
        self.backgroundColor = ko.computed(function() {
            var color = DiscoverColors.get(parent.genres.currentGenreValue(),
                self.level());
            if (!color) return "";
            return "hsla(" + color.hue + ", " + color.sat + "%, " + color.light + "%, " + color.alpha + ")"
        });
        self.backgroundFadeRight = ko.computed(function() {
            var color = DiscoverColors.get(parent.genres.currentGenreValue(), self.level());
            if (!color) return "";
            return "linear-gradient(to right, hsla(" + color.hue + ", " + color.sat + "%, " + color.light + "%, 0), hsla(" + color.hue + ", " + color.sat + "%, " + color.light + "%, 1) 65%)"
        });
        self.backgroundFadeLeft = ko.computed(function() {
            var color = DiscoverColors.get(parent.genres.currentGenreValue(),
                self.level());
            if (!color) return "";
            return "linear-gradient(to left, hsla(" + color.hue + ", " + color.sat + "%, " + color.light + "%, 0), hsla(" + color.hue + ", " + color.sat + "%, " + color.light + "%, 1) 65%)"
        });
        self.setByValue = function(val) {
            if (val === null || val === undefined) self.selectedPill(self.pills()[0]);
            else {
                var pill = Iter.find(self.pills(), function(p) {
                    return p.value === parseInt(val)
                });
                if (!pill) pill = self.pills()[0];
                self.selectedPill(pill)
            }
        };
        self.$container = parent.$root.find(".discover-locations.client-rendered");
        self.scrollLeftVisible =
            ko.observable(true);
        self.scrollRightVisible = ko.observable(true)
    }

    function ArtistRecsVM(initialItems, selectedRec, parent) {
        var self = this;
        self.level = ko.observable(2);
        self.pushHistory = parent.history.pushHistory;
        var selectedPill = selectedRec && Iter.find(initialItems, function(item) {
            return item.value === selectedRec
        }) || initialItems[0];
        self.pills = ko.observableArray(initialItems);
        self.selectedPill = ko.observable(selectedPill);
        self.selectPill = function(pill) {
            if (self.pillIsSelected(pill)) return false;
            self.selectedPill(pill);
            return true
        };
        self.pillIsSelected = function(pill) {
            return self.selectedPill() === pill
        };
        self.UISelectPill = function(pill) {
            var changed = self.selectPill(pill);
            if (changed) self.pushHistory()
        };
        self.visible = ko.computed(function() {
            var currentSlice = parent.slices.selectedPill();
            if (!currentSlice) return false;
            return currentSlice.value && currentSlice.value === "rec"
        });
        self.backgroundColor = ko.computed(function() {
            var color = DiscoverColors.get(parent.genres.currentGenreValue(), self.level());
            if (!color) return "";
            return "hsla(" +
                color.hue + ", " + color.sat + "%, " + color.light + "%, " + color.alpha + ")"
        });
        self.setByValue = function(val) {
            if (val === null || val === undefined) self.selectedPill(self.pills()[0]);
            else {
                var pill = Iter.find(self.pills(), function(p) {
                    return p.value === val
                });
                if (!pill) pill = self.pills()[0];
                self.selectedPill(pill)
            }
        }
    }

    function FormatsVM(initialItems, selectedFormat, parent) {
        var self = this;
        self.level = ko.observable(3);
        self.pushHistory = parent.history.pushHistory;
        var selectedPill = selectedFormat && Iter.find(initialItems, function(item) {
            return item.value ===
                selectedFormat
        }) || initialItems[0];
        self.pills = ko.observableArray(initialItems);
        self.selectedPill = ko.observable(selectedPill);
        self.selectPill = function(pill) {
            if (self.pillIsSelected(pill)) return false;
            self.selectedPill(pill);
            return true
        };
        self.pillIsSelected = function(pill) {
            return self.selectedPill() === pill
        };
        self.UISelectPill = function(pill) {
            self.statClick(pill);
            var changed = self.selectPill(pill);
            if (changed) self.pushHistory()
        };
        self.selectorVisible = ko.computed(function() {
            return !(parent.slices.selectedPill() &&
                parent.slices.selectedPill().value === "rec")
        });
        self.selected = ko.observable(selectedPill);
        self.toggleSelected = function() {
            if (!self.selected() && parent.slices.selectedPill().value === "rec") return;
            self.selected(!self.selected())
        };
        self.selected.subscribe(function(val) {
            var pills = self.pills();
            if (!val && pills.length > 0 && self.selectedPill() !== pills[0]) {
                self.selectedPill(pills[0]);
                self.pushHistory()
            }
        });
        self.selectedPill.subscribe(function(newPill) {
            if (newPill.value !== "all") self.selected(true)
        });
        self.backgroundColor =
            ko.computed(function() {
                var color = DiscoverColors.get(parent.genres.currentGenreValue(), self.level());
                if (!color) return "";
                return "hsla(" + color.hue + ", " + color.sat + "%, " + color.light + "%, " + color.alpha + ")"
            });
        self.setByValue = function(val) {
            if (val === null || val === undefined) self.selectedPill(self.pills()[0]);
            else {
                var pill = Iter.find(self.pills(), function(p) {
                    return p.value === val
                });
                if (!pill) pill = self.pills()[0];
                self.selectedPill(pill)
            }
        };
        self.statClick = function(pill) {
            var formatClicks = {
                "all": "discover_format_all",
                "digital": "discover_format_digital",
                "vinyl": "discover_format_vinyl",
                "cd": "discover_format_cd",
                "cassette": "discover_format_cassette"
            };
            if (pill) {
                var theClick = formatClicks[pill.value];
                if (theClick) Stats.record({
                    kind: "click",
                    click: theClick
                })
            }
        }
    }

    function DatesVM(initialItems, selectedDate, parent) {
        var self = this;
        self.level = ko.observable(4);
        self.pushHistory = parent.history.pushHistory;
        var selectedPill$$0 = selectedDate !== null && selectedDate !== undefined && Iter.find(initialItems, function(item) {
            return item.value === selectedDate
        }) || initialItems[1];
        self.pills =
            ko.observableArray(initialItems);
        self.selectedPill = ko.observable(selectedPill$$0);
        self.selectPill = function(pill) {
            if (self.pillIsSelected(pill)) return false;
            self.selectedPill(pill);
            return true
        };
        self.pillIsSelected = function(pill) {
            return self.selectedPill() === pill
        };
        self.UISelectPill = function(pill) {
            var changed = self.selectPill(pill);
            if (changed) self.pushHistory()
        };
        self.selectorVisible = ko.computed(function() {
            var genreIsSet = parent.genres.currentGenreValue() !== "all";
            var subgenreIsSet = parent.subgenres.selectedPill() &&
                parent.subgenres.selectedPill() !== parent.subgenres.pills()[0];
            var locationIsSet = parent.locations.selectedPill() && parseInt(parent.locations.selectedPill().value) !== 0;
            var sliceIsRec = parent.slices.selectedPill() && parent.slices.selectedPill().value === "rec";
            return !subgenreIsSet && !sliceIsRec && !(genreIsSet && locationIsSet)
        }).extend({
            rateLimit: 100
        });
        self.selected = ko.observable(selectedPill$$0 && selectedPill$$0.value !== null && selectedPill$$0.value !== undefined && selectedPill$$0.value !== 0);
        self.toggleSelected = function() {
            if (!self.selected() &&
                parent.slices.selectedPill().value === "rec" || parent.subgenres.selectedPill() && parent.subgenres.selectedPill() !== parent.subgenres.pills()[0]) return;
            self.selected(!self.selected())
        };
        self.selected.subscribe(function(val) {
            var pills = self.pills();
            var selectedPill = self.selectedPill();
            if (val && pills.length > 0) {
                if (!self.pillIsSelected(pills[1])) {
                    self.selectedPill(pills[1]);
                    self.pushHistory()
                }
                Stats.record({
                    kind: "click",
                    click: "discover_date"
                })
            } else if (!val && pills.length > 0)
                if (self.selectorVisible() && selectedPill !=
                    pills[1]) {
                    if (!self.pillIsSelected(pills[1])) self.selectedPill(pills[1]);
                    self.selectedPill(pills[1])
                } else if (!self.selectorVisible()) self.selectedPill(null)
        });
        self.selectedPill.subscribe(function(newPill) {
            if (newPill && newPill.value) self.selected(true)
        });
        self.backgroundColor = ko.computed(function() {
            var color = DiscoverColors.get(parent.genres.currentGenreValue(), self.level());
            if (!color) return "";
            return "hsla(" + color.hue + ", " + color.sat + "%, " + color.light + "%, " + color.alpha + ")"
        });
        self.selectedDateJSON = ko.computed(function() {
            var selectedPill =
                self.selectedPill();
            if (!selectedPill) return null;
            return selectedPill.data
        });
        self.setByValue = function(val) {
            if (val === null || val === undefined) self.selectedPill(self.pills()[1]);
            else {
                var pill = Iter.find(self.pills(), function(p) {
                    return p.value === parseInt(val)
                });
                if (!pill) pill = self.pills()[1];
                self.selectedPill(pill)
            }
        }
    }

    function PlayerVM(parent) {
        var self = this;
        self.stateChangeCallback = function(arg) {
            if (!arg) return;
            if (arg.newstate === "PLAYING" || arg.newstate == "BUFFERING") self.currentItem().playing(true);
            else if (arg.newstate ===
                "IDLE" || arg.newstate === "PAUSED") self.currentItem().playing(false)
        };
        self.playlist = new Player.Playlist(new WrapperSoundPlayer, "discover", null, {
            no_trackstate: true
        });
        self.playlist.onstatechanged(self.stateChangeCallback);
        self.inlinePlayer = new Player.InlinePlayerView(self.playlist, parent.$root.find(".inline_player")[0]);
        self.currentItem = ko.observable({});
        var currentPageItems = parent.currentPage().items();
        if (currentPageItems && currentPageItems.length > 0) {
            self.currentItem(currentPageItems[0]);
            self.playlist.load([self.currentItem().featuredTrack])
        }
        self.playpauseItem =
            function(item$$0) {
                if (self.currentItem() === item$$0) {
                    item$$0.playing(!item$$0.playing());
                    self.playlist.playpause()
                } else {
                    Iter.each(parent.currentPage().items(), function(item) {
                        item.playing(false)
                    });
                    item$$0.playing(true);
                    self.currentItem(item$$0);
                    self.playlist.load([item$$0.featuredTrack]);
                    self.playlist.play_track(0, 0)
                }
            };
        self.pause = function() {
            if (self.currentItem()) {
                self.currentItem().playing(false);
                self.playlist.pause()
            }
        };
        self.hasCurrentItem = ko.computed(function() {
            return self.currentItem() && !$.isEmptyObject(self.currentItem())
        });
        self.currentItem.subscribe(function() {
            setTimeout(function() {
                parent.$root.find(".discover-detail-inner .collect-item").removeData("collect-item");
                parent.$root.find(".discover-detail-inner .collect-item").removeData("collect-band");
                parent.$root.find(".discover-detail-inner .collect-item").removeData("lo-querystr");
                parent.$root.find(".discover-detail-inner .collect-item").removeData("lo-from");
                FanControls.initializeItems(parent.$root.find(".discover-detail-inner")[0])
            }, 0)
        })
    }

    function PageVM(role, items,
        pageNumber) {
        var self = this;
        self.role = ko.observable(role);
        self.items = ko.observableArray(items);
        self.immediateTransition = ko.observable(false);
        self.pageNumber = ko.observable(pageNumber);
        self.loading = ko.observable(false);
        self.loading.subscribe(function(val) {
            Log.debug("Page with role " + self.role() + " loading: " + val)
        });
        self.fadingIn = ko.observable(false);
        self.fadingOut = ko.observable(false);
        self.loading.subscribe(function(val) {
            self.fadingIn(!val);
            self.fadingOut(val)
        })
    }

    function HistoryVM(categories, parent) {
        var self =
            this;
        var cleanParams = function(params) {
            var cleaned = {};
            $.each(params, function(k, v) {
                if (v !== null && v !== undefined) cleaned[k] = v.toString()
            });
            return cleaned
        };
        self.pushHistory = function() {
            var _params = $.extend({}, parent.currentParams());
            var _categories = categories.concat(["p"]);
            var params = cleanParams(_params);
            var url = Url.toHash(window.location.href);
            var originalUrlParams = Url.parseQuery(url.search);
            var foreignArgs = {};
            $.each(originalUrlParams, function(k, v) {
                if (_categories.indexOf(k) < 0) foreignArgs[k] = v
            });
            var combinedHash = {};
            $.extend(combinedHash, foreignArgs, params);
            var isNew = false;
            $.each(_categories, function(k) {
                var cat = _categories[k];
                if (combinedHash[cat] !== originalUrlParams[cat]) isNew = true
            });
            if (isNew) {
                url.search = "?" + Url.joinQuery(combinedHash);
                var newUrl = Url.fromHash(url);
                Log.debug("discover: pushing history: " + newUrl);
                if (window.history) window.history.pushState({}, "", newUrl)
            }
        };
        self.popHistory = function(ev) {
            var urlArgs = Url.parseQuery(window.location.search);
            Log.debug("discover: popping history: " + ko.toJSON(urlArgs));
            if (!$.isEmptyObject(urlArgs)) parent.navigateFromArgs(urlArgs, true);
            else parent.navigateFromArgs(urlArgs)
        }
    }

    function DiscoverVM(root, init) {
        function updateLevels() {
            var numVisible = 0;
            if (self.subgenres.visible()) numVisible++;
            self.slices.level(numVisible + 1);
            self.locations.level(numVisible + 2);
            if (self.locations.selected()) numVisible++;
            self.formats.level(numVisible + 2);
            if (self.formats.selected()) numVisible++;
            self.dates.level(numVisible + 2)
        }

        function doScrollers(category) {
            function setup() {
                if (category.$container.find(".selected")[0]) {
                    var containerWidth =
                        category.$container.width();
                    var scrollWidth = category.$container[0].scrollWidth;
                    var selectedOffset = category.$container.find(".selected").offset().left;
                    category.$container.scrollLeft(selectedOffset - containerWidth);
                    category.scrollLeftVisible(category.$container.scrollLeft() > 0);
                    category.scrollRightVisible(category.$container.scrollLeft() + containerWidth < scrollWidth)
                }
            }
            var scrollRatio = .5;
            category.scrollRight = function() {
                var containerWidth = category.$container.width();
                var scrollWidth = category.$container[0].scrollWidth;
                var currentScrollLeft = category.$container.scrollLeft();
                var newScrollLeft = currentScrollLeft + scrollRatio * containerWidth;
                category.$container.animate({
                    "scrollLeft": newScrollLeft
                }, 200);
                category.scrollLeftVisible(newScrollLeft > 0);
                category.scrollRightVisible(newScrollLeft + containerWidth < scrollWidth)
            };
            category.scrollLeft = function() {
                var containerWidth = category.$container.width();
                var scrollWidth = category.$container[0].scrollWidth;
                var currentScrollLeft = category.$container.scrollLeft();
                var newScrollLeft = currentScrollLeft -
                    scrollRatio * containerWidth;
                category.$container.animate({
                    "scrollLeft": newScrollLeft
                }, 200);
                category.scrollLeftVisible(newScrollLeft > 0);
                category.scrollRightVisible(newScrollLeft + containerWidth < scrollWidth)
            };
            setup();
            if (category.selected) category.selected.subscribe(function(val) {
                if (val) setup()
            });
            if (category instanceof SubgenresVM) {
                category.visible.subscribe(function() {
                    setup()
                });
                self.genres.selectedPill.subscribe(function() {
                    setup()
                })
            }
            category.$container.on("scroll", function() {
                var scrollLeft = category.$container.scrollLeft();
                var containerWidth = category.$container.width();
                var scrollWidth = category.$container[0].scrollWidth;
                category.scrollLeftVisible(scrollLeft > 0);
                category.scrollRightVisible(scrollLeft + containerWidth < scrollWidth)
            })
        }
        var self = this;
        self.$root = $(root);
        self.history = new HistoryVM(init.categories, self);
        $(window).on("popstate", self.history.popHistory);
        self.genres = new GenresVM(init.options.g, init.args.g, self);
        self.slices = new SlicesVM(init.options.s, init.args.s, self);
        self.subgenres = new SubgenresVM(init.options.t,
            init.args.g, init.args.t, self);
        self.locations = new LocationsVM(init.options.l, init.args.gn, self);
        self.formats = new FormatsVM(init.options.f, init.args.f, self);
        self.artistRecs = new ArtistRecsVM(init.options.r, init.args.r, self);
        self.dates = new DatesVM(init.options.w, init.args.w, self);
        updateLevels();
        self.subgenres.visible.subscribe(function(val) {
            updateLevels()
        });
        self.locations.selected.subscribe(function(val) {
            updateLevels()
        });
        self.formats.selected.subscribe(function(val) {
            updateLevels()
        });
        self.genres.selectedPill.subscribe(function(newGenre) {
            var subgenres =
                init.options.t[newGenre.value] || [];
            self.subgenres.pills(subgenres);
            if (subgenres.length > 0) {
                self.subgenres.immediatePillTransition(true);
                self.subgenres.selectedPill(subgenres[0]);
                setTimeout(function() {
                    self.subgenres.immediatePillTransition(false)
                }, 0)
            } else self.subgenres.selectedPill(null)
        });
        self.subgenres.selectedPill.subscribe(function(pill) {
            if (pill && pill !== self.subgenres.pills()[0]) self.dates.selected(false)
        });
        self.referrer = ko.computed(function() {
            return "discover-" + self.slices.selectedPill().value
        });
        self.pageNumber = ko.observable(init.args.p);
        self.serverPageNumber = ko.computed(function() {
            return Math.floor(self.pageNumber() / 6)
        });
        self.paging = new PagingVM(Math.min(Math.ceil(init.initial.total_count / 8), 200), self);
        self.pages = [new PageVM("prev", [], -1), new PageVM("current", [], 0), new PageVM("next", [], 1)];
        self.prevPage = ko.computed(function() {
            return Iter.find(self.pages, function(p) {
                return p.role() === "prev"
            })
        });
        self.currentPage = ko.computed(function() {
            return Iter.find(self.pages, function(p) {
                return p.role() ===
                    "current"
            })
        });
        self.nextPage = ko.computed(function() {
            return Iter.find(self.pages, function(p) {
                return p.role() === "next"
            })
        });
        self.pageForward = function(skipHistory, forceHighlight) {
            self.pageNumber(self.pageNumber() + 1);
            var params = $.extend({}, self.currentParams());
            var pageNumber = self.pageNumber();
            var prev = self.prevPage();
            var current = self.currentPage();
            var next = self.nextPage();
            self.fetchItems(params).then(function(data) {
                next.items(data.items);
                self.paging.numPages(data.numPages);
                self.paging.update(forceHighlight);
                prev.immediateTransition(false);
                current.immediateTransition(false);
                next.immediateTransition(false);
                next.role("current");
                current.role("prev");
                prev.role("next");
                next = prev;
                next.immediateTransition(true);
                next.pageNumber(pageNumber + 1);
                self.cacheTheFuture();
                if (!skipHistory) self.history.pushHistory()
            }, function() {})
        };
        self.pageBackward = function(skipHistory, forceHighlight) {
            if (self.pageNumber() === 0) return;
            self.pageNumber(self.pageNumber() - 1);
            var params = $.extend({}, self.currentParams());
            var pageNumber = self.pageNumber();
            var prev = self.prevPage();
            var current = self.currentPage();
            var next = self.nextPage();
            self.fetchItems(params).then(function(data) {
                    prev.items(data.items);
                    self.paging.numPages(data.numPages);
                    self.paging.update(forceHighlight);
                    prev.immediateTransition(false);
                    current.immediateTransition(false);
                    next.immediateTransition(false);
                    prev.role("current");
                    current.role("next");
                    next.role("prev");
                    prev = next;
                    prev.immediateTransition(true);
                    prev.pageNumber(pageNumber - 1);
                    self.cacheThePast();
                    if (!skipHistory) self.history.pushHistory()
                },
                function() {})
        };
        self.jumpToPage = function(newPageNumber, skipHistory, forceHighlight) {
            var currentPageNumber = self.pageNumber();
            if (newPageNumber === currentPageNumber + 1) return self.pageForward(null, forceHighlight);
            else if (newPageNumber === currentPageNumber - 1) return self.pageBackward(null, forceHighlight);
            self.pageNumber(newPageNumber);
            var params = $.extend({}, self.currentParams());
            self.currentPage().loading(true);
            self.paging.update(forceHighlight);
            self.fetchItems(params, true).then(function(data) {
                self.currentPage().items(data.items);
                self.currentPage().loading(false);
                self.cacheTheFuture();
                self.cacheThePast();
                if (!skipHistory) self.history.pushHistory()
            }, function() {})
        };
        self.cacheTheFuture = function() {
            var params = $.extend({}, self.currentParams());
            params.p = params.p + 2;
            var paramsKey = ko.toJSON(params);
            if (!self.cache[paramsKey]) self.fetchItems(params)
        };
        self.cacheThePast = function() {
            var params = $.extend({}, self.currentParams());
            params.p = params.p - 2;
            if (params.p < 0) return;
            var paramsKey = ko.toJSON(params);
            if (!self.cache[paramsKey]) self.fetchItems(params)
        };
        self.currentParams = ko.computed(function() {
            var genre = self.genres.selectedPill().value;
            var slice = self.slices.selectedPill().value;
            var page = self.pageNumber();
            var params = {
                "g": genre,
                "s": slice,
                "p": page
            };
            var location = self.locations.selectedPill();
            if (location && location.value !== null) params.gn = location.value;
            var format = self.formats.selectedPill();
            if (format && format.value !== null) params.f = format.value;
            var currentSubgenre = self.subgenres.selectedPill();
            if (currentSubgenre && currentSubgenre.value && !/all-/.test(currentSubgenre.value)) params.t =
                currentSubgenre.value;
            var date = self.dates.selectedPill();
            if (date && date.value !== null && !params.t) params.w = date.value;
            var artistRec = self.artistRecs.selectedPill();
            if (slice === "rec" && artistRec.value) params.r = artistRec.value;
            return params
        });
        self.currentParamsKey = ko.computed(function() {
            return ko.toJSON(self.currentParams())
        });
        self.cache = {};
        self.numPages = {};
        self.instantiateItems = function(items) {
            var _items = [];
            Iter.each(items, function(item) {
                _items.push(new ItemVM(item, self))
            });
            return _items
        };
        self.handleServerItems =
            function(params, items, totalCount, serverPageNumber) {
                var itemsByPage = {};
                var pageNumber$$0;
                var paramsKey;
                for (var i = 0; i < items.length; i++) {
                    pageNumber$$0 = Math.floor(i / 8) + serverPageNumber * 6;
                    if (!itemsByPage[pageNumber$$0]) itemsByPage[pageNumber$$0] = [];
                    itemsByPage[pageNumber$$0].push(new ItemVM(items[i], self))
                }
                $.each(itemsByPage, function(pageNumber) {
                    var _items = itemsByPage[pageNumber];
                    var _pageNumber = parseInt(pageNumber);
                    params.p = _pageNumber;
                    paramsKey = ko.toJSON(params);
                    if (!self.cache[paramsKey]) self.cache[paramsKey] =
                        _items;
                    if (!self.numPages[paramsKey]) self.numPages[paramsKey] = Math.min(Math.ceil(totalCount / 8), 200)
                })
            };
        self.fetchPromise = null;
        self.fetchItems = function(params, timeout) {
            if (self.fetchPromise) {
                self.fetchPromise.reject();
                self.fetchPromise = null
            }
            var d = $.Deferred();
            var paramsKey = ko.toJSON(params);
            self.fetchPromise = d;
            if (self.cache[paramsKey]) {
                Log.debug("found items in the cache");
                if (timeout) setTimeout(function() {
                    return d.resolve({
                        items: self.cache[paramsKey],
                        numPages: self.numPages[paramsKey]
                    })
                }, 100);
                else return d.resolve({
                    items: self.cache[paramsKey],
                    numPages: self.numPages[paramsKey]
                })
            } else {
                Log.debug("fetching items from the server");
                DiscoverAPI.get(params).then(function(response) {
                    self.handleServerItems(params, response.items, response.total_count, response.args.p);
                    return d.resolve({
                        items: self.cache[paramsKey],
                        numPages: self.numPages[paramsKey]
                    })
                }, function(error) {
                    Log.error("error fetching discover results: " + error);
                    return d.reject()
                })
            }
            return d.promise()
        };
        self.newFilters = function() {
            self.pageNumber(0);
            var params = $.extend({}, self.currentParams());
            var currentPage =
                self.currentPage();
            currentPage.loading(true);
            self.paging.visible(false);
            self.fetchItems(params, true).then(function(data) {
                self.currentPage().items(data.items);
                self.paging.numPages(data.numPages);
                self.paging.update();
                self.paging.visible(true);
                currentPage.loading(false)
            }, function() {})
        };
        self.navigateFromArgs = function(args) {
            var newParams = {
                f: args.f || "all",
                g: args.g || "all",
                t: args.t || null,
                gn: args.gn || 0,
                w: args.w || null,
                s: args.s || "top",
                p: args.p || 0,
                r: args.r || null
            };
            var currentParams = $.extend({}, self.currentParams());
            var sameFilters = true;
            $.each(newParams, function(k, v) {
                if (k !== "p") {
                    var npIsNull = newParams[k] === null || newParams[k] === undefined;
                    var cpIsNull = currentParams[k] === null || currentParams[k] === undefined;
                    if (npIsNull && !cpIsNull) sameFilters = false;
                    else if (!npIsNull && cpIsNull) sameFilters = false;
                    else if ((!npIsNull && newParams[k].toString()) !== (!cpIsNull && currentParams[k].toString())) sameFilters = false
                }
            });
            if (sameFilters && parseInt(newParams.p) === parseInt(currentParams.p + 1)) self.pageForward(true);
            else if (sameFilters && parseInt(newParams.p) ===
                parseInt(currentParams.p - 1)) self.pageBackward(true);
            else if (sameFilters) self.jumpToPage(parseInt(newParams.p), true);
            else {
                self.genres.setByValue(newParams.g);
                self.subgenres.setByValue(newParams.t);
                self.slices.setByValue(newParams.s);
                self.formats.setByValue(newParams.f);
                self.locations.setByValue(newParams.gn);
                self.dates.setByValue(newParams.w);
                if (!self.dates.selected()) self.dates.selected(newParams.w !== null && parseInt(newParams.w !== 0));
                self.pageNumber(parseInt(newParams.p));
                self.artistRecs.setByValue(newParams.r);
                self.currentPage().loading(true);
                currentParams = $.extend({}, self.currentParams());
                self.fetchItems(currentParams, true).then(function(data) {
                    self.currentPage().items(data.items);
                    self.paging.numPages(data.numPages);
                    self.currentPage().loading(false);
                    self.paging.visible(true)
                }, function() {})
            }
        };
        Iter.each(["genres", "subgenres", "slices", "locations", "formats", "dates", "artistRecs"], function(c) {
            self[c].selectedPill.subscribe(function() {
                self.newFilters()
            })
        });
        FanControls.delegate(self.$root);
        FanControls.start();
        FanControls.initializeItems(self.$root);
        PopupImage.delegate(self.$root);
        self.handleServerItems($.extend({}, self.currentParams()), init.initial.server_items, init.initial.total_count, self.serverPageNumber());
        self.currentPage().items(self.cache[self.currentParamsKey()]);
        self.player = new PlayerVM(self);
        self.tumbleweedSrc = ko.computed(function() {
            if (!self.currentPage().items() || self.currentPage().items().length === 0) return "/img/discover/discover-tumbleweed.gif";
            else return ""
        });
        self.setupScrollers = function() {
            Iter.each(["genres",
                "subgenres", "locations"
            ], function(c) {
                var category = self[c];
                doScrollers(category)
            })
        }
    }
    var DiscoverAPI = {
        cleanParams: function(params) {
            var cleaned = {};
            $.each(params, function(k, v) {
                if (k === "p") cleaned[k] = Math.floor(v / 6).toString();
                else cleaned[k] = v.toString()
            });
            return cleaned
        },
        get: function(params) {
            var d = $.Deferred();
            var data = this.cleanParams(params);
            if (!Identities.fan()) {
                data.lo = true;
                data.lo_action_url = siteroot_https
            }
            $.get(Url.addQueryParams("/api/discover/3/get_web", data)).then(function(response) {
                    return d.resolve(response)
                },
                function(error) {
                    return d.reject(error)
                });
            return d.promise()
        }
    };
    var DiscoverColors = {
        get: function(genre, level) {
            var colors = $("#pagedata").data("blob").discover_2015.discover_colors;
            var offsets = $("#pagedata").data("blob").discover_2015.discover_color_offsets;
            var color = {
                hue: colors[genre].baseHue,
                sat: colors[genre].baseSat,
                light: colors[genre].baseLight,
                alpha: colors[genre].baseAlpha
            };
            if (!level) return color;
            var offset = offsets[level];
            if (!offset) return color;
            $.each(offset, function(prop, val) {
                color[prop] = color[prop] +
                    val
            });
            return color
        }
    };
    window.DiscoverVM = DiscoverVM;
    window.DiscoverAPI = DiscoverAPI
})(window, jQuery, ko);
(function(window, $, ko) {
    var NotableVideo = {
        initialize: function(viewmodel) {
            function doInit() {
                var item = viewmodel.currentPage().itemsWithVideo()[0];
                var subscription;
                Iter.each(subscriptions, function(s) {
                    s.dispose()
                });
                subscriptions = [];
                if (!item) return;
                if (MediaView.mode === "phone" || Browser.platform === "iphone") {
                    var video = $(".notable-item video")[0];
                    $(video).on("play", function() {
                        viewmodel.player.pause()
                    });
                    Iter.each(viewmodel.currentPage().items(), function(i) {
                        var subscription = i.playing.subscribe(function(val) {
                            if (val) video.pause()
                        });
                        subscriptions.push(subscription)
                    });
                    subscription = item.showVideo.subscribe(function(val) {
                        if (val) video.play();
                        else video.pause()
                    })
                } else {
                    if (viewmodel.xframe) viewmodel.xframe.destroy();
                    var playerframe = $(".notable-video iframe")[0];
                    viewmodel.xframe = new CrossFrame(window, playerframe.contentWindow, siteroot_current);
                    var d = $.Deferred();
                    viewmodel.xframe.on("loaded", function() {
                        d.resolve()
                    });
                    viewmodel.xframe.on("videoplaying", function() {
                        viewmodel.player.pause()
                    });
                    subscription = item.showVideo.subscribe(function(val) {
                        if (val) d.then(function() {
                            viewmodel.player.pause();
                            viewmodel.xframe.call("playvideo", {
                                pos: 0
                            })
                        });
                        else viewmodel.xframe.call("stopvideo", {
                            pos: 0
                        })
                    });
                    subscriptions.push(subscription);
                    Iter.each(viewmodel.currentPage().items(), function(i) {
                        var subscription = i.playing.subscribe(function(val) {
                            if (val) viewmodel.xframe.call("stopvideo", {
                                pos: 0
                            })
                        });
                        subscriptions.push(subscription)
                    })
                }
            }
            var subscriptions = [];
            doInit();
            viewmodel.renderVideoIframes.subscribe(function(newVal) {
                if (newVal) {
                    if (viewmodel.currentPage().itemsWithVideo().length === 0) return;
                    setTimeout(function() {
                            doInit()
                        },
                        50)
                }
            });
            viewmodel.mobilePage.items.subscribe(function(newItems) {
                if (newItems) {
                    if (viewmodel.mobilePage.itemsWithVideo().length === 0) return;
                    doInit()
                }
            })
        }
    };
    window.NotableVideo = NotableVideo
})(window, jQuery, ko);
(function(window, $, ko) {
    function NotableTralbumVM(data, pageNumber, parent, pageVM) {
        var self = this;
        self.title = data.title;
        self.artist = data.artist;
        self.video_id = data.video_id;
        self.artId = data.art_id;
        self.desc = data.desc;
        self.is_preorder = data.is_preorder;
        self.tralbumURL = Url.addQueryParams(data.tralbum_url, {
            "from": "hpnn"
        });
        self.tralbumBuyURL = Url.addQueryParams(data.tralbum_url, {
            "from": "hpnnbn"
        });
        self.loQuerystr = data.lo_querystr;
        self.dataItemId = data.id;
        self.playing = ko.observable(false);
        self.genre = data.genre;
        self.tralbumType = data.tralbum_type;
        self.tralbumKey = data.tralbum_type + data.tralbum_id;
        self.bandId = data.band_id;
        self.publishedDate = data.published_date;
        self.playing = ko.observable(false);
        self.featuredTrack = {
            id: data.audio_track_id,
            file: data.audio_url,
            duration: data.audio_duration
        };
        self.playMe = function() {
            if (!self.videoAttributes) parent.player.playpauseItem(self)
        };
        self.videoAttributes = null;
        if (data.video_info) {
            self.videoAttributes = {
                videoId: data.video_info.video_id,
                mobileURL: "//bandcamp.23video.com" + data.video_info.mobile_url,
                iframeSrc: "/video_frame?video_id\x3d" + data.video_info.video_id,
                aspect: data.video_info.original_aspect,
                posterImageId: data.video_info.poster_image_id,
                posterFallbackURL: data.video_info.poster_fallback_url,
                orientation: !data.video_info.original_aspect || data.video_info.original_aspect >= 1 ? "landscape" : "portrait",
                duration: Time.strftime(new Date(data.video_info.duration * 1E3), data.video_info.duration >= 3600 ? "%H:%M:%S" : "%M:%S")
            };
            self.videoAttributes.videoFormat = "video_" + self.videoAttributes.orientation;
            self.videoAttributes.posterURL =
                self.videoAttributes.posterFallbackURL;
            self.videoAttributes.backgroundStyle = "url(" + self.videoAttributes.posterURL + ") center no-repeat";
            self.videoAttributes.backgroundSize = MediaView.mode === "phone" ? "cover" : "100%"
        }
        self.hasVideo = self.videoAttributes !== null;
        self.showVideo = ko.observable(false);
        self.playVideo = function() {
            Stats.record({
                kind: "click",
                click: "homepage_new_notable_video_play"
            });
            self.showVideo(true)
        };
        self.isCurrentPage = ko.computed(function() {
            if (!pageVM) return false;
            return pageVM.role() === "current"
        });
        self.immediate = parseInt(pageNumber) === 0 && parent.immediate
    }

    function PlayerVM(parent) {
        var self = this;
        self.stateChangeCallback = function(arg) {
            if (!arg) return;
            if (arg.newstate === "PLAYING" || arg.newstate == "BUFFERING") self.currentItem.playing(true);
            else if (arg.newstate === "IDLE" || arg.newstate === "PAUSED") self.currentItem.playing(false)
        };
        self.playlist = new Player.Playlist(new WrapperSoundPlayer, "new_and_notable", null, {
            no_trackstate: true
        });
        self.playlist.onstatechanged(self.stateChangeCallback);
        self.currentItem = null;
        self.playpauseItem = function(item) {
            if (self.currentItem === item) {
                item.playing(!item.playing());
                self.playlist.playpause()
            } else {
                Iter.each(parent.currentPage().items(), function(i) {
                    i.playing(false)
                });
                item.playing(true);
                self.currentItem = item;
                self.playlist.load([item.featuredTrack]);
                self.playlist.play_track(0, 0)
            }
        };
        self.pause = function() {
            if (self.currentItem) self.currentItem.playing(false);
            self.playlist.pause()
        }
    }

    function PageVM(role, items$$0, pageNumber) {
        var self = this;
        self.role = ko.observable(role);
        self.items =
            ko.observableArray(items$$0);
        self.itemsWithVideo = ko.computed(function() {
            var items = self.items();
            return Iter.findAll(items, function(i) {
                return i.hasVideo
            })
        });
        self.immediateTransition = ko.observable(false);
        self.pageNumber = ko.observable(pageNumber);
        self.loading = ko.observable(false);
        self.loading.subscribe(function(val) {
            Log.debug("Page with role " + self.role() + " loading: " + val)
        });
        self.fadingIn = ko.observable(false);
        self.fadingOut = ko.observable(false);
        self.loading.subscribe(function(val) {
            self.fadingIn(!val);
            self.fadingOut(val)
        });
        self.maxHeight = null
    }

    function NotableVM(root, sequence, data, fanData) {
        function appendStatToken(anchor, token) {
            var $anchor = $(anchor);
            var urlHash = Url.toHash($anchor.attr("href"));
            if (/^\/(album|track)\//.test(urlHash.pathname)) {
                var queryHash = Url.parseQuery(urlHash.search);
                queryHash.from = token;
                urlHash.search = "?" + Url.joinQuery(queryHash);
                $anchor.attr("href", Url.fromHash(urlHash))
            }
        }
        var self = this;
        self.$root = $(root);
        self.data = data;
        self.fanData = fanData;
        self.sequence = sequence;
        self.sequenceVideos = [];
        self.nextAvailPage = 0;
        self.pageCount = 0;
        self.numVideosOnPage = [];
        self.pageIndex = 0;
        self.getPageCount = function() {
            return Math.max(self.pageCount, Math.ceil(self.sequence.length / maxItemsPerPage))
        };
        self.pages = [new PageVM("prev", [], -1), new PageVM("current", [], 0), new PageVM("next", [], 1)];
        self.mobilePage = new PageVM("current", [], 0);
        self.prevPage = ko.computed(function() {
            return Iter.find(self.pages, function(p) {
                return p.role() === "prev"
            })
        });
        self.currentPage = ko.computed(function() {
            return Iter.find(self.pages, function(p) {
                return p.role() ===
                    "current"
            })
        });
        self.nextPage = ko.computed(function() {
            return Iter.find(self.pages, function(p) {
                return p.role() === "next"
            })
        });
        self.leftActive = ko.observable(false);
        self.rightActive = ko.observable(self.pageIndex < self.getPageCount() - 1);
        self.loading = false;
        self.loadedTo = 0;
        self.preloading = false;
        self.videoSequenceInitted = false;
        self.renderVideoIframes = ko.observable(true);
        self.immediate = true;
        self.ready = false;
        self.player = new PlayerVM(self);
        self.updateSequenceVideo = function() {
            var missingItemsInData = false;
            $.each(self.sequence.slice(self.loadedTo,
                self.sequence.length), function(index, id) {
                if (!self.data[id]) {
                    self.loadedTo = self.loadedTo + index;
                    missingItemsInData = true;
                    return false
                }
                if (self.data[id].video_id === null) {
                    for (; self.pageIsComplete(self.nextAvailPage);) {
                        self.nextAvailPage++;
                        if (self.nextAvailPage >= self.getPageCount()) {
                            self.sequenceVideos[self.nextAvailPage] = [];
                            self.pageCount = self.nextAvailPage
                        }
                    }
                    self.sequenceVideos[self.nextAvailPage].push(id)
                } else if (self.hasSpaceForVideo(self.nextAvailPage)) {
                    self.sequenceVideos[self.nextAvailPage].push(id);
                    self.numVideosOnPage[self.nextAvailPage]++
                } else {
                    for (var i = 1; !self.hasSpaceForVideo(self.nextAvailPage + i);) i++;
                    self.sequenceVideos[self.nextAvailPage + i].push(id);
                    self.numVideosOnPage[self.nextAvailPage + i]++;
                    self.pageCount = self.sequenceVideos.length
                }
            });
            if (!missingItemsInData) self.loadedTo = self.sequence.length
        };
        self.initVideoSequence = function() {
            var pageCount = self.getPageCount();
            for (var i = 0; i < pageCount; i++) {
                self.sequenceVideos[i] = [];
                self.numVideosOnPage[i] = 0
            }
            self.videoSequenceInitted = true;
            self.updateSequenceVideo()
        };
        self.appendItems = function(pageNumber, pageVM) {
            if (!self.videoSequenceInitted) self.initVideoSequence();
            var items = [];
            Iter.each(self.sequenceVideos[pageNumber], function(notableId) {
                var notable = self.data[notableId];
                items.push(new NotableTralbumVM(notable, pageNumber, self, pageVM))
            });
            self.currentPage().items(self.currentPage().items().concat(items));
            self.mobilePage.items(self.mobilePage.items().concat(items));
            self.updateActives()
        };
        self.instantiateItems = function(pageNumber, pageVM) {
            var items = [];
            Iter.each(self.sequenceVideos[pageNumber],
                function(notableId) {
                    var notable = self.data[notableId];
                    items.push(new NotableTralbumVM(notable, pageNumber, self, pageVM))
                });
            return items
        };
        self.hideVideos = function() {
            Iter.each(self.currentPage().items(), function(item) {
                item.showVideo(false)
            });
            self.renderVideoIframes(false)
        };
        self.renderTimeout = null;
        self.paging = ko.observable(false);
        self.postPageAction = null;
        self.pageRight = function() {
            var newPageIndex = self.pageIndex + 1;
            if (newPageIndex < 0 || newPageIndex >= self.getPageCount() || newPageIndex == self.pageIndex) return;
            if (self.paging()) {
                self.postPageAction = self.pageRight;
                return
            }
            self.paging(true);
            self.player.pause();
            self.hideVideos();
            if (self.renderTimeout) clearTimeout(self.renderTimeout);
            var prev = self.prevPage();
            var current = self.currentPage();
            var next = self.nextPage();
            self.pageIndex = newPageIndex;
            if (next.maxHeight) NotableDOM.setContainerHeight(self.$root.find(".notable-results")[0], self.$root.find(".result-next")[0], next.maxHeight);
            prev.immediateTransition(false);
            current.immediateTransition(false);
            next.immediateTransition(false);
            next.role("current");
            current.role("prev");
            prev.role("next");
            next = prev;
            next.immediateTransition(true);
            next.pageNumber(self.pageIndex + 1);
            self.updateActives();
            self.populateNextPage();
            self.renderTimeout = setTimeout(function() {
                self.paging(false);
                if (self.postPageAction) {
                    self.postPageAction();
                    self.postPageAction = null
                } else self.renderVideoIframes(true)
            }, 500)
        };
        self.pageLeft = function() {
            var newPageIndex = self.pageIndex - 1;
            if (newPageIndex < 0 || newPageIndex >= self.getPageCount() || newPageIndex == self.pageIndex) return;
            if (self.paging()) {
                self.postPageAction = self.pageLeft;
                return
            }
            self.paging(true);
            self.player.pause();
            self.hideVideos();
            if (self.renderTimeout) clearTimeout(self.renderTimeout);
            var prev = self.prevPage();
            var current = self.currentPage();
            var next = self.nextPage();
            self.pageIndex = newPageIndex;
            if (prev.maxHeight) NotableDOM.setContainerHeight(self.$root.find(".notable-results")[0], self.$root.find(".result-prev")[0], prev.maxHeight);
            prev.immediateTransition(false);
            current.immediateTransition(false);
            next.immediateTransition(false);
            prev.role("current");
            current.role("next");
            next.role("prev");
            prev = next;
            prev.immediateTransition(true);
            prev.pageNumber(self.pageIndex - 1);
            self.updateActives();
            self.populatePrevPage();
            self.renderTimeout = setTimeout(function() {
                self.paging(false);
                if (self.postPageAction) {
                    self.postPageAction();
                    self.postPageAction = null
                } else self.renderVideoIframes(true)
            }, 500)
        };
        self.populateNextPage = function() {
            var currentPage = self.pageIndex;
            if (currentPage + 1 <= self.getPageCount() - 1) self.prefetch(currentPage + 1).then(function() {
                var next =
                    self.nextPage();
                next.items(self.instantiateItems(currentPage + 1, next));
                setTimeout(function() {
                    var maxHeight = NotableDOM.getMaxHeight(self.$root.find(".result-next")[0]);
                    next.maxHeight = maxHeight
                }, 0)
            })
        };
        self.populatePrevPage = function() {
            var currentPage = self.pageIndex;
            if (currentPage - 1 >= 0) self.prefetch(currentPage - 1).then(function() {
                var prev = self.prevPage();
                prev.items(self.instantiateItems(currentPage - 1, prev));
                setTimeout(function() {
                    var maxHeight = NotableDOM.getMaxHeight(self.$root.find(".result-prev")[0]);
                    prev.maxHeight = maxHeight
                }, 0)
            })
        };
        self.pageIsComplete = function(page) {
            return self.sequenceVideos[page].length == maxItemsPerPage - self.numVideosOnPage[page]
        };
        self.hasSpaceForVideo = function(page) {
            if (page < 0) return;
            if (!self.sequenceVideos[page]) self.sequenceVideos[page] = [];
            if (!self.numVideosOnPage[page]) self.numVideosOnPage[page] = 0;
            return self.numVideosOnPage[page] < maxVideosPerPage && self.sequenceVideos[page].length < maxItemsPerPage - 1
        };
        self.loadTralbums = function(page) {
            var ready = $.Deferred().resolve().promise();
            if (!self.pageIsComplete(page)) {
                var lastItem = self.loadedTo + maxItemsPerPage * pagesPerReq;
                var ids = self.sequence.slice(self.loadedTo, lastItem);
                var url = "/api/notabletralbum/2/get?id\x3d" + ids.join(",");
                if (!Identities.fan()) url = url + "\x26lo\x3d1\x26lo_action_url\x3d" + siteroot_https;
                if (ids.length > 0) return $.ajax({
                    type: "GET",
                    url: url,
                    dataType: "json"
                }).then(function(tralbums) {
                    $.extend(self.data, tralbums);
                    self.updateSequenceVideo()
                })
            }
            return ready
        };
        self.prefetch = function(page) {
            var ready = $.Deferred().resolve().promise();
            if (!self.pageIsComplete(page)) {
                self.preloading = self.loadTralbums(page).then(function() {
                    self.preloading = false
                });
                ready = self.preloading.then(function() {})
            }
            return ready
        };
        self.loadingInline = ko.observable(false);
        self.loadPageInline = function() {
            var page = self.pageIndex + 1;
            if (page < 0 || page >= self.getPageCount() || page == self.pageIndex) return;
            self.loadingInline(true);
            var ready = self.prefetch(page);
            ready.then(function() {
                self.loadingInline(false);
                self.pageIndex = page;
                self.appendItems(page)
            })
        };
        self.doFirstPage = function() {
            self.initVideoSequence();
            self.immediate = true;
            var prev = self.prevPage();
            var current = self.currentPage();
            var next = self.nextPage();
            var items = self.instantiateItems(0, next);
            next.items(items);
            self.mobilePage.items(items);
            next.maxHeight = NotableDOM.getMaxHeight(self.$root.find(".result-next")[0]);
            if (next.maxHeight > 0) NotableDOM.setContainerHeight(self.$root.find(".notable-results")[0], self.$root.find(".result-next")[0], next.maxHeight);
            next.immediateTransition(true);
            next.role("current");
            current.role("prev");
            prev.role("next");
            next = prev;
            next.immediateTransition(true);
            self.populateNextPage();
            self.immediate = false;
            self.ready = true
        };
        self.updateActives = function() {
            self.leftActive(self.pageIndex > 0);
            self.rightActive(self.pageIndex < self.getPageCount() - 1)
        };
        self.postBinding = function() {
            if (MediaView.mode === "phone" || window.innerWidth <= 740) self.appendItems(0);
            else self.doFirstPage();
            self.$root.find(".notable-results").scroll(function() {
                var $this = $(this);
                if ($this.find(".result-mobile:visible").length === 0) return;
                if (!self.loadingInline() && $this.scrollLeft() >
                    this.scrollWidth - $this.width() - 100) self.loadPageInline()
            })
        };
        FanControls.delegate(self.$root);
        self.afterItemsRender = function(elements) {
            setTimeout(function() {
                FanControls.initializeItems(elements)
            }, 0);
            self.$root.find(".item-desc a").each(function() {
                appendStatToken(this, "hpnn")
            })
        }
    }
    var maxItemsPerPage = 5;
    var pagesPerReq = 3;
    var maxVideosPerPage = 1;
    var CONTAINER_OFFSET = 40;
    var NotableDOM = {
        getMaxHeight: function(resultsEl) {
            var height = 0;
            var items = $(resultsEl).find(".notable-item");
            if (items.length > 0) Iter.each(items,
                function(el) {
                    var totalHeight = 0;
                    $(el).children().each(function() {
                        totalHeight = totalHeight + $(this).outerHeight(true)
                    });
                    if (totalHeight > height) height = totalHeight
                });
            return height
        },
        setContainerHeight: function(allResultsEl, resultsEl, height) {
            $(allResultsEl).css("min-height", height + CONTAINER_OFFSET + "px");
            $(resultsEl).find(".notable-item").css("min-height", height + CONTAINER_OFFSET + "px")
        }
    };
    window.NotableVM = NotableVM
})(window, jQuery, ko);
var HomeFeedReader = LangUtils.makeclass({
    ctor: function(feedData) {
        this._feedData = feedData;
        this._clientServerDelay = this._feedData.server_time * 1E3 - (new Date).valueOf();
        this._onfeedevent = EventSender.create(this, "feedevent");
        this._onfeedupdate = EventSender.create(this, "feedupdate");
        var self = this;
        setTimeout(function() {
            self._onfeedupdate(self._feedData);
            self._schedule_work()
        }, 1)
    },
    prototype: {
        _do_work: function() {
            this._scheduled = null;
            try {
                var now = this._now();
                var fetching = false;
                if (this._low_water_time && now > this._low_water_time) this._get_data();
                for (; this._events_due();) {
                    var evt = this._feedData.events.shift();
                    this._onfeedevent(evt)
                }
            } catch (e) {
                this.debug("_do_work: caught: " + e)
            }
            this._schedule_work()
        },
        _events_due: function() {
            if (this._feedData.events.length > 0) {
                var now = this._now();
                var nextdate = new Date((this._feedData.events[0].utc_date + this._feedData.data_delay_sec) * 1E3);
                return nextdate < now
            }
            return false
        },
        _get_data: function() {
            if (this._fetch_pending) return;
            this.debug("getting data (low water time: " + this._low_water_time + ")");
            var self = this;
            var cb = {
                success: function(o) {
                    self._fetch_pending = false;
                    self._low_water_time = null;
                    self._feed_recv(o)
                },
                failure: function(o) {
                    self._fetch_pending = false;
                    self._low_water_time = null;
                    self._feed_failure(o)
                }
            };
            self._fetch_pending = true;
            var startparam = this._feedData.end_date;
            this.debug("requesting data with start_date of " + startparam + "(server time is " + this._now().valueOf() / 1E3 + ")");
            var requrl = HomeFeedReader.FEED_URL + "?" + Url.joinQuery({
                "start_date": startparam
            });
            Y.util.Connect.asyncRequest("GET", requrl, cb)
        },
        _now: function() {
            return new Date((new Date).valueOf() +
                this._clientServerDelay)
        },
        server_date: function(timestamp_sec) {
            return new Date(timestamp_sec * 1E3 - this._clientServerDelay)
        },
        _calc_low_water_time: function() {
            if (!this._low_water_time || this._low_water_time < this._now()) {
                this.debug("feed end_date: " + this._feedData.end_date + " (\x3d" + new Date(this._feedData.end_date * 1E3) + ")");
                var endtime = new Date((this._feedData.end_date + .5 * this._feedData.data_delay_sec + Math.random() * this._feedData.data_delay_sec / 4) * 1E3);
                this.debug("will request new data " + (endtime.valueOf() /
                    1E3 - this._feedData.end_date) + " sec after feed end_date (at " + endtime + ")");
                this._low_water_time = endtime
            }
        },
        _schedule_work: function() {
            if (this._scheduled) return;
            var fetch_wait = null;
            var event_wait = null;
            var event_type = null;
            if (!this._fetch_pending) {
                this._calc_low_water_time();
                fetch_wait = this._low_water_time.valueOf() - this._now().valueOf();
                if (isNaN(fetch_wait)) {
                    Log.error("fetch_wait is nan");
                    fetch_wait = null
                }
                if (fetch_wait < 0) fetch_wait = 0
            }
            if (this._feedData.events && this._feedData.events.length > 0) {
                var nextevent =
                    this._feedData.events[0];
                var event_time = new Date((nextevent.utc_date + this._feedData.data_delay_sec) * 1E3);
                event_wait = event_time.valueOf() - this._now().valueOf();
                event_type = nextevent.event_type
            }
            var delay = null;
            var msg = null;
            if (fetch_wait != null && event_wait != null)
                if (fetch_wait < event_wait) {
                    msg = "fetching data in " + fetch_wait + "ms.";
                    delay = fetch_wait
                } else {
                    if (event_type == "sale") msg = "feed event (" + event_type + ") in " + event_wait + "ms. (fetch data in " + fetch_wait + "ms)";
                    delay = event_wait
                }
            else if (fetch_wait != null) {
                msg =
                    "no more events. fetching data in " + fetch_wait + "ms.";
                delay = fetch_wait
            } else if (event_wait != null) {
                msg = "feed event (" + event_type + ") in " + event_wait + "ms.";
                delay = event_wait
            }
            if (delay != null) {
                var that = this;
                delay = Math.max(delay, 0);
                this._scheduled = setTimeout(function() {
                    that._do_work()
                }, delay)
            } else if (!this._fetch_pending) Log.error("_schedule work: delay is null with no request pending?")
        },
        _feed_recv: function(o) {
            this.debug("got feed data: " + o);
            var newdata = Y.lang.JSON.parse(o.responseText);
            if (newdata.home_page_values) this._feedData.events.push({
                utc_date: newdata.start_date,
                event_type: "update values",
                values: newdata.home_page_values
            });
            var events = newdata.events;
            if (events)
                for (; events.length > 0;) {
                    var evt = events.shift();
                    if (evt.utc_date > this._feedData.end_date) this._feedData.events.push(evt)
                }
            if (newdata.end_date) {
                this.debug("feed data received: new end_date " + newdata.end_date + ", old end_date " + this._feedData.end_date + " (" + (newdata.end_date - this._feedData.end_date) + " sec newer)");
                this._feedData.end_date = newdata.end_date
            } else {
                this.debug("feed failed; new low water time in 120 sec");
                this._low_water_time = new Date(this._now().valueOf() + 120 * 1E3)
            }
            if (newdata.data_delay_sec) this._feedData.data_delay_sec = newdata.data_delay_sec;
            this._onfeedupdate(this._feedData);
            this._schedule_work()
        },
        _feed_failure: function(o) {
            this.debug("feed fetch failed: " + o)
        },
        debug: function(str) {}
    },
    statics: {
        FEED_URL: "/api/salesfeed/1/get"
    }
});
(function(window, $, ko) {
    var SalesFeedControl = function() {
        var self = {
            init: function(root, feedData, options) {
                if (options === undefined) options = {};
                self.$root = $(root).first();
                self.$list = self.$root.find(".salesfeed-items");
                self.$preloadList = self.$root.find(".preload-salesfeed-items");
                self.feedData = feedData;
                self.reader = new HomeFeedReader(feedData || {});
                self.reader.onfeedevent($.proxy(self, "handleFeedEvent"));
                self.reader.onfeedupdate($.proxy(self, "handleFeedUpdate"));
                self.itemsPerRow = options.itemsPerRow || 8;
                self.itemTempl =
                    options.itemTempl || "home/home_2015/salesfeed_item";
                self.itemPreloadTempl = options.itemPreloadTempl;
                self.isDev = String.prototype.endsWith && Templ.getGlobals().sitedomain.endsWith("bcdevs.com");
                self.pausable = options.pausable !== undefined ? options.pausable : true;
                self.paused = false;
                self.pauseQueue = [];
                if (self.pausable && Capabilities.hasHover()) self.$root.on("mouseenter mouseleave", ".salesfeed-item", function(event) {
                    $(this).toggleClass("selected")
                }).find(".salesfeed-bd").on("mouseenter mouseleave", function(event) {
                    self.playPauseFeed(event.type ==
                        "mouseenter")
                })
            },
            handleFeedEvent: function(arg) {
                if (arg.event_type == "sale") $.each(arg.items, function(i, item) {
                    if (!(item.art_id || item.package_image_id)) return true;
                    if (self.paused) self.queueItem(item);
                    else self.renderItemIntoFeed(item)
                })
            },
            handleFeedUpdate: function(feedData) {
                if (self.itemPreloadTempl)
                    for (var i = 0; i < feedData.events.length; ++i) {
                        var evt = feedData.events[i];
                        if (evt.event_type == "sale")
                            for (var j = 0; j < evt.items.length; ++j) self.preloadItem(evt.items[j])
                    }
            },
            preloadItem: function(item) {
                var newItem = self.renderItem(item,
                    self.itemPreloadTempl);
                newItem.prependTo(self.$preloadList);
                item.preloaded = newItem
            },
            renderItemIntoFeed: function(item) {
                item.utc_date_rounded = Math.floor(item.utc_date);
                item.seconds_since = self.secondsSince(item.utc_date_rounded);
                var newItem = self.renderItem(item, self.itemTempl);
                newItem.prependTo(self.$list);
                if (item.preloaded) {
                    item.preloaded.remove();
                    item.preloaded = null
                }
                setTimeout(function() {
                    self.pruneItem()
                }, 1E3);
                self.updateItems()
            },
            renderItem: function(item, templ) {
                if (self.isDev) {
                    var save_siteroot = TemplGlobals.image_siteroot;
                    TemplGlobals.image_siteroot = "https://f4.bcbits.com"
                }
                var newItem = $(Templ.render(templ, {
                    "item": item
                }));
                if (self.isDev) TemplGlobals.image_siteroot = save_siteroot;
                return newItem
            },
            updateItems: function() {
                $(".salesfeed-item").each(function(item) {
                    var $this = $(this);
                    var utcDate = parseInt($this.find(".item-timestamp").data("utc-date"));
                    var secondsSince = self.secondsSince(utcDate);
                    var text = secondsSince <= 1 ? "1 second ago" : secondsSince + " seconds ago";
                    $this.find(".now").text(text)
                })
            },
            pruneItem: function() {
                for (; self.$list.children().length >
                    self.itemsPerRow + 1;) self.$list.find("li:last-child").remove()
            },
            playPauseFeed: function(pause) {
                if (pause === undefined) pause = !self.paused;
                if (pause) {
                    var humour = $("#pagedata").data("blob").salesfeed_humour;
                    if (humour) {
                        var newHumour = humour.all[Math.floor(Math.random() * humour.all.length)];
                        $(".salesfeed-humour").text(newHumour);
                        self.humourTimer = setTimeout(function() {
                            $(".salesfeed-humour").addClass("visible")
                        }, 3500)
                    }
                } else {
                    $(".salesfeed-humour").removeClass("visible");
                    if (self.humourTimer) clearTimeout(self.humourTimer)
                }
                self.paused = !!pause;
                if (pause) self.$root.addClass("paused");
                else {
                    self.$root.removeClass("paused");
                    self.flushQueue()
                }
            },
            queueItem: function(item) {
                var queue = self.pauseQueue;
                queue.unshift(item);
                if (queue.length > self.itemsPerRow) queue.length = self.itemsPerRow;
                Log.debug("salesfeed: pause queue: new length: ", queue.length, ", new item: ", item)
            },
            flushQueue: function() {
                var queue = self.pauseQueue;
                Log.debug("salesfeed: rendering ", queue.length, "queued items");
                $.each(queue.reverse(), function(i, item) {
                    self.renderItemIntoFeed(item)
                });
                queue.length = 0
            },
            secondsSince: function(timestamp) {
                return Math.floor((new Date).getTime() / 1E3 - timestamp - self.feedData.data_delay_sec)
            },
            xxx: null
        };
        self.init.apply(self, arguments);
        return self
    };
    window.SalesFeedControl = SalesFeedControl
})(window, jQuery, ko);
var FanSpotlightControl = function() {
    var itemsPerPage = 2;
    var pagesPerReq = 6;
    var CONTAINER_OFFSET = 20;
    var self = {
        init: function(root, seq, data, pageIndex, fanData) {
            self.$root = $(root).first();
            self.$header = self.$root.find("h3");
            self.pageIndex = pageIndex || 0;
            self.seq = seq.map(function(s) {
                return s.fan_id
            }) || [];
            self.data = data || {};
            self.fanData = fanData;
            self.loadingTo = 2;
            self.loadedTo = 2;
            self.preloading = false;
            self.loadingSpinner = $("\x3cimg class\x3d'loading' src\x3d'/img/loading-dark.gif'\x3e");
            self.pageData = $("#pagedata").data("blob") || {};
            self.doFirstPage();
            self.$root.find(".stepper-next").on("mousedown", function(event) {
                self.pageRight();
                event.preventDefault();
                return false
            });
            self.$root.find(".stepper-prev").on("mousedown", function(event) {
                self.pageLeft();
                event.preventDefault();
                return false
            });
            self.updateFlipButtons();
            self.setupPlaylist();
            FanControls.delegate(self.$root);
            FanControls.initializeItems(self.$root)
        },
        pageCount: function() {
            return Math.ceil(self.seq.length / itemsPerPage)
        },
        pageRight: function() {
            var newPageIndex = self.pageIndex +
                1;
            if (newPageIndex < 0 || newPageIndex >= self.pageCount() || newPageIndex == self.pageIndex) return;
            self.playlist.stop();
            self.pageIndex = newPageIndex;
            self.$root.find(".spotlight-result").removeClass("immediate");
            var next = self.$root.find(".result-next");
            var current = self.$root.find(".result-current");
            var prev = self.$root.find(".result-prev");
            var maxHeight = self.getMaxHeight(next[0]);
            if (maxHeight > 0) self.setContainerHeight(maxHeight);
            next.removeClass("result-next");
            next.addClass("result-current");
            current.removeClass("result-current");
            current.addClass("result-prev");
            prev.removeClass("result-prev");
            prev.addClass("result-next");
            next = prev;
            next.addClass("immediate");
            self.populateNextPage();
            self.updateFlipButtons();
            FanControls.initializeItems(self.$root)
        },
        populateNextPage: function() {
            var currentPage = self.pageIndex;
            var page = currentPage + 1;
            if (page <= self.pageCount() - 1) self.prefetch(page).then(function() {
                var firstItem = page * itemsPerPage;
                var pageSeq = $.map(self.seq.slice(firstItem, firstItem + itemsPerPage), function(item) {
                    return self.data[item]
                });
                var html = Templ.render("home/home_2015/spotlight_content", {
                    fnsps: pageSeq,
                    fcd: self.fanData,
                    page_identities: Identities.initialData,
                    animate: true
                });
                self.$root.find(".result-next").html(html)
            })
        },
        pageLeft: function() {
            var newPageIndex = self.pageIndex - 1;
            if (newPageIndex < 0 || newPageIndex >= self.pageCount() || newPageIndex == self.pageIndex) return;
            self.playlist.stop();
            self.pageIndex = newPageIndex;
            $(".spotlight-result").removeClass("immediate");
            var next = self.$root.find(".result-next");
            var current = self.$root.find(".result-current");
            var prev = self.$root.find(".result-prev");
            var maxHeight = self.getMaxHeight(prev[0]);
            if (maxHeight > 0) self.setContainerHeight(maxHeight);
            prev.removeClass("result-prev");
            prev.addClass("result-current");
            current.removeClass("result-current");
            current.addClass("result-next");
            next.removeClass("result-next");
            next.addClass("result-prev");
            prev = next;
            prev.addClass("immediate");
            self.populatePrevPage();
            self.updateFlipButtons();
            FanControls.initializeItems(self.$root)
        },
        populatePrevPage: function() {
            var currentPage = self.pageIndex;
            var page = currentPage - 1;
            if (page >= 0) self.prefetch(page).then(function() {
                var firstItem = page * itemsPerPage;
                var pageSeq = $.map(self.seq.slice(firstItem, firstItem + itemsPerPage), function(item) {
                    return self.data[item]
                });
                var html = Templ.render("home/home_2015/spotlight_content", {
                    fnsps: pageSeq,
                    fcd: self.fanData,
                    page_identities: Identities.initialData,
                    animate: true
                });
                self.$root.find(".result-prev").html(html)
            })
        },
        updateFlipButtons: function() {
            self.$root.find(".stepper-prev, .stepper-next").removeClass("inactive");
            if (self.pageIndex +
                1 >= self.pageCount()) self.$root.find(".stepper-next").addClass("inactive");
            if (self.pageIndex === 0) self.$root.find(".stepper-prev").addClass("inactive")
        },
        setupPlaylist: function() {
            if (self.playlist) return;
            var opts = {
                no_trackstate: true
            };
            var pl = new Player.Playlist(new LazySound, "featured_fan", null, opts);
            self.playlist = pl;
            pl.onstatechanged(function(arg) {
                self.$root.find(".playable").removeClass("playing busy");
                if (arg.newstate == "PLAYING" || arg.newstate == "BUFFERING")
                    if (self._currentlyPlaying) {
                        var selector = ".playable[data-fanid\x3d" +
                            self._currentlyPlaying.id + "][data-subitem-index\x3d" + self._currentlyPlaying.index + "]";
                        var elem = self.$root.find(selector);
                        elem.addClass(arg.newstate == "BUFFERING" && Capabilities.hasAnimation() ? "busy" : "playing")
                    }
            });
            self.$root.on("click", ".playable", function(event) {
                if (event.ctrlKey || event.metaKey || event.shiftKey) return true;
                var currentlyPlaying = self.playlist.get_track_info();
                var id = $(event.target).closest(".playable").data("fanid");
                var index = $(event.target).closest(".playable").data("subitem-index");
                Log.debug("playing item id " +
                    id + " subitem index " + index);
                var clickedData = self.data[id];
                var clicked = clickedData && clickedData.items[index];
                if (clicked)
                    if (currentlyPlaying && self._currentlyPlaying.id == id && self._currentlyPlaying.index == index) self.playlist.playpause();
                    else {
                        var trackinfo = {
                            file: clicked.stream_url,
                            id: clicked.audio_track_id
                        };
                        self._currentlyPlaying = {
                            id: id,
                            index: index
                        };
                        self.playlist.load([trackinfo]);
                        self.playlist.play_track(0, 0)
                    }
                else {
                    Log.error("got a click but don't have data for id " + id);
                    self.playlist.stop()
                }
                return false
            })
        },
        idsForPage: function(page) {
            var firstItem = page * itemsPerPage;
            var lastItem = firstItem + itemsPerPage * pagesPerReq;
            return self.seq.slice(firstItem, lastItem)
        },
        loadData: function(page) {
            var ids = self.idsForPage(page);
            var url = "/api/featuredfan/1/get?id\x3d" + ids.join(",");
            if (!Identities.fan()) url = url + "\x26lo\x3d1\x26lo_action_url\x3d" + siteroot_https;
            return $.ajax({
                type: "GET",
                url: url,
                dataType: "json"
            }).then(function(tralbums) {
                $.extend(self.data, tralbums);
                self.loadedTo = self.loadingTo
            })
        },
        prefetch: function(page) {
            var ready =
                $.Deferred().resolve().promise();
            if (!self.preloading)
                if (page + 2 > self.loadingTo) {
                    self.loadingTo += pagesPerReq;
                    self.preloading = self.loadData(self.loadedTo).then(function() {
                        self.preloading = false
                    })
                } if (page + 1 > self.loadedTo) {
                self.showLoadingSpinner();
                ready = self.preloading.then(function() {
                    self.hideLoadingSpinner()
                })
            }
            return ready
        },
        showLoadingSpinner: function() {
            if (!self.$header.find(".loading").length) {
                self.loading = true;
                self.$header.append(self.loadingSpinner)
            }
        },
        hideLoadingSpinner: function() {
            self.loading = false;
            self.$header.find(".loading").remove()
        },
        doFirstPage: function() {
            var next = self.$root.find(".result-next");
            var current = self.$root.find(".result-current");
            var prev = self.$root.find(".result-prev");
            var firstItem = 0;
            var pageSeq = $.map(self.seq.slice(firstItem, firstItem + itemsPerPage), function(item) {
                return self.data[item]
            });
            var html = Templ.render("home/home_2015/spotlight_content", {
                fnsps: pageSeq,
                fcd: self.fanData,
                page_identities: Identities.initialData,
                animate: true
            });
            next.html(html);
            var maxHeight = self.getMaxHeight(next[0]);
            if (maxHeight > 0) self.setContainerHeight(maxHeight);
            next.addClass("immediate");
            next.removeClass("result-next");
            next.addClass("result-current");
            current.removeClass("result-current");
            current.addClass("result-prev");
            prev.removeClass("result-prev");
            prev.addClass("result-next");
            next = prev;
            next.addClass("immediate");
            self.populateNextPage()
        },
        getMaxHeight: function(resultsContainer) {
            var height = 0;
            var items = self.$root.find(resultsContainer).find(".spotlight-unit");
            if (items.length > 0) Iter.each(items, function(el) {
                var $el =
                    $(el);
                if ($el.height() > height) height = $el.height()
            });
            return height
        },
        setContainerHeight: function(height) {
            self.$root.find(".spotlight-results").css("min-height", height + CONTAINER_OFFSET + "px")
        },
        xxx: null
    };
    self.init.apply(self, arguments);
    return self
};
(function() {
    var HomeControl = function() {
        var self = {
            bcwControl: null,
            init: function() {
                var pd = $("#pagedata").data("blob");
                self.initCarousel(pd);
                self.initBCDaily(pd);
                setTimeout(function() {
                    self.initNotable(pd)
                }, 100);
                if (MediaView.mode != "phone") {
                    setTimeout(function() {
                        self.initDiscover(pd)
                    }, 100);
                    setTimeout(function() {
                        self.initFanSpotlight(pd)
                    }, 100);
                    if (!Url.getQueryParam(window.location.href, "skip_homefeed")) self.initHomeFeed(pd)
                }
            },
            initCarousel: function(pd) {
                self.carouselControl = new CarouselControl("#carousel-bcweekly-container",
                    pd.carousel);
                var autoplay = HiddenParams.play == "1";
                var openExpanded = pd.carousel && !pd.carousel.big_item.is_bcweekly;
                var openArchive = HiddenParams.show_archive == "1";
                self.bcwControl = new BCWeeklyControl("#bcweekly", pd.bcw_seq, pd.bcw_data, pd.bcw_index, Identities.fan(), autoplay, openExpanded, openArchive);
                $("#carousel-bcweekly-container").on("click", ".carousel-small-bcweekly-link, .carousel-bcweekly-play-button", self.bcwControl.handlePlayClick)
            },
            initDiscover: function(pd) {
                self.discoverVM = new DiscoverVM($("#discover")[0],
                    pd.discover_2015);
                ko.applyBindings(self.discoverVM, $("#discover")[0]);
                $("#discover .server-rendered").remove();
                $("#discover .client-rendered").show();
                self.discoverVM.setupScrollers()
            },
            initNotable: function(pd) {
                self.notableVM = new NotableVM($("#notable")[0], pd.bcnt_seq, pd.bcnt_data, pd.fan_controls);
                ko.applyBindings(self.notableVM, $("#notable")[0]);
                self.notableVM.postBinding();
                NotableVideo.initialize(self.notableVM)
            },
            initFanSpotlight: function(pd) {
                self.fnspControl = new FanSpotlightControl($("#spotlight")[0],
                    pd.fnsp_seq, pd.fnsp_data, null, pd.fan_controls)
            },
            initBCDaily: function(pd) {
                self.bcDailyVM = new BCDailyManager($("#bcdaily")[0])
            },
            initHomeFeed: function(pd) {
                $.get("/api/salesfeed/1/get_initial").then(function(response) {
                    self.feedReader = new SalesFeedControl(".salesfeed", response.feed_data)
                }, function(error) {})
            },
            pauseAllAudio: function() {
                self.bcwControl.playlist.pause();
                self.discoverVM.player.pause();
                self.notableVM.player.pause();
                self.fnspControl.playlist.pause()
            },
            updateCollectionInfo: function(elem) {
                var pd =
                    $("#pagedata").data("blob");
                if (pd.show_fan_collection_info) {
                    FanControls.start();
                    FanControls.initializeItems(elem)
                }
            },
            xxx: null
        };
        return self
    }();
    window.HomeControl = HomeControl;
    $(document).ready(function() {
        function has_scrolled() {
            scrollTrigger.data("position", scrollTrigger.position());
            var tPos = scrollTrigger.data("position");
            var scroll = get_scroll();
            if (scroll.top >= tPos.top - hdHeight && !$("body").hasClass("prevent-header-hiding")) {
                $("body").addClass("scroll-detected");
                bannerDiv.addClass("hide");
                if (document.activeElement.className ==
                    "you-autocomplete-me") $(".you-autocomplete-me").blur()
            } else {
                bannerDiv.removeClass("hide");
                $("body").removeClass("scroll-detected")
            }
            $("#menubar").bcmenubar("collapseAll")
        }

        function get_scroll() {
            var b = document.body;
            var e = document.documentElement;
            return {
                left: parseFloat(window.pageXOffset || b.scrollLeft || e.scrollLeft),
                top: parseFloat(window.pageYOffset || b.scrollTop || e.scrollTop)
            }
        }
        var pagedata = $("#pagedata").data("blob") || {};
        var cfg = pagedata.cfg || {};
        $(".stepper .stepper-next, .stepper .stepper-prev").on("mousedown",
            function(event) {
                var $el = $(event.target).closest(".stepper \x3e *");
                if ($el.is(".inactive") || $el.is(".disabled")) return;
                $el.addClass("immediate");
                $el.addClass("highlight");
                setTimeout(function() {
                    $el.removeClass("immediate");
                    $el.removeClass("highlight")
                }, 0)
            });
        $(".scroller-next, .scroller-prev").on("mousedown", function(event) {
            var $el = $(event.target).closest("a");
            if ($el.is(".inactive") || $el.is(".disabled")) return;
            $el.addClass("immediate");
            $el.addClass("highlight");
            setTimeout(function() {
                $el.removeClass("immediate");
                $el.removeClass("highlight")
            }, 0)
        });
        HomeControl.init();
        if (get_scroll().top < 100) $(".hd").removeClass("tooltips-hidden");
        var didScroll;
        var bannerDiv;
        var scrollTrigger;
        var hdHeight;
        if (!cfg.header_rework_2018 || cfg.header_rework_2018 && MediaView.mode === "desktop") {
            if (cfg.header_rework_2018) {
                bannerDiv = $(".menubar-outer");
                if (!bannerDiv[0]) bannerDiv = $(".hd");
                else bannerDiv.addClass("fixed")
            } else bannerDiv = $(".hd");
            scrollTrigger = $(".scroll-trigger");
            hdHeight = bannerDiv.outerHeight();
            $(window).scroll(function(event) {
                didScroll =
                    true;
                if (MediaView.mode === "desktop") {
                    var scroll = get_scroll();
                    if (scroll.top >= 100 && !$("body").hasClass("prevent-header-hiding")) bannerDiv.addClass("hide-tooltips");
                    else {
                        bannerDiv.removeClass("tooltips-hidden");
                        bannerDiv.removeClass("hide-tooltips")
                    }
                }
            });
            setInterval(function() {
                if (didScroll) {
                    has_scrolled();
                    didScroll = false
                }
            }, 250);
            var $userMenu = $(".menubar-2018 .user-menu");
            $userMenu.on("mouseover", function() {
                $("body").addClass("prevent-scroll")
            }).on("mouseout", function() {
                $("body").removeClass("prevent-scroll")
            })
        }
        var pgHash =
            location.hash;
        if (pgHash == "#discover") {
            $("body").addClass("scroll-detected");
            $(".hd").addClass("hide");
            $("#menubar-vm").addClass("hide");
            var $discover = $("#discover");
            $("html, body").animate({
                scrollTop: $discover.offset().top
            }, 100)
        }
        $(".discover-link").click(function(e) {
            e.preventDefault();
            Stats.record({
                kind: "click",
                click: "homepage_header_discover"
            });
            var $discover = $("#discover");
            $("html, body").animate({
                scrollTop: $discover.offset().top
            })
        });
        $(".featured-item-sticky a.app-link").click(function() {
            var theClick =
                $(this).is(".ios") ? "homepage_ios_download" : "homepage_android_download";
            Stats.record({
                kind: "click",
                click: theClick
            });
            return true
        });
        if (pgHash == "#selling-right-now") {
            $("body").addClass("scroll-detected");
            var $salesfeed = $("#salesfeed");
            $("html, body").scrollTop($salesfeed.offset().top - 120)
        }
        if (pgHash == "#newsletter") {
            $("body").addClass("scroll-detected");
            var $newsletter_signup = $("#email-intake");
            $("html, body").scrollTop($newsletter_signup.offset().top - 115)
        }
    })
})(window, jQuery, ko);
(function() {
    function EmailIntakeVM(view, initial) {
        var vm = this;
        vm.email = ko.observable(initial.email || "");
        vm.cleanmail = ko.observable(vm.email());
        vm.showoffable = ko.observable(!!initial.email);
        vm.submitable = ko.computed(function() {
            vm.cleanmail(vm.email().substring(0, 100).trim());
            return /.+@.+/.test(vm.cleanmail())
        });
        vm.submit = function() {
            $("input", view).blur();
            $(".intake", view).animate({
                opacity: 0
            }, 500);
            $(".success", view).addClass("display").animate({
                opacity: 1
            }, 500);
            setTimeout(function() {
                    $(view).fadeOut(500)
                },
                7E3);
            $.ajax({
                url: "/api/newsletter/1/signup",
                type: "POST",
                dataType: "JSON",
                data: ko.toJSON({
                    "email_address": vm.cleanmail
                })
            }).fail(function() {
                $(view).hide();
                NuDialog.alert("Error", "Sorry, there was an error.")
            })
        }
    }
    $(function() {
        var view = $("#email-intake-vm")[0];
        if (view) ko.applyBindings(new EmailIntakeVM(view, $(view).data("initial-values")), view)
    })
})();