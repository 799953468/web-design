const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.get('/first', (req, res) => {
    res.send('Hello Ajax');
});
app.get('/responseDate', (req, res) => {
    res.send({ "name": "zs" });
});
app.get('/get', (req, res) => {
    res.send(req.query);
});
app.post('/post', (req, res) => {
    res.send(req.body);
});
app.post('/json', (req, res) => {
    res.send(req.body);
});
app.get('/error', (req, res) => {
    console.log(abc);
    res.status(400).send('not ok');
});
app.get('/cache', (req, res) => {
    fs.readFile('./test.txt', (err, result) => {
        res.send(result);
    })
});
app.get('/first', (req, res) => {
    res.send('4');
});
app.listen(3000);
console.log('服务器启动成功');
