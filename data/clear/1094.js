var $j = jQuery.noConflict();

$j(function() {

    // jQuery compatibility:
    // .delegate() works with jQuery 1.4.3+
    // .on() works with jQuery 1.7+

    // Twitter
    $j('body').delegate('.twitter', 'click', function(e) {
        //$j('body').on('click', '.twitter', function (e) {
        var $this = $j(this),
            tweet = encodeURIComponent($this.data('tweet')),
            hashtags = $this.data('hashtags'),
            via = $this.data('via');

        window.open(
            this.href + '&text=' + tweet, //+ '&hashtags=' + hashtags + '&via=' + via,
            'tweetDialog',
            'height=450, width=550, toolbar=0, status=0'
        );
        e.preventDefault();
        e.stopPropagation();
    });

    // Pinterest
    $j('body').delegate('.pinterest', 'click', function(e) {
        //$j('body').on('click', '.pinterest', function (e) {
        var $this = $j(this),
            media = encodeURIComponent($this.data('media')),
            description = encodeURIComponent($this.data('description'));

        e.preventDefault();

        window.open(
            this.href + '&media=' + media + '&description=' + description,
            'pinterestDialog',
            'height=400, width=700, toolbar=0, status=0, scrollbars=1'
        );
    });

    // Facebook
    $j('body').delegate('.facebook', 'click', function(e) {
        //$j('body').on('click', '.facebook', function (e) {
        var $this = $j(this),
            //name = encodeURIComponent($this.data('name')),
            //picture = encodeURIComponent($this.data('picture')),
            //caption = encodeURIComponent($this.data('caption')),
            redir = encodeURIComponent($this.data('redir'));

        e.preventDefault();

        window.open(
            this.href + '&app_id=267536097182931&display=popup',
            '',
            'resizable=no,status=no,location=no,toolbar=no,menubar=no,fullscreen=no,scrollbars=no,dependent=no,width=700,height=300'
        );
    });

    // Google Plus
    $j('body').delegate('.google', 'click', function(e) {
        //$j('body').on('click', '.google', function (e) {
        e.preventDefault();

        window.open(
            this.href,
            'gplusDialog',
            'height=600, width=600, toolbar=0, status=0'
        );
    });

    // LinkedIn
    $j('body').delegate('.linkedin', 'click', function(e) {
        //$j('body').on('click', '.linkedin', function (e) {
        e.preventDefault();

        window.open(
            this.href,
            'linkedIn',
            'height=500, width=550, toolbar=0, status=0'
        );
    });


});