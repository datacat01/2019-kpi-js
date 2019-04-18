// page Topフェードイン・アウト
$(function() {
    $(window).bind("scroll", function() {
        if ($(this).scrollTop() > 100) {
            $("p#pagetop").fadeIn();
        } else {
            $("p#pagetop").fadeOut();
        }
        scrollHeight = $(document).height();
        // ウィンドウの高さ+スクロールした高さ→ 現在のトップからの位置
        scrollPosition = $(window).height() + $(window).scrollTop();
        footHeight = $("footer").height();

        // スクロール位置がフッターまで来たら
        if (scrollHeight - scrollPosition <= footHeight) {
            $("p#pagetop a").css({
                "position": "absolute",
                "bottom": "0"
            });
        } else {
            $("p#pagetop a").css({
                "position": "fixed",
                "bottom": "auto"
            });
        }
    });
});

$(function() {
    $("a[href^=#]:not(#mainEcframe2 a)").click(function() {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });
});