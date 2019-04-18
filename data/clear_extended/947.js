if (typeof(PPS_DATA) == "undefined") {
    var PPS_DATA = {}
}
if (isNumber(PPS_DATA.animationSpeed)) {
    PPS_DATA.animationSpeed = parseInt(PPS_DATA.animationSpeed)
} else {
    if (jQuery.inArray(PPS_DATA.animationSpeed, ["fast", "slow"]) == -1) {
        PPS_DATA.animationSpeed = "fast"
    }
}
PPS_DATA.showSubscreenOnCenter = parseInt(PPS_DATA.showSubscreenOnCenter);
var sdLoaderImgPps = '<img src="' + PPS_DATA.loader + '" />';
var g_ppsAnimationSpeed = 300;
jQuery.fn.showLoaderPps = function() {
    return jQuery(this).html(sdLoaderImgPps)
};
jQuery.fn.appendLoaderPps = function() {
    jQuery(this).append(sdLoaderImgPps)
};
jQuery.sendFormPps = function(a) {
    return jQuery("<br />").sendFormPps(a)
};
jQuery.fn.sendFormPps = function(e) {
    var b = null;
    if (!e) {
        e = {
            fid: false,
            msgElID: false,
            onSuccess: false
        }
    }
    if (e.fid) {
        b = jQuery("#" + fid)
    } else {
        b = jQuery(this)
    }
    var c = (jQuery(b).tagName() == "FORM");
    var f = new Array();
    if (e.data) {
        f = e.data
    } else {
        if (c) {
            f = jQuery(b).serialize()
        }
    }
    if (e.appendData) {
        var h = typeof(f) == "string";
        var k = [];
        for (var g in e.appendData) {
            if (h) {
                k.push(g + "=" + e.appendData[g])
            } else {
                f[g] = e.appendData[g]
            }
        }
        if (h) {
            f += "&" + k.join("&")
        }
    }
    var d = null;
    if (e.msgElID) {
        if (e.msgElID == "noMessages") {
            d = false
        } else {
            if (typeof(e.msgElID) == "object") {
                d = e.msgElID
            } else {
                d = jQuery("#" + e.msgElID)
            }
        }
    }
    if (typeof(e.inputsWraper) == "string") {
        b = jQuery("#" + e.inputsWraper);
        c = true
    }
    if (c && b) {
        jQuery(b).find("*").removeClass("ppsInputError")
    }
    if (d && !e.btn) {
        jQuery(d).removeClass("ppsSuccessMsg").removeClass("ppsErrorMsg");
        if (!e.btn) {
            jQuery(d).showLoaderPps()
        }
    }
    if (e.btn) {
        jQuery(e.btn).attr("disabled", "disabled");
        e.btnIconElement = jQuery(e.btn).find(".fa").length ? jQuery(e.btn).find(".fa") : jQuery(e.btn);
        if (jQuery(e.btn).find(".fa").length) {
            e.btnIconElement.data("prev-class", e.btnIconElement.attr("class")).attr("class", "fa fa-spinner fa-spin")
        }
    }
    var a = "";
    if (typeof(e.url) != "undefined") {
        a = e.url
    } else {
        if (typeof(ajaxurl) == "undefined" || typeof(ajaxurl) !== "string") {
            a = PPS_DATA.ajaxurl
        } else {
            a = ajaxurl
        }
    }
    jQuery(".ppsErrorForField").hide(PPS_DATA.animationSpeed);
    var j = e.dataType ? e.dataType : "json";
    if (typeof(f) == "string") {
        f += "&pl=" + PPS_DATA.PPS_CODE;
        f += "&reqType=ajax"
    } else {
        f.pl = PPS_DATA.PPS_CODE;
        f.reqType = "ajax"
    }
    jQuery.ajax({
        url: a,
        data: f,
        type: "POST",
        dataType: j,
        success: function(i) {
            toeProcessAjaxResponsePps(i, d, b, c, e);
            if (e.clearMsg) {
                setTimeout(function() {
                    if (d) {
                        jQuery(d).animateClear()
                    }
                }, typeof(e.clearMsg) == "boolean" ? 5000 : e.clearMsg)
            }
        }
    })
};
jQuery.fn.animateClear = function() {
    var a = jQuery("<span>" + jQuery(this).html() + "</span>");
    jQuery(this).html(a);
    jQuery(a).hide(PPS_DATA.animationSpeed, function() {
        jQuery(a).remove()
    })
};
jQuery.fn.animateRemovePps = function(a, b) {
    a = a == undefined ? PPS_DATA.animationSpeed : a;
    jQuery(this).hide(a, function() {
        jQuery(this).remove();
        if (typeof(b) === "function") {
            b()
        }
    })
};

