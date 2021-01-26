// 引入http模块
const http = require('http');
const path = require('path');
const serverStatic = require('serve-static');
const template = require('art-template');
const dateFormat = require('dateformat');
const router = require('./route/index');
// 实现静态资源访问服务
const server = serverStatic(path.join(__dirname, 'public'));

// 配置模板的根目录
template.defaults.root = path.join(__dirname, 'views');
template.defaults.imports.dateFormat = dateFormat;

// 数据库连接
require('./model/connect');

// 创建网站服务器
const app = http.createServer();

// 当客户端访问服务器端的时候
app.on('request', (req, res) => {
    router(req, res, () => { });
    server(req, res, () => { })
});

app.listen(80);
console.log('服务器启动成功');
