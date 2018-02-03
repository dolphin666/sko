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
$(function () {
    // $(".return-webtop").on('click', function () {
    //     $("body,html").stop().animate({scrollTop: 0}, 500);

    $(".r_float div.litel").hover(function () {
        var _this = $(this);
        _this.removeClass("hover").stop().animate({left: -194}, 400)
    }, function () {
        var _this = $(this);
        _this.stop().animate({left: 0}, 400, function () {
            _this.addClass("hover")
        })
    })
    $(".r_float div.lia").hover(function () {
        $(this).removeClass("hover").stop().animate({left: -10}, 400)
    }, function () {
        var _this = $(this);
        _this.stop().animate({left: 0}, 400, function () {
            _this.addClass("hover")
        })
    })
})