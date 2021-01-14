const bcrypt = require('bcrypt');
const { User } = require('../../model/user');
module.exports = async (req, res) => {
    // 接收请求参数
    const { email, password } = req.body;
    if (email.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).render('admin/error', { msg: '邮件地址或密码错误' });
    }
    // 根据邮箱地址查询用户信息
    let user = await User.findOne({ email })
    if (user) {
        let isValid = await bcrypt.compare(password, user.password);
        if (isValid) {
            // 将用户名存储在浏览器对象中
            req.session.username = user.username;
            req.app.locals.userInfo = user;
            // 重定向到用户列表页面
            res.redirect('/admin/user');
        } else {
            res.status(400).render('admin/error', { msg: '邮件地址或密码错误' });
        }
    } else {
        res.status(400).render('admin/error', { msg: '邮件地址或密码错误' });
    }
}
