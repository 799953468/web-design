$.ajax({
    type: 'get',
    url: '/posts',
    success: function (response) {
        var html = template('postsTpl', { data: response });
        $('#postsBox').html(html);
        var page = template('pageTpl', response);
        $('#page').html(html);
    }
});

// 分页
function changePage(page) {
    $.ajax({
        type: 'get',
        url: '/posts',
        data: {
            page: page
        },
        success: function (response) {
            var html = template('postsTpl', { data: response });
            $('#postsBox').html(html);
            var page = template('pageTpl', response);
            $('#page').html(html);
        }
    });
}
// 向服务器端发送请求 索要分类数据
$.ajax({
    type: 'get',
    url: '/categories',
    success: function (response) {
        var html = template('categoryTpl', { data: response });
        $('#categoryBox').html(html);
    }
});
// 当筛选表单提交时
$('#filterForm').on('submit', function () {
    // 获取选择的管理条件
    var formData = $(this).serialize();
    // 向服务器端发送请求 根据条件筛选
    $.ajax({
        type: 'get',
        url: '/posts',
        data: formData,
        success: function (response) {
            var html = template('postsTpl', { data: response });
            $('#postsBox').html(html);
            var page = template('pageTpl', response);
            $('#page').html(html);
        }
    });
    // 阻止表单默认提交
    return false;
});

