const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// 创建用户集合规则
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        // 保证邮箱地址不重复
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // admin 超级管理员 normal 普通用户
    role: {
        type: String,
        required: true
    },
    // 0 启用 1 禁用
    state: {
        type: Number,
        default: 0
    }
});

// 创建集合
const User = mongoose.model('User', userSchema);
async function createUser() {
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash('123456', salt);
    const user = await User.create({
        username: 'admin',
        email: '123@qq.com',
        password: pass,
        role: 'admin',
        state: 0
    })
}
// createUser();
// 将用户集合作为模块成员导出
module.exports = {
    User
}
