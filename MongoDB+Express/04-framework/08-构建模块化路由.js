const express = require('express');

const app = express();

// 创建路由对象
const home = require('./route/home');
const admin = require('./route/admin');

app.use('/home', home);
app.use('/admin', admin);


app.listen(3000);
