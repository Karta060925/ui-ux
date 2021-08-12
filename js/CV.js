$(document).ready(function () {
    
    $(window).on("scroll",function(){
        var scrollDistance = $(window).scrollTop();
        var $header = $(".js-header");
        if(scrollDistance > 80){
            $header.addClass("header-color");
        }
        else{
            $header.removeClass("header-color");
        }
    })

    // wow plugin
    // if(screen > 768){
    new WOW().init();
    // }

    // stellar plugin 
    // if(screen > 768){
    $(window).stellar();
    // }
});