function toeProcessAjaxResponsePps(h, e, c, d, f) {
    if (typeof(f) == "undefined") {
        f = {}
    }
    if (typeof(e) == "string") {
        e = jQuery("#" + e)
    }
    if (e) {
        jQuery(e).html("")
    }
    if (f.btn) {
        jQuery(f.btn).removeAttr("disabled");
        if (f.btnIconElement) {
            f.btnIconElement.attr("class", f.btnIconElement.data("prev-class"))
        }
    }
    if (typeof(h) == "object") {
        if (h.error) {
            if (e) {
                jQuery(e).removeClass("ppsSuccessMsg").addClass("ppsErrorMsg")
            }
            var j = [];
            for (var a in h.errors) {
                if (d) {
                    var b = jQuery(c).find('[name*="' + a + '"]');
                    b.addClass("ppsInputError");
                    if (b.attr("placeholder")) {}
                    if (!b.data("keyup-error-remove-binded")) {
                        b.keydown(function() {
                            jQuery(this).removeClass("ppsInputError")
                        }).data("keyup-error-remove-binded", 1)
                    }
                }
                if (jQuery(".ppsErrorForField.toe_" + nameToClassId(a) + "").exists()) {
                    jQuery(".ppsErrorForField.toe_" + nameToClassId(a) + "").show().html(h.errors[a])
                } else {
                    if (e) {
                        jQuery(e).append(h.errors[a]).append("<br />")
                    } else {
                        j.push(h.errors[a])
                    }
                }
            }
            if (j.length && f.btn && jQuery.fn.dialog && !e) {
                jQuery('<div title="' + toeLangPps("Really small warning :)") + '" />').html(j.join("<br />")).appendTo("body").dialog({
                    modal: true,
                    width: "500px"
                })
            }
        } else {
            if (h.messages.length) {
                if (e) {
                    jQuery(e).removeClass("ppsErrorMsg").addClass("ppsSuccessMsg");
                    for (var g = 0; g < h.messages.length; g++) {
                        jQuery(e).append(h.messages[g]).append("<br />")
                    }
                }
            }
        }
    }
    if (f.onSuccess && typeof(f.onSuccess) == "function") {
        f.onSuccess(h)
    }
}

function getDialogElementPps() {
    return jQuery("<div/>").appendTo(jQuery("body"))
}

function toeOptionPps(a) {
    if (PPS_DATA.options && PPS_DATA.options[a]) {
        return PPS_DATA.options[a]
    }
    return false
}

function toeLangPps(a) {
    if (PPS_DATA.siteLang && PPS_DATA.siteLang[a]) {
        return PPS_DATA.siteLang[a]
    }
    return a
}

function toePagesPps(a) {
    if (typeof(PPS_DATA) != "undefined" && PPS_DATA[a]) {
        return PPS_DATA[a]
    }
    return false
}

function toeOptTimeoutHideDescriptionPps() {
    jQuery("#ppsOptDescription").removeAttr("toeFixTip");
    setTimeout(function() {
        if (!jQuery("#ppsOptDescription").attr("toeFixTip")) {
            toeOptHideDescriptionPps()
        }
    }, 500)
}

