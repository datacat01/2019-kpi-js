// �����ѹ�
function jf_ChgImg(pMenu, pImgType, pMode) {
    document.images[pMenu].src = "./img/" + pMode + pMenu + pImgType + ".gif";
}


// �����ɤ߹��߼��Ի�
function errImg(imgObj) {
    if (imgObj.src != imgObj.src.replace('http:\/\/www0.acc.shop-pro.jp\/www\/', '')) {
        imgObj.src = imgObj.src.replace('http:\/\/www0.acc.shop-pro.jp\/www\/', '');
    } else if (imgObj.src != imgObj.src.replace('https:\/\/sv1.acc.shop-pro.jp\/www\/', '')) {
        imgObj.src = imgObj.src.replace('https:\/\/sv1.acc.shop-pro.jp\/www\/', '');
    }
}


$(function($) {

    // �إå�����˥塼���ɥ��åץ�����
    $('.h_nav_wrap').hover(function() {
        $(this).children('.h_nav_list_wrap_shadow').show();
        $(this).find('.h_nav_parent').addClass('header_nav_bg_white');
        $(this).find('.h_nav_parent').removeClass('h_nav_normal');
    }, function() {
        $(this).children('.h_nav_list_wrap_shadow').hide();
        $(this).find('.h_nav_parent').removeClass('header_nav_bg_white');
        $(this).find('.h_nav_parent').addClass('h_nav_normal');
    });

    // ���֥�åȡ����ޥ��ѥ��饤�ɥ������˥塼
    $('#icon_header_nav_sp').click(function() {
        if ($(this).hasClass('active_header_nav_sp')) {
            $(this).removeClass('active_header_nav_sp');
            $('#header_nav_sp_wrap').slideUp('fast');
        } else {
            $(this).addClass('active_header_nav_sp');
            $('#header_nav_sp_wrap').slideDown('fast');
        }
    });


    // �֥饦�����������礭���ʤä����˥塼��ɽ��
    $(window).resize(function() {
        var w = $(window).width();
        if (w > 767) {
            $('#icon_header_nav_sp').removeClass('active_header_nav_sp');
            $('#header_nav_sp_wrap').hide();
        }
    });


    // IE version check
    var uaModal = window.navigator.appVersion.toLowerCase();
    var uaModalNum;
    if (uaModal.indexOf('msie 7.') != -1) {
        uaModalNum = 7;
    } else if (uaModal.indexOf('msie 8.') != -1) {
        uaModalNum = 8;
    } else if (uaModal.indexOf('msie 9.') != -1) {
        uaModalNum = 9;
    } else if (uaModal.indexOf('msie 10.') != -1) {
        uaModalNum = 10;
    }

    // IE10 check
    function checkIE10() {
        return uaModalNum >= 10;
    }

    // IE9 check
    function checkIE9() {
        return uaModalNum == 9;
    }

    // IE8 check
    function checkIE8() {
        return uaModalNum == 8;
    }

    // IE7 check
    function checkIE7() {
        return uaModalNum == 7;
    }


    // ������ɥ��������ǥ������������ѹ�
    var adjustmentNum;
    var windowSize = $(window).width();
    if (windowSize > 480) {
        adjustmentNum = 115;
    } else {
        adjustmentNum = 10;
    }

    var scrollSpeed = 500;


    // �ڡ����⥹��������
    $('.link_anchor').click(function() {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        if (target.length == 0) {
            return;
        }
        var position = target.offset().top - adjustmentNum;
        $('html,body').animate({
            scrollTop: position
        }, scrollSpeed, 'swing');
    });

    // ���󥫡���󥯰���Ĵ��
    function anchorLink() {
        if (location.hash) {
            $(window).load(function() {
                var hashArr = location.hash.split('#');
                var hash = hashArr[1];
                if (hash.length == 0) {
                    return;
                }
                var $targetObj = $('a[name=' + hash + ']');
                if (!$targetObj.size()) {
                    $targetObj = $('#' + hash);
                }
                var position = $targetObj.offset().top - adjustmentNum;
                $('html,body').animate({
                    scrollTop: position
                }, scrollSpeed, 'swing');
            });
        }
    }

    // �����ѻ���
    var ua = window.navigator.appVersion.toLowerCase();
    $(function() {
        if (checkIE7() || checkIE8()) {
            $('img').each(function() {
                var src = $(this).attr('src');
                if (src.indexOf('.png') != -1) {
                    $(this).css({
                        'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + src + '", sizingMethod="scale");'
                    });
                }
            });
        }
    });
    $('.info_ex').hide();
    $('.block_ex_wrap').hover(
        function() {
            $(this).children('.info_ex').stop().fadeIn(300);
        },
        function() {
            $(this).children('.info_ex').stop().fadeOut(200);
        }
    );
    $('.info_ex').click(function() {
        window.open($(this).find("a").attr("href"), '_blank');
        return false;
    });


    // ���֥�˥塼���
    $('a.menu_sub_link').hover(
        function() {
            $(this).addClass('gn_bg_white01');
            $(this).css("border-bottom", "#ffffff solid 3px");
        },
        function() {
            $(this).removeClass('gn_bg_white01');
            $(this).css("border-bottom", "#EBFCFF solid 3px");
        }
    );


    // ���̵��
    $('a.link_rf').click(function() {
        return false;
    })


    // �����ܥ���
    $('.btn_signup_normal').click(function() {
        var action_txt = '�̾�';
        var url_txt = $(this).attr('href');
        submit_analytics(action_txt, url_txt);
    });

    $('.btn_signup_initial_a').click(function() {
        var action_txt = '���̵�� �����ڡ���';
        var url_txt = $(this).attr('href');
        submit_analytics(action_txt, url_txt);
    });

    $('.btn_signup_initial_b').click(function() {
        var action_txt = '���̵�� ����';
        var url_txt = $(this).attr('href');
        submit_analytics(action_txt, url_txt);
    });

    $('.btn_signup').click(function() {
        var action_txt = $('h1').text();
        var url_txt = location.href;
        submit_analytics(action_txt, url_txt);
    });

    function submit_analytics(action_txt, url_txt) {
        var url_cut = url_txt.slice(26);
        var action = action_txt;
        _gaq.push(['_trackEvent', 'btn-signup', action, url_cut]);
    }


    // �ڥѥܥեå���
    $('#ppb_group_logo a').click(function() {
        var action;
        var txt;
        action = '�ڥѥܥ���';
        txt = '�ڥѥܥ����ݥ쥤��'
        _gaq.push(['_trackEvent', 'ppb-footer', action, txt]);
    });

    $('#ppb_group_link_wrap a').click(function() {
        var action;
        var txt;
        action = $(this).text();
        txt = $(this).attr('title');
        _gaq.push(['_trackEvent', 'ppb-footer', action, txt]);
    });

    anchorLink();


    // modal slide
    var $thumbnailArr = [];
    var $modalArr = [];
    var paramArr = [];
    var modalTimeout = 500;
    var modalContTimeout = 300;
    var index;
    if ($('.modal_area')) {
        var lmUrl = $('.link_modal_signup').attr('href');
    }


    function modalArraySet() {
        $('.modal_thumbnail_list').each(function(i) {
            $thumbnailArr[i] = $('.modal_thumbnail_list').eq(i);
            paramArr[i] = $(this).attr('class');
        });

        $('.modal_list').each(function(i) {
            $modalArr[i] = $('.modal_list').eq(i);
        });
    }

    function modalArrayHide() {
        for (var i = 0; i < $modalArr.length; i++) {
            $modalArr[i].hide();
        }
    }

    function paramSet(indexNumber) {
        var pageUrl = location.href;
        if (pageUrl.indexOf('?mode=') != -1) {
            var pageUrlArr = pageUrl.split('?mode=');
            var paramUrl = pageUrlArr[1];
        } else if (pageUrl.indexOf('example') != -1) {
            var paramUrl = 'example';
        } else {
            var paramUrl = 'top';
        }
        var exClassArr = paramArr[indexNumber].split(' ');
        var exClass = exClassArr[1].replace('modal_thumbnail_list_', '');
        if ($('body').hasClass('button_color')) {
            var exClass = exClass + '&set=color';
        }
        $('.link_modal_signup').attr('href', lmUrl + '&via=' + paramUrl + '_modal_' + exClass);
    }

    function modalTrigger(indexNum) {
        $('.modal_bg').show();
        paramSet(indexNum);
        modalArrayHide();
        $modalArr[indexNum].removeClass('fadeInRight fadeInLeft fadeOutRight fadeOutLeft').show();
        $('.modal_area').show().removeClass('fadeOutDown').addClass('fadeInUp');
    }

    $('.modal_thumbnail_list').click(function() {
        index = $('.modal_thumbnail_list').index(this);
        modalTrigger(index);
    });

    // for giga example
    $('.giga_example').click(function() {
        var gigaExArr = $(this).attr('class').split(' ');
        index = gigaExArr[1].replace('giga_example', '');
        console.log(index);
        modalTrigger(index);
        return false;
    });


    $('.modal_slide').click(function() {
        if ($(this).hasClass('modal_slide_left')) {
            if (checkIE9() || checkIE8() || checkIE7()) {
                alert('modal_slide_left');
                $('.modal_list').fadeOut();
            } else {
                $modalArr[index].removeClass('fadeInRight fadeInLeft').addClass('fadeOutRight');
            }
            if (index > 0) {
                index--;
            } else if (index <= 0) {
                index = ($modalArr.length - 1);
            }
            if (checkIE9() || checkIE8() || checkIE7()) {
                $('.modal_list').eq(index).fadeIn();
            } else {
                setTimeout(function() {
                    $modalArr[index].show().removeClass('fadeOutRight fadeOutLeft').addClass('fadeInLeft');
                }, modalContTimeout);
            }
        } else if ($(this).hasClass('modal_slide_right')) {
            if (checkIE9() || checkIE8() || checkIE7()) {
                $('.modal_list').fadeOut();
            } else {
                $modalArr[index].removeClass('fadeInRight fadeInLeft').addClass('fadeOutLeft');
            }
            if (index < ($modalArr.length - 1)) {
                index++;
            } else if (index >= $modalArr.length - 1) {
                index = 0;
            }
            if (checkIE9() || checkIE8() || checkIE7()) {
                $('.modal_list').eq(index).fadeIn();
            } else {
                setTimeout(function() {
                    $modalArr[index].show().removeClass('fadeOutRight fadeOutLeft').addClass('fadeInRight');
                }, modalContTimeout);
            }
        }
        paramSet(index);
        return false;
    });

    $('.modal_close_wrap').click(function() {
        $('.link_modal_signup').attr('href', lmUrl);
        $('.modal_area').removeClass('fadeInUp').addClass('fadeOutDown');
        setTimeout(function() {
            $('.modal_bg').hide();
            $('.modal_area').hide();
        }, modalTimeout);
    });

    if ($('.modal_area').size() != -1) {
        modalArraySet();
    }

    // ABtest cokkie dalete
    function deleteAbCookieColor() {
        $.removeCookie('button_color');
        $.removeCookie('greeting_edit');
        $.removeCookie('set_form');
    }

    // �إå���������Ͽmixpanel����
    $('#header_nav_sp_link').on('click', function() {
        mixpanel.track('������Ͽ ������Ͽ�ڡ������ܥܥ���򥯥�å�', {
            '�ܥ������': '���ޥۻ��Υإå�����˥塼��'
        });
    });
    $('#header_link_to_pla_inq').on('click', function() {
        mixpanel.track('�ץ���ʥץ��ڡ������ܥܥ���򥯥�å�', {
            '�ܥ������': '�إå�����˥塼��'
        });
    });

    deleteAbCookieColor();

    // SVGȽ��
    function checkSVG() {
        if (!Modernizr.svg) {
            $('img[src*="svg"]').attr('src', function() {
                return $(this).attr('src').replace(/\.svg$/, '.png');
            });
        }
    }

    checkSVG();

});