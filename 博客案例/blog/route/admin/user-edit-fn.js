const { User, validateUser } = require('../../model/user');
const bcrypt = require('bcrypt');

module.exports = async (req, res, next) => {
    try {
        await validateUser(req.ody);
    } catch (e) {
        // 验证没有通过
        // e.message
        // return res.redirect(`/admin/user-edit?message=${e.message}`)
        return next(JSON.stringify({ path: '/admin/user-edit', message: e.message }));
    }

    // 根据邮箱地址查询用户是否存在
    let user = await User.findOne({ email: req.body.email });

    if (user) {
        // return res.redirect('/admin/user-edit?message=邮箱地址已经被占用');
        return next(JSON.stringify({ path: '/admin/user-edit', message: '邮箱地址已经被占用' }));
    }

    // 对密码进行加密
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    req.body.password = password;
    // 将用户信息添加到数据库
    await User.create(req.body);
    res.redirect('/admin/user');
}
