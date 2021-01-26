$(function() {
    // 当我们点击li 不需要执行页面滚动事件
    // 节流阀 互斥锁
    var flag = true;
    var toolTop = $(".recommend").offset().top;
    toggleTool();
    $(window).scroll(function() {
        toggleTool();
        if (flag) {
            $(".floor .w").each(function(i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
                }
            });
        }
    });

    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }

    // 电梯导航
    $(".fixedtool li").click(function() {
        flag = flase;
        var current = $(".floor .w").eq($(this).index()).offset().top;
        $("body, html").stop().animate({
            scrollTop: current
        }, function() {
            flag = true;
        });

        // 当前li 添加类名 兄弟移除
        $(this).addClass("current").siblings().removeClass();
    })
})