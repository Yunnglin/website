$(document).ready(function () {
    $("#1").click(function () {
        if ($("#div").hasClass("do-blur")) {
            setTimeout(function () {
                $("#div").removeClass("do-blur").addClass("dis-blur");
            }, 100)
        }
        if ($("iframe").hasClass("show")) {
            setTimeout(function () {
                $("iframe").addClass("fade").removeClass("show");
            }, 100)
            setTimeout(function () {
                $("iframe").css("visibility", "hidden");
            }, 1000)
        }
    })

    $("#2").click(function () {
        setTimeout(function () {
            $("#div").addClass("do-blur").removeClass("dis-blur");
        }, 100)
        setTimeout(function () {
            $("iframe").addClass("show").removeClass("fade");
        }, 100)
        setTimeout(function () {
            $("iframe").css("visibility", "visible");
        }, 100)
    })

    $("a").click(function () {
        var numOfA = ((this.id).split('e'))[1];
        if (numOfA >= 0 && numOfA < 99) {
            
            $("iframe").attr("id", numOfA).attr("src", "Page.html");

            console.log("num of movie: " + numOfA);
            console.log("iframe id = " + $("iframe").id);

            setTimeout(function () {
                $("#div").addClass("do-blur").removeClass("dis-blur");
            }, 100)
            setTimeout(function () {
                $("iframe").addClass("show").removeClass("fade");
            }, 100)
            setTimeout(function () {
                $("iframe").css("visibility", "visible");
            }, 100)
        }
    });
});
