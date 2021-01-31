// 当管理员选择文件的时候
$('#file').on('change', function () {
    // 用户选择到的文件
    var file = this.files[0];
    // 创建formData对象实现二进制文件上传
    var formData = new FormData();
    // 将管理员选择到的文件添加到formData对象中
    formData.append('image', file);
    // 向服务器端发送请求
    $.ajax({
        type: 'post',
        url: '/upload',
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            $('#image').val(response[0].image);
        }
    })
});
// 当轮播图表单发生提交行为时
$('#slidesForm').on('submit', function () {
    // 获取在表单中输入的内容
    var formData = $(this).serialize();
    // 向服务器端发送请求 添加轮播图数据
    $.ajax({
        type: 'post',
        url: '/slides',
        data: formData,
        success: function () {
            location.reload();
        }
    })
    // 阻止表单默认提交行为
    return false;
});
// 向服务器端发送请求索要图片轮播列表数据
$.ajax({
    type: 'get',
    url: '/slides',
    success: function (response) {
        var html = template('slidesTpl', { data: response });
        $('#slidesBox').html(html);
    }
});
// 当删除按钮被点击时
$('slidesTpl').on('click', '.delete', function () {
    if (confirm('您是否要进行删除操作?')) {
        // 获取要删除的id
        var id = $(this).attr('data-id');
        $.ajax({
            type: 'delete',
            url: '/slides/' + id,
            success: function () {
                location.reload();
            }
        })
    }
})
