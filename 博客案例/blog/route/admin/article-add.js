const formidabel = require('formidable');
const path = require('path');
const { title } = require('process');
const { Article } = require('../../model/article');
module.exports = (req, res) => {
    // 创建表单解析对象
    const form = new formidabel.IncomingForm();
    // 配置上传文件的存放位置
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'upload');
    // 保留上传文件的后缀
    form.keepExtensions = true;
    // 解析表单
    form.parse(req, async (err, fields, files) => {
        await Article.create({
            title: fields.title,
            author: fields.author,
            publishDate: fields.publishDate,
            cover: files.cover.path.split('public')[1],
            content: fields.content
        });
        res.redirect('/admin/article');
    })
}
