const express = require('express');

const home = express.Router();

home.get('/',require('./home/index'))

// 博客前台文章详情展示页面
home.get('/article',require('./home/article'))
// 创建评论路由
home.post('/comment',require('./home/comment'))
module.exports = home;
