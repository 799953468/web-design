module.exports = (req, res) => {
    // 标识 当前访问的是用户管理页面
    req.app.locals.currentLink = 'article-edit';
    res.render('admin/article-edit');
}
