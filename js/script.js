$(document).ready(function () {
    $(".menu-box").hide();
    $(".header__button").click(function(){
        $(".menu-box").slideDown(500);
    });
    $(document).mouseup(function (e) { 
        var box = $(".menu-box");
        if(!box.is(e.target) && box.has(e.target).length === 0){
            box.slideUp(500);
        }
    });
});