const { User } = require('../../model/user');
module.exports = (req, res) => {
    // 获取id
    await User.findOneAndDelete({ _id: req.query.id });
    res.redirect('/admin/user');
}
