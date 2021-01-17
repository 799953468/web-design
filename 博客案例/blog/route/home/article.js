const { Article } = require('../../model/article');
const { Comment } = require('../../model/comment');
module.exports = async (req, res) => {
    // 接收文章id
    const id = req.query.id;
    // 根据id查询文章
    let article = await Article.findOne({ _id: id }).populated('author');
    // 查询文章的评论信息
    let comments = await Comment.find({ aid: id }).populate('uid');
    res.render('home/article', {
        article,
        comments
    })
}
