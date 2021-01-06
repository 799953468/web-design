// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
	// 连接成功
	.then(() => console.log('数据库连接成功'))
	// 连接失败
	.catch(err => console.log(err, '数据库连接失败'));

// 创建集合规则
const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	email: String,
	password: String,
	hobbies: [String]
});

// 使用规则创建集合
const User = mongoose.model('User', userSchema);

// 查询用户集合中的所有文档
// User.find().then(result => console.log(result))

// 通过_id字段查询文档
// User.find({ _id: '5c09f267aeb04b22f8460968' }).then(result => console.log(result))

// findOne 方法返回一条文档 默认返回当前集合中的第一条文档
// User.findOne({ name: '李四' }).then(result => console.log(result))

// 查询用户集合中年龄字段大于20且小于40的文档
// User.find({ age: { $gt: 20, $lt: 40 } }).then(result => console.log(result))
// User.find({ hobbies: { $in: ['足球'] } }).then(result => { console.log(result) })

// 选择要查询的字段
// User.find().select('name email -_id').then(result => { console.log(result) })

// 将数据库按照年龄升序排序
// User.find().sort('age').then(result => console.log(result))
// 将数据库按照年龄降序排序
// User.find().sort('-age').then(result => console.log(result))

// skip 跳过多少数据 limit 限制查询数量
User.find().skip(2).limit(3).then(result => { console.log(result) })
