const http = require('http');
// 处理请求参数模块
const querystring = require('querystring');
// app对象就是网站服务器对象
const app = http.createServer();

app.on('request', (req, res) => {
    // post参数是通过时间的方式接收的
    // data 但请求参数传递的时候触发data事件
    // end 但参数传递完成时触发end事件
    let postParams = '';
    req.on('data', params => {
        postParams += params;
    });
    req.on('end', () => {
        console.log(querystring.parse(postParams));
    });

    res.end('ok');
});
app.listen(3000);
console.log('网站服务器启动成功');
