/* 首页banner */

window.onload = function () {
    var oa = $(window).height();
    $(".index_banner .slide").height(oa);
}
/* 视频控制 */
$(document).ready(function () {
    $("#home_slider i.vol").click(function () {
        console.log("11");
        $(this).children("video").paused=true;
        }
    );
});
/*myVid=document.getElementById("home_slider");
function enableMute()
{
    myVid.muted=true;
}*/
