const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 20
	},
	age: {
		type: Number,
		min: 18,
		max: 80
	},
	password: String,
	email: String,
	hobbies: [String]
});

// 创建集合
const User = mongoose.model('User', UserSchema);

module.exports = User;
