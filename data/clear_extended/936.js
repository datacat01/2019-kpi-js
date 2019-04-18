/* ----------------------------------------------------------------------------------------------------
toggle button
---------------------------------------------------------------------------------------------------- */
$(function() {
    $(".toggle_button").click(function() {
        $(this).toggleClass("is-open").next().slideToggle("fast");
        return false;
    });
});

/* ----------------------------------------------------------------------------------------------------
slick（汎用）
---------------------------------------------------------------------------------------------------- */
$(function() {
    $('.slider').slick({
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
    });
});






/* ----------------------------------------------------------------------------------------------------
navHeaderまわり
---------------------------------------------------------------------------------------------------- */
// .navHeader_navButtonをクリックすると、その.navHeader_navButtonと次の.navHeader_navPanelに.is-activeを付けたり消したりする
// クリックした.navHeader_navButtonと違う.navHeader_navButtonをクリックしたら.is-activeを消す
$(function() {
    $(".navHeader_navButton").click(function() {
        var clickNavIcon = $(this);
        var clickNavList = $(this).next(".navHeader_navPanel");
        clickNavIcon.toggleClass("is-active");
        clickNavList.toggleClass("is-active");
        $(".navHeader_navButton").not(clickNavIcon).removeClass("is-active");
        $(".navHeader_navPanel").not(clickNavList).removeClass("is-active");
        return false;
    });
    //navHeader_navPanelがクリックされたらイベント中断
    $(".navHeader_navPanel").click(function(e) {
        e.stopPropagation();
    });
    //他がクリックされたら.is-activeを消す
    $(document).click(function(e) {
        $('.navHeader_navButton').removeClass("is-active");
        $('.navHeader_navPanel').removeClass("is-active");
    });
});

/* ----------------------------------------------------------------------------------------------------
navHeaderが途中で出てくるのとアンカーリンクのズレ修正
---------------------------------------------------------------------------------------------------- */
// Fixed Navigation & Scroll to Anchor
$(function() {
    var nav = $('.navHeader.is-scroll');
    nav.on('webkitAnimationEnd', function() {
        if (nav.hasClass('is-up')) {
            nav.addClass('disNone');
        }
    });
    var offsetTop = nav.offset().top;
    var floatMenu = function() {
        if ($(window).scrollTop() > 800) {
            nav.removeClass('is-up disNone');
            nav.addClass('is-down');
        } else {
            nav.removeClass('is-down');
            nav.addClass('is-up');
        }
    };
    $(window).scroll(floatMenu);
    $('body').bind('touchmove', floatMenu); // sp
    $('a[href^=#]').click(function() {
        var speed = 0;
        var href = $(this).attr('href');
        var target = $(href == '#' || href == '' ? 'html' : href);
        var position = target.offset().top;
        if (position > offsetTop) {
            position -= nav.outerHeight();
        }
        $('body,html').animate({
            scrollTop: position
        }, 600, 'swing');
        return false;
    });
});

/* ----------------------------------------------------------------------------------------------------
Page Top
---------------------------------------------------------------------------------------------------- */
// Button for Scrolling to Page Top
$(function() {
    var showFlag = false;
    var topBtn = $('.nav-pagetop');
    topBtn.css('bottom', '-100px');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1200) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({
                    'bottom': '20px'
                }, 200, 'swing');
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({
                    'bottom': '-100px'
                }, 200, 'swing');
            }
        }
    });
    topBtn.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500, 'swing');
        return false;
    });
});