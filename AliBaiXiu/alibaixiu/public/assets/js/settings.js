// 当选择logo图片时
$('#logo').on('change', function () {
    // 获取到选择的图片
    var file = this.files[0]
    // 创建formData对象 实现二进制上传
    var formData = new formData;
    // 将选择的文件添加到formData中
    formData.append('logo', file);
    // 向服务器端发送请求 实现文件上传
    $.ajax({
        url: '/upload',
        type: 'post',
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            $('#hiddenLoge').val(response[0].logo);
            // 将logo图片显示在页面中
            $('#preview').attr('src', response[0].logo);
        }
    })
});
// 当网站设置表单发送提交行为时
$('#settingsForm').on('submit', function () {
    // 获取在表单中输入的内容
    var formData = $(this).serialize();
    // 向服务器端发送请求实现网站设置数据添加功能
    $.ajax({
        type: 'post',
        url: '/settings',
        data: formData,
        success: function () {
            location.reload();
        }
    })
    // 阻止表单默认提交行为
    return false;
});
// 向服务器发送请求 获取网站设置数据
$.ajax({
    type: 'get',
    url: 'settings',
    success: function (response) {
        if (response) {
            // 将logo地址储存在隐藏域中
            $('#hiddenLogo').val(response.logo);
            // 将logo显示在页面中
            $('#preview').attr('src', response.logo);
            // 将网站标题显示在页面中
            $('input[name="title"]').val(response.title);
            // 将是否开启评论共功能显示在页面中
            $('input[name="comment"]').prop('checked', response.comment);
            // 将评论是否经过人工审核显示在页面中
            $('input[name="review"]'), prop('checked', response.review);
        }
    }
})
