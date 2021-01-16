const { Article } = require('../../model/article');
module.exports = async (req, res) => {
    // 标识 当前访问的是用户管理页面
    req.app.locals.currentLink = 'article';
    // 查询所有文章数据
    let articles = await Article.find().populate('author');
    // 渲染文章列表页面模板
    res.render('admin/article', {
        articles: articles
    });
}
