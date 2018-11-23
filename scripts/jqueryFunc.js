// JavaScript source code
$(document).ready(function () {
    $("#mobile-nav-taggle").click(function () {
        var mobileMenu = $("#mobile-menu");
        //var nav_btn = $("#mobile-nav-taggle");
        if (mobileMenu.hasClass("show-nav")) {
            setTimeout(function () {
                mobileMenu.addClass("hide-nav").removeClass("show-nav");
               // document.getElementById("mobile-menu").style.webkitTransform = "translateX(-100px)";
            }, 100)
            setTimeout(function () {
                document.getElementById("mobile-menu").style.visibility = "hidden"; //设置标签隐藏
            }, 500)
          
           
        }
        else {
            setTimeout(function () {
                mobileMenu.addClass("show-nav").removeClass("hide-nav");
                //document.getElementById("mobile-menu").style.width="200px";
            }, 100)
            document.getElementById("mobile-menu").style.visibility = "visible"; //设置标签显示
        }
    })

    $('body').scrollspy({ target: '#nav-bar' })
});