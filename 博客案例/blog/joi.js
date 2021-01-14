// 引入joi
const Joi = require('joi');

// 定义对象的验证规则
const schema = Joi.object({
    username: Joi.string().min(2).max(5)
})

async function run() {
    try {
        // 实施验证
        await schema.validate({ username: 'aadfdf' });
    } catch (ex) {
        console.log(ex);
    }
    console.log('验证通过');
}
run();
