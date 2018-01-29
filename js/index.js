/* 首页banner */

// window.onload = function () {
//     var oa = $(window).height();
//     $(".index_banner .slide").height(oa);
// }
/* 视频控制 */
$(document).ready(function () {
    $("#home_slider .vol").click(function () {
        $("#banner_video").muted=true;
        }
    );
});