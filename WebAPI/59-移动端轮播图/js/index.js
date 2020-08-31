window.addEventListener('load', function() {
    // 获取元素
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    var ol = focus.children[1];
    // 获取focue宽度
    var w = focus.offsetWidth;

    // 利用定时器自动轮播图片
    var index = 0;
    var timer = setInterval(function() {
        index++;
        move(index, w);
    }, 2000);
    // 监听过度完成的事件
    ul.addEventListener('transitionend', function() {
        // 无缝滚动
        if (index >= 3) {
            index = 0;
            reset(index, w);
        } else if (index < 0) {
            index = 2;
            reset(index, w);
        }

        // 小圆点变化
        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current');
    });

    // 手指滑动轮播图
    var startX = 0;
    var moveX = 0;
    var flag = false;
    ul.addEventListener('touchstart', function(e) {
        startX = e.targetTouches[0].pageX;
        clearInterval(timer);
    });
    ul.addEventListener('touchmove', function(e) {
        moveX = e.targetTouches[0].pageX - startX;
        reset(index, w, moveX);
        flag = true;
        e.preventDefault();
    })
    ul.addEventListener('touchend', function(e) {
        // 如果移动距离大于50 播放上一张或下一张
        if (flag) {
            if (Math.abs(moveX) > 50) {
                if (moveX > 0) {
                    index--;
                } else {
                    index++;
                }
                move(index, w);
            } else {
                move(index, w);
            }
        }
        clearInterval(timer);
        var timer = setInterval(function() {
            index++;
            move(index, w);
        }, 2000);
    })

    function move(index, w) {
        var translatex = -index * w;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + translatex + 'px)';
    }

    function reset(index, w, moveX) {
        if (moveX) {
            var translatex = -index * w + moveX;
            ul.style.transition = 'none';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else {
            var translatex = -index * w;
            ul.style.transition = 'none';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }
    }
})