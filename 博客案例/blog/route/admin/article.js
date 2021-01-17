const { Article } = require('../../model/article');
// 引入mongoose-sex-page
const pagination = require('mongoose-sex-page');
module.exports = async (req, res) => {
    // 接收客户端传递过来的页码
    const page = req.query.page;
    // 标识 当前访问的是用户管理页面
    req.app.locals.currentLink = 'article';
    // page 指定当前页 size 每页显示的数据条数 display 客户端要显示的页面数量 exec 向数据库发送查询请求
    // 查询所有文章数据
    let articles = await pagination(Article).find().page(page).size(2).display(3).populate('author').exec();
    // 渲染文章列表页面模板
    res.render('admin/article', {
        articles: articles
    });
}
