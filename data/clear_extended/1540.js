(function() {
    window['NICE'] = {};

    /*
    	The following notIeCheck(), ie7Check() and ie6Check() 
    	functions require the "BrowserDetect" object function 
    	in order to work. It can be downloaded from 
    	http://www.quirksmode.org/js/detect.html.
    */

    function notSafariCheck() {
        var notIe = (BrowserDetect.browser != 'Safari') ? true : false;
        return notIe;
    }
    window['NICE']['notSafariCheck'] = notSafariCheck;

    function notIpadCheck() {
        var notIpad = (BrowserDetect.OS != 'iPad') ? true : false;
        return notIpad;
    }
    window['NICE']['notIpadCheck'] = notIpadCheck;

    function notIphoneCheck() {
        var notIphone = (BrowserDetect.OS != 'iPhone/iPod') ? true : false;
        return notIphone;
    }
    window['NICE']['notIphoneCheck'] = notIphoneCheck;

    function notIeCheck() {
        var notIe = (BrowserDetect.browser != 'Explorer') ? true : false;
        return notIe;
    }
    window['NICE']['notIeCheck'] = notIeCheck;

    function ie8Check() {
        var isIe8 = ((BrowserDetect.browser == 'Explorer') && (BrowserDetect.version >= 8) && (BrowserDetect.version < 9)) ? true : false;
        return isIe8;
    }
    window['NICE']['ie8Check'] = ie8Check;

    function ie7Check() {
        var isIe7 = ((BrowserDetect.browser == 'Explorer') && (BrowserDetect.version >= 7) && (BrowserDetect.version < 8)) ? true : false;
        return isIe7;
    }
    window['NICE']['ie7Check'] = ie7Check;

    function ie6Check() {
        var isIe6 = ((BrowserDetect.browser == 'Explorer') && (BrowserDetect.version < 7)) ? true : false;
        return isIe6;
    }
    window['NICE']['ie6Check'] = ie6Check;

    function macSafariCheck() {
        var macSafari = ((BrowserDetect.browser == 'Safari') && (BrowserDetect.OS == 'Mac')) ? true : false;
        return macSafari;
    }
    window['NICE']['macSafariCheck'] = macSafariCheck;

    function rootPath(ind) {
        /*
        	The value of ind should be whatever the class is for the <body> tag 
        	on the index.html page.
        */
        var rp = null;
        if (window.Prototype) // Checking for Prototype library
            rp = (jQuery('body')[0].hasClassName(ind) == true) ? '' : '../';
        else if (window.jQuery) // Checking for jQuery library
            rp = (jQuery('body').hasClass(ind) == true) ? '' : '../';
        return rp;
    }
    window['NICE']['rootPath'] = rootPath;

    function buttonHovers(img) {
        if (window.Prototype) { // Checking for Prototype library
            jQuery('img').each(function(g) {
                if (g.readAttribute('src').split('_off')[0] == img) {
                    var file = g.readAttribute('src').split('_off');
                    g.observe('mouseover', function() {
                        this.writeAttribute({
                            src: file[0] + '_on' + file[1]
                        })
                    });
                    g.observe('mouseout', function() {
                        this.writeAttribute({
                            src: file[0] + '_off' + file[1]
                        })
                    });
                }
            });
        } else if (window.jQuery) { // Checking for jQuery library
            jQuery.each(jQuery('img'), function() {
                if (jQuery(this).attr('src').split('_off')[0] == img) {
                    var file = jQuery(this).attr('src').split('_off');
                    jQuery(this).hover(function() {
                        jQuery(this).attr('src', file[0] + '_on' + file[1]);
                    }, function() {
                        jQuery(this).attr('src', file[0] + '_off' + file[1]);
                    });
                }
            });
        }
    }
    // window['NICE']['butHovDirect'] = buttonHovers;
    function setButtonHovers(buttons) {
        // if (ie6 == false) {
        if (window.Prototype) { // Checking for Prototype library
            buttons.each(function(b) {
                buttonHovers(b);
            });
        } else if (window.jQuery) { // Checking for jQuery library
            jQuery.each(buttons, function() {
                buttonHovers(this);
            });
        }
        // }
    }
    window['NICE']['buttonHovers'] = setButtonHovers;

    function altTableRows(trPath, colour) {
        if (window.Prototype) { // Checking for Prototype library
            jQuery(trPath).each(function(tr, i) {
                if (0 != i % 2) {
                    tr.childElements().each(function(td) {
                        td.setStyle('background-color: ' + colour + ';');
                    });
                }
            });
        } else if (window.jQuery) { // Checking for jQuery library
            jQuery(trPath + ':odd td').css({
                'background-color': colour
            });
        }
    }
    window['NICE']['altTableRows'] = altTableRows;

    function blurNiceSelect(selDiv) {
        if (window.Prototype) { // Checking for Prototype library
            setTimeout('jQuery("#' + selDiv + ' div.selClone ul").each(function(ul) {ul.hide();});', 200);
            setTimeout('jQuery("#' + selDiv + ' div.selClone a.selOpt").each(function(a) {a.toggleClassName("soOpen");});', 200);
        } else if (window.jQuery) { // Checking for jQuery library
            /*setTimeout('jQuery("#' + selDiv + ' div.selClone ul").hide();', 200);
            setTimeout('jQuery("#' + selDiv + ' div.selClone a.selOpt").removeClass("soOpen");', 200);*/
            jQuery('#' + selDiv + ' div.selClone ul').hide();
            jQuery('#' + selDiv + ' div.selClone a.selOpt').removeClass('soOpen');
        }
    }
    window['NICE']['blurNiceSelect'] = blurNiceSelect;

    function openCloseNiceSelect(selDiv) {
        if (window.Prototype) { // Checking for Prototype library
            jQuery('#' + selDiv + ' div.selClone ul').each(function(ul) {
                ul.toggle();
            });
            jQuery('#' + selDiv + ' div.selClone a.selOpt').each(function(a) {
                a.toggleClassName('soOpen');
            });
        } else if (window.jQuery) { // Checking for jQuery library
            jQuery('#' + selDiv + ' div.selClone ul').toggle();
            jQuery('#' + selDiv + ' div.selClone a.selOpt').toggleClass('soOpen');
        }
    }
    window['NICE']['openCloseNiceSelect'] = openCloseNiceSelect;

    function valUpdate(selDiv, pos, val, string) {
        if (window.Prototype) { // Checking for Prototype library
            jQuery('#' + selDiv + ' div.selClone a.selOpt span').each(function(s) {
                s.update(string);
            });
            jQuery('#' + selDiv + ' div.selClone ul').each(function(ul) {
                ul.writeAttribute('class', val);
            });
            jQuery('#' + selDiv.split('-')[0] + ' option').each(function(o, i) {
                if (o.readAttribute('value') == val)
                    o.writeAttribute('selected', 'selected');
            });
        } else if (window.jQuery) { // Checking for jQuery library
            jQuery('#' + selDiv + ' div.selClone a.selOpt span').html(string);
            jQuery('#' + selDiv + ' div.selClone ul').attr('class', val);
            jQuery.each(jQuery('#' + selDiv.split('-')[0] + ' option'), function(i) {
                if (jQuery(this).attr('value') == val)
                    jQuery(this).attr('selected', 'selected');
            });
        }
        openCloseNiceSelect(selDiv);
    }
    window['NICE']['valUpdate'] = valUpdate;

    function niceSelect(selectId) {
        var optsVals = {};
        var leadOpt = null;
        if (window.Prototype) { // Checking for Prototype library
            jQuery('#' + selectId + ' option').each(function(o, i) {
                optsVals[i] = [];
                optsVals[i].value = o.readAttribute('value');
                optsVals[i].string = o.innerHTML;
                if (o.readAttribute('selected') == true) {
                    leadOpt = o.innerHTML;
                }
            });
            if (leadOpt == null)
                leadOpt = optsVals[0].string;
            var selWrapId = jQuery(selectId).readAttribute('id') + '-wrap';
            jQuery(selectId).wrap('div', {
                id: selWrapId,
                'class': 'niceSelectWrap'
            });
            jQuery(selectId).hide();
            jQuery(selWrapId).insert('<div class="selClone"><a href="" class="selOpt"><span></span></a><ul class="" style="display: none;"></ul></div>');
            /*
            	The above .insert() function creates the following XHTML mark-up 
            	inside the jQuery(selWrapId) div...
            	
            	<div class="selClone">
            		<a href="" class="selOpText"><span></span></a>
            		<ul>
            		</ul>
            	</div>
            */
            jQuery('#' + selWrap + ' div.selClone').each(function(d) {
                d.observe('mouseout', function(d) {
                    if (jQuery('#' + selWrap + ' div.selClone a.selOpt').hasClass('soOpen'))
                        openCloseNiceSelect(selWrap);
                });
            });
            jQuery('#' + selWrapId + ' div.selClone a.selOpt').each(function(a) {
                a.writeAttribute('href', 'javascript:NICE.openCloseNiceSelect("' + selWrapId + '");').down().insert(leadOpt);
            });
            jQuery('#' + selWrapId + ' div.selClone ul').each(function(ul) {
                ul.writeAttribute('class', optsVals[0].value);
            });
            jQuery('#' + selectId + ' option').each(function(o, i) {
                jQuery('#' + selWrapId + ' div.selClone ul')[0].insert('<li class="' + optsVals[i].value + '"><a href="javascript:NICE.valUpdate(\'' + selWrapId + '\', ' + i + ', \'' + optsVals[i].value + '\', \'' + optsVals[i].string + '\');"><span>' + optsVals[i].string + '</span></a></li>');
            });
        } else if (window.jQuery) { // Checking for jQuery library
            var $sel = jQuery('#' + selectId);
            var $opts = jQuery('#' + selectId + ' option');
            jQuery.each($opts, function(i) {
                optsVals[i] = [];
                optsVals[i].value = jQuery(this).attr('value');
                optsVals[i].string = jQuery(this).html();
                if (jQuery(this).attr('selected') == true) {
                    leadOpt = jQuery(this).html();
                }
            });
            if (leadOpt == null)
                leadOpt = optsVals[0].string;
            var selWrap = $sel.attr('id') + '-wrap';
            $sel.wrap('<div></div>').parent().attr('id', selWrap).attr('class', 'niceSelectWrap');
            $sel.hide();
            var $selWrap = jQuery('#' + selWrap);
            $selWrap.append('<div class="selClone"><a href="" class="selOpt"><span></span></a><ul class="" style="display: none;"></ul></div>');
            /*
            	The above .insert() function creates the following XHTML mark-up 
            	inside the $selWrap div...
            	
            	<div class="selClone">
            		<a href="" class="selOpText"><span></span></a>
            		<ul>
            		</ul>
            	</div>
            */
            jQuery('#' + selWrap + ' div.selClone').mouseleave(function() {
                if (jQuery('#' + selWrap + ' div.selClone a.selOpt').hasClass('soOpen'))
                    openCloseNiceSelect(selWrap);
            });
            jQuery('#' + selWrap + ' div.selClone a.selOpt').attr({
                'href': 'javascript:NICE.openCloseNiceSelect("' + selWrap + '");'
            }).children('span').html(leadOpt);
            jQuery('#' + selWrap + ' div.selClone ul').attr('class', optsVals[0].value);
            jQuery.each($opts, function(i) {
                jQuery('#' + selWrap + ' div.selClone ul').append('<li class="' + optsVals[i].value + '"><a href="javascript:NICE.valUpdate(\'' + selWrap + '\', ' + i + ', \'' + optsVals[i].value + '\', \'' + optsVals[i].string + '\');"><span>' + optsVals[i].string + '</span></a></li>');
            });




            /*jQuery('#' + selWrap + ' div.selClone a.selOpt ul').blur(function() {
            	//window.alert(jQuery(this).siblings('ul').focus());
            	if (jQuery(this).siblings('ul').focus()) {
            		jQuery(this).removeClass('soOpen');
            		jQuery(this).siblings('ul').hide();
            	}
            });*/


        }
    }
    window['NICE']['niceSelect'] = niceSelect;

    function loadFuncs(funcs) {
        if (window.Prototype) { // Checking for Prototype library
            funcs.each(function(f) {
                document.observe("dom:loaded", f);
            });
        }
    }
    window['NICE']['loadFuncs'] = loadFuncs;
})();

