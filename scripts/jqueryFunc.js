// JavaScript source code
$(document).ready(function () {

    //�������໬
    $("#mobile-nav-taggle").click(function () {
        var mobileMenu = $("#mobile-menu");
        if (mobileMenu.hasClass("show-nav")) {
            setTimeout(function () {
                mobileMenu.addClass("hide-nav").removeClass("show-nav");
                // document.getElementById("mobile-menu").style.webkitTransform = "translateX(-100px)";
            }, 0)
            setTimeout(function () {
                if (mobileMenu.hasClass("hide-nav")) {
                    document.getElementById("mobile-menu").style.visibility = "hidden"; //���ñ�ǩ����
                }
            }, 500)
        }
        else {
            setTimeout(function () {
                mobileMenu.addClass("show-nav").removeClass("hide-nav");
                //document.getElementById("mobile-menu").style.width="200px";
            }, 0)
            document.getElementById("mobile-menu").style.visibility = "visible"; //���ñ�ǩ��ʾ
        }
    });

    //��������
    $('body').scrollspy({ target: '#nav-bar' });


    //ƽ������
    var $root = $('html, body');  //ѡ������������������ÿ�ε��ʱ�Ͳ���Ҫ�����²�����
    $('.nav-link').click(function () {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
           window.location.hash = href;
        });
        return false;
    });

    $('.overlay-figure').hover(function () {
        $('.head-img').attr("src", "resource/picture/nowisee1.jpg");
    },
        function () {
            $('.head-img').attr("src", "resource/picture/nowisee3.jpg");
            console.log("1");
        }
    );

});