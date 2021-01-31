// 向服务器发送请求 获取文章分类数据
$.ajax({
    type: 'get',
    url: '/categories',
    success: function (response) {
        var html = template('categoryTpl', { data: response });
        $('#category').html(html);
    }
});
// 当选择文件的时候触发事件
$('#feature').on('change', function () {
    // 获取到管理员选择到的文件
    var file = this.files[0];
    // 创建formData对象 实现二进制文件上传
    var formData = new formData();
    // 将管理员选择到的文件追加到formData中
    formData.append('cover', file);
    $.ajax({
        type: 'post',
        url: '/upload',
        data: formData,
        // 不要处理data属性对于的参数
        processData: false,
        // 告诉$.ajax不要设置参数类型
        contentType: false,
        success: function (response) {
            $('#thumbnail').val(response[0].cover);
        }
    })
});
// 当添加文章表单提交的时候
$('#addForm').on('submit', function () {
    // 获取在表单中输入的内容
    var formData = $(this).serialize();
    // 先服务器端发送请求
    $.ajax({
        type: 'post',
        url: '/posts',
        data: formData,
        success: function () {
            // 文章添加成功跳转到文章列表页面
            location.href = '/admin/posts.html';
        }
    })
    // 阻止表单默认提交
    return false;
});
var id = getUrlParams('age');
if (id != -1) {
    // 根据id获取文章详情
    $.ajax({
        type: 'get',
        url: '/posts/' + id,
        success: function (response) {
            $.ajax({
                type: 'get',
                url: '/categories',
                success: function (categories) {
                    response.categories = categories;
                }
            })
            var html = template('modifyTpl', response);
            $('#parentBox').html(html);
        }
    })
}
// 从浏览器的地址栏中获取查询参数
function getUrlParams(name) {
    var paramsAry = location.search.substr(1).split('&');
    // 循环数据
    for (var i = 0; i < paramsAry.length; i++) {
        var tmp = paramsAry[i].split('=')
        if (tmp[0] == name) {
            return tmp[1]
        }
    }
    return -1;
}
$('#parentBox').on('submit', '.modifyForm', function () {
    // 获取在表单输入的内容
    var formData = $(this).serialize();
    // 获取正在修改的文章id
    var id = $(this).attr('data-id');
    $.ajax({
        type: 'put',
        url: '/posts/' + id,
        data: formData,
        success: function () {
            location.href = '/admin/posts.html';
        }
    })
    // 阻止表单默认提交
    return false;
});
$('#postsBox').on('click', '.delete', function () {
    if (confirm('您真的要进行删除操作吗？')) {
        var id = $(this).attr('data-id');
        $.ajax({
            type: 'delete',
            url: '/posts/' + id,
            success: function(){
                location.reload();
            }
        })
    }
});