function textInputTextColour(id) {
    var attrValue = jQuery('#' + id).attr('value');
    jQuery('#' + id).focus(function() {
        if (jQuery(this).attr('value') == attrValue) {
            jQuery(this).attr('value', '');
            jQuery(this).css('color', '#333');
        }
    });
    jQuery('#' + id).blur(function() {
        if (jQuery(this).attr('value') == '') {
            jQuery(this).attr('value', attrValue);
            jQuery(this).css('color', '#767676');
        }
    });
}

function showHideAnswers() {
    /*jQuery.each(jQuery('#resRight div.middle ul.domainsList li.domainPrice div.buyFrom'), function() {
    	var lisHeight = 0;
    	jQuery.each(jQuery(this).children('ul').children('li'), function() {
    		lisHeight += 40;
    	});
    	jQuery(this).css('height', (lisHeight + 33) + 'px').hide();
    });
    */
    jQuery('#helpList li.hlLi h2 a.showHide').click(function() {
        if (jQuery(this).hasClass('closed')) {
            jQuery(this).attr('class', 'showHide open').parent().siblings('div.answer').slideDown(500, function() {
                jQuery(this).siblings('a.detail').show();
            });
        } else {
            jQuery(this).parent().siblings('a.detail').hide();
            jQuery(this).attr('class', 'showHide closed').parent().siblings('div.answer').slideUp(500);
        }
        return false;
    })

    jQuery('#helpList li.hlLi div.answer p.close a').click(function() {
        jQuery(this).parents('li.hlLi').children('a.detail').hide();
        jQuery(this).parents('li.hlLi').children('h2').children('a.showHide').attr('class', 'showHide closed');
        jQuery(this).parents('div.answer').slideUp(500);
        return false;
    })
}

