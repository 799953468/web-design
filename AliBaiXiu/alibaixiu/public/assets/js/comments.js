// 向服务器端发送请求 获取评论数据
$.ajax({
    type: 'get',
    url: '/comments',
    success: function (response) {
        var html = template('commentsTpl', response);
        $('#commentsBox').html(html);
        var pageHTML = template('pageTpl', response);
        $('#pageBox').html(html);
    }
});
// 分页
function changePage(page) {
    $.ajax({
        type: 'get',
        url: '/comments',
        data: {
            page: page
        },
        success: function (response) {
            var html = template('commentsTpl', response);
            $('#commentsBox').html(html);
            var pageHTML = template('pageTpl', response);
            $('#pageBox').html(html);
        }
    })
}
// 当审核按钮被点击的时候
$('#commentsBox').on('click', '.status', function () {
    // 获取当前评论的状态
    var status = $(this).attr('data-status');
    // 获取要修改评论的id
    var id = $(this.attr('data-id'));
    // 向服务器端发送请求 更改评论状态
    $.ajax({
        type: 'put',
        url: '/comments/' + id,
        data: {
            state: status == 0 ? 1 : 0
        },
        success: function () {
            location.reload();
        }
    })
});
//
$('#commentsBox').on('click', '.delete', function () {
    if (confirm('您真的要执行删除操作吗？')) {
        // 获取要删除的评论的id
        var id = $(this).attr('data-id');
        $.ajax({
            type: 'delete',
            url: '/comments/' + id,
            success: function () {
                location.reload();
            }
        })
    }
});
