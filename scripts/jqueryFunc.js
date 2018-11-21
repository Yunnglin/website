// JavaScript source code
$(document).ready(function () {
    $("#mobile-nav-taggle").click(function () {
        var mobileMenu = $("#mobile-menu");
        var nav_btn = $("#mobile-nav-taggle");
        if (mobileMenu.hasClass("show-nav")) {
            setTimeout(function () {
                mobileMenu.addClass("hide-nav").removeClass("show-nav");
                nav_btn.addClass("hide-taggle").removeClass("show-taggle");
            }, 100)
        }
        else {
            setTimeout(function () {
                mobileMenu.addClass("show-nav").removeClass("hide-nav");
                nav_btn.addClass("show-taggle").removeClass("hide-taggle");
            }, 100)
        }
    })
});