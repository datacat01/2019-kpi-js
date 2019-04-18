var domains_to_track = ["ca.gov"];
var folders_to_track = "";
var extDoc = [".doc", ".docx", ".xls", ".xlsx", ".xlsm", ".ppt", ".pptx", ".exe", ".zip", ".pdf", ".js", ".txt", ".csv"];
var socSites = "flickr.com/groups/californiagovernment|twitter.com/cagovernment|pinterest.com/cagovernment|youtube.com/user/californiagovernment";
var isSubDomainTracker = false;
var isSeparateDomainTracker = false;
var isGTM = false;
var isLegacy = true;
var eValues = {
    downloads: {
        category: "Downloads",
        action: "Download",
        label: "",
        value: 0,
        nonInteraction: 0
    },
    outbound_downloads: {
        category: "Outbound Downloads",
        action: "Download",
        label: "",
        value: 0,
        nonInteraction: 0
    },
    outbounds: {
        category: "Outbound Links",
        action: "Click",
        label: "",
        value: 0,
        nonInteraction: 0
    },
    email: {
        category: "Email Clicks",
        action: "Click",
        label: "",
        value: 0,
        nonInteraction: 0
    },
    outbound_email: {
        category: "Outbound Email Clicks",
        action: "Click",
        label: "",
        value: 0,
        nonInteraction: 0
    },
    telephone: {
        category: "Telephone Clicks",
        action: "Click",
        label: "",
        value: 0,
        nonInteraction: 0
    },
    social: {
        category: "Social Profiles",
        action: "Click",
        label: "",
        value: 0,
        nonInteraction: 0
    }
};
var mainDomain = document.location.hostname.match(/(([^.\/]+\.[^.\/]{2,3}\.[^.\/]{2})|(([^.\/]+\.)[^.\/]{2,4}))(\/.*)?$/)[1];
mainDomain = mainDomain.toLowerCase();
if (isSubDomainTracker == true) {
    mainDomain = document.location.hostname.replace("www.", "").toLowerCase()
}
var arr = document.getElementsByTagName("a");
for (i = 0; i < arr.length; i++) {
    var flag = 0;
    var mDownAtt = arr[i].getAttribute("onmousedown");
    var doname = "";
    var linkType = "";
    var mailPattern = /^mailto\:[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/i;
    var urlPattern = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i;
    var telPattern = /^tel\:(.*)([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i;
    if (mailPattern.test(arr[i].href) || urlPattern.test(arr[i].href) || telPattern.test(arr[i].href)) {
        try {
            if (urlPattern.test(arr[i].href) && !mailPattern.test(arr[i].href) && !telPattern.test(arr[i].href)) {
                doname = arr[i].hostname.toLowerCase().replace("www.", "");
                linkType = "url"
            } else {
                if (mailPattern.test(arr[i].href) && !telPattern.test(arr[i].href) && !urlPattern.test(arr[i].href)) {
                    doname = arr[i].href.toLowerCase().split("@")[1];
                    linkType = "mail"
                } else {
                    if (telPattern.test(arr[i].href) && !urlPattern.test(arr[i].href) && !mailPattern.test(arr[i].href)) {
                        doname = arr[i].href.toLowerCase();
                        linkType = "tel"
                    }
                }
            }
        } catch (err) {
            continue
        }
    } else {
        continue
    }
    if (mDownAtt != null) {
        mDownAtt = String(mDownAtt);
        if (mDownAtt.indexOf("dataLayer.push") > -1 || mDownAtt.indexOf("('send'") > -1) {
            continue
        }
    }
    var condition = false;
    if (isSeparateDomainTracker) {
        condition = (doname == mainDomain)
    } else {
        condition = (doname.indexOf(mainDomain) != -1)
    }
    if (condition) {
        if (linkType === "mail") {
            eValues.email.label = arr[i].href.toLowerCase().match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/i);
            _tagLinks(arr[i], eValues.email.category, eValues.email.action, eValues.email.label, eValues.email.value, eValues.email.nonInteraction, mDownAtt)
        } else {
            if (linkType === "url") {
                if (folders_to_track == "" || _isInternalFolder(arr[i].href)) {
                    if (_isDownload(arr[i].href)) {
                        _setDownloadData(arr[i].href, doname);
                        _tagLinks(arr[i], eValues.downloads.category, eValues.downloads.action, eValues.downloads.label, eValues.downloads.value, eValues.downloads.nonInteraction, mDownAtt)
                    }
                } else {
                    if (_isDownload(arr[i].href)) {
                        _setDownloadData(arr[i].href, doname);
                        _tagLinks(arr[i], eValues.outbound_downloads.category, eValues.outbound_downloads.action, eValues.outbound_downloads.label, eValues.outbound_downloads.value, eValues.outbound_downloads.nonInteraction, mDownAtt)
                    } else {
                        eValues.outbounds.label = arr[i].href.toLowerCase().replace("www.", "").split("//")[1];
                        _tagLinks(arr[i], eValues.outbounds.category, eValues.outbounds.action, eValues.outbounds.label, eValues.outbounds.value, eValues.outbounds.nonInteraction, mDownAtt)
                    }
                }
            }
        }
    } else {
        for (var k = 0; k < domains_to_track.length; k++) {
            var condition1 = false;
            if (isSeparateDomainTracker) {
                condition1 = (doname == domains_to_track[k])
            } else {
                condition1 = (doname.indexOf(domains_to_track[k]) != -1)
            }
            if (!condition1) {
                flag++;
                if (flag == domains_to_track.length) {
                    if (linkType === "mail") {
                        eValues.outbound_email.label = arr[i].href.toLowerCase().match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/);
                        _tagLinks(arr[i], eValues.outbound_email.category, eValues.outbound_email.action, eValues.outbound_email.label, eValues.outbound_email.value, eValues.outbound_email.nonInteraction, mDownAtt)
                    }
                    if (linkType === "tel") {
                        eValues.telephone.label = arr[i].href.toLowerCase().split("tel:")[1];
                        _tagLinks(arr[i], eValues.telephone.category, eValues.telephone.action, eValues.telephone.label, eValues.telephone.value, eValues.telephone.nonInteraction, mDownAtt)
                    }
                    if (linkType === "url") {
                        if (_isDownload(arr[i].href)) {
                            _setDownloadData(arr[i].href, doname);
                            _tagLinks(arr[i], eValues.outbound_downloads.category, eValues.outbound_downloads.action, eValues.outbound_downloads.label, eValues.outbound_downloads.value, eValues.outbound_downloads.nonInteraction, mDownAtt)
                        } else {
                            if (_isSocial(arr[i].href)) {
                                eValues.social.label = arr[i].href.toLowerCase().replace("www.", "").split("//")[1];
                                eValues.social.action = eValues.social.label.split(".")[0];
                                _tagLinks(arr[i], eValues.social.category, eValues.social.action, eValues.social.label, eValues.social.value, eValues.social.nonInteraction, mDownAtt)
                            } else {
                                eValues.outbounds.label = arr[i].href.toLowerCase().replace("www.", "").split("//")[1];
                                _tagLinks(arr[i], eValues.outbounds.category, eValues.outbounds.action, eValues.outbounds.label, eValues.outbounds.value, eValues.outbounds.nonInteraction, mDownAtt)
                            }
                        }
                    }
                }
            } else {
                if (linkType === "mail") {
                    eValues.email.label = arr[i].href.toLowerCase().match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/i);
                    _tagLinks(arr[i], eValues.email.category, eValues.email.action, eValues.email.label, eValues.email.value, eValues.email.nonInteraction, mDownAtt)
                } else {
                    if (linkType === "url") {
                        if (folders_to_track == "" || _isInternalFolder(arr[i].href)) {
                            if (_isDownload(arr[i].href)) {
                                _setDownloadData(arr[i].href, doname);
                                _tagLinks(arr[i], eValues.downloads.category, eValues.downloads.action, eValues.downloads.label, eValues.downloads.value, eValues.downloads.nonInteraction, mDownAtt)
                            } else {}
                        } else {
                            if (_isDownload(arr[i].href)) {
                                _setDownloadData(arr[i].href, doname);
                                _tagLinks(arr[i], eValues.outbound_downloads.category, eValues.outbound_downloads.action, eValues.outbound_downloads.label, eValues.outbound_downloads.value, eValues.outbound_downloads.nonInteraction, mDownAtt)
                            } else {
                                eValues.outbounds.label = arr[i].href.replace("www.", "").split("//")[1];
                                _tagLinks(arr[i], eValues.outbounds.category, eValues.outbounds.action, eValues.outbounds.label, eValues.outbounds.value, eValues.outbounds.nonInteraction, mDownAtt)
                            }
                        }
                    }
                }
            }
        }
    }
}

