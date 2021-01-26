const express = require('express');
const path = require('path');
const app = express();

app.engine('art', require('express-art-template'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'art');

app.get('/index', (req, res) => {
    res.render('index', {
        msg: 'message'
    })
})

app.get('/list', (req, res) => {
    res.render('list', {
        msg: 'list page'
    })
})

app.listen(3000)
