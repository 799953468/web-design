// 当添加分类表单发生提交行为的时候
$('#addCategory').on('submit', function () {
    // 获取用户在表单中输入的内容
    var formData = $(this).serialize();
    // 向服务器发送请求
    $.ajax({
        type: 'post',
        url: '/categories',
        data: formData,
        success: function () {
            location.reload();
        }
    })
    // 阻止表单默认提交
    return false;
});
// 发送ajax请求 向服务器端索要分类列表数据
$.ajax({
    type: 'get',
    url: '/categories',
    success: function (response) {
        var html = template('categoryTpl', { data: response });
        // 将拼接好的内容放到页面中
        $('#categoryBox').html(html);
    }
});
// 为编辑按钮添加点击事件
$('#categoryBox').on('click', '.edit', function () {
    var id = $(this).attr('data-id');
    $.ajax({
        type: 'get',
        url: '/categories/' + id,
        success: function (response) {
            var html = template('modifyCategoryTpl', response);
            $('#formBox').html(html);
        }
    })
});
// 当修改分类数据表单发送提交行为的时候
$('#formBox').on('submit', '#modifyCategoryTpl', function () {
    // 获取在表单输入的内容
    var formData = $(this).serialize();
    // 获取要修改的id
    var id = $(this).attr('data-id');
    // 发送请求 修改分类数据
    $.ajax({
        type: 'put',
        url: '/categories/' + id,
        data: formData,
        success: function () {
            location.reload();
        }
    })
    // 阻止表单的默认提交行为
    return false;
});
// 当删除按钮被点击的时候
$('#categoryBox').on('click', '.delete', function () {
    // 获取要修改的id
    var id = $(this).attr('data-id');
    if (confirm('您真的要执行删除操作吗？')) {
        $.ajax({
            type: 'delete',
            url: '/categories/' + id,
            success: function () {
                location.reload();
            }
        })
    }
})
