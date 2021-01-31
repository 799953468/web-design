// 向服务器请求数据 索要热门推荐列表
$.ajax({
    type: 'get',
    url: '/post/recommend',
    success: function (response) {
        var recommendTpl = `
        {{each data}}
        <li>
            <a href="detail.html?iid={{$value._id}}">
                <img src="{{$value.thumbnail}}" alt="">
                <span>{{$value.title}}</span>
            </a>
        </li>
        {{/each}}
        `;
        var html = template.render(recommendTpl, { data: response });
        $('#recommendBox').html(html);
    }
})