function toeOptShowDescriptionPps(b, a, d, c) {
    if (typeof(b) != "undefined" && b != "") {
        if (!jQuery("#ppsOptDescription").length) {
            jQuery("body").append('<div id="ppsOptDescription"></div>')
        }
        if (c) {
            jQuery("#ppsOptDescription").css("right", jQuery(window).width() - (a - 10))
        } else {
            jQuery("#ppsOptDescription").css("left", a + 10)
        }
        jQuery("#ppsOptDescription").css("top", d);
        jQuery("#ppsOptDescription").show(200);
        jQuery("#ppsOptDescription").html(b)
    }
}

function toeOptHideDescriptionPps() {
    jQuery("#ppsOptDescription").removeAttr("toeFixTip");
    jQuery("#ppsOptDescription").hide(200)
}

function toeInArrayPps(c, b) {
    if (b) {
        for (var a in b) {
            if (b[a] == c) {
                return true
            }
        }
    }
    return false
}

function toeShowDialogCustomized(b, a) {
    a = jQuery.extend({
        resizable: false,
        width: 500,
        height: 300,
        closeOnEscape: true,
        open: function(c, d) {
            jQuery(".ui-dialog-titlebar").css({
                "background-color": "#222222",
                "background-image": "none",
                border: "none",
                margin: "0",
                padding: "0",
                "border-radius": "0",
                color: "#CFCFCF",
                height: "27px"
            });
            jQuery(".ui-dialog-titlebar-close").css({
                background: 'url("' + PPS_DATA.cssPath + 'img/tb-close.png") no-repeat scroll 0 0 transparent',
                border: "0",
                width: "15px",
                height: "15px",
                padding: "0",
                "border-radius": "0",
                margin: "7px 7px 0"
            }).html("");
            jQuery(".ui-dialog").css({
                "border-radius": "3px",
                "background-color": "#FFFFFF",
                "background-image": "none",
                padding: "1px",
                "z-index": "300000",
                position: "fixed",
                top: "60px"
            });
            jQuery(".ui-dialog-buttonpane").css({
                "background-color": "#FFFFFF"
            });
            jQuery(".ui-dialog-title").css({
                color: "#CFCFCF",
                font: "12px sans-serif",
                padding: "6px 10px 0"
            });
            if (a.openCallback && typeof(a.openCallback) == "function") {
                a.openCallback(c, d)
            }
            jQuery(".ui-widget-overlay").css({
                "z-index": jQuery(c.target).parents(".ui-dialog:first").css("z-index") - 1,
                "background-image": "none"
            });
            if (a.modal && a.closeOnBg) {
                jQuery(".ui-widget-overlay").unbind("click").bind("click", function() {
                    jQuery(b).dialog("close")
                })
            }
        }
    }, a);
    return jQuery(b).dialog(a)
}

function toeSliderMove(a, b) {
    var c = jQuery(a.target).attr("id");
    jQuery("#toeSliderDisplay_" + c).html(b.value);
    jQuery("#toeSliderInput_" + c).val(b.value).change()
}

function ppsCorrectJqueryUsed() {
    return (typeof(jQuery.fn.sendFormPps) === "function")
}

function ppsReloadCoreJs(d, e) {
    var c = "",
        b = ["common.js", "core.js"];
    for (var a = 0; a < b.length; a++) {
        c += '<script type="text/javascript" class="ppsReloadedScript" src="' + PPS_DATA.jsPath + b[a] + '"><\/script>'
    }
    jQuery("head").append(c);
    if (d) {
        _ppsRunClbAfterCoreReload(d, e)
    }
}

function _ppsRunClbAfterCoreReload(a, b) {
    if (ppsCorrectJqueryUsed()) {
        callUserFuncArray(a, b);
        return
    }
    setTimeout(function() {
        ppsCorrectJqueryUsed(a, b)
    }, 500)
};