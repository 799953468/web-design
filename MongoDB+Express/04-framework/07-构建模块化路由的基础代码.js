const express = require('express');

const app = express();

// 创建路由对象
const home = express.Router();
app.use('/home', home);
home.get('/index', (req, res) => {
    res.send('欢迎来到博客首页');
});

app.listen(3000);
