// 引入rooter对象
const getRouter = require('router');
const template = require('art-template');
const querystring = require('querystring');
// 获取路由对象
const router = getRouter();
// 学生信息集合
const Student = require('../model/user');
// 呈递学生档案信息页面
router.get('/add', (req, res) => {
    let html = template('index.art', {});
    res.end(html);
})
// 呈递学生档案列表页面
router.get('/list', async (req, res) => {
    // 查询学生信息
    let students = await Student.find()
    let html = template('list.art', {
        students: students
    });
    res.end(html);
})
// 实现学生信息添加
router.post('/add', (req, res) => {
    // 接收post请求参数
    let formData = '';
    req.on('data', param => {
        formData += param;
    });
    req.on('end', async () => {
        await Student.create(querystring.parse(formData))
        res.writeHead(301, {
            Location: '/list'
        });
        res.end()
    })
});
module.exports = router;
