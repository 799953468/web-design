// 从地址栏中获取文章id
var postId = getUrlParams('id');
// 评论是否需要审核
var review;
// 向服务器发送请求 根据文章id获取文章信息
$.ajax({
    type: 'get',
    url: '/posts' + postId,
    success: function (response) {
        var html = template('postTpl', response);
        $('#article').html(html);
    }
});
$('#article').on('click', '#like', function () {
    // 向服务器发送请求 执行点赞操作
    $.ajax({
        type: 'post',
        url: '/posts/fabulous/' + postId,
        success: function () {
            alert('点赞成功，感谢支持');
        }
    })
});
// 获取网站设置
$.ajax({
    type: 'get',
    url: '/settings',
    success: function (response) {
        review = response.review;
        // 判断管理员是否开启评论功能
        if (response.comment) {
            // 管理员开启了评论功能 渲染评论模版
            var html = template('commentTpl');
            $('#comment').html(html);
        }
    }
});
// 当评论表单发生提交行为的时候
$('#comment').on('submit', 'form', function () {
    // 获取用户输入的评论内容
    var content = $(this).find('textarea').val();
    // 代表评论状态
    var state;
    if (review) {
        // 要经过人工审核
        state = 0;
    } else {
        // 不需要经过人工审核
        state = 1;
    }
    // 向服务器端发送请求 执行评论操作
    $.ajax({
        type: 'get',
        url: '/comments',
        data: {
            content: content,
            post: postId,
            state: state
        },
        success: function () {
            alert('评论成功');
        },
        error: function () {
            alert('评论失败');
        }
    })
    // 阻止表单默认提交
    return false;
})