function showHideAnswers() {
    /*jQuery.each(jQuery('#resRight div.middle ul.domainsList li.domainPrice div.buyFrom'), function() {
    	var lisHeight = 0;
    	jQuery.each(jQuery(this).children('ul').children('li'), function() {
    		lisHeight += 40;
    	});
    	jQuery(this).css('height', (lisHeight + 33) + 'px').hide();
    });
    */
    jQuery('#helpList li.hlLi h2 a.showHide').click(function() {
        if (jQuery(this).hasClass('closed')) {
            jQuery(this).attr('class', 'showHide open').parent().siblings('div.answer').slideDown(500, function() {
                jQuery(this).siblings('a.detail').show();
            });
        } else {
            jQuery(this).parent().siblings('a.detail').hide();
            jQuery(this).attr('class', 'showHide closed').parent().siblings('div.answer').slideUp(500);
        }
        return false;
    })

    jQuery('#helpList li.hlLi div.answer p.close a').click(function() {
        jQuery(this).parents('li.hlLi').children('a.detail').hide();
        jQuery(this).parents('li.hlLi').children('h2').children('a.showHide').attr('class', 'showHide closed');
        jQuery(this).parents('div.answer').slideUp(500);
        return false;
    })
}

function answerPop() {
    jQuery('#leadImg img.imgAnswer').css({
        'width': '1px',
        'height': '1px',
        'left': '402px',
        'top': '246px'
    }).show().animate({
        'width': '225px',
        'height': '57px',
        'left': '290px',
        'top': '218px'
    }, 1000, 'easeOutElastic');
}

function questionPop() {
    jQuery('#leadImg img.imgQuestion').css({
        'width': '1px',
        'height': '1px',
        'left': '235px',
        'top': '207px'
    }).show().animate({
        'width': '176px',
        'height': '58px',
        'left': '147px',
        'top': '178px'
    }, 1000, 'easeOutElastic');
}

function qaPop() {
    if (ie6) {
        jQuery('#bubQuestion').remove();
        jQuery('#bubAnswer').remove();
    } else {
        jQuery('#ie6BubQuestion').remove();
        jQuery('#ie6BubAnswer').remove();
    }
    setTimeout('questionPop();', 4000);
    setTimeout('answerPop();', 7000);
}