function _isSocial(a) {
    if (socSites != "") {
        if (a.toLowerCase().replace(/[+#]/, "").match(new RegExp("^(.*)(" + socSites.toLowerCase() + ")(.*)$")) != null) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

function _isInternalFolder(a) {
    if (folders_to_track != "") {
        if (a.toLowerCase().match(new RegExp("^(.*)(" + folders_to_track + ")(.*)$")) != null) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

function _isDownload(a) {
    var c = 0;
    for (var b = 0; b < extDoc.length; b++) {
        var e = a.split(".");
        var d = e[e.length - 1].split(/[#?&?]/);
        if ("." + d[0].toLowerCase() == extDoc[b]) {
            return true;
            break
        } else {
            c++;
            if (c == extDoc.length) {
                return false
            }
        }
    }
}

function _setDownloadData(a, d) {
    var f = a.toLowerCase().split(".");
    var c = f[f.length - 1].split(/[#?&?]/);
    var b = a.toLowerCase().split(d);
    var e = b[1].split(/[#?&?]/);
    eValues.downloads.action = eValues.outbound_downloads.action = c;
    eValues.downloads.label = eValues.outbound_downloads.label = e
}

function _tagLinks(b, e, f, a, c, g, d) {
    if (isGTM) {
        b.setAttribute("onmousedown", "" + ((d != null) ? d + "; " : "") + "dataLayer.push({'event': 'eventTracker', 'eventCat': '" + e + "', 'eventAct':'" + f + "', 'eventLbl': '" + a + "', 'eventVal': " + c + ", 'nonInteraction': " + g + "});")
    } else {
        if (!isLegacy) {
            b.setAttribute("onmousedown", "" + ((d != null) ? d + "; " : "") + "ga('send', 'event', '" + e + "', '" + f + "', '" + a + "', " + c + ", {nonInteraction:(" + g + " == 0) ? false : true});")
        } else {
            b.setAttribute("onmousedown", "" + ((d != null) ? d + "; " : "") + "_gaq.push(['_trackEvent', '" + e + "', '" + f + "', '" + a + "', " + c + ", " + g + "]); _gaq.push(['b._trackEvent', '" + e + "', '" + f + "', '" + a + "', " + c + ", " + g + "]);")
        }
    }
};