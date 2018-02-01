$(function(){
    var $navLi = $("#header .list-menu li.sub-li");
    $navLi.hover(function() {
        $(this).addClass('cur').siblings('li').removeClass('cur');
        $(this).children('.sub-nav').stop().slideDown();
    },function(){
        $(this).removeClass('cur');
        $(this).children('.sub-nav').stop().slideUp();
    });
});