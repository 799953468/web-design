const express = require('express');
const path = require('path');
const app = express();

app.engine('art', require('express-art-template'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'art');

app.locals.users = [{
    name: 'zhangsan',
    age: 20
}, {
    name: 'lisi',
    age: 21
}]

app.get('/index', (req, res) => {
    res.render('index', {
        msg: '首页'
    })
})

app.get('/list', (req, res) => {
    res.render('list', {
        msg: '列表页'
    })
})

app.listen(3000)
