$('#logout').on('click', function () {
    var isConfirm = confirm('您真的要退出吗？');
    if (isConfirm) {
        // 用户点击了确定按钮
        $.ajax({
            url: '/logout',
            type: 'post',
            success: function () {
                location.href = 'login.html';
            },
            error: function () {
                alert('退出失败');
            }
        })
    }
});
// 处理日期时间格式
function formateDate(date) {
    // 嫁给你日期时间字符串转个成日期对象
    date = new Date(date);
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + data.getDate();
}
// 向服务器端发送请求 索要登陆用户信息
$.ajax({
    type: 'get',
    url: '/users/' + userId,
    success: function (response) {
        $('#avatar').attr('src', response.avatar);
        $('.profile .name').html(response.nickName);
    }
})
