// 1.通过模块的名字fs对模块进行引用
const fs = require('fs');

// 2.通过模块内部的readFile读取文件内容
fs.readFile('./01-helloworld.js','utf8',(err,doc) =>{
	// 如果文件出错 err是一个对象 包含错误信息
	// 如果文件读取正确 err为null  doc是文件读取的内容
	console.log(err);
	console.log(doc);
})
