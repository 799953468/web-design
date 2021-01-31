// 向服务器端发送请求 索要随机推荐数据
$.ajax({
    type: 'get',
    url: '/posts/random',
    success: function (response) {
        var randomTpl = `
            {{each data}}
            <li>
            <a href="detail.html?id={{$value._id}}">
                <p class="title">{{$value.title}}</p>
                <p class="reading">阅读({{$value.meta.views}})</p>
                <div class="pic">
                    <img src="{{$value.thumbnail}}" alt="">
                </div>
            </a>
            </li>
            {{/each}}
        `;
        var html = template.render(randomTpl, { data: response });
        $('#randomBox').html(html);
    }
});
$.ajax({
    type: 'get',
    url: '/comments/lasted',
    success: function (response) {
        var commentTpl = `
            {{each data}}
            <li>
                <a href="javascript:;">
                    <div class="avatar">
                        <img src="{{$value.author.avatar}}" alt="">
                    </div>
                    <div class="txt">
                        <p>
                            <span>{{$value.author.nickName}}</span>{{$import.formateDate($value.createAt)}}说:
                        </p>
                        <p>{{$value.content}}</p>
                    </div>
                </a>
            </li>
            {{/each}}
        `;
        var html = template.render(commentTpl, { data: response });
        $('#commentBox').html(html);
    }
});
$.ajax({
    type: 'get',
    url: '/categories',
    success: function (response) {
        var navTpl = `
            <li>
                <a href="list.html?categoryId={{$value._id}}">
                    <i class="fa {{$value.className}}"></i>{{$value.title}}
                </a>
            </li>
        `;
        var html = template.render(navTpl, { data: response });
        $('#navBox').html(html);
        $('#topNavBox').html(html)
    }
});
// 获取搜索表单 并添加搜索事件
$('.search form').on('submit', function () {
    // 获取到用户在表单中搜索的关键字
    var key = $(this).find('.keys').val();
    // 跳转到搜索结果页面
    location.href = "/search.html?key=" + key;
    // 阻止表单默认提交行为
    return false;
});
