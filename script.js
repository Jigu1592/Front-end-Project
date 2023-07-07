$(function(){
    $(document).scroll(function(){
        var $nav = $('.nav');
        //$nav.toggleclass('scrolled',$(this).scrollTop() > $nav.height());
        $nav.toggleClass('scrolled',$(this).scrollTop()>$nav.height());
    });
});