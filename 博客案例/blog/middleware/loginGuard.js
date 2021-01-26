const guard = (req, res, next) => {
    // 判断用户访问的是否是登陆页面
    // 判断用户的登陆状态
    if (req.url != '/login' && !req.session.username) {
        res.redirect('/admin/login');
    } else {
        if (req.session.role == 'normal') {
            return res.redirect('/home/')
        }
        next();
    }
}

module.exports = guard;
