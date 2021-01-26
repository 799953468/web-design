const express = require('express');
const path = require('path');
const fs = require('fs');
const formidable = require('formidable');
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
app.post('/formData', (req, res) => {
    // 创建formidable表单解析对象
    const form = new formidable.IncomingForm();
    // 解析客户端传递过来的FormData对象
    form.parse(req, (err, fields, files) => {
        res.send(fields);
    });
});
app.post('/upload', (req, res) => {
    // 创建formidable表单解析对象
    const form = new formidable.IncomingForm();
    // 设置客户端上传文件的存储路径
    form.uploadDir = path.join(__dirname, 'public', 'uploads');
    // 保留上传文件的后缀
    form.keepExtensions = true;
    // 解析客户端传递过来的FormData对象
    form.parse(req, (err, fields, files) => {
        res.send({
            path: files.attrName.path.split('public')[1]
        });
    });
});
app.listen(3000);
console.log('服务器启动成功');
